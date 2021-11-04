class cameraViewRenderer {
    constructor(video) {
        this.canvas_process = document.createElement("canvas");
        this.context_process = this.canvas_process.getContext("2d", { alpha: false });
        this._video = video;
        this._frame = 0;
        this.lastCache = 0;
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
                        width: { min: 480, max: 640 },
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
                this._video = await new Promise((resolve, reject) => {
                    this._video.onloadedmetadata = () => resolve(this._video);
                });
                this.prepareImage();
                return true;
            } catch (error) {
                return Promise.reject(error);
            }
        } else {
            return Promise.reject("Sorry, Your device does not support this experience.");
        }
    }

    getFrame() {
        return this._frame;
    }

    getImage() {
        const now = Date.now();
        if (now - this.lastCache > 1000 / this.targetFrameRate) {
            this.context_process.drawImage(this._video, 0, 0, this.vw, this.vh, this.ox, this.oy, this.w, this.h);
            const imageData = this.context_process.getImageData(0, 0, this.pw, this.ph);
            if (this.imageDataCache == null) {
                this.imageDataCache = imageData.data;
            } else {
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

        // Void float point
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
}