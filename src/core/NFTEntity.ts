import NFTWorker from "./NFTWorker";
import { NFTOrientation } from './NFTOrientation';

export interface IMediaNode {
    update(): void;
    found(value: NFTOrientation): void;
}

export interface INFTEntity {
    update(): void;
    found(msg: NFTOrientation): void;
    initialize(cameraData: string): Promise<boolean>;
    process(imageData: ImageData): void;
    destroy(): void;
}

export class NFTEntity implements INFTEntity {


    private _nodes: IMediaNode[] = [];

    private _worker: typeof NFTWorker;

    private _cameraURL: string;

    protected orientationMatrix: any;

    protected _markerURL: string;

    constructor(node: IMediaNode, markerURL: string, w: number, h: number) {
        this._markerURL = markerURL;
        this._worker = new NFTWorker(this, this._markerURL, w, h);

        this._nodes.push(node);
    }

    public initialize(cameraData: string): Promise<boolean> {
        this._cameraURL = cameraData;
        return this._worker.initialize(this._cameraURL);
    }

    public found(msg: NFTOrientation): void {
        // this.orientationMatrix = (msg) ? JSON.parse(msg.matrixGL_RH) : null;
        this._nodes.forEach(element => {
            element.found(msg);
        });
    }

    public process(imageData: ImageData): void {
        this._worker.process(imageData);
    }

    public update(): void {
        //  loop through nodes and update
        this._nodes.forEach(element => {
            element.update();
        });
    }

    public destroy(): void {

    }
}
