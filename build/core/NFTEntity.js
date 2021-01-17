import { NFTWorker } from "./NFTWorker";
export class NFTEntity {
    constructor(node, markerURL, w, h) {
        this._nodes = [];
        this._markerURL = markerURL;
        this._worker = new NFTWorker(this, this._markerURL, w, h);
        this._nodes.push(node);
    }
    initialize(workerURL, cameraData) {
        this._workerURL = workerURL;
        this._cameraURL = cameraData;
        return this._worker.initialize(this._workerURL, this._cameraURL);
    }
    found(msg) {
        this._nodes.forEach(element => {
            element.found(msg);
        });
    }
    process(imageData) {
        this._worker.process(imageData);
    }
    update() {
        this._nodes.forEach(element => {
            element.update();
        });
    }
    destroy() {
    }
}
//# sourceMappingURL=NFTEntity.js.map