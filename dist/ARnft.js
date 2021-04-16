(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ARnft"] = factory();
	else
		root["ARnft"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ARnft.ts":
/*!**********************!*\
  !*** ./src/ARnft.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ARnft
/* harmony export */ });
/* harmony import */ var _core_ARnftCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/ARnftCore */ "./src/core/ARnftCore.ts");
/* harmony import */ var _core_NFTEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/NFTEntity */ "./src/core/NFTEntity.ts");
/* harmony import */ var _core_components_ARControllerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/ARControllerComponent */ "./src/core/components/ARControllerComponent.ts");
/* harmony import */ var _core_renderers_CameraViewRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/renderers/CameraViewRenderer */ "./src/core/renderers/CameraViewRenderer.ts");
/* harmony import */ var _core_ARUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/ARUtils */ "./src/core/ARUtils.ts");





class ARnft {
    constructor(configUrl, camUrl, markerUrl) {
        this.camData = camUrl;
        this.configUrl = configUrl;
        this.markerUrl = markerUrl;
    }
    async initialize() {
        (0,_core_ARUtils__WEBPACK_IMPORTED_MODULE_4__.getConfig)(this.configUrl);
        document.addEventListener('getConfig', async (ev) => {
            this.appData = ev.detail.config;
            console.log(this.appData);
            this.cameraView = new _core_renderers_CameraViewRenderer__WEBPACK_IMPORTED_MODULE_3__.CameraViewRenderer(document.getElementById("video"));
            await this.cameraView.initialize(this.appData.videoSettings).catch((error) => {
                console.error(error);
                return Promise.reject(false);
            });
            this._arnftCore = new _core_ARnftCore__WEBPACK_IMPORTED_MODULE_0__.ARnftCore(this.cameraView, this.camData);
            await this._arnftCore.initialize().catch((error) => {
                console.error(error);
                return Promise.reject(false);
            });
            let arComponent = new _core_components_ARControllerComponent__WEBPACK_IMPORTED_MODULE_2__.ARControllerComponent();
            let nftEntity = new _core_NFTEntity__WEBPACK_IMPORTED_MODULE_1__.NFTEntity(arComponent, this.markerUrl, 200, 200);
            await nftEntity.initialize(this.camData);
            this._arnftCore.addNFTEntity(nftEntity);
            this._arnftCore.update();
        });
        return Promise.resolve(true);
    }
    createEntity(cameraData, markerUrl, w, h) {
        console.log("fake entity created...");
    }
    addNFTEntity(entity, name) {
        return this._arnftCore.addNFTEntity(entity, name);
    }
    update() {
        console.log(this._arnftCore);
        this._arnftCore.update();
    }
}


/***/ }),

/***/ "./src/core/ARUtils.ts":
/*!*****************************!*\
  !*** ./src/core/ARUtils.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "degreesToRadians": () => /* binding */ degreesToRadians,
/* harmony export */   "isMobile": () => /* binding */ isMobile,
/* harmony export */   "isIOS": () => /* binding */ isIOS,
/* harmony export */   "getConfig": () => /* binding */ getConfig
/* harmony export */ });
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
function isIOS() {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}
function getConfig(configData) {
    fetch(configData)
        .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
        .then((response) => {
        console.log(response);
        const eventData = new CustomEvent('getConfig', { detail: { config: response } });
        document.dispatchEvent(eventData);
        return (response);
    })
        .catch(function (error) {
        console.error(error);
        return Promise.reject(false);
    });
    return true;
}


/***/ }),

/***/ "./src/core/ARnftCore.ts":
/*!*******************************!*\
  !*** ./src/core/ARnftCore.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARnftCore": () => /* binding */ ARnftCore
/* harmony export */ });
/* harmony import */ var _NFTEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NFTEntity */ "./src/core/NFTEntity.ts");

