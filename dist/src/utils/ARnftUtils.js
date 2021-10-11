const target = window || global;
export function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
export function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
export function isIOS() {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
export function getWindowSize(vw, vh) {
    var pscale = 320 / Math.max(vw, (vh / 3) * 4);
    var sscale = isMobile() ? window.outerWidth / vw : 1;
    let sw = vw * sscale;
    let sh = vh * sscale;
    let w = vw * pscale;
    let h = vh * pscale;
    let pw = Math.max(w, (h / 3) * 4);
    let ph = Math.max(h, (w / 4) * 3);
    return [sw, sh, pw, ph, w, h];
}
export function getConfig(configData) {
    fetch(configData)
        .then((response) => {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
        .then((response) => {
        const eventData = new CustomEvent("getConfig", {
            detail: { config: response },
        });
        target.dispatchEvent(eventData);
        return response;
    })
        .catch(function (error) {
        console.error(error);
        return Promise.reject(false);
    });
    return true;
}
//# sourceMappingURL=ARnftUtils.js.map