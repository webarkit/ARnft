import { Model } from "./Model";

export class TimeManager extends Model {
    // var tick = function () {
    //     draw();
    //     requestAnimationFrame(tick);
    // };
    private _components: ITicked[] = [];

    private fps: number = 1000 / 60;
    // load();
    // tick();
    // var now = Date.now();
    // var dt = now - lasttime;
    // time += dt;
    // lasttime = now;
    public initialize(): void {
        var tick = () => {
            this.updateFrame();
            // requestAnimationFrame(tick);
            setTimeout(tick, this.fps);
        };
        tick();
    }

    private updateFrame(): void {
        this._components.forEach(element => {
            element.update();
        });
    }

    public addTickedComponent(component: ITicked): void {
        this._components.push(component);
    }
}

export function getTime(): number {
    return Math.floor(Date.now() / 1000);
}

export function wait(t: number): Promise<boolean> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, t);
    })
}
export interface ITicked {
    update(): void;
}