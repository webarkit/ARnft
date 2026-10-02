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
export function getProcessGeometry(vw, vh, rotatePortrait = false, floor = false) {
    const rot = rotatePortrait && vh > vw;
    const V = rot ? vh : vw;
    const H = rot ? vw : vh;
    const round = floor ? Math.floor : (n) => n;
    const pscale = 320 / Math.max(V, (H / 3) * 4);
    const w = round(V * pscale);
    const h = round(H * pscale);
    const pw = round(Math.max(w, (h / 3) * 4));
    const ph = round(Math.max(h, (w / 4) * 3));
    const ox = round((pw - w) / 2);
    const oy = round((ph - h) / 2);
    return { rot, w, h, pw, ph, ox, oy };
}
export function getWindowSize(vw, vh, rotatePortrait = false) {
    const { pw, ph, w, h } = getProcessGeometry(vw, vh, rotatePortrait);
    const sscale = isMobile() ? window.outerWidth / vw : 1;
    const sw = vw * sscale;
    const sh = vh * sscale;
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