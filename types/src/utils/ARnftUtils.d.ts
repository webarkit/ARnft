export declare function degreesToRadians(degrees: number): number;
export declare function isMobile(): boolean;
export declare function isIOS(): boolean;
export interface ProcessGeometry {
    rot: boolean;
    w: number;
    h: number;
    pw: number;
    ph: number;
    ox: number;
    oy: number;
}
export declare function getProcessGeometry(vw: number, vh: number, rotatePortrait?: boolean, floor?: boolean): ProcessGeometry;
export declare function getWindowSize(vw: number, vh: number, rotatePortrait?: boolean): Array<number>;
export declare function getConfig(configData: string): Promise<any>;
