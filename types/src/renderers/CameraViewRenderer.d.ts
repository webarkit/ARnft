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
export declare class CameraViewRenderer implements ICameraViewRenderer {
    private canvas_process;
    private context_process;
    video: HTMLVideoElement;
    private _frame;
    private _facing;
    private vw;
    private vh;
    private w;
    private h;
    private pw;
    private ph;
    private ox;
    private oy;
    constructor(video: HTMLVideoElement);
    getHeight(): number;
    getWidth(): number;
    getPHeight(): number;
    getPWidth(): number;
    getFrame(): ImageData;
    getContext(): CanvasRenderingContext2D;
    getImage(): ImageData;
    initialize(videoSettings: VideoSettingData): Promise<boolean>;
    destroy(): void;
}
