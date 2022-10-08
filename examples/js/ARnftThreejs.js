(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"));
	else if(typeof define === 'function' && define.amd)
		define(["three"], factory);
	else if(typeof exports === 'object')
		exports["ARnftThreejs"] = factory(require("three"));
	else
		root["ARnftThreejs"] = factory(root["THREE"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_three__) {
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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.ts");





var SceneRendererTJS = /*#__PURE__*/function () {
  function SceneRendererTJS(configData, canvasDraw, uuid, cameraBool) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SceneRendererTJS);

    this.configData = configData;
    this.uuid = uuid;
    this.target = window || __webpack_require__.g;
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({
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
    this.scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
    SceneRendererTJS.globalScene = this.scene;

    if (cameraBool === true) {
      this.camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(configData.camera.fov, configData.camera.ratio, configData.camera.near, configData.camera.far);
    } else {
      this.camera = new three__WEBPACK_IMPORTED_MODULE_2__.Camera();
    }

    this.version = "0.4.6";
    console.log("ARnftThreejs version: ", this.version);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SceneRendererTJS, [{
    key: "initRenderer",
    value: function initRenderer() {
      var _this = this;

      this.camera.matrixAutoUpdate = false;
      this.target.addEventListener("getProjectionMatrix", function (ev) {
        _utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.setMatrix(_this.camera.projectionMatrix, ev.detail.proj);
      });
      this.scene.add(this.camera);
      var light = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0xffffff);
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
/* harmony import */ var _OneEuroFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OneEuroFilter */ "./src/filters/OneEuroFilter.ts");
/* harmony import */ var _DelayableSignalFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DelayableSignalFilter */ "./src/filters/DelayableSignalFilter.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_4__);





var ARnftFilter = /*#__PURE__*/function () {
  function ARnftFilter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ARnftFilter);

    this._hasFound = false;
    this._frameDrops = 0;
    this._deltaAccuracy = 10;
    this.filterFrequency = 30.0;
    this.filterMinCutoff = 1.0;
    this.filterBeta = 0.0;
    this.filterDcutoff = 1.0;
    this.delayEnterCheck = new _DelayableSignalFilter__WEBPACK_IMPORTED_MODULE_3__.DelayableSignalFilter(2);
    this.delayExitCheck = new _DelayableSignalFilter__WEBPACK_IMPORTED_MODULE_3__.DelayableSignalFilter(0);
    this._positionFilter = new _OneEuroFilter__WEBPACK_IMPORTED_MODULE_2__.OneEuroFilterVector3(this.filterFrequency);
    this._rotationFilter = new _OneEuroFilter__WEBPACK_IMPORTED_MODULE_2__.OneEuroFilterVector3(this.filterFrequency * 2);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ARnftFilter, [{
    key: "update",
    value: function update(world) {
      var pos = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
      var rotationVec = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
      var scale = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();

      if (!world) {
        this._hasFound = false;
        this._frameDrops = 0;
      } else {
        var matrixW = new three__WEBPACK_IMPORTED_MODULE_4__.Matrix4();
        var worldMatrix = matrixW.fromArray(this.getArrayMatrix(world));

        if (!this._hasFound) {
          this._hasFound = true;
          var vecTrans = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();
          this._lastTranslation = vecTrans.setFromMatrixPosition(worldMatrix);
        } else {
          var _vecTrans = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();

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

        var matrix = new three__WEBPACK_IMPORTED_MODULE_4__.Matrix4();
        matrix = worldMatrix;
        var rotation = new three__WEBPACK_IMPORTED_MODULE_4__.Quaternion();
        var eulerRot = new three__WEBPACK_IMPORTED_MODULE_4__.Euler();
        var position = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0);
        worldMatrix.decompose(position, rotation, scale);
        var eRot = eulerRot.setFromQuaternion(rotation);
        rotationVec = this._rotationFilter.Filter(eRot.toVector3());
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
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");



var DelayableSignalFilter = /*#__PURE__*/function () {
  function DelayableSignalFilter(timeOut) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DelayableSignalFilter);

    this._timeOut = timeOut;
    this._inDelay = false;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DelayableSignalFilter, [{
    key: "Update",
    value: function Update(tick) {
      var time = (0,_utils_Utils__WEBPACK_IMPORTED_MODULE_2__.getTime)();

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
/* harmony export */   "default": () => (/* binding */ OneEuroFilter),
/* harmony export */   "OneEuroFilterVector3": () => (/* binding */ OneEuroFilterVector3)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);




var LowPassFilter = /*#__PURE__*/function () {
  function LowPassFilter(alpha) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LowPassFilter);

    this.alpha = 0;
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

    this.currValue = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
    this.prevValue = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
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

      for (var i = 0; i < this.oneEuroFilters.length; i++) {
        this.oneEuroFilters[i].UpdateParams(this._freq, this._mincutoff, this._beta, this._dcutoff);
      }
    }
  }, {
    key: "Filter",
    value: function Filter(_value) {
      var timestamp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1.0;
      this.prevValue = this.currValue;
      var out = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
      var output = out.toArray();

      var input = _value.toArray();

      this.oneEuroFilters.forEach(function (filters, idx) {
        output[idx] = filters.Filter(input[idx], timestamp);
      });
      var arr = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _filters_ARnftFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filters/ARnftFilter */ "./src/filters/ARnftFilter.ts");
/* harmony import */ var _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SceneRendererTJS */ "./src/SceneRendererTJS.ts");








var NFTaddTJS = /*#__PURE__*/function () {
  function NFTaddTJS(uuid) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NFTaddTJS);

    this.entities = [];
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
      var _this = this;

      this.target.addEventListener("getNFTData-" + this.uuid + "-" + name, function (ev) {
        var msg = ev.detail;
        mesh.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
        mesh.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
      });
      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      root.add(mesh);
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        root.visible = true;
        mesh.visible = true;

        if (_this._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0)];
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
          var matrix = ev.detail.matrixGL_RH;
          _utils_Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.setMatrix(root.matrix, matrix);
        }
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
      var _this2 = this;

      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      var model;
      var threeGLTFLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader();
      threeGLTFLoader.load(url, function (gltf) {
        model = gltf.scene;
        model.scale.set(scale, scale, scale);
        model.rotation.x = Math.PI / 2;

        _this2.target.addEventListener("getNFTData-" + _this2.uuid + "-" + name, function (ev) {
          var msg = ev.detail;
          model.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
          model.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
        });

        root.add(model);
      });
      this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + name, function (ev) {
        root.visible = true;
        model.visible = true;

        if (_this2._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0)];
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
          var matrix = ev.detail.matrixGL_RH;
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
      var _this3 = this;

      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      var model;
      var threeGLTFLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader();
      threeGLTFLoader.load(url, function (gltf) {
        model = gltf.scene;

        _this3.target.addEventListener("getNFTData-" + _this3.uuid + "-" + name, function (ev) {
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

        if (_this3._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0)];
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
          var matrix = ev.detail.matrixGL_RH;
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
      var _this4 = this;

      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      var planeGeom = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(configs.w, configs.h, configs.ws, configs.hs);
      var texture = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load(imageUrl);
      var material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshStandardMaterial({
        color: color,
        map: texture
      });
      var plane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(planeGeom, material);
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

        if (_this4._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0)];
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
          var matrix = ev.detail.matrixGL_RH;
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
      var _this5 = this;

      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = "root-" + name;
      this.scene.add(root);
      var ARVideo = document.getElementById(id);
      var texture = new three__WEBPACK_IMPORTED_MODULE_2__.VideoTexture(ARVideo);
      var mat = new three__WEBPACK_IMPORTED_MODULE_2__.MeshStandardMaterial({
        color: 0xbbbbff,
        map: texture
      });
      var planeGeom = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(configs.w, configs.h, configs.ws, configs.hs);
      var plane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(planeGeom, mat);
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

        if (_this5._oef === true) {
          var filter = [new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0)];
          filter = _this5._filter.update(ev.detail.matrixGL_RH);
          root.position.setX(filter[0].x);
          root.position.setY(filter[0].y);
          root.position.setZ(filter[0].z);
          root.rotation.setFromVector3(filter[1]);
          root.scale.setX(filter[2].x);
          root.scale.setY(filter[2].y);
          root.scale.setZ(filter[2].z);
        } else {
          root.matrixAutoUpdate = false;
          var matrix = ev.detail.matrixGL_RH;
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
/* harmony export */   "getTime": () => (/* binding */ getTime),
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


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
Utils.trackedMatrix = {
  delta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  interpolated: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
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

			return new GLTFMaterialsSpecularExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFLightsExtension( parser );

		} );

		this.register( function ( parser ) {

			return new GLTFMeshoptCompression( parser );

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

		let content;
		const extensions = {};
		const plugins = {};

		if ( typeof data === 'string' ) {

			content = data;

		} else {

			const magic = three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText( new Uint8Array( data, 0, 4 ) );

			if ( magic === BINARY_EXTENSION_HEADER_MAGIC ) {

				try {

					extensions[ EXTENSIONS.KHR_BINARY_GLTF ] = new GLTFBinaryExtension( data );

				} catch ( error ) {

					if ( onError ) onError( error );
					return;

				}

				content = extensions[ EXTENSIONS.KHR_BINARY_GLTF ].content;

			} else {

				content = three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText( new Uint8Array( data ) );

			}

		}

		const json = JSON.parse( content );

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

					case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
						extensions[ extensionName ] = new GLTFMaterialsPbrSpecularGlossinessExtension();
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
	KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
	KHR_MATERIALS_SHEEN: 'KHR_materials_sheen',
	KHR_MATERIALS_SPECULAR: 'KHR_materials_specular',
	KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
	KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
	KHR_MATERIALS_VOLUME: 'KHR_materials_volume',
	KHR_TEXTURE_BASISU: 'KHR_texture_basisu',
	KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
	KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
	EXT_TEXTURE_WEBP: 'EXT_texture_webp',
	EXT_MESHOPT_COMPRESSION: 'EXT_meshopt_compression'
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

		if ( lightDef.intensity !== undefined ) lightNode.intensity = lightDef.intensity;

		lightNode.name = parser.createUniqueName( lightDef.name || ( 'light_' + lightIndex ) );

		dependency = Promise.resolve( lightNode );

		parser.cache.add( cacheKey, dependency );

		return dependency;

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

				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

			}

		}

		return Promise.all( pending );

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

			pending.push( parser.assignTexture( materialParams, 'sheenColorMap', extension.sheenColorTexture ) );

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

		materialParams.attenuationDistance = extension.attenuationDistance || 0;

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

			pending.push( parser.assignTexture( materialParams, 'specularColorMap', extension.specularColorTexture ).then( function ( texture ) {

				texture.encoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;

			} ) );

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
		const source = json.images[ extension.source ];
		const loader = parser.options.ktx2Loader;

		if ( ! loader ) {

			if ( json.extensionsRequired && json.extensionsRequired.indexOf( this.name ) >= 0 ) {

				throw new Error( 'THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures' );

			} else {

				// Assumes that the extension is optional and that a fallback texture is present
				return null;

			}

		}

		return parser.loadTextureImage( textureIndex, source, loader );

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

			if ( isSupported ) return parser.loadTextureImage( textureIndex, source, loader );

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

			return Promise.all( [ buffer, decoder.ready ] ).then( function ( res ) {

				const byteOffset = extensionDef.byteOffset || 0;
				const byteLength = extensionDef.byteLength || 0;

				const count = extensionDef.count;
				const stride = extensionDef.byteStride;

				const result = new ArrayBuffer( count * stride );
				const source = new Uint8Array( res[ 0 ], byteOffset, byteLength );

				decoder.decodeGltfBuffer( new Uint8Array( result ), count, stride, source, extensionDef.mode, extensionDef.filter );
				return result;

			} );

		} else {

			return null;

		}

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

		this.header = {
			magic: three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText( new Uint8Array( data.slice( 0, 4 ) ) ),
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
				this.content = three__WEBPACK_IMPORTED_MODULE_0__.LoaderUtils.decodeText( contentArray );

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

				attributeTypeMap[ threeAttributeName ] = componentType;
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
 * Specular-Glossiness Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Archived/KHR_materials_pbrSpecularGlossiness
 */

/**
 * A sub class of StandardMaterial with some of the functionality
 * changed via the `onBeforeCompile` callback
 * @pailhead
 */
class GLTFMeshStandardSGMaterial extends three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial {

	constructor( params ) {

		super();

		this.isGLTFSpecularGlossinessMaterial = true;

		//various chunks that need replacing
		const specularMapParsFragmentChunk = [
			'#ifdef USE_SPECULARMAP',
			'	uniform sampler2D specularMap;',
			'#endif'
		].join( '\n' );

		const glossinessMapParsFragmentChunk = [
			'#ifdef USE_GLOSSINESSMAP',
			'	uniform sampler2D glossinessMap;',
			'#endif'
		].join( '\n' );

		const specularMapFragmentChunk = [
			'vec3 specularFactor = specular;',
			'#ifdef USE_SPECULARMAP',
			'	vec4 texelSpecular = texture2D( specularMap, vUv );',
			'	texelSpecular = sRGBToLinear( texelSpecular );',
			'	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
			'	specularFactor *= texelSpecular.rgb;',
			'#endif'
		].join( '\n' );

		const glossinessMapFragmentChunk = [
			'float glossinessFactor = glossiness;',
			'#ifdef USE_GLOSSINESSMAP',
			'	vec4 texelGlossiness = texture2D( glossinessMap, vUv );',
			'	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
			'	glossinessFactor *= texelGlossiness.a;',
			'#endif'
		].join( '\n' );

		const lightPhysicalFragmentChunk = [
			'PhysicalMaterial material;',
			'material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );',
			'vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );',
			'float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );',
			'material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.',
			'material.roughness += geometryRoughness;',
			'material.roughness = min( material.roughness, 1.0 );',
			'material.specularColor = specularFactor;',
		].join( '\n' );

		const uniforms = {
			specular: { value: new three__WEBPACK_IMPORTED_MODULE_0__.Color().setHex( 0xffffff ) },
			glossiness: { value: 1 },
			specularMap: { value: null },
			glossinessMap: { value: null }
		};

		this._extraUniforms = uniforms;

		this.onBeforeCompile = function ( shader ) {

			for ( const uniformName in uniforms ) {

				shader.uniforms[ uniformName ] = uniforms[ uniformName ];

			}

			shader.fragmentShader = shader.fragmentShader
				.replace( 'uniform float roughness;', 'uniform vec3 specular;' )
				.replace( 'uniform float metalness;', 'uniform float glossiness;' )
				.replace( '#include <roughnessmap_pars_fragment>', specularMapParsFragmentChunk )
				.replace( '#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk )
				.replace( '#include <roughnessmap_fragment>', specularMapFragmentChunk )
				.replace( '#include <metalnessmap_fragment>', glossinessMapFragmentChunk )
				.replace( '#include <lights_physical_fragment>', lightPhysicalFragmentChunk );

		};

		Object.defineProperties( this, {

			specular: {
				get: function () {

					return uniforms.specular.value;

				},
				set: function ( v ) {

					uniforms.specular.value = v;

				}
			},

			specularMap: {
				get: function () {

					return uniforms.specularMap.value;

				},
				set: function ( v ) {

					uniforms.specularMap.value = v;

					if ( v ) {

						this.defines.USE_SPECULARMAP = ''; // USE_UV is set by the renderer for specular maps

					} else {

						delete this.defines.USE_SPECULARMAP;

					}

				}
			},

			glossiness: {
				get: function () {

					return uniforms.glossiness.value;

				},
				set: function ( v ) {

					uniforms.glossiness.value = v;

				}
			},

			glossinessMap: {
				get: function () {

					return uniforms.glossinessMap.value;

				},
				set: function ( v ) {

					uniforms.glossinessMap.value = v;

					if ( v ) {

						this.defines.USE_GLOSSINESSMAP = '';
						this.defines.USE_UV = '';

					} else {

						delete this.defines.USE_GLOSSINESSMAP;
						delete this.defines.USE_UV;

					}

				}
			}

		} );

		delete this.metalness;
		delete this.roughness;
		delete this.metalnessMap;
		delete this.roughnessMap;

		this.setValues( params );

	}

	copy( source ) {

		super.copy( source );

		this.specularMap = source.specularMap;
		this.specular.copy( source.specular );
		this.glossinessMap = source.glossinessMap;
		this.glossiness = source.glossiness;
		delete this.metalness;
		delete this.roughness;
		delete this.metalnessMap;
		delete this.roughnessMap;
		return this;

	}

}


class GLTFMaterialsPbrSpecularGlossinessExtension {

	constructor() {

		this.name = EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS;

		this.specularGlossinessParams = [
			'color',
			'map',
			'lightMap',
			'lightMapIntensity',
			'aoMap',
			'aoMapIntensity',
			'emissive',
			'emissiveIntensity',
			'emissiveMap',
			'bumpMap',
			'bumpScale',
			'normalMap',
			'normalMapType',
			'displacementMap',
			'displacementScale',
			'displacementBias',
			'specularMap',
			'specular',
			'glossinessMap',
			'glossiness',
			'alphaMap',
			'envMap',
			'envMapIntensity',
			'refractionRatio',
		];

	}

	getMaterialType() {

		return GLTFMeshStandardSGMaterial;

	}

	extendParams( materialParams, materialDef, parser ) {

		const pbrSpecularGlossiness = materialDef.extensions[ this.name ];

		materialParams.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 1.0, 1.0, 1.0 );
		materialParams.opacity = 1.0;

		const pending = [];

		if ( Array.isArray( pbrSpecularGlossiness.diffuseFactor ) ) {

			const array = pbrSpecularGlossiness.diffuseFactor;

			materialParams.color.fromArray( array );
			materialParams.opacity = array[ 3 ];

		}

		if ( pbrSpecularGlossiness.diffuseTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'map', pbrSpecularGlossiness.diffuseTexture ) );

		}

		materialParams.emissive = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 0.0, 0.0, 0.0 );
		materialParams.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
		materialParams.specular = new three__WEBPACK_IMPORTED_MODULE_0__.Color( 1.0, 1.0, 1.0 );

		if ( Array.isArray( pbrSpecularGlossiness.specularFactor ) ) {

			materialParams.specular.fromArray( pbrSpecularGlossiness.specularFactor );

		}

		if ( pbrSpecularGlossiness.specularGlossinessTexture !== undefined ) {

			const specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
			pending.push( parser.assignTexture( materialParams, 'glossinessMap', specGlossMapDef ) );
			pending.push( parser.assignTexture( materialParams, 'specularMap', specGlossMapDef ) );

		}

		return Promise.all( pending );

	}

	createMaterial( materialParams ) {

		const material = new GLTFMeshStandardSGMaterial( materialParams );
		material.fog = true;

		material.color = materialParams.color;

		material.map = materialParams.map === undefined ? null : materialParams.map;

		material.lightMap = null;
		material.lightMapIntensity = 1.0;

		material.aoMap = materialParams.aoMap === undefined ? null : materialParams.aoMap;
		material.aoMapIntensity = 1.0;

		material.emissive = materialParams.emissive;
		material.emissiveIntensity = 1.0;
		material.emissiveMap = materialParams.emissiveMap === undefined ? null : materialParams.emissiveMap;

		material.bumpMap = materialParams.bumpMap === undefined ? null : materialParams.bumpMap;
		material.bumpScale = 1;

		material.normalMap = materialParams.normalMap === undefined ? null : materialParams.normalMap;
		material.normalMapType = three__WEBPACK_IMPORTED_MODULE_0__.TangentSpaceNormalMap;

		if ( materialParams.normalScale ) material.normalScale = materialParams.normalScale;

		material.displacementMap = null;
		material.displacementScale = 1;
		material.displacementBias = 0;

		material.specularMap = materialParams.specularMap === undefined ? null : materialParams.specularMap;
		material.specular = materialParams.specular;

		material.glossinessMap = materialParams.glossinessMap === undefined ? null : materialParams.glossinessMap;
		material.glossiness = materialParams.glossiness;

		material.alphaMap = null;

		material.envMap = materialParams.envMap === undefined ? null : materialParams.envMap;
		material.envMapIntensity = 1.0;

		material.refractionRatio = 0.98;

		return material;

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

}

GLTFCubicSplineInterpolant.prototype.beforeStart_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

GLTFCubicSplineInterpolant.prototype.afterEnd_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

GLTFCubicSplineInterpolant.prototype.interpolate_ = function ( i1, t0, t, t1 ) {

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

};

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

	for ( let i = 0, il = targets.length; i < il; i ++ ) {

		const target = targets[ i ];

		if ( target.POSITION !== undefined ) hasMorphPosition = true;
		if ( target.NORMAL !== undefined ) hasMorphNormal = true;

		if ( hasMorphPosition && hasMorphNormal ) break;

	}

	if ( ! hasMorphPosition && ! hasMorphNormal ) return Promise.resolve( geometry );

	const pendingPositionAccessors = [];
	const pendingNormalAccessors = [];

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

	}

	return Promise.all( [
		Promise.all( pendingPositionAccessors ),
		Promise.all( pendingNormalAccessors )
	] ).then( function ( accessors ) {

		const morphPositions = accessors[ 0 ];
		const morphNormals = accessors[ 1 ];

		if ( hasMorphPosition ) geometry.morphAttributes.position = morphPositions;
		if ( hasMorphNormal ) geometry.morphAttributes.normal = morphNormals;
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

		this.textureCache = {};

		// Track node names, to ensure no duplicates
		this.nodeNamesUsed = {};

		// Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
		// expensive work of uploading a texture to the GPU off the main thread.
		if ( typeof createImageBitmap !== 'undefined' && /Firefox|Safari/.test( navigator.userAgent ) === false ) {

			this.textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.ImageBitmapLoader( this.options.manager );

		} else {

			this.textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader( this.options.manager );

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
					dependency = this.loadNode( index );
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
					dependency = this.loadAnimation( index );
					break;

				case 'camera':
					dependency = this.loadCamera( index );
					break;

				default:
					throw new Error( 'Unknown type: ' + type );

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

			// Ignore empty accessors, which may be used to declare runtime
			// information about attributes coming from another source (e.g. Draco
			// compression extension).
			return Promise.resolve( null );

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
	 * @return {Promise<THREE.Texture>}
	 */
	loadTexture( textureIndex ) {

		const json = this.json;
		const options = this.options;
		const textureDef = json.textures[ textureIndex ];
		const source = json.images[ textureDef.source ];

		let loader = this.textureLoader;

		if ( source.uri ) {

			const handler = options.manager.getHandler( source.uri );
			if ( handler !== null ) loader = handler;

		}

		return this.loadTextureImage( textureIndex, source, loader );

	}

	loadTextureImage( textureIndex, source, loader ) {

		const parser = this;
		const json = this.json;
		const options = this.options;

		const textureDef = json.textures[ textureIndex ];

		const cacheKey = ( source.uri || source.bufferView ) + ':' + textureDef.sampler;

		if ( this.textureCache[ cacheKey ] ) {

			// See https://github.com/mrdoob/three.js/issues/21559.
			return this.textureCache[ cacheKey ];

		}

		const URL = self.URL || self.webkitURL;

		let sourceURI = source.uri || '';
		let isObjectURL = false;

		if ( source.bufferView !== undefined ) {

			// Load binary image data from bufferView, if provided.

			sourceURI = parser.getDependency( 'bufferView', source.bufferView ).then( function ( bufferView ) {

				isObjectURL = true;
				const blob = new Blob( [ bufferView ], { type: source.mimeType } );
				sourceURI = URL.createObjectURL( blob );
				return sourceURI;

			} );

		} else if ( source.uri === undefined ) {

			throw new Error( 'THREE.GLTFLoader: Image ' + textureIndex + ' is missing URI and bufferView' );

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

			texture.flipY = false;

			if ( textureDef.name ) texture.name = textureDef.name;

			const samplers = json.samplers || {};
			const sampler = samplers[ textureDef.sampler ] || {};

			texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ] || three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter;
			texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ] || three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapLinearFilter;
			texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ] || three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;
			texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ] || three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;

			parser.associations.set( texture, { textures: textureIndex } );

			return texture;

		} ).catch( function () {

			console.error( 'THREE.GLTFLoader: Couldn\'t load texture', sourceURI );
			return null;

		} );

		this.textureCache[ cacheKey ] = promise;

		return promise;

	}

	/**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise<Texture>}
	 */
	assignTexture( materialParams, mapName, mapDef ) {

		const parser = this;

		return this.getDependency( 'texture', mapDef.index ).then( function ( texture ) {

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

			if ( material.isGLTFSpecularGlossinessMaterial ) cacheKey += 'specular-glossiness:';
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

		if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ] ) {

			const sgExtension = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ];
			materialType = sgExtension.getMaterialType();
			pending.push( sgExtension.extendParams( materialParams, materialDef, parser ) );

		} else if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ] ) {

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

				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

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

			materialParams.format = three__WEBPACK_IMPORTED_MODULE_0__.RGBFormat;
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

			pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture ) );

		}

		return Promise.all( pending ).then( function () {

			let material;

			if ( materialType === GLTFMeshStandardSGMaterial ) {

				material = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].createMaterial( materialParams );

			} else {

				material = new materialType( materialParams );

			}

			if ( materialDef.name ) material.name = materialDef.name;

			// baseColorTexture, emissiveTexture, and specularGlossinessTexture use sRGB encoding.
			if ( material.map ) material.map.encoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;
			if ( material.emissiveMap ) material.emissiveMap.encoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;

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

						mesh.geometry = toTrianglesDrawMode( mesh.geometry, three__WEBPACK_IMPORTED_MODULE_0__.TriangleStripDrawMode );

					} else if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ) {

						mesh.geometry = toTrianglesDrawMode( mesh.geometry, three__WEBPACK_IMPORTED_MODULE_0__.TriangleFanDrawMode );

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
	 * @return {Promise<Object>}
	 */
	loadSkin( skinIndex ) {

		const skinDef = this.json.skins[ skinIndex ];

		const skinEntry = { joints: skinDef.joints };

		if ( skinDef.inverseBindMatrices === undefined ) {

			return Promise.resolve( skinEntry );

		}

		return this.getDependency( 'accessor', skinDef.inverseBindMatrices ).then( function ( accessor ) {

			skinEntry.inverseBindMatrices = accessor;

			return skinEntry;

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
			const name = target.node !== undefined ? target.node : target.id; // NOTE: target.id is deprecated.
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
				node.matrixAutoUpdate = true;

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

			const pending = [];

			const meshPromise = parser._invokeOne( function ( ext ) {

				return ext.createNodeMesh && ext.createNodeMesh( nodeIndex );

			} );

			if ( meshPromise ) {

				pending.push( meshPromise );

			}

			if ( nodeDef.camera !== undefined ) {

				pending.push( parser.getDependency( 'camera', nodeDef.camera ).then( function ( camera ) {

					return parser._getNodeRef( parser.cameraCache, nodeDef.camera, camera );

				} ) );

			}

			parser._invokeAll( function ( ext ) {

				return ext.createNodeAttachment && ext.createNodeAttachment( nodeIndex );

			} ).forEach( function ( promise ) {

				pending.push( promise );

			} );

			return Promise.all( pending );

		}() ).then( function ( objects ) {

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

			return node;

		} );

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<Group>}
	 */
	loadScene( sceneIndex ) {

		const json = this.json;
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

			pending.push( buildNodeHierarchy( nodeIds[ i ], scene, json, parser ) );

		}

		return Promise.all( pending ).then( function () {

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

function buildNodeHierarchy( nodeId, parentObject, json, parser ) {

	const nodeDef = json.nodes[ nodeId ];

	return parser.getDependency( 'node', nodeId ).then( function ( node ) {

		if ( nodeDef.skin === undefined ) return node;

		// build skeleton here as well

		let skinEntry;

		return parser.getDependency( 'skin', nodeDef.skin ).then( function ( skin ) {

			skinEntry = skin;

			const pendingJoints = [];

			for ( let i = 0, il = skinEntry.joints.length; i < il; i ++ ) {

				pendingJoints.push( parser.getDependency( 'node', skinEntry.joints[ i ] ) );

			}

			return Promise.all( pendingJoints );

		} ).then( function ( jointNodes ) {

			node.traverse( function ( mesh ) {

				if ( ! mesh.isMesh ) return;

				const bones = [];
				const boneInverses = [];

				for ( let j = 0, jl = jointNodes.length; j < jl; j ++ ) {

					const jointNode = jointNodes[ j ];

					if ( jointNode ) {

						bones.push( jointNode );

						const mat = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();

						if ( skinEntry.inverseBindMatrices !== undefined ) {

							mat.fromArray( skinEntry.inverseBindMatrices.array, j * 16 );

						}

						boneInverses.push( mat );

					} else {

						console.warn( 'THREE.GLTFLoader: Joint "%s" could not be found.', skinEntry.joints[ j ] );

					}

				}

				mesh.bind( new three__WEBPACK_IMPORTED_MODULE_0__.Skeleton( bones, boneInverses ), mesh.matrixWorld );

			} );

			return node;

		} );

	} ).then( function ( node ) {

		// build node hierachy

		parentObject.add( node );

		const pending = [];

		if ( nodeDef.children ) {

			const children = nodeDef.children;

			for ( let i = 0, il = children.length; i < il; i ++ ) {

				const child = children[ i ];
				pending.push( buildNodeHierarchy( child, node, json, parser ) );

			}

		}

		return Promise.all( pending );

	} );

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

/**
 * @param {BufferGeometry} geometry
 * @param {Number} drawMode
 * @return {BufferGeometry}
 */
function toTrianglesDrawMode( geometry, drawMode ) {

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

			console.error( 'THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.' );
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

		console.error( 'THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.' );

	}

	// build final geometry

	const newGeometry = geometry.clone();
	newGeometry.setIndex( newIndices );

	return newGeometry;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsOENBQThDLDBDQUFPOztBQUVyRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFNBQVMsdURBQW9COztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGtDQUFrQyx3Q0FBSztBQUN2QztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLHVEQUFvQjs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFNBQVMsdURBQW9COztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esd0NBQXdDLHdDQUFLOztBQUU3Qzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFNBQVMsdURBQW9COztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQ0FBcUMsd0NBQUs7O0FBRTFDOztBQUVBOztBQUVBLHVCQUF1QiwrQ0FBWTs7QUFFbkMsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVK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O0FBRUE7O0FBRUEsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBLHlDQUF5Qzs7QUFFekMsT0FBTzs7QUFFUDs7QUFFQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsNkJBQTZCLHdDQUFLO0FBQ2xDOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsZ0NBQWdDLHdDQUFLO0FBQ3JDO0FBQ0EsZ0NBQWdDLHdDQUFLOztBQUVyQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsd0RBQXFCOztBQUVoRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBLGlFQUFlO0FBQUUsa0JBQWdCLEVBQWhCLHlEQUFGO0FBQW9CLFdBQVMsRUFBVCw4REFBUztBQUE3QixDQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9TY2VuZVJlbmRlcmVyVEpTLnRzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9maWx0ZXJzL0FSbmZ0RmlsdGVyLnRzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9maWx0ZXJzL0RlbGF5YWJsZVNpZ25hbEZpbHRlci50cyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvZmlsdGVycy9PbmVFdXJvRmlsdGVyLnRzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9tYXJrZXJtZWRpYS9ORlRhZGRUSlMudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL3V0aWxzL1V0aWxzLnRzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy9leHRlcm5hbCB1bWQge1wiY29tbW9uanNcIjpcInRocmVlXCIsXCJjb21tb25qczJcIjpcInRocmVlXCIsXCJhbWRcIjpcInRocmVlXCIsXCJyb290XCI6XCJUSFJFRVwifSIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidGhyZWVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1widGhyZWVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQVJuZnRUaHJlZWpzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwidGhyZWVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFSbmZ0VGhyZWVqc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlRIUkVFXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGhyZWVfXykge1xucmV0dXJuICIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi91dGlscy9VdGlsc1wiO1xuXG5pbnRlcmZhY2UgQ29uZmlnRGF0YSB7XG4gICAgY2FtZXJhOiB7XG4gICAgICAgIGZhcjogbnVtYmVyO1xuICAgICAgICBmb3Y6IG51bWJlcjtcbiAgICAgICAgbWF0cml4QXV0b1VwZGF0ZTogYm9vbGVhbjtcbiAgICAgICAgbmVhcjogbnVtYmVyO1xuICAgICAgICByYXRpbzogbnVtYmVyO1xuICAgIH07XG4gICAgcmVuZGVyZXI6IHtcbiAgICAgICAgYWxwaGE6IGJvb2xlYW47XG4gICAgICAgIGFudGlhbGlhczogYm9vbGVhbjtcbiAgICAgICAgY29udGV4dDogYW55O1xuICAgICAgICBkZXB0aDogYm9vbGVhbjtcbiAgICAgICAgbG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcjogYm9vbGVhbjtcbiAgICAgICAgcHJlY2lzaW9uOiBzdHJpbmc7XG4gICAgICAgIHN0ZW5jaWw6IGJvb2xlYW47XG4gICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogYm9vbGVhbjtcbiAgICAgICAgb2JqVmlzaWJpbGl0eTogYm9vbGVhbjtcbiAgICB9O1xufVxuXG5pbnRlcmZhY2UgUm9vdCBleHRlbmRzIFRIUkVFLk9iamVjdDNEIHtcbiAgICAvL21hdHJpeDogb2JqZWN0XG59XG5cbmludGVyZmFjZSBSZW5kZXJlciB7XG4gICAgcmVuZGVyOiAoc2NlbmU6IFRIUkVFLlNjZW5lLCBjYW1lcmE6IFRIUkVFLkNhbWVyYSkgPT4gdm9pZDtcbiAgICBzZXRQaXhlbFJhdGlvOiAocGl4ZWxSYXRpbzogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHNldFNpemU6ICh3OiBudW1iZXIsIGg6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIENhbWVyYSBleHRlbmRzIFRIUkVFLkNhbWVyYSB7XG4gICAgbWF0cml4QXV0b1VwZGF0ZTogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFNjZW5lIGV4dGVuZHMgVEhSRUUuU2NlbmUge1xuICAgIGFkZDogKG5vZGU6IFRIUkVFLk9iamVjdDNEKSA9PiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZVJlbmRlcmVyVEpTIHtcbiAgICBwdWJsaWMgY2FudmFzX2RyYXc6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY2FtZXJhOiBDYW1lcmE7XG4gICAgcHJpdmF0ZSBjb25maWdEYXRhOiBDb25maWdEYXRhO1xuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXI7XG4gICAgcHJpdmF0ZSB1dWlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByb290OiBSb290O1xuICAgIHByaXZhdGUgdGFyZ2V0OiBFdmVudFRhcmdldDtcbiAgICBwcml2YXRlIHNjZW5lOiBTY2VuZTtcbiAgICBwcml2YXRlIHN0YXRpYyBnbG9iYWxTY2VuZTogU2NlbmU7XG4gICAgcHJpdmF0ZSB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWdEYXRhOiBDb25maWdEYXRhLCBjYW52YXNEcmF3OiBIVE1MQ2FudmFzRWxlbWVudCwgdXVpZDogc3RyaW5nLCBjYW1lcmFCb29sOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuY29uZmlnRGF0YSA9IGNvbmZpZ0RhdGE7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gd2luZG93IHx8IGdsb2JhbDtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgIGNhbnZhczogY2FudmFzRHJhdyxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbmZpZ0RhdGEucmVuZGVyZXIuY29udGV4dCxcbiAgICAgICAgICAgIGFscGhhOiBjb25maWdEYXRhLnJlbmRlcmVyLmFscGhhLFxuICAgICAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBjb25maWdEYXRhLnJlbmRlcmVyLnByZW11bHRpcGxpZWRBbHBoYSxcbiAgICAgICAgICAgIGFudGlhbGlhczogY29uZmlnRGF0YS5yZW5kZXJlci5hbnRpYWxpYXMsXG4gICAgICAgICAgICBzdGVuY2lsOiBjb25maWdEYXRhLnJlbmRlcmVyLnN0ZW5jaWwsXG4gICAgICAgICAgICBwcmVjaXNpb246IGNvbmZpZ0RhdGEucmVuZGVyZXIucHJlY2lzaW9uLFxuICAgICAgICAgICAgZGVwdGg6IGNvbmZpZ0RhdGEucmVuZGVyZXIuZGVwdGgsXG4gICAgICAgICAgICBsb2dhcml0aG1pY0RlcHRoQnVmZmVyOiBjb25maWdEYXRhLnJlbmRlcmVyLmxvZ2FyaXRobWljRGVwdGhCdWZmZXIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIFNjZW5lUmVuZGVyZXJUSlMuZ2xvYmFsU2NlbmUgPSB0aGlzLnNjZW5lO1xuICAgICAgICBpZiAoY2FtZXJhQm9vbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICAgICAgICAgICAgY29uZmlnRGF0YS5jYW1lcmEuZm92LFxuICAgICAgICAgICAgICAgIGNvbmZpZ0RhdGEuY2FtZXJhLnJhdGlvLFxuICAgICAgICAgICAgICAgIGNvbmZpZ0RhdGEuY2FtZXJhLm5lYXIsXG4gICAgICAgICAgICAgICAgY29uZmlnRGF0YS5jYW1lcmEuZmFyXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuQ2FtZXJhKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZXJzaW9uID0gXCIwLjQuNlwiO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFSbmZ0VGhyZWVqcyB2ZXJzaW9uOiBcIiwgdGhpcy52ZXJzaW9uKTtcbiAgICB9XG5cbiAgICBpbml0UmVuZGVyZXIoKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldFByb2plY3Rpb25NYXRyaXhcIiwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIFV0aWxzLnNldE1hdHJpeCh0aGlzLmNhbWVyYS5wcm9qZWN0aW9uTWF0cml4LCBldi5kZXRhaWwucHJvaik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNhbWVyYSk7XG5cbiAgICAgICAgY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQobGlnaHQpO1xuXG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRXaW5kb3dTaXplXCIsIChfZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKF9ldi5kZXRhaWwuc3csIF9ldi5kZXRhaWwuc2gpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzZXRJbml0UmVuZGVyZXJFdmVudCA9IG5ldyBDdXN0b21FdmVudChcIm9uSW5pdFRocmVlanNSZW5kZXJpbmdcIiwge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gICAgICAgICAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAgICAgICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5kaXNwYXRjaEV2ZW50KHNldEluaXRSZW5kZXJlckV2ZW50KTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgZ2V0UmVuZGVyZXIoKTogUmVuZGVyZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlcjtcbiAgICB9XG5cbiAgICBnZXRTY2VuZSgpOiBTY2VuZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lO1xuICAgIH1cblxuICAgIGdldENhbWVyYSgpOiBDYW1lcmEge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW1lcmE7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEdsb2JhbFNjZW5lKCk6IFNjZW5lIHtcbiAgICAgICAgcmV0dXJuIFNjZW5lUmVuZGVyZXJUSlMuZ2xvYmFsU2NlbmU7XG4gICAgfVxuXG4gICAgLy8gc2V0dGVyc1xuXG4gICAgc2V0UmVuZGVyZXIocmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB9XG5cbiAgICBzZXRTY2VuZShzY2VuZTogU2NlbmUpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIH1cblxuICAgIHNldENhbWVyYShjYW1lcmE6IENhbWVyYSkge1xuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICB9XG5cbiAgICAvLyB0aWNrIHRvIGJlIGltcGxlbWVudGVkXG4gICAgLyogdGljayAoKSB7XG4gICAgdGhpcy5kcmF3KClcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGljaylcbiAgfSovXG59XG4iLCJpbXBvcnQgeyBPbmVFdXJvRmlsdGVyVmVjdG9yMyB9IGZyb20gXCIuL09uZUV1cm9GaWx0ZXJcIjtcbmltcG9ydCB7IERlbGF5YWJsZVNpZ25hbEZpbHRlciB9IGZyb20gXCIuL0RlbGF5YWJsZVNpZ25hbEZpbHRlclwiO1xuaW1wb3J0IHsgRXVsZXIsIE1hdHJpeDQsIFF1YXRlcm5pb24sIFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcblxuZXhwb3J0IGNsYXNzIEFSbmZ0RmlsdGVyIHtcbiAgICBwcml2YXRlIGRlbGF5RXhpdENoZWNrOiBEZWxheWFibGVTaWduYWxGaWx0ZXI7XG5cbiAgICBwcml2YXRlIGRlbGF5RW50ZXJDaGVjazogRGVsYXlhYmxlU2lnbmFsRmlsdGVyO1xuXG4gICAgcHJpdmF0ZSBfaGFzRm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vIHByaXZhdGUgX2ludGVycG9sYXRpb25GYWN0b3I6IG51bWJlciA9IDE1O1xuXG4gICAgcHJpdmF0ZSBfbGFzdFRyYW5zbGF0aW9uOiBWZWN0b3IzO1xuXG4gICAgcHJpdmF0ZSBfZnJhbWVEcm9wczogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgX2RlbHRhQWNjdXJhY3k6IG51bWJlciA9IDEwO1xuXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25GaWx0ZXI6IE9uZUV1cm9GaWx0ZXJWZWN0b3IzO1xuXG4gICAgcHJpdmF0ZSBfcm90YXRpb25GaWx0ZXI6IE9uZUV1cm9GaWx0ZXJWZWN0b3IzO1xuXG4gICAgcHVibGljIGZpbHRlckZyZXF1ZW5jeTogbnVtYmVyID0gMzAuMDtcbiAgICBwdWJsaWMgZmlsdGVyTWluQ3V0b2ZmOiBudW1iZXIgPSAxLjA7XG4gICAgcHVibGljIGZpbHRlckJldGE6IG51bWJlciA9IDAuMDtcbiAgICBwdWJsaWMgZmlsdGVyRGN1dG9mZjogbnVtYmVyID0gMS4wO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVsYXlFbnRlckNoZWNrID0gbmV3IERlbGF5YWJsZVNpZ25hbEZpbHRlcigyKTtcbiAgICAgICAgdGhpcy5kZWxheUV4aXRDaGVjayA9IG5ldyBEZWxheWFibGVTaWduYWxGaWx0ZXIoMCk7XG5cbiAgICAgICAgdGhpcy5fcG9zaXRpb25GaWx0ZXIgPSBuZXcgT25lRXVyb0ZpbHRlclZlY3RvcjModGhpcy5maWx0ZXJGcmVxdWVuY3kpO1xuICAgICAgICB0aGlzLl9yb3RhdGlvbkZpbHRlciA9IG5ldyBPbmVFdXJvRmlsdGVyVmVjdG9yMyh0aGlzLmZpbHRlckZyZXF1ZW5jeSAqIDIpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUod29ybGQ6IGFueSk6IFZlY3RvcjNbXSB7XG4gICAgICAgIGxldCBwb3M6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICBsZXQgcm90YXRpb25WZWM6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICBsZXQgc2NhbGU6IFZlY3RvcjMgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICBpZiAoIXdvcmxkKSB7XG4gICAgICAgICAgICB0aGlzLl9oYXNGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZnJhbWVEcm9wcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbWF0cml4VzogTWF0cml4NCA9IG5ldyBNYXRyaXg0KCk7XG4gICAgICAgICAgICBsZXQgd29ybGRNYXRyaXg6IE1hdHJpeDQgPSBtYXRyaXhXLmZyb21BcnJheSh0aGlzLmdldEFycmF5TWF0cml4KHdvcmxkKSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2hhc0ZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFzRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCB2ZWNUcmFuczogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFRyYW5zbGF0aW9uID0gdmVjVHJhbnMuc2V0RnJvbU1hdHJpeFBvc2l0aW9uKHdvcmxkTWF0cml4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHZlY1RyYW5zOiBWZWN0b3IzID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgICAgICAgICAgICBsZXQgX2N1cnJlbnRUcmFuc2xhdGlvbjogVmVjdG9yMyA9IHZlY1RyYW5zLnNldEZyb21NYXRyaXhQb3NpdGlvbih3b3JsZE1hdHJpeCk7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKF9jdXJyZW50VHJhbnNsYXRpb24uZGlzdGFuY2VUbyh0aGlzLl9sYXN0VHJhbnNsYXRpb24pKSA+IHRoaXMuX2RlbHRhQWNjdXJhY3kpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnJhbWVEcm9wcyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZnJhbWVEcm9wcyA+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RUcmFuc2xhdGlvbiA9IF9jdXJyZW50VHJhbnNsYXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtwb3MsIHJvdGF0aW9uVmVjLCBzY2FsZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lRHJvcHMgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RUcmFuc2xhdGlvbiA9IF9jdXJyZW50VHJhbnNsYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wb3NpdGlvbkZpbHRlci5VcGRhdGVQYXJhbXMoXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJGcmVxdWVuY3ksXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJNaW5DdXRvZmYsXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCZXRhLFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGN1dG9mZlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuX3JvdGF0aW9uRmlsdGVyLlVwZGF0ZVBhcmFtcyhcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckZyZXF1ZW5jeSAqIDIsXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJNaW5DdXRvZmYsXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJCZXRhLFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGN1dG9mZlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBtYXRyaXg6IE1hdHJpeDQgPSBuZXcgTWF0cml4NCgpO1xuXG4gICAgICAgICAgICBtYXRyaXggPSB3b3JsZE1hdHJpeDtcblxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uOiBRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgICAgIGxldCBldWxlclJvdDogRXVsZXIgPSBuZXcgRXVsZXIoKTtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbjogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xuXG4gICAgICAgICAgICAvLyBvciBldmVuIHNpbXBsZSBkZWNvbXBvc2UgdGhlIHdvcmxkTWF0cml4IGludG8gcG9zaXRpb24sIHF1YXRlcm5pb24gYW5kIHNjYWxlIHdpdGggZGVjb21wb3NlXG4gICAgICAgICAgICB3b3JsZE1hdHJpeC5kZWNvbXBvc2UocG9zaXRpb24sIHJvdGF0aW9uLCBzY2FsZSk7XG4gICAgICAgICAgICBsZXQgZVJvdCA9IGV1bGVyUm90LnNldEZyb21RdWF0ZXJuaW9uKHJvdGF0aW9uKTtcbiAgICAgICAgICAgIHJvdGF0aW9uVmVjID0gdGhpcy5fcm90YXRpb25GaWx0ZXIuRmlsdGVyKGVSb3QudG9WZWN0b3IzKCkpO1xuXG4gICAgICAgICAgICBwb3MgPSB0aGlzLl9wb3NpdGlvbkZpbHRlci5GaWx0ZXIocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcG9zLCByb3RhdGlvblZlYywgc2NhbGVdO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0QXJyYXlNYXRyaXgodmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIHZhciBhcnJheTogYW55ID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgYXJyYXlba2V5XSA9IHZhbHVlW2tleV07IC8vLnRvRml4ZWQoNCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGdldFRpbWUgfSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIERlbGF5YWJsZVNpZ25hbEZpbHRlciB7XG4gICAgcHJpdmF0ZSBfaW5EZWxheTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF90b3RhbFRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9wcmV2VGltZTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfdGltZU91dDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodGltZU91dDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3RpbWVPdXQgPSB0aW1lT3V0O1xuICAgICAgICB0aGlzLl9pbkRlbGF5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIFVwZGF0ZSh0aWNrOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB0aW1lOiBudW1iZXIgPSBnZXRUaW1lKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9pbkRlbGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9wcmV2VGltZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLl90b3RhbFRpbWUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdG90YWxUaW1lICs9IHRpbWUgLSB0aGlzLl9wcmV2VGltZTtcblxuICAgICAgICBpZiAodGhpcy5faW5EZWxheSAmJiB0aGlzLl90b3RhbFRpbWUgPiB0aGlzLl90aW1lT3V0KSB7XG4gICAgICAgICAgICB0aGlzLl9pbkRlbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9pbkRlbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbkRlbGF5ID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcblxuLy9odHRwczovL2dpdGh1Yi5jb20vRGFyaW9NYXp6YW50aS9PbmVFdXJvRmlsdGVyVW5pdHkvYmxvYi9tYXN0ZXIvQXNzZXRzL1NjcmlwdHMvT25lRXVyb0ZpbHRlci5jc1xuLy9odHRwczovL2dpdGh1Yi5jb20vRGFyaW9NYXp6YW50aS9PbmVFdXJvRmlsdGVyVW5pdHkvYmxvYi9tYXN0ZXIvQXNzZXRzL1NjcmlwdHMvRmlsdGVyVGVzdFZlY3RvcjMuY3Ncbi8vaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vVGhvcnN0ZW5CdXgvMzIzMTgzYmIwYmMyY2NiOTJmZjIzZWJkZjNkZTY0MDhcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbmNsYXNzIExvd1Bhc3NGaWx0ZXIge1xuICAgIHk6IG51bWJlciB8IG51bGw7XG5cbiAgICBzOiBudW1iZXIgfCBudWxsO1xuXG4gICAgYWxwaGEgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoYWxwaGE6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNldEFscGhhKGFscGhhKTtcbiAgICAgICAgdGhpcy55ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRBbHBoYShhbHBoYTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChhbHBoYSA8PSAwIHx8IGFscGhhID4gMS4wKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFscGhhID0gYWxwaGE7XG4gICAgfVxuXG4gICAgZmlsdGVyKHZhbHVlOiBudW1iZXIsIHRpbWVzdGFtcDogbnVtYmVyLCBhbHBoYTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChhbHBoYSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBbHBoYShhbHBoYSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHM7XG4gICAgICAgIGlmICghdGhpcy55KSB7XG4gICAgICAgICAgICBzID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gdGhpcy5hbHBoYSAqIHZhbHVlICsgKDEuMCAtIHRoaXMuYWxwaGEpICogdGhpcy5zITtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnkgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zID0gcztcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuXG4gICAgbGFzdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lRXVyb0ZpbHRlciB7XG4gICAgZnJlcTogbnVtYmVyO1xuXG4gICAgbWluQ3V0T2ZmOiBudW1iZXI7XG5cbiAgICBiZXRhOiBudW1iZXI7XG5cbiAgICBkQ3V0T2ZmOiBudW1iZXI7XG5cbiAgICB4OiBMb3dQYXNzRmlsdGVyO1xuXG4gICAgZHg6IExvd1Bhc3NGaWx0ZXI7XG5cbiAgICBsYXN0dGltZTogbnVtYmVyIHwgbnVsbDtcblxuICAgIHB1YmxpYyBjdXJyVmFsdWU6IG51bWJlcjtcbiAgICBwdWJsaWMgcHJldlZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihmcmVxOiBudW1iZXIsIG1pbkN1dE9mZiA9IDEuMCwgYmV0YSA9IDAuMCwgZEN1dE9mZiA9IDEuMCkge1xuICAgICAgICBpZiAoZnJlcSA8PSAwIHx8IG1pbkN1dE9mZiA8PSAwIHx8IGRDdXRPZmYgPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mcmVxID0gZnJlcTtcbiAgICAgICAgdGhpcy5taW5DdXRPZmYgPSBtaW5DdXRPZmY7XG4gICAgICAgIHRoaXMuYmV0YSA9IGJldGE7XG4gICAgICAgIHRoaXMuZEN1dE9mZiA9IGRDdXRPZmY7XG4gICAgICAgIHRoaXMueCA9IG5ldyBMb3dQYXNzRmlsdGVyKHRoaXMuYWxwaGEodGhpcy5taW5DdXRPZmYpKTtcbiAgICAgICAgdGhpcy5keCA9IG5ldyBMb3dQYXNzRmlsdGVyKHRoaXMuYWxwaGEodGhpcy5kQ3V0T2ZmKSk7XG4gICAgICAgIHRoaXMubGFzdHRpbWUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuY3VyclZhbHVlID0gMC4wO1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHRoaXMuY3VyclZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbHBoYShjdXRPZmY6IG51bWJlcikge1xuICAgICAgICBjb25zdCB0ZSA9IDEuMCAvIHRoaXMuZnJlcTtcbiAgICAgICAgY29uc3QgdGF1ID0gMS4wIC8gKDIgKiBNYXRoLlBJICogY3V0T2ZmKTtcbiAgICAgICAgcmV0dXJuIDEuMCAvICgxLjAgKyB0YXUgLyB0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIFVwZGF0ZVBhcmFtcyhfZnJlcTogbnVtYmVyLCBfbWluY3V0b2ZmOiBudW1iZXIgPSAxLjAsIF9iZXRhOiBudW1iZXIgPSAwLCBfZGN1dG9mZjogbnVtYmVyID0gMSk6IHZvaWQge1xuICAgICAgICB0aGlzLmZyZXEgPSBfZnJlcTtcbiAgICAgICAgdGhpcy5taW5DdXRPZmYgPSBfbWluY3V0b2ZmO1xuICAgICAgICB0aGlzLmJldGEgPSBfYmV0YTtcbiAgICAgICAgdGhpcy5kQ3V0T2ZmID0gX2RjdXRvZmY7XG4gICAgICAgIHRoaXMueC5zZXRBbHBoYSh0aGlzLmFscGhhKHRoaXMubWluQ3V0T2ZmKSk7XG4gICAgICAgIHRoaXMuZHguc2V0QWxwaGEodGhpcy5hbHBoYSh0aGlzLmRDdXRPZmYpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgRmlsdGVyKHg6IG51bWJlciwgdGltZXN0YW1wOiBudW1iZXIgfCBudWxsID0gbnVsbCk6IG51bWJlciB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdGhpcy5jdXJyVmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmxhc3R0aW1lICYmIHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgdGhpcy5mcmVxID0gMS4wIC8gKHRpbWVzdGFtcCAtIHRoaXMubGFzdHRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdHRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICAgIGNvbnN0IHByZXZYID0gdGhpcy54Lmxhc3RWYWx1ZSgpO1xuICAgICAgICBjb25zdCBkeCA9ICFwcmV2WCA/IDAuMCA6ICh4IC0gcHJldlgpICogdGhpcy5mcmVxO1xuICAgICAgICBjb25zdCBlZHggPSB0aGlzLmR4LmZpbHRlcihkeCwgdGltZXN0YW1wISwgdGhpcy5hbHBoYSh0aGlzLmRDdXRPZmYpKTtcbiAgICAgICAgY29uc3QgY3V0T2ZmID0gdGhpcy5taW5DdXRPZmYgKyB0aGlzLmJldGEgKiBNYXRoLmFicyhlZHgpO1xuICAgICAgICByZXR1cm4gKHRoaXMuY3VyclZhbHVlID0gdGhpcy54LmZpbHRlcih4LCB0aW1lc3RhbXAhLCB0aGlzLmFscGhhKGN1dE9mZikpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPbmVFdXJvRmlsdGVyVmVjdG9yMyB7XG4gICAgLy8gY29udGFpbnN0IHRoZSB0eXBlIG9mIFRcbiAgICAvLyB0aGUgYXJyYXkgb2YgZmlsdGVyc1xuICAgIHByaXZhdGUgb25lRXVyb0ZpbHRlcnM6IEFycmF5PE9uZUV1cm9GaWx0ZXI+O1xuXG4gICAgcHJpdmF0ZSBfZnJlcTogbnVtYmVyO1xuICAgIHB1YmxpYyBnZXQgZnJlcSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnJlcTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9iZXRhOiBudW1iZXI7XG4gICAgcHVibGljIGdldCBiZXRhKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iZXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RjdXRvZmY6IG51bWJlcjtcbiAgICBwdWJsaWMgZ2V0IGRjdXRvZmYoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RjdXRvZmY7XG4gICAgfVxuICAgIHByaXZhdGUgX21pbmN1dG9mZjogbnVtYmVyO1xuICAgIHB1YmxpYyBnZXQgbWluY3V0b2ZmXzEoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbmN1dG9mZjtcbiAgICB9XG5cbiAgICAvLyBjdXJyVmFsdWUgY29udGFpbnMgdGhlIGxhdGVzdCB2YWx1ZSB3aGljaCBoYXZlIGJlZW4gc3VjY2VzZnVsbHkgZmlsdGVyZWRcbiAgICAvLyBwcmV2VmFsdWUgY29udGFpbnMgdGhlIHByZXZpb3VzIGZpbHRlcmVkIHZhbHVlXG5cbiAgICBwcml2YXRlIGN1cnJWYWx1ZTogVmVjdG9yMztcbiAgICBwcml2YXRlIHByZXZWYWx1ZTogVmVjdG9yMztcblxuICAgIC8vIGluaXRpYWxpemF0aW9uIG9mIG91ciBmaWx0ZXIocylcbiAgICBjb25zdHJ1Y3RvcihfZnJlcTogbnVtYmVyLCBfbWluY3V0b2ZmOiBudW1iZXIgPSAxLCBfYmV0YTogbnVtYmVyID0gMCwgX2RjdXRvZmY6IG51bWJlciA9IDEpIHtcbiAgICAgICAgdGhpcy5jdXJyVmFsdWUgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAgICAgdGhpcy5fZnJlcSA9IF9mcmVxO1xuICAgICAgICB0aGlzLl9taW5jdXRvZmYgPSBfbWluY3V0b2ZmO1xuICAgICAgICB0aGlzLl9iZXRhID0gX2JldGE7XG4gICAgICAgIHRoaXMuX2RjdXRvZmYgPSBfZGN1dG9mZjtcblxuICAgICAgICB0aGlzLm9uZUV1cm9GaWx0ZXJzID0gW107XG4gICAgICAgIHRoaXMub25lRXVyb0ZpbHRlcnMucHVzaChuZXcgT25lRXVyb0ZpbHRlcihfZnJlcSwgX21pbmN1dG9mZiwgX2JldGEsIF9kY3V0b2ZmKSk7XG4gICAgICAgIHRoaXMub25lRXVyb0ZpbHRlcnMucHVzaChuZXcgT25lRXVyb0ZpbHRlcihfZnJlcSwgX21pbmN1dG9mZiwgX2JldGEsIF9kY3V0b2ZmKSk7XG4gICAgICAgIHRoaXMub25lRXVyb0ZpbHRlcnMucHVzaChuZXcgT25lRXVyb0ZpbHRlcihfZnJlcSwgX21pbmN1dG9mZiwgX2JldGEsIF9kY3V0b2ZmKSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlcyB0aGUgZmlsdGVyIHBhcmFtZXRlcnNcbiAgICBwdWJsaWMgVXBkYXRlUGFyYW1zKF9mcmVxOiBudW1iZXIsIF9taW5jdXRvZmY6IG51bWJlciA9IDEuMCwgX2JldGE6IG51bWJlciA9IDAsIF9kY3V0b2ZmOiBudW1iZXIgPSAxKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2ZyZXEgPSBfZnJlcTtcbiAgICAgICAgdGhpcy5fbWluY3V0b2ZmID0gX21pbmN1dG9mZjtcbiAgICAgICAgdGhpcy5fYmV0YSA9IF9iZXRhO1xuICAgICAgICB0aGlzLl9kY3V0b2ZmID0gX2RjdXRvZmY7XG5cbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMub25lRXVyb0ZpbHRlcnMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB0aGlzLm9uZUV1cm9GaWx0ZXJzW2ldLlVwZGF0ZVBhcmFtcyh0aGlzLl9mcmVxLCB0aGlzLl9taW5jdXRvZmYsIHRoaXMuX2JldGEsIHRoaXMuX2RjdXRvZmYpO1xuICAgIH1cblxuICAgIC8vIGZpbHRlcnMgdGhlIHByb3ZpZGVkIF92YWx1ZSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICAgIC8vIE5vdGU6IGEgdGltZXN0YW1wIGNhbiBhbHNvIGJlIHByb3ZpZGVkIC0gd2lsbCBvdmVycmlkZSBmaWx0ZXIgZnJlcXVlbmN5LlxuICAgIHB1YmxpYyBGaWx0ZXIoX3ZhbHVlOiBWZWN0b3IzLCB0aW1lc3RhbXA6IG51bWJlciA9IC0xLjApOiBWZWN0b3IzIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB0aGlzLmN1cnJWYWx1ZTtcblxuICAgICAgICAvL2xldCBvdXRwdXQ6IG51bWJlcltdID0gVmVjdG9yMy5aZXJvUmVhZE9ubHkuYXNBcnJheSgpOyAvLyBCYWJ5bG9uIGNvZGUuLi5cbiAgICAgICAgbGV0IG91dDogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XG4gICAgICAgIGxldCBvdXRwdXQ6IG51bWJlcltdID0gb3V0LnRvQXJyYXkoKTtcblxuICAgICAgICAvL2xldCBpbnB1dDogbnVtYmVyW10gPSBfdmFsdWUuYXNBcnJheSgpOyAvLyBCYWJ5bG9uIGNvZGVcbiAgICAgICAgbGV0IGlucHV0OiBudW1iZXJbXSA9IF92YWx1ZS50b0FycmF5KCk7XG5cbiAgICAgICAgdGhpcy5vbmVFdXJvRmlsdGVycy5mb3JFYWNoKChmaWx0ZXJzLCBpZHgpID0+IHtcbiAgICAgICAgICAgIG91dHB1dFtpZHhdID0gZmlsdGVycy5GaWx0ZXIoaW5wdXRbaWR4XSwgdGltZXN0YW1wKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGFycjogVmVjdG9yMyA9IG5ldyBWZWN0b3IzKCk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJWYWx1ZSA9IGFyci5mcm9tQXJyYXkob3V0cHV0KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBPYmplY3QzRCxcbiAgICBQbGFuZUdlb21ldHJ5LFxuICAgIFNjZW5lLFxuICAgIFRleHR1cmVMb2FkZXIsXG4gICAgVmlkZW9UZXh0dXJlLFxuICAgIE1lc2gsXG4gICAgTWVzaFN0YW5kYXJkTWF0ZXJpYWwsXG4gICAgVmVjdG9yMyxcbn0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XG5pbXBvcnQgeyBBUm5mdEZpbHRlciB9IGZyb20gXCIuLi9maWx0ZXJzL0FSbmZ0RmlsdGVyXCI7XG5pbXBvcnQgU2NlbmVSZW5kZXJlclRKUyBmcm9tIFwiLi4vU2NlbmVSZW5kZXJlclRKU1wiO1xuXG4vKipcbiAqIEludGVyZmFjZSB0byBkZWZpbmUgdGhlIEFSVmlkZW8gb2JqZWN0IHVzZWQgaW4gYWRkVmlkZW8uXG4gKiBAcGFyYW0gcGxheSBwbGF5IGEgdmlkZW8uXG4gKi9cbmludGVyZmFjZSBBUnZpZGVvIHtcbiAgICBwbGF5OiAoKSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSB0byBkZWZpbmUgYW4gRW50aXR5LlxuICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIEVudGl0eVxuICovXG5pbnRlcmZhY2UgRW50aXR5IHtcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIHRvIGRlZmluZSB0aGUgUGxhbmVHZW9tZXRyeSB1c2VkIGluIHRoZSBhZGRJbWFnZSBhbmQgYWRkVmlkZW8gZnVuY3Rpb25zLlxuICogQHBhcmFtIHcgIHdpZHRoIG9mIHRoZSBQbGFuZUdlb21ldHJ5LlxuICogQHBhcmFtIGggaGVpZ2h0IG9mIHRoZSBQbGFuZUdlb21ldHJ5LlxuICogQHBhcmFtIHdzIHdpZHRoIG51bWJlciBvZiBzZWdtZW50cyBvZiB0aGUgUGxhbmVHZW9tZXRyeS5cbiAqIEBwYXJhbSBocyBoZWlnaHQgbnVtYmVyIG9mIHNlZ21lbnRzIG9mIHRoZSBQbGFuZUdlb21ldHJ5LlxuICovXG5pbnRlcmZhY2UgSVBsYW5lQ29uZmlnIHtcbiAgICB3OiBudW1iZXI7XG4gICAgaDogbnVtYmVyO1xuICAgIHdzOiBudW1iZXI7XG4gICAgaHM6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNhYmxlIHRvIGF0dGFjaCBUaHJlZWpzIG9iamVjdCB0byB0aGUgcmVuZGVyaW5nIHJvb3QgYW5kIHBhc3MgbWF0cml4IGRhdGEgdG8gaXQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5GVGFkZFRKUyB7XG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5W10gPSBbXTtcbiAgICBwcml2YXRlIG5hbWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgc2NlbmU6IFNjZW5lO1xuICAgIHByaXZhdGUgdGFyZ2V0OiBFdmVudFRhcmdldDtcbiAgICBwcml2YXRlIHV1aWQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9maWx0ZXI6IEFSbmZ0RmlsdGVyO1xuICAgIHByaXZhdGUgX29lZjogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBORlRhZGRUSlMgY29uc3R1Y3RvciwgeW91IG5lZWQgdG8gcGFzcyB0aGUgdXVpZCBmcm9tIHRoZSBBUm5mdCBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0gdXVpZCB0aGUgdXVpZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih1dWlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IFNjZW5lUmVuZGVyZXJUSlMuZ2V0R2xvYmFsU2NlbmUoKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB3aW5kb3cgfHwgZ2xvYmFsO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLm5hbWVzID0gW107XG4gICAgICAgIHRoaXMuX2ZpbHRlciA9IG5ldyBBUm5mdEZpbHRlcigpO1xuICAgICAgICB0aGlzLl9vZWYgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWRkIGZ1bmN0aW9uIHdpbGwgYWRkIGEgbWVzaCB0byB0aGUgUmVuZGVyZXIgcm9vdC4gWW91IG5lZWQgdG8gYXNzb2NpYXRlIGEgbmFtZSBvZiB0aGUgRW50aXR5LlxuICAgICAqIEBwYXJhbSBtZXNoIFRoZSBtZXNoIHRvIGFkZFxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBFbnRpdHkgYXNzb2NpYXRlZC5cbiAgICAgKiBAcGFyYW0gb2JqVmlzaWJpbGl0eSBzZXQgdHJ1ZSBvciBmYWxzZSBpZiB0aGUgbWVzaCB3bGwgc3RheSB2aXNpYmxlIG9yIG5vdCBhZnRlciB0cmFja2luZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkKG1lc2g6IE9iamVjdDNELCBuYW1lOiBzdHJpbmcsIG9ialZpc2liaWxpdHk6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE5GVERhdGEtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICB2YXIgbXNnID0gZXYuZGV0YWlsO1xuICAgICAgICAgICAgbWVzaC5wb3NpdGlvbi55ID0gKChtc2cuaGVpZ2h0IC8gbXNnLmRwaSkgKiAyLjU0ICogMTApIC8gMi4wO1xuICAgICAgICAgICAgbWVzaC5wb3NpdGlvbi54ID0gKChtc2cud2lkdGggLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByb290ID0gbmV3IE9iamVjdDNEKCk7XG4gICAgICAgIHJvb3QubmFtZSA9IFwicm9vdC1cIiArIG5hbWU7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICByb290LmFkZChtZXNoKTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE1hdHJpeEdMX1JILVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG1lc2gudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fb2VmID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlciA9IFtuZXcgVmVjdG9yMygwLCAwLCAwKSwgbmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDAsIDAsIDApXTtcbiAgICAgICAgICAgICAgICBmaWx0ZXIgPSB0aGlzLl9maWx0ZXIudXBkYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSCk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRYKGZpbHRlclswXS54KTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFkoZmlsdGVyWzBdLnkpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WihmaWx0ZXJbMF0ueik7XG4gICAgICAgICAgICAgICAgcm9vdC5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmaWx0ZXJbMV0pO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WChmaWx0ZXJbMl0ueCk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRZKGZpbHRlclsyXS55KTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFooZmlsdGVyWzJdLnopO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb290Lm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL2NvbnN0IG1hdHJpeCA9IFV0aWxzLmludGVycG9sYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gZXYuZGV0YWlsLm1hdHJpeEdMX1JIXG4gICAgICAgICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHJvb3QubWF0cml4LCBtYXRyaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm5mdFRyYWNraW5nTG9zdC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgICAgICBtZXNoLnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLmVudGl0aWVzLnB1c2goeyBuYW1lIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBhZGRNb2RlbCBmdW5jdGlvbiB3aWxsIGFkZCBhIG1vZGVsIHRvIHRoZSBSZW5kZXJlciByb290LiBZb3UgbmVlZCB0byBhc3NvY2lhdGUgYSBuYW1lIG9mIHRoZSBFbnRpdHkuXG4gICAgICogQHBhcmFtIHVybCB1cmwgb2YgdGhlIG1vZGVsLlxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBFbnRpdHkgYXNzb2NpYXRlZC5cbiAgICAgKiBAcGFyYW0gc2NhbGUgc2NhbGUgb2YgdGhlIG1vZGVsLlxuICAgICAqIEBwYXJhbSBvYmpWaXNpYmlsaXR5IHNldCB0cnVlIG9yIGZhbHNlIGlmIHRoZSBtZXNoIHdsbCBzdGF5IHZpc2libGUgb3Igbm90IGFmdGVyIHRyYWNraW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRNb2RlbCh1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nLCBzY2FsZTogbnVtYmVyLCBvYmpWaXNpYmlsaXR5OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgT2JqZWN0M0QoKTtcbiAgICAgICAgcm9vdC5uYW1lID0gXCJyb290LVwiICsgbmFtZTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocm9vdCk7XG4gICAgICAgIGxldCBtb2RlbDogYW55O1xuICAgICAgICAvKiBMb2FkIE1vZGVsICovXG4gICAgICAgIGNvbnN0IHRocmVlR0xURkxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG4gICAgICAgIHRocmVlR0xURkxvYWRlci5sb2FkKHVybCwgKGdsdGYpID0+IHtcbiAgICAgICAgICAgIG1vZGVsID0gZ2x0Zi5zY2VuZTtcbiAgICAgICAgICAgIG1vZGVsLnNjYWxlLnNldChzY2FsZSwgc2NhbGUsIHNjYWxlKTtcbiAgICAgICAgICAgIG1vZGVsLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRORlREYXRhLVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWw7XG4gICAgICAgICAgICAgICAgbW9kZWwucG9zaXRpb24ueSA9ICgobXNnLmhlaWdodCAvIG1zZy5kcGkpICogMi41NCAqIDEwKSAvIDIuMDtcbiAgICAgICAgICAgICAgICBtb2RlbC5wb3NpdGlvbi54ID0gKChtc2cud2lkdGggLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJvb3QuYWRkKG1vZGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRNYXRyaXhHTF9SSC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBtb2RlbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vZWYgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gW25ldyBWZWN0b3IzKDAsIDAsIDApLCBuZXcgVmVjdG9yMygwLCAwLCAwKSwgbmV3IFZlY3RvcjMoMCwgMCwgMCldO1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IHRoaXMuX2ZpbHRlci51cGRhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFgoZmlsdGVyWzBdLngpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WShmaWx0ZXJbMF0ueSk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRaKGZpbHRlclswXS56KTtcbiAgICAgICAgICAgICAgICByb290LnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKGZpbHRlclsxXSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRYKGZpbHRlclsyXS54KTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFkoZmlsdGVyWzJdLnkpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WihmaWx0ZXJbMl0ueik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvb3QubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vY29uc3QgbWF0cml4ID0gVXRpbHMuaW50ZXJwb2xhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBldi5kZXRhaWwubWF0cml4R0xfUkhcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRNYXRyaXgocm9vdC5tYXRyaXgsIG1hdHJpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibmZ0VHJhY2tpbmdMb3N0LVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgICAgIG1vZGVsLnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBhZGRNb2RlbFdpdGhDYWxsYmFjayBmdW5jdGlvbiB3aWxsIGFkZCBhIG1vZGVsIHRvIHRoZSBSZW5kZXJlciByb290LiBZb3UgbmVlZCB0byBhc3NvY2lhdGUgYSBuYW1lIG9mIHRoZSBFbnRpdHkuXG4gICAgICogWW91IGNhbiBtb2RpZnkgdGhlIG1vZGVsIHJvdGF0aW9uLCBzY2FsZSBhbmQgb3RoZXIgcHJvcGVydGllcyB3aXRoIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0gdXJsIHVybCBvZiB0aGUgbW9kZWwuXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIEVudGl0eSBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBtb2RpZnkgdGhlIG1vZGVsIGluIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0gb2JqVmlzaWJpbGl0eSBzZXQgdHJ1ZSBvciBmYWxzZSBpZiB0aGUgbWVzaCB3bGwgc3RheSB2aXNpYmxlIG9yIG5vdCBhZnRlciB0cmFja2luZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkTW9kZWxXaXRoQ2FsbGJhY2sodXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChnbHRmOiBhbnkpID0+IHt9LCBvYmpWaXNpYmlsaXR5OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgT2JqZWN0M0QoKTtcbiAgICAgICAgcm9vdC5uYW1lID0gXCJyb290LVwiICsgbmFtZTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocm9vdCk7XG4gICAgICAgIGxldCBtb2RlbDogYW55O1xuICAgICAgICAvKiBMb2FkIE1vZGVsICovXG4gICAgICAgIGNvbnN0IHRocmVlR0xURkxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG4gICAgICAgIHRocmVlR0xURkxvYWRlci5sb2FkKHVybCwgKGdsdGYpID0+IHtcbiAgICAgICAgICAgIG1vZGVsID0gZ2x0Zi5zY2VuZTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRORlREYXRhLVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWw7XG4gICAgICAgICAgICAgICAgbW9kZWwucG9zaXRpb24ueSA9ICgobXNnLmhlaWdodCAvIG1zZy5kcGkpICogMi41NCAqIDEwKSAvIDIuMDtcbiAgICAgICAgICAgICAgICBtb2RlbC5wb3NpdGlvbi54ID0gKChtc2cud2lkdGggLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGdsdGYpO1xuICAgICAgICAgICAgcm9vdC5hZGQobW9kZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE1hdHJpeEdMX1JILVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG1vZGVsLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX29lZiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgPSBbbmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDAsIDAsIDApLCBuZXcgVmVjdG9yMygwLCAwLCAwKV07XG4gICAgICAgICAgICAgICAgZmlsdGVyID0gdGhpcy5fZmlsdGVyLnVwZGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WChmaWx0ZXJbMF0ueCk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRZKGZpbHRlclswXS55KTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFooZmlsdGVyWzBdLnopO1xuICAgICAgICAgICAgICAgIHJvb3Qucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmlsdGVyWzFdKTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFgoZmlsdGVyWzJdLngpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WShmaWx0ZXJbMl0ueSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRaKGZpbHRlclsyXS56KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy9jb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IGV2LmRldGFpbC5tYXRyaXhHTF9SSFxuICAgICAgICAgICAgICAgIFV0aWxzLnNldE1hdHJpeChyb290Lm1hdHJpeCwgbWF0cml4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJuZnRUcmFja2luZ0xvc3QtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICAgICAgbW9kZWwudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5hbWVzLnB1c2gobmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGFkZEltYWdlIGZ1bmN0aW9uIHdpbGwgYWRkIGFuIGltYWdlIHRvIHRoZSBSZW5kZXJlciByb290LiBZb3UgbmVlZCB0byBhc3NvY2lhdGUgYSBuYW1lIG9mIHRoZSBFbnRpdHkuXG4gICAgICogQHBhcmFtIGltYWdlVXJsIHVybCBvZiB0aGUgaW1hZ2UuXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIEVudGl0eSBhc3NvY2lhdGVkLlxuICAgICAqIEBwYXJhbSBjb2xvciBjb2xvciBvZiB0aGUgYmFja2dyb3VuZCBwbGFuZS5cbiAgICAgKiBAcGFyYW0gc2NhbGUgc2NhbGUgb2YgdGhlIHBsYW5lLlxuICAgICAqIEBwYXJhbSBjb25maWdzIHNlZSBJUGxhbmVDb25maWcuXG4gICAgICogQHBhcmFtIG9ialZpc2liaWxpdHkgc2V0IHRydWUgb3IgZmFsc2UgaWYgdGhlIG1lc2ggd2xsIHN0YXkgdmlzaWJsZSBvciBub3QgYWZ0ZXIgdHJhY2tpbmcuXG4gICAgICovXG4gICAgcHVibGljIGFkZEltYWdlKFxuICAgICAgICBpbWFnZVVybDogc3RyaW5nLFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGNvbG9yOiBzdHJpbmcsXG4gICAgICAgIHNjYWxlOiBudW1iZXIsXG4gICAgICAgIGNvbmZpZ3M6IElQbGFuZUNvbmZpZyxcbiAgICAgICAgb2JqVmlzaWJpbGl0eTogYm9vbGVhblxuICAgICkge1xuICAgICAgICBjb25zdCByb290ID0gbmV3IE9iamVjdDNEKCk7XG4gICAgICAgIHJvb3QubmFtZSA9IFwicm9vdC1cIiArIG5hbWU7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICBjb25zdCBwbGFuZUdlb20gPSBuZXcgUGxhbmVHZW9tZXRyeShjb25maWdzLncsIGNvbmZpZ3MuaCwgY29uZmlncy53cywgY29uZmlncy5ocyk7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZUxvYWRlcigpLmxvYWQoaW1hZ2VVcmwpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiBjb2xvciwgbWFwOiB0ZXh0dXJlIH0pO1xuICAgICAgICBjb25zdCBwbGFuZSA9IG5ldyBNZXNoKHBsYW5lR2VvbSwgbWF0ZXJpYWwpO1xuICAgICAgICBwbGFuZS5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRORlREYXRhLVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIG1zZyA9IGV2LmRldGFpbDtcbiAgICAgICAgICAgIHBsYW5lLnBvc2l0aW9uLnkgPSAoKG1zZy5oZWlnaHQgLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi54ID0gKChtc2cud2lkdGggLyBtc2cuZHBpKSAqIDIuNTQgKiAxMCkgLyAyLjA7XG4gICAgICAgIH0pO1xuICAgICAgICByb290LmFkZChwbGFuZSk7XG4gICAgICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJnZXRNYXRyaXhHTF9SSC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBwbGFuZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vZWYgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsdGVyID0gW25ldyBWZWN0b3IzKDAsIDAsIDApLCBuZXcgVmVjdG9yMygwLCAwLCAwKSwgbmV3IFZlY3RvcjMoMCwgMCwgMCldO1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IHRoaXMuX2ZpbHRlci51cGRhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFgoZmlsdGVyWzBdLngpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WShmaWx0ZXJbMF0ueSk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRaKGZpbHRlclswXS56KTtcbiAgICAgICAgICAgICAgICByb290LnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKGZpbHRlclsxXSk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRYKGZpbHRlclsyXS54KTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFkoZmlsdGVyWzJdLnkpO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WihmaWx0ZXJbMl0ueik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvb3QubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vY29uc3QgbWF0cml4ID0gVXRpbHMuaW50ZXJwb2xhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRyaXggPSBldi5kZXRhaWwubWF0cml4R0xfUkhcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRNYXRyaXgocm9vdC5tYXRyaXgsIG1hdHJpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwibmZ0VHJhY2tpbmdMb3N0LVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgICAgIHBsYW5lLnZpc2libGUgPSBvYmpWaXNpYmlsaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBhZGRWaWRlbyBmdW5jdGlvbiB3aWxsIGFkZCBhIHZpZGVvIHRvIHRoZSBSZW5kZXJlciByb290LiBZb3UgbmVlZCB0byBhc3NvY2lhdGUgYSBuYW1lIG9mIHRoZSBFbnRpdHkuXG4gICAgICogQHBhcmFtIGlkIHRoZSBpZCBvZiB0aGUgaHRtbCB2aWRlbyBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBFbnRpdHkgYXNzb2NpYXRlZC5cbiAgICAgKiBAcGFyYW0gc2NhbGUgc2NhbGUgb2YgdGhlIHBsYW5lLlxuICAgICAqIEBwYXJhbSBjb25maWdzIHNlZSBJUGxhbmVDb25maWcuXG4gICAgICogQHBhcmFtIG9ialZpc2liaWxpdHkgc2V0IHRydWUgb3IgZmFsc2UgaWYgdGhlIG1lc2ggd2xsIHN0YXkgdmlzaWJsZSBvciBub3QgYWZ0ZXIgdHJhY2tpbmcuXG4gICAgICovXG4gICAgcHVibGljIGFkZFZpZGVvKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgc2NhbGU6IG51bWJlciwgY29uZmlnczogSVBsYW5lQ29uZmlnLCBvYmpWaXNpYmlsaXR5OiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgT2JqZWN0M0QoKTtcbiAgICAgICAgcm9vdC5uYW1lID0gXCJyb290LVwiICsgbmFtZTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocm9vdCk7XG4gICAgICAgIGNvbnN0IEFSVmlkZW86IEhUTUxWaWRlb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTFZpZGVvRWxlbWVudDtcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBWaWRlb1RleHR1cmUoQVJWaWRlbyBhcyBIVE1MVmlkZW9FbGVtZW50KTtcbiAgICAgICAgY29uc3QgbWF0ID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4YmJiYmZmLCBtYXA6IHRleHR1cmUgfSk7XG4gICAgICAgIGNvbnN0IHBsYW5lR2VvbSA9IG5ldyBQbGFuZUdlb21ldHJ5KGNvbmZpZ3MudywgY29uZmlncy5oLCBjb25maWdzLndzLCBjb25maWdzLmhzKTtcbiAgICAgICAgY29uc3QgcGxhbmUgPSBuZXcgTWVzaChwbGFuZUdlb20sIG1hdCk7XG4gICAgICAgIHBsYW5lLnNjYWxlLnNldChzY2FsZSwgc2NhbGUsIHNjYWxlKTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE5GVERhdGEtXCIgKyB0aGlzLnV1aWQgKyBcIi1cIiArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICB2YXIgbXNnID0gZXYuZGV0YWlsO1xuICAgICAgICAgICAgcGxhbmUucG9zaXRpb24ueSA9ICgobXNnLmhlaWdodCAvIG1zZy5kcGkpICogMi41NCAqIDEwKSAvIDIuMDtcbiAgICAgICAgICAgIHBsYW5lLnBvc2l0aW9uLnggPSAoKG1zZy53aWR0aCAvIG1zZy5kcGkpICogMi41NCAqIDEwKSAvIDIuMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvb3QuYWRkKHBsYW5lKTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImdldE1hdHJpeEdMX1JILVwiICsgdGhpcy51dWlkICsgXCItXCIgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgQVJWaWRlby5wbGF5KCk7XG4gICAgICAgICAgICByb290LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgcGxhbmUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5fb2VmID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbHRlciA9IFtuZXcgVmVjdG9yMygwLCAwLCAwKSwgbmV3IFZlY3RvcjMoMCwgMCwgMCksIG5ldyBWZWN0b3IzKDAsIDAsIDApXTtcbiAgICAgICAgICAgICAgICBmaWx0ZXIgPSB0aGlzLl9maWx0ZXIudXBkYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSCk7XG4gICAgICAgICAgICAgICAgcm9vdC5wb3NpdGlvbi5zZXRYKGZpbHRlclswXS54KTtcbiAgICAgICAgICAgICAgICByb290LnBvc2l0aW9uLnNldFkoZmlsdGVyWzBdLnkpO1xuICAgICAgICAgICAgICAgIHJvb3QucG9zaXRpb24uc2V0WihmaWx0ZXJbMF0ueik7XG4gICAgICAgICAgICAgICAgcm9vdC5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmaWx0ZXJbMV0pO1xuICAgICAgICAgICAgICAgIHJvb3Quc2NhbGUuc2V0WChmaWx0ZXJbMl0ueCk7XG4gICAgICAgICAgICAgICAgcm9vdC5zY2FsZS5zZXRZKGZpbHRlclsyXS55KTtcbiAgICAgICAgICAgICAgICByb290LnNjYWxlLnNldFooZmlsdGVyWzJdLnopO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb290Lm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL2NvbnN0IG1hdHJpeCA9IFV0aWxzLmludGVycG9sYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0cml4ID0gZXYuZGV0YWlsLm1hdHJpeEdMX1JIXG4gICAgICAgICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHJvb3QubWF0cml4LCBtYXRyaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm5mdFRyYWNraW5nTG9zdC1cIiArIHRoaXMudXVpZCArIFwiLVwiICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IG9ialZpc2liaWxpdHk7XG4gICAgICAgICAgICBwbGFuZS52aXNpYmxlID0gb2JqVmlzaWJpbGl0eTtcbiAgICAgICAgICAgIEFSVmlkZW8ucGF1c2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubmFtZXMucHVzaChuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIGdldCB0aGUgbmFtZXMgb2YgdGhlIGVudGl0aWVzIHVzZWQgaW4geW91ciBwcm9qZWN0LlxuICAgICAqIEByZXR1cm5zIHRoZSBuYW1lcyBvZiB0aGUgZW50aXRpZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSBvciBub3QgdGhlIE9uZUV1cm9GaWx0ZXIgcm91dGluZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IG9lZihlbmFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fb2VmID0gZW5hYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIE9uZUV1cm9GaWx0ZXIgaXMgZW5hYmxlZCBvciBub3QuXG4gICAgICogQHJldHVybnMgKGJvb2xlYW4pIHRydWUgb3IgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG9lZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29lZjtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VGltZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbn1cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgdHJhY2tlZE1hdHJpeDogYW55ID0ge1xuICAgICAgICAvLyBmb3IgaW50ZXJwb2xhdGlvblxuICAgICAgICBkZWx0YTogWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBpbnRlcnBvbGF0ZWQ6IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICB9O1xuICAgIC8vcHJpdmF0ZSBzdGF0aWMgaW50ZXJwb2xhdGlvbkZhY3RvcjogbnVtYmVyID0gMjRcbiAgICBzdGF0aWMgaW50ZXJwb2xhdGUod29ybGQ6IGFueSkge1xuICAgICAgICBjb25zdCBpbnRlcnBvbGF0aW9uRmFjdG9yID0gMjQ7XG5cbiAgICAgICAgLy8gaW50ZXJwb2xhdGUgbWF0cml4XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50cmFja2VkTWF0cml4LmRlbHRhW2ldID0gd29ybGRbaV0gLSB0aGlzLnRyYWNrZWRNYXRyaXguaW50ZXJwb2xhdGVkW2ldO1xuICAgICAgICAgICAgdGhpcy50cmFja2VkTWF0cml4LmludGVycG9sYXRlZFtpXSA9XG4gICAgICAgICAgICAgICAgdGhpcy50cmFja2VkTWF0cml4LmludGVycG9sYXRlZFtpXSArIHRoaXMudHJhY2tlZE1hdHJpeC5kZWx0YVtpXSAvIGludGVycG9sYXRpb25GYWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHJhY2tlZE1hdHJpeC5pbnRlcnBvbGF0ZWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTW9iaWxlKCkge1xuICAgICAgICByZXR1cm4gL0FuZHJvaWR8bW9iaWxlfGlQYWR8aVBob25lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0TWF0cml4KG1hdHJpeDogYW55LCB2YWx1ZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGFycmF5OiBhbnkgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgIGFycmF5W2tleV0gPSB2YWx1ZVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbWF0cml4LmVsZW1lbnRzLnNldCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBtYXRyaXguZWxlbWVudHMuc2V0KGFycmF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1hdHJpeC5lbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoYXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RocmVlX187IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJpbXBvcnQge1xuXHRBbmltYXRpb25DbGlwLFxuXHRCb25lLFxuXHRCb3gzLFxuXHRCdWZmZXJBdHRyaWJ1dGUsXG5cdEJ1ZmZlckdlb21ldHJ5LFxuXHRDbGFtcFRvRWRnZVdyYXBwaW5nLFxuXHRDb2xvcixcblx0RGlyZWN0aW9uYWxMaWdodCxcblx0RG91YmxlU2lkZSxcblx0RmlsZUxvYWRlcixcblx0RnJvbnRTaWRlLFxuXHRHcm91cCxcblx0SW1hZ2VCaXRtYXBMb2FkZXIsXG5cdEludGVybGVhdmVkQnVmZmVyLFxuXHRJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSxcblx0SW50ZXJwb2xhbnQsXG5cdEludGVycG9sYXRlRGlzY3JldGUsXG5cdEludGVycG9sYXRlTGluZWFyLFxuXHRMaW5lLFxuXHRMaW5lQmFzaWNNYXRlcmlhbCxcblx0TGluZUxvb3AsXG5cdExpbmVTZWdtZW50cyxcblx0TGluZWFyRmlsdGVyLFxuXHRMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXIsXG5cdExpbmVhck1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdExvYWRlcixcblx0TG9hZGVyVXRpbHMsXG5cdE1hdGVyaWFsLFxuXHRNYXRoVXRpbHMsXG5cdE1hdHJpeDQsXG5cdE1lc2gsXG5cdE1lc2hCYXNpY01hdGVyaWFsLFxuXHRNZXNoUGh5c2ljYWxNYXRlcmlhbCxcblx0TWVzaFN0YW5kYXJkTWF0ZXJpYWwsXG5cdE1pcnJvcmVkUmVwZWF0V3JhcHBpbmcsXG5cdE5lYXJlc3RGaWx0ZXIsXG5cdE5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXIsXG5cdE5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyLFxuXHROdW1iZXJLZXlmcmFtZVRyYWNrLFxuXHRPYmplY3QzRCxcblx0T3J0aG9ncmFwaGljQ2FtZXJhLFxuXHRQZXJzcGVjdGl2ZUNhbWVyYSxcblx0UG9pbnRMaWdodCxcblx0UG9pbnRzLFxuXHRQb2ludHNNYXRlcmlhbCxcblx0UHJvcGVydHlCaW5kaW5nLFxuXHRRdWF0ZXJuaW9uLFxuXHRRdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjayxcblx0UkdCRm9ybWF0LFxuXHRSZXBlYXRXcmFwcGluZyxcblx0U2tlbGV0b24sXG5cdFNraW5uZWRNZXNoLFxuXHRTcGhlcmUsXG5cdFNwb3RMaWdodCxcblx0VGFuZ2VudFNwYWNlTm9ybWFsTWFwLFxuXHRUZXh0dXJlLFxuXHRUZXh0dXJlTG9hZGVyLFxuXHRUcmlhbmdsZUZhbkRyYXdNb2RlLFxuXHRUcmlhbmdsZVN0cmlwRHJhd01vZGUsXG5cdFZlY3RvcjIsXG5cdFZlY3RvcjMsXG5cdFZlY3RvcktleWZyYW1lVHJhY2ssXG5cdHNSR0JFbmNvZGluZ1xufSBmcm9tICd0aHJlZSc7XG5cbmNsYXNzIEdMVEZMb2FkZXIgZXh0ZW5kcyBMb2FkZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBtYW5hZ2VyICkge1xuXG5cdFx0c3VwZXIoIG1hbmFnZXIgKTtcblxuXHRcdHRoaXMuZHJhY29Mb2FkZXIgPSBudWxsO1xuXHRcdHRoaXMua3R4MkxvYWRlciA9IG51bGw7XG5cdFx0dGhpcy5tZXNob3B0RGVjb2RlciA9IG51bGw7XG5cblx0XHR0aGlzLnBsdWdpbkNhbGxiYWNrcyA9IFtdO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGVGV4dHVyZUJhc2lzVUV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc1NoZWVuRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNUcmFuc21pc3Npb25FeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc1ZvbHVtZUV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWF0ZXJpYWxzSW9yRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNTcGVjdWxhckV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTGlnaHRzRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNZXNob3B0Q29tcHJlc3Npb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHRsb2FkKCB1cmwsIG9uTG9hZCwgb25Qcm9ncmVzcywgb25FcnJvciApIHtcblxuXHRcdGNvbnN0IHNjb3BlID0gdGhpcztcblxuXHRcdGxldCByZXNvdXJjZVBhdGg7XG5cblx0XHRpZiAoIHRoaXMucmVzb3VyY2VQYXRoICE9PSAnJyApIHtcblxuXHRcdFx0cmVzb3VyY2VQYXRoID0gdGhpcy5yZXNvdXJjZVBhdGg7XG5cblx0XHR9IGVsc2UgaWYgKCB0aGlzLnBhdGggIT09ICcnICkge1xuXG5cdFx0XHRyZXNvdXJjZVBhdGggPSB0aGlzLnBhdGg7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRyZXNvdXJjZVBhdGggPSBMb2FkZXJVdGlscy5leHRyYWN0VXJsQmFzZSggdXJsICk7XG5cblx0XHR9XG5cblx0XHQvLyBUZWxscyB0aGUgTG9hZGluZ01hbmFnZXIgdG8gdHJhY2sgYW4gZXh0cmEgaXRlbSwgd2hpY2ggcmVzb2x2ZXMgYWZ0ZXJcblx0XHQvLyB0aGUgbW9kZWwgaXMgZnVsbHkgbG9hZGVkLiBUaGlzIG1lYW5zIHRoZSBjb3VudCBvZiBpdGVtcyBsb2FkZWQgd2lsbFxuXHRcdC8vIGJlIGluY29ycmVjdCwgYnV0IGVuc3VyZXMgbWFuYWdlci5vbkxvYWQoKSBkb2VzIG5vdCBmaXJlIGVhcmx5LlxuXHRcdHRoaXMubWFuYWdlci5pdGVtU3RhcnQoIHVybCApO1xuXG5cdFx0Y29uc3QgX29uRXJyb3IgPSBmdW5jdGlvbiAoIGUgKSB7XG5cblx0XHRcdGlmICggb25FcnJvciApIHtcblxuXHRcdFx0XHRvbkVycm9yKCBlICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS5lcnJvciggZSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVycm9yKCB1cmwgKTtcblx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVuZCggdXJsICk7XG5cblx0XHR9O1xuXG5cdFx0Y29uc3QgbG9hZGVyID0gbmV3IEZpbGVMb2FkZXIoIHRoaXMubWFuYWdlciApO1xuXG5cdFx0bG9hZGVyLnNldFBhdGgoIHRoaXMucGF0aCApO1xuXHRcdGxvYWRlci5zZXRSZXNwb25zZVR5cGUoICdhcnJheWJ1ZmZlcicgKTtcblx0XHRsb2FkZXIuc2V0UmVxdWVzdEhlYWRlciggdGhpcy5yZXF1ZXN0SGVhZGVyICk7XG5cdFx0bG9hZGVyLnNldFdpdGhDcmVkZW50aWFscyggdGhpcy53aXRoQ3JlZGVudGlhbHMgKTtcblxuXHRcdGxvYWRlci5sb2FkKCB1cmwsIGZ1bmN0aW9uICggZGF0YSApIHtcblxuXHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRzY29wZS5wYXJzZSggZGF0YSwgcmVzb3VyY2VQYXRoLCBmdW5jdGlvbiAoIGdsdGYgKSB7XG5cblx0XHRcdFx0XHRvbkxvYWQoIGdsdGYgKTtcblxuXHRcdFx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVuZCggdXJsICk7XG5cblx0XHRcdFx0fSwgX29uRXJyb3IgKTtcblxuXHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0X29uRXJyb3IoIGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fSwgb25Qcm9ncmVzcywgX29uRXJyb3IgKTtcblxuXHR9XG5cblx0c2V0RFJBQ09Mb2FkZXIoIGRyYWNvTG9hZGVyICkge1xuXG5cdFx0dGhpcy5kcmFjb0xvYWRlciA9IGRyYWNvTG9hZGVyO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHRzZXRERFNMb2FkZXIoKSB7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cblx0XHRcdCdUSFJFRS5HTFRGTG9hZGVyOiBcIk1TRlRfdGV4dHVyZV9kZHNcIiBubyBsb25nZXIgc3VwcG9ydGVkLiBQbGVhc2UgdXBkYXRlIHRvIFwiS0hSX3RleHR1cmVfYmFzaXN1XCIuJ1xuXG5cdFx0KTtcblxuXHR9XG5cblx0c2V0S1RYMkxvYWRlcigga3R4MkxvYWRlciApIHtcblxuXHRcdHRoaXMua3R4MkxvYWRlciA9IGt0eDJMb2FkZXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG5cdHNldE1lc2hvcHREZWNvZGVyKCBtZXNob3B0RGVjb2RlciApIHtcblxuXHRcdHRoaXMubWVzaG9wdERlY29kZXIgPSBtZXNob3B0RGVjb2Rlcjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0cmVnaXN0ZXIoIGNhbGxiYWNrICkge1xuXG5cdFx0aWYgKCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5pbmRleE9mKCBjYWxsYmFjayApID09PSAtIDEgKSB7XG5cblx0XHRcdHRoaXMucGx1Z2luQ2FsbGJhY2tzLnB1c2goIGNhbGxiYWNrICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0dW5yZWdpc3RlciggY2FsbGJhY2sgKSB7XG5cblx0XHRpZiAoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICkgIT09IC0gMSApIHtcblxuXHRcdFx0dGhpcy5wbHVnaW5DYWxsYmFja3Muc3BsaWNlKCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5pbmRleE9mKCBjYWxsYmFjayApLCAxICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0cGFyc2UoIGRhdGEsIHBhdGgsIG9uTG9hZCwgb25FcnJvciApIHtcblxuXHRcdGxldCBjb250ZW50O1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB7fTtcblx0XHRjb25zdCBwbHVnaW5zID0ge307XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyApIHtcblxuXHRcdFx0Y29udGVudCA9IGRhdGE7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zdCBtYWdpYyA9IExvYWRlclV0aWxzLmRlY29kZVRleHQoIG5ldyBVaW50OEFycmF5KCBkYXRhLCAwLCA0ICkgKTtcblxuXHRcdFx0aWYgKCBtYWdpYyA9PT0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMgKSB7XG5cblx0XHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRcdGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGIF0gPSBuZXcgR0xURkJpbmFyeUV4dGVuc2lvbiggZGF0YSApO1xuXG5cdFx0XHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcblxuXHRcdFx0XHRcdGlmICggb25FcnJvciApIG9uRXJyb3IoIGVycm9yICk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb250ZW50ID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEYgXS5jb250ZW50O1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnRlbnQgPSBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KCBuZXcgVWludDhBcnJheSggZGF0YSApICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKCBjb250ZW50ICk7XG5cblx0XHRpZiAoIGpzb24uYXNzZXQgPT09IHVuZGVmaW5lZCB8fCBqc29uLmFzc2V0LnZlcnNpb25bIDAgXSA8IDIgKSB7XG5cblx0XHRcdGlmICggb25FcnJvciApIG9uRXJyb3IoIG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIGFzc2V0LiBnbFRGIHZlcnNpb25zID49Mi4wIGFyZSBzdXBwb3J0ZWQuJyApICk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHR9XG5cblx0XHRjb25zdCBwYXJzZXIgPSBuZXcgR0xURlBhcnNlcigganNvbiwge1xuXG5cdFx0XHRwYXRoOiBwYXRoIHx8IHRoaXMucmVzb3VyY2VQYXRoIHx8ICcnLFxuXHRcdFx0Y3Jvc3NPcmlnaW46IHRoaXMuY3Jvc3NPcmlnaW4sXG5cdFx0XHRyZXF1ZXN0SGVhZGVyOiB0aGlzLnJlcXVlc3RIZWFkZXIsXG5cdFx0XHRtYW5hZ2VyOiB0aGlzLm1hbmFnZXIsXG5cdFx0XHRrdHgyTG9hZGVyOiB0aGlzLmt0eDJMb2FkZXIsXG5cdFx0XHRtZXNob3B0RGVjb2RlcjogdGhpcy5tZXNob3B0RGVjb2RlclxuXG5cdFx0fSApO1xuXG5cdFx0cGFyc2VyLmZpbGVMb2FkZXIuc2V0UmVxdWVzdEhlYWRlciggdGhpcy5yZXF1ZXN0SGVhZGVyICk7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2luQ2FsbGJhY2tzWyBpIF0oIHBhcnNlciApO1xuXHRcdFx0cGx1Z2luc1sgcGx1Z2luLm5hbWUgXSA9IHBsdWdpbjtcblxuXHRcdFx0Ly8gV29ya2Fyb3VuZCB0byBhdm9pZCBkZXRlcm1pbmluZyBhcyB1bmtub3duIGV4dGVuc2lvblxuXHRcdFx0Ly8gaW4gYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCkuXG5cdFx0XHQvLyBSZW1vdmUgdGhpcyB3b3JrYXJvdW5kIGlmIHdlIG1vdmUgYWxsIHRoZSBleGlzdGluZ1xuXHRcdFx0Ly8gZXh0ZW5zaW9uIGhhbmRsZXJzIHRvIHBsdWdpbiBzeXN0ZW1cblx0XHRcdGV4dGVuc2lvbnNbIHBsdWdpbi5uYW1lIF0gPSB0cnVlO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNVc2VkICkge1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBqc29uLmV4dGVuc2lvbnNVc2VkLmxlbmd0aDsgKysgaSApIHtcblxuXHRcdFx0XHRjb25zdCBleHRlbnNpb25OYW1lID0ganNvbi5leHRlbnNpb25zVXNlZFsgaSBdO1xuXHRcdFx0XHRjb25zdCBleHRlbnNpb25zUmVxdWlyZWQgPSBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCB8fCBbXTtcblxuXHRcdFx0XHRzd2l0Y2ggKCBleHRlbnNpb25OYW1lICkge1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQ6XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1hdGVyaWFsc1VubGl0RXh0ZW5zaW9uKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZNYXRlcmlhbHNQYnJTcGVjdWxhckdsb3NzaW5lc3NFeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZEcmFjb01lc2hDb21wcmVzc2lvbkV4dGVuc2lvbigganNvbiwgdGhpcy5kcmFjb0xvYWRlciApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZUZXh0dXJlVHJhbnNmb3JtRXh0ZW5zaW9uKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfTUVTSF9RVUFOVElaQVRJT046XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1lc2hRdWFudGl6YXRpb25FeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdFx0aWYgKCBleHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggZXh0ZW5zaW9uTmFtZSApID49IDAgJiYgcGx1Z2luc1sgZXh0ZW5zaW9uTmFtZSBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogVW5rbm93biBleHRlbnNpb24gXCInICsgZXh0ZW5zaW9uTmFtZSArICdcIi4nICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHBhcnNlci5zZXRFeHRlbnNpb25zKCBleHRlbnNpb25zICk7XG5cdFx0cGFyc2VyLnNldFBsdWdpbnMoIHBsdWdpbnMgKTtcblx0XHRwYXJzZXIucGFyc2UoIG9uTG9hZCwgb25FcnJvciApO1xuXG5cdH1cblxuXHRwYXJzZUFzeW5jKCBkYXRhLCBwYXRoICkge1xuXG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUsIHJlamVjdCApIHtcblxuXHRcdFx0c2NvcGUucGFyc2UoIGRhdGEsIHBhdGgsIHJlc29sdmUsIHJlamVjdCApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxufVxuXG4vKiBHTFRGUkVHSVNUUlkgKi9cblxuZnVuY3Rpb24gR0xURlJlZ2lzdHJ5KCkge1xuXG5cdGxldCBvYmplY3RzID0ge307XG5cblx0cmV0dXJuXHR7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0XHRyZXR1cm4gb2JqZWN0c1sga2V5IF07XG5cblx0XHR9LFxuXG5cdFx0YWRkOiBmdW5jdGlvbiAoIGtleSwgb2JqZWN0ICkge1xuXG5cdFx0XHRvYmplY3RzWyBrZXkgXSA9IG9iamVjdDtcblxuXHRcdH0sXG5cblx0XHRyZW1vdmU6IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0XHRkZWxldGUgb2JqZWN0c1sga2V5IF07XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlQWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdG9iamVjdHMgPSB7fTtcblxuXHRcdH1cblxuXHR9O1xuXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBFWFRFTlNJT05TICoqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgRVhURU5TSU9OUyA9IHtcblx0S0hSX0JJTkFSWV9HTFRGOiAnS0hSX2JpbmFyeV9nbFRGJyxcblx0S0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT046ICdLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbicsXG5cdEtIUl9MSUdIVFNfUFVOQ1RVQUw6ICdLSFJfbGlnaHRzX3B1bmN0dWFsJyxcblx0S0hSX01BVEVSSUFMU19DTEVBUkNPQVQ6ICdLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdCcsXG5cdEtIUl9NQVRFUklBTFNfSU9SOiAnS0hSX21hdGVyaWFsc19pb3InLFxuXHRLSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTOiAnS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3MnLFxuXHRLSFJfTUFURVJJQUxTX1NIRUVOOiAnS0hSX21hdGVyaWFsc19zaGVlbicsXG5cdEtIUl9NQVRFUklBTFNfU1BFQ1VMQVI6ICdLSFJfbWF0ZXJpYWxzX3NwZWN1bGFyJyxcblx0S0hSX01BVEVSSUFMU19UUkFOU01JU1NJT046ICdLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbicsXG5cdEtIUl9NQVRFUklBTFNfVU5MSVQ6ICdLSFJfbWF0ZXJpYWxzX3VubGl0Jyxcblx0S0hSX01BVEVSSUFMU19WT0xVTUU6ICdLSFJfbWF0ZXJpYWxzX3ZvbHVtZScsXG5cdEtIUl9URVhUVVJFX0JBU0lTVTogJ0tIUl90ZXh0dXJlX2Jhc2lzdScsXG5cdEtIUl9URVhUVVJFX1RSQU5TRk9STTogJ0tIUl90ZXh0dXJlX3RyYW5zZm9ybScsXG5cdEtIUl9NRVNIX1FVQU5USVpBVElPTjogJ0tIUl9tZXNoX3F1YW50aXphdGlvbicsXG5cdEVYVF9URVhUVVJFX1dFQlA6ICdFWFRfdGV4dHVyZV93ZWJwJyxcblx0RVhUX01FU0hPUFRfQ09NUFJFU1NJT046ICdFWFRfbWVzaG9wdF9jb21wcmVzc2lvbidcbn07XG5cbi8qKlxuICogUHVuY3R1YWwgTGlnaHRzIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9saWdodHNfcHVuY3R1YWxcbiAqL1xuY2xhc3MgR0xURkxpZ2h0c0V4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0xJR0hUU19QVU5DVFVBTDtcblxuXHRcdC8vIE9iamVjdDNEIGluc3RhbmNlIGNhY2hlc1xuXHRcdHRoaXMuY2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xuXG5cdH1cblxuXHRfbWFya0RlZnMoKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBub2RlRGVmcyA9IHRoaXMucGFyc2VyLmpzb24ubm9kZXMgfHwgW107XG5cblx0XHRmb3IgKCBsZXQgbm9kZUluZGV4ID0gMCwgbm9kZUxlbmd0aCA9IG5vZGVEZWZzLmxlbmd0aDsgbm9kZUluZGV4IDwgbm9kZUxlbmd0aDsgbm9kZUluZGV4ICsrICkge1xuXG5cdFx0XHRjb25zdCBub2RlRGVmID0gbm9kZURlZnNbIG5vZGVJbmRleCBdO1xuXG5cdFx0XHRpZiAoIG5vZGVEZWYuZXh0ZW5zaW9uc1xuXHRcdFx0XHRcdCYmIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF1cblx0XHRcdFx0XHQmJiBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmxpZ2h0ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGFyc2VyLl9hZGROb2RlUmVmKCB0aGlzLmNhY2hlLCBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmxpZ2h0ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0X2xvYWRMaWdodCggbGlnaHRJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IGNhY2hlS2V5ID0gJ2xpZ2h0OicgKyBsaWdodEluZGV4O1xuXHRcdGxldCBkZXBlbmRlbmN5ID0gcGFyc2VyLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdGlmICggZGVwZW5kZW5jeSApIHJldHVybiBkZXBlbmRlbmN5O1xuXG5cdFx0Y29uc3QganNvbiA9IHBhcnNlci5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSAoIGpzb24uZXh0ZW5zaW9ucyAmJiBqc29uLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgfHwge307XG5cdFx0Y29uc3QgbGlnaHREZWZzID0gZXh0ZW5zaW9ucy5saWdodHMgfHwgW107XG5cdFx0Y29uc3QgbGlnaHREZWYgPSBsaWdodERlZnNbIGxpZ2h0SW5kZXggXTtcblx0XHRsZXQgbGlnaHROb2RlO1xuXG5cdFx0Y29uc3QgY29sb3IgPSBuZXcgQ29sb3IoIDB4ZmZmZmZmICk7XG5cblx0XHRpZiAoIGxpZ2h0RGVmLmNvbG9yICE9PSB1bmRlZmluZWQgKSBjb2xvci5mcm9tQXJyYXkoIGxpZ2h0RGVmLmNvbG9yICk7XG5cblx0XHRjb25zdCByYW5nZSA9IGxpZ2h0RGVmLnJhbmdlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5yYW5nZSA6IDA7XG5cblx0XHRzd2l0Y2ggKCBsaWdodERlZi50eXBlICkge1xuXG5cdFx0XHRjYXNlICdkaXJlY3Rpb25hbCc6XG5cdFx0XHRcdGxpZ2h0Tm9kZSA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KCBjb2xvciApO1xuXHRcdFx0XHRsaWdodE5vZGUudGFyZ2V0LnBvc2l0aW9uLnNldCggMCwgMCwgLSAxICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5hZGQoIGxpZ2h0Tm9kZS50YXJnZXQgKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3BvaW50Jzpcblx0XHRcdFx0bGlnaHROb2RlID0gbmV3IFBvaW50TGlnaHQoIGNvbG9yICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5kaXN0YW5jZSA9IHJhbmdlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnc3BvdCc6XG5cdFx0XHRcdGxpZ2h0Tm9kZSA9IG5ldyBTcG90TGlnaHQoIGNvbG9yICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5kaXN0YW5jZSA9IHJhbmdlO1xuXHRcdFx0XHQvLyBIYW5kbGUgc3BvdGxpZ2h0IHByb3BlcnRpZXMuXG5cdFx0XHRcdGxpZ2h0RGVmLnNwb3QgPSBsaWdodERlZi5zcG90IHx8IHt9O1xuXHRcdFx0XHRsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlID0gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSAhPT0gdW5kZWZpbmVkID8gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSA6IDA7XG5cdFx0XHRcdGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGUgPSBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlIDogTWF0aC5QSSAvIDQuMDtcblx0XHRcdFx0bGlnaHROb2RlLmFuZ2xlID0gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZTtcblx0XHRcdFx0bGlnaHROb2RlLnBlbnVtYnJhID0gMS4wIC0gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSAvIGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGU7XG5cdFx0XHRcdGxpZ2h0Tm9kZS50YXJnZXQucG9zaXRpb24uc2V0KCAwLCAwLCAtIDEgKTtcblx0XHRcdFx0bGlnaHROb2RlLmFkZCggbGlnaHROb2RlLnRhcmdldCApO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5leHBlY3RlZCBsaWdodCB0eXBlOiAnICsgbGlnaHREZWYudHlwZSApO1xuXG5cdFx0fVxuXG5cdFx0Ly8gU29tZSBsaWdodHMgKGUuZy4gc3BvdCkgZGVmYXVsdCB0byBhIHBvc2l0aW9uIG90aGVyIHRoYW4gdGhlIG9yaWdpbi4gUmVzZXQgdGhlIHBvc2l0aW9uXG5cdFx0Ly8gaGVyZSwgYmVjYXVzZSBub2RlLWxldmVsIHBhcnNpbmcgd2lsbCBvbmx5IG92ZXJyaWRlIHBvc2l0aW9uIGlmIGV4cGxpY2l0bHkgc3BlY2lmaWVkLlxuXHRcdGxpZ2h0Tm9kZS5wb3NpdGlvbi5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdGxpZ2h0Tm9kZS5kZWNheSA9IDI7XG5cblx0XHRpZiAoIGxpZ2h0RGVmLmludGVuc2l0eSAhPT0gdW5kZWZpbmVkICkgbGlnaHROb2RlLmludGVuc2l0eSA9IGxpZ2h0RGVmLmludGVuc2l0eTtcblxuXHRcdGxpZ2h0Tm9kZS5uYW1lID0gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIGxpZ2h0RGVmLm5hbWUgfHwgKCAnbGlnaHRfJyArIGxpZ2h0SW5kZXggKSApO1xuXG5cdFx0ZGVwZW5kZW5jeSA9IFByb21pc2UucmVzb2x2ZSggbGlnaHROb2RlICk7XG5cblx0XHRwYXJzZXIuY2FjaGUuYWRkKCBjYWNoZUtleSwgZGVwZW5kZW5jeSApO1xuXG5cdFx0cmV0dXJuIGRlcGVuZGVuY3k7XG5cblx0fVxuXG5cdGNyZWF0ZU5vZGVBdHRhY2htZW50KCBub2RlSW5kZXggKSB7XG5cblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBqc29uID0gcGFyc2VyLmpzb247XG5cdFx0Y29uc3Qgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJbmRleCBdO1xuXHRcdGNvbnN0IGxpZ2h0RGVmID0gKCBub2RlRGVmLmV4dGVuc2lvbnMgJiYgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHx8IHt9O1xuXHRcdGNvbnN0IGxpZ2h0SW5kZXggPSBsaWdodERlZi5saWdodDtcblxuXHRcdGlmICggbGlnaHRJbmRleCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gdGhpcy5fbG9hZExpZ2h0KCBsaWdodEluZGV4ICkudGhlbiggZnVuY3Rpb24gKCBsaWdodCApIHtcblxuXHRcdFx0cmV0dXJuIHBhcnNlci5fZ2V0Tm9kZVJlZiggc2VsZi5jYWNoZSwgbGlnaHRJbmRleCwgbGlnaHQgKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBVbmxpdCBNYXRlcmlhbHMgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc191bmxpdFxuICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzVW5saXRFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoKSB7XG5cblx0XHRyZXR1cm4gTWVzaEJhc2ljTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZFBhcmFtcyggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSB7XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xuXHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSAxLjA7XG5cblx0XHRjb25zdCBtZXRhbGxpY1JvdWdobmVzcyA9IG1hdGVyaWFsRGVmLnBick1ldGFsbGljUm91Z2huZXNzO1xuXG5cdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcyApIHtcblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IgKSApIHtcblxuXHRcdFx0XHRjb25zdCBhcnJheSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvcjtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoIGFycmF5ICk7XG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSBhcnJheVsgMyBdO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSApICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIENsZWFyY29hdCBNYXRlcmlhbHMgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19jbGVhcmNvYXRcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19DTEVBUkNPQVQ7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdEZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jbGVhcmNvYXQgPSBleHRlbnNpb24uY2xlYXJjb2F0RmFjdG9yO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0VGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2NsZWFyY29hdE1hcCcsIGV4dGVuc2lvbi5jbGVhcmNvYXRUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jbGVhcmNvYXRSb3VnaG5lc3MgPSBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2NsZWFyY29hdFJvdWdobmVzc01hcCcsIGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdjbGVhcmNvYXROb3JtYWxNYXAnLCBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSApICk7XG5cblx0XHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBzY2FsZSA9IGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlLnNjYWxlO1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdE5vcm1hbFNjYWxlID0gbmV3IFZlY3RvcjIoIHNjYWxlLCBzY2FsZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBTaGVlbiBNYXRlcmlhbHMgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFpbi9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfc2hlZW5cbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc1NoZWVuRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1NIRUVOO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoIG1hdGVyaWFsSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIE1lc2hQaHlzaWNhbE1hdGVyaWFsO1xuXG5cdH1cblxuXHRleHRlbmRNYXRlcmlhbFBhcmFtcyggbWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuc2hlZW5Db2xvciA9IG5ldyBDb2xvciggMCwgMCwgMCApO1xuXHRcdG1hdGVyaWFsUGFyYW1zLnNoZWVuUm91Z2huZXNzID0gMDtcblx0XHRtYXRlcmlhbFBhcmFtcy5zaGVlbiA9IDE7XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdGlmICggZXh0ZW5zaW9uLnNoZWVuQ29sb3JGYWN0b3IgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuc2hlZW5Db2xvci5mcm9tQXJyYXkoIGV4dGVuc2lvbi5zaGVlbkNvbG9yRmFjdG9yICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5zaGVlblJvdWdobmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5zaGVlblJvdWdobmVzcyA9IGV4dGVuc2lvbi5zaGVlblJvdWdobmVzc0ZhY3RvcjtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLnNoZWVuQ29sb3JUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnc2hlZW5Db2xvck1hcCcsIGV4dGVuc2lvbi5zaGVlbkNvbG9yVGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5zaGVlblJvdWdobmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdzaGVlblJvdWdobmVzc01hcCcsIGV4dGVuc2lvbi5zaGVlblJvdWdobmVzc1RleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogVHJhbnNtaXNzaW9uIE1hdGVyaWFscyBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvblxuICogRHJhZnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9wdWxsLzE2OThcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc1RyYW5zbWlzc2lvbkV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19UUkFOU01JU1NJT047XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdGlmICggZXh0ZW5zaW9uLnRyYW5zbWlzc2lvbkZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy50cmFuc21pc3Npb24gPSBleHRlbnNpb24udHJhbnNtaXNzaW9uRmFjdG9yO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24udHJhbnNtaXNzaW9uVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3RyYW5zbWlzc2lvbk1hcCcsIGV4dGVuc2lvbi50cmFuc21pc3Npb25UZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIE1hdGVyaWFscyBWb2x1bWUgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc192b2x1bWVcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc1ZvbHVtZUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19WT0xVTUU7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdG1hdGVyaWFsUGFyYW1zLnRoaWNrbmVzcyA9IGV4dGVuc2lvbi50aGlja25lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCA/IGV4dGVuc2lvbi50aGlja25lc3NGYWN0b3IgOiAwO1xuXG5cdFx0aWYgKCBleHRlbnNpb24udGhpY2tuZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3RoaWNrbmVzc01hcCcsIGV4dGVuc2lvbi50aGlja25lc3NUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdG1hdGVyaWFsUGFyYW1zLmF0dGVudWF0aW9uRGlzdGFuY2UgPSBleHRlbnNpb24uYXR0ZW51YXRpb25EaXN0YW5jZSB8fCAwO1xuXG5cdFx0Y29uc3QgY29sb3JBcnJheSA9IGV4dGVuc2lvbi5hdHRlbnVhdGlvbkNvbG9yIHx8IFsgMSwgMSwgMSBdO1xuXHRcdG1hdGVyaWFsUGFyYW1zLmF0dGVudWF0aW9uQ29sb3IgPSBuZXcgQ29sb3IoIGNvbG9yQXJyYXlbIDAgXSwgY29sb3JBcnJheVsgMSBdLCBjb2xvckFycmF5WyAyIF0gKTtcblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIE1hdGVyaWFscyBpb3IgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19pb3JcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc0lvckV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19JT1I7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdG1hdGVyaWFsUGFyYW1zLmlvciA9IGV4dGVuc2lvbi5pb3IgIT09IHVuZGVmaW5lZCA/IGV4dGVuc2lvbi5pb3IgOiAxLjU7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogTWF0ZXJpYWxzIHNwZWN1bGFyIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfc3BlY3VsYXJcbiAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc1NwZWN1bGFyRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1NQRUNVTEFSO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoIG1hdGVyaWFsSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIE1lc2hQaHlzaWNhbE1hdGVyaWFsO1xuXG5cdH1cblxuXHRleHRlbmRNYXRlcmlhbFBhcmFtcyggbWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Y29uc3QgZXh0ZW5zaW9uID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cblx0XHRtYXRlcmlhbFBhcmFtcy5zcGVjdWxhckludGVuc2l0eSA9IGV4dGVuc2lvbi5zcGVjdWxhckZhY3RvciAhPT0gdW5kZWZpbmVkID8gZXh0ZW5zaW9uLnNwZWN1bGFyRmFjdG9yIDogMS4wO1xuXG5cdFx0aWYgKCBleHRlbnNpb24uc3BlY3VsYXJUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnc3BlY3VsYXJJbnRlbnNpdHlNYXAnLCBleHRlbnNpb24uc3BlY3VsYXJUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGNvbG9yQXJyYXkgPSBleHRlbnNpb24uc3BlY3VsYXJDb2xvckZhY3RvciB8fCBbIDEsIDEsIDEgXTtcblx0XHRtYXRlcmlhbFBhcmFtcy5zcGVjdWxhckNvbG9yID0gbmV3IENvbG9yKCBjb2xvckFycmF5WyAwIF0sIGNvbG9yQXJyYXlbIDEgXSwgY29sb3JBcnJheVsgMiBdICk7XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5zcGVjdWxhckNvbG9yVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3NwZWN1bGFyQ29sb3JNYXAnLCBleHRlbnNpb24uc3BlY3VsYXJDb2xvclRleHR1cmUgKS50aGVuKCBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cblx0XHRcdFx0dGV4dHVyZS5lbmNvZGluZyA9IHNSR0JFbmNvZGluZztcblxuXHRcdFx0fSApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBCYXNpc1UgVGV4dHVyZSBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfdGV4dHVyZV9iYXNpc3VcbiAqL1xuY2xhc3MgR0xURlRleHR1cmVCYXNpc1VFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9URVhUVVJFX0JBU0lTVTtcblxuXHR9XG5cblx0bG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbjtcblxuXHRcdGNvbnN0IHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcblxuXHRcdGlmICggISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnMgfHwgISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cdFx0Y29uc3Qgc291cmNlID0ganNvbi5pbWFnZXNbIGV4dGVuc2lvbi5zb3VyY2UgXTtcblx0XHRjb25zdCBsb2FkZXIgPSBwYXJzZXIub3B0aW9ucy5rdHgyTG9hZGVyO1xuXG5cdFx0aWYgKCAhIGxvYWRlciApIHtcblxuXHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCAmJiBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCB0aGlzLm5hbWUgKSA+PSAwICkge1xuXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IHNldEtUWDJMb2FkZXIgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgS1RYMiB0ZXh0dXJlcycgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBBc3N1bWVzIHRoYXQgdGhlIGV4dGVuc2lvbiBpcyBvcHRpb25hbCBhbmQgdGhhdCBhIGZhbGxiYWNrIHRleHR1cmUgaXMgcHJlc2VudFxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICk7XG5cblx0fVxuXG59XG5cbi8qKlxuICogV2ViUCBUZXh0dXJlIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX3RleHR1cmVfd2VicFxuICovXG5jbGFzcyBHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLkVYVF9URVhUVVJFX1dFQlA7XG5cdFx0dGhpcy5pc1N1cHBvcnRlZCA9IG51bGw7XG5cblx0fVxuXG5cdGxvYWRUZXh0dXJlKCB0ZXh0dXJlSW5kZXggKSB7XG5cblx0XHRjb25zdCBuYW1lID0gdGhpcy5uYW1lO1xuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbjtcblxuXHRcdGNvbnN0IHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcblxuXHRcdGlmICggISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnMgfHwgISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIG5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIG5hbWUgXTtcblx0XHRjb25zdCBzb3VyY2UgPSBqc29uLmltYWdlc1sgZXh0ZW5zaW9uLnNvdXJjZSBdO1xuXG5cdFx0bGV0IGxvYWRlciA9IHBhcnNlci50ZXh0dXJlTG9hZGVyO1xuXHRcdGlmICggc291cmNlLnVyaSApIHtcblxuXHRcdFx0Y29uc3QgaGFuZGxlciA9IHBhcnNlci5vcHRpb25zLm1hbmFnZXIuZ2V0SGFuZGxlciggc291cmNlLnVyaSApO1xuXHRcdFx0aWYgKCBoYW5kbGVyICE9PSBudWxsICkgbG9hZGVyID0gaGFuZGxlcjtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmRldGVjdFN1cHBvcnQoKS50aGVuKCBmdW5jdGlvbiAoIGlzU3VwcG9ydGVkICkge1xuXG5cdFx0XHRpZiAoIGlzU3VwcG9ydGVkICkgcmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICk7XG5cblx0XHRcdGlmICgganNvbi5leHRlbnNpb25zUmVxdWlyZWQgJiYganNvbi5leHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggbmFtZSApID49IDAgKSB7XG5cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogV2ViUCByZXF1aXJlZCBieSBhc3NldCBidXQgdW5zdXBwb3J0ZWQuJyApO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIEZhbGwgYmFjayB0byBQTkcgb3IgSlBFRy5cblx0XHRcdHJldHVybiBwYXJzZXIubG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHRkZXRlY3RTdXBwb3J0KCkge1xuXG5cdFx0aWYgKCAhIHRoaXMuaXNTdXBwb3J0ZWQgKSB7XG5cblx0XHRcdHRoaXMuaXNTdXBwb3J0ZWQgPSBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlICkge1xuXG5cdFx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cblx0XHRcdFx0Ly8gTG9zc3kgdGVzdCBpbWFnZS4gU3VwcG9ydCBmb3IgbG9zc3kgaW1hZ2VzIGRvZXNuJ3QgZ3VhcmFudGVlIHN1cHBvcnQgZm9yIGFsbFxuXHRcdFx0XHQvLyBXZWJQIGltYWdlcywgdW5mb3J0dW5hdGVseS5cblx0XHRcdFx0aW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1JpSUFBQUJYUlVKUVZsQTRJQllBQUFBd0FRQ2RBU29CQUFFQURzRCtKYVFBQTNBQUFBQUEnO1xuXG5cdFx0XHRcdGltYWdlLm9ubG9hZCA9IGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0XHRyZXNvbHZlKCBpbWFnZS5oZWlnaHQgPT09IDEgKTtcblxuXHRcdFx0XHR9O1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5pc1N1cHBvcnRlZDtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBtZXNob3B0IEJ1ZmZlclZpZXcgQ29tcHJlc3Npb24gRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfbWVzaG9wdF9jb21wcmVzc2lvblxuICovXG5jbGFzcyBHTFRGTWVzaG9wdENvbXByZXNzaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5FWFRfTUVTSE9QVF9DT01QUkVTU0lPTjtcblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuXHR9XG5cblx0bG9hZEJ1ZmZlclZpZXcoIGluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb247XG5cdFx0Y29uc3QgYnVmZmVyVmlldyA9IGpzb24uYnVmZmVyVmlld3NbIGluZGV4IF07XG5cblx0XHRpZiAoIGJ1ZmZlclZpZXcuZXh0ZW5zaW9ucyAmJiBidWZmZXJWaWV3LmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRjb25zdCBleHRlbnNpb25EZWYgPSBidWZmZXJWaWV3LmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0XHRjb25zdCBidWZmZXIgPSB0aGlzLnBhcnNlci5nZXREZXBlbmRlbmN5KCAnYnVmZmVyJywgZXh0ZW5zaW9uRGVmLmJ1ZmZlciApO1xuXHRcdFx0Y29uc3QgZGVjb2RlciA9IHRoaXMucGFyc2VyLm9wdGlvbnMubWVzaG9wdERlY29kZXI7XG5cblx0XHRcdGlmICggISBkZWNvZGVyIHx8ICEgZGVjb2Rlci5zdXBwb3J0ZWQgKSB7XG5cblx0XHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCAmJiBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCB0aGlzLm5hbWUgKSA+PSAwICkge1xuXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogc2V0TWVzaG9wdERlY29kZXIgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgY29tcHJlc3NlZCBmaWxlcycgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gQXNzdW1lcyB0aGF0IHRoZSBleHRlbnNpb24gaXMgb3B0aW9uYWwgYW5kIHRoYXQgZmFsbGJhY2sgYnVmZmVyIGRhdGEgaXMgcHJlc2VudFxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFsgYnVmZmVyLCBkZWNvZGVyLnJlYWR5IF0gKS50aGVuKCBmdW5jdGlvbiAoIHJlcyApIHtcblxuXHRcdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gZXh0ZW5zaW9uRGVmLmJ5dGVPZmZzZXQgfHwgMDtcblx0XHRcdFx0Y29uc3QgYnl0ZUxlbmd0aCA9IGV4dGVuc2lvbkRlZi5ieXRlTGVuZ3RoIHx8IDA7XG5cblx0XHRcdFx0Y29uc3QgY291bnQgPSBleHRlbnNpb25EZWYuY291bnQ7XG5cdFx0XHRcdGNvbnN0IHN0cmlkZSA9IGV4dGVuc2lvbkRlZi5ieXRlU3RyaWRlO1xuXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheUJ1ZmZlciggY291bnQgKiBzdHJpZGUgKTtcblx0XHRcdFx0Y29uc3Qgc291cmNlID0gbmV3IFVpbnQ4QXJyYXkoIHJlc1sgMCBdLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoICk7XG5cblx0XHRcdFx0ZGVjb2Rlci5kZWNvZGVHbHRmQnVmZmVyKCBuZXcgVWludDhBcnJheSggcmVzdWx0ICksIGNvdW50LCBzdHJpZGUsIHNvdXJjZSwgZXh0ZW5zaW9uRGVmLm1vZGUsIGV4dGVuc2lvbkRlZi5maWx0ZXIgKTtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbi8qIEJJTkFSWSBFWFRFTlNJT04gKi9cbmNvbnN0IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDID0gJ2dsVEYnO1xuY29uc3QgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIID0gMTI7XG5jb25zdCBCSU5BUllfRVhURU5TSU9OX0NIVU5LX1RZUEVTID0geyBKU09OOiAweDRFNEY1MzRBLCBCSU46IDB4MDA0RTQ5NDIgfTtcblxuY2xhc3MgR0xURkJpbmFyeUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIGRhdGEgKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURjtcblx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xuXHRcdHRoaXMuYm9keSA9IG51bGw7XG5cblx0XHRjb25zdCBoZWFkZXJWaWV3ID0gbmV3IERhdGFWaWV3KCBkYXRhLCAwLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKTtcblxuXHRcdHRoaXMuaGVhZGVyID0ge1xuXHRcdFx0bWFnaWM6IExvYWRlclV0aWxzLmRlY29kZVRleHQoIG5ldyBVaW50OEFycmF5KCBkYXRhLnNsaWNlKCAwLCA0ICkgKSApLFxuXHRcdFx0dmVyc2lvbjogaGVhZGVyVmlldy5nZXRVaW50MzIoIDQsIHRydWUgKSxcblx0XHRcdGxlbmd0aDogaGVhZGVyVmlldy5nZXRVaW50MzIoIDgsIHRydWUgKVxuXHRcdH07XG5cblx0XHRpZiAoIHRoaXMuaGVhZGVyLm1hZ2ljICE9PSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9NQUdJQyApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgZ2xURi1CaW5hcnkgaGVhZGVyLicgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHRoaXMuaGVhZGVyLnZlcnNpb24gPCAyLjAgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IExlZ2FjeSBiaW5hcnkgZmlsZSBkZXRlY3RlZC4nICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBjaHVua0NvbnRlbnRzTGVuZ3RoID0gdGhpcy5oZWFkZXIubGVuZ3RoIC0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIO1xuXHRcdGNvbnN0IGNodW5rVmlldyA9IG5ldyBEYXRhVmlldyggZGF0YSwgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICk7XG5cdFx0bGV0IGNodW5rSW5kZXggPSAwO1xuXG5cdFx0d2hpbGUgKCBjaHVua0luZGV4IDwgY2h1bmtDb250ZW50c0xlbmd0aCApIHtcblxuXHRcdFx0Y29uc3QgY2h1bmtMZW5ndGggPSBjaHVua1ZpZXcuZ2V0VWludDMyKCBjaHVua0luZGV4LCB0cnVlICk7XG5cdFx0XHRjaHVua0luZGV4ICs9IDQ7XG5cblx0XHRcdGNvbnN0IGNodW5rVHlwZSA9IGNodW5rVmlldy5nZXRVaW50MzIoIGNodW5rSW5kZXgsIHRydWUgKTtcblx0XHRcdGNodW5rSW5kZXggKz0gNDtcblxuXHRcdFx0aWYgKCBjaHVua1R5cGUgPT09IEJJTkFSWV9FWFRFTlNJT05fQ0hVTktfVFlQRVMuSlNPTiApIHtcblxuXHRcdFx0XHRjb25zdCBjb250ZW50QXJyYXkgPSBuZXcgVWludDhBcnJheSggZGF0YSwgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICsgY2h1bmtJbmRleCwgY2h1bmtMZW5ndGggKTtcblx0XHRcdFx0dGhpcy5jb250ZW50ID0gTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggY29udGVudEFycmF5ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGNodW5rVHlwZSA9PT0gQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUy5CSU4gKSB7XG5cblx0XHRcdFx0Y29uc3QgYnl0ZU9mZnNldCA9IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCArIGNodW5rSW5kZXg7XG5cdFx0XHRcdHRoaXMuYm9keSA9IGRhdGEuc2xpY2UoIGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBjaHVua0xlbmd0aCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIENsaWVudHMgbXVzdCBpZ25vcmUgY2h1bmtzIHdpdGggdW5rbm93biB0eXBlcy5cblxuXHRcdFx0Y2h1bmtJbmRleCArPSBjaHVua0xlbmd0aDtcblxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5jb250ZW50ID09PSBudWxsICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBKU09OIGNvbnRlbnQgbm90IGZvdW5kLicgKTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyoqXG4gKiBEUkFDTyBNZXNoIENvbXByZXNzaW9uIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uXG4gKi9cbmNsYXNzIEdMVEZEcmFjb01lc2hDb21wcmVzc2lvbkV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIGpzb24sIGRyYWNvTG9hZGVyICkge1xuXG5cdFx0aWYgKCAhIGRyYWNvTG9hZGVyICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBObyBEUkFDT0xvYWRlciBpbnN0YW5jZSBwcm92aWRlZC4nICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OO1xuXHRcdHRoaXMuanNvbiA9IGpzb247XG5cdFx0dGhpcy5kcmFjb0xvYWRlciA9IGRyYWNvTG9hZGVyO1xuXHRcdHRoaXMuZHJhY29Mb2FkZXIucHJlbG9hZCgpO1xuXG5cdH1cblxuXHRkZWNvZGVQcmltaXRpdmUoIHByaW1pdGl2ZSwgcGFyc2VyICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBkcmFjb0xvYWRlciA9IHRoaXMuZHJhY29Mb2FkZXI7XG5cdFx0Y29uc3QgYnVmZmVyVmlld0luZGV4ID0gcHJpbWl0aXZlLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmJ1ZmZlclZpZXc7XG5cdFx0Y29uc3QgZ2x0ZkF0dHJpYnV0ZU1hcCA9IHByaW1pdGl2ZS5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5hdHRyaWJ1dGVzO1xuXHRcdGNvbnN0IHRocmVlQXR0cmlidXRlTWFwID0ge307XG5cdFx0Y29uc3QgYXR0cmlidXRlTm9ybWFsaXplZE1hcCA9IHt9O1xuXHRcdGNvbnN0IGF0dHJpYnV0ZVR5cGVNYXAgPSB7fTtcblxuXHRcdGZvciAoIGNvbnN0IGF0dHJpYnV0ZU5hbWUgaW4gZ2x0ZkF0dHJpYnV0ZU1hcCApIHtcblxuXHRcdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgYXR0cmlidXRlTmFtZSBdIHx8IGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0dGhyZWVBdHRyaWJ1dGVNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gZ2x0ZkF0dHJpYnV0ZU1hcFsgYXR0cmlidXRlTmFtZSBdO1xuXG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgYXR0cmlidXRlTmFtZSBpbiBwcmltaXRpdmUuYXR0cmlidXRlcyApIHtcblxuXHRcdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgYXR0cmlidXRlTmFtZSBdIHx8IGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aWYgKCBnbHRmQXR0cmlidXRlTWFwWyBhdHRyaWJ1dGVOYW1lIF0gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBhY2Nlc3NvckRlZiA9IGpzb24uYWNjZXNzb3JzWyBwcmltaXRpdmUuYXR0cmlidXRlc1sgYXR0cmlidXRlTmFtZSBdIF07XG5cdFx0XHRcdGNvbnN0IGNvbXBvbmVudFR5cGUgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yRGVmLmNvbXBvbmVudFR5cGUgXTtcblxuXHRcdFx0XHRhdHRyaWJ1dGVUeXBlTWFwWyB0aHJlZUF0dHJpYnV0ZU5hbWUgXSA9IGNvbXBvbmVudFR5cGU7XG5cdFx0XHRcdGF0dHJpYnV0ZU5vcm1hbGl6ZWRNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gYWNjZXNzb3JEZWYubm9ybWFsaXplZCA9PT0gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGJ1ZmZlclZpZXdJbmRleCApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyVmlldyApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUgKSB7XG5cblx0XHRcdFx0ZHJhY29Mb2FkZXIuZGVjb2RlRHJhY29GaWxlKCBidWZmZXJWaWV3LCBmdW5jdGlvbiAoIGdlb21ldHJ5ICkge1xuXG5cdFx0XHRcdFx0Zm9yICggY29uc3QgYXR0cmlidXRlTmFtZSBpbiBnZW9tZXRyeS5hdHRyaWJ1dGVzICkge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBhdHRyaWJ1dGUgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzWyBhdHRyaWJ1dGVOYW1lIF07XG5cdFx0XHRcdFx0XHRjb25zdCBub3JtYWxpemVkID0gYXR0cmlidXRlTm9ybWFsaXplZE1hcFsgYXR0cmlidXRlTmFtZSBdO1xuXG5cdFx0XHRcdFx0XHRpZiAoIG5vcm1hbGl6ZWQgIT09IHVuZGVmaW5lZCApIGF0dHJpYnV0ZS5ub3JtYWxpemVkID0gbm9ybWFsaXplZDtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlc29sdmUoIGdlb21ldHJ5ICk7XG5cblx0XHRcdFx0fSwgdGhyZWVBdHRyaWJ1dGVNYXAsIGF0dHJpYnV0ZVR5cGVNYXAgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIFRleHR1cmUgVHJhbnNmb3JtIEV4dGVuc2lvblxuICpcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybVxuICovXG5jbGFzcyBHTFRGVGV4dHVyZVRyYW5zZm9ybUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STTtcblxuXHR9XG5cblx0ZXh0ZW5kVGV4dHVyZSggdGV4dHVyZSwgdHJhbnNmb3JtICkge1xuXG5cdFx0aWYgKCB0cmFuc2Zvcm0udGV4Q29vcmQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogQ3VzdG9tIFVWIHNldHMgaW4gXCInICsgdGhpcy5uYW1lICsgJ1wiIGV4dGVuc2lvbiBub3QgeWV0IHN1cHBvcnRlZC4nICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zZm9ybS5vZmZzZXQgPT09IHVuZGVmaW5lZCAmJiB0cmFuc2Zvcm0ucm90YXRpb24gPT09IHVuZGVmaW5lZCAmJiB0cmFuc2Zvcm0uc2NhbGUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzIxODE5LlxuXHRcdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0XHR9XG5cblx0XHR0ZXh0dXJlID0gdGV4dHVyZS5jbG9uZSgpO1xuXG5cdFx0aWYgKCB0cmFuc2Zvcm0ub2Zmc2V0ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHRleHR1cmUub2Zmc2V0LmZyb21BcnJheSggdHJhbnNmb3JtLm9mZnNldCApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0cmFuc2Zvcm0ucm90YXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGV4dHVyZS5yb3RhdGlvbiA9IHRyYW5zZm9ybS5yb3RhdGlvbjtcblxuXHRcdH1cblxuXHRcdGlmICggdHJhbnNmb3JtLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHRleHR1cmUucmVwZWF0LmZyb21BcnJheSggdHJhbnNmb3JtLnNjYWxlICk7XG5cblx0XHR9XG5cblx0XHR0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuXHRcdHJldHVybiB0ZXh0dXJlO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIFNwZWN1bGFyLUdsb3NzaW5lc3MgRXh0ZW5zaW9uXG4gKlxuICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFpbi9leHRlbnNpb25zLzIuMC9BcmNoaXZlZC9LSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzc1xuICovXG5cbi8qKlxuICogQSBzdWIgY2xhc3Mgb2YgU3RhbmRhcmRNYXRlcmlhbCB3aXRoIHNvbWUgb2YgdGhlIGZ1bmN0aW9uYWxpdHlcbiAqIGNoYW5nZWQgdmlhIHRoZSBgb25CZWZvcmVDb21waWxlYCBjYWxsYmFja1xuICogQHBhaWxoZWFkXG4gKi9cbmNsYXNzIEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsIGV4dGVuZHMgTWVzaFN0YW5kYXJkTWF0ZXJpYWwge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJhbXMgKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5pc0dMVEZTcGVjdWxhckdsb3NzaW5lc3NNYXRlcmlhbCA9IHRydWU7XG5cblx0XHQvL3ZhcmlvdXMgY2h1bmtzIHRoYXQgbmVlZCByZXBsYWNpbmdcblx0XHRjb25zdCBzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rID0gW1xuXHRcdFx0JyNpZmRlZiBVU0VfU1BFQ1VMQVJNQVAnLFxuXHRcdFx0J1x0dW5pZm9ybSBzYW1wbGVyMkQgc3BlY3VsYXJNYXA7Jyxcblx0XHRcdCcjZW5kaWYnXG5cdFx0XS5qb2luKCAnXFxuJyApO1xuXG5cdFx0Y29uc3QgZ2xvc3NpbmVzc01hcFBhcnNGcmFnbWVudENodW5rID0gW1xuXHRcdFx0JyNpZmRlZiBVU0VfR0xPU1NJTkVTU01BUCcsXG5cdFx0XHQnXHR1bmlmb3JtIHNhbXBsZXIyRCBnbG9zc2luZXNzTWFwOycsXG5cdFx0XHQnI2VuZGlmJ1xuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IHNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayA9IFtcblx0XHRcdCd2ZWMzIHNwZWN1bGFyRmFjdG9yID0gc3BlY3VsYXI7Jyxcblx0XHRcdCcjaWZkZWYgVVNFX1NQRUNVTEFSTUFQJyxcblx0XHRcdCdcdHZlYzQgdGV4ZWxTcGVjdWxhciA9IHRleHR1cmUyRCggc3BlY3VsYXJNYXAsIHZVdiApOycsXG5cdFx0XHQnXHR0ZXhlbFNwZWN1bGFyID0gc1JHQlRvTGluZWFyKCB0ZXhlbFNwZWN1bGFyICk7Jyxcblx0XHRcdCdcdC8vIHJlYWRzIGNoYW5uZWwgUkdCLCBjb21wYXRpYmxlIHdpdGggYSBnbFRGIFNwZWN1bGFyLUdsb3NzaW5lc3MgKFJHQkEpIHRleHR1cmUnLFxuXHRcdFx0J1x0c3BlY3VsYXJGYWN0b3IgKj0gdGV4ZWxTcGVjdWxhci5yZ2I7Jyxcblx0XHRcdCcjZW5kaWYnXG5cdFx0XS5qb2luKCAnXFxuJyApO1xuXG5cdFx0Y29uc3QgZ2xvc3NpbmVzc01hcEZyYWdtZW50Q2h1bmsgPSBbXG5cdFx0XHQnZmxvYXQgZ2xvc3NpbmVzc0ZhY3RvciA9IGdsb3NzaW5lc3M7Jyxcblx0XHRcdCcjaWZkZWYgVVNFX0dMT1NTSU5FU1NNQVAnLFxuXHRcdFx0J1x0dmVjNCB0ZXhlbEdsb3NzaW5lc3MgPSB0ZXh0dXJlMkQoIGdsb3NzaW5lc3NNYXAsIHZVdiApOycsXG5cdFx0XHQnXHQvLyByZWFkcyBjaGFubmVsIEEsIGNvbXBhdGlibGUgd2l0aCBhIGdsVEYgU3BlY3VsYXItR2xvc3NpbmVzcyAoUkdCQSkgdGV4dHVyZScsXG5cdFx0XHQnXHRnbG9zc2luZXNzRmFjdG9yICo9IHRleGVsR2xvc3NpbmVzcy5hOycsXG5cdFx0XHQnI2VuZGlmJ1xuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IGxpZ2h0UGh5c2ljYWxGcmFnbWVudENodW5rID0gW1xuXHRcdFx0J1BoeXNpY2FsTWF0ZXJpYWwgbWF0ZXJpYWw7Jyxcblx0XHRcdCdtYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBkaWZmdXNlQ29sb3IucmdiICogKCAxLiAtIG1heCggc3BlY3VsYXJGYWN0b3IuciwgbWF4KCBzcGVjdWxhckZhY3Rvci5nLCBzcGVjdWxhckZhY3Rvci5iICkgKSApOycsXG5cdFx0XHQndmVjMyBkeHkgPSBtYXgoIGFicyggZEZkeCggZ2VvbWV0cnlOb3JtYWwgKSApLCBhYnMoIGRGZHkoIGdlb21ldHJ5Tm9ybWFsICkgKSApOycsXG5cdFx0XHQnZmxvYXQgZ2VvbWV0cnlSb3VnaG5lc3MgPSBtYXgoIG1heCggZHh5LngsIGR4eS55ICksIGR4eS56ICk7Jyxcblx0XHRcdCdtYXRlcmlhbC5yb3VnaG5lc3MgPSBtYXgoIDEuMCAtIGdsb3NzaW5lc3NGYWN0b3IsIDAuMDUyNSApOyAvLyAwLjA1MjUgY29ycmVzcG9uZHMgdG8gdGhlIGJhc2UgbWlwIG9mIGEgMjU2IGN1YmVtYXAuJyxcblx0XHRcdCdtYXRlcmlhbC5yb3VnaG5lc3MgKz0gZ2VvbWV0cnlSb3VnaG5lc3M7Jyxcblx0XHRcdCdtYXRlcmlhbC5yb3VnaG5lc3MgPSBtaW4oIG1hdGVyaWFsLnJvdWdobmVzcywgMS4wICk7Jyxcblx0XHRcdCdtYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gc3BlY3VsYXJGYWN0b3I7Jyxcblx0XHRdLmpvaW4oICdcXG4nICk7XG5cblx0XHRjb25zdCB1bmlmb3JtcyA9IHtcblx0XHRcdHNwZWN1bGFyOiB7IHZhbHVlOiBuZXcgQ29sb3IoKS5zZXRIZXgoIDB4ZmZmZmZmICkgfSxcblx0XHRcdGdsb3NzaW5lc3M6IHsgdmFsdWU6IDEgfSxcblx0XHRcdHNwZWN1bGFyTWFwOiB7IHZhbHVlOiBudWxsIH0sXG5cdFx0XHRnbG9zc2luZXNzTWFwOiB7IHZhbHVlOiBudWxsIH1cblx0XHR9O1xuXG5cdFx0dGhpcy5fZXh0cmFVbmlmb3JtcyA9IHVuaWZvcm1zO1xuXG5cdFx0dGhpcy5vbkJlZm9yZUNvbXBpbGUgPSBmdW5jdGlvbiAoIHNoYWRlciApIHtcblxuXHRcdFx0Zm9yICggY29uc3QgdW5pZm9ybU5hbWUgaW4gdW5pZm9ybXMgKSB7XG5cblx0XHRcdFx0c2hhZGVyLnVuaWZvcm1zWyB1bmlmb3JtTmFtZSBdID0gdW5pZm9ybXNbIHVuaWZvcm1OYW1lIF07XG5cblx0XHRcdH1cblxuXHRcdFx0c2hhZGVyLmZyYWdtZW50U2hhZGVyID0gc2hhZGVyLmZyYWdtZW50U2hhZGVyXG5cdFx0XHRcdC5yZXBsYWNlKCAndW5pZm9ybSBmbG9hdCByb3VnaG5lc3M7JywgJ3VuaWZvcm0gdmVjMyBzcGVjdWxhcjsnIClcblx0XHRcdFx0LnJlcGxhY2UoICd1bmlmb3JtIGZsb2F0IG1ldGFsbmVzczsnLCAndW5pZm9ybSBmbG9hdCBnbG9zc2luZXNzOycgKVxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxyb3VnaG5lc3NtYXBfcGFyc19mcmFnbWVudD4nLCBzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rIClcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8bWV0YWxuZXNzbWFwX3BhcnNfZnJhZ21lbnQ+JywgZ2xvc3NpbmVzc01hcFBhcnNGcmFnbWVudENodW5rIClcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8cm91Z2huZXNzbWFwX2ZyYWdtZW50PicsIHNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPG1ldGFsbmVzc21hcF9mcmFnbWVudD4nLCBnbG9zc2luZXNzTWFwRnJhZ21lbnRDaHVuayApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPGxpZ2h0c19waHlzaWNhbF9mcmFnbWVudD4nLCBsaWdodFBoeXNpY2FsRnJhZ21lbnRDaHVuayApO1xuXG5cdFx0fTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCB0aGlzLCB7XG5cblx0XHRcdHNwZWN1bGFyOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLnNwZWN1bGFyLnZhbHVlO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdFx0dW5pZm9ybXMuc3BlY3VsYXIudmFsdWUgPSB2O1xuXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHNwZWN1bGFyTWFwOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLnNwZWN1bGFyTWFwLnZhbHVlO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdFx0dW5pZm9ybXMuc3BlY3VsYXJNYXAudmFsdWUgPSB2O1xuXG5cdFx0XHRcdFx0aWYgKCB2ICkge1xuXG5cdFx0XHRcdFx0XHR0aGlzLmRlZmluZXMuVVNFX1NQRUNVTEFSTUFQID0gJyc7IC8vIFVTRV9VViBpcyBzZXQgYnkgdGhlIHJlbmRlcmVyIGZvciBzcGVjdWxhciBtYXBzXG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9TUEVDVUxBUk1BUDtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRnbG9zc2luZXNzOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLmdsb3NzaW5lc3MudmFsdWU7XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0XHR1bmlmb3Jtcy5nbG9zc2luZXNzLnZhbHVlID0gdjtcblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRnbG9zc2luZXNzTWFwOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLmdsb3NzaW5lc3NNYXAudmFsdWU7XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0XHR1bmlmb3Jtcy5nbG9zc2luZXNzTWFwLnZhbHVlID0gdjtcblxuXHRcdFx0XHRcdGlmICggdiApIHtcblxuXHRcdFx0XHRcdFx0dGhpcy5kZWZpbmVzLlVTRV9HTE9TU0lORVNTTUFQID0gJyc7XG5cdFx0XHRcdFx0XHR0aGlzLmRlZmluZXMuVVNFX1VWID0gJyc7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9HTE9TU0lORVNTTUFQO1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZGVmaW5lcy5VU0VfVVY7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSApO1xuXG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzO1xuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzcztcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3NNYXA7XG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzTWFwO1xuXG5cdFx0dGhpcy5zZXRWYWx1ZXMoIHBhcmFtcyApO1xuXG5cdH1cblxuXHRjb3B5KCBzb3VyY2UgKSB7XG5cblx0XHRzdXBlci5jb3B5KCBzb3VyY2UgKTtcblxuXHRcdHRoaXMuc3BlY3VsYXJNYXAgPSBzb3VyY2Uuc3BlY3VsYXJNYXA7XG5cdFx0dGhpcy5zcGVjdWxhci5jb3B5KCBzb3VyY2Uuc3BlY3VsYXIgKTtcblx0XHR0aGlzLmdsb3NzaW5lc3NNYXAgPSBzb3VyY2UuZ2xvc3NpbmVzc01hcDtcblx0XHR0aGlzLmdsb3NzaW5lc3MgPSBzb3VyY2UuZ2xvc3NpbmVzcztcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3M7XG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzO1xuXHRcdGRlbGV0ZSB0aGlzLm1ldGFsbmVzc01hcDtcblx0XHRkZWxldGUgdGhpcy5yb3VnaG5lc3NNYXA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG59XG5cblxuY2xhc3MgR0xURk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzc0V4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1M7XG5cblx0XHR0aGlzLnNwZWN1bGFyR2xvc3NpbmVzc1BhcmFtcyA9IFtcblx0XHRcdCdjb2xvcicsXG5cdFx0XHQnbWFwJyxcblx0XHRcdCdsaWdodE1hcCcsXG5cdFx0XHQnbGlnaHRNYXBJbnRlbnNpdHknLFxuXHRcdFx0J2FvTWFwJyxcblx0XHRcdCdhb01hcEludGVuc2l0eScsXG5cdFx0XHQnZW1pc3NpdmUnLFxuXHRcdFx0J2VtaXNzaXZlSW50ZW5zaXR5Jyxcblx0XHRcdCdlbWlzc2l2ZU1hcCcsXG5cdFx0XHQnYnVtcE1hcCcsXG5cdFx0XHQnYnVtcFNjYWxlJyxcblx0XHRcdCdub3JtYWxNYXAnLFxuXHRcdFx0J25vcm1hbE1hcFR5cGUnLFxuXHRcdFx0J2Rpc3BsYWNlbWVudE1hcCcsXG5cdFx0XHQnZGlzcGxhY2VtZW50U2NhbGUnLFxuXHRcdFx0J2Rpc3BsYWNlbWVudEJpYXMnLFxuXHRcdFx0J3NwZWN1bGFyTWFwJyxcblx0XHRcdCdzcGVjdWxhcicsXG5cdFx0XHQnZ2xvc3NpbmVzc01hcCcsXG5cdFx0XHQnZ2xvc3NpbmVzcycsXG5cdFx0XHQnYWxwaGFNYXAnLFxuXHRcdFx0J2Vudk1hcCcsXG5cdFx0XHQnZW52TWFwSW50ZW5zaXR5Jyxcblx0XHRcdCdyZWZyYWN0aW9uUmF0aW8nLFxuXHRcdF07XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSgpIHtcblxuXHRcdHJldHVybiBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kUGFyYW1zKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApIHtcblxuXHRcdGNvbnN0IHBiclNwZWN1bGFyR2xvc3NpbmVzcyA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcblx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUZhY3RvciApICkge1xuXG5cdFx0XHRjb25zdCBhcnJheSA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlRmFjdG9yO1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoIGFycmF5ICk7XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbIDMgXTtcblxuXHRcdH1cblxuXHRcdGlmICggcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlID0gbmV3IENvbG9yKCAwLjAsIDAuMCwgMC4wICk7XG5cdFx0bWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzcyA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5nbG9zc2luZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgPyBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZ2xvc3NpbmVzc0ZhY3RvciA6IDEuMDtcblx0XHRtYXRlcmlhbFBhcmFtcy5zcGVjdWxhciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xuXG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJGYWN0b3IgKSApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXIuZnJvbUFycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJGYWN0b3IgKTtcblxuXHRcdH1cblxuXHRcdGlmICggcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc3Qgc3BlY0dsb3NzTWFwRGVmID0gcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmU7XG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2dsb3NzaW5lc3NNYXAnLCBzcGVjR2xvc3NNYXBEZWYgKSApO1xuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdzcGVjdWxhck1hcCcsIHNwZWNHbG9zc01hcERlZiApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cblx0Y3JlYXRlTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICk7XG5cdFx0bWF0ZXJpYWwuZm9nID0gdHJ1ZTtcblxuXHRcdG1hdGVyaWFsLmNvbG9yID0gbWF0ZXJpYWxQYXJhbXMuY29sb3I7XG5cblx0XHRtYXRlcmlhbC5tYXAgPSBtYXRlcmlhbFBhcmFtcy5tYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5tYXA7XG5cblx0XHRtYXRlcmlhbC5saWdodE1hcCA9IG51bGw7XG5cdFx0bWF0ZXJpYWwubGlnaHRNYXBJbnRlbnNpdHkgPSAxLjA7XG5cblx0XHRtYXRlcmlhbC5hb01hcCA9IG1hdGVyaWFsUGFyYW1zLmFvTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuYW9NYXA7XG5cdFx0bWF0ZXJpYWwuYW9NYXBJbnRlbnNpdHkgPSAxLjA7XG5cblx0XHRtYXRlcmlhbC5lbWlzc2l2ZSA9IG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlO1xuXHRcdG1hdGVyaWFsLmVtaXNzaXZlSW50ZW5zaXR5ID0gMS4wO1xuXHRcdG1hdGVyaWFsLmVtaXNzaXZlTWFwID0gbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmVNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZU1hcDtcblxuXHRcdG1hdGVyaWFsLmJ1bXBNYXAgPSBtYXRlcmlhbFBhcmFtcy5idW1wTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuYnVtcE1hcDtcblx0XHRtYXRlcmlhbC5idW1wU2NhbGUgPSAxO1xuXG5cdFx0bWF0ZXJpYWwubm9ybWFsTWFwID0gbWF0ZXJpYWxQYXJhbXMubm9ybWFsTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMubm9ybWFsTWFwO1xuXHRcdG1hdGVyaWFsLm5vcm1hbE1hcFR5cGUgPSBUYW5nZW50U3BhY2VOb3JtYWxNYXA7XG5cblx0XHRpZiAoIG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlICkgbWF0ZXJpYWwubm9ybWFsU2NhbGUgPSBtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZTtcblxuXHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudE1hcCA9IG51bGw7XG5cdFx0bWF0ZXJpYWwuZGlzcGxhY2VtZW50U2NhbGUgPSAxO1xuXHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudEJpYXMgPSAwO1xuXG5cdFx0bWF0ZXJpYWwuc3BlY3VsYXJNYXAgPSBtYXRlcmlhbFBhcmFtcy5zcGVjdWxhck1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyTWFwO1xuXHRcdG1hdGVyaWFsLnNwZWN1bGFyID0gbWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXI7XG5cblx0XHRtYXRlcmlhbC5nbG9zc2luZXNzTWFwID0gbWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzc01hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3NNYXA7XG5cdFx0bWF0ZXJpYWwuZ2xvc3NpbmVzcyA9IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3M7XG5cblx0XHRtYXRlcmlhbC5hbHBoYU1hcCA9IG51bGw7XG5cblx0XHRtYXRlcmlhbC5lbnZNYXAgPSBtYXRlcmlhbFBhcmFtcy5lbnZNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5lbnZNYXA7XG5cdFx0bWF0ZXJpYWwuZW52TWFwSW50ZW5zaXR5ID0gMS4wO1xuXG5cdFx0bWF0ZXJpYWwucmVmcmFjdGlvblJhdGlvID0gMC45ODtcblxuXHRcdHJldHVybiBtYXRlcmlhbDtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBNZXNoIFF1YW50aXphdGlvbiBFeHRlbnNpb25cbiAqXG4gKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWVzaF9xdWFudGl6YXRpb25cbiAqL1xuY2xhc3MgR0xURk1lc2hRdWFudGl6YXRpb25FeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUVTSF9RVUFOVElaQVRJT047XG5cblx0fVxuXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBJTlRFUlBPTEFUSU9OICoqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gU3BsaW5lIEludGVycG9sYXRpb25cbi8vIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYXBwZW5kaXgtYy1zcGxpbmUtaW50ZXJwb2xhdGlvblxuY2xhc3MgR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQgZXh0ZW5kcyBJbnRlcnBvbGFudCB7XG5cblx0Y29uc3RydWN0b3IoIHBhcmFtZXRlclBvc2l0aW9ucywgc2FtcGxlVmFsdWVzLCBzYW1wbGVTaXplLCByZXN1bHRCdWZmZXIgKSB7XG5cblx0XHRzdXBlciggcGFyYW1ldGVyUG9zaXRpb25zLCBzYW1wbGVWYWx1ZXMsIHNhbXBsZVNpemUsIHJlc3VsdEJ1ZmZlciApO1xuXG5cdH1cblxuXHRjb3B5U2FtcGxlVmFsdWVfKCBpbmRleCApIHtcblxuXHRcdC8vIENvcGllcyBhIHNhbXBsZSB2YWx1ZSB0byB0aGUgcmVzdWx0IGJ1ZmZlci4gU2VlIGRlc2NyaXB0aW9uIG9mIGdsVEZcblx0XHQvLyBDVUJJQ1NQTElORSB2YWx1ZXMgbGF5b3V0IGluIGludGVycG9sYXRlXygpIGZ1bmN0aW9uIGJlbG93LlxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHRCdWZmZXIsXG5cdFx0XHR2YWx1ZXMgPSB0aGlzLnNhbXBsZVZhbHVlcyxcblx0XHRcdHZhbHVlU2l6ZSA9IHRoaXMudmFsdWVTaXplLFxuXHRcdFx0b2Zmc2V0ID0gaW5kZXggKiB2YWx1ZVNpemUgKiAzICsgdmFsdWVTaXplO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpICE9PSB2YWx1ZVNpemU7IGkgKysgKSB7XG5cblx0XHRcdHJlc3VsdFsgaSBdID0gdmFsdWVzWyBvZmZzZXQgKyBpIF07XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdH1cblxufVxuXG5HTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuYmVmb3JlU3RhcnRfID0gR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmNvcHlTYW1wbGVWYWx1ZV87XG5cbkdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5hZnRlckVuZF8gPSBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuY29weVNhbXBsZVZhbHVlXztcblxuR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmludGVycG9sYXRlXyA9IGZ1bmN0aW9uICggaTEsIHQwLCB0LCB0MSApIHtcblxuXHRjb25zdCByZXN1bHQgPSB0aGlzLnJlc3VsdEJ1ZmZlcjtcblx0Y29uc3QgdmFsdWVzID0gdGhpcy5zYW1wbGVWYWx1ZXM7XG5cdGNvbnN0IHN0cmlkZSA9IHRoaXMudmFsdWVTaXplO1xuXG5cdGNvbnN0IHN0cmlkZTIgPSBzdHJpZGUgKiAyO1xuXHRjb25zdCBzdHJpZGUzID0gc3RyaWRlICogMztcblxuXHRjb25zdCB0ZCA9IHQxIC0gdDA7XG5cblx0Y29uc3QgcCA9ICggdCAtIHQwICkgLyB0ZDtcblx0Y29uc3QgcHAgPSBwICogcDtcblx0Y29uc3QgcHBwID0gcHAgKiBwO1xuXG5cdGNvbnN0IG9mZnNldDEgPSBpMSAqIHN0cmlkZTM7XG5cdGNvbnN0IG9mZnNldDAgPSBvZmZzZXQxIC0gc3RyaWRlMztcblxuXHRjb25zdCBzMiA9IC0gMiAqIHBwcCArIDMgKiBwcDtcblx0Y29uc3QgczMgPSBwcHAgLSBwcDtcblx0Y29uc3QgczAgPSAxIC0gczI7XG5cdGNvbnN0IHMxID0gczMgLSBwcCArIHA7XG5cblx0Ly8gTGF5b3V0IG9mIGtleWZyYW1lIG91dHB1dCB2YWx1ZXMgZm9yIENVQklDU1BMSU5FIGFuaW1hdGlvbnM6XG5cdC8vICAgWyBpblRhbmdlbnRfMSwgc3BsaW5lVmVydGV4XzEsIG91dFRhbmdlbnRfMSwgaW5UYW5nZW50XzIsIHNwbGluZVZlcnRleF8yLCAuLi4gXVxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgIT09IHN0cmlkZTsgaSArKyApIHtcblxuXHRcdGNvbnN0IHAwID0gdmFsdWVzWyBvZmZzZXQwICsgaSArIHN0cmlkZSBdOyAvLyBzcGxpbmVWZXJ0ZXhfa1xuXHRcdGNvbnN0IG0wID0gdmFsdWVzWyBvZmZzZXQwICsgaSArIHN0cmlkZTIgXSAqIHRkOyAvLyBvdXRUYW5nZW50X2sgKiAodF9rKzEgLSB0X2spXG5cdFx0Y29uc3QgcDEgPSB2YWx1ZXNbIG9mZnNldDEgKyBpICsgc3RyaWRlIF07IC8vIHNwbGluZVZlcnRleF9rKzFcblx0XHRjb25zdCBtMSA9IHZhbHVlc1sgb2Zmc2V0MSArIGkgXSAqIHRkOyAvLyBpblRhbmdlbnRfaysxICogKHRfaysxIC0gdF9rKVxuXG5cdFx0cmVzdWx0WyBpIF0gPSBzMCAqIHAwICsgczEgKiBtMCArIHMyICogcDEgKyBzMyAqIG0xO1xuXG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xuXG59O1xuXG5jb25zdCBfcSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG5cbmNsYXNzIEdMVEZDdWJpY1NwbGluZVF1YXRlcm5pb25JbnRlcnBvbGFudCBleHRlbmRzIEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50IHtcblxuXHRpbnRlcnBvbGF0ZV8oIGkxLCB0MCwgdCwgdDEgKSB7XG5cblx0XHRjb25zdCByZXN1bHQgPSBzdXBlci5pbnRlcnBvbGF0ZV8oIGkxLCB0MCwgdCwgdDEgKTtcblxuXHRcdF9xLmZyb21BcnJheSggcmVzdWx0ICkubm9ybWFsaXplKCkudG9BcnJheSggcmVzdWx0ICk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdH1cblxufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBJTlRFUk5BTFMgKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyogQ09OU1RBTlRTICovXG5cbmNvbnN0IFdFQkdMX0NPTlNUQU5UUyA9IHtcblx0RkxPQVQ6IDUxMjYsXG5cdC8vRkxPQVRfTUFUMjogMzU2NzQsXG5cdEZMT0FUX01BVDM6IDM1Njc1LFxuXHRGTE9BVF9NQVQ0OiAzNTY3Nixcblx0RkxPQVRfVkVDMjogMzU2NjQsXG5cdEZMT0FUX1ZFQzM6IDM1NjY1LFxuXHRGTE9BVF9WRUM0OiAzNTY2Nixcblx0TElORUFSOiA5NzI5LFxuXHRSRVBFQVQ6IDEwNDk3LFxuXHRTQU1QTEVSXzJEOiAzNTY3OCxcblx0UE9JTlRTOiAwLFxuXHRMSU5FUzogMSxcblx0TElORV9MT09QOiAyLFxuXHRMSU5FX1NUUklQOiAzLFxuXHRUUklBTkdMRVM6IDQsXG5cdFRSSUFOR0xFX1NUUklQOiA1LFxuXHRUUklBTkdMRV9GQU46IDYsXG5cdFVOU0lHTkVEX0JZVEU6IDUxMjEsXG5cdFVOU0lHTkVEX1NIT1JUOiA1MTIzXG59O1xuXG5jb25zdCBXRUJHTF9DT01QT05FTlRfVFlQRVMgPSB7XG5cdDUxMjA6IEludDhBcnJheSxcblx0NTEyMTogVWludDhBcnJheSxcblx0NTEyMjogSW50MTZBcnJheSxcblx0NTEyMzogVWludDE2QXJyYXksXG5cdDUxMjU6IFVpbnQzMkFycmF5LFxuXHQ1MTI2OiBGbG9hdDMyQXJyYXlcbn07XG5cbmNvbnN0IFdFQkdMX0ZJTFRFUlMgPSB7XG5cdDk3Mjg6IE5lYXJlc3RGaWx0ZXIsXG5cdDk3Mjk6IExpbmVhckZpbHRlcixcblx0OTk4NDogTmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdDk5ODU6IExpbmVhck1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdDk5ODY6IE5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXIsXG5cdDk5ODc6IExpbmVhck1pcG1hcExpbmVhckZpbHRlclxufTtcblxuY29uc3QgV0VCR0xfV1JBUFBJTkdTID0ge1xuXHQzMzA3MTogQ2xhbXBUb0VkZ2VXcmFwcGluZyxcblx0MzM2NDg6IE1pcnJvcmVkUmVwZWF0V3JhcHBpbmcsXG5cdDEwNDk3OiBSZXBlYXRXcmFwcGluZ1xufTtcblxuY29uc3QgV0VCR0xfVFlQRV9TSVpFUyA9IHtcblx0J1NDQUxBUic6IDEsXG5cdCdWRUMyJzogMixcblx0J1ZFQzMnOiAzLFxuXHQnVkVDNCc6IDQsXG5cdCdNQVQyJzogNCxcblx0J01BVDMnOiA5LFxuXHQnTUFUNCc6IDE2XG59O1xuXG5jb25zdCBBVFRSSUJVVEVTID0ge1xuXHRQT1NJVElPTjogJ3Bvc2l0aW9uJyxcblx0Tk9STUFMOiAnbm9ybWFsJyxcblx0VEFOR0VOVDogJ3RhbmdlbnQnLFxuXHRURVhDT09SRF8wOiAndXYnLFxuXHRURVhDT09SRF8xOiAndXYyJyxcblx0Q09MT1JfMDogJ2NvbG9yJyxcblx0V0VJR0hUU18wOiAnc2tpbldlaWdodCcsXG5cdEpPSU5UU18wOiAnc2tpbkluZGV4Jyxcbn07XG5cbmNvbnN0IFBBVEhfUFJPUEVSVElFUyA9IHtcblx0c2NhbGU6ICdzY2FsZScsXG5cdHRyYW5zbGF0aW9uOiAncG9zaXRpb24nLFxuXHRyb3RhdGlvbjogJ3F1YXRlcm5pb24nLFxuXHR3ZWlnaHRzOiAnbW9ycGhUYXJnZXRJbmZsdWVuY2VzJ1xufTtcblxuY29uc3QgSU5URVJQT0xBVElPTiA9IHtcblx0Q1VCSUNTUExJTkU6IHVuZGVmaW5lZCwgLy8gV2UgdXNlIGEgY3VzdG9tIGludGVycG9sYW50IChHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGF0aW9uKSBmb3IgQ1VCSUNTUExJTkUgdHJhY2tzLiBFYWNoXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2V5ZnJhbWUgdHJhY2sgd2lsbCBiZSBpbml0aWFsaXplZCB3aXRoIGEgZGVmYXVsdCBpbnRlcnBvbGF0aW9uIHR5cGUsIHRoZW4gbW9kaWZpZWQuXG5cdExJTkVBUjogSW50ZXJwb2xhdGVMaW5lYXIsXG5cdFNURVA6IEludGVycG9sYXRlRGlzY3JldGVcbn07XG5cbmNvbnN0IEFMUEhBX01PREVTID0ge1xuXHRPUEFRVUU6ICdPUEFRVUUnLFxuXHRNQVNLOiAnTUFTSycsXG5cdEJMRU5EOiAnQkxFTkQnXG59O1xuXG4vKipcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjZGVmYXVsdC1tYXRlcmlhbFxuICovXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0TWF0ZXJpYWwoIGNhY2hlICkge1xuXG5cdGlmICggY2FjaGVbICdEZWZhdWx0TWF0ZXJpYWwnIF0gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGNhY2hlWyAnRGVmYXVsdE1hdGVyaWFsJyBdID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKCB7XG5cdFx0XHRjb2xvcjogMHhGRkZGRkYsXG5cdFx0XHRlbWlzc2l2ZTogMHgwMDAwMDAsXG5cdFx0XHRtZXRhbG5lc3M6IDEsXG5cdFx0XHRyb3VnaG5lc3M6IDEsXG5cdFx0XHR0cmFuc3BhcmVudDogZmFsc2UsXG5cdFx0XHRkZXB0aFRlc3Q6IHRydWUsXG5cdFx0XHRzaWRlOiBGcm9udFNpZGVcblx0XHR9ICk7XG5cblx0fVxuXG5cdHJldHVybiBjYWNoZVsgJ0RlZmF1bHRNYXRlcmlhbCcgXTtcblxufVxuXG5mdW5jdGlvbiBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGtub3duRXh0ZW5zaW9ucywgb2JqZWN0LCBvYmplY3REZWYgKSB7XG5cblx0Ly8gQWRkIHVua25vd24gZ2xURiBleHRlbnNpb25zIHRvIGFuIG9iamVjdCdzIHVzZXJEYXRhLlxuXG5cdGZvciAoIGNvbnN0IG5hbWUgaW4gb2JqZWN0RGVmLmV4dGVuc2lvbnMgKSB7XG5cblx0XHRpZiAoIGtub3duRXh0ZW5zaW9uc1sgbmFtZSBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG9iamVjdC51c2VyRGF0YS5nbHRmRXh0ZW5zaW9ucyA9IG9iamVjdC51c2VyRGF0YS5nbHRmRXh0ZW5zaW9ucyB8fCB7fTtcblx0XHRcdG9iamVjdC51c2VyRGF0YS5nbHRmRXh0ZW5zaW9uc1sgbmFtZSBdID0gb2JqZWN0RGVmLmV4dGVuc2lvbnNbIG5hbWUgXTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdDNEfE1hdGVyaWFsfEJ1ZmZlckdlb21ldHJ5fSBvYmplY3RcbiAqIEBwYXJhbSB7R0xURi5kZWZpbml0aW9ufSBnbHRmRGVmXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG9iamVjdCwgZ2x0ZkRlZiApIHtcblxuXHRpZiAoIGdsdGZEZWYuZXh0cmFzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiAoIHR5cGVvZiBnbHRmRGVmLmV4dHJhcyA9PT0gJ29iamVjdCcgKSB7XG5cblx0XHRcdE9iamVjdC5hc3NpZ24oIG9iamVjdC51c2VyRGF0YSwgZ2x0ZkRlZi5leHRyYXMgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IElnbm9yaW5nIHByaW1pdGl2ZSB0eXBlIC5leHRyYXMsICcgKyBnbHRmRGVmLmV4dHJhcyApO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG4vKipcbiAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbW9ycGgtdGFyZ2V0c1xuICpcbiAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XG4gKiBAcGFyYW0ge0FycmF5PEdMVEYuVGFyZ2V0Pn0gdGFyZ2V0c1xuICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcbiAqIEByZXR1cm4ge1Byb21pc2U8QnVmZmVyR2VvbWV0cnk+fVxuICovXG5mdW5jdGlvbiBhZGRNb3JwaFRhcmdldHMoIGdlb21ldHJ5LCB0YXJnZXRzLCBwYXJzZXIgKSB7XG5cblx0bGV0IGhhc01vcnBoUG9zaXRpb24gPSBmYWxzZTtcblx0bGV0IGhhc01vcnBoTm9ybWFsID0gZmFsc2U7XG5cblx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHRhcmdldHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRjb25zdCB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XG5cblx0XHRpZiAoIHRhcmdldC5QT1NJVElPTiAhPT0gdW5kZWZpbmVkICkgaGFzTW9ycGhQb3NpdGlvbiA9IHRydWU7XG5cdFx0aWYgKCB0YXJnZXQuTk9STUFMICE9PSB1bmRlZmluZWQgKSBoYXNNb3JwaE5vcm1hbCA9IHRydWU7XG5cblx0XHRpZiAoIGhhc01vcnBoUG9zaXRpb24gJiYgaGFzTW9ycGhOb3JtYWwgKSBicmVhaztcblxuXHR9XG5cblx0aWYgKCAhIGhhc01vcnBoUG9zaXRpb24gJiYgISBoYXNNb3JwaE5vcm1hbCApIHJldHVybiBQcm9taXNlLnJlc29sdmUoIGdlb21ldHJ5ICk7XG5cblx0Y29uc3QgcGVuZGluZ1Bvc2l0aW9uQWNjZXNzb3JzID0gW107XG5cdGNvbnN0IHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMgPSBbXTtcblxuXHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdGNvbnN0IHRhcmdldCA9IHRhcmdldHNbIGkgXTtcblxuXHRcdGlmICggaGFzTW9ycGhQb3NpdGlvbiApIHtcblxuXHRcdFx0Y29uc3QgcGVuZGluZ0FjY2Vzc29yID0gdGFyZ2V0LlBPU0lUSU9OICE9PSB1bmRlZmluZWRcblx0XHRcdFx0PyBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgdGFyZ2V0LlBPU0lUSU9OIClcblx0XHRcdFx0OiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xuXG5cdFx0XHRwZW5kaW5nUG9zaXRpb25BY2Nlc3NvcnMucHVzaCggcGVuZGluZ0FjY2Vzc29yICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGhhc01vcnBoTm9ybWFsICkge1xuXG5cdFx0XHRjb25zdCBwZW5kaW5nQWNjZXNzb3IgPSB0YXJnZXQuTk9STUFMICE9PSB1bmRlZmluZWRcblx0XHRcdFx0PyBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgdGFyZ2V0Lk5PUk1BTCApXG5cdFx0XHRcdDogZ2VvbWV0cnkuYXR0cmlidXRlcy5ub3JtYWw7XG5cblx0XHRcdHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMucHVzaCggcGVuZGluZ0FjY2Vzc29yICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiBQcm9taXNlLmFsbCggW1xuXHRcdFByb21pc2UuYWxsKCBwZW5kaW5nUG9zaXRpb25BY2Nlc3NvcnMgKSxcblx0XHRQcm9taXNlLmFsbCggcGVuZGluZ05vcm1hbEFjY2Vzc29ycyApXG5cdF0gKS50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29ycyApIHtcblxuXHRcdGNvbnN0IG1vcnBoUG9zaXRpb25zID0gYWNjZXNzb3JzWyAwIF07XG5cdFx0Y29uc3QgbW9ycGhOb3JtYWxzID0gYWNjZXNzb3JzWyAxIF07XG5cblx0XHRpZiAoIGhhc01vcnBoUG9zaXRpb24gKSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb24gPSBtb3JwaFBvc2l0aW9ucztcblx0XHRpZiAoIGhhc01vcnBoTm9ybWFsICkgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLm5vcm1hbCA9IG1vcnBoTm9ybWFscztcblx0XHRnZW9tZXRyeS5tb3JwaFRhcmdldHNSZWxhdGl2ZSA9IHRydWU7XG5cblx0XHRyZXR1cm4gZ2VvbWV0cnk7XG5cblx0fSApO1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtNZXNofSBtZXNoXG4gKiBAcGFyYW0ge0dMVEYuTWVzaH0gbWVzaERlZlxuICovXG5mdW5jdGlvbiB1cGRhdGVNb3JwaFRhcmdldHMoIG1lc2gsIG1lc2hEZWYgKSB7XG5cblx0bWVzaC51cGRhdGVNb3JwaFRhcmdldHMoKTtcblxuXHRpZiAoIG1lc2hEZWYud2VpZ2h0cyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG1lc2hEZWYud2VpZ2h0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0bWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXNbIGkgXSA9IG1lc2hEZWYud2VpZ2h0c1sgaSBdO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvLyAuZXh0cmFzIGhhcyB1c2VyLWRlZmluZWQgZGF0YSwgc28gY2hlY2sgdGhhdCAuZXh0cmFzLnRhcmdldE5hbWVzIGlzIGFuIGFycmF5LlxuXHRpZiAoIG1lc2hEZWYuZXh0cmFzICYmIEFycmF5LmlzQXJyYXkoIG1lc2hEZWYuZXh0cmFzLnRhcmdldE5hbWVzICkgKSB7XG5cblx0XHRjb25zdCB0YXJnZXROYW1lcyA9IG1lc2hEZWYuZXh0cmFzLnRhcmdldE5hbWVzO1xuXG5cdFx0aWYgKCBtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcy5sZW5ndGggPT09IHRhcmdldE5hbWVzLmxlbmd0aCApIHtcblxuXHRcdFx0bWVzaC5tb3JwaFRhcmdldERpY3Rpb25hcnkgPSB7fTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHRhcmdldE5hbWVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdG1lc2gubW9ycGhUYXJnZXREaWN0aW9uYXJ5WyB0YXJnZXROYW1lc1sgaSBdIF0gPSBpO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBJbnZhbGlkIGV4dHJhcy50YXJnZXROYW1lcyBsZW5ndGguIElnbm9yaW5nIG5hbWVzLicgKTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlS2V5KCBwcmltaXRpdmVEZWYgKSB7XG5cblx0Y29uc3QgZHJhY29FeHRlbnNpb24gPSBwcmltaXRpdmVEZWYuZXh0ZW5zaW9ucyAmJiBwcmltaXRpdmVEZWYuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTiBdO1xuXHRsZXQgZ2VvbWV0cnlLZXk7XG5cblx0aWYgKCBkcmFjb0V4dGVuc2lvbiApIHtcblxuXHRcdGdlb21ldHJ5S2V5ID0gJ2RyYWNvOicgKyBkcmFjb0V4dGVuc2lvbi5idWZmZXJWaWV3XG5cdFx0XHRcdCsgJzonICsgZHJhY29FeHRlbnNpb24uaW5kaWNlc1xuXHRcdFx0XHQrICc6JyArIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoIGRyYWNvRXh0ZW5zaW9uLmF0dHJpYnV0ZXMgKTtcblxuXHR9IGVsc2Uge1xuXG5cdFx0Z2VvbWV0cnlLZXkgPSBwcmltaXRpdmVEZWYuaW5kaWNlcyArICc6JyArIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoIHByaW1pdGl2ZURlZi5hdHRyaWJ1dGVzICkgKyAnOicgKyBwcmltaXRpdmVEZWYubW9kZTtcblxuXHR9XG5cblx0cmV0dXJuIGdlb21ldHJ5S2V5O1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoIGF0dHJpYnV0ZXMgKSB7XG5cblx0bGV0IGF0dHJpYnV0ZXNLZXkgPSAnJztcblxuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoIGF0dHJpYnV0ZXMgKS5zb3J0KCk7XG5cblx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRhdHRyaWJ1dGVzS2V5ICs9IGtleXNbIGkgXSArICc6JyArIGF0dHJpYnV0ZXNbIGtleXNbIGkgXSBdICsgJzsnO1xuXG5cdH1cblxuXHRyZXR1cm4gYXR0cmlidXRlc0tleTtcblxufVxuXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkQ29tcG9uZW50U2NhbGUoIGNvbnN0cnVjdG9yICkge1xuXG5cdC8vIFJlZmVyZW5jZTpcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21lc2hfcXVhbnRpemF0aW9uI2VuY29kaW5nLXF1YW50aXplZC1kYXRhXG5cblx0c3dpdGNoICggY29uc3RydWN0b3IgKSB7XG5cblx0XHRjYXNlIEludDhBcnJheTpcblx0XHRcdHJldHVybiAxIC8gMTI3O1xuXG5cdFx0Y2FzZSBVaW50OEFycmF5OlxuXHRcdFx0cmV0dXJuIDEgLyAyNTU7XG5cblx0XHRjYXNlIEludDE2QXJyYXk6XG5cdFx0XHRyZXR1cm4gMSAvIDMyNzY3O1xuXG5cdFx0Y2FzZSBVaW50MTZBcnJheTpcblx0XHRcdHJldHVybiAxIC8gNjU1MzU7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgbm9ybWFsaXplZCBhY2Nlc3NvciBjb21wb25lbnQgdHlwZS4nICk7XG5cblx0fVxuXG59XG5cbi8qIEdMVEYgUEFSU0VSICovXG5cbmNsYXNzIEdMVEZQYXJzZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBqc29uID0ge30sIG9wdGlvbnMgPSB7fSApIHtcblxuXHRcdHRoaXMuanNvbiA9IGpzb247XG5cdFx0dGhpcy5leHRlbnNpb25zID0ge307XG5cdFx0dGhpcy5wbHVnaW5zID0ge307XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuXHRcdC8vIGxvYWRlciBvYmplY3QgY2FjaGVcblx0XHR0aGlzLmNhY2hlID0gbmV3IEdMVEZSZWdpc3RyeSgpO1xuXG5cdFx0Ly8gYXNzb2NpYXRpb25zIGJldHdlZW4gVGhyZWUuanMgb2JqZWN0cyBhbmQgZ2xURiBlbGVtZW50c1xuXHRcdHRoaXMuYXNzb2NpYXRpb25zID0gbmV3IE1hcCgpO1xuXG5cdFx0Ly8gQnVmZmVyR2VvbWV0cnkgY2FjaGluZ1xuXHRcdHRoaXMucHJpbWl0aXZlQ2FjaGUgPSB7fTtcblxuXHRcdC8vIE9iamVjdDNEIGluc3RhbmNlIGNhY2hlc1xuXHRcdHRoaXMubWVzaENhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcblx0XHR0aGlzLmNhbWVyYUNhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcblx0XHR0aGlzLmxpZ2h0Q2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xuXG5cdFx0dGhpcy50ZXh0dXJlQ2FjaGUgPSB7fTtcblxuXHRcdC8vIFRyYWNrIG5vZGUgbmFtZXMsIHRvIGVuc3VyZSBubyBkdXBsaWNhdGVzXG5cdFx0dGhpcy5ub2RlTmFtZXNVc2VkID0ge307XG5cblx0XHQvLyBVc2UgYW4gSW1hZ2VCaXRtYXBMb2FkZXIgaWYgaW1hZ2VCaXRtYXBzIGFyZSBzdXBwb3J0ZWQuIE1vdmVzIG11Y2ggb2YgdGhlXG5cdFx0Ly8gZXhwZW5zaXZlIHdvcmsgb2YgdXBsb2FkaW5nIGEgdGV4dHVyZSB0byB0aGUgR1BVIG9mZiB0aGUgbWFpbiB0aHJlYWQuXG5cdFx0aWYgKCB0eXBlb2YgY3JlYXRlSW1hZ2VCaXRtYXAgIT09ICd1bmRlZmluZWQnICYmIC9GaXJlZm94fFNhZmFyaS8udGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApID09PSBmYWxzZSApIHtcblxuXHRcdFx0dGhpcy50ZXh0dXJlTG9hZGVyID0gbmV3IEltYWdlQml0bWFwTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy50ZXh0dXJlTG9hZGVyID0gbmV3IFRleHR1cmVMb2FkZXIoIHRoaXMub3B0aW9ucy5tYW5hZ2VyICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLnRleHR1cmVMb2FkZXIuc2V0Q3Jvc3NPcmlnaW4oIHRoaXMub3B0aW9ucy5jcm9zc09yaWdpbiApO1xuXHRcdHRoaXMudGV4dHVyZUxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLm9wdGlvbnMucmVxdWVzdEhlYWRlciApO1xuXG5cdFx0dGhpcy5maWxlTG9hZGVyID0gbmV3IEZpbGVMb2FkZXIoIHRoaXMub3B0aW9ucy5tYW5hZ2VyICk7XG5cdFx0dGhpcy5maWxlTG9hZGVyLnNldFJlc3BvbnNlVHlwZSggJ2FycmF5YnVmZmVyJyApO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuY3Jvc3NPcmlnaW4gPT09ICd1c2UtY3JlZGVudGlhbHMnICkge1xuXG5cdFx0XHR0aGlzLmZpbGVMb2FkZXIuc2V0V2l0aENyZWRlbnRpYWxzKCB0cnVlICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdHNldEV4dGVuc2lvbnMoIGV4dGVuc2lvbnMgKSB7XG5cblx0XHR0aGlzLmV4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuXG5cdH1cblxuXHRzZXRQbHVnaW5zKCBwbHVnaW5zICkge1xuXG5cdFx0dGhpcy5wbHVnaW5zID0gcGx1Z2lucztcblxuXHR9XG5cblx0cGFyc2UoIG9uTG9hZCwgb25FcnJvciApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXG5cdFx0Ly8gQ2xlYXIgdGhlIGxvYWRlciBjYWNoZVxuXHRcdHRoaXMuY2FjaGUucmVtb3ZlQWxsKCk7XG5cblx0XHQvLyBNYXJrIHRoZSBzcGVjaWFsIG5vZGVzL21lc2hlcyBpbiBqc29uIGZvciBlZmZpY2llbnQgcGFyc2Vcblx0XHR0aGlzLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRyZXR1cm4gZXh0Ll9tYXJrRGVmcyAmJiBleHQuX21hcmtEZWZzKCk7XG5cblx0XHR9ICk7XG5cblx0XHRQcm9taXNlLmFsbCggdGhpcy5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0cmV0dXJuIGV4dC5iZWZvcmVSb290ICYmIGV4dC5iZWZvcmVSb290KCk7XG5cblx0XHR9ICkgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggW1xuXG5cdFx0XHRcdHBhcnNlci5nZXREZXBlbmRlbmNpZXMoICdzY2VuZScgKSxcblx0XHRcdFx0cGFyc2VyLmdldERlcGVuZGVuY2llcyggJ2FuaW1hdGlvbicgKSxcblx0XHRcdFx0cGFyc2VyLmdldERlcGVuZGVuY2llcyggJ2NhbWVyYScgKSxcblxuXHRcdFx0XSApO1xuXG5cdFx0fSApLnRoZW4oIGZ1bmN0aW9uICggZGVwZW5kZW5jaWVzICkge1xuXG5cdFx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHRcdHNjZW5lOiBkZXBlbmRlbmNpZXNbIDAgXVsganNvbi5zY2VuZSB8fCAwIF0sXG5cdFx0XHRcdHNjZW5lczogZGVwZW5kZW5jaWVzWyAwIF0sXG5cdFx0XHRcdGFuaW1hdGlvbnM6IGRlcGVuZGVuY2llc1sgMSBdLFxuXHRcdFx0XHRjYW1lcmFzOiBkZXBlbmRlbmNpZXNbIDIgXSxcblx0XHRcdFx0YXNzZXQ6IGpzb24uYXNzZXQsXG5cdFx0XHRcdHBhcnNlcjogcGFyc2VyLFxuXHRcdFx0XHR1c2VyRGF0YToge31cblx0XHRcdH07XG5cblx0XHRcdGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgcmVzdWx0LCBqc29uICk7XG5cblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIHJlc3VsdCwganNvbiApO1xuXG5cdFx0XHRQcm9taXNlLmFsbCggcGFyc2VyLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuYWZ0ZXJSb290ICYmIGV4dC5hZnRlclJvb3QoIHJlc3VsdCApO1xuXG5cdFx0XHR9ICkgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0b25Mb2FkKCByZXN1bHQgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApLmNhdGNoKCBvbkVycm9yICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBNYXJrcyB0aGUgc3BlY2lhbCBub2Rlcy9tZXNoZXMgaW4ganNvbiBmb3IgZWZmaWNpZW50IHBhcnNlLlxuXHQgKi9cblx0X21hcmtEZWZzKCkge1xuXG5cdFx0Y29uc3Qgbm9kZURlZnMgPSB0aGlzLmpzb24ubm9kZXMgfHwgW107XG5cdFx0Y29uc3Qgc2tpbkRlZnMgPSB0aGlzLmpzb24uc2tpbnMgfHwgW107XG5cdFx0Y29uc3QgbWVzaERlZnMgPSB0aGlzLmpzb24ubWVzaGVzIHx8IFtdO1xuXG5cdFx0Ly8gTm90aGluZyBpbiB0aGUgbm9kZSBkZWZpbml0aW9uIGluZGljYXRlcyB3aGV0aGVyIGl0IGlzIGEgQm9uZSBvciBhblxuXHRcdC8vIE9iamVjdDNELiBVc2UgdGhlIHNraW5zJyBqb2ludCByZWZlcmVuY2VzIHRvIG1hcmsgYm9uZXMuXG5cdFx0Zm9yICggbGV0IHNraW5JbmRleCA9IDAsIHNraW5MZW5ndGggPSBza2luRGVmcy5sZW5ndGg7IHNraW5JbmRleCA8IHNraW5MZW5ndGg7IHNraW5JbmRleCArKyApIHtcblxuXHRcdFx0Y29uc3Qgam9pbnRzID0gc2tpbkRlZnNbIHNraW5JbmRleCBdLmpvaW50cztcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGpvaW50cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRub2RlRGVmc1sgam9pbnRzWyBpIF0gXS5pc0JvbmUgPSB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvLyBJdGVyYXRlIG92ZXIgYWxsIG5vZGVzLCBtYXJraW5nIHJlZmVyZW5jZXMgdG8gc2hhcmVkIHJlc291cmNlcyxcblx0XHQvLyBhcyB3ZWxsIGFzIHNrZWxldG9uIGpvaW50cy5cblx0XHRmb3IgKCBsZXQgbm9kZUluZGV4ID0gMCwgbm9kZUxlbmd0aCA9IG5vZGVEZWZzLmxlbmd0aDsgbm9kZUluZGV4IDwgbm9kZUxlbmd0aDsgbm9kZUluZGV4ICsrICkge1xuXG5cdFx0XHRjb25zdCBub2RlRGVmID0gbm9kZURlZnNbIG5vZGVJbmRleCBdO1xuXG5cdFx0XHRpZiAoIG5vZGVEZWYubWVzaCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHRoaXMuX2FkZE5vZGVSZWYoIHRoaXMubWVzaENhY2hlLCBub2RlRGVmLm1lc2ggKTtcblxuXHRcdFx0XHQvLyBOb3RoaW5nIGluIHRoZSBtZXNoIGRlZmluaXRpb24gaW5kaWNhdGVzIHdoZXRoZXIgaXQgaXNcblx0XHRcdFx0Ly8gYSBTa2lubmVkTWVzaCBvciBNZXNoLiBVc2UgdGhlIG5vZGUncyBtZXNoIHJlZmVyZW5jZVxuXHRcdFx0XHQvLyB0byBtYXJrIFNraW5uZWRNZXNoIGlmIG5vZGUgaGFzIHNraW4uXG5cdFx0XHRcdGlmICggbm9kZURlZi5za2luICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRtZXNoRGVmc1sgbm9kZURlZi5tZXNoIF0uaXNTa2lubmVkTWVzaCA9IHRydWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZURlZi5jYW1lcmEgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHR0aGlzLl9hZGROb2RlUmVmKCB0aGlzLmNhbWVyYUNhY2hlLCBub2RlRGVmLmNhbWVyYSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDb3VudHMgcmVmZXJlbmNlcyB0byBzaGFyZWQgbm9kZSAvIE9iamVjdDNEIHJlc291cmNlcy4gVGhlc2UgcmVzb3VyY2VzXG5cdCAqIGNhbiBiZSByZXVzZWQsIG9yIFwiaW5zdGFudGlhdGVkXCIsIGF0IG11bHRpcGxlIG5vZGVzIGluIHRoZSBzY2VuZVxuXHQgKiBoaWVyYXJjaHkuIE1lc2gsIENhbWVyYSwgYW5kIExpZ2h0IGluc3RhbmNlcyBhcmUgaW5zdGFudGlhdGVkIGFuZCBtdXN0XG5cdCAqIGJlIG1hcmtlZC4gTm9uLXNjZW5lZ3JhcGggcmVzb3VyY2VzIChsaWtlIE1hdGVyaWFscywgR2VvbWV0cmllcywgYW5kXG5cdCAqIFRleHR1cmVzKSBjYW4gYmUgcmV1c2VkIGRpcmVjdGx5IGFuZCBhcmUgbm90IG1hcmtlZCBoZXJlLlxuXHQgKlxuXHQgKiBFeGFtcGxlOiBDZXNpdW1NaWxrVHJ1Y2sgc2FtcGxlIG1vZGVsIHJldXNlcyBcIldoZWVsXCIgbWVzaGVzLlxuXHQgKi9cblx0X2FkZE5vZGVSZWYoIGNhY2hlLCBpbmRleCApIHtcblxuXHRcdGlmICggaW5kZXggPT09IHVuZGVmaW5lZCApIHJldHVybjtcblxuXHRcdGlmICggY2FjaGUucmVmc1sgaW5kZXggXSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRjYWNoZS5yZWZzWyBpbmRleCBdID0gY2FjaGUudXNlc1sgaW5kZXggXSA9IDA7XG5cblx0XHR9XG5cblx0XHRjYWNoZS5yZWZzWyBpbmRleCBdICsrO1xuXG5cdH1cblxuXHQvKiogUmV0dXJucyBhIHJlZmVyZW5jZSB0byBhIHNoYXJlZCByZXNvdXJjZSwgY2xvbmluZyBpdCBpZiBuZWNlc3NhcnkuICovXG5cdF9nZXROb2RlUmVmKCBjYWNoZSwgaW5kZXgsIG9iamVjdCApIHtcblxuXHRcdGlmICggY2FjaGUucmVmc1sgaW5kZXggXSA8PSAxICkgcmV0dXJuIG9iamVjdDtcblxuXHRcdGNvbnN0IHJlZiA9IG9iamVjdC5jbG9uZSgpO1xuXG5cdFx0Ly8gUHJvcGFnYXRlcyBtYXBwaW5ncyB0byB0aGUgY2xvbmVkIG9iamVjdCwgcHJldmVudHMgbWFwcGluZ3Mgb24gdGhlXG5cdFx0Ly8gb3JpZ2luYWwgb2JqZWN0IGZyb20gYmVpbmcgbG9zdC5cblx0XHRjb25zdCB1cGRhdGVNYXBwaW5ncyA9ICggb3JpZ2luYWwsIGNsb25lICkgPT4ge1xuXG5cdFx0XHRjb25zdCBtYXBwaW5ncyA9IHRoaXMuYXNzb2NpYXRpb25zLmdldCggb3JpZ2luYWwgKTtcblx0XHRcdGlmICggbWFwcGluZ3MgIT0gbnVsbCApIHtcblxuXHRcdFx0XHR0aGlzLmFzc29jaWF0aW9ucy5zZXQoIGNsb25lLCBtYXBwaW5ncyApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGNvbnN0IFsgaSwgY2hpbGQgXSBvZiBvcmlnaW5hbC5jaGlsZHJlbi5lbnRyaWVzKCkgKSB7XG5cblx0XHRcdFx0dXBkYXRlTWFwcGluZ3MoIGNoaWxkLCBjbG9uZS5jaGlsZHJlblsgaSBdICk7XG5cblx0XHRcdH1cblxuXHRcdH07XG5cblx0XHR1cGRhdGVNYXBwaW5ncyggb2JqZWN0LCByZWYgKTtcblxuXHRcdHJlZi5uYW1lICs9ICdfaW5zdGFuY2VfJyArICggY2FjaGUudXNlc1sgaW5kZXggXSArKyApO1xuXG5cdFx0cmV0dXJuIHJlZjtcblxuXHR9XG5cblx0X2ludm9rZU9uZSggZnVuYyApIHtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSBPYmplY3QudmFsdWVzKCB0aGlzLnBsdWdpbnMgKTtcblx0XHRleHRlbnNpb25zLnB1c2goIHRoaXMgKTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCByZXN1bHQgPSBmdW5jKCBleHRlbnNpb25zWyBpIF0gKTtcblxuXHRcdFx0aWYgKCByZXN1bHQgKSByZXR1cm4gcmVzdWx0O1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0fVxuXG5cdF9pbnZva2VBbGwoIGZ1bmMgKSB7XG5cblx0XHRjb25zdCBleHRlbnNpb25zID0gT2JqZWN0LnZhbHVlcyggdGhpcy5wbHVnaW5zICk7XG5cdFx0ZXh0ZW5zaW9ucy51bnNoaWZ0KCB0aGlzICk7XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZnVuYyggZXh0ZW5zaW9uc1sgaSBdICk7XG5cblx0XHRcdGlmICggcmVzdWx0ICkgcGVuZGluZy5wdXNoKCByZXN1bHQgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBwZW5kaW5nO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmVxdWVzdHMgdGhlIHNwZWNpZmllZCBkZXBlbmRlbmN5IGFzeW5jaHJvbm91c2x5LCB3aXRoIGNhY2hpbmcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdDNEfE1hdGVyaWFsfFRIUkVFLlRleHR1cmV8QW5pbWF0aW9uQ2xpcHxBcnJheUJ1ZmZlcnxPYmplY3Q+fVxuXHQgKi9cblx0Z2V0RGVwZW5kZW5jeSggdHlwZSwgaW5kZXggKSB7XG5cblx0XHRjb25zdCBjYWNoZUtleSA9IHR5cGUgKyAnOicgKyBpbmRleDtcblx0XHRsZXQgZGVwZW5kZW5jeSA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0aWYgKCAhIGRlcGVuZGVuY3kgKSB7XG5cblx0XHRcdHN3aXRjaCAoIHR5cGUgKSB7XG5cblx0XHRcdFx0Y2FzZSAnc2NlbmUnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRTY2VuZSggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdub2RlJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkTm9kZSggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdtZXNoJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkTWVzaCAmJiBleHQubG9hZE1lc2goIGluZGV4ICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYWNjZXNzb3InOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRBY2Nlc3NvciggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdidWZmZXJWaWV3Jzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkQnVmZmVyVmlldyAmJiBleHQubG9hZEJ1ZmZlclZpZXcoIGluZGV4ICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYnVmZmVyJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQnVmZmVyKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkTWF0ZXJpYWwgJiYgZXh0LmxvYWRNYXRlcmlhbCggaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICd0ZXh0dXJlJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkVGV4dHVyZSAmJiBleHQubG9hZFRleHR1cmUoIGluZGV4ICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnc2tpbic6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZFNraW4oIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYW5pbWF0aW9uJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQW5pbWF0aW9uKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2NhbWVyYSc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZENhbWVyYSggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1Vua25vd24gdHlwZTogJyArIHR5cGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIGRlcGVuZGVuY3kgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBkZXBlbmRlbmN5O1xuXG5cdH1cblxuXHQvKipcblx0ICogUmVxdWVzdHMgYWxsIGRlcGVuZGVuY2llcyBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgYXN5bmNocm9ub3VzbHksIHdpdGggY2FjaGluZy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxPYmplY3Q+Pn1cblx0ICovXG5cdGdldERlcGVuZGVuY2llcyggdHlwZSApIHtcblxuXHRcdGxldCBkZXBlbmRlbmNpZXMgPSB0aGlzLmNhY2hlLmdldCggdHlwZSApO1xuXG5cdFx0aWYgKCAhIGRlcGVuZGVuY2llcyApIHtcblxuXHRcdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRcdGNvbnN0IGRlZnMgPSB0aGlzLmpzb25bIHR5cGUgKyAoIHR5cGUgPT09ICdtZXNoJyA/ICdlcycgOiAncycgKSBdIHx8IFtdO1xuXG5cdFx0XHRkZXBlbmRlbmNpZXMgPSBQcm9taXNlLmFsbCggZGVmcy5tYXAoIGZ1bmN0aW9uICggZGVmLCBpbmRleCApIHtcblxuXHRcdFx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koIHR5cGUsIGluZGV4ICk7XG5cblx0XHRcdH0gKSApO1xuXG5cdFx0XHR0aGlzLmNhY2hlLmFkZCggdHlwZSwgZGVwZW5kZW5jaWVzICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jaWVzO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNidWZmZXJzLWFuZC1idWZmZXItdmlld3Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IGJ1ZmZlckluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXlCdWZmZXI+fVxuXHQgKi9cblx0bG9hZEJ1ZmZlciggYnVmZmVySW5kZXggKSB7XG5cblx0XHRjb25zdCBidWZmZXJEZWYgPSB0aGlzLmpzb24uYnVmZmVyc1sgYnVmZmVySW5kZXggXTtcblx0XHRjb25zdCBsb2FkZXIgPSB0aGlzLmZpbGVMb2FkZXI7XG5cblx0XHRpZiAoIGJ1ZmZlckRlZi50eXBlICYmIGJ1ZmZlckRlZi50eXBlICE9PSAnYXJyYXlidWZmZXInICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiAnICsgYnVmZmVyRGVmLnR5cGUgKyAnIGJ1ZmZlciB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuJyApO1xuXG5cdFx0fVxuXG5cdFx0Ly8gSWYgcHJlc2VudCwgR0xCIGNvbnRhaW5lciBpcyByZXF1aXJlZCB0byBiZSB0aGUgZmlyc3QgYnVmZmVyLlxuXHRcdGlmICggYnVmZmVyRGVmLnVyaSA9PT0gdW5kZWZpbmVkICYmIGJ1ZmZlckluZGV4ID09PSAwICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCB0aGlzLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGIF0uYm9keSApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlLCByZWplY3QgKSB7XG5cblx0XHRcdGxvYWRlci5sb2FkKCBMb2FkZXJVdGlscy5yZXNvbHZlVVJMKCBidWZmZXJEZWYudXJpLCBvcHRpb25zLnBhdGggKSwgcmVzb2x2ZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0cmVqZWN0KCBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBGYWlsZWQgdG8gbG9hZCBidWZmZXIgXCInICsgYnVmZmVyRGVmLnVyaSArICdcIi4nICkgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNidWZmZXJzLWFuZC1idWZmZXItdmlld3Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IGJ1ZmZlclZpZXdJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyPn1cblx0ICovXG5cdGxvYWRCdWZmZXJWaWV3KCBidWZmZXJWaWV3SW5kZXggKSB7XG5cblx0XHRjb25zdCBidWZmZXJWaWV3RGVmID0gdGhpcy5qc29uLmJ1ZmZlclZpZXdzWyBidWZmZXJWaWV3SW5kZXggXTtcblxuXHRcdHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXInLCBidWZmZXJWaWV3RGVmLmJ1ZmZlciApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyICkge1xuXG5cdFx0XHRjb25zdCBieXRlTGVuZ3RoID0gYnVmZmVyVmlld0RlZi5ieXRlTGVuZ3RoIHx8IDA7XG5cdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gYnVmZmVyVmlld0RlZi5ieXRlT2Zmc2V0IHx8IDA7XG5cdFx0XHRyZXR1cm4gYnVmZmVyLnNsaWNlKCBieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgYnl0ZUxlbmd0aCApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNhY2Nlc3NvcnNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGFjY2Vzc29ySW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJBdHRyaWJ1dGV8SW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGU+fVxuXHQgKi9cblx0bG9hZEFjY2Vzc29yKCBhY2Nlc3NvckluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXG5cdFx0Y29uc3QgYWNjZXNzb3JEZWYgPSB0aGlzLmpzb24uYWNjZXNzb3JzWyBhY2Nlc3NvckluZGV4IF07XG5cblx0XHRpZiAoIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgPT09IHVuZGVmaW5lZCAmJiBhY2Nlc3NvckRlZi5zcGFyc2UgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gSWdub3JlIGVtcHR5IGFjY2Vzc29ycywgd2hpY2ggbWF5IGJlIHVzZWQgdG8gZGVjbGFyZSBydW50aW1lXG5cdFx0XHQvLyBpbmZvcm1hdGlvbiBhYm91dCBhdHRyaWJ1dGVzIGNvbWluZyBmcm9tIGFub3RoZXIgc291cmNlIChlLmcuIERyYWNvXG5cdFx0XHQvLyBjb21wcmVzc2lvbiBleHRlbnNpb24pLlxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggbnVsbCApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGVuZGluZ0J1ZmZlclZpZXdzID0gW107XG5cblx0XHRpZiAoIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICkgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCBudWxsICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGFjY2Vzc29yRGVmLnNwYXJzZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGFjY2Vzc29yRGVmLnNwYXJzZS5pbmRpY2VzLmJ1ZmZlclZpZXcgKSApO1xuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBhY2Nlc3NvckRlZi5zcGFyc2UudmFsdWVzLmJ1ZmZlclZpZXcgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nQnVmZmVyVmlld3MgKS50aGVuKCBmdW5jdGlvbiAoIGJ1ZmZlclZpZXdzICkge1xuXG5cdFx0XHRjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyVmlld3NbIDAgXTtcblxuXHRcdFx0Y29uc3QgaXRlbVNpemUgPSBXRUJHTF9UWVBFX1NJWkVTWyBhY2Nlc3NvckRlZi50eXBlIF07XG5cdFx0XHRjb25zdCBUeXBlZEFycmF5ID0gV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3NvckRlZi5jb21wb25lbnRUeXBlIF07XG5cblx0XHRcdC8vIEZvciBWRUMzOiBpdGVtU2l6ZSBpcyAzLCBlbGVtZW50Qnl0ZXMgaXMgNCwgaXRlbUJ5dGVzIGlzIDEyLlxuXHRcdFx0Y29uc3QgZWxlbWVudEJ5dGVzID0gVHlwZWRBcnJheS5CWVRFU19QRVJfRUxFTUVOVDtcblx0XHRcdGNvbnN0IGl0ZW1CeXRlcyA9IGVsZW1lbnRCeXRlcyAqIGl0ZW1TaXplO1xuXHRcdFx0Y29uc3QgYnl0ZU9mZnNldCA9IGFjY2Vzc29yRGVmLmJ5dGVPZmZzZXQgfHwgMDtcblx0XHRcdGNvbnN0IGJ5dGVTdHJpZGUgPSBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQgPyBqc29uLmJ1ZmZlclZpZXdzWyBhY2Nlc3NvckRlZi5idWZmZXJWaWV3IF0uYnl0ZVN0cmlkZSA6IHVuZGVmaW5lZDtcblx0XHRcdGNvbnN0IG5vcm1hbGl6ZWQgPSBhY2Nlc3NvckRlZi5ub3JtYWxpemVkID09PSB0cnVlO1xuXHRcdFx0bGV0IGFycmF5LCBidWZmZXJBdHRyaWJ1dGU7XG5cblx0XHRcdC8vIFRoZSBidWZmZXIgaXMgbm90IGludGVybGVhdmVkIGlmIHRoZSBzdHJpZGUgaXMgdGhlIGl0ZW0gc2l6ZSBpbiBieXRlcy5cblx0XHRcdGlmICggYnl0ZVN0cmlkZSAmJiBieXRlU3RyaWRlICE9PSBpdGVtQnl0ZXMgKSB7XG5cblx0XHRcdFx0Ly8gRWFjaCBcInNsaWNlXCIgb2YgdGhlIGJ1ZmZlciwgYXMgZGVmaW5lZCBieSAnY291bnQnIGVsZW1lbnRzIG9mICdieXRlU3RyaWRlJyBieXRlcywgZ2V0cyBpdHMgb3duIEludGVybGVhdmVkQnVmZmVyXG5cdFx0XHRcdC8vIFRoaXMgbWFrZXMgc3VyZSB0aGF0IElCQS5jb3VudCByZWZsZWN0cyBhY2Nlc3Nvci5jb3VudCBwcm9wZXJseVxuXHRcdFx0XHRjb25zdCBpYlNsaWNlID0gTWF0aC5mbG9vciggYnl0ZU9mZnNldCAvIGJ5dGVTdHJpZGUgKTtcblx0XHRcdFx0Y29uc3QgaWJDYWNoZUtleSA9ICdJbnRlcmxlYXZlZEJ1ZmZlcjonICsgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyArICc6JyArIGFjY2Vzc29yRGVmLmNvbXBvbmVudFR5cGUgKyAnOicgKyBpYlNsaWNlICsgJzonICsgYWNjZXNzb3JEZWYuY291bnQ7XG5cdFx0XHRcdGxldCBpYiA9IHBhcnNlci5jYWNoZS5nZXQoIGliQ2FjaGVLZXkgKTtcblxuXHRcdFx0XHRpZiAoICEgaWIgKSB7XG5cblx0XHRcdFx0XHRhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBidWZmZXJWaWV3LCBpYlNsaWNlICogYnl0ZVN0cmlkZSwgYWNjZXNzb3JEZWYuY291bnQgKiBieXRlU3RyaWRlIC8gZWxlbWVudEJ5dGVzICk7XG5cblx0XHRcdFx0XHQvLyBJbnRlZ2VyIHBhcmFtZXRlcnMgdG8gSUIvSUJBIGFyZSBpbiBhcnJheSBlbGVtZW50cywgbm90IGJ5dGVzLlxuXHRcdFx0XHRcdGliID0gbmV3IEludGVybGVhdmVkQnVmZmVyKCBhcnJheSwgYnl0ZVN0cmlkZSAvIGVsZW1lbnRCeXRlcyApO1xuXG5cdFx0XHRcdFx0cGFyc2VyLmNhY2hlLmFkZCggaWJDYWNoZUtleSwgaWIgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnVmZmVyQXR0cmlidXRlID0gbmV3IEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlKCBpYiwgaXRlbVNpemUsICggYnl0ZU9mZnNldCAlIGJ5dGVTdHJpZGUgKSAvIGVsZW1lbnRCeXRlcywgbm9ybWFsaXplZCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICggYnVmZmVyVmlldyA9PT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoIGFjY2Vzc29yRGVmLmNvdW50ICogaXRlbVNpemUgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0YXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYnVmZmVyVmlldywgYnl0ZU9mZnNldCwgYWNjZXNzb3JEZWYuY291bnQgKiBpdGVtU2l6ZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBhcnJheSwgaXRlbVNpemUsIG5vcm1hbGl6ZWQgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI3NwYXJzZS1hY2Nlc3NvcnNcblx0XHRcdGlmICggYWNjZXNzb3JEZWYuc3BhcnNlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Y29uc3QgaXRlbVNpemVJbmRpY2VzID0gV0VCR0xfVFlQRV9TSVpFUy5TQ0FMQVI7XG5cdFx0XHRcdGNvbnN0IFR5cGVkQXJyYXlJbmRpY2VzID0gV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3NvckRlZi5zcGFyc2UuaW5kaWNlcy5jb21wb25lbnRUeXBlIF07XG5cblx0XHRcdFx0Y29uc3QgYnl0ZU9mZnNldEluZGljZXMgPSBhY2Nlc3NvckRlZi5zcGFyc2UuaW5kaWNlcy5ieXRlT2Zmc2V0IHx8IDA7XG5cdFx0XHRcdGNvbnN0IGJ5dGVPZmZzZXRWYWx1ZXMgPSBhY2Nlc3NvckRlZi5zcGFyc2UudmFsdWVzLmJ5dGVPZmZzZXQgfHwgMDtcblxuXHRcdFx0XHRjb25zdCBzcGFyc2VJbmRpY2VzID0gbmV3IFR5cGVkQXJyYXlJbmRpY2VzKCBidWZmZXJWaWV3c1sgMSBdLCBieXRlT2Zmc2V0SW5kaWNlcywgYWNjZXNzb3JEZWYuc3BhcnNlLmNvdW50ICogaXRlbVNpemVJbmRpY2VzICk7XG5cdFx0XHRcdGNvbnN0IHNwYXJzZVZhbHVlcyA9IG5ldyBUeXBlZEFycmF5KCBidWZmZXJWaWV3c1sgMiBdLCBieXRlT2Zmc2V0VmFsdWVzLCBhY2Nlc3NvckRlZi5zcGFyc2UuY291bnQgKiBpdGVtU2l6ZSApO1xuXG5cdFx0XHRcdGlmICggYnVmZmVyVmlldyAhPT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdC8vIEF2b2lkIG1vZGlmeWluZyB0aGUgb3JpZ2luYWwgQXJyYXlCdWZmZXIsIGlmIHRoZSBidWZmZXJWaWV3IHdhc24ndCBpbml0aWFsaXplZCB3aXRoIHplcm9lcy5cblx0XHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBidWZmZXJBdHRyaWJ1dGUuYXJyYXkuc2xpY2UoKSwgYnVmZmVyQXR0cmlidXRlLml0ZW1TaXplLCBidWZmZXJBdHRyaWJ1dGUubm9ybWFsaXplZCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gc3BhcnNlSW5kaWNlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gc3BhcnNlSW5kaWNlc1sgaSBdO1xuXG5cdFx0XHRcdFx0YnVmZmVyQXR0cmlidXRlLnNldFgoIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSBdICk7XG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSAyICkgYnVmZmVyQXR0cmlidXRlLnNldFkoIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSArIDEgXSApO1xuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gMyApIGJ1ZmZlckF0dHJpYnV0ZS5zZXRaKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgKyAyIF0gKTtcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDQgKSBidWZmZXJBdHRyaWJ1dGUuc2V0VyggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplICsgMyBdICk7XG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSA1ICkgdGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgaXRlbVNpemUgaW4gc3BhcnNlIEJ1ZmZlckF0dHJpYnV0ZS4nICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBidWZmZXJBdHRyaWJ1dGU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjdGV4dHVyZXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRleHR1cmVJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFRIUkVFLlRleHR1cmU+fVxuXHQgKi9cblx0bG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XG5cdFx0Y29uc3Qgc291cmNlID0ganNvbi5pbWFnZXNbIHRleHR1cmVEZWYuc291cmNlIF07XG5cblx0XHRsZXQgbG9hZGVyID0gdGhpcy50ZXh0dXJlTG9hZGVyO1xuXG5cdFx0aWYgKCBzb3VyY2UudXJpICkge1xuXG5cdFx0XHRjb25zdCBoYW5kbGVyID0gb3B0aW9ucy5tYW5hZ2VyLmdldEhhbmRsZXIoIHNvdXJjZS51cmkgKTtcblx0XHRcdGlmICggaGFuZGxlciAhPT0gbnVsbCApIGxvYWRlciA9IGhhbmRsZXI7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICk7XG5cblx0fVxuXG5cdGxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHRcdGNvbnN0IHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcblxuXHRcdGNvbnN0IGNhY2hlS2V5ID0gKCBzb3VyY2UudXJpIHx8IHNvdXJjZS5idWZmZXJWaWV3ICkgKyAnOicgKyB0ZXh0dXJlRGVmLnNhbXBsZXI7XG5cblx0XHRpZiAoIHRoaXMudGV4dHVyZUNhY2hlWyBjYWNoZUtleSBdICkge1xuXG5cdFx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMjE1NTkuXG5cdFx0XHRyZXR1cm4gdGhpcy50ZXh0dXJlQ2FjaGVbIGNhY2hlS2V5IF07XG5cblx0XHR9XG5cblx0XHRjb25zdCBVUkwgPSBzZWxmLlVSTCB8fCBzZWxmLndlYmtpdFVSTDtcblxuXHRcdGxldCBzb3VyY2VVUkkgPSBzb3VyY2UudXJpIHx8ICcnO1xuXHRcdGxldCBpc09iamVjdFVSTCA9IGZhbHNlO1xuXG5cdFx0aWYgKCBzb3VyY2UuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHQvLyBMb2FkIGJpbmFyeSBpbWFnZSBkYXRhIGZyb20gYnVmZmVyVmlldywgaWYgcHJvdmlkZWQuXG5cblx0XHRcdHNvdXJjZVVSSSA9IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIHNvdXJjZS5idWZmZXJWaWV3ICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3ICkge1xuXG5cdFx0XHRcdGlzT2JqZWN0VVJMID0gdHJ1ZTtcblx0XHRcdFx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKCBbIGJ1ZmZlclZpZXcgXSwgeyB0eXBlOiBzb3VyY2UubWltZVR5cGUgfSApO1xuXHRcdFx0XHRzb3VyY2VVUkkgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBibG9iICk7XG5cdFx0XHRcdHJldHVybiBzb3VyY2VVUkk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gZWxzZSBpZiAoIHNvdXJjZS51cmkgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogSW1hZ2UgJyArIHRleHR1cmVJbmRleCArICcgaXMgbWlzc2luZyBVUkkgYW5kIGJ1ZmZlclZpZXcnICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCBzb3VyY2VVUkkgKS50aGVuKCBmdW5jdGlvbiAoIHNvdXJjZVVSSSApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUsIHJlamVjdCApIHtcblxuXHRcdFx0XHRsZXQgb25Mb2FkID0gcmVzb2x2ZTtcblxuXHRcdFx0XHRpZiAoIGxvYWRlci5pc0ltYWdlQml0bWFwTG9hZGVyID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0b25Mb2FkID0gZnVuY3Rpb24gKCBpbWFnZUJpdG1hcCApIHtcblxuXHRcdFx0XHRcdFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKCBpbWFnZUJpdG1hcCApO1xuXHRcdFx0XHRcdFx0dGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0XHRcdHJlc29sdmUoIHRleHR1cmUgKTtcblxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxvYWRlci5sb2FkKCBMb2FkZXJVdGlscy5yZXNvbHZlVVJMKCBzb3VyY2VVUkksIG9wdGlvbnMucGF0aCApLCBvbkxvYWQsIHVuZGVmaW5lZCwgcmVqZWN0ICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cblx0XHRcdC8vIENsZWFuIHVwIHJlc291cmNlcyBhbmQgY29uZmlndXJlIFRleHR1cmUuXG5cblx0XHRcdGlmICggaXNPYmplY3RVUkwgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTCggc291cmNlVVJJICk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGV4dHVyZS5mbGlwWSA9IGZhbHNlO1xuXG5cdFx0XHRpZiAoIHRleHR1cmVEZWYubmFtZSApIHRleHR1cmUubmFtZSA9IHRleHR1cmVEZWYubmFtZTtcblxuXHRcdFx0Y29uc3Qgc2FtcGxlcnMgPSBqc29uLnNhbXBsZXJzIHx8IHt9O1xuXHRcdFx0Y29uc3Qgc2FtcGxlciA9IHNhbXBsZXJzWyB0ZXh0dXJlRGVmLnNhbXBsZXIgXSB8fCB7fTtcblxuXHRcdFx0dGV4dHVyZS5tYWdGaWx0ZXIgPSBXRUJHTF9GSUxURVJTWyBzYW1wbGVyLm1hZ0ZpbHRlciBdIHx8IExpbmVhckZpbHRlcjtcblx0XHRcdHRleHR1cmUubWluRmlsdGVyID0gV0VCR0xfRklMVEVSU1sgc2FtcGxlci5taW5GaWx0ZXIgXSB8fCBMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXI7XG5cdFx0XHR0ZXh0dXJlLndyYXBTID0gV0VCR0xfV1JBUFBJTkdTWyBzYW1wbGVyLndyYXBTIF0gfHwgUmVwZWF0V3JhcHBpbmc7XG5cdFx0XHR0ZXh0dXJlLndyYXBUID0gV0VCR0xfV1JBUFBJTkdTWyBzYW1wbGVyLndyYXBUIF0gfHwgUmVwZWF0V3JhcHBpbmc7XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCB0ZXh0dXJlLCB7IHRleHR1cmVzOiB0ZXh0dXJlSW5kZXggfSApO1xuXG5cdFx0XHRyZXR1cm4gdGV4dHVyZTtcblxuXHRcdH0gKS5jYXRjaCggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogQ291bGRuXFwndCBsb2FkIHRleHR1cmUnLCBzb3VyY2VVUkkgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy50ZXh0dXJlQ2FjaGVbIGNhY2hlS2V5IF0gPSBwcm9taXNlO1xuXG5cdFx0cmV0dXJuIHByb21pc2U7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBc3luY2hyb25vdXNseSBhc3NpZ25zIGEgdGV4dHVyZSB0byB0aGUgZ2l2ZW4gbWF0ZXJpYWwgcGFyYW1ldGVycy5cblx0ICogQHBhcmFtIHtPYmplY3R9IG1hdGVyaWFsUGFyYW1zXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtYXBOYW1lXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtYXBEZWZcblx0ICogQHJldHVybiB7UHJvbWlzZTxUZXh0dXJlPn1cblx0ICovXG5cdGFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCBtYXBOYW1lLCBtYXBEZWYgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ3RleHR1cmUnLCBtYXBEZWYuaW5kZXggKS50aGVuKCBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cblx0XHRcdC8vIE1hdGVyaWFscyBzYW1wbGUgYW9NYXAgZnJvbSBVViBzZXQgMSBhbmQgb3RoZXIgbWFwcyBmcm9tIFVWIHNldCAwIC0gdGhpcyBjYW4ndCBiZSBjb25maWd1cmVkXG5cdFx0XHQvLyBIb3dldmVyLCB3ZSB3aWxsIGNvcHkgVVYgc2V0IDAgdG8gVVYgc2V0IDEgb24gZGVtYW5kIGZvciBhb01hcFxuXHRcdFx0aWYgKCBtYXBEZWYudGV4Q29vcmQgIT09IHVuZGVmaW5lZCAmJiBtYXBEZWYudGV4Q29vcmQgIT0gMCAmJiAhICggbWFwTmFtZSA9PT0gJ2FvTWFwJyAmJiBtYXBEZWYudGV4Q29vcmQgPT0gMSApICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IEN1c3RvbSBVViBzZXQgJyArIG1hcERlZi50ZXhDb29yZCArICcgZm9yIHRleHR1cmUgJyArIG1hcE5hbWUgKyAnIG5vdCB5ZXQgc3VwcG9ydGVkLicgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHBhcnNlci5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STSBdICkge1xuXG5cdFx0XHRcdGNvbnN0IHRyYW5zZm9ybSA9IG1hcERlZi5leHRlbnNpb25zICE9PSB1bmRlZmluZWQgPyBtYXBEZWYuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk0gXSA6IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRpZiAoIHRyYW5zZm9ybSApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGdsdGZSZWZlcmVuY2UgPSBwYXJzZXIuYXNzb2NpYXRpb25zLmdldCggdGV4dHVyZSApO1xuXHRcdFx0XHRcdHRleHR1cmUgPSBwYXJzZXIuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk0gXS5leHRlbmRUZXh0dXJlKCB0ZXh0dXJlLCB0cmFuc2Zvcm0gKTtcblx0XHRcdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggdGV4dHVyZSwgZ2x0ZlJlZmVyZW5jZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbFBhcmFtc1sgbWFwTmFtZSBdID0gdGV4dHVyZTtcblxuXHRcdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NpZ25zIGZpbmFsIG1hdGVyaWFsIHRvIGEgTWVzaCwgTGluZSwgb3IgUG9pbnRzIGluc3RhbmNlLiBUaGUgaW5zdGFuY2Vcblx0ICogYWxyZWFkeSBoYXMgYSBtYXRlcmlhbCAoZ2VuZXJhdGVkIGZyb20gdGhlIGdsVEYgbWF0ZXJpYWwgb3B0aW9ucyBhbG9uZSlcblx0ICogYnV0IHJldXNlIG9mIHRoZSBzYW1lIGdsVEYgbWF0ZXJpYWwgbWF5IHJlcXVpcmUgbXVsdGlwbGUgdGhyZWVqcyBtYXRlcmlhbHNcblx0ICogdG8gYWNjb21tb2RhdGUgZGlmZmVyZW50IHByaW1pdGl2ZSB0eXBlcywgZGVmaW5lcywgZXRjLiBOZXcgbWF0ZXJpYWxzIHdpbGxcblx0ICogYmUgY3JlYXRlZCBpZiBuZWNlc3NhcnksIGFuZCByZXVzZWQgZnJvbSBhIGNhY2hlLlxuXHQgKiBAcGFyYW0gIHtPYmplY3QzRH0gbWVzaCBNZXNoLCBMaW5lLCBvciBQb2ludHMgaW5zdGFuY2UuXG5cdCAqL1xuXHRhc3NpZ25GaW5hbE1hdGVyaWFsKCBtZXNoICkge1xuXG5cdFx0Y29uc3QgZ2VvbWV0cnkgPSBtZXNoLmdlb21ldHJ5O1xuXHRcdGxldCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWw7XG5cblx0XHRjb25zdCB1c2VEZXJpdmF0aXZlVGFuZ2VudHMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnRhbmdlbnQgPT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCB1c2VWZXJ0ZXhDb2xvcnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLmNvbG9yICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgdXNlRmxhdFNoYWRpbmcgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbCA9PT0gdW5kZWZpbmVkO1xuXG5cdFx0aWYgKCBtZXNoLmlzUG9pbnRzICkge1xuXG5cdFx0XHRjb25zdCBjYWNoZUtleSA9ICdQb2ludHNNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZDtcblxuXHRcdFx0bGV0IHBvaW50c01hdGVyaWFsID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XG5cblx0XHRcdGlmICggISBwb2ludHNNYXRlcmlhbCApIHtcblxuXHRcdFx0XHRwb2ludHNNYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCgpO1xuXHRcdFx0XHRNYXRlcmlhbC5wcm90b3R5cGUuY29weS5jYWxsKCBwb2ludHNNYXRlcmlhbCwgbWF0ZXJpYWwgKTtcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwuY29sb3IuY29weSggbWF0ZXJpYWwuY29sb3IgKTtcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwubWFwID0gbWF0ZXJpYWwubWFwO1xuXHRcdFx0XHRwb2ludHNNYXRlcmlhbC5zaXplQXR0ZW51YXRpb24gPSBmYWxzZTsgLy8gZ2xURiBzcGVjIHNheXMgcG9pbnRzIHNob3VsZCBiZSAxcHhcblxuXHRcdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIHBvaW50c01hdGVyaWFsICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWwgPSBwb2ludHNNYXRlcmlhbDtcblxuXHRcdH0gZWxzZSBpZiAoIG1lc2guaXNMaW5lICkge1xuXG5cdFx0XHRjb25zdCBjYWNoZUtleSA9ICdMaW5lQmFzaWNNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZDtcblxuXHRcdFx0bGV0IGxpbmVNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0XHRpZiAoICEgbGluZU1hdGVyaWFsICkge1xuXG5cdFx0XHRcdGxpbmVNYXRlcmlhbCA9IG5ldyBMaW5lQmFzaWNNYXRlcmlhbCgpO1xuXHRcdFx0XHRNYXRlcmlhbC5wcm90b3R5cGUuY29weS5jYWxsKCBsaW5lTWF0ZXJpYWwsIG1hdGVyaWFsICk7XG5cdFx0XHRcdGxpbmVNYXRlcmlhbC5jb2xvci5jb3B5KCBtYXRlcmlhbC5jb2xvciApO1xuXG5cdFx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgbGluZU1hdGVyaWFsICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWwgPSBsaW5lTWF0ZXJpYWw7XG5cblx0XHR9XG5cblx0XHQvLyBDbG9uZSB0aGUgbWF0ZXJpYWwgaWYgaXQgd2lsbCBiZSBtb2RpZmllZFxuXHRcdGlmICggdXNlRGVyaXZhdGl2ZVRhbmdlbnRzIHx8IHVzZVZlcnRleENvbG9ycyB8fCB1c2VGbGF0U2hhZGluZyApIHtcblxuXHRcdFx0bGV0IGNhY2hlS2V5ID0gJ0Nsb25lZE1hdGVyaWFsOicgKyBtYXRlcmlhbC51dWlkICsgJzonO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsLmlzR0xURlNwZWN1bGFyR2xvc3NpbmVzc01hdGVyaWFsICkgY2FjaGVLZXkgKz0gJ3NwZWN1bGFyLWdsb3NzaW5lc3M6Jztcblx0XHRcdGlmICggdXNlRGVyaXZhdGl2ZVRhbmdlbnRzICkgY2FjaGVLZXkgKz0gJ2Rlcml2YXRpdmUtdGFuZ2VudHM6Jztcblx0XHRcdGlmICggdXNlVmVydGV4Q29sb3JzICkgY2FjaGVLZXkgKz0gJ3ZlcnRleC1jb2xvcnM6Jztcblx0XHRcdGlmICggdXNlRmxhdFNoYWRpbmcgKSBjYWNoZUtleSArPSAnZmxhdC1zaGFkaW5nOic7XG5cblx0XHRcdGxldCBjYWNoZWRNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0XHRpZiAoICEgY2FjaGVkTWF0ZXJpYWwgKSB7XG5cblx0XHRcdFx0Y2FjaGVkTWF0ZXJpYWwgPSBtYXRlcmlhbC5jbG9uZSgpO1xuXG5cdFx0XHRcdGlmICggdXNlVmVydGV4Q29sb3JzICkgY2FjaGVkTWF0ZXJpYWwudmVydGV4Q29sb3JzID0gdHJ1ZTtcblx0XHRcdFx0aWYgKCB1c2VGbGF0U2hhZGluZyApIGNhY2hlZE1hdGVyaWFsLmZsYXRTaGFkaW5nID0gdHJ1ZTtcblxuXHRcdFx0XHRpZiAoIHVzZURlcml2YXRpdmVUYW5nZW50cyApIHtcblxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzExNDM4I2lzc3VlY29tbWVudC01MDcwMDM5OTVcblx0XHRcdFx0XHRpZiAoIGNhY2hlZE1hdGVyaWFsLm5vcm1hbFNjYWxlICkgY2FjaGVkTWF0ZXJpYWwubm9ybWFsU2NhbGUueSAqPSAtIDE7XG5cdFx0XHRcdFx0aWYgKCBjYWNoZWRNYXRlcmlhbC5jbGVhcmNvYXROb3JtYWxTY2FsZSApIGNhY2hlZE1hdGVyaWFsLmNsZWFyY29hdE5vcm1hbFNjYWxlLnkgKj0gLSAxO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIGNhY2hlZE1hdGVyaWFsICk7XG5cblx0XHRcdFx0dGhpcy5hc3NvY2lhdGlvbnMuc2V0KCBjYWNoZWRNYXRlcmlhbCwgdGhpcy5hc3NvY2lhdGlvbnMuZ2V0KCBtYXRlcmlhbCApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWwgPSBjYWNoZWRNYXRlcmlhbDtcblxuXHRcdH1cblxuXHRcdC8vIHdvcmthcm91bmRzIGZvciBtZXNoIGFuZCBnZW9tZXRyeVxuXG5cdFx0aWYgKCBtYXRlcmlhbC5hb01hcCAmJiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2MiA9PT0gdW5kZWZpbmVkICYmIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKCAndXYyJywgZ2VvbWV0cnkuYXR0cmlidXRlcy51diApO1xuXG5cdFx0fVxuXG5cdFx0bWVzaC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoIC8qIG1hdGVyaWFsSW5kZXggKi8gKSB7XG5cblx0XHRyZXR1cm4gTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI21hdGVyaWFsc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gbWF0ZXJpYWxJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE1hdGVyaWFsPn1cblx0ICovXG5cdGxvYWRNYXRlcmlhbCggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0ganNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGxldCBtYXRlcmlhbFR5cGU7XG5cdFx0Y29uc3QgbWF0ZXJpYWxQYXJhbXMgPSB7fTtcblx0XHRjb25zdCBtYXRlcmlhbEV4dGVuc2lvbnMgPSBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8IHt9O1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0aWYgKCBtYXRlcmlhbEV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUyBdICkge1xuXG5cdFx0XHRjb25zdCBzZ0V4dGVuc2lvbiA9IGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUyBdO1xuXHRcdFx0bWF0ZXJpYWxUeXBlID0gc2dFeHRlbnNpb24uZ2V0TWF0ZXJpYWxUeXBlKCk7XG5cdFx0XHRwZW5kaW5nLnB1c2goIHNnRXh0ZW5zaW9uLmV4dGVuZFBhcmFtcyggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSApO1xuXG5cdFx0fSBlbHNlIGlmICggbWF0ZXJpYWxFeHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQgXSApIHtcblxuXHRcdFx0Y29uc3Qga211RXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUIF07XG5cdFx0XHRtYXRlcmlhbFR5cGUgPSBrbXVFeHRlbnNpb24uZ2V0TWF0ZXJpYWxUeXBlKCk7XG5cdFx0XHRwZW5kaW5nLnB1c2goIGttdUV4dGVuc2lvbi5leHRlbmRQYXJhbXMoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIFNwZWNpZmljYXRpb246XG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjbWV0YWxsaWMtcm91Z2huZXNzLW1hdGVyaWFsXG5cblx0XHRcdGNvbnN0IG1ldGFsbGljUm91Z2huZXNzID0gbWF0ZXJpYWxEZWYucGJyTWV0YWxsaWNSb3VnaG5lc3MgfHwge307XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciApICkge1xuXG5cdFx0XHRcdGNvbnN0IGFycmF5ID0gbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yO1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yLmZyb21BcnJheSggYXJyYXkgKTtcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IGFycmF5WyAzIF07XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5tZXRhbG5lc3MgPSBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNGYWN0b3IgOiAxLjA7XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5yb3VnaG5lc3MgPSBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCA/IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzc0ZhY3RvciA6IDEuMDtcblxuXHRcdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21ldGFsbmVzc01hcCcsIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSApICk7XG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAncm91Z2huZXNzTWFwJywgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbFR5cGUgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuZ2V0TWF0ZXJpYWxUeXBlICYmIGV4dC5nZXRNYXRlcmlhbFR5cGUoIG1hdGVyaWFsSW5kZXggKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIFByb21pc2UuYWxsKCB0aGlzLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuZXh0ZW5kTWF0ZXJpYWxQYXJhbXMgJiYgZXh0LmV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApO1xuXG5cdFx0XHR9ICkgKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5kb3VibGVTaWRlZCA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuc2lkZSA9IERvdWJsZVNpZGU7XG5cblx0XHR9XG5cblx0XHRjb25zdCBhbHBoYU1vZGUgPSBtYXRlcmlhbERlZi5hbHBoYU1vZGUgfHwgQUxQSEFfTU9ERVMuT1BBUVVFO1xuXG5cdFx0aWYgKCBhbHBoYU1vZGUgPT09IEFMUEhBX01PREVTLkJMRU5EICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy50cmFuc3BhcmVudCA9IHRydWU7XG5cblx0XHRcdC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTc3MDZcblx0XHRcdG1hdGVyaWFsUGFyYW1zLmRlcHRoV3JpdGUgPSBmYWxzZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmZvcm1hdCA9IFJHQkZvcm1hdDtcblx0XHRcdG1hdGVyaWFsUGFyYW1zLnRyYW5zcGFyZW50ID0gZmFsc2U7XG5cblx0XHRcdGlmICggYWxwaGFNb2RlID09PSBBTFBIQV9NT0RFUy5NQVNLICkge1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmFscGhhVGVzdCA9IG1hdGVyaWFsRGVmLmFscGhhQ3V0b2ZmICE9PSB1bmRlZmluZWQgPyBtYXRlcmlhbERlZi5hbHBoYUN1dG9mZiA6IDAuNTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdub3JtYWxNYXAnLCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlICkgKTtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGUgPSBuZXcgVmVjdG9yMiggMSwgMSApO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBzY2FsZSA9IG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUuc2NhbGU7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGUuc2V0KCBzY2FsZSwgc2NhbGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdhb01hcCcsIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUgKSApO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUuc3RyZW5ndGggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5hb01hcEludGVuc2l0eSA9IG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUuc3RyZW5ndGg7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICggbWF0ZXJpYWxEZWYuZW1pc3NpdmVGYWN0b3IgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZSA9IG5ldyBDb2xvcigpLmZyb21BcnJheSggbWF0ZXJpYWxEZWYuZW1pc3NpdmVGYWN0b3IgKTtcblxuXHRcdH1cblxuXHRcdGlmICggbWF0ZXJpYWxEZWYuZW1pc3NpdmVUZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdlbWlzc2l2ZU1hcCcsIG1hdGVyaWFsRGVmLmVtaXNzaXZlVGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGxldCBtYXRlcmlhbDtcblxuXHRcdFx0aWYgKCBtYXRlcmlhbFR5cGUgPT09IEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsICkge1xuXG5cdFx0XHRcdG1hdGVyaWFsID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTIF0uY3JlYXRlTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bWF0ZXJpYWwgPSBuZXcgbWF0ZXJpYWxUeXBlKCBtYXRlcmlhbFBhcmFtcyApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYubmFtZSApIG1hdGVyaWFsLm5hbWUgPSBtYXRlcmlhbERlZi5uYW1lO1xuXG5cdFx0XHQvLyBiYXNlQ29sb3JUZXh0dXJlLCBlbWlzc2l2ZVRleHR1cmUsIGFuZCBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlIHVzZSBzUkdCIGVuY29kaW5nLlxuXHRcdFx0aWYgKCBtYXRlcmlhbC5tYXAgKSBtYXRlcmlhbC5tYXAuZW5jb2RpbmcgPSBzUkdCRW5jb2Rpbmc7XG5cdFx0XHRpZiAoIG1hdGVyaWFsLmVtaXNzaXZlTWFwICkgbWF0ZXJpYWwuZW1pc3NpdmVNYXAuZW5jb2RpbmcgPSBzUkdCRW5jb2Rpbmc7XG5cblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG1hdGVyaWFsLCBtYXRlcmlhbERlZiApO1xuXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggbWF0ZXJpYWwsIHsgbWF0ZXJpYWxzOiBtYXRlcmlhbEluZGV4IH0gKTtcblxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBtYXRlcmlhbCwgbWF0ZXJpYWxEZWYgKTtcblxuXHRcdFx0cmV0dXJuIG1hdGVyaWFsO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKiogV2hlbiBPYmplY3QzRCBpbnN0YW5jZXMgYXJlIHRhcmdldGVkIGJ5IGFuaW1hdGlvbiwgdGhleSBuZWVkIHVuaXF1ZSBuYW1lcy4gKi9cblx0Y3JlYXRlVW5pcXVlTmFtZSggb3JpZ2luYWxOYW1lICkge1xuXG5cdFx0Y29uc3Qgc2FuaXRpemVkTmFtZSA9IFByb3BlcnR5QmluZGluZy5zYW5pdGl6ZU5vZGVOYW1lKCBvcmlnaW5hbE5hbWUgfHwgJycgKTtcblxuXHRcdGxldCBuYW1lID0gc2FuaXRpemVkTmFtZTtcblxuXHRcdGZvciAoIGxldCBpID0gMTsgdGhpcy5ub2RlTmFtZXNVc2VkWyBuYW1lIF07ICsrIGkgKSB7XG5cblx0XHRcdG5hbWUgPSBzYW5pdGl6ZWROYW1lICsgJ18nICsgaTtcblxuXHRcdH1cblxuXHRcdHRoaXMubm9kZU5hbWVzVXNlZFsgbmFtZSBdID0gdHJ1ZTtcblxuXHRcdHJldHVybiBuYW1lO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNnZW9tZXRyeVxuXHQgKlxuXHQgKiBDcmVhdGVzIEJ1ZmZlckdlb21ldHJpZXMgZnJvbSBwcmltaXRpdmVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5PEdMVEYuUHJpbWl0aXZlPn0gcHJpbWl0aXZlc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PEJ1ZmZlckdlb21ldHJ5Pj59XG5cdCAqL1xuXHRsb2FkR2VvbWV0cmllcyggcHJpbWl0aXZlcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBjYWNoZSA9IHRoaXMucHJpbWl0aXZlQ2FjaGU7XG5cblx0XHRmdW5jdGlvbiBjcmVhdGVEcmFjb1ByaW1pdGl2ZSggcHJpbWl0aXZlICkge1xuXG5cdFx0XHRyZXR1cm4gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTiBdXG5cdFx0XHRcdC5kZWNvZGVQcmltaXRpdmUoIHByaW1pdGl2ZSwgcGFyc2VyIClcblx0XHRcdFx0LnRoZW4oIGZ1bmN0aW9uICggZ2VvbWV0cnkgKSB7XG5cblx0XHRcdFx0XHRyZXR1cm4gYWRkUHJpbWl0aXZlQXR0cmlidXRlcyggZ2VvbWV0cnksIHByaW1pdGl2ZSwgcGFyc2VyICk7XG5cblx0XHRcdFx0fSApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHByaW1pdGl2ZSA9IHByaW1pdGl2ZXNbIGkgXTtcblx0XHRcdGNvbnN0IGNhY2hlS2V5ID0gY3JlYXRlUHJpbWl0aXZlS2V5KCBwcmltaXRpdmUgKTtcblxuXHRcdFx0Ly8gU2VlIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCB0aGlzIGdlb21ldHJ5XG5cdFx0XHRjb25zdCBjYWNoZWQgPSBjYWNoZVsgY2FjaGVLZXkgXTtcblxuXHRcdFx0aWYgKCBjYWNoZWQgKSB7XG5cblx0XHRcdFx0Ly8gVXNlIHRoZSBjYWNoZWQgZ2VvbWV0cnkgaWYgaXQgZXhpc3RzXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggY2FjaGVkLnByb21pc2UgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRsZXQgZ2VvbWV0cnlQcm9taXNlO1xuXG5cdFx0XHRcdGlmICggcHJpbWl0aXZlLmV4dGVuc2lvbnMgJiYgcHJpbWl0aXZlLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04gXSApIHtcblxuXHRcdFx0XHRcdC8vIFVzZSBEUkFDTyBnZW9tZXRyeSBpZiBhdmFpbGFibGVcblx0XHRcdFx0XHRnZW9tZXRyeVByb21pc2UgPSBjcmVhdGVEcmFjb1ByaW1pdGl2ZSggcHJpbWl0aXZlICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZ2VvbWV0cnlcblx0XHRcdFx0XHRnZW9tZXRyeVByb21pc2UgPSBhZGRQcmltaXRpdmVBdHRyaWJ1dGVzKCBuZXcgQnVmZmVyR2VvbWV0cnkoKSwgcHJpbWl0aXZlLCBwYXJzZXIgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ2FjaGUgdGhpcyBnZW9tZXRyeVxuXHRcdFx0XHRjYWNoZVsgY2FjaGVLZXkgXSA9IHsgcHJpbWl0aXZlOiBwcmltaXRpdmUsIHByb21pc2U6IGdlb21ldHJ5UHJvbWlzZSB9O1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggZ2VvbWV0cnlQcm9taXNlICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNtZXNoZXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1lc2hJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEdyb3VwfE1lc2h8U2tpbm5lZE1lc2g+fVxuXHQgKi9cblx0bG9hZE1lc2goIG1lc2hJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXG5cdFx0Y29uc3QgbWVzaERlZiA9IGpzb24ubWVzaGVzWyBtZXNoSW5kZXggXTtcblx0XHRjb25zdCBwcmltaXRpdmVzID0gbWVzaERlZi5wcmltaXRpdmVzO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IG1hdGVyaWFsID0gcHJpbWl0aXZlc1sgaSBdLm1hdGVyaWFsID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjcmVhdGVEZWZhdWx0TWF0ZXJpYWwoIHRoaXMuY2FjaGUgKVxuXHRcdFx0XHQ6IHRoaXMuZ2V0RGVwZW5kZW5jeSggJ21hdGVyaWFsJywgcHJpbWl0aXZlc1sgaSBdLm1hdGVyaWFsICk7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggbWF0ZXJpYWwgKTtcblxuXHRcdH1cblxuXHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmxvYWRHZW9tZXRyaWVzKCBwcmltaXRpdmVzICkgKTtcblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICggcmVzdWx0cyApIHtcblxuXHRcdFx0Y29uc3QgbWF0ZXJpYWxzID0gcmVzdWx0cy5zbGljZSggMCwgcmVzdWx0cy5sZW5ndGggLSAxICk7XG5cdFx0XHRjb25zdCBnZW9tZXRyaWVzID0gcmVzdWx0c1sgcmVzdWx0cy5sZW5ndGggLSAxIF07XG5cblx0XHRcdGNvbnN0IG1lc2hlcyA9IFtdO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gZ2VvbWV0cmllcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRjb25zdCBnZW9tZXRyeSA9IGdlb21ldHJpZXNbIGkgXTtcblx0XHRcdFx0Y29uc3QgcHJpbWl0aXZlID0gcHJpbWl0aXZlc1sgaSBdO1xuXG5cdFx0XHRcdC8vIDEuIGNyZWF0ZSBNZXNoXG5cblx0XHRcdFx0bGV0IG1lc2g7XG5cblx0XHRcdFx0Y29uc3QgbWF0ZXJpYWwgPSBtYXRlcmlhbHNbIGkgXTtcblxuXHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVTIHx8XG5cdFx0XHRcdFx0XHRwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX1NUUklQIHx8XG5cdFx0XHRcdFx0XHRwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX0ZBTiB8fFxuXHRcdFx0XHRcdFx0cHJpbWl0aXZlLm1vZGUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdC8vIC5pc1NraW5uZWRNZXNoIGlzbid0IGluIGdsVEYgc3BlYy4gU2VlIC5fbWFya0RlZnMoKVxuXHRcdFx0XHRcdG1lc2ggPSBtZXNoRGVmLmlzU2tpbm5lZE1lc2ggPT09IHRydWVcblx0XHRcdFx0XHRcdD8gbmV3IFNraW5uZWRNZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKVxuXHRcdFx0XHRcdFx0OiBuZXcgTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0XHRpZiAoIG1lc2guaXNTa2lubmVkTWVzaCA9PT0gdHJ1ZSAmJiAhIG1lc2guZ2VvbWV0cnkuYXR0cmlidXRlcy5za2luV2VpZ2h0Lm5vcm1hbGl6ZWQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIHdlIG5vcm1hbGl6ZSBmbG9hdGluZyBwb2ludCBza2luIHdlaWdodCBhcnJheSB0byBmaXggbWFsZm9ybWVkIGFzc2V0cyAoc2VlICMxNTMxOSlcblx0XHRcdFx0XHRcdC8vIGl0J3MgaW1wb3J0YW50IHRvIHNraXAgdGhpcyBmb3Igbm9uLWZsb2F0MzIgZGF0YSBzaW5jZSBub3JtYWxpemVTa2luV2VpZ2h0cyBhc3N1bWVzIG5vbi1ub3JtYWxpemVkIGlucHV0c1xuXHRcdFx0XHRcdFx0bWVzaC5ub3JtYWxpemVTa2luV2VpZ2h0cygpO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX1NUUklQICkge1xuXG5cdFx0XHRcdFx0XHRtZXNoLmdlb21ldHJ5ID0gdG9UcmlhbmdsZXNEcmF3TW9kZSggbWVzaC5nZW9tZXRyeSwgVHJpYW5nbGVTdHJpcERyYXdNb2RlICk7XG5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX0ZBTiApIHtcblxuXHRcdFx0XHRcdFx0bWVzaC5nZW9tZXRyeSA9IHRvVHJpYW5nbGVzRHJhd01vZGUoIG1lc2guZ2VvbWV0cnksIFRyaWFuZ2xlRmFuRHJhd01vZGUgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLkxJTkVTICkge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBMaW5lU2VnbWVudHMoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuTElORV9TVFJJUCApIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgTGluZSggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5MSU5FX0xPT1AgKSB7XG5cblx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmVMb29wKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlBPSU5UUyApIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgUG9pbnRzKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogUHJpbWl0aXZlIG1vZGUgdW5zdXBwb3J0ZWQ6ICcgKyBwcmltaXRpdmUubW9kZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIE9iamVjdC5rZXlzKCBtZXNoLmdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyApLmxlbmd0aCA+IDAgKSB7XG5cblx0XHRcdFx0XHR1cGRhdGVNb3JwaFRhcmdldHMoIG1lc2gsIG1lc2hEZWYgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVzaC5uYW1lID0gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIG1lc2hEZWYubmFtZSB8fCAoICdtZXNoXycgKyBtZXNoSW5kZXggKSApO1xuXG5cdFx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG1lc2gsIG1lc2hEZWYgKTtcblxuXHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBtZXNoLCBwcmltaXRpdmUgKTtcblxuXHRcdFx0XHRwYXJzZXIuYXNzaWduRmluYWxNYXRlcmlhbCggbWVzaCApO1xuXG5cdFx0XHRcdG1lc2hlcy5wdXNoKCBtZXNoICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG1lc2hlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggbWVzaGVzWyBpIF0sIHtcblx0XHRcdFx0XHRtZXNoZXM6IG1lc2hJbmRleCxcblx0XHRcdFx0XHRwcmltaXRpdmVzOiBpXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG1lc2hlcy5sZW5ndGggPT09IDEgKSB7XG5cblx0XHRcdFx0cmV0dXJuIG1lc2hlc1sgMCBdO1xuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCBncm91cCwgeyBtZXNoZXM6IG1lc2hJbmRleCB9ICk7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBtZXNoZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Z3JvdXAuYWRkKCBtZXNoZXNbIGkgXSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBncm91cDtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNjYW1lcmFzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjYW1lcmFJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFRIUkVFLkNhbWVyYT59XG5cdCAqL1xuXHRsb2FkQ2FtZXJhKCBjYW1lcmFJbmRleCApIHtcblxuXHRcdGxldCBjYW1lcmE7XG5cdFx0Y29uc3QgY2FtZXJhRGVmID0gdGhpcy5qc29uLmNhbWVyYXNbIGNhbWVyYUluZGV4IF07XG5cdFx0Y29uc3QgcGFyYW1zID0gY2FtZXJhRGVmWyBjYW1lcmFEZWYudHlwZSBdO1xuXG5cdFx0aWYgKCAhIHBhcmFtcyApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBjYW1lcmEgcGFyYW1ldGVycy4nICk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHR9XG5cblx0XHRpZiAoIGNhbWVyYURlZi50eXBlID09PSAncGVyc3BlY3RpdmUnICkge1xuXG5cdFx0XHRjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoIE1hdGhVdGlscy5yYWRUb0RlZyggcGFyYW1zLnlmb3YgKSwgcGFyYW1zLmFzcGVjdFJhdGlvIHx8IDEsIHBhcmFtcy56bmVhciB8fCAxLCBwYXJhbXMuemZhciB8fCAyZTYgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGNhbWVyYURlZi50eXBlID09PSAnb3J0aG9ncmFwaGljJyApIHtcblxuXHRcdFx0Y2FtZXJhID0gbmV3IE9ydGhvZ3JhcGhpY0NhbWVyYSggLSBwYXJhbXMueG1hZywgcGFyYW1zLnhtYWcsIHBhcmFtcy55bWFnLCAtIHBhcmFtcy55bWFnLCBwYXJhbXMuem5lYXIsIHBhcmFtcy56ZmFyICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGNhbWVyYURlZi5uYW1lICkgY2FtZXJhLm5hbWUgPSB0aGlzLmNyZWF0ZVVuaXF1ZU5hbWUoIGNhbWVyYURlZi5uYW1lICk7XG5cblx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBjYW1lcmEsIGNhbWVyYURlZiApO1xuXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggY2FtZXJhICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2tpbnNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNraW5JbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG5cdCAqL1xuXHRsb2FkU2tpbiggc2tpbkluZGV4ICkge1xuXG5cdFx0Y29uc3Qgc2tpbkRlZiA9IHRoaXMuanNvbi5za2luc1sgc2tpbkluZGV4IF07XG5cblx0XHRjb25zdCBza2luRW50cnkgPSB7IGpvaW50czogc2tpbkRlZi5qb2ludHMgfTtcblxuXHRcdGlmICggc2tpbkRlZi5pbnZlcnNlQmluZE1hdHJpY2VzID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIHNraW5FbnRyeSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgc2tpbkRlZi5pbnZlcnNlQmluZE1hdHJpY2VzICkudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvciApIHtcblxuXHRcdFx0c2tpbkVudHJ5LmludmVyc2VCaW5kTWF0cmljZXMgPSBhY2Nlc3NvcjtcblxuXHRcdFx0cmV0dXJuIHNraW5FbnRyeTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNhbmltYXRpb25zXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBhbmltYXRpb25JbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFuaW1hdGlvbkNsaXA+fVxuXHQgKi9cblx0bG9hZEFuaW1hdGlvbiggYW5pbWF0aW9uSW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXG5cdFx0Y29uc3QgYW5pbWF0aW9uRGVmID0ganNvbi5hbmltYXRpb25zWyBhbmltYXRpb25JbmRleCBdO1xuXG5cdFx0Y29uc3QgcGVuZGluZ05vZGVzID0gW107XG5cdFx0Y29uc3QgcGVuZGluZ0lucHV0QWNjZXNzb3JzID0gW107XG5cdFx0Y29uc3QgcGVuZGluZ091dHB1dEFjY2Vzc29ycyA9IFtdO1xuXHRcdGNvbnN0IHBlbmRpbmdTYW1wbGVycyA9IFtdO1xuXHRcdGNvbnN0IHBlbmRpbmdUYXJnZXRzID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gYW5pbWF0aW9uRGVmLmNoYW5uZWxzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCBjaGFubmVsID0gYW5pbWF0aW9uRGVmLmNoYW5uZWxzWyBpIF07XG5cdFx0XHRjb25zdCBzYW1wbGVyID0gYW5pbWF0aW9uRGVmLnNhbXBsZXJzWyBjaGFubmVsLnNhbXBsZXIgXTtcblx0XHRcdGNvbnN0IHRhcmdldCA9IGNoYW5uZWwudGFyZ2V0O1xuXHRcdFx0Y29uc3QgbmFtZSA9IHRhcmdldC5ub2RlICE9PSB1bmRlZmluZWQgPyB0YXJnZXQubm9kZSA6IHRhcmdldC5pZDsgLy8gTk9URTogdGFyZ2V0LmlkIGlzIGRlcHJlY2F0ZWQuXG5cdFx0XHRjb25zdCBpbnB1dCA9IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzICE9PSB1bmRlZmluZWQgPyBhbmltYXRpb25EZWYucGFyYW1ldGVyc1sgc2FtcGxlci5pbnB1dCBdIDogc2FtcGxlci5pbnB1dDtcblx0XHRcdGNvbnN0IG91dHB1dCA9IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzICE9PSB1bmRlZmluZWQgPyBhbmltYXRpb25EZWYucGFyYW1ldGVyc1sgc2FtcGxlci5vdXRwdXQgXSA6IHNhbXBsZXIub3V0cHV0O1xuXG5cdFx0XHRwZW5kaW5nTm9kZXMucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnbm9kZScsIG5hbWUgKSApO1xuXHRcdFx0cGVuZGluZ0lucHV0QWNjZXNzb3JzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgaW5wdXQgKSApO1xuXHRcdFx0cGVuZGluZ091dHB1dEFjY2Vzc29ycy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIG91dHB1dCApICk7XG5cdFx0XHRwZW5kaW5nU2FtcGxlcnMucHVzaCggc2FtcGxlciApO1xuXHRcdFx0cGVuZGluZ1RhcmdldHMucHVzaCggdGFyZ2V0ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcblxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdOb2RlcyApLFxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdJbnB1dEFjY2Vzc29ycyApLFxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdPdXRwdXRBY2Nlc3NvcnMgKSxcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nU2FtcGxlcnMgKSxcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nVGFyZ2V0cyApXG5cblx0XHRdICkudGhlbiggZnVuY3Rpb24gKCBkZXBlbmRlbmNpZXMgKSB7XG5cblx0XHRcdGNvbnN0IG5vZGVzID0gZGVwZW5kZW5jaWVzWyAwIF07XG5cdFx0XHRjb25zdCBpbnB1dEFjY2Vzc29ycyA9IGRlcGVuZGVuY2llc1sgMSBdO1xuXHRcdFx0Y29uc3Qgb3V0cHV0QWNjZXNzb3JzID0gZGVwZW5kZW5jaWVzWyAyIF07XG5cdFx0XHRjb25zdCBzYW1wbGVycyA9IGRlcGVuZGVuY2llc1sgMyBdO1xuXHRcdFx0Y29uc3QgdGFyZ2V0cyA9IGRlcGVuZGVuY2llc1sgNCBdO1xuXG5cdFx0XHRjb25zdCB0cmFja3MgPSBbXTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGNvbnN0IG5vZGUgPSBub2Rlc1sgaSBdO1xuXHRcdFx0XHRjb25zdCBpbnB1dEFjY2Vzc29yID0gaW5wdXRBY2Nlc3NvcnNbIGkgXTtcblx0XHRcdFx0Y29uc3Qgb3V0cHV0QWNjZXNzb3IgPSBvdXRwdXRBY2Nlc3NvcnNbIGkgXTtcblx0XHRcdFx0Y29uc3Qgc2FtcGxlciA9IHNhbXBsZXJzWyBpIF07XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IHRhcmdldHNbIGkgXTtcblxuXHRcdFx0XHRpZiAoIG5vZGUgPT09IHVuZGVmaW5lZCApIGNvbnRpbnVlO1xuXG5cdFx0XHRcdG5vZGUudXBkYXRlTWF0cml4KCk7XG5cdFx0XHRcdG5vZGUubWF0cml4QXV0b1VwZGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0bGV0IFR5cGVkS2V5ZnJhbWVUcmFjaztcblxuXHRcdFx0XHRzd2l0Y2ggKCBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0gKSB7XG5cblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy53ZWlnaHRzOlxuXG5cdFx0XHRcdFx0XHRUeXBlZEtleWZyYW1lVHJhY2sgPSBOdW1iZXJLZXlmcmFtZVRyYWNrO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy5yb3RhdGlvbjpcblxuXHRcdFx0XHRcdFx0VHlwZWRLZXlmcmFtZVRyYWNrID0gUXVhdGVybmlvbktleWZyYW1lVHJhY2s7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnBvc2l0aW9uOlxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnNjYWxlOlxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRcdFR5cGVkS2V5ZnJhbWVUcmFjayA9IFZlY3RvcktleWZyYW1lVHJhY2s7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgdGFyZ2V0TmFtZSA9IG5vZGUubmFtZSA/IG5vZGUubmFtZSA6IG5vZGUudXVpZDtcblxuXHRcdFx0XHRjb25zdCBpbnRlcnBvbGF0aW9uID0gc2FtcGxlci5pbnRlcnBvbGF0aW9uICE9PSB1bmRlZmluZWQgPyBJTlRFUlBPTEFUSU9OWyBzYW1wbGVyLmludGVycG9sYXRpb24gXSA6IEludGVycG9sYXRlTGluZWFyO1xuXG5cdFx0XHRcdGNvbnN0IHRhcmdldE5hbWVzID0gW107XG5cblx0XHRcdFx0aWYgKCBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0gPT09IFBBVEhfUFJPUEVSVElFUy53ZWlnaHRzICkge1xuXG5cdFx0XHRcdFx0bm9kZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggb2JqZWN0Lm1vcnBoVGFyZ2V0SW5mbHVlbmNlcyApIHtcblxuXHRcdFx0XHRcdFx0XHR0YXJnZXROYW1lcy5wdXNoKCBvYmplY3QubmFtZSA/IG9iamVjdC5uYW1lIDogb2JqZWN0LnV1aWQgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHR0YXJnZXROYW1lcy5wdXNoKCB0YXJnZXROYW1lICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBvdXRwdXRBcnJheSA9IG91dHB1dEFjY2Vzc29yLmFycmF5O1xuXG5cdFx0XHRcdGlmICggb3V0cHV0QWNjZXNzb3Iubm9ybWFsaXplZCApIHtcblxuXHRcdFx0XHRcdGNvbnN0IHNjYWxlID0gZ2V0Tm9ybWFsaXplZENvbXBvbmVudFNjYWxlKCBvdXRwdXRBcnJheS5jb25zdHJ1Y3RvciApO1xuXHRcdFx0XHRcdGNvbnN0IHNjYWxlZCA9IG5ldyBGbG9hdDMyQXJyYXkoIG91dHB1dEFycmF5Lmxlbmd0aCApO1xuXG5cdFx0XHRcdFx0Zm9yICggbGV0IGogPSAwLCBqbCA9IG91dHB1dEFycmF5Lmxlbmd0aDsgaiA8IGpsOyBqICsrICkge1xuXG5cdFx0XHRcdFx0XHRzY2FsZWRbIGogXSA9IG91dHB1dEFycmF5WyBqIF0gKiBzY2FsZTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG91dHB1dEFycmF5ID0gc2NhbGVkO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKCBsZXQgaiA9IDAsIGpsID0gdGFyZ2V0TmFtZXMubGVuZ3RoOyBqIDwgamw7IGogKysgKSB7XG5cblx0XHRcdFx0XHRjb25zdCB0cmFjayA9IG5ldyBUeXBlZEtleWZyYW1lVHJhY2soXG5cdFx0XHRcdFx0XHR0YXJnZXROYW1lc1sgaiBdICsgJy4nICsgUEFUSF9QUk9QRVJUSUVTWyB0YXJnZXQucGF0aCBdLFxuXHRcdFx0XHRcdFx0aW5wdXRBY2Nlc3Nvci5hcnJheSxcblx0XHRcdFx0XHRcdG91dHB1dEFycmF5LFxuXHRcdFx0XHRcdFx0aW50ZXJwb2xhdGlvblxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHQvLyBPdmVycmlkZSBpbnRlcnBvbGF0aW9uIHdpdGggY3VzdG9tIGZhY3RvcnkgbWV0aG9kLlxuXHRcdFx0XHRcdGlmICggc2FtcGxlci5pbnRlcnBvbGF0aW9uID09PSAnQ1VCSUNTUExJTkUnICkge1xuXG5cdFx0XHRcdFx0XHR0cmFjay5jcmVhdGVJbnRlcnBvbGFudCA9IGZ1bmN0aW9uIEludGVycG9sYW50RmFjdG9yeU1ldGhvZEdMVEZDdWJpY1NwbGluZSggcmVzdWx0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEEgQ1VCSUNTUExJTkUga2V5ZnJhbWUgaW4gZ2xURiBoYXMgdGhyZWUgb3V0cHV0IHZhbHVlcyBmb3IgZWFjaCBpbnB1dCB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0Ly8gcmVwcmVzZW50aW5nIGluVGFuZ2VudCwgc3BsaW5lVmVydGV4LCBhbmQgb3V0VGFuZ2VudC4gQXMgYSByZXN1bHQsIHRyYWNrLmdldFZhbHVlU2l6ZSgpXG5cdFx0XHRcdFx0XHRcdC8vIG11c3QgYmUgZGl2aWRlZCBieSB0aHJlZSB0byBnZXQgdGhlIGludGVycG9sYW50J3Mgc2FtcGxlU2l6ZSBhcmd1bWVudC5cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBpbnRlcnBvbGFudFR5cGUgPSAoIHRoaXMgaW5zdGFuY2VvZiBRdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjayApID8gR0xURkN1YmljU3BsaW5lUXVhdGVybmlvbkludGVycG9sYW50IDogR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQ7XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBpbnRlcnBvbGFudFR5cGUoIHRoaXMudGltZXMsIHRoaXMudmFsdWVzLCB0aGlzLmdldFZhbHVlU2l6ZSgpIC8gMywgcmVzdWx0ICk7XG5cblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdC8vIE1hcmsgYXMgQ1VCSUNTUExJTkUuIGB0cmFjay5nZXRJbnRlcnBvbGF0aW9uKClgIGRvZXNuJ3Qgc3VwcG9ydCBjdXN0b20gaW50ZXJwb2xhbnRzLlxuXHRcdFx0XHRcdFx0dHJhY2suY3JlYXRlSW50ZXJwb2xhbnQuaXNJbnRlcnBvbGFudEZhY3RvcnlNZXRob2RHTFRGQ3ViaWNTcGxpbmUgPSB0cnVlO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dHJhY2tzLnB1c2goIHRyYWNrICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG5hbWUgPSBhbmltYXRpb25EZWYubmFtZSA/IGFuaW1hdGlvbkRlZi5uYW1lIDogJ2FuaW1hdGlvbl8nICsgYW5pbWF0aW9uSW5kZXg7XG5cblx0XHRcdHJldHVybiBuZXcgQW5pbWF0aW9uQ2xpcCggbmFtZSwgdW5kZWZpbmVkLCB0cmFja3MgKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0Y3JlYXRlTm9kZU1lc2goIG5vZGVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHRpZiAoIG5vZGVEZWYubWVzaCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdtZXNoJywgbm9kZURlZi5tZXNoICkudGhlbiggZnVuY3Rpb24gKCBtZXNoICkge1xuXG5cdFx0XHRjb25zdCBub2RlID0gcGFyc2VyLl9nZXROb2RlUmVmKCBwYXJzZXIubWVzaENhY2hlLCBub2RlRGVmLm1lc2gsIG1lc2ggKTtcblxuXHRcdFx0Ly8gaWYgd2VpZ2h0cyBhcmUgcHJvdmlkZWQgb24gdGhlIG5vZGUsIG92ZXJyaWRlIHdlaWdodHMgb24gdGhlIG1lc2guXG5cdFx0XHRpZiAoIG5vZGVEZWYud2VpZ2h0cyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdG5vZGUudHJhdmVyc2UoIGZ1bmN0aW9uICggbyApIHtcblxuXHRcdFx0XHRcdGlmICggISBvLmlzTWVzaCApIHJldHVybjtcblxuXHRcdFx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBub2RlRGVmLndlaWdodHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0XHRcdG8ubW9ycGhUYXJnZXRJbmZsdWVuY2VzWyBpIF0gPSBub2RlRGVmLndlaWdodHNbIGkgXTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjbm9kZXMtYW5kLWhpZXJhcmNoeVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0M0Q+fVxuXHQgKi9cblx0bG9hZE5vZGUoIG5vZGVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXG5cdFx0Y29uc3Qgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJbmRleCBdO1xuXG5cdFx0Ly8gcmVzZXJ2ZSBub2RlJ3MgbmFtZSBiZWZvcmUgaXRzIGRlcGVuZGVuY2llcywgc28gdGhlIHJvb3QgaGFzIHRoZSBpbnRlbmRlZCBuYW1lLlxuXHRcdGNvbnN0IG5vZGVOYW1lID0gbm9kZURlZi5uYW1lID8gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIG5vZGVEZWYubmFtZSApIDogJyc7XG5cblx0XHRyZXR1cm4gKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdFx0Y29uc3QgbWVzaFByb21pc2UgPSBwYXJzZXIuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5jcmVhdGVOb2RlTWVzaCAmJiBleHQuY3JlYXRlTm9kZU1lc2goIG5vZGVJbmRleCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHRcdGlmICggbWVzaFByb21pc2UgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBtZXNoUHJvbWlzZSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZURlZi5jYW1lcmEgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnY2FtZXJhJywgbm9kZURlZi5jYW1lcmEgKS50aGVuKCBmdW5jdGlvbiAoIGNhbWVyYSApIHtcblxuXHRcdFx0XHRcdHJldHVybiBwYXJzZXIuX2dldE5vZGVSZWYoIHBhcnNlci5jYW1lcmFDYWNoZSwgbm9kZURlZi5jYW1lcmEsIGNhbWVyYSApO1xuXG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHBhcnNlci5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmNyZWF0ZU5vZGVBdHRhY2htZW50ICYmIGV4dC5jcmVhdGVOb2RlQXR0YWNobWVudCggbm9kZUluZGV4ICk7XG5cblx0XHRcdH0gKS5mb3JFYWNoKCBmdW5jdGlvbiAoIHByb21pc2UgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwcm9taXNlICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0XHR9KCkgKS50aGVuKCBmdW5jdGlvbiAoIG9iamVjdHMgKSB7XG5cblx0XHRcdGxldCBub2RlO1xuXG5cdFx0XHQvLyAuaXNCb25lIGlzbid0IGluIGdsVEYgc3BlYy4gU2VlIC5fbWFya0RlZnNcblx0XHRcdGlmICggbm9kZURlZi5pc0JvbmUgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0bm9kZSA9IG5ldyBCb25lKCk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIG9iamVjdHMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0XHRub2RlID0gbmV3IEdyb3VwKCk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIG9iamVjdHMubGVuZ3RoID09PSAxICkge1xuXG5cdFx0XHRcdG5vZGUgPSBvYmplY3RzWyAwIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bm9kZSA9IG5ldyBPYmplY3QzRCgpO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZSAhPT0gb2JqZWN0c1sgMCBdICkge1xuXG5cdFx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBvYmplY3RzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdFx0bm9kZS5hZGQoIG9iamVjdHNbIGkgXSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5vZGVEZWYubmFtZSApIHtcblxuXHRcdFx0XHRub2RlLnVzZXJEYXRhLm5hbWUgPSBub2RlRGVmLm5hbWU7XG5cdFx0XHRcdG5vZGUubmFtZSA9IG5vZGVOYW1lO1xuXG5cdFx0XHR9XG5cblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG5vZGUsIG5vZGVEZWYgKTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIG5vZGUsIG5vZGVEZWYgKTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLm1hdHJpeCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IG1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7XG5cdFx0XHRcdG1hdHJpeC5mcm9tQXJyYXkoIG5vZGVEZWYubWF0cml4ICk7XG5cdFx0XHRcdG5vZGUuYXBwbHlNYXRyaXg0KCBtYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAoIG5vZGVEZWYudHJhbnNsYXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdG5vZGUucG9zaXRpb24uZnJvbUFycmF5KCBub2RlRGVmLnRyYW5zbGF0aW9uICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggbm9kZURlZi5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0bm9kZS5xdWF0ZXJuaW9uLmZyb21BcnJheSggbm9kZURlZi5yb3RhdGlvbiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIG5vZGVEZWYuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdG5vZGUuc2NhbGUuZnJvbUFycmF5KCBub2RlRGVmLnNjYWxlICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggISBwYXJzZXIuYXNzb2NpYXRpb25zLmhhcyggbm9kZSApICkge1xuXG5cdFx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCBub2RlLCB7fSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuZ2V0KCBub2RlICkubm9kZXMgPSBub2RlSW5kZXg7XG5cblx0XHRcdHJldHVybiBub2RlO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3NjZW5lc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gc2NlbmVJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEdyb3VwPn1cblx0ICovXG5cdGxvYWRTY2VuZSggc2NlbmVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBzY2VuZURlZiA9IHRoaXMuanNvbi5zY2VuZXNbIHNjZW5lSW5kZXggXTtcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXG5cdFx0Ly8gTG9hZGVyIHJldHVybnMgR3JvdXAsIG5vdCBTY2VuZS5cblx0XHQvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE4MzQyI2lzc3VlY29tbWVudC01Nzg5ODExNzJcblx0XHRjb25zdCBzY2VuZSA9IG5ldyBHcm91cCgpO1xuXHRcdGlmICggc2NlbmVEZWYubmFtZSApIHNjZW5lLm5hbWUgPSBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggc2NlbmVEZWYubmFtZSApO1xuXG5cdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggc2NlbmUsIHNjZW5lRGVmICk7XG5cblx0XHRpZiAoIHNjZW5lRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIHNjZW5lLCBzY2VuZURlZiApO1xuXG5cdFx0Y29uc3Qgbm9kZUlkcyA9IHNjZW5lRGVmLm5vZGVzIHx8IFtdO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG5vZGVJZHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggYnVpbGROb2RlSGllcmFyY2h5KCBub2RlSWRzWyBpIF0sIHNjZW5lLCBqc29uLCBwYXJzZXIgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHQvLyBSZW1vdmVzIGRhbmdsaW5nIGFzc29jaWF0aW9ucywgYXNzb2NpYXRpb25zIHRoYXQgcmVmZXJlbmNlIGEgbm9kZSB0aGF0XG5cdFx0XHQvLyBkaWRuJ3QgbWFrZSBpdCBpbnRvIHRoZSBzY2VuZS5cblx0XHRcdGNvbnN0IHJlZHVjZUFzc29jaWF0aW9ucyA9ICggbm9kZSApID0+IHtcblxuXHRcdFx0XHRjb25zdCByZWR1Y2VkQXNzb2NpYXRpb25zID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRcdGZvciAoIGNvbnN0IFsga2V5LCB2YWx1ZSBdIG9mIHBhcnNlci5hc3NvY2lhdGlvbnMgKSB7XG5cblx0XHRcdFx0XHRpZiAoIGtleSBpbnN0YW5jZW9mIE1hdGVyaWFsIHx8IGtleSBpbnN0YW5jZW9mIFRleHR1cmUgKSB7XG5cblx0XHRcdFx0XHRcdHJlZHVjZWRBc3NvY2lhdGlvbnMuc2V0KCBrZXksIHZhbHVlICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdG5vZGUudHJhdmVyc2UoICggbm9kZSApID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IG1hcHBpbmdzID0gcGFyc2VyLmFzc29jaWF0aW9ucy5nZXQoIG5vZGUgKTtcblxuXHRcdFx0XHRcdGlmICggbWFwcGluZ3MgIT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdFx0cmVkdWNlZEFzc29jaWF0aW9ucy5zZXQoIG5vZGUsIG1hcHBpbmdzICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdHJldHVybiByZWR1Y2VkQXNzb2NpYXRpb25zO1xuXG5cdFx0XHR9O1xuXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zID0gcmVkdWNlQXNzb2NpYXRpb25zKCBzY2VuZSApO1xuXG5cdFx0XHRyZXR1cm4gc2NlbmU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTm9kZUhpZXJhcmNoeSggbm9kZUlkLCBwYXJlbnRPYmplY3QsIGpzb24sIHBhcnNlciApIHtcblxuXHRjb25zdCBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUlkIF07XG5cblx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnbm9kZScsIG5vZGVJZCApLnRoZW4oIGZ1bmN0aW9uICggbm9kZSApIHtcblxuXHRcdGlmICggbm9kZURlZi5za2luID09PSB1bmRlZmluZWQgKSByZXR1cm4gbm9kZTtcblxuXHRcdC8vIGJ1aWxkIHNrZWxldG9uIGhlcmUgYXMgd2VsbFxuXG5cdFx0bGV0IHNraW5FbnRyeTtcblxuXHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ3NraW4nLCBub2RlRGVmLnNraW4gKS50aGVuKCBmdW5jdGlvbiAoIHNraW4gKSB7XG5cblx0XHRcdHNraW5FbnRyeSA9IHNraW47XG5cblx0XHRcdGNvbnN0IHBlbmRpbmdKb2ludHMgPSBbXTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHNraW5FbnRyeS5qb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0cGVuZGluZ0pvaW50cy5wdXNoKCBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ25vZGUnLCBza2luRW50cnkuam9pbnRzWyBpIF0gKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZ0pvaW50cyApO1xuXG5cdFx0fSApLnRoZW4oIGZ1bmN0aW9uICggam9pbnROb2RlcyApIHtcblxuXHRcdFx0bm9kZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBtZXNoICkge1xuXG5cdFx0XHRcdGlmICggISBtZXNoLmlzTWVzaCApIHJldHVybjtcblxuXHRcdFx0XHRjb25zdCBib25lcyA9IFtdO1xuXHRcdFx0XHRjb25zdCBib25lSW52ZXJzZXMgPSBbXTtcblxuXHRcdFx0XHRmb3IgKCBsZXQgaiA9IDAsIGpsID0gam9pbnROb2Rlcy5sZW5ndGg7IGogPCBqbDsgaiArKyApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGpvaW50Tm9kZSA9IGpvaW50Tm9kZXNbIGogXTtcblxuXHRcdFx0XHRcdGlmICggam9pbnROb2RlICkge1xuXG5cdFx0XHRcdFx0XHRib25lcy5wdXNoKCBqb2ludE5vZGUgKTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgbWF0ID0gbmV3IE1hdHJpeDQoKTtcblxuXHRcdFx0XHRcdFx0aWYgKCBza2luRW50cnkuaW52ZXJzZUJpbmRNYXRyaWNlcyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0XHRcdG1hdC5mcm9tQXJyYXkoIHNraW5FbnRyeS5pbnZlcnNlQmluZE1hdHJpY2VzLmFycmF5LCBqICogMTYgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRib25lSW52ZXJzZXMucHVzaCggbWF0ICk7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBKb2ludCBcIiVzXCIgY291bGQgbm90IGJlIGZvdW5kLicsIHNraW5FbnRyeS5qb2ludHNbIGogXSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtZXNoLmJpbmQoIG5ldyBTa2VsZXRvbiggYm9uZXMsIGJvbmVJbnZlcnNlcyApLCBtZXNoLm1hdHJpeFdvcmxkICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHR9ICk7XG5cblx0fSApLnRoZW4oIGZ1bmN0aW9uICggbm9kZSApIHtcblxuXHRcdC8vIGJ1aWxkIG5vZGUgaGllcmFjaHlcblxuXHRcdHBhcmVudE9iamVjdC5hZGQoIG5vZGUgKTtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGlmICggbm9kZURlZi5jaGlsZHJlbiApIHtcblxuXHRcdFx0Y29uc3QgY2hpbGRyZW4gPSBub2RlRGVmLmNoaWxkcmVuO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Y29uc3QgY2hpbGQgPSBjaGlsZHJlblsgaSBdO1xuXHRcdFx0XHRwZW5kaW5nLnB1c2goIGJ1aWxkTm9kZUhpZXJhcmNoeSggY2hpbGQsIG5vZGUsIGpzb24sIHBhcnNlciApICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH0gKTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XG4gKiBAcGFyYW0ge0dMVEYuUHJpbWl0aXZlfSBwcmltaXRpdmVEZWZcbiAqIEBwYXJhbSB7R0xURlBhcnNlcn0gcGFyc2VyXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVCb3VuZHMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlciApIHtcblxuXHRjb25zdCBhdHRyaWJ1dGVzID0gcHJpbWl0aXZlRGVmLmF0dHJpYnV0ZXM7XG5cblx0Y29uc3QgYm94ID0gbmV3IEJveDMoKTtcblxuXHRpZiAoIGF0dHJpYnV0ZXMuUE9TSVRJT04gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGNvbnN0IGFjY2Vzc29yID0gcGFyc2VyLmpzb24uYWNjZXNzb3JzWyBhdHRyaWJ1dGVzLlBPU0lUSU9OIF07XG5cblx0XHRjb25zdCBtaW4gPSBhY2Nlc3Nvci5taW47XG5cdFx0Y29uc3QgbWF4ID0gYWNjZXNzb3IubWF4O1xuXG5cdFx0Ly8gZ2xURiByZXF1aXJlcyAnbWluJyBhbmQgJ21heCcsIGJ1dCBWUk0gKHdoaWNoIGV4dGVuZHMgZ2xURikgY3VycmVudGx5IGlnbm9yZXMgdGhhdCByZXF1aXJlbWVudC5cblxuXHRcdGlmICggbWluICE9PSB1bmRlZmluZWQgJiYgbWF4ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGJveC5zZXQoXG5cdFx0XHRcdG5ldyBWZWN0b3IzKCBtaW5bIDAgXSwgbWluWyAxIF0sIG1pblsgMiBdICksXG5cdFx0XHRcdG5ldyBWZWN0b3IzKCBtYXhbIDAgXSwgbWF4WyAxIF0sIG1heFsgMiBdIClcblx0XHRcdCk7XG5cblx0XHRcdGlmICggYWNjZXNzb3Iubm9ybWFsaXplZCApIHtcblxuXHRcdFx0XHRjb25zdCBib3hTY2FsZSA9IGdldE5vcm1hbGl6ZWRDb21wb25lbnRTY2FsZSggV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3Nvci5jb21wb25lbnRUeXBlIF0gKTtcblx0XHRcdFx0Ym94Lm1pbi5tdWx0aXBseVNjYWxhciggYm94U2NhbGUgKTtcblx0XHRcdFx0Ym94Lm1heC5tdWx0aXBseVNjYWxhciggYm94U2NhbGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBtaW4vbWF4IHByb3BlcnRpZXMgZm9yIGFjY2Vzc29yIFBPU0lUSU9OLicgKTtcblxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0fVxuXG5cdH0gZWxzZSB7XG5cblx0XHRyZXR1cm47XG5cblx0fVxuXG5cdGNvbnN0IHRhcmdldHMgPSBwcmltaXRpdmVEZWYudGFyZ2V0cztcblxuXHRpZiAoIHRhcmdldHMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGNvbnN0IG1heERpc3BsYWNlbWVudCA9IG5ldyBWZWN0b3IzKCk7XG5cdFx0Y29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcjMoKTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XG5cblx0XHRcdGlmICggdGFyZ2V0LlBPU0lUSU9OICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Y29uc3QgYWNjZXNzb3IgPSBwYXJzZXIuanNvbi5hY2Nlc3NvcnNbIHRhcmdldC5QT1NJVElPTiBdO1xuXHRcdFx0XHRjb25zdCBtaW4gPSBhY2Nlc3Nvci5taW47XG5cdFx0XHRcdGNvbnN0IG1heCA9IGFjY2Vzc29yLm1heDtcblxuXHRcdFx0XHQvLyBnbFRGIHJlcXVpcmVzICdtaW4nIGFuZCAnbWF4JywgYnV0IFZSTSAod2hpY2ggZXh0ZW5kcyBnbFRGKSBjdXJyZW50bHkgaWdub3JlcyB0aGF0IHJlcXVpcmVtZW50LlxuXG5cdFx0XHRcdGlmICggbWluICE9PSB1bmRlZmluZWQgJiYgbWF4ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGdldCBtYXggb2YgYWJzb2x1dGUgY29tcG9uZW50cyBiZWNhdXNlIHRhcmdldCB3ZWlnaHQgaXMgWy0xLDFdXG5cdFx0XHRcdFx0dmVjdG9yLnNldFgoIE1hdGgubWF4KCBNYXRoLmFicyggbWluWyAwIF0gKSwgTWF0aC5hYnMoIG1heFsgMCBdICkgKSApO1xuXHRcdFx0XHRcdHZlY3Rvci5zZXRZKCBNYXRoLm1heCggTWF0aC5hYnMoIG1pblsgMSBdICksIE1hdGguYWJzKCBtYXhbIDEgXSApICkgKTtcblx0XHRcdFx0XHR2ZWN0b3Iuc2V0WiggTWF0aC5tYXgoIE1hdGguYWJzKCBtaW5bIDIgXSApLCBNYXRoLmFicyggbWF4WyAyIF0gKSApICk7XG5cblxuXHRcdFx0XHRcdGlmICggYWNjZXNzb3Iubm9ybWFsaXplZCApIHtcblxuXHRcdFx0XHRcdFx0Y29uc3QgYm94U2NhbGUgPSBnZXROb3JtYWxpemVkQ29tcG9uZW50U2NhbGUoIFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3IuY29tcG9uZW50VHlwZSBdICk7XG5cdFx0XHRcdFx0XHR2ZWN0b3IubXVsdGlwbHlTY2FsYXIoIGJveFNjYWxlICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBOb3RlOiB0aGlzIGFzc3VtZXMgdGhhdCB0aGUgc3VtIG9mIGFsbCB3ZWlnaHRzIGlzIGF0IG1vc3QgMS4gVGhpcyBpc24ndCBxdWl0ZSBjb3JyZWN0IC0gaXQncyBtb3JlIGNvbnNlcnZhdGl2ZVxuXHRcdFx0XHRcdC8vIHRvIGFzc3VtZSB0aGF0IGVhY2ggdGFyZ2V0IGNhbiBoYXZlIGEgbWF4IHdlaWdodCBvZiAxLiBIb3dldmVyLCBmb3Igc29tZSB1c2UgY2FzZXMgLSBub3RhYmx5LCB3aGVuIG1vcnBoIHRhcmdldHNcblx0XHRcdFx0XHQvLyBhcmUgdXNlZCB0byBpbXBsZW1lbnQga2V5LWZyYW1lIGFuaW1hdGlvbnMgYW5kIGFzIHN1Y2ggb25seSB0d28gYXJlIGFjdGl2ZSBhdCBhIHRpbWUgLSB0aGlzIHJlc3VsdHMgaW4gdmVyeSBsYXJnZVxuXHRcdFx0XHRcdC8vIGJveGVzLiBTbyBmb3Igbm93IHdlIG1ha2UgYSBib3ggdGhhdCdzIHNvbWV0aW1lcyBhIHRvdWNoIHRvbyBzbWFsbCBidXQgaXMgaG9wZWZ1bGx5IG1vc3RseSBvZiByZWFzb25hYmxlIHNpemUuXG5cdFx0XHRcdFx0bWF4RGlzcGxhY2VtZW50Lm1heCggdmVjdG9yICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IE1pc3NpbmcgbWluL21heCBwcm9wZXJ0aWVzIGZvciBhY2Nlc3NvciBQT1NJVElPTi4nICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvLyBBcyBwZXIgY29tbWVudCBhYm92ZSB0aGlzIGJveCBpc24ndCBjb25zZXJ2YXRpdmUsIGJ1dCBoYXMgYSByZWFzb25hYmxlIHNpemUgZm9yIGEgdmVyeSBsYXJnZSBudW1iZXIgb2YgbW9ycGggdGFyZ2V0cy5cblx0XHRib3guZXhwYW5kQnlWZWN0b3IoIG1heERpc3BsYWNlbWVudCApO1xuXG5cdH1cblxuXHRnZW9tZXRyeS5ib3VuZGluZ0JveCA9IGJveDtcblxuXHRjb25zdCBzcGhlcmUgPSBuZXcgU3BoZXJlKCk7XG5cblx0Ym94LmdldENlbnRlciggc3BoZXJlLmNlbnRlciApO1xuXHRzcGhlcmUucmFkaXVzID0gYm94Lm1pbi5kaXN0YW5jZVRvKCBib3gubWF4ICkgLyAyO1xuXG5cdGdlb21ldHJ5LmJvdW5kaW5nU3BoZXJlID0gc3BoZXJlO1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7R0xURi5QcmltaXRpdmV9IHByaW1pdGl2ZURlZlxuICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcbiAqIEByZXR1cm4ge1Byb21pc2U8QnVmZmVyR2VvbWV0cnk+fVxuICovXG5mdW5jdGlvbiBhZGRQcmltaXRpdmVBdHRyaWJ1dGVzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLCBwYXJzZXIgKSB7XG5cblx0Y29uc3QgYXR0cmlidXRlcyA9IHByaW1pdGl2ZURlZi5hdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRmdW5jdGlvbiBhc3NpZ25BdHRyaWJ1dGVBY2Nlc3NvciggYWNjZXNzb3JJbmRleCwgYXR0cmlidXRlTmFtZSApIHtcblxuXHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgYWNjZXNzb3JJbmRleCApXG5cdFx0XHQudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvciApIHtcblxuXHRcdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoIGF0dHJpYnV0ZU5hbWUsIGFjY2Vzc29yICk7XG5cblx0XHRcdH0gKTtcblxuXHR9XG5cblx0Zm9yICggY29uc3QgZ2x0ZkF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcyApIHtcblxuXHRcdGNvbnN0IHRocmVlQXR0cmlidXRlTmFtZSA9IEFUVFJJQlVURVNbIGdsdGZBdHRyaWJ1dGVOYW1lIF0gfHwgZ2x0ZkF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdC8vIFNraXAgYXR0cmlidXRlcyBhbHJlYWR5IHByb3ZpZGVkIGJ5IGUuZy4gRHJhY28gZXh0ZW5zaW9uLlxuXHRcdGlmICggdGhyZWVBdHRyaWJ1dGVOYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSBjb250aW51ZTtcblxuXHRcdHBlbmRpbmcucHVzaCggYXNzaWduQXR0cmlidXRlQWNjZXNzb3IoIGF0dHJpYnV0ZXNbIGdsdGZBdHRyaWJ1dGVOYW1lIF0sIHRocmVlQXR0cmlidXRlTmFtZSApICk7XG5cblx0fVxuXG5cdGlmICggcHJpbWl0aXZlRGVmLmluZGljZXMgIT09IHVuZGVmaW5lZCAmJiAhIGdlb21ldHJ5LmluZGV4ICkge1xuXG5cdFx0Y29uc3QgYWNjZXNzb3IgPSBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgcHJpbWl0aXZlRGVmLmluZGljZXMgKS50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29yICkge1xuXG5cdFx0XHRnZW9tZXRyeS5zZXRJbmRleCggYWNjZXNzb3IgKTtcblxuXHRcdH0gKTtcblxuXHRcdHBlbmRpbmcucHVzaCggYWNjZXNzb3IgKTtcblxuXHR9XG5cblx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiApO1xuXG5cdGNvbXB1dGVCb3VuZHMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlciApO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBwcmltaXRpdmVEZWYudGFyZ2V0cyAhPT0gdW5kZWZpbmVkXG5cdFx0XHQ/IGFkZE1vcnBoVGFyZ2V0cyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZi50YXJnZXRzLCBwYXJzZXIgKVxuXHRcdFx0OiBnZW9tZXRyeTtcblxuXHR9ICk7XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxuICogQHBhcmFtIHtOdW1iZXJ9IGRyYXdNb2RlXG4gKiBAcmV0dXJuIHtCdWZmZXJHZW9tZXRyeX1cbiAqL1xuZnVuY3Rpb24gdG9UcmlhbmdsZXNEcmF3TW9kZSggZ2VvbWV0cnksIGRyYXdNb2RlICkge1xuXG5cdGxldCBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XG5cblx0Ly8gZ2VuZXJhdGUgaW5kZXggaWYgbm90IHByZXNlbnRcblxuXHRpZiAoIGluZGV4ID09PSBudWxsICkge1xuXG5cdFx0Y29uc3QgaW5kaWNlcyA9IFtdO1xuXG5cdFx0Y29uc3QgcG9zaXRpb24gPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoICdwb3NpdGlvbicgKTtcblxuXHRcdGlmICggcG9zaXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcG9zaXRpb24uY291bnQ7IGkgKysgKSB7XG5cblx0XHRcdFx0aW5kaWNlcy5wdXNoKCBpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Z2VvbWV0cnkuc2V0SW5kZXgoIGluZGljZXMgKTtcblx0XHRcdGluZGV4ID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5kZWZpbmVkIHBvc2l0aW9uIGF0dHJpYnV0ZS4gUHJvY2Vzc2luZyBub3QgcG9zc2libGUuJyApO1xuXHRcdFx0cmV0dXJuIGdlb21ldHJ5O1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvL1xuXG5cdGNvbnN0IG51bWJlck9mVHJpYW5nbGVzID0gaW5kZXguY291bnQgLSAyO1xuXHRjb25zdCBuZXdJbmRpY2VzID0gW107XG5cblx0aWYgKCBkcmF3TW9kZSA9PT0gVHJpYW5nbGVGYW5EcmF3TW9kZSApIHtcblxuXHRcdC8vIGdsLlRSSUFOR0xFX0ZBTlxuXG5cdFx0Zm9yICggbGV0IGkgPSAxOyBpIDw9IG51bWJlck9mVHJpYW5nbGVzOyBpICsrICkge1xuXG5cdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIDAgKSApO1xuXHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcblx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xuXG5cdFx0fVxuXG5cdH0gZWxzZSB7XG5cblx0XHQvLyBnbC5UUklBTkdMRV9TVFJJUFxuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZUcmlhbmdsZXM7IGkgKysgKSB7XG5cblx0XHRcdGlmICggaSAlIDIgPT09IDAgKSB7XG5cblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDIgKSApO1xuXG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMiApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdGlmICggKCBuZXdJbmRpY2VzLmxlbmd0aCAvIDMgKSAhPT0gbnVtYmVyT2ZUcmlhbmdsZXMgKSB7XG5cblx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuR0xURkxvYWRlci50b1RyaWFuZ2xlc0RyYXdNb2RlKCk6IFVuYWJsZSB0byBnZW5lcmF0ZSBjb3JyZWN0IGFtb3VudCBvZiB0cmlhbmdsZXMuJyApO1xuXG5cdH1cblxuXHQvLyBidWlsZCBmaW5hbCBnZW9tZXRyeVxuXG5cdGNvbnN0IG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnkuY2xvbmUoKTtcblx0bmV3R2VvbWV0cnkuc2V0SW5kZXgoIG5ld0luZGljZXMgKTtcblxuXHRyZXR1cm4gbmV3R2VvbWV0cnk7XG5cbn1cblxuZXhwb3J0IHsgR0xURkxvYWRlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNjZW5lUmVuZGVyZXJUSlMgZnJvbSBcIi4vU2NlbmVSZW5kZXJlclRKU1wiO1xuaW1wb3J0IE5GVGFkZFRKUyBmcm9tIFwiLi9tYXJrZXJtZWRpYS9ORlRhZGRUSlNcIjtcblxuZXhwb3J0IGRlZmF1bHQgeyBTY2VuZVJlbmRlcmVyVEpTLCBORlRhZGRUSlMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==