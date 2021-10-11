import { ConfigData } from "./config/ConfigData";
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
declare const eventEmitter: any;
interface Entity {
    name: string;
    markerUrl: string;
}
export default class ARnft extends eventEmitter {
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
    private target;
    private uuid;
    private version;
    private _fps;
    private _lastTime;
    load(width: number, height: number, configUrl: string): void;
    static init(width: number, height: number, markerUrls: Array<string>, names: Array<string>, configUrl: string, stats: boolean): Promise<object>;
    static initWithEntities(width: number, height: number, entities: Entity[], configUrl: string, stats: boolean): Promise<object>;
    private _initialize;
    setFPS(value: number): void;
    static getEntities(): Entity[];
    getEventTarget(): EventTarget;
    private _update;
    dispose(): void;
    disposeNFT(): void;
    disposeVideoStream(): void;
}
export {};
