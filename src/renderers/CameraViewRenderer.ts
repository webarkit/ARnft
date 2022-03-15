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
 *  Copyright 2021 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */

import { VideoSettingData } from "../config/ConfigData";

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

    private target: EventTarget;
    private targetFrameRate: number = 60;
    private imageDataCache: Uint8ClampedArray;
    private _frame: number;

    private lastCache: number = 0;

    constructor(video: HTMLVideoElement) {
        this.canvas_process = document.createElement("canvas");
        this.context_process = this.canvas_process.getContext("2d", { alpha: false });
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

    public getFrame(): number {
        return this._frame;
    }

    public getImage(): ImageData {
        const now = Date.now();
        if (now - this.lastCache > 1000 / this.targetFrameRate) {
            this.context_process.drawImage(this.video, 0, 0, this.vw, this.vh, this.ox, this.oy, this.w, this.h);
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
            this.context_process.drawImage(this.video, 0, 0, this.vw, this.vh, this.ox, this.oy, this.w, this.h);
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

    public prepareImage(): void {
        this.vw = this._video.videoWidth;
        this.vh = this._video.videoHeight;

        var pscale = 320 / Math.max(this.vw, (this.vh / 3) * 4);

        // Void float point
        this.w = Math.floor(this.vw * pscale);
        this.h = Math.floor(this.vh * pscale);
        this.pw = Math.floor(Math.max(this.w, (this.h / 3) * 4));
        this.ph = Math.floor(Math.max(this.h, (this.w / 4) * 3));
        this.ox = Math.floor((this.pw - this.w) / 2);
        this.oy = Math.floor((this.ph - this.h) / 2);

        this.canvas_process.width = this.pw;
        this.canvas_process.height = this.ph;

        this.context_process.fillStyle = "black";
        this.context_process.fillRect(0, 0, this.pw, this.ph);
    }

    public async initialize(videoSettings: VideoSettingData): Promise<boolean> {
        this._facing = videoSettings.facingMode || "environment";
        if (videoSettings.targetFrameRate != null) {
            this.targetFrameRate = videoSettings.targetFrameRate;
        }

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
                const stream = await navigator.mediaDevices.getUserMedia(hint);

                this._video.srcObject = stream;
                this._video = await new Promise<HTMLVideoElement>((resolve) => {
                    this._video.onloadedmetadata = () => resolve(this._video);
                });
                this.prepareImage();
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
