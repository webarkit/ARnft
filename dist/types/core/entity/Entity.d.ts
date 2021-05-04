import { EntityComponent } from "./EntityComponent";
import { ITicked } from "../framework/TimeManager";
export declare class Entity implements ITicked {
    dispatcher: EventTarget;
    private _components;
    private _enabled;
    private _name;
    constructor(name: string);
    addComponent(component: EntityComponent): EntityComponent;
    getComponent(request: any): EntityComponent;
    getName(): string;
    initialize(): void;
    update(): void;
    get enabled(): boolean;
    set enabled(value: boolean);
}
