import { mat4, quat, vec3 } from "gl-matrix";
import { NFTEntity } from "./NFTEntity";


export class NFTOrientation {
    public position: number[];
    public rotation: number[];
}

export class NFTWorker {

    private _dispatcher: NFTEntity;

    private worker: Worker;

    private markerURL: any;

    private _processing: boolean = false;

    private vw: number;
    private vh: number;

    constructor(d: NFTEntity, markerURL: string, w: number, h: number) {
        this._dispatcher = d;
        this.markerURL = markerURL;
        this.vw = w;
        this.vh = h;
    }

    private vector3zero : vec3= vec3.create();
    public initialize(workerURL: string, cameraURL: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.worker = new Worker(workerURL);
            this.worker.onmessage = (ev) => {
                this.load(cameraURL).then(() => {
                    // Overwrite load onmessage with search onmessage
                    this.worker.onmessage = (ev) => {
                        let msg: any = (ev.data.type == "found") ? ev.data : null;
                        let pckg: NFTOrientation | any;
                        if (msg) {
                            let m = this.getArrayMatrix(JSON.parse(msg.matrixGL_RH));
                            let matrix: mat4 = mat4.fromValues(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]);

                            let position: vec3 = vec3.create();
                            mat4.getTranslation(position, matrix);

                            let rotation: quat = quat.create();
                            mat4.getRotation(rotation, matrix);

                            pckg = new NFTOrientation();
                            pckg.position = position.values();
                            pckg.rotation = vec3.transformMat4(vec3.create(), this.vector3zero, matrix);

                        }
                        this._dispatcher.found(pckg);
                        this._processing = false;
                    };
                    //
                    resolve(true);
                });
            };

        });
    }

    protected getArrayMatrix(value: any): any {
        var array: any = [];
        for (var key in value) {
            array[key] = value[key]; //.toFixed(4);
        }
        return array;
    }

    public process(imageData: ImageData) {

        if (this._processing) {
            // console.log("because i am sooooooooooooo slow")
            return;
        }
        this._processing = true;

        this.worker.postMessage({ type: 'process', imagedata: imageData });
    }

    protected load(cameraURL: string): Promise<boolean> {

        return new Promise<boolean>((resolve, reject) => {

            var pscale = 320 / Math.max(this.vw, this.vh / 3 * 4);

            let w: number = this.vw * pscale;
            let h: number = this.vh * pscale;
            let pw: number = Math.max(w, (h / 3) * 4);
            let ph: number = Math.max(h, (w / 4) * 3);

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
                        // this._dispatcher.dispatchEvent(new CustomEvent(ARnft.EVENT_SET_CAMERA, proj));
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
    };

}