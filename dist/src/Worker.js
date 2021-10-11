import jsartoolkitnft from 'jsartoolkitnft';
const { ARControllerNFT } = jsartoolkitnft;
const ctx = self;
ctx.onmessage = (e) => {
    const msg = e.data;
    switch (msg.type) {
        case 'load': {
            load(msg);
            return;
        }
        case 'stop': {
            ar = null;
            break;
        }
        case 'process': {
            next = msg.imagedata;
            process(next);
        }
    }
};
let next = null;
let ar = null;
let markerResult = null;
const load = (msg) => {
    const basePath = self.origin;
    let cameraParamUrl, nftMarkerUrl;
    console.debug('Base path:', basePath);
    const onLoad = (arController) => {
        ar = arController;
        const cameraMatrix = ar.getCameraMatrix();
        ar.addEventListener('getNFTMarker', (ev) => {
            markerResult = { type: 'found', matrixGL_RH: JSON.stringify(ev.data.matrixGL_RH) };
        });
        const regexM = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/igm;
        const reM = regexM.test(msg.marker);
        if (reM == true) {
            if (msg.addPath) {
                nftMarkerUrl = basePath + '/' + msg.addPath + '/' + msg.marker;
            }
            else {
                nftMarkerUrl = msg.marker;
            }
        }
        else if (reM == false) {
            if (msg.addPath) {
                nftMarkerUrl = basePath + '/' + msg.addPath + '/' + msg.marker;
            }
            else {
                nftMarkerUrl = basePath + '/' + msg.marker;
            }
        }
        console.debug('Loading NFT marker at: ', nftMarkerUrl);
        ar.loadNFTMarker(nftMarkerUrl).then((nft) => {
            ctx.postMessage({ type: 'nftData', nft: JSON.stringify(nft) });
            ar.trackNFTMarkerId(nft.id);
            console.log('loadNFTMarker -> ', nft.id);
            console.log(nft);
            ctx.postMessage({ type: 'endLoading', end: true });
        }).catch((err) => {
            console.error('Error in loading marker on Worker', err);
        });
        ctx.postMessage({ type: 'loaded', proj: JSON.stringify(cameraMatrix) });
    };
    const onError = (error) => {
        console.error(error);
    };
    const regexC = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/igm;
    const reC = regexC.test(msg.camera_para);
    if (reC == true) {
        if (msg.addPath) {
            cameraParamUrl = basePath + '/' + msg.addPath + '/' + msg.camera_para;
        }
        else {
            cameraParamUrl = msg.camera_para;
        }
    }
    else if (reC == false) {
        if (msg.addPath) {
            cameraParamUrl = basePath + '/' + msg.addPath + '/' + msg.camera_para;
        }
        else {
            cameraParamUrl = basePath + '/' + msg.camera_para;
        }
    }
    console.debug('Loading camera at:', cameraParamUrl);
    ARControllerNFT.initWithDimensions(msg.pw, msg.ph, cameraParamUrl).then(onLoad).catch(onError);
};
const process = (next) => {
    markerResult = null;
    if (ar && ar.process) {
        ar.process(next);
    }
    if (markerResult) {
        ctx.postMessage(markerResult);
    }
    else {
        ctx.postMessage({ type: 'not found' });
    }
    next = null;
};
//# sourceMappingURL=Worker.js.map