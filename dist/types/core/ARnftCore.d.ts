import { INFTEntity, IMediaNode } from "./NFTEntity";
import { ICameraViewRenderer } from "./renderers/CameraViewRenderer";
import { AppJson } from "./data/AppData";
export declare class ARnftCore {
    private count;
    private _controllers;
    private _videoRenderer;
    private _cameraDataURL;
    private _fps;
    private _lastTime;
    appData: AppJson;
    static readonly EVENT_SET_CAMERA: string;
    static readonly EVENT_FOUND_MARKER: string;
    static readonly EVENT_LOST_MARKER: string;
    constructor(video: ICameraViewRenderer, camData: string);
    addNFTEntity(entity: INFTEntity, name?: string): INFTEntity;
    addNFTEntity2(node: IMediaNode, markerUrl: string, name?: string): void;
    getEntityByName(name: string): INFTEntity;
    getCameraView(): ICameraViewRenderer;
    setFPS(value: number): void;
    initialize(): Promise<boolean>;
    update(): void;
    destroy(): void;
}