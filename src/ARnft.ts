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
import Container from "./utils/html/Container";
import { ConfigData } from "./config/ConfigData";
import Stats from "stats.js";
import { CameraViewRenderer, ICameraViewRenderer } from "./renderers/CameraViewRenderer";
import { getConfig } from "./utils/ARnftUtils";
import NFTWorker from "./NFTWorker";
import { v4 as uuidv4 } from "uuid";
import packageJson from "../package.json";
const { version } = packageJson;

interface IEntity {
    name: string;
    markerUrl: string;
}

interface IInitConfig {
    /** the width in pixels of the video camera. */
    width: number;
    /** the height in pixels of the video camera. */
    height: number;
    /** the url of the config.json file. */
    configUrl: string;
    /** true if you want the stats. */
    stats?: boolean;
    /** false if you want to maintain it yourself */
    autoUpdate?: boolean;
}

interface INameInitConfig extends IInitConfig {
    /** the Array of url of the markers (without the extension) */
    markerUrls: Array<Array<string>>;
    /** the names of the markers */
    names: Array<Array<string>>;
}

interface IEntityInitConfig extends IInitConfig {
    /** the Array of Entity. */
    entities: IEntity[];
}
interface IViews {
    container: HTMLDivElement;
    canvas: HTMLCanvasElement;
    video: HTMLVideoElement;
    loading?: HTMLElement;
    stats?: HTMLElement;
}

