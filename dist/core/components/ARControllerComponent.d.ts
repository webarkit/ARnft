import { IMediaNode } from '../NFTEntity';
export declare class ARControllerComponent implements IMediaNode {
    protected world: any;
    private _hasFound;
    private _frameDrops;
    constructor();
    update(): void;
    found(msg: any): void;
}