class ARnftCore {
    constructor(video, camData) {
        this.count = 0;
        this._controllers = new Map();
        this._fps = 15;
        this._lastTime = 0;
        this._videoRenderer = video;
        this._cameraDataURL = camData;
        this.setFPS(this._fps);
    }
    addNFTEntity(entity, name) {
        if (!name)
            name = "entity-" + this.count++;
        this._controllers.set(name, entity);
        return entity;
    }
    addNFTEntity2(node, markerUrl, name) {
        if (!name)
            name = "entity-" + this.count++;
        let entity = new _NFTEntity__WEBPACK_IMPORTED_MODULE_0__.NFTEntity(node, markerUrl, 120, 120);
        this._controllers.set(name, entity);
    }
    getEntityByName(name) {
        if (!this._controllers.has(name))
            return null;
        return this._controllers.get(name);
    }
    getCameraView() {
        return this._videoRenderer;
    }
    setFPS(value) {
        this._fps = 1000 / value;
    }
    initialize() {
        console.log("init ARnft");
        let promises = [];
        this._controllers.forEach(element => {
            promises.push(element.initialize(this._cameraDataURL));
        });
        return Promise.all(promises).then(() => {
            return true;
        });
    }
    update() {
        let time = Date.now();
        let imageData;
        if ((time - this._lastTime) > this._fps) {
            imageData = this._videoRenderer.getImage();
            console.log(imageData);
            this._lastTime = time;
        }
        this._controllers.forEach(element => {
            element.update();
            if (imageData)
                element.process(imageData);
        });
    }
    destroy() {
        this._controllers.forEach(entity => {
            entity.destroy();
        });
        this._controllers.clear();
        this._videoRenderer = null;
    }
}
ARnftCore.EVENT_SET_CAMERA = "ARNFT_SET_CAMERA_EVENT";
ARnftCore.EVENT_FOUND_MARKER = "ARNFT_FOUND_MARKER_EVENT";
ARnftCore.EVENT_LOST_MARKER = "ARNFT_LOST_MARKER_EVENT";


/***/ }),

/***/ "./src/core/NFTEntity.ts":
/*!*******************************!*\
  !*** ./src/core/NFTEntity.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NFTEntity": () => /* binding */ NFTEntity
/* harmony export */ });
/* harmony import */ var _NFTWorker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NFTWorker */ "./src/core/NFTWorker.ts");

class NFTEntity {
    constructor(node, markerURL, w, h) {
        this._nodes = [];
        this._markerURL = markerURL;
        this._worker = new _NFTWorker__WEBPACK_IMPORTED_MODULE_0__.default(this, this._markerURL, w, h);
        this._nodes.push(node);
    }
    initialize(cameraData) {
        this._cameraURL = cameraData;
        return this._worker.initialize(this._cameraURL);
    }
    found(msg) {
        this._nodes.forEach(element => {
            element.found(msg);
        });
    }
    process(imageData) {
        this._worker.process(imageData);
    }
    update() {
        this._nodes.forEach(element => {
            element.update();
        });
    }
    destroy() {
    }
}


/***/ }),

/***/ "./src/core/NFTWorker.ts":
/*!*******************************!*\
  !*** ./src/core/NFTWorker.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ NFTWorker
/* harmony export */ });
/* harmony import */ var worker_loader_Worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! worker-loader!./Worker */ "./node_modules/worker-loader/dist/cjs.js!./src/core/Worker.ts");

class NFTWorker {
    constructor(d, markerURL, w, h) {
        this._processing = false;
        this._dispatcher = d;
        this.markerURL = markerURL;
        this.vw = w;
        this.vh = h;
    }
    initialize(cameraURL) {
        return new Promise((resolve, reject) => {
            this.worker = new worker_loader_Worker__WEBPACK_IMPORTED_MODULE_0__.default();
            this.load(cameraURL).then(() => {
                resolve(true);
            });
        });
    }
    process(imageData) {
        if (this._processing) {
            return;
        }
        this._processing = true;
        this.worker.postMessage({ type: 'process', imagedata: imageData });
    }
    load(cameraURL) {
        return new Promise((resolve, reject) => {
            var pscale = 320 / Math.max(this.vw, this.vh / 3 * 4);
            let w = this.vw * pscale;
            let h = this.vh * pscale;
            let pw = Math.max(w, (h / 3) * 4);
            let ph = Math.max(h, (w / 4) * 3);
            this.worker.postMessage({
                type: 'load',
                pw: pw,
                ph: ph,
                camera_para: cameraURL,
                marker: this.markerURL
            });
            this.worker.onmessage = (ev) => {
                var msg = ev.data;
                switch (msg.type) {
                    case 'loaded': {
                        var proj = JSON.parse(msg.proj);
                        break;
                    }
                    case "endLoading": {
                        if (msg.end == true)
                            resolve(true);
                        break;
                    }
                }
                this._processing = false;
            };
        });
    }
    ;
    destroy() {
    }
}


/***/ }),

/***/ "./src/core/components/ARControllerComponent.ts":
/*!******************************************************!*\
  !*** ./src/core/components/ARControllerComponent.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARControllerComponent": () => /* binding */ ARControllerComponent
/* harmony export */ });
class ARControllerComponent {
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


/***/ }),