export default class ARnft {
    public cameraView: CameraViewRenderer;
    public appData: ConfigData;
    public addPath: string;
    public width: number;
    public height: number;
    public configUrl: string;
    public markerUrl: string;
    public camData: string;
    public autoUpdate: boolean = true;
    private controllers: NFTWorker[];
    private static entities: IEntity[];
    private target: EventTarget;
    private uuid: string;
    private version: string;
    private initialized: boolean;
    private _views: IViews;

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
    constructor(width: number, height: number, configUrl: string) {
        this.width = width;
        this.height = height;
        this.configUrl = configUrl;
        this.target = window || global;
        this.uuid = uuidv4();
        this.version = version;
        console.log("ARnft ", this.version);
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

    static async init(
        width: number,
        height: number,
        markerUrls: Array<Array<string>>,
        names: Array<Array<string>>,
        configUrl: string,
        stats: boolean
    ): Promise<object> {
        return ARnft.initWithConfig({ width, height, markerUrls, names, configUrl, stats });
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

    static async initWithEntities(
        width: number,
        height: number,
        entities: Array<IEntity>,
        configUrl: string,
        stats: boolean
    ): Promise<object> {
        return ARnft.initWithConfig({ width, height, entities, configUrl, stats });
    }

    static async initWithConfig(params: INameInitConfig | IEntityInitConfig) {
        const _arnft = new ARnft(params.width, params.height, params.configUrl);
        if (params.autoUpdate != null) {
            _arnft.autoUpdate = params.autoUpdate;
        }
        try {
            let markerUrls: string[][] = [];
            let names;
            const nameParams = params as INameInitConfig;
            const entityParams = params as IEntityInitConfig;
            if (nameParams.markerUrls != null && nameParams.names != null) {
                if (entityParams.entities == null) {
                    markerUrls = nameParams.markerUrls;
                    names = nameParams.names;
                    this.entities = names.map(function (v, k, a) {
                        return { name: v[0], markerUrl: markerUrls[k][0] };
                    });
                }
            } else if (entityParams.entities != null) {
                this.entities = entityParams.entities;
                markerUrls = this.entities.map((x) => [x.markerUrl]);
                names = this.entities.map((x) => [x.name]);
            } else {
                throw "markerUrls or entities can't be undefined";
            }
            return await _arnft._initialize(markerUrls, names, params.stats);
        } catch (error) {
            if ((error as { code: string }).code) {
                console.error(error);
                return Promise.reject(error);
            }
        }
    }

    /**
     * Used internally by the init static function. It create the html Container,
     * stats, initialize the CameraRenderer for the video stream,  and the NFTWorker.
     * @param markerUrls the url Array of the markers.
     * @param names the names of the markers
     * @param stats choose if you want the stats.
     * @returns the ARnft object.
     */
    private async _initialize(
        markerUrls: Array<Array<string>>,
        names: Array<Array<string>>,
        stats: boolean
    ): Promise<this> {
        const initEvent = new Event("initARnft");
        this.target.dispatchEvent(initEvent);
        console.log(
            "ARnft init() %cstart...",
            "color: yellow; background-color: blue; border-radius: 4px; padding: 2px"
        );

        let statsMain: any, statsWorker: any;
        getConfig(this.configUrl)
            .then((data) => {
                this.appData = data;
                this.addPath = data.addPath;

                // views
                this._views = Container.createContainer(this.appData);
                this._views.loading = Container.createLoading(this.appData);
                this._views.stats = Container.createStats(this.appData.stats.createHtml, this.appData);

                if (stats) {
                    statsMain = new Stats();
                    statsMain.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
                    document.getElementById("stats1").appendChild(statsMain.dom);
                    statsWorker = new Stats();
                    statsWorker.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
                    document.getElementById("stats2").appendChild(statsWorker.dom);
                }

                var containerEvent = new Event("containerEvent");
                document.dispatchEvent(containerEvent);

                this.controllers = [];
                this.cameraView = new CameraViewRenderer(this._views.video);
                return this.cameraView.initialize(this.appData.videoSettings);
            })
            .then(() => {
                const renderUpdate = () => (stats ? statsMain.update() : null);
                const trackUpdate = () => (stats ? statsWorker.update() : null);
                markerUrls.forEach((markerUrl: Array<string>, index: number) => {
                    this.controllers.push(
                        new NFTWorker(markerUrl, this.width, this.height, this.uuid, names[index][0], this.addPath)
                    );
                    this.controllers[index].initialize(this.appData.cameraPara, renderUpdate, trackUpdate);
                });

                this.initialized = true;
            })
            .catch(function (error: any) {
                return Promise.reject(error);
            });

        this.target.addEventListener("nftLoaded-" + this.uuid, () => {
            const nftWorkersNotReady = this.controllers.filter((nftWorker) => {
                return nftWorker.isReady() === false;
            });

            if (nftWorkersNotReady.length === 0) {
                this.target.dispatchEvent(new CustomEvent<object>("ARnftIsReady"));
            }
        });

        let _update = () => {
            if (this.initialized && this.autoUpdate) {
                this.controllers.forEach((controller) =>
                    controller.process(this.cameraView.image, this.cameraView.frame)
                );
            }
            requestAnimationFrame(_update);
        };
        _update();
        return this;
    }

    /**
     * Used for a custom initialization of the camera and mediaStream. It create the html Container,
     * stats, initialize the CameraRenderer for the video stream,  and the NFTWorker. You must provide
     * your own cameraView based on the ICameraViewRenderer interface.
     * @param markerUrls the url Array of the markers.
     * @param names the names of the markers.
     * @param cameraView the own CameraViewRenderer class instance.
     * @param stats choose if you want the stats.
     * @returns the ARnft object.
     */
    public async initializeRaw(
        markerUrls: Array<Array<string>>,
        names: Array<string>,
        cameraView: ICameraViewRenderer,
        stats: boolean
    ): Promise<this> {
        const initEvent = new Event("initARnft");
        this.target.dispatchEvent(initEvent);
        console.log(
            "ARnft init() %cstart...",
            "color: yellow; background-color: blue; border-radius: 4px; padding: 2px"
        );

        let statsMain: any, statsWorker: any;
        getConfig(this.configUrl)
            .then((data) => {
                this.appData = data;
                this.addPath = data.addPath;

                // views
                this._views = Container.createContainer(this.appData);
                this._views.loading = Container.createLoading(this.appData);
                this._views.stats = Container.createStats(this.appData.stats.createHtml, this.appData);

                if (stats) {
                    statsMain = new Stats();
                    statsMain.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
                    document.getElementById("stats1").appendChild(statsMain.dom);
                    statsWorker = new Stats();
                    statsWorker.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
                    document.getElementById("stats2").appendChild(statsWorker.dom);
                }

                var containerEvent = new Event("containerEvent");
                document.dispatchEvent(containerEvent);

                this.controllers = [];

                return cameraView.initialize(this.appData.videoSettings);
            })
            .then(() => {
                const renderUpdate = () => (stats ? statsMain.update() : null);
                const trackUpdate = () => (stats ? statsWorker.update() : null);
                markerUrls.forEach((markerUrl: Array<string>, index: number) => {
                    this.controllers.push(
                        new NFTWorker(markerUrl, this.width, this.height, this.uuid, names[index], this.addPath)
                    );
                    this.controllers[index].initialize(this.appData.cameraPara, renderUpdate, trackUpdate);
                });

                this.initialized = true;
            })
            .catch(function (error: any) {
                return Promise.reject(error);
            });

        this.target.addEventListener("nftLoaded-" + this.uuid, () => {
            const nftWorkersNotReady = this.controllers.filter((nftWorker) => {
                return nftWorker.isReady() === false;
            });

            if (nftWorkersNotReady.length === 0) {
                this.target.dispatchEvent(new CustomEvent<object>("ARnftIsReady"));
            }
        });

        let _update = () => {
            if (this.initialized && this.autoUpdate) {
                this.controllers.forEach((controller) =>
                    controller.process(cameraView.getImage(), cameraView.getFrame())
                );
            }
            requestAnimationFrame(_update);
        };
        _update();
        return this;
    }

    /**
     * Default autoUpdate true. If set, don't call this function. When it isn't, then you have to maintain it yourself.
     */
    public update(): void {
        if (!this.initialized || this.autoUpdate) return;
        if (this.cameraView != null) {
            this.controllers.forEach((controller) => controller.process(this.cameraView.image, this.cameraView.frame));
        }
    }

    public static getEntities(): IEntity[] {
        return this.entities;
    }

    /**
     *
     * @returns the event target
     */
    public getEventTarget(): EventTarget {
        return this.target;
    }

    public get views() {
        return Object.freeze(this._views);
    }

    /**
     * Dispose the Video stream and the NFTWorker.
     */
    public dispose() {
        this.disposeVideoStream();
        this.disposeAllNFTs();
    }

    /**
     * Dispose only the NFTWorker.
     */
    public disposeNFT(name: string) {
        let terminateWorker = "terminateWorker-" + name;
        var event = new Event(terminateWorker);
        this.target.dispatchEvent(event);
    }

    /**
     * Dispose the Array of NFTWorkers.
     */
    public disposeAllNFTs() {
        const entities = ARnft.getEntities();
        entities.forEach((entity) => {
            this.disposeNFT(entity.name);
        });
    }

    /**
     * Dispose only the video stream.
     */
    public disposeVideoStream() {
        this.cameraView.destroy();
        var event = new Event("stopVideoStreaming");
        this.target.dispatchEvent(event);
    }
}
