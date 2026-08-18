/*
 *  ARUtils.ts
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
 *  Copyright 2021-2024 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */
const target: EventTarget = window || global;
/**
 * Convert degrees to radians.
 * @param degrees degree value as number.
 * @returns radians
 */
export function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

/**
 * Check if the device is a Mobile.
 * @returns true or false.
 */
export function isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Check if the device is a iOS device.
 * @returns true or false.
 */
export function isIOS(): boolean {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export interface ProcessGeometry {
    /** true when the source was rotated 90 degrees onto the process canvas. */
    rot: boolean;
    w: number;
    h: number;
    pw: number;
    ph: number;
    ox: number;
    oy: number;
}

/**
 * Compute the geometry used to fit a video of size vw x vh onto the (always
 * landscape) process canvas. When `rotatePortrait` is true and the video is
 * portrait (vh > vw), the long/short sides are swapped before applying the
 * existing formula so the video can be drawn rotated 90 degrees instead of
 * being letterboxed. With `rotatePortrait` false/omitted, or for a landscape
 * video, this is identical to the original (unrotated) formula.
 * See https://github.com/webarkit/ARnft/issues/344
 * @param vw the video width
 * @param vh the video height
 * @param rotatePortrait opt-in flag, see VideoSettingData.rotatePortrait
 * @param floor whether to floor the computed values (CameraViewRenderer always
 * did; getWindowSize historically did not, kept as-is to avoid changing the
 * existing numeric output for callers that don't opt into rotatePortrait)
 * @returns the process canvas geometry
 */
export function getProcessGeometry(vw: number, vh: number, rotatePortrait = false, floor = false): ProcessGeometry {
    const rot = rotatePortrait && vh > vw;
    const V = rot ? vh : vw;
    const H = rot ? vw : vh;
    const round = floor ? Math.floor : (n: number) => n;

    const pscale = 320 / Math.max(V, (H / 3) * 4);

    const w = round(V * pscale);
    const h = round(H * pscale);
    const pw = round(Math.max(w, (h / 3) * 4));
    const ph = round(Math.max(h, (w / 4) * 3));
    const ox = round((pw - w) / 2);
    const oy = round((ph - h) / 2);

    return { rot, w, h, pw, ph, ox, oy };
}

/**
 * Get the Window sizevideo dimensions, used internally in the NFTWorker.
 * @param vw the video width
 * @param vh the video height
 * @param rotatePortrait opt-in flag, see VideoSettingData.rotatePortrait
 * @returns an array of values.
 */
export function getWindowSize(vw: number, vh: number, rotatePortrait = false): Array<number> {
    const { pw, ph, w, h } = getProcessGeometry(vw, vh, rotatePortrait);
    const sscale = isMobile() ? window.outerWidth / vw : 1;

    const sw = vw * sscale;
    const sh = vh * sscale;

    return [sw, sh, pw, ph, w, h];
}

/**
 * Get the config data from the json file, and dispatch the data with
 * an event listener.
 * @param configData
 * @returns
 */
export async function getConfig(configData: string): Promise<any> {
    try {
        const response = await fetch(configData);
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return await response.json();
    } catch (error) {
        return Promise.reject(error);
    }
}
