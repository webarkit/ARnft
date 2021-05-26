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
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/stats.js/build/stats.min.js":
/*!**************************************************!*\
  !*** ./node_modules/stats.js/build/stats.min.js ***!
  \**************************************************/
/***/ (function(module) {

// stats.js - http://github.com/mrdoob/stats.js
(function(f,e){ true?module.exports=e():0})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();
u(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel("FPS","#0ff","#002")),h=e(new f.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var t=e(new f.Panel("MB","#f08","#201"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/
1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=h;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);
b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+" "+e+" ("+g(c)+"-"+g(k)+")",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});


/***/ }),

/***/ "./src/ARnft.ts":
/*!**********************!*\
  !*** ./src/ARnft.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ARnft
/* harmony export */ });
/* harmony import */ var _utils_html_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/html/Container */ "./src/utils/html/Container.ts");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stats.js */ "./node_modules/stats.js/build/stats.min.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _renderers_CameraViewRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderers/CameraViewRenderer */ "./src/renderers/CameraViewRenderer.ts");
/* harmony import */ var _utils_ARUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ARUtils */ "./src/utils/ARUtils.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../package.json */ "./package.json");






const { version } = _package_json__WEBPACK_IMPORTED_MODULE_4__;
class ARnft {
    constructor(width, height, configUrl) {
        this.width = width;
        this.height = height;
        this.configUrl = configUrl;
        this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.default)();
        this.version = version;
        console.log('ARnft ', this.version);
    }
    static async init(width, height, markerUrl, configUrl, stats, camera) {
        const _arnft = new ARnft(width, height, configUrl);
        return await _arnft.initialize(markerUrl, stats, camera).catch((error) => {
            console.error(error);
            return Promise.reject(false);
        });
    }
    async initialize(markerUrl, stats, camera) {
        console.log('ARnft init() %cstart...', 'color: yellow; background-color: blue; border-radius: 4px; padding: 2px');
        (0,_utils_ARUtils__WEBPACK_IMPORTED_MODULE_3__.getConfig)(this.configUrl);
        document.addEventListener('getConfig', async (ev) => {
            this.appData = ev.detail.config;
            console.log(this.appData);
            _utils_html_Container__WEBPACK_IMPORTED_MODULE_0__.default.createContainer(this.appData);
            _utils_html_Container__WEBPACK_IMPORTED_MODULE_0__.default.createLoading(this.appData);
            _utils_html_Container__WEBPACK_IMPORTED_MODULE_0__.default.createStats(this.appData.stats.createHtml, this.appData);
            let statsMain, statsWorker;
            if (stats) {
                statsMain = new (stats_js__WEBPACK_IMPORTED_MODULE_1___default())();
                statsMain.showPanel(0);
                document.getElementById('stats1').appendChild(statsMain.dom);
                statsWorker = new (stats_js__WEBPACK_IMPORTED_MODULE_1___default())();
                statsWorker.showPanel(0);
                document.getElementById('stats2').appendChild(statsWorker.dom);
            }
            this.cameraView = new _renderers_CameraViewRenderer__WEBPACK_IMPORTED_MODULE_2__.CameraViewRenderer(document.getElementById("video"));
            await this.cameraView.initialize(this.appData.videoSettings).catch((error) => {
                console.error(error);
                return Promise.reject(false);
            });
        });
        return Promise.resolve(this);
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ARnft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ARnft */ "./src/ARnft.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    ARnft: _ARnft__WEBPACK_IMPORTED_MODULE_0__.default
});


/***/ }),

