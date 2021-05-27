export default class NFTWorker {
    private worker;
    private markerURL;
    private _processing;
    private vw;
    private vh;
    constructor(markerURL: string, w: number, h: number);
    initialize(cameraURL: string, imageData: ImageData, renderUpdate: () => void): Promise<boolean>;
    process(imageData: ImageData): void;
    protected load(cameraURL: string, imageData: ImageData): Promise<boolean>;
    found(msg: any): void;
    destroy(): void;
}
