import { mat4, quat, vec3 } from "gl-matrix";
import Worker from 'web-worker:./ARnftWorker';
export class NFTOrientation {
}
export class NFTWorker {
    constructor(d, markerURL, w, h) {
        this._processing = false;
        this.position = vec3.create();
        this.rotation = quat.create();
        this._dispatcher = d;
        this.markerURL = markerURL;
        this.vw = w;
        this.vh = h;
    }
    initialize(cameraURL) {
        return new Promise((resolve, reject) => {
            this.worker = new Worker();
            this.worker.onmessage = (ev) => {
                this.load(cameraURL).then(() => {
                    this.worker.onmessage = (ev) => {
                        let pckg;
                        if (ev.data.type == "found") {
                            let m = this.getArrayMatrix(JSON.parse(ev.data.matrixGL_RH));
                            let matrix = mat4.fromValues(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]);
                            mat4.getTranslation(this.position, matrix);
                            mat4.getRotation(this.rotation, matrix);
                            pckg = new NFTOrientation();
                            pckg.matrix = matrix.values();
                            pckg.position = this.position.values();
                            pckg.rotation = this.rotation.values();
                        }
                        this._dispatcher.found(pckg);
                        this._processing = false;
                    };
                    resolve(true);
                });
            };
        });
    }
    getArrayMatrix(value) {
        var array = [];
        for (var key in value) {
            array[key] = value[key];
        }
        return array;
    }
    process(imageData) {
        if (this._processing) {
            return;
        }
        this._processing = true;
        this.worker.postMessage({ type: 'process', imagedata: imageData });
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
}
//# sourceMappingURL=NFTWorker.js.map