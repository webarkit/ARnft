import Container from './utils/html/Container';
import Stats from 'stats.js';
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
import { getConfig } from "./utils/ARUtils";
import NFTWorker from './NFTWorker';
import { v4 as uuidv4 } from 'uuid';
import packageJson from '../package.json';
const { version } = packageJson;
export default class ARnft {
    constructor(width, height, configUrl) {
        this.width = width;
        this.height = height;
        this.configUrl = configUrl;
        this.listeners = {};
        this.uuid = uuidv4();
        this.version = version;
        console.log('ARnft ', this.version);
    }
    static async init(width, height, markerUrl, configUrl, stats) {
        const _arnft = new ARnft(width, height, configUrl);
        return await _arnft._initialize(markerUrl, stats).catch((error) => {
            console.error(error);
            return Promise.reject(false);
        });
    }
    static async init_multi(width, height, markerUrls, names, configUrl, stats) {
        const _arnft = new ARnft(width, height, configUrl);
        return await _arnft._initialize_multi(markerUrls, names).catch((error) => {
            console.error(error);
            return Promise.reject(false);
        });
    }
    async _initialize_multi(markerUrls, names) {
        var event = new Event("initARnft");
        document.dispatchEvent(event);
        console.log('ARnft init() %cstart...', 'color: yellow; background-color: blue; border-radius: 4px; padding: 2px');
        getConfig(this.configUrl);
        document.addEventListener('getConfig', async (ev) => {
            this.appData = ev.detail.config;
            Container.createContainer(this.appData);
            Container.createLoading(this.appData);
            Container.createStats(this.appData.stats.createHtml, this.appData);
            let controllers = [];
            this.cameraView = new CameraViewRenderer(document.getElementById("video"));
            await this.cameraView.initialize(this.appData.videoSettings).catch((error) => {
                console.error(error);
                return Promise.reject(false);
            });
            markerUrls.forEach((markerUrl, index) => {
                console.log('marker url: ', markerUrl);
                controllers.push(new NFTWorker(markerUrl, this.width, this.height, this.uuid, names[index]));
                console.log('controllers...');
                console.log('controllers length: ', controllers.length);
                controllers[index].initialize(this.appData.cameraPara, this.cameraView.getImage(), () => {
                }, () => {
                });
                controllers[index].process(this.cameraView.getImage());
                let update = () => {
                    controllers[index].process(this.cameraView.getImage());
                    requestAnimationFrame(update);
                };
                update();
            });
        });
        return Promise.resolve(this);
    }
    async _initialize(markerUrl, stats) {
        var event = new Event("initARnft");
        document.dispatchEvent(event);
        console.log('ARnft init() %cstart...', 'color: yellow; background-color: blue; border-radius: 4px; padding: 2px');
        getConfig(this.configUrl);
        document.addEventListener('getConfig', async (ev) => {
            this.appData = ev.detail.config;
            Container.createContainer(this.appData);
            Container.createLoading(this.appData);
            Container.createStats(this.appData.stats.createHtml, this.appData);
            let statsMain, statsWorker;
            if (stats) {
                statsMain = new Stats();
                statsMain.showPanel(0);
                document.getElementById('stats1').appendChild(statsMain.dom);
                statsWorker = new Stats();
                statsWorker.showPanel(0);
                document.getElementById('stats2').appendChild(statsWorker.dom);
            }
            this.cameraView = new CameraViewRenderer(document.getElementById("video"));
            await this.cameraView.initialize(this.appData.videoSettings).catch((error) => {
                console.error(error);
                return Promise.reject(false);
            });
            let name;
            const worker = new NFTWorker(markerUrl, this.width, this.height, this.uuid, name);
            worker.initialize(this.appData.cameraPara, this.cameraView.getImage(), () => {
                if (stats) {
                    statsMain.update();
                }
            }, () => {
                if (stats) {
                    statsWorker.update();
                }
            });
            worker.process(this.cameraView.getImage());
            let update = () => {
                worker.process(this.cameraView.getImage());
                requestAnimationFrame(update);
            };
            update();
        });
        return Promise.resolve(this);
    }
    converter() {
        return this;
    }
    dispatchEvent(event) {
        let listeners = this.converter().listeners[event.name];
        if (listeners) {
            for (let i = 0; i < listeners.length; i++) {
                listeners[i].call(this, event);
            }
        }
    }
    ;
    addEventListener(name, callback) {
        if (!this.converter().listeners[name]) {
            this.converter().listeners[name] = [];
        }
        this.converter().listeners[name].push(callback);
    }
    ;
    removeEventListener(name, callback) {
        if (this.converter().listeners[name]) {
            let index = this.converter().listeners[name].indexOf(callback);
            if (index > -1) {
                this.converter().listeners[name].splice(index, 1);
            }
        }
    }
    ;
    dispose() {
        this.disposeVideoStream();
        this.disposeNFT();
    }
    disposeNFT() {
        NFTWorker.stopNFT();
    }
    disposeVideoStream() {
        this.cameraView.destroy();
    }
}
//# sourceMappingURL=ARnft.js.map