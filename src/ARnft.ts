import Container from './utils/html/Container'
import { ConfigData } from "./config/ConfigData";
import Stats from 'stats.js'
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
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
    public listeners:  object;
    public markerUrl: string;
    public camData: string;
    private uuid: string;
    private version: string;
    constructor(width: number, height: number,configUrl: string){
        this.width = width
        this.height = height
        this.configUrl = configUrl;
        this.listeners = {};
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
        // views
        Container.createContainer(this.appData);
        Container.createLoading(this.appData);
        Container.createStats(this.appData.stats.createHtml, this.appData);

        let statsMain: any, statsWorker: any

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
        const worker: NFTWorker = new NFTWorker(markerUrl, this.width, this.height, this.uuid);
        worker.initialize(
            this.appData.cameraPara, 
            this.cameraView.getImage(), 
            () => {
                if (stats) {
                    statsMain.update()
            }
            },
            () => {
                if (stats) {
                    statsWorker.update()
            }
        })     
        worker.process(this.cameraView.getImage())
        let update = () => {
            worker.process(this.cameraView.getImage());
            requestAnimationFrame(update);
        }
        update()
        })
        return Promise.resolve(this)
    }

    private converter(): any {
        return this;
      }

    public dispatchEvent(event: { name: string; target: any; data?: object }) {
        let listeners = this.converter().listeners[event.name];
        if(listeners) {
            for(let i = 0; i < listeners.length; i++) {
                listeners[i].call(this, event);
            }
        }
      };
    
    public addEventListener(name: string, callback: object) {
        if(!this.converter().listeners[name]) {
            this.converter().listeners[name] = [];
        }
        this.converter().listeners[name].push(callback);
      };
    
    public removeEventListener(name: string, callback: object) {
        if(this.converter().listeners[name]) {
            let index = this.converter().listeners[name].indexOf(callback);
            if(index > -1) {
                this.converter().listeners[name].splice(index, 1);
          }
        }
      };
    
    /* _teardownVideo (video: HTMLVideoElement) {
        video.srcObject.getVideoTracks()[0].stop()
        video.srcObject = null
        video.src = null
    };*/
}
