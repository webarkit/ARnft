import { Model } from "./Model";
export declare class TimeManager extends Model {
    private _components;
    private fps;
    initialize(): void;
    private updateFrame;
    addTickedComponent(component: ITicked): void;
}
export declare function getTime(): number;
export declare function wait(t: number): Promise<boolean>;
export interface ITicked {
    update(): void;
}
