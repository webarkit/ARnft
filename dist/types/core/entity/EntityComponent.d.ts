import { Entity } from "./Entity";
export declare class EntityComponent {
    id: string;
    owner: Entity;
    private _enabled;
    constructor(id: string);
    onAdd(): void;
    update(dt: number): void;
    getSibling(value: string): EntityComponent;
    set enabled(value: boolean);
}