/***/ "./src/renderers/CameraViewRenderer.ts":
/*!*********************************************!*\
  !*** ./src/renderers/CameraViewRenderer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/utils/ARUtils.ts":
/*!******************************!*\
  !*** ./src/utils/ARUtils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/utils/html/Container.ts":
/*!*************************************!*\
  !*** ./src/utils/html/Container.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Container
/* harmony export */ });
class Container {
    static createContainer(configData) {
        if (configData.container.create) {
            const container = document.createElement('div');
            container.id = 'app';
            const canvas = document.createElement('canvas');
            canvas.id = 'canvas';
            const video = document.createElement('video');
            video.id = 'video';
            video.setAttribute('autoplay', '');
            video.setAttribute('muted', '');
            video.setAttribute('playsinline', '');
            container.appendChild(video);
            container.appendChild(canvas);
            const loading = document.getElementById('loading');
            document.body.insertBefore(container, loading);
            var containerEvent = new Event('containerEvent');
            document.dispatchEvent(containerEvent);
            return { container: container, canvas: canvas, video: video };
        }
        else {
            const container = document.getElementById(configData.container.containerName);
            const canvas = document.getElementById(configData.container.canvasName);
            var containerEvent = new Event('containerEvent');
            document.dispatchEvent(containerEvent);
            return { container: container, canvas: canvas };
        }
    }
    static createStats(create, configData) {
        if (create && configData.stats.createHtml) {
            const stats = document.createElement('div');
            stats.id = 'stats';
            stats.className = 'ui stats';
            const stats1 = document.createElement('div');
            stats1.id = 'stats1';
            stats1.className = 'stats-item';
            const stats1p = document.createElement('p');
            stats1p.className = 'stats-item-title';
            stats1p.innerText = 'Main';
            stats1.appendChild(stats1p);
            stats.appendChild(stats1);
            const stats2 = document.createElement('div');
            stats2.id = 'stats2';
            stats2.className = 'stats-item';
            const stats2p = document.createElement('p');
            stats2p.className = 'stats-item-title';
            stats2p.innerText = 'Worker';
            stats2.appendChild(stats2p);
            stats.appendChild(stats2);
            const loading = document.getElementById('loading');
            document.body.insertBefore(stats, loading);
        }
    }
    static createLoading(configData) {
        if (configData.loading.create) {
            const loader = document.createElement('div');
            loader.id = 'loading';
            const logo = document.createElement('img');
            logo.src = configData.loading.logo.src;
            logo.alt = configData.loading.logo.alt;
            const loadingMessage = document.createElement('span');
            loadingMessage.setAttribute('class', 'loading-text');
            loadingMessage.innerText = configData.loading.loadingMessage;
            loader.appendChild(logo);
            loader.appendChild(loadingMessage);
            document.body.insertBefore(loader, document.body.firstChild);
        }
    }
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ rng
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"@webarkit/ar-nft\",\"version\":\"0.9.1\",\"main\":\"dist/ARnft.js\",\"types\":\"types/src/index.d.ts\",\"description\":\"WebAR Javscript library for markerless AR\",\"keywords\":[\"ARToolKit\",\"AR\",\"ARnft\",\"Augmented Reality\",\"WebAR\",\"JavaScript\",\"jsartoolkit\",\"jsartoolkit5\",\"jsartoolkitNFT\",\"NFT\",\"markerless\"],\"author\":{\"name\":\"Walter Perdan\",\"email\":\"github@kalwaltart.it\",\"url\":\"https://www.kalwaltart.com\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/webarkit/ARnft\"},\"homepage\":\"https://github.com/webarkit/ARnft\",\"contributors\":[\"Github Contributors (https://github.com/webarkit/ARnft/graphs/contributors)\"],\"bugs\":{\"url\":\"https://github.com/webarkit/ARnft/issues\"},\"devDependencies\":{\"@babel/core\":\"^7.13.10\",\"@babel/plugin-transform-runtime\":\"^7.13.10\",\"@babel/preset-env\":\"^7.13.10\",\"@types/node\":\"^14.14.10\",\"@types/uuid\":\"^8.3.0\",\"@types/stats.js\":\"^0.17.0\",\"babel-loader\":\"^8.2.2\",\"custom-event\":\"^1.0.1\",\"eslint\":\"^7.13.0\",\"eslint-config-standard\":\"^16.0.1\",\"eslint-plugin-import\":\"^2.22.1\",\"eslint-plugin-node\":\"^11.1.0\",\"eslint-plugin-promise\":\"^4.2.1\",\"eslint-plugin-standard\":\"^4.1.0\",\"grunt\":\"^1.3.0\",\"grunt-cli\":\"^1.3.2\",\"grunt-contrib-jshint\":\"^3.0.0\",\"grunt-eslint\":\"^23.0.0\",\"rimraf\":\"^3.0.2\",\"stats.js\":\"^0.17.0\",\"ts-loader\":\"^8.1.0\",\"typescript\":\"^4.1.2\",\"webpack\":\"^5.4.0\",\"webpack-cli\":\"^4.5.0\",\"worker-loader\":\"^3.0.8\"},\"scripts\":{\"build-jshint\":\"grunt jshint --force\",\"dev-ts\":\"rimraf ./build && tsc && webpack --mode development --progress --watch\",\"build-ts\":\"rimraf ./build && tsc && webpack --mode production\",\"watch\":\"./node_modules/.bin/watch 'npm run build' ./js/\"},\"license\":\"LGPL-3.0\",\"resolutions\":{\"ecstatic\":\"^4.1.4\"},\"dependencies\":{\"@kalwalt/jsartoolkit-nft\":\"^0.9.1\",\"terser-webpack-plugin\":\"^5.1.1\",\"uuid\":\"^8.3.2\"}}");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
.default;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQVJuZnQvLi9ub2RlX21vZHVsZXMvc3RhdHMuanMvYnVpbGQvc3RhdHMubWluLmpzIiwid2VicGFjazovL0FSbmZ0Ly4vc3JjL0FSbmZ0LnRzIiwid2VicGFjazovL0FSbmZ0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0FSbmZ0Ly4vc3JjL3JlbmRlcmVycy9DYW1lcmFWaWV3UmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvdXRpbHMvQVJVdGlscy50cyIsIndlYnBhY2s6Ly9BUm5mdC8uL3NyYy91dGlscy9odG1sL0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9BUm5mdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL0FSbmZ0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vQVJuZnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQVJuZnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQVJuZnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQVJuZnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBO0FBQ0EsZUFBZSxLQUFzRCxvQkFBb0IsQ0FBNEQsQ0FBQyxrQkFBa0IsaUJBQWlCLGNBQWMscUJBQXFCLFNBQVMsY0FBYyxZQUFZLG9CQUFvQixxREFBcUQsSUFBSSx3Q0FBd0MsZ0NBQWdDLE1BQU0sT0FBTyxlQUFlLFlBQVksZUFBZSx1Q0FBdUM7QUFDbGYseUJBQXlCLEtBQUssbUhBQW1ILHNGQUFzRixLQUFLLE9BQU8sMERBQTBELDRCQUE0QixnQkFBZ0IsSUFBSSxnQ0FBZ0Msa0JBQWtCLG1EQUFtRCx5QkFBeUI7QUFDM2QsbUNBQW1DLFNBQVMsbUJBQW1CLGFBQWEsMEJBQTBCLHdCQUF3Qix3SkFBd0osVUFBVSxXQUFXLDRCQUE0QixhQUFhLHlCQUF5QixtREFBbUQscUJBQXFCLGNBQWMsb0JBQW9CLGNBQWM7QUFDcmUsb0JBQW9CLGNBQWMsaUJBQWlCLG9CQUFvQixPQUFPLDJCQUEyQixnQkFBZ0IsZ0JBQWdCLGNBQWMsZ0JBQWdCLG9CQUFvQixjQUFjLGtEQUFrRCxxQ0FBcUMsd0JBQXdCLGNBQWMsaUJBQWlCLHNDQUFzQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p4VjtBQUVsQjtBQUN3QztBQUN4QjtBQUNUO0FBQ007QUFDekMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLDBDQUFXO0FBRWhCLE1BQU0sS0FBSztJQVV0QixZQUFZLEtBQWEsRUFBRSxNQUFjLEVBQUMsU0FBaUI7UUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJ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cUNBQXFDLG1EQUFVO0FBQy9DOztBQUVBLGlFQUFlLFFBQVEsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNOdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiQVJuZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBUm5mdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBUm5mdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8vIHN0YXRzLmpzIC0gaHR0cDovL2dpdGh1Yi5jb20vbXJkb29iL3N0YXRzLmpzXG4oZnVuY3Rpb24oZixlKXtcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTpmLlN0YXRzPWUoKX0pKHRoaXMsZnVuY3Rpb24oKXt2YXIgZj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoYSl7Yy5hcHBlbmRDaGlsZChhLmRvbSk7cmV0dXJuIGF9ZnVuY3Rpb24gdShhKXtmb3IodmFyIGQ9MDtkPGMuY2hpbGRyZW4ubGVuZ3RoO2QrKyljLmNoaWxkcmVuW2RdLnN0eWxlLmRpc3BsYXk9ZD09PWE/XCJibG9ja1wiOlwibm9uZVwiO2w9YX12YXIgbD0wLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTowLjk7ei1pbmRleDoxMDAwMFwiO2MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdCgpO1xudSgrK2wlYy5jaGlsZHJlbi5sZW5ndGgpfSwhMSk7dmFyIGs9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKSxnPWssYT0wLHI9ZShuZXcgZi5QYW5lbChcIkZQU1wiLFwiIzBmZlwiLFwiIzAwMlwiKSksaD1lKG5ldyBmLlBhbmVsKFwiTVNcIixcIiMwZjBcIixcIiMwMjBcIikpO2lmKHNlbGYucGVyZm9ybWFuY2UmJnNlbGYucGVyZm9ybWFuY2UubWVtb3J5KXZhciB0PWUobmV3IGYuUGFuZWwoXCJNQlwiLFwiI2YwOFwiLFwiIzIwMVwiKSk7dSgwKTtyZXR1cm57UkVWSVNJT046MTYsZG9tOmMsYWRkUGFuZWw6ZSxzaG93UGFuZWw6dSxiZWdpbjpmdW5jdGlvbigpe2s9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKX0sZW5kOmZ1bmN0aW9uKCl7YSsrO3ZhciBjPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCk7aC51cGRhdGUoYy1rLDIwMCk7aWYoYz5nKzFFMyYmKHIudXBkYXRlKDFFMyphLyhjLWcpLDEwMCksZz1jLGE9MCx0KSl7dmFyIGQ9cGVyZm9ybWFuY2UubWVtb3J5O3QudXBkYXRlKGQudXNlZEpTSGVhcFNpemUvXG4xMDQ4NTc2LGQuanNIZWFwU2l6ZUxpbWl0LzEwNDg1NzYpfXJldHVybiBjfSx1cGRhdGU6ZnVuY3Rpb24oKXtrPXRoaXMuZW5kKCl9LGRvbUVsZW1lbnQ6YyxzZXRNb2RlOnV9fTtmLlBhbmVsPWZ1bmN0aW9uKGUsZixsKXt2YXIgYz1JbmZpbml0eSxrPTAsZz1NYXRoLnJvdW5kLGE9Zyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSkscj04MCphLGg9NDgqYSx0PTMqYSx2PTIqYSxkPTMqYSxtPTE1KmEsbj03NCphLHA9MzAqYSxxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7cS53aWR0aD1yO3EuaGVpZ2h0PWg7cS5zdHlsZS5jc3NUZXh0PVwid2lkdGg6ODBweDtoZWlnaHQ6NDhweFwiO3ZhciBiPXEuZ2V0Q29udGV4dChcIjJkXCIpO2IuZm9udD1cImJvbGQgXCIrOSphK1wicHggSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZcIjtiLnRleHRCYXNlbGluZT1cInRvcFwiO2IuZmlsbFN0eWxlPWw7Yi5maWxsUmVjdCgwLDAscixoKTtiLmZpbGxTdHlsZT1mO2IuZmlsbFRleHQoZSx0LHYpO1xuYi5maWxsUmVjdChkLG0sbixwKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9Ljk7Yi5maWxsUmVjdChkLG0sbixwKTtyZXR1cm57ZG9tOnEsdXBkYXRlOmZ1bmN0aW9uKGgsdyl7Yz1NYXRoLm1pbihjLGgpO2s9TWF0aC5tYXgoayxoKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9MTtiLmZpbGxSZWN0KDAsMCxyLG0pO2IuZmlsbFN0eWxlPWY7Yi5maWxsVGV4dChnKGgpK1wiIFwiK2UrXCIgKFwiK2coYykrXCItXCIrZyhrKStcIilcIix0LHYpO2IuZHJhd0ltYWdlKHEsZCthLG0sbi1hLHAsZCxtLG4tYSxwKTtiLmZpbGxSZWN0KGQrbi1hLG0sYSxwKTtiLmZpbGxTdHlsZT1sO2IuZ2xvYmFsQWxwaGE9Ljk7Yi5maWxsUmVjdChkK24tYSxtLGEsZygoMS1oL3cpKnApKX19fTtyZXR1cm4gZn0pO1xuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2h0bWwvQ29udGFpbmVyJ1xuaW1wb3J0IHsgQ29uZmlnRGF0YSB9IGZyb20gXCIuL2NvbmZpZy9Db25maWdEYXRhXCI7XG5pbXBvcnQgU3RhdHMgZnJvbSAnc3RhdHMuanMnXG5pbXBvcnQgeyBDYW1lcmFWaWV3UmVuZGVyZXIgfSBmcm9tIFwiLi9yZW5kZXJlcnMvQ2FtZXJhVmlld1JlbmRlcmVyXCI7XG5pbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tIFwiLi91dGlscy9BUlV0aWxzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHBhY2thZ2VKc29uIGZyb20gJy4uL3BhY2thZ2UuanNvbidcbmNvbnN0IHsgdmVyc2lvbiB9ID0gcGFja2FnZUpzb25cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVJuZnQge1xuICAgIHB1YmxpYyBjYW1lcmFWaWV3OiBDYW1lcmFWaWV3UmVuZGVyZXI7XG4gICAgcHVibGljIGFwcERhdGE6IENvbmZpZ0RhdGE7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuICAgIHB1YmxpYyBjb25maWdVcmw6IHN0cmluZztcbiAgICBwdWJsaWMgbWFya2VyVXJsOiBzdHJpbmc7XG4gICAgcHVibGljIGNhbURhdGE6IHN0cmluZztcbiAgICBwcml2YXRlIHV1aWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHZlcnNpb246IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcixjb25maWdVcmw6IHN0cmluZyl7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmNvbmZpZ1VybCA9IGNvbmZpZ1VybDtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZHY0KCk7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIGNvbnNvbGUubG9nKCdBUm5mdCAnLCB0aGlzLnZlcnNpb24pO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBpbml0ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbWFya2VyVXJsOiBzdHJpbmcsIGNvbmZpZ1VybDogc3RyaW5nLCBzdGF0czogYm9vbGVhbiwgY2FtZXJhOiBib29sZWFuKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICAgICAgY29uc3QgX2FybmZ0ID0gbmV3IEFSbmZ0KHdpZHRoLCBoZWlnaHQsIGNvbmZpZ1VybCk7XG4gICAgICAgIHJldHVybiBhd2FpdCBfYXJuZnQuaW5pdGlhbGl6ZShtYXJrZXJVcmwsIHN0YXRzLCBjYW1lcmEpLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChmYWxzZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXRpYWxpemUobWFya2VyVXJsOiBzdHJpbmcsIHN0YXRzOiBib29sZWFuLCBjYW1lcmE6IGJvb2xlYW4pOiBQcm9taXNlPG9iamVjdD4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQVJuZnQgaW5pdCgpICVjc3RhcnQuLi4nLCAnY29sb3I6IHllbGxvdzsgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgYm9yZGVyLXJhZGl1czogNHB4OyBwYWRkaW5nOiAycHgnKTtcbiAgICAgICAgZ2V0Q29uZmlnKHRoaXMuY29uZmlnVXJsKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2V0Q29uZmlnJywgYXN5bmMgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YSA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcERhdGEpO1xuICAgICAgICAvLyB2aWV3c1xuICAgICAgICBDb250YWluZXIuY3JlYXRlQ29udGFpbmVyKHRoaXMuYXBwRGF0YSk7XG4gICAgICAgIENvbnRhaW5lci5jcmVhdGVMb2FkaW5nKHRoaXMuYXBwRGF0YSk7XG4gICAgICAgIENvbnRhaW5lci5jcmVhdGVTdGF0cyh0aGlzLmFwcERhdGEuc3RhdHMuY3JlYXRlSHRtbCwgdGhpcy5hcHBEYXRhKTtcblxuICAgICAgICBsZXQgc3RhdHNNYWluLCBzdGF0c1dvcmtlclxuXG4gICAgICAgIGlmIChzdGF0cykge1xuICAgICAgICAgICAgc3RhdHNNYWluID0gbmV3IFN0YXRzKClcbiAgICAgICAgICAgIHN0YXRzTWFpbi5zaG93UGFuZWwoMCkgLy8gMDogZnBzLCAxOiBtcywgMjogbWIsIDMrOiBjdXN0b21cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0czEnKS5hcHBlbmRDaGlsZChzdGF0c01haW4uZG9tKVxuXG4gICAgICAgICAgICBzdGF0c1dvcmtlciA9IG5ldyBTdGF0cygpXG4gICAgICAgICAgICBzdGF0c1dvcmtlci5zaG93UGFuZWwoMCkgLy8gMDogZnBzLCAxOiBtcywgMjogbWIsIDMrOiBjdXN0b21cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0czInKS5hcHBlbmRDaGlsZChzdGF0c1dvcmtlci5kb20pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW1lcmFWaWV3ID0gbmV3IENhbWVyYVZpZXdSZW5kZXJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpIGFzIEhUTUxWaWRlb0VsZW1lbnQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5jYW1lcmFWaWV3LmluaXRpYWxpemUodGhpcy5hcHBEYXRhLnZpZGVvU2V0dGluZ3MpLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH0pOyAgICBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKVxuICAgIH1cblxufVxuIiwiaW1wb3J0IEFSbmZ0IGZyb20gJy4vQVJuZnQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBBUm5mdFxufVxuIiwiXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvU2V0dGluZ0RhdGEge1xuICAgIHdpZHRoOiBTY3JlZW5EYXRhO1xuICAgIGhlaWdodDogU2NyZWVuRGF0YTtcbiAgICBmYWNpbmdNb2RlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NyZWVuRGF0YSB7XG4gICAgbWluOiBudW1iZXI7XG4gICAgbWF4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhbWVyYVZpZXdSZW5kZXJlciB7XG4gICAgZ2V0SGVpZ2h0KCk6IG51bWJlcjtcbiAgICBnZXRXaWR0aCgpOiBudW1iZXI7XG4gICAgZ2V0SW1hZ2UoKTogSW1hZ2VEYXRhO1xufVxuXG5leHBvcnQgY2xhc3MgQ2FtZXJhVmlld1JlbmRlcmVyIGltcGxlbWVudHMgSUNhbWVyYVZpZXdSZW5kZXJlciB7XG5cbiAgICBwcml2YXRlIGNhbnZhc19wcm9jZXNzOiBIVE1MQ2FudmFzRWxlbWVudDtcblxuICAgIHByaXZhdGUgY29udGV4dF9wcm9jZXNzOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgICBwdWJsaWMgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9mYWNpbmc6IHN0cmluZztcblxuICAgIHByaXZhdGUgdnc6IG51bWJlcjtcbiAgICBwcml2YXRlIHZoOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIHc6IG51bWJlcjtcbiAgICBwcml2YXRlIGg6IG51bWJlcjtcblxuICAgIHByaXZhdGUgcHc6IG51bWJlcjtcbiAgICBwcml2YXRlIHBoOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIG94OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBveTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNfcHJvY2VzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbnRleHRfcHJvY2VzcyA9IHRoaXMuY2FudmFzX3Byb2Nlc3MuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy52aWRlbyA9IHZpZGVvO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnZ3O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbWFnZSgpOiBJbWFnZURhdGEge1xuICAgICAgICB0aGlzLmNvbnRleHRfcHJvY2Vzcy5kcmF3SW1hZ2UodGhpcy52aWRlbywgMCwgMCwgdGhpcy52dywgdGhpcy52aCwgdGhpcy5veCwgdGhpcy5veSwgdGhpcy53LCB0aGlzLmgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0X3Byb2Nlc3MuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMucHcsIHRoaXMucGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKHZpZGVvU2V0dGluZ3M6IFZpZGVvU2V0dGluZ0RhdGEpOiBQcm9taXNlPGJvb2xlYW4+IHtcblxuICAgICAgICB0aGlzLl9mYWNpbmcgPSB2aWRlb1NldHRpbmdzLmZhY2luZ01vZGUgfHwgJ2Vudmlyb25tZW50J1xuXG4gICAgICAgIGNvbnN0IGNvbnN0cmFpbnRzID0ge31cbiAgICAgICAgY29uc3QgbWVkaWFEZXZpY2VzQ29uc3RyYWludHMgPSB7fVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgICAgICAgICAgICAgIHZhciBoaW50OiBhbnkgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiYXVkaW9cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwidmlkZW9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFjaW5nTW9kZTogdGhpcy5fZmFjaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHsgbWluOiA0ODAsIG1heDogNjQwIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShoaW50KS50aGVuKGFzeW5jIChzdHJlYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW8gPSBhd2FpdCBuZXcgUHJvbWlzZTxIVE1MVmlkZW9FbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiByZXNvbHZlKHRoaXMudmlkZW8pO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh2YWx1ZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZ3ID0gdGhpcy52aWRlby52aWRlb1dpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aCA9IHRoaXMudmlkZW8udmlkZW9IZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwc2NhbGUgPSAzMjAgLyBNYXRoLm1heCh0aGlzLnZ3LCB0aGlzLnZoIC8gMyAqIDQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLncgPSB0aGlzLnZ3ICogcHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oID0gdGhpcy52aCAqIHBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHcgPSBNYXRoLm1heCh0aGlzLncsICh0aGlzLmggLyAzKSAqIDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waCA9IE1hdGgubWF4KHRoaXMuaCwgKHRoaXMudyAvIDQpICogMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm94ID0gKHRoaXMucHcgLSB0aGlzLncpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3kgPSAodGhpcy5waCAtIHRoaXMuaCkgLyAyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc19wcm9jZXNzLndpZHRoID0gdGhpcy5wdztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzX3Byb2Nlc3MuaGVpZ2h0ID0gdGhpcy5waDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0X3Byb2Nlc3MuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dF9wcm9jZXNzLmZpbGxSZWN0KDAsIDAsIHRoaXMucHcsIHRoaXMucGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKG1zZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHJlamVjdChcIk5vIG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWFcIik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiU29ycnksIFlvdXIgZGV2aWNlIGRvZXMgbm90IHN1cHBvcnQgdGhpcyBleHBlcmluY2UuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZXNUb1JhZGlhbnMoZGVncmVlczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIChNYXRoLlBJIC8gMTgwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIC8vcmV0dXJuIC9BbmRyb2lkfG1vYmlsZXxpUGFkfGlQaG9uZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgICBpZiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIC8vIHRydWUgZm9yIG1vYmlsZSBkZXZpY2VcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0lPUygpOiBib29sZWFuIHtcbiAgICBpZiAoL2lQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIC8vIHRydWUgZm9yIG1vYmlsZSBkZXZpY2VcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbiBcbiBleHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnKGNvbmZpZ0RhdGE6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBmZXRjaChjb25maWdEYXRhKVxuICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhUVFAgZXJyb3IsIHN0YXR1cyA9IFwiICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICB9XG4gICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgfSlcbiAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgLy8gcHJpbnRpbmcgdGhlIHJlc3BvbnNlIG9ubHkgZm9yIHRlc3RpbmdcbiAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgY29uc3QgZXZlbnREYXRhID0gbmV3IEN1c3RvbUV2ZW50KCdnZXRDb25maWcnLCB7IGRldGFpbDogeyBjb25maWc6IHJlc3BvbnNlIH0gfSk7XG4gICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudERhdGEpO1xuICAgICAgIHJldHVybihyZXNwb25zZSlcbiAgICAgfSlcbiAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChmYWxzZSk7XG4gICAgICAgfSk7XG4gICByZXR1cm4gdHJ1ZTtcbiB9XG4gXG4iLCJpbXBvcnQgeyBDb25maWdEYXRhIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9Db25maWdEYXRhXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciB7XG4gIHN0YXRpYyBjcmVhdGVDb250YWluZXIgKGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGEpIHtcbiAgICBpZiAoY29uZmlnRGF0YS5jb250YWluZXIuY3JlYXRlKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgY29udGFpbmVyLmlkID0gJ2FwcCdcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICBjYW52YXMuaWQgPSAnY2FudmFzJ1xuICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpXG4gICAgICB2aWRlby5pZCA9ICd2aWRlbydcbiAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnJylcbiAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAnJylcbiAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAnJylcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWRlbylcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW52YXMpXG4gICAgICBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmcnKVxuICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBsb2FkaW5nKVxuICAgICAgdmFyIGNvbnRhaW5lckV2ZW50ID0gbmV3IEV2ZW50KCdjb250YWluZXJFdmVudCcpXG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGNvbnRhaW5lckV2ZW50KVxuICAgICAgcmV0dXJuIHsgY29udGFpbmVyOiBjb250YWluZXIsIGNhbnZhczogY2FudmFzLCB2aWRlbzogdmlkZW8gfSAgIFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWdEYXRhLmNvbnRhaW5lci5jb250YWluZXJOYW1lKVxuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnRGF0YS5jb250YWluZXIuY2FudmFzTmFtZSlcbiAgICAgIHZhciBjb250YWluZXJFdmVudCA9IG5ldyBFdmVudCgnY29udGFpbmVyRXZlbnQnKVxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjb250YWluZXJFdmVudClcbiAgICAgIHJldHVybiB7IGNvbnRhaW5lcjogY29udGFpbmVyLCBjYW52YXM6IGNhbnZhcyB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVN0YXRzIChjcmVhdGU6IGJvb2xlYW4sIGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGEpIHtcbiAgICBpZiAoY3JlYXRlICYmIGNvbmZpZ0RhdGEuc3RhdHMuY3JlYXRlSHRtbCkge1xuICAgICAgY29uc3Qgc3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgc3RhdHMuaWQgPSAnc3RhdHMnXG4gICAgICBzdGF0cy5jbGFzc05hbWUgPSAndWkgc3RhdHMnXG4gICAgICBjb25zdCBzdGF0czEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgc3RhdHMxLmlkID0gJ3N0YXRzMSdcbiAgICAgIHN0YXRzMS5jbGFzc05hbWUgPSAnc3RhdHMtaXRlbSdcbiAgICAgIGNvbnN0IHN0YXRzMXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHN0YXRzMXAuY2xhc3NOYW1lID0gJ3N0YXRzLWl0ZW0tdGl0bGUnXG4gICAgICBzdGF0czFwLmlubmVyVGV4dCA9ICdNYWluJ1xuICAgICAgc3RhdHMxLmFwcGVuZENoaWxkKHN0YXRzMXApXG4gICAgICBzdGF0cy5hcHBlbmRDaGlsZChzdGF0czEpXG4gICAgICBjb25zdCBzdGF0czIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgc3RhdHMyLmlkID0gJ3N0YXRzMidcbiAgICAgIHN0YXRzMi5jbGFzc05hbWUgPSAnc3RhdHMtaXRlbSdcbiAgICAgIGNvbnN0IHN0YXRzMnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHN0YXRzMnAuY2xhc3NOYW1lID0gJ3N0YXRzLWl0ZW0tdGl0bGUnXG4gICAgICBzdGF0czJwLmlubmVyVGV4dCA9ICdXb3JrZXInXG4gICAgICBzdGF0czIuYXBwZW5kQ2hpbGQoc3RhdHMycClcbiAgICAgIHN0YXRzLmFwcGVuZENoaWxkKHN0YXRzMilcbiAgICAgIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZycpXG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShzdGF0cywgbG9hZGluZylcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTG9hZGluZyAoY29uZmlnRGF0YTogQ29uZmlnRGF0YSkge1xuICAgIGlmIChjb25maWdEYXRhLmxvYWRpbmcuY3JlYXRlKSB7XG4gICAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgbG9hZGVyLmlkID0gJ2xvYWRpbmcnXG4gICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgIGxvZ28uc3JjID0gY29uZmlnRGF0YS5sb2FkaW5nLmxvZ28uc3JjXG4gICAgICBsb2dvLmFsdCA9IGNvbmZpZ0RhdGEubG9hZGluZy5sb2dvLmFsdFxuICAgICAgY29uc3QgbG9hZGluZ01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgIGxvYWRpbmdNZXNzYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9hZGluZy10ZXh0JylcbiAgICAgIGxvYWRpbmdNZXNzYWdlLmlubmVyVGV4dCA9IGNvbmZpZ0RhdGEubG9hZGluZy5sb2FkaW5nTWVzc2FnZVxuICAgICAgbG9hZGVyLmFwcGVuZENoaWxkKGxvZ28pXG4gICAgICBsb2FkZXIuYXBwZW5kQ2hpbGQobG9hZGluZ01lc3NhZ2UpXG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShsb2FkZXIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZClcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==