/*
 *  CameraViewRenderer.ts
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
 *  Copyright 2021-2024 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */

import { VideoSettingData } from "../config/ConfigData";
import { getProcessGeometry } from "../utils/ARnftUtils";

export interface ICameraViewRenderer {
    facing: string;
    readonly frame: number;
    getFrame: () => number;
    height: number;
    width: number;
    readonly image: ImageData;
    getImage: () => ImageData;
    initialize: (videoSettings: VideoSettingData) => Promise<boolean>;
    destroy: () => void;
    /** true when the video is being rotated 90 degrees onto the process canvas, see VideoSettingData.rotatePortrait. */
    readonly rotated?: boolean;
}
export class CameraViewRenderer implements ICameraViewRenderer {
    private canvas_process: HTMLCanvasElement;

    private context_process: CanvasRenderingContext2D;

    public _video: HTMLVideoElement;

    private _facing: VideoSettingData["facingMode"];

    private vw: number;
    private vh: number;

    private w: number;
    private h: number;

    private pw: number;
    private ph: number;

    private ox: number;
    private oy: number;

    private rotatePortrait: boolean = false;
    private rot: boolean = false;

    private target: EventTarget;
    private targetFrameRate: number = 60;
    private imageDataCache: Uint8ClampedArray;
    private _frame: number;

    private lastCache: number = 0;

    private videoResizeListener = () => this.onVideoResize();

    constructor(video: HTMLVideoElement) {
        this.canvas_process = document.createElement("canvas");
        this.context_process = this.canvas_process.getContext("2d", { alpha: false, willReadFrequently: true });
        this._video = video;
        this.target = window || global;
        this._frame = 0;
    }

    // Getters
    public get facing(): string {
        return this._facing;
    }

    public get height(): number {
        return this.vh;
    }

    public get width(): number {
        return this.vw;
    }

    public get video(): HTMLVideoElement {
        return this._video;
    }

    public get frame(): number {
        return this._frame;
    }

    public get canvasProcess(): HTMLCanvasElement {
        return this.canvas_process;
    }

    public get contextProcess(): CanvasRenderingContext2D {
        return this.context_process;
    }

    public get rotated(): boolean {
        return this.rot;
    }

    public getFrame(): number {
        return this._frame;
    }

    public getImage(): ImageData {
        const now = Date.now();
        if (now - this.lastCache > 1000 / this.targetFrameRate) {
            this.drawFrame();
            const imageData = this.context_process.getImageData(0, 0, this.pw, this.ph);
            if (this.imageDataCache == null) {
                this.imageDataCache = imageData.data;
            } else {
                this.imageDataCache.set(imageData.data);
            }
            this.lastCache = now;
            this._frame++;
        }
        return new ImageData(this.imageDataCache.slice(), this.pw, this.ph);
    }

    public get image(): ImageData {
        const now = Date.now();
        if (now - this.lastCache > 1000 / this.targetFrameRate) {
            this.drawFrame();
            const imageData = this.context_process.getImageData(0, 0, this.pw, this.ph);
            if (this.imageDataCache == null) {
                this.imageDataCache = imageData.data;
            } else {
                this.imageDataCache.set(imageData.data);
            }
            this.lastCache = now;
            this._frame++;
        }
        return new ImageData(this.imageDataCache.slice(), this.pw, this.ph);
    }

    /**
     * Draws the current video frame onto the process canvas. When `rot` is
     * true (portrait video with rotatePortrait opted in) the frame is rotated
     * 90 degrees so it fills the process canvas without letterboxing; the
     * destination footprint (ox, oy, w, h) is identical to the non-rotated
     * case. See https://github.com/webarkit/ARnft/issues/344
     */
    private drawFrame(): void {
        const ctx = this.context_process;
        if (this.rot) {
            ctx.save();
            ctx.translate(this.pw, 0);
            ctx.rotate(Math.PI / 2);
            ctx.drawImage(this.video, 0, 0, this.vw, this.vh, this.oy, this.pw - this.ox - this.w, this.h, this.w);
            ctx.restore();
        } else {
            ctx.drawImage(this.video, 0, 0, this.vw, this.vh, this.ox, this.oy, this.w, this.h);
        }
    }

