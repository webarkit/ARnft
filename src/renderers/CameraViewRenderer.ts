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
export interface VideoSettingData {
    width: ScreenData;
    height: ScreenData;
    facingMode: string;
}

export interface ScreenData {
    min: number;
    max: number;
}

export interface ICameraViewRenderer {
    getHeight(): number;
    getWidth(): number;
    getImage(): ImageData;
}

export class CameraViewRenderer implements ICameraViewRenderer {

    private canvas_process: HTMLCanvasElement;

    private context_process: CanvasRenderingContext2D;

    public video: HTMLVideoElement;

    private _facing: string;

    private vw: number;
    private vh: number;

    private w: number;
    private h: number;

    private pw: number;
    private ph: number;

    private ox: number;
    private oy: number;

    constructor(video: HTMLVideoElement) {
        this.canvas_process = document.createElement('canvas');
        this.context_process = this.canvas_process.getContext('2d');
        this.video = video;
    }

    public getHeight(): number {
        return this.vh;
    }

    public getWidth(): number {
        return this.vw;
    }

    public getImage(): ImageData {
        this.context_process.drawImage(this.video, 0, 0, this.vw, this.vh, this.ox, this.oy, this.w, this.h);
        return this.context_process.getImageData(0, 0, this.pw, this.ph);
    }

    public initialize(videoSettings: VideoSettingData): Promise<boolean> {

        this._facing = videoSettings.facingMode || 'environment'

        const constraints = {}
        const mediaDevicesConstraints = {}

        return new Promise<boolean>(async (resolve, reject) => {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                var hint: any = {
                    "audio": false,
                    "video": {
                        facingMode: this._facing,
                        width: { min: 480, max: 640 }
                    }
                };

                navigator.mediaDevices.getUserMedia(hint).then(async (stream) => {
                    this.video.srcObject = stream;
                    this.video = await new Promise<HTMLVideoElement>((resolve, reject) => {
                        this.video.onloadedmetadata = () => resolve(this.video);
                    }).then((value) => {

                        this.vw = this.video.videoWidth;
                        this.vh = this.video.videoHeight;

                        var pscale = 320 / Math.max(this.vw, this.vh / 3 * 4);

                        this.w = this.vw * pscale;
                        this.h = this.vh * pscale;
                        this.pw = Math.max(this.w, (this.h / 3) * 4);
                        this.ph = Math.max(this.h, (this.w / 4) * 3);
                        this.ox = (this.pw - this.w) / 2;
                        this.oy = (this.ph - this.h) / 2;

                        this.canvas_process.width = this.pw;
                        this.canvas_process.height = this.ph;

                        this.context_process.fillStyle = 'black';
                        this.context_process.fillRect(0, 0, this.pw, this.ph);
                        resolve(true);
                        return value;
                    }).catch((msg) => {
                        console.log(msg);
                        reject(msg);
                        return null;
                    });
                }).catch((error) => {
                    console.error(error);
                    reject(error);
                });
            }
            else {
                // reject("No navigator.mediaDevices && navigator.mediaDevices.getUserMedia");
                reject("Sorry, Your device does not support this experince.");
            }
        });
    }

    public destroy(): void {
        const video = this.video
        document.addEventListener("stopStreaming", function() {
            const stream = <MediaStream>video.srcObject;
            console.log("stop streaming");
            if (stream !== null && stream !== undefined) {
                const tracks = stream.getTracks();
      
                tracks.forEach(function(track) {
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