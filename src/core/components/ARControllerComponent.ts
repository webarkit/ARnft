import { IMediaNode } from '../NFTEntity';

export class ARControllerComponent implements IMediaNode{

    protected world: any;
    private _hasFound: boolean = false;
    private _frameDrops: number = 0;

    constructor() {}
    public update(){
        if (!this.world) {
            this._hasFound = false;
            this._frameDrops = 0;
        } else {}
    }

    public found(msg: any): void {

    this.world = msg;
    }
}