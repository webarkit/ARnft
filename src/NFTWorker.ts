/*
 *  NFTWorker.ts
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
import Worker from 'worker-loader?inline=no-fallback!./Worker';
import { isMobile } from './utils/ARUtils'

export default class NFTWorker {

    private worker: Worker;

    private markerURL: any;

    private _processing: boolean = false;

    private vw: number;
    private vh: number;

    private uuid: string;
    private name: string;
    
    /**
     * The NFTWorker constructor, to create a new instance of the NFTWorker class.
     * @param markerURL the marker url of the NFT marker.
     * @param w the width of the camera.
     * @param h the height of the camera.
     * @param uuid the uuid of the marker assigned by the ARnft constructor.
     */
    constructor(markerURL: string, w: number, h: number,  uuid: string, name: string) {
        this.markerURL = markerURL;
        this.vw = w;
        this.vh = h;
        this.uuid = uuid;
        this.name = name;
    }
    
    /**
     * Initialize the NFTWorker instance, you need to provide the camera_para.dat Url,
     * the ImageData from the video stream and the renderUpdate and trackUpdate functions for the stats.
     * @param cameraURL  
     * @param imageData 
     * @param renderUpdate 
     * @param trackUpdate 
     * @returns true if succesfull.
     */
    public initialize(cameraURL: string, imageData: ImageData, renderUpdate: () => void, trackUpdate: () => void): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.worker = new Worker();
            this.load(cameraURL, imageData, renderUpdate, trackUpdate).then(() => {
                resolve(true);
            });
            const worker = this.worker
            document.addEventListener("terminateWorker", function() {
                worker.postMessage({type: 'stop'})
                worker.terminate();
            });
        });
    }
    
    /**
     * This is the function that will pass the video stream to the worker.
     * @param imageData the image data from the video stream.
     * @returns void
     */
    public process(imageData: ImageData) {

        if (this._processing) {
            return;
        }
        this._processing = true;

        this.worker.postMessage({ type: 'process', imagedata: imageData }, [imageData.data.buffer]);
    }
    
    /**
     * Load the resources from the ARnft instance into the worker.
     * @param cameraURL camera_para.dat url
     * @param imageData image data from the video stream.
     * @param renderUpdate renderUpdate function for the stats.
     * @param trackUpdate trackUpdate for the stats.
     * @returns true if succesfull.
     */
    protected load(cameraURL: string, imageData: ImageData, renderUpdate: () => void, trackUpdate: () => void): Promise<boolean> {

        return new Promise<boolean>((resolve, reject) => {

            var pscale = 320 / Math.max(this.vw, this.vh / 3 * 4);
            var sscale = isMobile() ? window.outerWidth / this.vw : 1

            let sw = this.vw * sscale
            let sh = this.vh * sscale
            

            let w: number = this.vw * pscale;
            let h: number = this.vh * pscale;
            let pw: number = Math.max(w, (h / 3) * 4);
            let ph: number = Math.max(h, (w / 4) * 3);

            const setWindowSizeEvent = new CustomEvent('getWindowSize', { detail: { sw: sw, sh: sh } })
            document.dispatchEvent(setWindowSizeEvent)

            this.worker.postMessage({
                type: 'load',
                pw: pw,
                ph: ph,
                camera_para: cameraURL,
                marker: this.markerURL
            });

            this.worker.onmessage = (ev: any) => {
                var msg = ev.data;
                switch (msg.type) {
                    case 'loaded': {
                        var proj = JSON.parse(msg.proj);
                        const ratioW = pw / w
                        const ratioH = ph / h
                        proj[0] *= ratioW
                        proj[4] *= ratioW
                        proj[8] *= ratioW
                        proj[12] *= ratioW
                        proj[1] *= ratioH
                        proj[5] *= ratioH
                        proj[9] *= ratioH
                        proj[13] *= ratioH
                        const projectionMatrixEvent = new CustomEvent('getProjectionMatrix', { detail: { proj: proj } })
                        document.dispatchEvent(projectionMatrixEvent)
                        break;
                    }
                    case "endLoading": {
                        if (msg.end == true) {
                            // removing loader page if present
                            const loader = document.getElementById('loading')
                            if (loader) {
                                loader.querySelector<HTMLElement>('.loading-text').innerText = 'Start the tracking!'
                                setTimeout(function () {
                                    if (loader.parentElement == null) {
                                       return;                                      
                                    } 
                                    if (loader) {
                                    loader.parentElement.removeChild(loader)
                                    }
                                }, 2000)
                            }
                        }
                        break;
                    }
                    case 'nftData': {
                        const nft = JSON.parse(msg.nft)
                        const nftEvent = new CustomEvent('getNFTData-' + this.uuid + '-' + this.name, { detail: { dpi: nft.dpi, width: nft.width, height: nft.height } })
                        document.dispatchEvent(nftEvent)
                        break
                    }
                    case 'found': {
                        this.found(msg)
                        break
                    }
                    case 'not found': {
                        this.found(null)
                        break
                    }
                    case 'error': {
                        console.log("NFTWorker : error");
                        var event = new Event("nftError");
                        document.dispatchEvent(event);
                        break
                      }
                }
                this._processing = false;
                trackUpdate();
            };
            let renderU = () => {
                renderUpdate()
                window.requestAnimationFrame(renderU)
            }
            renderU();
            this.process(imageData);
        });
    };
    
    /**
     * dispatch an event listener if the marker is lost or the matrix of the marker
     * if found.
     * @param msg message from the worker.
     */
    public found (msg: any) {
        let world: any;
        if (!msg) {
            // commenting out this routine see https://github.com/webarkit/ARnft/pull/184#issuecomment-853400903 
            //if (world) {
                world = null
                const nftTrackingLostEvent = new CustomEvent('nftTrackingLost-' + this.uuid + '-' + this.name, { detail: { name: this.name }})
                document.dispatchEvent(nftTrackingLostEvent)
            //}
        } else {
            world = JSON.parse(msg.matrixGL_RH)
            const matrixGLrhEvent = new CustomEvent('getMatrixGL_RH-' + this.uuid + '-' + this.name, { detail: { matrixGL_RH: world, name: this.name } })
            document.dispatchEvent(matrixGLrhEvent)
        }
    }

    

    public destroy(): void {

    }
    
    /**
     * Stop the NFT tracking and the video streaming.
     */
    static stopNFT () {
        console.log("Stop NFT");
        var event = new Event("terminateWorker");
        document.dispatchEvent(event);
        var event = new Event("stopStreaming");
        document.dispatchEvent(event);
    }

}

//export default null as any;
