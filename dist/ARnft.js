import { CameraViewRenderer } from "./core/renderers/CamerViewRenderer";
import appdata from "./core/data/appdata.json";
export class ARnft {
    constructor(video, camData, worker) {
        this.count = 0;
        this._controllers = new Map();
        this._fps = 15;
        this._lastTime = 0;
        this.appData = appdata;
        this._videoRenderer = video;
        this._cameraDataURL = camData;
        this._workerURL = worker;
        this.setFPS(this._fps);
    }
    addNFTEntity(entity, name) {
        if (!name)
            name = "entity-" + this.count++;
        this._controllers.set(name, entity);
        return entity;
    }
    getEntityByName(name) {
        if (!this._controllers.has(name))
            return null;
        return this._controllers.get(name);
    }
    getCameraView() {
        return this._videoRenderer;
    }
    setFPS(value) {
        this._fps = 1000 / value;
    }
    async init(configData, camData, workerURL) {
        await getConfig(configData, async (data) => {
            this._videoRenderer = new CameraViewRenderer(document.getElementById("video"));
            await this._videoRenderer.initialize(this.appData.videoSettings).catch((error) => {
                console.log(error);
                return Promise.reject(false);
            });
            const arnft = new ARnft(this._videoRenderer, camData, workerURL);
            await arnft.initialize().catch((error) => {
                console.log(error);
                return Promise.reject(false);
            });
            return true;
        });
    }
    initialize() {
        console.log("init ARnft");
        let promises = [];
        this._controllers.forEach(element => {
            promises.push(element.initialize(this._workerURL, this._cameraDataURL));
        });
        return Promise.all(promises).then(() => {
            return true;
        });
    }
    update() {
        let time = Date.now();
        let imageData;
        if ((time - this._lastTime) > this._fps) {
            imageData = this._videoRenderer.getImage();
            this._lastTime = time;
        }
        this._controllers.forEach(element => {
            element.update();
            if (imageData)
                element.process(imageData);
        });
    }
    destroy() {
        this._controllers.forEach(entity => {
            entity.destroy();
        });
        this._controllers.clear();
        this._videoRenderer = null;
    }
}
ARnft.EVENT_SET_CAMERA = "ARNFT_SET_CAMERA_EVENT";
ARnft.EVENT_FOUND_MARKER = "ARNFT_FOUND_MARKER_EVENT";
ARnft.EVENT_LOST_MARKER = "ARNFT_LOST_MARKER_EVENT";
//# sourceMappingURL=ARnft.js.map