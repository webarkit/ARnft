import Worker from 'worker-loader?inline=no-fallback!./Worker';
import { isMobile } from './utils/ARUtils';
export default class NFTWorker {
    constructor(markerURL, w, h, uuid, name) {
        this._processing = false;
        this.markerURL = markerURL;
        this.vw = w;
        this.vh = h;
        this.uuid = uuid;
        this.name = name;
    }
    initialize(cameraURL, imageData, renderUpdate, trackUpdate) {
        return new Promise((resolve, reject) => {
            this.worker = new Worker();
            this.load(cameraURL, imageData, renderUpdate, trackUpdate).then(() => {
                resolve(true);
            });
            const worker = this.worker;
            document.addEventListener("terminateWorker", function () {
                worker.postMessage({ type: 'stop' });
                worker.terminate();
            });
        });
    }
    process(imageData) {
        if (this._processing) {
            return;
        }
        this._processing = true;
        this.worker.postMessage({ type: 'process', imagedata: imageData }, [imageData.data.buffer]);
    }
    load(cameraURL, imageData, renderUpdate, trackUpdate) {
        return new Promise((resolve, reject) => {
            var pscale = 320 / Math.max(this.vw, this.vh / 3 * 4);
            var sscale = isMobile() ? window.outerWidth / this.vw : 1;
            let sw = this.vw * sscale;
            let sh = this.vh * sscale;
            let w = this.vw * pscale;
            let h = this.vh * pscale;
            let pw = Math.max(w, (h / 3) * 4);
            let ph = Math.max(h, (w / 4) * 3);
            const setWindowSizeEvent = new CustomEvent('getWindowSize', { detail: { sw: sw, sh: sh } });
            document.dispatchEvent(setWindowSizeEvent);
            this.worker.postMessage({
                type: 'load',
                pw: pw,
                ph: ph,
                camera_para: cameraURL,
                marker: this.markerURL
            });
            this.worker.onmessage = (ev) => {
                var msg = ev.data;
                switch (msg.type) {
                    case 'loaded': {
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
                        const projectionMatrixEvent = new CustomEvent('getProjectionMatrix', { detail: { proj: proj } });
                        document.dispatchEvent(projectionMatrixEvent);
                        break;
                    }
                    case "endLoading": {
                        if (msg.end == true) {
                            const loader = document.getElementById('loading');
                            if (loader) {
                                loader.querySelector('.loading-text').innerText = 'Start the tracking!';
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
                        break;
                    }
                    case 'nftData': {
                        const nft = JSON.parse(msg.nft);
                        const nftEvent = new CustomEvent('getNFTData-' + this.uuid + '-' + this.name, { detail: { dpi: nft.dpi, width: nft.width, height: nft.height } });
                        document.dispatchEvent(nftEvent);
                        break;
                    }
                    case 'found': {
                        this.found(msg);
                        break;
                    }
                    case 'not found': {
                        this.found(null);
                        break;
                    }
                    case 'error': {
                        console.log("NFTWorker : error");
                        var event = new Event("nftError");
                        document.dispatchEvent(event);
                        break;
                    }
                }
                this._processing = false;
                trackUpdate();
            };
            let renderU = () => {
                renderUpdate();
                window.requestAnimationFrame(renderU);
            };
            renderU();
            this.process(imageData);
        });
    }
    ;
    found(msg) {
        let world;
        if (!msg) {
            world = null;
            const nftTrackingLostEvent = new CustomEvent('nftTrackingLost-' + this.uuid + '-' + this.name, { detail: { name: this.name } });
            document.dispatchEvent(nftTrackingLostEvent);
        }
        else {
            world = JSON.parse(msg.matrixGL_RH);
            const matrixGLrhEvent = new CustomEvent('getMatrixGL_RH-' + this.uuid + '-' + this.name, { detail: { matrixGL_RH: world, name: this.name } });
            document.dispatchEvent(matrixGLrhEvent);
        }
    }
    destroy() {
    }
    static stopNFT() {
        console.log("Stop NFT");
        var event = new Event("terminateWorker");
        document.dispatchEvent(event);
        var event = new Event("stopStreaming");
        document.dispatchEvent(event);
    }
}
//# sourceMappingURL=NFTWorker.js.map