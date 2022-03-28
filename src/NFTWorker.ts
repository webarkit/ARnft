/*
 *  NFTWorker.ts
 *  ARnft
 *
 *  This file is part of ARnft - WebARKit.
 *
 *  ARnft is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  ARnft is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with ARnft.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  As a special exception, the copyright holders of this library give you
 *  permission to link this library with independent modules to produce an
 *  executable, regardless of the license terms of these independent modules, and to
 *  copy and distribute the resulting executable under terms of your choice,
 *  provided that you also meet, for each linked independent module, the terms and
 *  conditions of the license of that module. An independent module is a module
 *  which is neither derived from nor based on this library. If you modify this
 *  library, you may extend this exception to your version of the library, but you
 *  are not obligated to do so. If you do not wish to do so, delete this exception
 *  statement from your version.
 *
 *  Copyright 2021 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */
import Worker from "worker-loader?inline=no-fallback!./Worker";
import { getWindowSize } from "./utils/ARnftUtils";

export default class NFTWorker {
    private worker: Worker;

    private markerURL: any;

    private _processing: boolean = false;

    private vw: number;
    private vh: number;

    private target: EventTarget;

    private uuid: string;
    private name: string;
    private addPath: string;

    protected ready: boolean;

    /**
     * The NFTWorker constructor, to create a new instance of the NFTWorker class.
     * @param markerURL the marker url of the NFT marker.
     * @param w the width of the camera.
     * @param h the height of the camera.
     * @param uuid the uuid of the marker assigned by the ARnft constructor.
     */
    constructor(markerURL: Array<string>, w: number, h: number, uuid: string, name: string, addPath: string) {
        this.markerURL = markerURL;
        this.vw = w;
        this.vh = h;
        this.target = window || global;
        this.uuid = uuid;
        this.name = name;
        this.ready = false;
        this.addPath = addPath;
    }

    /**
     * Initialize the NFTWorker instance, you need to provide the camera_para.dat Url,
     * the ImageData from the video stream and the renderUpdate and trackUpdate functions for the stats.
     * @param cameraURL
     * @param imageData
     * @param renderUpdate
     * @param trackUpdate
     * @returns true if succesfull.
     */
    public async initialize(cameraURL: string, renderUpdate: () => void, trackUpdate: () => void): Promise<boolean> {
        this.worker = new Worker();
        const worker = this.worker;

        this.target.addEventListener("terminateWorker-" + this.name, function () {
            worker.postMessage({ type: "stop" });
            worker.terminate();
        });
        return await this.load(cameraURL, renderUpdate, trackUpdate);
    }

    /**
     * This is the function that will pass the video stream to the worker.
     * @param imageData the image data from the video stream.
     * @returns void
     */
    public process(imagedata: ImageData, frame: number) {
        if (this._processing) {
            return;
        }
        this._processing = true;

        this.worker.postMessage({ type: "process", imagedata, frame }, [imagedata.data.buffer]);
    }

    /**
     * Load the resources from the ARnft instance into the worker.
     * @param cameraURL camera_para.dat url
     * @param imageData image data from the video stream.
     * @param renderUpdate renderUpdate function for the stats.
     * @param trackUpdate trackUpdate for the stats.
     * @returns true if succesfull.
     */
    protected load(cameraURL: string, renderUpdate: () => void, trackUpdate: () => void): Promise<boolean> {
        let [sw, sh, pw, ph, w, h] = getWindowSize(this.vw, this.vh);

        const setWindowSizeEvent = new CustomEvent<object>("getWindowSize", { detail: { sw: sw, sh: sh } });
        this.target.dispatchEvent(setWindowSizeEvent);

        this.worker.postMessage({
            type: "load",
            pw: pw,
            ph: ph,
            camera_para: cameraURL,
            marker: this.markerURL,
            addPath: this.addPath,
        });

        this.worker.onmessage = (ev: any) => {
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
                    const projectionMatrixEvent = new CustomEvent<object>("getProjectionMatrix", {
                        detail: { proj: proj },
                    });
                    this.target.dispatchEvent(projectionMatrixEvent);
                    break;
                }
                case "endLoading": {
                    if (msg.end == true) {
                        // removing loader page if present
                        const loader = document.getElementById("loading");
                        if (loader) {
                            loader.querySelector<HTMLElement>(".loading-text").innerText = "Start the tracking!";
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
                    this.target.dispatchEvent(new CustomEvent<object>("nftLoaded-" + this.uuid));
                    break;
                }
                case "markerInfos": {
                    const marker = msg.marker;
                    const nftEvent = new CustomEvent<object>("getNFTData-" + this.uuid + "-" + this.name, {
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
        this.worker.onerror = (err: any) => {
            console.error("Worker error from NFTWorker: ", err);
        };
        let renderU = () => {
            renderUpdate();
            window.requestAnimationFrame(renderU);
        };
        renderU();
        return Promise.resolve(true);
    }

    /**
     * dispatch an event listener if the marker is lost or the matrix of the marker
     * if found.
     * @param msg message from the worker.
     */
    public found(msg: any) {
        let world: any;
        if (!msg) {
            // commenting out this routine see https://github.com/webarkit/ARnft/pull/184#issuecomment-853400903
            //if (world) {
            world = null;
            const nftTrackingLostEvent = new CustomEvent<object>("nftTrackingLost-" + this.uuid + "-" + this.name, {
                detail: { name: this.name },
            });
            this.target.dispatchEvent(nftTrackingLostEvent);
            //}
        } else {
            world = JSON.parse(msg.matrixGL_RH);
            const matrixGLrhEvent = new CustomEvent<object>("getMatrixGL_RH-" + this.uuid + "-" + this.name, {
                detail: { matrixGL_RH: world, name: this.name },
            });
            this.target.dispatchEvent(matrixGLrhEvent);
        }
    }

    public isReady() {
        return this.ready;
    }
    public getUuid(): string {
        return this.uuid;
    }

    public getName(): string {
        return this.name;
    }

    public getMarkerUrl(): string {
        return this.markerURL;
    }

    public getEventTarget(): EventTarget {
        return this.target;
    }

    public destroy(): void {}
}

//export default null as any;
