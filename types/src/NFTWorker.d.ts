export default class NFTWorker {
    private worker;
    private markerURL;
    private _processing;
    private vw;
    private vh;
    constructor(markerURL: string, w: number, h: number);
    initialize(cameraURL: string): Promise<boolean>;
    process(imageData: ImageData): void;
    protected load(cameraURL: string): Promise<boolean>;
    destroy(): void;
}
