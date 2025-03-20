import { ARControllerNFT } from "@webarkit/jsartoolkit-nft/dist/ARToolkitNFT_simd";
import { OneEuroFilter } from "@webarkit/oneeurofilter-ts";
const ctx = self;
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
let next = null;
let lastFrame = 0;
let ar = null;
let markerResult = null;
const WARM_UP_TOLERANCE = 5;
let tickCount = 0;
let oef;
let filterMinCF = 0.0001;
let filterBeta = 0.01;
const filter = new OneEuroFilter(filterMinCF, filterBeta);
const oefFilter = (matrixGL_RH) => {
    tickCount += 1;
    let mat;
    if (tickCount > WARM_UP_TOLERANCE) {
        mat = filter.filter(Date.now(), matrixGL_RH);
    }
    else {
        mat = matrixGL_RH;
    }
    return mat;
};
const load = async (msg) => {
    const basePath = self.origin;
    let cameraParamUrl;
    let nftMarkerUrls = [];
    let markerLength = msg.marker.length;
    oef = msg.oef;
    console.debug("Base path:", basePath);
    const onLoad = async (arController) => {
        ar = arController;
        const cameraMatrix = ar.getCameraMatrix();
        ar.addEventListener("getNFTMarker", (ev) => {
            let mat;
            if (oef == true) {
                mat = oefFilter(ev.data.matrixGL_RH);
            }
            else {
                mat = ev.data.matrixGL_RH;
            }
            markerResult = {
                type: "found",
                matrixGL_RH: JSON.stringify(mat),
            };
        });
        const regexM = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/gim;
        const reM = regexM.test(msg.marker);
        for (let i = 0; i < markerLength; i++) {
            let nftMarkerUrl;
            if (reM == true) {
                if (msg.addPath) {
                    nftMarkerUrl = basePath + "/" + msg.addPath + "/" + msg.marker[i];
                }
                else {
                    nftMarkerUrls = msg.marker[i];
                }
            }
            else if (reM == false) {
                if (msg.addPath) {
                    nftMarkerUrl = basePath + "/" + msg.addPath + "/" + msg.marker[i];
                }
                else {
                    nftMarkerUrl = basePath + "/" + msg.marker[i];
                }
            }
            nftMarkerUrls.push(nftMarkerUrl);
        }
        console.debug("Loading NFT marker at: ", nftMarkerUrls);
        await ar
            .loadNFTMarkers(nftMarkerUrls, (id) => {
            let m = 0;
            let marker = ar.getNFTData(id[m], 0);
            ctx.postMessage({ type: "markerInfos", marker: marker });
            ar.trackNFTMarkerId(id[m]);
            console.log("loadNFTMarker -> ", id[m]);
            ctx.postMessage({ type: "endLoading", end: true });
            m++;
        }, (err) => {
            console.error("Error: ", err, " loading marker in loadNFTMarkers!");
        })
            .catch((err) => {
            console.error("Error in loading marker on Worker", err);
        });
        ctx.postMessage({ type: "loaded", proj: JSON.stringify(cameraMatrix) });
    };
    const onError = (error) => {
        console.error(error);
    };
    const regexC = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/gim;
    const reC = regexC.test(msg.camera_para);
    if (reC == true) {
        if (msg.addPath) {
            cameraParamUrl = basePath + "/" + msg.addPath + "/" + msg.camera_para;
        }
        else {
            cameraParamUrl = msg.camera_para;
        }
    }
    else if (reC == false) {
        if (msg.addPath) {
            cameraParamUrl = basePath + "/" + msg.addPath + "/" + msg.camera_para;
        }
        else {
            cameraParamUrl = basePath + "/" + msg.camera_para;
        }
    }
    console.debug("Loading camera at:", cameraParamUrl);
    ARControllerNFT.initWithDimensions(msg.pw, msg.ph, cameraParamUrl, true).then(onLoad).catch(onError);
};
const process = (next, frame) => {
    if (frame !== lastFrame) {
        markerResult = null;
        if (ar && ar.process) {
            ar.process(next);
        }
        lastFrame = frame;
    }
    if (markerResult != null) {
        ctx.postMessage(markerResult);
    }
    else {
        ctx.postMessage({ type: "not found" });
    }
    next = null;
};
//# sourceMappingURL=Worker.simd.js.map