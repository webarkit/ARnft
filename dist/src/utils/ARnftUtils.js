const target = window || global;
export function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
export function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
export function isIOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}
export function getWindowSize(vw, vh) {
    const pscale = 320 / Math.max(vw, (vh / 3) * 4);
    const sscale = isMobile() ? window.outerWidth / vw : 1;
    let sw = vw * sscale;
    let sh = vh * sscale;
    let w = vw * pscale;
    let h = vh * pscale;
    let pw = Math.max(w, (h / 3) * 4);
    let ph = Math.max(h, (w / 4) * 3);
    return [sw, sh, pw, ph, w, h];
}
export async function getConfig(configData) {
    try {
        const response = await fetch(configData);
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return await response.json();
    }
    catch (error) {
        return Promise.reject(error);
    }
}
//# sourceMappingURL=ARnftUtils.js.map