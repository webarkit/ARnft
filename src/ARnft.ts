import Container from './utils/html/Container'
import { ConfigData } from "./config/ConfigData";
import Stats from 'stats.js'
import { ICameraViewRenderer, CameraViewRenderer } from "./renderers/CameraViewRenderer";
import { getConfig } from "./utils/ARUtils";
import NFTWorker from './NFTWorker'
import { v4 as uuidv4 } from 'uuid'
import packageJson from '../package.json'
const { version } = packageJson

export default class ARnft {
    public cameraView: CameraViewRenderer;
    public appData: ConfigData;
    public width: number;
    public height: number;
    public configUrl: string;
    public markerUrl: string;
    public camData: string;
    private uuid: string;
    private version: string;
    private _videoRenderer: ICameraViewRenderer;
    private _fps: number = 15;
    private _lastTime: number = 0;
    constructor(width: number, height: number,configUrl: string){
        this.width = width
        this.height = height
        this.configUrl = configUrl;
        this.uuid = uuidv4();
        this.version = version;
        console.log('ARnft ', this.version);
    }

    static async init (width: number, height: number, markerUrl: string, configUrl: string, stats: boolean, camera: boolean): Promise<object> {
        const _arnft = new ARnft(width, height, configUrl);
        return await _arnft.initialize(markerUrl, stats, camera).catch((error: any) => {
            console.error(error);
            return Promise.reject(false);
        })
    }

    public async initialize(markerUrl: string, stats: boolean, camera: boolean): Promise<object> {
        console.log('ARnft init() %cstart...', 'color: yellow; background-color: blue; border-radius: 4px; padding: 2px');
        getConfig(this.configUrl);
        document.addEventListener('getConfig', async (ev: any) => {
            this.appData = ev.detail.config;
            console.log(this.appData);
        // views
        Container.createContainer(this.appData);
        Container.createLoading(this.appData);
        Container.createStats(this.appData.stats.createHtml, this.appData);

        let statsMain, statsWorker

        if (stats) {
            statsMain = new Stats()
            statsMain.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
            document.getElementById('stats1').appendChild(statsMain.dom)

            statsWorker = new Stats()
            statsWorker.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
            document.getElementById('stats2').appendChild(statsWorker.dom)
        }
        this.cameraView = new CameraViewRenderer(document.getElementById("video") as HTMLVideoElement);
            await this.cameraView.initialize(this.appData.videoSettings).catch((error: any) => {
                console.error(error);
                return Promise.reject(false);
            });
        const worker: NFTWorker = new NFTWorker(markerUrl, this.width, this.height);
        worker.initialize(this.appData.cameraPara, this.cameraView.getImage(), () => {})
        console.log(this.cameraView.getImage());
        
        worker.process(this.cameraView.getImage())
        this.update(worker)
        })
        return Promise.resolve(this)
    }

    public update(worker: NFTWorker): void {
        let time: number = Date.now();
        let imageData: ImageData;
        if ((time - this._lastTime) > this._fps) {
            imageData = this.cameraView.getImage();
            console.log(imageData);
            
            this._lastTime = time;
        }
            //element.update();
            if (imageData)
            worker.process(imageData);
        
    }

}
