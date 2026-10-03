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
 *  Copyright 2021-2025 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */
import Worker from "./Worker?worker&inline";
import { getWindowSize } from "./utils/ARnftUtils";

export default class NFTWorker {
    private worker: Worker;

    private markerURL: Array<string>;

    private _processing: boolean = false;

    private vw: number;
    private vh: number;

    // projection matrix received from the worker, before the video size scaling
    private cameraProj: number[];

    private target: EventTarget;

    private uuid: string;
    private name: string;
    private addPath: string;
    private rotatePortrait: boolean;

    protected ready: boolean;

    /**
     * The NFTWorker constructor, to create a new instance of the NFTWorker class.
     * @param markerURL An array of strings representing the URLs of the NFT markers.
     * @param w the width of the camera.
     * @param h the height of the camera.
     * @param uuid the UUID of the marker assigned by the ARnft constructor.
     * @param name the name of the marker.
     * @param addPath the additional path for the marker.
     * @param rotatePortrait opt-in flag, see VideoSettingData.rotatePortrait. Must be
     * kept in sync with the CameraViewRenderer that produces the processed frames.
     */
    constructor(
        markerURL: Array<string>,
        w: number,
        h: number,
        uuid: string,
        name: string,
        addPath: string,
        rotatePortrait: boolean = false
    ) {
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

    /**
     * Initialize the NFTWorker instance. You need to provide the camera\_para.dat URL,
     * the renderUpdate and trackUpdate functions for the stats, and a boolean for filtering the matrix.
     * @param cameraURL The URL of the camera\_para.dat file.
     * @param renderUpdate The function to call for rendering updates.
     * @param trackUpdate The function to call for tracking updates.
     * @param oef A boolean for filtering the matrix.
     * @returns A promise that resolves to true if successful.
     */
    public async initialize(
        cameraURL: string,
        renderUpdate: () => void,
        trackUpdate: () => void,
        oef: boolean
    ): Promise<boolean> {
        this.worker = new Worker();
        const worker = this.worker;

        const onVideoResize = (ev: any) => {
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

    /**
     * Update the camera size after the video stream changed resolution (e.g. when a
     * mobile device is rotated) and dispatch the recomputed window size and projection matrix.
     * @param w the new width of the camera.
     * @param h the new height of the camera.
     * @param rotated optional, whether the renderer now rotates the frames onto the process
     * canvas (see CameraViewRenderer.rotated). When omitted the current setting is kept.
     */
    public setVideoSize(w: number, h: number, rotated?: boolean): void {
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

    /**
     * Passes the video stream to the worker for processing.
     * @param imagedata The image data from the video stream.
     * @param frame The current frame number.
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
     * @param cameraURL The URL of the camera\_para.dat file.
     * @param renderUpdate The function to call for rendering updates.
     * @param trackUpdate The function to call for tracking updates.
     * @param oef A boolean for filtering the matrix.
     * @returns A promise that resolves to true if successful.
     */
    protected load(
        cameraURL: string,
        renderUpdate: () => void,
        trackUpdate: () => void,
        oef: boolean
    ): Promise<boolean> {
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

        this.worker.onmessage = (ev: any) => {
            const msg = ev.data;
            switch (msg.type) {
                case "loaded": {
                    this.cameraProj = JSON.parse(msg.proj);
                    this.dispatchProjectionMatrix();
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
     * Dispatch the size of the rendering window for the current video size.
     */
    private dispatchWindowSize(): void {
        const [sw, sh] = getWindowSize(this.vw, this.vh);
        const setWindowSizeEvent = new CustomEvent<object>("getWindowSize", { detail: { sw: sw, sh: sh } });
        this.target.dispatchEvent(setWindowSizeEvent);
    }

    /**
     * Scale the projection matrix of the worker, computed for the whole process canvas,
     * to the area covered by the current video size and dispatch it.
     */
    private dispatchProjectionMatrix(): void {
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
            // The process canvas received a frame rotated 90 degrees onto it
            // (see CameraViewRenderer.drawFrame()), so the projection's x/y
            // axes are rotated back here to match the un-rotated video that
            // is actually shown on screen. drawFrame() rotates clockwise (the video
            // top edge lands on the canvas right edge), so the process clip coords
            // (xr, yr) map back to the displayed clip coords as (-yr, xr).
            // See https://github.com/webarkit/ARnft/issues/344
            for (let c = 0; c < 4; c++) {
                const x = proj[4 * c];
                const y = proj[4 * c + 1];
                proj[4 * c] = -y;
                proj[4 * c + 1] = x;
            }
        }
        const projectionMatrixEvent = new CustomEvent<object>("getProjectionMatrix", {
            detail: { proj: proj },
        });
        this.target.dispatchEvent(projectionMatrixEvent);
    }

    /**
     * Dispatch an event listener if the marker is lost or the matrix of the marker
     * if found.
     * @param msg message from the worker.
     */
    public found(msg: any) {
        let world: Float64Array;
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

    public getMarkerUrl(): Array<string> {
        return this.markerURL;
    }

    public getEventTarget(): EventTarget {
        return this.target;
    }

    public destroy(): void {}
}

//export default null as any;
