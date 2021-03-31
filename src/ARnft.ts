import { ARnftCore } from './ARnftCore'
import { AppJson } from "./core/data/AppData";
import { CameraViewRenderer } from "./core/renderers/CameraViewRenderer";
import { getConfig } from "./core/ARUtils";

export class ARnft {
    public cameraView: CameraViewRenderer;
    public appData: AppJson;
    public configUrl: string;
    private _arnftCore: ARnftCore;
    public camData: string;
    constructor(configUrl: string, camUrl: string){
        this.camData = camUrl;
        this.configUrl = configUrl;
    }

    public async initialize(): Promise<boolean> {

        getConfig(this.configUrl);
        document.addEventListener('getConfig', async (ev: any) => {
            this.appData = ev.detail.config;
            console.log(this.appData);
        // views
        this.cameraView = new CameraViewRenderer(document.getElementById("video") as HTMLVideoElement);
        await this.cameraView.initialize(this.appData.videoSettings).catch((error) => {
            console.error(error);
            return Promise.reject(false);
        });

        this._arnftCore = new ARnftCore(this.cameraView, this.camData);
        await this._arnftCore.initialize().catch((error: any) => {
            console.error(error);
            return Promise.reject(false);
        })
        this.update();
    })
        return Promise.resolve(true);
    }

    private update(): void {
        console.log(this._arnftCore);
        
        this._arnftCore.update();
    }
}