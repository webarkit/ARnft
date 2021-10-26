import { ConfigData } from "./config/ConfigData";
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
interface IEntity {
    name: string;
    markerUrl: string;
}
interface IInitConfig {
    width: number;
    height: number;
    configUrl: string;
    stats?: boolean;
    autoUpdate?: boolean;
}
interface INameInitConfig extends IInitConfig {
    markerUrls: Array<string>;
    names: Array<string>;
}
interface IEntityInitConfig extends IInitConfig {
    entities: IEntity[];
}
export default class ARnft {
    cameraView: CameraViewRenderer;
    appData: ConfigData;
    width: number;
    height: number;
    configUrl: string;
    markerUrl: string;
    camData: string;
    autoUpdate: boolean;
    private controllers;
    private static entities;
    private target;
    private uuid;
    private version;
    private initialized;
    constructor(width: number, height: number, configUrl: string);
    static init(width: number, height: number, markerUrls: Array<string>, names: Array<string>, configUrl: string, stats: boolean): Promise<object>;
    static initWithEntities(width: number, height: number, entities: IEntity[], configUrl: string, stats: boolean): Promise<object>;
    static initWithConfig(params: INameInitConfig | IEntityInitConfig): Promise<ARnft>;
    private _initialize;
    update(): void;
    static getEntities(): IEntity[];
    getEventTarget(): EventTarget;
    dispose(): void;
    disposeNFT(): void;
    disposeVideoStream(): void;
}
export {};
