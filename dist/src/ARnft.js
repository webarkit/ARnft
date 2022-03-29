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
            let markerUrls = [];
            let names;
            const nameParams = params;
            const entityParams = params;
            if (nameParams.markerUrls != null && nameParams.names != null) {
                if (entityParams.entities == null) {
                    markerUrls = nameParams.markerUrls;
                    names = nameParams.names;
                    this.entities = names.map(function (v, k, a) {
                        return { name: v[0], markerUrl: markerUrls[k][0] };
                    });
                }
            }
            else if (entityParams.entities != null) {
                this.entities = entityParams.entities;
                markerUrls = this.entities.map((x) => [x.markerUrl]);
                names = this.entities.map((x) => [x.name]);
            }
            else {
                throw "markerUrls or entities can't be undefined";
            }
            return await _arnft._initialize(markerUrls, names, params.stats);
        }
        catch (error) {
            if (error.code) {
                console.error(error);
                return Promise.reject(error);
            }
        }
    }
    async _initialize(markerUrls, names, stats) {
        const initEvent = new Event("initARnft");
        this.target.dispatchEvent(initEvent);
        console.log("ARnft init() %cstart...", "color: yellow; background-color: blue; border-radius: 4px; padding: 2px");
        let statsMain, statsWorker;
        getConfig(this.configUrl)
            .then((data) => {
            this.appData = data;
            this.addPath = data.addPath;
            this._views = Container.createContainer(this.appData);
            this._views.loading = Container.createLoading(this.appData);
            this._views.stats = Container.createStats(this.appData.stats.createHtml, this.appData);
            if (stats) {
                statsMain = new Stats();
                statsMain.showPanel(0);
                document.getElementById("stats1").appendChild(statsMain.dom);
                statsWorker = new Stats();
                statsWorker.showPanel(0);
                document.getElementById("stats2").appendChild(statsWorker.dom);
            }
            var containerEvent = new Event("containerEvent");
            document.dispatchEvent(containerEvent);
            this.controllers = [];
            this.cameraView = new CameraViewRenderer(this._views.video);
            return this.cameraView.initialize(this.appData.videoSettings);
        })
            .then(() => {
            const renderUpdate = () => (stats ? statsMain.update() : null);
            const trackUpdate = () => (stats ? statsWorker.update() : null);
            markerUrls.forEach((markerUrl, index) => {
                this.controllers.push(new NFTWorker(markerUrl, this.width, this.height, this.uuid, names[index][0], this.addPath));
                this.controllers[index].initialize(this.appData.cameraPara, renderUpdate, trackUpdate);
            });
            this.initialized = true;
        })
            .catch(function (error) {
            return Promise.reject(error);
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
            if (this.initialized && this.autoUpdate) {
                this.controllers.forEach((controller) => controller.process(this.cameraView.image, this.cameraView.frame));
            }
            requestAnimationFrame(_update);
        };
        _update();
        return this;
    }
    async initializeRaw(markerUrls, names, cameraView, stats) {
        const initEvent = new Event("initARnft");
        this.target.dispatchEvent(initEvent);
        console.log("ARnft init() %cstart...", "color: yellow; background-color: blue; border-radius: 4px; padding: 2px");
        let statsMain, statsWorker;
        getConfig(this.configUrl)
            .then((data) => {
            this.appData = data;
            this.addPath = data.addPath;
            this._views = Container.createContainer(this.appData);
            this._views.loading = Container.createLoading(this.appData);
            this._views.stats = Container.createStats(this.appData.stats.createHtml, this.appData);
            if (stats) {
                statsMain = new Stats();
                statsMain.showPanel(0);
                document.getElementById("stats1").appendChild(statsMain.dom);
                statsWorker = new Stats();
                statsWorker.showPanel(0);
                document.getElementById("stats2").appendChild(statsWorker.dom);
            }
            var containerEvent = new Event("containerEvent");
            document.dispatchEvent(containerEvent);
            this.controllers = [];
            return cameraView.initialize(this.appData.videoSettings);
        })
            .then(() => {
            const renderUpdate = () => (stats ? statsMain.update() : null);
            const trackUpdate = () => (stats ? statsWorker.update() : null);
            markerUrls.forEach((markerUrl, index) => {
                this.controllers.push(new NFTWorker(markerUrl, this.width, this.height, this.uuid, names[index], this.addPath));
                this.controllers[index].initialize(this.appData.cameraPara, renderUpdate, trackUpdate);
            });
            this.initialized = true;
        })
            .catch(function (error) {
            return Promise.reject(error);
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
            if (this.initialized && this.autoUpdate) {
                this.controllers.forEach((controller) => controller.process(cameraView.getImage(), cameraView.getFrame()));
            }
            requestAnimationFrame(_update);
        };
        _update();
        return this;
    }
    update() {
        if (!this.initialized || this.autoUpdate)
            return;
        if (this.cameraView != null) {
            this.controllers.forEach((controller) => controller.process(this.cameraView.image, this.cameraView.frame));
        }
    }
    static getEntities() {
        return this.entities;
    }
    getEventTarget() {
        return this.target;
    }
    get views() {
        return Object.freeze(this._views);
    }
    dispose() {
        this.disposeVideoStream();
        this.disposeAllNFTs();
    }
    disposeNFT(name) {
        let terminateWorker = "terminateWorker-" + name;
        var event = new Event(terminateWorker);
        this.target.dispatchEvent(event);
    }
    disposeAllNFTs() {
        const entities = ARnft.getEntities();
        entities.forEach((entity) => {
            this.disposeNFT(entity.name);
        });
    }
    disposeVideoStream() {
        this.cameraView.destroy();
        var event = new Event("stopVideoStreaming");
        this.target.dispatchEvent(event);
    }
}
//# sourceMappingURL=ARnft.js.map