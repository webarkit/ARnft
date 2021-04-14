import { Model } from "./Model";
export class TimeManager extends Model {
    constructor() {
        super(...arguments);
        this._components = [];
        this.fps = 1000 / 60;
    }
    initialize() {
        var tick = () => {
            this.updateFrame();
            setTimeout(tick, this.fps);
        };
        tick();
    }
    updateFrame() {
        this._components.forEach(element => {
            element.update();
        });
    }
    addTickedComponent(component) {
        this._components.push(component);
    }
}
export function getTime() {
    return Math.floor(Date.now() / 1000);
}
export function wait(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, t);
    });
}
//# sourceMappingURL=TimeManager.js.map