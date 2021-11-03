import { ConfigData } from "../../config/ConfigData";
export default class Container {
    static createContainer(configData: ConfigData): {
        container: HTMLDivElement;
        canvas: HTMLCanvasElement;
        video: HTMLVideoElement;
    };
    static createStats(create: boolean, configData: ConfigData): HTMLDivElement;
    static createLoading(configData: ConfigData): HTMLDivElement;
}
