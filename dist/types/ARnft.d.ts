import { INFTEntity } from "./core/NFTEntity";
import { CharacterData, AppJson } from "./core/data/AppData";
import { CameraViewRenderer } from "./core/renderers/CameraViewRenderer";
export default class ARnft {
    cameraView: CameraViewRenderer;
    appData: AppJson;
    configUrl: string;
    markerUrl: string;
    private _arnftCore;
    private _data;
    private _entities;
    camData: string;
    constructor(configUrl: string, camUrl: string, markerUrl: string);
    initialize(data: CharacterData[]): Promise<boolean>;
    createEntity(cameraData: string, markerUrl: string, w: number, h: number): void;
    addNFTEntity(entity: INFTEntity, name?: string): INFTEntity;
    private update;
}
