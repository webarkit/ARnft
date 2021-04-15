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
    value: function createEntity(cameraData, markerUrl, w, h) {
      console.log("fake entity created...");
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQVJuZnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL3NyYy9BUm5mdC50cyIsIndlYnBhY2s6Ly9BUm5mdC8uL3NyYy9jb3JlL0FSVXRpbHMudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9BUm5mdENvcmUudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9ORlRFbnRpdHkudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9ORlRXb3JrZXIudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9jb21wb25lbnRzL0FSQ29udHJvbGxlckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9BUm5mdC8uL3NyYy9jb3JlL3JlbmRlcmVycy9DYW1lcmFWaWV3UmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL0FSbmZ0Ly4vc3JjL2NvcmUvV29ya2VyLnRzIiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQVJuZnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQVJuZnQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7QUNkQSxnSEFBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EvQztBQUNBO0FBQ0E7QUFFQTtBQUNBOztJQUVxQixLO0FBT2pCLGlCQUFZLFNBQVosRUFBK0IsTUFBL0IsRUFBK0MsU0FBL0MsRUFBZ0U7QUFBQTs7QUFDNUQsU0FBSyxPQUFMLEdBQWUsTUFBZjtBQUNBLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLFNB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixDQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzN1QmU7QUFDZixvQkFBb0IscUJBQXVCO0FBQzNDOzs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BLDRCOzs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiQVJuZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBUm5mdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBUm5mdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJpbXBvcnQgeyBBUm5mdENvcmUgfSBmcm9tICcuL2NvcmUvQVJuZnRDb3JlJ1xuaW1wb3J0IHsgTkZURW50aXR5LCBJTkZURW50aXR5LCBJTWVkaWFOb2RlIH0gZnJvbSBcIi4vY29yZS9ORlRFbnRpdHlcIjtcbmltcG9ydCB7IEFSQ29udHJvbGxlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvcmUvY29tcG9uZW50cy9BUkNvbnRyb2xsZXJDb21wb25lbnRcIlxuaW1wb3J0IHsgQXBwSnNvbiB9IGZyb20gXCIuL2NvcmUvZGF0YS9BcHBEYXRhXCI7XG5pbXBvcnQgeyBDYW1lcmFWaWV3UmVuZGVyZXIgfSBmcm9tIFwiLi9jb3JlL3JlbmRlcmVycy9DYW1lcmFWaWV3UmVuZGVyZXJcIjtcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gXCIuL2NvcmUvQVJVdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUm5mdCB7XG4gICAgcHVibGljIGNhbWVyYVZpZXc6IENhbWVyYVZpZXdSZW5kZXJlcjtcbiAgICBwdWJsaWMgYXBwRGF0YTogQXBwSnNvbjtcbiAgICBwdWJsaWMgY29uZmlnVXJsOiBzdHJpbmc7XG4gICAgcHVibGljIG1hcmtlclVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2FybmZ0Q29yZTogQVJuZnRDb3JlO1xuICAgIHB1YmxpYyBjYW1EYXRhOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoY29uZmlnVXJsOiBzdHJpbmcsIGNhbVVybDogc3RyaW5nLCBtYXJrZXJVcmw6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuY2FtRGF0YSA9IGNhbVVybDtcbiAgICAgICAgdGhpcy5jb25maWdVcmwgPSBjb25maWdVcmw7XG4gICAgICAgIHRoaXMubWFya2VyVXJsID0gbWFya2VyVXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0aWFsaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXG4gICAgICAgIGdldENvbmZpZyh0aGlzLmNvbmZpZ1VybCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dldENvbmZpZycsIGFzeW5jIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcERhdGEgPSBldi5kZXRhaWwuY29uZmlnO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hcHBEYXRhKTtcbiAgICAgICAgLy8gdmlld3NcbiAgICAgICAgdGhpcy5jYW1lcmFWaWV3ID0gbmV3IENhbWVyYVZpZXdSZW5kZXJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpIGFzIEhUTUxWaWRlb0VsZW1lbnQpO1xuICAgICAgICBhd2FpdCB0aGlzLmNhbWVyYVZpZXcuaW5pdGlhbGl6ZSh0aGlzLmFwcERhdGEudmlkZW9TZXR0aW5ncykuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2FybmZ0Q29yZSA9IG5ldyBBUm5mdENvcmUodGhpcy5jYW1lcmFWaWV3LCB0aGlzLmNhbURhdGEpO1xuICAgICAgICBhd2FpdCB0aGlzLl9hcm5mdENvcmUuaW5pdGlhbGl6ZSgpLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChmYWxzZSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGFyQ29tcG9uZW50OiBBUkNvbnRyb2xsZXJDb21wb25lbnQgPSBuZXcgQVJDb250cm9sbGVyQ29tcG9uZW50KCk7XG5cbiAgICAgICAgbGV0IG5mdEVudGl0eTogTkZURW50aXR5ID0gbmV3IE5GVEVudGl0eShhckNvbXBvbmVudCx0aGlzLm1hcmtlclVybCwgMjAwLCAyMDApO1xuICAgICAgICBhd2FpdCBuZnRFbnRpdHkuaW5pdGlhbGl6ZSh0aGlzLmNhbURhdGEpO1xuICAgICAgICB0aGlzLl9hcm5mdENvcmUuYWRkTkZURW50aXR5KG5mdEVudGl0eSk7XG4gICAgICAgIHRoaXMuX2FybmZ0Q29yZS51cGRhdGUoKTtcbiAgICB9KVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVFbnRpdHkoY2FtZXJhRGF0YTogc3RyaW5nLCBtYXJrZXJVcmw6IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgLy9sZXQgbmZ0RW50aXR5OiBORlRFbnRpdHkgPSBuZXcgTkZURW50aXR5KG1hcmtlclVybCwgdywgaCk7XG4gICAgICAgIC8vcmV0dXJuIG5mdEVudGl0eTtcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWtlIGVudGl0eSBjcmVhdGVkLi4uXCIpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFkZE5GVEVudGl0eShlbnRpdHk6IElORlRFbnRpdHksIG5hbWU/OiBzdHJpbmcpOiBJTkZURW50aXR5IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FybmZ0Q29yZS5hZGRORlRFbnRpdHkoZW50aXR5LCBuYW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fYXJuZnRDb3JlKTtcblxuICAgICAgICB0aGlzLl9hcm5mdENvcmUudXBkYXRlKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZXNUb1JhZGlhbnMoZGVncmVlczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIChNYXRoLlBJIC8gMTgwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIC8vcmV0dXJuIC9BbmRyb2lkfG1vYmlsZXxpUGFkfGlQaG9uZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgICBpZiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIC8vIHRydWUgZm9yIG1vYmlsZSBkZXZpY2VcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0lPUygpOiBib29sZWFuIHtcbiAgICBpZiAoL2lQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgIC8vIHRydWUgZm9yIG1vYmlsZSBkZXZpY2VcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbiBcbiBleHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlnKGNvbmZpZ0RhdGE6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBmZXRjaChjb25maWdEYXRhKVxuICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhUVFAgZXJyb3IsIHN0YXR1cyA9IFwiICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICB9XG4gICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgfSlcbiAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgLy8gcHJpbnRpbmcgdGhlIHJlc3BvbnNlIG9ubHkgZm9yIHRlc3RpbmdcbiAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgY29uc3QgZXZlbnREYXRhID0gbmV3IEN1c3RvbUV2ZW50KCdnZXRDb25maWcnLCB7IGRldGFpbDogeyBjb25maWc6IHJlc3BvbnNlIH0gfSk7XG4gICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudERhdGEpO1xuICAgICAgIHJldHVybihyZXNwb25zZSlcbiAgICAgfSlcbiAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChmYWxzZSk7XG4gICAgICAgfSk7XG4gICByZXR1cm4gdHJ1ZTtcbiB9XG4gXG4iLCJpbXBvcnQgeyBORlRFbnRpdHksIElORlRFbnRpdHksIElNZWRpYU5vZGUgfSBmcm9tIFwiLi9ORlRFbnRpdHlcIjtcbmltcG9ydCB7IElDYW1lcmFWaWV3UmVuZGVyZXIgfSBmcm9tIFwiLi9yZW5kZXJlcnMvQ2FtZXJhVmlld1JlbmRlcmVyXCI7XG5pbXBvcnQgeyBBcHBKc29uIH0gZnJvbSBcIi4vZGF0YS9BcHBEYXRhXCI7XG5cbmV4cG9ydCBjbGFzcyBBUm5mdENvcmUge1xuXG4gICAgcHJpdmF0ZSBjb3VudDogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX2NvbnRyb2xsZXJzOiBNYXA8c3RyaW5nLCBJTkZURW50aXR5PiA9IG5ldyBNYXA8c3RyaW5nLCBJTkZURW50aXR5PigpO1xuXG4gICAgcHJpdmF0ZSBfdmlkZW9SZW5kZXJlcjogSUNhbWVyYVZpZXdSZW5kZXJlcjtcblxuICAgIHByaXZhdGUgX2NhbWVyYURhdGFVUkw6IHN0cmluZztcblxuICAgIHByaXZhdGUgX2ZwczogbnVtYmVyID0gMTU7XG5cbiAgICBwcml2YXRlIF9sYXN0VGltZTogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBhcHBEYXRhOiBBcHBKc29uO1xuXG4gICAgLy8gZXZlbnRzXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFVkVOVF9TRVRfQ0FNRVJBOiBzdHJpbmcgPSBcIkFSTkZUX1NFVF9DQU1FUkFfRVZFTlRcIjtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVWRU5UX0ZPVU5EX01BUktFUjogc3RyaW5nID0gXCJBUk5GVF9GT1VORF9NQVJLRVJfRVZFTlRcIjtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVWRU5UX0xPU1RfTUFSS0VSOiBzdHJpbmcgPSBcIkFSTkZUX0xPU1RfTUFSS0VSX0VWRU5UXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWRlbzogSUNhbWVyYVZpZXdSZW5kZXJlciwgY2FtRGF0YTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3ZpZGVvUmVuZGVyZXIgPSB2aWRlbztcbiAgICAgICAgdGhpcy5fY2FtZXJhRGF0YVVSTCA9IGNhbURhdGE7XG4gICAgICAgIC8vIHNldCBkZWZhdWx0IGZwcyBhdCAxNVxuICAgICAgICB0aGlzLnNldEZQUyh0aGlzLl9mcHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRORlRFbnRpdHkoZW50aXR5OiBJTkZURW50aXR5LCBuYW1lPzogc3RyaW5nKTogSU5GVEVudGl0eSB7XG5cbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgbmFtZSA9IFwiZW50aXR5LVwiICsgdGhpcy5jb3VudCsrO1xuXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJzLnNldChuYW1lLCBlbnRpdHkpO1xuICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRORlRFbnRpdHkyKG5vZGU6IElNZWRpYU5vZGUsIG1hcmtlclVybDogc3RyaW5nLCBuYW1lPzogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgbmFtZSA9IFwiZW50aXR5LVwiICsgdGhpcy5jb3VudCsrO1xuICAgIFxuICAgICAgICBsZXQgZW50aXR5ID0gbmV3IE5GVEVudGl0eShub2RlLCBtYXJrZXJVcmwsIDEyMCwgMTIwKTtcblxuICAgICAgICB0aGlzLl9jb250cm9sbGVycy5zZXQobmFtZSwgZW50aXR5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RW50aXR5QnlOYW1lKG5hbWU6IHN0cmluZyk6IElORlRFbnRpdHkge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbnRyb2xsZXJzLmhhcyhuYW1lKSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sbGVycy5nZXQobmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENhbWVyYVZpZXcoKTogSUNhbWVyYVZpZXdSZW5kZXJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlb1JlbmRlcmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRGUFModmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9mcHMgPSAxMDAwIC8gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRpYWxpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBBUm5mdFwiKTtcblxuICAgICAgICBsZXQgcHJvbWlzZXM6IFByb21pc2U8Ym9vbGVhbj5bXSA9IFtdO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChlbGVtZW50LmluaXRpYWxpemUodGhpcy5fY2FtZXJhRGF0YVVSTCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGxldCB0aW1lOiBudW1iZXIgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgaW1hZ2VEYXRhOiBJbWFnZURhdGE7XG4gICAgICAgIGlmICgodGltZSAtIHRoaXMuX2xhc3RUaW1lKSA+IHRoaXMuX2Zwcykge1xuICAgICAgICAgICAgaW1hZ2VEYXRhID0gdGhpcy5fdmlkZW9SZW5kZXJlci5nZXRJbWFnZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW1hZ2VEYXRhKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fbGFzdFRpbWUgPSB0aW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY29udHJvbGxlcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudXBkYXRlKCk7XG4gICAgICAgICAgICBpZiAoaW1hZ2VEYXRhKVxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvY2VzcyhpbWFnZURhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlcnMuZm9yRWFjaChlbnRpdHkgPT4ge1xuICAgICAgICAgICAgZW50aXR5LmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX3ZpZGVvUmVuZGVyZXIgPSBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCBORlRXb3JrZXIgZnJvbSBcIi4vTkZUV29ya2VyXCI7XG5pbXBvcnQgeyBORlRPcmllbnRhdGlvbiB9IGZyb20gJy4vTkZUT3JpZW50YXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNZWRpYU5vZGUge1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIGZvdW5kKHZhbHVlOiBORlRPcmllbnRhdGlvbik6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU5GVEVudGl0eSB7XG4gICAgdXBkYXRlKCk6IHZvaWQ7XG4gICAgZm91bmQobXNnOiBORlRPcmllbnRhdGlvbik6IHZvaWQ7XG4gICAgaW5pdGlhbGl6ZShjYW1lcmFEYXRhOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIHByb2Nlc3MoaW1hZ2VEYXRhOiBJbWFnZURhdGEpOiB2b2lkO1xuICAgIGRlc3Ryb3koKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIE5GVEVudGl0eSBpbXBsZW1lbnRzIElORlRFbnRpdHkge1xuXG5cbiAgICBwcml2YXRlIF9ub2RlczogSU1lZGlhTm9kZVtdID0gW107XG5cbiAgICBwcml2YXRlIF93b3JrZXI6IHR5cGVvZiBORlRXb3JrZXI7XG5cbiAgICBwcml2YXRlIF9jYW1lcmFVUkw6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCBvcmllbnRhdGlvbk1hdHJpeDogYW55O1xuXG4gICAgcHJvdGVjdGVkIF9tYXJrZXJVUkw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IElNZWRpYU5vZGUsIG1hcmtlclVSTDogc3RyaW5nLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXJrZXJVUkwgPSBtYXJrZXJVUkw7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IG5ldyBORlRXb3JrZXIodGhpcywgdGhpcy5fbWFya2VyVVJMLCB3LCBoKTtcblxuICAgICAgICB0aGlzLl9ub2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKGNhbWVyYURhdGE6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICB0aGlzLl9jYW1lcmFVUkwgPSBjYW1lcmFEYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyLmluaXRpYWxpemUodGhpcy5fY2FtZXJhVVJMKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm91bmQobXNnOiBORlRPcmllbnRhdGlvbik6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLm9yaWVudGF0aW9uTWF0cml4ID0gKG1zZykgPyBKU09OLnBhcnNlKG1zZy5tYXRyaXhHTF9SSCkgOiBudWxsO1xuICAgICAgICB0aGlzLl9ub2Rlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5mb3VuZChtc2cpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJvY2VzcyhpbWFnZURhdGE6IEltYWdlRGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLl93b3JrZXIucHJvY2VzcyhpbWFnZURhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vICBsb29wIHRocm91Z2ggbm9kZXMgYW5kIHVwZGF0ZVxuICAgICAgICB0aGlzLl9ub2Rlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBORlRFbnRpdHkgfSBmcm9tIFwiLi9ORlRFbnRpdHlcIjtcbmltcG9ydCB7IE5GVE9yaWVudGF0aW9uIH0gZnJvbSBcIi4vTkZUT3JpZW50YXRpb25cIlxuaW1wb3J0IFdvcmtlciBmcm9tIFwid29ya2VyLWxvYWRlciEuL1dvcmtlclwiO1xuXG5leHBvcnQgY2xhc3MgTkZUV29ya2VyIHtcblxuICAgIHByaXZhdGUgX2Rpc3BhdGNoZXI6IE5GVEVudGl0eTtcblxuICAgIHByaXZhdGUgd29ya2VyOiBXb3JrZXI7XG5cbiAgICBwcml2YXRlIG1hcmtlclVSTDogYW55O1xuXG4gICAgcHJpdmF0ZSBfcHJvY2Vzc2luZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSB2dzogbnVtYmVyO1xuICAgIHByaXZhdGUgdmg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGQ6IE5GVEVudGl0eSwgbWFya2VyVVJMOiBzdHJpbmcsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoZXIgPSBkO1xuICAgICAgICB0aGlzLm1hcmtlclVSTCA9IG1hcmtlclVSTDtcbiAgICAgICAgdGhpcy52dyA9IHc7XG4gICAgICAgIHRoaXMudmggPSBoO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKGNhbWVyYVVSTDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLndvcmtlciA9IG5ldyBXb3JrZXIoKTtcbiAgICAgICAgICAgIC8vdGhpcy53b3JrZXIub25tZXNzYWdlID0gKGV2KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkKGNhbWVyYVVSTCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE92ZXJ3cml0ZSBsb2FkIG9ubWVzc2FnZSB3aXRoIHNlYXJjaCBvbm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgLyp0aGlzLndvcmtlci5vbm1lc3NhZ2UgPSAoZXYpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXNwb25zZSBmb3VuZCA9IFwiICsgKGV2LmRhdGEudHlwZSA9PSBcImZvdW5kXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtc2c6IGFueSA9IChldi5kYXRhLnR5cGUgPT0gXCJmb3VuZFwiKSA/IGV2LmRhdGEgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hlci5mb3VuZChtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9OyovXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL307XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHByb2Nlc3MoaW1hZ2VEYXRhOiBJbWFnZURhdGEpIHtcblxuICAgICAgICBpZiAodGhpcy5fcHJvY2Vzc2luZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vdGhpcy53b3JrZXIucG9zdE1lc3NhZ2UoeyB0eXBlOiAncHJvY2VzcycsIGltYWdlZGF0YTogaW1hZ2VEYXRhIH0sIFtpbWFnZURhdGEuZGF0YS5idWZmZXJdKTtcbiAgICAgICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2UoeyB0eXBlOiAncHJvY2VzcycsIGltYWdlZGF0YTogaW1hZ2VEYXRhIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBsb2FkKGNhbWVyYVVSTDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgdmFyIHBzY2FsZSA9IDMyMCAvIE1hdGgubWF4KHRoaXMudncsIHRoaXMudmggLyAzICogNCk7XG5cbiAgICAgICAgICAgIGxldCB3OiBudW1iZXIgPSB0aGlzLnZ3ICogcHNjYWxlO1xuICAgICAgICAgICAgbGV0IGg6IG51bWJlciA9IHRoaXMudmggKiBwc2NhbGU7XG4gICAgICAgICAgICBsZXQgcHc6IG51bWJlciA9IE1hdGgubWF4KHcsIChoIC8gMykgKiA0KTtcbiAgICAgICAgICAgIGxldCBwaDogbnVtYmVyID0gTWF0aC5tYXgoaCwgKHcgLyA0KSAqIDMpO1xuXG4gICAgICAgICAgICB0aGlzLndvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xvYWQnLFxuICAgICAgICAgICAgICAgIHB3OiBwdyxcbiAgICAgICAgICAgICAgICBwaDogcGgsXG4gICAgICAgICAgICAgICAgY2FtZXJhX3BhcmE6IGNhbWVyYVVSTCxcbiAgICAgICAgICAgICAgICBtYXJrZXI6IHRoaXMubWFya2VyVVJMXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy53b3JrZXIub25tZXNzYWdlID0gKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gZXYuZGF0YTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xvYWRlZCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9qID0gSlNPTi5wYXJzZShtc2cucHJvaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9kaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KEFSbmZ0LkVWRU5UX1NFVF9DQU1FUkEsIHByb2opKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRMb2FkaW5nXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2cuZW5kID09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBudWxsIGFzIGFueTtcbiIsImltcG9ydCB7IElNZWRpYU5vZGUgfSBmcm9tICcuLi9ORlRFbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgQVJDb250cm9sbGVyQ29tcG9uZW50IGltcGxlbWVudHMgSU1lZGlhTm9kZXtcblxuICAgIHByb3RlY3RlZCB3b3JsZDogYW55O1xuICAgIHByaXZhdGUgX2hhc0ZvdW5kOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfZnJhbWVEcm9wczogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICBwdWJsaWMgdXBkYXRlKCl7XG4gICAgICAgIGlmICghdGhpcy53b3JsZCkge1xuICAgICAgICAgICAgdGhpcy5faGFzRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lRHJvcHMgPSAwO1xuICAgICAgICB9IGVsc2Uge31cbiAgICB9XG5cbiAgICBwdWJsaWMgZm91bmQobXNnOiBhbnkpOiB2b2lkIHtcblxuICAgIHRoaXMud29ybGQgPSBtc2c7XG4gICAgfVxufSIsIlxuZXhwb3J0IGludGVyZmFjZSBWaWRlb1NldHRpbmdEYXRhIHtcbiAgICB3aWR0aDogU2NyZWVuRGF0YTtcbiAgICBoZWlnaHQ6IFNjcmVlbkRhdGE7XG4gICAgZmFjaW5nTW9kZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcmVlbkRhdGEge1xuICAgIG1pbjogbnVtYmVyO1xuICAgIG1heDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDYW1lcmFWaWV3UmVuZGVyZXIge1xuICAgIGdldEhlaWdodCgpOiBudW1iZXI7XG4gICAgZ2V0V2lkdGgoKTogbnVtYmVyO1xuICAgIGdldEltYWdlKCk6IEltYWdlRGF0YTtcbn1cblxuZXhwb3J0IGNsYXNzIENhbWVyYVZpZXdSZW5kZXJlciBpbXBsZW1lbnRzIElDYW1lcmFWaWV3UmVuZGVyZXIge1xuXG4gICAgcHJpdmF0ZSBjYW52YXNfcHJvY2VzczogSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGNvbnRleHRfcHJvY2VzczogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgcHVibGljIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBfZmFjaW5nOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHZ3OiBudW1iZXI7XG4gICAgcHJpdmF0ZSB2aDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSB3OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBoOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIHB3OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBwaDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBveDogbnVtYmVyO1xuICAgIHByaXZhdGUgb3k6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2FudmFzX3Byb2Nlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jb250ZXh0X3Byb2Nlc3MgPSB0aGlzLmNhbnZhc19wcm9jZXNzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMudmlkZW8gPSB2aWRlbztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnZoO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRXaWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52dztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW1hZ2UoKTogSW1hZ2VEYXRhIHtcbiAgICAgICAgdGhpcy5jb250ZXh0X3Byb2Nlc3MuZHJhd0ltYWdlKHRoaXMudmlkZW8sIDAsIDAsIHRoaXMudncsIHRoaXMudmgsIHRoaXMub3gsIHRoaXMub3ksIHRoaXMudywgdGhpcy5oKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF9wcm9jZXNzLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLnB3LCB0aGlzLnBoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSh2aWRlb1NldHRpbmdzOiBWaWRlb1NldHRpbmdEYXRhKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgdGhpcy5fZmFjaW5nID0gdmlkZW9TZXR0aW5ncy5mYWNpbmdNb2RlIHx8ICdlbnZpcm9ubWVudCdcblxuICAgICAgICBjb25zdCBjb25zdHJhaW50cyA9IHt9XG4gICAgICAgIGNvbnN0IG1lZGlhRGV2aWNlc0NvbnN0cmFpbnRzID0ge31cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGludDogYW55ID0ge1xuICAgICAgICAgICAgICAgICAgICBcImF1ZGlvXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcInZpZGVvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2luZ01vZGU6IHRoaXMuX2ZhY2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB7IG1pbjogNDgwLCBtYXg6IDY0MCB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoaGludCkudGhlbihhc3luYyAoc3RyZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvID0gYXdhaXQgbmV3IFByb21pc2U8SFRNTFZpZGVvRWxlbWVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4gcmVzb2x2ZSh0aGlzLnZpZGVvKTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigodmFsdWUpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52dyA9IHRoaXMudmlkZW8udmlkZW9XaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmggPSB0aGlzLnZpZGVvLnZpZGVvSGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHNjYWxlID0gMzIwIC8gTWF0aC5tYXgodGhpcy52dywgdGhpcy52aCAvIDMgKiA0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ID0gdGhpcy52dyAqIHBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaCA9IHRoaXMudmggKiBwc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB3ID0gTWF0aC5tYXgodGhpcy53LCAodGhpcy5oIC8gMykgKiA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGggPSBNYXRoLm1heCh0aGlzLmgsICh0aGlzLncgLyA0KSAqIDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5veCA9ICh0aGlzLnB3IC0gdGhpcy53KSAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm95ID0gKHRoaXMucGggLSB0aGlzLmgpIC8gMjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNfcHJvY2Vzcy53aWR0aCA9IHRoaXMucHc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc19wcm9jZXNzLmhlaWdodCA9IHRoaXMucGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dF9wcm9jZXNzLmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHRfcHJvY2Vzcy5maWxsUmVjdCgwLCAwLCB0aGlzLnB3LCB0aGlzLnBoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChtc2cpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyByZWplY3QoXCJObyBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhXCIpO1xuICAgICAgICAgICAgICAgIHJlamVjdChcIlNvcnJ5LCBZb3VyIGRldmljZSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMgZXhwZXJpbmNlLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCBBUm5mdCBmcm9tICcuL0FSbmZ0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgQVJuZnRcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya2VyX2ZuKCkge1xuICByZXR1cm4gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiQVJuZnQud29ya2VyLmpzXCIpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==