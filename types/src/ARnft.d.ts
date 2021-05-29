import { ConfigData } from "./config/ConfigData";
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
export default class ARnft {
    cameraView: CameraViewRenderer;
    appData: ConfigData;
    width: number;
    height: number;
    configUrl: string;
    listeners: object;
    markerUrl: string;
    camData: string;
    private uuid;
    private version;
    constructor(width: number, height: number, configUrl: string);
    static init(width: number, height: number, markerUrl: string, configUrl: string, stats: boolean, camera: boolean): Promise<object>;
    initialize(markerUrl: string, stats: boolean, camera: boolean): Promise<object>;
    private converter;
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
