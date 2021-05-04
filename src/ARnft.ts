import { ARnftCore } from './core/ARnftCore'
import { NFTEntity, INFTEntity, IMediaNode } from "./core/NFTEntity";
import { Entity } from "./core/entity/Entity"
import { ARControllerComponent } from "./core/components/ARControllerComponent"
import { CharacterData, AppJson } from "./core/data/AppData";
import { CameraViewRenderer } from "./core/renderers/CameraViewRenderer";
import { getConfig } from "./core/ARUtils";
export default class ARnft {
    public cameraView: CameraViewRenderer;
    public appData: AppJson;
    public configUrl: string;
    public markerUrl: string;
    private _arnftCore: ARnftCore;
    private _data: CharacterData[];
    private _entities: Entity[] = [];
    public camData: string;
    constructor(configUrl: string, camUrl: string, markerUrl: string){
        this.camData = camUrl;
        this.configUrl = configUrl;
        this.markerUrl = markerUrl;
    }

    public async initialize(data: CharacterData[]): Promise<boolean> {
        this._data = data;

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

        // from insectMobile
        let promises: Promise<boolean>[] = this._data.map((characterData: CharacterData) => {
            return new Promise<boolean>((resolve, reject) => {
                //CharacterFactoryBabylon.createCharacterEntity(characterData, this._context).then((entity) => {

                    //let arComponent: ARControllerComponent = entity.getComponent(ARControllerComponent) as ARControllerComponent;
                    let arComponent: ARControllerComponent = new ARControllerComponent();
                    let nftEntity: NFTEntity = new NFTEntity(arComponent, characterData.markerData.url, this.cameraView.getWidth(), this.cameraView.getHeight());
                    this._arnftCore.addNFTEntity(nftEntity);

                    //this._entities.push(entity);
                    //entity.dispatcher.addEventListener(GameEvents.DISPLAY_VIDEO_BUTTON, this.handleDisplayVideoButton.bind(this));
                    resolve(true);
                //});
            });
        });// from insectMobile

        // this._arnftCore.update(); // where to update now?

        return Promise.all(promises).then(async (result) => {
            // all characters created init arnft
            await this._arnftCore.initialize();
            return true;
        });
    })
        return Promise.resolve(true);
        
    }

    // probably this will be deleted...
    public createEntity(cameraData: string, markerUrl: string, w: number, h: number) {
        //let nftEntity: NFTEntity = new NFTEntity(markerUrl, w, h);
        //return nftEntity;
        console.log("fake entity created...");

    }

    // probably this will be deleted...
    public addNFTEntity(entity: INFTEntity, name?: string): INFTEntity {
        return this._arnftCore.addNFTEntity(entity, name);
    }

    private update(): void {
        console.log(this._arnftCore);

        this._arnftCore.update();
    }
}
