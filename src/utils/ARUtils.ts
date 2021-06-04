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
 *  Copyright 2021 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */
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
    //return /Android|mobile|iPad|iPhone/i.test(navigator.userAgent)
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // true for mobile device
        return true;
    }
    return false;
}

/**
 * Check if the device is a iOS device.
 * @returns true or false.
 */
export function isIOS(): boolean {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // true for mobile device
        return true;
    }
    return false;
}

/**
 * Get the config data from the json file, and dispatch the data with
 * an event listener.
 * @param configData 
 * @returns 
 */
export function getConfig(configData: string): boolean {
  fetch(configData)
   .then(response => {
       if (!response.ok) {
         throw new Error("HTTP error, status = " + response.status);
       }
       return response.json();
     })
     .then((response) => {
       // printing the response only for testing
       //console.log(response);
       const eventData = new CustomEvent('getConfig', { detail: { config: response } });
       document.dispatchEvent(eventData);
       return(response)
     })
     .catch(function(error) {
         console.error(error);
         return Promise.reject(false);
       });
   return true;
 }
 
