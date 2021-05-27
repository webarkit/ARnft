import Worker from 'worker-loader?inline=no-fallback!./Worker';
export default class NFTWorker {
    constructor(markerURL, w, h) {
        this._processing = false;
        this.tick = () => {
            window.requestAnimationFrame(this.tick);
        };
        this.markerURL = markerURL;
        this.vw = w;
        this.vh = h;
    }
    initialize(cameraURL, imageData, renderUpdate) {
        return new Promise((resolve, reject) => {
            this.worker = new Worker();
            this.load(cameraURL, imageData).then(() => {
                resolve(true);
            });
        });
    }
    process(imageData) {
        this.worker.postMessage({ type: 'process', imagedata: imageData }, [imageData.data.buffer]);
    }
    load(cameraURL, imageData) {
        return new Promise((resolve, reject) => {
            var pscale = 320 / Math.max(this.vw, this.vh / 3 * 4);
            let w = this.vw * pscale;
            let h = this.vh * pscale;
            let pw = Math.max(w, (h / 3) * 4);
            let ph = Math.max(h, (w / 4) * 3);
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
                                    loader.parentElement.removeChild(loader);
                                }, 2000);
                            }
                        }
                        break;
                    }
                    case 'nftData': {
                        const nft = JSON.parse(msg.nft);
                        const nftEvent = new CustomEvent('getNFTData', { detail: { dpi: nft.dpi, width: nft.width, height: nft.height } });
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
                }
            };
            this.tick();
            this.process(imageData);
        });
    }
    ;
    found(msg) {
        let world;
        if (!msg) {
            if (world) {
                world = null;
                const nftTrackingLostEvent = new CustomEvent('nftTrackingLost');
                document.dispatchEvent(nftTrackingLostEvent);
            }
        }
        else {
            world = JSON.parse(msg.matrixGL_RH);
            const matrixGLrhEvent = new CustomEvent('getMatrixGL_RH', { detail: { matrixGL_RH: world } });
            document.dispatchEvent(matrixGLrhEvent);
        }
    }
    destroy() {
    }
}
//# sourceMappingURL=NFTWorker.js.map