import { CameraView, CameraViewError, type CameraViewOptions, type FrameGeometry } from "@webarkit/camera-view";
import { VideoSettingData } from "../config/ConfigData";
export { CameraView, CameraViewError, type CameraViewOptions, type FrameGeometry };
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
    readonly rotated?: boolean;
}
export declare class CameraViewRenderer implements ICameraViewRenderer {
    _video: HTMLVideoElement;
    private view;
    private target;
    private onGeometryChange;
    constructor(video: HTMLVideoElement);
    get facing(): string;
    get height(): number;
    get width(): number;
    get video(): HTMLVideoElement;
    get frame(): number;
    get canvasProcess(): HTMLCanvasElement;
    get contextProcess(): CanvasRenderingContext2D;
    get rotated(): boolean;
    get geometry(): FrameGeometry;
    getFrame(): number;
    getImage(): ImageData;
    get image(): ImageData;
    prepareImage(): void;
    initialize(videoSettings: VideoSettingData): Promise<boolean>;
    destroy(): void;
}
