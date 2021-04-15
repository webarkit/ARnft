import { ARnftCore } from './core/ARnftCore'
import { NFTEntity, INFTEntity, IMediaNode } from "./core/NFTEntity";
import { ARControllerComponent } from "./core/components/ARControllerComponent"
import { AppJson } from "./core/data/AppData";
import { CameraViewRenderer } from "./core/renderers/CameraViewRenderer";
import { getConfig } from "./core/ARUtils";

export default class ARnft {
    public cameraView: CameraViewRenderer;
    public appData: AppJson;
    public configUrl: string;
    public markerUrl: string;
    private _arnftCore: ARnftCore;
    public camData: string;
    constructor(configUrl: string, camUrl: string, markerUrl: string){
        this.camData = camUrl;
        this.configUrl = configUrl;
        this.markerUrl = markerUrl;
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

        let arComponent: ARControllerComponent = new ARControllerComponent();

        let nftEntity: NFTEntity = new NFTEntity(arComponent,this.markerUrl, 200, 200);
        await nftEntity.initialize(this.camData);
        this._arnftCore.addNFTEntity(nftEntity);
        this._arnftCore.update();
    })
        return Promise.resolve(true);
    }

    public createEntity(cameraData: string, markerUrl: string, w: number, h: number) {
        //let nftEntity: NFTEntity = new NFTEntity(markerUrl, w, h);
        //return nftEntity;
        console.log("fake entity created...");

    }

    public addNFTEntity(entity: INFTEntity, name?: string): INFTEntity {
        return this._arnftCore.addNFTEntity(entity, name);
    }

    private update(): void {
        console.log(this._arnftCore);

        this._arnftCore.update();
    }
}
