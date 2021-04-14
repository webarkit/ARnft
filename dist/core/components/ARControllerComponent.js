export class ARControllerComponent {
    constructor() {
        this._hasFound = false;
        this._frameDrops = 0;
    }
    update() {
        if (!this.world) {
            this._hasFound = false;
            this._frameDrops = 0;
        }
        else { }
    }
    found(msg) {
        this.world = msg;
    }
}
//# sourceMappingURL=ARControllerComponent.js.map