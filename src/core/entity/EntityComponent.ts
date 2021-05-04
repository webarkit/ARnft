import { Entity } from "./Entity";

export class EntityComponent {

    public id: string;

    public owner: Entity;

    private _enabled: boolean;

    constructor(id: string) {
        this.id = id;
    }

    public onAdd(): void {
        this._enabled = true;
    }

    public update(dt: number): void {

    }

    public getSibling(value: string): EntityComponent {
        return this.owner.getComponent(value);
    }

    public set enabled(value: boolean) {
        this._enabled = value;
    }
}