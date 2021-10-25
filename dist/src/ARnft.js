import Container from "./utils/html/Container";
import Stats from "stats.js";
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
import { getConfig } from "./utils/ARnftUtils";
import NFTWorker from "./NFTWorker";
import { v4 as uuidv4 } from "uuid";
import packageJson from "../package.json";
const { version } = packageJson;
export default class ARnft {
    constructor(width, height, configUrl) {
        this.autoUpdate = true;
        this.width = width;
        this.height = height;
        this.configUrl = configUrl;
        this.target = window || global;
        this.uuid = uuidv4();
        this.version = version;
        console.log("ARnft ", this.version);
    }
    static async init(width, height, markerUrls, names, configUrl, stats) {
        return ARnft.initWithConfig({ width, height, markerUrls, names, configUrl, stats });
    }
    static async initWithEntities(width, height, entities, configUrl, stats) {
        return ARnft.initWithConfig({ width, height, entities, configUrl, stats });
    }
    static async initWithConfig(params) {
        const _arnft = new ARnft(params.width, params.height, params.configUrl);
        if (params.autoUpdate != null) {
            _arnft.autoUpdate = params.autoUpdate;
        }
        try {
            let markerUrls;
            let names;
            const nameParams = params;
            const entityParams = params;
            if (nameParams.markerUrls != null && nameParams.names != null) {
                markerUrls = nameParams.markerUrls;
                names = nameParams.names;
            }
            else if (entityParams.entities != null) {
                this.entities = entityParams.entities;
                markerUrls = this.entities.map((x) => x.markerUrl);
                names = this.entities.map((x) => x.name);
            }
            else {
                throw "markerUrls or entities can't be undefined";
            }
            return await _arnft._initialize(markerUrls, names, params.stats);
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
            const renderUpdate = () => stats ? statsMain.update() : null;
            const trackUpdate = () => stats ? statsWorker.update() : null;
            markerUrls.forEach((markerUrl, index) => {
                this.controllers.push(new NFTWorker(markerUrl, this.width, this.height, this.uuid, names[index]));
                this.controllers[index].initialize(this.appData.cameraPara, this.cameraView.getImage(), renderUpdate, trackUpdate);
            });
            this.initialized = true;
        });
        this.target.addEventListener("nftLoaded-" + this.uuid, () => {
            const nftWorkersNotReady = this.controllers.filter((nftWorker) => {
                return nftWorker.isReady() === false;
            });
            if (nftWorkersNotReady.length === 0) {
                this.target.dispatchEvent(new CustomEvent("ARnftIsReady"));
            }
        });
        let _update = () => {
            if (!this.initialized || !this.autoUpdate)
                return requestAnimationFrame(_update);
            const image = this.cameraView.getImage();
            this.controllers.forEach((controller) => controller.process(image));
            requestAnimationFrame(_update);
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
    getEventTarget() {
        return this.target;
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