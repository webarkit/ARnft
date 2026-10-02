import Worker from "worker-loader?inline=no-fallback!./Worker";
import { getWindowSize } from "./utils/ARnftUtils";
export default class NFTWorker {
    worker;
    markerURL;
    _processing = false;
    vw;
    vh;
    cameraProj;
    target;
    uuid;
    name;
    addPath;
    rotatePortrait;
    ready;
    constructor(markerURL, w, h, uuid, name, addPath, rotatePortrait = false) {
        this.markerURL = markerURL;
        this.vw = w;
        this.vh = h;
        this.target = window || global;
        this.uuid = uuid;
        this.name = name;
        this.ready = false;
        this.addPath = addPath;
        this.rotatePortrait = rotatePortrait;
    }
    async initialize(cameraURL, renderUpdate, trackUpdate, oef) {
        this.worker = new Worker();
        const worker = this.worker;
        const onVideoResize = (ev) => {
            this.setVideoSize(ev.detail.width, ev.detail.height, ev.detail.rotated);
        };
        this.target.addEventListener("videoResize", onVideoResize);
        this.target.addEventListener("terminateWorker-" + this.name, () => {
            worker.postMessage({ type: "stop" });
            worker.terminate();
            this.target.removeEventListener("videoResize", onVideoResize);
        });
        return await this.load(cameraURL, renderUpdate, trackUpdate, oef);
    }
    setVideoSize(w, h, rotated) {
        this.vw = w;
        this.vh = h;
        if (rotated != null) {
            this.rotatePortrait = rotated;
        }
        this.dispatchWindowSize();
        if (this.cameraProj != null) {
            this.dispatchProjectionMatrix();
        }
    }
    process(imagedata, frame) {
        if (this._processing) {
            return;
        }
        this._processing = true;
        this.worker.postMessage({ type: "process", imagedata, frame }, [imagedata.data.buffer]);
    }
    load(cameraURL, renderUpdate, trackUpdate, oef) {
        const [, , pw, ph] = getWindowSize(this.vw, this.vh, this.rotatePortrait);
        this.dispatchWindowSize();
        this.worker.postMessage({
            type: "load",
            pw: pw,
            ph: ph,
            camera_para: cameraURL,
            marker: this.markerURL,
            addPath: this.addPath,
            oef: oef,
        });
        this.worker.onmessage = (ev) => {
            const msg = ev.data;
            switch (msg.type) {
                case "loaded": {
                    this.cameraProj = JSON.parse(msg.proj);
                    this.dispatchProjectionMatrix();
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
    dispatchWindowSize() {
        const [sw, sh] = getWindowSize(this.vw, this.vh);
        const setWindowSizeEvent = new CustomEvent("getWindowSize", { detail: { sw: sw, sh: sh } });
        this.target.dispatchEvent(setWindowSizeEvent);
    }
    dispatchProjectionMatrix() {
        const [, , pw, ph, w, h] = getWindowSize(this.vw, this.vh, this.rotatePortrait);
        const rot = this.rotatePortrait && this.vh > this.vw;
        const proj = this.cameraProj.slice();
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
        if (rot) {
            for (let c = 0; c < 4; c++) {
                const x = proj[4 * c];
                const y = proj[4 * c + 1];
                proj[4 * c] = -y;
                proj[4 * c + 1] = x;
            }
        }
        const projectionMatrixEvent = new CustomEvent("getProjectionMatrix", {
            detail: { proj: proj },
        });
        this.target.dispatchEvent(projectionMatrixEvent);
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