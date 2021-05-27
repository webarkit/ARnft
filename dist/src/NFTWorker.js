import Worker from 'worker-loader?inline=no-fallback!./Worker';
export default class NFTWorker {
    constructor(markerURL, w, h) {
        this._processing = false;
        this.markerURL = markerURL;
        this.vw = w;
        this.vh = h;
    }
    initialize(cameraURL) {
        return new Promise((resolve, reject) => {
            this.worker = new Worker();
            this.load(cameraURL).then(() => {
                resolve(true);
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
    load(cameraURL) {
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
                        break;
                    }
                    case "endLoading": {
                        if (msg.end == true)
                            resolve(true);
                        break;
                    }
                }
                this._processing = false;
            };
        });
    }
    ;
    destroy() {
    }
}
//# sourceMappingURL=NFTWorker.js.map