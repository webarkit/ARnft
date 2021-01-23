import { INFTEntity } from "./core/NFTEntity";
import { CameraViewRenderer } from "./core/renderers/CamerViewRenderer";
import { AppJson } from "./core/data/AppData";
export declare class ARnft {
    private count;
    private _controllers;
    private _videoRenderer;
    private _cameraDataURL;
    private _workerURL;
    private _fps;
    private _lastTime;
    appData: AppJson;
    static readonly EVENT_SET_CAMERA: string;
    static readonly EVENT_FOUND_MARKER: string;
    static readonly EVENT_LOST_MARKER: string;
    constructor(video: CameraViewRenderer, camData: string, worker: string);
    addNFTEntity(entity: INFTEntity, name?: string): INFTEntity;
    getEntityByName(name: string): INFTEntity;
    getCameraView(): CameraViewRenderer;
    setFPS(value: number): void;
    init(configData: string, camData: string, workerURL: string): Promise<boolean>;
    initialize(): Promise<boolean>;
    update(): void;
    destroy(): void;
}
