import Container from "./utils/html/Container";
import Stats from "stats.js";
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
import { getConfig } from "./utils/ARUtils";
import NFTWorker from "./NFTWorker";
import { v4 as uuidv4 } from "uuid";
import packageJson from "../package.json";
const { version } = packageJson;
export default class ARnft {
    constructor(width, height, configUrl, autoUpdate = true) {
        this.width = width;
        this.height = height;
        this.configUrl = configUrl;
        this.target = window || global;
        this.uuid = uuidv4();
        this.version = version;
        this.autoUpdate = autoUpdate;
        console.log("ARnft ", this.version);
    }
    static async init(width, height, markerUrls, names, configUrl, stats) {
        return ARnft.initWithConfig({ width, height, markerUrls, names, configUrl, stats });
    }
    static async initWithEntities(width, height, entities, configUrl, stats) {
        return ARnft.initWithConfig({ width, height, entities, configUrl, stats });
    }
    static async initWithConfig(params) {
        const _arnft = new ARnft(params.width, params.height, params.configUrl, params.autoUpdate);
        const nameParams = params;
        try {
            if (nameParams.names != null && nameParams.markerUrls != null) {
                return await _arnft._initialize(nameParams.markerUrls, nameParams.names, nameParams.stats);
            }
            const entityParams = params;
            if (entityParams.entities != null) {
                this.entities = entityParams.entities;
                let markerUrls = this.entities.map((entity) => {
                    return entity.markerUrl;
                });
                let names = this.entities.map((entity) => {
                    return entity.name;
                });
                return await _arnft._initialize(markerUrls, names, params.stats);
            }
            throw new Error("markerUrls or entities can't be undefined");
        }
        catch (error) {
            console.error(error);
            return Promise.reject(error);
        }
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
            try {
                await this.cameraView.initialize(this.appData.videoSettings);
            }
            catch (error) {
                return Promise.reject(error);
            }
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
            });
            this.initialized = true;
        });
        let _update = () => {
            requestAnimationFrame(_update);
            if (!this.initialized || !this.autoUpdate)
                return;
            const image = this.cameraView.getImage();
            this.controllers.forEach((controller) => controller.process(image));
        };
        requestAnimationFrame(_update);
        return this;
    }
    update() {
        if (!this.initialized || this.autoUpdate)
            return;
        if (this.cameraView != null) {
            const image = this.cameraView.getImage();
            this.controllers.forEach((controller) => controller.process(image));
        }
    }
    static getEntities() {
        return this.entities;
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