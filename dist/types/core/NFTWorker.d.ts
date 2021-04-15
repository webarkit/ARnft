import { NFTEntity } from "./NFTEntity";
export default class NFTWorker {
    private _dispatcher;
    private worker;
    private markerURL;
    private _processing;
    private vw;
    private vh;
    constructor(d: NFTEntity, markerURL: string, w: number, h: number);
    initialize(cameraURL: string): Promise<boolean>;
    process(imageData: ImageData): void;
    protected load(cameraURL: string): Promise<boolean>;
    destroy(): void;
}
