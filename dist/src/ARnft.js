import Container from "./utils/html/Container";
import Stats from "stats.js";
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
import { getConfig } from "./utils/ARUtils";
import NFTWorker from "./NFTWorker";
import { v4 as uuidv4 } from "uuid";
import packageJson from "../package.json";
const { version } = packageJson;
export default class ARnft {
    constructor(width, height, configUrl) {
        this._fps = 15;
        this._lastTime = 0;
        this.width = width;
        this.height = height;
        this.configUrl = configUrl;
        this.target = window || global;
        this.uuid = uuidv4();
        this.version = version;
        this.setFPS(this._fps);
        console.log("ARnft ", this.version);
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
        let markerUrls = this.entities.map((entity) => {
            return entity.markerUrl;
        });
        let names = this.entities.map((entity) => {
            return entity.name;
        });
        return await _arnft._initialize(markerUrls, names, stats).catch((error) => {
            console.error(error);
            return Promise.reject(false);
        });
    }
    async _initialize(markerUrls, names, stats) {
        const initEvent = new Event("initARnft");
        this.target.dispatchEvent(initEvent);
        console.log("ARnft init() %cstart...", "color: yellow; background-color: blue; border-radius: 4px; padding: 2px");
        getConfig(this.configUrl);
        this.target.addEventListener("getConfig", async (ev) => {
            this.appData = ev.detail.config;
            Container.createContainer(this.appData);
            Container.createLoading(this.appData);
            Container.createStats(this.appData.stats.createHtml, this.appData);
            let statsMain, statsWorker;
            if (stats) {
                statsMain = new Stats();
                statsMain.showPanel(0);
                document.getElementById("stats1").appendChild(statsMain.dom);
                statsWorker = new Stats();
                statsWorker.showPanel(0);
                document.getElementById("stats2").appendChild(statsWorker.dom);
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
                    this._update();
                    requestAnimationFrame(update);
                };
                update();
            });
        });
        return Promise.resolve(this);
    }
    setFPS(value) {
        this._fps = 1000 / value;
    }
    static getEntities() {
        return this.entities;
    }
    _update() {
        let time = Date.now();
        let imageData;
        if ((time - this._lastTime) > this._fps) {
            imageData = this.cameraView.getImage();
            this._lastTime = time;
        }
        this.controllers.forEach(element => {
            if (imageData)
                element.process(imageData);
        });
    }
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