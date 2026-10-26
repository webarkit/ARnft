import { getProcessGeometry, type ProcessGeometry } from "@webarkit/camera-view";
export { getProcessGeometry, type ProcessGeometry };
export declare function degreesToRadians(degrees: number): number;
export declare function isMobile(): boolean;
export declare function isIOS(): boolean;
export declare function getWindowSize(vw: number, vh: number, rotatePortrait?: boolean): Array<number>;
export declare function getConfig(configData: string): Promise<any>;
