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

/***/ "./src/core/NFTWorker.ts":
/*!*******************************!*\
  !*** ./src/core/NFTWorker.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Worker_fn
/* harmony export */ });
/* harmony import */ var _node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../node_modules/worker-loader/dist/runtime/inline.js */ "./node_modules/worker-loader/dist/runtime/inline.js");
/* harmony import */ var _node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0__);



function Worker_fn() {
  return _node_modules_worker_loader_dist_runtime_inline_js__WEBPACK_IMPORTED_MODULE_0___default()("/******/ (() => { // webpackBootstrap\n/******/ \t\"use strict\";\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\":\n/*!*******************************************************************!*\\\n  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!\n  \\*******************************************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ _classCallCheck\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n/***/ }),\n\n/***/ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\":\n/*!****************************************************************!*\\\n  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!\n  \\****************************************************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ _createClass\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n/***/ }),\n\n/***/ \"./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[1].use[0]!./node_modules/ts-loader/index.js!./src/core/NFTWorker.ts\":\n/*!**************************************************************************************************************************************!*\\\n  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[1].use[0]!./node_modules/ts-loader/index.js!./src/core/NFTWorker.ts ***!\n  \\**************************************************************************************************************************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NFTWorker\": () => /* binding */ NFTWorker,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var worker_loader_Worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! worker-loader!./Worker */ \"./node_modules/worker-loader/dist/cjs.js!./src/core/Worker.ts\");\n\n\n\nvar NFTWorker = /*#__PURE__*/function () {\n  function NFTWorker(d, markerURL, w, h) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, NFTWorker);\n\n    this._processing = false;\n    this._dispatcher = d;\n    this.markerURL = markerURL;\n    this.vw = w;\n    this.vh = h;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(NFTWorker, [{\n    key: \"initialize\",\n    value: function initialize(cameraURL) {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        _this.worker = new worker_loader_Worker__WEBPACK_IMPORTED_MODULE_2__.default();\n\n        _this.load(cameraURL).then(function () {\n          resolve(true);\n        });\n      });\n    }\n  }, {\n    key: \"process\",\n    value: function process(imageData) {\n      if (this._processing) {\n        return;\n      }\n\n      this._processing = true;\n      this.worker.postMessage({\n        type: 'process',\n        imagedata: imageData\n      });\n    }\n  }, {\n    key: \"load\",\n    value: function load(cameraURL) {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        var pscale = 320 / Math.max(_this2.vw, _this2.vh / 3 * 4);\n        var w = _this2.vw * pscale;\n        var h = _this2.vh * pscale;\n        var pw = Math.max(w, h / 3 * 4);\n        var ph = Math.max(h, w / 4 * 3);\n\n        _this2.worker.postMessage({\n          type: 'load',\n          pw: pw,\n          ph: ph,\n          camera_para: cameraURL,\n          marker: _this2.markerURL\n        });\n\n        _this2.worker.onmessage = function (ev) {\n          var msg = ev.data;\n\n          switch (msg.type) {\n            case 'loaded':\n              {\n                var proj = JSON.parse(msg.proj);\n                break;\n              }\n\n            case \"endLoading\":\n              {\n                if (msg.end == true) resolve(true);\n                break;\n              }\n          }\n\n          _this2._processing = false;\n        };\n      });\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {}\n  }]);\n\n  return NFTWorker;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);\n\n/***/ }),\n\n/***/ \"./node_modules/worker-loader/dist/cjs.js!./src/core/Worker.ts\":\n/*!*********************************************************************!*\\\n  !*** ./node_modules/worker-loader/dist/cjs.js!./src/core/Worker.ts ***!\n  \\*********************************************************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Worker_fn\n/* harmony export */ });\nfunction Worker_fn() {\n  return new Worker(__webpack_require__.p + \"ARnft.worker.worker.js\");\n}\n\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The module cache\n/******/ \tvar __webpack_module_cache__ = {};\n/******/ \t\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(__webpack_module_cache__[moduleId]) {\n/******/ \t\t\treturn __webpack_module_cache__[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t\t// no module.id needed\n/******/ \t\t\t// no module.loaded needed\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/ \t\n/******/ \t\t// Execute the module function\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __webpack_require__);\n/******/ \t\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/define property getters */\n/******/ \t(() => {\n/******/ \t\t// define getter functions for harmony exports\n/******/ \t\t__webpack_require__.d = (exports, definition) => {\n/******/ \t\t\tfor(var key in definition) {\n/******/ \t\t\t\tif(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/global */\n/******/ \t(() => {\n/******/ \t\t__webpack_require__.g = (function() {\n/******/ \t\t\tif (typeof globalThis === 'object') return globalThis;\n/******/ \t\t\ttry {\n/******/ \t\t\t\treturn this || new Function('return this')();\n/******/ \t\t\t} catch (e) {\n/******/ \t\t\t\tif (typeof window === 'object') return window;\n/******/ \t\t\t}\n/******/ \t\t})();\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t(() => {\n/******/ \t\t__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/make namespace object */\n/******/ \t(() => {\n/******/ \t\t// define __esModule on exports\n/******/ \t\t__webpack_require__.r = (exports) => {\n/******/ \t\t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t\t}\n/******/ \t\t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/publicPath */\n/******/ \t(() => {\n/******/ \t\tvar scriptUrl;\n/******/ \t\tif (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + \"\";\n/******/ \t\tvar document = __webpack_require__.g.document;\n/******/ \t\tif (!scriptUrl && document) {\n/******/ \t\t\tif (document.currentScript)\n/******/ \t\t\t\tscriptUrl = document.currentScript.src\n/******/ \t\t\tif (!scriptUrl) {\n/******/ \t\t\t\tvar scripts = document.getElementsByTagName(\"script\");\n/******/ \t\t\t\tif(scripts.length) scriptUrl = scripts[scripts.length - 1].src\n/******/ \t\t\t}\n/******/ \t\t}\n/******/ \t\t// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration\n/******/ \t\t// or pass an empty string (\"\") and set the __webpack_public_path__ variable from your code to use your own logic.\n/******/ \t\tif (!scriptUrl) throw new Error(\"Automatic publicPath is not supported in this browser\");\n/******/ \t\tscriptUrl = scriptUrl.replace(/#.*$/, \"\").replace(/\\?.*$/, \"\").replace(/\\/[^\\/]+$/, \"/\");\n/******/ \t\t__webpack_require__.p = scriptUrl;\n/******/ \t})();\n/******/ \t\n/************************************************************************/\n/******/ \t// startup\n/******/ \t// Load entry module\n/******/ \t__webpack_require__(\"./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[1].use[0]!./node_modules/ts-loader/index.js!./src/core/NFTWorker.ts\");\n/******/ \t// This entry module used 'exports' so it can't be inlined\n/******/ })()\n;\n", "Worker", undefined, undefined);
}


/***/ }),

/***/ "./node_modules/worker-loader/dist/runtime/inline.js":
/*!***********************************************************!*\
  !*** ./node_modules/worker-loader/dist/runtime/inline.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


/* eslint-env browser */

