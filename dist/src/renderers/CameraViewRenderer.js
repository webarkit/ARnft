export class CameraViewRenderer {
    constructor(video) {
        this.targetFrameRate = 60;
        this.lastCache = 0;
        this.canvas_process = document.createElement("canvas");
        this.context_process = this.canvas_process.getContext("2d", { alpha: false });
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
    getFrame() {
        return this._frame;
    }
    getImage() {
        const now = Date.now();
        if (now - this.lastCache > 1000 / this.targetFrameRate) {
            this.context_process.drawImage(this.video, 0, 0, this.vw, this.vh, this.ox, this.oy, this.w, this.h);
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
            this.context_process.drawImage(this.video, 0, 0, this.vw, this.vh, this.ox, this.oy, this.w, this.h);
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
    prepareImage() {
        this.vw = this._video.videoWidth;
        this.vh = this._video.videoHeight;
        var pscale = 320 / Math.max(this.vw, (this.vh / 3) * 4);
        this.w = Math.floor(this.vw * pscale);
        this.h = Math.floor(this.vh * pscale);
        this.pw = Math.floor(Math.max(this.w, (this.h / 3) * 4));
        this.ph = Math.floor(Math.max(this.h, (this.w / 4) * 3));
        this.ox = Math.floor((this.pw - this.w) / 2);
        this.oy = Math.floor((this.ph - this.h) / 2);
        this.canvas_process.width = this.pw;
        this.canvas_process.height = this.ph;
        this.context_process.fillStyle = "black";
        this.context_process.fillRect(0, 0, this.pw, this.ph);
    }
    async initialize(videoSettings) {
        this._facing = videoSettings.facingMode || "environment";
        if (videoSettings.targetFrameRate != null) {
            this.targetFrameRate = videoSettings.targetFrameRate;
        }
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            try {
                const hint = {
                    audio: false,
                    video: {
                        facingMode: this._facing,
                        width: { min: videoSettings.width.min, max: videoSettings.width.max },
                    },
                };
                if (navigator.mediaDevices.enumerateDevices) {
                    const devices = await navigator.mediaDevices.enumerateDevices();
                    const videoDevices = [];
                    let videoDeviceIndex = 0;
                    devices.forEach(function (device) {
                        if (device.kind == "videoinput") {
                            videoDevices[videoDeviceIndex++] = device.deviceId;
                        }
                    });
                    if (videoDevices.length > 1) {
                        hint.video.deviceId = { exact: videoDevices[videoDevices.length - 1] };
                    }
                }
                const stream = await navigator.mediaDevices.getUserMedia(hint);
                this._video.srcObject = stream;
                this._video = await new Promise((resolve) => {
                    this._video.onloadedmetadata = () => resolve(this._video);
                });
                this.prepareImage();
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