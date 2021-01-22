import { NFTOrientation } from "./NFTWorker";
export interface IMediaNode {
    update(): void;
    found(value: NFTOrientation): void;
}
export interface INFTEntity {
    update(): void;
    found(msg: NFTOrientation): void;
    initialize(workerURL: string, cameraData: string): Promise<boolean>;
    process(imageData: ImageData): void;
    destroy(): void;
}
export declare class NFTEntity implements INFTEntity {
    private _nodes;
    private _worker;
    private _workerURL;
    private _cameraURL;
    protected orientationMatrix: any;
    protected _markerURL: string;
    constructor(node: IMediaNode, markerURL: string, w: number, h: number);
    initialize(workerURL: string, cameraData: string): Promise<boolean>;
    found(msg: NFTOrientation): void;
    process(imageData: ImageData): void;
    update(): void;
    destroy(): void;
}
