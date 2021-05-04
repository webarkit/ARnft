import { EntityComponent } from "./EntityComponent";
import { ITicked } from "../framework/TimeManager";

export class Entity implements ITicked {
    public dispatcher: EventTarget = new EventTarget();

    private _components: Map<EntityComponent, string> = new Map<EntityComponent, string>();

    private _enabled: boolean;

    private _name : string;

    constructor(name : string){
        this._name = name;
    }

    public addComponent(component: EntityComponent): EntityComponent {

        component.owner = this;
        //https://stackoverflow.com/questions/13631557/typescript-objects-as-dictionary-types-as-in-c-sharp
        this._components.set(component, component.id);
        this._enabled = false;
        return component;
    }

    public getComponent(request: any): EntityComponent {
        
        for ( let [component, value] of this._components){

            if (typeof request === 'string') {
                if (request == value) {
                    return component;
                }
            } else if (component instanceof request) {
                return component;
            }   
        }

        return null;
    }

    public getName () : string{
        return this._name;
    }
    
    public initialize(): void {
        this._components.forEach((value: string, key: EntityComponent) => {
            key.onAdd();
        });
        this._enabled = true;
    }

    public update(): void {
        if (!this._enabled)
            return;

        this._components.forEach((value: string, key: EntityComponent) => {
            key.update(0.16);
        });
    }

    public get enabled(): boolean {
        return this._enabled;
    }

    public set enabled(value: boolean) {
        this._components.forEach((type: string, key: EntityComponent) => {
            key.enabled = value;
        });
        this._enabled = value;
    }
}