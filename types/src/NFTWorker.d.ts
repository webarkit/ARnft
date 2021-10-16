export default class NFTWorker {
    private worker;
    private markerURL;
    private _processing;
    private vw;
    private vh;
    private target;
    private uuid;
    private name;
    protected ready: boolean;
    constructor(markerURL: string, w: number, h: number, uuid: string, name: string);
    initialize(cameraURL: string, imageData: ImageData, renderUpdate: () => void, trackUpdate: () => void): Promise<boolean>;
    process(imageData: ImageData): void;
    protected load(cameraURL: string, imageData: ImageData, renderUpdate: () => void, trackUpdate: () => void): Promise<boolean>;
    found(msg: any): void;
    isReady(): boolean;
    getUuid(): string;
    getName(): string;
    getMarkerUrl(): string;
    getEventTarget(): EventTarget;
    destroy(): void;
    static stopNFT(): void;
}
