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
    facing: string;
    height: number;
    width: number;
    getImage(): ImageData;
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
    constructor(video: HTMLVideoElement);
    get facing(): string;
    get height(): number;
    get width(): number;
    get video(): HTMLVideoElement;
    get canvasProcess(): HTMLCanvasElement;
    get contextProcess(): CanvasRenderingContext2D;
    getImage(): ImageData;
    prepareImage(): void;
    initialize(videoSettings: VideoSettingData): Promise<boolean>;
    destroy(): void;
}
