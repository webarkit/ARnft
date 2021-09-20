import { ConfigData } from "./config/ConfigData";
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
interface Entity {
    name: string;
    markerUrl: string;
}
export default class ARnft {
    cameraView: CameraViewRenderer;
    appData: ConfigData;
    width: number;
    height: number;
    configUrl: string;
    listeners: object;
    markerUrl: string;
    camData: string;
    private controllers;
    private static entities;
    private uuid;
    private version;
    constructor(width: number, height: number, configUrl: string);
    static init(width: number, height: number, markerUrls: Array<string>, names: Array<string>, configUrl: string, stats: boolean): Promise<object>;
    static initWithEntities(width: number, height: number, entities: Entity[], configUrl: string, stats: boolean): Promise<object>;
    private _initialize;
    private converter;
    static getEntities(): Entity[];
    dispatchEvent(event: {
        name: string;
        target: any;
        data?: object;
    }): void;
    addEventListener(name: string, callback: object): void;
    removeEventListener(name: string, callback: object): void;
    dispose(): void;
    disposeNFT(): void;
    disposeVideoStream(): void;
}
export {};
