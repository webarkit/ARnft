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
 *  Copyright 2021-2026 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */

import { CameraView, CameraViewError, type CameraViewOptions, type FrameGeometry } from "@webarkit/camera-view";
import { VideoSettingData } from "../config/ConfigData";

export { CameraView, CameraViewError, type CameraViewOptions, type FrameGeometry };

/**
 * Interface for camera frame providers passed to `ARnft.initializeRaw`.
 * Both {@link CameraView} from `@webarkit/camera-view` and the legacy
 * {@link CameraViewRenderer} wrapper satisfy this contract.
 */
export interface ICameraViewRenderer {
    facing: string;
    readonly frame: number;
    getFrame: () => number;
    height: number;
    width: number;
    readonly image: ImageData;
    getImage: () => ImageData;
    initialize: (videoSettings: VideoSettingData) => Promise<boolean | void>;
    destroy: () => void;
    /** true when the video is being rotated 90 degrees onto the process canvas, see VideoSettingData.rotatePortrait. */
    readonly rotated?: boolean;
}

/**
 * Thin compatibility wrapper around {@link CameraView} from `@webarkit/camera-view`
 * that forwards instance `"geometrychange"` events to the legacy global `"videoResize"`
 * event on `window`.
 *
 * @deprecated Use {@link CameraView} from `@webarkit/camera-view` directly.
 */
export class CameraViewRenderer implements ICameraViewRenderer {
    public _video: HTMLVideoElement;

    private view: CameraView;
    private target: EventTarget;

    private onGeometryChange = (event: Event) => {
        const { videoWidth, videoHeight, rotated } = (event as CustomEvent<FrameGeometry>).detail;
        const videoResizeEvent = new CustomEvent<object>("videoResize", {
            detail: { width: videoWidth, height: videoHeight, rotated },
        });
        this.target.dispatchEvent(videoResizeEvent);
    };

    constructor(video: HTMLVideoElement) {
        this._video = video;
        this.target = window || global;
        this.view = new CameraView(video);
    }

    // Getters
    public get facing(): string {
        return this.view.facing;
    }

    public get height(): number {
        return this.view.height;
    }

    public get width(): number {
        return this.view.width;
    }

    public get video(): HTMLVideoElement {
        return this.view.video;
    }

    public get frame(): number {
        return this.view.frame;
    }

    public get canvasProcess(): HTMLCanvasElement {
        return this.view.canvasProcess;
    }

    public get contextProcess(): CanvasRenderingContext2D {
        return this.view.canvasProcess.getContext("2d", { alpha: false, willReadFrequently: true });
    }

    public get rotated(): boolean {
        return this.view.rotated;
    }

    public get geometry(): FrameGeometry {
        return this.view.geometry;
    }

    public getFrame(): number {
        return this.view.getFrame();
    }

    public getImage(): ImageData {
        return this.view.getImage();
    }

    public get image(): ImageData {
        return this.view.image;
    }

    public prepareImage(): void {
        // Handled internally by CameraView on initialize() and video resize.
    }

    public async initialize(videoSettings: VideoSettingData): Promise<boolean> {
        this.view.removeEventListener("geometrychange", this.onGeometryChange);
        this.view.addEventListener("geometrychange", this.onGeometryChange);
        await this.view.initialize(videoSettings);
        return true;
    }

    public destroy(): void {
        this.view.removeEventListener("geometrychange", this.onGeometryChange);
        const hadStream = this._video.srcObject != null;
        this.view.destroy();
        this.target.addEventListener(
            "stopVideoStreaming",
            function () {
                console.log("stop streaming");
                if (hadStream) {
                    const currentAR = document.getElementById("app");
                    if (currentAR !== null && currentAR !== undefined) {
                        currentAR.remove();
                    }
                }
            },
            { once: true }
        );
    }
}
