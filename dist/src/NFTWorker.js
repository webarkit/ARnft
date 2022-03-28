import Worker from "worker-loader?inline=no-fallback!./Worker";
import { getWindowSize } from "./utils/ARnftUtils";
export default class NFTWorker {
    constructor(markerURL, w, h, uuid, name, addPath) {
        this._processing = false;
        this.markerURL = markerURL;
        this.vw = w;
        this.vh = h;
        this.target = window || global;
        this.uuid = uuid;
        this.name = name;
        this.ready = false;
        this.addPath = addPath;
    }
    async initialize(cameraURL, renderUpdate, trackUpdate) {
        this.worker = new Worker();
        const worker = this.worker;
        this.target.addEventListener("terminateWorker-" + this.name, function () {
            worker.postMessage({ type: "stop" });
            worker.terminate();
        });
        return await this.load(cameraURL, renderUpdate, trackUpdate);
    }
    process(imagedata, frame) {
        if (this._processing) {
            return;
        }
        this._processing = true;
        this.worker.postMessage({ type: "process", imagedata, frame }, [imagedata.data.buffer]);
    }
    load(cameraURL, renderUpdate, trackUpdate) {
        let [sw, sh, pw, ph, w, h] = getWindowSize(this.vw, this.vh);
        const setWindowSizeEvent = new CustomEvent("getWindowSize", { detail: { sw: sw, sh: sh } });
        this.target.dispatchEvent(setWindowSizeEvent);
        this.worker.postMessage({
            type: "load",
            pw: pw,
            ph: ph,
            camera_para: cameraURL,
            marker: this.markerURL,
            addPath: this.addPath,
        });
        this.worker.onmessage = (ev) => {
            var msg = ev.data;
            switch (msg.type) {
                case "loaded": {
                    var proj = JSON.parse(msg.proj);
                    const ratioW = pw / w;
                    const ratioH = ph / h;
                    proj[0] *= ratioW;
                    proj[4] *= ratioW;
                    proj[8] *= ratioW;
                    proj[12] *= ratioW;
                    proj[1] *= ratioH;
                    proj[5] *= ratioH;
                    proj[9] *= ratioH;
                    proj[13] *= ratioH;
                    const projectionMatrixEvent = new CustomEvent("getProjectionMatrix", {
                        detail: { proj: proj },
                    });
                    this.target.dispatchEvent(projectionMatrixEvent);
                    break;
                }
                case "endLoading": {
                    if (msg.end == true) {
                        const loader = document.getElementById("loading");
                        if (loader) {
                            loader.querySelector(".loading-text").innerText = "Start the tracking!";
                            setTimeout(function () {
                                if (loader.parentElement == null) {
                                    return;
                                }
                                if (loader) {
                                    loader.parentElement.removeChild(loader);
                                }
                            }, 2000);
                        }
                    }
                    this.ready = true;
                    this.target.dispatchEvent(new CustomEvent("nftLoaded-" + this.uuid));
                    break;
                }
                case "markerInfos": {
                    const marker = msg.marker;
                    const nftEvent = new CustomEvent("getNFTData-" + this.uuid + "-" + this.name, {
                        detail: { dpi: marker.dpi, width: marker.width, height: marker.height },
                    });
                    this.target.dispatchEvent(nftEvent);
                    break;
                }
                case "found": {
                    this.found(msg);
                    break;
                }
                case "not found": {
                    this.found(null);
                    break;
                }
            }
            this._processing = false;
            trackUpdate();
        };
        this.worker.onerror = (err) => {
            console.error("Worker error from NFTWorker: ", err);
        };
        let renderU = () => {
            renderUpdate();
            window.requestAnimationFrame(renderU);
        };
        renderU();
        return Promise.resolve(true);
    }
    found(msg) {
        let world;
        if (!msg) {
            world = null;
            const nftTrackingLostEvent = new CustomEvent("nftTrackingLost-" + this.uuid + "-" + this.name, {
                detail: { name: this.name },
            });
            this.target.dispatchEvent(nftTrackingLostEvent);
        }
        else {
            world = JSON.parse(msg.matrixGL_RH);
            const matrixGLrhEvent = new CustomEvent("getMatrixGL_RH-" + this.uuid + "-" + this.name, {
                detail: { matrixGL_RH: world, name: this.name },
            });
            this.target.dispatchEvent(matrixGLrhEvent);
        }
    }
    isReady() {
        return this.ready;
    }
    getUuid() {
        return this.uuid;
    }
    getName() {
        return this.name;
    }
    getMarkerUrl() {
        return this.markerURL;
    }
    getEventTarget() {
        return this.target;
    }
    destroy() { }
}
//# sourceMappingURL=NFTWorker.js.map