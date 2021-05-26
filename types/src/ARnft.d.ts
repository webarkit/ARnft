import { ConfigData } from "./config/ConfigData";
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
export default class ARnft {
    cameraView: CameraViewRenderer;
    appData: ConfigData;
    width: number;
    height: number;
    configUrl: string;
    markerUrl: string;
    camData: string;
    private uuid;
    private version;
    constructor(width: number, height: number, configUrl: string);
    static init(width: number, height: number, markerUrl: string, configUrl: string, stats: boolean, camera: boolean): Promise<object>;
    initialize(markerUrl: string, stats: boolean, camera: boolean): Promise<object>;
}
