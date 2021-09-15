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
  return Constructor;
}

/***/ }),

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
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, SceneRendererTJS);

    this.configData = configData;
    this.uuid = uuid;
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

    this.version = '0.1.1';
    console.log("ARnftThreejs version: ", this.version);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(SceneRendererTJS, [{
    key: "initRenderer",
    value: function initRenderer(names) {
      var _this = this;

      this.camera.matrixAutoUpdate = false;
      document.addEventListener('getProjectionMatrix', function (ev) {
        _utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.setMatrix(_this.camera.projectionMatrix, ev.detail.proj);
      });
      this.scene.add(this.camera);
      var light = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0xffffff);
      this.scene.add(light);
      document.addEventListener('getWindowSize', function (_ev) {
        _this.renderer.setSize(_ev.detail.sw, _ev.detail.sh);
      });
      var setInitRendererEvent = new CustomEvent('onInitThreejsRendering', {
        detail: {
          renderer: this.renderer,
          scene: this.scene,
          camera: this.camera
        }
      });
      document.dispatchEvent(setInitRendererEvent);
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
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SceneRendererTJS */ "./src/SceneRendererTJS.ts");







var NFTaddTJS = /*#__PURE__*/function () {
  function NFTaddTJS(uuid) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, NFTaddTJS);

    this.entities = [];
    this.scene = _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_4__.default.getGlobalScene();
    this.uuid = uuid;
    this.names = [];
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(NFTaddTJS, [{
    key: "add",
    value: function add(mesh, name) {
      document.addEventListener('getNFTData-' + this.uuid + '-' + name, function (ev) {
        var msg = ev.detail;
        console.log(msg);
        mesh.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
        mesh.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
      });
      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = 'root-' + name;
      root.matrixAutoUpdate = false;
      this.scene.add(root);
      root.add(mesh);
      document.addEventListener('getMatrixGL_RH-' + this.uuid + '-' + name, function (ev) {
        root.visible = true;
        mesh.visible = true;
        var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.interpolate(ev.detail.matrixGL_RH);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.setMatrix(root.matrix, matrix);
      });
      document.addEventListener('nftTrackingLost-' + this.uuid + '-' + name, function (ev) {
        root.visible = false;
        mesh.visible = false;
      });
      this.names.push(name);
      this.entities.push({
        name: name,
        mesh: mesh
      });
    }
  }, {
    key: "addModel",
    value: function addModel(url, name, x, y, z, scale) {
      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = 'root-' + name;
      root.matrixAutoUpdate = false;
      this.scene.add(root);
      var model;
      var threeGLTFLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_5__.GLTFLoader();
      threeGLTFLoader.load(url, function (gltf) {
        model = gltf.scene;
        model.scale.set(scale, scale, scale);
        model.rotation.x = Math.PI / 2;
        model.position.x = x;
        model.position.y = y;
        model.position.z = z;
        root.add(model);
      });
      document.addEventListener('getMatrixGL_RH-' + this.uuid + '-' + name, function (ev) {
        root.visible = true;
        model.visible = true;
        var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.interpolate(ev.detail.matrixGL_RH);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.setMatrix(root.matrix, matrix);
      });
      document.addEventListener('nftTrackingLost-' + this.uuid + '-' + name, function (ev) {
        root.visible = false;
        model.visible = false;
      });
      this.names.push(name);
    }
  }, {
    key: "addImage",
    value: function addImage(imageUrl, name, color, scale) {
      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = 'root-' + name;
      root.matrixAutoUpdate = false;
      this.scene.add(root);
      var planeGeom = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(1, 1, 1, 1);
      var texture = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load(imageUrl);
      var material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshStandardMaterial({
        color: color,
        map: texture
      });
      var plane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(planeGeom, material);
      plane.scale.set(scale, scale, scale);
      document.addEventListener('getNFTData', function (ev) {
        var msg = ev.detail;
        plane.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
        plane.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
      });
      root.add(plane);
      document.addEventListener('getMatrixGL_RH-' + this.uuid + '-' + name, function (ev) {
        root.visible = true;
        plane.visible = true;
        var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.interpolate(ev.detail.matrixGL_RH);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.setMatrix(root.matrix, matrix);
      });
      document.addEventListener('nftTrackingLost-' + this.uuid + '-' + name, function (ev) {
        root.visible = false;
        plane.visible = false;
      });
      this.names.push(name);
    }
  }, {
    key: "addVideo",
    value: function addVideo(id, name, scale) {
      var root = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();
      root.name = 'root-' + name;
      root.matrixAutoUpdate = false;
      this.scene.add(root);
      var ARVideo = document.getElementById(id);
      var texture = new three__WEBPACK_IMPORTED_MODULE_2__.VideoTexture(ARVideo);
      var mat = new three__WEBPACK_IMPORTED_MODULE_2__.MeshStandardMaterial({
        color: 0xbbbbff,
        map: texture
      });
      ARVideo.play();
      var planeGeom = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(1, 1, 1, 1);
      var plane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(planeGeom, mat);
      plane.scale.set(scale, scale, scale);
      document.addEventListener('getNFTData', function (ev) {
        var msg = ev.detail;
        plane.position.y = msg.height / msg.dpi * 2.54 * 10 / 2.0;
        plane.position.x = msg.width / msg.dpi * 2.54 * 10 / 2.0;
      });
      root.add(plane);
      document.addEventListener('getMatrixGL_RH-' + this.uuid + '-' + name, function (ev) {
        root.visible = true;
        plane.visible = true;
        var matrix = _utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.interpolate(ev.detail.matrixGL_RH);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_3__.Utils.setMatrix(root.matrix, matrix);
      });
      document.addEventListener('nftTrackingLost-' + this.uuid + '-' + name, function (ev) {
        root.visible = false;
        plane.visible = false;
      });
      this.names.push(name);
    }
  }, {
    key: "getNames",
    value: function getNames() {
      return this.names;
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
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var Utils = /*#__PURE__*/function () {
  function Utils() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Utils);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Utils, null, [{
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

      if (typeof matrix.elements.set === 'function') {
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

/***/ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js":
/*!***************************************************************!*\
  !*** ./node_modules/three/examples/jsm/loaders/GLTFLoader.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GLTFLoader": () => (/* binding */ GLTFLoader)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);


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

			return new GLTFMaterialsTransmissionExtension( parser );

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
	KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
	KHR_MATERIALS_TRANSMISSION: 'KHR_materials_transmission',
	KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
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

				// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
				materialParams.clearcoatNormalScale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2( scale, - scale );

			}

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

		if ( transform.texCoord !== undefined ) {

			console.warn( 'THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.' );

		}

		texture.needsUpdate = true;

		return texture;

	}

}

/**
	 * Specular-Glossiness Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness
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
			'material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.',
			'material.specularRoughness += geometryRoughness;',
			'material.specularRoughness = min( material.specularRoughness, 1.0 );',
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

/* UTILITY FUNCTIONS */

function resolveURL( url, path ) {

	// Invalid URL
	if ( typeof url !== 'string' || url === '' ) return '';

	// Host Relative URL
	if ( /^https?:\/\//i.test( path ) && /^\//.test( url ) ) {

		path = path.replace( /(^https?:\/\/[^\/]+).*/i, '$1' );

	}

	// Absolute URL http://,https://,//
	if ( /^(https?:)?\/\//i.test( url ) ) return url;

	// Data URI
	if ( /^data:.*,.*$/i.test( url ) ) return url;

	// Blob URL
	if ( /^blob:.*$/i.test( url ) ) return url;

	// Relative URL
	return path + url;

}

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

		// Track node names, to ensure no duplicates
		this.nodeNamesUsed = {};

		// Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
		// expensive work of uploading a texture to the GPU off the main thread.
		if ( typeof createImageBitmap !== 'undefined' && /Firefox/.test( navigator.userAgent ) === false ) {

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

			loader.load( resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

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

		const URL = self.URL || self.webkitURL;

		let sourceURI = source.uri;
		let isObjectURL = false;
		let hasAlpha = true;

		if ( source.mimeType === 'image/jpeg' ) hasAlpha = false;

		if ( source.bufferView !== undefined ) {

			// Load binary image data from bufferView, if provided.

			sourceURI = parser.getDependency( 'bufferView', source.bufferView ).then( function ( bufferView ) {

				if ( source.mimeType === 'image/png' ) {

					// Inspect the PNG 'IHDR' chunk to determine whether the image could have an
					// alpha channel. This check is conservative — the image could have an alpha
					// channel with all values == 1, and the indexed type (colorType == 3) only
					// sometimes contains alpha.
					//
					// https://en.wikipedia.org/wiki/Portable_Network_Graphics#File_header
					const colorType = new DataView( bufferView, 25, 1 ).getUint8( 0, false );
					hasAlpha = colorType === 6 || colorType === 4 || colorType === 3;

				}

				isObjectURL = true;
				const blob = new Blob( [ bufferView ], { type: source.mimeType } );
				sourceURI = URL.createObjectURL( blob );
				return sourceURI;

			} );

		} else if ( source.uri === undefined ) {

			throw new Error( 'THREE.GLTFLoader: Image ' + textureIndex + ' is missing URI and bufferView' );

		}

		return Promise.resolve( sourceURI ).then( function ( sourceURI ) {

			return new Promise( function ( resolve, reject ) {

				let onLoad = resolve;

				if ( loader.isImageBitmapLoader === true ) {

					onLoad = function ( imageBitmap ) {

						resolve( new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture( imageBitmap ) );

					};

				}

				loader.load( resolveURL( sourceURI, options.path ), onLoad, undefined, reject );

			} );

		} ).then( function ( texture ) {

			// Clean up resources and configure Texture.

			if ( isObjectURL === true ) {

				URL.revokeObjectURL( sourceURI );

			}

			texture.flipY = false;

			if ( textureDef.name ) texture.name = textureDef.name;

			// When there is definitely no alpha channel in the texture, set RGBFormat to save space.
			if ( ! hasAlpha ) texture.format = three__WEBPACK_IMPORTED_MODULE_0__.RGBFormat;

			const samplers = json.samplers || {};
			const sampler = samplers[ textureDef.sampler ] || {};

			texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ] || three__WEBPACK_IMPORTED_MODULE_0__.LinearFilter;
			texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ] || three__WEBPACK_IMPORTED_MODULE_0__.LinearMipmapLinearFilter;
			texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ] || three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;
			texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ] || three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;

			parser.associations.set( texture, {
				type: 'textures',
				index: textureIndex
			} );

			return texture;

		} );

	}

	/**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise}
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

		const useVertexTangents = geometry.attributes.tangent !== undefined;
		const useVertexColors = geometry.attributes.color !== undefined;
		const useFlatShading = geometry.attributes.normal === undefined;
		const useSkinning = mesh.isSkinnedMesh === true;
		const useMorphTargets = Object.keys( geometry.morphAttributes ).length > 0;
		const useMorphNormals = useMorphTargets && geometry.morphAttributes.normal !== undefined;

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
		if ( useVertexTangents || useVertexColors || useFlatShading || useSkinning || useMorphTargets ) {

			let cacheKey = 'ClonedMaterial:' + material.uuid + ':';

			if ( material.isGLTFSpecularGlossinessMaterial ) cacheKey += 'specular-glossiness:';
			if ( useSkinning ) cacheKey += 'skinning:';
			if ( useVertexTangents ) cacheKey += 'vertex-tangents:';
			if ( useVertexColors ) cacheKey += 'vertex-colors:';
			if ( useFlatShading ) cacheKey += 'flat-shading:';
			if ( useMorphTargets ) cacheKey += 'morph-targets:';
			if ( useMorphNormals ) cacheKey += 'morph-normals:';

			let cachedMaterial = this.cache.get( cacheKey );

			if ( ! cachedMaterial ) {

				cachedMaterial = material.clone();

				if ( useSkinning ) cachedMaterial.skinning = true;
				if ( useVertexColors ) cachedMaterial.vertexColors = true;
				if ( useFlatShading ) cachedMaterial.flatShading = true;
				if ( useMorphTargets ) cachedMaterial.morphTargets = true;
				if ( useMorphNormals ) cachedMaterial.morphNormals = true;

				if ( useVertexTangents ) {

					cachedMaterial.vertexTangents = true;

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

			materialParams.transparent = false;

			if ( alphaMode === ALPHA_MODES.MASK ) {

				materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

			}

		}

		if ( materialDef.normalTexture !== undefined && materialType !== three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'normalMap', materialDef.normalTexture ) );

			// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
			materialParams.normalScale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2( 1, - 1 );

			if ( materialDef.normalTexture.scale !== undefined ) {

				materialParams.normalScale.set( materialDef.normalTexture.scale, - materialDef.normalTexture.scale );

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

			parser.associations.set( material, { type: 'materials', index: materialIndex } );

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

			if ( meshes.length === 1 ) {

				return meshes[ 0 ];

			}

			const group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();

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

					// Node may be a Group (glTF mesh with several primitives) or a Mesh.
					node.traverse( function ( object ) {

						if ( object.isMesh === true && object.morphTargetInfluences ) {

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

							return new GLTFCubicSplineInterpolant( this.times, this.values, this.getValueSize() / 3, result );

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

			parser.associations.set( node, { type: 'nodes', index: nodeIndex } );

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

			pending.push( buildNodeHierachy( nodeIds[ i ], scene, json, parser ) );

		}

		return Promise.all( pending ).then( function () {

			return scene;

		} );

	}

}

function buildNodeHierachy( nodeId, parentObject, json, parser ) {

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
				pending.push( buildNodeHierachy( child, node, json, parser ) );

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




/***/ }),

