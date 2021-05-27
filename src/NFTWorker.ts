import Worker from 'worker-loader?inline=no-fallback!./Worker';

export default class NFTWorker {

    private worker: Worker;

    private markerURL: any;

    private _processing: boolean = false;

    private vw: number;
    private vh: number;

    private uuid: string;

    constructor(markerURL: string, w: number, h: number,  uuid: string) {
        this.markerURL = markerURL;
        this.vw = w;
        this.vh = h;
        this.uuid = uuid
    }

    public initialize(cameraURL: string, imageData: ImageData, renderUpdate: () => void): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.worker = new Worker();
            //this.worker.onmessage = (ev) => {
                this.load(cameraURL, imageData).then(() => {
                    // Overwrite load onmessage with search onmessage
                    /*this.worker.onmessage = (ev) => {

                        // console.log("response found = " + (ev.data.type == "found"));
                        let msg: any = (ev.data.type == "found") ? ev.data : null;
                        this._dispatcher.found(msg);
                        this._processing = false;
                    };*/
                    //
                    resolve(true);
                });
            //};

        });
    }

    public process(imageData: ImageData) {

       /* if (this._processing) {
            return;
        }
        this._processing = true;*/

        this.worker.postMessage({ type: 'process', imagedata: imageData }, [imageData.data.buffer]);
        //this.worker.postMessage({ type: 'process', imagedata: imageData });
    }

    protected load(cameraURL: string, imageData: ImageData): Promise<boolean> {

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

            this.worker.onmessage = (ev: any) => {
                var msg = ev.data;
                switch (msg.type) {
                    case 'loaded': {
                        var proj = JSON.parse(msg.proj);
                        const ratioW = pw / w
                        const ratioH = ph / h
                        proj[0] *= ratioW
                        proj[4] *= ratioW
                        proj[8] *= ratioW
                        proj[12] *= ratioW
                        proj[1] *= ratioH
                        proj[5] *= ratioH
                        proj[9] *= ratioH
                        proj[13] *= ratioH
                        const projectionMatrixEvent = new CustomEvent('getProjectionMatrix', { detail: { proj: proj } })
                        document.dispatchEvent(projectionMatrixEvent)
                        // this._dispatcher.dispatchEvent(new CustomEvent(ARnft.EVENT_SET_CAMERA, proj));
                        break;
                    }
                    case "endLoading": {
                        if (msg.end == true) {
                            // removing loader page if present
                            const loader = document.getElementById('loading')
                            if (loader) {
                                loader.querySelector<HTMLElement>('.loading-text').innerText = 'Start the tracking!'
                                setTimeout(function () {
                                    loader.parentElement.removeChild(loader)
                                }, 2000)
                            }
                        }
                        break;
                    }
                    case 'nftData': {
                        const nft = JSON.parse(msg.nft)
                        const nftEvent = new CustomEvent('getNFTData', { detail: { dpi: nft.dpi, width: nft.width, height: nft.height } })
                        document.dispatchEvent(nftEvent)
                        break
                    }
                    case 'found': {
                        this.found(msg)
                        break
                    }
                    case 'not found': {
                        this.found(null)
                        break
                    }
                }
                //this._processing = false;
            };
            //this.tick();
            this.process(imageData);
        });
    };

    public found (msg: any) {
        let world: any;
        if (!msg) {
            if (world) {
                world = null
                const nftTrackingLostEvent = new CustomEvent('nftTrackingLost')
                document.dispatchEvent(nftTrackingLostEvent)
            }
        } else {
            world = JSON.parse(msg.matrixGL_RH)
            const matrixGLrhEvent = new CustomEvent('getMatrixGL_RH-' + this.uuid, { detail: { matrixGL_RH: world } })
            document.dispatchEvent(matrixGLrhEvent)
        }
    }

    /*tick = () => {
        //renderUpdate()
        window.requestAnimationFrame(this.tick)
      }*/

    public destroy(): void {

    }

}

//export default null as any;