/* eslint-disable no-undef, no-use-before-define, new-cap */
module.exports = function (content, workerConstructor, workerOptions, url) {
  var globalScope = self || window;

  try {
    try {
      var blob;

      try {
        // New API
        blob = new globalScope.Blob([content]);
      } catch (e) {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = globalScope.BlobBuilder || globalScope.WebKitBlobBuilder || globalScope.MozBlobBuilder || globalScope.MSBlobBuilder;
        blob = new BlobBuilder();
        blob.append(content);
        blob = blob.getBlob();
      }

      var URL = globalScope.URL || globalScope.webkitURL;
      var objectURL = URL.createObjectURL(blob);
      var worker = new globalScope[workerConstructor](objectURL, workerOptions);
      URL.revokeObjectURL(objectURL);
      return worker;
    } catch (e) {
      return new globalScope[workerConstructor]("data:application/javascript,".concat(encodeURIComponent(content)), workerOptions);
    }
  } catch (e) {
    if (!url) {
      throw Error("Inline worker is not supported");
    }

    return new globalScope[workerConstructor](url, workerOptions);
  }
};

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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
.default;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQVJuZnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9BUm5mdC8uL3NyYy9BUm5mdC50cyIsIndlYnBhY2s6Ly9BUm5mdC8uL3NyYy9jb3JlL0FSVXRpbHMudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9BUm5mdENvcmUudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9ORlRFbnRpdHkudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvY29yZS9jb21wb25lbnRzL0FSQ29udHJvbGxlckNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9BUm5mdC8uL3NyYy9jb3JlL3JlbmRlcmVycy9DYW1lcmFWaWV3UmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQVJuZnQvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL0FSbmZ0Ly4vc3JjL2NvcmUvTkZUV29ya2VyLnRzIiwid2VicGFjazovL0FSbmZ0Ly4vbm9kZV9tb2R1bGVzL3dvcmtlci1sb2FkZXIvZGlzdC9ydW50aW1lL2lubGluZS5qcyIsIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQVJuZnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9BUm5mdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0FSbmZ0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7O0FDZEEsZ0hBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL0M7QUFDQTtBQUNBO0FBRUE7QUFDQTs7SUFFcUIsSztBQU9qQixpQkFBWSxTQUFaLEVBQStCLE1BQS9CLEVBQStDLFNBQS9DLEVBQWdFO0FBQUE7O0FBQzVELFNBQUssT0FBTCxHQUFlLE1BQWY7QUFDQSxTQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxTQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDSDs7Ozs7OExBRU07QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVILHdFQUFTLENBQUMsS0FBSyxTQUFOLENBQVQ7QUFDQSx3QkFBUSxDQUFDLGdCQUFULENBQTBCLFdBQTFCO0FBQUEsbU1BQXVDLGlCQUFPLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25DLGlDQUFJLENBQUMsT0FBTCxHQUFlLEVBQUUsQ0FBQyxNQUFILENBQVUsTUFBekI7QUFDQSxtQ0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFJLENBQUMsT0FBakI7QUFFSixpQ0FBSSxDQUFDLFVBQUwsR0FBa0IsSUFBSSxrRkFBSixDQUF1QixRQUFRLENBQUMsY0FBVCxDQUF3QixPQUF4QixDQUF2QixDQUFsQjtBQUp1QztBQUFBLG1DQUtqQyxLQUFJLENBQUMsVUFBTCxDQUFnQixVQUFoQixDQUEyQixLQUFJLENBQUMsT0FBTCxDQUFhLGFBQXhDLFdBQTZELFVBQUMsS0FBRCxFQUFVO0FBQ3pFLHFDQUFPLENBQUMsS0FBUixDQUFjLEtBQWQ7QUFDQSxxQ0FBTyxPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsQ0FBUDtBQUNILDZCQUhLLENBTGlDOztBQUFBO0FBVXZDLGlDQUFJLENBQUMsVUFBTCxHQUFrQixJQUFJLHNEQUFKLENBQWMsS0FBSSxDQUFDLFVBQW5CLEVBQStCLEtBQUksQ0FBQyxPQUFwQyxDQUFsQjtBQVZ1QztBQUFBLG1DQVdqQyxLQUFJLENBQUMsVUFBTCxDQUFnQixVQUFoQixZQUFtQyxVQUFDLEtBQUQsRUFBZTtBQUNwRCxxQ0FBTyxDQUFDLEtBQVIsQ0FBYyxLQUFkO0FBQ0EscUNBQU8sT0FBTyxDQUFDLE1BQVIsQ0FBZSxLQUFmLENBQVA7QUFDSCw2QkFISyxDQVhpQzs7QUFBQTtBQWdCbkMsdUNBaEJtQyxHQWdCRSxJQUFJLHlGQUFKLEVBaEJGO0FBa0JuQyxxQ0FsQm1DLEdBa0JaLElBQUksc0RBQUosQ0FBYyxXQUFkLEVBQTBCLEtBQUksQ0FBQyxTQUEvQixFQUEwQyxHQUExQyxFQUErQyxHQUEvQyxDQWxCWTtBQUFBO0FBQUEsbUNBbUJqQyxTQUFTLENBQUMsVUFBVixDQUFxQixLQUFJLENBQUMsT0FBMUIsQ0FuQmlDOztBQUFBO0FBb0J2QyxpQ0FBSSxDQUFDLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBNkIsU0FBN0I7O0FBQ0EsaUNBQUksQ0FBQyxVQUFMLENBQWdCLE1BQWhCOztBQXJCdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXZDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEcsa0RBMEJJLE9BQU8sQ0FBQyxPQUFSLENBQWdCLElBQWhCLENBMUJKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7V0E2QkEsc0JBQWEsVUFBYixFQUFpQyxTQUFqQyxFQUFvRCxDQUFwRCxFQUErRCxDQUEvRCxFQUF3RSxDQUc5RTs7O1dBRU0sc0JBQWEsTUFBYixFQUFpQyxJQUFqQyxFQUE4QztBQUNqRCxhQUFPLEtBQUssVUFBTCxDQUFnQixZQUFoQixDQUE2QixNQUE3QixFQUFxQyxJQUFyQyxDQUFQO0FBQ0g7OztXQUVPLGtCQUFNO0FBQ1YsYUFBTyxDQUFDLEdBQVIsQ0FBWSxLQUFLLFVBQWpCOztBQUVBLFdBQUssVUFBTCxDQUFnQixNQUFoQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REMsU0FBVSxnQkFBVixDQUEyQixPQUEzQixFQUEwQztBQUM1QyxTQUFPLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFBTCxHQUFVLEdBQWQsQ0FBZDtBQUNIO0FBRUssU0FBVSxRQUFWLEdBQWtCO0FBRXBCLE1BQUksaUVBQWlFLElBQWpFLENBQXNFLFNBQVMsQ0FBQyxTQUFoRixDQUFKLEVBQWdHO0FBRTVGLFdBQU8sSUFBUDtBQUNIOztBQUNELFNBQU8sS0FBUDtBQUNIO0FBQ0ssU0FBVSxLQUFWLEdBQWU7QUFDakIsTUFBSSxvQkFBb0IsSUFBcEIsQ0FBeUIsU0FBUyxDQUFDLFNBQW5DLENBQUosRUFBbUQ7QUFFL0MsV0FBTyxJQUFQO0FBQ0g7O0FBQ0QsU0FBTyxLQUFQO0FBQ0g7QUFFTSxTQUFVLFNBQVYsQ0FBb0IsVUFBcEIsRUFBc0M7QUFDM0MsT0FBSyxDQUFDLFVBQUQsQ0FBTCxDQUNFLElBREYsQ0FDTyxrQkFBUSxFQUFHO0FBQ2IsUUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFkLEVBQWtCO0FBQ2hCLFlBQU0sSUFBSSxLQUFKLENBQVUsMEJBQTBCLFFBQVEsQ0FBQyxNQUE3QyxDQUFOO0FBQ0Q7O0FBQ0QsV0FBTyxRQUFRLENBQUMsSUFBVCxFQUFQO0FBQ0QsR0FOSixFQU9JLElBUEosQ0FPUyxVQUFDLFFBQUQsRUFBYTtBQUVqQixXQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFDQSxRQUFNLFNBQVMsR0FBRyxJQUFJLFdBQUosQ0FBZ0IsV0FBaEIsRUFBNkI7QUFBRSxZQUFNLEVBQUU7QUFBRSxjQUFNLEVBQUU7QUFBVjtBQUFWLEtBQTdCLENBQWxCO0FBQ0EsWUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkI7QUFDQSxXQUFPLFFBQVA7QUFDRCxHQWJKLFdBY1UsVUFBUyxLQUFULEVBQWM7QUFDakIsV0FBTyxDQUFDLEtBQVIsQ0FBYyxLQUFkO0FBQ0EsV0FBTyxPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsQ0FBUDtBQUNELEdBakJOO0FBa0JDLFNBQU8sSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENGO0FBSU8sSUFBTSxTQUFiO0FBcUJJLHFCQUFZLEtBQVosRUFBd0MsT0FBeEMsRUFBdUQ7QUFBQTs7QUFuQi9DLGlCQUFnQixDQUFoQjtBQUVBLHdCQUF3QyxJQUFJLEdBQUosRUFBeEM7QUFNQSxnQkFBZSxFQUFmO0FBRUEscUJBQW9CLENBQXBCO0FBVUosU0FBSyxjQUFMLEdBQXNCLEtBQXRCO0FBQ0EsU0FBSyxjQUFMLEdBQXNCLE9BQXRCO0FBRUEsU0FBSyxNQUFMLENBQVksS0FBSyxJQUFqQjtBQUNIOztBQTFCTDtBQUFBO0FBQUEsV0E0Qlcsc0JBQWEsTUFBYixFQUFpQyxJQUFqQyxFQUE4QztBQUVqRCxVQUFJLENBQUMsSUFBTCxFQUNJLElBQUksR0FBRyxZQUFZLEtBQUssS0FBTCxFQUFuQjs7QUFFSixXQUFLLFlBQUwsQ0FBa0IsR0FBbEIsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUI7O0FBQ0EsYUFBTyxNQUFQO0FBQ0g7QUFuQ0w7QUFBQTtBQUFBLFdBcUNXLHVCQUFjLElBQWQsRUFBZ0MsU0FBaEMsRUFBbUQsSUFBbkQsRUFBZ0U7QUFFbkUsVUFBSSxDQUFDLElBQUwsRUFDSSxJQUFJLEdBQUcsWUFBWSxLQUFLLEtBQUwsRUFBbkI7QUFFSixVQUFJLE1BQU0sR0FBRyxJQUFJLGlEQUFKLENBQWMsSUFBZCxFQUFvQixTQUFwQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxDQUFiOztBQUVBLFdBQUssWUFBTCxDQUFrQixHQUFsQixDQUFzQixJQUF0QixFQUE0QixNQUE1QjtBQUNIO0FBN0NMO0FBQUE7QUFBQSxXQStDVyx5QkFBZ0IsSUFBaEIsRUFBNEI7QUFDL0IsVUFBSSxDQUFDLEtBQUssWUFBTCxDQUFrQixHQUFsQixDQUFzQixJQUF0QixDQUFMLEVBQ0ksT0FBTyxJQUFQO0FBRUosYUFBTyxLQUFLLFlBQUwsQ0FBa0IsR0FBbEIsQ0FBc0IsSUFBdEIsQ0FBUDtBQUNIO0FBcERMO0FBQUE7QUFBQSxXQXNEVyx5QkFBYTtBQUNoQixhQUFPLEtBQUssY0FBWjtBQUNIO0FBeERMO0FBQUE7QUFBQSxXQTBEVyxnQkFBTyxLQUFQLEVBQW9CO0FBQ3ZCLFdBQUssSUFBTCxHQUFZLE9BQU8sS0FBbkI7QUFDSDtBQTVETDtBQUFBO0FBQUEsV0E4RFcsc0JBQVU7QUFBQTs7QUFDYixhQUFPLENBQUMsR0FBUixDQUFZLFlBQVo7QUFFQSxVQUFJLFFBQVEsR0FBdUIsRUFBbkM7O0FBQ0EsV0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQTBCLGlCQUFPLEVBQUc7QUFDaEMsZ0JBQVEsQ0FBQyxJQUFULENBQWMsT0FBTyxDQUFDLFVBQVIsQ0FBbUIsS0FBSSxDQUFDLGNBQXhCLENBQWQ7QUFDSCxPQUZEOztBQUlBLGFBQU8sT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLElBQXRCLENBQTJCLFlBQUs7QUFDbkMsZUFBTyxJQUFQO0FBQ0gsT0FGTSxDQUFQO0FBR0g7QUF6RUw7QUFBQTtBQUFBLFdBMkVXLGtCQUFNO0FBQ1QsVUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLEdBQUwsRUFBbkI7QUFDQSxVQUFJLFNBQUo7O0FBQ0EsVUFBSyxJQUFJLEdBQUcsS0FBSyxTQUFiLEdBQTBCLEtBQUssSUFBbkMsRUFBeUM7QUFDckMsaUJBQVMsR0FBRyxLQUFLLGNBQUwsQ0FBb0IsUUFBcEIsRUFBWjtBQUNBLGVBQU8sQ0FBQyxHQUFSLENBQVksU0FBWjtBQUVBLGFBQUssU0FBTCxHQUFpQixJQUFqQjtBQUNIOztBQUVELFdBQUssWUFBTCxDQUFrQixPQUFsQixDQUEwQixpQkFBTyxFQUFHO0FBQ2hDLGVBQU8sQ0FBQyxNQUFSO0FBQ0EsWUFBSSxTQUFKLEVBQ0ksT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsU0FBaEI7QUFDUCxPQUpEO0FBS0g7QUExRkw7QUFBQTtBQUFBLFdBNEZXLG1CQUFPO0FBQ1YsV0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQTBCLGdCQUFNLEVBQUc7QUFDL0IsY0FBTSxDQUFDLE9BQVA7QUFDSCxPQUZEOztBQUdBLFdBQUssWUFBTCxDQUFrQixLQUFsQjs7QUFDQSxXQUFLLGNBQUwsR0FBc0IsSUFBdEI7QUFDSDtBQWxHTDs7QUFBQTtBQUFBO0FBaUIyQiw2QkFBMkIsd0JBQTNCO0FBQ0EsK0JBQTZCLDBCQUE3QjtBQUNBLDhCQUE0Qix5QkFBNUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjNCO0FBZ0JPLElBQU0sU0FBYjtBQWFJLHFCQUFZLElBQVosRUFBOEIsU0FBOUIsRUFBaUQsQ0FBakQsRUFBNEQsQ0FBNUQsRUFBcUU7QUFBQTs7QUFWN0Qsa0JBQXVCLEVBQXZCO0FBV0osU0FBSyxVQUFMLEdBQWtCLFNBQWxCO0FBQ0EsU0FBSyxPQUFMLEdBQWUsSUFBSSwrQ0FBSixDQUFjLElBQWQsRUFBb0IsS0FBSyxVQUF6QixFQUFxQyxDQUFyQyxFQUF3QyxDQUF4QyxDQUFmOztBQUVBLFNBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsSUFBakI7QUFDSDs7QUFsQkw7QUFBQTtBQUFBLFdBb0JXLG9CQUFXLFVBQVgsRUFBNkI7QUFDaEMsV0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsYUFBTyxLQUFLLE9BQUwsQ0FBYSxVQUFiLENBQXdCLEtBQUssVUFBN0IsQ0FBUDtBQUNIO0FBdkJMO0FBQUE7QUFBQSxXQXlCVyxlQUFNLEdBQU4sRUFBeUI7QUFFNUIsV0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixpQkFBTyxFQUFHO0FBQzFCLGVBQU8sQ0FBQyxLQUFSLENBQWMsR0FBZDtBQUNILE9BRkQ7QUFHSDtBQTlCTDtBQUFBO0FBQUEsV0FnQ1csaUJBQVEsU0FBUixFQUE0QjtBQUMvQixXQUFLLE9BQUwsQ0FBYSxPQUFiLENBQXFCLFNBQXJCO0FBQ0g7QUFsQ0w7QUFBQTtBQUFBLFdBb0NXLGtCQUFNO0FBRVQsV0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixpQkFBTyxFQUFHO0FBQzFCLGVBQU8sQ0FBQyxNQUFSO0FBQ0gsT0FGRDtBQUdIO0FBekNMO0FBQUE7QUFBQSxXQTJDVyxtQkFBTyxDQUViO0FBN0NMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RPLElBQU0scUJBQWI7QUFNSTtBQUFBOztBQUhRLHFCQUFxQixLQUFyQjtBQUNBLHVCQUFzQixDQUF0QjtBQUVROztBQU5wQjtBQUFBO0FBQUEsV0FPVyxrQkFBTTtBQUNULFVBQUksQ0FBQyxLQUFLLEtBQVYsRUFBaUI7QUFDYixhQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxhQUFLLFdBQUwsR0FBbUIsQ0FBbkI7QUFDSCxPQUhELE1BR08sQ0FBRTtBQUNaO0FBWkw7QUFBQTtBQUFBLFdBY1csZUFBTSxHQUFOLEVBQWM7QUFFckIsV0FBSyxLQUFMLEdBQWEsR0FBYjtBQUNDO0FBakJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0JPLElBQU0sa0JBQWI7QUFzQkksOEJBQVksS0FBWixFQUFtQztBQUFBOztBQUMvQixTQUFLLGNBQUwsR0FBc0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBdEI7QUFDQSxTQUFLLGVBQUwsR0FBdUIsS0FBSyxjQUFMLENBQW9CLFVBQXBCLENBQStCLElBQS9CLENBQXZCO0FBQ0EsU0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNIOztBQTFCTDtBQUFBO0FBQUEsV0E0QlcscUJBQVM7QUFDWixhQUFPLEtBQUssRUFBWjtBQUNIO0FBOUJMO0FBQUE7QUFBQSxXQWdDVyxvQkFBUTtBQUNYLGFBQU8sS0FBSyxFQUFaO0FBQ0g7QUFsQ0w7QUFBQTtBQUFBLFdBb0NXLG9CQUFRO0FBQ1gsV0FBSyxlQUFMLENBQXFCLFNBQXJCLENBQStCLEtBQUssS0FBcEMsRUFBMkMsQ0FBM0MsRUFBOEMsQ0FBOUMsRUFBaUQsS0FBSyxFQUF0RCxFQUEwRCxLQUFLLEVBQS9ELEVBQW1FLEtBQUssRUFBeEUsRUFBNEUsS0FBSyxFQUFqRixFQUFxRixLQUFLLENBQTFGLEVBQTZGLEtBQUssQ0FBbEc7QUFDQSxhQUFPLEtBQUssZUFBTCxDQUFxQixZQUFyQixDQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxFQUF3QyxLQUFLLEVBQTdDLEVBQWlELEtBQUssRUFBdEQsQ0FBUDtBQUNIO0FBdkNMO0FBQUE7QUFBQSxXQXlDVyxvQkFBVyxhQUFYLEVBQTBDO0FBQUE7O0FBRTdDLFdBQUssT0FBTCxHQUFlLGFBQWEsQ0FBQyxVQUFkLElBQTRCLGFBQTNDO0FBRUEsVUFBTSxXQUFXLEdBQUcsRUFBcEI7QUFDQSxVQUFNLHVCQUF1QixHQUFHLEVBQWhDO0FBRUEsYUFBTyxJQUFJLE9BQUo7QUFBQSx5TEFBcUIsa0JBQU8sT0FBUCxFQUFnQixNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEIsc0JBQUksU0FBUyxDQUFDLFlBQVYsSUFBMEIsU0FBUyxDQUFDLFlBQVYsQ0FBdUIsWUFBckQsRUFBbUU7QUFDM0Qsd0JBRDJELEdBQy9DO0FBQ1osK0JBQVMsS0FERztBQUVaLCtCQUFTO0FBQ0wsa0NBQVUsRUFBRSxLQUFJLENBQUMsT0FEWjtBQUVMLDZCQUFLLEVBQUU7QUFBRSw2QkFBRyxFQUFFLEdBQVA7QUFBWSw2QkFBRyxFQUFFO0FBQWpCO0FBRkY7QUFGRyxxQkFEK0M7QUFTL0QsNkJBQVMsQ0FBQyxZQUFWLENBQXVCLFlBQXZCLENBQW9DLElBQXBDLEVBQTBDLElBQTFDO0FBQUEsd01BQStDLGlCQUFPLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMzQyxxQ0FBSSxDQUFDLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLE1BQXZCO0FBRDJDO0FBQUEsdUNBRXhCLElBQUksT0FBSixDQUE4QixVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQW9CO0FBQ2pFLHVDQUFJLENBQUMsS0FBTCxDQUFXLGdCQUFYLEdBQThCO0FBQUEsMkNBQU0sT0FBTyxDQUFDLEtBQUksQ0FBQyxLQUFOLENBQWI7QUFBQSxtQ0FBOUI7QUFDSCxpQ0FGa0IsRUFFaEIsSUFGZ0IsQ0FFWCxVQUFDLEtBQUQsRUFBVTtBQUVkLHVDQUFJLENBQUMsRUFBTCxHQUFVLEtBQUksQ0FBQyxLQUFMLENBQVcsVUFBckI7QUFDQSx1Q0FBSSxDQUFDLEVBQUwsR0FBVSxLQUFJLENBQUMsS0FBTCxDQUFXLFdBQXJCO0FBRUEsc0NBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFJLENBQUMsRUFBZCxFQUFrQixLQUFJLENBQUMsRUFBTCxHQUFVLENBQVYsR0FBYyxDQUFoQyxDQUFuQjtBQUVBLHVDQUFJLENBQUMsQ0FBTCxHQUFTLEtBQUksQ0FBQyxFQUFMLEdBQVUsTUFBbkI7QUFDQSx1Q0FBSSxDQUFDLENBQUwsR0FBUyxLQUFJLENBQUMsRUFBTCxHQUFVLE1BQW5CO0FBQ0EsdUNBQUksQ0FBQyxFQUFMLEdBQVUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFJLENBQUMsQ0FBZCxFQUFrQixLQUFJLENBQUMsQ0FBTCxHQUFTLENBQVYsR0FBZSxDQUFoQyxDQUFWO0FBQ0EsdUNBQUksQ0FBQyxFQUFMLEdBQVUsSUFBSSxDQUFDLEdBQUwsQ0FBUyxLQUFJLENBQUMsQ0FBZCxFQUFrQixLQUFJLENBQUMsQ0FBTCxHQUFTLENBQVYsR0FBZSxDQUFoQyxDQUFWO0FBQ0EsdUNBQUksQ0FBQyxFQUFMLEdBQVUsQ0FBQyxLQUFJLENBQUMsRUFBTCxHQUFVLEtBQUksQ0FBQyxDQUFoQixJQUFxQixDQUEvQjtBQUNBLHVDQUFJLENBQUMsRUFBTCxHQUFVLENBQUMsS0FBSSxDQUFDLEVBQUwsR0FBVSxLQUFJLENBQUMsQ0FBaEIsSUFBcUIsQ0FBL0I7QUFFQSx1Q0FBSSxDQUFDLGNBQUwsQ0FBb0IsS0FBcEIsR0FBNEIsS0FBSSxDQUFDLEVBQWpDO0FBQ0EsdUNBQUksQ0FBQyxjQUFMLENBQW9CLE1BQXBCLEdBQTZCLEtBQUksQ0FBQyxFQUFsQztBQUVBLHVDQUFJLENBQUMsZUFBTCxDQUFxQixTQUFyQixHQUFpQyxPQUFqQzs7QUFDQSx1Q0FBSSxDQUFDLGVBQUwsQ0FBcUIsUUFBckIsQ0FBOEIsQ0FBOUIsRUFBaUMsQ0FBakMsRUFBb0MsS0FBSSxDQUFDLEVBQXpDLEVBQTZDLEtBQUksQ0FBQyxFQUFsRDs7QUFDQSx5Q0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBLHlDQUFPLEtBQVA7QUFDSCxpQ0F2QmtCLFdBdUJWLFVBQUMsR0FBRCxFQUFRO0FBQ2IseUNBQU8sQ0FBQyxHQUFSLENBQVksR0FBWjtBQUNBLHdDQUFNLENBQUMsR0FBRCxDQUFOO0FBQ0EseUNBQU8sSUFBUDtBQUNILGlDQTNCa0IsQ0FGd0I7O0FBQUE7QUFFM0MscUNBQUksQ0FBQyxLQUZzQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBL0M7O0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBOEJTLFVBQUMsS0FBRCxFQUFVO0FBQ2YsNkJBQU8sQ0FBQyxLQUFSLENBQWMsS0FBZDtBQUNBLDRCQUFNLENBQUMsS0FBRCxDQUFOO0FBQ0gscUJBakNEO0FBa0NILG1CQTNDRCxNQTRDSztBQUVELDBCQUFNLENBQUMscURBQUQsQ0FBTjtBQUNIOztBQWhEdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBckI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQWtESDtBQWxHTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFFQSxpRUFBZTtBQUNYLE9BQUssRUFBTCwyQ0FBSztBQURNLENBQWYsRTs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJBUm5mdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFSbmZ0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFSbmZ0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB7IEFSbmZ0Q29yZSB9IGZyb20gJy4vY29yZS9BUm5mdENvcmUnXG5pbXBvcnQgeyBORlRFbnRpdHksIElORlRFbnRpdHksIElNZWRpYU5vZGUgfSBmcm9tIFwiLi9jb3JlL05GVEVudGl0eVwiO1xuaW1wb3J0IHsgQVJDb250cm9sbGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29yZS9jb21wb25lbnRzL0FSQ29udHJvbGxlckNvbXBvbmVudFwiXG5pbXBvcnQgeyBBcHBKc29uIH0gZnJvbSBcIi4vY29yZS9kYXRhL0FwcERhdGFcIjtcbmltcG9ydCB7IENhbWVyYVZpZXdSZW5kZXJlciB9IGZyb20gXCIuL2NvcmUvcmVuZGVyZXJzL0NhbWVyYVZpZXdSZW5kZXJlclwiO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSBcIi4vY29yZS9BUlV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFSbmZ0IHtcbiAgICBwdWJsaWMgY2FtZXJhVmlldzogQ2FtZXJhVmlld1JlbmRlcmVyO1xuICAgIHB1YmxpYyBhcHBEYXRhOiBBcHBKc29uO1xuICAgIHB1YmxpYyBjb25maWdVcmw6IHN0cmluZztcbiAgICBwdWJsaWMgbWFya2VyVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfYXJuZnRDb3JlOiBBUm5mdENvcmU7XG4gICAgcHVibGljIGNhbURhdGE6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdVcmw6IHN0cmluZywgY2FtVXJsOiBzdHJpbmcsIG1hcmtlclVybDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5jYW1EYXRhID0gY2FtVXJsO1xuICAgICAgICB0aGlzLmNvbmZpZ1VybCA9IGNvbmZpZ1VybDtcbiAgICAgICAgdGhpcy5tYXJrZXJVcmwgPSBtYXJrZXJVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXRpYWxpemUoKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgZ2V0Q29uZmlnKHRoaXMuY29uZmlnVXJsKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2V0Q29uZmlnJywgYXN5bmMgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YSA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcERhdGEpO1xuICAgICAgICAvLyB2aWV3c1xuICAgICAgICB0aGlzLmNhbWVyYVZpZXcgPSBuZXcgQ2FtZXJhVmlld1JlbmRlcmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlkZW9cIikgYXMgSFRNTFZpZGVvRWxlbWVudCk7XG4gICAgICAgIGF3YWl0IHRoaXMuY2FtZXJhVmlldy5pbml0aWFsaXplKHRoaXMuYXBwRGF0YS52aWRlb1NldHRpbmdzKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fYXJuZnRDb3JlID0gbmV3IEFSbmZ0Q29yZSh0aGlzLmNhbWVyYVZpZXcsIHRoaXMuY2FtRGF0YSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX2FybmZ0Q29yZS5pbml0aWFsaXplKCkuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGZhbHNlKTtcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgYXJDb21wb25lbnQ6IEFSQ29udHJvbGxlckNvbXBvbmVudCA9IG5ldyBBUkNvbnRyb2xsZXJDb21wb25lbnQoKTtcblxuICAgICAgICBsZXQgbmZ0RW50aXR5OiBORlRFbnRpdHkgPSBuZXcgTkZURW50aXR5KGFyQ29tcG9uZW50LHRoaXMubWFya2VyVXJsLCAyMDAsIDIwMCk7XG4gICAgICAgIGF3YWl0IG5mdEVudGl0eS5pbml0aWFsaXplKHRoaXMuY2FtRGF0YSk7XG4gICAgICAgIHRoaXMuX2FybmZ0Q29yZS5hZGRORlRFbnRpdHkobmZ0RW50aXR5KTtcbiAgICAgICAgdGhpcy5fYXJuZnRDb3JlLnVwZGF0ZSgpO1xuICAgIH0pXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZUVudGl0eShjYW1lcmFEYXRhOiBzdHJpbmcsIG1hcmtlclVybDogc3RyaW5nLCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xuICAgICAgICAvL2xldCBuZnRFbnRpdHk6IE5GVEVudGl0eSA9IG5ldyBORlRFbnRpdHkobWFya2VyVXJsLCB3LCBoKTtcbiAgICAgICAgLy9yZXR1cm4gbmZ0RW50aXR5O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRORlRFbnRpdHkoZW50aXR5OiBJTkZURW50aXR5LCBuYW1lPzogc3RyaW5nKTogSU5GVEVudGl0eSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hcm5mdENvcmUuYWRkTkZURW50aXR5KGVudGl0eSwgbmFtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2FybmZ0Q29yZSk7XG5cbiAgICAgICAgdGhpcy5fYXJuZnRDb3JlLnVwZGF0ZSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZWdyZWVzVG9SYWRpYW5zKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICAvL3JldHVybiAvQW5kcm9pZHxtb2JpbGV8aVBhZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgaWYgKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAvLyB0cnVlIGZvciBtb2JpbGUgZGV2aWNlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNJT1MoKTogYm9vbGVhbiB7XG4gICAgaWYgKC9pUGhvbmV8aVBhZHxpUG9kL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAvLyB0cnVlIGZvciBtb2JpbGUgZGV2aWNlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4gXG4gZXhwb3J0IGZ1bmN0aW9uIGdldENvbmZpZyhjb25maWdEYXRhOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgZmV0Y2goY29uZmlnRGF0YSlcbiAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIVFRQIGVycm9yLCBzdGF0dXMgPSBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgfVxuICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgIH0pXG4gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgIC8vIHByaW50aW5nIHRoZSByZXNwb25zZSBvbmx5IGZvciB0ZXN0aW5nXG4gICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgIGNvbnN0IGV2ZW50RGF0YSA9IG5ldyBDdXN0b21FdmVudCgnZ2V0Q29uZmlnJywgeyBkZXRhaWw6IHsgY29uZmlnOiByZXNwb25zZSB9IH0pO1xuICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnREYXRhKTtcbiAgICAgICByZXR1cm4ocmVzcG9uc2UpXG4gICAgIH0pXG4gICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZmFsc2UpO1xuICAgICAgIH0pO1xuICAgcmV0dXJuIHRydWU7XG4gfVxuIFxuIiwiaW1wb3J0IHsgTkZURW50aXR5LCBJTkZURW50aXR5LCBJTWVkaWFOb2RlIH0gZnJvbSBcIi4vTkZURW50aXR5XCI7XG5pbXBvcnQgeyBJQ2FtZXJhVmlld1JlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJzL0NhbWVyYVZpZXdSZW5kZXJlclwiO1xuaW1wb3J0IHsgQXBwSnNvbiB9IGZyb20gXCIuL2RhdGEvQXBwRGF0YVwiO1xuXG5leHBvcnQgY2xhc3MgQVJuZnRDb3JlIHtcblxuICAgIHByaXZhdGUgY291bnQ6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIF9jb250cm9sbGVyczogTWFwPHN0cmluZywgSU5GVEVudGl0eT4gPSBuZXcgTWFwPHN0cmluZywgSU5GVEVudGl0eT4oKTtcblxuICAgIHByaXZhdGUgX3ZpZGVvUmVuZGVyZXI6IElDYW1lcmFWaWV3UmVuZGVyZXI7XG5cbiAgICBwcml2YXRlIF9jYW1lcmFEYXRhVVJMOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9mcHM6IG51bWJlciA9IDE1O1xuXG4gICAgcHJpdmF0ZSBfbGFzdFRpbWU6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgYXBwRGF0YTogQXBwSnNvbjtcblxuICAgIC8vIGV2ZW50c1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRVZFTlRfU0VUX0NBTUVSQTogc3RyaW5nID0gXCJBUk5GVF9TRVRfQ0FNRVJBX0VWRU5UXCI7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFVkVOVF9GT1VORF9NQVJLRVI6IHN0cmluZyA9IFwiQVJORlRfRk9VTkRfTUFSS0VSX0VWRU5UXCI7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBFVkVOVF9MT1NUX01BUktFUjogc3RyaW5nID0gXCJBUk5GVF9MT1NUX01BUktFUl9FVkVOVFwiO1xuXG4gICAgY29uc3RydWN0b3IodmlkZW86IElDYW1lcmFWaWV3UmVuZGVyZXIsIGNhbURhdGE6IHN0cmluZykge1xuICAgICAgICB0aGlzLl92aWRlb1JlbmRlcmVyID0gdmlkZW87XG4gICAgICAgIHRoaXMuX2NhbWVyYURhdGFVUkwgPSBjYW1EYXRhO1xuICAgICAgICAvLyBzZXQgZGVmYXVsdCBmcHMgYXQgMTVcbiAgICAgICAgdGhpcy5zZXRGUFModGhpcy5fZnBzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTkZURW50aXR5KGVudGl0eTogSU5GVEVudGl0eSwgbmFtZT86IHN0cmluZyk6IElORlRFbnRpdHkge1xuXG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIG5hbWUgPSBcImVudGl0eS1cIiArIHRoaXMuY291bnQrKztcblxuICAgICAgICB0aGlzLl9jb250cm9sbGVycy5zZXQobmFtZSwgZW50aXR5KTtcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTkZURW50aXR5Mihub2RlOiBJTWVkaWFOb2RlLCBtYXJrZXJVcmw6IHN0cmluZywgbmFtZT86IHN0cmluZykge1xuXG4gICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgIG5hbWUgPSBcImVudGl0eS1cIiArIHRoaXMuY291bnQrKztcbiAgICBcbiAgICAgICAgbGV0IGVudGl0eSA9IG5ldyBORlRFbnRpdHkobm9kZSwgbWFya2VyVXJsLCAxMjAsIDEyMCk7XG5cbiAgICAgICAgdGhpcy5fY29udHJvbGxlcnMuc2V0KG5hbWUsIGVudGl0eSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEVudGl0eUJ5TmFtZShuYW1lOiBzdHJpbmcpOiBJTkZURW50aXR5IHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb250cm9sbGVycy5oYXMobmFtZSkpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlcnMuZ2V0KG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDYW1lcmFWaWV3KCk6IElDYW1lcmFWaWV3UmVuZGVyZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmlkZW9SZW5kZXJlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RlBTKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZnBzID0gMTAwMCAvIHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgQVJuZnRcIik7XG5cbiAgICAgICAgbGV0IHByb21pc2VzOiBQcm9taXNlPGJvb2xlYW4+W10gPSBbXTtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goZWxlbWVudC5pbml0aWFsaXplKHRoaXMuX2NhbWVyYURhdGFVUkwpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGltYWdlRGF0YTogSW1hZ2VEYXRhO1xuICAgICAgICBpZiAoKHRpbWUgLSB0aGlzLl9sYXN0VGltZSkgPiB0aGlzLl9mcHMpIHtcbiAgICAgICAgICAgIGltYWdlRGF0YSA9IHRoaXMuX3ZpZGVvUmVuZGVyZXIuZ2V0SW1hZ2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlRGF0YSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUaW1lID0gdGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnVwZGF0ZSgpO1xuICAgICAgICAgICAgaWYgKGltYWdlRGF0YSlcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByb2Nlc3MoaW1hZ2VEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJzLmZvckVhY2goZW50aXR5ID0+IHtcbiAgICAgICAgICAgIGVudGl0eS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVycy5jbGVhcigpO1xuICAgICAgICB0aGlzLl92aWRlb1JlbmRlcmVyID0gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgTkZUV29ya2VyIGZyb20gXCIuL05GVFdvcmtlclwiO1xuaW1wb3J0IHsgTkZUT3JpZW50YXRpb24gfSBmcm9tICcuL05GVE9yaWVudGF0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBJTWVkaWFOb2RlIHtcbiAgICB1cGRhdGUoKTogdm9pZDtcbiAgICBmb3VuZCh2YWx1ZTogTkZUT3JpZW50YXRpb24pOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElORlRFbnRpdHkge1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIGZvdW5kKG1zZzogTkZUT3JpZW50YXRpb24pOiB2b2lkO1xuICAgIGluaXRpYWxpemUoY2FtZXJhRGF0YTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBwcm9jZXNzKGltYWdlRGF0YTogSW1hZ2VEYXRhKTogdm9pZDtcbiAgICBkZXN0cm95KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBORlRFbnRpdHkgaW1wbGVtZW50cyBJTkZURW50aXR5IHtcblxuXG4gICAgcHJpdmF0ZSBfbm9kZXM6IElNZWRpYU5vZGVbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBfd29ya2VyOiB0eXBlb2YgTkZUV29ya2VyO1xuXG4gICAgcHJpdmF0ZSBfY2FtZXJhVVJMOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgb3JpZW50YXRpb25NYXRyaXg6IGFueTtcblxuICAgIHByb3RlY3RlZCBfbWFya2VyVVJMOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBJTWVkaWFOb2RlLCBtYXJrZXJVUkw6IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbWFya2VyVVJMID0gbWFya2VyVVJMO1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBuZXcgTkZUV29ya2VyKHRoaXMsIHRoaXMuX21hcmtlclVSTCwgdywgaCk7XG5cbiAgICAgICAgdGhpcy5fbm9kZXMucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdGlhbGl6ZShjYW1lcmFEYXRhOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgdGhpcy5fY2FtZXJhVVJMID0gY2FtZXJhRGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlci5pbml0aWFsaXplKHRoaXMuX2NhbWVyYVVSTCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZvdW5kKG1zZzogTkZUT3JpZW50YXRpb24pOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5vcmllbnRhdGlvbk1hdHJpeCA9IChtc2cpID8gSlNPTi5wYXJzZShtc2cubWF0cml4R0xfUkgpIDogbnVsbDtcbiAgICAgICAgdGhpcy5fbm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuZm91bmQobXNnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHByb2Nlc3MoaW1hZ2VEYXRhOiBJbWFnZURhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fd29ya2VyLnByb2Nlc3MoaW1hZ2VEYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICAvLyAgbG9vcCB0aHJvdWdoIG5vZGVzIGFuZCB1cGRhdGVcbiAgICAgICAgdGhpcy5fbm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSU1lZGlhTm9kZSB9IGZyb20gJy4uL05GVEVudGl0eSc7XG5cbmV4cG9ydCBjbGFzcyBBUkNvbnRyb2xsZXJDb21wb25lbnQgaW1wbGVtZW50cyBJTWVkaWFOb2Rle1xuXG4gICAgcHJvdGVjdGVkIHdvcmxkOiBhbnk7XG4gICAgcHJpdmF0ZSBfaGFzRm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9mcmFtZURyb3BzOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIHB1YmxpYyB1cGRhdGUoKXtcbiAgICAgICAgaWYgKCF0aGlzLndvcmxkKSB7XG4gICAgICAgICAgICB0aGlzLl9oYXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZnJhbWVEcm9wcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7fVxuICAgIH1cblxuICAgIHB1YmxpYyBmb3VuZChtc2c6IGFueSk6IHZvaWQge1xuXG4gICAgdGhpcy53b3JsZCA9IG1zZztcbiAgICB9XG59IiwiXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvU2V0dGluZ0RhdGEge1xuICAgIHdpZHRoOiBTY3JlZW5EYXRhO1xuICAgIGhlaWdodDogU2NyZWVuRGF0YTtcbiAgICBmYWNpbmdNb2RlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NyZWVuRGF0YSB7XG4gICAgbWluOiBudW1iZXI7XG4gICAgbWF4OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhbWVyYVZpZXdSZW5kZXJlciB7XG4gICAgZ2V0SGVpZ2h0KCk6IG51bWJlcjtcbiAgICBnZXRXaWR0aCgpOiBudW1iZXI7XG4gICAgZ2V0SW1hZ2UoKTogSW1hZ2VEYXRhO1xufVxuXG5leHBvcnQgY2xhc3MgQ2FtZXJhVmlld1JlbmRlcmVyIGltcGxlbWVudHMgSUNhbWVyYVZpZXdSZW5kZXJlciB7XG5cbiAgICBwcml2YXRlIGNhbnZhc19wcm9jZXNzOiBIVE1MQ2FudmFzRWxlbWVudDtcblxuICAgIHByaXZhdGUgY29udGV4dF9wcm9jZXNzOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgICBwdWJsaWMgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9mYWNpbmc6IHN0cmluZztcblxuICAgIHByaXZhdGUgdnc6IG51bWJlcjtcbiAgICBwcml2YXRlIHZoOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIHc6IG51bWJlcjtcbiAgICBwcml2YXRlIGg6IG51bWJlcjtcblxuICAgIHByaXZhdGUgcHc6IG51bWJlcjtcbiAgICBwcml2YXRlIHBoOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIG94OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBveTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNfcHJvY2VzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmNvbnRleHRfcHJvY2VzcyA9IHRoaXMuY2FudmFzX3Byb2Nlc3MuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy52aWRlbyA9IHZpZGVvO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnZ3O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJbWFnZSgpOiBJbWFnZURhdGEge1xuICAgICAgICB0aGlzLmNvbnRleHRfcHJvY2Vzcy5kcmF3SW1hZ2UodGhpcy52aWRlbywgMCwgMCwgdGhpcy52dywgdGhpcy52aCwgdGhpcy5veCwgdGhpcy5veSwgdGhpcy53LCB0aGlzLmgpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0X3Byb2Nlc3MuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMucHcsIHRoaXMucGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKHZpZGVvU2V0dGluZ3M6IFZpZGVvU2V0dGluZ0RhdGEpOiBQcm9taXNlPGJvb2xlYW4+IHtcblxuICAgICAgICB0aGlzLl9mYWNpbmcgPSB2aWRlb1NldHRpbmdzLmZhY2luZ01vZGUgfHwgJ2Vudmlyb25tZW50J1xuXG4gICAgICAgIGNvbnN0IGNvbnN0cmFpbnRzID0ge31cbiAgICAgICAgY29uc3QgbWVkaWFEZXZpY2VzQ29uc3RyYWludHMgPSB7fVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgICAgICAgICAgICAgIHZhciBoaW50OiBhbnkgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiYXVkaW9cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwidmlkZW9cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFjaW5nTW9kZTogdGhpcy5fZmFjaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHsgbWluOiA0ODAsIG1heDogNjQwIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShoaW50KS50aGVuKGFzeW5jIChzdHJlYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW8gPSBhd2FpdCBuZXcgUHJvbWlzZTxIVE1MVmlkZW9FbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvLm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiByZXNvbHZlKHRoaXMudmlkZW8pO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCh2YWx1ZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZ3ID0gdGhpcy52aWRlby52aWRlb1dpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aCA9IHRoaXMudmlkZW8udmlkZW9IZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwc2NhbGUgPSAzMjAgLyBNYXRoLm1heCh0aGlzLnZ3LCB0aGlzLnZoIC8gMyAqIDQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLncgPSB0aGlzLnZ3ICogcHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oID0gdGhpcy52aCAqIHBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHcgPSBNYXRoLm1heCh0aGlzLncsICh0aGlzLmggLyAzKSAqIDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waCA9IE1hdGgubWF4KHRoaXMuaCwgKHRoaXMudyAvIDQpICogMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm94ID0gKHRoaXMucHcgLSB0aGlzLncpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3kgPSAodGhpcy5waCAtIHRoaXMuaCkgLyAyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc19wcm9jZXNzLndpZHRoID0gdGhpcy5wdztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzX3Byb2Nlc3MuaGVpZ2h0ID0gdGhpcy5waDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0X3Byb2Nlc3MuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dF9wcm9jZXNzLmZpbGxSZWN0KDAsIDAsIHRoaXMucHcsIHRoaXMucGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKG1zZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHJlamVjdChcIk5vIG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWFcIik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiU29ycnksIFlvdXIgZGV2aWNlIGRvZXMgbm90IHN1cHBvcnQgdGhpcyBleHBlcmluY2UuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IEFSbmZ0IGZyb20gJy4vQVJuZnQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBBUm5mdFxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJcbmltcG9ydCB3b3JrZXIgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3dvcmtlci1sb2FkZXIvZGlzdC9ydW50aW1lL2lubGluZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrZXJfZm4oKSB7XG4gIHJldHVybiB3b3JrZXIoXCIvKioqKioqLyAoKCkgPT4geyAvLyB3ZWJwYWNrQm9vdHN0cmFwXFxuLyoqKioqKi8gXFx0XFxcInVzZSBzdHJpY3RcXFwiO1xcbi8qKioqKiovIFxcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcXG5cXG4vKioqLyBcXFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanNcXFwiOlxcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXFxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMgKioqIVxcbiAgXFxcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX19fd2VicGFja19tb2R1bGVfXywgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xcblxcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcXG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXFxcImRlZmF1bHRcXFwiOiAoKSA9PiAvKiBiaW5kaW5nICovIF9jbGFzc0NhbGxDaGVja1xcbi8qIGhhcm1vbnkgZXhwb3J0ICovIH0pO1xcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcXG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XFxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpO1xcbiAgfVxcbn1cXG5cXG4vKioqLyB9KSxcXG5cXG4vKioqLyBcXFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanNcXFwiOlxcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXFxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMgKioqIVxcbiAgXFxcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX19fd2VicGFja19tb2R1bGVfXywgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xcblxcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcXG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXFxcImRlZmF1bHRcXFwiOiAoKSA9PiAvKiBiaW5kaW5nICovIF9jcmVhdGVDbGFzc1xcbi8qIGhhcm1vbnkgZXhwb3J0ICovIH0pO1xcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcXG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XFxuICAgIGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XFxuICB9XFxufVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcXG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xcbn1cXG5cXG4vKioqLyB9KSxcXG5cXG4vKioqLyBcXFwiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMF0hLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvcmUvTkZUV29ya2VyLnRzXFxcIjpcXG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVswXSEuL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29yZS9ORlRXb3JrZXIudHMgKioqIVxcbiAgXFxcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcXG5cXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XFxuLyogaGFybW9ueSBleHBvcnQgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcXG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFxcXCJORlRXb3JrZXJcXFwiOiAoKSA9PiAvKiBiaW5kaW5nICovIE5GVFdvcmtlcixcXG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFxcXCJkZWZhdWx0XFxcIjogKCkgPT4gX19XRUJQQUNLX0RFRkFVTFRfRVhQT1JUX19cXG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2JhYmVsX3J1bnRpbWVfaGVscGVyc19jbGFzc0NhbGxDaGVja19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayAqLyBcXFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanNcXFwiKTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2JhYmVsX3J1bnRpbWVfaGVscGVyc19jcmVhdGVDbGFzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyAqLyBcXFwiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanNcXFwiKTtcXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgd29ya2VyX2xvYWRlcl9Xb3JrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHdvcmtlci1sb2FkZXIhLi9Xb3JrZXIgKi8gXFxcIi4vbm9kZV9tb2R1bGVzL3dvcmtlci1sb2FkZXIvZGlzdC9janMuanMhLi9zcmMvY29yZS9Xb3JrZXIudHNcXFwiKTtcXG5cXG5cXG5cXG52YXIgTkZUV29ya2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcXG4gIGZ1bmN0aW9uIE5GVFdvcmtlcihkLCBtYXJrZXJVUkwsIHcsIGgpIHtcXG4gICAgKDAsX2JhYmVsX3J1bnRpbWVfaGVscGVyc19jbGFzc0NhbGxDaGVja19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fLmRlZmF1bHQpKHRoaXMsIE5GVFdvcmtlcik7XFxuXFxuICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcXG4gICAgdGhpcy5fZGlzcGF0Y2hlciA9IGQ7XFxuICAgIHRoaXMubWFya2VyVVJMID0gbWFya2VyVVJMO1xcbiAgICB0aGlzLnZ3ID0gdztcXG4gICAgdGhpcy52aCA9IGg7XFxuICB9XFxuXFxuICAoMCxfYmFiZWxfcnVudGltZV9oZWxwZXJzX2NyZWF0ZUNsYXNzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18uZGVmYXVsdCkoTkZUV29ya2VyLCBbe1xcbiAgICBrZXk6IFxcXCJpbml0aWFsaXplXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRpYWxpemUoY2FtZXJhVVJMKSB7XFxuICAgICAgdmFyIF90aGlzID0gdGhpcztcXG5cXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xcbiAgICAgICAgX3RoaXMud29ya2VyID0gbmV3IHdvcmtlcl9sb2FkZXJfV29ya2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18uZGVmYXVsdCgpO1xcblxcbiAgICAgICAgX3RoaXMubG9hZChjYW1lcmFVUkwpLnRoZW4oZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xcbiAgICAgICAgfSk7XFxuICAgICAgfSk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwicHJvY2Vzc1xcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9jZXNzKGltYWdlRGF0YSkge1xcbiAgICAgIGlmICh0aGlzLl9wcm9jZXNzaW5nKSB7XFxuICAgICAgICByZXR1cm47XFxuICAgICAgfVxcblxcbiAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSB0cnVlO1xcbiAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHtcXG4gICAgICAgIHR5cGU6ICdwcm9jZXNzJyxcXG4gICAgICAgIGltYWdlZGF0YTogaW1hZ2VEYXRhXFxuICAgICAgfSk7XFxuICAgIH1cXG4gIH0sIHtcXG4gICAga2V5OiBcXFwibG9hZFxcXCIsXFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKGNhbWVyYVVSTCkge1xcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xcblxcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XFxuICAgICAgICB2YXIgcHNjYWxlID0gMzIwIC8gTWF0aC5tYXgoX3RoaXMyLnZ3LCBfdGhpczIudmggLyAzICogNCk7XFxuICAgICAgICB2YXIgdyA9IF90aGlzMi52dyAqIHBzY2FsZTtcXG4gICAgICAgIHZhciBoID0gX3RoaXMyLnZoICogcHNjYWxlO1xcbiAgICAgICAgdmFyIHB3ID0gTWF0aC5tYXgodywgaCAvIDMgKiA0KTtcXG4gICAgICAgIHZhciBwaCA9IE1hdGgubWF4KGgsIHcgLyA0ICogMyk7XFxuXFxuICAgICAgICBfdGhpczIud29ya2VyLnBvc3RNZXNzYWdlKHtcXG4gICAgICAgICAgdHlwZTogJ2xvYWQnLFxcbiAgICAgICAgICBwdzogcHcsXFxuICAgICAgICAgIHBoOiBwaCxcXG4gICAgICAgICAgY2FtZXJhX3BhcmE6IGNhbWVyYVVSTCxcXG4gICAgICAgICAgbWFya2VyOiBfdGhpczIubWFya2VyVVJMXFxuICAgICAgICB9KTtcXG5cXG4gICAgICAgIF90aGlzMi53b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2KSB7XFxuICAgICAgICAgIHZhciBtc2cgPSBldi5kYXRhO1xcblxcbiAgICAgICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XFxuICAgICAgICAgICAgY2FzZSAnbG9hZGVkJzpcXG4gICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgdmFyIHByb2ogPSBKU09OLnBhcnNlKG1zZy5wcm9qKTtcXG4gICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgY2FzZSBcXFwiZW5kTG9hZGluZ1xcXCI6XFxuICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgIGlmIChtc2cuZW5kID09IHRydWUpIHJlc29sdmUodHJ1ZSk7XFxuICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIF90aGlzMi5fcHJvY2Vzc2luZyA9IGZhbHNlO1xcbiAgICAgICAgfTtcXG4gICAgICB9KTtcXG4gICAgfVxcbiAgfSwge1xcbiAgICBrZXk6IFxcXCJkZXN0cm95XFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7fVxcbiAgfV0pO1xcblxcbiAgcmV0dXJuIE5GVFdvcmtlcjtcXG59KCk7XFxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBjb25zdCBfX1dFQlBBQ0tfREVGQVVMVF9FWFBPUlRfXyA9IChudWxsKTtcXG5cXG4vKioqLyB9KSxcXG5cXG4vKioqLyBcXFwiLi9ub2RlX21vZHVsZXMvd29ya2VyLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9jb3JlL1dvcmtlci50c1xcXCI6XFxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3dvcmtlci1sb2FkZXIvZGlzdC9janMuanMhLi9zcmMvY29yZS9Xb3JrZXIudHMgKioqIVxcbiAgXFxcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XFxuXFxuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XFxuLyogaGFybW9ueSBleHBvcnQgKi8gICBcXFwiZGVmYXVsdFxcXCI6ICgpID0+IC8qIGJpbmRpbmcgKi8gV29ya2VyX2ZuXFxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XFxuZnVuY3Rpb24gV29ya2VyX2ZuKCkge1xcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXFxcIkFSbmZ0Lndvcmtlci53b3JrZXIuanNcXFwiKTtcXG59XFxuXFxuXFxuLyoqKi8gfSlcXG5cXG4vKioqKioqLyBcXHR9KTtcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKiovIFxcdC8vIFRoZSBtb2R1bGUgY2FjaGVcXG4vKioqKioqLyBcXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XFxuLyoqKioqKi8gXFx0XFxuLyoqKioqKi8gXFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cXG4vKioqKioqLyBcXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XFxuLyoqKioqKi8gXFx0XFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXFxuLyoqKioqKi8gXFx0XFx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xcbi8qKioqKiovIFxcdFxcdFxcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XFxuLyoqKioqKi8gXFx0XFx0fVxcbi8qKioqKiovIFxcdFxcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXFxuLyoqKioqKi8gXFx0XFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XFxuLyoqKioqKi8gXFx0XFx0XFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxcbi8qKioqKiovIFxcdFxcdFxcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXFxuLyoqKioqKi8gXFx0XFx0XFx0ZXhwb3J0czoge31cXG4vKioqKioqLyBcXHRcXHR9O1xcbi8qKioqKiovIFxcdFxcbi8qKioqKiovIFxcdFxcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxcbi8qKioqKiovIFxcdFxcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xcbi8qKioqKiovIFxcdFxcbi8qKioqKiovIFxcdFxcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXFxuLyoqKioqKi8gXFx0XFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xcbi8qKioqKiovIFxcdH1cXG4vKioqKioqLyBcXHRcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKiovIFxcdC8qIHdlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyAqL1xcbi8qKioqKiovIFxcdCgoKSA9PiB7XFxuLyoqKioqKi8gXFx0XFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xcbi8qKioqKiovIFxcdFxcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XFxuLyoqKioqKi8gXFx0XFx0XFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xcbi8qKioqKiovIFxcdFxcdFxcdFxcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xcbi8qKioqKiovIFxcdFxcdFxcdFxcdFxcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XFxuLyoqKioqKi8gXFx0XFx0XFx0XFx0fVxcbi8qKioqKiovIFxcdFxcdFxcdH1cXG4vKioqKioqLyBcXHRcXHR9O1xcbi8qKioqKiovIFxcdH0pKCk7XFxuLyoqKioqKi8gXFx0XFxuLyoqKioqKi8gXFx0Lyogd2VicGFjay9ydW50aW1lL2dsb2JhbCAqL1xcbi8qKioqKiovIFxcdCgoKSA9PiB7XFxuLyoqKioqKi8gXFx0XFx0X193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xcbi8qKioqKiovIFxcdFxcdFxcdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xcbi8qKioqKiovIFxcdFxcdFxcdHRyeSB7XFxuLyoqKioqKi8gXFx0XFx0XFx0XFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XFxuLyoqKioqKi8gXFx0XFx0XFx0fSBjYXRjaCAoZSkge1xcbi8qKioqKiovIFxcdFxcdFxcdFxcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcXG4vKioqKioqLyBcXHRcXHRcXHR9XFxuLyoqKioqKi8gXFx0XFx0fSkoKTtcXG4vKioqKioqLyBcXHR9KSgpO1xcbi8qKioqKiovIFxcdFxcbi8qKioqKiovIFxcdC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cXG4vKioqKioqLyBcXHQoKCkgPT4ge1xcbi8qKioqKiovIFxcdFxcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApXFxuLyoqKioqKi8gXFx0fSkoKTtcXG4vKioqKioqLyBcXHRcXG4vKioqKioqLyBcXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0ICovXFxuLyoqKioqKi8gXFx0KCgpID0+IHtcXG4vKioqKioqLyBcXHRcXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXFxuLyoqKioqKi8gXFx0XFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcXG4vKioqKioqLyBcXHRcXHRcXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcXG4vKioqKioqLyBcXHRcXHRcXHRcXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcXG4vKioqKioqLyBcXHRcXHRcXHR9XFxuLyoqKioqKi8gXFx0XFx0XFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcXG4vKioqKioqLyBcXHRcXHR9O1xcbi8qKioqKiovIFxcdH0pKCk7XFxuLyoqKioqKi8gXFx0XFxuLyoqKioqKi8gXFx0Lyogd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGggKi9cXG4vKioqKioqLyBcXHQoKCkgPT4ge1xcbi8qKioqKiovIFxcdFxcdHZhciBzY3JpcHRVcmw7XFxuLyoqKioqKi8gXFx0XFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcXFwiXFxcIjtcXG4vKioqKioqLyBcXHRcXHR2YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XFxuLyoqKioqKi8gXFx0XFx0aWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcXG4vKioqKioqLyBcXHRcXHRcXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcXG4vKioqKioqLyBcXHRcXHRcXHRcXHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xcbi8qKioqKiovIFxcdFxcdFxcdGlmICghc2NyaXB0VXJsKSB7XFxuLyoqKioqKi8gXFx0XFx0XFx0XFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcXFwic2NyaXB0XFxcIik7XFxuLyoqKioqKi8gXFx0XFx0XFx0XFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcXG4vKioqKioqLyBcXHRcXHRcXHR9XFxuLyoqKioqKi8gXFx0XFx0fVxcbi8qKioqKiovIFxcdFxcdC8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cXG4vKioqKioqLyBcXHRcXHQvLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXFxcIlxcXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cXG4vKioqKioqLyBcXHRcXHRpZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFxcXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclxcXCIpO1xcbi8qKioqKiovIFxcdFxcdHNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXFxcIlxcXCIpLnJlcGxhY2UoL1xcXFw/LiokLywgXFxcIlxcXCIpLnJlcGxhY2UoL1xcXFwvW15cXFxcL10rJC8sIFxcXCIvXFxcIik7XFxuLyoqKioqKi8gXFx0XFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsO1xcbi8qKioqKiovIFxcdH0pKCk7XFxuLyoqKioqKi8gXFx0XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqLyBcXHQvLyBzdGFydHVwXFxuLyoqKioqKi8gXFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGVcXG4vKioqKioqLyBcXHRfX3dlYnBhY2tfcmVxdWlyZV9fKFxcXCIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVswXSEuL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29yZS9ORlRXb3JrZXIudHNcXFwiKTtcXG4vKioqKioqLyBcXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXFxuLyoqKioqKi8gfSkoKVxcbjtcXG5cIiwgXCJXb3JrZXJcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiwgbm8tdXNlLWJlZm9yZS1kZWZpbmUsIG5ldy1jYXAgKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNvbnRlbnQsIHdvcmtlckNvbnN0cnVjdG9yLCB3b3JrZXJPcHRpb25zLCB1cmwpIHtcbiAgdmFyIGdsb2JhbFNjb3BlID0gc2VsZiB8fCB3aW5kb3c7XG5cbiAgdHJ5IHtcbiAgICB0cnkge1xuICAgICAgdmFyIGJsb2I7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIE5ldyBBUElcbiAgICAgICAgYmxvYiA9IG5ldyBnbG9iYWxTY29wZS5CbG9iKFtjb250ZW50XSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEJsb2JCdWlsZGVyID0gRGVwcmVjYXRlZCwgYnV0IHdpZGVseSBpbXBsZW1lbnRlZFxuICAgICAgICB2YXIgQmxvYkJ1aWxkZXIgPSBnbG9iYWxTY29wZS5CbG9iQnVpbGRlciB8fCBnbG9iYWxTY29wZS5XZWJLaXRCbG9iQnVpbGRlciB8fCBnbG9iYWxTY29wZS5Nb3pCbG9iQnVpbGRlciB8fCBnbG9iYWxTY29wZS5NU0Jsb2JCdWlsZGVyO1xuICAgICAgICBibG9iID0gbmV3IEJsb2JCdWlsZGVyKCk7XG4gICAgICAgIGJsb2IuYXBwZW5kKGNvbnRlbnQpO1xuICAgICAgICBibG9iID0gYmxvYi5nZXRCbG9iKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBVUkwgPSBnbG9iYWxTY29wZS5VUkwgfHwgZ2xvYmFsU2NvcGUud2Via2l0VVJMO1xuICAgICAgdmFyIG9iamVjdFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICB2YXIgd29ya2VyID0gbmV3IGdsb2JhbFNjb3BlW3dvcmtlckNvbnN0cnVjdG9yXShvYmplY3RVUkwsIHdvcmtlck9wdGlvbnMpO1xuICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChvYmplY3RVUkwpO1xuICAgICAgcmV0dXJuIHdvcmtlcjtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV3IGdsb2JhbFNjb3BlW3dvcmtlckNvbnN0cnVjdG9yXShcImRhdGE6YXBwbGljYXRpb24vamF2YXNjcmlwdCxcIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KGNvbnRlbnQpKSwgd29ya2VyT3B0aW9ucyk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHRocm93IEVycm9yKFwiSW5saW5lIHdvcmtlciBpcyBub3Qgc3VwcG9ydGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgZ2xvYmFsU2NvcGVbd29ya2VyQ29uc3RydWN0b3JdKHVybCwgd29ya2VyT3B0aW9ucyk7XG4gIH1cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==