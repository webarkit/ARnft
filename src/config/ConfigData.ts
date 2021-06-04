/*
 *  ConfigData.ts
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
export interface ConfigData {
    addPath: string;
    name: string;
    assetURL: string;
    cameraPara: string;
    container: ContainerData;
    loading: LoadingData;
    videoSettings: VideoSettingData;
    stats: StatsData;
}

export interface ContainerData {
    create: boolean;
    containerName: string;
    canvasName: string;
}

export interface LoadingData {
    create: boolean;
    logo: LogoData;
    loadingMessage: string;
}

export interface LogoData {
    src: string;
    alt: string;
}

export interface VideoSettingData {
    width: ScreenData;
    height: ScreenData;
    facingMode: string;
}

export interface StatsData {
    createHtml: boolean
}

export interface ScreenData {
    min: number;
    max: number;
}