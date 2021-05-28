export default class NFTWorker {
    private worker;
    private markerURL;
    private _processing;
    private vw;
    private vh;
    private uuid;
    constructor(markerURL: string, w: number, h: number, uuid: string);
    initialize(cameraURL: string, imageData: ImageData, renderUpdate: () => void, trackUpdate: () => void): Promise<boolean>;
    process(imageData: ImageData): void;
    protected load(cameraURL: string, imageData: ImageData, renderUpdate: () => void, trackUpdate: () => void): Promise<boolean>;
    found(msg: any): void;
    destroy(): void;
    static stopNFT(): void;
}
