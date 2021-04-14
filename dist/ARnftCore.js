import { NFTEntity } from "./core/NFTEntity";
export default class ARnftCore {
    constructor(video, camData) {
        this.count = 0;
        this._controllers = new Map();
        this._fps = 15;
        this._lastTime = 0;
        this._videoRenderer = video;
        this._cameraDataURL = camData;
        this.setFPS(this._fps);
    }
    addNFTEntity(entity, name) {
        if (!name)
            name = "entity-" + this.count++;
        this._controllers.set(name, entity);
        return entity;
    }
    addNFTEntity2(node, markerUrl, name) {
        if (!name)
            name = "entity-" + this.count++;
        let entity = new NFTEntity(node, markerUrl, 120, 120);
        this._controllers.set(name, entity);
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
    initialize() {
        console.log("init ARnft");
        let promises = [];
        this._controllers.forEach(element => {
            promises.push(element.initialize(this._cameraDataURL));
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
            console.log(imageData);
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
ARnftCore.EVENT_SET_CAMERA = "ARNFT_SET_CAMERA_EVENT";
ARnftCore.EVENT_FOUND_MARKER = "ARNFT_FOUND_MARKER_EVENT";
ARnftCore.EVENT_LOST_MARKER = "ARNFT_LOST_MARKER_EVENT";
//# sourceMappingURL=ARnftCore.js.map