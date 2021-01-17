class LowPassFilter {
    constructor(alpha) {
        this.alpha = 0;
        this.setAlpha(alpha);
        this.y = null;
        this.s = null;
    }
    setAlpha(alpha) {
        if (alpha <= 0 || alpha > 1.0) {
            throw new Error();
        }
        this.alpha = alpha;
    }
    filter(value, timestamp, alpha) {
        if (alpha) {
            this.setAlpha(alpha);
        }
        let s;
        if (!this.y) {
            s = value;
        }
        else {
            s = this.alpha * value + (1.0 - this.alpha) * this.s;
        }
        this.y = value;
        this.s = s;
        return s;
    }
    lastValue() {
        return this.y;
    }
}
export default class NFTFilterOEF {
    constructor(freq, minCutOff = 1.0, beta = 0.0, dCutOff = 1.0) {
        if (freq <= 0 || minCutOff <= 0 || dCutOff <= 0) {
            throw new Error();
        }
        this.freq = freq;
        this.minCutOff = minCutOff;
        this.beta = beta;
        this.dCutOff = dCutOff;
        this.x = new LowPassFilter(this.alpha(this.minCutOff));
        this.dx = new LowPassFilter(this.alpha(this.dCutOff));
        this.lasttime = null;
        this.currValue = 0.0;
        this.prevValue = this.currValue;
    }
    alpha(cutOff) {
        const te = 1.0 / this.freq;
        const tau = 1.0 / (2 * Math.PI * cutOff);
        return 1.0 / (1.0 + tau / te);
    }
    UpdateParams(_freq, _mincutoff = 1.0, _beta = 0, _dcutoff = 1) {
        this.freq = _freq;
        this.minCutOff = _mincutoff;
        this.beta = _beta;
        this.dCutOff = _dcutoff;
        this.x.setAlpha(this.alpha(this.minCutOff));
        this.dx.setAlpha(this.alpha(this.dCutOff));
    }
    Filter(x, timestamp = null) {
        this.prevValue = this.currValue;
        if (this.lasttime && timestamp) {
            this.freq = 1.0 / (timestamp - this.lasttime);
        }
        this.lasttime = timestamp;
        const prevX = this.x.lastValue();
        const dx = !prevX ? 0.0 : (x - prevX) * this.freq;
        const edx = this.dx.filter(dx, timestamp, this.alpha(this.dCutOff));
        const cutOff = this.minCutOff + this.beta * Math.abs(edx);
        return this.currValue = this.x.filter(x, timestamp, this.alpha(cutOff));
    }
}
export class NFTFilterOEFArray {
    constructor(_length, _freq, _mincutoff = 1, _beta = 0, _dcutoff = 1) {
        this._freq = _freq;
        this._mincutoff = _mincutoff;
        this._beta = _beta;
        this._dcutoff = _dcutoff;
        this.oneEuroFilters = [];
        for (let i = 0; i < _length; ++i) {
            this.oneEuroFilters.push(new NFTFilterOEF(_freq, _mincutoff, _beta, _dcutoff));
        }
    }
    get freq() {
        return this._freq;
    }
    get beta() {
        return this._beta;
    }
    get dcutoff() {
        return this._dcutoff;
    }
    get mincutoff_1() {
        return this._mincutoff;
    }
    UpdateParams(_freq, _mincutoff = 1.0, _beta = 0, _dcutoff = 1) {
        this._freq = _freq;
        this._mincutoff = _mincutoff;
        this._beta = _beta;
        this._dcutoff = _dcutoff;
        for (let i = 0; i < this.oneEuroFilters.length; i++)
            this.oneEuroFilters[i].UpdateParams(this._freq, this._mincutoff, this._beta, this._dcutoff);
    }
    Filter(_value, timestamp = -1.0) {
        let output = [];
        this.oneEuroFilters.forEach((filters, idx) => {
            output[idx] = filters.Filter(_value[idx], timestamp);
        });
        return output;
    }
}
//# sourceMappingURL=NFTFilterOEF.js.map