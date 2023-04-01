(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"));
	else if(typeof define === 'function' && define.amd)
		define(["three"], factory);
	else if(typeof exports === 'object')
		exports["ARnftThreejs"] = factory(require("three"));
	else
		root["ARnftThreejs"] = factory(root["THREE"]);
})(this, (__WEBPACK_EXTERNAL_MODULE_three__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SceneRendererTJS.ts":
/*!*********************************!*\
  !*** ./src/SceneRendererTJS.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SceneRendererTJS)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.ts");





var SceneRendererTJS = /*#__PURE__*/function () {
  function SceneRendererTJS(configData, canvasDraw, uuid, cameraBool) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SceneRendererTJS);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "canvas_draw", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "camera", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "configData", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "renderer", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "uuid", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "root", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "target", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "scene", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "version", void 0);
    this.configData = configData;
    this.uuid = uuid;
    this.target = window || __webpack_require__.g;
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({
      canvas: canvasDraw,
      context: configData.renderer.context,
      alpha: configData.renderer.alpha,
      premultipliedAlpha: configData.renderer.premultipliedAlpha,
      antialias: configData.renderer.antialias,
      stencil: configData.renderer.stencil,
      precision: configData.renderer.precision,
      depth: configData.renderer.depth,
      logarithmicDepthBuffer: configData.renderer.logarithmicDepthBuffer
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();
    SceneRendererTJS.globalScene = this.scene;
    if (cameraBool === true) {
      this.camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(configData.camera.fov, configData.camera.ratio, configData.camera.near, configData.camera.far);
    } else {
      this.camera = new three__WEBPACK_IMPORTED_MODULE_3__.Camera();
    }
    this.version = "0.4.7";
    console.log("ARnftThreejs version: ", this.version);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SceneRendererTJS, [{
    key: "initRenderer",
    value: function initRenderer() {
      var _this = this;
      this.camera.matrixAutoUpdate = false;
      this.target.addEventListener("getProjectionMatrix", function (ev) {
        _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(_this.camera.projectionMatrix, ev.detail.proj);
      });
      this.scene.add(this.camera);
      var light = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff);
      this.scene.add(light);
      this.target.addEventListener("getWindowSize", function (_ev) {
        _this.renderer.setSize(_ev.detail.sw, _ev.detail.sh);
      });
      var setInitRendererEvent = new CustomEvent("onInitThreejsRendering", {
        detail: {
          renderer: this.renderer,
          scene: this.scene,
          camera: this.camera
        }
      });
      this.target.dispatchEvent(setInitRendererEvent);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: "getRenderer",
    value: function getRenderer() {
      return this.renderer;
    }
  }, {
    key: "getScene",
    value: function getScene() {
      return this.scene;
    }
  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }
  }, {
    key: "setRenderer",
    value: function setRenderer(renderer) {
      this.renderer = renderer;
    }
  }, {
    key: "setScene",
    value: function setScene(scene) {
      this.scene = scene;
    }
  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
    }
  }], [{
    key: "getGlobalScene",
    value: function getGlobalScene() {
      return SceneRendererTJS.globalScene;
    }
  }]);
  return SceneRendererTJS;
}();
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(SceneRendererTJS, "globalScene", void 0);


/***/ }),

/***/ "./src/filters/ARnftFilter.ts":
/*!************************************!*\
  !*** ./src/filters/ARnftFilter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARnftFilter": () => (/* binding */ ARnftFilter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _OneEuroFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OneEuroFilter */ "./src/filters/OneEuroFilter.ts");
/* harmony import */ var _DelayableSignalFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DelayableSignalFilter */ "./src/filters/DelayableSignalFilter.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_5__);






var ARnftFilter = /*#__PURE__*/function () {
  function ARnftFilter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ARnftFilter);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "delayExitCheck", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "delayEnterCheck", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_hasFound", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_lastTranslation", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_frameDrops", 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_deltaAccuracy", 10);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_positionFilter", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_rotationFilter", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "filterFrequency", 30.0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "filterMinCutoff", 1.0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "filterBeta", 0.0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "filterDcutoff", 1.0);
    this.delayEnterCheck = new _DelayableSignalFilter__WEBPACK_IMPORTED_MODULE_4__.DelayableSignalFilter(2);
    this.delayExitCheck = new _DelayableSignalFilter__WEBPACK_IMPORTED_MODULE_4__.DelayableSignalFilter(0);
    this._positionFilter = new _OneEuroFilter__WEBPACK_IMPORTED_MODULE_3__.OneEuroFilterVector3(this.filterFrequency);
    this._rotationFilter = new _OneEuroFilter__WEBPACK_IMPORTED_MODULE_3__.OneEuroFilterVector3(this.filterFrequency * 2);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ARnftFilter, [{
    key: "update",
    value: function update(world) {
      var pos = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3();
      var rotationVec = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3();
      var scale = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3();
      if (!world) {
        this._hasFound = false;
        this._frameDrops = 0;
      } else {
        var matrixW = new three__WEBPACK_IMPORTED_MODULE_5__.Matrix4();
        var worldMatrix = matrixW.fromArray(this.getArrayMatrix(world));
        if (!this._hasFound) {
          this._hasFound = true;
          var vecTrans = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3();
          this._lastTranslation = vecTrans.setFromMatrixPosition(worldMatrix);
        } else {
          var _vecTrans = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3();
          var _currentTranslation = _vecTrans.setFromMatrixPosition(worldMatrix);
          if (Math.abs(_currentTranslation.distanceTo(this._lastTranslation)) > this._deltaAccuracy) {
            this._frameDrops += 1;
            if (this._frameDrops > 3) {
              this._lastTranslation = _currentTranslation;
            }
            return [pos, rotationVec, scale];
          }
          this._frameDrops = 0;
          this._lastTranslation = _currentTranslation;
        }
        this._positionFilter.UpdateParams(this.filterFrequency, this.filterMinCutoff, this.filterBeta, this.filterDcutoff);
        this._rotationFilter.UpdateParams(this.filterFrequency * 2, this.filterMinCutoff, this.filterBeta, this.filterDcutoff);
        var matrix = new three__WEBPACK_IMPORTED_MODULE_5__.Matrix4();
        matrix = worldMatrix;
        var rotation = new three__WEBPACK_IMPORTED_MODULE_5__.Quaternion();
        var eulerRot = new three__WEBPACK_IMPORTED_MODULE_5__.Euler();
        var position = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 0, 0);
        worldMatrix.decompose(position, rotation, scale);
        var eRot = eulerRot.setFromQuaternion(rotation);
        var eulerToVector3 = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3();
        rotationVec = this._rotationFilter.Filter(eulerToVector3.setFromEuler(eRot));
        pos = this._positionFilter.Filter(position);
      }
      return [pos, rotationVec, scale];
    }
  }, {
    key: "getArrayMatrix",
    value: function getArrayMatrix(value) {
      var array = [];
      for (var key in value) {
        array[key] = value[key];
      }
      return array;
    }
  }]);
  return ARnftFilter;
}();

/***/ }),

/***/ "./src/filters/DelayableSignalFilter.ts":
/*!**********************************************!*\
  !*** ./src/filters/DelayableSignalFilter.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DelayableSignalFilter": () => (/* binding */ DelayableSignalFilter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");




var DelayableSignalFilter = /*#__PURE__*/function () {
  function DelayableSignalFilter(timeOut) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DelayableSignalFilter);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_inDelay", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_totalTime", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_prevTime", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_timeOut", void 0);
    this._timeOut = timeOut;
    this._inDelay = false;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DelayableSignalFilter, [{
    key: "Update",
    value: function Update(tick) {
      var time = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_3__.getTime)();
      if (!this._inDelay) {
        this._prevTime = time;
        this._totalTime = 0;
      }
      this._totalTime += time - this._prevTime;
      if (this._inDelay && this._totalTime > this._timeOut) {
        this._inDelay = false;
        return true;
      }
      if (tick) {
        this._inDelay = true;
        return false;
      }
      this._inDelay = false;
      return false;
    }
  }]);
  return DelayableSignalFilter;
}();

/***/ }),

/***/ "./src/filters/OneEuroFilter.ts":
/*!**************************************!*\
  !*** ./src/filters/OneEuroFilter.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneEuroFilterVector3": () => (/* binding */ OneEuroFilterVector3),
/* harmony export */   "default": () => (/* binding */ OneEuroFilter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_3__);




var LowPassFilter = /*#__PURE__*/function () {
  function LowPassFilter(alpha) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LowPassFilter);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "y", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "s", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "alpha", 0);
    this.setAlpha(alpha);
    this.y = null;
    this.s = null;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LowPassFilter, [{
    key: "setAlpha",
    value: function setAlpha(alpha) {
      if (alpha <= 0 || alpha > 1.0) {
        throw new Error();
      }
      this.alpha = alpha;
    }
  }, {
    key: "filter",
    value: function filter(value, timestamp, alpha) {
      if (alpha) {
        this.setAlpha(alpha);
      }
      var s;
      if (!this.y) {
        s = value;
      } else {
        s = this.alpha * value + (1.0 - this.alpha) * this.s;
      }
      this.y = value;
      this.s = s;
      return s;
    }
  }, {
    key: "lastValue",
    value: function lastValue() {
      return this.y;
    }
  }]);
  return LowPassFilter;
}();
var OneEuroFilter = /*#__PURE__*/function () {
  function OneEuroFilter(freq) {
    var minCutOff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
    var beta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0;
    var dCutOff = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OneEuroFilter);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "freq", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "minCutOff", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "beta", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dCutOff", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "x", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dx", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "lasttime", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "currValue", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "prevValue", void 0);
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
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OneEuroFilter, [{
    key: "alpha",
    value: function alpha(cutOff) {
      var te = 1.0 / this.freq;
      var tau = 1.0 / (2 * Math.PI * cutOff);
      return 1.0 / (1.0 + tau / te);
    }
  }, {
    key: "UpdateParams",
    value: function UpdateParams(_freq) {
      var _mincutoff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
      var _beta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var _dcutoff = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      this.freq = _freq;
      this.minCutOff = _mincutoff;
      this.beta = _beta;
      this.dCutOff = _dcutoff;
      this.x.setAlpha(this.alpha(this.minCutOff));
      this.dx.setAlpha(this.alpha(this.dCutOff));
    }
  }, {
    key: "Filter",
    value: function Filter(x) {
      var timestamp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.prevValue = this.currValue;
      if (this.lasttime && timestamp) {
        this.freq = 1.0 / (timestamp - this.lasttime);
      }
      this.lasttime = timestamp;
      var prevX = this.x.lastValue();
      var dx = !prevX ? 0.0 : (x - prevX) * this.freq;
      var edx = this.dx.filter(dx, timestamp, this.alpha(this.dCutOff));
      var cutOff = this.minCutOff + this.beta * Math.abs(edx);
      return this.currValue = this.x.filter(x, timestamp, this.alpha(cutOff));
    }
  }]);
  return OneEuroFilter;
}();

var OneEuroFilterVector3 = /*#__PURE__*/function () {
  function OneEuroFilterVector3(_freq) {
    var _mincutoff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var _beta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var _dcutoff = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OneEuroFilterVector3);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "oneEuroFilters", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_freq", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_beta", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_dcutoff", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_mincutoff", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "currValue", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "prevValue", void 0);
    this.currValue = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
    this.prevValue = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
    this._freq = _freq;
    this._mincutoff = _mincutoff;
    this._beta = _beta;
    this._dcutoff = _dcutoff;
    this.oneEuroFilters = [];
    this.oneEuroFilters.push(new OneEuroFilter(_freq, _mincutoff, _beta, _dcutoff));
    this.oneEuroFilters.push(new OneEuroFilter(_freq, _mincutoff, _beta, _dcutoff));
    this.oneEuroFilters.push(new OneEuroFilter(_freq, _mincutoff, _beta, _dcutoff));
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OneEuroFilterVector3, [{
    key: "freq",
    get: function get() {
      return this._freq;
    }
  }, {
    key: "beta",
    get: function get() {
      return this._beta;
    }
  }, {
    key: "dcutoff",
    get: function get() {
      return this._dcutoff;
    }
  }, {
    key: "mincutoff_1",
    get: function get() {
      return this._mincutoff;
    }
  }, {
    key: "UpdateParams",
    value: function UpdateParams(_freq) {
      var _mincutoff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
      var _beta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var _dcutoff = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      this._freq = _freq;
      this._mincutoff = _mincutoff;
      this._beta = _beta;
      this._dcutoff = _dcutoff;
      for (var i = 0; i < this.oneEuroFilters.length; i++) this.oneEuroFilters[i].UpdateParams(this._freq, this._mincutoff, this._beta, this._dcutoff);
    }
  }, {
    key: "Filter",
    value: function Filter(_value) {
      var timestamp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1.0;
      this.prevValue = this.currValue;
      var out = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
      var output = out.toArray();
      var input = _value.toArray();
      this.oneEuroFilters.forEach(function (filters, idx) {
        output[idx] = filters.Filter(input[idx], timestamp);
      });
      var arr = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
      return this.currValue = arr.fromArray(output);
    }
  }]);
  return OneEuroFilterVector3;
}();

/***/ }),

/***/ "./src/markermedia/NFTaddTJS.ts":
/*!**************************************!*\
  !*** ./src/markermedia/NFTaddTJS.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NFTaddTJS)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _filters_ARnftFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filters/ARnftFilter */ "./src/filters/ARnftFilter.ts");
/* harmony import */ var _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SceneRendererTJS */ "./src/SceneRendererTJS.ts");








var NFTaddTJS = /*#__PURE__*/function () {
  function NFTaddTJS(uuid) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NFTaddTJS);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "entities", []);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "names", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "scene", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "target", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "uuid", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_filter", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_oef", void 0);
    this.scene = _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_6__["default"].getGlobalScene();
    this.target = window || __webpack_require__.g;
    this.uuid = uuid;
    this.names = [];
    this._filter = new _filters_ARnftFilter__WEBPACK_IMPORTED_MODULE_5__.ARnftFilter();
    this._oef = false;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NFTaddTJS, [{
    key: "add",
    value: function add(mesh, name, objVisibility) {
      this.target.addEventListener("getNFTData-" + this.uuid + "-" + name, function (ev) {
        var msg = ev.detail;
        mesh.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
        mesh.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
      });
      var root = new three__WEBPACK_IMPORTED_MODULE_3__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      root.add(mesh);
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        console.log(ev.detail);
        root.visible = true;
        mesh.visible = true;
        root.matrixAutoUpdate = false;
        _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, ev.detail.matrixGL_RH);
      });
      this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + name, function (ev) {
        root.visible = objVisibility;
        mesh.visible = objVisibility;
      });
      this.names.push(name);
      this.entities.push({
        name: name
      });
    }
  }, {
    key: "addModel",
    value: function addModel(url, name, scale, objVisibility) {
      var _this = this;
      var root = new three__WEBPACK_IMPORTED_MODULE_3__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      var model;
      var threeGLTFLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_7__.GLTFLoader();
      threeGLTFLoader.load(url, function (gltf) {
        model = gltf.scene;
        model.scale.set(scale, scale, scale);
        model.rotation.x = Math.PI / 2;
        _this.target.addEventListener("getNFTData-" + _this.uuid + "-" + name, function (ev) {
          var msg = ev.detail;
          model.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
          model.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
        });
        root.add(model);
      });
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        root.visible = true;
        model.visible = true;
        if (_this._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0)];
          filter = _this._filter.update(ev.detail.matrixGL_RH);
          root.position.setX(filter[0].x);
          root.position.setY(filter[0].y);
          root.position.setZ(filter[0].z);
          root.rotation.setFromVector3(filter[1]);
          root.scale.setX(filter[2].x);
          root.scale.setY(filter[2].y);
          root.scale.setZ(filter[2].z);
        } else {
          root.matrixAutoUpdate = false;
          var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
          _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
        }
      });
      this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + name, function (ev) {
        root.visible = objVisibility;
        model.visible = objVisibility;
      });
      this.names.push(name);
    }
  }, {
    key: "addModelWithCallback",
    value: function addModelWithCallback(url, name, callback, objVisibility) {
      var _this2 = this;
      var root = new three__WEBPACK_IMPORTED_MODULE_3__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      var model;
      var threeGLTFLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_7__.GLTFLoader();
      threeGLTFLoader.load(url, function (gltf) {
        model = gltf.scene;
        _this2.target.addEventListener("getNFTData-" + _this2.uuid + "-" + name, function (ev) {
          var msg = ev.detail;
          model.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
          model.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
        });
        callback(gltf);
        root.add(model);
      });
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        root.visible = true;
        model.visible = true;
        if (_this2._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0)];
          filter = _this2._filter.update(ev.detail.matrixGL_RH);
          root.position.setX(filter[0].x);
          root.position.setY(filter[0].y);
          root.position.setZ(filter[0].z);
          root.rotation.setFromVector3(filter[1]);
          root.scale.setX(filter[2].x);
          root.scale.setY(filter[2].y);
          root.scale.setZ(filter[2].z);
        } else {
          root.matrixAutoUpdate = false;
          var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
          _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
        }
      });
      this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + name, function (ev) {
        root.visible = objVisibility;
        model.visible = objVisibility;
      });
      this.names.push(name);
    }
  }, {
    key: "addImage",
    value: function addImage(imageUrl, name, color, scale, configs, objVisibility) {
      var _this3 = this;
      var root = new three__WEBPACK_IMPORTED_MODULE_3__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      var planeGeom = new three__WEBPACK_IMPORTED_MODULE_3__.PlaneGeometry(configs.w, configs.h, configs.ws, configs.hs);
      var texture = new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader().load(imageUrl);
      var material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshStandardMaterial({
        color: color,
        map: texture
      });
      var plane = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(planeGeom, material);
      plane.scale.set(scale, scale, scale);
      this.target.addEventListener("getNFTData-" + this.uuid + "-" + name, function (ev) {
        var msg = ev.detail;
        plane.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
        plane.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
      });
      root.add(plane);
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        root.visible = true;
        plane.visible = true;
        if (_this3._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0)];
          filter = _this3._filter.update(ev.detail.matrixGL_RH);
          root.position.setX(filter[0].x);
          root.position.setY(filter[0].y);
          root.position.setZ(filter[0].z);
          root.rotation.setFromVector3(filter[1]);
          root.scale.setX(filter[2].x);
          root.scale.setY(filter[2].y);
          root.scale.setZ(filter[2].z);
        } else {
          root.matrixAutoUpdate = false;
          var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
          _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
        }
      });
      this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + name, function (ev) {
        root.visible = objVisibility;
        plane.visible = objVisibility;
      });
      this.names.push(name);
    }
  }, {
    key: "addVideo",
    value: function addVideo(id, name, scale, configs, objVisibility) {
      var _this4 = this;
      var root = new three__WEBPACK_IMPORTED_MODULE_3__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      var ARVideo = document.getElementById(id);
      var texture = new three__WEBPACK_IMPORTED_MODULE_3__.VideoTexture(ARVideo);
      var mat = new three__WEBPACK_IMPORTED_MODULE_3__.MeshStandardMaterial({
        color: 0xbbbbff,
        map: texture
      });
      var planeGeom = new three__WEBPACK_IMPORTED_MODULE_3__.PlaneGeometry(configs.w, configs.h, configs.ws, configs.hs);
      var plane = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(planeGeom, mat);
      plane.scale.set(scale, scale, scale);
      this.target.addEventListener("getNFTData-" + this.uuid + "-" + name, function (ev) {
        var msg = ev.detail;
        plane.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
        plane.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
      });
      root.add(plane);
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        ARVideo.play();
        root.visible = true;
        plane.visible = true;
        if (_this4._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0)];
          filter = _this4._filter.update(ev.detail.matrixGL_RH);
          root.position.setX(filter[0].x);
          root.position.setY(filter[0].y);
          root.position.setZ(filter[0].z);
          root.rotation.setFromVector3(filter[1]);
          root.scale.setX(filter[2].x);
          root.scale.setY(filter[2].y);
          root.scale.setZ(filter[2].z);
        } else {
          root.matrixAutoUpdate = false;
          var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.interpolate(ev.detail.matrixGL_RH);
          _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
        }
      });
      this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + name, function (ev) {
        root.visible = objVisibility;
        plane.visible = objVisibility;
        ARVideo.pause();
      });
      this.names.push(name);
    }
  }, {
    key: "getNames",
    value: function getNames() {
      return this.names;
    }
  }, {
    key: "oef",
    get: function get() {
      return this._oef;
    },
    set: function set(enable) {
      this._oef = enable;
    }
  }]);
  return NFTaddTJS;
}();


/***/ }),

/***/ "./src/utils/Utils.ts":
/*!****************************!*\
  !*** ./src/utils/Utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils),
/* harmony export */   "getTime": () => (/* binding */ getTime)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function getTime() {
  return Math.floor(Date.now() / 1000);
}
var Utils = /*#__PURE__*/function () {
  function Utils() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Utils);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Utils, null, [{
    key: "interpolate",
    value: function interpolate(world) {
      var interpolationFactor = 24;
      for (var i = 0; i < 16; i++) {
        this.trackedMatrix.delta[i] = world[i] - this.trackedMatrix.interpolated[i];
        this.trackedMatrix.interpolated[i] = this.trackedMatrix.interpolated[i] + this.trackedMatrix.delta[i] / interpolationFactor;
      }
      return this.trackedMatrix.interpolated;
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return /Android|mobile|iPad|iPhone/i.test(navigator.userAgent);
    }
  }, {
    key: "setMatrix",
    value: function setMatrix(matrix, value) {
      var array = [];
      for (var key in value) {
        array[key] = value[key];
      }
      if (typeof matrix.elements.set === "function") {
        matrix.elements.set(array);
      } else {
        matrix.elements = [].slice.call(array);
      }
    }
  }]);
  return Utils;
}();
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Utils, "trackedMatrix", {
  delta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  interpolated: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
});

/***/ }),

/***/ "three":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"three","commonjs2":"three","amd":"three","root":"THREE"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_three__;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js":
/*!***************************************************************!*\
  !*** ./node_modules/three/examples/jsm/loaders/GLTFLoader.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLTFLoader": () => (/* binding */ GLTFLoader)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var _utils_BufferGeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/BufferGeometryUtils.js */ "./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js");



class GLTFLoader extends three__WEBPACK_IMPORTED_MODULE_0__.Loader {

	constructor( manager ) {

		super( manager );

		this.dracoLoader = null;
		this.ktx2Loader = null;
		this.meshoptDecoder = null;

		this.pluginCallbacks = [];

		this.register( function ( parser ) {

			return new GLTFMaterialsClearcoatExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFTextureBasisUExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFTextureWebPExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMaterialsSheenExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMaterialsTransmissionExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMaterialsVolumeExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMaterialsIorExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMaterialsEmissiveStrengthExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMaterialsSpecularExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMaterialsIridescenceExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFLightsExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMeshoptCompression( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMeshGpuInstancing( parser );

		} );

	}

	load( url, onLoad, onProgress, onError ) {

		const scope = this;

		let resourcePath;

		if ( this.resourcePath !== '' ) {

			resourcePath = this.resourcePath;

		} else if ( this.path !== '' ) {

			resourcePath = this.path;

		} else {

			resourcePath = three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.extractUrlBase( url );

		}

		// Tells the LoadingManager to track an extra item, which resolves after
		// the model is fully loaded. This means the count of items loaded will
		// be incorrect, but ensures manager.onLoad() does not fire early.
		this.manager.itemStart( url );

		const _onError = function ( e ) {

			if ( onError ) {

				onError( e );

			} else {

				console.error( e );

			}

			scope.manager.itemError( url );
			scope.manager.itemEnd( url );

		};

		const loader = new three__WEBPACK_IMPORTED_MODULE_0__.FileLoader( this.manager );

		loader.setPath( this.path );
		loader.setResponseType( 'arraybuffer' );
		loader.setRequestHeader( this.requestHeader );
		loader.setWithCredentials( this.withCredentials );

		loader.load( url, function ( data ) {

			try {

				scope.parse( data, resourcePath, function ( gltf ) {

					onLoad( gltf );

					scope.manager.itemEnd( url );

				}, _onError );

			} catch ( e ) {

				_onError( e );

			}

		}, onProgress, _onError );

	}

	setDRACOLoader( dracoLoader ) {

		this.dracoLoader = dracoLoader;
		return this;

	}

	setDDSLoader() {

		throw new Error(

			'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'

		);

	}

	setKTX2Loader( ktx2Loader ) {

		this.ktx2Loader = ktx2Loader;
		return this;

	}

	setMeshoptDecoder( meshoptDecoder ) {

		this.meshoptDecoder = meshoptDecoder;
		return this;

	}

	register( callback ) {

		if ( this.pluginCallbacks.indexOf( callback ) === - 1 ) {

			this.pluginCallbacks.push( callback );

		}

		return this;

	}

	unregister( callback ) {

		if ( this.pluginCallbacks.indexOf( callback ) !== - 1 ) {

			this.pluginCallbacks.splice( this.pluginCallbacks.indexOf( callback ), 1 );

		}

		return this;

	}

	parse( data, path, onLoad, onError ) {

		let json;
		const extensions = {};
		const plugins = {};
		const textDecoder = new TextDecoder();

		if ( typeof data === 'string' ) {

			json = JSON.parse( data );

		} else if ( data instanceof ArrayBuffer ) {

			const magic = textDecoder.decode( new Uint8Array( data, 0, 4 ) );

			if ( magic === BINARY_EXTENSION_HEADER_MAGIC ) {

				try {

					extensions[ EXTENSIONS.KHR_BINARY_GLTF ] = new GLTFBinaryExtension( data );

				} catch ( error ) {

					if ( onError ) onError( error );
					return;

				}

				json = JSON.parse( extensions[ EXTENSIONS.KHR_BINARY_GLTF ].content );

			} else {

				json = JSON.parse( textDecoder.decode( data ) );

			}

		} else {

			json = data;

		}

		if ( json.asset === undefined || json.asset.version[ 0 ] < 2 ) {

			if ( onError ) onError( new Error( 'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.' ) );
			return;

		}

		const parser = new GLTFParser( json, {

			path: path || this.resourcePath || '',
			crossOrigin: this.crossOrigin,
			requestHeader: this.requestHeader,
			manager: this.manager,
			ktx2Loader: this.ktx2Loader,
			meshoptDecoder: this.meshoptDecoder

		} );

		parser.fileLoader.setRequestHeader( this.requestHeader );

		for ( let i = 0; i < this.pluginCallbacks.length; i ++ ) {

			const plugin = this.pluginCallbacks[ i ]( parser );
			plugins[ plugin.name ] = plugin;

			// Workaround to avoid determining as unknown extension
			// in addUnknownExtensionsToUserData().
			// Remove this workaround if we move all the existing
			// extension handlers to plugin system
			extensions[ plugin.name ] = true;

		}

		if ( json.extensionsUsed ) {

			for ( let i = 0; i < json.extensionsUsed.length; ++ i ) {

				const extensionName = json.extensionsUsed[ i ];
				const extensionsRequired = json.extensionsRequired || [];

				switch ( extensionName ) {

					case EXTENSIONS.KHR_MATERIALS_UNLIT:
						extensions[ extensionName ] = new GLTFMaterialsUnlitExtension();
						break;

					case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
						extensions[ extensionName ] = new GLTFDracoMeshCompressionExtension( json, this.dracoLoader );
						break;

					case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
						extensions[ extensionName ] = new GLTFTextureTransformExtension();
						break;

					case EXTENSIONS.KHR_MESH_QUANTIZATION:
						extensions[ extensionName ] = new GLTFMeshQuantizationExtension();
						break;

					default:

						if ( extensionsRequired.indexOf( extensionName ) >= 0 && plugins[ extensionName ] === undefined ) {

							console.warn( 'THREE.GLTFLoader: Unknown extension "' + extensionName + '".' );

						}

				}

			}

		}

		parser.setExtensions( extensions );
		parser.setPlugins( plugins );
		parser.parse( onLoad, onError );

	}

	parseAsync( data, path ) {

		const scope = this;

		return new Promise( function ( resolve, reject ) {

			scope.parse( data, path, resolve, reject );

		} );

	}

}

/* GLTFREGISTRY */

function GLTFRegistry() {

	let objects = {};

	return	{

		get: function ( key ) {

			return objects[ key ];

		},

		add: function ( key, object ) {

			objects[ key ] = object;

		},

		remove: function ( key ) {

			delete objects[ key ];

		},

		removeAll: function () {

			objects = {};

		}

	};

}

/*********************************/
/********** EXTENSIONS ***********/
/*********************************/

const EXTENSIONS = {
	KHR_BINARY_GLTF: 'KHR_binary_glTF',
	KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
	KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
	KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
	KHR_MATERIALS_IOR: 'KHR_materials_ior',
	KHR_MATERIALS_SHEEN: 'KHR_materials_sheen',
	KHR_MATERIALS_SPECULAR: 'KHR_materials_specular',
	KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
	KHR_MATERIALS_IRIDESCENCE: 'KHR_materials_iridescence',
	KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
	KHR_MATERIALS_VOLUME: 'KHR_materials_volume',
	KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
	KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
	KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
	KHR_MATERIALS_EMISSIVE_STRENGTH: 'KHR_materials_emissive_strength',
	EXT_TEXTURE_WEBP: 'EXT_texture_webp',
	EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression',
	EXT_MESH_GPU_INSTANCING: 'EXT_mesh_gpu_instancing'
};

/**
 * Punctual Lights Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
 */
class GLTFLightsExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;

		// Object3D instance caches
		this.cache = { refs: {}, uses: {} };

	}

	_markDefs() {

		const parser = this.parser;
		const nodeDefs = this.parser.json.nodes || [];

		for ( let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

			const nodeDef = nodeDefs[ nodeIndex ];

			if ( nodeDef.extensions
					&& nodeDef.extensions[ this.name ]
					&& nodeDef.extensions[ this.name ].light !== undefined ) {

				parser._addNodeRef( this.cache, nodeDef.extensions[ this.name ].light );

			}

		}

	}

	_loadLight( lightIndex ) {

		const parser = this.parser;
		const cacheKey = 'light:' + lightIndex;
		let dependency = parser.cache.get( cacheKey );

		if ( dependency ) return dependency;

		const json = parser.json;
		const extensions = ( json.extensions && json.extensions[ this.name ] ) || {};
		const lightDefs = extensions.lights || [];
		const lightDef = lightDefs[ lightIndex ];
		let lightNode;

		const color = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 0xffffff );

		if ( lightDef.color !== undefined ) color.fromArray( lightDef.color );

		const range = lightDef.range !== undefined ? lightDef.range : 0;

		switch ( lightDef.type ) {

			case 'directional':
				lightNode = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight( color );
				lightNode.target.position.set( 0, 0, - 1 );
				lightNode.add( lightNode.target );
				break;

			case 'point':
				lightNode = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight( color );
				lightNode.distance = range;
				break;

			case 'spot':
				lightNode = new three__WEBPACK_IMPORTED_MODULE_0__.SpotLight( color );
				lightNode.distance = range;
				// Handle spotlight properties.
				lightDef.spot = lightDef.spot || {};
				lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
				lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
				lightNode.angle = lightDef.spot.outerConeAngle;
				lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
				lightNode.target.position.set( 0, 0, - 1 );
				lightNode.add( lightNode.target );
				break;

			default:
				throw new Error( 'THREE.GLTFLoader: Unexpected light type: ' + lightDef.type );

		}

		// Some lights (e.g. spot) default to a position other than the origin. Reset the position
		// here, because node-level parsing will only override position if explicitly specified.
		lightNode.position.set( 0, 0, 0 );

		lightNode.decay = 2;

		assignExtrasToUserData( lightNode, lightDef );

		if ( lightDef.intensity !== undefined ) lightNode.intensity = lightDef.intensity;

		lightNode.name = parser.createUniqueName( lightDef.name || ( 'light_' + lightIndex ) );

		dependency = Promise.resolve( lightNode );

		parser.cache.add( cacheKey, dependency );

		return dependency;

	}

	getDependency( type, index ) {

		if ( type !== 'light' ) return;

		return this._loadLight( index );

	}

	createNodeAttachment( nodeIndex ) {

		const self = this;
		const parser = this.parser;
		const json = parser.json;
		const nodeDef = json.nodes[ nodeIndex ];
		const lightDef = ( nodeDef.extensions && nodeDef.extensions[ this.name ] ) || {};
		const lightIndex = lightDef.light;

		if ( lightIndex === undefined ) return null;

		return this._loadLight( lightIndex ).then( function ( light ) {

			return parser._getNodeRef( self.cache, lightIndex, light );

		} );

	}

}

/**
 * Unlit Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
 */
class GLTFMaterialsUnlitExtension {

	constructor() {

		this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;

	}

	getMaterialType() {

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial;

	}

	extendParams( materialParams, materialDef, parser ) {

		const pending = [];

		materialParams.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 1.0, 1.0, 1.0 );
		materialParams.opacity = 1.0;

		const metallicRoughness = materialDef.pbrMetallicRoughness;

		if ( metallicRoughness ) {

			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

				const array = metallicRoughness.baseColorFactor;

				materialParams.color.fromArray( array );
				materialParams.opacity = array[ 3 ];

			}

			if ( metallicRoughness.baseColorTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture, three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding ) );

			}

		}

		return Promise.all( pending );

	}

}

/**
 * Materials Emissive Strength Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/blob/5768b3ce0ef32bc39cdf1bef10b948586635ead3/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md
 */
class GLTFMaterialsEmissiveStrengthExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const emissiveStrength = materialDef.extensions[ this.name ].emissiveStrength;

		if ( emissiveStrength !== undefined ) {

			materialParams.emissiveIntensity = emissiveStrength;

		}

		return Promise.resolve();

	}

}

/**
 * Clearcoat Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
 */
class GLTFMaterialsClearcoatExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const pending = [];

		const extension = materialDef.extensions[ this.name ];

		if ( extension.clearcoatFactor !== undefined ) {

			materialParams.clearcoat = extension.clearcoatFactor;

		}

		if ( extension.clearcoatTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'clearcoatMap', extension.clearcoatTexture ) );

		}

		if ( extension.clearcoatRoughnessFactor !== undefined ) {

			materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;

		}

		if ( extension.clearcoatRoughnessTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'clearcoatRoughnessMap', extension.clearcoatRoughnessTexture ) );

		}

		if ( extension.clearcoatNormalTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'clearcoatNormalMap', extension.clearcoatNormalTexture ) );

			if ( extension.clearcoatNormalTexture.scale !== undefined ) {

				const scale = extension.clearcoatNormalTexture.scale;

				materialParams.clearcoatNormalScale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2( scale, scale );

			}

		}

		return Promise.all( pending );

	}

}

/**
 * Iridescence Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_iridescence
 */
class GLTFMaterialsIridescenceExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const pending = [];

		const extension = materialDef.extensions[ this.name ];

		if ( extension.iridescenceFactor !== undefined ) {

			materialParams.iridescence = extension.iridescenceFactor;

		}

		if ( extension.iridescenceTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'iridescenceMap', extension.iridescenceTexture ) );

		}

		if ( extension.iridescenceIor !== undefined ) {

			materialParams.iridescenceIOR = extension.iridescenceIor;

		}

		if ( materialParams.iridescenceThicknessRange === undefined ) {

			materialParams.iridescenceThicknessRange = [ 100, 400 ];

		}

		if ( extension.iridescenceThicknessMinimum !== undefined ) {

			materialParams.iridescenceThicknessRange[ 0 ] = extension.iridescenceThicknessMinimum;

		}

		if ( extension.iridescenceThicknessMaximum !== undefined ) {

			materialParams.iridescenceThicknessRange[ 1 ] = extension.iridescenceThicknessMaximum;

		}

		if ( extension.iridescenceThicknessTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'iridescenceThicknessMap', extension.iridescenceThicknessTexture ) );

		}

		return Promise.all( pending );

	}

}

/**
 * Sheen Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_sheen
 */
class GLTFMaterialsSheenExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const pending = [];

		materialParams.sheenColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 0, 0, 0 );
		materialParams.sheenRoughness = 0;
		materialParams.sheen = 1;

		const extension = materialDef.extensions[ this.name ];

		if ( extension.sheenColorFactor !== undefined ) {

			materialParams.sheenColor.fromArray( extension.sheenColorFactor );

		}

		if ( extension.sheenRoughnessFactor !== undefined ) {

			materialParams.sheenRoughness = extension.sheenRoughnessFactor;

		}

		if ( extension.sheenColorTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'sheenColorMap', extension.sheenColorTexture, three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding ) );

		}

		if ( extension.sheenRoughnessTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'sheenRoughnessMap', extension.sheenRoughnessTexture ) );

		}

		return Promise.all( pending );

	}

}

/**
 * Transmission Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
 * Draft: https://github.com/KhronosGroup/glTF/pull/1698
 */
class GLTFMaterialsTransmissionExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const pending = [];

		const extension = materialDef.extensions[ this.name ];

		if ( extension.transmissionFactor !== undefined ) {

			materialParams.transmission = extension.transmissionFactor;

		}

		if ( extension.transmissionTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'transmissionMap', extension.transmissionTexture ) );

		}

		return Promise.all( pending );

	}

}

/**
 * Materials Volume Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_volume
 */
class GLTFMaterialsVolumeExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const pending = [];

		const extension = materialDef.extensions[ this.name ];

		materialParams.thickness = extension.thicknessFactor !== undefined ? extension.thicknessFactor : 0;

		if ( extension.thicknessTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'thicknessMap', extension.thicknessTexture ) );

		}

		materialParams.attenuationDistance = extension.attenuationDistance || Infinity;

		const colorArray = extension.attenuationColor || [ 1, 1, 1 ];
		materialParams.attenuationColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color( colorArray[ 0 ], colorArray[ 1 ], colorArray[ 2 ] );

		return Promise.all( pending );

	}

}

/**
 * Materials ior Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_ior
 */
class GLTFMaterialsIorExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_IOR;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const extension = materialDef.extensions[ this.name ];

		materialParams.ior = extension.ior !== undefined ? extension.ior : 1.5;

		return Promise.resolve();

	}

}

/**
 * Materials specular Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_specular
 */
class GLTFMaterialsSpecularExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;

	}

	getMaterialType( materialIndex ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) return null;

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshPhysicalMaterial;

	}

	extendMaterialParams( materialIndex, materialParams ) {

		const parser = this.parser;
		const materialDef = parser.json.materials[ materialIndex ];

		if ( ! materialDef.extensions || ! materialDef.extensions[ this.name ] ) {

			return Promise.resolve();

		}

		const pending = [];

		const extension = materialDef.extensions[ this.name ];

		materialParams.specularIntensity = extension.specularFactor !== undefined ? extension.specularFactor : 1.0;

		if ( extension.specularTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'specularIntensityMap', extension.specularTexture ) );

		}

		const colorArray = extension.specularColorFactor || [ 1, 1, 1 ];
		materialParams.specularColor = new three__WEBPACK_IMPORTED_MODULE_0__.Color( colorArray[ 0 ], colorArray[ 1 ], colorArray[ 2 ] );

		if ( extension.specularColorTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'specularColorMap', extension.specularColorTexture, three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding ) );

		}

		return Promise.all( pending );

	}

}

/**
 * BasisU Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_basisu
 */
class GLTFTextureBasisUExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.KHR_TEXTURE_BASISU;

	}

	loadTexture( textureIndex ) {

		const parser = this.parser;
		const json = parser.json;

		const textureDef = json.textures[ textureIndex ];

		if ( ! textureDef.extensions || ! textureDef.extensions[ this.name ] ) {

			return null;

		}

		const extension = textureDef.extensions[ this.name ];
		const loader = parser.options.ktx2Loader;

		if ( ! loader ) {

			if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

				throw new Error( 'THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures' );

			} else {

				// Assumes that the extension is optional and that a fallback texture is present
				return null;

			}

		}

		return parser.loadTextureImage( textureIndex, extension.source, loader );

	}

}

/**
 * WebP Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_webp
 */
class GLTFTextureWebPExtension {

	constructor( parser ) {

		this.parser = parser;
		this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
		this.isSupported = null;

	}

	loadTexture( textureIndex ) {

		const name = this.name;
		const parser = this.parser;
		const json = parser.json;

		const textureDef = json.textures[ textureIndex ];

		if ( ! textureDef.extensions || ! textureDef.extensions[ name ] ) {

			return null;

		}

		const extension = textureDef.extensions[ name ];
		const source = json.images[ extension.source ];

		let loader = parser.textureLoader;
		if ( source.uri ) {

			const handler = parser.options.manager.getHandler( source.uri );
			if ( handler !== null ) loader = handler;

		}

		return this.detectSupport().then( function ( isSupported ) {

			if ( isSupported ) return parser.loadTextureImage( textureIndex, extension.source, loader );

			if ( json.extensionsRequired && json.extensionsRequired.indexOf( name ) >= 0 ) {

				throw new Error( 'THREE.GLTFLoader: WebP required by asset but unsupported.' );

			}

			// Fall back to PNG or JPEG.
			return parser.loadTexture( textureIndex );

		} );

	}

	detectSupport() {

		if ( ! this.isSupported ) {

			this.isSupported = new Promise( function ( resolve ) {

				const image = new Image();

				// Lossy test image. Support for lossy images doesn't guarantee support for all
				// WebP images, unfortunately.
				image.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';

				image.onload = image.onerror = function () {

					resolve( image.height === 1 );

				};

			} );

		}

		return this.isSupported;

	}

}

/**
 * meshopt BufferView Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_meshopt_compression
 */
class GLTFMeshoptCompression {

	constructor( parser ) {

		this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
		this.parser = parser;

	}

	loadBufferView( index ) {

		const json = this.parser.json;
		const bufferView = json.bufferViews[ index ];

		if ( bufferView.extensions && bufferView.extensions[ this.name ] ) {

			const extensionDef = bufferView.extensions[ this.name ];

			const buffer = this.parser.getDependency( 'buffer', extensionDef.buffer );
			const decoder = this.parser.options.meshoptDecoder;

			if ( ! decoder || ! decoder.supported ) {

				if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

					throw new Error( 'THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files' );

				} else {

					// Assumes that the extension is optional and that fallback buffer data is present
					return null;

				}

			}

			return buffer.then( function ( res ) {

				const byteOffset = extensionDef.byteOffset || 0;
				const byteLength = extensionDef.byteLength || 0;

				const count = extensionDef.count;
				const stride = extensionDef.byteStride;

				const source = new Uint8Array( res, byteOffset, byteLength );

				if ( decoder.decodeGltfBufferAsync ) {

					return decoder.decodeGltfBufferAsync( count, stride, source, extensionDef.mode, extensionDef.filter ).then( function ( res ) {

						return res.buffer;

					} );

				} else {

					// Support for MeshoptDecoder 0.18 or earlier, without decodeGltfBufferAsync
					return decoder.ready.then( function () {

						const result = new ArrayBuffer( count * stride );
						decoder.decodeGltfBuffer( new Uint8Array( result ), count, stride, source, extensionDef.mode, extensionDef.filter );
						return result;

					} );

				}

			} );

		} else {

			return null;

		}

	}

}

/**
 * GPU Instancing Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_mesh_gpu_instancing
 *
 */
class GLTFMeshGpuInstancing {

	constructor( parser ) {

		this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
		this.parser = parser;

	}

	createNodeMesh( nodeIndex ) {

		const json = this.parser.json;
		const nodeDef = json.nodes[ nodeIndex ];

		if ( ! nodeDef.extensions || ! nodeDef.extensions[ this.name ] ||
			nodeDef.mesh === undefined ) {

			return null;

		}

		const meshDef = json.meshes[ nodeDef.mesh ];

		// No Points or Lines + Instancing support yet

		for ( const primitive of meshDef.primitives ) {

			if ( primitive.mode !== WEBGL_CONSTANTS.TRIANGLES &&
				 primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_STRIP &&
				 primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_FAN &&
				 primitive.mode !== undefined ) {

				return null;

			}

		}

		const extensionDef = nodeDef.extensions[ this.name ];
		const attributesDef = extensionDef.attributes;

		// @TODO: Can we support InstancedMesh + SkinnedMesh?

		const pending = [];
		const attributes = {};

		for ( const key in attributesDef ) {

			pending.push( this.parser.getDependency( 'accessor', attributesDef[ key ] ).then( accessor => {

				attributes[ key ] = accessor;
				return attributes[ key ];

			} ) );

		}

		if ( pending.length < 1 ) {

			return null;

		}

		pending.push( this.parser.createNodeMesh( nodeIndex ) );

		return Promise.all( pending ).then( results => {

			const nodeObject = results.pop();
			const meshes = nodeObject.isGroup ? nodeObject.children : [ nodeObject ];
			const count = results[ 0 ].count; // All attribute counts should be same
			const instancedMeshes = [];

			for ( const mesh of meshes ) {

				// Temporal variables
				const m = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
				const p = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
				const q = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion();
				const s = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( 1, 1, 1 );

				const instancedMesh = new three__WEBPACK_IMPORTED_MODULE_0__.InstancedMesh( mesh.geometry, mesh.material, count );

				for ( let i = 0; i < count; i ++ ) {

					if ( attributes.TRANSLATION ) {

						p.fromBufferAttribute( attributes.TRANSLATION, i );

					}

					if ( attributes.ROTATION ) {

						q.fromBufferAttribute( attributes.ROTATION, i );

					}

					if ( attributes.SCALE ) {

						s.fromBufferAttribute( attributes.SCALE, i );

					}

					instancedMesh.setMatrixAt( i, m.compose( p, q, s ) );

				}

				// Add instance attributes to the geometry, excluding TRS.
				for ( const attributeName in attributes ) {

					if ( attributeName !== 'TRANSLATION' &&
						 attributeName !== 'ROTATION' &&
						 attributeName !== 'SCALE' ) {

						mesh.geometry.setAttribute( attributeName, attributes[ attributeName ] );

					}

				}

				// Just in case
				three__WEBPACK_IMPORTED_MODULE_0__.Object3D.prototype.copy.call( instancedMesh, mesh );

				// https://github.com/mrdoob/three.js/issues/18334
				instancedMesh.frustumCulled = false;
				this.parser.assignFinalMaterial( instancedMesh );

				instancedMeshes.push( instancedMesh );

			}

			if ( nodeObject.isGroup ) {

				nodeObject.clear();

				nodeObject.add( ... instancedMeshes );

				return nodeObject;

			}

			return instancedMeshes[ 0 ];

		} );

	}

}

/* BINARY EXTENSION */
const BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
const BINARY_EXTENSION_HEADER_LENGTH = 12;
const BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

class GLTFBinaryExtension {

	constructor( data ) {

		this.name = EXTENSIONS.KHR_BINARY_GLTF;
		this.content = null;
		this.body = null;

		const headerView = new DataView( data, 0, BINARY_EXTENSION_HEADER_LENGTH );
		const textDecoder = new TextDecoder();

		this.header = {
			magic: textDecoder.decode( new Uint8Array( data.slice( 0, 4 ) ) ),
			version: headerView.getUint32( 4, true ),
			length: headerView.getUint32( 8, true )
		};

		if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC ) {

			throw new Error( 'THREE.GLTFLoader: Unsupported glTF-Binary header.' );

		} else if ( this.header.version < 2.0 ) {

			throw new Error( 'THREE.GLTFLoader: Legacy binary file detected.' );

		}

		const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
		const chunkView = new DataView( data, BINARY_EXTENSION_HEADER_LENGTH );
		let chunkIndex = 0;

		while ( chunkIndex < chunkContentsLength ) {

			const chunkLength = chunkView.getUint32( chunkIndex, true );
			chunkIndex += 4;

			const chunkType = chunkView.getUint32( chunkIndex, true );
			chunkIndex += 4;

			if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON ) {

				const contentArray = new Uint8Array( data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength );
				this.content = textDecoder.decode( contentArray );

			} else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN ) {

				const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
				this.body = data.slice( byteOffset, byteOffset + chunkLength );

			}

			// Clients must ignore chunks with unknown types.

			chunkIndex += chunkLength;

		}

		if ( this.content === null ) {

			throw new Error( 'THREE.GLTFLoader: JSON content not found.' );

		}

	}

}

/**
 * DRACO Mesh Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
 */
class GLTFDracoMeshCompressionExtension {

	constructor( json, dracoLoader ) {

		if ( ! dracoLoader ) {

			throw new Error( 'THREE.GLTFLoader: No DRACOLoader instance provided.' );

		}

		this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
		this.json = json;
		this.dracoLoader = dracoLoader;
		this.dracoLoader.preload();

	}

	decodePrimitive( primitive, parser ) {

		const json = this.json;
		const dracoLoader = this.dracoLoader;
		const bufferViewIndex = primitive.extensions[ this.name ].bufferView;
		const gltfAttributeMap = primitive.extensions[ this.name ].attributes;
		const threeAttributeMap = {};
		const attributeNormalizedMap = {};
		const attributeTypeMap = {};

		for ( const attributeName in gltfAttributeMap ) {

			const threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

			threeAttributeMap[ threeAttributeName ] = gltfAttributeMap[ attributeName ];

		}

		for ( const attributeName in primitive.attributes ) {

			const threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

			if ( gltfAttributeMap[ attributeName ] !== undefined ) {

				const accessorDef = json.accessors[ primitive.attributes[ attributeName ] ];
				const componentType = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

				attributeTypeMap[ threeAttributeName ] = componentType.name;
				attributeNormalizedMap[ threeAttributeName ] = accessorDef.normalized === true;

			}

		}

		return parser.getDependency( 'bufferView', bufferViewIndex ).then( function ( bufferView ) {

			return new Promise( function ( resolve ) {

				dracoLoader.decodeDracoFile( bufferView, function ( geometry ) {

					for ( const attributeName in geometry.attributes ) {

						const attribute = geometry.attributes[ attributeName ];
						const normalized = attributeNormalizedMap[ attributeName ];

						if ( normalized !== undefined ) attribute.normalized = normalized;

					}

					resolve( geometry );

				}, threeAttributeMap, attributeTypeMap );

			} );

		} );

	}

}

/**
 * Texture Transform Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
 */
class GLTFTextureTransformExtension {

	constructor() {

		this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;

	}

	extendTexture( texture, transform ) {

		if ( transform.texCoord !== undefined ) {

			console.warn( 'THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.' );

		}

		if ( transform.offset === undefined && transform.rotation === undefined && transform.scale === undefined ) {

			// See https://github.com/mrdoob/three.js/issues/21819.
			return texture;

		}

		texture = texture.clone();

		if ( transform.offset !== undefined ) {

			texture.offset.fromArray( transform.offset );

		}

		if ( transform.rotation !== undefined ) {

			texture.rotation = transform.rotation;

		}

		if ( transform.scale !== undefined ) {

			texture.repeat.fromArray( transform.scale );

		}

		texture.needsUpdate = true;

		return texture;

	}

}

/**
 * Mesh Quantization Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
 */
class GLTFMeshQuantizationExtension {

	constructor() {

		this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;

	}

}

/*********************************/
/********** INTERPOLATION ********/
/*********************************/

// Spline Interpolation
// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
class GLTFCubicSplineInterpolant extends three__WEBPACK_IMPORTED_MODULE_0__.Interpolant {

	constructor( parameterPositions, sampleValues, sampleSize, resultBuffer ) {

		super( parameterPositions, sampleValues, sampleSize, resultBuffer );

	}

	copySampleValue_( index ) {

		// Copies a sample value to the result buffer. See description of glTF
		// CUBICSPLINE values layout in interpolate_() function below.

		const result = this.resultBuffer,
			values = this.sampleValues,
			valueSize = this.valueSize,
			offset = index * valueSize * 3 + valueSize;

		for ( let i = 0; i !== valueSize; i ++ ) {

			result[ i ] = values[ offset + i ];

		}

		return result;

	}

	interpolate_( i1, t0, t, t1 ) {

		const result = this.resultBuffer;
		const values = this.sampleValues;
		const stride = this.valueSize;

		const stride2 = stride * 2;
		const stride3 = stride * 3;

		const td = t1 - t0;

		const p = ( t - t0 ) / td;
		const pp = p * p;
		const ppp = pp * p;

		const offset1 = i1 * stride3;
		const offset0 = offset1 - stride3;

		const s2 = - 2 * ppp + 3 * pp;
		const s3 = ppp - pp;
		const s0 = 1 - s2;
		const s1 = s3 - pp + p;

		// Layout of keyframe output values for CUBICSPLINE animations:
		//   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
		for ( let i = 0; i !== stride; i ++ ) {

			const p0 = values[ offset0 + i + stride ]; // splineVertex_k
			const m0 = values[ offset0 + i + stride2 ] * td; // outTangent_k * (t_k+1 - t_k)
			const p1 = values[ offset1 + i + stride ]; // splineVertex_k+1
			const m1 = values[ offset1 + i ] * td; // inTangent_k+1 * (t_k+1 - t_k)

			result[ i ] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;

		}

		return result;

	}

}

const _q = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion();

class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {

	interpolate_( i1, t0, t, t1 ) {

		const result = super.interpolate_( i1, t0, t, t1 );

		_q.fromArray( result ).normalize().toArray( result );

		return result;

	}

}


/*********************************/
/********** INTERNALS ************/
/*********************************/

/* CONSTANTS */

const WEBGL_CONSTANTS = {
	FLOAT: 5126,
	//FLOAT_MAT2: 35674,
	FLOAT_MAT3: 35675,
	FLOAT_MAT4: 35676,
	FLOAT_VEC2: 35664,
	FLOAT_VEC3: 35665,
	FLOAT_VEC4: 35666,
	LINEAR: 9729,
	REPEAT: 10497,
	SAMPLER_2D: 35678,
	POINTS: 0,
	LINES: 1,
	LINE_LOOP: 2,
	LINE_STRIP: 3,
	TRIANGLES: 4,
	TRIANGLE_STRIP: 5,
	TRIANGLE_FAN: 6,
	UNSIGNED_BYTE: 5121,
	UNSIGNED_SHORT: 5123
};

const WEBGL_COMPONENT_TYPES = {
	5120: Int8Array,
	5121: Uint8Array,
	5122: Int16Array,
	5123: Uint16Array,
	5125: Uint32Array,
	5126: Float32Array
};

const WEBGL_FILTERS = {
	9728: three__WEBPACK_IMPORTED_MODULE_0__.NearestFilter,
	9729: three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter,
	9984: three__WEBPACK_IMPORTED_MODULE_0__.NearestMipmapNearestFilter,
	9985: three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapNearestFilter,
	9986: three__WEBPACK_IMPORTED_MODULE_0__.NearestMipmapLinearFilter,
	9987: three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapLinearFilter
};

const WEBGL_WRAPPINGS = {
	33071: three__WEBPACK_IMPORTED_MODULE_0__.ClampToEdgeWrapping,
	33648: three__WEBPACK_IMPORTED_MODULE_0__.MirroredRepeatWrapping,
	10497: three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping
};

const WEBGL_TYPE_SIZES = {
	'SCALAR': 1,
	'VEC2': 2,
	'VEC3': 3,
	'VEC4': 4,
	'MAT2': 4,
	'MAT3': 9,
	'MAT4': 16
};

const ATTRIBUTES = {
	POSITION: 'position',
	NORMAL: 'normal',
	TANGENT: 'tangent',
	TEXCOORD_0: 'uv',
	TEXCOORD_1: 'uv2',
	COLOR_0: 'color',
	WEIGHTS_0: 'skinWeight',
	JOINTS_0: 'skinIndex',
};

const PATH_PROPERTIES = {
	scale: 'scale',
	translation: 'position',
	rotation: 'quaternion',
	weights: 'morphTargetInfluences'
};

const INTERPOLATION = {
	CUBICSPLINE: undefined, // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
		                        // keyframe track will be initialized with a default interpolation type, then modified.
	LINEAR: three__WEBPACK_IMPORTED_MODULE_0__.InterpolateLinear,
	STEP: three__WEBPACK_IMPORTED_MODULE_0__.InterpolateDiscrete
};

const ALPHA_MODES = {
	OPAQUE: 'OPAQUE',
	MASK: 'MASK',
	BLEND: 'BLEND'
};

/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
 */
function createDefaultMaterial( cache ) {

	if ( cache[ 'DefaultMaterial' ] === undefined ) {

		cache[ 'DefaultMaterial' ] = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial( {
			color: 0xFFFFFF,
			emissive: 0x000000,
			metalness: 1,
			roughness: 1,
			transparent: false,
			depthTest: true,
			side: three__WEBPACK_IMPORTED_MODULE_0__.FrontSide
		} );

	}

	return cache[ 'DefaultMaterial' ];

}

function addUnknownExtensionsToUserData( knownExtensions, object, objectDef ) {

	// Add unknown glTF extensions to an object's userData.

	for ( const name in objectDef.extensions ) {

		if ( knownExtensions[ name ] === undefined ) {

			object.userData.gltfExtensions = object.userData.gltfExtensions || {};
			object.userData.gltfExtensions[ name ] = objectDef.extensions[ name ];

		}

	}

}

/**
 * @param {Object3D|Material|BufferGeometry} object
 * @param {GLTF.definition} gltfDef
 */
function assignExtrasToUserData( object, gltfDef ) {

	if ( gltfDef.extras !== undefined ) {

		if ( typeof gltfDef.extras === 'object' ) {

			Object.assign( object.userData, gltfDef.extras );

		} else {

			console.warn( 'THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras );

		}

	}

}

/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
 *
 * @param {BufferGeometry} geometry
 * @param {Array<GLTF.Target>} targets
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */
function addMorphTargets( geometry, targets, parser ) {

	let hasMorphPosition = false;
	let hasMorphNormal = false;
	let hasMorphColor = false;

	for ( let i = 0, il = targets.length; i < il; i ++ ) {

		const target = targets[ i ];

		if ( target.POSITION !== undefined ) hasMorphPosition = true;
		if ( target.NORMAL !== undefined ) hasMorphNormal = true;
		if ( target.COLOR_0 !== undefined ) hasMorphColor = true;

		if ( hasMorphPosition && hasMorphNormal && hasMorphColor ) break;

	}

	if ( ! hasMorphPosition && ! hasMorphNormal && ! hasMorphColor ) return Promise.resolve( geometry );

	const pendingPositionAccessors = [];
	const pendingNormalAccessors = [];
	const pendingColorAccessors = [];

	for ( let i = 0, il = targets.length; i < il; i ++ ) {

		const target = targets[ i ];

		if ( hasMorphPosition ) {

			const pendingAccessor = target.POSITION !== undefined
				? parser.getDependency( 'accessor', target.POSITION )
				: geometry.attributes.position;

			pendingPositionAccessors.push( pendingAccessor );

		}

		if ( hasMorphNormal ) {

			const pendingAccessor = target.NORMAL !== undefined
				? parser.getDependency( 'accessor', target.NORMAL )
				: geometry.attributes.normal;

			pendingNormalAccessors.push( pendingAccessor );

		}

		if ( hasMorphColor ) {

			const pendingAccessor = target.COLOR_0 !== undefined
				? parser.getDependency( 'accessor', target.COLOR_0 )
				: geometry.attributes.color;

			pendingColorAccessors.push( pendingAccessor );

		}

	}

	return Promise.all( [
		Promise.all( pendingPositionAccessors ),
		Promise.all( pendingNormalAccessors ),
		Promise.all( pendingColorAccessors )
	] ).then( function ( accessors ) {

		const morphPositions = accessors[ 0 ];
		const morphNormals = accessors[ 1 ];
		const morphColors = accessors[ 2 ];

		if ( hasMorphPosition ) geometry.morphAttributes.position = morphPositions;
		if ( hasMorphNormal ) geometry.morphAttributes.normal = morphNormals;
		if ( hasMorphColor ) geometry.morphAttributes.color = morphColors;
		geometry.morphTargetsRelative = true;

		return geometry;

	} );

}

/**
 * @param {Mesh} mesh
 * @param {GLTF.Mesh} meshDef
 */
function updateMorphTargets( mesh, meshDef ) {

	mesh.updateMorphTargets();

	if ( meshDef.weights !== undefined ) {

		for ( let i = 0, il = meshDef.weights.length; i < il; i ++ ) {

			mesh.morphTargetInfluences[ i ] = meshDef.weights[ i ];

		}

	}

	// .extras has user-defined data, so check that .extras.targetNames is an array.
	if ( meshDef.extras && Array.isArray( meshDef.extras.targetNames ) ) {

		const targetNames = meshDef.extras.targetNames;

		if ( mesh.morphTargetInfluences.length === targetNames.length ) {

			mesh.morphTargetDictionary = {};

			for ( let i = 0, il = targetNames.length; i < il; i ++ ) {

				mesh.morphTargetDictionary[ targetNames[ i ] ] = i;

			}

		} else {

			console.warn( 'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.' );

		}

	}

}

function createPrimitiveKey( primitiveDef ) {

	const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ];
	let geometryKey;

	if ( dracoExtension ) {

		geometryKey = 'draco:' + dracoExtension.bufferView
				+ ':' + dracoExtension.indices
				+ ':' + createAttributesKey( dracoExtension.attributes );

	} else {

		geometryKey = primitiveDef.indices + ':' + createAttributesKey( primitiveDef.attributes ) + ':' + primitiveDef.mode;

	}

	return geometryKey;

}

function createAttributesKey( attributes ) {

	let attributesKey = '';

	const keys = Object.keys( attributes ).sort();

	for ( let i = 0, il = keys.length; i < il; i ++ ) {

		attributesKey += keys[ i ] + ':' + attributes[ keys[ i ] ] + ';';

	}

	return attributesKey;

}

function getNormalizedComponentScale( constructor ) {

	// Reference:
	// https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization#encoding-quantized-data

	switch ( constructor ) {

		case Int8Array:
			return 1 / 127;

		case Uint8Array:
			return 1 / 255;

		case Int16Array:
			return 1 / 32767;

		case Uint16Array:
			return 1 / 65535;

		default:
			throw new Error( 'THREE.GLTFLoader: Unsupported normalized accessor component type.' );

	}

}

function getImageURIMimeType( uri ) {

	if ( uri.search( /\.jpe?g($|\?)/i ) > 0 || uri.search( /^data\:image\/jpeg/ ) === 0 ) return 'image/jpeg';
	if ( uri.search( /\.webp($|\?)/i ) > 0 || uri.search( /^data\:image\/webp/ ) === 0 ) return 'image/webp';

	return 'image/png';

}

const _identityMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();

/* GLTF PARSER */

class GLTFParser {

	constructor( json = {}, options = {} ) {

		this.json = json;
		this.extensions = {};
		this.plugins = {};
		this.options = options;

		// loader object cache
		this.cache = new GLTFRegistry();

		// associations between Three.js objects and glTF elements
		this.associations = new Map();

		// BufferGeometry caching
		this.primitiveCache = {};

		// Object3D instance caches
		this.meshCache = { refs: {}, uses: {} };
		this.cameraCache = { refs: {}, uses: {} };
		this.lightCache = { refs: {}, uses: {} };

		this.sourceCache = {};
		this.textureCache = {};

		// Track node names, to ensure no duplicates
		this.nodeNamesUsed = {};

		// Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
		// expensive work of uploading a texture to the GPU off the main thread.

		let isSafari = false;
		let isFirefox = false;
		let firefoxVersion = - 1;

		if ( typeof navigator !== 'undefined' ) {

			isSafari = /^((?!chrome|android).)*safari/i.test( navigator.userAgent ) === true;
			isFirefox = navigator.userAgent.indexOf( 'Firefox' ) > - 1;
			firefoxVersion = isFirefox ? navigator.userAgent.match( /Firefox\/([0-9]+)\./ )[ 1 ] : - 1;

		}

		if ( typeof createImageBitmap === 'undefined' || isSafari || ( isFirefox && firefoxVersion < 98 ) ) {

			this.textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader( this.options.manager );

		} else {

			this.textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.ImageBitmapLoader( this.options.manager );

		}

		this.textureLoader.setCrossOrigin( this.options.crossOrigin );
		this.textureLoader.setRequestHeader( this.options.requestHeader );

		this.fileLoader = new three__WEBPACK_IMPORTED_MODULE_0__.FileLoader( this.options.manager );
		this.fileLoader.setResponseType( 'arraybuffer' );

		if ( this.options.crossOrigin === 'use-credentials' ) {

			this.fileLoader.setWithCredentials( true );

		}

	}

	setExtensions( extensions ) {

		this.extensions = extensions;

	}

	setPlugins( plugins ) {

		this.plugins = plugins;

	}

	parse( onLoad, onError ) {

		const parser = this;
		const json = this.json;
		const extensions = this.extensions;

		// Clear the loader cache
		this.cache.removeAll();

		// Mark the special nodes/meshes in json for efficient parse
		this._invokeAll( function ( ext ) {

			return ext._markDefs && ext._markDefs();

		} );

		Promise.all( this._invokeAll( function ( ext ) {

			return ext.beforeRoot && ext.beforeRoot();

		} ) ).then( function () {

			return Promise.all( [

				parser.getDependencies( 'scene' ),
				parser.getDependencies( 'animation' ),
				parser.getDependencies( 'camera' ),

			] );

		} ).then( function ( dependencies ) {

			const result = {
				scene: dependencies[ 0 ][ json.scene || 0 ],
				scenes: dependencies[ 0 ],
				animations: dependencies[ 1 ],
				cameras: dependencies[ 2 ],
				asset: json.asset,
				parser: parser,
				userData: {}
			};

			addUnknownExtensionsToUserData( extensions, result, json );

			assignExtrasToUserData( result, json );

			Promise.all( parser._invokeAll( function ( ext ) {

				return ext.afterRoot && ext.afterRoot( result );

			} ) ).then( function () {

				onLoad( result );

			} );

		} ).catch( onError );

	}

	/**
	 * Marks the special nodes/meshes in json for efficient parse.
	 */
	_markDefs() {

		const nodeDefs = this.json.nodes || [];
		const skinDefs = this.json.skins || [];
		const meshDefs = this.json.meshes || [];

		// Nothing in the node definition indicates whether it is a Bone or an
		// Object3D. Use the skins' joint references to mark bones.
		for ( let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex ++ ) {

			const joints = skinDefs[ skinIndex ].joints;

			for ( let i = 0, il = joints.length; i < il; i ++ ) {

				nodeDefs[ joints[ i ] ].isBone = true;

			}

		}

		// Iterate over all nodes, marking references to shared resources,
		// as well as skeleton joints.
		for ( let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

			const nodeDef = nodeDefs[ nodeIndex ];

			if ( nodeDef.mesh !== undefined ) {

				this._addNodeRef( this.meshCache, nodeDef.mesh );

				// Nothing in the mesh definition indicates whether it is
				// a SkinnedMesh or Mesh. Use the node's mesh reference
				// to mark SkinnedMesh if node has skin.
				if ( nodeDef.skin !== undefined ) {

					meshDefs[ nodeDef.mesh ].isSkinnedMesh = true;

				}

			}

			if ( nodeDef.camera !== undefined ) {

				this._addNodeRef( this.cameraCache, nodeDef.camera );

			}

		}

	}

	/**
	 * Counts references to shared node / Object3D resources. These resources
	 * can be reused, or "instantiated", at multiple nodes in the scene
	 * hierarchy. Mesh, Camera, and Light instances are instantiated and must
	 * be marked. Non-scenegraph resources (like Materials, Geometries, and
	 * Textures) can be reused directly and are not marked here.
	 *
	 * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
	 */
	_addNodeRef( cache, index ) {

		if ( index === undefined ) return;

		if ( cache.refs[ index ] === undefined ) {

			cache.refs[ index ] = cache.uses[ index ] = 0;

		}

		cache.refs[ index ] ++;

	}

	/** Returns a reference to a shared resource, cloning it if necessary. */
	_getNodeRef( cache, index, object ) {

		if ( cache.refs[ index ] <= 1 ) return object;

		const ref = object.clone();

		// Propagates mappings to the cloned object, prevents mappings on the
		// original object from being lost.
		const updateMappings = ( original, clone ) => {

			const mappings = this.associations.get( original );
			if ( mappings != null ) {

				this.associations.set( clone, mappings );

			}

			for ( const [ i, child ] of original.children.entries() ) {

				updateMappings( child, clone.children[ i ] );

			}

		};

		updateMappings( object, ref );

		ref.name += '_instance_' + ( cache.uses[ index ] ++ );

		return ref;

	}

	_invokeOne( func ) {

		const extensions = Object.values( this.plugins );
		extensions.push( this );

		for ( let i = 0; i < extensions.length; i ++ ) {

			const result = func( extensions[ i ] );

			if ( result ) return result;

		}

		return null;

	}

	_invokeAll( func ) {

		const extensions = Object.values( this.plugins );
		extensions.unshift( this );

		const pending = [];

		for ( let i = 0; i < extensions.length; i ++ ) {

			const result = func( extensions[ i ] );

			if ( result ) pending.push( result );

		}

		return pending;

	}

	/**
	 * Requests the specified dependency asynchronously, with caching.
	 * @param {string} type
	 * @param {number} index
	 * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
	 */
	getDependency( type, index ) {

		const cacheKey = type + ':' + index;
		let dependency = this.cache.get( cacheKey );

		if ( ! dependency ) {

			switch ( type ) {

				case 'scene':
					dependency = this.loadScene( index );
					break;

				case 'node':
					dependency = this._invokeOne( function ( ext ) {

						return ext.loadNode && ext.loadNode( index );

					} );
					break;

				case 'mesh':
					dependency = this._invokeOne( function ( ext ) {

						return ext.loadMesh && ext.loadMesh( index );

					} );
					break;

				case 'accessor':
					dependency = this.loadAccessor( index );
					break;

				case 'bufferView':
					dependency = this._invokeOne( function ( ext ) {

						return ext.loadBufferView && ext.loadBufferView( index );

					} );
					break;

				case 'buffer':
					dependency = this.loadBuffer( index );
					break;

				case 'material':
					dependency = this._invokeOne( function ( ext ) {

						return ext.loadMaterial && ext.loadMaterial( index );

					} );
					break;

				case 'texture':
					dependency = this._invokeOne( function ( ext ) {

						return ext.loadTexture && ext.loadTexture( index );

					} );
					break;

				case 'skin':
					dependency = this.loadSkin( index );
					break;

				case 'animation':
					dependency = this._invokeOne( function ( ext ) {

						return ext.loadAnimation && ext.loadAnimation( index );

					} );
					break;

				case 'camera':
					dependency = this.loadCamera( index );
					break;

				default:
					dependency = this._invokeOne( function ( ext ) {

						return ext != this && ext.getDependency && ext.getDependency( type, index );

					} );

					if ( ! dependency ) {

						throw new Error( 'Unknown type: ' + type );

					}

					break;

			}

			this.cache.add( cacheKey, dependency );

		}

		return dependency;

	}

	/**
	 * Requests all dependencies of the specified type asynchronously, with caching.
	 * @param {string} type
	 * @return {Promise<Array<Object>>}
	 */
	getDependencies( type ) {

		let dependencies = this.cache.get( type );

		if ( ! dependencies ) {

			const parser = this;
			const defs = this.json[ type + ( type === 'mesh' ? 'es' : 's' ) ] || [];

			dependencies = Promise.all( defs.map( function ( def, index ) {

				return parser.getDependency( type, index );

			} ) );

			this.cache.add( type, dependencies );

		}

		return dependencies;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	loadBuffer( bufferIndex ) {

		const bufferDef = this.json.buffers[ bufferIndex ];
		const loader = this.fileLoader;

		if ( bufferDef.type && bufferDef.type !== 'arraybuffer' ) {

			throw new Error( 'THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.' );

		}

		// If present, GLB container is required to be the first buffer.
		if ( bufferDef.uri === undefined && bufferIndex === 0 ) {

			return Promise.resolve( this.extensions[ EXTENSIONS.KHR_BINARY_GLTF ].body );

		}

		const options = this.options;

		return new Promise( function ( resolve, reject ) {

			loader.load( three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

				reject( new Error( 'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".' ) );

			} );

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferViewIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	loadBufferView( bufferViewIndex ) {

		const bufferViewDef = this.json.bufferViews[ bufferViewIndex ];

		return this.getDependency( 'buffer', bufferViewDef.buffer ).then( function ( buffer ) {

			const byteLength = bufferViewDef.byteLength || 0;
			const byteOffset = bufferViewDef.byteOffset || 0;
			return buffer.slice( byteOffset, byteOffset + byteLength );

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	 * @param {number} accessorIndex
	 * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
	 */
	loadAccessor( accessorIndex ) {

		const parser = this;
		const json = this.json;

		const accessorDef = this.json.accessors[ accessorIndex ];

		if ( accessorDef.bufferView === undefined && accessorDef.sparse === undefined ) {

			const itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
			const TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];
			const normalized = accessorDef.normalized === true;

			const array = new TypedArray( accessorDef.count * itemSize );
			return Promise.resolve( new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( array, itemSize, normalized ) );

		}

		const pendingBufferViews = [];

		if ( accessorDef.bufferView !== undefined ) {

			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.bufferView ) );

		} else {

			pendingBufferViews.push( null );

		}

		if ( accessorDef.sparse !== undefined ) {

			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.indices.bufferView ) );
			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.values.bufferView ) );

		}

		return Promise.all( pendingBufferViews ).then( function ( bufferViews ) {

			const bufferView = bufferViews[ 0 ];

			const itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
			const TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

			// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
			const elementBytes = TypedArray.BYTES_PER_ELEMENT;
			const itemBytes = elementBytes * itemSize;
			const byteOffset = accessorDef.byteOffset || 0;
			const byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[ accessorDef.bufferView ].byteStride : undefined;
			const normalized = accessorDef.normalized === true;
			let array, bufferAttribute;

			// The buffer is not interleaved if the stride is the item size in bytes.
			if ( byteStride && byteStride !== itemBytes ) {

				// Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
				// This makes sure that IBA.count reflects accessor.count properly
				const ibSlice = Math.floor( byteOffset / byteStride );
				const ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType + ':' + ibSlice + ':' + accessorDef.count;
				let ib = parser.cache.get( ibCacheKey );

				if ( ! ib ) {

					array = new TypedArray( bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes );

					// Integer parameters to IB/IBA are in array elements, not bytes.
					ib = new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBuffer( array, byteStride / elementBytes );

					parser.cache.add( ibCacheKey, ib );

				}

				bufferAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBufferAttribute( ib, itemSize, ( byteOffset % byteStride ) / elementBytes, normalized );

			} else {

				if ( bufferView === null ) {

					array = new TypedArray( accessorDef.count * itemSize );

				} else {

					array = new TypedArray( bufferView, byteOffset, accessorDef.count * itemSize );

				}

				bufferAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( array, itemSize, normalized );

			}

			// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
			if ( accessorDef.sparse !== undefined ) {

				const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
				const TypedArrayIndices = WEBGL_COMPONENT_TYPES[ accessorDef.sparse.indices.componentType ];

				const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
				const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;

				const sparseIndices = new TypedArrayIndices( bufferViews[ 1 ], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices );
				const sparseValues = new TypedArray( bufferViews[ 2 ], byteOffsetValues, accessorDef.sparse.count * itemSize );

				if ( bufferView !== null ) {

					// Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
					bufferAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized );

				}

				for ( let i = 0, il = sparseIndices.length; i < il; i ++ ) {

					const index = sparseIndices[ i ];

					bufferAttribute.setX( index, sparseValues[ i * itemSize ] );
					if ( itemSize >= 2 ) bufferAttribute.setY( index, sparseValues[ i * itemSize + 1 ] );
					if ( itemSize >= 3 ) bufferAttribute.setZ( index, sparseValues[ i * itemSize + 2 ] );
					if ( itemSize >= 4 ) bufferAttribute.setW( index, sparseValues[ i * itemSize + 3 ] );
					if ( itemSize >= 5 ) throw new Error( 'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.' );

				}

			}

			return bufferAttribute;

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	 * @param {number} textureIndex
	 * @return {Promise<THREE.Texture|null>}
	 */
	loadTexture( textureIndex ) {

		const json = this.json;
		const options = this.options;
		const textureDef = json.textures[ textureIndex ];
		const sourceIndex = textureDef.source;
		const sourceDef = json.images[ sourceIndex ];

		let loader = this.textureLoader;

		if ( sourceDef.uri ) {

			const handler = options.manager.getHandler( sourceDef.uri );
			if ( handler !== null ) loader = handler;

		}

		return this.loadTextureImage( textureIndex, sourceIndex, loader );

	}

	loadTextureImage( textureIndex, sourceIndex, loader ) {

		const parser = this;
		const json = this.json;

		const textureDef = json.textures[ textureIndex ];
		const sourceDef = json.images[ sourceIndex ];

		const cacheKey = ( sourceDef.uri || sourceDef.bufferView ) + ':' + textureDef.sampler;

		if ( this.textureCache[ cacheKey ] ) {

			// See https://github.com/mrdoob/three.js/issues/21559.
			return this.textureCache[ cacheKey ];

		}

		const promise = this.loadImageSource( sourceIndex, loader ).then( function ( texture ) {

			texture.flipY = false;

			texture.name = textureDef.name || sourceDef.name || '';

			const samplers = json.samplers || {};
			const sampler = samplers[ textureDef.sampler ] || {};

			texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ] || three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter;
			texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ] || three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapLinearFilter;
			texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ] || three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;
			texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ] || three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;

			parser.associations.set( texture, { textures: textureIndex } );

			return texture;

		} ).catch( function () {

			return null;

		} );

		this.textureCache[ cacheKey ] = promise;

		return promise;

	}

	loadImageSource( sourceIndex, loader ) {

		const parser = this;
		const json = this.json;
		const options = this.options;

		if ( this.sourceCache[ sourceIndex ] !== undefined ) {

			return this.sourceCache[ sourceIndex ].then( ( texture ) => texture.clone() );

		}

		const sourceDef = json.images[ sourceIndex ];

		const URL = self.URL || self.webkitURL;

		let sourceURI = sourceDef.uri || '';
		let isObjectURL = false;

		if ( sourceDef.bufferView !== undefined ) {

			// Load binary image data from bufferView, if provided.

			sourceURI = parser.getDependency( 'bufferView', sourceDef.bufferView ).then( function ( bufferView ) {

				isObjectURL = true;
				const blob = new Blob( [ bufferView ], { type: sourceDef.mimeType } );
				sourceURI = URL.createObjectURL( blob );
				return sourceURI;

			} );

		} else if ( sourceDef.uri === undefined ) {

			throw new Error( 'THREE.GLTFLoader: Image ' + sourceIndex + ' is missing URI and bufferView' );

		}

		const promise = Promise.resolve( sourceURI ).then( function ( sourceURI ) {

			return new Promise( function ( resolve, reject ) {

				let onLoad = resolve;

				if ( loader.isImageBitmapLoader === true ) {

					onLoad = function ( imageBitmap ) {

						const texture = new three__WEBPACK_IMPORTED_MODULE_0__.Texture( imageBitmap );
						texture.needsUpdate = true;

						resolve( texture );

					};

				}

				loader.load( three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.resolveURL( sourceURI, options.path ), onLoad, undefined, reject );

			} );

		} ).then( function ( texture ) {

			// Clean up resources and configure Texture.

			if ( isObjectURL === true ) {

				URL.revokeObjectURL( sourceURI );

			}

			texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType( sourceDef.uri );

			return texture;

		} ).catch( function ( error ) {

			console.error( 'THREE.GLTFLoader: Couldn\'t load texture', sourceURI );
			throw error;

		} );

		this.sourceCache[ sourceIndex ] = promise;
		return promise;

	}

	/**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise<Texture>}
	 */
	assignTexture( materialParams, mapName, mapDef, encoding ) {

		const parser = this;

		return this.getDependency( 'texture', mapDef.index ).then( function ( texture ) {

			if ( ! texture ) return null;

			// Materials sample aoMap from UV set 1 and other maps from UV set 0 - this can't be configured
			// However, we will copy UV set 0 to UV set 1 on demand for aoMap
			if ( mapDef.texCoord !== undefined && mapDef.texCoord != 0 && ! ( mapName === 'aoMap' && mapDef.texCoord == 1 ) ) {

				console.warn( 'THREE.GLTFLoader: Custom UV set ' + mapDef.texCoord + ' for texture ' + mapName + ' not yet supported.' );

			}

			if ( parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] ) {

				const transform = mapDef.extensions !== undefined ? mapDef.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] : undefined;

				if ( transform ) {

					const gltfReference = parser.associations.get( texture );
					texture = parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ].extendTexture( texture, transform );
					parser.associations.set( texture, gltfReference );

				}

			}

			if ( encoding !== undefined ) {

				texture.encoding = encoding;

			}

			materialParams[ mapName ] = texture;

			return texture;

		} );

	}

	/**
	 * Assigns final material to a Mesh, Line, or Points instance. The instance
	 * already has a material (generated from the glTF material options alone)
	 * but reuse of the same glTF material may require multiple threejs materials
	 * to accommodate different primitive types, defines, etc. New materials will
	 * be created if necessary, and reused from a cache.
	 * @param  {Object3D} mesh Mesh, Line, or Points instance.
	 */
	assignFinalMaterial( mesh ) {

		const geometry = mesh.geometry;
		let material = mesh.material;

		const useDerivativeTangents = geometry.attributes.tangent === undefined;
		const useVertexColors = geometry.attributes.color !== undefined;
		const useFlatShading = geometry.attributes.normal === undefined;

		if ( mesh.isPoints ) {

			const cacheKey = 'PointsMaterial:' + material.uuid;

			let pointsMaterial = this.cache.get( cacheKey );

			if ( ! pointsMaterial ) {

				pointsMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial();
				three__WEBPACK_IMPORTED_MODULE_0__.Material.prototype.copy.call( pointsMaterial, material );
				pointsMaterial.color.copy( material.color );
				pointsMaterial.map = material.map;
				pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px

				this.cache.add( cacheKey, pointsMaterial );

			}

			material = pointsMaterial;

		} else if ( mesh.isLine ) {

			const cacheKey = 'LineBasicMaterial:' + material.uuid;

			let lineMaterial = this.cache.get( cacheKey );

			if ( ! lineMaterial ) {

				lineMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.LineBasicMaterial();
				three__WEBPACK_IMPORTED_MODULE_0__.Material.prototype.copy.call( lineMaterial, material );
				lineMaterial.color.copy( material.color );

				this.cache.add( cacheKey, lineMaterial );

			}

			material = lineMaterial;

		}

		// Clone the material if it will be modified
		if ( useDerivativeTangents || useVertexColors || useFlatShading ) {

			let cacheKey = 'ClonedMaterial:' + material.uuid + ':';

			if ( useDerivativeTangents ) cacheKey += 'derivative-tangents:';
			if ( useVertexColors ) cacheKey += 'vertex-colors:';
			if ( useFlatShading ) cacheKey += 'flat-shading:';

			let cachedMaterial = this.cache.get( cacheKey );

			if ( ! cachedMaterial ) {

				cachedMaterial = material.clone();

				if ( useVertexColors ) cachedMaterial.vertexColors = true;
				if ( useFlatShading ) cachedMaterial.flatShading = true;

				if ( useDerivativeTangents ) {

					// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
					if ( cachedMaterial.normalScale ) cachedMaterial.normalScale.y *= - 1;
					if ( cachedMaterial.clearcoatNormalScale ) cachedMaterial.clearcoatNormalScale.y *= - 1;

				}

				this.cache.add( cacheKey, cachedMaterial );

				this.associations.set( cachedMaterial, this.associations.get( material ) );

			}

			material = cachedMaterial;

		}

		// workarounds for mesh and geometry

		if ( material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined ) {

			geometry.setAttribute( 'uv2', geometry.attributes.uv );

		}

		mesh.material = material;

	}

	getMaterialType( /* materialIndex */ ) {

		return three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	 * @param {number} materialIndex
	 * @return {Promise<Material>}
	 */
	loadMaterial( materialIndex ) {

		const parser = this;
		const json = this.json;
		const extensions = this.extensions;
		const materialDef = json.materials[ materialIndex ];

		let materialType;
		const materialParams = {};
		const materialExtensions = materialDef.extensions || {};

		const pending = [];

		if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ] ) {

			const kmuExtension = extensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ];
			materialType = kmuExtension.getMaterialType();
			pending.push( kmuExtension.extendParams( materialParams, materialDef, parser ) );

		} else {

			// Specification:
			// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

			const metallicRoughness = materialDef.pbrMetallicRoughness || {};

			materialParams.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 1.0, 1.0, 1.0 );
			materialParams.opacity = 1.0;

			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

				const array = metallicRoughness.baseColorFactor;

				materialParams.color.fromArray( array );
				materialParams.opacity = array[ 3 ];

			}

			if ( metallicRoughness.baseColorTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture, three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding ) );

			}

			materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
			materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

			if ( metallicRoughness.metallicRoughnessTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture ) );
				pending.push( parser.assignTexture( materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture ) );

			}

			materialType = this._invokeOne( function ( ext ) {

				return ext.getMaterialType && ext.getMaterialType( materialIndex );

			} );

			pending.push( Promise.all( this._invokeAll( function ( ext ) {

				return ext.extendMaterialParams && ext.extendMaterialParams( materialIndex, materialParams );

			} ) ) );

		}

		if ( materialDef.doubleSided === true ) {

			materialParams.side = three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide;

		}

		const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

		if ( alphaMode === ALPHA_MODES.BLEND ) {

			materialParams.transparent = true;

			// See: https://github.com/mrdoob/three.js/issues/17706
			materialParams.depthWrite = false;

		} else {

			materialParams.transparent = false;

			if ( alphaMode === ALPHA_MODES.MASK ) {

				materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

			}

		}

		if ( materialDef.normalTexture !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'normalMap', materialDef.normalTexture ) );

			materialParams.normalScale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2( 1, 1 );

			if ( materialDef.normalTexture.scale !== undefined ) {

				const scale = materialDef.normalTexture.scale;

				materialParams.normalScale.set( scale, scale );

			}

		}

		if ( materialDef.occlusionTexture !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'aoMap', materialDef.occlusionTexture ) );

			if ( materialDef.occlusionTexture.strength !== undefined ) {

				materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;

			}

		}

		if ( materialDef.emissiveFactor !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial ) {

			materialParams.emissive = new three__WEBPACK_IMPORTED_MODULE_0__.Color().fromArray( materialDef.emissiveFactor );

		}

		if ( materialDef.emissiveTexture !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture, three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding ) );

		}

		return Promise.all( pending ).then( function () {

			const material = new materialType( materialParams );

			if ( materialDef.name ) material.name = materialDef.name;

			assignExtrasToUserData( material, materialDef );

			parser.associations.set( material, { materials: materialIndex } );

			if ( materialDef.extensions ) addUnknownExtensionsToUserData( extensions, material, materialDef );

			return material;

		} );

	}

	/** When Object3D instances are targeted by animation, they need unique names. */
	createUniqueName( originalName ) {

		const sanitizedName = three__WEBPACK_IMPORTED_MODULE_0__.PropertyBinding.sanitizeNodeName( originalName || '' );

		let name = sanitizedName;

		for ( let i = 1; this.nodeNamesUsed[ name ]; ++ i ) {

			name = sanitizedName + '_' + i;

		}

		this.nodeNamesUsed[ name ] = true;

		return name;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	 *
	 * Creates BufferGeometries from primitives.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Promise<Array<BufferGeometry>>}
	 */
	loadGeometries( primitives ) {

		const parser = this;
		const extensions = this.extensions;
		const cache = this.primitiveCache;

		function createDracoPrimitive( primitive ) {

			return extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ]
				.decodePrimitive( primitive, parser )
				.then( function ( geometry ) {

					return addPrimitiveAttributes( geometry, primitive, parser );

				} );

		}

		const pending = [];

		for ( let i = 0, il = primitives.length; i < il; i ++ ) {

			const primitive = primitives[ i ];
			const cacheKey = createPrimitiveKey( primitive );

			// See if we've already created this geometry
			const cached = cache[ cacheKey ];

			if ( cached ) {

				// Use the cached geometry if it exists
				pending.push( cached.promise );

			} else {

				let geometryPromise;

				if ( primitive.extensions && primitive.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ] ) {

					// Use DRACO geometry if available
					geometryPromise = createDracoPrimitive( primitive );

				} else {

					// Otherwise create a new geometry
					geometryPromise = addPrimitiveAttributes( new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry(), primitive, parser );

				}

				// Cache this geometry
				cache[ cacheKey ] = { primitive: primitive, promise: geometryPromise };

				pending.push( geometryPromise );

			}

		}

		return Promise.all( pending );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	 * @param {number} meshIndex
	 * @return {Promise<Group|Mesh|SkinnedMesh>}
	 */
	loadMesh( meshIndex ) {

		const parser = this;
		const json = this.json;
		const extensions = this.extensions;

		const meshDef = json.meshes[ meshIndex ];
		const primitives = meshDef.primitives;

		const pending = [];

		for ( let i = 0, il = primitives.length; i < il; i ++ ) {

			const material = primitives[ i ].material === undefined
				? createDefaultMaterial( this.cache )
				: this.getDependency( 'material', primitives[ i ].material );

			pending.push( material );

		}

		pending.push( parser.loadGeometries( primitives ) );

		return Promise.all( pending ).then( function ( results ) {

			const materials = results.slice( 0, results.length - 1 );
			const geometries = results[ results.length - 1 ];

			const meshes = [];

			for ( let i = 0, il = geometries.length; i < il; i ++ ) {

				const geometry = geometries[ i ];
				const primitive = primitives[ i ];

				// 1. create Mesh

				let mesh;

				const material = materials[ i ];

				if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLES ||
						primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ||
						primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ||
						primitive.mode === undefined ) {

					// .isSkinnedMesh isn't in glTF spec. See ._markDefs()
					mesh = meshDef.isSkinnedMesh === true
						? new three__WEBPACK_IMPORTED_MODULE_0__.SkinnedMesh( geometry, material )
						: new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );

					if ( mesh.isSkinnedMesh === true && ! mesh.geometry.attributes.skinWeight.normalized ) {

						// we normalize floating point skin weight array to fix malformed assets (see #15319)
						// it's important to skip this for non-float32 data since normalizeSkinWeights assumes non-normalized inputs
						mesh.normalizeSkinWeights();

					}

					if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ) {

						mesh.geometry = (0,_utils_BufferGeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__.toTrianglesDrawMode)( mesh.geometry, three__WEBPACK_IMPORTED_MODULE_0__.TriangleStripDrawMode );

					} else if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ) {

						mesh.geometry = (0,_utils_BufferGeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__.toTrianglesDrawMode)( mesh.geometry, three__WEBPACK_IMPORTED_MODULE_0__.TriangleFanDrawMode );

					}

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINES ) {

					mesh = new three__WEBPACK_IMPORTED_MODULE_0__.LineSegments( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_STRIP ) {

					mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Line( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_LOOP ) {

					mesh = new three__WEBPACK_IMPORTED_MODULE_0__.LineLoop( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.POINTS ) {

					mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Points( geometry, material );

				} else {

					throw new Error( 'THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode );

				}

				if ( Object.keys( mesh.geometry.morphAttributes ).length > 0 ) {

					updateMorphTargets( mesh, meshDef );

				}

				mesh.name = parser.createUniqueName( meshDef.name || ( 'mesh_' + meshIndex ) );

				assignExtrasToUserData( mesh, meshDef );

				if ( primitive.extensions ) addUnknownExtensionsToUserData( extensions, mesh, primitive );

				parser.assignFinalMaterial( mesh );

				meshes.push( mesh );

			}

			for ( let i = 0, il = meshes.length; i < il; i ++ ) {

				parser.associations.set( meshes[ i ], {
					meshes: meshIndex,
					primitives: i
				} );

			}

			if ( meshes.length === 1 ) {

				return meshes[ 0 ];

			}

			const group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();

			parser.associations.set( group, { meshes: meshIndex } );

			for ( let i = 0, il = meshes.length; i < il; i ++ ) {

				group.add( meshes[ i ] );

			}

			return group;

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	 * @param {number} cameraIndex
	 * @return {Promise<THREE.Camera>}
	 */
	loadCamera( cameraIndex ) {

		let camera;
		const cameraDef = this.json.cameras[ cameraIndex ];
		const params = cameraDef[ cameraDef.type ];

		if ( ! params ) {

			console.warn( 'THREE.GLTFLoader: Missing camera parameters.' );
			return;

		}

		if ( cameraDef.type === 'perspective' ) {

			camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.radToDeg( params.yfov ), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6 );

		} else if ( cameraDef.type === 'orthographic' ) {

			camera = new three__WEBPACK_IMPORTED_MODULE_0__.OrthographicCamera( - params.xmag, params.xmag, params.ymag, - params.ymag, params.znear, params.zfar );

		}

		if ( cameraDef.name ) camera.name = this.createUniqueName( cameraDef.name );

		assignExtrasToUserData( camera, cameraDef );

		return Promise.resolve( camera );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	 * @param {number} skinIndex
	 * @return {Promise<Skeleton>}
	 */
	loadSkin( skinIndex ) {

		const skinDef = this.json.skins[ skinIndex ];

		const pending = [];

		for ( let i = 0, il = skinDef.joints.length; i < il; i ++ ) {

			pending.push( this.getDependency( 'node', skinDef.joints[ i ] ) );

		}

		if ( skinDef.inverseBindMatrices !== undefined ) {

			pending.push( this.getDependency( 'accessor', skinDef.inverseBindMatrices ) );

		} else {

			pending.push( null );

		}

		return Promise.all( pending ).then( function ( results ) {

			const inverseBindMatrices = results.pop();
			const jointNodes = results;

			const bones = [];
			const boneInverses = [];

			for ( let i = 0, il = jointNodes.length; i < il; i ++ ) {

				const jointNode = jointNodes[ i ];

				if ( jointNode ) {

					bones.push( jointNode );

					const mat = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();

					if ( inverseBindMatrices !== null ) {

						mat.fromArray( inverseBindMatrices.array, i * 16 );

					}

					boneInverses.push( mat );

				} else {

					console.warn( 'THREE.GLTFLoader: Joint "%s" could not be found.', skinDef.joints[ i ] );

				}

			}

			return new three__WEBPACK_IMPORTED_MODULE_0__.Skeleton( bones, boneInverses );

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	 * @param {number} animationIndex
	 * @return {Promise<AnimationClip>}
	 */
	loadAnimation( animationIndex ) {

		const json = this.json;

		const animationDef = json.animations[ animationIndex ];

		const pendingNodes = [];
		const pendingInputAccessors = [];
		const pendingOutputAccessors = [];
		const pendingSamplers = [];
		const pendingTargets = [];

		for ( let i = 0, il = animationDef.channels.length; i < il; i ++ ) {

			const channel = animationDef.channels[ i ];
			const sampler = animationDef.samplers[ channel.sampler ];
			const target = channel.target;
			const name = target.node;
			const input = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.input ] : sampler.input;
			const output = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.output ] : sampler.output;

			pendingNodes.push( this.getDependency( 'node', name ) );
			pendingInputAccessors.push( this.getDependency( 'accessor', input ) );
			pendingOutputAccessors.push( this.getDependency( 'accessor', output ) );
			pendingSamplers.push( sampler );
			pendingTargets.push( target );

		}

		return Promise.all( [

			Promise.all( pendingNodes ),
			Promise.all( pendingInputAccessors ),
			Promise.all( pendingOutputAccessors ),
			Promise.all( pendingSamplers ),
			Promise.all( pendingTargets )

		] ).then( function ( dependencies ) {

			const nodes = dependencies[ 0 ];
			const inputAccessors = dependencies[ 1 ];
			const outputAccessors = dependencies[ 2 ];
			const samplers = dependencies[ 3 ];
			const targets = dependencies[ 4 ];

			const tracks = [];

			for ( let i = 0, il = nodes.length; i < il; i ++ ) {

				const node = nodes[ i ];
				const inputAccessor = inputAccessors[ i ];
				const outputAccessor = outputAccessors[ i ];
				const sampler = samplers[ i ];
				const target = targets[ i ];

				if ( node === undefined ) continue;

				node.updateMatrix();

				let TypedKeyframeTrack;

				switch ( PATH_PROPERTIES[ target.path ] ) {

					case PATH_PROPERTIES.weights:

						TypedKeyframeTrack = three__WEBPACK_IMPORTED_MODULE_0__.NumberKeyframeTrack;
						break;

					case PATH_PROPERTIES.rotation:

						TypedKeyframeTrack = three__WEBPACK_IMPORTED_MODULE_0__.QuaternionKeyframeTrack;
						break;

					case PATH_PROPERTIES.position:
					case PATH_PROPERTIES.scale:
					default:

						TypedKeyframeTrack = three__WEBPACK_IMPORTED_MODULE_0__.VectorKeyframeTrack;
						break;

				}

				const targetName = node.name ? node.name : node.uuid;

				const interpolation = sampler.interpolation !== undefined ? INTERPOLATION[ sampler.interpolation ] : three__WEBPACK_IMPORTED_MODULE_0__.InterpolateLinear;

				const targetNames = [];

				if ( PATH_PROPERTIES[ target.path ] === PATH_PROPERTIES.weights ) {

					node.traverse( function ( object ) {

						if ( object.morphTargetInfluences ) {

							targetNames.push( object.name ? object.name : object.uuid );

						}

					} );

				} else {

					targetNames.push( targetName );

				}

				let outputArray = outputAccessor.array;

				if ( outputAccessor.normalized ) {

					const scale = getNormalizedComponentScale( outputArray.constructor );
					const scaled = new Float32Array( outputArray.length );

					for ( let j = 0, jl = outputArray.length; j < jl; j ++ ) {

						scaled[ j ] = outputArray[ j ] * scale;

					}

					outputArray = scaled;

				}

				for ( let j = 0, jl = targetNames.length; j < jl; j ++ ) {

					const track = new TypedKeyframeTrack(
						targetNames[ j ] + '.' + PATH_PROPERTIES[ target.path ],
						inputAccessor.array,
						outputArray,
						interpolation
					);

					// Override interpolation with custom factory method.
					if ( sampler.interpolation === 'CUBICSPLINE' ) {

						track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline( result ) {

							// A CUBICSPLINE keyframe in glTF has three output values for each input value,
							// representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
							// must be divided by three to get the interpolant's sampleSize argument.

							const interpolantType = ( this instanceof three__WEBPACK_IMPORTED_MODULE_0__.QuaternionKeyframeTrack ) ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;

							return new interpolantType( this.times, this.values, this.getValueSize() / 3, result );

						};

						// Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
						track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;

					}

					tracks.push( track );

				}

			}

			const name = animationDef.name ? animationDef.name : 'animation_' + animationIndex;

			return new three__WEBPACK_IMPORTED_MODULE_0__.AnimationClip( name, undefined, tracks );

		} );

	}

	createNodeMesh( nodeIndex ) {

		const json = this.json;
		const parser = this;
		const nodeDef = json.nodes[ nodeIndex ];

		if ( nodeDef.mesh === undefined ) return null;

		return parser.getDependency( 'mesh', nodeDef.mesh ).then( function ( mesh ) {

			const node = parser._getNodeRef( parser.meshCache, nodeDef.mesh, mesh );

			// if weights are provided on the node, override weights on the mesh.
			if ( nodeDef.weights !== undefined ) {

				node.traverse( function ( o ) {

					if ( ! o.isMesh ) return;

					for ( let i = 0, il = nodeDef.weights.length; i < il; i ++ ) {

						o.morphTargetInfluences[ i ] = nodeDef.weights[ i ];

					}

				} );

			}

			return node;

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	 * @param {number} nodeIndex
	 * @return {Promise<Object3D>}
	 */
	loadNode( nodeIndex ) {

		const json = this.json;
		const extensions = this.extensions;
		const parser = this;

		const nodeDef = json.nodes[ nodeIndex ];

		// reserve node's name before its dependencies, so the root has the intended name.
		const nodeName = nodeDef.name ? parser.createUniqueName( nodeDef.name ) : '';

		return ( function () {

			const objectPending = [];

			const meshPromise = parser._invokeOne( function ( ext ) {

				return ext.createNodeMesh && ext.createNodeMesh( nodeIndex );

			} );

			if ( meshPromise ) {

				objectPending.push( meshPromise );

			}

			if ( nodeDef.camera !== undefined ) {

				objectPending.push( parser.getDependency( 'camera', nodeDef.camera ).then( function ( camera ) {

					return parser._getNodeRef( parser.cameraCache, nodeDef.camera, camera );

				} ) );

			}

			parser._invokeAll( function ( ext ) {

				return ext.createNodeAttachment && ext.createNodeAttachment( nodeIndex );

			} ).forEach( function ( promise ) {

				objectPending.push( promise );

			} );

			const childPending = [];
			const childrenDef = nodeDef.children || [];

			for ( let i = 0, il = childrenDef.length; i < il; i ++ ) {

				childPending.push( parser.getDependency( 'node', childrenDef[ i ] ) );

			}

			const skeletonPending = nodeDef.skin === undefined
				? Promise.resolve( null )
				: parser.getDependency( 'skin', nodeDef.skin );

			return Promise.all( [
				Promise.all( objectPending ),
				Promise.all( childPending ),
				skeletonPending
			] );

		}() ).then( function ( results ) {

			const objects = results[ 0 ];
			const children = results[ 1 ];
			const skeleton = results[ 2 ];

			let node;

			// .isBone isn't in glTF spec. See ._markDefs
			if ( nodeDef.isBone === true ) {

				node = new three__WEBPACK_IMPORTED_MODULE_0__.Bone();

			} else if ( objects.length > 1 ) {

				node = new three__WEBPACK_IMPORTED_MODULE_0__.Group();

			} else if ( objects.length === 1 ) {

				node = objects[ 0 ];

			} else {

				node = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();

			}

			if ( node !== objects[ 0 ] ) {

				for ( let i = 0, il = objects.length; i < il; i ++ ) {

					node.add( objects[ i ] );

				}

			}

			if ( nodeDef.name ) {

				node.userData.name = nodeDef.name;
				node.name = nodeName;

			}

			assignExtrasToUserData( node, nodeDef );

			if ( nodeDef.extensions ) addUnknownExtensionsToUserData( extensions, node, nodeDef );

			if ( nodeDef.matrix !== undefined ) {

				const matrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
				matrix.fromArray( nodeDef.matrix );
				node.applyMatrix4( matrix );

			} else {

				if ( nodeDef.translation !== undefined ) {

					node.position.fromArray( nodeDef.translation );

				}

				if ( nodeDef.rotation !== undefined ) {

					node.quaternion.fromArray( nodeDef.rotation );

				}

				if ( nodeDef.scale !== undefined ) {

					node.scale.fromArray( nodeDef.scale );

				}

			}

			if ( ! parser.associations.has( node ) ) {

				parser.associations.set( node, {} );

			}

			parser.associations.get( node ).nodes = nodeIndex;

			if ( skeleton !== null ) {

				// This full traverse should be fine because
				// child glTF nodes have not been added to this node yet.
				node.traverse( function ( mesh ) {

					if ( ! mesh.isSkinnedMesh ) return;

					mesh.bind( skeleton, _identityMatrix );

				} );

			}

			for ( let i = 0, il = children.length; i < il; i ++ ) {

				node.add( children[ i ] );

			}

			return node;

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<Group>}
	 */
	loadScene( sceneIndex ) {

		const extensions = this.extensions;
		const sceneDef = this.json.scenes[ sceneIndex ];
		const parser = this;

		// Loader returns Group, not Scene.
		// See: https://github.com/mrdoob/three.js/issues/18342#issuecomment-578981172
		const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
		if ( sceneDef.name ) scene.name = parser.createUniqueName( sceneDef.name );

		assignExtrasToUserData( scene, sceneDef );

		if ( sceneDef.extensions ) addUnknownExtensionsToUserData( extensions, scene, sceneDef );

		const nodeIds = sceneDef.nodes || [];

		const pending = [];

		for ( let i = 0, il = nodeIds.length; i < il; i ++ ) {

			pending.push( parser.getDependency( 'node', nodeIds[ i ] ) );

		}

		return Promise.all( pending ).then( function ( nodes ) {

			for ( let i = 0, il = nodes.length; i < il; i ++ ) {

				scene.add( nodes[ i ] );

			}

			// Removes dangling associations, associations that reference a node that
			// didn't make it into the scene.
			const reduceAssociations = ( node ) => {

				const reducedAssociations = new Map();

				for ( const [ key, value ] of parser.associations ) {

					if ( key instanceof three__WEBPACK_IMPORTED_MODULE_0__.Material || key instanceof three__WEBPACK_IMPORTED_MODULE_0__.Texture ) {

						reducedAssociations.set( key, value );

					}

				}

				node.traverse( ( node ) => {

					const mappings = parser.associations.get( node );

					if ( mappings != null ) {

						reducedAssociations.set( node, mappings );

					}

				} );

				return reducedAssociations;

			};

			parser.associations = reduceAssociations( scene );

			return scene;

		} );

	}

}

/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 */
function computeBounds( geometry, primitiveDef, parser ) {

	const attributes = primitiveDef.attributes;

	const box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3();

	if ( attributes.POSITION !== undefined ) {

		const accessor = parser.json.accessors[ attributes.POSITION ];

		const min = accessor.min;
		const max = accessor.max;

		// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

		if ( min !== undefined && max !== undefined ) {

			box.set(
				new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( min[ 0 ], min[ 1 ], min[ 2 ] ),
				new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( max[ 0 ], max[ 1 ], max[ 2 ] )
			);

			if ( accessor.normalized ) {

				const boxScale = getNormalizedComponentScale( WEBGL_COMPONENT_TYPES[ accessor.componentType ] );
				box.min.multiplyScalar( boxScale );
				box.max.multiplyScalar( boxScale );

			}

		} else {

			console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

			return;

		}

	} else {

		return;

	}

	const targets = primitiveDef.targets;

	if ( targets !== undefined ) {

		const maxDisplacement = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
		const vector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

		for ( let i = 0, il = targets.length; i < il; i ++ ) {

			const target = targets[ i ];

			if ( target.POSITION !== undefined ) {

				const accessor = parser.json.accessors[ target.POSITION ];
				const min = accessor.min;
				const max = accessor.max;

				// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

				if ( min !== undefined && max !== undefined ) {

					// we need to get max of absolute components because target weight is [-1,1]
					vector.setX( Math.max( Math.abs( min[ 0 ] ), Math.abs( max[ 0 ] ) ) );
					vector.setY( Math.max( Math.abs( min[ 1 ] ), Math.abs( max[ 1 ] ) ) );
					vector.setZ( Math.max( Math.abs( min[ 2 ] ), Math.abs( max[ 2 ] ) ) );


					if ( accessor.normalized ) {

						const boxScale = getNormalizedComponentScale( WEBGL_COMPONENT_TYPES[ accessor.componentType ] );
						vector.multiplyScalar( boxScale );

					}

					// Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
					// to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
					// are used to implement key-frame animations and as such only two are active at a time - this results in very large
					// boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.
					maxDisplacement.max( vector );

				} else {

					console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

				}

			}

		}

		// As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.
		box.expandByVector( maxDisplacement );

	}

	geometry.boundingBox = box;

	const sphere = new three__WEBPACK_IMPORTED_MODULE_0__.Sphere();

	box.getCenter( sphere.center );
	sphere.radius = box.min.distanceTo( box.max ) / 2;

	geometry.boundingSphere = sphere;

}

/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */
function addPrimitiveAttributes( geometry, primitiveDef, parser ) {

	const attributes = primitiveDef.attributes;

	const pending = [];

	function assignAttributeAccessor( accessorIndex, attributeName ) {

		return parser.getDependency( 'accessor', accessorIndex )
			.then( function ( accessor ) {

				geometry.setAttribute( attributeName, accessor );

			} );

	}

	for ( const gltfAttributeName in attributes ) {

		const threeAttributeName = ATTRIBUTES[ gltfAttributeName ] || gltfAttributeName.toLowerCase();

		// Skip attributes already provided by e.g. Draco extension.
		if ( threeAttributeName in geometry.attributes ) continue;

		pending.push( assignAttributeAccessor( attributes[ gltfAttributeName ], threeAttributeName ) );

	}

	if ( primitiveDef.indices !== undefined && ! geometry.index ) {

		const accessor = parser.getDependency( 'accessor', primitiveDef.indices ).then( function ( accessor ) {

			geometry.setIndex( accessor );

		} );

		pending.push( accessor );

	}

	assignExtrasToUserData( geometry, primitiveDef );

	computeBounds( geometry, primitiveDef, parser );

	return Promise.all( pending ).then( function () {

		return primitiveDef.targets !== undefined
			? addMorphTargets( geometry, primitiveDef.targets, parser )
			: geometry;

	} );

}




/***/ }),

/***/ "./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeMikkTSpaceTangents": () => (/* binding */ computeMikkTSpaceTangents),
/* harmony export */   "computeMorphedAttributes": () => (/* binding */ computeMorphedAttributes),
/* harmony export */   "computeTangents": () => (/* binding */ computeTangents),
/* harmony export */   "deepCloneAttribute": () => (/* binding */ deepCloneAttribute),
/* harmony export */   "deinterleaveAttribute": () => (/* binding */ deinterleaveAttribute),
/* harmony export */   "deinterleaveGeometry": () => (/* binding */ deinterleaveGeometry),
/* harmony export */   "estimateBytesUsed": () => (/* binding */ estimateBytesUsed),
/* harmony export */   "interleaveAttributes": () => (/* binding */ interleaveAttributes),
/* harmony export */   "mergeBufferAttributes": () => (/* binding */ mergeBufferAttributes),
/* harmony export */   "mergeBufferGeometries": () => (/* binding */ mergeBufferGeometries),
/* harmony export */   "mergeGroups": () => (/* binding */ mergeGroups),
/* harmony export */   "mergeVertices": () => (/* binding */ mergeVertices),
/* harmony export */   "toCreasedNormals": () => (/* binding */ toCreasedNormals),
/* harmony export */   "toTrianglesDrawMode": () => (/* binding */ toTrianglesDrawMode)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");


function computeTangents() {

	throw new Error( 'BufferGeometryUtils: computeTangents renamed to computeMikkTSpaceTangents.' );

}

function computeMikkTSpaceTangents( geometry, MikkTSpace, negateSign = true ) {

	if ( ! MikkTSpace || ! MikkTSpace.isReady ) {

		throw new Error( 'BufferGeometryUtils: Initialized MikkTSpace library required.' );

	}

	if ( ! geometry.hasAttribute( 'position' ) || ! geometry.hasAttribute( 'normal' ) || ! geometry.hasAttribute( 'uv' ) ) {

		throw new Error( 'BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.' );

	}

	function getAttributeArray( attribute ) {

		if ( attribute.normalized || attribute.isInterleavedBufferAttribute ) {

			const dstArray = new Float32Array( attribute.getCount() * attribute.itemSize );

			for ( let i = 0, j = 0; i < attribute.getCount(); i ++ ) {

				dstArray[ j ++ ] = attribute.getX( i );
				dstArray[ j ++ ] = attribute.getY( i );

				if ( attribute.itemSize > 2 ) {

					dstArray[ j ++ ] = attribute.getZ( i );

				}

			}

			return dstArray;

		}

		if ( attribute.array instanceof Float32Array ) {

			return attribute.array;

		}

		return new Float32Array( attribute.array );

	}

	// MikkTSpace algorithm requires non-indexed input.

	const _geometry = geometry.index ? geometry.toNonIndexed() : geometry;

	// Compute vertex tangents.

	const tangents = MikkTSpace.generateTangents(

		getAttributeArray( _geometry.attributes.position ),
		getAttributeArray( _geometry.attributes.normal ),
		getAttributeArray( _geometry.attributes.uv )

	);

	// Texture coordinate convention of glTF differs from the apparent
	// default of the MikkTSpace library; .w component must be flipped.

	if ( negateSign ) {

		for ( let i = 3; i < tangents.length; i += 4 ) {

			tangents[ i ] *= - 1;

		}

	}

	//

	_geometry.setAttribute( 'tangent', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( tangents, 4 ) );

	if ( geometry !== _geometry ) {

		geometry.copy( _geometry );

	}

	return geometry;

}

/**
 * @param  {Array<BufferGeometry>} geometries
 * @param  {Boolean} useGroups
 * @return {BufferGeometry}
 */
function mergeBufferGeometries( geometries, useGroups = false ) {

	const isIndexed = geometries[ 0 ].index !== null;

	const attributesUsed = new Set( Object.keys( geometries[ 0 ].attributes ) );
	const morphAttributesUsed = new Set( Object.keys( geometries[ 0 ].morphAttributes ) );

	const attributes = {};
	const morphAttributes = {};

	const morphTargetsRelative = geometries[ 0 ].morphTargetsRelative;

	const mergedGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();

	let offset = 0;

	for ( let i = 0; i < geometries.length; ++ i ) {

		const geometry = geometries[ i ];
		let attributesCount = 0;

		// ensure that all geometries are indexed, or none

		if ( isIndexed !== ( geometry.index !== null ) ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.' );
			return null;

		}

		// gather attributes, exit early if they're different

		for ( const name in geometry.attributes ) {

			if ( ! attributesUsed.has( name ) ) {

				console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. All geometries must have compatible attributes; make sure "' + name + '" attribute exists among all geometries, or in none of them.' );
				return null;

			}

			if ( attributes[ name ] === undefined ) attributes[ name ] = [];

			attributes[ name ].push( geometry.attributes[ name ] );

			attributesCount ++;

		}

		// ensure geometries have the same number of attributes

		if ( attributesCount !== attributesUsed.size ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. Make sure all geometries have the same number of attributes.' );
			return null;

		}

		// gather morph attributes, exit early if they're different

		if ( morphTargetsRelative !== geometry.morphTargetsRelative ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. .morphTargetsRelative must be consistent throughout all geometries.' );
			return null;

		}

		for ( const name in geometry.morphAttributes ) {

			if ( ! morphAttributesUsed.has( name ) ) {

				console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '.  .morphAttributes must be consistent throughout all geometries.' );
				return null;

			}

			if ( morphAttributes[ name ] === undefined ) morphAttributes[ name ] = [];

			morphAttributes[ name ].push( geometry.morphAttributes[ name ] );

		}

		if ( useGroups ) {

			let count;

			if ( isIndexed ) {

				count = geometry.index.count;

			} else if ( geometry.attributes.position !== undefined ) {

				count = geometry.attributes.position.count;

			} else {

				console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index ' + i + '. The geometry must have either an index or a position attribute' );
				return null;

			}

			mergedGeometry.addGroup( offset, count, i );

			offset += count;

		}

	}

	// merge indices

	if ( isIndexed ) {

		let indexOffset = 0;
		const mergedIndex = [];

		for ( let i = 0; i < geometries.length; ++ i ) {

			const index = geometries[ i ].index;

			for ( let j = 0; j < index.count; ++ j ) {

				mergedIndex.push( index.getX( j ) + indexOffset );

			}

			indexOffset += geometries[ i ].attributes.position.count;

		}

		mergedGeometry.setIndex( mergedIndex );

	}

	// merge attributes

	for ( const name in attributes ) {

		const mergedAttribute = mergeBufferAttributes( attributes[ name ] );

		if ( ! mergedAttribute ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the ' + name + ' attribute.' );
			return null;

		}

		mergedGeometry.setAttribute( name, mergedAttribute );

	}

	// merge morph attributes

	for ( const name in morphAttributes ) {

		const numMorphTargets = morphAttributes[ name ][ 0 ].length;

		if ( numMorphTargets === 0 ) break;

		mergedGeometry.morphAttributes = mergedGeometry.morphAttributes || {};
		mergedGeometry.morphAttributes[ name ] = [];

		for ( let i = 0; i < numMorphTargets; ++ i ) {

			const morphAttributesToMerge = [];

			for ( let j = 0; j < morphAttributes[ name ].length; ++ j ) {

				morphAttributesToMerge.push( morphAttributes[ name ][ j ][ i ] );

			}

			const mergedMorphAttribute = mergeBufferAttributes( morphAttributesToMerge );

			if ( ! mergedMorphAttribute ) {

				console.error( 'THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the ' + name + ' morphAttribute.' );
				return null;

			}

			mergedGeometry.morphAttributes[ name ].push( mergedMorphAttribute );

		}

	}

	return mergedGeometry;

}

/**
 * @param {Array<BufferAttribute>} attributes
 * @return {BufferAttribute}
 */
function mergeBufferAttributes( attributes ) {

	let TypedArray;
	let itemSize;
	let normalized;
	let arrayLength = 0;

	for ( let i = 0; i < attributes.length; ++ i ) {

		const attribute = attributes[ i ];

		if ( attribute.isInterleavedBufferAttribute ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported.' );
			return null;

		}

		if ( TypedArray === undefined ) TypedArray = attribute.array.constructor;
		if ( TypedArray !== attribute.array.constructor ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.' );
			return null;

		}

		if ( itemSize === undefined ) itemSize = attribute.itemSize;
		if ( itemSize !== attribute.itemSize ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.' );
			return null;

		}

		if ( normalized === undefined ) normalized = attribute.normalized;
		if ( normalized !== attribute.normalized ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.' );
			return null;

		}

		arrayLength += attribute.array.length;

	}

	const array = new TypedArray( arrayLength );
	let offset = 0;

	for ( let i = 0; i < attributes.length; ++ i ) {

		array.set( attributes[ i ].array, offset );

		offset += attributes[ i ].array.length;

	}

	return new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( array, itemSize, normalized );

}

/**
 * @param {BufferAttribute}
 * @return {BufferAttribute}
 */
function deepCloneAttribute( attribute ) {

	if ( attribute.isInstancedInterleavedBufferAttribute || attribute.isInterleavedBufferAttribute ) {

		return deinterleaveAttribute( attribute );

	}

	if ( attribute.isInstancedBufferAttribute ) {

		return new three__WEBPACK_IMPORTED_MODULE_0__.InstancedBufferAttribute().copy( attribute );

	}

	return new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute().copy( attribute );

}

/**
 * @param {Array<BufferAttribute>} attributes
 * @return {Array<InterleavedBufferAttribute>}
 */
function interleaveAttributes( attributes ) {

	// Interleaves the provided attributes into an InterleavedBuffer and returns
	// a set of InterleavedBufferAttributes for each attribute
	let TypedArray;
	let arrayLength = 0;
	let stride = 0;

	// calculate the length and type of the interleavedBuffer
	for ( let i = 0, l = attributes.length; i < l; ++ i ) {

		const attribute = attributes[ i ];

		if ( TypedArray === undefined ) TypedArray = attribute.array.constructor;
		if ( TypedArray !== attribute.array.constructor ) {

			console.error( 'AttributeBuffers of different types cannot be interleaved' );
			return null;

		}

		arrayLength += attribute.array.length;
		stride += attribute.itemSize;

	}

	// Create the set of buffer attributes
	const interleavedBuffer = new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBuffer( new TypedArray( arrayLength ), stride );
	let offset = 0;
	const res = [];
	const getters = [ 'getX', 'getY', 'getZ', 'getW' ];
	const setters = [ 'setX', 'setY', 'setZ', 'setW' ];

	for ( let j = 0, l = attributes.length; j < l; j ++ ) {

		const attribute = attributes[ j ];
		const itemSize = attribute.itemSize;
		const count = attribute.count;
		const iba = new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBufferAttribute( interleavedBuffer, itemSize, offset, attribute.normalized );
		res.push( iba );

		offset += itemSize;

		// Move the data for each attribute into the new interleavedBuffer
		// at the appropriate offset
		for ( let c = 0; c < count; c ++ ) {

			for ( let k = 0; k < itemSize; k ++ ) {

				iba[ setters[ k ] ]( c, attribute[ getters[ k ] ]( c ) );

			}

		}

	}

	return res;

}

// returns a new, non-interleaved version of the provided attribute
function deinterleaveAttribute( attribute ) {

	const cons = attribute.data.array.constructor;
	const count = attribute.count;
	const itemSize = attribute.itemSize;
	const normalized = attribute.normalized;

	const array = new cons( count * itemSize );
	let newAttribute;
	if ( attribute.isInstancedInterleavedBufferAttribute ) {

		newAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.InstancedBufferAttribute( array, itemSize, normalized, attribute.meshPerAttribute );

	} else {

		newAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( array, itemSize, normalized );

	}

	for ( let i = 0; i < count; i ++ ) {

		newAttribute.setX( i, attribute.getX( i ) );

		if ( itemSize >= 2 ) {

			newAttribute.setY( i, attribute.getY( i ) );

		}

		if ( itemSize >= 3 ) {

			newAttribute.setZ( i, attribute.getZ( i ) );

		}

		if ( itemSize >= 4 ) {

			newAttribute.setW( i, attribute.getW( i ) );

		}

	}

	return newAttribute;

}

// deinterleaves all attributes on the geometry
function deinterleaveGeometry( geometry ) {

	const attributes = geometry.attributes;
	const morphTargets = geometry.morphTargets;
	const attrMap = new Map();

	for ( const key in attributes ) {

		const attr = attributes[ key ];
		if ( attr.isInterleavedBufferAttribute ) {

			if ( ! attrMap.has( attr ) ) {

				attrMap.set( attr, deinterleaveAttribute( attr ) );

			}

			attributes[ key ] = attrMap.get( attr );

		}

	}

	for ( const key in morphTargets ) {

		const attr = morphTargets[ key ];
		if ( attr.isInterleavedBufferAttribute ) {

			if ( ! attrMap.has( attr ) ) {

				attrMap.set( attr, deinterleaveAttribute( attr ) );

			}

			morphTargets[ key ] = attrMap.get( attr );

		}

	}

}

/**
 * @param {Array<BufferGeometry>} geometry
 * @return {number}
 */
function estimateBytesUsed( geometry ) {

	// Return the estimated memory used by this geometry in bytes
	// Calculate using itemSize, count, and BYTES_PER_ELEMENT to account
	// for InterleavedBufferAttributes.
	let mem = 0;
	for ( const name in geometry.attributes ) {

		const attr = geometry.getAttribute( name );
		mem += attr.count * attr.itemSize * attr.array.BYTES_PER_ELEMENT;

	}

	const indices = geometry.getIndex();
	mem += indices ? indices.count * indices.itemSize * indices.array.BYTES_PER_ELEMENT : 0;
	return mem;

}

/**
 * @param {BufferGeometry} geometry
 * @param {number} tolerance
 * @return {BufferGeometry}
 */
function mergeVertices( geometry, tolerance = 1e-4 ) {

	tolerance = Math.max( tolerance, Number.EPSILON );

	// Generate an index buffer if the geometry doesn't have one, or optimize it
	// if it's already available.
	const hashToIndex = {};
	const indices = geometry.getIndex();
	const positions = geometry.getAttribute( 'position' );
	const vertexCount = indices ? indices.count : positions.count;

	// next value for triangle indices
	let nextIndex = 0;

	// attributes and new attribute arrays
	const attributeNames = Object.keys( geometry.attributes );
	const tmpAttributes = {};
	const tmpMorphAttributes = {};
	const newIndices = [];
	const getters = [ 'getX', 'getY', 'getZ', 'getW' ];
	const setters = [ 'setX', 'setY', 'setZ', 'setW' ];

	// Initialize the arrays, allocating space conservatively. Extra
	// space will be trimmed in the last step.
	for ( let i = 0, l = attributeNames.length; i < l; i ++ ) {

		const name = attributeNames[ i ];
		const attr = geometry.attributes[ name ];

		tmpAttributes[ name ] = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(
			new attr.array.constructor( attr.count * attr.itemSize ),
			attr.itemSize,
			attr.normalized
		);

		const morphAttr = geometry.morphAttributes[ name ];
		if ( morphAttr ) {

			tmpMorphAttributes[ name ] = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(
				new morphAttr.array.constructor( morphAttr.count * morphAttr.itemSize ),
				morphAttr.itemSize,
				morphAttr.normalized
			);

		}

	}

	// convert the error tolerance to an amount of decimal places to truncate to
	const decimalShift = Math.log10( 1 / tolerance );
	const shiftMultiplier = Math.pow( 10, decimalShift );
	for ( let i = 0; i < vertexCount; i ++ ) {

		const index = indices ? indices.getX( i ) : i;

		// Generate a hash for the vertex attributes at the current index 'i'
		let hash = '';
		for ( let j = 0, l = attributeNames.length; j < l; j ++ ) {

			const name = attributeNames[ j ];
			const attribute = geometry.getAttribute( name );
			const itemSize = attribute.itemSize;

			for ( let k = 0; k < itemSize; k ++ ) {

				// double tilde truncates the decimal value
				hash += `${ ~ ~ ( attribute[ getters[ k ] ]( index ) * shiftMultiplier ) },`;

			}

		}

		// Add another reference to the vertex if it's already
		// used by another index
		if ( hash in hashToIndex ) {

			newIndices.push( hashToIndex[ hash ] );

		} else {

			// copy data to the new index in the temporary attributes
			for ( let j = 0, l = attributeNames.length; j < l; j ++ ) {

				const name = attributeNames[ j ];
				const attribute = geometry.getAttribute( name );
				const morphAttr = geometry.morphAttributes[ name ];
				const itemSize = attribute.itemSize;
				const newarray = tmpAttributes[ name ];
				const newMorphArrays = tmpMorphAttributes[ name ];

				for ( let k = 0; k < itemSize; k ++ ) {

					const getterFunc = getters[ k ];
					const setterFunc = setters[ k ];
					newarray[ setterFunc ]( nextIndex, attribute[ getterFunc ]( index ) );

					if ( morphAttr ) {

						for ( let m = 0, ml = morphAttr.length; m < ml; m ++ ) {

							newMorphArrays[ m ][ setterFunc ]( nextIndex, morphAttr[ m ][ getterFunc ]( index ) );

						}

					}

				}

			}

			hashToIndex[ hash ] = nextIndex;
			newIndices.push( nextIndex );
			nextIndex ++;

		}

	}

	// generate result BufferGeometry
	const result = geometry.clone();
	for ( const name in geometry.attributes ) {

		const tmpAttribute = tmpAttributes[ name ];

		result.setAttribute( name, new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(
			tmpAttribute.array.slice( 0, nextIndex * tmpAttribute.itemSize ),
			tmpAttribute.itemSize,
			tmpAttribute.normalized,
		) );

		if ( ! ( name in tmpMorphAttributes ) ) continue;

		for ( let j = 0; j < tmpMorphAttributes[ name ].length; j ++ ) {

			const tmpMorphAttribute = tmpMorphAttributes[ name ][ j ];

			result.morphAttributes[ name ][ j ] = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(
				tmpMorphAttribute.array.slice( 0, nextIndex * tmpMorphAttribute.itemSize ),
				tmpMorphAttribute.itemSize,
				tmpMorphAttribute.normalized,
			);

		}

	}

	// indices

	result.setIndex( newIndices );

	return result;

}

/**
 * @param {BufferGeometry} geometry
 * @param {number} drawMode
 * @return {BufferGeometry}
 */
function toTrianglesDrawMode( geometry, drawMode ) {

	if ( drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TrianglesDrawMode ) {

		console.warn( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.' );
		return geometry;

	}

	if ( drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TriangleFanDrawMode || drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TriangleStripDrawMode ) {

		let index = geometry.getIndex();

		// generate index if not present

		if ( index === null ) {

			const indices = [];

			const position = geometry.getAttribute( 'position' );

			if ( position !== undefined ) {

				for ( let i = 0; i < position.count; i ++ ) {

					indices.push( i );

				}

				geometry.setIndex( indices );
				index = geometry.getIndex();

			} else {

				console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.' );
				return geometry;

			}

		}

		//

		const numberOfTriangles = index.count - 2;
		const newIndices = [];

		if ( drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TriangleFanDrawMode ) {

			// gl.TRIANGLE_FAN

			for ( let i = 1; i <= numberOfTriangles; i ++ ) {

				newIndices.push( index.getX( 0 ) );
				newIndices.push( index.getX( i ) );
				newIndices.push( index.getX( i + 1 ) );

			}

		} else {

			// gl.TRIANGLE_STRIP

			for ( let i = 0; i < numberOfTriangles; i ++ ) {

				if ( i % 2 === 0 ) {

					newIndices.push( index.getX( i ) );
					newIndices.push( index.getX( i + 1 ) );
					newIndices.push( index.getX( i + 2 ) );

				} else {

					newIndices.push( index.getX( i + 2 ) );
					newIndices.push( index.getX( i + 1 ) );
					newIndices.push( index.getX( i ) );

				}

			}

		}

		if ( ( newIndices.length / 3 ) !== numberOfTriangles ) {

			console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.' );

		}

		// build final geometry

		const newGeometry = geometry.clone();
		newGeometry.setIndex( newIndices );
		newGeometry.clearGroups();

		return newGeometry;

	} else {

		console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:', drawMode );
		return geometry;

	}

}

/**
 * Calculates the morphed attributes of a morphed/skinned BufferGeometry.
 * Helpful for Raytracing or Decals.
 * @param {Mesh | Line | Points} object An instance of Mesh, Line or Points.
 * @return {Object} An Object with original position/normal attributes and morphed ones.
 */
function computeMorphedAttributes( object ) {

	if ( object.geometry.isBufferGeometry !== true ) {

		console.error( 'THREE.BufferGeometryUtils: Geometry is not of type BufferGeometry.' );
		return null;

	}

	const _vA = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const _vB = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const _vC = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

	const _tempA = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const _tempB = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const _tempC = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

	const _morphA = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const _morphB = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const _morphC = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

	function _calculateMorphedAttributeData(
		object,
		attribute,
		morphAttribute,
		morphTargetsRelative,
		a,
		b,
		c,
		modifiedAttributeArray
	) {

		_vA.fromBufferAttribute( attribute, a );
		_vB.fromBufferAttribute( attribute, b );
		_vC.fromBufferAttribute( attribute, c );

		const morphInfluences = object.morphTargetInfluences;

		if ( morphAttribute && morphInfluences ) {

			_morphA.set( 0, 0, 0 );
			_morphB.set( 0, 0, 0 );
			_morphC.set( 0, 0, 0 );

			for ( let i = 0, il = morphAttribute.length; i < il; i ++ ) {

				const influence = morphInfluences[ i ];
				const morph = morphAttribute[ i ];

				if ( influence === 0 ) continue;

				_tempA.fromBufferAttribute( morph, a );
				_tempB.fromBufferAttribute( morph, b );
				_tempC.fromBufferAttribute( morph, c );

				if ( morphTargetsRelative ) {

					_morphA.addScaledVector( _tempA, influence );
					_morphB.addScaledVector( _tempB, influence );
					_morphC.addScaledVector( _tempC, influence );

				} else {

					_morphA.addScaledVector( _tempA.sub( _vA ), influence );
					_morphB.addScaledVector( _tempB.sub( _vB ), influence );
					_morphC.addScaledVector( _tempC.sub( _vC ), influence );

				}

			}

			_vA.add( _morphA );
			_vB.add( _morphB );
			_vC.add( _morphC );

		}

		if ( object.isSkinnedMesh ) {

			object.boneTransform( a, _vA );
			object.boneTransform( b, _vB );
			object.boneTransform( c, _vC );

		}

		modifiedAttributeArray[ a * 3 + 0 ] = _vA.x;
		modifiedAttributeArray[ a * 3 + 1 ] = _vA.y;
		modifiedAttributeArray[ a * 3 + 2 ] = _vA.z;
		modifiedAttributeArray[ b * 3 + 0 ] = _vB.x;
		modifiedAttributeArray[ b * 3 + 1 ] = _vB.y;
		modifiedAttributeArray[ b * 3 + 2 ] = _vB.z;
		modifiedAttributeArray[ c * 3 + 0 ] = _vC.x;
		modifiedAttributeArray[ c * 3 + 1 ] = _vC.y;
		modifiedAttributeArray[ c * 3 + 2 ] = _vC.z;

	}

	const geometry = object.geometry;
	const material = object.material;

	let a, b, c;
	const index = geometry.index;
	const positionAttribute = geometry.attributes.position;
	const morphPosition = geometry.morphAttributes.position;
	const morphTargetsRelative = geometry.morphTargetsRelative;
	const normalAttribute = geometry.attributes.normal;
	const morphNormal = geometry.morphAttributes.position;

	const groups = geometry.groups;
	const drawRange = geometry.drawRange;
	let i, j, il, jl;
	let group;
	let start, end;

	const modifiedPosition = new Float32Array( positionAttribute.count * positionAttribute.itemSize );
	const modifiedNormal = new Float32Array( normalAttribute.count * normalAttribute.itemSize );

	if ( index !== null ) {

		// indexed buffer geometry

		if ( Array.isArray( material ) ) {

			for ( i = 0, il = groups.length; i < il; i ++ ) {

				group = groups[ i ];

				start = Math.max( group.start, drawRange.start );
				end = Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) );

				for ( j = start, jl = end; j < jl; j += 3 ) {

					a = index.getX( j );
					b = index.getX( j + 1 );
					c = index.getX( j + 2 );

					_calculateMorphedAttributeData(
						object,
						positionAttribute,
						morphPosition,
						morphTargetsRelative,
						a, b, c,
						modifiedPosition
					);

					_calculateMorphedAttributeData(
						object,
						normalAttribute,
						morphNormal,
						morphTargetsRelative,
						a, b, c,
						modifiedNormal
					);

				}

			}

		} else {

			start = Math.max( 0, drawRange.start );
			end = Math.min( index.count, ( drawRange.start + drawRange.count ) );

			for ( i = start, il = end; i < il; i += 3 ) {

				a = index.getX( i );
				b = index.getX( i + 1 );
				c = index.getX( i + 2 );

				_calculateMorphedAttributeData(
					object,
					positionAttribute,
					morphPosition,
					morphTargetsRelative,
					a, b, c,
					modifiedPosition
				);

				_calculateMorphedAttributeData(
					object,
					normalAttribute,
					morphNormal,
					morphTargetsRelative,
					a, b, c,
					modifiedNormal
				);

			}

		}

	} else {

		// non-indexed buffer geometry

		if ( Array.isArray( material ) ) {

			for ( i = 0, il = groups.length; i < il; i ++ ) {

				group = groups[ i ];

				start = Math.max( group.start, drawRange.start );
				end = Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) );

				for ( j = start, jl = end; j < jl; j += 3 ) {

					a = j;
					b = j + 1;
					c = j + 2;

					_calculateMorphedAttributeData(
						object,
						positionAttribute,
						morphPosition,
						morphTargetsRelative,
						a, b, c,
						modifiedPosition
					);

					_calculateMorphedAttributeData(
						object,
						normalAttribute,
						morphNormal,
						morphTargetsRelative,
						a, b, c,
						modifiedNormal
					);

				}

			}

		} else {

			start = Math.max( 0, drawRange.start );
			end = Math.min( positionAttribute.count, ( drawRange.start + drawRange.count ) );

			for ( i = start, il = end; i < il; i += 3 ) {

				a = i;
				b = i + 1;
				c = i + 2;

				_calculateMorphedAttributeData(
					object,
					positionAttribute,
					morphPosition,
					morphTargetsRelative,
					a, b, c,
					modifiedPosition
				);

				_calculateMorphedAttributeData(
					object,
					normalAttribute,
					morphNormal,
					morphTargetsRelative,
					a, b, c,
					modifiedNormal
				);

			}

		}

	}

	const morphedPositionAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( modifiedPosition, 3 );
	const morphedNormalAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( modifiedNormal, 3 );

	return {

		positionAttribute: positionAttribute,
		normalAttribute: normalAttribute,
		morphedPositionAttribute: morphedPositionAttribute,
		morphedNormalAttribute: morphedNormalAttribute

	};

}

function mergeGroups( geometry ) {

	if ( geometry.groups.length === 0 ) {

		console.warn( 'THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge.' );
		return geometry;

	}

	let groups = geometry.groups;

	// sort groups by material index

	groups = groups.sort( ( a, b ) => {

		if ( a.materialIndex !== b.materialIndex ) return a.materialIndex - b.materialIndex;

		return a.start - b.start;

	} );

	// create index for non-indexed geometries

	if ( geometry.getIndex() === null ) {

		const positionAttribute = geometry.getAttribute( 'position' );
		const indices = [];

		for ( let i = 0; i < positionAttribute.count; i += 3 ) {

			indices.push( i, i + 1, i + 2 );

		}

		geometry.setIndex( indices );

	}

	// sort index

	const index = geometry.getIndex();

	const newIndices = [];

	for ( let i = 0; i < groups.length; i ++ ) {

		const group = groups[ i ];

		const groupStart = group.start;
		const groupLength = groupStart + group.count;

		for ( let j = groupStart; j < groupLength; j ++ ) {

			newIndices.push( index.getX( j ) );

		}

	}

	geometry.dispose(); // Required to force buffer recreation
	geometry.setIndex( newIndices );

	// update groups indices

	let start = 0;

	for ( let i = 0; i < groups.length; i ++ ) {

		const group = groups[ i ];

		group.start = start;
		start += group.count;

	}

	// merge groups

	let currentGroup = groups[ 0 ];

	geometry.groups = [ currentGroup ];

	for ( let i = 1; i < groups.length; i ++ ) {

		const group = groups[ i ];

		if ( currentGroup.materialIndex === group.materialIndex ) {

			currentGroup.count += group.count;

		} else {

			currentGroup = group;
			geometry.groups.push( currentGroup );

		}

	}

	return geometry;

}


// Creates a new, non-indexed geometry with smooth normals everywhere except faces that meet at
// an angle greater than the crease angle.
function toCreasedNormals( geometry, creaseAngle = Math.PI / 3 /* 60 degrees */ ) {

	const creaseDot = Math.cos( creaseAngle );
	const hashMultiplier = ( 1 + 1e-10 ) * 1e2;

	// reusable vertors
	const verts = [ new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3() ];
	const tempVec1 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const tempVec2 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const tempNorm = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const tempNorm2 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

	// hashes a vector
	function hashVertex( v ) {

		const x = ~ ~ ( v.x * hashMultiplier );
		const y = ~ ~ ( v.y * hashMultiplier );
		const z = ~ ~ ( v.z * hashMultiplier );
		return `${x},${y},${z}`;

	}

	const resultGeometry = geometry.toNonIndexed();
	const posAttr = resultGeometry.attributes.position;
	const vertexMap = {};

	// find all the normals shared by commonly located vertices
	for ( let i = 0, l = posAttr.count / 3; i < l; i ++ ) {

		const i3 = 3 * i;
		const a = verts[ 0 ].fromBufferAttribute( posAttr, i3 + 0 );
		const b = verts[ 1 ].fromBufferAttribute( posAttr, i3 + 1 );
		const c = verts[ 2 ].fromBufferAttribute( posAttr, i3 + 2 );

		tempVec1.subVectors( c, b );
		tempVec2.subVectors( a, b );

		// add the normal to the map for all vertices
		const normal = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().crossVectors( tempVec1, tempVec2 ).normalize();
		for ( let n = 0; n < 3; n ++ ) {

			const vert = verts[ n ];
			const hash = hashVertex( vert );
			if ( ! ( hash in vertexMap ) ) {

				vertexMap[ hash ] = [];

			}

			vertexMap[ hash ].push( normal );

		}

	}

	// average normals from all vertices that share a common location if they are within the
	// provided crease threshold
	const normalArray = new Float32Array( posAttr.count * 3 );
	const normAttr = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( normalArray, 3, false );
	for ( let i = 0, l = posAttr.count / 3; i < l; i ++ ) {

		// get the face normal for this vertex
		const i3 = 3 * i;
		const a = verts[ 0 ].fromBufferAttribute( posAttr, i3 + 0 );
		const b = verts[ 1 ].fromBufferAttribute( posAttr, i3 + 1 );
		const c = verts[ 2 ].fromBufferAttribute( posAttr, i3 + 2 );

		tempVec1.subVectors( c, b );
		tempVec2.subVectors( a, b );

		tempNorm.crossVectors( tempVec1, tempVec2 ).normalize();

		// average all normals that meet the threshold and set the normal value
		for ( let n = 0; n < 3; n ++ ) {

			const vert = verts[ n ];
			const hash = hashVertex( vert );
			const otherNormals = vertexMap[ hash ];
			tempNorm2.set( 0, 0, 0 );

			for ( let k = 0, lk = otherNormals.length; k < lk; k ++ ) {

				const otherNorm = otherNormals[ k ];
				if ( tempNorm.dot( otherNorm ) > creaseDot ) {

					tempNorm2.add( otherNorm );

				}

			}

			tempNorm2.normalize();
			normAttr.setXYZ( i3 + n, tempNorm2.x, tempNorm2.y, tempNorm2.z );

		}

	}

	resultGeometry.setAttribute( 'normal', normAttr );
	return resultGeometry;

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
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SceneRendererTJS */ "./src/SceneRendererTJS.ts");
/* harmony import */ var _markermedia_NFTaddTJS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markermedia/NFTaddTJS */ "./src/markermedia/NFTaddTJS.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  SceneRendererTJS: _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_0__["default"],
  NFTaddTJS: _markermedia_NFTaddTJS__WEBPACK_IMPORTED_MODULE_1__["default"]
});
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUdBQW1HLCtDQUFZOztBQUUvRzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsOENBQThDLDBDQUFPOztBQUVyRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFNBQVMsdURBQW9COztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsa0NBQWtDLHdDQUFLO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEscUdBQXFHLCtDQUFZOztBQUVqSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLHVEQUFvQjs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHdDQUF3Qyx3Q0FBSzs7QUFFN0M7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLHVEQUFvQjs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFNBQVMsdURBQW9COztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztB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OztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNGO0FBRWhELGlFQUFlO0VBQUU1TyxnQkFBZ0IsRUFBaEJBLHlEQUFnQjtFQUFFOEssU0FBUyxFQUFUQSw4REFBU0E7QUFBQSxDQUFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9TY2VuZVJlbmRlcmVyVEpTLnRzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9maWx0ZXJzL0FSbmZ0RmlsdGVyLnRzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9maWx0ZXJzL0RlbGF5YWJsZVNpZ25hbEZpbHRlci50cyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvZmlsdGVycy9PbmVFdXJvRmlsdGVyLnRzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9tYXJrZXJtZWRpYS9ORlRhZGRUSlMudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL3V0aWxzL1V0aWxzLnRzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy9leHRlcm5hbCB1bWQge1wiY29tbW9uanNcIjpcInRocmVlXCIsXCJjb21tb25qczJcIjpcInRocmVlXCIsXCJhbWRcIjpcInRocmVlXCIsXCJyb290XCI6XCJUSFJFRVwifSIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL3V0aWxzL0J1ZmZlckdlb21ldHJ5VXRpbHMuanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ0aHJlZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ0aHJlZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBUm5mdFRocmVlanNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJ0aHJlZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQVJuZnRUaHJlZWpzXCJdID0gZmFjdG9yeShyb290W1wiVEhSRUVcIl0pO1xufSkodGhpcywgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGhyZWVfXykgPT4ge1xucmV0dXJuICIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29uZmlnRGF0YSB7XHJcbiAgICBjYW1lcmE6IHtcclxuICAgICAgICBmYXI6IG51bWJlcjtcclxuICAgICAgICBmb3Y6IG51bWJlcjtcclxuICAgICAgICBtYXRyaXhBdXRvVXBkYXRlOiBib29sZWFuO1xyXG4gICAgICAgIG5lYXI6IG51bWJlcjtcclxuICAgICAgICByYXRpbzogbnVtYmVyO1xyXG4gICAgfTtcclxuICAgIHJlbmRlcmVyOiB7XHJcbiAgICAgICAgYWxwaGE6IGJvb2xlYW47XHJcbiAgICAgICAgYW50aWFsaWFzOiBib29sZWFuO1xyXG4gICAgICAgIGNvbnRleHQ6IGFueTtcclxuICAgICAgICBkZXB0aDogYm9vbGVhbjtcclxuICAgICAgICBsb2dhcml0aG1pY0RlcHRoQnVmZmVyOiBib29sZWFuO1xyXG4gICAgICAgIHByZWNpc2lvbjogc3RyaW5nO1xyXG4gICAgICAgIHN0ZW5jaWw6IGJvb2xlYW47XHJcbiAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBib29sZWFuO1xyXG4gICAgICAgIG9ialZpc2liaWxpdHk6IGJvb2xlYW47XHJcbiAgICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUm9vdCBleHRlbmRzIFRIUkVFLk9iamVjdDNEIHtcclxuICAgIC8vbWF0cml4OiBvYmplY3RcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlbmRlcmVyIHtcclxuICAgIHJlbmRlcjogKHNjZW5lOiBUSFJFRS5TY2VuZSwgY2FtZXJhOiBUSFJFRS5DYW1lcmEpID0+IHZvaWQ7XHJcbiAgICBzZXRQaXhlbFJhdGlvOiAocGl4ZWxSYXRpbzogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgc2V0U2l6ZTogKHc6IG51bWJlciwgaDogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FtZXJhIGV4dGVuZHMgVEhSRUUuQ2FtZXJhIHtcclxuICAgIG1hdHJpeEF1dG9VcGRhdGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBTY2VuZSBleHRlbmRzIFRIUkVFLlNjZW5lIHtcclxuICAgIGFkZDogKG5vZGU6IFRIUkVFLk9iamVjdDNEKSA9PiB0aGlzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZVJlbmRlcmVyVEpTIHtcclxuICAgIHB1YmxpYyBjYW52YXNfZHJhdzogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNhbWVyYTogQ2FtZXJhO1xyXG4gICAgcHJpdmF0ZSBjb25maWdEYXRhOiBDb25maWdEYXRhO1xyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjtcclxuICAgIHByaXZhdGUgdXVpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByb290OiBSb290O1xyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xyXG4gICAgcHJpdmF0ZSBzY2VuZTogU2NlbmU7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBnbG9iYWxTY2VuZTogU2NlbmU7XHJcbiAgICBwcml2YXRlIHZlcnNpb246IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdEYXRhOiBDb25maWdEYXRhLCBjYW52YXNEcmF3OiBIVE1MQ2FudmFzRWxlbWVudCwgdXVpZDogc3RyaW5nLCBjYW1lcmFCb29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdEYXRhID0gY29uZmlnRGF0YTtcclxuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gd2luZG93IHx8IGdsb2JhbDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICBjYW52YXM6IGNhbnZhc0RyYXcsXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbmZpZ0RhdGEucmVuZGVyZXIuY29udGV4dCxcclxuICAgICAgICAgICAgYWxwaGE6IGNvbmZpZ0RhdGEucmVuZGVyZXIuYWxwaGEsXHJcbiAgICAgICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogY29uZmlnRGF0YS5yZW5kZXJlci5wcmVtdWx0aXBsaWVkQWxwaGEsXHJcbiAgICAgICAgICAgIGFudGlhbGlhczogY29uZmlnRGF0YS5yZW5kZXJlci5hbnRpYWxpYXMsXHJcbiAgICAgICAgICAgIHN0ZW5jaWw6IGNvbmZpZ0RhdGEucmVuZGVyZXIuc3RlbmNpbCxcclxuICAgICAgICAgICAgcHJlY2lzaW9uOiBjb25maWdEYXRhLnJlbmRlcmVyLnByZWNpc2lvbixcclxuICAgICAgICAgICAgZGVwdGg6IGNvbmZpZ0RhdGEucmVuZGVyZXIuZGVwdGgsXHJcbiAgICAgICAgICAgIGxvZ2FyaXRobWljRGVwdGhCdWZmZXI6IGNvbmZpZ0RhdGEucmVuZGVyZXIubG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgICAgICBTY2VuZVJlbmRlcmVyVEpTLmdsb2JhbFNjZW5lID0gdGhpcy5zY2VuZTtcclxuICAgICAgICBpZiAoY2FtZXJhQm9vbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcclxuICAgICAgICAgICAgICAgIGNvbmZpZ0RhdGEuY2FtZXJhLmZvdixcclxuICAgICAgICAgICAgICAgIGNvbmZpZ0RhdGEuY2FtZXJhLnJhdGlvLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnRGF0YS5jYW1lcmEubmVhcixcclxuICAgICAgICAgICAgICAgIGNvbmZpZ0RhdGEuY2FtZXJhLmZhclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLkNhbWVyYSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuNC43XCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBUm5mdFRocmVlanMgdmVyc2lvbjogXCIsIHRoaXMudmVyc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFJlbmRlcmVyKCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0UHJvamVjdGlvbk1hdHJpeFwiLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBVdGlscy5zZXRNYXRyaXgodGhpcy5jYW1lcmEucHJvamVjdGlvbk1hdHJpeCwgZXYuZGV0YWlsLnByb2opO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY2FtZXJhKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZChsaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRXaW5kb3dTaXplXCIsIChfZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoX2V2LmRldGFpbC5zdywgX2V2LmRldGFpbC5zaCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNldEluaXRSZW5kZXJlckV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwib25Jbml0VGhyZWVqc1JlbmRlcmluZ1wiLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXHJcbiAgICAgICAgICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcclxuICAgICAgICAgICAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuZGlzcGF0Y2hFdmVudChzZXRJbml0UmVuZGVyZXJFdmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0dGVyc1xyXG5cclxuICAgIGdldFJlbmRlcmVyKCk6IFJlbmRlcmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTY2VuZSgpOiBTY2VuZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FtZXJhKCk6IENhbWVyYSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FtZXJhO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRHbG9iYWxTY2VuZSgpOiBTY2VuZSB7XHJcbiAgICAgICAgcmV0dXJuIFNjZW5lUmVuZGVyZXJUSlMuZ2xvYmFsU2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0dGVyc1xyXG5cclxuICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTY2VuZShzY2VuZTogU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FtZXJhKGNhbWVyYTogQ2FtZXJhKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGljayB0byBiZSBpbXBsZW1lbnRlZFxyXG4gICAgLyogdGljayAoKSB7XHJcbiAgICB0aGlzLmRyYXcoKVxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2spXHJcbiAgfSovXHJcbn1cclxuIiwiaW1wb3J0IHsgT25lRXVyb0ZpbHRlclZlY3RvcjMgfSBmcm9tIFwiLi9PbmVFdXJvRmlsdGVyXCI7XHJcbmltcG9ydCB7IERlbGF5YWJsZVNpZ25hbEZpbHRlciB9IGZyb20gXCIuL0RlbGF5YWJsZVNpZ25hbEZpbHRlclwiO1xyXG5pbXBvcnQgeyBFdWxlciwgTWF0cml4NCwgUXVhdGVybmlvbiwgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFSbmZ0RmlsdGVyIHtcclxuICAgIHByaXZhdGUgZGVsYXlFeGl0Q2hlY2s6IERlbGF5YWJsZVNpZ25hbEZpbHRlcjtcclxuXHJcbiAgICBwcml2YXRlIGRlbGF5RW50ZXJDaGVjazogRGVsYXlhYmxlU2lnbmFsRmlsdGVyO1xyXG5cclxuICAgIHByaXZhdGUgX2hhc0ZvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBfaW50ZXJwb2xhdGlvbkZhY3RvcjogbnVtYmVyID0gMTU7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFzdFRyYW5zbGF0aW9uOiBWZWN0b3IzO1xyXG5cclxuICAgIHByaXZhdGUgX2ZyYW1lRHJvcHM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVsdGFBY2N1cmFjeTogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25GaWx0ZXI6IE9uZUV1cm9GaWx0ZXJWZWN0b3IzO1xyXG5cclxuICAgIHByaXZhdGUgX3JvdGF0aW9uRmlsdGVyOiBPbmVFdXJvRmlsdGVyVmVjdG9yMztcclxuXHJcbiAgICBwdWJsaWMgZmlsdGVyRnJlcXVlbmN5OiBudW1iZXIgPSAzMC4wO1xyXG4gICAgcHVibGljIGZpbHRlck1pbkN1dG9mZjogbnVtYmVyID0gMS4wO1xyXG4gICAgcHVibGljIGZpbHRlckJldGE6IG51bWJlciA9IDAuMDtcclxuICAgIHB1YmxpYyBmaWx0ZXJEY3V0b2ZmOiBudW1iZXIgPSAxLjA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxheUVudGVyQ2hlY2sgPSBuZXcgRGVsYXlhYmxlU2lnbmFsRmlsdGVyKDIpO1xyXG4gICAgICAgIHRoaXMuZGVsYXlFeGl0Q2hlY2sgPSBuZXcgRGVsYXlhYmxlU2lnbmFsRmlsdGVyKDApO1xyXG5cclxuICAgICAgICB0aGlzLl9wb3NpdGlvbkZpbHRlciA9IG5ldyBPbmVFdXJvRmlsdGVyVmVjdG9yMyh0aGlzLmZpbHRlckZyZXF1ZW5jeSk7XHJcbiAgICAgICAgdGhpcy5fcm90YXRpb25GaWx0ZXIgPSBuZXcgT25lRXVyb0ZpbHRlclZlY3RvcjModGhpcy5maWx0ZXJGcmVxdWVuY3kgKiAyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKHdvcmxkOiBhbnkpOiBWZWN0b3IzW10ge1xyXG4gICAgICAgIGxldCBwb3M6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIGxldCByb3RhdGlvblZlYzogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgbGV0IHNjYWxlOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICBpZiAoIXdvcmxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhc0ZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lRHJvcHMgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBtYXRyaXhXOiBNYXRyaXg0ID0gbmV3IE1hdHJpeDQoKTtcclxuICAgICAgICAgICAgbGV0IHdvcmxkTWF0cml4OiBNYXRyaXg0ID0gbWF0cml4Vy5mcm9tQXJyYXkodGhpcy5nZXRBcnJheU1hdHJpeCh3b3JsZCkpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2hhc0ZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmVjVHJhbnM6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFRyYW5zbGF0aW9uID0gdmVjVHJhbnMuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKHdvcmxkTWF0cml4KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ZWNUcmFuczogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgX2N1cnJlbnRUcmFuc2xhdGlvbjogVmVjdG9yMyA9IHZlY1RyYW5zLnNldEZyb21NYXRyaXhQb3NpdGlvbih3b3JsZE1hdHJpeCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoX2N1cnJlbnRUcmFuc2xhdGlvbi5kaXN0YW5jZVRvKHRoaXMuX2xhc3RUcmFuc2xhdGlvbikpID4gdGhpcy5fZGVsdGFBY2N1cmFjeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lRHJvcHMgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZnJhbWVEcm9wcyA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdFRyYW5zbGF0aW9uID0gX2N1cnJlbnRUcmFuc2xhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtwb3MsIHJvdGF0aW9uVmVjLCBzY2FsZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmFtZURyb3BzID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RUcmFuc2xhdGlvbiA9IF9jdXJyZW50VHJhbnNsYXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25GaWx0ZXIuVXBkYXRlUGFyYW1zKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJGcmVxdWVuY3ksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlck1pbkN1dG9mZixcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmV0YSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGN1dG9mZlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLl9yb3RhdGlvbkZpbHRlci5VcGRhdGVQYXJhbXMoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckZyZXF1ZW5jeSAqIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlck1pbkN1dG9mZixcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQmV0YSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGN1dG9mZlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsZXQgbWF0cml4OiBNYXRyaXg0ID0gbmV3IE1hdHJpeDQoKTtcclxuXHJcbiAgICAgICAgICAgIG1hdHJpeCA9IHdvcmxkTWF0cml4O1xyXG5cclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uOiBRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICAgICAgbGV0IGV1bGVyUm90OiBFdWxlciA9IG5ldyBFdWxlcigpO1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb246IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG9yIGV2ZW4gc2ltcGxlIGRlY29tcG9zZSB0aGUgd29ybGRNYXRyaXggaW50byBwb3NpdGlvbiwgcXVhdGVybmlvbiBhbmQgc2NhbGUgd2l0aCBkZWNvbXBvc2VcclxuICAgICAgICAgICAgd29ybGRNYXRyaXguZGVjb21wb3NlKHBvc2l0aW9uLCByb3RhdGlvbiwgc2NhbGUpO1xyXG4gICAgICAgICAgICBsZXQgZVJvdDogRXVsZXIgPSBldWxlclJvdC5zZXRGcm9tUXVhdGVybmlvbihyb3RhdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBldWxlclRvVmVjdG9yMzogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uVmVjID0gdGhpcy5fcm90YXRpb25GaWx0ZXIuRmlsdGVyKGV1bGVyVG9WZWN0b3IzLnNldEZyb21FdWxlcihlUm90KSk7XHJcblxyXG4gICAgICAgICAgICBwb3MgPSB0aGlzLl9wb3NpdGlvbkZpbHRlci5GaWx0ZXIocG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3Bvcywgcm90YXRpb25WZWMsIHNjYWxlXTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBnZXRBcnJheU1hdHJpeCh2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICB2YXIgYXJyYXk6IGFueSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBhcnJheVtrZXldID0gdmFsdWVba2V5XTsgLy8udG9GaXhlZCg0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdldFRpbWUgfSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIERlbGF5YWJsZVNpZ25hbEZpbHRlciB7XG4gICAgcHJpdmF0ZSBfaW5EZWxheTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF90b3RhbFRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9wcmV2VGltZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfdGltZU91dDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodGltZU91dDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3RpbWVPdXQgPSB0aW1lT3V0O1xuICAgICAgICB0aGlzLl9pbkRlbGF5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIFVwZGF0ZSh0aWNrOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB0aW1lOiBudW1iZXIgPSBnZXRUaW1lKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pbkRlbGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9wcmV2VGltZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLl90b3RhbFRpbWUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG90YWxUaW1lICs9IHRpbWUgLSB0aGlzLl9wcmV2VGltZTtcblxuICAgICAgICBpZiAodGhpcy5faW5EZWxheSAmJiB0aGlzLl90b3RhbFRpbWUgPiB0aGlzLl90aW1lT3V0KSB7XG4gICAgICAgICAgICB0aGlzLl9pbkRlbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9pbkRlbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbkRlbGF5ID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcblxuLy9odHRwczovL2dpdGh1Yi5jb20vRGFyaW9NYXp6YW50aS9PbmVFdXJvRmlsdGVyVW5pdHkvYmxvYi9tYXN0ZXIvQXNzZXRzL1NjcmlwdHMvT25lRXVyb0ZpbHRlci5jc1xuLy9odHRwczovL2dpdGh1Yi5jb20vRGFyaW9NYXp6YW50aS9PbmVFdXJvRmlsdGVyVW5pdHkvYmxvYi9tYXN0ZXIvQXNzZXRzL1NjcmlwdHMvRmlsdGVyVGVzdFZlY3RvcjMuY3Ncbi8vaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vVGhvcnN0ZW5CdXgvMzIzMTgzYmIwYmMyY2NiOTJmZjIzZWJkZjNkZTY0MDhcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbmNsYXNzIExvd1Bhc3NGaWx0ZXIge1xuICAgIHk6IG51bWJlciB8IG51bGw7XG5cbiAgICBzOiBudW1iZXIgfCBudWxsO1xuXG4gICAgYWxwaGEgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoYWxwaGE6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNldEFscGhhKGFscGhhKTtcbiAgICAgICAgdGhpcy55ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRBbHBoYShhbHBoYTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChhbHBoYSA8PSAwIHx8IGFscGhhID4gMS4wKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFscGhhID0gYWxwaGE7XG4gICAgfVxuXG4gICAgZmlsdGVyKHZhbHVlOiBudW1iZXIsIHRpbWVzdGFtcDogbnVtYmVyLCBhbHBoYTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBbHBoYShhbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHM7XG4gICAgICAgIGlmICghdGhpcy55KSB7XG4gICAgICAgICAgICBzID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gdGhpcy5hbHBoYSAqIHZhbHVlICsgKDEuMCAtIHRoaXMuYWxwaGEpICogdGhpcy5zITtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnkgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zID0gcztcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuXG4gICAgbGFzdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lRXVyb0ZpbHRlciB7XG4gICAgZnJlcTogbnVtYmVyO1xuXG4gICAgbWluQ3V0T2ZmOiBudW1iZXI7XG5cbiAgICBiZXRhOiBudW1iZXI7XG5cbiAgICBkQ3V0T2ZmOiBudW1iZXI7XG5cbiAgICB4OiBMb3dQYXNzRmlsdGVyO1xuXG4gICAgZHg6IExvd1Bhc3NGaWx0ZXI7XG5cbiAgICBsYXN0dGltZTogbnVtYmVyIHwgbnVsbDtcblxuICAgIHB1YmxpYyBjdXJyVmFsdWU6IG51bWJlcjtcbiAgICBwdWJsaWMgcHJldlZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihmcmVxOiBudW1iZXIsIG1pbkN1dE9mZiA9IDEuMCwgYmV0YSA9IDAuMCwgZEN1dE9mZiA9IDEuMCkge1xuICAgICAgICBpZiAoZnJlcSA8PSAwIHx8IG1pbkN1dE9mZiA8PSAwIHx8IGRDdXRPZmYgPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mcmVxID0gZnJlcTtcbiAgICAgICAgdGhpcy5taW5DdXRPZmYgPSBtaW5DdXRPZmY7XG4gICAgICAgIHRoaXMuYmV0YSA9IGJldGE7XG4gICAgICAgIHRoaXMuZEN1dE9mZiA9IGRDdXRPZmY7XG4gICAgICAgIHRoaXMueCA9IG5ldyBMb3dQYXNzRmlsdGVyKHRoaXMuYWxwaGEodGhpcy5taW5DdXRPZmYpKTtcbiAgICAgICAgdGhpcy5keCA9IG5ldyBMb3dQYXNzRmlsdGVyKHRoaXMuYWxwaGEodGhpcy5kQ3V0T2ZmKSk7XG4gICAgICAgIHRoaXMubGFzdHRpbWUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY3VyclZhbHVlID0gMC4wO1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHRoaXMuY3VyclZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbHBoYShjdXRPZmY6IG51bWJlcikge1xuICAgICAgICBjb25zdCB0ZSA9IDEuMCAvIHRoaXMuZnJlcTtcbiAgICAgICAgY29uc3QgdGF1ID0gMS4wIC8gKDIgKiBNYXRoLlBJICogY3V0T2ZmKTtcbiAgICAgICAgcmV0dXJuIDEuMCAvICgxLjAgKyB0YXUgLyB0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIFVwZGF0ZVBhcmFtcyhfZnJlcTogbnVtYmVyLCBfbWluY3V0b2ZmOiBudW1iZXIgPSAxLjAsIF9iZXRhOiBudW1iZXIgPSAwLCBfZGN1dG9mZjogbnVtYmVyID0gMSk6IHZvaWQge1xuICAgICAgICB0aGlzLmZyZXEgPSBfZnJlcTtcbiAgICAgICAgdGhpcy5taW5DdXRPZmYgPSBfbWluY3V0b2ZmO1xuICAgICAgICB0aGlzLmJldGEgPSBfYmV0YTtcbiAgICAgICAgdGhpcy5kQ3V0T2ZmID0gX2RjdXRvZmY7XG4gICAgICAgIHRoaXMueC5zZXRBbHBoYSh0aGlzLmFscGhhKHRoaXMubWluQ3V0T2ZmKSk7XG4gICAgICAgIHRoaXMuZHguc2V0QWxwaGEodGhpcy5hbHBoYSh0aGlzLmRDdXRPZmYpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmlsdGVyKHg6IG51bWJlciwgdGltZXN0YW1wOiBudW1iZXIgfCBudWxsID0gbnVsbCk6IG51bWJlciB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdGhpcy5jdXJyVmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmxhc3R0aW1lICYmIHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgdGhpcy5mcmVxID0gMS4wIC8gKHRpbWVzdGFtcCAtIHRoaXMubGFzdHRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdHRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICAgIGNvbnN0IHByZXZYID0gdGhpcy54Lmxhc3RWYWx1ZSgpO1xuICAgICAgICBjb25zdCBkeCA9ICFwcmV2WCA/IDAuMCA6ICh4IC0gcHJldlgpICogdGhpcy5mcmVxO1xuICAgICAgICBjb25zdCBlZHggPSB0aGlzLmR4LmZpbHRlcihkeCwgdGltZXN0YW1wISwgdGhpcy5hbHBoYSh0aGlzLmRDdXRPZmYpKTtcbiAgICAgICAgY29uc3QgY3V0T2ZmID0gdGhpcy5taW5DdXRPZmYgKyB0aGlzLmJldGEgKiBNYXRoLmFicyhlZHgpO1xuICAgICAgICByZXR1cm4gKHRoaXMuY3VyclZhbHVlID0gdGhpcy54LmZpbHRlcih4LCB0aW1lc3RhbXAhLCB0aGlzLmFscGhhKGN1dE9mZikpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPbmVFdXJvRmlsdGVyVmVjdG9yMyB7XG4gICAgLy8gY29udGFpbnN0IHRoZSB0eXBlIG9mIFRcbiAgICAvLyB0aGUgYXJyYXkgb2YgZmlsdGVyc1xuICAgIHByaXZhdGUgb25lRXVyb0ZpbHRlcnM6IEFycmF5PE9uZUV1cm9GaWx0ZXI+O1xuXG4gICAgcHJpdmF0ZSBfZnJlcTogbnVtYmVyO1xuICAgIHB1YmxpYyBnZXQgZnJlcSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnJlcTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9iZXRhOiBudW1iZXI7XG4gICAgcHVibGljIGdldCBiZXRhKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iZXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RjdXRvZmY6IG51bWJlcjtcbiAgICBwdWJsaWMgZ2V0IGRjdXRvZmYoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RjdXRvZmY7XG4gICAgfVxuICAgIHByaXZhdGUgX21pbmN1dG9mZjogbnVtYmVyO1xuICAgIHB1YmxpYyBnZXQgbWluY3V0b2ZmXzEoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbmN1dG9mZjtcbiAgICB9XG5cbiAgICAvLyBjdXJyVmFsdWUgY29udGFpbnMgdGhlIGxhdGVzdCB2YWx1ZSB3aGljaCBoYXZlIGJlZW4gc3VjY2VzZnVsbHkgZmlsdGVyZWRcbiAgICAvLyBwcmV2VmFsdWUgY29udGFpbnMgdGhlIHByZXZpb3VzIGZpbHRlcmVkIHZhbHVlXG5cbiAgICBwcml2YXRlIGN1cnJWYWx1ZTogVmVjdG9yMztcbiAgICBwcml2YXRlIHByZXZWYWx1ZTogVmVjdG9yMztcblxuICAgIC8vIGluaXRpYWxpemF0aW9uIG9mIG91ciBmaWx0ZXIocylcbiAgICBjb25zdHJ1Y3RvcihfZnJlcTogbnVtYmVyLCBfbWluY3V0b2ZmOiBudW1iZXIgPSAxLCBfYmV0YTogbnVtYmVyID0gMCwgX2RjdXRvZmY6IG51bWJlciA9IDEpIHtcbiAgICAgICAgdGhpcy5jdXJyVmFsdWUgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAgICAgdGhpcy5fZnJlcSA9IF9mcmVxO1xuICAgICAgICB0aGlzLl9taW5jdXRvZmYgPSBfbWluY3V0b2ZmO1xuICAgICAgICB0aGlzLl9iZXRhID0gX2JldGE7XG4gICAgICAgIHRoaXMuX2RjdXRvZmYgPSBfZGN1dG9mZjtcblxuICAgICAgICB0aGlzLm9uZUV1cm9GaWx0ZXJzID0gW107XG4gICAgICAgIHRoaXMub25lRXVyb0ZpbHRlcnMucHVzaChuZXcgT25lRXVyb0ZpbHRlcihfZnJlcSwgX21pbmN1dG9mZiwgX2JldGEsIF9kY3V0b2ZmKSk7XG4gICAgICAgIHRoaXMub25lRXVyb0ZpbHRlcnMucHVzaChuZXcgT25lRXVyb0ZpbHRlcihfZnJlcSwgX21pbmN1dG9mZiwgX2JldGEsIF9kY3V0b2ZmKSk7XG4gICAgICAgIHRoaXMub25lRXVyb0ZpbHRlcnMucHVzaChuZXcgT25lRXVyb0ZpbHRlcihfZnJlcSwgX21pbmN1dG9mZiwgX2JldGEsIF9kY3V0b2ZmKSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlcyB0aGUgZmlsdGVyIHBhcmFtZXRlcnNcbiAgICBwdWJsaWMgVXBkYXRlUGFyYW1zKF9mcmVxOiBudW1iZXIsIF9taW5jdXRvZmY6IG51bWJlciA9IDEuMCwgX2JldGE6IG51bWJlciA9IDAsIF9kY3V0b2ZmOiBudW1iZXIgPSAxKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2ZyZXEgPSBfZnJlcTtcbiAgICAgICAgdGhpcy5fbWluY3V0b2ZmID0gX21pbmN1dG9mZjtcbiAgICAgICAgdGhpcy5fYmV0YSA9IF9iZXRhO1xuICAgICAgICB0aGlzLl9kY3V0b2ZmID0gX2RjdXRvZmY7XG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMub25lRXVyb0ZpbHRlcnMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB0aGlzLm9uZUV1cm9GaWx0ZXJzW2ldLlVwZGF0ZVBhcmFtcyh0aGlzLl9mcmVxLCB0aGlzLl9taW5jdXRvZmYsIHRoaXMuX2JldGEsIHRoaXMuX2RjdXRvZmYpO1xuICAgIH1cblxuICAgIC8vIGZpbHRlcnMgdGhlIHByb3ZpZGVkIF92YWx1ZSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICAgIC8vIE5vdGU6IGEgdGltZXN0YW1wIGNhbiBhbHNvIGJlIHByb3ZpZGVkIC0gd2lsbCBvdmVycmlkZSBmaWx0ZXIgZnJlcXVlbmN5LlxuICAgIHB1YmxpYyBGaWx0ZXIoX3ZhbHVlOiBWZWN0b3IzLCB0aW1lc3RhbXA6IG51bWJlciA9IC0xLjApOiBWZWN0b3IzIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB0aGlzLmN1cnJWYWx1ZTtcblxuICAgICAgICAvL2xldCBvdXRwdXQ6IG51bWJlcltdID0gVmVjdG9yMy5aZXJvUmVhZE9ubHkuYXNBcnJheSgpOyAvLyBCYWJ5bG9uIGNvZGUuLi5cbiAgICAgICAgbGV0IG91dDogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XG4gICAgICAgIGxldCBvdXRwdXQ6IG51bWJlcltdID0gb3V0LnRvQXJyYXkoKTtcblxuICAgICAgICAvL2xldCBpbnB1dDogbnVtYmVyW10gPSBfdmFsdWUuYXNBcnJheSgpOyAvLyBCYWJ5bG9uIGNvZGVcbiAgICAgICAgbGV0IGlucHV0OiBudW1iZXJbXSA9IF92YWx1ZS50b0FycmF5KCk7XG5cbiAgICAgICAgdGhpcy5vbmVFdXJvRmlsdGVycy5mb3JFYWNoKChmaWx0ZXJzLCBpZHgpID0+IHtcbiAgICAgICAgICAgIG91dHB1dFtpZHhdID0gZmlsdGVycy5GaWx0ZXIoaW5wdXRbaWR4XSwgdGltZXN0YW1wKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGFycjogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJWYWx1ZSA9IGFyci5mcm9tQXJyYXkob3V0cHV0KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBPYmplY3QzRCxcbiAgICBQbGFuZUdlb21ldHJ5LFxuICAgIFNjZW5lLFxuICAgIFRleHR1cmVMb2FkZXIsXG4gICAgVmlkZW9UZXh0dXJlLFxuICAgIE1lc2gsXG4gICAgTWVzaFN0YW5kYXJkTWF0ZXJpYWwsXG4gICAgVmVjdG9yMyxcbn0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgeyBBUm5mdEZpbHRlciB9IGZyb20gXCIuLi9maWx0ZXJzL0FSbmZ0RmlsdGVyXCI7XG5pbXBvcnQgU2NlbmVSZW5kZXJlclRKUyBmcm9tIFwiLi4vU2NlbmVSZW5kZXJlclRKU1wiO1xuXG4vKipcbiAqIEludGVyZmFjZSB0byBkZWZpbmUgdGhlIEFSVmlkZW8gb2JqZWN0IHVzZWQgaW4gYWRkVmlkZW8uXG4gKiBAcGFyYW0gcGxheSBwbGF5IGEgdmlkZW8uXG4gKi9cbmludGVyZmFjZSBBUnZpZGVvIHtcbiAgICBwbGF5OiAoKSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSB0byBkZWZpbmUgYW4gRW50aXR5LlxuICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIEVudGl0eVxuICovXG5pbnRlcmZhY2UgRW50aXR5IHtcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIHRvIGRlZmluZSB0aGUgUGxhbmVHZW9tZXRyeSB1c2VkIGluIHRoZSBhZGRJbWFnZSBhbmQgYWRkVmlkZW8gZnVuY3Rpb25zLlxuICogQHBhcmFtIHcgIHdpZHRoIG9mIHRoZSBQbGFuZUdlb21ldHJ5LlxuICogQHBhcmFtIGggaGVpZ2h0IG9mIHRoZSBQbGFuZUdlb21ldHJ5LlxuICogQHBhcmFtIHdzIHdpZHRoIG51bWJlciBvZiBzZWdtZW50cyBvZiB0aGUgUGxhbmVHZW9tZXRyeS5cbiAqIEBwYXJhbSBocyBoZWlnaHQgbnVtYmVyIG9mIHNlZ21lbnRzIG9mIHRoZSBQbGFuZUdlb21ldHJ5LlxuICovXG5pbnRlcmZhY2UgSVBsYW5lQ29uZmlnIHtcbiAgICB3OiBudW1iZXI7XG4gICAgaDogbnVtYmVyO1xuICAgIHdzOiBudW1iZXI7XG4gICAgaHM6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNhYmxlIHRvIGF0dGFjaCBUaHJlZWpzIG9iamVjdCB0byB0aGUgcmVuZGVyaW5nIHJvb3QgYW5kIHBhc3MgbWF0cml4IGRhdGEgdG8gaXQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5GVGFkZFRKUyB7XG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5W10gPSBbXTtcbiAgICBwcml2YXRlIG5hbWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgc2NlbmU6IFNjZW5lO1xuICAgIHByaXZhdGUgdGFyZ2V0OiBFdmVudFRhcmdldDtcbiAgICBwcml2YXRlIHV1aWQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9maWx0ZXI6IEFSbmZ0RmlsdGVyO1xuICAgIHByaXZhdGUgX29lZjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBORlRhZGRUSlMgY29uc3R1Y3RvciwgeW91IG5lZWQgdG8gcGFzcyB0aGUgdXVpZCBmcm9tIHRoZSBBUm5mdCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gdXVpZCB0aGUgdXVpZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih1dWlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IFNjZW5lUmVuZGVyZXJUSlMuZ2V0R2xvYmFsU2NlbmUoKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB3aW5kb3cgfHwgZ2xvYmFsO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLm5hbWVzID0gW107XG4gICAgICAgIHRoaXMuX2ZpbHRlciA9IG5ldyBBUm5mdEZpbHRlcigpO1xuICAgICAgICB0aGlzLl9vZWYgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWRkIGZ1bmN0aW9uIHdpbGwgYWRkIGEgbWVzaCB0byB0aGUgUmVuZGVyZXIgcm9vdC4gWW91IG5lZWQgdG8gYXNzb2NpYXRlIGEgbmFtZSBvZiB0aGUgRW50aXR5LlxuICAgICAqIEBwYXJhbSBtZXNoIFRoZSBtZXNoIHRvIGFkZFxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBFbnRpdHkgYXNzb2NpYXRlZC5cbiAgICAgKiBAcGFyYW0gb2JqVmlzaWJpbGl0eSBzZXQgdHJ1ZSBvciBmYWxzZSBpZiB0aGUgbWVzaCB3bGwgc3RheSB2aXNpYmxlIG9yIG5vdCBhZnRlciB0cmFja2luZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkKG1lc2g6IE9iamVjdDNELCBuYW1lOiBzdHJpbmcsIG9ialZpc2liaWxpdHk6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE5GVERhdGEtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICB2YXIgbXNnID0gZXYuZGV0YWlsO1xuICAgICAgICAgICAgbWVzaC5wb3NpdGlvbi55ID0gKChtc2cuaGVpZ2h0IC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICAgICAgbWVzaC5wb3NpdGlvbi54ID0gKChtc2cud2lkdGggLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByb290ID0gbmV3IE9iamVjdDNEKCk7XG4gICAgICAgIHJvb3QubmFtZSA9IFwicm9vdC1cIiArIG5hbWU7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICByb290LmFkZChtZXNoKTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE1hdHJpeEdMX1JILVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXYuZGV0YWlsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG1lc2gudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAvKmlmICh0aGlzLl9vZWYgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gW25ldyBWZWN0b3IzKDAsIDAsIDApLCBuZXcgVmVjdG9yMygwLCAwLCAwKSwgbmV3IFZlY3RvcjMoMCwgMCwgMCldO1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IHRoaXMuX2ZpbHRlci51cGRhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFgoZmlsdGVyWzBdLngpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WShmaWx0ZXJbMF0ueSk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRaKGZpbHRlclswXS56KTtcbiAgICAgICAgICAgICAgICByb290LnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKGZpbHRlclsxXSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRYKGZpbHRlclsyXS54KTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFkoZmlsdGVyWzJdLnkpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WihmaWx0ZXJbMl0ueik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvb3QubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IFV0aWxzLmludGVycG9sYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSCk7XG4gICAgICAgICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHJvb3QubWF0cml4LCBtYXRyaXgpO1xuICAgICAgICAgICAgfSovXG4gICAgICAgICAgICByb290Lm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIFV0aWxzLnNldE1hdHJpeChyb290Lm1hdHJpeCwgZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJuZnRUcmFja2luZ0xvc3QtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICAgICAgbWVzaC52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZXMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKHsgbmFtZSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWRkTW9kZWwgZnVuY3Rpb24gd2lsbCBhZGQgYSBtb2RlbCB0byB0aGUgUmVuZGVyZXIgcm9vdC4gWW91IG5lZWQgdG8gYXNzb2NpYXRlIGEgbmFtZSBvZiB0aGUgRW50aXR5LlxuICAgICAqIEBwYXJhbSB1cmwgdXJsIG9mIHRoZSBtb2RlbC5cbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgRW50aXR5IGFzc29jaWF0ZWQuXG4gICAgICogQHBhcmFtIHNjYWxlIHNjYWxlIG9mIHRoZSBtb2RlbC5cbiAgICAgKiBAcGFyYW0gb2JqVmlzaWJpbGl0eSBzZXQgdHJ1ZSBvciBmYWxzZSBpZiB0aGUgbWVzaCB3bGwgc3RheSB2aXNpYmxlIG9yIG5vdCBhZnRlciB0cmFja2luZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkTW9kZWwodXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgc2NhbGU6IG51bWJlciwgb2JqVmlzaWJpbGl0eTogYm9vbGVhbikge1xuICAgICAgICBjb25zdCByb290ID0gbmV3IE9iamVjdDNEKCk7XG4gICAgICAgIHJvb3QubmFtZSA9IFwicm9vdC1cIiArIG5hbWU7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICBsZXQgbW9kZWw6IGFueTtcbiAgICAgICAgLyogTG9hZCBNb2RlbCAqL1xuICAgICAgICBjb25zdCB0aHJlZUdMVEZMb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xuICAgICAgICB0aHJlZUdMVEZMb2FkZXIubG9hZCh1cmwsIChnbHRmKSA9PiB7XG4gICAgICAgICAgICBtb2RlbCA9IGdsdGYuc2NlbmU7XG4gICAgICAgICAgICBtb2RlbC5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XG4gICAgICAgICAgICBtb2RlbC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TkZURGF0YS1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gZXYuZGV0YWlsO1xuICAgICAgICAgICAgICAgIG1vZGVsLnBvc2l0aW9uLnkgPSAoKG1zZy5oZWlnaHQgLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgICAgICAgICAgbW9kZWwucG9zaXRpb24ueCA9ICgobXNnLndpZHRoIC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb290LmFkZChtb2RlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TWF0cml4R0xfUkgtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgbW9kZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fb2VmID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlciA9IFtuZXcgVmVjdG9yMygwLCAwLCAwKSwgbmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDAsIDAsIDApXTtcbiAgICAgICAgICAgICAgICBmaWx0ZXIgPSB0aGlzLl9maWx0ZXIudXBkYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSCk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRYKGZpbHRlclswXS54KTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFkoZmlsdGVyWzBdLnkpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WihmaWx0ZXJbMF0ueik7XG4gICAgICAgICAgICAgICAgcm9vdC5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmaWx0ZXJbMV0pO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WChmaWx0ZXJbMl0ueCk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRZKGZpbHRlclsyXS55KTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFooZmlsdGVyWzJdLnopO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb290Lm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgICAgIFV0aWxzLnNldE1hdHJpeChyb290Lm1hdHJpeCwgbWF0cml4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJuZnRUcmFja2luZ0xvc3QtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICAgICAgbW9kZWwudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5hbWVzLnB1c2gobmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGFkZE1vZGVsV2l0aENhbGxiYWNrIGZ1bmN0aW9uIHdpbGwgYWRkIGEgbW9kZWwgdG8gdGhlIFJlbmRlcmVyIHJvb3QuIFlvdSBuZWVkIHRvIGFzc29jaWF0ZSBhIG5hbWUgb2YgdGhlIEVudGl0eS5cbiAgICAgKiBZb3UgY2FuIG1vZGlmeSB0aGUgbW9kZWwgcm90YXRpb24sIHNjYWxlIGFuZCBvdGhlciBwcm9wZXJ0aWVzIHdpdGggdGhlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB1cmwgdXJsIG9mIHRoZSBtb2RlbC5cbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgRW50aXR5IGFzc29jaWF0ZWQuXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIG1vZGlmeSB0aGUgbW9kZWwgaW4gdGhlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSBvYmpWaXNpYmlsaXR5IHNldCB0cnVlIG9yIGZhbHNlIGlmIHRoZSBtZXNoIHdsbCBzdGF5IHZpc2libGUgb3Igbm90IGFmdGVyIHRyYWNraW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRNb2RlbFdpdGhDYWxsYmFjayh1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGdsdGY6IGFueSkgPT4ge30sIG9ialZpc2liaWxpdHk6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5ldyBPYmplY3QzRCgpO1xuICAgICAgICByb290Lm5hbWUgPSBcInJvb3QtXCIgKyBuYW1lO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChyb290KTtcbiAgICAgICAgbGV0IG1vZGVsOiBhbnk7XG4gICAgICAgIC8qIExvYWQgTW9kZWwgKi9cbiAgICAgICAgY29uc3QgdGhyZWVHTFRGTG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcbiAgICAgICAgdGhyZWVHTFRGTG9hZGVyLmxvYWQodXJsLCAoZ2x0ZikgPT4ge1xuICAgICAgICAgICAgbW9kZWwgPSBnbHRmLnNjZW5lO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE5GVERhdGEtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIG1zZyA9IGV2LmRldGFpbDtcbiAgICAgICAgICAgICAgICBtb2RlbC5wb3NpdGlvbi55ID0gKChtc2cuaGVpZ2h0IC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICAgICAgICAgIG1vZGVsLnBvc2l0aW9uLnggPSAoKG1zZy53aWR0aCAvIG1zZy5kcGkpICogMi41NCAqIDEwKSAvIDIuMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FsbGJhY2soZ2x0Zik7XG4gICAgICAgICAgICByb290LmFkZChtb2RlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwiZ2V0TWF0cml4R0xfUkgtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgbW9kZWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fb2VmID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlciA9IFtuZXcgVmVjdG9yMygwLCAwLCAwKSwgbmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDAsIDAsIDApXTtcbiAgICAgICAgICAgICAgICBmaWx0ZXIgPSB0aGlzLl9maWx0ZXIudXBkYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSCk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRYKGZpbHRlclswXS54KTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFkoZmlsdGVyWzBdLnkpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WihmaWx0ZXJbMF0ueik7XG4gICAgICAgICAgICAgICAgcm9vdC5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmaWx0ZXJbMV0pO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WChmaWx0ZXJbMl0ueCk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRZKGZpbHRlclsyXS55KTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFooZmlsdGVyWzJdLnopO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb290Lm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgICAgIFV0aWxzLnNldE1hdHJpeChyb290Lm1hdHJpeCwgbWF0cml4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJuZnRUcmFja2luZ0xvc3QtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICAgICAgbW9kZWwudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5hbWVzLnB1c2gobmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGFkZEltYWdlIGZ1bmN0aW9uIHdpbGwgYWRkIGFuIGltYWdlIHRvIHRoZSBSZW5kZXJlciByb290LiBZb3UgbmVlZCB0byBhc3NvY2lhdGUgYSBuYW1lIG9mIHRoZSBFbnRpdHkuXG4gICAgICogQHBhcmFtIGltYWdlVXJsIHVybCBvZiB0aGUgaW1hZ2UuXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIEVudGl0eSBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSBjb2xvciBjb2xvciBvZiB0aGUgYmFja2dyb3VuZCBwbGFuZS5cbiAgICAgKiBAcGFyYW0gc2NhbGUgc2NhbGUgb2YgdGhlIHBsYW5lLlxuICAgICAqIEBwYXJhbSBjb25maWdzIHNlZSBJUGxhbmVDb25maWcuXG4gICAgICogQHBhcmFtIG9ialZpc2liaWxpdHkgc2V0IHRydWUgb3IgZmFsc2UgaWYgdGhlIG1lc2ggd2xsIHN0YXkgdmlzaWJsZSBvciBub3QgYWZ0ZXIgdHJhY2tpbmcuXG4gICAgICovXG4gICAgcHVibGljIGFkZEltYWdlKFxuICAgICAgICBpbWFnZVVybDogc3RyaW5nLFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGNvbG9yOiBzdHJpbmcsXG4gICAgICAgIHNjYWxlOiBudW1iZXIsXG4gICAgICAgIGNvbmZpZ3M6IElQbGFuZUNvbmZpZyxcbiAgICAgICAgb2JqVmlzaWJpbGl0eTogYm9vbGVhblxuICAgICkge1xuICAgICAgICBjb25zdCByb290ID0gbmV3IE9iamVjdDNEKCk7XG4gICAgICAgIHJvb3QubmFtZSA9IFwicm9vdC1cIiArIG5hbWU7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICBjb25zdCBwbGFuZUdlb20gPSBuZXcgUGxhbmVHZW9tZXRyeShjb25maWdzLncsIGNvbmZpZ3MuaCwgY29uZmlncy53cywgY29uZmlncy5ocyk7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZUxvYWRlcigpLmxvYWQoaW1hZ2VVcmwpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiBjb2xvciwgbWFwOiB0ZXh0dXJlIH0pO1xuICAgICAgICBjb25zdCBwbGFuZSA9IG5ldyBNZXNoKHBsYW5lR2VvbSwgbWF0ZXJpYWwpO1xuICAgICAgICBwbGFuZS5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRORlREYXRhLVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIG1zZyA9IGV2LmRldGFpbDtcbiAgICAgICAgICAgIHBsYW5lLnBvc2l0aW9uLnkgPSAoKG1zZy5oZWlnaHQgLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi54ID0gKChtc2cud2lkdGggLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgIH0pO1xuICAgICAgICByb290LmFkZChwbGFuZSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRNYXRyaXhHTF9SSC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBwbGFuZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vZWYgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gW25ldyBWZWN0b3IzKDAsIDAsIDApLCBuZXcgVmVjdG9yMygwLCAwLCAwKSwgbmV3IFZlY3RvcjMoMCwgMCwgMCldO1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IHRoaXMuX2ZpbHRlci51cGRhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFgoZmlsdGVyWzBdLngpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WShmaWx0ZXJbMF0ueSk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRaKGZpbHRlclswXS56KTtcbiAgICAgICAgICAgICAgICByb290LnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKGZpbHRlclsxXSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRYKGZpbHRlclsyXS54KTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFkoZmlsdGVyWzJdLnkpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WihmaWx0ZXJbMl0ueik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvb3QubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IFV0aWxzLmludGVycG9sYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSCk7XG4gICAgICAgICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHJvb3QubWF0cml4LCBtYXRyaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm5mdFRyYWNraW5nTG9zdC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgICAgICBwbGFuZS52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZXMucHVzaChuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWRkVmlkZW8gZnVuY3Rpb24gd2lsbCBhZGQgYSB2aWRlbyB0byB0aGUgUmVuZGVyZXIgcm9vdC4gWW91IG5lZWQgdG8gYXNzb2NpYXRlIGEgbmFtZSBvZiB0aGUgRW50aXR5LlxuICAgICAqIEBwYXJhbSBpZCB0aGUgaWQgb2YgdGhlIGh0bWwgdmlkZW8gZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgRW50aXR5IGFzc29jaWF0ZWQuXG4gICAgICogQHBhcmFtIHNjYWxlIHNjYWxlIG9mIHRoZSBwbGFuZS5cbiAgICAgKiBAcGFyYW0gY29uZmlncyBzZWUgSVBsYW5lQ29uZmlnLlxuICAgICAqIEBwYXJhbSBvYmpWaXNpYmlsaXR5IHNldCB0cnVlIG9yIGZhbHNlIGlmIHRoZSBtZXNoIHdsbCBzdGF5IHZpc2libGUgb3Igbm90IGFmdGVyIHRyYWNraW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRWaWRlbyhpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHNjYWxlOiBudW1iZXIsIGNvbmZpZ3M6IElQbGFuZUNvbmZpZywgb2JqVmlzaWJpbGl0eTogYm9vbGVhbikge1xuICAgICAgICBjb25zdCByb290ID0gbmV3IE9iamVjdDNEKCk7XG4gICAgICAgIHJvb3QubmFtZSA9IFwicm9vdC1cIiArIG5hbWU7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICBjb25zdCBBUlZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVmlkZW9UZXh0dXJlKEFSVmlkZW8gYXMgSFRNTFZpZGVvRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IG1hdCA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweGJiYmJmZiwgbWFwOiB0ZXh0dXJlIH0pO1xuICAgICAgICBjb25zdCBwbGFuZUdlb20gPSBuZXcgUGxhbmVHZW9tZXRyeShjb25maWdzLncsIGNvbmZpZ3MuaCwgY29uZmlncy53cywgY29uZmlncy5ocyk7XG4gICAgICAgIGNvbnN0IHBsYW5lID0gbmV3IE1lc2gocGxhbmVHZW9tLCBtYXQpO1xuICAgICAgICBwbGFuZS5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRORlREYXRhLVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIG1zZyA9IGV2LmRldGFpbDtcbiAgICAgICAgICAgIHBsYW5lLnBvc2l0aW9uLnkgPSAoKG1zZy5oZWlnaHQgLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi54ID0gKChtc2cud2lkdGggLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgIH0pO1xuICAgICAgICByb290LmFkZChwbGFuZSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRNYXRyaXhHTF9SSC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEFSVmlkZW8ucGxheSgpO1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHBsYW5lLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29lZiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBbbmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDAsIDAsIDApLCBuZXcgVmVjdG9yMygwLCAwLCAwKV07XG4gICAgICAgICAgICAgICAgZmlsdGVyID0gdGhpcy5fZmlsdGVyLnVwZGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WChmaWx0ZXJbMF0ueCk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRZKGZpbHRlclswXS55KTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFooZmlsdGVyWzBdLnopO1xuICAgICAgICAgICAgICAgIHJvb3Qucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmlsdGVyWzFdKTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFgoZmlsdGVyWzJdLngpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WShmaWx0ZXJbMl0ueSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRaKGZpbHRlclsyXS56KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gVXRpbHMuaW50ZXJwb2xhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRNYXRyaXgocm9vdC5tYXRyaXgsIG1hdHJpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibmZ0VHJhY2tpbmdMb3N0LVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgICAgIHBsYW5lLnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICAgICAgQVJWaWRlby5wYXVzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gZ2V0IHRoZSBuYW1lcyBvZiB0aGUgZW50aXRpZXMgdXNlZCBpbiB5b3VyIHByb2plY3QuXG4gICAgICogQHJldHVybnMgdGhlIG5hbWVzIG9mIHRoZSBlbnRpdGllc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXROYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlIG9yIG5vdCB0aGUgT25lRXVyb0ZpbHRlciByb3V0aW5lLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgb2VmKGVuYWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9vZWYgPSBlbmFibGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgT25lRXVyb0ZpbHRlciBpcyBlbmFibGVkIG9yIG5vdC5cbiAgICAgKiBAcmV0dXJucyAoYm9vbGVhbikgdHJ1ZSBvciBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgb2VmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb2VmO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xufVxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgICBwcml2YXRlIHN0YXRpYyB0cmFja2VkTWF0cml4OiBhbnkgPSB7XG4gICAgICAgIC8vIGZvciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIGRlbHRhOiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgIGludGVycG9sYXRlZDogWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIH07XG4gICAgLy9wcml2YXRlIHN0YXRpYyBpbnRlcnBvbGF0aW9uRmFjdG9yOiBudW1iZXIgPSAyNFxuICAgIHN0YXRpYyBpbnRlcnBvbGF0ZSh3b3JsZDogYW55KSB7XG4gICAgICAgIGNvbnN0IGludGVycG9sYXRpb25GYWN0b3IgPSAyNDtcblxuICAgICAgICAvLyBpbnRlcnBvbGF0ZSBtYXRyaXhcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrZWRNYXRyaXguZGVsdGFbaV0gPSB3b3JsZFtpXSAtIHRoaXMudHJhY2tlZE1hdHJpeC5pbnRlcnBvbGF0ZWRbaV07XG4gICAgICAgICAgICB0aGlzLnRyYWNrZWRNYXRyaXguaW50ZXJwb2xhdGVkW2ldID1cbiAgICAgICAgICAgICAgICB0aGlzLnRyYWNrZWRNYXRyaXguaW50ZXJwb2xhdGVkW2ldICsgdGhpcy50cmFja2VkTWF0cml4LmRlbHRhW2ldIC8gaW50ZXJwb2xhdGlvbkZhY3RvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50cmFja2VkTWF0cml4LmludGVycG9sYXRlZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNNb2JpbGUoKSB7XG4gICAgICAgIHJldHVybiAvQW5kcm9pZHxtb2JpbGV8aVBhZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRNYXRyaXgobWF0cml4OiBhbnksIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgY29uc3QgYXJyYXk6IGFueSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgYXJyYXlba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtYXRyaXguZWxlbWVudHMuc2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG1hdHJpeC5lbGVtZW50cy5zZXQoYXJyYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0cml4LmVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChhcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGhyZWVfXzsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiaW1wb3J0IHtcblx0QW5pbWF0aW9uQ2xpcCxcblx0Qm9uZSxcblx0Qm94Myxcblx0QnVmZmVyQXR0cmlidXRlLFxuXHRCdWZmZXJHZW9tZXRyeSxcblx0Q2xhbXBUb0VkZ2VXcmFwcGluZyxcblx0Q29sb3IsXG5cdERpcmVjdGlvbmFsTGlnaHQsXG5cdERvdWJsZVNpZGUsXG5cdEZpbGVMb2FkZXIsXG5cdEZyb250U2lkZSxcblx0R3JvdXAsXG5cdEltYWdlQml0bWFwTG9hZGVyLFxuXHRJbnN0YW5jZWRNZXNoLFxuXHRJbnRlcmxlYXZlZEJ1ZmZlcixcblx0SW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUsXG5cdEludGVycG9sYW50LFxuXHRJbnRlcnBvbGF0ZURpc2NyZXRlLFxuXHRJbnRlcnBvbGF0ZUxpbmVhcixcblx0TGluZSxcblx0TGluZUJhc2ljTWF0ZXJpYWwsXG5cdExpbmVMb29wLFxuXHRMaW5lU2VnbWVudHMsXG5cdExpbmVhckZpbHRlcixcblx0TGluZWFyTWlwbWFwTGluZWFyRmlsdGVyLFxuXHRMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyLFxuXHRMb2FkZXIsXG5cdExvYWRlclV0aWxzLFxuXHRNYXRlcmlhbCxcblx0TWF0aFV0aWxzLFxuXHRNYXRyaXg0LFxuXHRNZXNoLFxuXHRNZXNoQmFzaWNNYXRlcmlhbCxcblx0TWVzaFBoeXNpY2FsTWF0ZXJpYWwsXG5cdE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxuXHRNaXJyb3JlZFJlcGVhdFdyYXBwaW5nLFxuXHROZWFyZXN0RmlsdGVyLFxuXHROZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyLFxuXHROZWFyZXN0TWlwbWFwTmVhcmVzdEZpbHRlcixcblx0TnVtYmVyS2V5ZnJhbWVUcmFjayxcblx0T2JqZWN0M0QsXG5cdE9ydGhvZ3JhcGhpY0NhbWVyYSxcblx0UGVyc3BlY3RpdmVDYW1lcmEsXG5cdFBvaW50TGlnaHQsXG5cdFBvaW50cyxcblx0UG9pbnRzTWF0ZXJpYWwsXG5cdFByb3BlcnR5QmluZGluZyxcblx0UXVhdGVybmlvbixcblx0UXVhdGVybmlvbktleWZyYW1lVHJhY2ssXG5cdFJlcGVhdFdyYXBwaW5nLFxuXHRTa2VsZXRvbixcblx0U2tpbm5lZE1lc2gsXG5cdFNwaGVyZSxcblx0U3BvdExpZ2h0LFxuXHRUZXh0dXJlLFxuXHRUZXh0dXJlTG9hZGVyLFxuXHRUcmlhbmdsZUZhbkRyYXdNb2RlLFxuXHRUcmlhbmdsZVN0cmlwRHJhd01vZGUsXG5cdFZlY3RvcjIsXG5cdFZlY3RvcjMsXG5cdFZlY3RvcktleWZyYW1lVHJhY2ssXG5cdHNSR0JFbmNvZGluZ1xufSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyB0b1RyaWFuZ2xlc0RyYXdNb2RlIH0gZnJvbSAnLi4vdXRpbHMvQnVmZmVyR2VvbWV0cnlVdGlscy5qcyc7XG5cbmNsYXNzIEdMVEZMb2FkZXIgZXh0ZW5kcyBMb2FkZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBtYW5hZ2VyICkge1xuXG5cdFx0c3VwZXIoIG1hbmFnZXIgKTtcblxuXHRcdHRoaXMuZHJhY29Mb2FkZXIgPSBudWxsO1xuXHRcdHRoaXMua3R4MkxvYWRlciA9IG51bGw7XG5cdFx0dGhpcy5tZXNob3B0RGVjb2RlciA9IG51bGw7XG5cblx0XHR0aGlzLnBsdWdpbkNhbGxiYWNrcyA9IFtdO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGVGV4dHVyZUJhc2lzVUV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc1NoZWVuRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNUcmFuc21pc3Npb25FeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc1ZvbHVtZUV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWF0ZXJpYWxzSW9yRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNFbWlzc2l2ZVN0cmVuZ3RoRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNTcGVjdWxhckV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWF0ZXJpYWxzSXJpZGVzY2VuY2VFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURkxpZ2h0c0V4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWVzaG9wdENvbXByZXNzaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNZXNoR3B1SW5zdGFuY2luZyggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdGxvYWQoIHVybCwgb25Mb2FkLCBvblByb2dyZXNzLCBvbkVycm9yICkge1xuXG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzO1xuXG5cdFx0bGV0IHJlc291cmNlUGF0aDtcblxuXHRcdGlmICggdGhpcy5yZXNvdXJjZVBhdGggIT09ICcnICkge1xuXG5cdFx0XHRyZXNvdXJjZVBhdGggPSB0aGlzLnJlc291cmNlUGF0aDtcblxuXHRcdH0gZWxzZSBpZiAoIHRoaXMucGF0aCAhPT0gJycgKSB7XG5cblx0XHRcdHJlc291cmNlUGF0aCA9IHRoaXMucGF0aDtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHJlc291cmNlUGF0aCA9IExvYWRlclV0aWxzLmV4dHJhY3RVcmxCYXNlKCB1cmwgKTtcblxuXHRcdH1cblxuXHRcdC8vIFRlbGxzIHRoZSBMb2FkaW5nTWFuYWdlciB0byB0cmFjayBhbiBleHRyYSBpdGVtLCB3aGljaCByZXNvbHZlcyBhZnRlclxuXHRcdC8vIHRoZSBtb2RlbCBpcyBmdWxseSBsb2FkZWQuIFRoaXMgbWVhbnMgdGhlIGNvdW50IG9mIGl0ZW1zIGxvYWRlZCB3aWxsXG5cdFx0Ly8gYmUgaW5jb3JyZWN0LCBidXQgZW5zdXJlcyBtYW5hZ2VyLm9uTG9hZCgpIGRvZXMgbm90IGZpcmUgZWFybHkuXG5cdFx0dGhpcy5tYW5hZ2VyLml0ZW1TdGFydCggdXJsICk7XG5cblx0XHRjb25zdCBfb25FcnJvciA9IGZ1bmN0aW9uICggZSApIHtcblxuXHRcdFx0aWYgKCBvbkVycm9yICkge1xuXG5cdFx0XHRcdG9uRXJyb3IoIGUgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBlICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRXJyb3IoIHVybCApO1xuXHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRW5kKCB1cmwgKTtcblxuXHRcdH07XG5cblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgRmlsZUxvYWRlciggdGhpcy5tYW5hZ2VyICk7XG5cblx0XHRsb2FkZXIuc2V0UGF0aCggdGhpcy5wYXRoICk7XG5cdFx0bG9hZGVyLnNldFJlc3BvbnNlVHlwZSggJ2FycmF5YnVmZmVyJyApO1xuXHRcdGxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLnJlcXVlc3RIZWFkZXIgKTtcblx0XHRsb2FkZXIuc2V0V2l0aENyZWRlbnRpYWxzKCB0aGlzLndpdGhDcmVkZW50aWFscyApO1xuXG5cdFx0bG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCBkYXRhICkge1xuXG5cdFx0XHR0cnkge1xuXG5cdFx0XHRcdHNjb3BlLnBhcnNlKCBkYXRhLCByZXNvdXJjZVBhdGgsIGZ1bmN0aW9uICggZ2x0ZiApIHtcblxuXHRcdFx0XHRcdG9uTG9hZCggZ2x0ZiApO1xuXG5cdFx0XHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRW5kKCB1cmwgKTtcblxuXHRcdFx0XHR9LCBfb25FcnJvciApO1xuXG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRfb25FcnJvciggZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9LCBvblByb2dyZXNzLCBfb25FcnJvciApO1xuXG5cdH1cblxuXHRzZXREUkFDT0xvYWRlciggZHJhY29Mb2FkZXIgKSB7XG5cblx0XHR0aGlzLmRyYWNvTG9hZGVyID0gZHJhY29Mb2FkZXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG5cdHNldEREU0xvYWRlcigpIHtcblxuXHRcdHRocm93IG5ldyBFcnJvcihcblxuXHRcdFx0J1RIUkVFLkdMVEZMb2FkZXI6IFwiTVNGVF90ZXh0dXJlX2Rkc1wiIG5vIGxvbmdlciBzdXBwb3J0ZWQuIFBsZWFzZSB1cGRhdGUgdG8gXCJLSFJfdGV4dHVyZV9iYXNpc3VcIi4nXG5cblx0XHQpO1xuXG5cdH1cblxuXHRzZXRLVFgyTG9hZGVyKCBrdHgyTG9hZGVyICkge1xuXG5cdFx0dGhpcy5rdHgyTG9hZGVyID0ga3R4MkxvYWRlcjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0c2V0TWVzaG9wdERlY29kZXIoIG1lc2hvcHREZWNvZGVyICkge1xuXG5cdFx0dGhpcy5tZXNob3B0RGVjb2RlciA9IG1lc2hvcHREZWNvZGVyO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHRyZWdpc3RlciggY2FsbGJhY2sgKSB7XG5cblx0XHRpZiAoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICkgPT09IC0gMSApIHtcblxuXHRcdFx0dGhpcy5wbHVnaW5DYWxsYmFja3MucHVzaCggY2FsbGJhY2sgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHR1bnJlZ2lzdGVyKCBjYWxsYmFjayApIHtcblxuXHRcdGlmICggdGhpcy5wbHVnaW5DYWxsYmFja3MuaW5kZXhPZiggY2FsbGJhY2sgKSAhPT0gLSAxICkge1xuXG5cdFx0XHR0aGlzLnBsdWdpbkNhbGxiYWNrcy5zcGxpY2UoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICksIDEgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHRwYXJzZSggZGF0YSwgcGF0aCwgb25Mb2FkLCBvbkVycm9yICkge1xuXG5cdFx0bGV0IGpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHt9O1xuXHRcdGNvbnN0IHBsdWdpbnMgPSB7fTtcblx0XHRjb25zdCB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuXG5cdFx0aWYgKCB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgKSB7XG5cblx0XHRcdGpzb24gPSBKU09OLnBhcnNlKCBkYXRhICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgKSB7XG5cblx0XHRcdGNvbnN0IG1hZ2ljID0gdGV4dERlY29kZXIuZGVjb2RlKCBuZXcgVWludDhBcnJheSggZGF0YSwgMCwgNCApICk7XG5cblx0XHRcdGlmICggbWFnaWMgPT09IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDICkge1xuXG5cdFx0XHRcdHRyeSB7XG5cblx0XHRcdFx0XHRleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURiBdID0gbmV3IEdMVEZCaW5hcnlFeHRlbnNpb24oIGRhdGEgKTtcblxuXHRcdFx0XHR9IGNhdGNoICggZXJyb3IgKSB7XG5cblx0XHRcdFx0XHRpZiAoIG9uRXJyb3IgKSBvbkVycm9yKCBlcnJvciApO1xuXHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0anNvbiA9IEpTT04ucGFyc2UoIGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGIF0uY29udGVudCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGpzb24gPSBKU09OLnBhcnNlKCB0ZXh0RGVjb2Rlci5kZWNvZGUoIGRhdGEgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRqc29uID0gZGF0YTtcblxuXHRcdH1cblxuXHRcdGlmICgganNvbi5hc3NldCA9PT0gdW5kZWZpbmVkIHx8IGpzb24uYXNzZXQudmVyc2lvblsgMCBdIDwgMiApIHtcblxuXHRcdFx0aWYgKCBvbkVycm9yICkgb25FcnJvciggbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgYXNzZXQuIGdsVEYgdmVyc2lvbnMgPj0yLjAgYXJlIHN1cHBvcnRlZC4nICkgKTtcblx0XHRcdHJldHVybjtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBhcnNlciA9IG5ldyBHTFRGUGFyc2VyKCBqc29uLCB7XG5cblx0XHRcdHBhdGg6IHBhdGggfHwgdGhpcy5yZXNvdXJjZVBhdGggfHwgJycsXG5cdFx0XHRjcm9zc09yaWdpbjogdGhpcy5jcm9zc09yaWdpbixcblx0XHRcdHJlcXVlc3RIZWFkZXI6IHRoaXMucmVxdWVzdEhlYWRlcixcblx0XHRcdG1hbmFnZXI6IHRoaXMubWFuYWdlcixcblx0XHRcdGt0eDJMb2FkZXI6IHRoaXMua3R4MkxvYWRlcixcblx0XHRcdG1lc2hvcHREZWNvZGVyOiB0aGlzLm1lc2hvcHREZWNvZGVyXG5cblx0XHR9ICk7XG5cblx0XHRwYXJzZXIuZmlsZUxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLnJlcXVlc3RIZWFkZXIgKTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luQ2FsbGJhY2tzLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgcGx1Z2luID0gdGhpcy5wbHVnaW5DYWxsYmFja3NbIGkgXSggcGFyc2VyICk7XG5cdFx0XHRwbHVnaW5zWyBwbHVnaW4ubmFtZSBdID0gcGx1Z2luO1xuXG5cdFx0XHQvLyBXb3JrYXJvdW5kIHRvIGF2b2lkIGRldGVybWluaW5nIGFzIHVua25vd24gZXh0ZW5zaW9uXG5cdFx0XHQvLyBpbiBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoKS5cblx0XHRcdC8vIFJlbW92ZSB0aGlzIHdvcmthcm91bmQgaWYgd2UgbW92ZSBhbGwgdGhlIGV4aXN0aW5nXG5cdFx0XHQvLyBleHRlbnNpb24gaGFuZGxlcnMgdG8gcGx1Z2luIHN5c3RlbVxuXHRcdFx0ZXh0ZW5zaW9uc1sgcGx1Z2luLm5hbWUgXSA9IHRydWU7XG5cblx0XHR9XG5cblx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1VzZWQgKSB7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGpzb24uZXh0ZW5zaW9uc1VzZWQubGVuZ3RoOyArKyBpICkge1xuXG5cdFx0XHRcdGNvbnN0IGV4dGVuc2lvbk5hbWUgPSBqc29uLmV4dGVuc2lvbnNVc2VkWyBpIF07XG5cdFx0XHRcdGNvbnN0IGV4dGVuc2lvbnNSZXF1aXJlZCA9IGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkIHx8IFtdO1xuXG5cdFx0XHRcdHN3aXRjaCAoIGV4dGVuc2lvbk5hbWUgKSB7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVDpcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGTWF0ZXJpYWxzVW5saXRFeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZEcmFjb01lc2hDb21wcmVzc2lvbkV4dGVuc2lvbigganNvbiwgdGhpcy5kcmFjb0xvYWRlciApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZUZXh0dXJlVHJhbnNmb3JtRXh0ZW5zaW9uKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfTUVTSF9RVUFOVElaQVRJT046XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1lc2hRdWFudGl6YXRpb25FeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdFx0aWYgKCBleHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggZXh0ZW5zaW9uTmFtZSApID49IDAgJiYgcGx1Z2luc1sgZXh0ZW5zaW9uTmFtZSBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogVW5rbm93biBleHRlbnNpb24gXCInICsgZXh0ZW5zaW9uTmFtZSArICdcIi4nICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHBhcnNlci5zZXRFeHRlbnNpb25zKCBleHRlbnNpb25zICk7XG5cdFx0cGFyc2VyLnNldFBsdWdpbnMoIHBsdWdpbnMgKTtcblx0XHRwYXJzZXIucGFyc2UoIG9uTG9hZCwgb25FcnJvciApO1xuXG5cdH1cblxuXHRwYXJzZUFzeW5jKCBkYXRhLCBwYXRoICkge1xuXG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUsIHJlamVjdCApIHtcblxuXHRcdFx0c2NvcGUucGFyc2UoIGRhdGEsIHBhdGgsIHJlc29sdmUsIHJlamVjdCApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxufVxuXG4vKiBHTFRGUkVHSVNUUlkgKi9cblxuZnVuY3Rpb24gR0xURlJlZ2lzdHJ5KCkge1xuXG5cdGxldCBvYmplY3RzID0ge307XG5cblx0cmV0dXJuXHR7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0XHRyZXR1cm4gb2JqZWN0c1sga2V5IF07XG5cblx0XHR9LFxuXG5cdFx0YWRkOiBmdW5jdGlvbiAoIGtleSwgb2JqZWN0ICkge1xuXG5cdFx0XHRvYmplY3RzWyBrZXkgXSA9IG9iamVjdDtcblxuXHRcdH0sXG5cblx0XHRyZW1vdmU6IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0XHRkZWxldGUgb2JqZWN0c1sga2V5IF07XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlQWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdG9iamVjdHMgPSB7fTtcblxuXHRcdH1cblxuXHR9O1xuXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBFWFRFTlNJT05TICoqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgRVhURU5TSU9OUyA9IHtcblx0S0hSX0JJTkFSWV9HTFRGOiAnS0hSX2JpbmFyeV9nbFRGJyxcblx0S0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT046ICdLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbicsXG5cdEtIUl9MSUdIVFNfUFVOQ1RVQUw6ICdLSFJfbGlnaHRzX3B1bmN0dWFsJyxcblx0S0hSX01BVEVSSUFMU19DTEVBUkNPQVQ6ICdLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdCcsXG5cdEtIUl9NQVRFUklBTFNfSU9SOiAnS0hSX21hdGVyaWFsc19pb3InLFxuXHRLSFJfTUFURVJJQUxTX1NIRUVOOiAnS0hSX21hdGVyaWFsc19zaGVlbicsXG5cdEtIUl9NQVRFUklBTFNfU1BFQ1VMQVI6ICdLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyJyxcblx0S0hSX01BVEVSSUFMU19UUkFOU01JU1NJT046ICdLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbicsXG5cdEtIUl9NQVRFUklBTFNfSVJJREVTQ0VOQ0U6ICdLSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlJyxcblx0S0hSX01BVEVSSUFMU19VTkxJVDogJ0tIUl9tYXRlcmlhbHNfdW5saXQnLFxuXHRLSFJfTUFURVJJQUxTX1ZPTFVNRTogJ0tIUl9tYXRlcmlhbHNfdm9sdW1lJyxcblx0S0hSX1RFWFRVUkVfQkFTSVNVOiAnS0hSX3RleHR1cmVfYmFzaXN1Jyxcblx0S0hSX1RFWFRVUkVfVFJBTlNGT1JNOiAnS0hSX3RleHR1cmVfdHJhbnNmb3JtJyxcblx0S0hSX01FU0hfUVVBTlRJWkFUSU9OOiAnS0hSX21lc2hfcXVhbnRpemF0aW9uJyxcblx0S0hSX01BVEVSSUFMU19FTUlTU0lWRV9TVFJFTkdUSDogJ0tIUl9tYXRlcmlhbHNfZW1pc3NpdmVfc3RyZW5ndGgnLFxuXHRFWFRfVEVYVFVSRV9XRUJQOiAnRVhUX3RleHR1cmVfd2VicCcsXG5cdEVYVF9NRVNIT1BUX0NPTVBSRVNTSU9OOiAnRVhUX21lc2hvcHRfY29tcHJlc3Npb24nLFxuXHRFWFRfTUVTSF9HUFVfSU5TVEFOQ0lORzogJ0VYVF9tZXNoX2dwdV9pbnN0YW5jaW5nJ1xufTtcblxuLyoqXG4gKiBQdW5jdHVhbCBMaWdodHMgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2xpZ2h0c19wdW5jdHVhbFxuICovXG5jbGFzcyBHTFRGTGlnaHRzRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTElHSFRTX1BVTkNUVUFMO1xuXG5cdFx0Ly8gT2JqZWN0M0QgaW5zdGFuY2UgY2FjaGVzXG5cdFx0dGhpcy5jYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XG5cblx0fVxuXG5cdF9tYXJrRGVmcygpIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG5vZGVEZWZzID0gdGhpcy5wYXJzZXIuanNvbi5ub2RlcyB8fCBbXTtcblxuXHRcdGZvciAoIGxldCBub2RlSW5kZXggPSAwLCBub2RlTGVuZ3RoID0gbm9kZURlZnMubGVuZ3RoOyBub2RlSW5kZXggPCBub2RlTGVuZ3RoOyBub2RlSW5kZXggKysgKSB7XG5cblx0XHRcdGNvbnN0IG5vZGVEZWYgPSBub2RlRGVmc1sgbm9kZUluZGV4IF07XG5cblx0XHRcdGlmICggbm9kZURlZi5leHRlbnNpb25zXG5cdFx0XHRcdFx0JiYgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXVxuXHRcdFx0XHRcdCYmIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0ubGlnaHQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwYXJzZXIuX2FkZE5vZGVSZWYoIHRoaXMuY2FjaGUsIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0ubGlnaHQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHRfbG9hZExpZ2h0KCBsaWdodEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgY2FjaGVLZXkgPSAnbGlnaHQ6JyArIGxpZ2h0SW5kZXg7XG5cdFx0bGV0IGRlcGVuZGVuY3kgPSBwYXJzZXIuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0aWYgKCBkZXBlbmRlbmN5ICkgcmV0dXJuIGRlcGVuZGVuY3k7XG5cblx0XHRjb25zdCBqc29uID0gcGFyc2VyLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9ICgganNvbi5leHRlbnNpb25zICYmIGpzb24uZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB8fCB7fTtcblx0XHRjb25zdCBsaWdodERlZnMgPSBleHRlbnNpb25zLmxpZ2h0cyB8fCBbXTtcblx0XHRjb25zdCBsaWdodERlZiA9IGxpZ2h0RGVmc1sgbGlnaHRJbmRleCBdO1xuXHRcdGxldCBsaWdodE5vZGU7XG5cblx0XHRjb25zdCBjb2xvciA9IG5ldyBDb2xvciggMHhmZmZmZmYgKTtcblxuXHRcdGlmICggbGlnaHREZWYuY29sb3IgIT09IHVuZGVmaW5lZCApIGNvbG9yLmZyb21BcnJheSggbGlnaHREZWYuY29sb3IgKTtcblxuXHRcdGNvbnN0IHJhbmdlID0gbGlnaHREZWYucmFuZ2UgIT09IHVuZGVmaW5lZCA/IGxpZ2h0RGVmLnJhbmdlIDogMDtcblxuXHRcdHN3aXRjaCAoIGxpZ2h0RGVmLnR5cGUgKSB7XG5cblx0XHRcdGNhc2UgJ2RpcmVjdGlvbmFsJzpcblx0XHRcdFx0bGlnaHROb2RlID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoIGNvbG9yICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS50YXJnZXQucG9zaXRpb24uc2V0KCAwLCAwLCAtIDEgKTtcblx0XHRcdFx0bGlnaHROb2RlLmFkZCggbGlnaHROb2RlLnRhcmdldCApO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAncG9pbnQnOlxuXHRcdFx0XHRsaWdodE5vZGUgPSBuZXcgUG9pbnRMaWdodCggY29sb3IgKTtcblx0XHRcdFx0bGlnaHROb2RlLmRpc3RhbmNlID0gcmFuZ2U7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdzcG90Jzpcblx0XHRcdFx0bGlnaHROb2RlID0gbmV3IFNwb3RMaWdodCggY29sb3IgKTtcblx0XHRcdFx0bGlnaHROb2RlLmRpc3RhbmNlID0gcmFuZ2U7XG5cdFx0XHRcdC8vIEhhbmRsZSBzcG90bGlnaHQgcHJvcGVydGllcy5cblx0XHRcdFx0bGlnaHREZWYuc3BvdCA9IGxpZ2h0RGVmLnNwb3QgfHwge307XG5cdFx0XHRcdGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgPSBsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlIDogMDtcblx0XHRcdFx0bGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZSA9IGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGUgIT09IHVuZGVmaW5lZCA/IGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGUgOiBNYXRoLlBJIC8gNC4wO1xuXHRcdFx0XHRsaWdodE5vZGUuYW5nbGUgPSBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlO1xuXHRcdFx0XHRsaWdodE5vZGUucGVudW1icmEgPSAxLjAgLSBsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlIC8gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZTtcblx0XHRcdFx0bGlnaHROb2RlLnRhcmdldC5wb3NpdGlvbi5zZXQoIDAsIDAsIC0gMSApO1xuXHRcdFx0XHRsaWdodE5vZGUuYWRkKCBsaWdodE5vZGUudGFyZ2V0ICk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbmV4cGVjdGVkIGxpZ2h0IHR5cGU6ICcgKyBsaWdodERlZi50eXBlICk7XG5cblx0XHR9XG5cblx0XHQvLyBTb21lIGxpZ2h0cyAoZS5nLiBzcG90KSBkZWZhdWx0IHRvIGEgcG9zaXRpb24gb3RoZXIgdGhhbiB0aGUgb3JpZ2luLiBSZXNldCB0aGUgcG9zaXRpb25cblx0XHQvLyBoZXJlLCBiZWNhdXNlIG5vZGUtbGV2ZWwgcGFyc2luZyB3aWxsIG9ubHkgb3ZlcnJpZGUgcG9zaXRpb24gaWYgZXhwbGljaXRseSBzcGVjaWZpZWQuXG5cdFx0bGlnaHROb2RlLnBvc2l0aW9uLnNldCggMCwgMCwgMCApO1xuXG5cdFx0bGlnaHROb2RlLmRlY2F5ID0gMjtcblxuXHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIGxpZ2h0Tm9kZSwgbGlnaHREZWYgKTtcblxuXHRcdGlmICggbGlnaHREZWYuaW50ZW5zaXR5ICE9PSB1bmRlZmluZWQgKSBsaWdodE5vZGUuaW50ZW5zaXR5ID0gbGlnaHREZWYuaW50ZW5zaXR5O1xuXG5cdFx0bGlnaHROb2RlLm5hbWUgPSBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggbGlnaHREZWYubmFtZSB8fCAoICdsaWdodF8nICsgbGlnaHRJbmRleCApICk7XG5cblx0XHRkZXBlbmRlbmN5ID0gUHJvbWlzZS5yZXNvbHZlKCBsaWdodE5vZGUgKTtcblxuXHRcdHBhcnNlci5jYWNoZS5hZGQoIGNhY2hlS2V5LCBkZXBlbmRlbmN5ICk7XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jeTtcblxuXHR9XG5cblx0Z2V0RGVwZW5kZW5jeSggdHlwZSwgaW5kZXggKSB7XG5cblx0XHRpZiAoIHR5cGUgIT09ICdsaWdodCcgKSByZXR1cm47XG5cblx0XHRyZXR1cm4gdGhpcy5fbG9hZExpZ2h0KCBpbmRleCApO1xuXG5cdH1cblxuXHRjcmVhdGVOb2RlQXR0YWNobWVudCggbm9kZUluZGV4ICkge1xuXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QganNvbiA9IHBhcnNlci5qc29uO1xuXHRcdGNvbnN0IG5vZGVEZWYgPSBqc29uLm5vZGVzWyBub2RlSW5kZXggXTtcblx0XHRjb25zdCBsaWdodERlZiA9ICggbm9kZURlZi5leHRlbnNpb25zICYmIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB8fCB7fTtcblx0XHRjb25zdCBsaWdodEluZGV4ID0gbGlnaHREZWYubGlnaHQ7XG5cblx0XHRpZiAoIGxpZ2h0SW5kZXggPT09IHVuZGVmaW5lZCApIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIHRoaXMuX2xvYWRMaWdodCggbGlnaHRJbmRleCApLnRoZW4oIGZ1bmN0aW9uICggbGlnaHQgKSB7XG5cblx0XHRcdHJldHVybiBwYXJzZXIuX2dldE5vZGVSZWYoIHNlbGYuY2FjaGUsIGxpZ2h0SW5kZXgsIGxpZ2h0ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogVW5saXQgTWF0ZXJpYWxzIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdW5saXRcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc1VubGl0RXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVDtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCkge1xuXG5cdFx0cmV0dXJuIE1lc2hCYXNpY01hdGVyaWFsO1xuXG5cdH1cblxuXHRleHRlbmRQYXJhbXMoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkge1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcblx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xuXG5cdFx0Y29uc3QgbWV0YWxsaWNSb3VnaG5lc3MgPSBtYXRlcmlhbERlZi5wYnJNZXRhbGxpY1JvdWdobmVzcztcblxuXHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MgKSB7XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yICkgKSB7XG5cblx0XHRcdFx0Y29uc3QgYXJyYXkgPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3I7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IuZnJvbUFycmF5KCBhcnJheSApO1xuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbIDMgXTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21hcCcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUsIHNSR0JFbmNvZGluZyApICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIE1hdGVyaWFscyBFbWlzc2l2ZSBTdHJlbmd0aCBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi81NzY4YjNjZTBlZjMyYmMzOWNkZjFiZWYxMGI5NDg1ODY2MzVlYWQzL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19lbWlzc2l2ZV9zdHJlbmd0aC9SRUFETUUubWRcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc0VtaXNzaXZlU3RyZW5ndGhFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfRU1JU1NJVkVfU1RSRU5HVEg7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBlbWlzc2l2ZVN0cmVuZ3RoID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0uZW1pc3NpdmVTdHJlbmd0aDtcblxuXHRcdGlmICggZW1pc3NpdmVTdHJlbmd0aCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZUludGVuc2l0eSA9IGVtaXNzaXZlU3RyZW5ndGg7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogQ2xlYXJjb2F0IE1hdGVyaWFscyBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdFxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX0NMRUFSQ09BVDtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0RmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdCA9IGV4dGVuc2lvbi5jbGVhcmNvYXRGYWN0b3I7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnY2xlYXJjb2F0TWFwJywgZXh0ZW5zaW9uLmNsZWFyY29hdFRleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdFJvdWdobmVzcyA9IGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NGYWN0b3I7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnY2xlYXJjb2F0Um91Z2huZXNzTWFwJywgZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2NsZWFyY29hdE5vcm1hbE1hcCcsIGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlICkgKTtcblxuXHRcdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IHNjYWxlID0gZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUuc2NhbGU7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY2xlYXJjb2F0Tm9ybWFsU2NhbGUgPSBuZXcgVmVjdG9yMiggc2NhbGUsIHNjYWxlICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIElyaWRlc2NlbmNlIE1hdGVyaWFscyBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2lyaWRlc2NlbmNlXG4gKi9cbmNsYXNzIEdMVEZNYXRlcmlhbHNJcmlkZXNjZW5jZUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19JUklERVNDRU5DRTtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0aWYgKCBleHRlbnNpb24uaXJpZGVzY2VuY2VGYWN0b3IgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuaXJpZGVzY2VuY2UgPSBleHRlbnNpb24uaXJpZGVzY2VuY2VGYWN0b3I7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5pcmlkZXNjZW5jZVRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdpcmlkZXNjZW5jZU1hcCcsIGV4dGVuc2lvbi5pcmlkZXNjZW5jZVRleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uaXJpZGVzY2VuY2VJb3IgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuaXJpZGVzY2VuY2VJT1IgPSBleHRlbnNpb24uaXJpZGVzY2VuY2VJb3I7XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsUGFyYW1zLmlyaWRlc2NlbmNlVGhpY2tuZXNzUmFuZ2UgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuaXJpZGVzY2VuY2VUaGlja25lc3NSYW5nZSA9IFsgMTAwLCA0MDAgXTtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLmlyaWRlc2NlbmNlVGhpY2tuZXNzTWluaW11bSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5pcmlkZXNjZW5jZVRoaWNrbmVzc1JhbmdlWyAwIF0gPSBleHRlbnNpb24uaXJpZGVzY2VuY2VUaGlja25lc3NNaW5pbXVtO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uaXJpZGVzY2VuY2VUaGlja25lc3NNYXhpbXVtICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmlyaWRlc2NlbmNlVGhpY2tuZXNzUmFuZ2VbIDEgXSA9IGV4dGVuc2lvbi5pcmlkZXNjZW5jZVRoaWNrbmVzc01heGltdW07XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5pcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdpcmlkZXNjZW5jZVRoaWNrbmVzc01hcCcsIGV4dGVuc2lvbi5pcmlkZXNjZW5jZVRoaWNrbmVzc1RleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogU2hlZW4gTWF0ZXJpYWxzIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21haW4vZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3NoZWVuXG4gKi9cbmNsYXNzIEdMVEZNYXRlcmlhbHNTaGVlbkV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19TSEVFTjtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdG1hdGVyaWFsUGFyYW1zLnNoZWVuQ29sb3IgPSBuZXcgQ29sb3IoIDAsIDAsIDAgKTtcblx0XHRtYXRlcmlhbFBhcmFtcy5zaGVlblJvdWdobmVzcyA9IDA7XG5cdFx0bWF0ZXJpYWxQYXJhbXMuc2hlZW4gPSAxO1xuXG5cdFx0Y29uc3QgZXh0ZW5zaW9uID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5zaGVlbkNvbG9yRmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnNoZWVuQ29sb3IuZnJvbUFycmF5KCBleHRlbnNpb24uc2hlZW5Db2xvckZhY3RvciApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uc2hlZW5Sb3VnaG5lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuc2hlZW5Sb3VnaG5lc3MgPSBleHRlbnNpb24uc2hlZW5Sb3VnaG5lc3NGYWN0b3I7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5zaGVlbkNvbG9yVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3NoZWVuQ29sb3JNYXAnLCBleHRlbnNpb24uc2hlZW5Db2xvclRleHR1cmUsIHNSR0JFbmNvZGluZyApICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5zaGVlblJvdWdobmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdzaGVlblJvdWdobmVzc01hcCcsIGV4dGVuc2lvbi5zaGVlblJvdWdobmVzc1RleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogVHJhbnNtaXNzaW9uIE1hdGVyaWFscyBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvblxuICogRHJhZnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9wdWxsLzE2OThcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc1RyYW5zbWlzc2lvbkV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19UUkFOU01JU1NJT047XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdGlmICggZXh0ZW5zaW9uLnRyYW5zbWlzc2lvbkZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy50cmFuc21pc3Npb24gPSBleHRlbnNpb24udHJhbnNtaXNzaW9uRmFjdG9yO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24udHJhbnNtaXNzaW9uVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3RyYW5zbWlzc2lvbk1hcCcsIGV4dGVuc2lvbi50cmFuc21pc3Npb25UZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIE1hdGVyaWFscyBWb2x1bWUgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc192b2x1bWVcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc1ZvbHVtZUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19WT0xVTUU7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdG1hdGVyaWFsUGFyYW1zLnRoaWNrbmVzcyA9IGV4dGVuc2lvbi50aGlja25lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCA/IGV4dGVuc2lvbi50aGlja25lc3NGYWN0b3IgOiAwO1xuXG5cdFx0aWYgKCBleHRlbnNpb24udGhpY2tuZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3RoaWNrbmVzc01hcCcsIGV4dGVuc2lvbi50aGlja25lc3NUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdG1hdGVyaWFsUGFyYW1zLmF0dGVudWF0aW9uRGlzdGFuY2UgPSBleHRlbnNpb24uYXR0ZW51YXRpb25EaXN0YW5jZSB8fCBJbmZpbml0eTtcblxuXHRcdGNvbnN0IGNvbG9yQXJyYXkgPSBleHRlbnNpb24uYXR0ZW51YXRpb25Db2xvciB8fCBbIDEsIDEsIDEgXTtcblx0XHRtYXRlcmlhbFBhcmFtcy5hdHRlbnVhdGlvbkNvbG9yID0gbmV3IENvbG9yKCBjb2xvckFycmF5WyAwIF0sIGNvbG9yQXJyYXlbIDEgXSwgY29sb3JBcnJheVsgMiBdICk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBNYXRlcmlhbHMgaW9yIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfaW9yXG4gKi9cbmNsYXNzIEdMVEZNYXRlcmlhbHNJb3JFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfSU9SO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoIG1hdGVyaWFsSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIE1lc2hQaHlzaWNhbE1hdGVyaWFsO1xuXG5cdH1cblxuXHRleHRlbmRNYXRlcmlhbFBhcmFtcyggbWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgZXh0ZW5zaW9uID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cblx0XHRtYXRlcmlhbFBhcmFtcy5pb3IgPSBleHRlbnNpb24uaW9yICE9PSB1bmRlZmluZWQgPyBleHRlbnNpb24uaW9yIDogMS41O1xuXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIE1hdGVyaWFscyBzcGVjdWxhciBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3NwZWN1bGFyXG4gKi9cbmNsYXNzIEdMVEZNYXRlcmlhbHNTcGVjdWxhckV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19TUEVDVUxBUjtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXJJbnRlbnNpdHkgPSBleHRlbnNpb24uc3BlY3VsYXJGYWN0b3IgIT09IHVuZGVmaW5lZCA/IGV4dGVuc2lvbi5zcGVjdWxhckZhY3RvciA6IDEuMDtcblxuXHRcdGlmICggZXh0ZW5zaW9uLnNwZWN1bGFyVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3NwZWN1bGFySW50ZW5zaXR5TWFwJywgZXh0ZW5zaW9uLnNwZWN1bGFyVGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBjb2xvckFycmF5ID0gZXh0ZW5zaW9uLnNwZWN1bGFyQ29sb3JGYWN0b3IgfHwgWyAxLCAxLCAxIF07XG5cdFx0bWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXJDb2xvciA9IG5ldyBDb2xvciggY29sb3JBcnJheVsgMCBdLCBjb2xvckFycmF5WyAxIF0sIGNvbG9yQXJyYXlbIDIgXSApO1xuXG5cdFx0aWYgKCBleHRlbnNpb24uc3BlY3VsYXJDb2xvclRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdzcGVjdWxhckNvbG9yTWFwJywgZXh0ZW5zaW9uLnNwZWN1bGFyQ29sb3JUZXh0dXJlLCBzUkdCRW5jb2RpbmcgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogQmFzaXNVIFRleHR1cmUgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfYmFzaXN1XG4gKi9cbmNsYXNzIEdMVEZUZXh0dXJlQmFzaXNVRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9CQVNJU1U7XG5cblx0fVxuXG5cdGxvYWRUZXh0dXJlKCB0ZXh0dXJlSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBqc29uID0gcGFyc2VyLmpzb247XG5cblx0XHRjb25zdCB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XG5cblx0XHRpZiAoICEgdGV4dHVyZURlZi5leHRlbnNpb25zIHx8ICEgdGV4dHVyZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXHRcdGNvbnN0IGxvYWRlciA9IHBhcnNlci5vcHRpb25zLmt0eDJMb2FkZXI7XG5cblx0XHRpZiAoICEgbG9hZGVyICkge1xuXG5cdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkICYmIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIHRoaXMubmFtZSApID49IDAgKSB7XG5cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogc2V0S1RYMkxvYWRlciBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBLVFgyIHRleHR1cmVzJyApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEFzc3VtZXMgdGhhdCB0aGUgZXh0ZW5zaW9uIGlzIG9wdGlvbmFsIGFuZCB0aGF0IGEgZmFsbGJhY2sgdGV4dHVyZSBpcyBwcmVzZW50XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGFyc2VyLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgZXh0ZW5zaW9uLnNvdXJjZSwgbG9hZGVyICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogV2ViUCBUZXh0dXJlIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX3RleHR1cmVfd2VicFxuICovXG5jbGFzcyBHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLkVYVF9URVhUVVJFX1dFQlA7XG5cdFx0dGhpcy5pc1N1cHBvcnRlZCA9IG51bGw7XG5cblx0fVxuXG5cdGxvYWRUZXh0dXJlKCB0ZXh0dXJlSW5kZXggKSB7XG5cblx0XHRjb25zdCBuYW1lID0gdGhpcy5uYW1lO1xuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbjtcblxuXHRcdGNvbnN0IHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcblxuXHRcdGlmICggISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnMgfHwgISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIG5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIG5hbWUgXTtcblx0XHRjb25zdCBzb3VyY2UgPSBqc29uLmltYWdlc1sgZXh0ZW5zaW9uLnNvdXJjZSBdO1xuXG5cdFx0bGV0IGxvYWRlciA9IHBhcnNlci50ZXh0dXJlTG9hZGVyO1xuXHRcdGlmICggc291cmNlLnVyaSApIHtcblxuXHRcdFx0Y29uc3QgaGFuZGxlciA9IHBhcnNlci5vcHRpb25zLm1hbmFnZXIuZ2V0SGFuZGxlciggc291cmNlLnVyaSApO1xuXHRcdFx0aWYgKCBoYW5kbGVyICE9PSBudWxsICkgbG9hZGVyID0gaGFuZGxlcjtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmRldGVjdFN1cHBvcnQoKS50aGVuKCBmdW5jdGlvbiAoIGlzU3VwcG9ydGVkICkge1xuXG5cdFx0XHRpZiAoIGlzU3VwcG9ydGVkICkgcmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIGV4dGVuc2lvbi5zb3VyY2UsIGxvYWRlciApO1xuXG5cdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkICYmIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIG5hbWUgKSA+PSAwICkge1xuXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFdlYlAgcmVxdWlyZWQgYnkgYXNzZXQgYnV0IHVuc3VwcG9ydGVkLicgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGYWxsIGJhY2sgdG8gUE5HIG9yIEpQRUcuXG5cdFx0XHRyZXR1cm4gcGFyc2VyLmxvYWRUZXh0dXJlKCB0ZXh0dXJlSW5kZXggKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0ZGV0ZWN0U3VwcG9ydCgpIHtcblxuXHRcdGlmICggISB0aGlzLmlzU3VwcG9ydGVkICkge1xuXG5cdFx0XHR0aGlzLmlzU3VwcG9ydGVkID0gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcblxuXHRcdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG5cdFx0XHRcdC8vIExvc3N5IHRlc3QgaW1hZ2UuIFN1cHBvcnQgZm9yIGxvc3N5IGltYWdlcyBkb2Vzbid0IGd1YXJhbnRlZSBzdXBwb3J0IGZvciBhbGxcblx0XHRcdFx0Ly8gV2ViUCBpbWFnZXMsIHVuZm9ydHVuYXRlbHkuXG5cdFx0XHRcdGltYWdlLnNyYyA9ICdkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSaUlBQUFCWFJVSlFWbEE0SUJZQUFBQXdBUUNkQVNvQkFBRUFEc0QrSmFRQUEzQUFBQUFBJztcblxuXHRcdFx0XHRpbWFnZS5vbmxvYWQgPSBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmVzb2x2ZSggaW1hZ2UuaGVpZ2h0ID09PSAxICk7XG5cblx0XHRcdFx0fTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuaXNTdXBwb3J0ZWQ7XG5cblx0fVxuXG59XG5cbi8qKlxuICogbWVzaG9wdCBCdWZmZXJWaWV3IENvbXByZXNzaW9uIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX21lc2hvcHRfY29tcHJlc3Npb25cbiAqL1xuY2xhc3MgR0xURk1lc2hvcHRDb21wcmVzc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuRVhUX01FU0hPUFRfQ09NUFJFU1NJT047XG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cblx0fVxuXG5cdGxvYWRCdWZmZXJWaWV3KCBpbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uO1xuXHRcdGNvbnN0IGJ1ZmZlclZpZXcgPSBqc29uLmJ1ZmZlclZpZXdzWyBpbmRleCBdO1xuXG5cdFx0aWYgKCBidWZmZXJWaWV3LmV4dGVuc2lvbnMgJiYgYnVmZmVyVmlldy5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcblxuXHRcdFx0Y29uc3QgZXh0ZW5zaW9uRGVmID0gYnVmZmVyVmlldy5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdFx0Y29uc3QgYnVmZmVyID0gdGhpcy5wYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlcicsIGV4dGVuc2lvbkRlZi5idWZmZXIgKTtcblx0XHRcdGNvbnN0IGRlY29kZXIgPSB0aGlzLnBhcnNlci5vcHRpb25zLm1lc2hvcHREZWNvZGVyO1xuXG5cdFx0XHRpZiAoICEgZGVjb2RlciB8fCAhIGRlY29kZXIuc3VwcG9ydGVkICkge1xuXG5cdFx0XHRcdGlmICgganNvbi5leHRlbnNpb25zUmVxdWlyZWQgJiYganNvbi5leHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggdGhpcy5uYW1lICkgPj0gMCApIHtcblxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IHNldE1lc2hvcHREZWNvZGVyIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBsb2FkaW5nIGNvbXByZXNzZWQgZmlsZXMnICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIEFzc3VtZXMgdGhhdCB0aGUgZXh0ZW5zaW9uIGlzIG9wdGlvbmFsIGFuZCB0aGF0IGZhbGxiYWNrIGJ1ZmZlciBkYXRhIGlzIHByZXNlbnRcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGJ1ZmZlci50aGVuKCBmdW5jdGlvbiAoIHJlcyApIHtcblxuXHRcdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gZXh0ZW5zaW9uRGVmLmJ5dGVPZmZzZXQgfHwgMDtcblx0XHRcdFx0Y29uc3QgYnl0ZUxlbmd0aCA9IGV4dGVuc2lvbkRlZi5ieXRlTGVuZ3RoIHx8IDA7XG5cblx0XHRcdFx0Y29uc3QgY291bnQgPSBleHRlbnNpb25EZWYuY291bnQ7XG5cdFx0XHRcdGNvbnN0IHN0cmlkZSA9IGV4dGVuc2lvbkRlZi5ieXRlU3RyaWRlO1xuXG5cdFx0XHRcdGNvbnN0IHNvdXJjZSA9IG5ldyBVaW50OEFycmF5KCByZXMsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGggKTtcblxuXHRcdFx0XHRpZiAoIGRlY29kZXIuZGVjb2RlR2x0ZkJ1ZmZlckFzeW5jICkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIGRlY29kZXIuZGVjb2RlR2x0ZkJ1ZmZlckFzeW5jKCBjb3VudCwgc3RyaWRlLCBzb3VyY2UsIGV4dGVuc2lvbkRlZi5tb2RlLCBleHRlbnNpb25EZWYuZmlsdGVyICkudGhlbiggZnVuY3Rpb24gKCByZXMgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybiByZXMuYnVmZmVyO1xuXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0IGZvciBNZXNob3B0RGVjb2RlciAwLjE4IG9yIGVhcmxpZXIsIHdpdGhvdXQgZGVjb2RlR2x0ZkJ1ZmZlckFzeW5jXG5cdFx0XHRcdFx0cmV0dXJuIGRlY29kZXIucmVhZHkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBuZXcgQXJyYXlCdWZmZXIoIGNvdW50ICogc3RyaWRlICk7XG5cdFx0XHRcdFx0XHRkZWNvZGVyLmRlY29kZUdsdGZCdWZmZXIoIG5ldyBVaW50OEFycmF5KCByZXN1bHQgKSwgY291bnQsIHN0cmlkZSwgc291cmNlLCBleHRlbnNpb25EZWYubW9kZSwgZXh0ZW5zaW9uRGVmLmZpbHRlciApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG4vKipcbiAqIEdQVSBJbnN0YW5jaW5nIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX21lc2hfZ3B1X2luc3RhbmNpbmdcbiAqXG4gKi9cbmNsYXNzIEdMVEZNZXNoR3B1SW5zdGFuY2luZyB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuRVhUX01FU0hfR1BVX0lOU1RBTkNJTkc7XG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cblx0fVxuXG5cdGNyZWF0ZU5vZGVNZXNoKCBub2RlSW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbjtcblx0XHRjb25zdCBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHRpZiAoICEgbm9kZURlZi5leHRlbnNpb25zIHx8ICEgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSB8fFxuXHRcdFx0bm9kZURlZi5tZXNoID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgbWVzaERlZiA9IGpzb24ubWVzaGVzWyBub2RlRGVmLm1lc2ggXTtcblxuXHRcdC8vIE5vIFBvaW50cyBvciBMaW5lcyArIEluc3RhbmNpbmcgc3VwcG9ydCB5ZXRcblxuXHRcdGZvciAoIGNvbnN0IHByaW1pdGl2ZSBvZiBtZXNoRGVmLnByaW1pdGl2ZXMgKSB7XG5cblx0XHRcdGlmICggcHJpbWl0aXZlLm1vZGUgIT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRVMgJiZcblx0XHRcdFx0IHByaW1pdGl2ZS5tb2RlICE9PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfU1RSSVAgJiZcblx0XHRcdFx0IHByaW1pdGl2ZS5tb2RlICE9PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfRkFOICYmXG5cdFx0XHRcdCBwcmltaXRpdmUubW9kZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRjb25zdCBleHRlbnNpb25EZWYgPSBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXHRcdGNvbnN0IGF0dHJpYnV0ZXNEZWYgPSBleHRlbnNpb25EZWYuYXR0cmlidXRlcztcblxuXHRcdC8vIEBUT0RPOiBDYW4gd2Ugc3VwcG9ydCBJbnN0YW5jZWRNZXNoICsgU2tpbm5lZE1lc2g/XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cdFx0Y29uc3QgYXR0cmlidXRlcyA9IHt9O1xuXG5cdFx0Zm9yICggY29uc3Qga2V5IGluIGF0dHJpYnV0ZXNEZWYgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggdGhpcy5wYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgYXR0cmlidXRlc0RlZlsga2V5IF0gKS50aGVuKCBhY2Nlc3NvciA9PiB7XG5cblx0XHRcdFx0YXR0cmlidXRlc1sga2V5IF0gPSBhY2Nlc3Nvcjtcblx0XHRcdFx0cmV0dXJuIGF0dHJpYnV0ZXNbIGtleSBdO1xuXG5cdFx0XHR9ICkgKTtcblxuXHRcdH1cblxuXHRcdGlmICggcGVuZGluZy5sZW5ndGggPCAxICkge1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdHBlbmRpbmcucHVzaCggdGhpcy5wYXJzZXIuY3JlYXRlTm9kZU1lc2goIG5vZGVJbmRleCApICk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCByZXN1bHRzID0+IHtcblxuXHRcdFx0Y29uc3Qgbm9kZU9iamVjdCA9IHJlc3VsdHMucG9wKCk7XG5cdFx0XHRjb25zdCBtZXNoZXMgPSBub2RlT2JqZWN0LmlzR3JvdXAgPyBub2RlT2JqZWN0LmNoaWxkcmVuIDogWyBub2RlT2JqZWN0IF07XG5cdFx0XHRjb25zdCBjb3VudCA9IHJlc3VsdHNbIDAgXS5jb3VudDsgLy8gQWxsIGF0dHJpYnV0ZSBjb3VudHMgc2hvdWxkIGJlIHNhbWVcblx0XHRcdGNvbnN0IGluc3RhbmNlZE1lc2hlcyA9IFtdO1xuXG5cdFx0XHRmb3IgKCBjb25zdCBtZXNoIG9mIG1lc2hlcyApIHtcblxuXHRcdFx0XHQvLyBUZW1wb3JhbCB2YXJpYWJsZXNcblx0XHRcdFx0Y29uc3QgbSA9IG5ldyBNYXRyaXg0KCk7XG5cdFx0XHRcdGNvbnN0IHAgPSBuZXcgVmVjdG9yMygpO1xuXHRcdFx0XHRjb25zdCBxID0gbmV3IFF1YXRlcm5pb24oKTtcblx0XHRcdFx0Y29uc3QgcyA9IG5ldyBWZWN0b3IzKCAxLCAxLCAxICk7XG5cblx0XHRcdFx0Y29uc3QgaW5zdGFuY2VkTWVzaCA9IG5ldyBJbnN0YW5jZWRNZXNoKCBtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdGVyaWFsLCBjb3VudCApO1xuXG5cdFx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGNvdW50OyBpICsrICkge1xuXG5cdFx0XHRcdFx0aWYgKCBhdHRyaWJ1dGVzLlRSQU5TTEFUSU9OICkge1xuXG5cdFx0XHRcdFx0XHRwLmZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZXMuVFJBTlNMQVRJT04sIGkgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggYXR0cmlidXRlcy5ST1RBVElPTiApIHtcblxuXHRcdFx0XHRcdFx0cS5mcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGVzLlJPVEFUSU9OLCBpICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIGF0dHJpYnV0ZXMuU0NBTEUgKSB7XG5cblx0XHRcdFx0XHRcdHMuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlcy5TQ0FMRSwgaSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aW5zdGFuY2VkTWVzaC5zZXRNYXRyaXhBdCggaSwgbS5jb21wb3NlKCBwLCBxLCBzICkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWRkIGluc3RhbmNlIGF0dHJpYnV0ZXMgdG8gdGhlIGdlb21ldHJ5LCBleGNsdWRpbmcgVFJTLlxuXHRcdFx0XHRmb3IgKCBjb25zdCBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMgKSB7XG5cblx0XHRcdFx0XHRpZiAoIGF0dHJpYnV0ZU5hbWUgIT09ICdUUkFOU0xBVElPTicgJiZcblx0XHRcdFx0XHRcdCBhdHRyaWJ1dGVOYW1lICE9PSAnUk9UQVRJT04nICYmXG5cdFx0XHRcdFx0XHQgYXR0cmlidXRlTmFtZSAhPT0gJ1NDQUxFJyApIHtcblxuXHRcdFx0XHRcdFx0bWVzaC5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZXNbIGF0dHJpYnV0ZU5hbWUgXSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBKdXN0IGluIGNhc2Vcblx0XHRcdFx0T2JqZWN0M0QucHJvdG90eXBlLmNvcHkuY2FsbCggaW5zdGFuY2VkTWVzaCwgbWVzaCApO1xuXG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE4MzM0XG5cdFx0XHRcdGluc3RhbmNlZE1lc2guZnJ1c3R1bUN1bGxlZCA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLnBhcnNlci5hc3NpZ25GaW5hbE1hdGVyaWFsKCBpbnN0YW5jZWRNZXNoICk7XG5cblx0XHRcdFx0aW5zdGFuY2VkTWVzaGVzLnB1c2goIGluc3RhbmNlZE1lc2ggKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5vZGVPYmplY3QuaXNHcm91cCApIHtcblxuXHRcdFx0XHRub2RlT2JqZWN0LmNsZWFyKCk7XG5cblx0XHRcdFx0bm9kZU9iamVjdC5hZGQoIC4uLiBpbnN0YW5jZWRNZXNoZXMgKTtcblxuXHRcdFx0XHRyZXR1cm4gbm9kZU9iamVjdDtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaW5zdGFuY2VkTWVzaGVzWyAwIF07XG5cblx0XHR9ICk7XG5cblx0fVxuXG59XG5cbi8qIEJJTkFSWSBFWFRFTlNJT04gKi9cbmNvbnN0IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDID0gJ2dsVEYnO1xuY29uc3QgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIID0gMTI7XG5jb25zdCBCSU5BUllfRVhURU5TSU9OX0NIVU5LX1RZUEVTID0geyBKU09OOiAweDRFNEY1MzRBLCBCSU46IDB4MDA0RTQ5NDIgfTtcblxuY2xhc3MgR0xURkJpbmFyeUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIGRhdGEgKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURjtcblx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xuXHRcdHRoaXMuYm9keSA9IG51bGw7XG5cblx0XHRjb25zdCBoZWFkZXJWaWV3ID0gbmV3IERhdGFWaWV3KCBkYXRhLCAwLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKTtcblx0XHRjb25zdCB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuXG5cdFx0dGhpcy5oZWFkZXIgPSB7XG5cdFx0XHRtYWdpYzogdGV4dERlY29kZXIuZGVjb2RlKCBuZXcgVWludDhBcnJheSggZGF0YS5zbGljZSggMCwgNCApICkgKSxcblx0XHRcdHZlcnNpb246IGhlYWRlclZpZXcuZ2V0VWludDMyKCA0LCB0cnVlICksXG5cdFx0XHRsZW5ndGg6IGhlYWRlclZpZXcuZ2V0VWludDMyKCA4LCB0cnVlIClcblx0XHR9O1xuXG5cdFx0aWYgKCB0aGlzLmhlYWRlci5tYWdpYyAhPT0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIGdsVEYtQmluYXJ5IGhlYWRlci4nICk7XG5cblx0XHR9IGVsc2UgaWYgKCB0aGlzLmhlYWRlci52ZXJzaW9uIDwgMi4wICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBMZWdhY3kgYmluYXJ5IGZpbGUgZGV0ZWN0ZWQuJyApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgY2h1bmtDb250ZW50c0xlbmd0aCA9IHRoaXMuaGVhZGVyLmxlbmd0aCAtIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSDtcblx0XHRjb25zdCBjaHVua1ZpZXcgPSBuZXcgRGF0YVZpZXcoIGRhdGEsIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCApO1xuXHRcdGxldCBjaHVua0luZGV4ID0gMDtcblxuXHRcdHdoaWxlICggY2h1bmtJbmRleCA8IGNodW5rQ29udGVudHNMZW5ndGggKSB7XG5cblx0XHRcdGNvbnN0IGNodW5rTGVuZ3RoID0gY2h1bmtWaWV3LmdldFVpbnQzMiggY2h1bmtJbmRleCwgdHJ1ZSApO1xuXHRcdFx0Y2h1bmtJbmRleCArPSA0O1xuXG5cdFx0XHRjb25zdCBjaHVua1R5cGUgPSBjaHVua1ZpZXcuZ2V0VWludDMyKCBjaHVua0luZGV4LCB0cnVlICk7XG5cdFx0XHRjaHVua0luZGV4ICs9IDQ7XG5cblx0XHRcdGlmICggY2h1bmtUeXBlID09PSBCSU5BUllfRVhURU5TSU9OX0NIVU5LX1RZUEVTLkpTT04gKSB7XG5cblx0XHRcdFx0Y29uc3QgY29udGVudEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoIGRhdGEsIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCArIGNodW5rSW5kZXgsIGNodW5rTGVuZ3RoICk7XG5cdFx0XHRcdHRoaXMuY29udGVudCA9IHRleHREZWNvZGVyLmRlY29kZSggY29udGVudEFycmF5ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGNodW5rVHlwZSA9PT0gQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUy5CSU4gKSB7XG5cblx0XHRcdFx0Y29uc3QgYnl0ZU9mZnNldCA9IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCArIGNodW5rSW5kZXg7XG5cdFx0XHRcdHRoaXMuYm9keSA9IGRhdGEuc2xpY2UoIGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBjaHVua0xlbmd0aCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIENsaWVudHMgbXVzdCBpZ25vcmUgY2h1bmtzIHdpdGggdW5rbm93biB0eXBlcy5cblxuXHRcdFx0Y2h1bmtJbmRleCArPSBjaHVua0xlbmd0aDtcblxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5jb250ZW50ID09PSBudWxsICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBKU09OIGNvbnRlbnQgbm90IGZvdW5kLicgKTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyoqXG4gKiBEUkFDTyBNZXNoIENvbXByZXNzaW9uIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uXG4gKi9cbmNsYXNzIEdMVEZEcmFjb01lc2hDb21wcmVzc2lvbkV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIGpzb24sIGRyYWNvTG9hZGVyICkge1xuXG5cdFx0aWYgKCAhIGRyYWNvTG9hZGVyICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBObyBEUkFDT0xvYWRlciBpbnN0YW5jZSBwcm92aWRlZC4nICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OO1xuXHRcdHRoaXMuanNvbiA9IGpzb247XG5cdFx0dGhpcy5kcmFjb0xvYWRlciA9IGRyYWNvTG9hZGVyO1xuXHRcdHRoaXMuZHJhY29Mb2FkZXIucHJlbG9hZCgpO1xuXG5cdH1cblxuXHRkZWNvZGVQcmltaXRpdmUoIHByaW1pdGl2ZSwgcGFyc2VyICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBkcmFjb0xvYWRlciA9IHRoaXMuZHJhY29Mb2FkZXI7XG5cdFx0Y29uc3QgYnVmZmVyVmlld0luZGV4ID0gcHJpbWl0aXZlLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmJ1ZmZlclZpZXc7XG5cdFx0Y29uc3QgZ2x0ZkF0dHJpYnV0ZU1hcCA9IHByaW1pdGl2ZS5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5hdHRyaWJ1dGVzO1xuXHRcdGNvbnN0IHRocmVlQXR0cmlidXRlTWFwID0ge307XG5cdFx0Y29uc3QgYXR0cmlidXRlTm9ybWFsaXplZE1hcCA9IHt9O1xuXHRcdGNvbnN0IGF0dHJpYnV0ZVR5cGVNYXAgPSB7fTtcblxuXHRcdGZvciAoIGNvbnN0IGF0dHJpYnV0ZU5hbWUgaW4gZ2x0ZkF0dHJpYnV0ZU1hcCApIHtcblxuXHRcdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgYXR0cmlidXRlTmFtZSBdIHx8IGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0dGhyZWVBdHRyaWJ1dGVNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gZ2x0ZkF0dHJpYnV0ZU1hcFsgYXR0cmlidXRlTmFtZSBdO1xuXG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgYXR0cmlidXRlTmFtZSBpbiBwcmltaXRpdmUuYXR0cmlidXRlcyApIHtcblxuXHRcdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgYXR0cmlidXRlTmFtZSBdIHx8IGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aWYgKCBnbHRmQXR0cmlidXRlTWFwWyBhdHRyaWJ1dGVOYW1lIF0gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBhY2Nlc3NvckRlZiA9IGpzb24uYWNjZXNzb3JzWyBwcmltaXRpdmUuYXR0cmlidXRlc1sgYXR0cmlidXRlTmFtZSBdIF07XG5cdFx0XHRcdGNvbnN0IGNvbXBvbmVudFR5cGUgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yRGVmLmNvbXBvbmVudFR5cGUgXTtcblxuXHRcdFx0XHRhdHRyaWJ1dGVUeXBlTWFwWyB0aHJlZUF0dHJpYnV0ZU5hbWUgXSA9IGNvbXBvbmVudFR5cGUubmFtZTtcblx0XHRcdFx0YXR0cmlidXRlTm9ybWFsaXplZE1hcFsgdGhyZWVBdHRyaWJ1dGVOYW1lIF0gPSBhY2Nlc3NvckRlZi5ub3JtYWxpemVkID09PSB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYnVmZmVyVmlld0luZGV4ICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3ICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcblxuXHRcdFx0XHRkcmFjb0xvYWRlci5kZWNvZGVEcmFjb0ZpbGUoIGJ1ZmZlclZpZXcsIGZ1bmN0aW9uICggZ2VvbWV0cnkgKSB7XG5cblx0XHRcdFx0XHRmb3IgKCBjb25zdCBhdHRyaWJ1dGVOYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZSA9IGdlb21ldHJ5LmF0dHJpYnV0ZXNbIGF0dHJpYnV0ZU5hbWUgXTtcblx0XHRcdFx0XHRcdGNvbnN0IG5vcm1hbGl6ZWQgPSBhdHRyaWJ1dGVOb3JtYWxpemVkTWFwWyBhdHRyaWJ1dGVOYW1lIF07XG5cblx0XHRcdFx0XHRcdGlmICggbm9ybWFsaXplZCAhPT0gdW5kZWZpbmVkICkgYXR0cmlidXRlLm5vcm1hbGl6ZWQgPSBub3JtYWxpemVkO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVzb2x2ZSggZ2VvbWV0cnkgKTtcblxuXHRcdFx0XHR9LCB0aHJlZUF0dHJpYnV0ZU1hcCwgYXR0cmlidXRlVHlwZU1hcCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogVGV4dHVyZSBUcmFuc2Zvcm0gRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfdHJhbnNmb3JtXG4gKi9cbmNsYXNzIEdMVEZUZXh0dXJlVHJhbnNmb3JtRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNO1xuXG5cdH1cblxuXHRleHRlbmRUZXh0dXJlKCB0ZXh0dXJlLCB0cmFuc2Zvcm0gKSB7XG5cblx0XHRpZiAoIHRyYW5zZm9ybS50ZXhDb29yZCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBDdXN0b20gVVYgc2V0cyBpbiBcIicgKyB0aGlzLm5hbWUgKyAnXCIgZXh0ZW5zaW9uIG5vdCB5ZXQgc3VwcG9ydGVkLicgKTtcblxuXHRcdH1cblxuXHRcdGlmICggdHJhbnNmb3JtLm9mZnNldCA9PT0gdW5kZWZpbmVkICYmIHRyYW5zZm9ybS5yb3RhdGlvbiA9PT0gdW5kZWZpbmVkICYmIHRyYW5zZm9ybS5zY2FsZSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMjE4MTkuXG5cdFx0XHRyZXR1cm4gdGV4dHVyZTtcblxuXHRcdH1cblxuXHRcdHRleHR1cmUgPSB0ZXh0dXJlLmNsb25lKCk7XG5cblx0XHRpZiAoIHRyYW5zZm9ybS5vZmZzZXQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGV4dHVyZS5vZmZzZXQuZnJvbUFycmF5KCB0cmFuc2Zvcm0ub2Zmc2V0ICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zZm9ybS5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHR0ZXh0dXJlLnJvdGF0aW9uID0gdHJhbnNmb3JtLnJvdGF0aW9uO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0cmFuc2Zvcm0uc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGV4dHVyZS5yZXBlYXQuZnJvbUFycmF5KCB0cmFuc2Zvcm0uc2NhbGUgKTtcblxuXHRcdH1cblxuXHRcdHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG5cdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0fVxuXG59XG5cbi8qKlxuICogTWVzaCBRdWFudGl6YXRpb24gRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21lc2hfcXVhbnRpemF0aW9uXG4gKi9cbmNsYXNzIEdMVEZNZXNoUXVhbnRpemF0aW9uRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01FU0hfUVVBTlRJWkFUSU9OO1xuXG5cdH1cblxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKiogSU5URVJQT0xBVElPTiAqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIFNwbGluZSBJbnRlcnBvbGF0aW9uXG4vLyBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2FwcGVuZGl4LWMtc3BsaW5lLWludGVycG9sYXRpb25cbmNsYXNzIEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50IGV4dGVuZHMgSW50ZXJwb2xhbnQge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJhbWV0ZXJQb3NpdGlvbnMsIHNhbXBsZVZhbHVlcywgc2FtcGxlU2l6ZSwgcmVzdWx0QnVmZmVyICkge1xuXG5cdFx0c3VwZXIoIHBhcmFtZXRlclBvc2l0aW9ucywgc2FtcGxlVmFsdWVzLCBzYW1wbGVTaXplLCByZXN1bHRCdWZmZXIgKTtcblxuXHR9XG5cblx0Y29weVNhbXBsZVZhbHVlXyggaW5kZXggKSB7XG5cblx0XHQvLyBDb3BpZXMgYSBzYW1wbGUgdmFsdWUgdG8gdGhlIHJlc3VsdCBidWZmZXIuIFNlZSBkZXNjcmlwdGlvbiBvZiBnbFRGXG5cdFx0Ly8gQ1VCSUNTUExJTkUgdmFsdWVzIGxheW91dCBpbiBpbnRlcnBvbGF0ZV8oKSBmdW5jdGlvbiBiZWxvdy5cblxuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMucmVzdWx0QnVmZmVyLFxuXHRcdFx0dmFsdWVzID0gdGhpcy5zYW1wbGVWYWx1ZXMsXG5cdFx0XHR2YWx1ZVNpemUgPSB0aGlzLnZhbHVlU2l6ZSxcblx0XHRcdG9mZnNldCA9IGluZGV4ICogdmFsdWVTaXplICogMyArIHZhbHVlU2l6ZTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSAhPT0gdmFsdWVTaXplOyBpICsrICkge1xuXG5cdFx0XHRyZXN1bHRbIGkgXSA9IHZhbHVlc1sgb2Zmc2V0ICsgaSBdO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblxuXHR9XG5cblx0aW50ZXJwb2xhdGVfKCBpMSwgdDAsIHQsIHQxICkge1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHRCdWZmZXI7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpcy5zYW1wbGVWYWx1ZXM7XG5cdFx0Y29uc3Qgc3RyaWRlID0gdGhpcy52YWx1ZVNpemU7XG5cblx0XHRjb25zdCBzdHJpZGUyID0gc3RyaWRlICogMjtcblx0XHRjb25zdCBzdHJpZGUzID0gc3RyaWRlICogMztcblxuXHRcdGNvbnN0IHRkID0gdDEgLSB0MDtcblxuXHRcdGNvbnN0IHAgPSAoIHQgLSB0MCApIC8gdGQ7XG5cdFx0Y29uc3QgcHAgPSBwICogcDtcblx0XHRjb25zdCBwcHAgPSBwcCAqIHA7XG5cblx0XHRjb25zdCBvZmZzZXQxID0gaTEgKiBzdHJpZGUzO1xuXHRcdGNvbnN0IG9mZnNldDAgPSBvZmZzZXQxIC0gc3RyaWRlMztcblxuXHRcdGNvbnN0IHMyID0gLSAyICogcHBwICsgMyAqIHBwO1xuXHRcdGNvbnN0IHMzID0gcHBwIC0gcHA7XG5cdFx0Y29uc3QgczAgPSAxIC0gczI7XG5cdFx0Y29uc3QgczEgPSBzMyAtIHBwICsgcDtcblxuXHRcdC8vIExheW91dCBvZiBrZXlmcmFtZSBvdXRwdXQgdmFsdWVzIGZvciBDVUJJQ1NQTElORSBhbmltYXRpb25zOlxuXHRcdC8vICAgWyBpblRhbmdlbnRfMSwgc3BsaW5lVmVydGV4XzEsIG91dFRhbmdlbnRfMSwgaW5UYW5nZW50XzIsIHNwbGluZVZlcnRleF8yLCAuLi4gXVxuXHRcdGZvciAoIGxldCBpID0gMDsgaSAhPT0gc3RyaWRlOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCBwMCA9IHZhbHVlc1sgb2Zmc2V0MCArIGkgKyBzdHJpZGUgXTsgLy8gc3BsaW5lVmVydGV4X2tcblx0XHRcdGNvbnN0IG0wID0gdmFsdWVzWyBvZmZzZXQwICsgaSArIHN0cmlkZTIgXSAqIHRkOyAvLyBvdXRUYW5nZW50X2sgKiAodF9rKzEgLSB0X2spXG5cdFx0XHRjb25zdCBwMSA9IHZhbHVlc1sgb2Zmc2V0MSArIGkgKyBzdHJpZGUgXTsgLy8gc3BsaW5lVmVydGV4X2srMVxuXHRcdFx0Y29uc3QgbTEgPSB2YWx1ZXNbIG9mZnNldDEgKyBpIF0gKiB0ZDsgLy8gaW5UYW5nZW50X2srMSAqICh0X2srMSAtIHRfaylcblxuXHRcdFx0cmVzdWx0WyBpIF0gPSBzMCAqIHAwICsgczEgKiBtMCArIHMyICogcDEgKyBzMyAqIG0xO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblxuXHR9XG5cbn1cblxuY29uc3QgX3EgPSBuZXcgUXVhdGVybmlvbigpO1xuXG5jbGFzcyBHTFRGQ3ViaWNTcGxpbmVRdWF0ZXJuaW9uSW50ZXJwb2xhbnQgZXh0ZW5kcyBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudCB7XG5cblx0aW50ZXJwb2xhdGVfKCBpMSwgdDAsIHQsIHQxICkge1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gc3VwZXIuaW50ZXJwb2xhdGVfKCBpMSwgdDAsIHQsIHQxICk7XG5cblx0XHRfcS5mcm9tQXJyYXkoIHJlc3VsdCApLm5vcm1hbGl6ZSgpLnRvQXJyYXkoIHJlc3VsdCApO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblxuXHR9XG5cbn1cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKiogSU5URVJOQUxTICoqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qIENPTlNUQU5UUyAqL1xuXG5jb25zdCBXRUJHTF9DT05TVEFOVFMgPSB7XG5cdEZMT0FUOiA1MTI2LFxuXHQvL0ZMT0FUX01BVDI6IDM1Njc0LFxuXHRGTE9BVF9NQVQzOiAzNTY3NSxcblx0RkxPQVRfTUFUNDogMzU2NzYsXG5cdEZMT0FUX1ZFQzI6IDM1NjY0LFxuXHRGTE9BVF9WRUMzOiAzNTY2NSxcblx0RkxPQVRfVkVDNDogMzU2NjYsXG5cdExJTkVBUjogOTcyOSxcblx0UkVQRUFUOiAxMDQ5Nyxcblx0U0FNUExFUl8yRDogMzU2NzgsXG5cdFBPSU5UUzogMCxcblx0TElORVM6IDEsXG5cdExJTkVfTE9PUDogMixcblx0TElORV9TVFJJUDogMyxcblx0VFJJQU5HTEVTOiA0LFxuXHRUUklBTkdMRV9TVFJJUDogNSxcblx0VFJJQU5HTEVfRkFOOiA2LFxuXHRVTlNJR05FRF9CWVRFOiA1MTIxLFxuXHRVTlNJR05FRF9TSE9SVDogNTEyM1xufTtcblxuY29uc3QgV0VCR0xfQ09NUE9ORU5UX1RZUEVTID0ge1xuXHQ1MTIwOiBJbnQ4QXJyYXksXG5cdDUxMjE6IFVpbnQ4QXJyYXksXG5cdDUxMjI6IEludDE2QXJyYXksXG5cdDUxMjM6IFVpbnQxNkFycmF5LFxuXHQ1MTI1OiBVaW50MzJBcnJheSxcblx0NTEyNjogRmxvYXQzMkFycmF5XG59O1xuXG5jb25zdCBXRUJHTF9GSUxURVJTID0ge1xuXHQ5NzI4OiBOZWFyZXN0RmlsdGVyLFxuXHQ5NzI5OiBMaW5lYXJGaWx0ZXIsXG5cdDk5ODQ6IE5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyLFxuXHQ5OTg1OiBMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyLFxuXHQ5OTg2OiBOZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyLFxuXHQ5OTg3OiBMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXJcbn07XG5cbmNvbnN0IFdFQkdMX1dSQVBQSU5HUyA9IHtcblx0MzMwNzE6IENsYW1wVG9FZGdlV3JhcHBpbmcsXG5cdDMzNjQ4OiBNaXJyb3JlZFJlcGVhdFdyYXBwaW5nLFxuXHQxMDQ5NzogUmVwZWF0V3JhcHBpbmdcbn07XG5cbmNvbnN0IFdFQkdMX1RZUEVfU0laRVMgPSB7XG5cdCdTQ0FMQVInOiAxLFxuXHQnVkVDMic6IDIsXG5cdCdWRUMzJzogMyxcblx0J1ZFQzQnOiA0LFxuXHQnTUFUMic6IDQsXG5cdCdNQVQzJzogOSxcblx0J01BVDQnOiAxNlxufTtcblxuY29uc3QgQVRUUklCVVRFUyA9IHtcblx0UE9TSVRJT046ICdwb3NpdGlvbicsXG5cdE5PUk1BTDogJ25vcm1hbCcsXG5cdFRBTkdFTlQ6ICd0YW5nZW50Jyxcblx0VEVYQ09PUkRfMDogJ3V2Jyxcblx0VEVYQ09PUkRfMTogJ3V2MicsXG5cdENPTE9SXzA6ICdjb2xvcicsXG5cdFdFSUdIVFNfMDogJ3NraW5XZWlnaHQnLFxuXHRKT0lOVFNfMDogJ3NraW5JbmRleCcsXG59O1xuXG5jb25zdCBQQVRIX1BST1BFUlRJRVMgPSB7XG5cdHNjYWxlOiAnc2NhbGUnLFxuXHR0cmFuc2xhdGlvbjogJ3Bvc2l0aW9uJyxcblx0cm90YXRpb246ICdxdWF0ZXJuaW9uJyxcblx0d2VpZ2h0czogJ21vcnBoVGFyZ2V0SW5mbHVlbmNlcydcbn07XG5cbmNvbnN0IElOVEVSUE9MQVRJT04gPSB7XG5cdENVQklDU1BMSU5FOiB1bmRlZmluZWQsIC8vIFdlIHVzZSBhIGN1c3RvbSBpbnRlcnBvbGFudCAoR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhdGlvbikgZm9yIENVQklDU1BMSU5FIHRyYWNrcy4gRWFjaFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtleWZyYW1lIHRyYWNrIHdpbGwgYmUgaW5pdGlhbGl6ZWQgd2l0aCBhIGRlZmF1bHQgaW50ZXJwb2xhdGlvbiB0eXBlLCB0aGVuIG1vZGlmaWVkLlxuXHRMSU5FQVI6IEludGVycG9sYXRlTGluZWFyLFxuXHRTVEVQOiBJbnRlcnBvbGF0ZURpc2NyZXRlXG59O1xuXG5jb25zdCBBTFBIQV9NT0RFUyA9IHtcblx0T1BBUVVFOiAnT1BBUVVFJyxcblx0TUFTSzogJ01BU0snLFxuXHRCTEVORDogJ0JMRU5EJ1xufTtcblxuLyoqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2RlZmF1bHQtbWF0ZXJpYWxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdE1hdGVyaWFsKCBjYWNoZSApIHtcblxuXHRpZiAoIGNhY2hlWyAnRGVmYXVsdE1hdGVyaWFsJyBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRjYWNoZVsgJ0RlZmF1bHRNYXRlcmlhbCcgXSA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCgge1xuXHRcdFx0Y29sb3I6IDB4RkZGRkZGLFxuXHRcdFx0ZW1pc3NpdmU6IDB4MDAwMDAwLFxuXHRcdFx0bWV0YWxuZXNzOiAxLFxuXHRcdFx0cm91Z2huZXNzOiAxLFxuXHRcdFx0dHJhbnNwYXJlbnQ6IGZhbHNlLFxuXHRcdFx0ZGVwdGhUZXN0OiB0cnVlLFxuXHRcdFx0c2lkZTogRnJvbnRTaWRlXG5cdFx0fSApO1xuXG5cdH1cblxuXHRyZXR1cm4gY2FjaGVbICdEZWZhdWx0TWF0ZXJpYWwnIF07XG5cbn1cblxuZnVuY3Rpb24gYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBrbm93bkV4dGVuc2lvbnMsIG9iamVjdCwgb2JqZWN0RGVmICkge1xuXG5cdC8vIEFkZCB1bmtub3duIGdsVEYgZXh0ZW5zaW9ucyB0byBhbiBvYmplY3QncyB1c2VyRGF0YS5cblxuXHRmb3IgKCBjb25zdCBuYW1lIGluIG9iamVjdERlZi5leHRlbnNpb25zICkge1xuXG5cdFx0aWYgKCBrbm93bkV4dGVuc2lvbnNbIG5hbWUgXSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnMgPSBvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnMgfHwge307XG5cdFx0XHRvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnNbIG5hbWUgXSA9IG9iamVjdERlZi5leHRlbnNpb25zWyBuYW1lIF07XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3QzRHxNYXRlcmlhbHxCdWZmZXJHZW9tZXRyeX0gb2JqZWN0XG4gKiBAcGFyYW0ge0dMVEYuZGVmaW5pdGlvbn0gZ2x0ZkRlZlxuICovXG5mdW5jdGlvbiBhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBvYmplY3QsIGdsdGZEZWYgKSB7XG5cblx0aWYgKCBnbHRmRGVmLmV4dHJhcyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0aWYgKCB0eXBlb2YgZ2x0ZkRlZi5leHRyYXMgPT09ICdvYmplY3QnICkge1xuXG5cdFx0XHRPYmplY3QuYXNzaWduKCBvYmplY3QudXNlckRhdGEsIGdsdGZEZWYuZXh0cmFzICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBJZ25vcmluZyBwcmltaXRpdmUgdHlwZSAuZXh0cmFzLCAnICsgZ2x0ZkRlZi5leHRyYXMgKTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyoqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI21vcnBoLXRhcmdldHNcbiAqXG4gKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxuICogQHBhcmFtIHtBcnJheTxHTFRGLlRhcmdldD59IHRhcmdldHNcbiAqIEBwYXJhbSB7R0xURlBhcnNlcn0gcGFyc2VyXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJ1ZmZlckdlb21ldHJ5Pn1cbiAqL1xuZnVuY3Rpb24gYWRkTW9ycGhUYXJnZXRzKCBnZW9tZXRyeSwgdGFyZ2V0cywgcGFyc2VyICkge1xuXG5cdGxldCBoYXNNb3JwaFBvc2l0aW9uID0gZmFsc2U7XG5cdGxldCBoYXNNb3JwaE5vcm1hbCA9IGZhbHNlO1xuXHRsZXQgaGFzTW9ycGhDb2xvciA9IGZhbHNlO1xuXG5cdGZvciAoIGxldCBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xuXG5cdFx0aWYgKCB0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZCApIGhhc01vcnBoUG9zaXRpb24gPSB0cnVlO1xuXHRcdGlmICggdGFyZ2V0Lk5PUk1BTCAhPT0gdW5kZWZpbmVkICkgaGFzTW9ycGhOb3JtYWwgPSB0cnVlO1xuXHRcdGlmICggdGFyZ2V0LkNPTE9SXzAgIT09IHVuZGVmaW5lZCApIGhhc01vcnBoQ29sb3IgPSB0cnVlO1xuXG5cdFx0aWYgKCBoYXNNb3JwaFBvc2l0aW9uICYmIGhhc01vcnBoTm9ybWFsICYmIGhhc01vcnBoQ29sb3IgKSBicmVhaztcblxuXHR9XG5cblx0aWYgKCAhIGhhc01vcnBoUG9zaXRpb24gJiYgISBoYXNNb3JwaE5vcm1hbCAmJiAhIGhhc01vcnBoQ29sb3IgKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBnZW9tZXRyeSApO1xuXG5cdGNvbnN0IHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycyA9IFtdO1xuXHRjb25zdCBwZW5kaW5nTm9ybWFsQWNjZXNzb3JzID0gW107XG5cdGNvbnN0IHBlbmRpbmdDb2xvckFjY2Vzc29ycyA9IFtdO1xuXG5cdGZvciAoIGxldCBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xuXG5cdFx0aWYgKCBoYXNNb3JwaFBvc2l0aW9uICkge1xuXG5cdFx0XHRjb25zdCBwZW5kaW5nQWNjZXNzb3IgPSB0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCB0YXJnZXQuUE9TSVRJT04gKVxuXHRcdFx0XHQ6IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XG5cblx0XHRcdHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycy5wdXNoKCBwZW5kaW5nQWNjZXNzb3IgKTtcblxuXHRcdH1cblxuXHRcdGlmICggaGFzTW9ycGhOb3JtYWwgKSB7XG5cblx0XHRcdGNvbnN0IHBlbmRpbmdBY2Nlc3NvciA9IHRhcmdldC5OT1JNQUwgIT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCB0YXJnZXQuTk9STUFMIClcblx0XHRcdFx0OiBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbDtcblxuXHRcdFx0cGVuZGluZ05vcm1hbEFjY2Vzc29ycy5wdXNoKCBwZW5kaW5nQWNjZXNzb3IgKTtcblxuXHRcdH1cblxuXHRcdGlmICggaGFzTW9ycGhDb2xvciApIHtcblxuXHRcdFx0Y29uc3QgcGVuZGluZ0FjY2Vzc29yID0gdGFyZ2V0LkNPTE9SXzAgIT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCB0YXJnZXQuQ09MT1JfMCApXG5cdFx0XHRcdDogZ2VvbWV0cnkuYXR0cmlidXRlcy5jb2xvcjtcblxuXHRcdFx0cGVuZGluZ0NvbG9yQWNjZXNzb3JzLnB1c2goIHBlbmRpbmdBY2Nlc3NvciApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcblx0XHRQcm9taXNlLmFsbCggcGVuZGluZ1Bvc2l0aW9uQWNjZXNzb3JzICksXG5cdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMgKSxcblx0XHRQcm9taXNlLmFsbCggcGVuZGluZ0NvbG9yQWNjZXNzb3JzIClcblx0XSApLnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3JzICkge1xuXG5cdFx0Y29uc3QgbW9ycGhQb3NpdGlvbnMgPSBhY2Nlc3NvcnNbIDAgXTtcblx0XHRjb25zdCBtb3JwaE5vcm1hbHMgPSBhY2Nlc3NvcnNbIDEgXTtcblx0XHRjb25zdCBtb3JwaENvbG9ycyA9IGFjY2Vzc29yc1sgMiBdO1xuXG5cdFx0aWYgKCBoYXNNb3JwaFBvc2l0aW9uICkgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLnBvc2l0aW9uID0gbW9ycGhQb3NpdGlvbnM7XG5cdFx0aWYgKCBoYXNNb3JwaE5vcm1hbCApIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5ub3JtYWwgPSBtb3JwaE5vcm1hbHM7XG5cdFx0aWYgKCBoYXNNb3JwaENvbG9yICkgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLmNvbG9yID0gbW9ycGhDb2xvcnM7XG5cdFx0Z2VvbWV0cnkubW9ycGhUYXJnZXRzUmVsYXRpdmUgPSB0cnVlO1xuXG5cdFx0cmV0dXJuIGdlb21ldHJ5O1xuXG5cdH0gKTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSB7TWVzaH0gbWVzaFxuICogQHBhcmFtIHtHTFRGLk1lc2h9IG1lc2hEZWZcbiAqL1xuZnVuY3Rpb24gdXBkYXRlTW9ycGhUYXJnZXRzKCBtZXNoLCBtZXNoRGVmICkge1xuXG5cdG1lc2gudXBkYXRlTW9ycGhUYXJnZXRzKCk7XG5cblx0aWYgKCBtZXNoRGVmLndlaWdodHMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBtZXNoRGVmLndlaWdodHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzWyBpIF0gPSBtZXNoRGVmLndlaWdodHNbIGkgXTtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly8gLmV4dHJhcyBoYXMgdXNlci1kZWZpbmVkIGRhdGEsIHNvIGNoZWNrIHRoYXQgLmV4dHJhcy50YXJnZXROYW1lcyBpcyBhbiBhcnJheS5cblx0aWYgKCBtZXNoRGVmLmV4dHJhcyAmJiBBcnJheS5pc0FycmF5KCBtZXNoRGVmLmV4dHJhcy50YXJnZXROYW1lcyApICkge1xuXG5cdFx0Y29uc3QgdGFyZ2V0TmFtZXMgPSBtZXNoRGVmLmV4dHJhcy50YXJnZXROYW1lcztcblxuXHRcdGlmICggbWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXMubGVuZ3RoID09PSB0YXJnZXROYW1lcy5sZW5ndGggKSB7XG5cblx0XHRcdG1lc2gubW9ycGhUYXJnZXREaWN0aW9uYXJ5ID0ge307XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSB0YXJnZXROYW1lcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRtZXNoLm1vcnBoVGFyZ2V0RGljdGlvbmFyeVsgdGFyZ2V0TmFtZXNbIGkgXSBdID0gaTtcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogSW52YWxpZCBleHRyYXMudGFyZ2V0TmFtZXMgbGVuZ3RoLiBJZ25vcmluZyBuYW1lcy4nICk7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZUtleSggcHJpbWl0aXZlRGVmICkge1xuXG5cdGNvbnN0IGRyYWNvRXh0ZW5zaW9uID0gcHJpbWl0aXZlRGVmLmV4dGVuc2lvbnMgJiYgcHJpbWl0aXZlRGVmLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04gXTtcblx0bGV0IGdlb21ldHJ5S2V5O1xuXG5cdGlmICggZHJhY29FeHRlbnNpb24gKSB7XG5cblx0XHRnZW9tZXRyeUtleSA9ICdkcmFjbzonICsgZHJhY29FeHRlbnNpb24uYnVmZmVyVmlld1xuXHRcdFx0XHQrICc6JyArIGRyYWNvRXh0ZW5zaW9uLmluZGljZXNcblx0XHRcdFx0KyAnOicgKyBjcmVhdGVBdHRyaWJ1dGVzS2V5KCBkcmFjb0V4dGVuc2lvbi5hdHRyaWJ1dGVzICk7XG5cblx0fSBlbHNlIHtcblxuXHRcdGdlb21ldHJ5S2V5ID0gcHJpbWl0aXZlRGVmLmluZGljZXMgKyAnOicgKyBjcmVhdGVBdHRyaWJ1dGVzS2V5KCBwcmltaXRpdmVEZWYuYXR0cmlidXRlcyApICsgJzonICsgcHJpbWl0aXZlRGVmLm1vZGU7XG5cblx0fVxuXG5cdHJldHVybiBnZW9tZXRyeUtleTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVzS2V5KCBhdHRyaWJ1dGVzICkge1xuXG5cdGxldCBhdHRyaWJ1dGVzS2V5ID0gJyc7XG5cblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKCBhdHRyaWJ1dGVzICkuc29ydCgpO1xuXG5cdGZvciAoIGxldCBpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0YXR0cmlidXRlc0tleSArPSBrZXlzWyBpIF0gKyAnOicgKyBhdHRyaWJ1dGVzWyBrZXlzWyBpIF0gXSArICc7JztcblxuXHR9XG5cblx0cmV0dXJuIGF0dHJpYnV0ZXNLZXk7XG5cbn1cblxuZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZENvbXBvbmVudFNjYWxlKCBjb25zdHJ1Y3RvciApIHtcblxuXHQvLyBSZWZlcmVuY2U6XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tZXNoX3F1YW50aXphdGlvbiNlbmNvZGluZy1xdWFudGl6ZWQtZGF0YVxuXG5cdHN3aXRjaCAoIGNvbnN0cnVjdG9yICkge1xuXG5cdFx0Y2FzZSBJbnQ4QXJyYXk6XG5cdFx0XHRyZXR1cm4gMSAvIDEyNztcblxuXHRcdGNhc2UgVWludDhBcnJheTpcblx0XHRcdHJldHVybiAxIC8gMjU1O1xuXG5cdFx0Y2FzZSBJbnQxNkFycmF5OlxuXHRcdFx0cmV0dXJuIDEgLyAzMjc2NztcblxuXHRcdGNhc2UgVWludDE2QXJyYXk6XG5cdFx0XHRyZXR1cm4gMSAvIDY1NTM1O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIG5vcm1hbGl6ZWQgYWNjZXNzb3IgY29tcG9uZW50IHR5cGUuJyApO1xuXG5cdH1cblxufVxuXG5mdW5jdGlvbiBnZXRJbWFnZVVSSU1pbWVUeXBlKCB1cmkgKSB7XG5cblx0aWYgKCB1cmkuc2VhcmNoKCAvXFwuanBlP2coJHxcXD8pL2kgKSA+IDAgfHwgdXJpLnNlYXJjaCggL15kYXRhXFw6aW1hZ2VcXC9qcGVnLyApID09PSAwICkgcmV0dXJuICdpbWFnZS9qcGVnJztcblx0aWYgKCB1cmkuc2VhcmNoKCAvXFwud2VicCgkfFxcPykvaSApID4gMCB8fCB1cmkuc2VhcmNoKCAvXmRhdGFcXDppbWFnZVxcL3dlYnAvICkgPT09IDAgKSByZXR1cm4gJ2ltYWdlL3dlYnAnO1xuXG5cdHJldHVybiAnaW1hZ2UvcG5nJztcblxufVxuXG5jb25zdCBfaWRlbnRpdHlNYXRyaXggPSBuZXcgTWF0cml4NCgpO1xuXG4vKiBHTFRGIFBBUlNFUiAqL1xuXG5jbGFzcyBHTFRGUGFyc2VyIHtcblxuXHRjb25zdHJ1Y3RvcigganNvbiA9IHt9LCBvcHRpb25zID0ge30gKSB7XG5cblx0XHR0aGlzLmpzb24gPSBqc29uO1xuXHRcdHRoaXMuZXh0ZW5zaW9ucyA9IHt9O1xuXHRcdHRoaXMucGx1Z2lucyA9IHt9O1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cblx0XHQvLyBsb2FkZXIgb2JqZWN0IGNhY2hlXG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBHTFRGUmVnaXN0cnkoKTtcblxuXHRcdC8vIGFzc29jaWF0aW9ucyBiZXR3ZWVuIFRocmVlLmpzIG9iamVjdHMgYW5kIGdsVEYgZWxlbWVudHNcblx0XHR0aGlzLmFzc29jaWF0aW9ucyA9IG5ldyBNYXAoKTtcblxuXHRcdC8vIEJ1ZmZlckdlb21ldHJ5IGNhY2hpbmdcblx0XHR0aGlzLnByaW1pdGl2ZUNhY2hlID0ge307XG5cblx0XHQvLyBPYmplY3QzRCBpbnN0YW5jZSBjYWNoZXNcblx0XHR0aGlzLm1lc2hDYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XG5cdFx0dGhpcy5jYW1lcmFDYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XG5cdFx0dGhpcy5saWdodENhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcblxuXHRcdHRoaXMuc291cmNlQ2FjaGUgPSB7fTtcblx0XHR0aGlzLnRleHR1cmVDYWNoZSA9IHt9O1xuXG5cdFx0Ly8gVHJhY2sgbm9kZSBuYW1lcywgdG8gZW5zdXJlIG5vIGR1cGxpY2F0ZXNcblx0XHR0aGlzLm5vZGVOYW1lc1VzZWQgPSB7fTtcblxuXHRcdC8vIFVzZSBhbiBJbWFnZUJpdG1hcExvYWRlciBpZiBpbWFnZUJpdG1hcHMgYXJlIHN1cHBvcnRlZC4gTW92ZXMgbXVjaCBvZiB0aGVcblx0XHQvLyBleHBlbnNpdmUgd29yayBvZiB1cGxvYWRpbmcgYSB0ZXh0dXJlIHRvIHRoZSBHUFUgb2ZmIHRoZSBtYWluIHRocmVhZC5cblxuXHRcdGxldCBpc1NhZmFyaSA9IGZhbHNlO1xuXHRcdGxldCBpc0ZpcmVmb3ggPSBmYWxzZTtcblx0XHRsZXQgZmlyZWZveFZlcnNpb24gPSAtIDE7XG5cblx0XHRpZiAoIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICkge1xuXG5cdFx0XHRpc1NhZmFyaSA9IC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKSA9PT0gdHJ1ZTtcblx0XHRcdGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZiggJ0ZpcmVmb3gnICkgPiAtIDE7XG5cdFx0XHRmaXJlZm94VmVyc2lvbiA9IGlzRmlyZWZveCA/IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goIC9GaXJlZm94XFwvKFswLTldKylcXC4vIClbIDEgXSA6IC0gMTtcblxuXHRcdH1cblxuXHRcdGlmICggdHlwZW9mIGNyZWF0ZUltYWdlQml0bWFwID09PSAndW5kZWZpbmVkJyB8fCBpc1NhZmFyaSB8fCAoIGlzRmlyZWZveCAmJiBmaXJlZm94VmVyc2lvbiA8IDk4ICkgKSB7XG5cblx0XHRcdHRoaXMudGV4dHVyZUxvYWRlciA9IG5ldyBUZXh0dXJlTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy50ZXh0dXJlTG9hZGVyID0gbmV3IEltYWdlQml0bWFwTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy50ZXh0dXJlTG9hZGVyLnNldENyb3NzT3JpZ2luKCB0aGlzLm9wdGlvbnMuY3Jvc3NPcmlnaW4gKTtcblx0XHR0aGlzLnRleHR1cmVMb2FkZXIuc2V0UmVxdWVzdEhlYWRlciggdGhpcy5vcHRpb25zLnJlcXVlc3RIZWFkZXIgKTtcblxuXHRcdHRoaXMuZmlsZUxvYWRlciA9IG5ldyBGaWxlTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xuXHRcdHRoaXMuZmlsZUxvYWRlci5zZXRSZXNwb25zZVR5cGUoICdhcnJheWJ1ZmZlcicgKTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmNyb3NzT3JpZ2luID09PSAndXNlLWNyZWRlbnRpYWxzJyApIHtcblxuXHRcdFx0dGhpcy5maWxlTG9hZGVyLnNldFdpdGhDcmVkZW50aWFscyggdHJ1ZSApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRzZXRFeHRlbnNpb25zKCBleHRlbnNpb25zICkge1xuXG5cdFx0dGhpcy5leHRlbnNpb25zID0gZXh0ZW5zaW9ucztcblxuXHR9XG5cblx0c2V0UGx1Z2lucyggcGx1Z2lucyApIHtcblxuXHRcdHRoaXMucGx1Z2lucyA9IHBsdWdpbnM7XG5cblx0fVxuXG5cdHBhcnNlKCBvbkxvYWQsIG9uRXJyb3IgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblxuXHRcdC8vIENsZWFyIHRoZSBsb2FkZXIgY2FjaGVcblx0XHR0aGlzLmNhY2hlLnJlbW92ZUFsbCgpO1xuXG5cdFx0Ly8gTWFyayB0aGUgc3BlY2lhbCBub2Rlcy9tZXNoZXMgaW4ganNvbiBmb3IgZWZmaWNpZW50IHBhcnNlXG5cdFx0dGhpcy5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0cmV0dXJuIGV4dC5fbWFya0RlZnMgJiYgZXh0Ll9tYXJrRGVmcygpO1xuXG5cdFx0fSApO1xuXG5cdFx0UHJvbWlzZS5hbGwoIHRoaXMuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdHJldHVybiBleHQuYmVmb3JlUm9vdCAmJiBleHQuYmVmb3JlUm9vdCgpO1xuXG5cdFx0fSApICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcblxuXHRcdFx0XHRwYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCAnc2NlbmUnICksXG5cdFx0XHRcdHBhcnNlci5nZXREZXBlbmRlbmNpZXMoICdhbmltYXRpb24nICksXG5cdFx0XHRcdHBhcnNlci5nZXREZXBlbmRlbmNpZXMoICdjYW1lcmEnICksXG5cblx0XHRcdF0gKTtcblxuXHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIGRlcGVuZGVuY2llcyApIHtcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0XHRzY2VuZTogZGVwZW5kZW5jaWVzWyAwIF1bIGpzb24uc2NlbmUgfHwgMCBdLFxuXHRcdFx0XHRzY2VuZXM6IGRlcGVuZGVuY2llc1sgMCBdLFxuXHRcdFx0XHRhbmltYXRpb25zOiBkZXBlbmRlbmNpZXNbIDEgXSxcblx0XHRcdFx0Y2FtZXJhczogZGVwZW5kZW5jaWVzWyAyIF0sXG5cdFx0XHRcdGFzc2V0OiBqc29uLmFzc2V0LFxuXHRcdFx0XHRwYXJzZXI6IHBhcnNlcixcblx0XHRcdFx0dXNlckRhdGE6IHt9XG5cdFx0XHR9O1xuXG5cdFx0XHRhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIHJlc3VsdCwganNvbiApO1xuXG5cdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCByZXN1bHQsIGpzb24gKTtcblxuXHRcdFx0UHJvbWlzZS5hbGwoIHBhcnNlci5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmFmdGVyUm9vdCAmJiBleHQuYWZ0ZXJSb290KCByZXN1bHQgKTtcblxuXHRcdFx0fSApICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdG9uTG9hZCggcmVzdWx0ICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKS5jYXRjaCggb25FcnJvciApO1xuXG5cdH1cblxuXHQvKipcblx0ICogTWFya3MgdGhlIHNwZWNpYWwgbm9kZXMvbWVzaGVzIGluIGpzb24gZm9yIGVmZmljaWVudCBwYXJzZS5cblx0ICovXG5cdF9tYXJrRGVmcygpIHtcblxuXHRcdGNvbnN0IG5vZGVEZWZzID0gdGhpcy5qc29uLm5vZGVzIHx8IFtdO1xuXHRcdGNvbnN0IHNraW5EZWZzID0gdGhpcy5qc29uLnNraW5zIHx8IFtdO1xuXHRcdGNvbnN0IG1lc2hEZWZzID0gdGhpcy5qc29uLm1lc2hlcyB8fCBbXTtcblxuXHRcdC8vIE5vdGhpbmcgaW4gdGhlIG5vZGUgZGVmaW5pdGlvbiBpbmRpY2F0ZXMgd2hldGhlciBpdCBpcyBhIEJvbmUgb3IgYW5cblx0XHQvLyBPYmplY3QzRC4gVXNlIHRoZSBza2lucycgam9pbnQgcmVmZXJlbmNlcyB0byBtYXJrIGJvbmVzLlxuXHRcdGZvciAoIGxldCBza2luSW5kZXggPSAwLCBza2luTGVuZ3RoID0gc2tpbkRlZnMubGVuZ3RoOyBza2luSW5kZXggPCBza2luTGVuZ3RoOyBza2luSW5kZXggKysgKSB7XG5cblx0XHRcdGNvbnN0IGpvaW50cyA9IHNraW5EZWZzWyBza2luSW5kZXggXS5qb2ludHM7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBqb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0bm9kZURlZnNbIGpvaW50c1sgaSBdIF0uaXNCb25lID0gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly8gSXRlcmF0ZSBvdmVyIGFsbCBub2RlcywgbWFya2luZyByZWZlcmVuY2VzIHRvIHNoYXJlZCByZXNvdXJjZXMsXG5cdFx0Ly8gYXMgd2VsbCBhcyBza2VsZXRvbiBqb2ludHMuXG5cdFx0Zm9yICggbGV0IG5vZGVJbmRleCA9IDAsIG5vZGVMZW5ndGggPSBub2RlRGVmcy5sZW5ndGg7IG5vZGVJbmRleCA8IG5vZGVMZW5ndGg7IG5vZGVJbmRleCArKyApIHtcblxuXHRcdFx0Y29uc3Qgbm9kZURlZiA9IG5vZGVEZWZzWyBub2RlSW5kZXggXTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLm1lc2ggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHR0aGlzLl9hZGROb2RlUmVmKCB0aGlzLm1lc2hDYWNoZSwgbm9kZURlZi5tZXNoICk7XG5cblx0XHRcdFx0Ly8gTm90aGluZyBpbiB0aGUgbWVzaCBkZWZpbml0aW9uIGluZGljYXRlcyB3aGV0aGVyIGl0IGlzXG5cdFx0XHRcdC8vIGEgU2tpbm5lZE1lc2ggb3IgTWVzaC4gVXNlIHRoZSBub2RlJ3MgbWVzaCByZWZlcmVuY2Vcblx0XHRcdFx0Ly8gdG8gbWFyayBTa2lubmVkTWVzaCBpZiBub2RlIGhhcyBza2luLlxuXHRcdFx0XHRpZiAoIG5vZGVEZWYuc2tpbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0bWVzaERlZnNbIG5vZGVEZWYubWVzaCBdLmlzU2tpbm5lZE1lc2ggPSB0cnVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5vZGVEZWYuY2FtZXJhICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0dGhpcy5fYWRkTm9kZVJlZiggdGhpcy5jYW1lcmFDYWNoZSwgbm9kZURlZi5jYW1lcmEgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ291bnRzIHJlZmVyZW5jZXMgdG8gc2hhcmVkIG5vZGUgLyBPYmplY3QzRCByZXNvdXJjZXMuIFRoZXNlIHJlc291cmNlc1xuXHQgKiBjYW4gYmUgcmV1c2VkLCBvciBcImluc3RhbnRpYXRlZFwiLCBhdCBtdWx0aXBsZSBub2RlcyBpbiB0aGUgc2NlbmVcblx0ICogaGllcmFyY2h5LiBNZXNoLCBDYW1lcmEsIGFuZCBMaWdodCBpbnN0YW5jZXMgYXJlIGluc3RhbnRpYXRlZCBhbmQgbXVzdFxuXHQgKiBiZSBtYXJrZWQuIE5vbi1zY2VuZWdyYXBoIHJlc291cmNlcyAobGlrZSBNYXRlcmlhbHMsIEdlb21ldHJpZXMsIGFuZFxuXHQgKiBUZXh0dXJlcykgY2FuIGJlIHJldXNlZCBkaXJlY3RseSBhbmQgYXJlIG5vdCBtYXJrZWQgaGVyZS5cblx0ICpcblx0ICogRXhhbXBsZTogQ2VzaXVtTWlsa1RydWNrIHNhbXBsZSBtb2RlbCByZXVzZXMgXCJXaGVlbFwiIG1lc2hlcy5cblx0ICovXG5cdF9hZGROb2RlUmVmKCBjYWNoZSwgaW5kZXggKSB7XG5cblx0XHRpZiAoIGluZGV4ID09PSB1bmRlZmluZWQgKSByZXR1cm47XG5cblx0XHRpZiAoIGNhY2hlLnJlZnNbIGluZGV4IF0gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y2FjaGUucmVmc1sgaW5kZXggXSA9IGNhY2hlLnVzZXNbIGluZGV4IF0gPSAwO1xuXG5cdFx0fVxuXG5cdFx0Y2FjaGUucmVmc1sgaW5kZXggXSArKztcblxuXHR9XG5cblx0LyoqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gYSBzaGFyZWQgcmVzb3VyY2UsIGNsb25pbmcgaXQgaWYgbmVjZXNzYXJ5LiAqL1xuXHRfZ2V0Tm9kZVJlZiggY2FjaGUsIGluZGV4LCBvYmplY3QgKSB7XG5cblx0XHRpZiAoIGNhY2hlLnJlZnNbIGluZGV4IF0gPD0gMSApIHJldHVybiBvYmplY3Q7XG5cblx0XHRjb25zdCByZWYgPSBvYmplY3QuY2xvbmUoKTtcblxuXHRcdC8vIFByb3BhZ2F0ZXMgbWFwcGluZ3MgdG8gdGhlIGNsb25lZCBvYmplY3QsIHByZXZlbnRzIG1hcHBpbmdzIG9uIHRoZVxuXHRcdC8vIG9yaWdpbmFsIG9iamVjdCBmcm9tIGJlaW5nIGxvc3QuXG5cdFx0Y29uc3QgdXBkYXRlTWFwcGluZ3MgPSAoIG9yaWdpbmFsLCBjbG9uZSApID0+IHtcblxuXHRcdFx0Y29uc3QgbWFwcGluZ3MgPSB0aGlzLmFzc29jaWF0aW9ucy5nZXQoIG9yaWdpbmFsICk7XG5cdFx0XHRpZiAoIG1hcHBpbmdzICE9IG51bGwgKSB7XG5cblx0XHRcdFx0dGhpcy5hc3NvY2lhdGlvbnMuc2V0KCBjbG9uZSwgbWFwcGluZ3MgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBjb25zdCBbIGksIGNoaWxkIF0gb2Ygb3JpZ2luYWwuY2hpbGRyZW4uZW50cmllcygpICkge1xuXG5cdFx0XHRcdHVwZGF0ZU1hcHBpbmdzKCBjaGlsZCwgY2xvbmUuY2hpbGRyZW5bIGkgXSApO1xuXG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdFx0dXBkYXRlTWFwcGluZ3MoIG9iamVjdCwgcmVmICk7XG5cblx0XHRyZWYubmFtZSArPSAnX2luc3RhbmNlXycgKyAoIGNhY2hlLnVzZXNbIGluZGV4IF0gKysgKTtcblxuXHRcdHJldHVybiByZWY7XG5cblx0fVxuXG5cdF9pbnZva2VPbmUoIGZ1bmMgKSB7XG5cblx0XHRjb25zdCBleHRlbnNpb25zID0gT2JqZWN0LnZhbHVlcyggdGhpcy5wbHVnaW5zICk7XG5cdFx0ZXh0ZW5zaW9ucy5wdXNoKCB0aGlzICk7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZnVuYyggZXh0ZW5zaW9uc1sgaSBdICk7XG5cblx0XHRcdGlmICggcmVzdWx0ICkgcmV0dXJuIHJlc3VsdDtcblxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXG5cdH1cblxuXHRfaW52b2tlQWxsKCBmdW5jICkge1xuXG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IE9iamVjdC52YWx1ZXMoIHRoaXMucGx1Z2lucyApO1xuXHRcdGV4dGVuc2lvbnMudW5zaGlmdCggdGhpcyApO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IGZ1bmMoIGV4dGVuc2lvbnNbIGkgXSApO1xuXG5cdFx0XHRpZiAoIHJlc3VsdCApIHBlbmRpbmcucHVzaCggcmVzdWx0ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGVuZGluZztcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJlcXVlc3RzIHRoZSBzcGVjaWZpZWQgZGVwZW5kZW5jeSBhc3luY2hyb25vdXNseSwgd2l0aCBjYWNoaW5nLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QzRHxNYXRlcmlhbHxUSFJFRS5UZXh0dXJlfEFuaW1hdGlvbkNsaXB8QXJyYXlCdWZmZXJ8T2JqZWN0Pn1cblx0ICovXG5cdGdldERlcGVuZGVuY3koIHR5cGUsIGluZGV4ICkge1xuXG5cdFx0Y29uc3QgY2FjaGVLZXkgPSB0eXBlICsgJzonICsgaW5kZXg7XG5cdFx0bGV0IGRlcGVuZGVuY3kgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdGlmICggISBkZXBlbmRlbmN5ICkge1xuXG5cdFx0XHRzd2l0Y2ggKCB0eXBlICkge1xuXG5cdFx0XHRcdGNhc2UgJ3NjZW5lJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkU2NlbmUoIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnbm9kZSc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZE5vZGUgJiYgZXh0LmxvYWROb2RlKCBpbmRleCApO1xuXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ21lc2gnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRNZXNoICYmIGV4dC5sb2FkTWVzaCggaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdhY2Nlc3Nvcic6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZEFjY2Vzc29yKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2J1ZmZlclZpZXcnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRCdWZmZXJWaWV3ICYmIGV4dC5sb2FkQnVmZmVyVmlldyggaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdidWZmZXInOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRCdWZmZXIoIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnbWF0ZXJpYWwnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRNYXRlcmlhbCAmJiBleHQubG9hZE1hdGVyaWFsKCBpbmRleCApO1xuXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ3RleHR1cmUnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRUZXh0dXJlICYmIGV4dC5sb2FkVGV4dHVyZSggaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdza2luJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkU2tpbiggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdhbmltYXRpb24nOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRBbmltYXRpb24gJiYgZXh0LmxvYWRBbmltYXRpb24oIGluZGV4ICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnY2FtZXJhJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQ2FtZXJhKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybiBleHQgIT0gdGhpcyAmJiBleHQuZ2V0RGVwZW5kZW5jeSAmJiBleHQuZ2V0RGVwZW5kZW5jeSggdHlwZSwgaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdGlmICggISBkZXBlbmRlbmN5ICkge1xuXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdVbmtub3duIHR5cGU6ICcgKyB0eXBlICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIGRlcGVuZGVuY3kgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBkZXBlbmRlbmN5O1xuXG5cdH1cblxuXHQvKipcblx0ICogUmVxdWVzdHMgYWxsIGRlcGVuZGVuY2llcyBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgYXN5bmNocm9ub3VzbHksIHdpdGggY2FjaGluZy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxPYmplY3Q+Pn1cblx0ICovXG5cdGdldERlcGVuZGVuY2llcyggdHlwZSApIHtcblxuXHRcdGxldCBkZXBlbmRlbmNpZXMgPSB0aGlzLmNhY2hlLmdldCggdHlwZSApO1xuXG5cdFx0aWYgKCAhIGRlcGVuZGVuY2llcyApIHtcblxuXHRcdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRcdGNvbnN0IGRlZnMgPSB0aGlzLmpzb25bIHR5cGUgKyAoIHR5cGUgPT09ICdtZXNoJyA/ICdlcycgOiAncycgKSBdIHx8IFtdO1xuXG5cdFx0XHRkZXBlbmRlbmNpZXMgPSBQcm9taXNlLmFsbCggZGVmcy5tYXAoIGZ1bmN0aW9uICggZGVmLCBpbmRleCApIHtcblxuXHRcdFx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koIHR5cGUsIGluZGV4ICk7XG5cblx0XHRcdH0gKSApO1xuXG5cdFx0XHR0aGlzLmNhY2hlLmFkZCggdHlwZSwgZGVwZW5kZW5jaWVzICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jaWVzO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNidWZmZXJzLWFuZC1idWZmZXItdmlld3Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IGJ1ZmZlckluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXlCdWZmZXI+fVxuXHQgKi9cblx0bG9hZEJ1ZmZlciggYnVmZmVySW5kZXggKSB7XG5cblx0XHRjb25zdCBidWZmZXJEZWYgPSB0aGlzLmpzb24uYnVmZmVyc1sgYnVmZmVySW5kZXggXTtcblx0XHRjb25zdCBsb2FkZXIgPSB0aGlzLmZpbGVMb2FkZXI7XG5cblx0XHRpZiAoIGJ1ZmZlckRlZi50eXBlICYmIGJ1ZmZlckRlZi50eXBlICE9PSAnYXJyYXlidWZmZXInICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiAnICsgYnVmZmVyRGVmLnR5cGUgKyAnIGJ1ZmZlciB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuJyApO1xuXG5cdFx0fVxuXG5cdFx0Ly8gSWYgcHJlc2VudCwgR0xCIGNvbnRhaW5lciBpcyByZXF1aXJlZCB0byBiZSB0aGUgZmlyc3QgYnVmZmVyLlxuXHRcdGlmICggYnVmZmVyRGVmLnVyaSA9PT0gdW5kZWZpbmVkICYmIGJ1ZmZlckluZGV4ID09PSAwICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCB0aGlzLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGIF0uYm9keSApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlLCByZWplY3QgKSB7XG5cblx0XHRcdGxvYWRlci5sb2FkKCBMb2FkZXJVdGlscy5yZXNvbHZlVVJMKCBidWZmZXJEZWYudXJpLCBvcHRpb25zLnBhdGggKSwgcmVzb2x2ZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0cmVqZWN0KCBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBGYWlsZWQgdG8gbG9hZCBidWZmZXIgXCInICsgYnVmZmVyRGVmLnVyaSArICdcIi4nICkgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNidWZmZXJzLWFuZC1idWZmZXItdmlld3Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IGJ1ZmZlclZpZXdJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyPn1cblx0ICovXG5cdGxvYWRCdWZmZXJWaWV3KCBidWZmZXJWaWV3SW5kZXggKSB7XG5cblx0XHRjb25zdCBidWZmZXJWaWV3RGVmID0gdGhpcy5qc29uLmJ1ZmZlclZpZXdzWyBidWZmZXJWaWV3SW5kZXggXTtcblxuXHRcdHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXInLCBidWZmZXJWaWV3RGVmLmJ1ZmZlciApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyICkge1xuXG5cdFx0XHRjb25zdCBieXRlTGVuZ3RoID0gYnVmZmVyVmlld0RlZi5ieXRlTGVuZ3RoIHx8IDA7XG5cdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gYnVmZmVyVmlld0RlZi5ieXRlT2Zmc2V0IHx8IDA7XG5cdFx0XHRyZXR1cm4gYnVmZmVyLnNsaWNlKCBieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgYnl0ZUxlbmd0aCApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNhY2Nlc3NvcnNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGFjY2Vzc29ySW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJBdHRyaWJ1dGV8SW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGU+fVxuXHQgKi9cblx0bG9hZEFjY2Vzc29yKCBhY2Nlc3NvckluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXG5cdFx0Y29uc3QgYWNjZXNzb3JEZWYgPSB0aGlzLmpzb24uYWNjZXNzb3JzWyBhY2Nlc3NvckluZGV4IF07XG5cblx0XHRpZiAoIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgPT09IHVuZGVmaW5lZCAmJiBhY2Nlc3NvckRlZi5zcGFyc2UgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc3QgaXRlbVNpemUgPSBXRUJHTF9UWVBFX1NJWkVTWyBhY2Nlc3NvckRlZi50eXBlIF07XG5cdFx0XHRjb25zdCBUeXBlZEFycmF5ID0gV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3NvckRlZi5jb21wb25lbnRUeXBlIF07XG5cdFx0XHRjb25zdCBub3JtYWxpemVkID0gYWNjZXNzb3JEZWYubm9ybWFsaXplZCA9PT0gdHJ1ZTtcblxuXHRcdFx0Y29uc3QgYXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYWNjZXNzb3JEZWYuY291bnQgKiBpdGVtU2l6ZSApO1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYXJyYXksIGl0ZW1TaXplLCBub3JtYWxpemVkICkgKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmdCdWZmZXJWaWV3cyA9IFtdO1xuXG5cdFx0aWYgKCBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyApICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggbnVsbCApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBhY2Nlc3NvckRlZi5zcGFyc2UgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBhY2Nlc3NvckRlZi5zcGFyc2UuaW5kaWNlcy5idWZmZXJWaWV3ICkgKTtcblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYWNjZXNzb3JEZWYuc3BhcnNlLnZhbHVlcy5idWZmZXJWaWV3ICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZ0J1ZmZlclZpZXdzICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3cyApIHtcblxuXHRcdFx0Y29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlclZpZXdzWyAwIF07XG5cblx0XHRcdGNvbnN0IGl0ZW1TaXplID0gV0VCR0xfVFlQRV9TSVpFU1sgYWNjZXNzb3JEZWYudHlwZSBdO1xuXHRcdFx0Y29uc3QgVHlwZWRBcnJheSA9IFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZSBdO1xuXG5cdFx0XHQvLyBGb3IgVkVDMzogaXRlbVNpemUgaXMgMywgZWxlbWVudEJ5dGVzIGlzIDQsIGl0ZW1CeXRlcyBpcyAxMi5cblx0XHRcdGNvbnN0IGVsZW1lbnRCeXRlcyA9IFR5cGVkQXJyYXkuQllURVNfUEVSX0VMRU1FTlQ7XG5cdFx0XHRjb25zdCBpdGVtQnl0ZXMgPSBlbGVtZW50Qnl0ZXMgKiBpdGVtU2l6ZTtcblx0XHRcdGNvbnN0IGJ5dGVPZmZzZXQgPSBhY2Nlc3NvckRlZi5ieXRlT2Zmc2V0IHx8IDA7XG5cdFx0XHRjb25zdCBieXRlU3RyaWRlID0gYWNjZXNzb3JEZWYuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkID8ganNvbi5idWZmZXJWaWV3c1sgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyBdLmJ5dGVTdHJpZGUgOiB1bmRlZmluZWQ7XG5cdFx0XHRjb25zdCBub3JtYWxpemVkID0gYWNjZXNzb3JEZWYubm9ybWFsaXplZCA9PT0gdHJ1ZTtcblx0XHRcdGxldCBhcnJheSwgYnVmZmVyQXR0cmlidXRlO1xuXG5cdFx0XHQvLyBUaGUgYnVmZmVyIGlzIG5vdCBpbnRlcmxlYXZlZCBpZiB0aGUgc3RyaWRlIGlzIHRoZSBpdGVtIHNpemUgaW4gYnl0ZXMuXG5cdFx0XHRpZiAoIGJ5dGVTdHJpZGUgJiYgYnl0ZVN0cmlkZSAhPT0gaXRlbUJ5dGVzICkge1xuXG5cdFx0XHRcdC8vIEVhY2ggXCJzbGljZVwiIG9mIHRoZSBidWZmZXIsIGFzIGRlZmluZWQgYnkgJ2NvdW50JyBlbGVtZW50cyBvZiAnYnl0ZVN0cmlkZScgYnl0ZXMsIGdldHMgaXRzIG93biBJbnRlcmxlYXZlZEJ1ZmZlclxuXHRcdFx0XHQvLyBUaGlzIG1ha2VzIHN1cmUgdGhhdCBJQkEuY291bnQgcmVmbGVjdHMgYWNjZXNzb3IuY291bnQgcHJvcGVybHlcblx0XHRcdFx0Y29uc3QgaWJTbGljZSA9IE1hdGguZmxvb3IoIGJ5dGVPZmZzZXQgLyBieXRlU3RyaWRlICk7XG5cdFx0XHRcdGNvbnN0IGliQ2FjaGVLZXkgPSAnSW50ZXJsZWF2ZWRCdWZmZXI6JyArIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgKyAnOicgKyBhY2Nlc3NvckRlZi5jb21wb25lbnRUeXBlICsgJzonICsgaWJTbGljZSArICc6JyArIGFjY2Vzc29yRGVmLmNvdW50O1xuXHRcdFx0XHRsZXQgaWIgPSBwYXJzZXIuY2FjaGUuZ2V0KCBpYkNhY2hlS2V5ICk7XG5cblx0XHRcdFx0aWYgKCAhIGliICkge1xuXG5cdFx0XHRcdFx0YXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYnVmZmVyVmlldywgaWJTbGljZSAqIGJ5dGVTdHJpZGUsIGFjY2Vzc29yRGVmLmNvdW50ICogYnl0ZVN0cmlkZSAvIGVsZW1lbnRCeXRlcyApO1xuXG5cdFx0XHRcdFx0Ly8gSW50ZWdlciBwYXJhbWV0ZXJzIHRvIElCL0lCQSBhcmUgaW4gYXJyYXkgZWxlbWVudHMsIG5vdCBieXRlcy5cblx0XHRcdFx0XHRpYiA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlciggYXJyYXksIGJ5dGVTdHJpZGUgLyBlbGVtZW50Qnl0ZXMgKTtcblxuXHRcdFx0XHRcdHBhcnNlci5jYWNoZS5hZGQoIGliQ2FjaGVLZXksIGliICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZSA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSggaWIsIGl0ZW1TaXplLCAoIGJ5dGVPZmZzZXQgJSBieXRlU3RyaWRlICkgLyBlbGVtZW50Qnl0ZXMsIG5vcm1hbGl6ZWQgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAoIGJ1ZmZlclZpZXcgPT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHRhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBhY2Nlc3NvckRlZi5jb3VudCAqIGl0ZW1TaXplICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoIGJ1ZmZlclZpZXcsIGJ5dGVPZmZzZXQsIGFjY2Vzc29yRGVmLmNvdW50ICogaXRlbVNpemUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnVmZmVyQXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYXJyYXksIGl0ZW1TaXplLCBub3JtYWxpemVkICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNzcGFyc2UtYWNjZXNzb3JzXG5cdFx0XHRpZiAoIGFjY2Vzc29yRGVmLnNwYXJzZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IGl0ZW1TaXplSW5kaWNlcyA9IFdFQkdMX1RZUEVfU0laRVMuU0NBTEFSO1xuXHRcdFx0XHRjb25zdCBUeXBlZEFycmF5SW5kaWNlcyA9IFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3JEZWYuc3BhcnNlLmluZGljZXMuY29tcG9uZW50VHlwZSBdO1xuXG5cdFx0XHRcdGNvbnN0IGJ5dGVPZmZzZXRJbmRpY2VzID0gYWNjZXNzb3JEZWYuc3BhcnNlLmluZGljZXMuYnl0ZU9mZnNldCB8fCAwO1xuXHRcdFx0XHRjb25zdCBieXRlT2Zmc2V0VmFsdWVzID0gYWNjZXNzb3JEZWYuc3BhcnNlLnZhbHVlcy5ieXRlT2Zmc2V0IHx8IDA7XG5cblx0XHRcdFx0Y29uc3Qgc3BhcnNlSW5kaWNlcyA9IG5ldyBUeXBlZEFycmF5SW5kaWNlcyggYnVmZmVyVmlld3NbIDEgXSwgYnl0ZU9mZnNldEluZGljZXMsIGFjY2Vzc29yRGVmLnNwYXJzZS5jb3VudCAqIGl0ZW1TaXplSW5kaWNlcyApO1xuXHRcdFx0XHRjb25zdCBzcGFyc2VWYWx1ZXMgPSBuZXcgVHlwZWRBcnJheSggYnVmZmVyVmlld3NbIDIgXSwgYnl0ZU9mZnNldFZhbHVlcywgYWNjZXNzb3JEZWYuc3BhcnNlLmNvdW50ICogaXRlbVNpemUgKTtcblxuXHRcdFx0XHRpZiAoIGJ1ZmZlclZpZXcgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHQvLyBBdm9pZCBtb2RpZnlpbmcgdGhlIG9yaWdpbmFsIEFycmF5QnVmZmVyLCBpZiB0aGUgYnVmZmVyVmlldyB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCB6ZXJvZXMuXG5cdFx0XHRcdFx0YnVmZmVyQXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYnVmZmVyQXR0cmlidXRlLmFycmF5LnNsaWNlKCksIGJ1ZmZlckF0dHJpYnV0ZS5pdGVtU2l6ZSwgYnVmZmVyQXR0cmlidXRlLm5vcm1hbGl6ZWQgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHNwYXJzZUluZGljZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHNwYXJzZUluZGljZXNbIGkgXTtcblxuXHRcdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZS5zZXRYKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgXSApO1xuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gMiApIGJ1ZmZlckF0dHJpYnV0ZS5zZXRZKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgKyAxIF0gKTtcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDMgKSBidWZmZXJBdHRyaWJ1dGUuc2V0WiggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplICsgMiBdICk7XG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSA0ICkgYnVmZmVyQXR0cmlidXRlLnNldFcoIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSArIDMgXSApO1xuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gNSApIHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIGl0ZW1TaXplIGluIHNwYXJzZSBCdWZmZXJBdHRyaWJ1dGUuJyApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYnVmZmVyQXR0cmlidXRlO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3RleHR1cmVzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0ZXh0dXJlSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxUSFJFRS5UZXh0dXJlfG51bGw+fVxuXHQgKi9cblx0bG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XG5cdFx0Y29uc3Qgc291cmNlSW5kZXggPSB0ZXh0dXJlRGVmLnNvdXJjZTtcblx0XHRjb25zdCBzb3VyY2VEZWYgPSBqc29uLmltYWdlc1sgc291cmNlSW5kZXggXTtcblxuXHRcdGxldCBsb2FkZXIgPSB0aGlzLnRleHR1cmVMb2FkZXI7XG5cblx0XHRpZiAoIHNvdXJjZURlZi51cmkgKSB7XG5cblx0XHRcdGNvbnN0IGhhbmRsZXIgPSBvcHRpb25zLm1hbmFnZXIuZ2V0SGFuZGxlciggc291cmNlRGVmLnVyaSApO1xuXHRcdFx0aWYgKCBoYW5kbGVyICE9PSBudWxsICkgbG9hZGVyID0gaGFuZGxlcjtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlSW5kZXgsIGxvYWRlciApO1xuXG5cdH1cblxuXHRsb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZUluZGV4LCBsb2FkZXIgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cblx0XHRjb25zdCB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XG5cdFx0Y29uc3Qgc291cmNlRGVmID0ganNvbi5pbWFnZXNbIHNvdXJjZUluZGV4IF07XG5cblx0XHRjb25zdCBjYWNoZUtleSA9ICggc291cmNlRGVmLnVyaSB8fCBzb3VyY2VEZWYuYnVmZmVyVmlldyApICsgJzonICsgdGV4dHVyZURlZi5zYW1wbGVyO1xuXG5cdFx0aWYgKCB0aGlzLnRleHR1cmVDYWNoZVsgY2FjaGVLZXkgXSApIHtcblxuXHRcdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzIxNTU5LlxuXHRcdFx0cmV0dXJuIHRoaXMudGV4dHVyZUNhY2hlWyBjYWNoZUtleSBdO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcHJvbWlzZSA9IHRoaXMubG9hZEltYWdlU291cmNlKCBzb3VyY2VJbmRleCwgbG9hZGVyICkudGhlbiggZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xuXG5cdFx0XHR0ZXh0dXJlLmZsaXBZID0gZmFsc2U7XG5cblx0XHRcdHRleHR1cmUubmFtZSA9IHRleHR1cmVEZWYubmFtZSB8fCBzb3VyY2VEZWYubmFtZSB8fCAnJztcblxuXHRcdFx0Y29uc3Qgc2FtcGxlcnMgPSBqc29uLnNhbXBsZXJzIHx8IHt9O1xuXHRcdFx0Y29uc3Qgc2FtcGxlciA9IHNhbXBsZXJzWyB0ZXh0dXJlRGVmLnNhbXBsZXIgXSB8fCB7fTtcblxuXHRcdFx0dGV4dHVyZS5tYWdGaWx0ZXIgPSBXRUJHTF9GSUxURVJTWyBzYW1wbGVyLm1hZ0ZpbHRlciBdIHx8IExpbmVhckZpbHRlcjtcblx0XHRcdHRleHR1cmUubWluRmlsdGVyID0gV0VCR0xfRklMVEVSU1sgc2FtcGxlci5taW5GaWx0ZXIgXSB8fCBMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXI7XG5cdFx0XHR0ZXh0dXJlLndyYXBTID0gV0VCR0xfV1JBUFBJTkdTWyBzYW1wbGVyLndyYXBTIF0gfHwgUmVwZWF0V3JhcHBpbmc7XG5cdFx0XHR0ZXh0dXJlLndyYXBUID0gV0VCR0xfV1JBUFBJTkdTWyBzYW1wbGVyLndyYXBUIF0gfHwgUmVwZWF0V3JhcHBpbmc7XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCB0ZXh0dXJlLCB7IHRleHR1cmVzOiB0ZXh0dXJlSW5kZXggfSApO1xuXG5cdFx0XHRyZXR1cm4gdGV4dHVyZTtcblxuXHRcdH0gKS5jYXRjaCggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMudGV4dHVyZUNhY2hlWyBjYWNoZUtleSBdID0gcHJvbWlzZTtcblxuXHRcdHJldHVybiBwcm9taXNlO1xuXG5cdH1cblxuXHRsb2FkSW1hZ2VTb3VyY2UoIHNvdXJjZUluZGV4LCBsb2FkZXIgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHRcdGlmICggdGhpcy5zb3VyY2VDYWNoZVsgc291cmNlSW5kZXggXSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5zb3VyY2VDYWNoZVsgc291cmNlSW5kZXggXS50aGVuKCAoIHRleHR1cmUgKSA9PiB0ZXh0dXJlLmNsb25lKCkgKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHNvdXJjZURlZiA9IGpzb24uaW1hZ2VzWyBzb3VyY2VJbmRleCBdO1xuXG5cdFx0Y29uc3QgVVJMID0gc2VsZi5VUkwgfHwgc2VsZi53ZWJraXRVUkw7XG5cblx0XHRsZXQgc291cmNlVVJJID0gc291cmNlRGVmLnVyaSB8fCAnJztcblx0XHRsZXQgaXNPYmplY3RVUkwgPSBmYWxzZTtcblxuXHRcdGlmICggc291cmNlRGVmLmJ1ZmZlclZpZXcgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gTG9hZCBiaW5hcnkgaW1hZ2UgZGF0YSBmcm9tIGJ1ZmZlclZpZXcsIGlmIHByb3ZpZGVkLlxuXG5cdFx0XHRzb3VyY2VVUkkgPSBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBzb3VyY2VEZWYuYnVmZmVyVmlldyApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyVmlldyApIHtcblxuXHRcdFx0XHRpc09iamVjdFVSTCA9IHRydWU7XG5cdFx0XHRcdGNvbnN0IGJsb2IgPSBuZXcgQmxvYiggWyBidWZmZXJWaWV3IF0sIHsgdHlwZTogc291cmNlRGVmLm1pbWVUeXBlIH0gKTtcblx0XHRcdFx0c291cmNlVVJJID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xuXHRcdFx0XHRyZXR1cm4gc291cmNlVVJJO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzb3VyY2VEZWYudXJpID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IEltYWdlICcgKyBzb3VyY2VJbmRleCArICcgaXMgbWlzc2luZyBVUkkgYW5kIGJ1ZmZlclZpZXcnICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCBzb3VyY2VVUkkgKS50aGVuKCBmdW5jdGlvbiAoIHNvdXJjZVVSSSApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUsIHJlamVjdCApIHtcblxuXHRcdFx0XHRsZXQgb25Mb2FkID0gcmVzb2x2ZTtcblxuXHRcdFx0XHRpZiAoIGxvYWRlci5pc0ltYWdlQml0bWFwTG9hZGVyID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0b25Mb2FkID0gZnVuY3Rpb24gKCBpbWFnZUJpdG1hcCApIHtcblxuXHRcdFx0XHRcdFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKCBpbWFnZUJpdG1hcCApO1xuXHRcdFx0XHRcdFx0dGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0XHRcdHJlc29sdmUoIHRleHR1cmUgKTtcblxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxvYWRlci5sb2FkKCBMb2FkZXJVdGlscy5yZXNvbHZlVVJMKCBzb3VyY2VVUkksIG9wdGlvbnMucGF0aCApLCBvbkxvYWQsIHVuZGVmaW5lZCwgcmVqZWN0ICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cblx0XHRcdC8vIENsZWFuIHVwIHJlc291cmNlcyBhbmQgY29uZmlndXJlIFRleHR1cmUuXG5cblx0XHRcdGlmICggaXNPYmplY3RVUkwgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTCggc291cmNlVVJJICk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGV4dHVyZS51c2VyRGF0YS5taW1lVHlwZSA9IHNvdXJjZURlZi5taW1lVHlwZSB8fCBnZXRJbWFnZVVSSU1pbWVUeXBlKCBzb3VyY2VEZWYudXJpICk7XG5cblx0XHRcdHJldHVybiB0ZXh0dXJlO1xuXG5cdFx0fSApLmNhdGNoKCBmdW5jdGlvbiAoIGVycm9yICkge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogQ291bGRuXFwndCBsb2FkIHRleHR1cmUnLCBzb3VyY2VVUkkgKTtcblx0XHRcdHRocm93IGVycm9yO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5zb3VyY2VDYWNoZVsgc291cmNlSW5kZXggXSA9IHByb21pc2U7XG5cdFx0cmV0dXJuIHByb21pc2U7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBc3luY2hyb25vdXNseSBhc3NpZ25zIGEgdGV4dHVyZSB0byB0aGUgZ2l2ZW4gbWF0ZXJpYWwgcGFyYW1ldGVycy5cblx0ICogQHBhcmFtIHtPYmplY3R9IG1hdGVyaWFsUGFyYW1zXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtYXBOYW1lXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtYXBEZWZcblx0ICogQHJldHVybiB7UHJvbWlzZTxUZXh0dXJlPn1cblx0ICovXG5cdGFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCBtYXBOYW1lLCBtYXBEZWYsIGVuY29kaW5nICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblxuXHRcdHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koICd0ZXh0dXJlJywgbWFwRGVmLmluZGV4ICkudGhlbiggZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xuXG5cdFx0XHRpZiAoICEgdGV4dHVyZSApIHJldHVybiBudWxsO1xuXG5cdFx0XHQvLyBNYXRlcmlhbHMgc2FtcGxlIGFvTWFwIGZyb20gVVYgc2V0IDEgYW5kIG90aGVyIG1hcHMgZnJvbSBVViBzZXQgMCAtIHRoaXMgY2FuJ3QgYmUgY29uZmlndXJlZFxuXHRcdFx0Ly8gSG93ZXZlciwgd2Ugd2lsbCBjb3B5IFVWIHNldCAwIHRvIFVWIHNldCAxIG9uIGRlbWFuZCBmb3IgYW9NYXBcblx0XHRcdGlmICggbWFwRGVmLnRleENvb3JkICE9PSB1bmRlZmluZWQgJiYgbWFwRGVmLnRleENvb3JkICE9IDAgJiYgISAoIG1hcE5hbWUgPT09ICdhb01hcCcgJiYgbWFwRGVmLnRleENvb3JkID09IDEgKSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBDdXN0b20gVVYgc2V0ICcgKyBtYXBEZWYudGV4Q29vcmQgKyAnIGZvciB0ZXh0dXJlICcgKyBtYXBOYW1lICsgJyBub3QgeWV0IHN1cHBvcnRlZC4nICk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBwYXJzZXIuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk0gXSApIHtcblxuXHRcdFx0XHRjb25zdCB0cmFuc2Zvcm0gPSBtYXBEZWYuZXh0ZW5zaW9ucyAhPT0gdW5kZWZpbmVkID8gbWFwRGVmLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNIF0gOiB1bmRlZmluZWQ7XG5cblx0XHRcdFx0aWYgKCB0cmFuc2Zvcm0gKSB7XG5cblx0XHRcdFx0XHRjb25zdCBnbHRmUmVmZXJlbmNlID0gcGFyc2VyLmFzc29jaWF0aW9ucy5nZXQoIHRleHR1cmUgKTtcblx0XHRcdFx0XHR0ZXh0dXJlID0gcGFyc2VyLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNIF0uZXh0ZW5kVGV4dHVyZSggdGV4dHVyZSwgdHJhbnNmb3JtICk7XG5cdFx0XHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIHRleHR1cmUsIGdsdGZSZWZlcmVuY2UgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBlbmNvZGluZyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHRleHR1cmUuZW5jb2RpbmcgPSBlbmNvZGluZztcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbFBhcmFtc1sgbWFwTmFtZSBdID0gdGV4dHVyZTtcblxuXHRcdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NpZ25zIGZpbmFsIG1hdGVyaWFsIHRvIGEgTWVzaCwgTGluZSwgb3IgUG9pbnRzIGluc3RhbmNlLiBUaGUgaW5zdGFuY2Vcblx0ICogYWxyZWFkeSBoYXMgYSBtYXRlcmlhbCAoZ2VuZXJhdGVkIGZyb20gdGhlIGdsVEYgbWF0ZXJpYWwgb3B0aW9ucyBhbG9uZSlcblx0ICogYnV0IHJldXNlIG9mIHRoZSBzYW1lIGdsVEYgbWF0ZXJpYWwgbWF5IHJlcXVpcmUgbXVsdGlwbGUgdGhyZWVqcyBtYXRlcmlhbHNcblx0ICogdG8gYWNjb21tb2RhdGUgZGlmZmVyZW50IHByaW1pdGl2ZSB0eXBlcywgZGVmaW5lcywgZXRjLiBOZXcgbWF0ZXJpYWxzIHdpbGxcblx0ICogYmUgY3JlYXRlZCBpZiBuZWNlc3NhcnksIGFuZCByZXVzZWQgZnJvbSBhIGNhY2hlLlxuXHQgKiBAcGFyYW0gIHtPYmplY3QzRH0gbWVzaCBNZXNoLCBMaW5lLCBvciBQb2ludHMgaW5zdGFuY2UuXG5cdCAqL1xuXHRhc3NpZ25GaW5hbE1hdGVyaWFsKCBtZXNoICkge1xuXG5cdFx0Y29uc3QgZ2VvbWV0cnkgPSBtZXNoLmdlb21ldHJ5O1xuXHRcdGxldCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWw7XG5cblx0XHRjb25zdCB1c2VEZXJpdmF0aXZlVGFuZ2VudHMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnRhbmdlbnQgPT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCB1c2VWZXJ0ZXhDb2xvcnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLmNvbG9yICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgdXNlRmxhdFNoYWRpbmcgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbCA9PT0gdW5kZWZpbmVkO1xuXG5cdFx0aWYgKCBtZXNoLmlzUG9pbnRzICkge1xuXG5cdFx0XHRjb25zdCBjYWNoZUtleSA9ICdQb2ludHNNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZDtcblxuXHRcdFx0bGV0IHBvaW50c01hdGVyaWFsID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XG5cblx0XHRcdGlmICggISBwb2ludHNNYXRlcmlhbCApIHtcblxuXHRcdFx0XHRwb2ludHNNYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCgpO1xuXHRcdFx0XHRNYXRlcmlhbC5wcm90b3R5cGUuY29weS5jYWxsKCBwb2ludHNNYXRlcmlhbCwgbWF0ZXJpYWwgKTtcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwuY29sb3IuY29weSggbWF0ZXJpYWwuY29sb3IgKTtcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwubWFwID0gbWF0ZXJpYWwubWFwO1xuXHRcdFx0XHRwb2ludHNNYXRlcmlhbC5zaXplQXR0ZW51YXRpb24gPSBmYWxzZTsgLy8gZ2xURiBzcGVjIHNheXMgcG9pbnRzIHNob3VsZCBiZSAxcHhcblxuXHRcdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIHBvaW50c01hdGVyaWFsICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWwgPSBwb2ludHNNYXRlcmlhbDtcblxuXHRcdH0gZWxzZSBpZiAoIG1lc2guaXNMaW5lICkge1xuXG5cdFx0XHRjb25zdCBjYWNoZUtleSA9ICdMaW5lQmFzaWNNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZDtcblxuXHRcdFx0bGV0IGxpbmVNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0XHRpZiAoICEgbGluZU1hdGVyaWFsICkge1xuXG5cdFx0XHRcdGxpbmVNYXRlcmlhbCA9IG5ldyBMaW5lQmFzaWNNYXRlcmlhbCgpO1xuXHRcdFx0XHRNYXRlcmlhbC5wcm90b3R5cGUuY29weS5jYWxsKCBsaW5lTWF0ZXJpYWwsIG1hdGVyaWFsICk7XG5cdFx0XHRcdGxpbmVNYXRlcmlhbC5jb2xvci5jb3B5KCBtYXRlcmlhbC5jb2xvciApO1xuXG5cdFx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgbGluZU1hdGVyaWFsICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWwgPSBsaW5lTWF0ZXJpYWw7XG5cblx0XHR9XG5cblx0XHQvLyBDbG9uZSB0aGUgbWF0ZXJpYWwgaWYgaXQgd2lsbCBiZSBtb2RpZmllZFxuXHRcdGlmICggdXNlRGVyaXZhdGl2ZVRhbmdlbnRzIHx8IHVzZVZlcnRleENvbG9ycyB8fCB1c2VGbGF0U2hhZGluZyApIHtcblxuXHRcdFx0bGV0IGNhY2hlS2V5ID0gJ0Nsb25lZE1hdGVyaWFsOicgKyBtYXRlcmlhbC51dWlkICsgJzonO1xuXG5cdFx0XHRpZiAoIHVzZURlcml2YXRpdmVUYW5nZW50cyApIGNhY2hlS2V5ICs9ICdkZXJpdmF0aXZlLXRhbmdlbnRzOic7XG5cdFx0XHRpZiAoIHVzZVZlcnRleENvbG9ycyApIGNhY2hlS2V5ICs9ICd2ZXJ0ZXgtY29sb3JzOic7XG5cdFx0XHRpZiAoIHVzZUZsYXRTaGFkaW5nICkgY2FjaGVLZXkgKz0gJ2ZsYXQtc2hhZGluZzonO1xuXG5cdFx0XHRsZXQgY2FjaGVkTWF0ZXJpYWwgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdFx0aWYgKCAhIGNhY2hlZE1hdGVyaWFsICkge1xuXG5cdFx0XHRcdGNhY2hlZE1hdGVyaWFsID0gbWF0ZXJpYWwuY2xvbmUoKTtcblxuXHRcdFx0XHRpZiAoIHVzZVZlcnRleENvbG9ycyApIGNhY2hlZE1hdGVyaWFsLnZlcnRleENvbG9ycyA9IHRydWU7XG5cdFx0XHRcdGlmICggdXNlRmxhdFNoYWRpbmcgKSBjYWNoZWRNYXRlcmlhbC5mbGF0U2hhZGluZyA9IHRydWU7XG5cblx0XHRcdFx0aWYgKCB1c2VEZXJpdmF0aXZlVGFuZ2VudHMgKSB7XG5cblx0XHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xMTQzOCNpc3N1ZWNvbW1lbnQtNTA3MDAzOTk1XG5cdFx0XHRcdFx0aWYgKCBjYWNoZWRNYXRlcmlhbC5ub3JtYWxTY2FsZSApIGNhY2hlZE1hdGVyaWFsLm5vcm1hbFNjYWxlLnkgKj0gLSAxO1xuXHRcdFx0XHRcdGlmICggY2FjaGVkTWF0ZXJpYWwuY2xlYXJjb2F0Tm9ybWFsU2NhbGUgKSBjYWNoZWRNYXRlcmlhbC5jbGVhcmNvYXROb3JtYWxTY2FsZS55ICo9IC0gMTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBjYWNoZWRNYXRlcmlhbCApO1xuXG5cdFx0XHRcdHRoaXMuYXNzb2NpYXRpb25zLnNldCggY2FjaGVkTWF0ZXJpYWwsIHRoaXMuYXNzb2NpYXRpb25zLmdldCggbWF0ZXJpYWwgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsID0gY2FjaGVkTWF0ZXJpYWw7XG5cblx0XHR9XG5cblx0XHQvLyB3b3JrYXJvdW5kcyBmb3IgbWVzaCBhbmQgZ2VvbWV0cnlcblxuXHRcdGlmICggbWF0ZXJpYWwuYW9NYXAgJiYgZ2VvbWV0cnkuYXR0cmlidXRlcy51djIgPT09IHVuZGVmaW5lZCAmJiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZSggJ3V2MicsIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYgKTtcblxuXHRcdH1cblxuXHRcdG1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbDtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCAvKiBtYXRlcmlhbEluZGV4ICovICkge1xuXG5cdFx0cmV0dXJuIE1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNtYXRlcmlhbHNcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1hdGVyaWFsSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxNYXRlcmlhbD59XG5cdCAqL1xuXHRsb2FkTWF0ZXJpYWwoIG1hdGVyaWFsSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IGpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRsZXQgbWF0ZXJpYWxUeXBlO1xuXHRcdGNvbnN0IG1hdGVyaWFsUGFyYW1zID0ge307XG5cdFx0Y29uc3QgbWF0ZXJpYWxFeHRlbnNpb25zID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCB7fTtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGlmICggbWF0ZXJpYWxFeHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQgXSApIHtcblxuXHRcdFx0Y29uc3Qga211RXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUIF07XG5cdFx0XHRtYXRlcmlhbFR5cGUgPSBrbXVFeHRlbnNpb24uZ2V0TWF0ZXJpYWxUeXBlKCk7XG5cdFx0XHRwZW5kaW5nLnB1c2goIGttdUV4dGVuc2lvbi5leHRlbmRQYXJhbXMoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIFNwZWNpZmljYXRpb246XG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjbWV0YWxsaWMtcm91Z2huZXNzLW1hdGVyaWFsXG5cblx0XHRcdGNvbnN0IG1ldGFsbGljUm91Z2huZXNzID0gbWF0ZXJpYWxEZWYucGJyTWV0YWxsaWNSb3VnaG5lc3MgfHwge307XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciApICkge1xuXG5cdFx0XHRcdGNvbnN0IGFycmF5ID0gbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yO1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yLmZyb21BcnJheSggYXJyYXkgKTtcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IGFycmF5WyAzIF07XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlLCBzUkdCRW5jb2RpbmcgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLm1ldGFsbmVzcyA9IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljRmFjdG9yICE9PSB1bmRlZmluZWQgPyBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY0ZhY3RvciA6IDEuMDtcblx0XHRcdG1hdGVyaWFsUGFyYW1zLnJvdWdobmVzcyA9IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzRmFjdG9yIDogMS4wO1xuXG5cdFx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWV0YWxuZXNzTWFwJywgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlICkgKTtcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdyb3VnaG5lc3NNYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsVHlwZSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5nZXRNYXRlcmlhbFR5cGUgJiYgZXh0LmdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggUHJvbWlzZS5hbGwoIHRoaXMuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5leHRlbmRNYXRlcmlhbFBhcmFtcyAmJiBleHQuZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICk7XG5cblx0XHRcdH0gKSApICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLmRvdWJsZVNpZGVkID09PSB0cnVlICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5zaWRlID0gRG91YmxlU2lkZTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGFscGhhTW9kZSA9IG1hdGVyaWFsRGVmLmFscGhhTW9kZSB8fCBBTFBIQV9NT0RFUy5PUEFRVUU7XG5cblx0XHRpZiAoIGFscGhhTW9kZSA9PT0gQUxQSEFfTU9ERVMuQkxFTkQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnRyYW5zcGFyZW50ID0gdHJ1ZTtcblxuXHRcdFx0Ly8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xNzcwNlxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuZGVwdGhXcml0ZSA9IGZhbHNlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMudHJhbnNwYXJlbnQgPSBmYWxzZTtcblxuXHRcdFx0aWYgKCBhbHBoYU1vZGUgPT09IEFMUEhBX01PREVTLk1BU0sgKSB7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuYWxwaGFUZXN0ID0gbWF0ZXJpYWxEZWYuYWxwaGFDdXRvZmYgIT09IHVuZGVmaW5lZCA/IG1hdGVyaWFsRGVmLmFscGhhQ3V0b2ZmIDogMC41O1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ25vcm1hbE1hcCcsIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUgKSApO1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZSA9IG5ldyBWZWN0b3IyKCAxLCAxICk7XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZS5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IHNjYWxlID0gbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZS5zY2FsZTtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZS5zZXQoIHNjYWxlLCBzY2FsZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2FvTWFwJywgbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZSApICk7XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmFvTWFwSW50ZW5zaXR5ID0gbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aDtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5lbWlzc2l2ZUZhY3RvciAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlID0gbmV3IENvbG9yKCkuZnJvbUFycmF5KCBtYXRlcmlhbERlZi5lbWlzc2l2ZUZhY3RvciApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5lbWlzc2l2ZVRleHR1cmUgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2VtaXNzaXZlTWFwJywgbWF0ZXJpYWxEZWYuZW1pc3NpdmVUZXh0dXJlLCBzUkdCRW5jb2RpbmcgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zdCBtYXRlcmlhbCA9IG5ldyBtYXRlcmlhbFR5cGUoIG1hdGVyaWFsUGFyYW1zICk7XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYubmFtZSApIG1hdGVyaWFsLm5hbWUgPSBtYXRlcmlhbERlZi5uYW1lO1xuXG5cdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBtYXRlcmlhbCwgbWF0ZXJpYWxEZWYgKTtcblxuXHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIG1hdGVyaWFsLCB7IG1hdGVyaWFsczogbWF0ZXJpYWxJbmRleCB9ICk7XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgbWF0ZXJpYWwsIG1hdGVyaWFsRGVmICk7XG5cblx0XHRcdHJldHVybiBtYXRlcmlhbDtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqIFdoZW4gT2JqZWN0M0QgaW5zdGFuY2VzIGFyZSB0YXJnZXRlZCBieSBhbmltYXRpb24sIHRoZXkgbmVlZCB1bmlxdWUgbmFtZXMuICovXG5cdGNyZWF0ZVVuaXF1ZU5hbWUoIG9yaWdpbmFsTmFtZSApIHtcblxuXHRcdGNvbnN0IHNhbml0aXplZE5hbWUgPSBQcm9wZXJ0eUJpbmRpbmcuc2FuaXRpemVOb2RlTmFtZSggb3JpZ2luYWxOYW1lIHx8ICcnICk7XG5cblx0XHRsZXQgbmFtZSA9IHNhbml0aXplZE5hbWU7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDE7IHRoaXMubm9kZU5hbWVzVXNlZFsgbmFtZSBdOyArKyBpICkge1xuXG5cdFx0XHRuYW1lID0gc2FuaXRpemVkTmFtZSArICdfJyArIGk7XG5cblx0XHR9XG5cblx0XHR0aGlzLm5vZGVOYW1lc1VzZWRbIG5hbWUgXSA9IHRydWU7XG5cblx0XHRyZXR1cm4gbmFtZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjZ2VvbWV0cnlcblx0ICpcblx0ICogQ3JlYXRlcyBCdWZmZXJHZW9tZXRyaWVzIGZyb20gcHJpbWl0aXZlcy5cblx0ICpcblx0ICogQHBhcmFtIHtBcnJheTxHTFRGLlByaW1pdGl2ZT59IHByaW1pdGl2ZXNcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxCdWZmZXJHZW9tZXRyeT4+fVxuXHQgKi9cblx0bG9hZEdlb21ldHJpZXMoIHByaW1pdGl2ZXMgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cdFx0Y29uc3QgY2FjaGUgPSB0aGlzLnByaW1pdGl2ZUNhY2hlO1xuXG5cdFx0ZnVuY3Rpb24gY3JlYXRlRHJhY29QcmltaXRpdmUoIHByaW1pdGl2ZSApIHtcblxuXHRcdFx0cmV0dXJuIGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04gXVxuXHRcdFx0XHQuZGVjb2RlUHJpbWl0aXZlKCBwcmltaXRpdmUsIHBhcnNlciApXG5cdFx0XHRcdC50aGVuKCBmdW5jdGlvbiAoIGdlb21ldHJ5ICkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIGFkZFByaW1pdGl2ZUF0dHJpYnV0ZXMoIGdlb21ldHJ5LCBwcmltaXRpdmUsIHBhcnNlciApO1xuXG5cdFx0XHRcdH0gKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBwcmltaXRpdmVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCBwcmltaXRpdmUgPSBwcmltaXRpdmVzWyBpIF07XG5cdFx0XHRjb25zdCBjYWNoZUtleSA9IGNyZWF0ZVByaW1pdGl2ZUtleSggcHJpbWl0aXZlICk7XG5cblx0XHRcdC8vIFNlZSBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgdGhpcyBnZW9tZXRyeVxuXHRcdFx0Y29uc3QgY2FjaGVkID0gY2FjaGVbIGNhY2hlS2V5IF07XG5cblx0XHRcdGlmICggY2FjaGVkICkge1xuXG5cdFx0XHRcdC8vIFVzZSB0aGUgY2FjaGVkIGdlb21ldHJ5IGlmIGl0IGV4aXN0c1xuXHRcdFx0XHRwZW5kaW5nLnB1c2goIGNhY2hlZC5wcm9taXNlICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bGV0IGdlb21ldHJ5UHJvbWlzZTtcblxuXHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5leHRlbnNpb25zICYmIHByaW1pdGl2ZS5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OIF0gKSB7XG5cblx0XHRcdFx0XHQvLyBVc2UgRFJBQ08gZ2VvbWV0cnkgaWYgYXZhaWxhYmxlXG5cdFx0XHRcdFx0Z2VvbWV0cnlQcm9taXNlID0gY3JlYXRlRHJhY29QcmltaXRpdmUoIHByaW1pdGl2ZSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGdlb21ldHJ5XG5cdFx0XHRcdFx0Z2VvbWV0cnlQcm9taXNlID0gYWRkUHJpbWl0aXZlQXR0cmlidXRlcyggbmV3IEJ1ZmZlckdlb21ldHJ5KCksIHByaW1pdGl2ZSwgcGFyc2VyICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENhY2hlIHRoaXMgZ2VvbWV0cnlcblx0XHRcdFx0Y2FjaGVbIGNhY2hlS2V5IF0gPSB7IHByaW1pdGl2ZTogcHJpbWl0aXZlLCBwcm9taXNlOiBnZW9tZXRyeVByb21pc2UgfTtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIGdlb21ldHJ5UHJvbWlzZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbWVzaGVzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtZXNoSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxHcm91cHxNZXNofFNraW5uZWRNZXNoPn1cblx0ICovXG5cdGxvYWRNZXNoKCBtZXNoSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblxuXHRcdGNvbnN0IG1lc2hEZWYgPSBqc29uLm1lc2hlc1sgbWVzaEluZGV4IF07XG5cdFx0Y29uc3QgcHJpbWl0aXZlcyA9IG1lc2hEZWYucHJpbWl0aXZlcztcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBwcmltaXRpdmVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCBtYXRlcmlhbCA9IHByaW1pdGl2ZXNbIGkgXS5tYXRlcmlhbCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY3JlYXRlRGVmYXVsdE1hdGVyaWFsKCB0aGlzLmNhY2hlIClcblx0XHRcdFx0OiB0aGlzLmdldERlcGVuZGVuY3koICdtYXRlcmlhbCcsIHByaW1pdGl2ZXNbIGkgXS5tYXRlcmlhbCApO1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIG1hdGVyaWFsICk7XG5cblx0XHR9XG5cblx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5sb2FkR2VvbWV0cmllcyggcHJpbWl0aXZlcyApICk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoIHJlc3VsdHMgKSB7XG5cblx0XHRcdGNvbnN0IG1hdGVyaWFscyA9IHJlc3VsdHMuc2xpY2UoIDAsIHJlc3VsdHMubGVuZ3RoIC0gMSApO1xuXHRcdFx0Y29uc3QgZ2VvbWV0cmllcyA9IHJlc3VsdHNbIHJlc3VsdHMubGVuZ3RoIC0gMSBdO1xuXG5cdFx0XHRjb25zdCBtZXNoZXMgPSBbXTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGdlb21ldHJpZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Y29uc3QgZ2VvbWV0cnkgPSBnZW9tZXRyaWVzWyBpIF07XG5cdFx0XHRcdGNvbnN0IHByaW1pdGl2ZSA9IHByaW1pdGl2ZXNbIGkgXTtcblxuXHRcdFx0XHQvLyAxLiBjcmVhdGUgTWVzaFxuXG5cdFx0XHRcdGxldCBtZXNoO1xuXG5cdFx0XHRcdGNvbnN0IG1hdGVyaWFsID0gbWF0ZXJpYWxzWyBpIF07XG5cblx0XHRcdFx0aWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFUyB8fFxuXHRcdFx0XHRcdFx0cHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9TVFJJUCB8fFxuXHRcdFx0XHRcdFx0cHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9GQU4gfHxcblx0XHRcdFx0XHRcdHByaW1pdGl2ZS5tb2RlID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHQvLyAuaXNTa2lubmVkTWVzaCBpc24ndCBpbiBnbFRGIHNwZWMuIFNlZSAuX21hcmtEZWZzKClcblx0XHRcdFx0XHRtZXNoID0gbWVzaERlZi5pc1NraW5uZWRNZXNoID09PSB0cnVlXG5cdFx0XHRcdFx0XHQ/IG5ldyBTa2lubmVkTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsIClcblx0XHRcdFx0XHRcdDogbmV3IE1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdFx0aWYgKCBtZXNoLmlzU2tpbm5lZE1lc2ggPT09IHRydWUgJiYgISBtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMuc2tpbldlaWdodC5ub3JtYWxpemVkICkge1xuXG5cdFx0XHRcdFx0XHQvLyB3ZSBub3JtYWxpemUgZmxvYXRpbmcgcG9pbnQgc2tpbiB3ZWlnaHQgYXJyYXkgdG8gZml4IG1hbGZvcm1lZCBhc3NldHMgKHNlZSAjMTUzMTkpXG5cdFx0XHRcdFx0XHQvLyBpdCdzIGltcG9ydGFudCB0byBza2lwIHRoaXMgZm9yIG5vbi1mbG9hdDMyIGRhdGEgc2luY2Ugbm9ybWFsaXplU2tpbldlaWdodHMgYXNzdW1lcyBub24tbm9ybWFsaXplZCBpbnB1dHNcblx0XHRcdFx0XHRcdG1lc2gubm9ybWFsaXplU2tpbldlaWdodHMoKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9TVFJJUCApIHtcblxuXHRcdFx0XHRcdFx0bWVzaC5nZW9tZXRyeSA9IHRvVHJpYW5nbGVzRHJhd01vZGUoIG1lc2guZ2VvbWV0cnksIFRyaWFuZ2xlU3RyaXBEcmF3TW9kZSApO1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9GQU4gKSB7XG5cblx0XHRcdFx0XHRcdG1lc2guZ2VvbWV0cnkgPSB0b1RyaWFuZ2xlc0RyYXdNb2RlKCBtZXNoLmdlb21ldHJ5LCBUcmlhbmdsZUZhbkRyYXdNb2RlICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5MSU5FUyApIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgTGluZVNlZ21lbnRzKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLkxJTkVfU1RSSVAgKSB7XG5cblx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmUoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuTElORV9MT09QICkge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBMaW5lTG9vcCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5QT0lOVFMgKSB7XG5cblx0XHRcdFx0XHRtZXNoID0gbmV3IFBvaW50cyggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFByaW1pdGl2ZSBtb2RlIHVuc3VwcG9ydGVkOiAnICsgcHJpbWl0aXZlLm1vZGUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBPYmplY3Qua2V5cyggbWVzaC5nZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMgKS5sZW5ndGggPiAwICkge1xuXG5cdFx0XHRcdFx0dXBkYXRlTW9ycGhUYXJnZXRzKCBtZXNoLCBtZXNoRGVmICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1lc2gubmFtZSA9IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBtZXNoRGVmLm5hbWUgfHwgKCAnbWVzaF8nICsgbWVzaEluZGV4ICkgKTtcblxuXHRcdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBtZXNoLCBtZXNoRGVmICk7XG5cblx0XHRcdFx0aWYgKCBwcmltaXRpdmUuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgbWVzaCwgcHJpbWl0aXZlICk7XG5cblx0XHRcdFx0cGFyc2VyLmFzc2lnbkZpbmFsTWF0ZXJpYWwoIG1lc2ggKTtcblxuXHRcdFx0XHRtZXNoZXMucHVzaCggbWVzaCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBtZXNoZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIG1lc2hlc1sgaSBdLCB7XG5cdFx0XHRcdFx0bWVzaGVzOiBtZXNoSW5kZXgsXG5cdFx0XHRcdFx0cHJpbWl0aXZlczogaVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtZXNoZXMubGVuZ3RoID09PSAxICkge1xuXG5cdFx0XHRcdHJldHVybiBtZXNoZXNbIDAgXTtcblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBncm91cCA9IG5ldyBHcm91cCgpO1xuXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggZ3JvdXAsIHsgbWVzaGVzOiBtZXNoSW5kZXggfSApO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbWVzaGVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGdyb3VwLmFkZCggbWVzaGVzWyBpIF0gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZ3JvdXA7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjY2FtZXJhc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxUSFJFRS5DYW1lcmE+fVxuXHQgKi9cblx0bG9hZENhbWVyYSggY2FtZXJhSW5kZXggKSB7XG5cblx0XHRsZXQgY2FtZXJhO1xuXHRcdGNvbnN0IGNhbWVyYURlZiA9IHRoaXMuanNvbi5jYW1lcmFzWyBjYW1lcmFJbmRleCBdO1xuXHRcdGNvbnN0IHBhcmFtcyA9IGNhbWVyYURlZlsgY2FtZXJhRGVmLnR5cGUgXTtcblxuXHRcdGlmICggISBwYXJhbXMgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IE1pc3NpbmcgY2FtZXJhIHBhcmFtZXRlcnMuJyApO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBjYW1lcmFEZWYudHlwZSA9PT0gJ3BlcnNwZWN0aXZlJyApIHtcblxuXHRcdFx0Y2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKCBNYXRoVXRpbHMucmFkVG9EZWcoIHBhcmFtcy55Zm92ICksIHBhcmFtcy5hc3BlY3RSYXRpbyB8fCAxLCBwYXJhbXMuem5lYXIgfHwgMSwgcGFyYW1zLnpmYXIgfHwgMmU2ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBjYW1lcmFEZWYudHlwZSA9PT0gJ29ydGhvZ3JhcGhpYycgKSB7XG5cblx0XHRcdGNhbWVyYSA9IG5ldyBPcnRob2dyYXBoaWNDYW1lcmEoIC0gcGFyYW1zLnhtYWcsIHBhcmFtcy54bWFnLCBwYXJhbXMueW1hZywgLSBwYXJhbXMueW1hZywgcGFyYW1zLnpuZWFyLCBwYXJhbXMuemZhciApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBjYW1lcmFEZWYubmFtZSApIGNhbWVyYS5uYW1lID0gdGhpcy5jcmVhdGVVbmlxdWVOYW1lKCBjYW1lcmFEZWYubmFtZSApO1xuXG5cdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggY2FtZXJhLCBjYW1lcmFEZWYgKTtcblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIGNhbWVyYSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3NraW5zXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBza2luSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxTa2VsZXRvbj59XG5cdCAqL1xuXHRsb2FkU2tpbiggc2tpbkluZGV4ICkge1xuXG5cdFx0Y29uc3Qgc2tpbkRlZiA9IHRoaXMuanNvbi5za2luc1sgc2tpbkluZGV4IF07XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gc2tpbkRlZi5qb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnbm9kZScsIHNraW5EZWYuam9pbnRzWyBpIF0gKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBza2luRGVmLmludmVyc2VCaW5kTWF0cmljZXMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHNraW5EZWYuaW52ZXJzZUJpbmRNYXRyaWNlcyApICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIG51bGwgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICggcmVzdWx0cyApIHtcblxuXHRcdFx0Y29uc3QgaW52ZXJzZUJpbmRNYXRyaWNlcyA9IHJlc3VsdHMucG9wKCk7XG5cdFx0XHRjb25zdCBqb2ludE5vZGVzID0gcmVzdWx0cztcblxuXHRcdFx0Y29uc3QgYm9uZXMgPSBbXTtcblx0XHRcdGNvbnN0IGJvbmVJbnZlcnNlcyA9IFtdO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gam9pbnROb2Rlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRjb25zdCBqb2ludE5vZGUgPSBqb2ludE5vZGVzWyBpIF07XG5cblx0XHRcdFx0aWYgKCBqb2ludE5vZGUgKSB7XG5cblx0XHRcdFx0XHRib25lcy5wdXNoKCBqb2ludE5vZGUgKTtcblxuXHRcdFx0XHRcdGNvbnN0IG1hdCA9IG5ldyBNYXRyaXg0KCk7XG5cblx0XHRcdFx0XHRpZiAoIGludmVyc2VCaW5kTWF0cmljZXMgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHRcdG1hdC5mcm9tQXJyYXkoIGludmVyc2VCaW5kTWF0cmljZXMuYXJyYXksIGkgKiAxNiApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ym9uZUludmVyc2VzLnB1c2goIG1hdCApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBKb2ludCBcIiVzXCIgY291bGQgbm90IGJlIGZvdW5kLicsIHNraW5EZWYuam9pbnRzWyBpIF0gKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBTa2VsZXRvbiggYm9uZXMsIGJvbmVJbnZlcnNlcyApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI2FuaW1hdGlvbnNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGFuaW1hdGlvbkluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QW5pbWF0aW9uQ2xpcD59XG5cdCAqL1xuXHRsb2FkQW5pbWF0aW9uKCBhbmltYXRpb25JbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cblx0XHRjb25zdCBhbmltYXRpb25EZWYgPSBqc29uLmFuaW1hdGlvbnNbIGFuaW1hdGlvbkluZGV4IF07XG5cblx0XHRjb25zdCBwZW5kaW5nTm9kZXMgPSBbXTtcblx0XHRjb25zdCBwZW5kaW5nSW5wdXRBY2Nlc3NvcnMgPSBbXTtcblx0XHRjb25zdCBwZW5kaW5nT3V0cHV0QWNjZXNzb3JzID0gW107XG5cdFx0Y29uc3QgcGVuZGluZ1NhbXBsZXJzID0gW107XG5cdFx0Y29uc3QgcGVuZGluZ1RhcmdldHMgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBhbmltYXRpb25EZWYuY2hhbm5lbHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IGNoYW5uZWwgPSBhbmltYXRpb25EZWYuY2hhbm5lbHNbIGkgXTtcblx0XHRcdGNvbnN0IHNhbXBsZXIgPSBhbmltYXRpb25EZWYuc2FtcGxlcnNbIGNoYW5uZWwuc2FtcGxlciBdO1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gY2hhbm5lbC50YXJnZXQ7XG5cdFx0XHRjb25zdCBuYW1lID0gdGFyZ2V0Lm5vZGU7XG5cdFx0XHRjb25zdCBpbnB1dCA9IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzICE9PSB1bmRlZmluZWQgPyBhbmltYXRpb25EZWYucGFyYW1ldGVyc1sgc2FtcGxlci5pbnB1dCBdIDogc2FtcGxlci5pbnB1dDtcblx0XHRcdGNvbnN0IG91dHB1dCA9IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzICE9PSB1bmRlZmluZWQgPyBhbmltYXRpb25EZWYucGFyYW1ldGVyc1sgc2FtcGxlci5vdXRwdXQgXSA6IHNhbXBsZXIub3V0cHV0O1xuXG5cdFx0XHRwZW5kaW5nTm9kZXMucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnbm9kZScsIG5hbWUgKSApO1xuXHRcdFx0cGVuZGluZ0lucHV0QWNjZXNzb3JzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgaW5wdXQgKSApO1xuXHRcdFx0cGVuZGluZ091dHB1dEFjY2Vzc29ycy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIG91dHB1dCApICk7XG5cdFx0XHRwZW5kaW5nU2FtcGxlcnMucHVzaCggc2FtcGxlciApO1xuXHRcdFx0cGVuZGluZ1RhcmdldHMucHVzaCggdGFyZ2V0ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcblxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdOb2RlcyApLFxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdJbnB1dEFjY2Vzc29ycyApLFxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdPdXRwdXRBY2Nlc3NvcnMgKSxcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nU2FtcGxlcnMgKSxcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nVGFyZ2V0cyApXG5cblx0XHRdICkudGhlbiggZnVuY3Rpb24gKCBkZXBlbmRlbmNpZXMgKSB7XG5cblx0XHRcdGNvbnN0IG5vZGVzID0gZGVwZW5kZW5jaWVzWyAwIF07XG5cdFx0XHRjb25zdCBpbnB1dEFjY2Vzc29ycyA9IGRlcGVuZGVuY2llc1sgMSBdO1xuXHRcdFx0Y29uc3Qgb3V0cHV0QWNjZXNzb3JzID0gZGVwZW5kZW5jaWVzWyAyIF07XG5cdFx0XHRjb25zdCBzYW1wbGVycyA9IGRlcGVuZGVuY2llc1sgMyBdO1xuXHRcdFx0Y29uc3QgdGFyZ2V0cyA9IGRlcGVuZGVuY2llc1sgNCBdO1xuXG5cdFx0XHRjb25zdCB0cmFja3MgPSBbXTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGNvbnN0IG5vZGUgPSBub2Rlc1sgaSBdO1xuXHRcdFx0XHRjb25zdCBpbnB1dEFjY2Vzc29yID0gaW5wdXRBY2Nlc3NvcnNbIGkgXTtcblx0XHRcdFx0Y29uc3Qgb3V0cHV0QWNjZXNzb3IgPSBvdXRwdXRBY2Nlc3NvcnNbIGkgXTtcblx0XHRcdFx0Y29uc3Qgc2FtcGxlciA9IHNhbXBsZXJzWyBpIF07XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IHRhcmdldHNbIGkgXTtcblxuXHRcdFx0XHRpZiAoIG5vZGUgPT09IHVuZGVmaW5lZCApIGNvbnRpbnVlO1xuXG5cdFx0XHRcdG5vZGUudXBkYXRlTWF0cml4KCk7XG5cblx0XHRcdFx0bGV0IFR5cGVkS2V5ZnJhbWVUcmFjaztcblxuXHRcdFx0XHRzd2l0Y2ggKCBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0gKSB7XG5cblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy53ZWlnaHRzOlxuXG5cdFx0XHRcdFx0XHRUeXBlZEtleWZyYW1lVHJhY2sgPSBOdW1iZXJLZXlmcmFtZVRyYWNrO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy5yb3RhdGlvbjpcblxuXHRcdFx0XHRcdFx0VHlwZWRLZXlmcmFtZVRyYWNrID0gUXVhdGVybmlvbktleWZyYW1lVHJhY2s7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnBvc2l0aW9uOlxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnNjYWxlOlxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRcdFR5cGVkS2V5ZnJhbWVUcmFjayA9IFZlY3RvcktleWZyYW1lVHJhY2s7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgdGFyZ2V0TmFtZSA9IG5vZGUubmFtZSA/IG5vZGUubmFtZSA6IG5vZGUudXVpZDtcblxuXHRcdFx0XHRjb25zdCBpbnRlcnBvbGF0aW9uID0gc2FtcGxlci5pbnRlcnBvbGF0aW9uICE9PSB1bmRlZmluZWQgPyBJTlRFUlBPTEFUSU9OWyBzYW1wbGVyLmludGVycG9sYXRpb24gXSA6IEludGVycG9sYXRlTGluZWFyO1xuXG5cdFx0XHRcdGNvbnN0IHRhcmdldE5hbWVzID0gW107XG5cblx0XHRcdFx0aWYgKCBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0gPT09IFBBVEhfUFJPUEVSVElFUy53ZWlnaHRzICkge1xuXG5cdFx0XHRcdFx0bm9kZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggb2JqZWN0Lm1vcnBoVGFyZ2V0SW5mbHVlbmNlcyApIHtcblxuXHRcdFx0XHRcdFx0XHR0YXJnZXROYW1lcy5wdXNoKCBvYmplY3QubmFtZSA/IG9iamVjdC5uYW1lIDogb2JqZWN0LnV1aWQgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHR0YXJnZXROYW1lcy5wdXNoKCB0YXJnZXROYW1lICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBvdXRwdXRBcnJheSA9IG91dHB1dEFjY2Vzc29yLmFycmF5O1xuXG5cdFx0XHRcdGlmICggb3V0cHV0QWNjZXNzb3Iubm9ybWFsaXplZCApIHtcblxuXHRcdFx0XHRcdGNvbnN0IHNjYWxlID0gZ2V0Tm9ybWFsaXplZENvbXBvbmVudFNjYWxlKCBvdXRwdXRBcnJheS5jb25zdHJ1Y3RvciApO1xuXHRcdFx0XHRcdGNvbnN0IHNjYWxlZCA9IG5ldyBGbG9hdDMyQXJyYXkoIG91dHB1dEFycmF5Lmxlbmd0aCApO1xuXG5cdFx0XHRcdFx0Zm9yICggbGV0IGogPSAwLCBqbCA9IG91dHB1dEFycmF5Lmxlbmd0aDsgaiA8IGpsOyBqICsrICkge1xuXG5cdFx0XHRcdFx0XHRzY2FsZWRbIGogXSA9IG91dHB1dEFycmF5WyBqIF0gKiBzY2FsZTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG91dHB1dEFycmF5ID0gc2NhbGVkO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKCBsZXQgaiA9IDAsIGpsID0gdGFyZ2V0TmFtZXMubGVuZ3RoOyBqIDwgamw7IGogKysgKSB7XG5cblx0XHRcdFx0XHRjb25zdCB0cmFjayA9IG5ldyBUeXBlZEtleWZyYW1lVHJhY2soXG5cdFx0XHRcdFx0XHR0YXJnZXROYW1lc1sgaiBdICsgJy4nICsgUEFUSF9QUk9QRVJUSUVTWyB0YXJnZXQucGF0aCBdLFxuXHRcdFx0XHRcdFx0aW5wdXRBY2Nlc3Nvci5hcnJheSxcblx0XHRcdFx0XHRcdG91dHB1dEFycmF5LFxuXHRcdFx0XHRcdFx0aW50ZXJwb2xhdGlvblxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHQvLyBPdmVycmlkZSBpbnRlcnBvbGF0aW9uIHdpdGggY3VzdG9tIGZhY3RvcnkgbWV0aG9kLlxuXHRcdFx0XHRcdGlmICggc2FtcGxlci5pbnRlcnBvbGF0aW9uID09PSAnQ1VCSUNTUExJTkUnICkge1xuXG5cdFx0XHRcdFx0XHR0cmFjay5jcmVhdGVJbnRlcnBvbGFudCA9IGZ1bmN0aW9uIEludGVycG9sYW50RmFjdG9yeU1ldGhvZEdMVEZDdWJpY1NwbGluZSggcmVzdWx0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEEgQ1VCSUNTUExJTkUga2V5ZnJhbWUgaW4gZ2xURiBoYXMgdGhyZWUgb3V0cHV0IHZhbHVlcyBmb3IgZWFjaCBpbnB1dCB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0Ly8gcmVwcmVzZW50aW5nIGluVGFuZ2VudCwgc3BsaW5lVmVydGV4LCBhbmQgb3V0VGFuZ2VudC4gQXMgYSByZXN1bHQsIHRyYWNrLmdldFZhbHVlU2l6ZSgpXG5cdFx0XHRcdFx0XHRcdC8vIG11c3QgYmUgZGl2aWRlZCBieSB0aHJlZSB0byBnZXQgdGhlIGludGVycG9sYW50J3Mgc2FtcGxlU2l6ZSBhcmd1bWVudC5cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBpbnRlcnBvbGFudFR5cGUgPSAoIHRoaXMgaW5zdGFuY2VvZiBRdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjayApID8gR0xURkN1YmljU3BsaW5lUXVhdGVybmlvbkludGVycG9sYW50IDogR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQ7XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBpbnRlcnBvbGFudFR5cGUoIHRoaXMudGltZXMsIHRoaXMudmFsdWVzLCB0aGlzLmdldFZhbHVlU2l6ZSgpIC8gMywgcmVzdWx0ICk7XG5cblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdC8vIE1hcmsgYXMgQ1VCSUNTUExJTkUuIGB0cmFjay5nZXRJbnRlcnBvbGF0aW9uKClgIGRvZXNuJ3Qgc3VwcG9ydCBjdXN0b20gaW50ZXJwb2xhbnRzLlxuXHRcdFx0XHRcdFx0dHJhY2suY3JlYXRlSW50ZXJwb2xhbnQuaXNJbnRlcnBvbGFudEZhY3RvcnlNZXRob2RHTFRGQ3ViaWNTcGxpbmUgPSB0cnVlO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dHJhY2tzLnB1c2goIHRyYWNrICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG5hbWUgPSBhbmltYXRpb25EZWYubmFtZSA/IGFuaW1hdGlvbkRlZi5uYW1lIDogJ2FuaW1hdGlvbl8nICsgYW5pbWF0aW9uSW5kZXg7XG5cblx0XHRcdHJldHVybiBuZXcgQW5pbWF0aW9uQ2xpcCggbmFtZSwgdW5kZWZpbmVkLCB0cmFja3MgKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0Y3JlYXRlTm9kZU1lc2goIG5vZGVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHRpZiAoIG5vZGVEZWYubWVzaCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdtZXNoJywgbm9kZURlZi5tZXNoICkudGhlbiggZnVuY3Rpb24gKCBtZXNoICkge1xuXG5cdFx0XHRjb25zdCBub2RlID0gcGFyc2VyLl9nZXROb2RlUmVmKCBwYXJzZXIubWVzaENhY2hlLCBub2RlRGVmLm1lc2gsIG1lc2ggKTtcblxuXHRcdFx0Ly8gaWYgd2VpZ2h0cyBhcmUgcHJvdmlkZWQgb24gdGhlIG5vZGUsIG92ZXJyaWRlIHdlaWdodHMgb24gdGhlIG1lc2guXG5cdFx0XHRpZiAoIG5vZGVEZWYud2VpZ2h0cyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdG5vZGUudHJhdmVyc2UoIGZ1bmN0aW9uICggbyApIHtcblxuXHRcdFx0XHRcdGlmICggISBvLmlzTWVzaCApIHJldHVybjtcblxuXHRcdFx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBub2RlRGVmLndlaWdodHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0XHRcdG8ubW9ycGhUYXJnZXRJbmZsdWVuY2VzWyBpIF0gPSBub2RlRGVmLndlaWdodHNbIGkgXTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjbm9kZXMtYW5kLWhpZXJhcmNoeVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0M0Q+fVxuXHQgKi9cblx0bG9hZE5vZGUoIG5vZGVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXG5cdFx0Y29uc3Qgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJbmRleCBdO1xuXG5cdFx0Ly8gcmVzZXJ2ZSBub2RlJ3MgbmFtZSBiZWZvcmUgaXRzIGRlcGVuZGVuY2llcywgc28gdGhlIHJvb3QgaGFzIHRoZSBpbnRlbmRlZCBuYW1lLlxuXHRcdGNvbnN0IG5vZGVOYW1lID0gbm9kZURlZi5uYW1lID8gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIG5vZGVEZWYubmFtZSApIDogJyc7XG5cblx0XHRyZXR1cm4gKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IG9iamVjdFBlbmRpbmcgPSBbXTtcblxuXHRcdFx0Y29uc3QgbWVzaFByb21pc2UgPSBwYXJzZXIuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5jcmVhdGVOb2RlTWVzaCAmJiBleHQuY3JlYXRlTm9kZU1lc2goIG5vZGVJbmRleCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHRcdGlmICggbWVzaFByb21pc2UgKSB7XG5cblx0XHRcdFx0b2JqZWN0UGVuZGluZy5wdXNoKCBtZXNoUHJvbWlzZSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZURlZi5jYW1lcmEgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRvYmplY3RQZW5kaW5nLnB1c2goIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnY2FtZXJhJywgbm9kZURlZi5jYW1lcmEgKS50aGVuKCBmdW5jdGlvbiAoIGNhbWVyYSApIHtcblxuXHRcdFx0XHRcdHJldHVybiBwYXJzZXIuX2dldE5vZGVSZWYoIHBhcnNlci5jYW1lcmFDYWNoZSwgbm9kZURlZi5jYW1lcmEsIGNhbWVyYSApO1xuXG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHBhcnNlci5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmNyZWF0ZU5vZGVBdHRhY2htZW50ICYmIGV4dC5jcmVhdGVOb2RlQXR0YWNobWVudCggbm9kZUluZGV4ICk7XG5cblx0XHRcdH0gKS5mb3JFYWNoKCBmdW5jdGlvbiAoIHByb21pc2UgKSB7XG5cblx0XHRcdFx0b2JqZWN0UGVuZGluZy5wdXNoKCBwcm9taXNlICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0Y29uc3QgY2hpbGRQZW5kaW5nID0gW107XG5cdFx0XHRjb25zdCBjaGlsZHJlbkRlZiA9IG5vZGVEZWYuY2hpbGRyZW4gfHwgW107XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBjaGlsZHJlbkRlZi5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRjaGlsZFBlbmRpbmcucHVzaCggcGFyc2VyLmdldERlcGVuZGVuY3koICdub2RlJywgY2hpbGRyZW5EZWZbIGkgXSApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2tlbGV0b25QZW5kaW5nID0gbm9kZURlZi5za2luID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBQcm9taXNlLnJlc29sdmUoIG51bGwgKVxuXHRcdFx0XHQ6IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnc2tpbicsIG5vZGVEZWYuc2tpbiApO1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcblx0XHRcdFx0UHJvbWlzZS5hbGwoIG9iamVjdFBlbmRpbmcgKSxcblx0XHRcdFx0UHJvbWlzZS5hbGwoIGNoaWxkUGVuZGluZyApLFxuXHRcdFx0XHRza2VsZXRvblBlbmRpbmdcblx0XHRcdF0gKTtcblxuXHRcdH0oKSApLnRoZW4oIGZ1bmN0aW9uICggcmVzdWx0cyApIHtcblxuXHRcdFx0Y29uc3Qgb2JqZWN0cyA9IHJlc3VsdHNbIDAgXTtcblx0XHRcdGNvbnN0IGNoaWxkcmVuID0gcmVzdWx0c1sgMSBdO1xuXHRcdFx0Y29uc3Qgc2tlbGV0b24gPSByZXN1bHRzWyAyIF07XG5cblx0XHRcdGxldCBub2RlO1xuXG5cdFx0XHQvLyAuaXNCb25lIGlzbid0IGluIGdsVEYgc3BlYy4gU2VlIC5fbWFya0RlZnNcblx0XHRcdGlmICggbm9kZURlZi5pc0JvbmUgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0bm9kZSA9IG5ldyBCb25lKCk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIG9iamVjdHMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0XHRub2RlID0gbmV3IEdyb3VwKCk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIG9iamVjdHMubGVuZ3RoID09PSAxICkge1xuXG5cdFx0XHRcdG5vZGUgPSBvYmplY3RzWyAwIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bm9kZSA9IG5ldyBPYmplY3QzRCgpO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZSAhPT0gb2JqZWN0c1sgMCBdICkge1xuXG5cdFx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBvYmplY3RzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdFx0bm9kZS5hZGQoIG9iamVjdHNbIGkgXSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5vZGVEZWYubmFtZSApIHtcblxuXHRcdFx0XHRub2RlLnVzZXJEYXRhLm5hbWUgPSBub2RlRGVmLm5hbWU7XG5cdFx0XHRcdG5vZGUubmFtZSA9IG5vZGVOYW1lO1xuXG5cdFx0XHR9XG5cblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG5vZGUsIG5vZGVEZWYgKTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIG5vZGUsIG5vZGVEZWYgKTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLm1hdHJpeCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IG1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7XG5cdFx0XHRcdG1hdHJpeC5mcm9tQXJyYXkoIG5vZGVEZWYubWF0cml4ICk7XG5cdFx0XHRcdG5vZGUuYXBwbHlNYXRyaXg0KCBtYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAoIG5vZGVEZWYudHJhbnNsYXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdG5vZGUucG9zaXRpb24uZnJvbUFycmF5KCBub2RlRGVmLnRyYW5zbGF0aW9uICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggbm9kZURlZi5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0bm9kZS5xdWF0ZXJuaW9uLmZyb21BcnJheSggbm9kZURlZi5yb3RhdGlvbiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIG5vZGVEZWYuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdG5vZGUuc2NhbGUuZnJvbUFycmF5KCBub2RlRGVmLnNjYWxlICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggISBwYXJzZXIuYXNzb2NpYXRpb25zLmhhcyggbm9kZSApICkge1xuXG5cdFx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCBub2RlLCB7fSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuZ2V0KCBub2RlICkubm9kZXMgPSBub2RlSW5kZXg7XG5cblx0XHRcdGlmICggc2tlbGV0b24gIT09IG51bGwgKSB7XG5cblx0XHRcdFx0Ly8gVGhpcyBmdWxsIHRyYXZlcnNlIHNob3VsZCBiZSBmaW5lIGJlY2F1c2Vcblx0XHRcdFx0Ly8gY2hpbGQgZ2xURiBub2RlcyBoYXZlIG5vdCBiZWVuIGFkZGVkIHRvIHRoaXMgbm9kZSB5ZXQuXG5cdFx0XHRcdG5vZGUudHJhdmVyc2UoIGZ1bmN0aW9uICggbWVzaCApIHtcblxuXHRcdFx0XHRcdGlmICggISBtZXNoLmlzU2tpbm5lZE1lc2ggKSByZXR1cm47XG5cblx0XHRcdFx0XHRtZXNoLmJpbmQoIHNrZWxldG9uLCBfaWRlbnRpdHlNYXRyaXggKTtcblxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdG5vZGUuYWRkKCBjaGlsZHJlblsgaSBdICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2NlbmVzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzY2VuZUluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8R3JvdXA+fVxuXHQgKi9cblx0bG9hZFNjZW5lKCBzY2VuZUluZGV4ICkge1xuXG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBzY2VuZURlZiA9IHRoaXMuanNvbi5zY2VuZXNbIHNjZW5lSW5kZXggXTtcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXG5cdFx0Ly8gTG9hZGVyIHJldHVybnMgR3JvdXAsIG5vdCBTY2VuZS5cblx0XHQvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE4MzQyI2lzc3VlY29tbWVudC01Nzg5ODExNzJcblx0XHRjb25zdCBzY2VuZSA9IG5ldyBHcm91cCgpO1xuXHRcdGlmICggc2NlbmVEZWYubmFtZSApIHNjZW5lLm5hbWUgPSBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggc2NlbmVEZWYubmFtZSApO1xuXG5cdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggc2NlbmUsIHNjZW5lRGVmICk7XG5cblx0XHRpZiAoIHNjZW5lRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIHNjZW5lLCBzY2VuZURlZiApO1xuXG5cdFx0Y29uc3Qgbm9kZUlkcyA9IHNjZW5lRGVmLm5vZGVzIHx8IFtdO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG5vZGVJZHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmdldERlcGVuZGVuY3koICdub2RlJywgbm9kZUlkc1sgaSBdICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICggbm9kZXMgKSB7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBub2Rlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRzY2VuZS5hZGQoIG5vZGVzWyBpIF0gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmVzIGRhbmdsaW5nIGFzc29jaWF0aW9ucywgYXNzb2NpYXRpb25zIHRoYXQgcmVmZXJlbmNlIGEgbm9kZSB0aGF0XG5cdFx0XHQvLyBkaWRuJ3QgbWFrZSBpdCBpbnRvIHRoZSBzY2VuZS5cblx0XHRcdGNvbnN0IHJlZHVjZUFzc29jaWF0aW9ucyA9ICggbm9kZSApID0+IHtcblxuXHRcdFx0XHRjb25zdCByZWR1Y2VkQXNzb2NpYXRpb25zID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRcdGZvciAoIGNvbnN0IFsga2V5LCB2YWx1ZSBdIG9mIHBhcnNlci5hc3NvY2lhdGlvbnMgKSB7XG5cblx0XHRcdFx0XHRpZiAoIGtleSBpbnN0YW5jZW9mIE1hdGVyaWFsIHx8IGtleSBpbnN0YW5jZW9mIFRleHR1cmUgKSB7XG5cblx0XHRcdFx0XHRcdHJlZHVjZWRBc3NvY2lhdGlvbnMuc2V0KCBrZXksIHZhbHVlICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdG5vZGUudHJhdmVyc2UoICggbm9kZSApID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IG1hcHBpbmdzID0gcGFyc2VyLmFzc29jaWF0aW9ucy5nZXQoIG5vZGUgKTtcblxuXHRcdFx0XHRcdGlmICggbWFwcGluZ3MgIT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdFx0cmVkdWNlZEFzc29jaWF0aW9ucy5zZXQoIG5vZGUsIG1hcHBpbmdzICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdHJldHVybiByZWR1Y2VkQXNzb2NpYXRpb25zO1xuXG5cdFx0XHR9O1xuXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zID0gcmVkdWNlQXNzb2NpYXRpb25zKCBzY2VuZSApO1xuXG5cdFx0XHRyZXR1cm4gc2NlbmU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7R0xURi5QcmltaXRpdmV9IHByaW1pdGl2ZURlZlxuICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUJvdW5kcyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiwgcGFyc2VyICkge1xuXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBwcmltaXRpdmVEZWYuYXR0cmlidXRlcztcblxuXHRjb25zdCBib3ggPSBuZXcgQm94MygpO1xuXG5cdGlmICggYXR0cmlidXRlcy5QT1NJVElPTiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0Y29uc3QgYWNjZXNzb3IgPSBwYXJzZXIuanNvbi5hY2Nlc3NvcnNbIGF0dHJpYnV0ZXMuUE9TSVRJT04gXTtcblxuXHRcdGNvbnN0IG1pbiA9IGFjY2Vzc29yLm1pbjtcblx0XHRjb25zdCBtYXggPSBhY2Nlc3Nvci5tYXg7XG5cblx0XHQvLyBnbFRGIHJlcXVpcmVzICdtaW4nIGFuZCAnbWF4JywgYnV0IFZSTSAod2hpY2ggZXh0ZW5kcyBnbFRGKSBjdXJyZW50bHkgaWdub3JlcyB0aGF0IHJlcXVpcmVtZW50LlxuXG5cdFx0aWYgKCBtaW4gIT09IHVuZGVmaW5lZCAmJiBtYXggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ym94LnNldChcblx0XHRcdFx0bmV3IFZlY3RvcjMoIG1pblsgMCBdLCBtaW5bIDEgXSwgbWluWyAyIF0gKSxcblx0XHRcdFx0bmV3IFZlY3RvcjMoIG1heFsgMCBdLCBtYXhbIDEgXSwgbWF4WyAyIF0gKVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBhY2Nlc3Nvci5ub3JtYWxpemVkICkge1xuXG5cdFx0XHRcdGNvbnN0IGJveFNjYWxlID0gZ2V0Tm9ybWFsaXplZENvbXBvbmVudFNjYWxlKCBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUgXSApO1xuXHRcdFx0XHRib3gubWluLm11bHRpcGx5U2NhbGFyKCBib3hTY2FsZSApO1xuXHRcdFx0XHRib3gubWF4Lm11bHRpcGx5U2NhbGFyKCBib3hTY2FsZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBNaXNzaW5nIG1pbi9tYXggcHJvcGVydGllcyBmb3IgYWNjZXNzb3IgUE9TSVRJT04uJyApO1xuXG5cdFx0XHRyZXR1cm47XG5cblx0XHR9XG5cblx0fSBlbHNlIHtcblxuXHRcdHJldHVybjtcblxuXHR9XG5cblx0Y29uc3QgdGFyZ2V0cyA9IHByaW1pdGl2ZURlZi50YXJnZXRzO1xuXG5cdGlmICggdGFyZ2V0cyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0Y29uc3QgbWF4RGlzcGxhY2VtZW50ID0gbmV3IFZlY3RvcjMoKTtcblx0XHRjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHRhcmdldHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHRhcmdldCA9IHRhcmdldHNbIGkgXTtcblxuXHRcdFx0aWYgKCB0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBhY2Nlc3NvciA9IHBhcnNlci5qc29uLmFjY2Vzc29yc1sgdGFyZ2V0LlBPU0lUSU9OIF07XG5cdFx0XHRcdGNvbnN0IG1pbiA9IGFjY2Vzc29yLm1pbjtcblx0XHRcdFx0Y29uc3QgbWF4ID0gYWNjZXNzb3IubWF4O1xuXG5cdFx0XHRcdC8vIGdsVEYgcmVxdWlyZXMgJ21pbicgYW5kICdtYXgnLCBidXQgVlJNICh3aGljaCBleHRlbmRzIGdsVEYpIGN1cnJlbnRseSBpZ25vcmVzIHRoYXQgcmVxdWlyZW1lbnQuXG5cblx0XHRcdFx0aWYgKCBtaW4gIT09IHVuZGVmaW5lZCAmJiBtYXggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdC8vIHdlIG5lZWQgdG8gZ2V0IG1heCBvZiBhYnNvbHV0ZSBjb21wb25lbnRzIGJlY2F1c2UgdGFyZ2V0IHdlaWdodCBpcyBbLTEsMV1cblx0XHRcdFx0XHR2ZWN0b3Iuc2V0WCggTWF0aC5tYXgoIE1hdGguYWJzKCBtaW5bIDAgXSApLCBNYXRoLmFicyggbWF4WyAwIF0gKSApICk7XG5cdFx0XHRcdFx0dmVjdG9yLnNldFkoIE1hdGgubWF4KCBNYXRoLmFicyggbWluWyAxIF0gKSwgTWF0aC5hYnMoIG1heFsgMSBdICkgKSApO1xuXHRcdFx0XHRcdHZlY3Rvci5zZXRaKCBNYXRoLm1heCggTWF0aC5hYnMoIG1pblsgMiBdICksIE1hdGguYWJzKCBtYXhbIDIgXSApICkgKTtcblxuXG5cdFx0XHRcdFx0aWYgKCBhY2Nlc3Nvci5ub3JtYWxpemVkICkge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBib3hTY2FsZSA9IGdldE5vcm1hbGl6ZWRDb21wb25lbnRTY2FsZSggV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3Nvci5jb21wb25lbnRUeXBlIF0gKTtcblx0XHRcdFx0XHRcdHZlY3Rvci5tdWx0aXBseVNjYWxhciggYm94U2NhbGUgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIE5vdGU6IHRoaXMgYXNzdW1lcyB0aGF0IHRoZSBzdW0gb2YgYWxsIHdlaWdodHMgaXMgYXQgbW9zdCAxLiBUaGlzIGlzbid0IHF1aXRlIGNvcnJlY3QgLSBpdCdzIG1vcmUgY29uc2VydmF0aXZlXG5cdFx0XHRcdFx0Ly8gdG8gYXNzdW1lIHRoYXQgZWFjaCB0YXJnZXQgY2FuIGhhdmUgYSBtYXggd2VpZ2h0IG9mIDEuIEhvd2V2ZXIsIGZvciBzb21lIHVzZSBjYXNlcyAtIG5vdGFibHksIHdoZW4gbW9ycGggdGFyZ2V0c1xuXHRcdFx0XHRcdC8vIGFyZSB1c2VkIHRvIGltcGxlbWVudCBrZXktZnJhbWUgYW5pbWF0aW9ucyBhbmQgYXMgc3VjaCBvbmx5IHR3byBhcmUgYWN0aXZlIGF0IGEgdGltZSAtIHRoaXMgcmVzdWx0cyBpbiB2ZXJ5IGxhcmdlXG5cdFx0XHRcdFx0Ly8gYm94ZXMuIFNvIGZvciBub3cgd2UgbWFrZSBhIGJveCB0aGF0J3Mgc29tZXRpbWVzIGEgdG91Y2ggdG9vIHNtYWxsIGJ1dCBpcyBob3BlZnVsbHkgbW9zdGx5IG9mIHJlYXNvbmFibGUgc2l6ZS5cblx0XHRcdFx0XHRtYXhEaXNwbGFjZW1lbnQubWF4KCB2ZWN0b3IgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBtaW4vbWF4IHByb3BlcnRpZXMgZm9yIGFjY2Vzc29yIFBPU0lUSU9OLicgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vIEFzIHBlciBjb21tZW50IGFib3ZlIHRoaXMgYm94IGlzbid0IGNvbnNlcnZhdGl2ZSwgYnV0IGhhcyBhIHJlYXNvbmFibGUgc2l6ZSBmb3IgYSB2ZXJ5IGxhcmdlIG51bWJlciBvZiBtb3JwaCB0YXJnZXRzLlxuXHRcdGJveC5leHBhbmRCeVZlY3RvciggbWF4RGlzcGxhY2VtZW50ICk7XG5cblx0fVxuXG5cdGdlb21ldHJ5LmJvdW5kaW5nQm94ID0gYm94O1xuXG5cdGNvbnN0IHNwaGVyZSA9IG5ldyBTcGhlcmUoKTtcblxuXHRib3guZ2V0Q2VudGVyKCBzcGhlcmUuY2VudGVyICk7XG5cdHNwaGVyZS5yYWRpdXMgPSBib3gubWluLmRpc3RhbmNlVG8oIGJveC5tYXggKSAvIDI7XG5cblx0Z2VvbWV0cnkuYm91bmRpbmdTcGhlcmUgPSBzcGhlcmU7XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxuICogQHBhcmFtIHtHTFRGLlByaW1pdGl2ZX0gcHJpbWl0aXZlRGVmXG4gKiBAcGFyYW0ge0dMVEZQYXJzZXJ9IHBhcnNlclxuICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJHZW9tZXRyeT59XG4gKi9cbmZ1bmN0aW9uIGFkZFByaW1pdGl2ZUF0dHJpYnV0ZXMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlciApIHtcblxuXHRjb25zdCBhdHRyaWJ1dGVzID0gcHJpbWl0aXZlRGVmLmF0dHJpYnV0ZXM7XG5cblx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGFzc2lnbkF0dHJpYnV0ZUFjY2Vzc29yKCBhY2Nlc3NvckluZGV4LCBhdHRyaWJ1dGVOYW1lICkge1xuXG5cdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBhY2Nlc3NvckluZGV4IClcblx0XHRcdC50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29yICkge1xuXG5cdFx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZSggYXR0cmlidXRlTmFtZSwgYWNjZXNzb3IgKTtcblxuXHRcdFx0fSApO1xuXG5cdH1cblxuXHRmb3IgKCBjb25zdCBnbHRmQXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzICkge1xuXG5cdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgZ2x0ZkF0dHJpYnV0ZU5hbWUgXSB8fCBnbHRmQXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gU2tpcCBhdHRyaWJ1dGVzIGFscmVhZHkgcHJvdmlkZWQgYnkgZS5nLiBEcmFjbyBleHRlbnNpb24uXG5cdFx0aWYgKCB0aHJlZUF0dHJpYnV0ZU5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcyApIGNvbnRpbnVlO1xuXG5cdFx0cGVuZGluZy5wdXNoKCBhc3NpZ25BdHRyaWJ1dGVBY2Nlc3NvciggYXR0cmlidXRlc1sgZ2x0ZkF0dHJpYnV0ZU5hbWUgXSwgdGhyZWVBdHRyaWJ1dGVOYW1lICkgKTtcblxuXHR9XG5cblx0aWYgKCBwcmltaXRpdmVEZWYuaW5kaWNlcyAhPT0gdW5kZWZpbmVkICYmICEgZ2VvbWV0cnkuaW5kZXggKSB7XG5cblx0XHRjb25zdCBhY2Nlc3NvciA9IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBwcmltaXRpdmVEZWYuaW5kaWNlcyApLnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3IgKSB7XG5cblx0XHRcdGdlb21ldHJ5LnNldEluZGV4KCBhY2Nlc3NvciApO1xuXG5cdFx0fSApO1xuXG5cdFx0cGVuZGluZy5wdXNoKCBhY2Nlc3NvciApO1xuXG5cdH1cblxuXHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmICk7XG5cblx0Y29tcHV0ZUJvdW5kcyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiwgcGFyc2VyICk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHByaW1pdGl2ZURlZi50YXJnZXRzICE9PSB1bmRlZmluZWRcblx0XHRcdD8gYWRkTW9ycGhUYXJnZXRzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLnRhcmdldHMsIHBhcnNlciApXG5cdFx0XHQ6IGdlb21ldHJ5O1xuXG5cdH0gKTtcblxufVxuXG5leHBvcnQgeyBHTFRGTG9hZGVyIH07XG4iLCJpbXBvcnQge1xuXHRCdWZmZXJBdHRyaWJ1dGUsXG5cdEJ1ZmZlckdlb21ldHJ5LFxuXHRGbG9hdDMyQnVmZmVyQXR0cmlidXRlLFxuXHRJbnN0YW5jZWRCdWZmZXJBdHRyaWJ1dGUsXG5cdEludGVybGVhdmVkQnVmZmVyLFxuXHRJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSxcblx0VHJpYW5nbGVGYW5EcmF3TW9kZSxcblx0VHJpYW5nbGVTdHJpcERyYXdNb2RlLFxuXHRUcmlhbmdsZXNEcmF3TW9kZSxcblx0VmVjdG9yMyxcbn0gZnJvbSAndGhyZWUnO1xuXG5mdW5jdGlvbiBjb21wdXRlVGFuZ2VudHMoKSB7XG5cblx0dGhyb3cgbmV3IEVycm9yKCAnQnVmZmVyR2VvbWV0cnlVdGlsczogY29tcHV0ZVRhbmdlbnRzIHJlbmFtZWQgdG8gY29tcHV0ZU1pa2tUU3BhY2VUYW5nZW50cy4nICk7XG5cbn1cblxuZnVuY3Rpb24gY29tcHV0ZU1pa2tUU3BhY2VUYW5nZW50cyggZ2VvbWV0cnksIE1pa2tUU3BhY2UsIG5lZ2F0ZVNpZ24gPSB0cnVlICkge1xuXG5cdGlmICggISBNaWtrVFNwYWNlIHx8ICEgTWlra1RTcGFjZS5pc1JlYWR5ICkge1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKCAnQnVmZmVyR2VvbWV0cnlVdGlsczogSW5pdGlhbGl6ZWQgTWlra1RTcGFjZSBsaWJyYXJ5IHJlcXVpcmVkLicgKTtcblxuXHR9XG5cblx0aWYgKCAhIGdlb21ldHJ5Lmhhc0F0dHJpYnV0ZSggJ3Bvc2l0aW9uJyApIHx8ICEgZ2VvbWV0cnkuaGFzQXR0cmlidXRlKCAnbm9ybWFsJyApIHx8ICEgZ2VvbWV0cnkuaGFzQXR0cmlidXRlKCAndXYnICkgKSB7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoICdCdWZmZXJHZW9tZXRyeVV0aWxzOiBUYW5nZW50cyByZXF1aXJlIFwicG9zaXRpb25cIiwgXCJub3JtYWxcIiwgYW5kIFwidXZcIiBhdHRyaWJ1dGVzLicgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0QXR0cmlidXRlQXJyYXkoIGF0dHJpYnV0ZSApIHtcblxuXHRcdGlmICggYXR0cmlidXRlLm5vcm1hbGl6ZWQgfHwgYXR0cmlidXRlLmlzSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUgKSB7XG5cblx0XHRcdGNvbnN0IGRzdEFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSggYXR0cmlidXRlLmdldENvdW50KCkgKiBhdHRyaWJ1dGUuaXRlbVNpemUgKTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBqID0gMDsgaSA8IGF0dHJpYnV0ZS5nZXRDb3VudCgpOyBpICsrICkge1xuXG5cdFx0XHRcdGRzdEFycmF5WyBqICsrIF0gPSBhdHRyaWJ1dGUuZ2V0WCggaSApO1xuXHRcdFx0XHRkc3RBcnJheVsgaiArKyBdID0gYXR0cmlidXRlLmdldFkoIGkgKTtcblxuXHRcdFx0XHRpZiAoIGF0dHJpYnV0ZS5pdGVtU2l6ZSA+IDIgKSB7XG5cblx0XHRcdFx0XHRkc3RBcnJheVsgaiArKyBdID0gYXR0cmlidXRlLmdldFooIGkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGRzdEFycmF5O1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBhdHRyaWJ1dGUuYXJyYXkgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkgKSB7XG5cblx0XHRcdHJldHVybiBhdHRyaWJ1dGUuYXJyYXk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEZsb2F0MzJBcnJheSggYXR0cmlidXRlLmFycmF5ICk7XG5cblx0fVxuXG5cdC8vIE1pa2tUU3BhY2UgYWxnb3JpdGhtIHJlcXVpcmVzIG5vbi1pbmRleGVkIGlucHV0LlxuXG5cdGNvbnN0IF9nZW9tZXRyeSA9IGdlb21ldHJ5LmluZGV4ID8gZ2VvbWV0cnkudG9Ob25JbmRleGVkKCkgOiBnZW9tZXRyeTtcblxuXHQvLyBDb21wdXRlIHZlcnRleCB0YW5nZW50cy5cblxuXHRjb25zdCB0YW5nZW50cyA9IE1pa2tUU3BhY2UuZ2VuZXJhdGVUYW5nZW50cyhcblxuXHRcdGdldEF0dHJpYnV0ZUFycmF5KCBfZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiApLFxuXHRcdGdldEF0dHJpYnV0ZUFycmF5KCBfZ2VvbWV0cnkuYXR0cmlidXRlcy5ub3JtYWwgKSxcblx0XHRnZXRBdHRyaWJ1dGVBcnJheSggX2dlb21ldHJ5LmF0dHJpYnV0ZXMudXYgKVxuXG5cdCk7XG5cblx0Ly8gVGV4dHVyZSBjb29yZGluYXRlIGNvbnZlbnRpb24gb2YgZ2xURiBkaWZmZXJzIGZyb20gdGhlIGFwcGFyZW50XG5cdC8vIGRlZmF1bHQgb2YgdGhlIE1pa2tUU3BhY2UgbGlicmFyeTsgLncgY29tcG9uZW50IG11c3QgYmUgZmxpcHBlZC5cblxuXHRpZiAoIG5lZ2F0ZVNpZ24gKSB7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDM7IGkgPCB0YW5nZW50cy5sZW5ndGg7IGkgKz0gNCApIHtcblxuXHRcdFx0dGFuZ2VudHNbIGkgXSAqPSAtIDE7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vXG5cblx0X2dlb21ldHJ5LnNldEF0dHJpYnV0ZSggJ3RhbmdlbnQnLCBuZXcgQnVmZmVyQXR0cmlidXRlKCB0YW5nZW50cywgNCApICk7XG5cblx0aWYgKCBnZW9tZXRyeSAhPT0gX2dlb21ldHJ5ICkge1xuXG5cdFx0Z2VvbWV0cnkuY29weSggX2dlb21ldHJ5ICk7XG5cblx0fVxuXG5cdHJldHVybiBnZW9tZXRyeTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSAge0FycmF5PEJ1ZmZlckdlb21ldHJ5Pn0gZ2VvbWV0cmllc1xuICogQHBhcmFtICB7Qm9vbGVhbn0gdXNlR3JvdXBzXG4gKiBAcmV0dXJuIHtCdWZmZXJHZW9tZXRyeX1cbiAqL1xuZnVuY3Rpb24gbWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCBnZW9tZXRyaWVzLCB1c2VHcm91cHMgPSBmYWxzZSApIHtcblxuXHRjb25zdCBpc0luZGV4ZWQgPSBnZW9tZXRyaWVzWyAwIF0uaW5kZXggIT09IG51bGw7XG5cblx0Y29uc3QgYXR0cmlidXRlc1VzZWQgPSBuZXcgU2V0KCBPYmplY3Qua2V5cyggZ2VvbWV0cmllc1sgMCBdLmF0dHJpYnV0ZXMgKSApO1xuXHRjb25zdCBtb3JwaEF0dHJpYnV0ZXNVc2VkID0gbmV3IFNldCggT2JqZWN0LmtleXMoIGdlb21ldHJpZXNbIDAgXS5tb3JwaEF0dHJpYnV0ZXMgKSApO1xuXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSB7fTtcblx0Y29uc3QgbW9ycGhBdHRyaWJ1dGVzID0ge307XG5cblx0Y29uc3QgbW9ycGhUYXJnZXRzUmVsYXRpdmUgPSBnZW9tZXRyaWVzWyAwIF0ubW9ycGhUYXJnZXRzUmVsYXRpdmU7XG5cblx0Y29uc3QgbWVyZ2VkR2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcblxuXHRsZXQgb2Zmc2V0ID0gMDtcblxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBnZW9tZXRyaWVzLmxlbmd0aDsgKysgaSApIHtcblxuXHRcdGNvbnN0IGdlb21ldHJ5ID0gZ2VvbWV0cmllc1sgaSBdO1xuXHRcdGxldCBhdHRyaWJ1dGVzQ291bnQgPSAwO1xuXG5cdFx0Ly8gZW5zdXJlIHRoYXQgYWxsIGdlb21ldHJpZXMgYXJlIGluZGV4ZWQsIG9yIG5vbmVcblxuXHRcdGlmICggaXNJbmRleGVkICE9PSAoIGdlb21ldHJ5LmluZGV4ICE9PSBudWxsICkgKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArIGkgKyAnLiBBbGwgZ2VvbWV0cmllcyBtdXN0IGhhdmUgY29tcGF0aWJsZSBhdHRyaWJ1dGVzOyBtYWtlIHN1cmUgaW5kZXggYXR0cmlidXRlIGV4aXN0cyBhbW9uZyBhbGwgZ2VvbWV0cmllcywgb3IgaW4gbm9uZSBvZiB0aGVtLicgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXG5cdFx0Ly8gZ2F0aGVyIGF0dHJpYnV0ZXMsIGV4aXQgZWFybHkgaWYgdGhleSdyZSBkaWZmZXJlbnRcblxuXHRcdGZvciAoIGNvbnN0IG5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcyApIHtcblxuXHRcdFx0aWYgKCAhIGF0dHJpYnV0ZXNVc2VkLmhhcyggbmFtZSApICkge1xuXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArIGkgKyAnLiBBbGwgZ2VvbWV0cmllcyBtdXN0IGhhdmUgY29tcGF0aWJsZSBhdHRyaWJ1dGVzOyBtYWtlIHN1cmUgXCInICsgbmFtZSArICdcIiBhdHRyaWJ1dGUgZXhpc3RzIGFtb25nIGFsbCBnZW9tZXRyaWVzLCBvciBpbiBub25lIG9mIHRoZW0uJyApO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGF0dHJpYnV0ZXNbIG5hbWUgXSA9PT0gdW5kZWZpbmVkICkgYXR0cmlidXRlc1sgbmFtZSBdID0gW107XG5cblx0XHRcdGF0dHJpYnV0ZXNbIG5hbWUgXS5wdXNoKCBnZW9tZXRyeS5hdHRyaWJ1dGVzWyBuYW1lIF0gKTtcblxuXHRcdFx0YXR0cmlidXRlc0NvdW50ICsrO1xuXG5cdFx0fVxuXG5cdFx0Ly8gZW5zdXJlIGdlb21ldHJpZXMgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2YgYXR0cmlidXRlc1xuXG5cdFx0aWYgKCBhdHRyaWJ1dGVzQ291bnQgIT09IGF0dHJpYnV0ZXNVc2VkLnNpemUgKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArIGkgKyAnLiBNYWtlIHN1cmUgYWxsIGdlb21ldHJpZXMgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2YgYXR0cmlidXRlcy4nICk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdC8vIGdhdGhlciBtb3JwaCBhdHRyaWJ1dGVzLCBleGl0IGVhcmx5IGlmIHRoZXkncmUgZGlmZmVyZW50XG5cblx0XHRpZiAoIG1vcnBoVGFyZ2V0c1JlbGF0aXZlICE9PSBnZW9tZXRyeS5tb3JwaFRhcmdldHNSZWxhdGl2ZSApIHtcblxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKSBmYWlsZWQgd2l0aCBnZW9tZXRyeSBhdCBpbmRleCAnICsgaSArICcuIC5tb3JwaFRhcmdldHNSZWxhdGl2ZSBtdXN0IGJlIGNvbnNpc3RlbnQgdGhyb3VnaG91dCBhbGwgZ2VvbWV0cmllcy4nICk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdGZvciAoIGNvbnN0IG5hbWUgaW4gZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzICkge1xuXG5cdFx0XHRpZiAoICEgbW9ycGhBdHRyaWJ1dGVzVXNlZC5oYXMoIG5hbWUgKSApIHtcblxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aXRoIGdlb21ldHJ5IGF0IGluZGV4ICcgKyBpICsgJy4gIC5tb3JwaEF0dHJpYnV0ZXMgbXVzdCBiZSBjb25zaXN0ZW50IHRocm91Z2hvdXQgYWxsIGdlb21ldHJpZXMuJyApO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG1vcnBoQXR0cmlidXRlc1sgbmFtZSBdID09PSB1bmRlZmluZWQgKSBtb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXSA9IFtdO1xuXG5cdFx0XHRtb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXS5wdXNoKCBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB1c2VHcm91cHMgKSB7XG5cblx0XHRcdGxldCBjb3VudDtcblxuXHRcdFx0aWYgKCBpc0luZGV4ZWQgKSB7XG5cblx0XHRcdFx0Y291bnQgPSBnZW9tZXRyeS5pbmRleC5jb3VudDtcblxuXHRcdFx0fSBlbHNlIGlmICggZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvdW50ID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aXRoIGdlb21ldHJ5IGF0IGluZGV4ICcgKyBpICsgJy4gVGhlIGdlb21ldHJ5IG11c3QgaGF2ZSBlaXRoZXIgYW4gaW5kZXggb3IgYSBwb3NpdGlvbiBhdHRyaWJ1dGUnICk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1lcmdlZEdlb21ldHJ5LmFkZEdyb3VwKCBvZmZzZXQsIGNvdW50LCBpICk7XG5cblx0XHRcdG9mZnNldCArPSBjb3VudDtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly8gbWVyZ2UgaW5kaWNlc1xuXG5cdGlmICggaXNJbmRleGVkICkge1xuXG5cdFx0bGV0IGluZGV4T2Zmc2V0ID0gMDtcblx0XHRjb25zdCBtZXJnZWRJbmRleCA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgZ2VvbWV0cmllcy5sZW5ndGg7ICsrIGkgKSB7XG5cblx0XHRcdGNvbnN0IGluZGV4ID0gZ2VvbWV0cmllc1sgaSBdLmluZGV4O1xuXG5cdFx0XHRmb3IgKCBsZXQgaiA9IDA7IGogPCBpbmRleC5jb3VudDsgKysgaiApIHtcblxuXHRcdFx0XHRtZXJnZWRJbmRleC5wdXNoKCBpbmRleC5nZXRYKCBqICkgKyBpbmRleE9mZnNldCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGluZGV4T2Zmc2V0ICs9IGdlb21ldHJpZXNbIGkgXS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50O1xuXG5cdFx0fVxuXG5cdFx0bWVyZ2VkR2VvbWV0cnkuc2V0SW5kZXgoIG1lcmdlZEluZGV4ICk7XG5cblx0fVxuXG5cdC8vIG1lcmdlIGF0dHJpYnV0ZXNcblxuXHRmb3IgKCBjb25zdCBuYW1lIGluIGF0dHJpYnV0ZXMgKSB7XG5cblx0XHRjb25zdCBtZXJnZWRBdHRyaWJ1dGUgPSBtZXJnZUJ1ZmZlckF0dHJpYnV0ZXMoIGF0dHJpYnV0ZXNbIG5hbWUgXSApO1xuXG5cdFx0aWYgKCAhIG1lcmdlZEF0dHJpYnV0ZSApIHtcblxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKSBmYWlsZWQgd2hpbGUgdHJ5aW5nIHRvIG1lcmdlIHRoZSAnICsgbmFtZSArICcgYXR0cmlidXRlLicgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXG5cdFx0bWVyZ2VkR2VvbWV0cnkuc2V0QXR0cmlidXRlKCBuYW1lLCBtZXJnZWRBdHRyaWJ1dGUgKTtcblxuXHR9XG5cblx0Ly8gbWVyZ2UgbW9ycGggYXR0cmlidXRlc1xuXG5cdGZvciAoIGNvbnN0IG5hbWUgaW4gbW9ycGhBdHRyaWJ1dGVzICkge1xuXG5cdFx0Y29uc3QgbnVtTW9ycGhUYXJnZXRzID0gbW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF1bIDAgXS5sZW5ndGg7XG5cblx0XHRpZiAoIG51bU1vcnBoVGFyZ2V0cyA9PT0gMCApIGJyZWFrO1xuXG5cdFx0bWVyZ2VkR2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzID0gbWVyZ2VkR2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzIHx8IHt9O1xuXHRcdG1lcmdlZEdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1sgbmFtZSBdID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBudW1Nb3JwaFRhcmdldHM7ICsrIGkgKSB7XG5cblx0XHRcdGNvbnN0IG1vcnBoQXR0cmlidXRlc1RvTWVyZ2UgPSBbXTtcblxuXHRcdFx0Zm9yICggbGV0IGogPSAwOyBqIDwgbW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0ubGVuZ3RoOyArKyBqICkge1xuXG5cdFx0XHRcdG1vcnBoQXR0cmlidXRlc1RvTWVyZ2UucHVzaCggbW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF1bIGogXVsgaSBdICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbWVyZ2VkTW9ycGhBdHRyaWJ1dGUgPSBtZXJnZUJ1ZmZlckF0dHJpYnV0ZXMoIG1vcnBoQXR0cmlidXRlc1RvTWVyZ2UgKTtcblxuXHRcdFx0aWYgKCAhIG1lcmdlZE1vcnBoQXR0cmlidXRlICkge1xuXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdoaWxlIHRyeWluZyB0byBtZXJnZSB0aGUgJyArIG5hbWUgKyAnIG1vcnBoQXR0cmlidXRlLicgKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRcdH1cblxuXHRcdFx0bWVyZ2VkR2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0ucHVzaCggbWVyZ2VkTW9ycGhBdHRyaWJ1dGUgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIG1lcmdlZEdlb21ldHJ5O1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxCdWZmZXJBdHRyaWJ1dGU+fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtCdWZmZXJBdHRyaWJ1dGV9XG4gKi9cbmZ1bmN0aW9uIG1lcmdlQnVmZmVyQXR0cmlidXRlcyggYXR0cmlidXRlcyApIHtcblxuXHRsZXQgVHlwZWRBcnJheTtcblx0bGV0IGl0ZW1TaXplO1xuXHRsZXQgbm9ybWFsaXplZDtcblx0bGV0IGFycmF5TGVuZ3RoID0gMDtcblxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgKysgaSApIHtcblxuXHRcdGNvbnN0IGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbIGkgXTtcblxuXHRcdGlmICggYXR0cmlidXRlLmlzSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUgKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJBdHRyaWJ1dGVzKCkgZmFpbGVkLiBJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZXMgYXJlIG5vdCBzdXBwb3J0ZWQuJyApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0XHRpZiAoIFR5cGVkQXJyYXkgPT09IHVuZGVmaW5lZCApIFR5cGVkQXJyYXkgPSBhdHRyaWJ1dGUuYXJyYXkuY29uc3RydWN0b3I7XG5cdFx0aWYgKCBUeXBlZEFycmF5ICE9PSBhdHRyaWJ1dGUuYXJyYXkuY29uc3RydWN0b3IgKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJBdHRyaWJ1dGVzKCkgZmFpbGVkLiBCdWZmZXJBdHRyaWJ1dGUuYXJyYXkgbXVzdCBiZSBvZiBjb25zaXN0ZW50IGFycmF5IHR5cGVzIGFjcm9zcyBtYXRjaGluZyBhdHRyaWJ1dGVzLicgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBpdGVtU2l6ZSA9PT0gdW5kZWZpbmVkICkgaXRlbVNpemUgPSBhdHRyaWJ1dGUuaXRlbVNpemU7XG5cdFx0aWYgKCBpdGVtU2l6ZSAhPT0gYXR0cmlidXRlLml0ZW1TaXplICkge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyQXR0cmlidXRlcygpIGZhaWxlZC4gQnVmZmVyQXR0cmlidXRlLml0ZW1TaXplIG11c3QgYmUgY29uc2lzdGVudCBhY3Jvc3MgbWF0Y2hpbmcgYXR0cmlidXRlcy4nICk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdGlmICggbm9ybWFsaXplZCA9PT0gdW5kZWZpbmVkICkgbm9ybWFsaXplZCA9IGF0dHJpYnV0ZS5ub3JtYWxpemVkO1xuXHRcdGlmICggbm9ybWFsaXplZCAhPT0gYXR0cmlidXRlLm5vcm1hbGl6ZWQgKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJBdHRyaWJ1dGVzKCkgZmFpbGVkLiBCdWZmZXJBdHRyaWJ1dGUubm9ybWFsaXplZCBtdXN0IGJlIGNvbnNpc3RlbnQgYWNyb3NzIG1hdGNoaW5nIGF0dHJpYnV0ZXMuJyApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0XHRhcnJheUxlbmd0aCArPSBhdHRyaWJ1dGUuYXJyYXkubGVuZ3RoO1xuXG5cdH1cblxuXHRjb25zdCBhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBhcnJheUxlbmd0aCApO1xuXHRsZXQgb2Zmc2V0ID0gMDtcblxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgKysgaSApIHtcblxuXHRcdGFycmF5LnNldCggYXR0cmlidXRlc1sgaSBdLmFycmF5LCBvZmZzZXQgKTtcblxuXHRcdG9mZnNldCArPSBhdHRyaWJ1dGVzWyBpIF0uYXJyYXkubGVuZ3RoO1xuXG5cdH1cblxuXHRyZXR1cm4gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYXJyYXksIGl0ZW1TaXplLCBub3JtYWxpemVkICk7XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0J1ZmZlckF0dHJpYnV0ZX1cbiAqIEByZXR1cm4ge0J1ZmZlckF0dHJpYnV0ZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDbG9uZUF0dHJpYnV0ZSggYXR0cmlidXRlICkge1xuXG5cdGlmICggYXR0cmlidXRlLmlzSW5zdGFuY2VkSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUgfHwgYXR0cmlidXRlLmlzSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUgKSB7XG5cblx0XHRyZXR1cm4gZGVpbnRlcmxlYXZlQXR0cmlidXRlKCBhdHRyaWJ1dGUgKTtcblxuXHR9XG5cblx0aWYgKCBhdHRyaWJ1dGUuaXNJbnN0YW5jZWRCdWZmZXJBdHRyaWJ1dGUgKSB7XG5cblx0XHRyZXR1cm4gbmV3IEluc3RhbmNlZEJ1ZmZlckF0dHJpYnV0ZSgpLmNvcHkoIGF0dHJpYnV0ZSApO1xuXG5cdH1cblxuXHRyZXR1cm4gbmV3IEJ1ZmZlckF0dHJpYnV0ZSgpLmNvcHkoIGF0dHJpYnV0ZSApO1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxCdWZmZXJBdHRyaWJ1dGU+fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtBcnJheTxJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZT59XG4gKi9cbmZ1bmN0aW9uIGludGVybGVhdmVBdHRyaWJ1dGVzKCBhdHRyaWJ1dGVzICkge1xuXG5cdC8vIEludGVybGVhdmVzIHRoZSBwcm92aWRlZCBhdHRyaWJ1dGVzIGludG8gYW4gSW50ZXJsZWF2ZWRCdWZmZXIgYW5kIHJldHVybnNcblx0Ly8gYSBzZXQgb2YgSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGVzIGZvciBlYWNoIGF0dHJpYnV0ZVxuXHRsZXQgVHlwZWRBcnJheTtcblx0bGV0IGFycmF5TGVuZ3RoID0gMDtcblx0bGV0IHN0cmlkZSA9IDA7XG5cblx0Ly8gY2FsY3VsYXRlIHRoZSBsZW5ndGggYW5kIHR5cGUgb2YgdGhlIGludGVybGVhdmVkQnVmZmVyXG5cdGZvciAoIGxldCBpID0gMCwgbCA9IGF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgbDsgKysgaSApIHtcblxuXHRcdGNvbnN0IGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbIGkgXTtcblxuXHRcdGlmICggVHlwZWRBcnJheSA9PT0gdW5kZWZpbmVkICkgVHlwZWRBcnJheSA9IGF0dHJpYnV0ZS5hcnJheS5jb25zdHJ1Y3Rvcjtcblx0XHRpZiAoIFR5cGVkQXJyYXkgIT09IGF0dHJpYnV0ZS5hcnJheS5jb25zdHJ1Y3RvciApIHtcblxuXHRcdFx0Y29uc29sZS5lcnJvciggJ0F0dHJpYnV0ZUJ1ZmZlcnMgb2YgZGlmZmVyZW50IHR5cGVzIGNhbm5vdCBiZSBpbnRlcmxlYXZlZCcgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXG5cdFx0YXJyYXlMZW5ndGggKz0gYXR0cmlidXRlLmFycmF5Lmxlbmd0aDtcblx0XHRzdHJpZGUgKz0gYXR0cmlidXRlLml0ZW1TaXplO1xuXG5cdH1cblxuXHQvLyBDcmVhdGUgdGhlIHNldCBvZiBidWZmZXIgYXR0cmlidXRlc1xuXHRjb25zdCBpbnRlcmxlYXZlZEJ1ZmZlciA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlciggbmV3IFR5cGVkQXJyYXkoIGFycmF5TGVuZ3RoICksIHN0cmlkZSApO1xuXHRsZXQgb2Zmc2V0ID0gMDtcblx0Y29uc3QgcmVzID0gW107XG5cdGNvbnN0IGdldHRlcnMgPSBbICdnZXRYJywgJ2dldFknLCAnZ2V0WicsICdnZXRXJyBdO1xuXHRjb25zdCBzZXR0ZXJzID0gWyAnc2V0WCcsICdzZXRZJywgJ3NldFonLCAnc2V0VycgXTtcblxuXHRmb3IgKCBsZXQgaiA9IDAsIGwgPSBhdHRyaWJ1dGVzLmxlbmd0aDsgaiA8IGw7IGogKysgKSB7XG5cblx0XHRjb25zdCBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzWyBqIF07XG5cdFx0Y29uc3QgaXRlbVNpemUgPSBhdHRyaWJ1dGUuaXRlbVNpemU7XG5cdFx0Y29uc3QgY291bnQgPSBhdHRyaWJ1dGUuY291bnQ7XG5cdFx0Y29uc3QgaWJhID0gbmV3IEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlKCBpbnRlcmxlYXZlZEJ1ZmZlciwgaXRlbVNpemUsIG9mZnNldCwgYXR0cmlidXRlLm5vcm1hbGl6ZWQgKTtcblx0XHRyZXMucHVzaCggaWJhICk7XG5cblx0XHRvZmZzZXQgKz0gaXRlbVNpemU7XG5cblx0XHQvLyBNb3ZlIHRoZSBkYXRhIGZvciBlYWNoIGF0dHJpYnV0ZSBpbnRvIHRoZSBuZXcgaW50ZXJsZWF2ZWRCdWZmZXJcblx0XHQvLyBhdCB0aGUgYXBwcm9wcmlhdGUgb2Zmc2V0XG5cdFx0Zm9yICggbGV0IGMgPSAwOyBjIDwgY291bnQ7IGMgKysgKSB7XG5cblx0XHRcdGZvciAoIGxldCBrID0gMDsgayA8IGl0ZW1TaXplOyBrICsrICkge1xuXG5cdFx0XHRcdGliYVsgc2V0dGVyc1sgayBdIF0oIGMsIGF0dHJpYnV0ZVsgZ2V0dGVyc1sgayBdIF0oIGMgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiByZXM7XG5cbn1cblxuLy8gcmV0dXJucyBhIG5ldywgbm9uLWludGVybGVhdmVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIGF0dHJpYnV0ZVxuZXhwb3J0IGZ1bmN0aW9uIGRlaW50ZXJsZWF2ZUF0dHJpYnV0ZSggYXR0cmlidXRlICkge1xuXG5cdGNvbnN0IGNvbnMgPSBhdHRyaWJ1dGUuZGF0YS5hcnJheS5jb25zdHJ1Y3Rvcjtcblx0Y29uc3QgY291bnQgPSBhdHRyaWJ1dGUuY291bnQ7XG5cdGNvbnN0IGl0ZW1TaXplID0gYXR0cmlidXRlLml0ZW1TaXplO1xuXHRjb25zdCBub3JtYWxpemVkID0gYXR0cmlidXRlLm5vcm1hbGl6ZWQ7XG5cblx0Y29uc3QgYXJyYXkgPSBuZXcgY29ucyggY291bnQgKiBpdGVtU2l6ZSApO1xuXHRsZXQgbmV3QXR0cmlidXRlO1xuXHRpZiAoIGF0dHJpYnV0ZS5pc0luc3RhbmNlZEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlICkge1xuXG5cdFx0bmV3QXR0cmlidXRlID0gbmV3IEluc3RhbmNlZEJ1ZmZlckF0dHJpYnV0ZSggYXJyYXksIGl0ZW1TaXplLCBub3JtYWxpemVkLCBhdHRyaWJ1dGUubWVzaFBlckF0dHJpYnV0ZSApO1xuXG5cdH0gZWxzZSB7XG5cblx0XHRuZXdBdHRyaWJ1dGUgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBhcnJheSwgaXRlbVNpemUsIG5vcm1hbGl6ZWQgKTtcblxuXHR9XG5cblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgY291bnQ7IGkgKysgKSB7XG5cblx0XHRuZXdBdHRyaWJ1dGUuc2V0WCggaSwgYXR0cmlidXRlLmdldFgoIGkgKSApO1xuXG5cdFx0aWYgKCBpdGVtU2l6ZSA+PSAyICkge1xuXG5cdFx0XHRuZXdBdHRyaWJ1dGUuc2V0WSggaSwgYXR0cmlidXRlLmdldFkoIGkgKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBpdGVtU2l6ZSA+PSAzICkge1xuXG5cdFx0XHRuZXdBdHRyaWJ1dGUuc2V0WiggaSwgYXR0cmlidXRlLmdldFooIGkgKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBpdGVtU2l6ZSA+PSA0ICkge1xuXG5cdFx0XHRuZXdBdHRyaWJ1dGUuc2V0VyggaSwgYXR0cmlidXRlLmdldFcoIGkgKSApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gbmV3QXR0cmlidXRlO1xuXG59XG5cbi8vIGRlaW50ZXJsZWF2ZXMgYWxsIGF0dHJpYnV0ZXMgb24gdGhlIGdlb21ldHJ5XG5leHBvcnQgZnVuY3Rpb24gZGVpbnRlcmxlYXZlR2VvbWV0cnkoIGdlb21ldHJ5ICkge1xuXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzO1xuXHRjb25zdCBtb3JwaFRhcmdldHMgPSBnZW9tZXRyeS5tb3JwaFRhcmdldHM7XG5cdGNvbnN0IGF0dHJNYXAgPSBuZXcgTWFwKCk7XG5cblx0Zm9yICggY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMgKSB7XG5cblx0XHRjb25zdCBhdHRyID0gYXR0cmlidXRlc1sga2V5IF07XG5cdFx0aWYgKCBhdHRyLmlzSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUgKSB7XG5cblx0XHRcdGlmICggISBhdHRyTWFwLmhhcyggYXR0ciApICkge1xuXG5cdFx0XHRcdGF0dHJNYXAuc2V0KCBhdHRyLCBkZWludGVybGVhdmVBdHRyaWJ1dGUoIGF0dHIgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXNbIGtleSBdID0gYXR0ck1hcC5nZXQoIGF0dHIgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0Zm9yICggY29uc3Qga2V5IGluIG1vcnBoVGFyZ2V0cyApIHtcblxuXHRcdGNvbnN0IGF0dHIgPSBtb3JwaFRhcmdldHNbIGtleSBdO1xuXHRcdGlmICggYXR0ci5pc0ludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlICkge1xuXG5cdFx0XHRpZiAoICEgYXR0ck1hcC5oYXMoIGF0dHIgKSApIHtcblxuXHRcdFx0XHRhdHRyTWFwLnNldCggYXR0ciwgZGVpbnRlcmxlYXZlQXR0cmlidXRlKCBhdHRyICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtb3JwaFRhcmdldHNbIGtleSBdID0gYXR0ck1hcC5nZXQoIGF0dHIgKTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PEJ1ZmZlckdlb21ldHJ5Pn0gZ2VvbWV0cnlcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZXN0aW1hdGVCeXRlc1VzZWQoIGdlb21ldHJ5ICkge1xuXG5cdC8vIFJldHVybiB0aGUgZXN0aW1hdGVkIG1lbW9yeSB1c2VkIGJ5IHRoaXMgZ2VvbWV0cnkgaW4gYnl0ZXNcblx0Ly8gQ2FsY3VsYXRlIHVzaW5nIGl0ZW1TaXplLCBjb3VudCwgYW5kIEJZVEVTX1BFUl9FTEVNRU5UIHRvIGFjY291bnRcblx0Ly8gZm9yIEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlcy5cblx0bGV0IG1lbSA9IDA7XG5cdGZvciAoIGNvbnN0IG5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcyApIHtcblxuXHRcdGNvbnN0IGF0dHIgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcblx0XHRtZW0gKz0gYXR0ci5jb3VudCAqIGF0dHIuaXRlbVNpemUgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xuXG5cdH1cblxuXHRjb25zdCBpbmRpY2VzID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcblx0bWVtICs9IGluZGljZXMgPyBpbmRpY2VzLmNvdW50ICogaW5kaWNlcy5pdGVtU2l6ZSAqIGluZGljZXMuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQgOiAwO1xuXHRyZXR1cm4gbWVtO1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7bnVtYmVyfSB0b2xlcmFuY2VcbiAqIEByZXR1cm4ge0J1ZmZlckdlb21ldHJ5fVxuICovXG5mdW5jdGlvbiBtZXJnZVZlcnRpY2VzKCBnZW9tZXRyeSwgdG9sZXJhbmNlID0gMWUtNCApIHtcblxuXHR0b2xlcmFuY2UgPSBNYXRoLm1heCggdG9sZXJhbmNlLCBOdW1iZXIuRVBTSUxPTiApO1xuXG5cdC8vIEdlbmVyYXRlIGFuIGluZGV4IGJ1ZmZlciBpZiB0aGUgZ2VvbWV0cnkgZG9lc24ndCBoYXZlIG9uZSwgb3Igb3B0aW1pemUgaXRcblx0Ly8gaWYgaXQncyBhbHJlYWR5IGF2YWlsYWJsZS5cblx0Y29uc3QgaGFzaFRvSW5kZXggPSB7fTtcblx0Y29uc3QgaW5kaWNlcyA9IGdlb21ldHJ5LmdldEluZGV4KCk7XG5cdGNvbnN0IHBvc2l0aW9ucyA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJyApO1xuXHRjb25zdCB2ZXJ0ZXhDb3VudCA9IGluZGljZXMgPyBpbmRpY2VzLmNvdW50IDogcG9zaXRpb25zLmNvdW50O1xuXG5cdC8vIG5leHQgdmFsdWUgZm9yIHRyaWFuZ2xlIGluZGljZXNcblx0bGV0IG5leHRJbmRleCA9IDA7XG5cblx0Ly8gYXR0cmlidXRlcyBhbmQgbmV3IGF0dHJpYnV0ZSBhcnJheXNcblx0Y29uc3QgYXR0cmlidXRlTmFtZXMgPSBPYmplY3Qua2V5cyggZ2VvbWV0cnkuYXR0cmlidXRlcyApO1xuXHRjb25zdCB0bXBBdHRyaWJ1dGVzID0ge307XG5cdGNvbnN0IHRtcE1vcnBoQXR0cmlidXRlcyA9IHt9O1xuXHRjb25zdCBuZXdJbmRpY2VzID0gW107XG5cdGNvbnN0IGdldHRlcnMgPSBbICdnZXRYJywgJ2dldFknLCAnZ2V0WicsICdnZXRXJyBdO1xuXHRjb25zdCBzZXR0ZXJzID0gWyAnc2V0WCcsICdzZXRZJywgJ3NldFonLCAnc2V0VycgXTtcblxuXHQvLyBJbml0aWFsaXplIHRoZSBhcnJheXMsIGFsbG9jYXRpbmcgc3BhY2UgY29uc2VydmF0aXZlbHkuIEV4dHJhXG5cdC8vIHNwYWNlIHdpbGwgYmUgdHJpbW1lZCBpbiB0aGUgbGFzdCBzdGVwLlxuXHRmb3IgKCBsZXQgaSA9IDAsIGwgPSBhdHRyaWJ1dGVOYW1lcy5sZW5ndGg7IGkgPCBsOyBpICsrICkge1xuXG5cdFx0Y29uc3QgbmFtZSA9IGF0dHJpYnV0ZU5hbWVzWyBpIF07XG5cdFx0Y29uc3QgYXR0ciA9IGdlb21ldHJ5LmF0dHJpYnV0ZXNbIG5hbWUgXTtcblxuXHRcdHRtcEF0dHJpYnV0ZXNbIG5hbWUgXSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoXG5cdFx0XHRuZXcgYXR0ci5hcnJheS5jb25zdHJ1Y3RvciggYXR0ci5jb3VudCAqIGF0dHIuaXRlbVNpemUgKSxcblx0XHRcdGF0dHIuaXRlbVNpemUsXG5cdFx0XHRhdHRyLm5vcm1hbGl6ZWRcblx0XHQpO1xuXG5cdFx0Y29uc3QgbW9ycGhBdHRyID0gZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF07XG5cdFx0aWYgKCBtb3JwaEF0dHIgKSB7XG5cblx0XHRcdHRtcE1vcnBoQXR0cmlidXRlc1sgbmFtZSBdID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZShcblx0XHRcdFx0bmV3IG1vcnBoQXR0ci5hcnJheS5jb25zdHJ1Y3RvciggbW9ycGhBdHRyLmNvdW50ICogbW9ycGhBdHRyLml0ZW1TaXplICksXG5cdFx0XHRcdG1vcnBoQXR0ci5pdGVtU2l6ZSxcblx0XHRcdFx0bW9ycGhBdHRyLm5vcm1hbGl6ZWRcblx0XHRcdCk7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vIGNvbnZlcnQgdGhlIGVycm9yIHRvbGVyYW5jZSB0byBhbiBhbW91bnQgb2YgZGVjaW1hbCBwbGFjZXMgdG8gdHJ1bmNhdGUgdG9cblx0Y29uc3QgZGVjaW1hbFNoaWZ0ID0gTWF0aC5sb2cxMCggMSAvIHRvbGVyYW5jZSApO1xuXHRjb25zdCBzaGlmdE11bHRpcGxpZXIgPSBNYXRoLnBvdyggMTAsIGRlY2ltYWxTaGlmdCApO1xuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB2ZXJ0ZXhDb3VudDsgaSArKyApIHtcblxuXHRcdGNvbnN0IGluZGV4ID0gaW5kaWNlcyA/IGluZGljZXMuZ2V0WCggaSApIDogaTtcblxuXHRcdC8vIEdlbmVyYXRlIGEgaGFzaCBmb3IgdGhlIHZlcnRleCBhdHRyaWJ1dGVzIGF0IHRoZSBjdXJyZW50IGluZGV4ICdpJ1xuXHRcdGxldCBoYXNoID0gJyc7XG5cdFx0Zm9yICggbGV0IGogPSAwLCBsID0gYXR0cmlidXRlTmFtZXMubGVuZ3RoOyBqIDwgbDsgaiArKyApIHtcblxuXHRcdFx0Y29uc3QgbmFtZSA9IGF0dHJpYnV0ZU5hbWVzWyBqIF07XG5cdFx0XHRjb25zdCBhdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcblx0XHRcdGNvbnN0IGl0ZW1TaXplID0gYXR0cmlidXRlLml0ZW1TaXplO1xuXG5cdFx0XHRmb3IgKCBsZXQgayA9IDA7IGsgPCBpdGVtU2l6ZTsgayArKyApIHtcblxuXHRcdFx0XHQvLyBkb3VibGUgdGlsZGUgdHJ1bmNhdGVzIHRoZSBkZWNpbWFsIHZhbHVlXG5cdFx0XHRcdGhhc2ggKz0gYCR7IH4gfiAoIGF0dHJpYnV0ZVsgZ2V0dGVyc1sgayBdIF0oIGluZGV4ICkgKiBzaGlmdE11bHRpcGxpZXIgKSB9LGA7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vIEFkZCBhbm90aGVyIHJlZmVyZW5jZSB0byB0aGUgdmVydGV4IGlmIGl0J3MgYWxyZWFkeVxuXHRcdC8vIHVzZWQgYnkgYW5vdGhlciBpbmRleFxuXHRcdGlmICggaGFzaCBpbiBoYXNoVG9JbmRleCApIHtcblxuXHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBoYXNoVG9JbmRleFsgaGFzaCBdICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBjb3B5IGRhdGEgdG8gdGhlIG5ldyBpbmRleCBpbiB0aGUgdGVtcG9yYXJ5IGF0dHJpYnV0ZXNcblx0XHRcdGZvciAoIGxldCBqID0gMCwgbCA9IGF0dHJpYnV0ZU5hbWVzLmxlbmd0aDsgaiA8IGw7IGogKysgKSB7XG5cblx0XHRcdFx0Y29uc3QgbmFtZSA9IGF0dHJpYnV0ZU5hbWVzWyBqIF07XG5cdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggbmFtZSApO1xuXHRcdFx0XHRjb25zdCBtb3JwaEF0dHIgPSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXTtcblx0XHRcdFx0Y29uc3QgaXRlbVNpemUgPSBhdHRyaWJ1dGUuaXRlbVNpemU7XG5cdFx0XHRcdGNvbnN0IG5ld2FycmF5ID0gdG1wQXR0cmlidXRlc1sgbmFtZSBdO1xuXHRcdFx0XHRjb25zdCBuZXdNb3JwaEFycmF5cyA9IHRtcE1vcnBoQXR0cmlidXRlc1sgbmFtZSBdO1xuXG5cdFx0XHRcdGZvciAoIGxldCBrID0gMDsgayA8IGl0ZW1TaXplOyBrICsrICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgZ2V0dGVyRnVuYyA9IGdldHRlcnNbIGsgXTtcblx0XHRcdFx0XHRjb25zdCBzZXR0ZXJGdW5jID0gc2V0dGVyc1sgayBdO1xuXHRcdFx0XHRcdG5ld2FycmF5WyBzZXR0ZXJGdW5jIF0oIG5leHRJbmRleCwgYXR0cmlidXRlWyBnZXR0ZXJGdW5jIF0oIGluZGV4ICkgKTtcblxuXHRcdFx0XHRcdGlmICggbW9ycGhBdHRyICkge1xuXG5cdFx0XHRcdFx0XHRmb3IgKCBsZXQgbSA9IDAsIG1sID0gbW9ycGhBdHRyLmxlbmd0aDsgbSA8IG1sOyBtICsrICkge1xuXG5cdFx0XHRcdFx0XHRcdG5ld01vcnBoQXJyYXlzWyBtIF1bIHNldHRlckZ1bmMgXSggbmV4dEluZGV4LCBtb3JwaEF0dHJbIG0gXVsgZ2V0dGVyRnVuYyBdKCBpbmRleCApICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0aGFzaFRvSW5kZXhbIGhhc2ggXSA9IG5leHRJbmRleDtcblx0XHRcdG5ld0luZGljZXMucHVzaCggbmV4dEluZGV4ICk7XG5cdFx0XHRuZXh0SW5kZXggKys7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vIGdlbmVyYXRlIHJlc3VsdCBCdWZmZXJHZW9tZXRyeVxuXHRjb25zdCByZXN1bHQgPSBnZW9tZXRyeS5jbG9uZSgpO1xuXHRmb3IgKCBjb25zdCBuYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSB7XG5cblx0XHRjb25zdCB0bXBBdHRyaWJ1dGUgPSB0bXBBdHRyaWJ1dGVzWyBuYW1lIF07XG5cblx0XHRyZXN1bHQuc2V0QXR0cmlidXRlKCBuYW1lLCBuZXcgQnVmZmVyQXR0cmlidXRlKFxuXHRcdFx0dG1wQXR0cmlidXRlLmFycmF5LnNsaWNlKCAwLCBuZXh0SW5kZXggKiB0bXBBdHRyaWJ1dGUuaXRlbVNpemUgKSxcblx0XHRcdHRtcEF0dHJpYnV0ZS5pdGVtU2l6ZSxcblx0XHRcdHRtcEF0dHJpYnV0ZS5ub3JtYWxpemVkLFxuXHRcdCkgKTtcblxuXHRcdGlmICggISAoIG5hbWUgaW4gdG1wTW9ycGhBdHRyaWJ1dGVzICkgKSBjb250aW51ZTtcblxuXHRcdGZvciAoIGxldCBqID0gMDsgaiA8IHRtcE1vcnBoQXR0cmlidXRlc1sgbmFtZSBdLmxlbmd0aDsgaiArKyApIHtcblxuXHRcdFx0Y29uc3QgdG1wTW9ycGhBdHRyaWJ1dGUgPSB0bXBNb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXVsgaiBdO1xuXG5cdFx0XHRyZXN1bHQubW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF1bIGogXSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoXG5cdFx0XHRcdHRtcE1vcnBoQXR0cmlidXRlLmFycmF5LnNsaWNlKCAwLCBuZXh0SW5kZXggKiB0bXBNb3JwaEF0dHJpYnV0ZS5pdGVtU2l6ZSApLFxuXHRcdFx0XHR0bXBNb3JwaEF0dHJpYnV0ZS5pdGVtU2l6ZSxcblx0XHRcdFx0dG1wTW9ycGhBdHRyaWJ1dGUubm9ybWFsaXplZCxcblx0XHRcdCk7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vIGluZGljZXNcblxuXHRyZXN1bHQuc2V0SW5kZXgoIG5ld0luZGljZXMgKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7bnVtYmVyfSBkcmF3TW9kZVxuICogQHJldHVybiB7QnVmZmVyR2VvbWV0cnl9XG4gKi9cbmZ1bmN0aW9uIHRvVHJpYW5nbGVzRHJhd01vZGUoIGdlb21ldHJ5LCBkcmF3TW9kZSApIHtcblxuXHRpZiAoIGRyYXdNb2RlID09PSBUcmlhbmdsZXNEcmF3TW9kZSApIHtcblxuXHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHMudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBHZW9tZXRyeSBhbHJlYWR5IGRlZmluZWQgYXMgdHJpYW5nbGVzLicgKTtcblx0XHRyZXR1cm4gZ2VvbWV0cnk7XG5cblx0fVxuXG5cdGlmICggZHJhd01vZGUgPT09IFRyaWFuZ2xlRmFuRHJhd01vZGUgfHwgZHJhd01vZGUgPT09IFRyaWFuZ2xlU3RyaXBEcmF3TW9kZSApIHtcblxuXHRcdGxldCBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XG5cblx0XHQvLyBnZW5lcmF0ZSBpbmRleCBpZiBub3QgcHJlc2VudFxuXG5cdFx0aWYgKCBpbmRleCA9PT0gbnVsbCApIHtcblxuXHRcdFx0Y29uc3QgaW5kaWNlcyA9IFtdO1xuXG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJyApO1xuXG5cdFx0XHRpZiAoIHBvc2l0aW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcG9zaXRpb24uY291bnQ7IGkgKysgKSB7XG5cblx0XHRcdFx0XHRpbmRpY2VzLnB1c2goIGkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Z2VvbWV0cnkuc2V0SW5kZXgoIGluZGljZXMgKTtcblx0XHRcdFx0aW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5kZWZpbmVkIHBvc2l0aW9uIGF0dHJpYnV0ZS4gUHJvY2Vzc2luZyBub3QgcG9zc2libGUuJyApO1xuXHRcdFx0XHRyZXR1cm4gZ2VvbWV0cnk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vXG5cblx0XHRjb25zdCBudW1iZXJPZlRyaWFuZ2xlcyA9IGluZGV4LmNvdW50IC0gMjtcblx0XHRjb25zdCBuZXdJbmRpY2VzID0gW107XG5cblx0XHRpZiAoIGRyYXdNb2RlID09PSBUcmlhbmdsZUZhbkRyYXdNb2RlICkge1xuXG5cdFx0XHQvLyBnbC5UUklBTkdMRV9GQU5cblxuXHRcdFx0Zm9yICggbGV0IGkgPSAxOyBpIDw9IG51bWJlck9mVHJpYW5nbGVzOyBpICsrICkge1xuXG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggMCApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBnbC5UUklBTkdMRV9TVFJJUFxuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlRyaWFuZ2xlczsgaSArKyApIHtcblxuXHRcdFx0XHRpZiAoIGkgJSAyID09PSAwICkge1xuXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAyICkgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMiApICk7XG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICggKCBuZXdJbmRpY2VzLmxlbmd0aCAvIDMgKSAhPT0gbnVtYmVyT2ZUcmlhbmdsZXMgKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5hYmxlIHRvIGdlbmVyYXRlIGNvcnJlY3QgYW1vdW50IG9mIHRyaWFuZ2xlcy4nICk7XG5cblx0XHR9XG5cblx0XHQvLyBidWlsZCBmaW5hbCBnZW9tZXRyeVxuXG5cdFx0Y29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeS5jbG9uZSgpO1xuXHRcdG5ld0dlb21ldHJ5LnNldEluZGV4KCBuZXdJbmRpY2VzICk7XG5cdFx0bmV3R2VvbWV0cnkuY2xlYXJHcm91cHMoKTtcblxuXHRcdHJldHVybiBuZXdHZW9tZXRyeTtcblxuXHR9IGVsc2Uge1xuXG5cdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHMudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBVbmtub3duIGRyYXcgbW9kZTonLCBkcmF3TW9kZSApO1xuXHRcdHJldHVybiBnZW9tZXRyeTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBtb3JwaGVkIGF0dHJpYnV0ZXMgb2YgYSBtb3JwaGVkL3NraW5uZWQgQnVmZmVyR2VvbWV0cnkuXG4gKiBIZWxwZnVsIGZvciBSYXl0cmFjaW5nIG9yIERlY2Fscy5cbiAqIEBwYXJhbSB7TWVzaCB8IExpbmUgfCBQb2ludHN9IG9iamVjdCBBbiBpbnN0YW5jZSBvZiBNZXNoLCBMaW5lIG9yIFBvaW50cy5cbiAqIEByZXR1cm4ge09iamVjdH0gQW4gT2JqZWN0IHdpdGggb3JpZ2luYWwgcG9zaXRpb24vbm9ybWFsIGF0dHJpYnV0ZXMgYW5kIG1vcnBoZWQgb25lcy5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZU1vcnBoZWRBdHRyaWJ1dGVzKCBvYmplY3QgKSB7XG5cblx0aWYgKCBvYmplY3QuZ2VvbWV0cnkuaXNCdWZmZXJHZW9tZXRyeSAhPT0gdHJ1ZSApIHtcblxuXHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiBHZW9tZXRyeSBpcyBub3Qgb2YgdHlwZSBCdWZmZXJHZW9tZXRyeS4nICk7XG5cdFx0cmV0dXJuIG51bGw7XG5cblx0fVxuXG5cdGNvbnN0IF92QSA9IG5ldyBWZWN0b3IzKCk7XG5cdGNvbnN0IF92QiA9IG5ldyBWZWN0b3IzKCk7XG5cdGNvbnN0IF92QyA9IG5ldyBWZWN0b3IzKCk7XG5cblx0Y29uc3QgX3RlbXBBID0gbmV3IFZlY3RvcjMoKTtcblx0Y29uc3QgX3RlbXBCID0gbmV3IFZlY3RvcjMoKTtcblx0Y29uc3QgX3RlbXBDID0gbmV3IFZlY3RvcjMoKTtcblxuXHRjb25zdCBfbW9ycGhBID0gbmV3IFZlY3RvcjMoKTtcblx0Y29uc3QgX21vcnBoQiA9IG5ldyBWZWN0b3IzKCk7XG5cdGNvbnN0IF9tb3JwaEMgPSBuZXcgVmVjdG9yMygpO1xuXG5cdGZ1bmN0aW9uIF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcblx0XHRvYmplY3QsXG5cdFx0YXR0cmlidXRlLFxuXHRcdG1vcnBoQXR0cmlidXRlLFxuXHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxuXHRcdGEsXG5cdFx0Yixcblx0XHRjLFxuXHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlcblx0KSB7XG5cblx0XHRfdkEuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBhICk7XG5cdFx0X3ZCLmZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgYiApO1xuXHRcdF92Qy5mcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGMgKTtcblxuXHRcdGNvbnN0IG1vcnBoSW5mbHVlbmNlcyA9IG9iamVjdC5tb3JwaFRhcmdldEluZmx1ZW5jZXM7XG5cblx0XHRpZiAoIG1vcnBoQXR0cmlidXRlICYmIG1vcnBoSW5mbHVlbmNlcyApIHtcblxuXHRcdFx0X21vcnBoQS5zZXQoIDAsIDAsIDAgKTtcblx0XHRcdF9tb3JwaEIuc2V0KCAwLCAwLCAwICk7XG5cdFx0XHRfbW9ycGhDLnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbW9ycGhBdHRyaWJ1dGUubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Y29uc3QgaW5mbHVlbmNlID0gbW9ycGhJbmZsdWVuY2VzWyBpIF07XG5cdFx0XHRcdGNvbnN0IG1vcnBoID0gbW9ycGhBdHRyaWJ1dGVbIGkgXTtcblxuXHRcdFx0XHRpZiAoIGluZmx1ZW5jZSA9PT0gMCApIGNvbnRpbnVlO1xuXG5cdFx0XHRcdF90ZW1wQS5mcm9tQnVmZmVyQXR0cmlidXRlKCBtb3JwaCwgYSApO1xuXHRcdFx0XHRfdGVtcEIuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggbW9ycGgsIGIgKTtcblx0XHRcdFx0X3RlbXBDLmZyb21CdWZmZXJBdHRyaWJ1dGUoIG1vcnBoLCBjICk7XG5cblx0XHRcdFx0aWYgKCBtb3JwaFRhcmdldHNSZWxhdGl2ZSApIHtcblxuXHRcdFx0XHRcdF9tb3JwaEEuYWRkU2NhbGVkVmVjdG9yKCBfdGVtcEEsIGluZmx1ZW5jZSApO1xuXHRcdFx0XHRcdF9tb3JwaEIuYWRkU2NhbGVkVmVjdG9yKCBfdGVtcEIsIGluZmx1ZW5jZSApO1xuXHRcdFx0XHRcdF9tb3JwaEMuYWRkU2NhbGVkVmVjdG9yKCBfdGVtcEMsIGluZmx1ZW5jZSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRfbW9ycGhBLmFkZFNjYWxlZFZlY3RvciggX3RlbXBBLnN1YiggX3ZBICksIGluZmx1ZW5jZSApO1xuXHRcdFx0XHRcdF9tb3JwaEIuYWRkU2NhbGVkVmVjdG9yKCBfdGVtcEIuc3ViKCBfdkIgKSwgaW5mbHVlbmNlICk7XG5cdFx0XHRcdFx0X21vcnBoQy5hZGRTY2FsZWRWZWN0b3IoIF90ZW1wQy5zdWIoIF92QyApLCBpbmZsdWVuY2UgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0X3ZBLmFkZCggX21vcnBoQSApO1xuXHRcdFx0X3ZCLmFkZCggX21vcnBoQiApO1xuXHRcdFx0X3ZDLmFkZCggX21vcnBoQyApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBvYmplY3QuaXNTa2lubmVkTWVzaCApIHtcblxuXHRcdFx0b2JqZWN0LmJvbmVUcmFuc2Zvcm0oIGEsIF92QSApO1xuXHRcdFx0b2JqZWN0LmJvbmVUcmFuc2Zvcm0oIGIsIF92QiApO1xuXHRcdFx0b2JqZWN0LmJvbmVUcmFuc2Zvcm0oIGMsIF92QyApO1xuXG5cdFx0fVxuXG5cdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYSAqIDMgKyAwIF0gPSBfdkEueDtcblx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBhICogMyArIDEgXSA9IF92QS55O1xuXHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGEgKiAzICsgMiBdID0gX3ZBLno7XG5cdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYiAqIDMgKyAwIF0gPSBfdkIueDtcblx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBiICogMyArIDEgXSA9IF92Qi55O1xuXHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGIgKiAzICsgMiBdID0gX3ZCLno7XG5cdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYyAqIDMgKyAwIF0gPSBfdkMueDtcblx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBjICogMyArIDEgXSA9IF92Qy55O1xuXHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGMgKiAzICsgMiBdID0gX3ZDLno7XG5cblx0fVxuXG5cdGNvbnN0IGdlb21ldHJ5ID0gb2JqZWN0Lmdlb21ldHJ5O1xuXHRjb25zdCBtYXRlcmlhbCA9IG9iamVjdC5tYXRlcmlhbDtcblxuXHRsZXQgYSwgYiwgYztcblx0Y29uc3QgaW5kZXggPSBnZW9tZXRyeS5pbmRleDtcblx0Y29uc3QgcG9zaXRpb25BdHRyaWJ1dGUgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xuXHRjb25zdCBtb3JwaFBvc2l0aW9uID0gZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLnBvc2l0aW9uO1xuXHRjb25zdCBtb3JwaFRhcmdldHNSZWxhdGl2ZSA9IGdlb21ldHJ5Lm1vcnBoVGFyZ2V0c1JlbGF0aXZlO1xuXHRjb25zdCBub3JtYWxBdHRyaWJ1dGUgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbDtcblx0Y29uc3QgbW9ycGhOb3JtYWwgPSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb247XG5cblx0Y29uc3QgZ3JvdXBzID0gZ2VvbWV0cnkuZ3JvdXBzO1xuXHRjb25zdCBkcmF3UmFuZ2UgPSBnZW9tZXRyeS5kcmF3UmFuZ2U7XG5cdGxldCBpLCBqLCBpbCwgamw7XG5cdGxldCBncm91cDtcblx0bGV0IHN0YXJ0LCBlbmQ7XG5cblx0Y29uc3QgbW9kaWZpZWRQb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkoIHBvc2l0aW9uQXR0cmlidXRlLmNvdW50ICogcG9zaXRpb25BdHRyaWJ1dGUuaXRlbVNpemUgKTtcblx0Y29uc3QgbW9kaWZpZWROb3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KCBub3JtYWxBdHRyaWJ1dGUuY291bnQgKiBub3JtYWxBdHRyaWJ1dGUuaXRlbVNpemUgKTtcblxuXHRpZiAoIGluZGV4ICE9PSBudWxsICkge1xuXG5cdFx0Ly8gaW5kZXhlZCBidWZmZXIgZ2VvbWV0cnlcblxuXHRcdGlmICggQXJyYXkuaXNBcnJheSggbWF0ZXJpYWwgKSApIHtcblxuXHRcdFx0Zm9yICggaSA9IDAsIGlsID0gZ3JvdXBzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGdyb3VwID0gZ3JvdXBzWyBpIF07XG5cblx0XHRcdFx0c3RhcnQgPSBNYXRoLm1heCggZ3JvdXAuc3RhcnQsIGRyYXdSYW5nZS5zdGFydCApO1xuXHRcdFx0XHRlbmQgPSBNYXRoLm1pbiggKCBncm91cC5zdGFydCArIGdyb3VwLmNvdW50ICksICggZHJhd1JhbmdlLnN0YXJ0ICsgZHJhd1JhbmdlLmNvdW50ICkgKTtcblxuXHRcdFx0XHRmb3IgKCBqID0gc3RhcnQsIGpsID0gZW5kOyBqIDwgamw7IGogKz0gMyApIHtcblxuXHRcdFx0XHRcdGEgPSBpbmRleC5nZXRYKCBqICk7XG5cdFx0XHRcdFx0YiA9IGluZGV4LmdldFgoIGogKyAxICk7XG5cdFx0XHRcdFx0YyA9IGluZGV4LmdldFgoIGogKyAyICk7XG5cblx0XHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXG5cdFx0XHRcdFx0XHRvYmplY3QsXG5cdFx0XHRcdFx0XHRwb3NpdGlvbkF0dHJpYnV0ZSxcblx0XHRcdFx0XHRcdG1vcnBoUG9zaXRpb24sXG5cdFx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcblx0XHRcdFx0XHRcdGEsIGIsIGMsXG5cdFx0XHRcdFx0XHRtb2RpZmllZFBvc2l0aW9uXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcblx0XHRcdFx0XHRcdG9iamVjdCxcblx0XHRcdFx0XHRcdG5vcm1hbEF0dHJpYnV0ZSxcblx0XHRcdFx0XHRcdG1vcnBoTm9ybWFsLFxuXHRcdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXG5cdFx0XHRcdFx0XHRhLCBiLCBjLFxuXHRcdFx0XHRcdFx0bW9kaWZpZWROb3JtYWxcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0c3RhcnQgPSBNYXRoLm1heCggMCwgZHJhd1JhbmdlLnN0YXJ0ICk7XG5cdFx0XHRlbmQgPSBNYXRoLm1pbiggaW5kZXguY291bnQsICggZHJhd1JhbmdlLnN0YXJ0ICsgZHJhd1JhbmdlLmNvdW50ICkgKTtcblxuXHRcdFx0Zm9yICggaSA9IHN0YXJ0LCBpbCA9IGVuZDsgaSA8IGlsOyBpICs9IDMgKSB7XG5cblx0XHRcdFx0YSA9IGluZGV4LmdldFgoIGkgKTtcblx0XHRcdFx0YiA9IGluZGV4LmdldFgoIGkgKyAxICk7XG5cdFx0XHRcdGMgPSBpbmRleC5nZXRYKCBpICsgMiApO1xuXG5cdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcblx0XHRcdFx0XHRvYmplY3QsXG5cdFx0XHRcdFx0cG9zaXRpb25BdHRyaWJ1dGUsXG5cdFx0XHRcdFx0bW9ycGhQb3NpdGlvbixcblx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcblx0XHRcdFx0XHRhLCBiLCBjLFxuXHRcdFx0XHRcdG1vZGlmaWVkUG9zaXRpb25cblx0XHRcdFx0KTtcblxuXHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXG5cdFx0XHRcdFx0b2JqZWN0LFxuXHRcdFx0XHRcdG5vcm1hbEF0dHJpYnV0ZSxcblx0XHRcdFx0XHRtb3JwaE5vcm1hbCxcblx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcblx0XHRcdFx0XHRhLCBiLCBjLFxuXHRcdFx0XHRcdG1vZGlmaWVkTm9ybWFsXG5cdFx0XHRcdCk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gbm9uLWluZGV4ZWQgYnVmZmVyIGdlb21ldHJ5XG5cblx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG1hdGVyaWFsICkgKSB7XG5cblx0XHRcdGZvciAoIGkgPSAwLCBpbCA9IGdyb3Vwcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRncm91cCA9IGdyb3Vwc1sgaSBdO1xuXG5cdFx0XHRcdHN0YXJ0ID0gTWF0aC5tYXgoIGdyb3VwLnN0YXJ0LCBkcmF3UmFuZ2Uuc3RhcnQgKTtcblx0XHRcdFx0ZW5kID0gTWF0aC5taW4oICggZ3JvdXAuc3RhcnQgKyBncm91cC5jb3VudCApLCAoIGRyYXdSYW5nZS5zdGFydCArIGRyYXdSYW5nZS5jb3VudCApICk7XG5cblx0XHRcdFx0Zm9yICggaiA9IHN0YXJ0LCBqbCA9IGVuZDsgaiA8IGpsOyBqICs9IDMgKSB7XG5cblx0XHRcdFx0XHRhID0gajtcblx0XHRcdFx0XHRiID0gaiArIDE7XG5cdFx0XHRcdFx0YyA9IGogKyAyO1xuXG5cdFx0XHRcdFx0X2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxuXHRcdFx0XHRcdFx0b2JqZWN0LFxuXHRcdFx0XHRcdFx0cG9zaXRpb25BdHRyaWJ1dGUsXG5cdFx0XHRcdFx0XHRtb3JwaFBvc2l0aW9uLFxuXHRcdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXG5cdFx0XHRcdFx0XHRhLCBiLCBjLFxuXHRcdFx0XHRcdFx0bW9kaWZpZWRQb3NpdGlvblxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXG5cdFx0XHRcdFx0XHRvYmplY3QsXG5cdFx0XHRcdFx0XHRub3JtYWxBdHRyaWJ1dGUsXG5cdFx0XHRcdFx0XHRtb3JwaE5vcm1hbCxcblx0XHRcdFx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxuXHRcdFx0XHRcdFx0YSwgYiwgYyxcblx0XHRcdFx0XHRcdG1vZGlmaWVkTm9ybWFsXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHN0YXJ0ID0gTWF0aC5tYXgoIDAsIGRyYXdSYW5nZS5zdGFydCApO1xuXHRcdFx0ZW5kID0gTWF0aC5taW4oIHBvc2l0aW9uQXR0cmlidXRlLmNvdW50LCAoIGRyYXdSYW5nZS5zdGFydCArIGRyYXdSYW5nZS5jb3VudCApICk7XG5cblx0XHRcdGZvciAoIGkgPSBzdGFydCwgaWwgPSBlbmQ7IGkgPCBpbDsgaSArPSAzICkge1xuXG5cdFx0XHRcdGEgPSBpO1xuXHRcdFx0XHRiID0gaSArIDE7XG5cdFx0XHRcdGMgPSBpICsgMjtcblxuXHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXG5cdFx0XHRcdFx0b2JqZWN0LFxuXHRcdFx0XHRcdHBvc2l0aW9uQXR0cmlidXRlLFxuXHRcdFx0XHRcdG1vcnBoUG9zaXRpb24sXG5cdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXG5cdFx0XHRcdFx0YSwgYiwgYyxcblx0XHRcdFx0XHRtb2RpZmllZFBvc2l0aW9uXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0X2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxuXHRcdFx0XHRcdG9iamVjdCxcblx0XHRcdFx0XHRub3JtYWxBdHRyaWJ1dGUsXG5cdFx0XHRcdFx0bW9ycGhOb3JtYWwsXG5cdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXG5cdFx0XHRcdFx0YSwgYiwgYyxcblx0XHRcdFx0XHRtb2RpZmllZE5vcm1hbFxuXHRcdFx0XHQpO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdGNvbnN0IG1vcnBoZWRQb3NpdGlvbkF0dHJpYnV0ZSA9IG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKCBtb2RpZmllZFBvc2l0aW9uLCAzICk7XG5cdGNvbnN0IG1vcnBoZWROb3JtYWxBdHRyaWJ1dGUgPSBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSggbW9kaWZpZWROb3JtYWwsIDMgKTtcblxuXHRyZXR1cm4ge1xuXG5cdFx0cG9zaXRpb25BdHRyaWJ1dGU6IHBvc2l0aW9uQXR0cmlidXRlLFxuXHRcdG5vcm1hbEF0dHJpYnV0ZTogbm9ybWFsQXR0cmlidXRlLFxuXHRcdG1vcnBoZWRQb3NpdGlvbkF0dHJpYnV0ZTogbW9ycGhlZFBvc2l0aW9uQXR0cmlidXRlLFxuXHRcdG1vcnBoZWROb3JtYWxBdHRyaWJ1dGU6IG1vcnBoZWROb3JtYWxBdHRyaWJ1dGVcblxuXHR9O1xuXG59XG5cbmZ1bmN0aW9uIG1lcmdlR3JvdXBzKCBnZW9tZXRyeSApIHtcblxuXHRpZiAoIGdlb21ldHJ5Lmdyb3Vwcy5sZW5ndGggPT09IDAgKSB7XG5cblx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR3JvdXBzKCk6IE5vIGdyb3VwcyBhcmUgZGVmaW5lZC4gTm90aGluZyB0byBtZXJnZS4nICk7XG5cdFx0cmV0dXJuIGdlb21ldHJ5O1xuXG5cdH1cblxuXHRsZXQgZ3JvdXBzID0gZ2VvbWV0cnkuZ3JvdXBzO1xuXG5cdC8vIHNvcnQgZ3JvdXBzIGJ5IG1hdGVyaWFsIGluZGV4XG5cblx0Z3JvdXBzID0gZ3JvdXBzLnNvcnQoICggYSwgYiApID0+IHtcblxuXHRcdGlmICggYS5tYXRlcmlhbEluZGV4ICE9PSBiLm1hdGVyaWFsSW5kZXggKSByZXR1cm4gYS5tYXRlcmlhbEluZGV4IC0gYi5tYXRlcmlhbEluZGV4O1xuXG5cdFx0cmV0dXJuIGEuc3RhcnQgLSBiLnN0YXJ0O1xuXG5cdH0gKTtcblxuXHQvLyBjcmVhdGUgaW5kZXggZm9yIG5vbi1pbmRleGVkIGdlb21ldHJpZXNcblxuXHRpZiAoIGdlb21ldHJ5LmdldEluZGV4KCkgPT09IG51bGwgKSB7XG5cblx0XHRjb25zdCBwb3NpdGlvbkF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJyApO1xuXHRcdGNvbnN0IGluZGljZXMgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHBvc2l0aW9uQXR0cmlidXRlLmNvdW50OyBpICs9IDMgKSB7XG5cblx0XHRcdGluZGljZXMucHVzaCggaSwgaSArIDEsIGkgKyAyICk7XG5cblx0XHR9XG5cblx0XHRnZW9tZXRyeS5zZXRJbmRleCggaW5kaWNlcyApO1xuXG5cdH1cblxuXHQvLyBzb3J0IGluZGV4XG5cblx0Y29uc3QgaW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xuXG5cdGNvbnN0IG5ld0luZGljZXMgPSBbXTtcblxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0Y29uc3QgZ3JvdXAgPSBncm91cHNbIGkgXTtcblxuXHRcdGNvbnN0IGdyb3VwU3RhcnQgPSBncm91cC5zdGFydDtcblx0XHRjb25zdCBncm91cExlbmd0aCA9IGdyb3VwU3RhcnQgKyBncm91cC5jb3VudDtcblxuXHRcdGZvciAoIGxldCBqID0gZ3JvdXBTdGFydDsgaiA8IGdyb3VwTGVuZ3RoOyBqICsrICkge1xuXG5cdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGogKSApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRnZW9tZXRyeS5kaXNwb3NlKCk7IC8vIFJlcXVpcmVkIHRvIGZvcmNlIGJ1ZmZlciByZWNyZWF0aW9uXG5cdGdlb21ldHJ5LnNldEluZGV4KCBuZXdJbmRpY2VzICk7XG5cblx0Ly8gdXBkYXRlIGdyb3VwcyBpbmRpY2VzXG5cblx0bGV0IHN0YXJ0ID0gMDtcblxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0Y29uc3QgZ3JvdXAgPSBncm91cHNbIGkgXTtcblxuXHRcdGdyb3VwLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0c3RhcnQgKz0gZ3JvdXAuY291bnQ7XG5cblx0fVxuXG5cdC8vIG1lcmdlIGdyb3Vwc1xuXG5cdGxldCBjdXJyZW50R3JvdXAgPSBncm91cHNbIDAgXTtcblxuXHRnZW9tZXRyeS5ncm91cHMgPSBbIGN1cnJlbnRHcm91cCBdO1xuXG5cdGZvciAoIGxldCBpID0gMTsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRjb25zdCBncm91cCA9IGdyb3Vwc1sgaSBdO1xuXG5cdFx0aWYgKCBjdXJyZW50R3JvdXAubWF0ZXJpYWxJbmRleCA9PT0gZ3JvdXAubWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdFx0Y3VycmVudEdyb3VwLmNvdW50ICs9IGdyb3VwLmNvdW50O1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y3VycmVudEdyb3VwID0gZ3JvdXA7XG5cdFx0XHRnZW9tZXRyeS5ncm91cHMucHVzaCggY3VycmVudEdyb3VwICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiBnZW9tZXRyeTtcblxufVxuXG5cbi8vIENyZWF0ZXMgYSBuZXcsIG5vbi1pbmRleGVkIGdlb21ldHJ5IHdpdGggc21vb3RoIG5vcm1hbHMgZXZlcnl3aGVyZSBleGNlcHQgZmFjZXMgdGhhdCBtZWV0IGF0XG4vLyBhbiBhbmdsZSBncmVhdGVyIHRoYW4gdGhlIGNyZWFzZSBhbmdsZS5cbmZ1bmN0aW9uIHRvQ3JlYXNlZE5vcm1hbHMoIGdlb21ldHJ5LCBjcmVhc2VBbmdsZSA9IE1hdGguUEkgLyAzIC8qIDYwIGRlZ3JlZXMgKi8gKSB7XG5cblx0Y29uc3QgY3JlYXNlRG90ID0gTWF0aC5jb3MoIGNyZWFzZUFuZ2xlICk7XG5cdGNvbnN0IGhhc2hNdWx0aXBsaWVyID0gKCAxICsgMWUtMTAgKSAqIDFlMjtcblxuXHQvLyByZXVzYWJsZSB2ZXJ0b3JzXG5cdGNvbnN0IHZlcnRzID0gWyBuZXcgVmVjdG9yMygpLCBuZXcgVmVjdG9yMygpLCBuZXcgVmVjdG9yMygpIF07XG5cdGNvbnN0IHRlbXBWZWMxID0gbmV3IFZlY3RvcjMoKTtcblx0Y29uc3QgdGVtcFZlYzIgPSBuZXcgVmVjdG9yMygpO1xuXHRjb25zdCB0ZW1wTm9ybSA9IG5ldyBWZWN0b3IzKCk7XG5cdGNvbnN0IHRlbXBOb3JtMiA9IG5ldyBWZWN0b3IzKCk7XG5cblx0Ly8gaGFzaGVzIGEgdmVjdG9yXG5cdGZ1bmN0aW9uIGhhc2hWZXJ0ZXgoIHYgKSB7XG5cblx0XHRjb25zdCB4ID0gfiB+ICggdi54ICogaGFzaE11bHRpcGxpZXIgKTtcblx0XHRjb25zdCB5ID0gfiB+ICggdi55ICogaGFzaE11bHRpcGxpZXIgKTtcblx0XHRjb25zdCB6ID0gfiB+ICggdi56ICogaGFzaE11bHRpcGxpZXIgKTtcblx0XHRyZXR1cm4gYCR7eH0sJHt5fSwke3p9YDtcblxuXHR9XG5cblx0Y29uc3QgcmVzdWx0R2VvbWV0cnkgPSBnZW9tZXRyeS50b05vbkluZGV4ZWQoKTtcblx0Y29uc3QgcG9zQXR0ciA9IHJlc3VsdEdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XG5cdGNvbnN0IHZlcnRleE1hcCA9IHt9O1xuXG5cdC8vIGZpbmQgYWxsIHRoZSBub3JtYWxzIHNoYXJlZCBieSBjb21tb25seSBsb2NhdGVkIHZlcnRpY2VzXG5cdGZvciAoIGxldCBpID0gMCwgbCA9IHBvc0F0dHIuY291bnQgLyAzOyBpIDwgbDsgaSArKyApIHtcblxuXHRcdGNvbnN0IGkzID0gMyAqIGk7XG5cdFx0Y29uc3QgYSA9IHZlcnRzWyAwIF0uZnJvbUJ1ZmZlckF0dHJpYnV0ZSggcG9zQXR0ciwgaTMgKyAwICk7XG5cdFx0Y29uc3QgYiA9IHZlcnRzWyAxIF0uZnJvbUJ1ZmZlckF0dHJpYnV0ZSggcG9zQXR0ciwgaTMgKyAxICk7XG5cdFx0Y29uc3QgYyA9IHZlcnRzWyAyIF0uZnJvbUJ1ZmZlckF0dHJpYnV0ZSggcG9zQXR0ciwgaTMgKyAyICk7XG5cblx0XHR0ZW1wVmVjMS5zdWJWZWN0b3JzKCBjLCBiICk7XG5cdFx0dGVtcFZlYzIuc3ViVmVjdG9ycyggYSwgYiApO1xuXG5cdFx0Ly8gYWRkIHRoZSBub3JtYWwgdG8gdGhlIG1hcCBmb3IgYWxsIHZlcnRpY2VzXG5cdFx0Y29uc3Qgbm9ybWFsID0gbmV3IFZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMoIHRlbXBWZWMxLCB0ZW1wVmVjMiApLm5vcm1hbGl6ZSgpO1xuXHRcdGZvciAoIGxldCBuID0gMDsgbiA8IDM7IG4gKysgKSB7XG5cblx0XHRcdGNvbnN0IHZlcnQgPSB2ZXJ0c1sgbiBdO1xuXHRcdFx0Y29uc3QgaGFzaCA9IGhhc2hWZXJ0ZXgoIHZlcnQgKTtcblx0XHRcdGlmICggISAoIGhhc2ggaW4gdmVydGV4TWFwICkgKSB7XG5cblx0XHRcdFx0dmVydGV4TWFwWyBoYXNoIF0gPSBbXTtcblxuXHRcdFx0fVxuXG5cdFx0XHR2ZXJ0ZXhNYXBbIGhhc2ggXS5wdXNoKCBub3JtYWwgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly8gYXZlcmFnZSBub3JtYWxzIGZyb20gYWxsIHZlcnRpY2VzIHRoYXQgc2hhcmUgYSBjb21tb24gbG9jYXRpb24gaWYgdGhleSBhcmUgd2l0aGluIHRoZVxuXHQvLyBwcm92aWRlZCBjcmVhc2UgdGhyZXNob2xkXG5cdGNvbnN0IG5vcm1hbEFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSggcG9zQXR0ci5jb3VudCAqIDMgKTtcblx0Y29uc3Qgbm9ybUF0dHIgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBub3JtYWxBcnJheSwgMywgZmFsc2UgKTtcblx0Zm9yICggbGV0IGkgPSAwLCBsID0gcG9zQXR0ci5jb3VudCAvIDM7IGkgPCBsOyBpICsrICkge1xuXG5cdFx0Ly8gZ2V0IHRoZSBmYWNlIG5vcm1hbCBmb3IgdGhpcyB2ZXJ0ZXhcblx0XHRjb25zdCBpMyA9IDMgKiBpO1xuXHRcdGNvbnN0IGEgPSB2ZXJ0c1sgMCBdLmZyb21CdWZmZXJBdHRyaWJ1dGUoIHBvc0F0dHIsIGkzICsgMCApO1xuXHRcdGNvbnN0IGIgPSB2ZXJ0c1sgMSBdLmZyb21CdWZmZXJBdHRyaWJ1dGUoIHBvc0F0dHIsIGkzICsgMSApO1xuXHRcdGNvbnN0IGMgPSB2ZXJ0c1sgMiBdLmZyb21CdWZmZXJBdHRyaWJ1dGUoIHBvc0F0dHIsIGkzICsgMiApO1xuXG5cdFx0dGVtcFZlYzEuc3ViVmVjdG9ycyggYywgYiApO1xuXHRcdHRlbXBWZWMyLnN1YlZlY3RvcnMoIGEsIGIgKTtcblxuXHRcdHRlbXBOb3JtLmNyb3NzVmVjdG9ycyggdGVtcFZlYzEsIHRlbXBWZWMyICkubm9ybWFsaXplKCk7XG5cblx0XHQvLyBhdmVyYWdlIGFsbCBub3JtYWxzIHRoYXQgbWVldCB0aGUgdGhyZXNob2xkIGFuZCBzZXQgdGhlIG5vcm1hbCB2YWx1ZVxuXHRcdGZvciAoIGxldCBuID0gMDsgbiA8IDM7IG4gKysgKSB7XG5cblx0XHRcdGNvbnN0IHZlcnQgPSB2ZXJ0c1sgbiBdO1xuXHRcdFx0Y29uc3QgaGFzaCA9IGhhc2hWZXJ0ZXgoIHZlcnQgKTtcblx0XHRcdGNvbnN0IG90aGVyTm9ybWFscyA9IHZlcnRleE1hcFsgaGFzaCBdO1xuXHRcdFx0dGVtcE5vcm0yLnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHRmb3IgKCBsZXQgayA9IDAsIGxrID0gb3RoZXJOb3JtYWxzLmxlbmd0aDsgayA8IGxrOyBrICsrICkge1xuXG5cdFx0XHRcdGNvbnN0IG90aGVyTm9ybSA9IG90aGVyTm9ybWFsc1sgayBdO1xuXHRcdFx0XHRpZiAoIHRlbXBOb3JtLmRvdCggb3RoZXJOb3JtICkgPiBjcmVhc2VEb3QgKSB7XG5cblx0XHRcdFx0XHR0ZW1wTm9ybTIuYWRkKCBvdGhlck5vcm0gKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0dGVtcE5vcm0yLm5vcm1hbGl6ZSgpO1xuXHRcdFx0bm9ybUF0dHIuc2V0WFlaKCBpMyArIG4sIHRlbXBOb3JtMi54LCB0ZW1wTm9ybTIueSwgdGVtcE5vcm0yLnogKTtcblxuXHRcdH1cblxuXHR9XG5cblx0cmVzdWx0R2VvbWV0cnkuc2V0QXR0cmlidXRlKCAnbm9ybWFsJywgbm9ybUF0dHIgKTtcblx0cmV0dXJuIHJlc3VsdEdlb21ldHJ5O1xuXG59XG5cbmV4cG9ydCB7XG5cdGNvbXB1dGVUYW5nZW50cyxcblx0Y29tcHV0ZU1pa2tUU3BhY2VUYW5nZW50cyxcblx0bWVyZ2VCdWZmZXJHZW9tZXRyaWVzLFxuXHRtZXJnZUJ1ZmZlckF0dHJpYnV0ZXMsXG5cdGludGVybGVhdmVBdHRyaWJ1dGVzLFxuXHRlc3RpbWF0ZUJ5dGVzVXNlZCxcblx0bWVyZ2VWZXJ0aWNlcyxcblx0dG9UcmlhbmdsZXNEcmF3TW9kZSxcblx0Y29tcHV0ZU1vcnBoZWRBdHRyaWJ1dGVzLFxuXHRtZXJnZUdyb3Vwcyxcblx0dG9DcmVhc2VkTm9ybWFsc1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTY2VuZVJlbmRlcmVyVEpTIGZyb20gXCIuL1NjZW5lUmVuZGVyZXJUSlNcIjtcbmltcG9ydCBORlRhZGRUSlMgZnJvbSBcIi4vbWFya2VybWVkaWEvTkZUYWRkVEpTXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHsgU2NlbmVSZW5kZXJlclRKUywgTkZUYWRkVEpTIH07XG4iXSwibmFtZXMiOlsiVEhSRUUiLCJVdGlscyIsIlNjZW5lUmVuZGVyZXJUSlMiLCJjb25maWdEYXRhIiwiY2FudmFzRHJhdyIsInV1aWQiLCJjYW1lcmFCb29sIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnR5IiwidGFyZ2V0Iiwid2luZG93IiwiZ2xvYmFsIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiY2FudmFzIiwiY29udGV4dCIsImFscGhhIiwicHJlbXVsdGlwbGllZEFscGhhIiwiYW50aWFsaWFzIiwic3RlbmNpbCIsInByZWNpc2lvbiIsImRlcHRoIiwibG9nYXJpdGhtaWNEZXB0aEJ1ZmZlciIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2NlbmUiLCJTY2VuZSIsImdsb2JhbFNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJmb3YiLCJyYXRpbyIsIm5lYXIiLCJmYXIiLCJDYW1lcmEiLCJ2ZXJzaW9uIiwiY29uc29sZSIsImxvZyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5pdFJlbmRlcmVyIiwiX3RoaXMiLCJtYXRyaXhBdXRvVXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2Iiwic2V0TWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImRldGFpbCIsInByb2oiLCJhZGQiLCJsaWdodCIsIkFtYmllbnRMaWdodCIsIl9ldiIsInNldFNpemUiLCJzdyIsInNoIiwic2V0SW5pdFJlbmRlcmVyRXZlbnQiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJkcmF3IiwicmVuZGVyIiwiZ2V0UmVuZGVyZXIiLCJnZXRTY2VuZSIsImdldENhbWVyYSIsInNldFJlbmRlcmVyIiwic2V0U2NlbmUiLCJzZXRDYW1lcmEiLCJnZXRHbG9iYWxTY2VuZSIsImRlZmF1bHQiLCJPbmVFdXJvRmlsdGVyVmVjdG9yMyIsIkRlbGF5YWJsZVNpZ25hbEZpbHRlciIsIkV1bGVyIiwiTWF0cml4NCIsIlF1YXRlcm5pb24iLCJWZWN0b3IzIiwiQVJuZnRGaWx0ZXIiLCJkZWxheUVudGVyQ2hlY2siLCJkZWxheUV4aXRDaGVjayIsIl9wb3NpdGlvbkZpbHRlciIsImZpbHRlckZyZXF1ZW5jeSIsIl9yb3RhdGlvbkZpbHRlciIsInVwZGF0ZSIsIndvcmxkIiwicG9zIiwicm90YXRpb25WZWMiLCJzY2FsZSIsIl9oYXNGb3VuZCIsIl9mcmFtZURyb3BzIiwibWF0cml4VyIsIndvcmxkTWF0cml4IiwiZnJvbUFycmF5IiwiZ2V0QXJyYXlNYXRyaXgiLCJ2ZWNUcmFucyIsIl9sYXN0VHJhbnNsYXRpb24iLCJzZXRGcm9tTWF0cml4UG9zaXRpb24iLCJfY3VycmVudFRyYW5zbGF0aW9uIiwiTWF0aCIsImFicyIsImRpc3RhbmNlVG8iLCJfZGVsdGFBY2N1cmFjeSIsIlVwZGF0ZVBhcmFtcyIsImZpbHRlck1pbkN1dG9mZiIsImZpbHRlckJldGEiLCJmaWx0ZXJEY3V0b2ZmIiwibWF0cml4Iiwicm90YXRpb24iLCJldWxlclJvdCIsInBvc2l0aW9uIiwiZGVjb21wb3NlIiwiZVJvdCIsInNldEZyb21RdWF0ZXJuaW9uIiwiZXVsZXJUb1ZlY3RvcjMiLCJGaWx0ZXIiLCJzZXRGcm9tRXVsZXIiLCJhcnJheSIsImdldFRpbWUiLCJ0aW1lT3V0IiwiX3RpbWVPdXQiLCJfaW5EZWxheSIsIlVwZGF0ZSIsInRpY2siLCJ0aW1lIiwiX3ByZXZUaW1lIiwiX3RvdGFsVGltZSIsIkxvd1Bhc3NGaWx0ZXIiLCJzZXRBbHBoYSIsInkiLCJzIiwiRXJyb3IiLCJmaWx0ZXIiLCJ0aW1lc3RhbXAiLCJsYXN0VmFsdWUiLCJPbmVFdXJvRmlsdGVyIiwiZnJlcSIsIm1pbkN1dE9mZiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImJldGEiLCJkQ3V0T2ZmIiwieCIsImR4IiwibGFzdHRpbWUiLCJjdXJyVmFsdWUiLCJwcmV2VmFsdWUiLCJjdXRPZmYiLCJ0ZSIsInRhdSIsIlBJIiwiX2ZyZXEiLCJfbWluY3V0b2ZmIiwiX2JldGEiLCJfZGN1dG9mZiIsInByZXZYIiwiZWR4Iiwib25lRXVyb0ZpbHRlcnMiLCJwdXNoIiwiZ2V0IiwiaSIsIl92YWx1ZSIsIm91dCIsIm91dHB1dCIsInRvQXJyYXkiLCJpbnB1dCIsImZvckVhY2giLCJmaWx0ZXJzIiwiaWR4IiwiYXJyIiwiT2JqZWN0M0QiLCJQbGFuZUdlb21ldHJ5IiwiVGV4dHVyZUxvYWRlciIsIlZpZGVvVGV4dHVyZSIsIk1lc2giLCJNZXNoU3RhbmRhcmRNYXRlcmlhbCIsIkdMVEZMb2FkZXIiLCJORlRhZGRUSlMiLCJuYW1lcyIsIl9maWx0ZXIiLCJfb2VmIiwibWVzaCIsIm5hbWUiLCJvYmpWaXNpYmlsaXR5IiwibXNnIiwiaGVpZ2h0IiwiZHBpIiwid2lkdGgiLCJyb290IiwidmlzaWJsZSIsIm1hdHJpeEdMX1JIIiwiZW50aXRpZXMiLCJhZGRNb2RlbCIsInVybCIsIm1vZGVsIiwidGhyZWVHTFRGTG9hZGVyIiwibG9hZCIsImdsdGYiLCJzZXQiLCJzZXRYIiwic2V0WSIsInNldFoiLCJ6Iiwic2V0RnJvbVZlY3RvcjMiLCJpbnRlcnBvbGF0ZSIsImFkZE1vZGVsV2l0aENhbGxiYWNrIiwiY2FsbGJhY2siLCJfdGhpczIiLCJhZGRJbWFnZSIsImltYWdlVXJsIiwiY29sb3IiLCJjb25maWdzIiwiX3RoaXMzIiwicGxhbmVHZW9tIiwidyIsImgiLCJ3cyIsImhzIiwidGV4dHVyZSIsIm1hdGVyaWFsIiwibWFwIiwicGxhbmUiLCJhZGRWaWRlbyIsImlkIiwiX3RoaXM0IiwiQVJWaWRlbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtYXQiLCJwbGF5IiwicGF1c2UiLCJnZXROYW1lcyIsImVuYWJsZSIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImludGVycG9sYXRpb25GYWN0b3IiLCJ0cmFja2VkTWF0cml4IiwiZGVsdGEiLCJpbnRlcnBvbGF0ZWQiLCJpc01vYmlsZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJlbGVtZW50cyIsInNsaWNlIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=