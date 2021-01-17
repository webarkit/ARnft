import { NFTEntity } from "./NFTEntity";
export declare class NFTOrientation {
    position: number[];
    rotation: number[];
}
export declare class NFTWorker {
    private _dispatcher;
    private worker;
    private markerURL;
    private _processing;
    private vw;
    private vh;
    constructor(d: NFTEntity, markerURL: string, w: number, h: number);
    private vector3zero;
    initialize(workerURL: string, cameraURL: string): Promise<boolean>;
    protected getArrayMatrix(value: any): any;
    process(imageData: ImageData): void;
    protected load(cameraURL: string): Promise<boolean>;
}
