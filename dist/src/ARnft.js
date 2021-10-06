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
    static async init(width, height, markerUrls, names, configUrl, stats) {
        const _arnft = new ARnft(width, height, configUrl);
        return await _arnft._initialize(markerUrls, names, stats).catch((error) => {
            console.error(error);
            return Promise.reject(false);
        });
    }
    static async initWithEntities(width, height, entities, configUrl, stats) {
        const _arnft = new ARnft(width, height, configUrl);
        this.entities = entities;
        let markerUrls = this.entities.map((entity) => { return entity.markerUrl; });
        let names = this.entities.map((entity) => { return entity.name; });
        return await _arnft._initialize(markerUrls, names, stats).catch((error) => {
            console.error(error);
            return Promise.reject(false);
        });
    }
    async _initialize(markerUrls, names, stats) {
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
            this.controllers = [];
            this.cameraView = new CameraViewRenderer(document.getElementById("video"));
            await this.cameraView.initialize(this.appData.videoSettings).catch((error) => {
                console.error(error);
                return Promise.reject(false);
            });
            markerUrls.forEach((markerUrl, index) => {
                this.controllers.push(new NFTWorker(markerUrl, this.width, this.height, this.uuid, names[index]));
                this.controllers[index].initialize(this.appData.cameraPara, this.cameraView.getImage(), () => {
                    if (stats) {
                        statsMain.update();
                    }
                }, () => {
                    if (stats) {
                        statsWorker.update();
                    }
                });
                this.controllers[index].process(this.cameraView.getImage());
                let update = () => {
                    this.controllers[index].process(this.cameraView.getImage());
                    requestAnimationFrame(update);
                };
                update();
            });
        });
        return Promise.resolve(this);
    }
    converter() {
        return this;
    }
    static getEntities() {
        return this.entities;
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