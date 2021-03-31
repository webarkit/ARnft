import { AppJson } from "./core/data/AppData";
import { CameraViewRenderer } from "./core/renderers/CameraViewRenderer";
export declare class ARnft {
    cameraView: CameraViewRenderer;
    appData: AppJson;
    configUrl: string;
    private _arnftCore;
    camData: string;
    constructor(configUrl: string, camUrl: string);
    initialize(): Promise<boolean>;
    private update;
}
