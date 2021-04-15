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

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _asyncToGenerator
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _classCallCheck
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _createClass
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


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
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_ARnftCore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/ARnftCore */ "./src/core/ARnftCore.ts");
/* harmony import */ var _core_NFTEntity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/NFTEntity */ "./src/core/NFTEntity.ts");
/* harmony import */ var _core_components_ARControllerComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/ARControllerComponent */ "./src/core/components/ARControllerComponent.ts");
/* harmony import */ var _core_renderers_CameraViewRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/renderers/CameraViewRenderer */ "./src/core/renderers/CameraViewRenderer.ts");
/* harmony import */ var _core_ARUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/ARUtils */ "./src/core/ARUtils.ts");










var ARnft = /*#__PURE__*/function () {
  function ARnft(configUrl, camUrl, markerUrl) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ARnft);

    this.camData = camUrl;
    this.configUrl = configUrl;
    this.markerUrl = markerUrl;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ARnft, [{
    key: "initialize",
    value: function () {
      var _initialize = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                (0,_core_ARUtils__WEBPACK_IMPORTED_MODULE_8__.getConfig)(this.configUrl);
                document.addEventListener('getConfig', /*#__PURE__*/function () {
                  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(ev) {
                    var arComponent, nftEntity;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this.appData = ev.detail.config;
                            console.log(_this.appData);
                            _this.cameraView = new _core_renderers_CameraViewRenderer__WEBPACK_IMPORTED_MODULE_7__.CameraViewRenderer(document.getElementById("video"));
                            _context.next = 5;
                            return _this.cameraView.initialize(_this.appData.videoSettings)["catch"](function (error) {
                              console.error(error);
                              return Promise.reject(false);
                            });

                          case 5:
                            _this._arnftCore = new _core_ARnftCore__WEBPACK_IMPORTED_MODULE_4__.ARnftCore(_this.cameraView, _this.camData);
                            _context.next = 8;
                            return _this._arnftCore.initialize()["catch"](function (error) {
                              console.error(error);
                              return Promise.reject(false);
                            });

                          case 8:
                            arComponent = new _core_components_ARControllerComponent__WEBPACK_IMPORTED_MODULE_6__.ARControllerComponent();
                            nftEntity = new _core_NFTEntity__WEBPACK_IMPORTED_MODULE_5__.NFTEntity(arComponent, _this.markerUrl, 200, 200);
                            _context.next = 12;
                            return nftEntity.initialize(_this.camData);

                          case 12:
                            _this._arnftCore.addNFTEntity(nftEntity);

                            _this._arnftCore.update();

                          case 14:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
                return _context2.abrupt("return", Promise.resolve(true));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initialize() {
        return _initialize.apply(this, arguments);
      }

      return initialize;
    }()
  }, {
    key: "createEntity",
    value: function createEntity(cameraData, markerUrl, w, h) {}
  }, {
    key: "addNFTEntity",
    value: function addNFTEntity(entity, name) {
      return this._arnftCore.addNFTEntity(entity, name);
    }
  }, {
    key: "update",
    value: function update() {
      console.log(this._arnftCore);

      this._arnftCore.update();
    }
  }]);

  return ARnft;
}();



/***/ }),

/***/ "./src/core/ARUtils.ts":
/*!*****************************!*\
  !*** ./src/core/ARUtils.ts ***!
  \*****************************/
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
  fetch(configData).then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }

    return response.json();
  }).then(function (response) {
    console.log(response);
    var eventData = new CustomEvent('getConfig', {
      detail: {
        config: response
      }
    });
    document.dispatchEvent(eventData);
    return response;
  })["catch"](function (error) {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARnftCore": () => /* binding */ ARnftCore
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _NFTEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NFTEntity */ "./src/core/NFTEntity.ts");



var ARnftCore = /*#__PURE__*/function () {
  function ARnftCore(video, camData) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ARnftCore);

    this.count = 0;
    this._controllers = new Map();
    this._fps = 15;
    this._lastTime = 0;
    this._videoRenderer = video;
    this._cameraDataURL = camData;
    this.setFPS(this._fps);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ARnftCore, [{
    key: "addNFTEntity",
    value: function addNFTEntity(entity, name) {
      if (!name) name = "entity-" + this.count++;

      this._controllers.set(name, entity);

      return entity;
    }
  }, {
    key: "addNFTEntity2",
    value: function addNFTEntity2(node, markerUrl, name) {
      if (!name) name = "entity-" + this.count++;
      var entity = new _NFTEntity__WEBPACK_IMPORTED_MODULE_2__.NFTEntity(node, markerUrl, 120, 120);

      this._controllers.set(name, entity);
    }
  }, {
    key: "getEntityByName",
    value: function getEntityByName(name) {
      if (!this._controllers.has(name)) return null;
      return this._controllers.get(name);
    }
  }, {
    key: "getCameraView",
    value: function getCameraView() {
      return this._videoRenderer;
    }
  }, {
    key: "setFPS",
    value: function setFPS(value) {
      this._fps = 1000 / value;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this = this;

      console.log("init ARnft");
      var promises = [];

      this._controllers.forEach(function (element) {
        promises.push(element.initialize(_this._cameraDataURL));
      });

      return Promise.all(promises).then(function () {
        return true;
      });
    }
  }, {
    key: "update",
    value: function update() {
      var time = Date.now();
      var imageData;

      if (time - this._lastTime > this._fps) {
        imageData = this._videoRenderer.getImage();
        console.log(imageData);
        this._lastTime = time;
      }

      this._controllers.forEach(function (element) {
        element.update();
        if (imageData) element.process(imageData);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._controllers.forEach(function (entity) {
        entity.destroy();
      });

      this._controllers.clear();

      this._videoRenderer = null;
    }
  }]);

  return ARnftCore;
}();
ARnftCore.EVENT_SET_CAMERA = "ARNFT_SET_CAMERA_EVENT";
ARnftCore.EVENT_FOUND_MARKER = "ARNFT_FOUND_MARKER_EVENT";
ARnftCore.EVENT_LOST_MARKER = "ARNFT_LOST_MARKER_EVENT";

/***/ }),

