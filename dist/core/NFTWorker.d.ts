import { NFTEntity } from "./NFTEntity";
export declare class NFTOrientation {
    position: IterableIterator<number>;
    rotation: IterableIterator<number>;
    matrix: IterableIterator<number>;
}
export declare class NFTWorker {
    private _dispatcher;
    private worker;
    private markerURL;
    private _processing;
    private vw;
    private vh;
    constructor(d: NFTEntity, markerURL: string, w: number, h: number);
    private position;
    private rotation;
    initialize(workerURL: string, cameraURL: string): Promise<boolean>;
    private getArrayMatrix;
    process(imageData: ImageData): void;
    protected load(cameraURL: string): Promise<boolean>;
}
