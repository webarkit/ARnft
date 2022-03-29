import { ConfigData } from "./config/ConfigData";
import { CameraViewRenderer, ICameraViewRenderer } from "./renderers/CameraViewRenderer";
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
    markerUrls: Array<Array<string>>;
    names: Array<Array<string>>;
}
interface IEntityInitConfig extends IInitConfig {
    entities: IEntity[];
}
interface IViews {
    container: HTMLDivElement;
    canvas: HTMLCanvasElement;
    video: HTMLVideoElement;
    loading?: HTMLElement;
    stats?: HTMLElement;
}
export default class ARnft {
    cameraView: CameraViewRenderer;
    appData: ConfigData;
    addPath: string;
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
    private _views;
    constructor(width: number, height: number, configUrl: string);
    static init(width: number, height: number, markerUrls: Array<Array<string>>, names: Array<Array<string>>, configUrl: string, stats: boolean): Promise<object>;
    static initWithEntities(width: number, height: number, entities: Array<IEntity>, configUrl: string, stats: boolean): Promise<object>;
    static initWithConfig(params: INameInitConfig | IEntityInitConfig): Promise<ARnft>;
    private _initialize;
    initializeRaw(markerUrls: Array<Array<string>>, names: Array<string>, cameraView: ICameraViewRenderer, stats: boolean): Promise<this>;
    update(): void;
    static getEntities(): IEntity[];
    getEventTarget(): EventTarget;
    get views(): Readonly<IViews>;
    dispose(): void;
    disposeNFT(name: string): void;
    disposeAllNFTs(): void;
    disposeVideoStream(): void;
}
export {};
