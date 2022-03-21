import jsartoolkitnft from "jsartoolkitnft";
const { ARControllerNFT } = jsartoolkitnft;
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
const load = (msg) => {
    const basePath = self.origin;
    let cameraParamUrl;
    let nftMarkerUrls = [];
    let markerLength = msg.marker.length;
    console.debug("Base path:", basePath);
    const onLoad = (arController) => {
        ar = arController;
        const cameraMatrix = ar.getCameraMatrix();
        ar.addEventListener("getNFTMarker", (ev) => {
            markerResult = {
                type: "found",
                matrixGL_RH: JSON.stringify(ev.data.matrixGL_RH),
            };
        });
        const regexM = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/gim;
        const reM = regexM.test(msg.marker);
        for (var i = 0; i < markerLength; i++) {
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
        ar.loadNFTMarkers(nftMarkerUrls, (id) => {
            let marker = ar.getNFTData(ar.id, 0);
            ctx.postMessage({ type: "markerInfos", marker: marker });
            ar.trackNFTMarkerId(id);
            console.log("loadNFTMarker -> ", id);
            console.log(id);
            ctx.postMessage({ type: "endLoading", end: true });
        }).catch((err) => {
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
    ARControllerNFT.initWithDimensions(msg.pw, msg.ph, cameraParamUrl).then(onLoad).catch(onError);
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
//# sourceMappingURL=Worker.js.map