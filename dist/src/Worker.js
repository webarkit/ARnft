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
    let cameraParamUrl, nftMarkerUrl;
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
        console.log(msg.marker);
        console.log(msg.marker.length);
        for (var i = 0; i < msg.marker.length; i++) {
            if (reM == true) {
                if (msg.addPath) {
                    nftMarkerUrl[i] = basePath + "/" + msg.addPath + "/" + msg.marker;
                }
                else {
                    nftMarkerUrl[i] = msg.marker;
                }
            }
            else if (reM == false) {
                if (msg.addPath) {
                    nftMarkerUrl[i] = basePath + "/" + msg.addPath + "/" + msg.marker;
                }
                else {
                    nftMarkerUrl[i] = basePath + "/" + msg.marker;
                }
            }
        }
        console.debug("Loading NFT marker at: ", nftMarkerUrl);
        console.log(nftMarkerUrl);
        ar.loadNFTMarker(nftMarkerUrl, (id) => {
            let marker = ar.getNFTData(ar.id, 0);
            ctx.postMessage({ type: "markerInfos", marker: marker });
            ar.trackNFTMarkerId(id);
            console.log("loadNFTMarker -> ", id);
            console.log(id);
            ctx.postMessage({ type: "endLoading", end: true });
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