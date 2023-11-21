export interface ConfigData {
    addPath: string;
    name: string;
    assetURL: string;
    cameraPara: string;
    container: ContainerData;
    loading: LoadingData;
    videoSettings: VideoSettingData;
    stats: StatsData;
    oef: boolean;
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
    targetFrameRate: number;
}
export interface StatsData {
    createHtml: boolean;
}
export interface ScreenData {
    min: number;
    max: number;
}
