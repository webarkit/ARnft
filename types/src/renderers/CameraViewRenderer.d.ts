import { VideoSettingData } from "../config/ConfigData";
export interface ICameraViewRenderer {
    facing: string;
    height: number;
    width: number;
    image: ImageData;
}
export declare class CameraViewRenderer implements ICameraViewRenderer {
    private canvas_process;
    private context_process;
    _video: HTMLVideoElement;
    private _facing;
    private vw;
    private vh;
    private w;
    private h;
    private pw;
    private ph;
    private ox;
    private oy;
    private target;
    private targetFrameRate;
    private imageDataCache;
    private _frame;
    private lastCache;
    constructor(video: HTMLVideoElement);
    get facing(): string;
    get height(): number;
    get width(): number;
    get video(): HTMLVideoElement;
    get frame(): number;
    get canvasProcess(): HTMLCanvasElement;
    get contextProcess(): CanvasRenderingContext2D;
    get image(): ImageData;
    prepareImage(): void;
    initialize(videoSettings: VideoSettingData): Promise<boolean>;
    destroy(): void;
}