/***/ "./src/core/NFTEntity.ts":
/*!*******************************!*\
  !*** ./src/core/NFTEntity.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NFTEntity": () => /* binding */ NFTEntity
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _NFTWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NFTWorker */ "./src/core/NFTWorker.ts");



var NFTEntity = /*#__PURE__*/function () {
  function NFTEntity(node, markerURL, w, h) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, NFTEntity);

    this._nodes = [];
    this._markerURL = markerURL;
    this._worker = new _NFTWorker__WEBPACK_IMPORTED_MODULE_2__.default(this, this._markerURL, w, h);

    this._nodes.push(node);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(NFTEntity, [{
    key: "initialize",
    value: function initialize(cameraData) {
      this._cameraURL = cameraData;
      return this._worker.initialize(this._cameraURL);
    }
  }, {
    key: "found",
    value: function found(msg) {
      this._nodes.forEach(function (element) {
        element.found(msg);
      });
    }
  }, {
    key: "process",
    value: function process(imageData) {
      this._worker.process(imageData);
    }
  }, {
    key: "update",
    value: function update() {
      this._nodes.forEach(function (element) {
        element.update();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return NFTEntity;
}();

/***/ }),

/***/ "./src/core/NFTWorker.ts":
/*!*******************************!*\
  !*** ./src/core/NFTWorker.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NFTWorker": () => /* binding */ NFTWorker,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var worker_loader_Worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! worker-loader!./Worker */ "./node_modules/worker-loader/dist/cjs.js!./src/core/Worker.ts");



var NFTWorker = /*#__PURE__*/function () {
  function NFTWorker(d, markerURL, w, h) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, NFTWorker);

    this._processing = false;
    this._dispatcher = d;
    this.markerURL = markerURL;
    this.vw = w;
    this.vh = h;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(NFTWorker, [{
    key: "initialize",
    value: function initialize(cameraURL) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.worker = new worker_loader_Worker__WEBPACK_IMPORTED_MODULE_2__.default();

        _this.load(cameraURL).then(function () {
          resolve(true);
        });
      });
    }
  }, {
    key: "process",
    value: function process(imageData) {
      if (this._processing) {
        return;
      }

      this._processing = true;
      this.worker.postMessage({
        type: 'process',
        imagedata: imageData
      });
    }
  }, {
    key: "load",
    value: function load(cameraURL) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var pscale = 320 / Math.max(_this2.vw, _this2.vh / 3 * 4);
        var w = _this2.vw * pscale;
        var h = _this2.vh * pscale;
        var pw = Math.max(w, h / 3 * 4);
        var ph = Math.max(h, w / 4 * 3);

        _this2.worker.postMessage({
          type: 'load',
          pw: pw,
          ph: ph,
          camera_para: cameraURL,
          marker: _this2.markerURL
        });

        _this2.worker.onmessage = function (ev) {
          var msg = ev.data;

          switch (msg.type) {
            case 'loaded':
              {
                var proj = JSON.parse(msg.proj);
                break;
              }

            case "endLoading":
              {
                if (msg.end == true) resolve(true);
                break;
              }
          }

          _this2._processing = false;
        };
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return NFTWorker;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

/***/ }),

/***/ "./src/core/components/ARControllerComponent.ts":
/*!******************************************************!*\
  !*** ./src/core/components/ARControllerComponent.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARControllerComponent": () => /* binding */ ARControllerComponent
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var ARControllerComponent = /*#__PURE__*/function () {
  function ARControllerComponent() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ARControllerComponent);

    this._hasFound = false;
    this._frameDrops = 0;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ARControllerComponent, [{
    key: "update",
    value: function update() {
      if (!this.world) {
        this._hasFound = false;
        this._frameDrops = 0;
      } else {}
    }
  }, {
    key: "found",
    value: function found(msg) {
      this.world = msg;
    }
  }]);

  return ARControllerComponent;
}();

