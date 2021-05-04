export class Entity {
    constructor(name) {
        this.dispatcher = new EventTarget();
        this._components = new Map();
        this._name = name;
    }
    addComponent(component) {
        component.owner = this;
        this._components.set(component, component.id);
        this._enabled = false;
        return component;
    }
    getComponent(request) {
        for (let [component, value] of this._components) {
            if (typeof request === 'string') {
                if (request == value) {
                    return component;
                }
            }
            else if (component instanceof request) {
                return component;
            }
        }
        return null;
    }
    getName() {
        return this._name;
    }
    initialize() {
        this._components.forEach((value, key) => {
            key.onAdd();
        });
        this._enabled = true;
    }
    update() {
        if (!this._enabled)
            return;
        this._components.forEach((value, key) => {
            key.update(0.16);
        });
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._components.forEach((type, key) => {
            key.enabled = value;
        });
        this._enabled = value;
    }
}
//# sourceMappingURL=Entity.js.map