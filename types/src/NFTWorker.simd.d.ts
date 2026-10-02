export default class NFTWorker {
    private worker;
    private markerURL;
    private _processing;
    private vw;
    private vh;
    private cameraProj;
    private target;
    private uuid;
    private name;
    private addPath;
    private rotatePortrait;
    protected ready: boolean;
    constructor(markerURL: Array<string>, w: number, h: number, uuid: string, name: string, addPath: string, rotatePortrait?: boolean);
    initialize(cameraURL: string, renderUpdate: () => void, trackUpdate: () => void, oef: boolean): Promise<boolean>;
    setVideoSize(w: number, h: number, rotated?: boolean): void;
    process(imagedata: ImageData, frame: number): void;
    protected load(cameraURL: string, renderUpdate: () => void, trackUpdate: () => void, oef: boolean): Promise<boolean>;
    private dispatchWindowSize;
    private dispatchProjectionMatrix;
    found(msg: any): void;
    isReady(): boolean;
    getUuid(): string;
    getName(): string;
    getMarkerUrl(): Array<string>;
    getEventTarget(): EventTarget;
    destroy(): void;
}