/***/ }),

/***/ "./src/core/renderers/CameraViewRenderer.ts":
/*!**************************************************!*\
  !*** ./src/core/renderers/CameraViewRenderer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraViewRenderer": () => /* binding */ CameraViewRenderer
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);




var CameraViewRenderer = /*#__PURE__*/function () {
  function CameraViewRenderer(video) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, CameraViewRenderer);

    this.canvas_process = document.createElement('canvas');
    this.context_process = this.canvas_process.getContext('2d');
    this.video = video;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(CameraViewRenderer, [{
    key: "getHeight",
    value: function getHeight() {
      return this.vh;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.vw;
    }
  }, {
    key: "getImage",
    value: function getImage() {
      this.context_process.drawImage(this.video, 0, 0, this.vw, this.vh, this.ox, this.oy, this.w, this.h);
      return this.context_process.getImageData(0, 0, this.pw, this.ph);
    }
  }, {
    key: "initialize",
    value: function initialize(videoSettings) {
      var _this = this;

      this._facing = videoSettings.facingMode || 'environment';
      var constraints = {};
      var mediaDevicesConstraints = {};
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(resolve, reject) {
          var hint;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    hint = {
                      "audio": false,
                      "video": {
                        facingMode: _this._facing,
                        width: {
                          min: 480,
                          max: 640
                        }
                      }
                    };
                    navigator.mediaDevices.getUserMedia(hint).then( /*#__PURE__*/function () {
                      var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(stream) {
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _this.video.srcObject = stream;
                                _context.next = 3;
                                return new Promise(function (resolve, reject) {
                                  _this.video.onloadedmetadata = function () {
                                    return resolve(_this.video);
                                  };
                                }).then(function (value) {
                                  _this.vw = _this.video.videoWidth;
                                  _this.vh = _this.video.videoHeight;
                                  var pscale = 320 / Math.max(_this.vw, _this.vh / 3 * 4);
                                  _this.w = _this.vw * pscale;
                                  _this.h = _this.vh * pscale;
                                  _this.pw = Math.max(_this.w, _this.h / 3 * 4);
                                  _this.ph = Math.max(_this.h, _this.w / 4 * 3);
                                  _this.ox = (_this.pw - _this.w) / 2;
                                  _this.oy = (_this.ph - _this.h) / 2;
                                  _this.canvas_process.width = _this.pw;
                                  _this.canvas_process.height = _this.ph;
                                  _this.context_process.fillStyle = 'black';

                                  _this.context_process.fillRect(0, 0, _this.pw, _this.ph);

                                  resolve(true);
                                  return value;
                                })["catch"](function (msg) {
                                  console.log(msg);
                                  reject(msg);
                                  return null;
                                });

                              case 3:
                                _this.video = _context.sent;

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));

                      return function (_x3) {
                        return _ref2.apply(this, arguments);
                      };
                    }())["catch"](function (error) {
                      console.error(error);
                      reject(error);
                    });
                  } else {
                    reject("Sorry, Your device does not support this experince.");
                  }

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }]);

  return CameraViewRenderer;
}();

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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js!./src/core/Worker.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js!./src/core/Worker.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQVJuZnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL3NyYy9BUm5mdC50cyIsIndlYnBhY2s6Ly9BUm5mdC8uL3NyYy9jb3JlL0FSVXRpbHMudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9BUm5mdENvcmUudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9ORlRFbnRpdHkudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9ORlRXb3JrZXIudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9jb21wb25lbnRzL0FSQ29udHJvbGxlckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9BUm5mdC8uL3NyYy9jb3JlL3JlbmRlcmVycy9DYW1lcmFWaWV3UmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL0FSbmZ0Ly4vc3JjL2NvcmUvV29ya2VyLnRzIiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQVJuZnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQVJuZnQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7QUNkQSxnSEFBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvQztBQUNBO0FBQ0E7QUFFQTtBQUNBOztJQUVxQixLO0FBT2pCLGlCQUFZLFNBQVosRUFBK0IsTUFBL0IsRUFBK0MsU0FBL0MsRUFBZ0U7QUFBQTs7QUFDNUQsU0FBSyxPQUFMLEdBQWUsTUFBZjtBQUNBLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLFNB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QTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM3VCZTtBQUNmLG9CQUFvQixxQkFBdUI7QUFDM0M7Ozs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkEsNEI7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJBUm5mdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFSbmZ0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFSbmZ0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB7IEFSbmZ0Q29yZSB9IGZyb20gJy4vY29yZS9BUm5mdENvcmUnXG5pbXBvcnQgeyBORlRFbnRpdHksIElORlRFbnRpdHksIElNZWRpYU5vZGUgfSBmcm9tIFwiLi9jb3JlL05GVEVudGl0eVwiO1xuaW1wb3J0IHsgQVJDb250cm9sbGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29yZS9jb21wb25lbnRzL0FSQ29udHJvbGxlckNvbXBvbmVudFwiXG5pbXBvcnQgeyBBcHBKc29uIH0gZnJvbSBcIi4vY29yZS9kYXRhL0FwcERhdGFcIjtcbmltcG9ydCB7IENhbWVyYVZpZXdSZW5kZXJlciB9IGZyb20gXCIuL2NvcmUvcmVuZGVyZXJzL0NhbWVyYVZpZXdSZW5kZXJlclwiO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSBcIi4vY29yZS9BUlV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFSbmZ0IHtcbiAgICBwdWJsaWMgY2FtZXJhVmlldzogQ2FtZXJhVmlld1JlbmRlcmVyO1xuICAgIHB1YmxpYyBhcHBEYXRhOiBBcHBKc29uO1xuICAgIHB1YmxpYyBjb25maWdVcmw6IHN0cmluZztcbiAgICBwdWJsaWMgbWFya2VyVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfYXJuZnRDb3JlOiBBUm5mdENvcmU7XG4gICAgcHVibGljIGNhbURhdGE6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdVcmw6IHN0cmluZywgY2FtVXJsOiBzdHJpbmcsIG1hcmtlclVybDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5jYW1EYXRhID0gY2FtVXJsO1xuICAgICAgICB0aGlzLmNvbmZpZ1VybCA9IGNvbmZpZ1VybDtcbiAgICAgICAgdGhpcy5tYXJrZXJVcmwgPSBtYXJrZXJVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXRpYWxpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgZ2V0Q29uZmlnKHRoaXMuY29uZmlnVXJsKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2V0Q29uZmlnJywgYXN5bmMgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YSA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcERhdGEpO1xuICAgICAgICAvLyB2aWV3c1xuICAgICAgICB0aGlzLmNhbWVyYVZpZXcgPSBuZXcgQ2FtZXJhVmlld1JlbmRlcmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW9cIikgYXMgSFRNTFZpZGVvRWxlbWVudCk7XG4gICAgICAgIGF3YWl0IHRoaXMuY2FtZXJhVmlldy5pbml0aWFsaXplKHRoaXMuYXBwRGF0YS52aWRlb1NldHRpbmdzKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fYXJuZnRDb3JlID0gbmV3IEFSbmZ0Q29yZSh0aGlzLmNhbWVyYVZpZXcsIHRoaXMuY2FtRGF0YSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX2FybmZ0Q29yZS5pbml0aWFsaXplKCkuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGZhbHNlKTtcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgYXJDb21wb25lbnQ6IEFSQ29udHJvbGxlckNvbXBvbmVudCA9IG5ldyBBUkNvbnRyb2xsZXJDb21wb25lbnQoKTtcblxuICAgICAgICBsZXQgbmZ0RW50aXR5OiBORlRFbnRpdHkgPSBuZXcgTkZURW50aXR5KGFyQ29tcG9uZW50LHRoaXMubWFya2VyVXJsLCAyMDAsIDIwMCk7XG4gICAgICAgIGF3YWl0IG5mdEVudGl0eS5pbml0aWFsaXplKHRoaXMuY2FtRGF0YSk7XG4gICAgICAgIHRoaXMuX2FybmZ0Q29yZS5hZGRORlRFbnRpdHkobmZ0RW50aXR5KTtcbiAgICAgICAgdGhpcy5fYXJuZnRDb3JlLnVwZGF0ZSgpO1xuICAgIH0pXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZUVudGl0eShjYW1lcmFEYXRhOiBzdHJpbmcsIG1hcmtlclVybDogc3RyaW5nLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICAvL2xldCBuZnRFbnRpdHk6IE5GVEVudGl0eSA9IG5ldyBORlRFbnRpdHkobWFya2VyVXJsLCB3LCBoKTtcbiAgICAgICAgLy9yZXR1cm4gbmZ0RW50aXR5O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRORlRFbnRpdHkoZW50aXR5OiBJTkZURW50aXR5LCBuYW1lPzogc3RyaW5nKTogSU5GVEVudGl0eSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcm5mdENvcmUuYWRkTkZURW50aXR5KGVudGl0eSwgbmFtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2FybmZ0Q29yZSk7XG5cbiAgICAgICAgdGhpcy5fYXJuZnRDb3JlLnVwZGF0ZSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZWdyZWVzVG9SYWRpYW5zKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICAvL3JldHVybiAvQW5kcm9pZHxtb2JpbGV8aVBhZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgaWYgKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAvLyB0cnVlIGZvciBtb2JpbGUgZGV2aWNlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNJT1MoKTogYm9vbGVhbiB7XG4gICAgaWYgKC9pUGhvbmV8aVBhZHxpUG9kL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAvLyB0cnVlIGZvciBtb2JpbGUgZGV2aWNlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4gXG4gZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZyhjb25maWdEYXRhOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgZmV0Y2goY29uZmlnRGF0YSlcbiAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIVFRQIGVycm9yLCBzdGF0dXMgPSBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgfVxuICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgIH0pXG4gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgIC8vIHByaW50aW5nIHRoZSByZXNwb25zZSBvbmx5IGZvciB0ZXN0aW5nXG4gICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgIGNvbnN0IGV2ZW50RGF0YSA9IG5ldyBDdXN0b21FdmVudCgnZ2V0Q29uZmlnJywgeyBkZXRhaWw6IHsgY29uZmlnOiByZXNwb25zZSB9IH0pO1xuICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnREYXRhKTtcbiAgICAgICByZXR1cm4ocmVzcG9uc2UpXG4gICAgIH0pXG4gICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZmFsc2UpO1xuICAgICAgIH0pO1xuICAgcmV0dXJuIHRydWU7XG4gfVxuIFxuIiwiaW1wb3J0IHsgTkZURW50aXR5LCBJTkZURW50aXR5LCBJTWVkaWFOb2RlIH0gZnJvbSBcIi4vTkZURW50aXR5XCI7XG5pbXBvcnQgeyBJQ2FtZXJhVmlld1JlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJzL0NhbWVyYVZpZXdSZW5kZXJlclwiO1xuaW1wb3J0IHsgQXBwSnNvbiB9IGZyb20gXCIuL2RhdGEvQXBwRGF0YVwiO1xuXG5leHBvcnQgY2xhc3MgQVJuZnRDb3JlIHtcblxuICAgIHByaXZhdGUgY291bnQ6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIF9jb250cm9sbGVyczogTWFwPHN0cmluZywgSU5GVEVudGl0eT4gPSBuZXcgTWFwPHN0cmluZywgSU5GVEVudGl0eT4oKTtcblxuICAgIHByaXZhdGUgX3ZpZGVvUmVuZGVyZXI6IElDYW1lcmFWaWV3UmVuZGVyZXI7XG5cbiAgICBwcml2YXRlIF9jYW1lcmFEYXRhVVJMOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9mcHM6IG51bWJlciA9IDE1O1xuXG4gICAgcHJpdmF0ZSBfbGFzdFRpbWU6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgYXBwRGF0YTogQXBwSnNvbjtcblxuICAgIC8vIGV2ZW50c1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVZFTlRfU0VUX0NBTUVSQTogc3RyaW5nID0gXCJBUk5GVF9TRVRfQ0FNRVJBX0VWRU5UXCI7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFVkVOVF9GT1VORF9NQVJLRVI6IHN0cmluZyA9IFwiQVJORlRfRk9VTkRfTUFSS0VSX0VWRU5UXCI7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFVkVOVF9MT1NUX01BUktFUjogc3RyaW5nID0gXCJBUk5GVF9MT1NUX01BUktFUl9FVkVOVFwiO1xuXG4gICAgY29uc3RydWN0b3IodmlkZW86IElDYW1lcmFWaWV3UmVuZGVyZXIsIGNhbURhdGE6IHN0cmluZykge1xuICAgICAgICB0aGlzLl92aWRlb1JlbmRlcmVyID0gdmlkZW87XG4gICAgICAgIHRoaXMuX2NhbWVyYURhdGFVUkwgPSBjYW1EYXRhO1xuICAgICAgICAvLyBzZXQgZGVmYXVsdCBmcHMgYXQgMTVcbiAgICAgICAgdGhpcy5zZXRGUFModGhpcy5fZnBzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTkZURW50aXR5KGVudGl0eTogSU5GVEVudGl0eSwgbmFtZT86IHN0cmluZyk6IElORlRFbnRpdHkge1xuXG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIG5hbWUgPSBcImVudGl0eS1cIiArIHRoaXMuY291bnQrKztcblxuICAgICAgICB0aGlzLl9jb250cm9sbGVycy5zZXQobmFtZSwgZW50aXR5KTtcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTkZURW50aXR5Mihub2RlOiBJTWVkaWFOb2RlLCBtYXJrZXJVcmw6IHN0cmluZywgbmFtZT86IHN0cmluZykge1xuXG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIG5hbWUgPSBcImVudGl0eS1cIiArIHRoaXMuY291bnQrKztcbiAgICBcbiAgICAgICAgbGV0IGVudGl0eSA9IG5ldyBORlRFbnRpdHkobm9kZSwgbWFya2VyVXJsLCAxMjAsIDEyMCk7XG5cbiAgICAgICAgdGhpcy5fY29udHJvbGxlcnMuc2V0KG5hbWUsIGVudGl0eSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEVudGl0eUJ5TmFtZShuYW1lOiBzdHJpbmcpOiBJTkZURW50aXR5IHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb250cm9sbGVycy5oYXMobmFtZSkpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlcnMuZ2V0KG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDYW1lcmFWaWV3KCk6IElDYW1lcmFWaWV3UmVuZGVyZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW9SZW5kZXJlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RlBTKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZnBzID0gMTAwMCAvIHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgQVJuZnRcIik7XG5cbiAgICAgICAgbGV0IHByb21pc2VzOiBQcm9taXNlPGJvb2xlYW4+W10gPSBbXTtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goZWxlbWVudC5pbml0aWFsaXplKHRoaXMuX2NhbWVyYURhdGFVUkwpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGltYWdlRGF0YTogSW1hZ2VEYXRhO1xuICAgICAgICBpZiAoKHRpbWUgLSB0aGlzLl9sYXN0VGltZSkgPiB0aGlzLl9mcHMpIHtcbiAgICAgICAgICAgIGltYWdlRGF0YSA9IHRoaXMuX3ZpZGVvUmVuZGVyZXIuZ2V0SW1hZ2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlRGF0YSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUaW1lID0gdGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnVwZGF0ZSgpO1xuICAgICAgICAgICAgaWYgKGltYWdlRGF0YSlcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByb2Nlc3MoaW1hZ2VEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJzLmZvckVhY2goZW50aXR5ID0+IHtcbiAgICAgICAgICAgIGVudGl0eS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVycy5jbGVhcigpO1xuICAgICAgICB0aGlzLl92aWRlb1JlbmRlcmVyID0gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgTkZUV29ya2VyIGZyb20gXCIuL05GVFdvcmtlclwiO1xuaW1wb3J0IHsgTkZUT3JpZW50YXRpb24gfSBmcm9tICcuL05GVE9yaWVudGF0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBJTWVkaWFOb2RlIHtcbiAgICB1cGRhdGUoKTogdm9pZDtcbiAgICBmb3VuZCh2YWx1ZTogTkZUT3JpZW50YXRpb24pOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElORlRFbnRpdHkge1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIGZvdW5kKG1zZzogTkZUT3JpZW50YXRpb24pOiB2b2lkO1xuICAgIGluaXRpYWxpemUoY2FtZXJhRGF0YTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBwcm9jZXNzKGltYWdlRGF0YTogSW1hZ2VEYXRhKTogdm9pZDtcbiAgICBkZXN0cm95KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBORlRFbnRpdHkgaW1wbGVtZW50cyBJTkZURW50aXR5IHtcblxuXG4gICAgcHJpdmF0ZSBfbm9kZXM6IElNZWRpYU5vZGVbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBfd29ya2VyOiB0eXBlb2YgTkZUV29ya2VyO1xuXG4gICAgcHJpdmF0ZSBfY2FtZXJhVVJMOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgb3JpZW50YXRpb25NYXRyaXg6IGFueTtcblxuICAgIHByb3RlY3RlZCBfbWFya2VyVVJMOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBJTWVkaWFOb2RlLCBtYXJrZXJVUkw6IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWFya2VyVVJMID0gbWFya2VyVVJMO1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBuZXcgTkZUV29ya2VyKHRoaXMsIHRoaXMuX21hcmtlclVSTCwgdywgaCk7XG5cbiAgICAgICAgdGhpcy5fbm9kZXMucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdGlhbGl6ZShjYW1lcmFEYXRhOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgdGhpcy5fY2FtZXJhVVJMID0gY2FtZXJhRGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlci5pbml0aWFsaXplKHRoaXMuX2NhbWVyYVVSTCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZvdW5kKG1zZzogTkZUT3JpZW50YXRpb24pOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5vcmllbnRhdGlvbk1hdHJpeCA9IChtc2cpID8gSlNPTi5wYXJzZShtc2cubWF0cml4R0xfUkgpIDogbnVsbDtcbiAgICAgICAgdGhpcy5fbm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuZm91bmQobXNnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHByb2Nlc3MoaW1hZ2VEYXRhOiBJbWFnZURhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fd29ya2VyLnByb2Nlc3MoaW1hZ2VEYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICAvLyAgbG9vcCB0aHJvdWdoIG5vZGVzIGFuZCB1cGRhdGVcbiAgICAgICAgdGhpcy5fbm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTkZURW50aXR5IH0gZnJvbSBcIi4vTkZURW50aXR5XCI7XG5pbXBvcnQgeyBORlRPcmllbnRhdGlvbiB9IGZyb20gXCIuL05GVE9yaWVudGF0aW9uXCJcbmltcG9ydCBXb3JrZXIgZnJvbSBcIndvcmtlci1sb2FkZXIhLi9Xb3JrZXJcIjtcblxuZXhwb3J0IGNsYXNzIE5GVFdvcmtlciB7XG5cbiAgICBwcml2YXRlIF9kaXNwYXRjaGVyOiBORlRFbnRpdHk7XG5cbiAgICBwcml2YXRlIHdvcmtlcjogV29ya2VyO1xuXG4gICAgcHJpdmF0ZSBtYXJrZXJVUkw6IGFueTtcblxuICAgIHByaXZhdGUgX3Byb2Nlc3Npbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgdnc6IG51bWJlcjtcbiAgICBwcml2YXRlIHZoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkOiBORlRFbnRpdHksIG1hcmtlclVSTDogc3RyaW5nLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyID0gZDtcbiAgICAgICAgdGhpcy5tYXJrZXJVUkwgPSBtYXJrZXJVUkw7XG4gICAgICAgIHRoaXMudncgPSB3O1xuICAgICAgICB0aGlzLnZoID0gaDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdGlhbGl6ZShjYW1lcmFVUkw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53b3JrZXIgPSBuZXcgV29ya2VyKCk7XG4gICAgICAgICAgICAvL3RoaXMud29ya2VyLm9ubWVzc2FnZSA9IChldikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZChjYW1lcmFVUkwpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdmVyd3JpdGUgbG9hZCBvbm1lc3NhZ2Ugd2l0aCBzZWFyY2ggb25tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIC8qdGhpcy53b3JrZXIub25tZXNzYWdlID0gKGV2KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgZm91bmQgPSBcIiArIChldi5kYXRhLnR5cGUgPT0gXCJmb3VuZFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXNnOiBhbnkgPSAoZXYuZGF0YS50eXBlID09IFwiZm91bmRcIikgPyBldi5kYXRhIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuZm91bmQobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfTsqL1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy99O1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcm9jZXNzKGltYWdlRGF0YTogSW1hZ2VEYXRhKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuX3Byb2Nlc3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAvL3RoaXMud29ya2VyLnBvc3RNZXNzYWdlKHsgdHlwZTogJ3Byb2Nlc3MnLCBpbWFnZWRhdGE6IGltYWdlRGF0YSB9LCBbaW1hZ2VEYXRhLmRhdGEuYnVmZmVyXSk7XG4gICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHsgdHlwZTogJ3Byb2Nlc3MnLCBpbWFnZWRhdGE6IGltYWdlRGF0YSB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbG9hZChjYW1lcmFVUkw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHZhciBwc2NhbGUgPSAzMjAgLyBNYXRoLm1heCh0aGlzLnZ3LCB0aGlzLnZoIC8gMyAqIDQpO1xuXG4gICAgICAgICAgICBsZXQgdzogbnVtYmVyID0gdGhpcy52dyAqIHBzY2FsZTtcbiAgICAgICAgICAgIGxldCBoOiBudW1iZXIgPSB0aGlzLnZoICogcHNjYWxlO1xuICAgICAgICAgICAgbGV0IHB3OiBudW1iZXIgPSBNYXRoLm1heCh3LCAoaCAvIDMpICogNCk7XG4gICAgICAgICAgICBsZXQgcGg6IG51bWJlciA9IE1hdGgubWF4KGgsICh3IC8gNCkgKiAzKTtcblxuICAgICAgICAgICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsb2FkJyxcbiAgICAgICAgICAgICAgICBwdzogcHcsXG4gICAgICAgICAgICAgICAgcGg6IHBoLFxuICAgICAgICAgICAgICAgIGNhbWVyYV9wYXJhOiBjYW1lcmFVUkwsXG4gICAgICAgICAgICAgICAgbWFya2VyOiB0aGlzLm1hcmtlclVSTFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMud29ya2VyLm9ubWVzc2FnZSA9IChldjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIG1zZyA9IGV2LmRhdGE7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdsb2FkZWQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvaiA9IEpTT04ucGFyc2UobXNnLnByb2opO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fZGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChBUm5mdC5FVkVOVF9TRVRfQ0FNRVJBLCBwcm9qKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW5kTG9hZGluZ1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnLmVuZCA9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbnVsbCBhcyBhbnk7XG4iLCJpbXBvcnQgeyBJTWVkaWFOb2RlIH0gZnJvbSAnLi4vTkZURW50aXR5JztcblxuZXhwb3J0IGNsYXNzIEFSQ29udHJvbGxlckNvbXBvbmVudCBpbXBsZW1lbnRzIElNZWRpYU5vZGV7XG5cbiAgICBwcm90ZWN0ZWQgd29ybGQ6IGFueTtcbiAgICBwcml2YXRlIF9oYXNGb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2ZyYW1lRHJvcHM6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG4gICAgcHVibGljIHVwZGF0ZSgpe1xuICAgICAgICBpZiAoIXRoaXMud29ybGQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhc0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZURyb3BzID0gMDtcbiAgICAgICAgfSBlbHNlIHt9XG4gICAgfVxuXG4gICAgcHVibGljIGZvdW5kKG1zZzogYW55KTogdm9pZCB7XG5cbiAgICB0aGlzLndvcmxkID0gbXNnO1xuICAgIH1cbn0iLCJcbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9TZXR0aW5nRGF0YSB7XG4gICAgd2lkdGg6IFNjcmVlbkRhdGE7XG4gICAgaGVpZ2h0OiBTY3JlZW5EYXRhO1xuICAgIGZhY2luZ01vZGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JlZW5EYXRhIHtcbiAgICBtaW46IG51bWJlcjtcbiAgICBtYXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ2FtZXJhVmlld1JlbmRlcmVyIHtcbiAgICBnZXRIZWlnaHQoKTogbnVtYmVyO1xuICAgIGdldFdpZHRoKCk6IG51bWJlcjtcbiAgICBnZXRJbWFnZSgpOiBJbWFnZURhdGE7XG59XG5cbmV4cG9ydCBjbGFzcyBDYW1lcmFWaWV3UmVuZGVyZXIgaW1wbGVtZW50cyBJQ2FtZXJhVmlld1JlbmRlcmVyIHtcblxuICAgIHByaXZhdGUgY2FudmFzX3Byb2Nlc3M6IEhUTUxDYW52YXNFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjb250ZXh0X3Byb2Nlc3M6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICAgIHB1YmxpYyB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcblxuICAgIHByaXZhdGUgX2ZhY2luZzogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSB2dzogbnVtYmVyO1xuICAgIHByaXZhdGUgdmg6IG51bWJlcjtcblxuICAgIHByaXZhdGUgdzogbnVtYmVyO1xuICAgIHByaXZhdGUgaDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBwdzogbnVtYmVyO1xuICAgIHByaXZhdGUgcGg6IG51bWJlcjtcblxuICAgIHByaXZhdGUgb3g6IG51bWJlcjtcbiAgICBwcml2YXRlIG95OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWRlbzogSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNhbnZhc19wcm9jZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY29udGV4dF9wcm9jZXNzID0gdGhpcy5jYW52YXNfcHJvY2Vzcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLnZpZGVvID0gdmlkZW87XG4gICAgfVxuXG4gICAgcHVibGljIGdldEhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudnc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEltYWdlKCk6IEltYWdlRGF0YSB7XG4gICAgICAgIHRoaXMuY29udGV4dF9wcm9jZXNzLmRyYXdJbWFnZSh0aGlzLnZpZGVvLCAwLCAwLCB0aGlzLnZ3LCB0aGlzLnZoLCB0aGlzLm94LCB0aGlzLm95LCB0aGlzLncsIHRoaXMuaCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfcHJvY2Vzcy5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5wdywgdGhpcy5waCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUodmlkZW9TZXR0aW5nczogVmlkZW9TZXR0aW5nRGF0YSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXG4gICAgICAgIHRoaXMuX2ZhY2luZyA9IHZpZGVvU2V0dGluZ3MuZmFjaW5nTW9kZSB8fCAnZW52aXJvbm1lbnQnXG5cbiAgICAgICAgY29uc3QgY29uc3RyYWludHMgPSB7fVxuICAgICAgICBjb25zdCBtZWRpYURldmljZXNDb25zdHJhaW50cyA9IHt9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhpbnQ6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJhdWRpb1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWRlb1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWNpbmdNb2RlOiB0aGlzLl9mYWNpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyBtaW46IDQ4MCwgbWF4OiA2NDAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGhpbnQpLnRoZW4oYXN5bmMgKHN0cmVhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlbyA9IGF3YWl0IG5ldyBQcm9taXNlPEhUTUxWaWRlb0VsZW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW8ub25sb2FkZWRtZXRhZGF0YSA9ICgpID0+IHJlc29sdmUodGhpcy52aWRlbyk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKHZhbHVlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudncgPSB0aGlzLnZpZGVvLnZpZGVvV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZoID0gdGhpcy52aWRlby52aWRlb0hlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBzY2FsZSA9IDMyMCAvIE1hdGgubWF4KHRoaXMudncsIHRoaXMudmggLyAzICogNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudyA9IHRoaXMudncgKiBwc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmggPSB0aGlzLnZoICogcHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdyA9IE1hdGgubWF4KHRoaXMudywgKHRoaXMuaCAvIDMpICogNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBoID0gTWF0aC5tYXgodGhpcy5oLCAodGhpcy53IC8gNCkgKiAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3ggPSAodGhpcy5wdyAtIHRoaXMudykgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5veSA9ICh0aGlzLnBoIC0gdGhpcy5oKSAvIDI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzX3Byb2Nlc3Mud2lkdGggPSB0aGlzLnB3O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNfcHJvY2Vzcy5oZWlnaHQgPSB0aGlzLnBoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRfcHJvY2Vzcy5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0X3Byb2Nlc3MuZmlsbFJlY3QoMCwgMCwgdGhpcy5wdywgdGhpcy5waCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgobXNnKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcmVqZWN0KFwiTm8gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYVwiKTtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJTb3JyeSwgWW91ciBkZXZpY2UgZG9lcyBub3Qgc3VwcG9ydCB0aGlzIGV4cGVyaW5jZS5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgQVJuZnQgZnJvbSAnLi9BUm5mdCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIEFSbmZ0XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtlcl9mbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIkFSbmZ0Lndvcmtlci5qc1wiKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=