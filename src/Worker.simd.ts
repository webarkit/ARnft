/* eslint-env worker */
/*
 *  Worker.simd.ts
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
 *  Copyright 2021-2025 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */

import { ARControllerNFT } from "@webarkit/jsartoolkit-nft/dist/ARToolkitNFT_simd";
import { OneEuroFilter } from "@webarkit/oneeurofilter-ts";
import { AbstractARControllerNFT } from "@webarkit/jsartoolkit-nft/types/src/abstractions/AbstractARControllerNFT";
import { IImageObj } from "@webarkit/jsartoolkit-nft/types/src/abstractions/CommonInterfaces";
const ctx: Worker = self as any;

ctx.onmessage = (e: MessageEvent<any>) => {
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

type GetNftMarkerData = {
    index: number;
    type: number;
    marker: {
        id: number;
        error: number;
        found: boolean;
        pose: number[];
    };
    matrix: Float64Array;
    matrixGL_RH: Float64Array;
};

type GetNftMarkerEventArgs = {
    name: "getNFTMarker";
    data: GetNftMarkerData;
    target: any;
};

let next: IImageObj = null;
let lastFrame: number = 0;
let ar: AbstractARControllerNFT | null = null;
let markerResult: any = null;

// initialize the OneEuroFilter
const WARM_UP_TOLERANCE = 5;
let tickCount = 0;
let oef: boolean;
let filterMinCF = 0.0001;
let filterBeta = 0.01;
const filter = new OneEuroFilter(filterMinCF, filterBeta);

const oefFilter = (matrixGL_RH: any): number[] => {
    tickCount += 1;
    let mat;
    if (tickCount > WARM_UP_TOLERANCE) {
        mat = filter.filter(Date.now(), matrixGL_RH);
    } else {
        mat = matrixGL_RH;
    }
    return mat;
};

const load = async (msg: any) => {
    const basePath = self.origin;
    let cameraParamUrl: string;
    let nftMarkerUrls: Array<string> = [];
    let markerLength: number = msg.marker.length;
    oef = msg.oef;
    console.debug("Base path:", basePath);
    const onLoad = async (arController: AbstractARControllerNFT) => {
        ar = arController;
        const cameraMatrix = ar.getCameraMatrix();

        ar.addEventListener("getNFTMarker", (ev: GetNftMarkerEventArgs) => {
            let mat: number[] | Float64Array;
            if (oef == true) {
                mat = oefFilter(ev.data.matrixGL_RH);
            } else {
                mat = ev.data.matrixGL_RH;
            }
            markerResult = {
                type: "found",
                matrixGL_RH: JSON.stringify(mat),
            };
        });
        // after the ARControllerNFT is set up, we load the NFT Marker
        const regexM =
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/gim;
        const reM = regexM.test(msg.marker);

        for (let i = 0; i < markerLength; i++) {
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

        await ar
            .loadNFTMarkers(
                nftMarkerUrls,
                (id: number[]) => {
                    let m = 0;
                    let marker = ar.getNFTData(id[m], 0);
                    ctx.postMessage({ type: "markerInfos", marker: marker });
                    ar.trackNFTMarkerId(id[m]);
                    console.log("loadNFTMarker -> ", id[m]);
                    ctx.postMessage({ type: "endLoading", end: true });
                    m++;
                },
                (err: number) => {
                    console.error("Error: ", err, " loading marker in loadNFTMarkers!");
                }
            )
            .catch((err: string) => {
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

    ARControllerNFT.initWithDimensions(msg.pw, msg.ph, cameraParamUrl, true).then(onLoad).catch(onError);
};

const process = (next: IImageObj, frame: number) => {
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