/***/ "three":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"three","commonjs2":"three","amd":"three","root":"THREE"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_three__;

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
  SceneRendererTJS: _SceneRendererTJS__WEBPACK_IMPORTED_MODULE_0__.default,
  NFTaddTJS: _markermedia_NFTaddTJS__WEBPACK_IMPORTED_MODULE_1__.default
});
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL1NjZW5lUmVuZGVyZXJUSlMudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL21hcmtlcm1lZGlhL05GVGFkZFRKUy50cyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvdXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJ0aHJlZVwiLFwiY29tbW9uanMyXCI6XCJ0aHJlZVwiLFwiYW1kXCI6XCJ0aHJlZVwiLFwicm9vdFwiOlwiVEhSRUVcIn0iLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7SUEwQ3FCLGdCO0FBV25CLDRCQUFhLFVBQWIsRUFBcUMsVUFBckMsRUFBb0UsSUFBcEUsRUFBa0YsVUFBbEYsRUFBcUc7QUFBQTs7QUFDbkcsU0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssUUFBTCxHQUFnQixJQUFJLGdEQUFKLENBQXdCO0FBQ3RDLFlBQU0sRUFBRSxVQUQ4QjtBQUV0QyxhQUFPLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsT0FGUztBQUd0QyxXQUFLLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsS0FIVztBQUl0Qyx3QkFBa0IsRUFBRSxVQUFVLENBQUMsUUFBWCxDQUFvQixrQkFKRjtBQUt0QyxlQUFTLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsU0FMTztBQU10QyxhQUFPLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsT0FOUztBQU90QyxlQUFTLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsU0FQTztBQVF0QyxXQUFLLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsS0FSVztBQVN0Qyw0QkFBc0IsRUFBRSxVQUFVLENBQUMsUUFBWCxDQUFvQjtBQVROLEtBQXhCLENBQWhCO0FBV0EsU0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixNQUFNLENBQUMsZ0JBQW5DO0FBQ0Es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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUyxvREFBaUI7O0FBRTFCOztBQUVBOztBQUVBOztBQUVBLDZCQUE2Qix3Q0FBSztBQUNsQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSw4Q0FBOEMsMENBQU87O0FBRXJEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLHVEQUFvQjs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUosR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVUseURBQXNCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUIseURBQXNCOztBQUV6QyxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUwsSUFBSTs7QUFFSixHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLHVEQUFvQjs7QUFFN0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0Esd0RBQXdEO0FBQ3hELG1EQUFtRDtBQUNuRDtBQUNBLHlDQUF5QztBQUN6QztBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsMkhBQTJIO0FBQzNILG1GQUFtRjtBQUNuRixnRUFBZ0U7QUFDaEUsdUVBQXVFO0FBQ3ZFLG9EQUFvRDtBQUNwRCx3RUFBd0U7QUFDeEUsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0EsY0FBYyxZQUFZLHdDQUFLLHVCQUF1QjtBQUN0RCxnQkFBZ0IsV0FBVztBQUMzQixpQkFBaUIsY0FBYztBQUMvQixtQkFBbUI7QUFDbkI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFLHVDQUF1Qyw2QkFBNkI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXdDOztBQUV4QyxNQUFNOztBQUVOOztBQUVBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw2QkFBNkIsd0NBQUs7QUFDbEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxnQ0FBZ0Msd0NBQUs7QUFDckM7QUFDQSxnQ0FBZ0Msd0NBQUs7O0FBRXJDOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQix3REFBcUI7O0FBRWhEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsOENBQVc7O0FBRXBEOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjs7QUFFbkM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixjQUFjOztBQUUvQiw0Q0FBNEM7QUFDNUMsa0RBQWtEO0FBQ2xELDRDQUE0QztBQUM1Qyx3Q0FBd0M7O0FBRXhDOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sZ0RBQWE7QUFDcEIsT0FBTywrQ0FBWTtBQUNuQixPQUFPLDZEQUEwQjtBQUNqQyxPQUFPLDREQUF5QjtBQUNoQyxPQUFPLDREQUF5QjtBQUNoQyxPQUFPLDJEQUF3QjtBQUMvQjs7QUFFQTtBQUNBLFFBQVEsc0RBQW1CO0FBQzNCLFFBQVEseURBQXNCO0FBQzlCLFFBQVEsaURBQWM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9EQUFpQjtBQUMxQixPQUFPLHNEQUFtQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQyx1REFBb0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0Q0FBUztBQUNsQixHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxZQUFZLGlDQUFpQztBQUM3QyxZQUFZLGdCQUFnQjtBQUM1QjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFlBQVksbUJBQW1CO0FBQy9CLFlBQVksV0FBVztBQUN2QixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyxRQUFROztBQUU5Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDLFFBQVE7O0FBRTlDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBLFlBQVksS0FBSztBQUNqQixZQUFZLFVBQVU7QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSwrQ0FBK0MsUUFBUTs7QUFFdkQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw0Q0FBNEMsUUFBUTs7QUFFcEQ7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG1DQUFtQyxRQUFROztBQUUzQyxpRUFBaUU7O0FBRWpFOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVCQUF1QixjQUFjOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixTQUFTLFVBQVU7QUFDdkMsc0JBQXNCLFNBQVMsVUFBVTtBQUN6QyxxQkFBcUIsU0FBUyxVQUFVOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsb0RBQWlCOztBQUU3QyxHQUFHOztBQUVILDRCQUE0QixnREFBYTs7QUFFekM7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0IsNkNBQVU7QUFDbEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUEsSUFBSTs7QUFFSixHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdELHdCQUF3Qjs7QUFFaEY7O0FBRUEsdUNBQXVDLFFBQVE7O0FBRS9DOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0Qsd0JBQXdCOztBQUVoRjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHVCQUF1Qjs7QUFFekM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsdUJBQXVCOztBQUV6Qzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE1BQU07QUFDTjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUosR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxjQUFjLG9EQUFpQjs7QUFFL0I7O0FBRUE7O0FBRUEsMEJBQTBCLDZEQUEwQjs7QUFFcEQsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBLDBCQUEwQixrREFBZTs7QUFFekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQixrREFBZTs7QUFFMUM7O0FBRUEsK0NBQStDLFFBQVE7O0FBRXZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNENBQTRDLHdCQUF3QjtBQUNwRTtBQUNBOztBQUVBLElBQUk7O0FBRUosR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxtQkFBbUIsZ0RBQWE7O0FBRWhDOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUosR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHNDQUFzQyw0Q0FBUzs7QUFFL0M7QUFDQTs7QUFFQSw2REFBNkQsK0NBQVk7QUFDekUsNkRBQTZELDJEQUF3QjtBQUNyRix1REFBdUQsaURBQWM7QUFDckUsdURBQXVELGlEQUFjOztBQUVyRTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx5QkFBeUIsaURBQWM7QUFDdkMsSUFBSSwrREFBNEI7QUFDaEM7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSx1QkFBdUIsb0RBQWlCO0FBQ3hDLElBQUksK0RBQTRCO0FBQ2hDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUEsOEJBQThCLHdDQUFLO0FBQ25DOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQSx5QkFBeUIsNkNBQVU7O0FBRW5DOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsb0RBQWlCOztBQUVwRjs7QUFFQTtBQUNBLG9DQUFvQywwQ0FBTzs7QUFFM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0VBQXNFLG9EQUFpQjs7QUFFdkY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsb0VBQW9FLG9EQUFpQjs7QUFFckYsaUNBQWlDLHdDQUFLOztBQUV0Qzs7QUFFQSxxRUFBcUUsb0RBQWlCOztBQUV0Rjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsK0NBQStDLCtDQUFZO0FBQzNELCtEQUErRCwrQ0FBWTs7QUFFM0U7O0FBRUEsdUNBQXVDLDBDQUEwQzs7QUFFakY7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixtRUFBZ0M7O0FBRXhEOztBQUVBLGtCQUFrQiw0QkFBNEI7O0FBRTlDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNCQUFzQjtBQUNsQyxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUEsMENBQTBDLFFBQVE7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0EsbURBQW1ELGlEQUFjOztBQUVqRTs7QUFFQTtBQUNBLHlCQUF5Qjs7QUFFekI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwwQ0FBMEMsUUFBUTs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMkNBQTJDLFFBQVE7O0FBRW5EO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksOENBQVc7QUFDdkIsWUFBWSx1Q0FBSTs7QUFFaEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDBEQUEwRCx3REFBcUI7O0FBRS9FLE1BQU07O0FBRU4sMERBQTBELHNEQUFtQjs7QUFFN0U7O0FBRUEsS0FBSzs7QUFFTCxnQkFBZ0IsK0NBQVk7O0FBRTVCLEtBQUs7O0FBRUwsZ0JBQWdCLHVDQUFJOztBQUVwQixLQUFLOztBQUVMLGdCQUFnQiwyQ0FBUTs7QUFFeEIsS0FBSzs7QUFFTCxnQkFBZ0IseUNBQU07O0FBRXRCLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEscUJBQXFCLHdDQUFLOztBQUUxQix1Q0FBdUMsUUFBUTs7QUFFL0M7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGdCQUFnQixvREFBaUIsRUFBRSxxREFBa0I7O0FBRXJELEdBQUc7O0FBRUgsZ0JBQWdCLHFEQUFrQjs7QUFFbEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUI7O0FBRXJCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRCxRQUFROztBQUU3RDtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzQ0FBc0MsUUFBUTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDJCQUEyQixzREFBbUI7QUFDOUM7O0FBRUE7O0FBRUEsMkJBQTJCLDBEQUF1QjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLHNEQUFtQjtBQUM5Qzs7QUFFQTs7QUFFQTs7QUFFQSx5R0FBeUcsb0RBQWlCOztBQUUxSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLE1BQU07O0FBRU4sS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFROztBQUV0RDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw2Q0FBNkMsUUFBUTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsY0FBYyxnREFBYTs7QUFFM0IsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxrREFBa0QsUUFBUTs7QUFFMUQ7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSx1Q0FBSTs7QUFFbkIsSUFBSTs7QUFFSixlQUFlLHdDQUFLOztBQUVwQixJQUFJOztBQUVKOztBQUVBLElBQUk7O0FBRUosZUFBZSwyQ0FBUTs7QUFFdkI7O0FBRUE7O0FBRUEseUNBQXlDLFFBQVE7O0FBRWpEOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUJBQXVCLDBDQUFPO0FBQzlCO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxtQ0FBbUMsa0NBQWtDOztBQUVyRTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix3Q0FBSztBQUN6Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBdUMsUUFBUTs7QUFFL0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxpREFBaUQsUUFBUTs7QUFFekQ7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDRDQUE0QyxRQUFROztBQUVwRDs7QUFFQTs7QUFFQTs7QUFFQSxzQkFBc0IsMENBQU87O0FBRTdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLE1BQU07O0FBRU47O0FBRUE7O0FBRUE7O0FBRUEsbUJBQW1CLDJDQUFROztBQUUzQixJQUFJOztBQUVKOztBQUVBLEdBQUc7O0FBRUgsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx5Q0FBeUMsUUFBUTs7QUFFakQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFdBQVcsZUFBZTtBQUMxQixXQUFXLFdBQVc7QUFDdEI7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsdUNBQUk7O0FBRXJCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLDBDQUFPO0FBQ2YsUUFBUSwwQ0FBTztBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsOEJBQThCLDBDQUFPO0FBQ3JDLHFCQUFxQiwwQ0FBTzs7QUFFNUIsdUNBQXVDLFFBQVE7O0FBRS9DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0IseUNBQU07O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxXQUFXLGVBQWU7QUFDMUIsV0FBVyxlQUFlO0FBQzFCLFdBQVcsV0FBVztBQUN0QixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxtQkFBbUIsb0JBQW9COztBQUV2Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixzREFBbUI7O0FBRXRDOztBQUVBLGtCQUFrQix3QkFBd0I7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBLGtCQUFrQix1QkFBdUI7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFc0I7Ozs7Ozs7Ozs7O0FDaDZIdEIsbUQ7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBLGlFQUFlO0FBQUUsa0JBQWdCLEVBQWhCLHNEQUFGO0FBQW9CLFdBQVMsRUFBVCwyREFBUztBQUE3QixDQUFmLEUiLCJmaWxlIjoiQVJuZnRUaHJlZWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwidGhyZWVcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1widGhyZWVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQVJuZnRUaHJlZWpzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwidGhyZWVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFSbmZ0VGhyZWVqc1wiXSA9IGZhY3Rvcnkocm9vdFtcIlRIUkVFXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGhyZWVfXykge1xucmV0dXJuICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzL1V0aWxzJ1xuXG5pbnRlcmZhY2UgQ29uZmlnRGF0YSB7XG4gIGNhbWVyYToge1xuICAgIGZhcjogbnVtYmVyO1xuICAgIGZvdjogbnVtYmVyO1xuICAgIG1hdHJpeEF1dG9VcGRhdGU6IGJvb2xlYW47XG4gICAgbmVhcjogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gIH0sXG4gIHJlbmRlcmVyOiB7XG4gICAgYWxwaGE6IGJvb2xlYW47XG4gICAgYW50aWFsaWFzOiBib29sZWFuO1xuICAgIGNvbnRleHQ6IGFueTtcbiAgICBkZXB0aDogYm9vbGVhbjtcbiAgICBsb2dhcml0aG1pY0RlcHRoQnVmZmVyOiBib29sZWFuO1xuICAgIHByZWNpc2lvbjogc3RyaW5nO1xuICAgIHN0ZW5jaWw6IGJvb2xlYW47XG4gICAgcHJlbXVsdGlwbGllZEFscGhhOiBib29sZWFuO1xuICAgIG9ialZpc2liaWxpdHk6IGJvb2xlYW47XG4gIH07XG5cbn1cblxuaW50ZXJmYWNlIFJvb3QgZXh0ZW5kcyBUSFJFRS5PYmplY3QzRCB7XG4gIC8vbWF0cml4OiBvYmplY3Rcbn1cblxuaW50ZXJmYWNlIFJlbmRlcmVyIHtcbiAgcmVuZGVyOiAoc2NlbmU6IFRIUkVFLlNjZW5lLCBjYW1lcmE6IFRIUkVFLkNhbWVyYSkgPT4gdm9pZDtcbiAgc2V0UGl4ZWxSYXRpbzogKHBpeGVsUmF0aW86IG51bWJlcikgPT4gdm9pZDtcbiAgc2V0U2l6ZTogKHc6IG51bWJlciwgaDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2FtZXJhIGV4dGVuZHMgVEhSRUUuQ2FtZXJhIHtcbiAgbWF0cml4QXV0b1VwZGF0ZTogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFNjZW5lIGV4dGVuZHMgVEhSRUUuU2NlbmUge1xuICBhZGQ6IChub2RlOiBUSFJFRS5PYmplY3QzRCkgPT4gdGhpcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVSZW5kZXJlclRKUyB7XG4gIHB1YmxpYyBjYW52YXNfZHJhdzogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgY2FtZXJhOiBDYW1lcmE7XG4gIHByaXZhdGUgY29uZmlnRGF0YTogQ29uZmlnRGF0YTtcbiAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjtcbiAgcHJpdmF0ZSB1dWlkOiBzdHJpbmc7XG4gIHByaXZhdGUgcm9vdDogUm9vdDtcbiAgcHJpdmF0ZSBzY2VuZTogU2NlbmU7XG4gIHByaXZhdGUgc3RhdGljIGdsb2JhbFNjZW5lOiBTY2VuZTtcbiAgcHJpdmF0ZSB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGEsIGNhbnZhc0RyYXc6IEhUTUxDYW52YXNFbGVtZW50LCB1dWlkOiBzdHJpbmcsIGNhbWVyYUJvb2w6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBjb25maWdEYXRhXG4gICAgdGhpcy51dWlkID0gdXVpZFxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IGNhbnZhc0RyYXcsXG4gICAgICBjb250ZXh0OiBjb25maWdEYXRhLnJlbmRlcmVyLmNvbnRleHQsXG4gICAgICBhbHBoYTogY29uZmlnRGF0YS5yZW5kZXJlci5hbHBoYSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogY29uZmlnRGF0YS5yZW5kZXJlci5wcmVtdWx0aXBsaWVkQWxwaGEsXG4gICAgICBhbnRpYWxpYXM6IGNvbmZpZ0RhdGEucmVuZGVyZXIuYW50aWFsaWFzLFxuICAgICAgc3RlbmNpbDogY29uZmlnRGF0YS5yZW5kZXJlci5zdGVuY2lsLFxuICAgICAgcHJlY2lzaW9uOiBjb25maWdEYXRhLnJlbmRlcmVyLnByZWNpc2lvbixcbiAgICAgIGRlcHRoOiBjb25maWdEYXRhLnJlbmRlcmVyLmRlcHRoLFxuICAgICAgbG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcjogY29uZmlnRGF0YS5yZW5kZXJlci5sb2dhcml0aG1pY0RlcHRoQnVmZmVyXG4gICAgfSlcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpXG4gICAgU2NlbmVSZW5kZXJlclRKUy5nbG9iYWxTY2VuZSA9IHRoaXMuc2NlbmVcbiAgICBpZiAoY2FtZXJhQm9vbCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIGNvbmZpZ0RhdGEuY2FtZXJhLmZvdiwgY29uZmlnRGF0YS5jYW1lcmEucmF0aW8sIGNvbmZpZ0RhdGEuY2FtZXJhLm5lYXIsIGNvbmZpZ0RhdGEuY2FtZXJhLmZhciApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5DYW1lcmEoKVxuICAgIH1cbiAgICB0aGlzLnZlcnNpb24gPSAnMC4xLjEnXG4gICAgY29uc29sZS5sb2coXCJBUm5mdFRocmVlanMgdmVyc2lvbjogXCIsIHRoaXMudmVyc2lvbik7XG4gIH1cblxuICBpbml0UmVuZGVyZXIgKG5hbWVzOkFycmF5PHN0cmluZz4pIHtcbiAgICB0aGlzLmNhbWVyYS5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2VcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXRQcm9qZWN0aW9uTWF0cml4JywgKGV2OiBhbnkpID0+IHtcbiAgICAgIFV0aWxzLnNldE1hdHJpeCh0aGlzLmNhbWVyYS5wcm9qZWN0aW9uTWF0cml4LCBldi5kZXRhaWwucHJvailcbiAgICB9KVxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY2FtZXJhKVxuXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmKVxuICAgIHRoaXMuc2NlbmUuYWRkKGxpZ2h0KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2V0V2luZG93U2l6ZScsIChfZXY6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKF9ldi5kZXRhaWwuc3csIF9ldi5kZXRhaWwuc2gpXG4gICAgfSlcblxuICAgIGNvbnN0IHNldEluaXRSZW5kZXJlckV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdvbkluaXRUaHJlZWpzUmVuZGVyaW5nJywgeyBkZXRhaWw6IHsgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsIHNjZW5lOiB0aGlzLnNjZW5lLCAgY2FtZXJhOiB0aGlzLmNhbWVyYSB9IH0pXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChzZXRJbml0UmVuZGVyZXJFdmVudClcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKVxuICB9XG5cbiAgLy8gZ2V0dGVyc1xuXG4gIGdldFJlbmRlcmVyKCk6IFJlbmRlcmVyIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlclxuICB9XG5cbiAgZ2V0U2NlbmUoKTogU2NlbmUge1xuICAgIHJldHVybiB0aGlzLnNjZW5lXG4gIH1cblxuICBnZXRDYW1lcmEoKTogQ2FtZXJhIHtcbiAgICByZXR1cm4gdGhpcy5jYW1lcmFcbiAgfVxuXG4gIHN0YXRpYyBnZXRHbG9iYWxTY2VuZSgpOiBTY2VuZSB7XG4gICAgcmV0dXJuIFNjZW5lUmVuZGVyZXJUSlMuZ2xvYmFsU2NlbmVcbiAgfVxuXG4gIC8vIHNldHRlcnNcblxuICBzZXRSZW5kZXJlcihyZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJcbiAgfVxuXG4gIHNldFNjZW5lKHNjZW5lOiBTY2VuZSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICB9XG5cbiAgc2V0Q2FtZXJhKGNhbWVyYTogQ2FtZXJhKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcbiAgfVxuXG4gIC8vIHRpY2sgdG8gYmUgaW1wbGVtZW50ZWRcbiAgLyogdGljayAoKSB7XG4gICAgdGhpcy5kcmF3KClcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGljaylcbiAgfSovXG59XG4iLCJpbXBvcnQgeyBPYmplY3QzRCxcbiAgICAgICAgIFBsYW5lR2VvbWV0cnksXG4gICAgICAgICBTY2VuZSxcbiAgICAgICAgIFRleHR1cmVMb2FkZXIsXG4gICAgICAgICBWaWRlb1RleHR1cmUsXG4gICAgICAgICBNZXNoLFxuICAgICAgICAgTWVzaFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tICd0aHJlZSdcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyJ1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi91dGlscy9VdGlscydcbmltcG9ydCBTY2VuZVJlbmRlcmVyVEpTIGZyb20gJy4uL1NjZW5lUmVuZGVyZXJUSlMnXG5cbmludGVyZmFjZSBBUnZpZGVvIHtcbiAgcGxheTogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIEVudGl0eSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIG1lc2g6IE9iamVjdDNEXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5GVGFkZFRKUyB7XG4gICAgcHJpdmF0ZSBlbnRpdGllczogRW50aXR5W10gPSBbXTtcbiAgICBwcml2YXRlIG5hbWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgc2NlbmU6IFNjZW5lO1xuICAgIHByaXZhdGUgdXVpZDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHV1aWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNjZW5lID0gU2NlbmVSZW5kZXJlclRKUy5nZXRHbG9iYWxTY2VuZSgpO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLm5hbWVzID0gW107XG4gICAgfVxuICAgIHB1YmxpYyBhZGQobWVzaDogT2JqZWN0M0QsIG5hbWU6IHN0cmluZykge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXRORlREYXRhLScgKyB0aGlzLnV1aWQgKyAnLScgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIG1zZyA9IGV2LmRldGFpbFxuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICAgICAgICAgIG1lc2gucG9zaXRpb24ueSA9IChtc2cuaGVpZ2h0IC8gbXNnLmRwaSAqIDIuNTQgKiAxMCkgLyAyLjBcbiAgICAgICAgICAgIG1lc2gucG9zaXRpb24ueCA9IChtc2cud2lkdGggLyBtc2cuZHBpICogMi41NCAqIDEwKSAvIDIuMFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCByb290ID0gbmV3IE9iamVjdDNEKCk7XG4gICAgICAgIHJvb3QubmFtZSA9ICdyb290LScgKyBuYW1lO1xuICAgICAgICByb290Lm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocm9vdCk7XG4gICAgICAgIHJvb3QuYWRkKG1lc2gpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXRNYXRyaXhHTF9SSC0nICsgdGhpcy51dWlkICsgJy0nICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICByb290LnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgbWVzaC52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IFV0aWxzLmludGVycG9sYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSClcbiAgICAgICAgICBVdGlscy5zZXRNYXRyaXgocm9vdC5tYXRyaXgsIG1hdHJpeClcbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmZ0VHJhY2tpbmdMb3N0LScgKyB0aGlzLnV1aWQgKyAnLScgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgIHJvb3QudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgICAgbWVzaC52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLmVudGl0aWVzLnB1c2goe25hbWUsIG1lc2h9KVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRNb2RlbCAodXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgc2NhbGU6IG51bWJlcikge1xuICAgICAgICBjb25zdCByb290ID0gbmV3IE9iamVjdDNEKCk7XG4gICAgICAgIHJvb3QubmFtZSA9ICdyb290LScgKyBuYW1lO1xuICAgICAgICByb290Lm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocm9vdCk7XG4gICAgICAgIGxldCBtb2RlbDogYW55XG4gICAgICAgIC8qIExvYWQgTW9kZWwgKi9cbiAgICAgICAgY29uc3QgdGhyZWVHTFRGTG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKVxuICAgICAgICB0aHJlZUdMVEZMb2FkZXIubG9hZCh1cmwsIGdsdGYgPT4ge1xuICAgICAgICAgICAgbW9kZWwgPSBnbHRmLnNjZW5lXG4gICAgICAgICAgICBtb2RlbC5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSlcbiAgICAgICAgICAgIG1vZGVsLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMlxuICAgICAgICAgICAgbW9kZWwucG9zaXRpb24ueCA9IHhcbiAgICAgICAgICAgIG1vZGVsLnBvc2l0aW9uLnkgPSB5XG4gICAgICAgICAgICBtb2RlbC5wb3NpdGlvbi56ID0gelxuICAgICAgICAgICAgcm9vdC5hZGQobW9kZWwpXG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dldE1hdHJpeEdMX1JILScgKyB0aGlzLnV1aWQgKyAnLScgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgICAgbW9kZWwudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IFV0aWxzLmludGVycG9sYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSClcbiAgICAgICAgICAgIFV0aWxzLnNldE1hdHJpeChyb290Lm1hdHJpeCwgbWF0cml4KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmZ0VHJhY2tpbmdMb3N0LScgKyB0aGlzLnV1aWQgKyAnLScgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgcm9vdC52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgICAgIG1vZGVsLnZpc2libGUgPSBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkSW1hZ2UgKGltYWdlVXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZywgc2NhbGU6IG51bWJlcikge1xuICAgICAgY29uc3Qgcm9vdCA9IG5ldyBPYmplY3QzRCgpO1xuICAgICAgcm9vdC5uYW1lID0gJ3Jvb3QtJyArIG5hbWU7XG4gICAgICByb290Lm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgY29uc3QgcGxhbmVHZW9tID0gbmV3IFBsYW5lR2VvbWV0cnkoMSwgMSwgMSwgMSlcbiAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZUxvYWRlcigpLmxvYWQoaW1hZ2VVcmwpXG4gICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiBjb2xvciwgbWFwOiB0ZXh0dXJlfSk7XG4gICAgICBjb25zdCBwbGFuZSA9IG5ldyBNZXNoKHBsYW5lR2VvbSwgbWF0ZXJpYWwpXG4gICAgICBwbGFuZS5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dldE5GVERhdGEnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIG1zZyA9IGV2LmRldGFpbFxuICAgICAgICAgICAgcGxhbmUucG9zaXRpb24ueSA9IChtc2cuaGVpZ2h0IC8gbXNnLmRwaSAqIDIuNTQgKiAxMCkgLyAyLjBcbiAgICAgICAgICAgIHBsYW5lLnBvc2l0aW9uLnggPSAobXNnLndpZHRoIC8gbXNnLmRwaSAqIDIuNTQgKiAxMCkgLyAyLjBcbiAgICAgIH0pXG4gICAgICByb290LmFkZChwbGFuZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dldE1hdHJpeEdMX1JILScgKyB0aGlzLnV1aWQgKyAnLScgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICByb290LnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgIHBsYW5lLnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgIGNvbnN0IG1hdHJpeCA9IFV0aWxzLmludGVycG9sYXRlKGV2LmRldGFpbC5tYXRyaXhHTF9SSClcbiAgICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHJvb3QubWF0cml4LCBtYXRyaXgpXG4gICAgICB9KVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmZ0VHJhY2tpbmdMb3N0LScgKyB0aGlzLnV1aWQgKyAnLScgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICByb290LnZpc2libGUgPSBmYWxzZVxuICAgICAgICAgICBwbGFuZS52aXNpYmxlID0gZmFsc2VcbiAgICAgIH0pXG4gICAgICB0aGlzLm5hbWVzLnB1c2gobmFtZSk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRWaWRlbyAoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBzY2FsZTogbnVtYmVyKSB7XG4gICAgICBjb25zdCByb290ID0gbmV3IE9iamVjdDNEKCk7XG4gICAgICByb290Lm5hbWUgPSAncm9vdC0nICsgbmFtZTtcbiAgICAgIHJvb3QubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zY2VuZS5hZGQocm9vdCk7XG4gICAgICBjb25zdCBBUlZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFZpZGVvVGV4dHVyZShBUlZpZGVvIGFzIEhUTUxWaWRlb0VsZW1lbnQpXG4gICAgICBjb25zdCBtYXQgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHhiYmJiZmYsIG1hcDogdGV4dHVyZSB9KVxuICAgICAgQVJWaWRlby5wbGF5KClcbiAgICAgIGNvbnN0IHBsYW5lR2VvbSA9IG5ldyBQbGFuZUdlb21ldHJ5KDEsIDEsIDEsIDEpXG4gICAgICBjb25zdCBwbGFuZSA9IG5ldyBNZXNoKHBsYW5lR2VvbSwgbWF0KVxuICAgICAgcGxhbmUuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXRORlREYXRhJywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgdmFyIG1zZyA9IGV2LmRldGFpbFxuICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gKG1zZy5oZWlnaHQgLyBtc2cuZHBpICogMi41NCAqIDEwKSAvIDIuMFxuICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi54ID0gKG1zZy53aWR0aCAvIG1zZy5kcGkgKiAyLjU0ICogMTApIC8gMi4wXG4gICAgICB9KVxuICAgICAgcm9vdC5hZGQocGxhbmUpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXRNYXRyaXhHTF9SSC0nICsgdGhpcy51dWlkICsgJy0nICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgICBwbGFuZS52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpXG4gICAgICAgICAgIFV0aWxzLnNldE1hdHJpeChyb290Lm1hdHJpeCwgbWF0cml4KVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25mdFRyYWNraW5nTG9zdC0nICsgdGhpcy51dWlkICsgJy0nICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICByb290LnZpc2libGUgPSBmYWxzZVxuICAgICAgICAgIHBsYW5lLnZpc2libGUgPSBmYWxzZVxuICAgICAgfSlcbiAgICAgIHRoaXMubmFtZXMucHVzaChuYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lc1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIHByaXZhdGUgc3RhdGljIHRyYWNrZWRNYXRyaXg6IGFueSA9IHtcbiAgICAgIC8vIGZvciBpbnRlcnBvbGF0aW9uXG4gICAgICBkZWx0YTogW1xuICAgICAgICAgIDAsIDAsIDAsIDAsXG4gICAgICAgICAgMCwgMCwgMCwgMCxcbiAgICAgICAgICAwLCAwLCAwLCAwLFxuICAgICAgICAgIDAsIDAsIDAsIDBcbiAgICAgIF0sXG4gICAgICBpbnRlcnBvbGF0ZWQ6IFtcbiAgICAgICAgICAwLCAwLCAwLCAwLFxuICAgICAgICAgIDAsIDAsIDAsIDAsXG4gICAgICAgICAgMCwgMCwgMCwgMCxcbiAgICAgICAgICAwLCAwLCAwLCAwXG4gICAgICBdXG4gIH1cbiAgLy9wcml2YXRlIHN0YXRpYyBpbnRlcnBvbGF0aW9uRmFjdG9yOiBudW1iZXIgPSAyNFxuICBzdGF0aWMgaW50ZXJwb2xhdGUgKHdvcmxkOiBhbnkpIHtcbiAgICBjb25zdCBpbnRlcnBvbGF0aW9uRmFjdG9yID0gMjRcblxuICAgIC8vIGludGVycG9sYXRlIG1hdHJpeFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgdGhpcy50cmFja2VkTWF0cml4LmRlbHRhW2ldID0gd29ybGRbaV0gLSB0aGlzLnRyYWNrZWRNYXRyaXguaW50ZXJwb2xhdGVkW2ldXG4gICAgICB0aGlzLnRyYWNrZWRNYXRyaXguaW50ZXJwb2xhdGVkW2ldID1cbiAgICAgICAgICAgICAgICAgIHRoaXMudHJhY2tlZE1hdHJpeC5pbnRlcnBvbGF0ZWRbaV0gK1xuICAgICAgICAgICAgICAgICAgdGhpcy50cmFja2VkTWF0cml4LmRlbHRhW2ldIC8gaW50ZXJwb2xhdGlvbkZhY3RvclxuICAgICB9XG4gICAgIHJldHVybiB0aGlzLnRyYWNrZWRNYXRyaXguaW50ZXJwb2xhdGVkXG4gICB9XG5cbiAgc3RhdGljIGlzTW9iaWxlICgpIHtcbiAgICByZXR1cm4gL0FuZHJvaWR8bW9iaWxlfGlQYWR8aVBob25lL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuICB9XG5cbiAgc3RhdGljIHNldE1hdHJpeCAobWF0cml4OiBhbnksIHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBhcnJheTogYW55ID0gW11cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgYXJyYXlba2V5XSA9IHZhbHVlW2tleV1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXRyaXguZWxlbWVudHMuc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBtYXRyaXguZWxlbWVudHMuc2V0KGFycmF5KVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXRyaXguZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGFycmF5KVxuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7XG5cdEFuaW1hdGlvbkNsaXAsXG5cdEJvbmUsXG5cdEJveDMsXG5cdEJ1ZmZlckF0dHJpYnV0ZSxcblx0QnVmZmVyR2VvbWV0cnksXG5cdENhbnZhc1RleHR1cmUsXG5cdENsYW1wVG9FZGdlV3JhcHBpbmcsXG5cdENvbG9yLFxuXHREaXJlY3Rpb25hbExpZ2h0LFxuXHREb3VibGVTaWRlLFxuXHRGaWxlTG9hZGVyLFxuXHRGcm9udFNpZGUsXG5cdEdyb3VwLFxuXHRJbWFnZUJpdG1hcExvYWRlcixcblx0SW50ZXJsZWF2ZWRCdWZmZXIsXG5cdEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlLFxuXHRJbnRlcnBvbGFudCxcblx0SW50ZXJwb2xhdGVEaXNjcmV0ZSxcblx0SW50ZXJwb2xhdGVMaW5lYXIsXG5cdExpbmUsXG5cdExpbmVCYXNpY01hdGVyaWFsLFxuXHRMaW5lTG9vcCxcblx0TGluZVNlZ21lbnRzLFxuXHRMaW5lYXJGaWx0ZXIsXG5cdExpbmVhck1pcG1hcExpbmVhckZpbHRlcixcblx0TGluZWFyTWlwbWFwTmVhcmVzdEZpbHRlcixcblx0TG9hZGVyLFxuXHRMb2FkZXJVdGlscyxcblx0TWF0ZXJpYWwsXG5cdE1hdGhVdGlscyxcblx0TWF0cml4NCxcblx0TWVzaCxcblx0TWVzaEJhc2ljTWF0ZXJpYWwsXG5cdE1lc2hQaHlzaWNhbE1hdGVyaWFsLFxuXHRNZXNoU3RhbmRhcmRNYXRlcmlhbCxcblx0TWlycm9yZWRSZXBlYXRXcmFwcGluZyxcblx0TmVhcmVzdEZpbHRlcixcblx0TmVhcmVzdE1pcG1hcExpbmVhckZpbHRlcixcblx0TmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdE51bWJlcktleWZyYW1lVHJhY2ssXG5cdE9iamVjdDNELFxuXHRPcnRob2dyYXBoaWNDYW1lcmEsXG5cdFBlcnNwZWN0aXZlQ2FtZXJhLFxuXHRQb2ludExpZ2h0LFxuXHRQb2ludHMsXG5cdFBvaW50c01hdGVyaWFsLFxuXHRQcm9wZXJ0eUJpbmRpbmcsXG5cdFF1YXRlcm5pb25LZXlmcmFtZVRyYWNrLFxuXHRSR0JGb3JtYXQsXG5cdFJlcGVhdFdyYXBwaW5nLFxuXHRTa2VsZXRvbixcblx0U2tpbm5lZE1lc2gsXG5cdFNwaGVyZSxcblx0U3BvdExpZ2h0LFxuXHRUYW5nZW50U3BhY2VOb3JtYWxNYXAsXG5cdFRleHR1cmVMb2FkZXIsXG5cdFRyaWFuZ2xlRmFuRHJhd01vZGUsXG5cdFRyaWFuZ2xlU3RyaXBEcmF3TW9kZSxcblx0VmVjdG9yMixcblx0VmVjdG9yMyxcblx0VmVjdG9yS2V5ZnJhbWVUcmFjayxcblx0c1JHQkVuY29kaW5nXG59IGZyb20gJ3RocmVlJztcblxuY2xhc3MgR0xURkxvYWRlciBleHRlbmRzIExvYWRlciB7XG5cblx0Y29uc3RydWN0b3IoIG1hbmFnZXIgKSB7XG5cblx0XHRzdXBlciggbWFuYWdlciApO1xuXG5cdFx0dGhpcy5kcmFjb0xvYWRlciA9IG51bGw7XG5cdFx0dGhpcy5rdHgyTG9hZGVyID0gbnVsbDtcblx0XHR0aGlzLm1lc2hvcHREZWNvZGVyID0gbnVsbDtcblxuXHRcdHRoaXMucGx1Z2luQ2FsbGJhY2tzID0gW107XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZUZXh0dXJlQmFzaXNVRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZUZXh0dXJlV2ViUEV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWF0ZXJpYWxzVHJhbnNtaXNzaW9uRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZMaWdodHNFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1lc2hvcHRDb21wcmVzc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdGxvYWQoIHVybCwgb25Mb2FkLCBvblByb2dyZXNzLCBvbkVycm9yICkge1xuXG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzO1xuXG5cdFx0bGV0IHJlc291cmNlUGF0aDtcblxuXHRcdGlmICggdGhpcy5yZXNvdXJjZVBhdGggIT09ICcnICkge1xuXG5cdFx0XHRyZXNvdXJjZVBhdGggPSB0aGlzLnJlc291cmNlUGF0aDtcblxuXHRcdH0gZWxzZSBpZiAoIHRoaXMucGF0aCAhPT0gJycgKSB7XG5cblx0XHRcdHJlc291cmNlUGF0aCA9IHRoaXMucGF0aDtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHJlc291cmNlUGF0aCA9IExvYWRlclV0aWxzLmV4dHJhY3RVcmxCYXNlKCB1cmwgKTtcblxuXHRcdH1cblxuXHRcdC8vIFRlbGxzIHRoZSBMb2FkaW5nTWFuYWdlciB0byB0cmFjayBhbiBleHRyYSBpdGVtLCB3aGljaCByZXNvbHZlcyBhZnRlclxuXHRcdC8vIHRoZSBtb2RlbCBpcyBmdWxseSBsb2FkZWQuIFRoaXMgbWVhbnMgdGhlIGNvdW50IG9mIGl0ZW1zIGxvYWRlZCB3aWxsXG5cdFx0Ly8gYmUgaW5jb3JyZWN0LCBidXQgZW5zdXJlcyBtYW5hZ2VyLm9uTG9hZCgpIGRvZXMgbm90IGZpcmUgZWFybHkuXG5cdFx0dGhpcy5tYW5hZ2VyLml0ZW1TdGFydCggdXJsICk7XG5cblx0XHRjb25zdCBfb25FcnJvciA9IGZ1bmN0aW9uICggZSApIHtcblxuXHRcdFx0aWYgKCBvbkVycm9yICkge1xuXG5cdFx0XHRcdG9uRXJyb3IoIGUgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBlICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRXJyb3IoIHVybCApO1xuXHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRW5kKCB1cmwgKTtcblxuXHRcdH07XG5cblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgRmlsZUxvYWRlciggdGhpcy5tYW5hZ2VyICk7XG5cblx0XHRsb2FkZXIuc2V0UGF0aCggdGhpcy5wYXRoICk7XG5cdFx0bG9hZGVyLnNldFJlc3BvbnNlVHlwZSggJ2FycmF5YnVmZmVyJyApO1xuXHRcdGxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLnJlcXVlc3RIZWFkZXIgKTtcblx0XHRsb2FkZXIuc2V0V2l0aENyZWRlbnRpYWxzKCB0aGlzLndpdGhDcmVkZW50aWFscyApO1xuXG5cdFx0bG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCBkYXRhICkge1xuXG5cdFx0XHR0cnkge1xuXG5cdFx0XHRcdHNjb3BlLnBhcnNlKCBkYXRhLCByZXNvdXJjZVBhdGgsIGZ1bmN0aW9uICggZ2x0ZiApIHtcblxuXHRcdFx0XHRcdG9uTG9hZCggZ2x0ZiApO1xuXG5cdFx0XHRcdFx0c2NvcGUubWFuYWdlci5pdGVtRW5kKCB1cmwgKTtcblxuXHRcdFx0XHR9LCBfb25FcnJvciApO1xuXG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRfb25FcnJvciggZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9LCBvblByb2dyZXNzLCBfb25FcnJvciApO1xuXG5cdH1cblxuXHRzZXREUkFDT0xvYWRlciggZHJhY29Mb2FkZXIgKSB7XG5cblx0XHR0aGlzLmRyYWNvTG9hZGVyID0gZHJhY29Mb2FkZXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG5cdHNldEREU0xvYWRlcigpIHtcblxuXHRcdHRocm93IG5ldyBFcnJvcihcblxuXHRcdFx0J1RIUkVFLkdMVEZMb2FkZXI6IFwiTVNGVF90ZXh0dXJlX2Rkc1wiIG5vIGxvbmdlciBzdXBwb3J0ZWQuIFBsZWFzZSB1cGRhdGUgdG8gXCJLSFJfdGV4dHVyZV9iYXNpc3VcIi4nXG5cblx0XHQpO1xuXG5cdH1cblxuXHRzZXRLVFgyTG9hZGVyKCBrdHgyTG9hZGVyICkge1xuXG5cdFx0dGhpcy5rdHgyTG9hZGVyID0ga3R4MkxvYWRlcjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0c2V0TWVzaG9wdERlY29kZXIoIG1lc2hvcHREZWNvZGVyICkge1xuXG5cdFx0dGhpcy5tZXNob3B0RGVjb2RlciA9IG1lc2hvcHREZWNvZGVyO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHRyZWdpc3RlciggY2FsbGJhY2sgKSB7XG5cblx0XHRpZiAoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICkgPT09IC0gMSApIHtcblxuXHRcdFx0dGhpcy5wbHVnaW5DYWxsYmFja3MucHVzaCggY2FsbGJhY2sgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHR1bnJlZ2lzdGVyKCBjYWxsYmFjayApIHtcblxuXHRcdGlmICggdGhpcy5wbHVnaW5DYWxsYmFja3MuaW5kZXhPZiggY2FsbGJhY2sgKSAhPT0gLSAxICkge1xuXG5cdFx0XHR0aGlzLnBsdWdpbkNhbGxiYWNrcy5zcGxpY2UoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICksIDEgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHRwYXJzZSggZGF0YSwgcGF0aCwgb25Mb2FkLCBvbkVycm9yICkge1xuXG5cdFx0bGV0IGNvbnRlbnQ7XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHt9O1xuXHRcdGNvbnN0IHBsdWdpbnMgPSB7fTtcblxuXHRcdGlmICggdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICkge1xuXG5cdFx0XHRjb250ZW50ID0gZGF0YTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnN0IG1hZ2ljID0gTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggbmV3IFVpbnQ4QXJyYXkoIGRhdGEsIDAsIDQgKSApO1xuXG5cdFx0XHRpZiAoIG1hZ2ljID09PSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9NQUdJQyApIHtcblxuXHRcdFx0XHR0cnkge1xuXG5cdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEYgXSA9IG5ldyBHTFRGQmluYXJ5RXh0ZW5zaW9uKCBkYXRhICk7XG5cblx0XHRcdFx0fSBjYXRjaCAoIGVycm9yICkge1xuXG5cdFx0XHRcdFx0aWYgKCBvbkVycm9yICkgb25FcnJvciggZXJyb3IgKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnRlbnQgPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURiBdLmNvbnRlbnQ7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29udGVudCA9IExvYWRlclV0aWxzLmRlY29kZVRleHQoIG5ldyBVaW50OEFycmF5KCBkYXRhICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Y29uc3QganNvbiA9IEpTT04ucGFyc2UoIGNvbnRlbnQgKTtcblxuXHRcdGlmICgganNvbi5hc3NldCA9PT0gdW5kZWZpbmVkIHx8IGpzb24uYXNzZXQudmVyc2lvblsgMCBdIDwgMiApIHtcblxuXHRcdFx0aWYgKCBvbkVycm9yICkgb25FcnJvciggbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgYXNzZXQuIGdsVEYgdmVyc2lvbnMgPj0yLjAgYXJlIHN1cHBvcnRlZC4nICkgKTtcblx0XHRcdHJldHVybjtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBhcnNlciA9IG5ldyBHTFRGUGFyc2VyKCBqc29uLCB7XG5cblx0XHRcdHBhdGg6IHBhdGggfHwgdGhpcy5yZXNvdXJjZVBhdGggfHwgJycsXG5cdFx0XHRjcm9zc09yaWdpbjogdGhpcy5jcm9zc09yaWdpbixcblx0XHRcdHJlcXVlc3RIZWFkZXI6IHRoaXMucmVxdWVzdEhlYWRlcixcblx0XHRcdG1hbmFnZXI6IHRoaXMubWFuYWdlcixcblx0XHRcdGt0eDJMb2FkZXI6IHRoaXMua3R4MkxvYWRlcixcblx0XHRcdG1lc2hvcHREZWNvZGVyOiB0aGlzLm1lc2hvcHREZWNvZGVyXG5cblx0XHR9ICk7XG5cblx0XHRwYXJzZXIuZmlsZUxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLnJlcXVlc3RIZWFkZXIgKTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luQ2FsbGJhY2tzLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgcGx1Z2luID0gdGhpcy5wbHVnaW5DYWxsYmFja3NbIGkgXSggcGFyc2VyICk7XG5cdFx0XHRwbHVnaW5zWyBwbHVnaW4ubmFtZSBdID0gcGx1Z2luO1xuXG5cdFx0XHQvLyBXb3JrYXJvdW5kIHRvIGF2b2lkIGRldGVybWluaW5nIGFzIHVua25vd24gZXh0ZW5zaW9uXG5cdFx0XHQvLyBpbiBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoKS5cblx0XHRcdC8vIFJlbW92ZSB0aGlzIHdvcmthcm91bmQgaWYgd2UgbW92ZSBhbGwgdGhlIGV4aXN0aW5nXG5cdFx0XHQvLyBleHRlbnNpb24gaGFuZGxlcnMgdG8gcGx1Z2luIHN5c3RlbVxuXHRcdFx0ZXh0ZW5zaW9uc1sgcGx1Z2luLm5hbWUgXSA9IHRydWU7XG5cblx0XHR9XG5cblx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1VzZWQgKSB7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGpzb24uZXh0ZW5zaW9uc1VzZWQubGVuZ3RoOyArKyBpICkge1xuXG5cdFx0XHRcdGNvbnN0IGV4dGVuc2lvbk5hbWUgPSBqc29uLmV4dGVuc2lvbnNVc2VkWyBpIF07XG5cdFx0XHRcdGNvbnN0IGV4dGVuc2lvbnNSZXF1aXJlZCA9IGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkIHx8IFtdO1xuXG5cdFx0XHRcdHN3aXRjaCAoIGV4dGVuc2lvbk5hbWUgKSB7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVDpcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGTWF0ZXJpYWxzVW5saXRFeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1M6XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzc0V4dGVuc2lvbigpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT046XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURkRyYWNvTWVzaENvbXByZXNzaW9uRXh0ZW5zaW9uKCBqc29uLCB0aGlzLmRyYWNvTG9hZGVyICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk06XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURlRleHR1cmVUcmFuc2Zvcm1FeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9NRVNIX1FVQU5USVpBVElPTjpcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGTWVzaFF1YW50aXphdGlvbkV4dGVuc2lvbigpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0XHRpZiAoIGV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCBleHRlbnNpb25OYW1lICkgPj0gMCAmJiBwbHVnaW5zWyBleHRlbnNpb25OYW1lIF0gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBVbmtub3duIGV4dGVuc2lvbiBcIicgKyBleHRlbnNpb25OYW1lICsgJ1wiLicgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cGFyc2VyLnNldEV4dGVuc2lvbnMoIGV4dGVuc2lvbnMgKTtcblx0XHRwYXJzZXIuc2V0UGx1Z2lucyggcGx1Z2lucyApO1xuXHRcdHBhcnNlci5wYXJzZSggb25Mb2FkLCBvbkVycm9yICk7XG5cblx0fVxuXG59XG5cbi8qIEdMVEZSRUdJU1RSWSAqL1xuXG5mdW5jdGlvbiBHTFRGUmVnaXN0cnkoKSB7XG5cblx0bGV0IG9iamVjdHMgPSB7fTtcblxuXHRyZXR1cm5cdHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRcdHJldHVybiBvYmplY3RzWyBrZXkgXTtcblxuXHRcdH0sXG5cblx0XHRhZGQ6IGZ1bmN0aW9uICgga2V5LCBvYmplY3QgKSB7XG5cblx0XHRcdG9iamVjdHNbIGtleSBdID0gb2JqZWN0O1xuXG5cdFx0fSxcblxuXHRcdHJlbW92ZTogZnVuY3Rpb24gKCBrZXkgKSB7XG5cblx0XHRcdGRlbGV0ZSBvYmplY3RzWyBrZXkgXTtcblxuXHRcdH0sXG5cblx0XHRyZW1vdmVBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0b2JqZWN0cyA9IHt9O1xuXG5cdFx0fVxuXG5cdH07XG5cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIEVYVEVOU0lPTlMgKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBFWFRFTlNJT05TID0ge1xuXHRLSFJfQklOQVJZX0dMVEY6ICdLSFJfYmluYXJ5X2dsVEYnLFxuXHRLSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTjogJ0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uJyxcblx0S0hSX0xJR0hUU19QVU5DVFVBTDogJ0tIUl9saWdodHNfcHVuY3R1YWwnLFxuXHRLSFJfTUFURVJJQUxTX0NMRUFSQ09BVDogJ0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0Jyxcblx0S0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUzogJ0tIUl9tYXRlcmlhbHNfcGJyU3BlY3VsYXJHbG9zc2luZXNzJyxcblx0S0hSX01BVEVSSUFMU19UUkFOU01JU1NJT046ICdLSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvbicsXG5cdEtIUl9NQVRFUklBTFNfVU5MSVQ6ICdLSFJfbWF0ZXJpYWxzX3VubGl0Jyxcblx0S0hSX1RFWFRVUkVfQkFTSVNVOiAnS0hSX3RleHR1cmVfYmFzaXN1Jyxcblx0S0hSX1RFWFRVUkVfVFJBTlNGT1JNOiAnS0hSX3RleHR1cmVfdHJhbnNmb3JtJyxcblx0S0hSX01FU0hfUVVBTlRJWkFUSU9OOiAnS0hSX21lc2hfcXVhbnRpemF0aW9uJyxcblx0RVhUX1RFWFRVUkVfV0VCUDogJ0VYVF90ZXh0dXJlX3dlYnAnLFxuXHRFWFRfTUVTSE9QVF9DT01QUkVTU0lPTjogJ0VYVF9tZXNob3B0X2NvbXByZXNzaW9uJ1xufTtcblxuLyoqXG5cdCAqIFB1bmN0dWFsIExpZ2h0cyBFeHRlbnNpb25cblx0ICpcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2xpZ2h0c19wdW5jdHVhbFxuXHQgKi9cbmNsYXNzIEdMVEZMaWdodHNFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9MSUdIVFNfUFVOQ1RVQUw7XG5cblx0XHQvLyBPYmplY3QzRCBpbnN0YW5jZSBjYWNoZXNcblx0XHR0aGlzLmNhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcblxuXHR9XG5cblx0X21hcmtEZWZzKCkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3Qgbm9kZURlZnMgPSB0aGlzLnBhcnNlci5qc29uLm5vZGVzIHx8IFtdO1xuXG5cdFx0Zm9yICggbGV0IG5vZGVJbmRleCA9IDAsIG5vZGVMZW5ndGggPSBub2RlRGVmcy5sZW5ndGg7IG5vZGVJbmRleCA8IG5vZGVMZW5ndGg7IG5vZGVJbmRleCArKyApIHtcblxuXHRcdFx0Y29uc3Qgbm9kZURlZiA9IG5vZGVEZWZzWyBub2RlSW5kZXggXTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLmV4dGVuc2lvbnNcblx0XHRcdFx0XHQmJiBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdXG5cdFx0XHRcdFx0JiYgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5saWdodCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBhcnNlci5fYWRkTm9kZVJlZiggdGhpcy5jYWNoZSwgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5saWdodCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdF9sb2FkTGlnaHQoIGxpZ2h0SW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBjYWNoZUtleSA9ICdsaWdodDonICsgbGlnaHRJbmRleDtcblx0XHRsZXQgZGVwZW5kZW5jeSA9IHBhcnNlci5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XG5cblx0XHRpZiAoIGRlcGVuZGVuY3kgKSByZXR1cm4gZGVwZW5kZW5jeTtcblxuXHRcdGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gKCBqc29uLmV4dGVuc2lvbnMgJiYganNvbi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHx8IHt9O1xuXHRcdGNvbnN0IGxpZ2h0RGVmcyA9IGV4dGVuc2lvbnMubGlnaHRzIHx8IFtdO1xuXHRcdGNvbnN0IGxpZ2h0RGVmID0gbGlnaHREZWZzWyBsaWdodEluZGV4IF07XG5cdFx0bGV0IGxpZ2h0Tm9kZTtcblxuXHRcdGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKCAweGZmZmZmZiApO1xuXG5cdFx0aWYgKCBsaWdodERlZi5jb2xvciAhPT0gdW5kZWZpbmVkICkgY29sb3IuZnJvbUFycmF5KCBsaWdodERlZi5jb2xvciApO1xuXG5cdFx0Y29uc3QgcmFuZ2UgPSBsaWdodERlZi5yYW5nZSAhPT0gdW5kZWZpbmVkID8gbGlnaHREZWYucmFuZ2UgOiAwO1xuXG5cdFx0c3dpdGNoICggbGlnaHREZWYudHlwZSApIHtcblxuXHRcdFx0Y2FzZSAnZGlyZWN0aW9uYWwnOlxuXHRcdFx0XHRsaWdodE5vZGUgPSBuZXcgRGlyZWN0aW9uYWxMaWdodCggY29sb3IgKTtcblx0XHRcdFx0bGlnaHROb2RlLnRhcmdldC5wb3NpdGlvbi5zZXQoIDAsIDAsIC0gMSApO1xuXHRcdFx0XHRsaWdodE5vZGUuYWRkKCBsaWdodE5vZGUudGFyZ2V0ICk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdwb2ludCc6XG5cdFx0XHRcdGxpZ2h0Tm9kZSA9IG5ldyBQb2ludExpZ2h0KCBjb2xvciApO1xuXHRcdFx0XHRsaWdodE5vZGUuZGlzdGFuY2UgPSByYW5nZTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3Nwb3QnOlxuXHRcdFx0XHRsaWdodE5vZGUgPSBuZXcgU3BvdExpZ2h0KCBjb2xvciApO1xuXHRcdFx0XHRsaWdodE5vZGUuZGlzdGFuY2UgPSByYW5nZTtcblx0XHRcdFx0Ly8gSGFuZGxlIHNwb3RsaWdodCBwcm9wZXJ0aWVzLlxuXHRcdFx0XHRsaWdodERlZi5zcG90ID0gbGlnaHREZWYuc3BvdCB8fCB7fTtcblx0XHRcdFx0bGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSA9IGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgIT09IHVuZGVmaW5lZCA/IGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgOiAwO1xuXHRcdFx0XHRsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlID0gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZSAhPT0gdW5kZWZpbmVkID8gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZSA6IE1hdGguUEkgLyA0LjA7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5hbmdsZSA9IGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGU7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5wZW51bWJyYSA9IDEuMCAtIGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgLyBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlO1xuXHRcdFx0XHRsaWdodE5vZGUudGFyZ2V0LnBvc2l0aW9uLnNldCggMCwgMCwgLSAxICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5hZGQoIGxpZ2h0Tm9kZS50YXJnZXQgKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuZXhwZWN0ZWQgbGlnaHQgdHlwZTogJyArIGxpZ2h0RGVmLnR5cGUgKTtcblxuXHRcdH1cblxuXHRcdC8vIFNvbWUgbGlnaHRzIChlLmcuIHNwb3QpIGRlZmF1bHQgdG8gYSBwb3NpdGlvbiBvdGhlciB0aGFuIHRoZSBvcmlnaW4uIFJlc2V0IHRoZSBwb3NpdGlvblxuXHRcdC8vIGhlcmUsIGJlY2F1c2Ugbm9kZS1sZXZlbCBwYXJzaW5nIHdpbGwgb25seSBvdmVycmlkZSBwb3NpdGlvbiBpZiBleHBsaWNpdGx5IHNwZWNpZmllZC5cblx0XHRsaWdodE5vZGUucG9zaXRpb24uc2V0KCAwLCAwLCAwICk7XG5cblx0XHRsaWdodE5vZGUuZGVjYXkgPSAyO1xuXG5cdFx0aWYgKCBsaWdodERlZi5pbnRlbnNpdHkgIT09IHVuZGVmaW5lZCApIGxpZ2h0Tm9kZS5pbnRlbnNpdHkgPSBsaWdodERlZi5pbnRlbnNpdHk7XG5cblx0XHRsaWdodE5vZGUubmFtZSA9IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBsaWdodERlZi5uYW1lIHx8ICggJ2xpZ2h0XycgKyBsaWdodEluZGV4ICkgKTtcblxuXHRcdGRlcGVuZGVuY3kgPSBQcm9taXNlLnJlc29sdmUoIGxpZ2h0Tm9kZSApO1xuXG5cdFx0cGFyc2VyLmNhY2hlLmFkZCggY2FjaGVLZXksIGRlcGVuZGVuY3kgKTtcblxuXHRcdHJldHVybiBkZXBlbmRlbmN5O1xuXG5cdH1cblxuXHRjcmVhdGVOb2RlQXR0YWNobWVudCggbm9kZUluZGV4ICkge1xuXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QganNvbiA9IHBhcnNlci5qc29uO1xuXHRcdGNvbnN0IG5vZGVEZWYgPSBqc29uLm5vZGVzWyBub2RlSW5kZXggXTtcblx0XHRjb25zdCBsaWdodERlZiA9ICggbm9kZURlZi5leHRlbnNpb25zICYmIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB8fCB7fTtcblx0XHRjb25zdCBsaWdodEluZGV4ID0gbGlnaHREZWYubGlnaHQ7XG5cblx0XHRpZiAoIGxpZ2h0SW5kZXggPT09IHVuZGVmaW5lZCApIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIHRoaXMuX2xvYWRMaWdodCggbGlnaHRJbmRleCApLnRoZW4oIGZ1bmN0aW9uICggbGlnaHQgKSB7XG5cblx0XHRcdHJldHVybiBwYXJzZXIuX2dldE5vZGVSZWYoIHNlbGYuY2FjaGUsIGxpZ2h0SW5kZXgsIGxpZ2h0ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG59XG5cbi8qKlxuXHQgKiBVbmxpdCBNYXRlcmlhbHMgRXh0ZW5zaW9uXG5cdCAqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdW5saXRcblx0ICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzVW5saXRFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoKSB7XG5cblx0XHRyZXR1cm4gTWVzaEJhc2ljTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZFBhcmFtcyggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSB7XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xuXHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSAxLjA7XG5cblx0XHRjb25zdCBtZXRhbGxpY1JvdWdobmVzcyA9IG1hdGVyaWFsRGVmLnBick1ldGFsbGljUm91Z2huZXNzO1xuXG5cdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcyApIHtcblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IgKSApIHtcblxuXHRcdFx0XHRjb25zdCBhcnJheSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvcjtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoIGFycmF5ICk7XG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSBhcnJheVsgMyBdO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSApICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcblx0ICogQ2xlYXJjb2F0IE1hdGVyaWFscyBFeHRlbnNpb25cblx0ICpcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19jbGVhcmNvYXRcblx0ICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX0NMRUFSQ09BVDtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0RmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdCA9IGV4dGVuc2lvbi5jbGVhcmNvYXRGYWN0b3I7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnY2xlYXJjb2F0TWFwJywgZXh0ZW5zaW9uLmNsZWFyY29hdFRleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdFJvdWdobmVzcyA9IGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NGYWN0b3I7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnY2xlYXJjb2F0Um91Z2huZXNzTWFwJywgZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2NsZWFyY29hdE5vcm1hbE1hcCcsIGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlICkgKTtcblxuXHRcdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IHNjYWxlID0gZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUuc2NhbGU7XG5cblx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTE0MzgjaXNzdWVjb21tZW50LTUwNzAwMzk5NVxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5jbGVhcmNvYXROb3JtYWxTY2FsZSA9IG5ldyBWZWN0b3IyKCBzY2FsZSwgLSBzY2FsZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cbn1cblxuLyoqXG5cdCAqIFRyYW5zbWlzc2lvbiBNYXRlcmlhbHMgRXh0ZW5zaW9uXG5cdCAqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uXG5cdCAqIERyYWZ0OiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvcHVsbC8xNjk4XG5cdCAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc1RyYW5zbWlzc2lvbkV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19UUkFOU01JU1NJT047XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdGlmICggZXh0ZW5zaW9uLnRyYW5zbWlzc2lvbkZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy50cmFuc21pc3Npb24gPSBleHRlbnNpb24udHJhbnNtaXNzaW9uRmFjdG9yO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24udHJhbnNtaXNzaW9uVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3RyYW5zbWlzc2lvbk1hcCcsIGV4dGVuc2lvbi50cmFuc21pc3Npb25UZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcblx0ICogQmFzaXNVIFRleHR1cmUgRXh0ZW5zaW9uXG5cdCAqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl90ZXh0dXJlX2Jhc2lzdVxuXHQgKi9cbmNsYXNzIEdMVEZUZXh0dXJlQmFzaXNVRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9CQVNJU1U7XG5cblx0fVxuXG5cdGxvYWRUZXh0dXJlKCB0ZXh0dXJlSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBqc29uID0gcGFyc2VyLmpzb247XG5cblx0XHRjb25zdCB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XG5cblx0XHRpZiAoICEgdGV4dHVyZURlZi5leHRlbnNpb25zIHx8ICEgdGV4dHVyZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXHRcdGNvbnN0IHNvdXJjZSA9IGpzb24uaW1hZ2VzWyBleHRlbnNpb24uc291cmNlIF07XG5cdFx0Y29uc3QgbG9hZGVyID0gcGFyc2VyLm9wdGlvbnMua3R4MkxvYWRlcjtcblxuXHRcdGlmICggISBsb2FkZXIgKSB7XG5cblx0XHRcdGlmICgganNvbi5leHRlbnNpb25zUmVxdWlyZWQgJiYganNvbi5leHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggdGhpcy5uYW1lICkgPj0gMCApIHtcblxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBzZXRLVFgyTG9hZGVyIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBsb2FkaW5nIEtUWDIgdGV4dHVyZXMnICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gQXNzdW1lcyB0aGF0IHRoZSBleHRlbnNpb24gaXMgb3B0aW9uYWwgYW5kIHRoYXQgYSBmYWxsYmFjayB0ZXh0dXJlIGlzIHByZXNlbnRcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBwYXJzZXIubG9hZFRleHR1cmVJbWFnZSggdGV4dHVyZUluZGV4LCBzb3VyY2UsIGxvYWRlciApO1xuXG5cdH1cblxufVxuXG4vKipcblx0ICogV2ViUCBUZXh0dXJlIEV4dGVuc2lvblxuXHQgKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL0VYVF90ZXh0dXJlX3dlYnBcblx0ICovXG5jbGFzcyBHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLkVYVF9URVhUVVJFX1dFQlA7XG5cdFx0dGhpcy5pc1N1cHBvcnRlZCA9IG51bGw7XG5cblx0fVxuXG5cdGxvYWRUZXh0dXJlKCB0ZXh0dXJlSW5kZXggKSB7XG5cblx0XHRjb25zdCBuYW1lID0gdGhpcy5uYW1lO1xuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbjtcblxuXHRcdGNvbnN0IHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcblxuXHRcdGlmICggISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnMgfHwgISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIG5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIG5hbWUgXTtcblx0XHRjb25zdCBzb3VyY2UgPSBqc29uLmltYWdlc1sgZXh0ZW5zaW9uLnNvdXJjZSBdO1xuXG5cdFx0bGV0IGxvYWRlciA9IHBhcnNlci50ZXh0dXJlTG9hZGVyO1xuXHRcdGlmICggc291cmNlLnVyaSApIHtcblxuXHRcdFx0Y29uc3QgaGFuZGxlciA9IHBhcnNlci5vcHRpb25zLm1hbmFnZXIuZ2V0SGFuZGxlciggc291cmNlLnVyaSApO1xuXHRcdFx0aWYgKCBoYW5kbGVyICE9PSBudWxsICkgbG9hZGVyID0gaGFuZGxlcjtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmRldGVjdFN1cHBvcnQoKS50aGVuKCBmdW5jdGlvbiAoIGlzU3VwcG9ydGVkICkge1xuXG5cdFx0XHRpZiAoIGlzU3VwcG9ydGVkICkgcmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICk7XG5cblx0XHRcdGlmICgganNvbi5leHRlbnNpb25zUmVxdWlyZWQgJiYganNvbi5leHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggbmFtZSApID49IDAgKSB7XG5cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogV2ViUCByZXF1aXJlZCBieSBhc3NldCBidXQgdW5zdXBwb3J0ZWQuJyApO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIEZhbGwgYmFjayB0byBQTkcgb3IgSlBFRy5cblx0XHRcdHJldHVybiBwYXJzZXIubG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHRkZXRlY3RTdXBwb3J0KCkge1xuXG5cdFx0aWYgKCAhIHRoaXMuaXNTdXBwb3J0ZWQgKSB7XG5cblx0XHRcdHRoaXMuaXNTdXBwb3J0ZWQgPSBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlICkge1xuXG5cdFx0XHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cblx0XHRcdFx0Ly8gTG9zc3kgdGVzdCBpbWFnZS4gU3VwcG9ydCBmb3IgbG9zc3kgaW1hZ2VzIGRvZXNuJ3QgZ3VhcmFudGVlIHN1cHBvcnQgZm9yIGFsbFxuXHRcdFx0XHQvLyBXZWJQIGltYWdlcywgdW5mb3J0dW5hdGVseS5cblx0XHRcdFx0aW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1JpSUFBQUJYUlVKUVZsQTRJQllBQUFBd0FRQ2RBU29CQUFFQURzRCtKYVFBQTNBQUFBQUEnO1xuXG5cdFx0XHRcdGltYWdlLm9ubG9hZCA9IGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0XHRyZXNvbHZlKCBpbWFnZS5oZWlnaHQgPT09IDEgKTtcblxuXHRcdFx0XHR9O1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5pc1N1cHBvcnRlZDtcblxuXHR9XG5cbn1cblxuLyoqXG5cdCogbWVzaG9wdCBCdWZmZXJWaWV3IENvbXByZXNzaW9uIEV4dGVuc2lvblxuXHQqXG5cdCogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfbWVzaG9wdF9jb21wcmVzc2lvblxuXHQqL1xuY2xhc3MgR0xURk1lc2hvcHRDb21wcmVzc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuRVhUX01FU0hPUFRfQ09NUFJFU1NJT047XG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cblx0fVxuXG5cdGxvYWRCdWZmZXJWaWV3KCBpbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLnBhcnNlci5qc29uO1xuXHRcdGNvbnN0IGJ1ZmZlclZpZXcgPSBqc29uLmJ1ZmZlclZpZXdzWyBpbmRleCBdO1xuXG5cdFx0aWYgKCBidWZmZXJWaWV3LmV4dGVuc2lvbnMgJiYgYnVmZmVyVmlldy5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcblxuXHRcdFx0Y29uc3QgZXh0ZW5zaW9uRGVmID0gYnVmZmVyVmlldy5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdFx0Y29uc3QgYnVmZmVyID0gdGhpcy5wYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlcicsIGV4dGVuc2lvbkRlZi5idWZmZXIgKTtcblx0XHRcdGNvbnN0IGRlY29kZXIgPSB0aGlzLnBhcnNlci5vcHRpb25zLm1lc2hvcHREZWNvZGVyO1xuXG5cdFx0XHRpZiAoICEgZGVjb2RlciB8fCAhIGRlY29kZXIuc3VwcG9ydGVkICkge1xuXG5cdFx0XHRcdGlmICgganNvbi5leHRlbnNpb25zUmVxdWlyZWQgJiYganNvbi5leHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggdGhpcy5uYW1lICkgPj0gMCApIHtcblxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IHNldE1lc2hvcHREZWNvZGVyIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBsb2FkaW5nIGNvbXByZXNzZWQgZmlsZXMnICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIEFzc3VtZXMgdGhhdCB0aGUgZXh0ZW5zaW9uIGlzIG9wdGlvbmFsIGFuZCB0aGF0IGZhbGxiYWNrIGJ1ZmZlciBkYXRhIGlzIHByZXNlbnRcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBbIGJ1ZmZlciwgZGVjb2Rlci5yZWFkeSBdICkudGhlbiggZnVuY3Rpb24gKCByZXMgKSB7XG5cblx0XHRcdFx0Y29uc3QgYnl0ZU9mZnNldCA9IGV4dGVuc2lvbkRlZi5ieXRlT2Zmc2V0IHx8IDA7XG5cdFx0XHRcdGNvbnN0IGJ5dGVMZW5ndGggPSBleHRlbnNpb25EZWYuYnl0ZUxlbmd0aCB8fCAwO1xuXG5cdFx0XHRcdGNvbnN0IGNvdW50ID0gZXh0ZW5zaW9uRGVmLmNvdW50O1xuXHRcdFx0XHRjb25zdCBzdHJpZGUgPSBleHRlbnNpb25EZWYuYnl0ZVN0cmlkZTtcblxuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBuZXcgQXJyYXlCdWZmZXIoIGNvdW50ICogc3RyaWRlICk7XG5cdFx0XHRcdGNvbnN0IHNvdXJjZSA9IG5ldyBVaW50OEFycmF5KCByZXNbIDAgXSwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCApO1xuXG5cdFx0XHRcdGRlY29kZXIuZGVjb2RlR2x0ZkJ1ZmZlciggbmV3IFVpbnQ4QXJyYXkoIHJlc3VsdCApLCBjb3VudCwgc3RyaWRlLCBzb3VyY2UsIGV4dGVuc2lvbkRlZi5tb2RlLCBleHRlbnNpb25EZWYuZmlsdGVyICk7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG4vKiBCSU5BUlkgRVhURU5TSU9OICovXG5jb25zdCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9NQUdJQyA9ICdnbFRGJztcbmNvbnN0IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCA9IDEyO1xuY29uc3QgQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUyA9IHsgSlNPTjogMHg0RTRGNTM0QSwgQklOOiAweDAwNEU0OTQyIH07XG5cbmNsYXNzIEdMVEZCaW5hcnlFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBkYXRhICkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEY7XG5cdFx0dGhpcy5jb250ZW50ID0gbnVsbDtcblx0XHR0aGlzLmJvZHkgPSBudWxsO1xuXG5cdFx0Y29uc3QgaGVhZGVyVmlldyA9IG5ldyBEYXRhVmlldyggZGF0YSwgMCwgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICk7XG5cblx0XHR0aGlzLmhlYWRlciA9IHtcblx0XHRcdG1hZ2ljOiBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KCBuZXcgVWludDhBcnJheSggZGF0YS5zbGljZSggMCwgNCApICkgKSxcblx0XHRcdHZlcnNpb246IGhlYWRlclZpZXcuZ2V0VWludDMyKCA0LCB0cnVlICksXG5cdFx0XHRsZW5ndGg6IGhlYWRlclZpZXcuZ2V0VWludDMyKCA4LCB0cnVlIClcblx0XHR9O1xuXG5cdFx0aWYgKCB0aGlzLmhlYWRlci5tYWdpYyAhPT0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIGdsVEYtQmluYXJ5IGhlYWRlci4nICk7XG5cblx0XHR9IGVsc2UgaWYgKCB0aGlzLmhlYWRlci52ZXJzaW9uIDwgMi4wICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBMZWdhY3kgYmluYXJ5IGZpbGUgZGV0ZWN0ZWQuJyApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgY2h1bmtDb250ZW50c0xlbmd0aCA9IHRoaXMuaGVhZGVyLmxlbmd0aCAtIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSDtcblx0XHRjb25zdCBjaHVua1ZpZXcgPSBuZXcgRGF0YVZpZXcoIGRhdGEsIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCApO1xuXHRcdGxldCBjaHVua0luZGV4ID0gMDtcblxuXHRcdHdoaWxlICggY2h1bmtJbmRleCA8IGNodW5rQ29udGVudHNMZW5ndGggKSB7XG5cblx0XHRcdGNvbnN0IGNodW5rTGVuZ3RoID0gY2h1bmtWaWV3LmdldFVpbnQzMiggY2h1bmtJbmRleCwgdHJ1ZSApO1xuXHRcdFx0Y2h1bmtJbmRleCArPSA0O1xuXG5cdFx0XHRjb25zdCBjaHVua1R5cGUgPSBjaHVua1ZpZXcuZ2V0VWludDMyKCBjaHVua0luZGV4LCB0cnVlICk7XG5cdFx0XHRjaHVua0luZGV4ICs9IDQ7XG5cblx0XHRcdGlmICggY2h1bmtUeXBlID09PSBCSU5BUllfRVhURU5TSU9OX0NIVU5LX1RZUEVTLkpTT04gKSB7XG5cblx0XHRcdFx0Y29uc3QgY29udGVudEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoIGRhdGEsIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCArIGNodW5rSW5kZXgsIGNodW5rTGVuZ3RoICk7XG5cdFx0XHRcdHRoaXMuY29udGVudCA9IExvYWRlclV0aWxzLmRlY29kZVRleHQoIGNvbnRlbnRBcnJheSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBjaHVua1R5cGUgPT09IEJJTkFSWV9FWFRFTlNJT05fQ0hVTktfVFlQRVMuQklOICkge1xuXG5cdFx0XHRcdGNvbnN0IGJ5dGVPZmZzZXQgPSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKyBjaHVua0luZGV4O1xuXHRcdFx0XHR0aGlzLmJvZHkgPSBkYXRhLnNsaWNlKCBieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgY2h1bmtMZW5ndGggKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBDbGllbnRzIG11c3QgaWdub3JlIGNodW5rcyB3aXRoIHVua25vd24gdHlwZXMuXG5cblx0XHRcdGNodW5rSW5kZXggKz0gY2h1bmtMZW5ndGg7XG5cblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuY29udGVudCA9PT0gbnVsbCApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogSlNPTiBjb250ZW50IG5vdCBmb3VuZC4nICk7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbi8qKlxuXHQgKiBEUkFDTyBNZXNoIENvbXByZXNzaW9uIEV4dGVuc2lvblxuXHQgKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvblxuXHQgKi9cbmNsYXNzIEdMVEZEcmFjb01lc2hDb21wcmVzc2lvbkV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIGpzb24sIGRyYWNvTG9hZGVyICkge1xuXG5cdFx0aWYgKCAhIGRyYWNvTG9hZGVyICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBObyBEUkFDT0xvYWRlciBpbnN0YW5jZSBwcm92aWRlZC4nICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OO1xuXHRcdHRoaXMuanNvbiA9IGpzb247XG5cdFx0dGhpcy5kcmFjb0xvYWRlciA9IGRyYWNvTG9hZGVyO1xuXHRcdHRoaXMuZHJhY29Mb2FkZXIucHJlbG9hZCgpO1xuXG5cdH1cblxuXHRkZWNvZGVQcmltaXRpdmUoIHByaW1pdGl2ZSwgcGFyc2VyICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBkcmFjb0xvYWRlciA9IHRoaXMuZHJhY29Mb2FkZXI7XG5cdFx0Y29uc3QgYnVmZmVyVmlld0luZGV4ID0gcHJpbWl0aXZlLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmJ1ZmZlclZpZXc7XG5cdFx0Y29uc3QgZ2x0ZkF0dHJpYnV0ZU1hcCA9IHByaW1pdGl2ZS5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5hdHRyaWJ1dGVzO1xuXHRcdGNvbnN0IHRocmVlQXR0cmlidXRlTWFwID0ge307XG5cdFx0Y29uc3QgYXR0cmlidXRlTm9ybWFsaXplZE1hcCA9IHt9O1xuXHRcdGNvbnN0IGF0dHJpYnV0ZVR5cGVNYXAgPSB7fTtcblxuXHRcdGZvciAoIGNvbnN0IGF0dHJpYnV0ZU5hbWUgaW4gZ2x0ZkF0dHJpYnV0ZU1hcCApIHtcblxuXHRcdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgYXR0cmlidXRlTmFtZSBdIHx8IGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0dGhyZWVBdHRyaWJ1dGVNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gZ2x0ZkF0dHJpYnV0ZU1hcFsgYXR0cmlidXRlTmFtZSBdO1xuXG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgYXR0cmlidXRlTmFtZSBpbiBwcmltaXRpdmUuYXR0cmlidXRlcyApIHtcblxuXHRcdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgYXR0cmlidXRlTmFtZSBdIHx8IGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aWYgKCBnbHRmQXR0cmlidXRlTWFwWyBhdHRyaWJ1dGVOYW1lIF0gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBhY2Nlc3NvckRlZiA9IGpzb24uYWNjZXNzb3JzWyBwcmltaXRpdmUuYXR0cmlidXRlc1sgYXR0cmlidXRlTmFtZSBdIF07XG5cdFx0XHRcdGNvbnN0IGNvbXBvbmVudFR5cGUgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yRGVmLmNvbXBvbmVudFR5cGUgXTtcblxuXHRcdFx0XHRhdHRyaWJ1dGVUeXBlTWFwWyB0aHJlZUF0dHJpYnV0ZU5hbWUgXSA9IGNvbXBvbmVudFR5cGU7XG5cdFx0XHRcdGF0dHJpYnV0ZU5vcm1hbGl6ZWRNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gYWNjZXNzb3JEZWYubm9ybWFsaXplZCA9PT0gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGJ1ZmZlclZpZXdJbmRleCApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyVmlldyApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUgKSB7XG5cblx0XHRcdFx0ZHJhY29Mb2FkZXIuZGVjb2RlRHJhY29GaWxlKCBidWZmZXJWaWV3LCBmdW5jdGlvbiAoIGdlb21ldHJ5ICkge1xuXG5cdFx0XHRcdFx0Zm9yICggY29uc3QgYXR0cmlidXRlTmFtZSBpbiBnZW9tZXRyeS5hdHRyaWJ1dGVzICkge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBhdHRyaWJ1dGUgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzWyBhdHRyaWJ1dGVOYW1lIF07XG5cdFx0XHRcdFx0XHRjb25zdCBub3JtYWxpemVkID0gYXR0cmlidXRlTm9ybWFsaXplZE1hcFsgYXR0cmlidXRlTmFtZSBdO1xuXG5cdFx0XHRcdFx0XHRpZiAoIG5vcm1hbGl6ZWQgIT09IHVuZGVmaW5lZCApIGF0dHJpYnV0ZS5ub3JtYWxpemVkID0gbm9ybWFsaXplZDtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlc29sdmUoIGdlb21ldHJ5ICk7XG5cblx0XHRcdFx0fSwgdGhyZWVBdHRyaWJ1dGVNYXAsIGF0dHJpYnV0ZVR5cGVNYXAgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxufVxuXG4vKipcblx0ICogVGV4dHVyZSBUcmFuc2Zvcm0gRXh0ZW5zaW9uXG5cdCAqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl90ZXh0dXJlX3RyYW5zZm9ybVxuXHQgKi9cbmNsYXNzIEdMVEZUZXh0dXJlVHJhbnNmb3JtRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNO1xuXG5cdH1cblxuXHRleHRlbmRUZXh0dXJlKCB0ZXh0dXJlLCB0cmFuc2Zvcm0gKSB7XG5cblx0XHR0ZXh0dXJlID0gdGV4dHVyZS5jbG9uZSgpO1xuXG5cdFx0aWYgKCB0cmFuc2Zvcm0ub2Zmc2V0ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHRleHR1cmUub2Zmc2V0LmZyb21BcnJheSggdHJhbnNmb3JtLm9mZnNldCApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0cmFuc2Zvcm0ucm90YXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGV4dHVyZS5yb3RhdGlvbiA9IHRyYW5zZm9ybS5yb3RhdGlvbjtcblxuXHRcdH1cblxuXHRcdGlmICggdHJhbnNmb3JtLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHRleHR1cmUucmVwZWF0LmZyb21BcnJheSggdHJhbnNmb3JtLnNjYWxlICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zZm9ybS50ZXhDb29yZCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBDdXN0b20gVVYgc2V0cyBpbiBcIicgKyB0aGlzLm5hbWUgKyAnXCIgZXh0ZW5zaW9uIG5vdCB5ZXQgc3VwcG9ydGVkLicgKTtcblxuXHRcdH1cblxuXHRcdHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG5cdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0fVxuXG59XG5cbi8qKlxuXHQgKiBTcGVjdWxhci1HbG9zc2luZXNzIEV4dGVuc2lvblxuXHQgKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzc1xuXHQgKi9cblxuLyoqXG5cdCAqIEEgc3ViIGNsYXNzIG9mIFN0YW5kYXJkTWF0ZXJpYWwgd2l0aCBzb21lIG9mIHRoZSBmdW5jdGlvbmFsaXR5XG5cdCAqIGNoYW5nZWQgdmlhIHRoZSBgb25CZWZvcmVDb21waWxlYCBjYWxsYmFja1xuXHQgKiBAcGFpbGhlYWRcblx0ICovXG5cbmNsYXNzIEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsIGV4dGVuZHMgTWVzaFN0YW5kYXJkTWF0ZXJpYWwge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJhbXMgKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5pc0dMVEZTcGVjdWxhckdsb3NzaW5lc3NNYXRlcmlhbCA9IHRydWU7XG5cblx0XHQvL3ZhcmlvdXMgY2h1bmtzIHRoYXQgbmVlZCByZXBsYWNpbmdcblx0XHRjb25zdCBzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rID0gW1xuXHRcdFx0JyNpZmRlZiBVU0VfU1BFQ1VMQVJNQVAnLFxuXHRcdFx0J1x0dW5pZm9ybSBzYW1wbGVyMkQgc3BlY3VsYXJNYXA7Jyxcblx0XHRcdCcjZW5kaWYnXG5cdFx0XS5qb2luKCAnXFxuJyApO1xuXG5cdFx0Y29uc3QgZ2xvc3NpbmVzc01hcFBhcnNGcmFnbWVudENodW5rID0gW1xuXHRcdFx0JyNpZmRlZiBVU0VfR0xPU1NJTkVTU01BUCcsXG5cdFx0XHQnXHR1bmlmb3JtIHNhbXBsZXIyRCBnbG9zc2luZXNzTWFwOycsXG5cdFx0XHQnI2VuZGlmJ1xuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IHNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayA9IFtcblx0XHRcdCd2ZWMzIHNwZWN1bGFyRmFjdG9yID0gc3BlY3VsYXI7Jyxcblx0XHRcdCcjaWZkZWYgVVNFX1NQRUNVTEFSTUFQJyxcblx0XHRcdCdcdHZlYzQgdGV4ZWxTcGVjdWxhciA9IHRleHR1cmUyRCggc3BlY3VsYXJNYXAsIHZVdiApOycsXG5cdFx0XHQnXHR0ZXhlbFNwZWN1bGFyID0gc1JHQlRvTGluZWFyKCB0ZXhlbFNwZWN1bGFyICk7Jyxcblx0XHRcdCdcdC8vIHJlYWRzIGNoYW5uZWwgUkdCLCBjb21wYXRpYmxlIHdpdGggYSBnbFRGIFNwZWN1bGFyLUdsb3NzaW5lc3MgKFJHQkEpIHRleHR1cmUnLFxuXHRcdFx0J1x0c3BlY3VsYXJGYWN0b3IgKj0gdGV4ZWxTcGVjdWxhci5yZ2I7Jyxcblx0XHRcdCcjZW5kaWYnXG5cdFx0XS5qb2luKCAnXFxuJyApO1xuXG5cdFx0Y29uc3QgZ2xvc3NpbmVzc01hcEZyYWdtZW50Q2h1bmsgPSBbXG5cdFx0XHQnZmxvYXQgZ2xvc3NpbmVzc0ZhY3RvciA9IGdsb3NzaW5lc3M7Jyxcblx0XHRcdCcjaWZkZWYgVVNFX0dMT1NTSU5FU1NNQVAnLFxuXHRcdFx0J1x0dmVjNCB0ZXhlbEdsb3NzaW5lc3MgPSB0ZXh0dXJlMkQoIGdsb3NzaW5lc3NNYXAsIHZVdiApOycsXG5cdFx0XHQnXHQvLyByZWFkcyBjaGFubmVsIEEsIGNvbXBhdGlibGUgd2l0aCBhIGdsVEYgU3BlY3VsYXItR2xvc3NpbmVzcyAoUkdCQSkgdGV4dHVyZScsXG5cdFx0XHQnXHRnbG9zc2luZXNzRmFjdG9yICo9IHRleGVsR2xvc3NpbmVzcy5hOycsXG5cdFx0XHQnI2VuZGlmJ1xuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IGxpZ2h0UGh5c2ljYWxGcmFnbWVudENodW5rID0gW1xuXHRcdFx0J1BoeXNpY2FsTWF0ZXJpYWwgbWF0ZXJpYWw7Jyxcblx0XHRcdCdtYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBkaWZmdXNlQ29sb3IucmdiICogKCAxLiAtIG1heCggc3BlY3VsYXJGYWN0b3IuciwgbWF4KCBzcGVjdWxhckZhY3Rvci5nLCBzcGVjdWxhckZhY3Rvci5iICkgKSApOycsXG5cdFx0XHQndmVjMyBkeHkgPSBtYXgoIGFicyggZEZkeCggZ2VvbWV0cnlOb3JtYWwgKSApLCBhYnMoIGRGZHkoIGdlb21ldHJ5Tm9ybWFsICkgKSApOycsXG5cdFx0XHQnZmxvYXQgZ2VvbWV0cnlSb3VnaG5lc3MgPSBtYXgoIG1heCggZHh5LngsIGR4eS55ICksIGR4eS56ICk7Jyxcblx0XHRcdCdtYXRlcmlhbC5zcGVjdWxhclJvdWdobmVzcyA9IG1heCggMS4wIC0gZ2xvc3NpbmVzc0ZhY3RvciwgMC4wNTI1ICk7IC8vIDAuMDUyNSBjb3JyZXNwb25kcyB0byB0aGUgYmFzZSBtaXAgb2YgYSAyNTYgY3ViZW1hcC4nLFxuXHRcdFx0J21hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzICs9IGdlb21ldHJ5Um91Z2huZXNzOycsXG5cdFx0XHQnbWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3MgPSBtaW4oIG1hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzLCAxLjAgKTsnLFxuXHRcdFx0J21hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBzcGVjdWxhckZhY3RvcjsnLFxuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IHVuaWZvcm1zID0ge1xuXHRcdFx0c3BlY3VsYXI6IHsgdmFsdWU6IG5ldyBDb2xvcigpLnNldEhleCggMHhmZmZmZmYgKSB9LFxuXHRcdFx0Z2xvc3NpbmVzczogeyB2YWx1ZTogMSB9LFxuXHRcdFx0c3BlY3VsYXJNYXA6IHsgdmFsdWU6IG51bGwgfSxcblx0XHRcdGdsb3NzaW5lc3NNYXA6IHsgdmFsdWU6IG51bGwgfVxuXHRcdH07XG5cblx0XHR0aGlzLl9leHRyYVVuaWZvcm1zID0gdW5pZm9ybXM7XG5cblx0XHR0aGlzLm9uQmVmb3JlQ29tcGlsZSA9IGZ1bmN0aW9uICggc2hhZGVyICkge1xuXG5cdFx0XHRmb3IgKCBjb25zdCB1bmlmb3JtTmFtZSBpbiB1bmlmb3JtcyApIHtcblxuXHRcdFx0XHRzaGFkZXIudW5pZm9ybXNbIHVuaWZvcm1OYW1lIF0gPSB1bmlmb3Jtc1sgdW5pZm9ybU5hbWUgXTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzaGFkZXIuZnJhZ21lbnRTaGFkZXIgPSBzaGFkZXIuZnJhZ21lbnRTaGFkZXJcblx0XHRcdFx0LnJlcGxhY2UoICd1bmlmb3JtIGZsb2F0IHJvdWdobmVzczsnLCAndW5pZm9ybSB2ZWMzIHNwZWN1bGFyOycgKVxuXHRcdFx0XHQucmVwbGFjZSggJ3VuaWZvcm0gZmxvYXQgbWV0YWxuZXNzOycsICd1bmlmb3JtIGZsb2F0IGdsb3NzaW5lc3M7JyApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPHJvdWdobmVzc21hcF9wYXJzX2ZyYWdtZW50PicsIHNwZWN1bGFyTWFwUGFyc0ZyYWdtZW50Q2h1bmsgKVxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxtZXRhbG5lc3NtYXBfcGFyc19mcmFnbWVudD4nLCBnbG9zc2luZXNzTWFwUGFyc0ZyYWdtZW50Q2h1bmsgKVxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxyb3VnaG5lc3NtYXBfZnJhZ21lbnQ+Jywgc3BlY3VsYXJNYXBGcmFnbWVudENodW5rIClcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8bWV0YWxuZXNzbWFwX2ZyYWdtZW50PicsIGdsb3NzaW5lc3NNYXBGcmFnbWVudENodW5rIClcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8bGlnaHRzX3BoeXNpY2FsX2ZyYWdtZW50PicsIGxpZ2h0UGh5c2ljYWxGcmFnbWVudENodW5rICk7XG5cblx0XHR9O1xuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIHRoaXMsIHtcblxuXHRcdFx0c3BlY3VsYXI6IHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0XHRyZXR1cm4gdW5pZm9ybXMuc3BlY3VsYXIudmFsdWU7XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0XHR1bmlmb3Jtcy5zcGVjdWxhci52YWx1ZSA9IHY7XG5cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0c3BlY3VsYXJNYXA6IHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0XHRyZXR1cm4gdW5pZm9ybXMuc3BlY3VsYXJNYXAudmFsdWU7XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0XHR1bmlmb3Jtcy5zcGVjdWxhck1hcC52YWx1ZSA9IHY7XG5cblx0XHRcdFx0XHRpZiAoIHYgKSB7XG5cblx0XHRcdFx0XHRcdHRoaXMuZGVmaW5lcy5VU0VfU1BFQ1VMQVJNQVAgPSAnJzsgLy8gVVNFX1VWIGlzIHNldCBieSB0aGUgcmVuZGVyZXIgZm9yIHNwZWN1bGFyIG1hcHNcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmRlZmluZXMuVVNFX1NQRUNVTEFSTUFQO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGdsb3NzaW5lc3M6IHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0XHRyZXR1cm4gdW5pZm9ybXMuZ2xvc3NpbmVzcy52YWx1ZTtcblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdFx0XHRcdHVuaWZvcm1zLmdsb3NzaW5lc3MudmFsdWUgPSB2O1xuXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGdsb3NzaW5lc3NNYXA6IHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0XHRyZXR1cm4gdW5pZm9ybXMuZ2xvc3NpbmVzc01hcC52YWx1ZTtcblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdFx0XHRcdHVuaWZvcm1zLmdsb3NzaW5lc3NNYXAudmFsdWUgPSB2O1xuXG5cdFx0XHRcdFx0aWYgKCB2ICkge1xuXG5cdFx0XHRcdFx0XHR0aGlzLmRlZmluZXMuVVNFX0dMT1NTSU5FU1NNQVAgPSAnJztcblx0XHRcdFx0XHRcdHRoaXMuZGVmaW5lcy5VU0VfVVYgPSAnJztcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmRlZmluZXMuVVNFX0dMT1NTSU5FU1NNQVA7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9VVjtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9ICk7XG5cblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3M7XG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzO1xuXHRcdGRlbGV0ZSB0aGlzLm1ldGFsbmVzc01hcDtcblx0XHRkZWxldGUgdGhpcy5yb3VnaG5lc3NNYXA7XG5cblx0XHR0aGlzLnNldFZhbHVlcyggcGFyYW1zICk7XG5cblx0fVxuXG5cdGNvcHkoIHNvdXJjZSApIHtcblxuXHRcdHN1cGVyLmNvcHkoIHNvdXJjZSApO1xuXG5cdFx0dGhpcy5zcGVjdWxhck1hcCA9IHNvdXJjZS5zcGVjdWxhck1hcDtcblx0XHR0aGlzLnNwZWN1bGFyLmNvcHkoIHNvdXJjZS5zcGVjdWxhciApO1xuXHRcdHRoaXMuZ2xvc3NpbmVzc01hcCA9IHNvdXJjZS5nbG9zc2luZXNzTWFwO1xuXHRcdHRoaXMuZ2xvc3NpbmVzcyA9IHNvdXJjZS5nbG9zc2luZXNzO1xuXHRcdGRlbGV0ZSB0aGlzLm1ldGFsbmVzcztcblx0XHRkZWxldGUgdGhpcy5yb3VnaG5lc3M7XG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzTWFwO1xuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzc01hcDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cbn1cblxuXG5jbGFzcyBHTFRGTWF0ZXJpYWxzUGJyU3BlY3VsYXJHbG9zc2luZXNzRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUztcblxuXHRcdHRoaXMuc3BlY3VsYXJHbG9zc2luZXNzUGFyYW1zID0gW1xuXHRcdFx0J2NvbG9yJyxcblx0XHRcdCdtYXAnLFxuXHRcdFx0J2xpZ2h0TWFwJyxcblx0XHRcdCdsaWdodE1hcEludGVuc2l0eScsXG5cdFx0XHQnYW9NYXAnLFxuXHRcdFx0J2FvTWFwSW50ZW5zaXR5Jyxcblx0XHRcdCdlbWlzc2l2ZScsXG5cdFx0XHQnZW1pc3NpdmVJbnRlbnNpdHknLFxuXHRcdFx0J2VtaXNzaXZlTWFwJyxcblx0XHRcdCdidW1wTWFwJyxcblx0XHRcdCdidW1wU2NhbGUnLFxuXHRcdFx0J25vcm1hbE1hcCcsXG5cdFx0XHQnbm9ybWFsTWFwVHlwZScsXG5cdFx0XHQnZGlzcGxhY2VtZW50TWFwJyxcblx0XHRcdCdkaXNwbGFjZW1lbnRTY2FsZScsXG5cdFx0XHQnZGlzcGxhY2VtZW50QmlhcycsXG5cdFx0XHQnc3BlY3VsYXJNYXAnLFxuXHRcdFx0J3NwZWN1bGFyJyxcblx0XHRcdCdnbG9zc2luZXNzTWFwJyxcblx0XHRcdCdnbG9zc2luZXNzJyxcblx0XHRcdCdhbHBoYU1hcCcsXG5cdFx0XHQnZW52TWFwJyxcblx0XHRcdCdlbnZNYXBJbnRlbnNpdHknLFxuXHRcdFx0J3JlZnJhY3Rpb25SYXRpbycsXG5cdFx0XTtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCkge1xuXG5cdFx0cmV0dXJuIEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsO1xuXG5cdH1cblxuXHRleHRlbmRQYXJhbXMoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkge1xuXG5cdFx0Y29uc3QgcGJyU3BlY3VsYXJHbG9zc2luZXNzID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cblx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xuXHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSAxLjA7XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlRmFjdG9yICkgKSB7XG5cblx0XHRcdGNvbnN0IGFycmF5ID0gcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VGYWN0b3I7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yLmZyb21BcnJheSggYXJyYXkgKTtcblx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSBhcnJheVsgMyBdO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZVRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtYXAnLCBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZVRleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmUgPSBuZXcgQ29sb3IoIDAuMCwgMC4wLCAwLjAgKTtcblx0XHRtYXRlcmlhbFBhcmFtcy5nbG9zc2luZXNzID0gcGJyU3BlY3VsYXJHbG9zc2luZXNzLmdsb3NzaW5lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCA/IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5nbG9zc2luZXNzRmFjdG9yIDogMS4wO1xuXHRcdG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XG5cblx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckZhY3RvciApICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5zcGVjdWxhci5mcm9tQXJyYXkoIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckZhY3RvciApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRjb25zdCBzcGVjR2xvc3NNYXBEZWYgPSBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZTtcblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnZ2xvc3NpbmVzc01hcCcsIHNwZWNHbG9zc01hcERlZiApICk7XG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3NwZWN1bGFyTWFwJywgc3BlY0dsb3NzTWFwRGVmICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxuXHRjcmVhdGVNYXRlcmlhbCggbWF0ZXJpYWxQYXJhbXMgKSB7XG5cblx0XHRjb25zdCBtYXRlcmlhbCA9IG5ldyBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbCggbWF0ZXJpYWxQYXJhbXMgKTtcblx0XHRtYXRlcmlhbC5mb2cgPSB0cnVlO1xuXG5cdFx0bWF0ZXJpYWwuY29sb3IgPSBtYXRlcmlhbFBhcmFtcy5jb2xvcjtcblxuXHRcdG1hdGVyaWFsLm1hcCA9IG1hdGVyaWFsUGFyYW1zLm1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLm1hcDtcblxuXHRcdG1hdGVyaWFsLmxpZ2h0TWFwID0gbnVsbDtcblx0XHRtYXRlcmlhbC5saWdodE1hcEludGVuc2l0eSA9IDEuMDtcblxuXHRcdG1hdGVyaWFsLmFvTWFwID0gbWF0ZXJpYWxQYXJhbXMuYW9NYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5hb01hcDtcblx0XHRtYXRlcmlhbC5hb01hcEludGVuc2l0eSA9IDEuMDtcblxuXHRcdG1hdGVyaWFsLmVtaXNzaXZlID0gbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmU7XG5cdFx0bWF0ZXJpYWwuZW1pc3NpdmVJbnRlbnNpdHkgPSAxLjA7XG5cdFx0bWF0ZXJpYWwuZW1pc3NpdmVNYXAgPSBtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZU1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlTWFwO1xuXG5cdFx0bWF0ZXJpYWwuYnVtcE1hcCA9IG1hdGVyaWFsUGFyYW1zLmJ1bXBNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5idW1wTWFwO1xuXHRcdG1hdGVyaWFsLmJ1bXBTY2FsZSA9IDE7XG5cblx0XHRtYXRlcmlhbC5ub3JtYWxNYXAgPSBtYXRlcmlhbFBhcmFtcy5ub3JtYWxNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5ub3JtYWxNYXA7XG5cdFx0bWF0ZXJpYWwubm9ybWFsTWFwVHlwZSA9IFRhbmdlbnRTcGFjZU5vcm1hbE1hcDtcblxuXHRcdGlmICggbWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGUgKSBtYXRlcmlhbC5ub3JtYWxTY2FsZSA9IG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlO1xuXG5cdFx0bWF0ZXJpYWwuZGlzcGxhY2VtZW50TWFwID0gbnVsbDtcblx0XHRtYXRlcmlhbC5kaXNwbGFjZW1lbnRTY2FsZSA9IDE7XG5cdFx0bWF0ZXJpYWwuZGlzcGxhY2VtZW50QmlhcyA9IDA7XG5cblx0XHRtYXRlcmlhbC5zcGVjdWxhck1hcCA9IG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXJNYXA7XG5cdFx0bWF0ZXJpYWwuc3BlY3VsYXIgPSBtYXRlcmlhbFBhcmFtcy5zcGVjdWxhcjtcblxuXHRcdG1hdGVyaWFsLmdsb3NzaW5lc3NNYXAgPSBtYXRlcmlhbFBhcmFtcy5nbG9zc2luZXNzTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzc01hcDtcblx0XHRtYXRlcmlhbC5nbG9zc2luZXNzID0gbWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzcztcblxuXHRcdG1hdGVyaWFsLmFscGhhTWFwID0gbnVsbDtcblxuXHRcdG1hdGVyaWFsLmVudk1hcCA9IG1hdGVyaWFsUGFyYW1zLmVudk1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmVudk1hcDtcblx0XHRtYXRlcmlhbC5lbnZNYXBJbnRlbnNpdHkgPSAxLjA7XG5cblx0XHRtYXRlcmlhbC5yZWZyYWN0aW9uUmF0aW8gPSAwLjk4O1xuXG5cdFx0cmV0dXJuIG1hdGVyaWFsO1xuXG5cdH1cblxufVxuXG4vKipcblx0ICogTWVzaCBRdWFudGl6YXRpb24gRXh0ZW5zaW9uXG5cdCAqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tZXNoX3F1YW50aXphdGlvblxuXHQgKi9cbmNsYXNzIEdMVEZNZXNoUXVhbnRpemF0aW9uRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01FU0hfUVVBTlRJWkFUSU9OO1xuXG5cdH1cblxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKiogSU5URVJQT0xBVElPTiAqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIFNwbGluZSBJbnRlcnBvbGF0aW9uXG4vLyBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2FwcGVuZGl4LWMtc3BsaW5lLWludGVycG9sYXRpb25cbmNsYXNzIEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50IGV4dGVuZHMgSW50ZXJwb2xhbnQge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJhbWV0ZXJQb3NpdGlvbnMsIHNhbXBsZVZhbHVlcywgc2FtcGxlU2l6ZSwgcmVzdWx0QnVmZmVyICkge1xuXG5cdFx0c3VwZXIoIHBhcmFtZXRlclBvc2l0aW9ucywgc2FtcGxlVmFsdWVzLCBzYW1wbGVTaXplLCByZXN1bHRCdWZmZXIgKTtcblxuXHR9XG5cblx0Y29weVNhbXBsZVZhbHVlXyggaW5kZXggKSB7XG5cblx0XHQvLyBDb3BpZXMgYSBzYW1wbGUgdmFsdWUgdG8gdGhlIHJlc3VsdCBidWZmZXIuIFNlZSBkZXNjcmlwdGlvbiBvZiBnbFRGXG5cdFx0Ly8gQ1VCSUNTUExJTkUgdmFsdWVzIGxheW91dCBpbiBpbnRlcnBvbGF0ZV8oKSBmdW5jdGlvbiBiZWxvdy5cblxuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMucmVzdWx0QnVmZmVyLFxuXHRcdFx0dmFsdWVzID0gdGhpcy5zYW1wbGVWYWx1ZXMsXG5cdFx0XHR2YWx1ZVNpemUgPSB0aGlzLnZhbHVlU2l6ZSxcblx0XHRcdG9mZnNldCA9IGluZGV4ICogdmFsdWVTaXplICogMyArIHZhbHVlU2l6ZTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSAhPT0gdmFsdWVTaXplOyBpICsrICkge1xuXG5cdFx0XHRyZXN1bHRbIGkgXSA9IHZhbHVlc1sgb2Zmc2V0ICsgaSBdO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblxuXHR9XG5cbn1cblxuR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmJlZm9yZVN0YXJ0XyA9IEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5jb3B5U2FtcGxlVmFsdWVfO1xuXG5HTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuYWZ0ZXJFbmRfID0gR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmNvcHlTYW1wbGVWYWx1ZV87XG5cbkdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5pbnRlcnBvbGF0ZV8gPSBmdW5jdGlvbiAoIGkxLCB0MCwgdCwgdDEgKSB7XG5cblx0Y29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHRCdWZmZXI7XG5cdGNvbnN0IHZhbHVlcyA9IHRoaXMuc2FtcGxlVmFsdWVzO1xuXHRjb25zdCBzdHJpZGUgPSB0aGlzLnZhbHVlU2l6ZTtcblxuXHRjb25zdCBzdHJpZGUyID0gc3RyaWRlICogMjtcblx0Y29uc3Qgc3RyaWRlMyA9IHN0cmlkZSAqIDM7XG5cblx0Y29uc3QgdGQgPSB0MSAtIHQwO1xuXG5cdGNvbnN0IHAgPSAoIHQgLSB0MCApIC8gdGQ7XG5cdGNvbnN0IHBwID0gcCAqIHA7XG5cdGNvbnN0IHBwcCA9IHBwICogcDtcblxuXHRjb25zdCBvZmZzZXQxID0gaTEgKiBzdHJpZGUzO1xuXHRjb25zdCBvZmZzZXQwID0gb2Zmc2V0MSAtIHN0cmlkZTM7XG5cblx0Y29uc3QgczIgPSAtIDIgKiBwcHAgKyAzICogcHA7XG5cdGNvbnN0IHMzID0gcHBwIC0gcHA7XG5cdGNvbnN0IHMwID0gMSAtIHMyO1xuXHRjb25zdCBzMSA9IHMzIC0gcHAgKyBwO1xuXG5cdC8vIExheW91dCBvZiBrZXlmcmFtZSBvdXRwdXQgdmFsdWVzIGZvciBDVUJJQ1NQTElORSBhbmltYXRpb25zOlxuXHQvLyAgIFsgaW5UYW5nZW50XzEsIHNwbGluZVZlcnRleF8xLCBvdXRUYW5nZW50XzEsIGluVGFuZ2VudF8yLCBzcGxpbmVWZXJ0ZXhfMiwgLi4uIF1cblx0Zm9yICggbGV0IGkgPSAwOyBpICE9PSBzdHJpZGU7IGkgKysgKSB7XG5cblx0XHRjb25zdCBwMCA9IHZhbHVlc1sgb2Zmc2V0MCArIGkgKyBzdHJpZGUgXTsgLy8gc3BsaW5lVmVydGV4X2tcblx0XHRjb25zdCBtMCA9IHZhbHVlc1sgb2Zmc2V0MCArIGkgKyBzdHJpZGUyIF0gKiB0ZDsgLy8gb3V0VGFuZ2VudF9rICogKHRfaysxIC0gdF9rKVxuXHRcdGNvbnN0IHAxID0gdmFsdWVzWyBvZmZzZXQxICsgaSArIHN0cmlkZSBdOyAvLyBzcGxpbmVWZXJ0ZXhfaysxXG5cdFx0Y29uc3QgbTEgPSB2YWx1ZXNbIG9mZnNldDEgKyBpIF0gKiB0ZDsgLy8gaW5UYW5nZW50X2srMSAqICh0X2srMSAtIHRfaylcblxuXHRcdHJlc3VsdFsgaSBdID0gczAgKiBwMCArIHMxICogbTAgKyBzMiAqIHAxICsgczMgKiBtMTtcblxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcblxufTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIElOVEVSTkFMUyAqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKiBDT05TVEFOVFMgKi9cblxuY29uc3QgV0VCR0xfQ09OU1RBTlRTID0ge1xuXHRGTE9BVDogNTEyNixcblx0Ly9GTE9BVF9NQVQyOiAzNTY3NCxcblx0RkxPQVRfTUFUMzogMzU2NzUsXG5cdEZMT0FUX01BVDQ6IDM1Njc2LFxuXHRGTE9BVF9WRUMyOiAzNTY2NCxcblx0RkxPQVRfVkVDMzogMzU2NjUsXG5cdEZMT0FUX1ZFQzQ6IDM1NjY2LFxuXHRMSU5FQVI6IDk3MjksXG5cdFJFUEVBVDogMTA0OTcsXG5cdFNBTVBMRVJfMkQ6IDM1Njc4LFxuXHRQT0lOVFM6IDAsXG5cdExJTkVTOiAxLFxuXHRMSU5FX0xPT1A6IDIsXG5cdExJTkVfU1RSSVA6IDMsXG5cdFRSSUFOR0xFUzogNCxcblx0VFJJQU5HTEVfU1RSSVA6IDUsXG5cdFRSSUFOR0xFX0ZBTjogNixcblx0VU5TSUdORURfQllURTogNTEyMSxcblx0VU5TSUdORURfU0hPUlQ6IDUxMjNcbn07XG5cbmNvbnN0IFdFQkdMX0NPTVBPTkVOVF9UWVBFUyA9IHtcblx0NTEyMDogSW50OEFycmF5LFxuXHQ1MTIxOiBVaW50OEFycmF5LFxuXHQ1MTIyOiBJbnQxNkFycmF5LFxuXHQ1MTIzOiBVaW50MTZBcnJheSxcblx0NTEyNTogVWludDMyQXJyYXksXG5cdDUxMjY6IEZsb2F0MzJBcnJheVxufTtcblxuY29uc3QgV0VCR0xfRklMVEVSUyA9IHtcblx0OTcyODogTmVhcmVzdEZpbHRlcixcblx0OTcyOTogTGluZWFyRmlsdGVyLFxuXHQ5OTg0OiBOZWFyZXN0TWlwbWFwTmVhcmVzdEZpbHRlcixcblx0OTk4NTogTGluZWFyTWlwbWFwTmVhcmVzdEZpbHRlcixcblx0OTk4NjogTmVhcmVzdE1pcG1hcExpbmVhckZpbHRlcixcblx0OTk4NzogTGluZWFyTWlwbWFwTGluZWFyRmlsdGVyXG59O1xuXG5jb25zdCBXRUJHTF9XUkFQUElOR1MgPSB7XG5cdDMzMDcxOiBDbGFtcFRvRWRnZVdyYXBwaW5nLFxuXHQzMzY0ODogTWlycm9yZWRSZXBlYXRXcmFwcGluZyxcblx0MTA0OTc6IFJlcGVhdFdyYXBwaW5nXG59O1xuXG5jb25zdCBXRUJHTF9UWVBFX1NJWkVTID0ge1xuXHQnU0NBTEFSJzogMSxcblx0J1ZFQzInOiAyLFxuXHQnVkVDMyc6IDMsXG5cdCdWRUM0JzogNCxcblx0J01BVDInOiA0LFxuXHQnTUFUMyc6IDksXG5cdCdNQVQ0JzogMTZcbn07XG5cbmNvbnN0IEFUVFJJQlVURVMgPSB7XG5cdFBPU0lUSU9OOiAncG9zaXRpb24nLFxuXHROT1JNQUw6ICdub3JtYWwnLFxuXHRUQU5HRU5UOiAndGFuZ2VudCcsXG5cdFRFWENPT1JEXzA6ICd1dicsXG5cdFRFWENPT1JEXzE6ICd1djInLFxuXHRDT0xPUl8wOiAnY29sb3InLFxuXHRXRUlHSFRTXzA6ICdza2luV2VpZ2h0Jyxcblx0Sk9JTlRTXzA6ICdza2luSW5kZXgnLFxufTtcblxuY29uc3QgUEFUSF9QUk9QRVJUSUVTID0ge1xuXHRzY2FsZTogJ3NjYWxlJyxcblx0dHJhbnNsYXRpb246ICdwb3NpdGlvbicsXG5cdHJvdGF0aW9uOiAncXVhdGVybmlvbicsXG5cdHdlaWdodHM6ICdtb3JwaFRhcmdldEluZmx1ZW5jZXMnXG59O1xuXG5jb25zdCBJTlRFUlBPTEFUSU9OID0ge1xuXHRDVUJJQ1NQTElORTogdW5kZWZpbmVkLCAvLyBXZSB1c2UgYSBjdXN0b20gaW50ZXJwb2xhbnQgKEdMVEZDdWJpY1NwbGluZUludGVycG9sYXRpb24pIGZvciBDVUJJQ1NQTElORSB0cmFja3MuIEVhY2hcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBrZXlmcmFtZSB0cmFjayB3aWxsIGJlIGluaXRpYWxpemVkIHdpdGggYSBkZWZhdWx0IGludGVycG9sYXRpb24gdHlwZSwgdGhlbiBtb2RpZmllZC5cblx0TElORUFSOiBJbnRlcnBvbGF0ZUxpbmVhcixcblx0U1RFUDogSW50ZXJwb2xhdGVEaXNjcmV0ZVxufTtcblxuY29uc3QgQUxQSEFfTU9ERVMgPSB7XG5cdE9QQVFVRTogJ09QQVFVRScsXG5cdE1BU0s6ICdNQVNLJyxcblx0QkxFTkQ6ICdCTEVORCdcbn07XG5cbi8qIFVUSUxJVFkgRlVOQ1RJT05TICovXG5cbmZ1bmN0aW9uIHJlc29sdmVVUkwoIHVybCwgcGF0aCApIHtcblxuXHQvLyBJbnZhbGlkIFVSTFxuXHRpZiAoIHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnIHx8IHVybCA9PT0gJycgKSByZXR1cm4gJyc7XG5cblx0Ly8gSG9zdCBSZWxhdGl2ZSBVUkxcblx0aWYgKCAvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KCBwYXRoICkgJiYgL15cXC8vLnRlc3QoIHVybCApICkge1xuXG5cdFx0cGF0aCA9IHBhdGgucmVwbGFjZSggLyheaHR0cHM/OlxcL1xcL1teXFwvXSspLiovaSwgJyQxJyApO1xuXG5cdH1cblxuXHQvLyBBYnNvbHV0ZSBVUkwgaHR0cDovLyxodHRwczovLywvL1xuXHRpZiAoIC9eKGh0dHBzPzopP1xcL1xcLy9pLnRlc3QoIHVybCApICkgcmV0dXJuIHVybDtcblxuXHQvLyBEYXRhIFVSSVxuXHRpZiAoIC9eZGF0YTouKiwuKiQvaS50ZXN0KCB1cmwgKSApIHJldHVybiB1cmw7XG5cblx0Ly8gQmxvYiBVUkxcblx0aWYgKCAvXmJsb2I6LiokL2kudGVzdCggdXJsICkgKSByZXR1cm4gdXJsO1xuXG5cdC8vIFJlbGF0aXZlIFVSTFxuXHRyZXR1cm4gcGF0aCArIHVybDtcblxufVxuXG4vKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNkZWZhdWx0LW1hdGVyaWFsXG5cdCAqL1xuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdE1hdGVyaWFsKCBjYWNoZSApIHtcblxuXHRpZiAoIGNhY2hlWyAnRGVmYXVsdE1hdGVyaWFsJyBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRjYWNoZVsgJ0RlZmF1bHRNYXRlcmlhbCcgXSA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCgge1xuXHRcdFx0Y29sb3I6IDB4RkZGRkZGLFxuXHRcdFx0ZW1pc3NpdmU6IDB4MDAwMDAwLFxuXHRcdFx0bWV0YWxuZXNzOiAxLFxuXHRcdFx0cm91Z2huZXNzOiAxLFxuXHRcdFx0dHJhbnNwYXJlbnQ6IGZhbHNlLFxuXHRcdFx0ZGVwdGhUZXN0OiB0cnVlLFxuXHRcdFx0c2lkZTogRnJvbnRTaWRlXG5cdFx0fSApO1xuXG5cdH1cblxuXHRyZXR1cm4gY2FjaGVbICdEZWZhdWx0TWF0ZXJpYWwnIF07XG5cbn1cblxuZnVuY3Rpb24gYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBrbm93bkV4dGVuc2lvbnMsIG9iamVjdCwgb2JqZWN0RGVmICkge1xuXG5cdC8vIEFkZCB1bmtub3duIGdsVEYgZXh0ZW5zaW9ucyB0byBhbiBvYmplY3QncyB1c2VyRGF0YS5cblxuXHRmb3IgKCBjb25zdCBuYW1lIGluIG9iamVjdERlZi5leHRlbnNpb25zICkge1xuXG5cdFx0aWYgKCBrbm93bkV4dGVuc2lvbnNbIG5hbWUgXSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnMgPSBvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnMgfHwge307XG5cdFx0XHRvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnNbIG5hbWUgXSA9IG9iamVjdERlZi5leHRlbnNpb25zWyBuYW1lIF07XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbi8qKlxuXHQgKiBAcGFyYW0ge09iamVjdDNEfE1hdGVyaWFsfEJ1ZmZlckdlb21ldHJ5fSBvYmplY3Rcblx0ICogQHBhcmFtIHtHTFRGLmRlZmluaXRpb259IGdsdGZEZWZcblx0ICovXG5mdW5jdGlvbiBhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBvYmplY3QsIGdsdGZEZWYgKSB7XG5cblx0aWYgKCBnbHRmRGVmLmV4dHJhcyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0aWYgKCB0eXBlb2YgZ2x0ZkRlZi5leHRyYXMgPT09ICdvYmplY3QnICkge1xuXG5cdFx0XHRPYmplY3QuYXNzaWduKCBvYmplY3QudXNlckRhdGEsIGdsdGZEZWYuZXh0cmFzICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBJZ25vcmluZyBwcmltaXRpdmUgdHlwZSAuZXh0cmFzLCAnICsgZ2x0ZkRlZi5leHRyYXMgKTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbW9ycGgtdGFyZ2V0c1xuXHQgKlxuXHQgKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxuXHQgKiBAcGFyYW0ge0FycmF5PEdMVEYuVGFyZ2V0Pn0gdGFyZ2V0c1xuXHQgKiBAcGFyYW0ge0dMVEZQYXJzZXJ9IHBhcnNlclxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEJ1ZmZlckdlb21ldHJ5Pn1cblx0ICovXG5mdW5jdGlvbiBhZGRNb3JwaFRhcmdldHMoIGdlb21ldHJ5LCB0YXJnZXRzLCBwYXJzZXIgKSB7XG5cblx0bGV0IGhhc01vcnBoUG9zaXRpb24gPSBmYWxzZTtcblx0bGV0IGhhc01vcnBoTm9ybWFsID0gZmFsc2U7XG5cblx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHRhcmdldHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRjb25zdCB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XG5cblx0XHRpZiAoIHRhcmdldC5QT1NJVElPTiAhPT0gdW5kZWZpbmVkICkgaGFzTW9ycGhQb3NpdGlvbiA9IHRydWU7XG5cdFx0aWYgKCB0YXJnZXQuTk9STUFMICE9PSB1bmRlZmluZWQgKSBoYXNNb3JwaE5vcm1hbCA9IHRydWU7XG5cblx0XHRpZiAoIGhhc01vcnBoUG9zaXRpb24gJiYgaGFzTW9ycGhOb3JtYWwgKSBicmVhaztcblxuXHR9XG5cblx0aWYgKCAhIGhhc01vcnBoUG9zaXRpb24gJiYgISBoYXNNb3JwaE5vcm1hbCApIHJldHVybiBQcm9taXNlLnJlc29sdmUoIGdlb21ldHJ5ICk7XG5cblx0Y29uc3QgcGVuZGluZ1Bvc2l0aW9uQWNjZXNzb3JzID0gW107XG5cdGNvbnN0IHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMgPSBbXTtcblxuXHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdGNvbnN0IHRhcmdldCA9IHRhcmdldHNbIGkgXTtcblxuXHRcdGlmICggaGFzTW9ycGhQb3NpdGlvbiApIHtcblxuXHRcdFx0Y29uc3QgcGVuZGluZ0FjY2Vzc29yID0gdGFyZ2V0LlBPU0lUSU9OICE9PSB1bmRlZmluZWRcblx0XHRcdFx0PyBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgdGFyZ2V0LlBPU0lUSU9OIClcblx0XHRcdFx0OiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xuXG5cdFx0XHRwZW5kaW5nUG9zaXRpb25BY2Nlc3NvcnMucHVzaCggcGVuZGluZ0FjY2Vzc29yICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGhhc01vcnBoTm9ybWFsICkge1xuXG5cdFx0XHRjb25zdCBwZW5kaW5nQWNjZXNzb3IgPSB0YXJnZXQuTk9STUFMICE9PSB1bmRlZmluZWRcblx0XHRcdFx0PyBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgdGFyZ2V0Lk5PUk1BTCApXG5cdFx0XHRcdDogZ2VvbWV0cnkuYXR0cmlidXRlcy5ub3JtYWw7XG5cblx0XHRcdHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMucHVzaCggcGVuZGluZ0FjY2Vzc29yICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiBQcm9taXNlLmFsbCggW1xuXHRcdFByb21pc2UuYWxsKCBwZW5kaW5nUG9zaXRpb25BY2Nlc3NvcnMgKSxcblx0XHRQcm9taXNlLmFsbCggcGVuZGluZ05vcm1hbEFjY2Vzc29ycyApXG5cdF0gKS50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29ycyApIHtcblxuXHRcdGNvbnN0IG1vcnBoUG9zaXRpb25zID0gYWNjZXNzb3JzWyAwIF07XG5cdFx0Y29uc3QgbW9ycGhOb3JtYWxzID0gYWNjZXNzb3JzWyAxIF07XG5cblx0XHRpZiAoIGhhc01vcnBoUG9zaXRpb24gKSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb24gPSBtb3JwaFBvc2l0aW9ucztcblx0XHRpZiAoIGhhc01vcnBoTm9ybWFsICkgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLm5vcm1hbCA9IG1vcnBoTm9ybWFscztcblx0XHRnZW9tZXRyeS5tb3JwaFRhcmdldHNSZWxhdGl2ZSA9IHRydWU7XG5cblx0XHRyZXR1cm4gZ2VvbWV0cnk7XG5cblx0fSApO1xuXG59XG5cbi8qKlxuXHQgKiBAcGFyYW0ge01lc2h9IG1lc2hcblx0ICogQHBhcmFtIHtHTFRGLk1lc2h9IG1lc2hEZWZcblx0ICovXG5mdW5jdGlvbiB1cGRhdGVNb3JwaFRhcmdldHMoIG1lc2gsIG1lc2hEZWYgKSB7XG5cblx0bWVzaC51cGRhdGVNb3JwaFRhcmdldHMoKTtcblxuXHRpZiAoIG1lc2hEZWYud2VpZ2h0cyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG1lc2hEZWYud2VpZ2h0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0bWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXNbIGkgXSA9IG1lc2hEZWYud2VpZ2h0c1sgaSBdO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvLyAuZXh0cmFzIGhhcyB1c2VyLWRlZmluZWQgZGF0YSwgc28gY2hlY2sgdGhhdCAuZXh0cmFzLnRhcmdldE5hbWVzIGlzIGFuIGFycmF5LlxuXHRpZiAoIG1lc2hEZWYuZXh0cmFzICYmIEFycmF5LmlzQXJyYXkoIG1lc2hEZWYuZXh0cmFzLnRhcmdldE5hbWVzICkgKSB7XG5cblx0XHRjb25zdCB0YXJnZXROYW1lcyA9IG1lc2hEZWYuZXh0cmFzLnRhcmdldE5hbWVzO1xuXG5cdFx0aWYgKCBtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlcy5sZW5ndGggPT09IHRhcmdldE5hbWVzLmxlbmd0aCApIHtcblxuXHRcdFx0bWVzaC5tb3JwaFRhcmdldERpY3Rpb25hcnkgPSB7fTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHRhcmdldE5hbWVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdG1lc2gubW9ycGhUYXJnZXREaWN0aW9uYXJ5WyB0YXJnZXROYW1lc1sgaSBdIF0gPSBpO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBJbnZhbGlkIGV4dHJhcy50YXJnZXROYW1lcyBsZW5ndGguIElnbm9yaW5nIG5hbWVzLicgKTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlS2V5KCBwcmltaXRpdmVEZWYgKSB7XG5cblx0Y29uc3QgZHJhY29FeHRlbnNpb24gPSBwcmltaXRpdmVEZWYuZXh0ZW5zaW9ucyAmJiBwcmltaXRpdmVEZWYuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTiBdO1xuXHRsZXQgZ2VvbWV0cnlLZXk7XG5cblx0aWYgKCBkcmFjb0V4dGVuc2lvbiApIHtcblxuXHRcdGdlb21ldHJ5S2V5ID0gJ2RyYWNvOicgKyBkcmFjb0V4dGVuc2lvbi5idWZmZXJWaWV3XG5cdFx0XHRcdCsgJzonICsgZHJhY29FeHRlbnNpb24uaW5kaWNlc1xuXHRcdFx0XHQrICc6JyArIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoIGRyYWNvRXh0ZW5zaW9uLmF0dHJpYnV0ZXMgKTtcblxuXHR9IGVsc2Uge1xuXG5cdFx0Z2VvbWV0cnlLZXkgPSBwcmltaXRpdmVEZWYuaW5kaWNlcyArICc6JyArIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoIHByaW1pdGl2ZURlZi5hdHRyaWJ1dGVzICkgKyAnOicgKyBwcmltaXRpdmVEZWYubW9kZTtcblxuXHR9XG5cblx0cmV0dXJuIGdlb21ldHJ5S2V5O1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoIGF0dHJpYnV0ZXMgKSB7XG5cblx0bGV0IGF0dHJpYnV0ZXNLZXkgPSAnJztcblxuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoIGF0dHJpYnV0ZXMgKS5zb3J0KCk7XG5cblx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRhdHRyaWJ1dGVzS2V5ICs9IGtleXNbIGkgXSArICc6JyArIGF0dHJpYnV0ZXNbIGtleXNbIGkgXSBdICsgJzsnO1xuXG5cdH1cblxuXHRyZXR1cm4gYXR0cmlidXRlc0tleTtcblxufVxuXG5mdW5jdGlvbiBnZXROb3JtYWxpemVkQ29tcG9uZW50U2NhbGUoIGNvbnN0cnVjdG9yICkge1xuXG5cdC8vIFJlZmVyZW5jZTpcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21lc2hfcXVhbnRpemF0aW9uI2VuY29kaW5nLXF1YW50aXplZC1kYXRhXG5cblx0c3dpdGNoICggY29uc3RydWN0b3IgKSB7XG5cblx0XHRjYXNlIEludDhBcnJheTpcblx0XHRcdHJldHVybiAxIC8gMTI3O1xuXG5cdFx0Y2FzZSBVaW50OEFycmF5OlxuXHRcdFx0cmV0dXJuIDEgLyAyNTU7XG5cblx0XHRjYXNlIEludDE2QXJyYXk6XG5cdFx0XHRyZXR1cm4gMSAvIDMyNzY3O1xuXG5cdFx0Y2FzZSBVaW50MTZBcnJheTpcblx0XHRcdHJldHVybiAxIC8gNjU1MzU7XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgbm9ybWFsaXplZCBhY2Nlc3NvciBjb21wb25lbnQgdHlwZS4nICk7XG5cblx0fVxuXG59XG5cbi8qIEdMVEYgUEFSU0VSICovXG5cbmNsYXNzIEdMVEZQYXJzZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBqc29uID0ge30sIG9wdGlvbnMgPSB7fSApIHtcblxuXHRcdHRoaXMuanNvbiA9IGpzb247XG5cdFx0dGhpcy5leHRlbnNpb25zID0ge307XG5cdFx0dGhpcy5wbHVnaW5zID0ge307XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuXHRcdC8vIGxvYWRlciBvYmplY3QgY2FjaGVcblx0XHR0aGlzLmNhY2hlID0gbmV3IEdMVEZSZWdpc3RyeSgpO1xuXG5cdFx0Ly8gYXNzb2NpYXRpb25zIGJldHdlZW4gVGhyZWUuanMgb2JqZWN0cyBhbmQgZ2xURiBlbGVtZW50c1xuXHRcdHRoaXMuYXNzb2NpYXRpb25zID0gbmV3IE1hcCgpO1xuXG5cdFx0Ly8gQnVmZmVyR2VvbWV0cnkgY2FjaGluZ1xuXHRcdHRoaXMucHJpbWl0aXZlQ2FjaGUgPSB7fTtcblxuXHRcdC8vIE9iamVjdDNEIGluc3RhbmNlIGNhY2hlc1xuXHRcdHRoaXMubWVzaENhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcblx0XHR0aGlzLmNhbWVyYUNhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcblx0XHR0aGlzLmxpZ2h0Q2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xuXG5cdFx0Ly8gVHJhY2sgbm9kZSBuYW1lcywgdG8gZW5zdXJlIG5vIGR1cGxpY2F0ZXNcblx0XHR0aGlzLm5vZGVOYW1lc1VzZWQgPSB7fTtcblxuXHRcdC8vIFVzZSBhbiBJbWFnZUJpdG1hcExvYWRlciBpZiBpbWFnZUJpdG1hcHMgYXJlIHN1cHBvcnRlZC4gTW92ZXMgbXVjaCBvZiB0aGVcblx0XHQvLyBleHBlbnNpdmUgd29yayBvZiB1cGxvYWRpbmcgYSB0ZXh0dXJlIHRvIHRoZSBHUFUgb2ZmIHRoZSBtYWluIHRocmVhZC5cblx0XHRpZiAoIHR5cGVvZiBjcmVhdGVJbWFnZUJpdG1hcCAhPT0gJ3VuZGVmaW5lZCcgJiYgL0ZpcmVmb3gvLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdHRoaXMudGV4dHVyZUxvYWRlciA9IG5ldyBJbWFnZUJpdG1hcExvYWRlciggdGhpcy5vcHRpb25zLm1hbmFnZXIgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHRoaXMudGV4dHVyZUxvYWRlciA9IG5ldyBUZXh0dXJlTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy50ZXh0dXJlTG9hZGVyLnNldENyb3NzT3JpZ2luKCB0aGlzLm9wdGlvbnMuY3Jvc3NPcmlnaW4gKTtcblx0XHR0aGlzLnRleHR1cmVMb2FkZXIuc2V0UmVxdWVzdEhlYWRlciggdGhpcy5vcHRpb25zLnJlcXVlc3RIZWFkZXIgKTtcblxuXHRcdHRoaXMuZmlsZUxvYWRlciA9IG5ldyBGaWxlTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xuXHRcdHRoaXMuZmlsZUxvYWRlci5zZXRSZXNwb25zZVR5cGUoICdhcnJheWJ1ZmZlcicgKTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmNyb3NzT3JpZ2luID09PSAndXNlLWNyZWRlbnRpYWxzJyApIHtcblxuXHRcdFx0dGhpcy5maWxlTG9hZGVyLnNldFdpdGhDcmVkZW50aWFscyggdHJ1ZSApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRzZXRFeHRlbnNpb25zKCBleHRlbnNpb25zICkge1xuXG5cdFx0dGhpcy5leHRlbnNpb25zID0gZXh0ZW5zaW9ucztcblxuXHR9XG5cblx0c2V0UGx1Z2lucyggcGx1Z2lucyApIHtcblxuXHRcdHRoaXMucGx1Z2lucyA9IHBsdWdpbnM7XG5cblx0fVxuXG5cdHBhcnNlKCBvbkxvYWQsIG9uRXJyb3IgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblxuXHRcdC8vIENsZWFyIHRoZSBsb2FkZXIgY2FjaGVcblx0XHR0aGlzLmNhY2hlLnJlbW92ZUFsbCgpO1xuXG5cdFx0Ly8gTWFyayB0aGUgc3BlY2lhbCBub2Rlcy9tZXNoZXMgaW4ganNvbiBmb3IgZWZmaWNpZW50IHBhcnNlXG5cdFx0dGhpcy5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0cmV0dXJuIGV4dC5fbWFya0RlZnMgJiYgZXh0Ll9tYXJrRGVmcygpO1xuXG5cdFx0fSApO1xuXG5cdFx0UHJvbWlzZS5hbGwoIHRoaXMuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdHJldHVybiBleHQuYmVmb3JlUm9vdCAmJiBleHQuYmVmb3JlUm9vdCgpO1xuXG5cdFx0fSApICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcblxuXHRcdFx0XHRwYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCAnc2NlbmUnICksXG5cdFx0XHRcdHBhcnNlci5nZXREZXBlbmRlbmNpZXMoICdhbmltYXRpb24nICksXG5cdFx0XHRcdHBhcnNlci5nZXREZXBlbmRlbmNpZXMoICdjYW1lcmEnICksXG5cblx0XHRcdF0gKTtcblxuXHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIGRlcGVuZGVuY2llcyApIHtcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0XHRzY2VuZTogZGVwZW5kZW5jaWVzWyAwIF1bIGpzb24uc2NlbmUgfHwgMCBdLFxuXHRcdFx0XHRzY2VuZXM6IGRlcGVuZGVuY2llc1sgMCBdLFxuXHRcdFx0XHRhbmltYXRpb25zOiBkZXBlbmRlbmNpZXNbIDEgXSxcblx0XHRcdFx0Y2FtZXJhczogZGVwZW5kZW5jaWVzWyAyIF0sXG5cdFx0XHRcdGFzc2V0OiBqc29uLmFzc2V0LFxuXHRcdFx0XHRwYXJzZXI6IHBhcnNlcixcblx0XHRcdFx0dXNlckRhdGE6IHt9XG5cdFx0XHR9O1xuXG5cdFx0XHRhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIHJlc3VsdCwganNvbiApO1xuXG5cdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCByZXN1bHQsIGpzb24gKTtcblxuXHRcdFx0UHJvbWlzZS5hbGwoIHBhcnNlci5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmFmdGVyUm9vdCAmJiBleHQuYWZ0ZXJSb290KCByZXN1bHQgKTtcblxuXHRcdFx0fSApICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdG9uTG9hZCggcmVzdWx0ICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKS5jYXRjaCggb25FcnJvciApO1xuXG5cdH1cblxuXHQvKipcblx0ICogTWFya3MgdGhlIHNwZWNpYWwgbm9kZXMvbWVzaGVzIGluIGpzb24gZm9yIGVmZmljaWVudCBwYXJzZS5cblx0ICovXG5cdF9tYXJrRGVmcygpIHtcblxuXHRcdGNvbnN0IG5vZGVEZWZzID0gdGhpcy5qc29uLm5vZGVzIHx8IFtdO1xuXHRcdGNvbnN0IHNraW5EZWZzID0gdGhpcy5qc29uLnNraW5zIHx8IFtdO1xuXHRcdGNvbnN0IG1lc2hEZWZzID0gdGhpcy5qc29uLm1lc2hlcyB8fCBbXTtcblxuXHRcdC8vIE5vdGhpbmcgaW4gdGhlIG5vZGUgZGVmaW5pdGlvbiBpbmRpY2F0ZXMgd2hldGhlciBpdCBpcyBhIEJvbmUgb3IgYW5cblx0XHQvLyBPYmplY3QzRC4gVXNlIHRoZSBza2lucycgam9pbnQgcmVmZXJlbmNlcyB0byBtYXJrIGJvbmVzLlxuXHRcdGZvciAoIGxldCBza2luSW5kZXggPSAwLCBza2luTGVuZ3RoID0gc2tpbkRlZnMubGVuZ3RoOyBza2luSW5kZXggPCBza2luTGVuZ3RoOyBza2luSW5kZXggKysgKSB7XG5cblx0XHRcdGNvbnN0IGpvaW50cyA9IHNraW5EZWZzWyBza2luSW5kZXggXS5qb2ludHM7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBqb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0bm9kZURlZnNbIGpvaW50c1sgaSBdIF0uaXNCb25lID0gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly8gSXRlcmF0ZSBvdmVyIGFsbCBub2RlcywgbWFya2luZyByZWZlcmVuY2VzIHRvIHNoYXJlZCByZXNvdXJjZXMsXG5cdFx0Ly8gYXMgd2VsbCBhcyBza2VsZXRvbiBqb2ludHMuXG5cdFx0Zm9yICggbGV0IG5vZGVJbmRleCA9IDAsIG5vZGVMZW5ndGggPSBub2RlRGVmcy5sZW5ndGg7IG5vZGVJbmRleCA8IG5vZGVMZW5ndGg7IG5vZGVJbmRleCArKyApIHtcblxuXHRcdFx0Y29uc3Qgbm9kZURlZiA9IG5vZGVEZWZzWyBub2RlSW5kZXggXTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLm1lc2ggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHR0aGlzLl9hZGROb2RlUmVmKCB0aGlzLm1lc2hDYWNoZSwgbm9kZURlZi5tZXNoICk7XG5cblx0XHRcdFx0Ly8gTm90aGluZyBpbiB0aGUgbWVzaCBkZWZpbml0aW9uIGluZGljYXRlcyB3aGV0aGVyIGl0IGlzXG5cdFx0XHRcdC8vIGEgU2tpbm5lZE1lc2ggb3IgTWVzaC4gVXNlIHRoZSBub2RlJ3MgbWVzaCByZWZlcmVuY2Vcblx0XHRcdFx0Ly8gdG8gbWFyayBTa2lubmVkTWVzaCBpZiBub2RlIGhhcyBza2luLlxuXHRcdFx0XHRpZiAoIG5vZGVEZWYuc2tpbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0bWVzaERlZnNbIG5vZGVEZWYubWVzaCBdLmlzU2tpbm5lZE1lc2ggPSB0cnVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5vZGVEZWYuY2FtZXJhICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0dGhpcy5fYWRkTm9kZVJlZiggdGhpcy5jYW1lcmFDYWNoZSwgbm9kZURlZi5jYW1lcmEgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ291bnRzIHJlZmVyZW5jZXMgdG8gc2hhcmVkIG5vZGUgLyBPYmplY3QzRCByZXNvdXJjZXMuIFRoZXNlIHJlc291cmNlc1xuXHQgKiBjYW4gYmUgcmV1c2VkLCBvciBcImluc3RhbnRpYXRlZFwiLCBhdCBtdWx0aXBsZSBub2RlcyBpbiB0aGUgc2NlbmVcblx0ICogaGllcmFyY2h5LiBNZXNoLCBDYW1lcmEsIGFuZCBMaWdodCBpbnN0YW5jZXMgYXJlIGluc3RhbnRpYXRlZCBhbmQgbXVzdFxuXHQgKiBiZSBtYXJrZWQuIE5vbi1zY2VuZWdyYXBoIHJlc291cmNlcyAobGlrZSBNYXRlcmlhbHMsIEdlb21ldHJpZXMsIGFuZFxuXHQgKiBUZXh0dXJlcykgY2FuIGJlIHJldXNlZCBkaXJlY3RseSBhbmQgYXJlIG5vdCBtYXJrZWQgaGVyZS5cblx0ICpcblx0ICogRXhhbXBsZTogQ2VzaXVtTWlsa1RydWNrIHNhbXBsZSBtb2RlbCByZXVzZXMgXCJXaGVlbFwiIG1lc2hlcy5cblx0ICovXG5cdF9hZGROb2RlUmVmKCBjYWNoZSwgaW5kZXggKSB7XG5cblx0XHRpZiAoIGluZGV4ID09PSB1bmRlZmluZWQgKSByZXR1cm47XG5cblx0XHRpZiAoIGNhY2hlLnJlZnNbIGluZGV4IF0gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y2FjaGUucmVmc1sgaW5kZXggXSA9IGNhY2hlLnVzZXNbIGluZGV4IF0gPSAwO1xuXG5cdFx0fVxuXG5cdFx0Y2FjaGUucmVmc1sgaW5kZXggXSArKztcblxuXHR9XG5cblx0LyoqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gYSBzaGFyZWQgcmVzb3VyY2UsIGNsb25pbmcgaXQgaWYgbmVjZXNzYXJ5LiAqL1xuXHRfZ2V0Tm9kZVJlZiggY2FjaGUsIGluZGV4LCBvYmplY3QgKSB7XG5cblx0XHRpZiAoIGNhY2hlLnJlZnNbIGluZGV4IF0gPD0gMSApIHJldHVybiBvYmplY3Q7XG5cblx0XHRjb25zdCByZWYgPSBvYmplY3QuY2xvbmUoKTtcblxuXHRcdHJlZi5uYW1lICs9ICdfaW5zdGFuY2VfJyArICggY2FjaGUudXNlc1sgaW5kZXggXSArKyApO1xuXG5cdFx0cmV0dXJuIHJlZjtcblxuXHR9XG5cblx0X2ludm9rZU9uZSggZnVuYyApIHtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSBPYmplY3QudmFsdWVzKCB0aGlzLnBsdWdpbnMgKTtcblx0XHRleHRlbnNpb25zLnB1c2goIHRoaXMgKTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCByZXN1bHQgPSBmdW5jKCBleHRlbnNpb25zWyBpIF0gKTtcblxuXHRcdFx0aWYgKCByZXN1bHQgKSByZXR1cm4gcmVzdWx0O1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0fVxuXG5cdF9pbnZva2VBbGwoIGZ1bmMgKSB7XG5cblx0XHRjb25zdCBleHRlbnNpb25zID0gT2JqZWN0LnZhbHVlcyggdGhpcy5wbHVnaW5zICk7XG5cdFx0ZXh0ZW5zaW9ucy51bnNoaWZ0KCB0aGlzICk7XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZnVuYyggZXh0ZW5zaW9uc1sgaSBdICk7XG5cblx0XHRcdGlmICggcmVzdWx0ICkgcGVuZGluZy5wdXNoKCByZXN1bHQgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBwZW5kaW5nO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmVxdWVzdHMgdGhlIHNwZWNpZmllZCBkZXBlbmRlbmN5IGFzeW5jaHJvbm91c2x5LCB3aXRoIGNhY2hpbmcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdDNEfE1hdGVyaWFsfFRIUkVFLlRleHR1cmV8QW5pbWF0aW9uQ2xpcHxBcnJheUJ1ZmZlcnxPYmplY3Q+fVxuXHQgKi9cblx0Z2V0RGVwZW5kZW5jeSggdHlwZSwgaW5kZXggKSB7XG5cblx0XHRjb25zdCBjYWNoZUtleSA9IHR5cGUgKyAnOicgKyBpbmRleDtcblx0XHRsZXQgZGVwZW5kZW5jeSA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0aWYgKCAhIGRlcGVuZGVuY3kgKSB7XG5cblx0XHRcdHN3aXRjaCAoIHR5cGUgKSB7XG5cblx0XHRcdFx0Y2FzZSAnc2NlbmUnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRTY2VuZSggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdub2RlJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkTm9kZSggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdtZXNoJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkTWVzaCAmJiBleHQubG9hZE1lc2goIGluZGV4ICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYWNjZXNzb3InOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRBY2Nlc3NvciggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdidWZmZXJWaWV3Jzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkQnVmZmVyVmlldyAmJiBleHQubG9hZEJ1ZmZlclZpZXcoIGluZGV4ICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYnVmZmVyJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQnVmZmVyKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ21hdGVyaWFsJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkTWF0ZXJpYWwgJiYgZXh0LmxvYWRNYXRlcmlhbCggaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICd0ZXh0dXJlJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4dC5sb2FkVGV4dHVyZSAmJiBleHQubG9hZFRleHR1cmUoIGluZGV4ICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnc2tpbic6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZFNraW4oIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYW5pbWF0aW9uJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQW5pbWF0aW9uKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2NhbWVyYSc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZENhbWVyYSggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1Vua25vd24gdHlwZTogJyArIHR5cGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIGRlcGVuZGVuY3kgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBkZXBlbmRlbmN5O1xuXG5cdH1cblxuXHQvKipcblx0ICogUmVxdWVzdHMgYWxsIGRlcGVuZGVuY2llcyBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgYXN5bmNocm9ub3VzbHksIHdpdGggY2FjaGluZy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxPYmplY3Q+Pn1cblx0ICovXG5cdGdldERlcGVuZGVuY2llcyggdHlwZSApIHtcblxuXHRcdGxldCBkZXBlbmRlbmNpZXMgPSB0aGlzLmNhY2hlLmdldCggdHlwZSApO1xuXG5cdFx0aWYgKCAhIGRlcGVuZGVuY2llcyApIHtcblxuXHRcdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRcdGNvbnN0IGRlZnMgPSB0aGlzLmpzb25bIHR5cGUgKyAoIHR5cGUgPT09ICdtZXNoJyA/ICdlcycgOiAncycgKSBdIHx8IFtdO1xuXG5cdFx0XHRkZXBlbmRlbmNpZXMgPSBQcm9taXNlLmFsbCggZGVmcy5tYXAoIGZ1bmN0aW9uICggZGVmLCBpbmRleCApIHtcblxuXHRcdFx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koIHR5cGUsIGluZGV4ICk7XG5cblx0XHRcdH0gKSApO1xuXG5cdFx0XHR0aGlzLmNhY2hlLmFkZCggdHlwZSwgZGVwZW5kZW5jaWVzICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jaWVzO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNidWZmZXJzLWFuZC1idWZmZXItdmlld3Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IGJ1ZmZlckluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXlCdWZmZXI+fVxuXHQgKi9cblx0bG9hZEJ1ZmZlciggYnVmZmVySW5kZXggKSB7XG5cblx0XHRjb25zdCBidWZmZXJEZWYgPSB0aGlzLmpzb24uYnVmZmVyc1sgYnVmZmVySW5kZXggXTtcblx0XHRjb25zdCBsb2FkZXIgPSB0aGlzLmZpbGVMb2FkZXI7XG5cblx0XHRpZiAoIGJ1ZmZlckRlZi50eXBlICYmIGJ1ZmZlckRlZi50eXBlICE9PSAnYXJyYXlidWZmZXInICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiAnICsgYnVmZmVyRGVmLnR5cGUgKyAnIGJ1ZmZlciB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQuJyApO1xuXG5cdFx0fVxuXG5cdFx0Ly8gSWYgcHJlc2VudCwgR0xCIGNvbnRhaW5lciBpcyByZXF1aXJlZCB0byBiZSB0aGUgZmlyc3QgYnVmZmVyLlxuXHRcdGlmICggYnVmZmVyRGVmLnVyaSA9PT0gdW5kZWZpbmVkICYmIGJ1ZmZlckluZGV4ID09PSAwICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCB0aGlzLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGIF0uYm9keSApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlLCByZWplY3QgKSB7XG5cblx0XHRcdGxvYWRlci5sb2FkKCByZXNvbHZlVVJMKCBidWZmZXJEZWYudXJpLCBvcHRpb25zLnBhdGggKSwgcmVzb2x2ZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0cmVqZWN0KCBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBGYWlsZWQgdG8gbG9hZCBidWZmZXIgXCInICsgYnVmZmVyRGVmLnVyaSArICdcIi4nICkgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNidWZmZXJzLWFuZC1idWZmZXItdmlld3Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IGJ1ZmZlclZpZXdJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyPn1cblx0ICovXG5cdGxvYWRCdWZmZXJWaWV3KCBidWZmZXJWaWV3SW5kZXggKSB7XG5cblx0XHRjb25zdCBidWZmZXJWaWV3RGVmID0gdGhpcy5qc29uLmJ1ZmZlclZpZXdzWyBidWZmZXJWaWV3SW5kZXggXTtcblxuXHRcdHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXInLCBidWZmZXJWaWV3RGVmLmJ1ZmZlciApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyICkge1xuXG5cdFx0XHRjb25zdCBieXRlTGVuZ3RoID0gYnVmZmVyVmlld0RlZi5ieXRlTGVuZ3RoIHx8IDA7XG5cdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gYnVmZmVyVmlld0RlZi5ieXRlT2Zmc2V0IHx8IDA7XG5cdFx0XHRyZXR1cm4gYnVmZmVyLnNsaWNlKCBieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgYnl0ZUxlbmd0aCApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNhY2Nlc3NvcnNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGFjY2Vzc29ySW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJBdHRyaWJ1dGV8SW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGU+fVxuXHQgKi9cblx0bG9hZEFjY2Vzc29yKCBhY2Nlc3NvckluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXG5cdFx0Y29uc3QgYWNjZXNzb3JEZWYgPSB0aGlzLmpzb24uYWNjZXNzb3JzWyBhY2Nlc3NvckluZGV4IF07XG5cblx0XHRpZiAoIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgPT09IHVuZGVmaW5lZCAmJiBhY2Nlc3NvckRlZi5zcGFyc2UgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gSWdub3JlIGVtcHR5IGFjY2Vzc29ycywgd2hpY2ggbWF5IGJlIHVzZWQgdG8gZGVjbGFyZSBydW50aW1lXG5cdFx0XHQvLyBpbmZvcm1hdGlvbiBhYm91dCBhdHRyaWJ1dGVzIGNvbWluZyBmcm9tIGFub3RoZXIgc291cmNlIChlLmcuIERyYWNvXG5cdFx0XHQvLyBjb21wcmVzc2lvbiBleHRlbnNpb24pLlxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggbnVsbCApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGVuZGluZ0J1ZmZlclZpZXdzID0gW107XG5cblx0XHRpZiAoIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICkgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCBudWxsICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGFjY2Vzc29yRGVmLnNwYXJzZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGFjY2Vzc29yRGVmLnNwYXJzZS5pbmRpY2VzLmJ1ZmZlclZpZXcgKSApO1xuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBhY2Nlc3NvckRlZi5zcGFyc2UudmFsdWVzLmJ1ZmZlclZpZXcgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nQnVmZmVyVmlld3MgKS50aGVuKCBmdW5jdGlvbiAoIGJ1ZmZlclZpZXdzICkge1xuXG5cdFx0XHRjb25zdCBidWZmZXJWaWV3ID0gYnVmZmVyVmlld3NbIDAgXTtcblxuXHRcdFx0Y29uc3QgaXRlbVNpemUgPSBXRUJHTF9UWVBFX1NJWkVTWyBhY2Nlc3NvckRlZi50eXBlIF07XG5cdFx0XHRjb25zdCBUeXBlZEFycmF5ID0gV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3NvckRlZi5jb21wb25lbnRUeXBlIF07XG5cblx0XHRcdC8vIEZvciBWRUMzOiBpdGVtU2l6ZSBpcyAzLCBlbGVtZW50Qnl0ZXMgaXMgNCwgaXRlbUJ5dGVzIGlzIDEyLlxuXHRcdFx0Y29uc3QgZWxlbWVudEJ5dGVzID0gVHlwZWRBcnJheS5CWVRFU19QRVJfRUxFTUVOVDtcblx0XHRcdGNvbnN0IGl0ZW1CeXRlcyA9IGVsZW1lbnRCeXRlcyAqIGl0ZW1TaXplO1xuXHRcdFx0Y29uc3QgYnl0ZU9mZnNldCA9IGFjY2Vzc29yRGVmLmJ5dGVPZmZzZXQgfHwgMDtcblx0XHRcdGNvbnN0IGJ5dGVTdHJpZGUgPSBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQgPyBqc29uLmJ1ZmZlclZpZXdzWyBhY2Nlc3NvckRlZi5idWZmZXJWaWV3IF0uYnl0ZVN0cmlkZSA6IHVuZGVmaW5lZDtcblx0XHRcdGNvbnN0IG5vcm1hbGl6ZWQgPSBhY2Nlc3NvckRlZi5ub3JtYWxpemVkID09PSB0cnVlO1xuXHRcdFx0bGV0IGFycmF5LCBidWZmZXJBdHRyaWJ1dGU7XG5cblx0XHRcdC8vIFRoZSBidWZmZXIgaXMgbm90IGludGVybGVhdmVkIGlmIHRoZSBzdHJpZGUgaXMgdGhlIGl0ZW0gc2l6ZSBpbiBieXRlcy5cblx0XHRcdGlmICggYnl0ZVN0cmlkZSAmJiBieXRlU3RyaWRlICE9PSBpdGVtQnl0ZXMgKSB7XG5cblx0XHRcdFx0Ly8gRWFjaCBcInNsaWNlXCIgb2YgdGhlIGJ1ZmZlciwgYXMgZGVmaW5lZCBieSAnY291bnQnIGVsZW1lbnRzIG9mICdieXRlU3RyaWRlJyBieXRlcywgZ2V0cyBpdHMgb3duIEludGVybGVhdmVkQnVmZmVyXG5cdFx0XHRcdC8vIFRoaXMgbWFrZXMgc3VyZSB0aGF0IElCQS5jb3VudCByZWZsZWN0cyBhY2Nlc3Nvci5jb3VudCBwcm9wZXJseVxuXHRcdFx0XHRjb25zdCBpYlNsaWNlID0gTWF0aC5mbG9vciggYnl0ZU9mZnNldCAvIGJ5dGVTdHJpZGUgKTtcblx0XHRcdFx0Y29uc3QgaWJDYWNoZUtleSA9ICdJbnRlcmxlYXZlZEJ1ZmZlcjonICsgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyArICc6JyArIGFjY2Vzc29yRGVmLmNvbXBvbmVudFR5cGUgKyAnOicgKyBpYlNsaWNlICsgJzonICsgYWNjZXNzb3JEZWYuY291bnQ7XG5cdFx0XHRcdGxldCBpYiA9IHBhcnNlci5jYWNoZS5nZXQoIGliQ2FjaGVLZXkgKTtcblxuXHRcdFx0XHRpZiAoICEgaWIgKSB7XG5cblx0XHRcdFx0XHRhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBidWZmZXJWaWV3LCBpYlNsaWNlICogYnl0ZVN0cmlkZSwgYWNjZXNzb3JEZWYuY291bnQgKiBieXRlU3RyaWRlIC8gZWxlbWVudEJ5dGVzICk7XG5cblx0XHRcdFx0XHQvLyBJbnRlZ2VyIHBhcmFtZXRlcnMgdG8gSUIvSUJBIGFyZSBpbiBhcnJheSBlbGVtZW50cywgbm90IGJ5dGVzLlxuXHRcdFx0XHRcdGliID0gbmV3IEludGVybGVhdmVkQnVmZmVyKCBhcnJheSwgYnl0ZVN0cmlkZSAvIGVsZW1lbnRCeXRlcyApO1xuXG5cdFx0XHRcdFx0cGFyc2VyLmNhY2hlLmFkZCggaWJDYWNoZUtleSwgaWIgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnVmZmVyQXR0cmlidXRlID0gbmV3IEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlKCBpYiwgaXRlbVNpemUsICggYnl0ZU9mZnNldCAlIGJ5dGVTdHJpZGUgKSAvIGVsZW1lbnRCeXRlcywgbm9ybWFsaXplZCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICggYnVmZmVyVmlldyA9PT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoIGFjY2Vzc29yRGVmLmNvdW50ICogaXRlbVNpemUgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0YXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYnVmZmVyVmlldywgYnl0ZU9mZnNldCwgYWNjZXNzb3JEZWYuY291bnQgKiBpdGVtU2l6ZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBhcnJheSwgaXRlbVNpemUsIG5vcm1hbGl6ZWQgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI3NwYXJzZS1hY2Nlc3NvcnNcblx0XHRcdGlmICggYWNjZXNzb3JEZWYuc3BhcnNlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Y29uc3QgaXRlbVNpemVJbmRpY2VzID0gV0VCR0xfVFlQRV9TSVpFUy5TQ0FMQVI7XG5cdFx0XHRcdGNvbnN0IFR5cGVkQXJyYXlJbmRpY2VzID0gV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3NvckRlZi5zcGFyc2UuaW5kaWNlcy5jb21wb25lbnRUeXBlIF07XG5cblx0XHRcdFx0Y29uc3QgYnl0ZU9mZnNldEluZGljZXMgPSBhY2Nlc3NvckRlZi5zcGFyc2UuaW5kaWNlcy5ieXRlT2Zmc2V0IHx8IDA7XG5cdFx0XHRcdGNvbnN0IGJ5dGVPZmZzZXRWYWx1ZXMgPSBhY2Nlc3NvckRlZi5zcGFyc2UudmFsdWVzLmJ5dGVPZmZzZXQgfHwgMDtcblxuXHRcdFx0XHRjb25zdCBzcGFyc2VJbmRpY2VzID0gbmV3IFR5cGVkQXJyYXlJbmRpY2VzKCBidWZmZXJWaWV3c1sgMSBdLCBieXRlT2Zmc2V0SW5kaWNlcywgYWNjZXNzb3JEZWYuc3BhcnNlLmNvdW50ICogaXRlbVNpemVJbmRpY2VzICk7XG5cdFx0XHRcdGNvbnN0IHNwYXJzZVZhbHVlcyA9IG5ldyBUeXBlZEFycmF5KCBidWZmZXJWaWV3c1sgMiBdLCBieXRlT2Zmc2V0VmFsdWVzLCBhY2Nlc3NvckRlZi5zcGFyc2UuY291bnQgKiBpdGVtU2l6ZSApO1xuXG5cdFx0XHRcdGlmICggYnVmZmVyVmlldyAhPT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdC8vIEF2b2lkIG1vZGlmeWluZyB0aGUgb3JpZ2luYWwgQXJyYXlCdWZmZXIsIGlmIHRoZSBidWZmZXJWaWV3IHdhc24ndCBpbml0aWFsaXplZCB3aXRoIHplcm9lcy5cblx0XHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBidWZmZXJBdHRyaWJ1dGUuYXJyYXkuc2xpY2UoKSwgYnVmZmVyQXR0cmlidXRlLml0ZW1TaXplLCBidWZmZXJBdHRyaWJ1dGUubm9ybWFsaXplZCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gc3BhcnNlSW5kaWNlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGluZGV4ID0gc3BhcnNlSW5kaWNlc1sgaSBdO1xuXG5cdFx0XHRcdFx0YnVmZmVyQXR0cmlidXRlLnNldFgoIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSBdICk7XG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSAyICkgYnVmZmVyQXR0cmlidXRlLnNldFkoIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSArIDEgXSApO1xuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gMyApIGJ1ZmZlckF0dHJpYnV0ZS5zZXRaKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgKyAyIF0gKTtcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDQgKSBidWZmZXJBdHRyaWJ1dGUuc2V0VyggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplICsgMyBdICk7XG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSA1ICkgdGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgaXRlbVNpemUgaW4gc3BhcnNlIEJ1ZmZlckF0dHJpYnV0ZS4nICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBidWZmZXJBdHRyaWJ1dGU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjdGV4dHVyZXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRleHR1cmVJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFRIUkVFLlRleHR1cmU+fVxuXHQgKi9cblx0bG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XG5cdFx0Y29uc3Qgc291cmNlID0ganNvbi5pbWFnZXNbIHRleHR1cmVEZWYuc291cmNlIF07XG5cblx0XHRsZXQgbG9hZGVyID0gdGhpcy50ZXh0dXJlTG9hZGVyO1xuXG5cdFx0aWYgKCBzb3VyY2UudXJpICkge1xuXG5cdFx0XHRjb25zdCBoYW5kbGVyID0gb3B0aW9ucy5tYW5hZ2VyLmdldEhhbmRsZXIoIHNvdXJjZS51cmkgKTtcblx0XHRcdGlmICggaGFuZGxlciAhPT0gbnVsbCApIGxvYWRlciA9IGhhbmRsZXI7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICk7XG5cblx0fVxuXG5cdGxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHRcdGNvbnN0IHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcblxuXHRcdGNvbnN0IFVSTCA9IHNlbGYuVVJMIHx8IHNlbGYud2Via2l0VVJMO1xuXG5cdFx0bGV0IHNvdXJjZVVSSSA9IHNvdXJjZS51cmk7XG5cdFx0bGV0IGlzT2JqZWN0VVJMID0gZmFsc2U7XG5cdFx0bGV0IGhhc0FscGhhID0gdHJ1ZTtcblxuXHRcdGlmICggc291cmNlLm1pbWVUeXBlID09PSAnaW1hZ2UvanBlZycgKSBoYXNBbHBoYSA9IGZhbHNlO1xuXG5cdFx0aWYgKCBzb3VyY2UuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHQvLyBMb2FkIGJpbmFyeSBpbWFnZSBkYXRhIGZyb20gYnVmZmVyVmlldywgaWYgcHJvdmlkZWQuXG5cblx0XHRcdHNvdXJjZVVSSSA9IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIHNvdXJjZS5idWZmZXJWaWV3ICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3ICkge1xuXG5cdFx0XHRcdGlmICggc291cmNlLm1pbWVUeXBlID09PSAnaW1hZ2UvcG5nJyApIHtcblxuXHRcdFx0XHRcdC8vIEluc3BlY3QgdGhlIFBORyAnSUhEUicgY2h1bmsgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGltYWdlIGNvdWxkIGhhdmUgYW5cblx0XHRcdFx0XHQvLyBhbHBoYSBjaGFubmVsLiBUaGlzIGNoZWNrIGlzIGNvbnNlcnZhdGl2ZSDigJQgdGhlIGltYWdlIGNvdWxkIGhhdmUgYW4gYWxwaGFcblx0XHRcdFx0XHQvLyBjaGFubmVsIHdpdGggYWxsIHZhbHVlcyA9PSAxLCBhbmQgdGhlIGluZGV4ZWQgdHlwZSAoY29sb3JUeXBlID09IDMpIG9ubHlcblx0XHRcdFx0XHQvLyBzb21ldGltZXMgY29udGFpbnMgYWxwaGEuXG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0XHQvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Qb3J0YWJsZV9OZXR3b3JrX0dyYXBoaWNzI0ZpbGVfaGVhZGVyXG5cdFx0XHRcdFx0Y29uc3QgY29sb3JUeXBlID0gbmV3IERhdGFWaWV3KCBidWZmZXJWaWV3LCAyNSwgMSApLmdldFVpbnQ4KCAwLCBmYWxzZSApO1xuXHRcdFx0XHRcdGhhc0FscGhhID0gY29sb3JUeXBlID09PSA2IHx8IGNvbG9yVHlwZSA9PT0gNCB8fCBjb2xvclR5cGUgPT09IDM7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlzT2JqZWN0VVJMID0gdHJ1ZTtcblx0XHRcdFx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKCBbIGJ1ZmZlclZpZXcgXSwgeyB0eXBlOiBzb3VyY2UubWltZVR5cGUgfSApO1xuXHRcdFx0XHRzb3VyY2VVUkkgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBibG9iICk7XG5cdFx0XHRcdHJldHVybiBzb3VyY2VVUkk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gZWxzZSBpZiAoIHNvdXJjZS51cmkgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogSW1hZ2UgJyArIHRleHR1cmVJbmRleCArICcgaXMgbWlzc2luZyBVUkkgYW5kIGJ1ZmZlclZpZXcnICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBzb3VyY2VVUkkgKS50aGVuKCBmdW5jdGlvbiAoIHNvdXJjZVVSSSApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUsIHJlamVjdCApIHtcblxuXHRcdFx0XHRsZXQgb25Mb2FkID0gcmVzb2x2ZTtcblxuXHRcdFx0XHRpZiAoIGxvYWRlci5pc0ltYWdlQml0bWFwTG9hZGVyID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0b25Mb2FkID0gZnVuY3Rpb24gKCBpbWFnZUJpdG1hcCApIHtcblxuXHRcdFx0XHRcdFx0cmVzb2x2ZSggbmV3IENhbnZhc1RleHR1cmUoIGltYWdlQml0bWFwICkgKTtcblxuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxvYWRlci5sb2FkKCByZXNvbHZlVVJMKCBzb3VyY2VVUkksIG9wdGlvbnMucGF0aCApLCBvbkxvYWQsIHVuZGVmaW5lZCwgcmVqZWN0ICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cblx0XHRcdC8vIENsZWFuIHVwIHJlc291cmNlcyBhbmQgY29uZmlndXJlIFRleHR1cmUuXG5cblx0XHRcdGlmICggaXNPYmplY3RVUkwgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTCggc291cmNlVVJJICk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGV4dHVyZS5mbGlwWSA9IGZhbHNlO1xuXG5cdFx0XHRpZiAoIHRleHR1cmVEZWYubmFtZSApIHRleHR1cmUubmFtZSA9IHRleHR1cmVEZWYubmFtZTtcblxuXHRcdFx0Ly8gV2hlbiB0aGVyZSBpcyBkZWZpbml0ZWx5IG5vIGFscGhhIGNoYW5uZWwgaW4gdGhlIHRleHR1cmUsIHNldCBSR0JGb3JtYXQgdG8gc2F2ZSBzcGFjZS5cblx0XHRcdGlmICggISBoYXNBbHBoYSApIHRleHR1cmUuZm9ybWF0ID0gUkdCRm9ybWF0O1xuXG5cdFx0XHRjb25zdCBzYW1wbGVycyA9IGpzb24uc2FtcGxlcnMgfHwge307XG5cdFx0XHRjb25zdCBzYW1wbGVyID0gc2FtcGxlcnNbIHRleHR1cmVEZWYuc2FtcGxlciBdIHx8IHt9O1xuXG5cdFx0XHR0ZXh0dXJlLm1hZ0ZpbHRlciA9IFdFQkdMX0ZJTFRFUlNbIHNhbXBsZXIubWFnRmlsdGVyIF0gfHwgTGluZWFyRmlsdGVyO1xuXHRcdFx0dGV4dHVyZS5taW5GaWx0ZXIgPSBXRUJHTF9GSUxURVJTWyBzYW1wbGVyLm1pbkZpbHRlciBdIHx8IExpbmVhck1pcG1hcExpbmVhckZpbHRlcjtcblx0XHRcdHRleHR1cmUud3JhcFMgPSBXRUJHTF9XUkFQUElOR1NbIHNhbXBsZXIud3JhcFMgXSB8fCBSZXBlYXRXcmFwcGluZztcblx0XHRcdHRleHR1cmUud3JhcFQgPSBXRUJHTF9XUkFQUElOR1NbIHNhbXBsZXIud3JhcFQgXSB8fCBSZXBlYXRXcmFwcGluZztcblxuXHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIHRleHR1cmUsIHtcblx0XHRcdFx0dHlwZTogJ3RleHR1cmVzJyxcblx0XHRcdFx0aW5kZXg6IHRleHR1cmVJbmRleFxuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gdGV4dHVyZTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEFzeW5jaHJvbm91c2x5IGFzc2lnbnMgYSB0ZXh0dXJlIHRvIHRoZSBnaXZlbiBtYXRlcmlhbCBwYXJhbWV0ZXJzLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gbWF0ZXJpYWxQYXJhbXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1hcE5hbWVcblx0ICogQHBhcmFtIHtPYmplY3R9IG1hcERlZlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKi9cblx0YXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsIG1hcE5hbWUsIG1hcERlZiApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cblx0XHRyZXR1cm4gdGhpcy5nZXREZXBlbmRlbmN5KCAndGV4dHVyZScsIG1hcERlZi5pbmRleCApLnRoZW4oIGZ1bmN0aW9uICggdGV4dHVyZSApIHtcblxuXHRcdFx0Ly8gTWF0ZXJpYWxzIHNhbXBsZSBhb01hcCBmcm9tIFVWIHNldCAxIGFuZCBvdGhlciBtYXBzIGZyb20gVVYgc2V0IDAgLSB0aGlzIGNhbid0IGJlIGNvbmZpZ3VyZWRcblx0XHRcdC8vIEhvd2V2ZXIsIHdlIHdpbGwgY29weSBVViBzZXQgMCB0byBVViBzZXQgMSBvbiBkZW1hbmQgZm9yIGFvTWFwXG5cdFx0XHRpZiAoIG1hcERlZi50ZXhDb29yZCAhPT0gdW5kZWZpbmVkICYmIG1hcERlZi50ZXhDb29yZCAhPSAwICYmICEgKCBtYXBOYW1lID09PSAnYW9NYXAnICYmIG1hcERlZi50ZXhDb29yZCA9PSAxICkgKSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogQ3VzdG9tIFVWIHNldCAnICsgbWFwRGVmLnRleENvb3JkICsgJyBmb3IgdGV4dHVyZSAnICsgbWFwTmFtZSArICcgbm90IHlldCBzdXBwb3J0ZWQuJyApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggcGFyc2VyLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNIF0gKSB7XG5cblx0XHRcdFx0Y29uc3QgdHJhbnNmb3JtID0gbWFwRGVmLmV4dGVuc2lvbnMgIT09IHVuZGVmaW5lZCA/IG1hcERlZi5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STSBdIDogdW5kZWZpbmVkO1xuXG5cdFx0XHRcdGlmICggdHJhbnNmb3JtICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgZ2x0ZlJlZmVyZW5jZSA9IHBhcnNlci5hc3NvY2lhdGlvbnMuZ2V0KCB0ZXh0dXJlICk7XG5cdFx0XHRcdFx0dGV4dHVyZSA9IHBhcnNlci5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STSBdLmV4dGVuZFRleHR1cmUoIHRleHR1cmUsIHRyYW5zZm9ybSApO1xuXHRcdFx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCB0ZXh0dXJlLCBnbHRmUmVmZXJlbmNlICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zWyBtYXBOYW1lIF0gPSB0ZXh0dXJlO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogQXNzaWducyBmaW5hbCBtYXRlcmlhbCB0byBhIE1lc2gsIExpbmUsIG9yIFBvaW50cyBpbnN0YW5jZS4gVGhlIGluc3RhbmNlXG5cdCAqIGFscmVhZHkgaGFzIGEgbWF0ZXJpYWwgKGdlbmVyYXRlZCBmcm9tIHRoZSBnbFRGIG1hdGVyaWFsIG9wdGlvbnMgYWxvbmUpXG5cdCAqIGJ1dCByZXVzZSBvZiB0aGUgc2FtZSBnbFRGIG1hdGVyaWFsIG1heSByZXF1aXJlIG11bHRpcGxlIHRocmVlanMgbWF0ZXJpYWxzXG5cdCAqIHRvIGFjY29tbW9kYXRlIGRpZmZlcmVudCBwcmltaXRpdmUgdHlwZXMsIGRlZmluZXMsIGV0Yy4gTmV3IG1hdGVyaWFscyB3aWxsXG5cdCAqIGJlIGNyZWF0ZWQgaWYgbmVjZXNzYXJ5LCBhbmQgcmV1c2VkIGZyb20gYSBjYWNoZS5cblx0ICogQHBhcmFtICB7T2JqZWN0M0R9IG1lc2ggTWVzaCwgTGluZSwgb3IgUG9pbnRzIGluc3RhbmNlLlxuXHQgKi9cblx0YXNzaWduRmluYWxNYXRlcmlhbCggbWVzaCApIHtcblxuXHRcdGNvbnN0IGdlb21ldHJ5ID0gbWVzaC5nZW9tZXRyeTtcblx0XHRsZXQgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsO1xuXG5cdFx0Y29uc3QgdXNlVmVydGV4VGFuZ2VudHMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnRhbmdlbnQgIT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCB1c2VWZXJ0ZXhDb2xvcnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLmNvbG9yICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgdXNlRmxhdFNoYWRpbmcgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbCA9PT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHVzZVNraW5uaW5nID0gbWVzaC5pc1NraW5uZWRNZXNoID09PSB0cnVlO1xuXHRcdGNvbnN0IHVzZU1vcnBoVGFyZ2V0cyA9IE9iamVjdC5rZXlzKCBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMgKS5sZW5ndGggPiAwO1xuXHRcdGNvbnN0IHVzZU1vcnBoTm9ybWFscyA9IHVzZU1vcnBoVGFyZ2V0cyAmJiBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMubm9ybWFsICE9PSB1bmRlZmluZWQ7XG5cblx0XHRpZiAoIG1lc2guaXNQb2ludHMgKSB7XG5cblx0XHRcdGNvbnN0IGNhY2hlS2V5ID0gJ1BvaW50c01hdGVyaWFsOicgKyBtYXRlcmlhbC51dWlkO1xuXG5cdFx0XHRsZXQgcG9pbnRzTWF0ZXJpYWwgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdFx0aWYgKCAhIHBvaW50c01hdGVyaWFsICkge1xuXG5cdFx0XHRcdHBvaW50c01hdGVyaWFsID0gbmV3IFBvaW50c01hdGVyaWFsKCk7XG5cdFx0XHRcdE1hdGVyaWFsLnByb3RvdHlwZS5jb3B5LmNhbGwoIHBvaW50c01hdGVyaWFsLCBtYXRlcmlhbCApO1xuXHRcdFx0XHRwb2ludHNNYXRlcmlhbC5jb2xvci5jb3B5KCBtYXRlcmlhbC5jb2xvciApO1xuXHRcdFx0XHRwb2ludHNNYXRlcmlhbC5tYXAgPSBtYXRlcmlhbC5tYXA7XG5cdFx0XHRcdHBvaW50c01hdGVyaWFsLnNpemVBdHRlbnVhdGlvbiA9IGZhbHNlOyAvLyBnbFRGIHNwZWMgc2F5cyBwb2ludHMgc2hvdWxkIGJlIDFweFxuXG5cdFx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgcG9pbnRzTWF0ZXJpYWwgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbCA9IHBvaW50c01hdGVyaWFsO1xuXG5cdFx0fSBlbHNlIGlmICggbWVzaC5pc0xpbmUgKSB7XG5cblx0XHRcdGNvbnN0IGNhY2hlS2V5ID0gJ0xpbmVCYXNpY01hdGVyaWFsOicgKyBtYXRlcmlhbC51dWlkO1xuXG5cdFx0XHRsZXQgbGluZU1hdGVyaWFsID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XG5cblx0XHRcdGlmICggISBsaW5lTWF0ZXJpYWwgKSB7XG5cblx0XHRcdFx0bGluZU1hdGVyaWFsID0gbmV3IExpbmVCYXNpY01hdGVyaWFsKCk7XG5cdFx0XHRcdE1hdGVyaWFsLnByb3RvdHlwZS5jb3B5LmNhbGwoIGxpbmVNYXRlcmlhbCwgbWF0ZXJpYWwgKTtcblx0XHRcdFx0bGluZU1hdGVyaWFsLmNvbG9yLmNvcHkoIG1hdGVyaWFsLmNvbG9yICk7XG5cblx0XHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBsaW5lTWF0ZXJpYWwgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbCA9IGxpbmVNYXRlcmlhbDtcblxuXHRcdH1cblxuXHRcdC8vIENsb25lIHRoZSBtYXRlcmlhbCBpZiBpdCB3aWxsIGJlIG1vZGlmaWVkXG5cdFx0aWYgKCB1c2VWZXJ0ZXhUYW5nZW50cyB8fCB1c2VWZXJ0ZXhDb2xvcnMgfHwgdXNlRmxhdFNoYWRpbmcgfHwgdXNlU2tpbm5pbmcgfHwgdXNlTW9ycGhUYXJnZXRzICkge1xuXG5cdFx0XHRsZXQgY2FjaGVLZXkgPSAnQ2xvbmVkTWF0ZXJpYWw6JyArIG1hdGVyaWFsLnV1aWQgKyAnOic7XG5cblx0XHRcdGlmICggbWF0ZXJpYWwuaXNHTFRGU3BlY3VsYXJHbG9zc2luZXNzTWF0ZXJpYWwgKSBjYWNoZUtleSArPSAnc3BlY3VsYXItZ2xvc3NpbmVzczonO1xuXHRcdFx0aWYgKCB1c2VTa2lubmluZyApIGNhY2hlS2V5ICs9ICdza2lubmluZzonO1xuXHRcdFx0aWYgKCB1c2VWZXJ0ZXhUYW5nZW50cyApIGNhY2hlS2V5ICs9ICd2ZXJ0ZXgtdGFuZ2VudHM6Jztcblx0XHRcdGlmICggdXNlVmVydGV4Q29sb3JzICkgY2FjaGVLZXkgKz0gJ3ZlcnRleC1jb2xvcnM6Jztcblx0XHRcdGlmICggdXNlRmxhdFNoYWRpbmcgKSBjYWNoZUtleSArPSAnZmxhdC1zaGFkaW5nOic7XG5cdFx0XHRpZiAoIHVzZU1vcnBoVGFyZ2V0cyApIGNhY2hlS2V5ICs9ICdtb3JwaC10YXJnZXRzOic7XG5cdFx0XHRpZiAoIHVzZU1vcnBoTm9ybWFscyApIGNhY2hlS2V5ICs9ICdtb3JwaC1ub3JtYWxzOic7XG5cblx0XHRcdGxldCBjYWNoZWRNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0XHRpZiAoICEgY2FjaGVkTWF0ZXJpYWwgKSB7XG5cblx0XHRcdFx0Y2FjaGVkTWF0ZXJpYWwgPSBtYXRlcmlhbC5jbG9uZSgpO1xuXG5cdFx0XHRcdGlmICggdXNlU2tpbm5pbmcgKSBjYWNoZWRNYXRlcmlhbC5za2lubmluZyA9IHRydWU7XG5cdFx0XHRcdGlmICggdXNlVmVydGV4Q29sb3JzICkgY2FjaGVkTWF0ZXJpYWwudmVydGV4Q29sb3JzID0gdHJ1ZTtcblx0XHRcdFx0aWYgKCB1c2VGbGF0U2hhZGluZyApIGNhY2hlZE1hdGVyaWFsLmZsYXRTaGFkaW5nID0gdHJ1ZTtcblx0XHRcdFx0aWYgKCB1c2VNb3JwaFRhcmdldHMgKSBjYWNoZWRNYXRlcmlhbC5tb3JwaFRhcmdldHMgPSB0cnVlO1xuXHRcdFx0XHRpZiAoIHVzZU1vcnBoTm9ybWFscyApIGNhY2hlZE1hdGVyaWFsLm1vcnBoTm9ybWFscyA9IHRydWU7XG5cblx0XHRcdFx0aWYgKCB1c2VWZXJ0ZXhUYW5nZW50cyApIHtcblxuXHRcdFx0XHRcdGNhY2hlZE1hdGVyaWFsLnZlcnRleFRhbmdlbnRzID0gdHJ1ZTtcblxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzExNDM4I2lzc3VlY29tbWVudC01MDcwMDM5OTVcblx0XHRcdFx0XHRpZiAoIGNhY2hlZE1hdGVyaWFsLm5vcm1hbFNjYWxlICkgY2FjaGVkTWF0ZXJpYWwubm9ybWFsU2NhbGUueSAqPSAtIDE7XG5cdFx0XHRcdFx0aWYgKCBjYWNoZWRNYXRlcmlhbC5jbGVhcmNvYXROb3JtYWxTY2FsZSApIGNhY2hlZE1hdGVyaWFsLmNsZWFyY29hdE5vcm1hbFNjYWxlLnkgKj0gLSAxO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIGNhY2hlZE1hdGVyaWFsICk7XG5cblx0XHRcdFx0dGhpcy5hc3NvY2lhdGlvbnMuc2V0KCBjYWNoZWRNYXRlcmlhbCwgdGhpcy5hc3NvY2lhdGlvbnMuZ2V0KCBtYXRlcmlhbCApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWwgPSBjYWNoZWRNYXRlcmlhbDtcblxuXHRcdH1cblxuXHRcdC8vIHdvcmthcm91bmRzIGZvciBtZXNoIGFuZCBnZW9tZXRyeVxuXG5cdFx0aWYgKCBtYXRlcmlhbC5hb01hcCAmJiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2MiA9PT0gdW5kZWZpbmVkICYmIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKCAndXYyJywgZ2VvbWV0cnkuYXR0cmlidXRlcy51diApO1xuXG5cdFx0fVxuXG5cdFx0bWVzaC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoIC8qIG1hdGVyaWFsSW5kZXggKi8gKSB7XG5cblx0XHRyZXR1cm4gTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI21hdGVyaWFsc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gbWF0ZXJpYWxJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE1hdGVyaWFsPn1cblx0ICovXG5cdGxvYWRNYXRlcmlhbCggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0ganNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGxldCBtYXRlcmlhbFR5cGU7XG5cdFx0Y29uc3QgbWF0ZXJpYWxQYXJhbXMgPSB7fTtcblx0XHRjb25zdCBtYXRlcmlhbEV4dGVuc2lvbnMgPSBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8IHt9O1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0aWYgKCBtYXRlcmlhbEV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUyBdICkge1xuXG5cdFx0XHRjb25zdCBzZ0V4dGVuc2lvbiA9IGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUyBdO1xuXHRcdFx0bWF0ZXJpYWxUeXBlID0gc2dFeHRlbnNpb24uZ2V0TWF0ZXJpYWxUeXBlKCk7XG5cdFx0XHRwZW5kaW5nLnB1c2goIHNnRXh0ZW5zaW9uLmV4dGVuZFBhcmFtcyggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSApO1xuXG5cdFx0fSBlbHNlIGlmICggbWF0ZXJpYWxFeHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQgXSApIHtcblxuXHRcdFx0Y29uc3Qga211RXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUIF07XG5cdFx0XHRtYXRlcmlhbFR5cGUgPSBrbXVFeHRlbnNpb24uZ2V0TWF0ZXJpYWxUeXBlKCk7XG5cdFx0XHRwZW5kaW5nLnB1c2goIGttdUV4dGVuc2lvbi5leHRlbmRQYXJhbXMoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIFNwZWNpZmljYXRpb246XG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjbWV0YWxsaWMtcm91Z2huZXNzLW1hdGVyaWFsXG5cblx0XHRcdGNvbnN0IG1ldGFsbGljUm91Z2huZXNzID0gbWF0ZXJpYWxEZWYucGJyTWV0YWxsaWNSb3VnaG5lc3MgfHwge307XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciApICkge1xuXG5cdFx0XHRcdGNvbnN0IGFycmF5ID0gbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yO1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yLmZyb21BcnJheSggYXJyYXkgKTtcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IGFycmF5WyAzIF07XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5tZXRhbG5lc3MgPSBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNGYWN0b3IgOiAxLjA7XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5yb3VnaG5lc3MgPSBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCA/IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzc0ZhY3RvciA6IDEuMDtcblxuXHRcdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21ldGFsbmVzc01hcCcsIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSApICk7XG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAncm91Z2huZXNzTWFwJywgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbFR5cGUgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuZ2V0TWF0ZXJpYWxUeXBlICYmIGV4dC5nZXRNYXRlcmlhbFR5cGUoIG1hdGVyaWFsSW5kZXggKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIFByb21pc2UuYWxsKCB0aGlzLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuZXh0ZW5kTWF0ZXJpYWxQYXJhbXMgJiYgZXh0LmV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApO1xuXG5cdFx0XHR9ICkgKSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5kb3VibGVTaWRlZCA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuc2lkZSA9IERvdWJsZVNpZGU7XG5cblx0XHR9XG5cblx0XHRjb25zdCBhbHBoYU1vZGUgPSBtYXRlcmlhbERlZi5hbHBoYU1vZGUgfHwgQUxQSEFfTU9ERVMuT1BBUVVFO1xuXG5cdFx0aWYgKCBhbHBoYU1vZGUgPT09IEFMUEhBX01PREVTLkJMRU5EICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy50cmFuc3BhcmVudCA9IHRydWU7XG5cblx0XHRcdC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTc3MDZcblx0XHRcdG1hdGVyaWFsUGFyYW1zLmRlcHRoV3JpdGUgPSBmYWxzZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnRyYW5zcGFyZW50ID0gZmFsc2U7XG5cblx0XHRcdGlmICggYWxwaGFNb2RlID09PSBBTFBIQV9NT0RFUy5NQVNLICkge1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmFscGhhVGVzdCA9IG1hdGVyaWFsRGVmLmFscGhhQ3V0b2ZmICE9PSB1bmRlZmluZWQgPyBtYXRlcmlhbERlZi5hbHBoYUN1dG9mZiA6IDAuNTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdub3JtYWxNYXAnLCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlICkgKTtcblxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTE0MzgjaXNzdWVjb21tZW50LTUwNzAwMzk5NVxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGUgPSBuZXcgVmVjdG9yMiggMSwgLSAxICk7XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZS5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlLnNldCggbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZS5zY2FsZSwgLSBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlLnNjYWxlICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICggbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZSAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnYW9NYXAnLCBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlICkgKTtcblxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuYW9NYXBJbnRlbnNpdHkgPSBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLmVtaXNzaXZlRmFjdG9yICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmUgPSBuZXcgQ29sb3IoKS5mcm9tQXJyYXkoIG1hdGVyaWFsRGVmLmVtaXNzaXZlRmFjdG9yICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLmVtaXNzaXZlVGV4dHVyZSAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnZW1pc3NpdmVNYXAnLCBtYXRlcmlhbERlZi5lbWlzc2l2ZVRleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRsZXQgbWF0ZXJpYWw7XG5cblx0XHRcdGlmICggbWF0ZXJpYWxUeXBlID09PSBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbCApIHtcblxuXHRcdFx0XHRtYXRlcmlhbCA9IGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUyBdLmNyZWF0ZU1hdGVyaWFsKCBtYXRlcmlhbFBhcmFtcyApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdG1hdGVyaWFsID0gbmV3IG1hdGVyaWFsVHlwZSggbWF0ZXJpYWxQYXJhbXMgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLm5hbWUgKSBtYXRlcmlhbC5uYW1lID0gbWF0ZXJpYWxEZWYubmFtZTtcblxuXHRcdFx0Ly8gYmFzZUNvbG9yVGV4dHVyZSwgZW1pc3NpdmVUZXh0dXJlLCBhbmQgc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZSB1c2Ugc1JHQiBlbmNvZGluZy5cblx0XHRcdGlmICggbWF0ZXJpYWwubWFwICkgbWF0ZXJpYWwubWFwLmVuY29kaW5nID0gc1JHQkVuY29kaW5nO1xuXHRcdFx0aWYgKCBtYXRlcmlhbC5lbWlzc2l2ZU1hcCApIG1hdGVyaWFsLmVtaXNzaXZlTWFwLmVuY29kaW5nID0gc1JHQkVuY29kaW5nO1xuXG5cdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBtYXRlcmlhbCwgbWF0ZXJpYWxEZWYgKTtcblxuXHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIG1hdGVyaWFsLCB7IHR5cGU6ICdtYXRlcmlhbHMnLCBpbmRleDogbWF0ZXJpYWxJbmRleCB9ICk7XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgbWF0ZXJpYWwsIG1hdGVyaWFsRGVmICk7XG5cblx0XHRcdHJldHVybiBtYXRlcmlhbDtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqIFdoZW4gT2JqZWN0M0QgaW5zdGFuY2VzIGFyZSB0YXJnZXRlZCBieSBhbmltYXRpb24sIHRoZXkgbmVlZCB1bmlxdWUgbmFtZXMuICovXG5cdGNyZWF0ZVVuaXF1ZU5hbWUoIG9yaWdpbmFsTmFtZSApIHtcblxuXHRcdGNvbnN0IHNhbml0aXplZE5hbWUgPSBQcm9wZXJ0eUJpbmRpbmcuc2FuaXRpemVOb2RlTmFtZSggb3JpZ2luYWxOYW1lIHx8ICcnICk7XG5cblx0XHRsZXQgbmFtZSA9IHNhbml0aXplZE5hbWU7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDE7IHRoaXMubm9kZU5hbWVzVXNlZFsgbmFtZSBdOyArKyBpICkge1xuXG5cdFx0XHRuYW1lID0gc2FuaXRpemVkTmFtZSArICdfJyArIGk7XG5cblx0XHR9XG5cblx0XHR0aGlzLm5vZGVOYW1lc1VzZWRbIG5hbWUgXSA9IHRydWU7XG5cblx0XHRyZXR1cm4gbmFtZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjZ2VvbWV0cnlcblx0ICpcblx0ICogQ3JlYXRlcyBCdWZmZXJHZW9tZXRyaWVzIGZyb20gcHJpbWl0aXZlcy5cblx0ICpcblx0ICogQHBhcmFtIHtBcnJheTxHTFRGLlByaW1pdGl2ZT59IHByaW1pdGl2ZXNcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxCdWZmZXJHZW9tZXRyeT4+fVxuXHQgKi9cblx0bG9hZEdlb21ldHJpZXMoIHByaW1pdGl2ZXMgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cdFx0Y29uc3QgY2FjaGUgPSB0aGlzLnByaW1pdGl2ZUNhY2hlO1xuXG5cdFx0ZnVuY3Rpb24gY3JlYXRlRHJhY29QcmltaXRpdmUoIHByaW1pdGl2ZSApIHtcblxuXHRcdFx0cmV0dXJuIGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04gXVxuXHRcdFx0XHQuZGVjb2RlUHJpbWl0aXZlKCBwcmltaXRpdmUsIHBhcnNlciApXG5cdFx0XHRcdC50aGVuKCBmdW5jdGlvbiAoIGdlb21ldHJ5ICkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIGFkZFByaW1pdGl2ZUF0dHJpYnV0ZXMoIGdlb21ldHJ5LCBwcmltaXRpdmUsIHBhcnNlciApO1xuXG5cdFx0XHRcdH0gKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBwcmltaXRpdmVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCBwcmltaXRpdmUgPSBwcmltaXRpdmVzWyBpIF07XG5cdFx0XHRjb25zdCBjYWNoZUtleSA9IGNyZWF0ZVByaW1pdGl2ZUtleSggcHJpbWl0aXZlICk7XG5cblx0XHRcdC8vIFNlZSBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgdGhpcyBnZW9tZXRyeVxuXHRcdFx0Y29uc3QgY2FjaGVkID0gY2FjaGVbIGNhY2hlS2V5IF07XG5cblx0XHRcdGlmICggY2FjaGVkICkge1xuXG5cdFx0XHRcdC8vIFVzZSB0aGUgY2FjaGVkIGdlb21ldHJ5IGlmIGl0IGV4aXN0c1xuXHRcdFx0XHRwZW5kaW5nLnB1c2goIGNhY2hlZC5wcm9taXNlICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bGV0IGdlb21ldHJ5UHJvbWlzZTtcblxuXHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5leHRlbnNpb25zICYmIHByaW1pdGl2ZS5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OIF0gKSB7XG5cblx0XHRcdFx0XHQvLyBVc2UgRFJBQ08gZ2VvbWV0cnkgaWYgYXZhaWxhYmxlXG5cdFx0XHRcdFx0Z2VvbWV0cnlQcm9taXNlID0gY3JlYXRlRHJhY29QcmltaXRpdmUoIHByaW1pdGl2ZSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGdlb21ldHJ5XG5cdFx0XHRcdFx0Z2VvbWV0cnlQcm9taXNlID0gYWRkUHJpbWl0aXZlQXR0cmlidXRlcyggbmV3IEJ1ZmZlckdlb21ldHJ5KCksIHByaW1pdGl2ZSwgcGFyc2VyICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENhY2hlIHRoaXMgZ2VvbWV0cnlcblx0XHRcdFx0Y2FjaGVbIGNhY2hlS2V5IF0gPSB7IHByaW1pdGl2ZTogcHJpbWl0aXZlLCBwcm9taXNlOiBnZW9tZXRyeVByb21pc2UgfTtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIGdlb21ldHJ5UHJvbWlzZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbWVzaGVzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtZXNoSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxHcm91cHxNZXNofFNraW5uZWRNZXNoPn1cblx0ICovXG5cdGxvYWRNZXNoKCBtZXNoSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblxuXHRcdGNvbnN0IG1lc2hEZWYgPSBqc29uLm1lc2hlc1sgbWVzaEluZGV4IF07XG5cdFx0Y29uc3QgcHJpbWl0aXZlcyA9IG1lc2hEZWYucHJpbWl0aXZlcztcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBwcmltaXRpdmVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCBtYXRlcmlhbCA9IHByaW1pdGl2ZXNbIGkgXS5tYXRlcmlhbCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY3JlYXRlRGVmYXVsdE1hdGVyaWFsKCB0aGlzLmNhY2hlIClcblx0XHRcdFx0OiB0aGlzLmdldERlcGVuZGVuY3koICdtYXRlcmlhbCcsIHByaW1pdGl2ZXNbIGkgXS5tYXRlcmlhbCApO1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIG1hdGVyaWFsICk7XG5cblx0XHR9XG5cblx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5sb2FkR2VvbWV0cmllcyggcHJpbWl0aXZlcyApICk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoIHJlc3VsdHMgKSB7XG5cblx0XHRcdGNvbnN0IG1hdGVyaWFscyA9IHJlc3VsdHMuc2xpY2UoIDAsIHJlc3VsdHMubGVuZ3RoIC0gMSApO1xuXHRcdFx0Y29uc3QgZ2VvbWV0cmllcyA9IHJlc3VsdHNbIHJlc3VsdHMubGVuZ3RoIC0gMSBdO1xuXG5cdFx0XHRjb25zdCBtZXNoZXMgPSBbXTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGdlb21ldHJpZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Y29uc3QgZ2VvbWV0cnkgPSBnZW9tZXRyaWVzWyBpIF07XG5cdFx0XHRcdGNvbnN0IHByaW1pdGl2ZSA9IHByaW1pdGl2ZXNbIGkgXTtcblxuXHRcdFx0XHQvLyAxLiBjcmVhdGUgTWVzaFxuXG5cdFx0XHRcdGxldCBtZXNoO1xuXG5cdFx0XHRcdGNvbnN0IG1hdGVyaWFsID0gbWF0ZXJpYWxzWyBpIF07XG5cblx0XHRcdFx0aWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFUyB8fFxuXHRcdFx0XHRcdFx0cHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9TVFJJUCB8fFxuXHRcdFx0XHRcdFx0cHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9GQU4gfHxcblx0XHRcdFx0XHRcdHByaW1pdGl2ZS5tb2RlID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHQvLyAuaXNTa2lubmVkTWVzaCBpc24ndCBpbiBnbFRGIHNwZWMuIFNlZSAuX21hcmtEZWZzKClcblx0XHRcdFx0XHRtZXNoID0gbWVzaERlZi5pc1NraW5uZWRNZXNoID09PSB0cnVlXG5cdFx0XHRcdFx0XHQ/IG5ldyBTa2lubmVkTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsIClcblx0XHRcdFx0XHRcdDogbmV3IE1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdFx0aWYgKCBtZXNoLmlzU2tpbm5lZE1lc2ggPT09IHRydWUgJiYgISBtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMuc2tpbldlaWdodC5ub3JtYWxpemVkICkge1xuXG5cdFx0XHRcdFx0XHQvLyB3ZSBub3JtYWxpemUgZmxvYXRpbmcgcG9pbnQgc2tpbiB3ZWlnaHQgYXJyYXkgdG8gZml4IG1hbGZvcm1lZCBhc3NldHMgKHNlZSAjMTUzMTkpXG5cdFx0XHRcdFx0XHQvLyBpdCdzIGltcG9ydGFudCB0byBza2lwIHRoaXMgZm9yIG5vbi1mbG9hdDMyIGRhdGEgc2luY2Ugbm9ybWFsaXplU2tpbldlaWdodHMgYXNzdW1lcyBub24tbm9ybWFsaXplZCBpbnB1dHNcblx0XHRcdFx0XHRcdG1lc2gubm9ybWFsaXplU2tpbldlaWdodHMoKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9TVFJJUCApIHtcblxuXHRcdFx0XHRcdFx0bWVzaC5nZW9tZXRyeSA9IHRvVHJpYW5nbGVzRHJhd01vZGUoIG1lc2guZ2VvbWV0cnksIFRyaWFuZ2xlU3RyaXBEcmF3TW9kZSApO1xuXG5cdFx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9GQU4gKSB7XG5cblx0XHRcdFx0XHRcdG1lc2guZ2VvbWV0cnkgPSB0b1RyaWFuZ2xlc0RyYXdNb2RlKCBtZXNoLmdlb21ldHJ5LCBUcmlhbmdsZUZhbkRyYXdNb2RlICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5MSU5FUyApIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgTGluZVNlZ21lbnRzKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLkxJTkVfU1RSSVAgKSB7XG5cblx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmUoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuTElORV9MT09QICkge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBMaW5lTG9vcCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5QT0lOVFMgKSB7XG5cblx0XHRcdFx0XHRtZXNoID0gbmV3IFBvaW50cyggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFByaW1pdGl2ZSBtb2RlIHVuc3VwcG9ydGVkOiAnICsgcHJpbWl0aXZlLm1vZGUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBPYmplY3Qua2V5cyggbWVzaC5nZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMgKS5sZW5ndGggPiAwICkge1xuXG5cdFx0XHRcdFx0dXBkYXRlTW9ycGhUYXJnZXRzKCBtZXNoLCBtZXNoRGVmICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1lc2gubmFtZSA9IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBtZXNoRGVmLm5hbWUgfHwgKCAnbWVzaF8nICsgbWVzaEluZGV4ICkgKTtcblxuXHRcdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBtZXNoLCBtZXNoRGVmICk7XG5cblx0XHRcdFx0aWYgKCBwcmltaXRpdmUuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgbWVzaCwgcHJpbWl0aXZlICk7XG5cblx0XHRcdFx0cGFyc2VyLmFzc2lnbkZpbmFsTWF0ZXJpYWwoIG1lc2ggKTtcblxuXHRcdFx0XHRtZXNoZXMucHVzaCggbWVzaCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbWVzaGVzLmxlbmd0aCA9PT0gMSApIHtcblxuXHRcdFx0XHRyZXR1cm4gbWVzaGVzWyAwIF07XG5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZ3JvdXAgPSBuZXcgR3JvdXAoKTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG1lc2hlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRncm91cC5hZGQoIG1lc2hlc1sgaSBdICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGdyb3VwO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI2NhbWVyYXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNhbWVyYUluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VEhSRUUuQ2FtZXJhPn1cblx0ICovXG5cdGxvYWRDYW1lcmEoIGNhbWVyYUluZGV4ICkge1xuXG5cdFx0bGV0IGNhbWVyYTtcblx0XHRjb25zdCBjYW1lcmFEZWYgPSB0aGlzLmpzb24uY2FtZXJhc1sgY2FtZXJhSW5kZXggXTtcblx0XHRjb25zdCBwYXJhbXMgPSBjYW1lcmFEZWZbIGNhbWVyYURlZi50eXBlIF07XG5cblx0XHRpZiAoICEgcGFyYW1zICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBNaXNzaW5nIGNhbWVyYSBwYXJhbWV0ZXJzLicgKTtcblx0XHRcdHJldHVybjtcblxuXHRcdH1cblxuXHRcdGlmICggY2FtZXJhRGVmLnR5cGUgPT09ICdwZXJzcGVjdGl2ZScgKSB7XG5cblx0XHRcdGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSggTWF0aFV0aWxzLnJhZFRvRGVnKCBwYXJhbXMueWZvdiApLCBwYXJhbXMuYXNwZWN0UmF0aW8gfHwgMSwgcGFyYW1zLnpuZWFyIHx8IDEsIHBhcmFtcy56ZmFyIHx8IDJlNiApO1xuXG5cdFx0fSBlbHNlIGlmICggY2FtZXJhRGVmLnR5cGUgPT09ICdvcnRob2dyYXBoaWMnICkge1xuXG5cdFx0XHRjYW1lcmEgPSBuZXcgT3J0aG9ncmFwaGljQ2FtZXJhKCAtIHBhcmFtcy54bWFnLCBwYXJhbXMueG1hZywgcGFyYW1zLnltYWcsIC0gcGFyYW1zLnltYWcsIHBhcmFtcy56bmVhciwgcGFyYW1zLnpmYXIgKTtcblxuXHRcdH1cblxuXHRcdGlmICggY2FtZXJhRGVmLm5hbWUgKSBjYW1lcmEubmFtZSA9IHRoaXMuY3JlYXRlVW5pcXVlTmFtZSggY2FtZXJhRGVmLm5hbWUgKTtcblxuXHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIGNhbWVyYSwgY2FtZXJhRGVmICk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBjYW1lcmEgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNza2luc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gc2tpbkluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cblx0ICovXG5cdGxvYWRTa2luKCBza2luSW5kZXggKSB7XG5cblx0XHRjb25zdCBza2luRGVmID0gdGhpcy5qc29uLnNraW5zWyBza2luSW5kZXggXTtcblxuXHRcdGNvbnN0IHNraW5FbnRyeSA9IHsgam9pbnRzOiBza2luRGVmLmpvaW50cyB9O1xuXG5cdFx0aWYgKCBza2luRGVmLmludmVyc2VCaW5kTWF0cmljZXMgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggc2tpbkVudHJ5ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBza2luRGVmLmludmVyc2VCaW5kTWF0cmljZXMgKS50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29yICkge1xuXG5cdFx0XHRza2luRW50cnkuaW52ZXJzZUJpbmRNYXRyaWNlcyA9IGFjY2Vzc29yO1xuXG5cdFx0XHRyZXR1cm4gc2tpbkVudHJ5O1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI2FuaW1hdGlvbnNcblx0ICogQHBhcmFtIHtudW1iZXJ9IGFuaW1hdGlvbkluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QW5pbWF0aW9uQ2xpcD59XG5cdCAqL1xuXHRsb2FkQW5pbWF0aW9uKCBhbmltYXRpb25JbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cblx0XHRjb25zdCBhbmltYXRpb25EZWYgPSBqc29uLmFuaW1hdGlvbnNbIGFuaW1hdGlvbkluZGV4IF07XG5cblx0XHRjb25zdCBwZW5kaW5nTm9kZXMgPSBbXTtcblx0XHRjb25zdCBwZW5kaW5nSW5wdXRBY2Nlc3NvcnMgPSBbXTtcblx0XHRjb25zdCBwZW5kaW5nT3V0cHV0QWNjZXNzb3JzID0gW107XG5cdFx0Y29uc3QgcGVuZGluZ1NhbXBsZXJzID0gW107XG5cdFx0Y29uc3QgcGVuZGluZ1RhcmdldHMgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBhbmltYXRpb25EZWYuY2hhbm5lbHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IGNoYW5uZWwgPSBhbmltYXRpb25EZWYuY2hhbm5lbHNbIGkgXTtcblx0XHRcdGNvbnN0IHNhbXBsZXIgPSBhbmltYXRpb25EZWYuc2FtcGxlcnNbIGNoYW5uZWwuc2FtcGxlciBdO1xuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gY2hhbm5lbC50YXJnZXQ7XG5cdFx0XHRjb25zdCBuYW1lID0gdGFyZ2V0Lm5vZGUgIT09IHVuZGVmaW5lZCA/IHRhcmdldC5ub2RlIDogdGFyZ2V0LmlkOyAvLyBOT1RFOiB0YXJnZXQuaWQgaXMgZGVwcmVjYXRlZC5cblx0XHRcdGNvbnN0IGlucHV0ID0gYW5pbWF0aW9uRGVmLnBhcmFtZXRlcnMgIT09IHVuZGVmaW5lZCA/IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzWyBzYW1wbGVyLmlucHV0IF0gOiBzYW1wbGVyLmlucHV0O1xuXHRcdFx0Y29uc3Qgb3V0cHV0ID0gYW5pbWF0aW9uRGVmLnBhcmFtZXRlcnMgIT09IHVuZGVmaW5lZCA/IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzWyBzYW1wbGVyLm91dHB1dCBdIDogc2FtcGxlci5vdXRwdXQ7XG5cblx0XHRcdHBlbmRpbmdOb2Rlcy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdub2RlJywgbmFtZSApICk7XG5cdFx0XHRwZW5kaW5nSW5wdXRBY2Nlc3NvcnMucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBpbnB1dCApICk7XG5cdFx0XHRwZW5kaW5nT3V0cHV0QWNjZXNzb3JzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgb3V0cHV0ICkgKTtcblx0XHRcdHBlbmRpbmdTYW1wbGVycy5wdXNoKCBzYW1wbGVyICk7XG5cdFx0XHRwZW5kaW5nVGFyZ2V0cy5wdXNoKCB0YXJnZXQgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggW1xuXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ05vZGVzICksXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ0lucHV0QWNjZXNzb3JzICksXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ091dHB1dEFjY2Vzc29ycyApLFxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdTYW1wbGVycyApLFxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdUYXJnZXRzIClcblxuXHRcdF0gKS50aGVuKCBmdW5jdGlvbiAoIGRlcGVuZGVuY2llcyApIHtcblxuXHRcdFx0Y29uc3Qgbm9kZXMgPSBkZXBlbmRlbmNpZXNbIDAgXTtcblx0XHRcdGNvbnN0IGlucHV0QWNjZXNzb3JzID0gZGVwZW5kZW5jaWVzWyAxIF07XG5cdFx0XHRjb25zdCBvdXRwdXRBY2Nlc3NvcnMgPSBkZXBlbmRlbmNpZXNbIDIgXTtcblx0XHRcdGNvbnN0IHNhbXBsZXJzID0gZGVwZW5kZW5jaWVzWyAzIF07XG5cdFx0XHRjb25zdCB0YXJnZXRzID0gZGVwZW5kZW5jaWVzWyA0IF07XG5cblx0XHRcdGNvbnN0IHRyYWNrcyA9IFtdO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbm9kZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Y29uc3Qgbm9kZSA9IG5vZGVzWyBpIF07XG5cdFx0XHRcdGNvbnN0IGlucHV0QWNjZXNzb3IgPSBpbnB1dEFjY2Vzc29yc1sgaSBdO1xuXHRcdFx0XHRjb25zdCBvdXRwdXRBY2Nlc3NvciA9IG91dHB1dEFjY2Vzc29yc1sgaSBdO1xuXHRcdFx0XHRjb25zdCBzYW1wbGVyID0gc2FtcGxlcnNbIGkgXTtcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xuXG5cdFx0XHRcdGlmICggbm9kZSA9PT0gdW5kZWZpbmVkICkgY29udGludWU7XG5cblx0XHRcdFx0bm9kZS51cGRhdGVNYXRyaXgoKTtcblx0XHRcdFx0bm9kZS5tYXRyaXhBdXRvVXBkYXRlID0gdHJ1ZTtcblxuXHRcdFx0XHRsZXQgVHlwZWRLZXlmcmFtZVRyYWNrO1xuXG5cdFx0XHRcdHN3aXRjaCAoIFBBVEhfUFJPUEVSVElFU1sgdGFyZ2V0LnBhdGggXSApIHtcblxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLndlaWdodHM6XG5cblx0XHRcdFx0XHRcdFR5cGVkS2V5ZnJhbWVUcmFjayA9IE51bWJlcktleWZyYW1lVHJhY2s7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnJvdGF0aW9uOlxuXG5cdFx0XHRcdFx0XHRUeXBlZEtleWZyYW1lVHJhY2sgPSBRdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjaztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBQQVRIX1BST1BFUlRJRVMucG9zaXRpb246XG5cdFx0XHRcdFx0Y2FzZSBQQVRIX1BST1BFUlRJRVMuc2NhbGU6XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdFx0VHlwZWRLZXlmcmFtZVRyYWNrID0gVmVjdG9yS2V5ZnJhbWVUcmFjaztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCB0YXJnZXROYW1lID0gbm9kZS5uYW1lID8gbm9kZS5uYW1lIDogbm9kZS51dWlkO1xuXG5cdFx0XHRcdGNvbnN0IGludGVycG9sYXRpb24gPSBzYW1wbGVyLmludGVycG9sYXRpb24gIT09IHVuZGVmaW5lZCA/IElOVEVSUE9MQVRJT05bIHNhbXBsZXIuaW50ZXJwb2xhdGlvbiBdIDogSW50ZXJwb2xhdGVMaW5lYXI7XG5cblx0XHRcdFx0Y29uc3QgdGFyZ2V0TmFtZXMgPSBbXTtcblxuXHRcdFx0XHRpZiAoIFBBVEhfUFJPUEVSVElFU1sgdGFyZ2V0LnBhdGggXSA9PT0gUEFUSF9QUk9QRVJUSUVTLndlaWdodHMgKSB7XG5cblx0XHRcdFx0XHQvLyBOb2RlIG1heSBiZSBhIEdyb3VwIChnbFRGIG1lc2ggd2l0aCBzZXZlcmFsIHByaW1pdGl2ZXMpIG9yIGEgTWVzaC5cblx0XHRcdFx0XHRub2RlLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG9iamVjdCApIHtcblxuXHRcdFx0XHRcdFx0aWYgKCBvYmplY3QuaXNNZXNoID09PSB0cnVlICYmIG9iamVjdC5tb3JwaFRhcmdldEluZmx1ZW5jZXMgKSB7XG5cblx0XHRcdFx0XHRcdFx0dGFyZ2V0TmFtZXMucHVzaCggb2JqZWN0Lm5hbWUgPyBvYmplY3QubmFtZSA6IG9iamVjdC51dWlkICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0dGFyZ2V0TmFtZXMucHVzaCggdGFyZ2V0TmFtZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgb3V0cHV0QXJyYXkgPSBvdXRwdXRBY2Nlc3Nvci5hcnJheTtcblxuXHRcdFx0XHRpZiAoIG91dHB1dEFjY2Vzc29yLm5vcm1hbGl6ZWQgKSB7XG5cblx0XHRcdFx0XHRjb25zdCBzY2FsZSA9IGdldE5vcm1hbGl6ZWRDb21wb25lbnRTY2FsZSggb3V0cHV0QXJyYXkuY29uc3RydWN0b3IgKTtcblx0XHRcdFx0XHRjb25zdCBzY2FsZWQgPSBuZXcgRmxvYXQzMkFycmF5KCBvdXRwdXRBcnJheS5sZW5ndGggKTtcblxuXHRcdFx0XHRcdGZvciAoIGxldCBqID0gMCwgamwgPSBvdXRwdXRBcnJheS5sZW5ndGg7IGogPCBqbDsgaiArKyApIHtcblxuXHRcdFx0XHRcdFx0c2NhbGVkWyBqIF0gPSBvdXRwdXRBcnJheVsgaiBdICogc2NhbGU7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvdXRwdXRBcnJheSA9IHNjYWxlZDtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICggbGV0IGogPSAwLCBqbCA9IHRhcmdldE5hbWVzLmxlbmd0aDsgaiA8IGpsOyBqICsrICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgdHJhY2sgPSBuZXcgVHlwZWRLZXlmcmFtZVRyYWNrKFxuXHRcdFx0XHRcdFx0dGFyZ2V0TmFtZXNbIGogXSArICcuJyArIFBBVEhfUFJPUEVSVElFU1sgdGFyZ2V0LnBhdGggXSxcblx0XHRcdFx0XHRcdGlucHV0QWNjZXNzb3IuYXJyYXksXG5cdFx0XHRcdFx0XHRvdXRwdXRBcnJheSxcblx0XHRcdFx0XHRcdGludGVycG9sYXRpb25cblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0Ly8gT3ZlcnJpZGUgaW50ZXJwb2xhdGlvbiB3aXRoIGN1c3RvbSBmYWN0b3J5IG1ldGhvZC5cblx0XHRcdFx0XHRpZiAoIHNhbXBsZXIuaW50ZXJwb2xhdGlvbiA9PT0gJ0NVQklDU1BMSU5FJyApIHtcblxuXHRcdFx0XHRcdFx0dHJhY2suY3JlYXRlSW50ZXJwb2xhbnQgPSBmdW5jdGlvbiBJbnRlcnBvbGFudEZhY3RvcnlNZXRob2RHTFRGQ3ViaWNTcGxpbmUoIHJlc3VsdCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBBIENVQklDU1BMSU5FIGtleWZyYW1lIGluIGdsVEYgaGFzIHRocmVlIG91dHB1dCB2YWx1ZXMgZm9yIGVhY2ggaW5wdXQgdmFsdWUsXG5cdFx0XHRcdFx0XHRcdC8vIHJlcHJlc2VudGluZyBpblRhbmdlbnQsIHNwbGluZVZlcnRleCwgYW5kIG91dFRhbmdlbnQuIEFzIGEgcmVzdWx0LCB0cmFjay5nZXRWYWx1ZVNpemUoKVxuXHRcdFx0XHRcdFx0XHQvLyBtdXN0IGJlIGRpdmlkZWQgYnkgdGhyZWUgdG8gZ2V0IHRoZSBpbnRlcnBvbGFudCdzIHNhbXBsZVNpemUgYXJndW1lbnQuXG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudCggdGhpcy50aW1lcywgdGhpcy52YWx1ZXMsIHRoaXMuZ2V0VmFsdWVTaXplKCkgLyAzLCByZXN1bHQgKTtcblxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0Ly8gTWFyayBhcyBDVUJJQ1NQTElORS4gYHRyYWNrLmdldEludGVycG9sYXRpb24oKWAgZG9lc24ndCBzdXBwb3J0IGN1c3RvbSBpbnRlcnBvbGFudHMuXG5cdFx0XHRcdFx0XHR0cmFjay5jcmVhdGVJbnRlcnBvbGFudC5pc0ludGVycG9sYW50RmFjdG9yeU1ldGhvZEdMVEZDdWJpY1NwbGluZSA9IHRydWU7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0cmFja3MucHVzaCggdHJhY2sgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbmFtZSA9IGFuaW1hdGlvbkRlZi5uYW1lID8gYW5pbWF0aW9uRGVmLm5hbWUgOiAnYW5pbWF0aW9uXycgKyBhbmltYXRpb25JbmRleDtcblxuXHRcdFx0cmV0dXJuIG5ldyBBbmltYXRpb25DbGlwKCBuYW1lLCB1bmRlZmluZWQsIHRyYWNrcyApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHRjcmVhdGVOb2RlTWVzaCggbm9kZUluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IG5vZGVEZWYgPSBqc29uLm5vZGVzWyBub2RlSW5kZXggXTtcblxuXHRcdGlmICggbm9kZURlZi5tZXNoID09PSB1bmRlZmluZWQgKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ21lc2gnLCBub2RlRGVmLm1lc2ggKS50aGVuKCBmdW5jdGlvbiAoIG1lc2ggKSB7XG5cblx0XHRcdGNvbnN0IG5vZGUgPSBwYXJzZXIuX2dldE5vZGVSZWYoIHBhcnNlci5tZXNoQ2FjaGUsIG5vZGVEZWYubWVzaCwgbWVzaCApO1xuXG5cdFx0XHQvLyBpZiB3ZWlnaHRzIGFyZSBwcm92aWRlZCBvbiB0aGUgbm9kZSwgb3ZlcnJpZGUgd2VpZ2h0cyBvbiB0aGUgbWVzaC5cblx0XHRcdGlmICggbm9kZURlZi53ZWlnaHRzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0bm9kZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvICkge1xuXG5cdFx0XHRcdFx0aWYgKCAhIG8uaXNNZXNoICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG5vZGVEZWYud2VpZ2h0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRcdFx0by5tb3JwaFRhcmdldEluZmx1ZW5jZXNbIGkgXSA9IG5vZGVEZWYud2VpZ2h0c1sgaSBdO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbm9kZTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNub2Rlcy1hbmQtaGllcmFyY2h5XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBub2RlSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QzRD59XG5cdCAqL1xuXHRsb2FkTm9kZSggbm9kZUluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cblx0XHRjb25zdCBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHQvLyByZXNlcnZlIG5vZGUncyBuYW1lIGJlZm9yZSBpdHMgZGVwZW5kZW5jaWVzLCBzbyB0aGUgcm9vdCBoYXMgdGhlIGludGVuZGVkIG5hbWUuXG5cdFx0Y29uc3Qgbm9kZU5hbWUgPSBub2RlRGVmLm5hbWUgPyBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggbm9kZURlZi5uYW1lICkgOiAnJztcblxuXHRcdHJldHVybiAoIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0XHRjb25zdCBtZXNoUHJvbWlzZSA9IHBhcnNlci5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmNyZWF0ZU5vZGVNZXNoICYmIGV4dC5jcmVhdGVOb2RlTWVzaCggbm9kZUluZGV4ICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0aWYgKCBtZXNoUHJvbWlzZSApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIG1lc2hQcm9taXNlICk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBub2RlRGVmLmNhbWVyYSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmdldERlcGVuZGVuY3koICdjYW1lcmEnLCBub2RlRGVmLmNhbWVyYSApLnRoZW4oIGZ1bmN0aW9uICggY2FtZXJhICkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHBhcnNlci5fZ2V0Tm9kZVJlZiggcGFyc2VyLmNhbWVyYUNhY2hlLCBub2RlRGVmLmNhbWVyYSwgY2FtZXJhICk7XG5cblx0XHRcdFx0fSApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cGFyc2VyLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuY3JlYXRlTm9kZUF0dGFjaG1lbnQgJiYgZXh0LmNyZWF0ZU5vZGVBdHRhY2htZW50KCBub2RlSW5kZXggKTtcblxuXHRcdFx0fSApLmZvckVhY2goIGZ1bmN0aW9uICggcHJvbWlzZSApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHByb21pc2UgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHRcdH0oKSApLnRoZW4oIGZ1bmN0aW9uICggb2JqZWN0cyApIHtcblxuXHRcdFx0bGV0IG5vZGU7XG5cblx0XHRcdC8vIC5pc0JvbmUgaXNuJ3QgaW4gZ2xURiBzcGVjLiBTZWUgLl9tYXJrRGVmc1xuXHRcdFx0aWYgKCBub2RlRGVmLmlzQm9uZSA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRub2RlID0gbmV3IEJvbmUoKTtcblxuXHRcdFx0fSBlbHNlIGlmICggb2JqZWN0cy5sZW5ndGggPiAxICkge1xuXG5cdFx0XHRcdG5vZGUgPSBuZXcgR3JvdXAoKTtcblxuXHRcdFx0fSBlbHNlIGlmICggb2JqZWN0cy5sZW5ndGggPT09IDEgKSB7XG5cblx0XHRcdFx0bm9kZSA9IG9iamVjdHNbIDAgXTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRub2RlID0gbmV3IE9iamVjdDNEKCk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBub2RlICE9PSBvYmplY3RzWyAwIF0gKSB7XG5cblx0XHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG9iamVjdHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0XHRub2RlLmFkZCggb2JqZWN0c1sgaSBdICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZURlZi5uYW1lICkge1xuXG5cdFx0XHRcdG5vZGUudXNlckRhdGEubmFtZSA9IG5vZGVEZWYubmFtZTtcblx0XHRcdFx0bm9kZS5uYW1lID0gbm9kZU5hbWU7XG5cblx0XHRcdH1cblxuXHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggbm9kZSwgbm9kZURlZiApO1xuXG5cdFx0XHRpZiAoIG5vZGVEZWYuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgbm9kZSwgbm9kZURlZiApO1xuXG5cdFx0XHRpZiAoIG5vZGVEZWYubWF0cml4ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Y29uc3QgbWF0cml4ID0gbmV3IE1hdHJpeDQoKTtcblx0XHRcdFx0bWF0cml4LmZyb21BcnJheSggbm9kZURlZi5tYXRyaXggKTtcblx0XHRcdFx0bm9kZS5hcHBseU1hdHJpeDQoIG1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICggbm9kZURlZi50cmFuc2xhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0bm9kZS5wb3NpdGlvbi5mcm9tQXJyYXkoIG5vZGVEZWYudHJhbnNsYXRpb24gKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBub2RlRGVmLnJvdGF0aW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRub2RlLnF1YXRlcm5pb24uZnJvbUFycmF5KCBub2RlRGVmLnJvdGF0aW9uICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggbm9kZURlZi5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0bm9kZS5zY2FsZS5mcm9tQXJyYXkoIG5vZGVEZWYuc2NhbGUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIG5vZGUsIHsgdHlwZTogJ25vZGVzJywgaW5kZXg6IG5vZGVJbmRleCB9ICk7XG5cblx0XHRcdHJldHVybiBub2RlO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3NjZW5lc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gc2NlbmVJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEdyb3VwPn1cblx0ICovXG5cdGxvYWRTY2VuZSggc2NlbmVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBzY2VuZURlZiA9IHRoaXMuanNvbi5zY2VuZXNbIHNjZW5lSW5kZXggXTtcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXG5cdFx0Ly8gTG9hZGVyIHJldHVybnMgR3JvdXAsIG5vdCBTY2VuZS5cblx0XHQvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE4MzQyI2lzc3VlY29tbWVudC01Nzg5ODExNzJcblx0XHRjb25zdCBzY2VuZSA9IG5ldyBHcm91cCgpO1xuXHRcdGlmICggc2NlbmVEZWYubmFtZSApIHNjZW5lLm5hbWUgPSBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggc2NlbmVEZWYubmFtZSApO1xuXG5cdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggc2NlbmUsIHNjZW5lRGVmICk7XG5cblx0XHRpZiAoIHNjZW5lRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIHNjZW5lLCBzY2VuZURlZiApO1xuXG5cdFx0Y29uc3Qgbm9kZUlkcyA9IHNjZW5lRGVmLm5vZGVzIHx8IFtdO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG5vZGVJZHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggYnVpbGROb2RlSGllcmFjaHkoIG5vZGVJZHNbIGkgXSwgc2NlbmUsIGpzb24sIHBhcnNlciApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBzY2VuZTtcblxuXHRcdH0gKTtcblxuXHR9XG5cbn1cblxuZnVuY3Rpb24gYnVpbGROb2RlSGllcmFjaHkoIG5vZGVJZCwgcGFyZW50T2JqZWN0LCBqc29uLCBwYXJzZXIgKSB7XG5cblx0Y29uc3Qgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJZCBdO1xuXG5cdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ25vZGUnLCBub2RlSWQgKS50aGVuKCBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cblx0XHRpZiAoIG5vZGVEZWYuc2tpbiA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIG5vZGU7XG5cblx0XHQvLyBidWlsZCBza2VsZXRvbiBoZXJlIGFzIHdlbGxcblxuXHRcdGxldCBza2luRW50cnk7XG5cblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdza2luJywgbm9kZURlZi5za2luICkudGhlbiggZnVuY3Rpb24gKCBza2luICkge1xuXG5cdFx0XHRza2luRW50cnkgPSBza2luO1xuXG5cdFx0XHRjb25zdCBwZW5kaW5nSm9pbnRzID0gW107XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBza2luRW50cnkuam9pbnRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdHBlbmRpbmdKb2ludHMucHVzaCggcGFyc2VyLmdldERlcGVuZGVuY3koICdub2RlJywgc2tpbkVudHJ5LmpvaW50c1sgaSBdICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmdKb2ludHMgKTtcblxuXHRcdH0gKS50aGVuKCBmdW5jdGlvbiAoIGpvaW50Tm9kZXMgKSB7XG5cblx0XHRcdG5vZGUudHJhdmVyc2UoIGZ1bmN0aW9uICggbWVzaCApIHtcblxuXHRcdFx0XHRpZiAoICEgbWVzaC5pc01lc2ggKSByZXR1cm47XG5cblx0XHRcdFx0Y29uc3QgYm9uZXMgPSBbXTtcblx0XHRcdFx0Y29uc3QgYm9uZUludmVyc2VzID0gW107XG5cblx0XHRcdFx0Zm9yICggbGV0IGogPSAwLCBqbCA9IGpvaW50Tm9kZXMubGVuZ3RoOyBqIDwgamw7IGogKysgKSB7XG5cblx0XHRcdFx0XHRjb25zdCBqb2ludE5vZGUgPSBqb2ludE5vZGVzWyBqIF07XG5cblx0XHRcdFx0XHRpZiAoIGpvaW50Tm9kZSApIHtcblxuXHRcdFx0XHRcdFx0Ym9uZXMucHVzaCggam9pbnROb2RlICk7XG5cblx0XHRcdFx0XHRcdGNvbnN0IG1hdCA9IG5ldyBNYXRyaXg0KCk7XG5cblx0XHRcdFx0XHRcdGlmICggc2tpbkVudHJ5LmludmVyc2VCaW5kTWF0cmljZXMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdFx0XHRtYXQuZnJvbUFycmF5KCBza2luRW50cnkuaW52ZXJzZUJpbmRNYXRyaWNlcy5hcnJheSwgaiAqIDE2ICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ym9uZUludmVyc2VzLnB1c2goIG1hdCApO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogSm9pbnQgXCIlc1wiIGNvdWxkIG5vdCBiZSBmb3VuZC4nLCBza2luRW50cnkuam9pbnRzWyBqIF0gKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVzaC5iaW5kKCBuZXcgU2tlbGV0b24oIGJvbmVzLCBib25lSW52ZXJzZXMgKSwgbWVzaC5tYXRyaXhXb3JsZCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiBub2RlO1xuXG5cdFx0fSApO1xuXG5cdH0gKS50aGVuKCBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cblx0XHQvLyBidWlsZCBub2RlIGhpZXJhY2h5XG5cblx0XHRwYXJlbnRPYmplY3QuYWRkKCBub2RlICk7XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRpZiAoIG5vZGVEZWYuY2hpbGRyZW4gKSB7XG5cblx0XHRcdGNvbnN0IGNoaWxkcmVuID0gbm9kZURlZi5jaGlsZHJlbjtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bIGkgXTtcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBidWlsZE5vZGVIaWVyYWNoeSggY2hpbGQsIG5vZGUsIGpzb24sIHBhcnNlciApICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH0gKTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XG4gKiBAcGFyYW0ge0dMVEYuUHJpbWl0aXZlfSBwcmltaXRpdmVEZWZcbiAqIEBwYXJhbSB7R0xURlBhcnNlcn0gcGFyc2VyXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVCb3VuZHMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlciApIHtcblxuXHRjb25zdCBhdHRyaWJ1dGVzID0gcHJpbWl0aXZlRGVmLmF0dHJpYnV0ZXM7XG5cblx0Y29uc3QgYm94ID0gbmV3IEJveDMoKTtcblxuXHRpZiAoIGF0dHJpYnV0ZXMuUE9TSVRJT04gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGNvbnN0IGFjY2Vzc29yID0gcGFyc2VyLmpzb24uYWNjZXNzb3JzWyBhdHRyaWJ1dGVzLlBPU0lUSU9OIF07XG5cblx0XHRjb25zdCBtaW4gPSBhY2Nlc3Nvci5taW47XG5cdFx0Y29uc3QgbWF4ID0gYWNjZXNzb3IubWF4O1xuXG5cdFx0Ly8gZ2xURiByZXF1aXJlcyAnbWluJyBhbmQgJ21heCcsIGJ1dCBWUk0gKHdoaWNoIGV4dGVuZHMgZ2xURikgY3VycmVudGx5IGlnbm9yZXMgdGhhdCByZXF1aXJlbWVudC5cblxuXHRcdGlmICggbWluICE9PSB1bmRlZmluZWQgJiYgbWF4ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGJveC5zZXQoXG5cdFx0XHRcdG5ldyBWZWN0b3IzKCBtaW5bIDAgXSwgbWluWyAxIF0sIG1pblsgMiBdICksXG5cdFx0XHRcdG5ldyBWZWN0b3IzKCBtYXhbIDAgXSwgbWF4WyAxIF0sIG1heFsgMiBdIClcblx0XHRcdCk7XG5cblx0XHRcdGlmICggYWNjZXNzb3Iubm9ybWFsaXplZCApIHtcblxuXHRcdFx0XHRjb25zdCBib3hTY2FsZSA9IGdldE5vcm1hbGl6ZWRDb21wb25lbnRTY2FsZSggV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3Nvci5jb21wb25lbnRUeXBlIF0gKTtcblx0XHRcdFx0Ym94Lm1pbi5tdWx0aXBseVNjYWxhciggYm94U2NhbGUgKTtcblx0XHRcdFx0Ym94Lm1heC5tdWx0aXBseVNjYWxhciggYm94U2NhbGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBtaW4vbWF4IHByb3BlcnRpZXMgZm9yIGFjY2Vzc29yIFBPU0lUSU9OLicgKTtcblxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0fVxuXG5cdH0gZWxzZSB7XG5cblx0XHRyZXR1cm47XG5cblx0fVxuXG5cdGNvbnN0IHRhcmdldHMgPSBwcmltaXRpdmVEZWYudGFyZ2V0cztcblxuXHRpZiAoIHRhcmdldHMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGNvbnN0IG1heERpc3BsYWNlbWVudCA9IG5ldyBWZWN0b3IzKCk7XG5cdFx0Y29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcjMoKTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XG5cblx0XHRcdGlmICggdGFyZ2V0LlBPU0lUSU9OICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Y29uc3QgYWNjZXNzb3IgPSBwYXJzZXIuanNvbi5hY2Nlc3NvcnNbIHRhcmdldC5QT1NJVElPTiBdO1xuXHRcdFx0XHRjb25zdCBtaW4gPSBhY2Nlc3Nvci5taW47XG5cdFx0XHRcdGNvbnN0IG1heCA9IGFjY2Vzc29yLm1heDtcblxuXHRcdFx0XHQvLyBnbFRGIHJlcXVpcmVzICdtaW4nIGFuZCAnbWF4JywgYnV0IFZSTSAod2hpY2ggZXh0ZW5kcyBnbFRGKSBjdXJyZW50bHkgaWdub3JlcyB0aGF0IHJlcXVpcmVtZW50LlxuXG5cdFx0XHRcdGlmICggbWluICE9PSB1bmRlZmluZWQgJiYgbWF4ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGdldCBtYXggb2YgYWJzb2x1dGUgY29tcG9uZW50cyBiZWNhdXNlIHRhcmdldCB3ZWlnaHQgaXMgWy0xLDFdXG5cdFx0XHRcdFx0dmVjdG9yLnNldFgoIE1hdGgubWF4KCBNYXRoLmFicyggbWluWyAwIF0gKSwgTWF0aC5hYnMoIG1heFsgMCBdICkgKSApO1xuXHRcdFx0XHRcdHZlY3Rvci5zZXRZKCBNYXRoLm1heCggTWF0aC5hYnMoIG1pblsgMSBdICksIE1hdGguYWJzKCBtYXhbIDEgXSApICkgKTtcblx0XHRcdFx0XHR2ZWN0b3Iuc2V0WiggTWF0aC5tYXgoIE1hdGguYWJzKCBtaW5bIDIgXSApLCBNYXRoLmFicyggbWF4WyAyIF0gKSApICk7XG5cblxuXHRcdFx0XHRcdGlmICggYWNjZXNzb3Iubm9ybWFsaXplZCApIHtcblxuXHRcdFx0XHRcdFx0Y29uc3QgYm94U2NhbGUgPSBnZXROb3JtYWxpemVkQ29tcG9uZW50U2NhbGUoIFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3IuY29tcG9uZW50VHlwZSBdICk7XG5cdFx0XHRcdFx0XHR2ZWN0b3IubXVsdGlwbHlTY2FsYXIoIGJveFNjYWxlICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBOb3RlOiB0aGlzIGFzc3VtZXMgdGhhdCB0aGUgc3VtIG9mIGFsbCB3ZWlnaHRzIGlzIGF0IG1vc3QgMS4gVGhpcyBpc24ndCBxdWl0ZSBjb3JyZWN0IC0gaXQncyBtb3JlIGNvbnNlcnZhdGl2ZVxuXHRcdFx0XHRcdC8vIHRvIGFzc3VtZSB0aGF0IGVhY2ggdGFyZ2V0IGNhbiBoYXZlIGEgbWF4IHdlaWdodCBvZiAxLiBIb3dldmVyLCBmb3Igc29tZSB1c2UgY2FzZXMgLSBub3RhYmx5LCB3aGVuIG1vcnBoIHRhcmdldHNcblx0XHRcdFx0XHQvLyBhcmUgdXNlZCB0byBpbXBsZW1lbnQga2V5LWZyYW1lIGFuaW1hdGlvbnMgYW5kIGFzIHN1Y2ggb25seSB0d28gYXJlIGFjdGl2ZSBhdCBhIHRpbWUgLSB0aGlzIHJlc3VsdHMgaW4gdmVyeSBsYXJnZVxuXHRcdFx0XHRcdC8vIGJveGVzLiBTbyBmb3Igbm93IHdlIG1ha2UgYSBib3ggdGhhdCdzIHNvbWV0aW1lcyBhIHRvdWNoIHRvbyBzbWFsbCBidXQgaXMgaG9wZWZ1bGx5IG1vc3RseSBvZiByZWFzb25hYmxlIHNpemUuXG5cdFx0XHRcdFx0bWF4RGlzcGxhY2VtZW50Lm1heCggdmVjdG9yICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IE1pc3NpbmcgbWluL21heCBwcm9wZXJ0aWVzIGZvciBhY2Nlc3NvciBQT1NJVElPTi4nICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvLyBBcyBwZXIgY29tbWVudCBhYm92ZSB0aGlzIGJveCBpc24ndCBjb25zZXJ2YXRpdmUsIGJ1dCBoYXMgYSByZWFzb25hYmxlIHNpemUgZm9yIGEgdmVyeSBsYXJnZSBudW1iZXIgb2YgbW9ycGggdGFyZ2V0cy5cblx0XHRib3guZXhwYW5kQnlWZWN0b3IoIG1heERpc3BsYWNlbWVudCApO1xuXG5cdH1cblxuXHRnZW9tZXRyeS5ib3VuZGluZ0JveCA9IGJveDtcblxuXHRjb25zdCBzcGhlcmUgPSBuZXcgU3BoZXJlKCk7XG5cblx0Ym94LmdldENlbnRlciggc3BoZXJlLmNlbnRlciApO1xuXHRzcGhlcmUucmFkaXVzID0gYm94Lm1pbi5kaXN0YW5jZVRvKCBib3gubWF4ICkgLyAyO1xuXG5cdGdlb21ldHJ5LmJvdW5kaW5nU3BoZXJlID0gc3BoZXJlO1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7R0xURi5QcmltaXRpdmV9IHByaW1pdGl2ZURlZlxuICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcbiAqIEByZXR1cm4ge1Byb21pc2U8QnVmZmVyR2VvbWV0cnk+fVxuICovXG5mdW5jdGlvbiBhZGRQcmltaXRpdmVBdHRyaWJ1dGVzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLCBwYXJzZXIgKSB7XG5cblx0Y29uc3QgYXR0cmlidXRlcyA9IHByaW1pdGl2ZURlZi5hdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRmdW5jdGlvbiBhc3NpZ25BdHRyaWJ1dGVBY2Nlc3NvciggYWNjZXNzb3JJbmRleCwgYXR0cmlidXRlTmFtZSApIHtcblxuXHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgYWNjZXNzb3JJbmRleCApXG5cdFx0XHQudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvciApIHtcblxuXHRcdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoIGF0dHJpYnV0ZU5hbWUsIGFjY2Vzc29yICk7XG5cblx0XHRcdH0gKTtcblxuXHR9XG5cblx0Zm9yICggY29uc3QgZ2x0ZkF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcyApIHtcblxuXHRcdGNvbnN0IHRocmVlQXR0cmlidXRlTmFtZSA9IEFUVFJJQlVURVNbIGdsdGZBdHRyaWJ1dGVOYW1lIF0gfHwgZ2x0ZkF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdC8vIFNraXAgYXR0cmlidXRlcyBhbHJlYWR5IHByb3ZpZGVkIGJ5IGUuZy4gRHJhY28gZXh0ZW5zaW9uLlxuXHRcdGlmICggdGhyZWVBdHRyaWJ1dGVOYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSBjb250aW51ZTtcblxuXHRcdHBlbmRpbmcucHVzaCggYXNzaWduQXR0cmlidXRlQWNjZXNzb3IoIGF0dHJpYnV0ZXNbIGdsdGZBdHRyaWJ1dGVOYW1lIF0sIHRocmVlQXR0cmlidXRlTmFtZSApICk7XG5cblx0fVxuXG5cdGlmICggcHJpbWl0aXZlRGVmLmluZGljZXMgIT09IHVuZGVmaW5lZCAmJiAhIGdlb21ldHJ5LmluZGV4ICkge1xuXG5cdFx0Y29uc3QgYWNjZXNzb3IgPSBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgcHJpbWl0aXZlRGVmLmluZGljZXMgKS50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29yICkge1xuXG5cdFx0XHRnZW9tZXRyeS5zZXRJbmRleCggYWNjZXNzb3IgKTtcblxuXHRcdH0gKTtcblxuXHRcdHBlbmRpbmcucHVzaCggYWNjZXNzb3IgKTtcblxuXHR9XG5cblx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiApO1xuXG5cdGNvbXB1dGVCb3VuZHMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlciApO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBwcmltaXRpdmVEZWYudGFyZ2V0cyAhPT0gdW5kZWZpbmVkXG5cdFx0XHQ/IGFkZE1vcnBoVGFyZ2V0cyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZi50YXJnZXRzLCBwYXJzZXIgKVxuXHRcdFx0OiBnZW9tZXRyeTtcblxuXHR9ICk7XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxuICogQHBhcmFtIHtOdW1iZXJ9IGRyYXdNb2RlXG4gKiBAcmV0dXJuIHtCdWZmZXJHZW9tZXRyeX1cbiAqL1xuZnVuY3Rpb24gdG9UcmlhbmdsZXNEcmF3TW9kZSggZ2VvbWV0cnksIGRyYXdNb2RlICkge1xuXG5cdGxldCBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XG5cblx0Ly8gZ2VuZXJhdGUgaW5kZXggaWYgbm90IHByZXNlbnRcblxuXHRpZiAoIGluZGV4ID09PSBudWxsICkge1xuXG5cdFx0Y29uc3QgaW5kaWNlcyA9IFtdO1xuXG5cdFx0Y29uc3QgcG9zaXRpb24gPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoICdwb3NpdGlvbicgKTtcblxuXHRcdGlmICggcG9zaXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcG9zaXRpb24uY291bnQ7IGkgKysgKSB7XG5cblx0XHRcdFx0aW5kaWNlcy5wdXNoKCBpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Z2VvbWV0cnkuc2V0SW5kZXgoIGluZGljZXMgKTtcblx0XHRcdGluZGV4ID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5kZWZpbmVkIHBvc2l0aW9uIGF0dHJpYnV0ZS4gUHJvY2Vzc2luZyBub3QgcG9zc2libGUuJyApO1xuXHRcdFx0cmV0dXJuIGdlb21ldHJ5O1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvL1xuXG5cdGNvbnN0IG51bWJlck9mVHJpYW5nbGVzID0gaW5kZXguY291bnQgLSAyO1xuXHRjb25zdCBuZXdJbmRpY2VzID0gW107XG5cblx0aWYgKCBkcmF3TW9kZSA9PT0gVHJpYW5nbGVGYW5EcmF3TW9kZSApIHtcblxuXHRcdC8vIGdsLlRSSUFOR0xFX0ZBTlxuXG5cdFx0Zm9yICggbGV0IGkgPSAxOyBpIDw9IG51bWJlck9mVHJpYW5nbGVzOyBpICsrICkge1xuXG5cdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIDAgKSApO1xuXHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcblx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xuXG5cdFx0fVxuXG5cdH0gZWxzZSB7XG5cblx0XHQvLyBnbC5UUklBTkdMRV9TVFJJUFxuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZUcmlhbmdsZXM7IGkgKysgKSB7XG5cblx0XHRcdGlmICggaSAlIDIgPT09IDAgKSB7XG5cblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDIgKSApO1xuXG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMiApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdGlmICggKCBuZXdJbmRpY2VzLmxlbmd0aCAvIDMgKSAhPT0gbnVtYmVyT2ZUcmlhbmdsZXMgKSB7XG5cblx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuR0xURkxvYWRlci50b1RyaWFuZ2xlc0RyYXdNb2RlKCk6IFVuYWJsZSB0byBnZW5lcmF0ZSBjb3JyZWN0IGFtb3VudCBvZiB0cmlhbmdsZXMuJyApO1xuXG5cdH1cblxuXHQvLyBidWlsZCBmaW5hbCBnZW9tZXRyeVxuXG5cdGNvbnN0IG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnkuY2xvbmUoKTtcblx0bmV3R2VvbWV0cnkuc2V0SW5kZXgoIG5ld0luZGljZXMgKTtcblxuXHRyZXR1cm4gbmV3R2VvbWV0cnk7XG5cbn1cblxuZXhwb3J0IHsgR0xURkxvYWRlciB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RocmVlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTY2VuZVJlbmRlcmVyVEpTIGZyb20gXCIuL1NjZW5lUmVuZGVyZXJUSlNcIlxuaW1wb3J0IE5GVGFkZFRKUyBmcm9tIFwiLi9tYXJrZXJtZWRpYS9ORlRhZGRUSlNcIlxuXG5leHBvcnQgZGVmYXVsdCB7IFNjZW5lUmVuZGVyZXJUSlMsIE5GVGFkZFRKUyB9Il0sInNvdXJjZVJvb3QiOiIifQ==