/***/ "./src/core/renderers/CameraViewRenderer.ts":
/*!**************************************************!*\
  !*** ./src/core/renderers/CameraViewRenderer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraViewRenderer": () => /* binding */ CameraViewRenderer
/* harmony export */ });
class CameraViewRenderer {
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
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ARnft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ARnft */ "./src/ARnft.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ARnft: _ARnft__WEBPACK_IMPORTED_MODULE_0__.default
});


/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js!./src/core/Worker.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js!./src/core/Worker.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Worker_fn
/* harmony export */ });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "ARnft.worker.js");
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
.default;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvQVJuZnQudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9BUlV0aWxzLnRzIiwid2VicGFjazovL0FSbmZ0Ly4vc3JjL2NvcmUvQVJuZnRDb3JlLnRzIiwid2VicGFjazovL0FSbmZ0Ly4vc3JjL2NvcmUvTkZURW50aXR5LnRzIiwid2VicGFjazovL0FSbmZ0Ly4vc3JjL2NvcmUvTkZUV29ya2VyLnRzIiwid2VicGFjazovL0FSbmZ0Ly4vc3JjL2NvcmUvY29tcG9uZW50cy9BUkNvbnRyb2xsZXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9yZW5kZXJlcnMvQ2FtZXJhVmlld1JlbmRlcmVyLnRzIiwid2VicGFjazovL0FSbmZ0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0FSbmZ0Ly4vc3JjL2NvcmUvV29ya2VyLnRzIiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQVJuZnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQVJuZnQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjRDO0FBQ3lCO0FBQ1U7QUFFTjtBQUM5QjtBQUU1QixN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Q1I7Ozs7Ozs7Ozs7Ozs7OztBQ0pjO0FBQ2Ysb0JBQW9CLHFCQUF1QjtBQUMzQzs7Ozs7OztVQ0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkEsNEI7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJBUm5mdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFSbmZ0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFSbmZ0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiaW1wb3J0IHsgQVJuZnRDb3JlIH0gZnJvbSAnLi9jb3JlL0FSbmZ0Q29yZSdcbmltcG9ydCB7IE5GVEVudGl0eSwgSU5GVEVudGl0eSwgSU1lZGlhTm9kZSB9IGZyb20gXCIuL2NvcmUvTkZURW50aXR5XCI7XG5pbXBvcnQgeyBBUkNvbnRyb2xsZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb3JlL2NvbXBvbmVudHMvQVJDb250cm9sbGVyQ29tcG9uZW50XCJcbmltcG9ydCB7IEFwcEpzb24gfSBmcm9tIFwiLi9jb3JlL2RhdGEvQXBwRGF0YVwiO1xuaW1wb3J0IHsgQ2FtZXJhVmlld1JlbmRlcmVyIH0gZnJvbSBcIi4vY29yZS9yZW5kZXJlcnMvQ2FtZXJhVmlld1JlbmRlcmVyXCI7XG5pbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tIFwiLi9jb3JlL0FSVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVJuZnQge1xuICAgIHB1YmxpYyBjYW1lcmFWaWV3OiBDYW1lcmFWaWV3UmVuZGVyZXI7XG4gICAgcHVibGljIGFwcERhdGE6IEFwcEpzb247XG4gICAgcHVibGljIGNvbmZpZ1VybDogc3RyaW5nO1xuICAgIHB1YmxpYyBtYXJrZXJVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIF9hcm5mdENvcmU6IEFSbmZ0Q29yZTtcbiAgICBwdWJsaWMgY2FtRGF0YTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1VybDogc3RyaW5nLCBjYW1Vcmw6IHN0cmluZywgbWFya2VyVXJsOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmNhbURhdGEgPSBjYW1Vcmw7XG4gICAgICAgIHRoaXMuY29uZmlnVXJsID0gY29uZmlnVXJsO1xuICAgICAgICB0aGlzLm1hcmtlclVybCA9IG1hcmtlclVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdGlhbGl6ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcblxuICAgICAgICBnZXRDb25maWcodGhpcy5jb25maWdVcmwpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXRDb25maWcnLCBhc3luYyAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBEYXRhID0gZXYuZGV0YWlsLmNvbmZpZztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwRGF0YSk7XG4gICAgICAgIC8vIHZpZXdzXG4gICAgICAgIHRoaXMuY2FtZXJhVmlldyA9IG5ldyBDYW1lcmFWaWV3UmVuZGVyZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWRlb1wiKSBhcyBIVE1MVmlkZW9FbGVtZW50KTtcbiAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFWaWV3LmluaXRpYWxpemUodGhpcy5hcHBEYXRhLnZpZGVvU2V0dGluZ3MpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZmFsc2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9hcm5mdENvcmUgPSBuZXcgQVJuZnRDb3JlKHRoaXMuY2FtZXJhVmlldywgdGhpcy5jYW1EYXRhKTtcbiAgICAgICAgYXdhaXQgdGhpcy5fYXJuZnRDb3JlLmluaXRpYWxpemUoKS5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZmFsc2UpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBhckNvbXBvbmVudDogQVJDb250cm9sbGVyQ29tcG9uZW50ID0gbmV3IEFSQ29udHJvbGxlckNvbXBvbmVudCgpO1xuXG4gICAgICAgIGxldCBuZnRFbnRpdHk6IE5GVEVudGl0eSA9IG5ldyBORlRFbnRpdHkoYXJDb21wb25lbnQsdGhpcy5tYXJrZXJVcmwsIDIwMCwgMjAwKTtcbiAgICAgICAgYXdhaXQgbmZ0RW50aXR5LmluaXRpYWxpemUodGhpcy5jYW1EYXRhKTtcbiAgICAgICAgdGhpcy5fYXJuZnRDb3JlLmFkZE5GVEVudGl0eShuZnRFbnRpdHkpO1xuICAgICAgICB0aGlzLl9hcm5mdENvcmUudXBkYXRlKCk7XG4gICAgfSlcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlRW50aXR5KGNhbWVyYURhdGE6IHN0cmluZywgbWFya2VyVXJsOiBzdHJpbmcsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIC8vbGV0IG5mdEVudGl0eTogTkZURW50aXR5ID0gbmV3IE5GVEVudGl0eShtYXJrZXJVcmwsIHcsIGgpO1xuICAgICAgICAvL3JldHVybiBuZnRFbnRpdHk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFrZSBlbnRpdHkgY3JlYXRlZC4uLlwiKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRORlRFbnRpdHkoZW50aXR5OiBJTkZURW50aXR5LCBuYW1lPzogc3RyaW5nKTogSU5GVEVudGl0eSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcm5mdENvcmUuYWRkTkZURW50aXR5KGVudGl0eSwgbmFtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2FybmZ0Q29yZSk7XG5cbiAgICAgICAgdGhpcy5fYXJuZnRDb3JlLnVwZGF0ZSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZWdyZWVzVG9SYWRpYW5zKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICAvL3JldHVybiAvQW5kcm9pZHxtb2JpbGV8aVBhZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgaWYgKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAvLyB0cnVlIGZvciBtb2JpbGUgZGV2aWNlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNJT1MoKTogYm9vbGVhbiB7XG4gICAgaWYgKC9pUGhvbmV8aVBhZHxpUG9kL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAvLyB0cnVlIGZvciBtb2JpbGUgZGV2aWNlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4gXG4gZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZyhjb25maWdEYXRhOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgZmV0Y2goY29uZmlnRGF0YSlcbiAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIVFRQIGVycm9yLCBzdGF0dXMgPSBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgfVxuICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgIH0pXG4gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgIC8vIHByaW50aW5nIHRoZSByZXNwb25zZSBvbmx5IGZvciB0ZXN0aW5nXG4gICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgIGNvbnN0IGV2ZW50RGF0YSA9IG5ldyBDdXN0b21FdmVudCgnZ2V0Q29uZmlnJywgeyBkZXRhaWw6IHsgY29uZmlnOiByZXNwb25zZSB9IH0pO1xuICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnREYXRhKTtcbiAgICAgICByZXR1cm4ocmVzcG9uc2UpXG4gICAgIH0pXG4gICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZmFsc2UpO1xuICAgICAgIH0pO1xuICAgcmV0dXJuIHRydWU7XG4gfVxuIFxuIiwiaW1wb3J0IHsgTkZURW50aXR5LCBJTkZURW50aXR5LCBJTWVkaWFOb2RlIH0gZnJvbSBcIi4vTkZURW50aXR5XCI7XG5pbXBvcnQgeyBJQ2FtZXJhVmlld1JlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJzL0NhbWVyYVZpZXdSZW5kZXJlclwiO1xuaW1wb3J0IHsgQXBwSnNvbiB9IGZyb20gXCIuL2RhdGEvQXBwRGF0YVwiO1xuXG5leHBvcnQgY2xhc3MgQVJuZnRDb3JlIHtcblxuICAgIHByaXZhdGUgY291bnQ6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIF9jb250cm9sbGVyczogTWFwPHN0cmluZywgSU5GVEVudGl0eT4gPSBuZXcgTWFwPHN0cmluZywgSU5GVEVudGl0eT4oKTtcblxuICAgIHByaXZhdGUgX3ZpZGVvUmVuZGVyZXI6IElDYW1lcmFWaWV3UmVuZGVyZXI7XG5cbiAgICBwcml2YXRlIF9jYW1lcmFEYXRhVVJMOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9mcHM6IG51bWJlciA9IDE1O1xuXG4gICAgcHJpdmF0ZSBfbGFzdFRpbWU6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgYXBwRGF0YTogQXBwSnNvbjtcblxuICAgIC8vIGV2ZW50c1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVZFTlRfU0VUX0NBTUVSQTogc3RyaW5nID0gXCJBUk5GVF9TRVRfQ0FNRVJBX0VWRU5UXCI7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFVkVOVF9GT1VORF9NQVJLRVI6IHN0cmluZyA9IFwiQVJORlRfRk9VTkRfTUFSS0VSX0VWRU5UXCI7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFVkVOVF9MT1NUX01BUktFUjogc3RyaW5nID0gXCJBUk5GVF9MT1NUX01BUktFUl9FVkVOVFwiO1xuXG4gICAgY29uc3RydWN0b3IodmlkZW86IElDYW1lcmFWaWV3UmVuZGVyZXIsIGNhbURhdGE6IHN0cmluZykge1xuICAgICAgICB0aGlzLl92aWRlb1JlbmRlcmVyID0gdmlkZW87XG4gICAgICAgIHRoaXMuX2NhbWVyYURhdGFVUkwgPSBjYW1EYXRhO1xuICAgICAgICAvLyBzZXQgZGVmYXVsdCBmcHMgYXQgMTVcbiAgICAgICAgdGhpcy5zZXRGUFModGhpcy5fZnBzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTkZURW50aXR5KGVudGl0eTogSU5GVEVudGl0eSwgbmFtZT86IHN0cmluZyk6IElORlRFbnRpdHkge1xuXG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIG5hbWUgPSBcImVudGl0eS1cIiArIHRoaXMuY291bnQrKztcblxuICAgICAgICB0aGlzLl9jb250cm9sbGVycy5zZXQobmFtZSwgZW50aXR5KTtcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTkZURW50aXR5Mihub2RlOiBJTWVkaWFOb2RlLCBtYXJrZXJVcmw6IHN0cmluZywgbmFtZT86IHN0cmluZykge1xuXG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIG5hbWUgPSBcImVudGl0eS1cIiArIHRoaXMuY291bnQrKztcbiAgICBcbiAgICAgICAgbGV0IGVudGl0eSA9IG5ldyBORlRFbnRpdHkobm9kZSwgbWFya2VyVXJsLCAxMjAsIDEyMCk7XG5cbiAgICAgICAgdGhpcy5fY29udHJvbGxlcnMuc2V0KG5hbWUsIGVudGl0eSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEVudGl0eUJ5TmFtZShuYW1lOiBzdHJpbmcpOiBJTkZURW50aXR5IHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb250cm9sbGVycy5oYXMobmFtZSkpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlcnMuZ2V0KG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDYW1lcmFWaWV3KCk6IElDYW1lcmFWaWV3UmVuZGVyZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW9SZW5kZXJlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RlBTKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZnBzID0gMTAwMCAvIHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgQVJuZnRcIik7XG5cbiAgICAgICAgbGV0IHByb21pc2VzOiBQcm9taXNlPGJvb2xlYW4+W10gPSBbXTtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goZWxlbWVudC5pbml0aWFsaXplKHRoaXMuX2NhbWVyYURhdGFVUkwpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGltYWdlRGF0YTogSW1hZ2VEYXRhO1xuICAgICAgICBpZiAoKHRpbWUgLSB0aGlzLl9sYXN0VGltZSkgPiB0aGlzLl9mcHMpIHtcbiAgICAgICAgICAgIGltYWdlRGF0YSA9IHRoaXMuX3ZpZGVvUmVuZGVyZXIuZ2V0SW1hZ2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlRGF0YSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUaW1lID0gdGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnVwZGF0ZSgpO1xuICAgICAgICAgICAgaWYgKGltYWdlRGF0YSlcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByb2Nlc3MoaW1hZ2VEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJzLmZvckVhY2goZW50aXR5ID0+IHtcbiAgICAgICAgICAgIGVudGl0eS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVycy5jbGVhcigpO1xuICAgICAgICB0aGlzLl92aWRlb1JlbmRlcmVyID0gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgTkZUV29ya2VyIGZyb20gXCIuL05GVFdvcmtlclwiO1xuaW1wb3J0IHsgTkZUT3JpZW50YXRpb24gfSBmcm9tICcuL05GVE9yaWVudGF0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBJTWVkaWFOb2RlIHtcbiAgICB1cGRhdGUoKTogdm9pZDtcbiAgICBmb3VuZCh2YWx1ZTogTkZUT3JpZW50YXRpb24pOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElORlRFbnRpdHkge1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIGZvdW5kKG1zZzogTkZUT3JpZW50YXRpb24pOiB2b2lkO1xuICAgIGluaXRpYWxpemUoY2FtZXJhRGF0YTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBwcm9jZXNzKGltYWdlRGF0YTogSW1hZ2VEYXRhKTogdm9pZDtcbiAgICBkZXN0cm95KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBORlRFbnRpdHkgaW1wbGVtZW50cyBJTkZURW50aXR5IHtcblxuXG4gICAgcHJpdmF0ZSBfbm9kZXM6IElNZWRpYU5vZGVbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBfd29ya2VyOiBORlRXb3JrZXI7XG5cbiAgICBwcml2YXRlIF9jYW1lcmFVUkw6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCBvcmllbnRhdGlvbk1hdHJpeDogYW55O1xuXG4gICAgcHJvdGVjdGVkIF9tYXJrZXJVUkw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IElNZWRpYU5vZGUsIG1hcmtlclVSTDogc3RyaW5nLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXJrZXJVUkwgPSBtYXJrZXJVUkw7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IG5ldyBORlRXb3JrZXIodGhpcywgdGhpcy5fbWFya2VyVVJMLCB3LCBoKTtcblxuICAgICAgICB0aGlzLl9ub2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKGNhbWVyYURhdGE6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICB0aGlzLl9jYW1lcmFVUkwgPSBjYW1lcmFEYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyLmluaXRpYWxpemUodGhpcy5fY2FtZXJhVVJMKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm91bmQobXNnOiBORlRPcmllbnRhdGlvbik6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLm9yaWVudGF0aW9uTWF0cml4ID0gKG1zZykgPyBKU09OLnBhcnNlKG1zZy5tYXRyaXhHTF9SSCkgOiBudWxsO1xuICAgICAgICB0aGlzLl9ub2Rlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5mb3VuZChtc2cpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJvY2VzcyhpbWFnZURhdGE6IEltYWdlRGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLl93b3JrZXIucHJvY2VzcyhpbWFnZURhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vICBsb29wIHRocm91Z2ggbm9kZXMgYW5kIHVwZGF0ZVxuICAgICAgICB0aGlzLl9ub2Rlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBORlRFbnRpdHkgfSBmcm9tIFwiLi9ORlRFbnRpdHlcIjtcbmltcG9ydCB7IE5GVE9yaWVudGF0aW9uIH0gZnJvbSBcIi4vTkZUT3JpZW50YXRpb25cIlxuaW1wb3J0IFdvcmtlciBmcm9tIFwid29ya2VyLWxvYWRlciEuL1dvcmtlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBORlRXb3JrZXIge1xuXG4gICAgcHJpdmF0ZSBfZGlzcGF0Y2hlcjogTkZURW50aXR5O1xuXG4gICAgcHJpdmF0ZSB3b3JrZXI6IFdvcmtlcjtcblxuICAgIHByaXZhdGUgbWFya2VyVVJMOiBhbnk7XG5cbiAgICBwcml2YXRlIF9wcm9jZXNzaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHZ3OiBudW1iZXI7XG4gICAgcHJpdmF0ZSB2aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZDogTkZURW50aXR5LCBtYXJrZXJVUkw6IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hlciA9IGQ7XG4gICAgICAgIHRoaXMubWFya2VyVVJMID0gbWFya2VyVVJMO1xuICAgICAgICB0aGlzLnZ3ID0gdztcbiAgICAgICAgdGhpcy52aCA9IGg7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoY2FtZXJhVVJMOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMud29ya2VyID0gbmV3IFdvcmtlcigpO1xuICAgICAgICAgICAgLy90aGlzLndvcmtlci5vbm1lc3NhZ2UgPSAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWQoY2FtZXJhVVJMKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3ZlcndyaXRlIGxvYWQgb25tZXNzYWdlIHdpdGggc2VhcmNoIG9ubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAvKnRoaXMud29ya2VyLm9ubWVzc2FnZSA9IChldikgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3BvbnNlIGZvdW5kID0gXCIgKyAoZXYuZGF0YS50eXBlID09IFwiZm91bmRcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1zZzogYW55ID0gKGV2LmRhdGEudHlwZSA9PSBcImZvdW5kXCIpID8gZXYuZGF0YSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNwYXRjaGVyLmZvdW5kKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07Ki9cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vfTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJvY2VzcyhpbWFnZURhdGE6IEltYWdlRGF0YSkge1xuXG4gICAgICAgIGlmICh0aGlzLl9wcm9jZXNzaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICAgICAgLy90aGlzLndvcmtlci5wb3N0TWVzc2FnZSh7IHR5cGU6ICdwcm9jZXNzJywgaW1hZ2VkYXRhOiBpbWFnZURhdGEgfSwgW2ltYWdlRGF0YS5kYXRhLmJ1ZmZlcl0pO1xuICAgICAgICB0aGlzLndvcmtlci5wb3N0TWVzc2FnZSh7IHR5cGU6ICdwcm9jZXNzJywgaW1hZ2VkYXRhOiBpbWFnZURhdGEgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGxvYWQoY2FtZXJhVVJMOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICB2YXIgcHNjYWxlID0gMzIwIC8gTWF0aC5tYXgodGhpcy52dywgdGhpcy52aCAvIDMgKiA0KTtcblxuICAgICAgICAgICAgbGV0IHc6IG51bWJlciA9IHRoaXMudncgKiBwc2NhbGU7XG4gICAgICAgICAgICBsZXQgaDogbnVtYmVyID0gdGhpcy52aCAqIHBzY2FsZTtcbiAgICAgICAgICAgIGxldCBwdzogbnVtYmVyID0gTWF0aC5tYXgodywgKGggLyAzKSAqIDQpO1xuICAgICAgICAgICAgbGV0IHBoOiBudW1iZXIgPSBNYXRoLm1heChoLCAodyAvIDQpICogMyk7XG5cbiAgICAgICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbG9hZCcsXG4gICAgICAgICAgICAgICAgcHc6IHB3LFxuICAgICAgICAgICAgICAgIHBoOiBwaCxcbiAgICAgICAgICAgICAgICBjYW1lcmFfcGFyYTogY2FtZXJhVVJMLFxuICAgICAgICAgICAgICAgIG1hcmtlcjogdGhpcy5tYXJrZXJVUkxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLndvcmtlci5vbm1lc3NhZ2UgPSAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBtc2cgPSBldi5kYXRhO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbG9hZGVkJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2ogPSBKU09OLnBhcnNlKG1zZy5wcm9qKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX2Rpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoQVJuZnQuRVZFTlRfU0VUX0NBTUVSQSwgcHJvaikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZExvYWRpbmdcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1zZy5lbmQgPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuXG4gICAgfVxuXG59XG5cbi8vZXhwb3J0IGRlZmF1bHQgbnVsbCBhcyBhbnk7XG4iLCJpbXBvcnQgeyBJTWVkaWFOb2RlIH0gZnJvbSAnLi4vTkZURW50aXR5JztcblxuZXhwb3J0IGNsYXNzIEFSQ29udHJvbGxlckNvbXBvbmVudCBpbXBsZW1lbnRzIElNZWRpYU5vZGV7XG5cbiAgICBwcm90ZWN0ZWQgd29ybGQ6IGFueTtcbiAgICBwcml2YXRlIF9oYXNGb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2ZyYW1lRHJvcHM6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG4gICAgcHVibGljIHVwZGF0ZSgpe1xuICAgICAgICBpZiAoIXRoaXMud29ybGQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZURyb3BzID0gMDtcbiAgICAgICAgfSBlbHNlIHt9XG4gICAgfVxuXG4gICAgcHVibGljIGZvdW5kKG1zZzogYW55KTogdm9pZCB7XG5cbiAgICB0aGlzLndvcmxkID0gbXNnO1xuICAgIH1cbn0iLCJcbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9TZXR0aW5nRGF0YSB7XG4gICAgd2lkdGg6IFNjcmVlbkRhdGE7XG4gICAgaGVpZ2h0OiBTY3JlZW5EYXRhO1xuICAgIGZhY2luZ01vZGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JlZW5EYXRhIHtcbiAgICBtaW46IG51bWJlcjtcbiAgICBtYXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2FtZXJhVmlld1JlbmRlcmVyIHtcbiAgICBnZXRIZWlnaHQoKTogbnVtYmVyO1xuICAgIGdldFdpZHRoKCk6IG51bWJlcjtcbiAgICBnZXRJbWFnZSgpOiBJbWFnZURhdGE7XG59XG5cbmV4cG9ydCBjbGFzcyBDYW1lcmFWaWV3UmVuZGVyZXIgaW1wbGVtZW50cyBJQ2FtZXJhVmlld1JlbmRlcmVyIHtcblxuICAgIHByaXZhdGUgY2FudmFzX3Byb2Nlc3M6IEhUTUxDYW52YXNFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjb250ZXh0X3Byb2Nlc3M6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICAgIHB1YmxpYyB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcblxuICAgIHByaXZhdGUgX2ZhY2luZzogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSB2dzogbnVtYmVyO1xuICAgIHByaXZhdGUgdmg6IG51bWJlcjtcblxuICAgIHByaXZhdGUgdzogbnVtYmVyO1xuICAgIHByaXZhdGUgaDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBwdzogbnVtYmVyO1xuICAgIHByaXZhdGUgcGg6IG51bWJlcjtcblxuICAgIHByaXZhdGUgb3g6IG51bWJlcjtcbiAgICBwcml2YXRlIG95OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWRlbzogSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNhbnZhc19wcm9jZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dF9wcm9jZXNzID0gdGhpcy5jYW52YXNfcHJvY2Vzcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLnZpZGVvID0gdmlkZW87XG4gICAgfVxuXG4gICAgcHVibGljIGdldEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudnc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEltYWdlKCk6IEltYWdlRGF0YSB7XG4gICAgICAgIHRoaXMuY29udGV4dF9wcm9jZXNzLmRyYXdJbWFnZSh0aGlzLnZpZGVvLCAwLCAwLCB0aGlzLnZ3LCB0aGlzLnZoLCB0aGlzLm94LCB0aGlzLm95LCB0aGlzLncsIHRoaXMuaCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfcHJvY2Vzcy5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5wdywgdGhpcy5waCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUodmlkZW9TZXR0aW5nczogVmlkZW9TZXR0aW5nRGF0YSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXG4gICAgICAgIHRoaXMuX2ZhY2luZyA9IHZpZGVvU2V0dGluZ3MuZmFjaW5nTW9kZSB8fCAnZW52aXJvbm1lbnQnXG5cbiAgICAgICAgY29uc3QgY29uc3RyYWludHMgPSB7fVxuICAgICAgICBjb25zdCBtZWRpYURldmljZXNDb25zdHJhaW50cyA9IHt9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhpbnQ6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJhdWRpb1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWRlb1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNpbmdNb2RlOiB0aGlzLl9mYWNpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyBtaW46IDQ4MCwgbWF4OiA2NDAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGhpbnQpLnRoZW4oYXN5bmMgKHN0cmVhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlbyA9IGF3YWl0IG5ldyBQcm9taXNlPEhUTUxWaWRlb0VsZW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW8ub25sb2FkZWRtZXRhZGF0YSA9ICgpID0+IHJlc29sdmUodGhpcy52aWRlbyk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHZhbHVlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudncgPSB0aGlzLnZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZoID0gdGhpcy52aWRlby52aWRlb0hlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBzY2FsZSA9IDMyMCAvIE1hdGgubWF4KHRoaXMudncsIHRoaXMudmggLyAzICogNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudyA9IHRoaXMudncgKiBwc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmggPSB0aGlzLnZoICogcHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdyA9IE1hdGgubWF4KHRoaXMudywgKHRoaXMuaCAvIDMpICogNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBoID0gTWF0aC5tYXgodGhpcy5oLCAodGhpcy53IC8gNCkgKiAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3ggPSAodGhpcy5wdyAtIHRoaXMudykgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5veSA9ICh0aGlzLnBoIC0gdGhpcy5oKSAvIDI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzX3Byb2Nlc3Mud2lkdGggPSB0aGlzLnB3O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNfcHJvY2Vzcy5oZWlnaHQgPSB0aGlzLnBoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRfcHJvY2Vzcy5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0X3Byb2Nlc3MuZmlsbFJlY3QoMCwgMCwgdGhpcy5wdywgdGhpcy5waCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgobXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcmVqZWN0KFwiTm8gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYVwiKTtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJTb3JyeSwgWW91ciBkZXZpY2UgZG9lcyBub3Qgc3VwcG9ydCB0aGlzIGV4cGVyaW5jZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgQVJuZnQgZnJvbSAnLi9BUm5mdCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIEFSbmZ0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrZXJfZm4oKSB7XG4gIHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJBUm5mdC53b3JrZXIuanNcIik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=