    public prepareImage(): void {
        this.vw = this._video.videoWidth;
        this.vh = this._video.videoHeight;

        const geometry = getProcessGeometry(this.vw, this.vh, this.rotatePortrait, true);
        this.rot = geometry.rot;
        this.w = geometry.w;
        this.h = geometry.h;
        this.pw = geometry.pw;
        this.ph = geometry.ph;
        this.ox = geometry.ox;
        this.oy = geometry.oy;

        this.canvas_process.width = this.pw;
        this.canvas_process.height = this.ph;

        this.context_process.fillStyle = "black";
        this.context_process.fillRect(0, 0, this.pw, this.ph);
    }

    /**
     * Called when the camera stream changes resolution, e.g. when a mobile device is
     * rotated and the stream swaps width and height. Recomputes the process canvas
     * geometry and dispatches a "videoResize" event so the NFTWorker(s) can update
     * the window size and the projection matrix.
     */
    private onVideoResize(): void {
        const vw = this._video.videoWidth;
        const vh = this._video.videoHeight;
        if (vw === 0 || vh === 0 || (vw === this.vw && vh === this.vh)) {
            return;
        }
        this.prepareImage();
        const videoResizeEvent = new CustomEvent<object>("videoResize", {
            detail: { width: this.vw, height: this.vh, rotated: this.rot },
        });
        this.target.dispatchEvent(videoResizeEvent);
    }

    public async initialize(videoSettings: VideoSettingData): Promise<boolean> {
        this._facing = videoSettings.facingMode || "environment";
        if (videoSettings.targetFrameRate != null) {
            this.targetFrameRate = videoSettings.targetFrameRate;
        }
        this.rotatePortrait = videoSettings.rotatePortrait === true;

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            try {
                const hint: any = {
                    audio: false,
                    video: {
                        facingMode: this._facing,
                        width: { min: videoSettings.width.min, max: videoSettings.width.max },
                    },
                };
                if (navigator.mediaDevices.enumerateDevices) {
                    const devices = await navigator.mediaDevices.enumerateDevices();
                    const videoDevices = [] as Array<string>;
                    let videoDeviceIndex = 0;
                    devices.forEach(function (device) {
                        if (device.kind == "videoinput") {
                            videoDevices[videoDeviceIndex++] = device.deviceId;
                        }
                    });
                    if (videoDevices.length > 1) {
                        hint.video.deviceId = { exact: videoDevices[videoDevices.length - 1] };
                    }
                }
                this._video.srcObject = await navigator.mediaDevices.getUserMedia(hint);
                this._video = await new Promise<HTMLVideoElement>((resolve) => {
                    this._video.onloadedmetadata = () => resolve(this._video);
                });
                this.prepareImage();
                this._video.addEventListener("resize", this.videoResizeListener);
                return true;
            } catch (error) {
                return Promise.reject(error);
            }
        } else {
            return Promise.reject("Sorry, Your device does not support this experience.");
        }
    }

    public destroy(): void {
        const video = this._video;
        video.removeEventListener("resize", this.videoResizeListener);
        this.target.addEventListener("stopVideoStreaming", function () {
            const stream = <MediaStream>video.srcObject;
            console.log("stop streaming");
            if (stream !== null && stream !== undefined) {
                const tracks = stream.getTracks();

                tracks.forEach(function (track) {
                    track.stop();
                });

                video.srcObject = null;

                let currentAR = document.getElementById("app");
                if (currentAR !== null && currentAR !== undefined) {
                    currentAR.remove();
                }
            }
        });
    }
}
