export class EntityComponent {
    constructor(id) {
        this.id = id;
    }
    onAdd() {
        this._enabled = true;
    }
    update(dt) {
    }
    getSibling(value) {
        return this.owner.getComponent(value);
    }
    set enabled(value) {
        this._enabled = value;
    }
}
//# sourceMappingURL=EntityComponent.js.map