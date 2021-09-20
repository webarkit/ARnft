/*
 *  ARnft.ts
 *  ARnft
 *
 *  This file is part of ARnft - WebARKit.
 *
 *  ARnft is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  ARnft is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with ARnft.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  As a special exception, the copyright holders of this library give you
 *  permission to link this library with independent modules to produce an
 *  executable, regardless of the license terms of these independent modules, and to
 *  copy and distribute the resulting executable under terms of your choice,
 *  provided that you also meet, for each linked independent module, the terms and
 *  conditions of the license of that module. An independent module is a module
 *  which is neither derived from nor based on this library. If you modify this
 *  library, you may extend this exception to your version of the library, but you
 *  are not obligated to do so. If you do not wish to do so, delete this exception
 *  statement from your version.
 *
 *  Copyright 2021 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */
import Container from './utils/html/Container'
import { ConfigData } from "./config/ConfigData";
import Stats from 'stats.js'
import { CameraViewRenderer } from "./renderers/CameraViewRenderer";
import { getConfig } from "./utils/ARUtils";
import NFTWorker from './NFTWorker'
import { v4 as uuidv4 } from 'uuid'
import packageJson from '../package.json'
const { version } = packageJson

interface Entity {
    name: string, 
    markerUrl: string
}
export default class ARnft {
    public cameraView: CameraViewRenderer;
    public appData: ConfigData;
    public width: number;
    public height: number;
    public configUrl: string;
    public listeners:  object;
    public markerUrl: string;
    public camData: string;
    private controllers: NFTWorker[];
    private static entities: Entity[];
    private uuid: string;
    private version: string;

    /**
     * The **ARnft** constructor to create a new instance of the ARnft class. 
     * Example code: 
     * ```javascript
     * const nft = new ARnft(640, 480, 'config.json');
     * ```
     * @param width (number) the width in pixels of the video camera.
     * @param height (number) the height in pixels of the video camera.
     * @param configUrl (string) the url of the config.json file
     */
    constructor(width: number, height: number, configUrl: string){
        this.width = width
        this.height = height
        this.configUrl = configUrl;
        this.listeners = {};
        this.uuid = uuidv4();
        this.version = version;
        console.log('ARnft ', this.version);
    }
    
    /**
     * The init function let define the basic set-up for the NFT marker.
     * Internally use the initialize function, that is responsible to load all the resources.
     * @param width (number) the width in pixels of the video camera.
     * @param height (number) the height in pixels of the video camera.
     * @param markerUrls (Array<string>) the Array of url of the markers (without the extension) 
     * @param names the names of the markers
     * @param configUrl (string) the url of the config.json file
     * @param stats (boolean) true if you want the stats.
     * @returns (object) the nft object.
     */

    static async init (width: number, height: number, markerUrls: Array<string>, names: Array<string>, configUrl: string, stats: boolean): Promise<object> {
        const _arnft = new ARnft(width, height, configUrl);
        return await _arnft._initialize(markerUrls, names, stats).catch((error: any) => {
            console.error(error);
            return Promise.reject(false);
        })
    }

    /**
     * The initWithEntities function let set-up the NFT markers with a Entity object. 
     * We set an Array of Entity for multiple NFT markers. An Entity is composed of a unique name and
     * a markerUrl.
     * Internally use the initialize function, that is responsible to load all the resources.
     * @param width (number) the width in pixels of the video camera.
     * @param height (number) the height in pixels of the video camera.
     * @param entities (Entity[]) the Array of Entity  
     * @param configUrl (string) the url of the config.json file
     * @param stats (boolean) true if you want the stats.
     * @returns (object) the nft object.
     */

    static async initWithEntities (width: number, height: number, entities: Entity[], configUrl: string, stats: boolean): Promise<object> {
        const _arnft = new ARnft(width, height, configUrl);
        this.entities = entities;
        let markerUrls = this.entities.map((entity)=>{ return entity.markerUrl })
        let names = this.entities.map((entity) => { return entity.name})
        return await _arnft._initialize(markerUrls, names, stats).catch((error: any) => {
            console.error(error);
            return Promise.reject(false);
        })
    }

    /**
     * Used internally by the init static function. It create the html Container, 
     * stats, initialize the CameraRenderer for the video stream,  and the NFTWorker.
     * @param markerUrls the url Array of the markers.
     * @param names the names of the markers
     * @param stats choose if you want the stats.
     * @returns the ARnft object.
     */

    private async _initialize(markerUrls: Array<string>, names: Array<string>, stats: boolean): Promise<object> {
        var event = new Event("initARnft");
        document.dispatchEvent(event);
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

        this.controllers = [];
        this.cameraView = new CameraViewRenderer(document.getElementById("video") as HTMLVideoElement);
        await this.cameraView.initialize(this.appData.videoSettings).catch((error: any) => {
            console.error(error);
            return Promise.reject(false);
        });
        markerUrls.forEach((markerUrl: string, index: number) => {   
            this.controllers.push(new NFTWorker(markerUrl, this.width, this.height, this.uuid, names[index]));
            this.controllers[index].initialize(
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

            this.controllers[index].process(this.cameraView.getImage())
            let update = () => {
            this.controllers[index].process(this.cameraView.getImage());
            requestAnimationFrame(update);
            }
            update()
            
        })
    })
        return Promise.resolve(this)
    }

    /**
     * Used only by the ARnft functions.
     * @returns 
     */
    private converter(): any {
        return this;
      }

    public static getEntities() {
        return this.entities;
    }

    /**
     * Dispatch an event from the ARnft instance.
     * @param event set the event to dispatch.
     */
    public dispatchEvent(event: { name: string; target: any; data?: object }) {
        let listeners = this.converter().listeners[event.name];
        if(listeners) {
            for(let i = 0; i < listeners.length; i++) {
                listeners[i].call(this, event);
            }
        }
      };
    
    /**
     * Add an event listener to the ARnft instance. Choose the name
     * of the event to listen, and set the callback.
     * @param name the name of the event to listen.
     * @param callback callback function.
     */
    public addEventListener(name: string, callback: object) {
        if(!this.converter().listeners[name]) {
            this.converter().listeners[name] = [];
        }
        this.converter().listeners[name].push(callback);
      };
    
    /**
     * Remove an event listener from the ARnft instance. Choose the name
     * of the event to remove and set the callback.
     * @param name name of the event to remove.
     * @param callback callback function.
     */
    public removeEventListener(name: string, callback: object) {
        if(this.converter().listeners[name]) {
            let index = this.converter().listeners[name].indexOf(callback);
            if(index > -1) {
                this.converter().listeners[name].splice(index, 1);
          }
        }
      };
    
    /**
     * Dispose the Video stream and the NFTWorker.
     */
    public dispose() {
        this.disposeVideoStream();
        this.disposeNFT();    
    }

    /**
     * Dispose only the NFTWorker.
     */
    public disposeNFT() {
        NFTWorker.stopNFT();
    }

    /**
     * Dispose only the video stream.
     */
    public disposeVideoStream() {
        this.cameraView.destroy();
    }
}
