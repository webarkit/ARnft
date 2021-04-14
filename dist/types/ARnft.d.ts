import { INFTEntity } from "./core/NFTEntity";
import { AppJson } from "./core/data/AppData";
import { CameraViewRenderer } from "./core/renderers/CameraViewRenderer";
export declare class ARnft {
    cameraView: CameraViewRenderer;
    appData: AppJson;
    configUrl: string;
    markerUrl: string;
    private _arnftCore;
    camData: string;
    constructor(configUrl: string, camUrl: string, markerUrl: string);
    initialize(): Promise<boolean>;
    createEntity(cameraData: string, markerUrl: string, w: number, h: number): void;
    addNFTEntity(entity: INFTEntity, name?: string): INFTEntity;
    private update;
}
