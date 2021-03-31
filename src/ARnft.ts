import { NFTEntity, INFTEntity, IMediaNode } from "./core/NFTEntity";
import { ICameraViewRenderer, CameraViewRenderer } from "./core/renderers/CameraViewRenderer";
import { AppJson } from "./core/data/AppData";
import appdata from "./core/data/appdata.json";
import { getConfig, getConfig2, getConfig3 } from "./core/ARUtils";

export class ARnft {

    private count: number = 0;

    private _controllers: Map<string, INFTEntity> = new Map<string, INFTEntity>();

    private _videoRenderer: ICameraViewRenderer;

    private _cameraDataURL: string;

    private _fps: number = 15;

    private _lastTime: number = 0;

    public appData: AppJson;

    // events
    public static readonly EVENT_SET_CAMERA: string = "ARNFT_SET_CAMERA_EVENT";
    public static readonly EVENT_FOUND_MARKER: string = "ARNFT_FOUND_MARKER_EVENT";
    public static readonly EVENT_LOST_MARKER: string = "ARNFT_LOST_MARKER_EVENT";

    constructor(video: ICameraViewRenderer, camData: string) {
        this._videoRenderer = video;
        this._cameraDataURL = camData;
        // set default fps at 15
        this.setFPS(this._fps);
    }

    public addNFTEntity(entity: INFTEntity, name?: string): INFTEntity {

        if (!name)
            name = "entity-" + this.count++;

        this._controllers.set(name, entity);
        return entity;
    }

    public addNFTEntity2(node: IMediaNode, markerUrl: string, name?: string) {

        if (!name)
            name = "entity-" + this.count++;
    
        let entity = new NFTEntity(node, markerUrl, 120, 120);

        this._controllers.set(name, entity);
    }

    public getEntityByName(name: string): INFTEntity {
        if (!this._controllers.has(name))
            return null;

        return this._controllers.get(name);
    }

    public getCameraView(): ICameraViewRenderer {
        return this._videoRenderer;
    }

    public setFPS(value: number): void {
        this._fps = 1000 / value;
    }

    public  getConf(config: string): void {
        getConfig3(config);
        document.addEventListener('getConfig', (ev: any) => {
            this.appData = ev.detail.config;    
        })
        console.log(this.appData);
        
    }

    public initialize(): Promise<boolean> {
        console.log("init ARnft");

        let promises: Promise<boolean>[] = [];
        this._controllers.forEach(element => {
            promises.push(element.initialize(this._cameraDataURL));
        });

        return Promise.all(promises).then(() => {
            return true;
        });
    }

    public update(): void {
        let time: number = Date.now();
        let imageData: ImageData;
        if ((time - this._lastTime) > this._fps) {
            imageData = this._videoRenderer.getImage();
            this._lastTime = time;
        }

        this._controllers.forEach(element => {
            element.update();
            if (imageData)
                element.process(imageData);
        });
    }

    public destroy(): void {
        this._controllers.forEach(entity => {
            entity.destroy();
        });
        this._controllers.clear();
        this._videoRenderer = null;
    }
}
