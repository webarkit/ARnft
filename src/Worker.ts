/* eslint-env worker */
/*
 *  Worker.ts
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
import jsartoolkitnft from "jsartoolkitnft";
const { ARControllerNFT } = jsartoolkitnft;
const ctx: Worker = self as any;

ctx.onmessage = (e) => {
    const msg = e.data;
    switch (msg.type) {
        case "load": {
            load(msg);
            return;
        }
        case "stop": {
            ar = null;
            break;
        }
        case "process": {
            next = msg.imagedata;
            process(next, msg.frame);
        }
    }
};

let next: any = null;
let lastFrame: number = 0;
let ar: any = null;
let markerResult: any = null;

const load = (msg: any) => {
    const basePath = self.origin;
    let cameraParamUrl: string;
    let nftMarkerUrls: Array<string> = [];
    let markerLength: number = msg.marker.length;
    console.debug("Base path:", basePath);
    const onLoad = (arController: any) => {
        ar = arController;
        const cameraMatrix = ar.getCameraMatrix();

        ar.addEventListener("getNFTMarker", (ev: any) => {
            markerResult = {
                type: "found",
                matrixGL_RH: JSON.stringify(ev.data.matrixGL_RH),
            };
        });
        // after the ARControllerNFT is set up, we load the NFT Marker
        const regexM =
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/gim;
        const reM = regexM.test(msg.marker);

        for (var i = 0; i < markerLength; i++) {
            let nftMarkerUrl: string;
            if (reM == true) {
                if (msg.addPath) {
                    nftMarkerUrl = basePath + "/" + msg.addPath + "/" + msg.marker[i];
                } else {
                    nftMarkerUrls = msg.marker[i];
                }
            } else if (reM == false) {
                if (msg.addPath) {
                    nftMarkerUrl = basePath + "/" + msg.addPath + "/" + msg.marker[i];
                } else {
                    nftMarkerUrl = basePath + "/" + msg.marker[i];
                }
            }
            nftMarkerUrls.push(nftMarkerUrl);
        }
        console.debug("Loading NFT marker at: ", nftMarkerUrls);

        ar.loadNFTMarkers(nftMarkerUrls, (id: number) => {
            let marker = ar.getNFTData(ar.id, 0);
            ctx.postMessage({ type: "markerInfos", marker: marker });
            ar.trackNFTMarkerId(id);
            console.log("loadNFTMarker -> ", id);
            console.log(id);
            ctx.postMessage({ type: "endLoading", end: true });
        }).catch((err: any) => {
            console.error("Error in loading marker on Worker", err);
        });

        ctx.postMessage({ type: "loaded", proj: JSON.stringify(cameraMatrix) });
    };

    const onError = (error: any) => {
        console.error(error);
    };
    const regexC = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/gim;
    const reC = regexC.test(msg.camera_para);
    if (reC == true) {
        if (msg.addPath) {
            cameraParamUrl = basePath + "/" + msg.addPath + "/" + msg.camera_para;
        } else {
            cameraParamUrl = msg.camera_para;
        }
    } else if (reC == false) {
        if (msg.addPath) {
            cameraParamUrl = basePath + "/" + msg.addPath + "/" + msg.camera_para;
        } else {
            cameraParamUrl = basePath + "/" + msg.camera_para;
        }
    }
    console.debug("Loading camera at:", cameraParamUrl);

    ARControllerNFT.initWithDimensions(msg.pw, msg.ph, cameraParamUrl).then(onLoad).catch(onError);
};

const process = (next: any, frame: number) => {
    if (frame !== lastFrame) {
        markerResult = null;
        if (ar && ar.process) {
            ar.process(next);
        }
        lastFrame = frame;
    }

    if (markerResult != null) {
        ctx.postMessage(markerResult);
    } else {
        ctx.postMessage({ type: "not found" });
    }
    next = null;
};
