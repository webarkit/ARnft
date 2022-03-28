export default class NFTWorker {
    private worker;
    private markerURL;
    private _processing;
    private vw;
    private vh;
    private target;
    private uuid;
    private name;
    private addPath;
    protected ready: boolean;
    constructor(markerURL: Array<string>, w: number, h: number, uuid: string, name: string, addPath: string);
    initialize(cameraURL: string, renderUpdate: () => void, trackUpdate: () => void): Promise<boolean>;
    process(imagedata: ImageData, frame: number): void;
    protected load(cameraURL: string, renderUpdate: () => void, trackUpdate: () => void): Promise<boolean>;
    found(msg: any): void;
    isReady(): boolean;
    getUuid(): string;
    getName(): string;
    getMarkerUrl(): string;
    getEventTarget(): EventTarget;
    destroy(): void;
}
