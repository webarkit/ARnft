export class CameraViewRenderer {
    constructor(video) {
        this.canvas_process = document.createElement('canvas');
        this.context_process = this.canvas_process.getContext('2d');
        this.video = video;
    }
    getHeight() {
        return this.vh;
    }
    getWidth() {
        return this.vw;
    }
    getImage() {
        this.context_process.drawImage(this.video, 0, 0, this.vw, this.vh, this.ox, this.oy, this.w, this.h);
        return this.context_process.getImageData(0, 0, this.pw, this.ph);
    }
    initialize(videoSettings) {
        this._facing = videoSettings.facingMode || 'environment';
        const constraints = {};
        const mediaDevicesConstraints = {};
        return new Promise(async (resolve, reject) => {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                var hint = {
                    "audio": false,
                    "video": {
                        facingMode: this._facing,
                        width: { min: 480, max: 640 }
                    }
                };
                navigator.mediaDevices.getUserMedia(hint).then(async (stream) => {
                    this.video.srcObject = stream;
                    this.video = await new Promise((resolve, reject) => {
                        this.video.onloadedmetadata = () => resolve(this.video);
                    }).then((value) => {
                        this.vw = this.video.videoWidth;
                        this.vh = this.video.videoHeight;
                        var pscale = 320 / Math.max(this.vw, this.vh / 3 * 4);
                        this.w = this.vw * pscale;
                        this.h = this.vh * pscale;
                        this.pw = Math.max(this.w, (this.h / 3) * 4);
                        this.ph = Math.max(this.h, (this.w / 4) * 3);
                        this.ox = (this.pw - this.w) / 2;
                        this.oy = (this.ph - this.h) / 2;
                        this.canvas_process.width = this.pw;
                        this.canvas_process.height = this.ph;
                        this.context_process.fillStyle = 'black';
                        this.context_process.fillRect(0, 0, this.pw, this.ph);
                        resolve(true);
                        return value;
                    }).catch((msg) => {
                        console.log(msg);
                        reject(msg);
                        return null;
                    });
                }).catch((error) => {
                    console.error(error);
                    reject(error);
                });
            }
            else {
                reject("Sorry, Your device does not support this experince.");
            }
        });
    }
    destroy() {
        const video = this.video;
        document.addEventListener("stopStreaming", function () {
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