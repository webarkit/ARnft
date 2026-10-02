import { getProcessGeometry, isMobile } from "../utils/ARnftUtils";
export class CameraViewRenderer {
    canvas_process;
    context_process;
    _video;
    _facing;
    vw;
    vh;
    w;
    h;
    pw;
    ph;
    ox;
    oy;
    rotatePortrait = false;
    rot = false;
    target;
    targetFrameRate = 60;
    imageDataCache;
    _frame;
    lastCache = 0;
    videoResizeListener = () => this.onVideoResize();
    constructor(video) {
        this.canvas_process = document.createElement("canvas");
        this.context_process = this.canvas_process.getContext("2d", { alpha: false, willReadFrequently: true });
        this._video = video;
        this.target = window || global;
        this._frame = 0;
    }
    get facing() {
        return this._facing;
    }
    get height() {
        return this.vh;
    }
    get width() {
        return this.vw;
    }
    get video() {
        return this._video;
    }
    get frame() {
        return this._frame;
    }
    get canvasProcess() {
        return this.canvas_process;
    }
    get contextProcess() {
        return this.context_process;
    }
    get rotated() {
        return this.rot;
    }
    getFrame() {
        return this._frame;
    }
    getImage() {
        const now = Date.now();
        if (now - this.lastCache > 1000 / this.targetFrameRate) {
            this.drawFrame();
            const imageData = this.context_process.getImageData(0, 0, this.pw, this.ph);
            if (this.imageDataCache == null) {
                this.imageDataCache = imageData.data;
            }
            else {
                this.imageDataCache.set(imageData.data);
            }
            this.lastCache = now;
            this._frame++;
        }
        return new ImageData(this.imageDataCache.slice(), this.pw, this.ph);
    }
    get image() {
        const now = Date.now();
        if (now - this.lastCache > 1000 / this.targetFrameRate) {
            this.drawFrame();
            const imageData = this.context_process.getImageData(0, 0, this.pw, this.ph);
            if (this.imageDataCache == null) {
                this.imageDataCache = imageData.data;
            }
            else {
                this.imageDataCache.set(imageData.data);
            }
            this.lastCache = now;
            this._frame++;
        }
        return new ImageData(this.imageDataCache.slice(), this.pw, this.ph);
    }
    drawFrame() {
        const ctx = this.context_process;
        if (this.rot) {
            ctx.save();
            ctx.translate(this.pw, 0);
            ctx.rotate(Math.PI / 2);
            ctx.drawImage(this.video, 0, 0, this.vw, this.vh, this.oy, this.pw - this.ox - this.w, this.h, this.w);
            ctx.restore();
        }
        else {
            ctx.drawImage(this.video, 0, 0, this.vw, this.vh, this.ox, this.oy, this.w, this.h);
        }
    }
    prepareImage() {
        this.vw = this._video.videoWidth;
        this.vh = this._video.videoHeight;
        const geometry = getProcessGeometry(this.vw, this.vh, this.rotatePortrait, true);
        this.rot = geometry.rot;
        this.w = geometry.w;
        this.h = geometry.h;
        this.pw = geometry.pw;
        this.ph = geometry.ph;
        this.ox = geometry.ox;
        this.oy = geometry.oy;
        this.canvas_process.width = this.pw;
        this.canvas_process.height = this.ph;
        this.context_process.fillStyle = "black";
        this.context_process.fillRect(0, 0, this.pw, this.ph);
    }
    onVideoResize() {
        const vw = this._video.videoWidth;
        const vh = this._video.videoHeight;
        if (vw === 0 || vh === 0 || (vw === this.vw && vh === this.vh)) {
            return;
        }
        this.prepareImage();
        const videoResizeEvent = new CustomEvent("videoResize", {
            detail: { width: this.vw, height: this.vh, rotated: this.rot },
        });
        this.target.dispatchEvent(videoResizeEvent);
    }
    async openCameraStream(videoSettings) {
        const hint = {
            audio: false,
            video: {
                facingMode: this._facing,
                width: { min: videoSettings.width.min, max: videoSettings.width.max },
            },
        };
        const label = videoSettings.cameraLabel;
        const videoDevices = await this.getVideoDevices();
        const labelsAvailable = videoDevices.some((device) => device.label !== "");
        if (label && !labelsAvailable) {
            const stream = await navigator.mediaDevices.getUserMedia(hint);
            const camera = this.findCamera(await this.getVideoDevices(), label);
            if (camera == null || camera.deviceId === stream.getVideoTracks()[0].getSettings().deviceId) {
                return stream;
            }
            stream.getTracks().forEach((track) => track.stop());
            hint.video.deviceId = { exact: camera.deviceId };
            return navigator.mediaDevices.getUserMedia(hint);
        }
        const camera = label ? this.findCamera(videoDevices, label) : null;
        if (camera != null) {
            hint.video.deviceId = { exact: camera.deviceId };
        }
        else if (isMobile() && videoDevices.length > 1) {
            hint.video.deviceId = { exact: videoDevices[videoDevices.length - 1].deviceId };
        }
        return navigator.mediaDevices.getUserMedia(hint);
    }
    async getVideoDevices() {
        if (!navigator.mediaDevices.enumerateDevices) {
            return [];
        }
        const devices = await navigator.mediaDevices.enumerateDevices();
        return devices.filter((device) => device.kind == "videoinput");
    }
    findCamera(videoDevices, label) {
        const camera = videoDevices.find((device) => device.label.toLowerCase().includes(label.toLowerCase()));
        if (camera == null) {
            console.warn('No camera matches the cameraLabel "' + label + '", available cameras:', videoDevices.map((device) => device.label));
        }
        return camera;
    }
    async initialize(videoSettings) {
        this._facing = videoSettings.facingMode || "environment";
        if (videoSettings.targetFrameRate != null) {
            this.targetFrameRate = videoSettings.targetFrameRate;
        }
        this.rotatePortrait = videoSettings.rotatePortrait === true;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            try {
                this._video.srcObject = await this.openCameraStream(videoSettings);
                this._video = await new Promise((resolve) => {
                    this._video.onloadedmetadata = () => resolve(this._video);
                });
                this.prepareImage();
                this._video.addEventListener("resize", this.videoResizeListener);
                return true;
            }
            catch (error) {
                return Promise.reject(error);
            }
        }
        else {
            return Promise.reject("Sorry, Your device does not support this experience.");
        }
    }
    destroy() {
        const video = this._video;
        video.removeEventListener("resize", this.videoResizeListener);
        this.target.addEventListener("stopVideoStreaming", function () {
            const stream = video.srcObject;
            console.log("stop streaming");
            if (stream !== null && stream !== undefined) {
                const tracks = stream.getTracks();
                tracks.forEach(function (track) {
                    track.stop();
                });
                video.srcObject = null;
                let currentAR = document.getElementById("app");
                if (currentAR !== null && currentAR !== undefined) {
                    currentAR.remove();
                }
            }
        });
    }
}
//# sourceMappingURL=CameraViewRenderer.js.map