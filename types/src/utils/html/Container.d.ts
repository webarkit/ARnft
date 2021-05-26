import { ConfigData } from "../../config/ConfigData";
export default class Container {
    static createContainer(configData: ConfigData): {
        container: HTMLDivElement;
        canvas: HTMLCanvasElement;
        video: HTMLVideoElement;
    } | {
        container: HTMLElement;
        canvas: HTMLElement;
        video?: undefined;
    };
    static createStats(create: boolean, configData: ConfigData): void;
    static createLoading(configData: ConfigData): void;
}
