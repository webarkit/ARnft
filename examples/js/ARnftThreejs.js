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
      document.addEventListener('getNFTData', function (ev) {
        var msg = ev.detail;
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
    value: function addVideo(id, scale) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL1NjZW5lUmVuZGVyZXJUSlMudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL21hcmtlcm1lZGlhL05GVGFkZFRKUy50cyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvdXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJ0aHJlZVwiLFwiY29tbW9uanMyXCI6XCJ0aHJlZVwiLFwiYW1kXCI6XCJ0aHJlZVwiLFwicm9vdFwiOlwiVEhSRUVcIn0iLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7SUEwQ3FCLGdCO0FBV25CLDRCQUFhLFVBQWIsRUFBcUMsVUFBckMsRUFBb0UsSUFBcEUsRUFBa0YsVUFBbEYsRUFBcUc7QUFBQTs7QUFDbkcsU0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssUUFBTCxHQUFnQixJQUFJLGdEQUFKLENBQXdCO0FBQ3RDLFlBQU0sRUFBRSxVQUQ4QjtBQUV0QyxhQUFPLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsT0FGUztBQUd0QyxXQUFLLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsS0FIVztBQUl0Qyx3QkFBa0IsRUFBRSxVQUFVLENBQUMsUUFBWCxDQUFvQixrQkFKRjtBQUt0QyxlQUFTLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsU0FMTztBQU10QyxhQUFPLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsT0FOUztBQU90QyxlQUFTLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsU0FQTztBQVF0QyxXQUFLLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsS0FSVztBQVN0Qyw0QkFBc0IsRUFBRSxVQUFVLENBQUMsUUFBWCxDQUFvQjtBQVROLEtBQXhCLENBQWhCO0FBV0EsU0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixNQUFNLENBQUMsZ0JBQW5DO0FBQ0Es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QUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsOENBQThDLDBDQUFPOztBQUVyRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQzs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFVLHlEQUFzQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CLHlEQUFzQjs7QUFFekMsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMLElBQUk7O0FBRUosR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FB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QUFFQSxrQkFBa0Isd0JBQXdCOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQSxrQkFBa0IsdUJBQXVCOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRXNCOzs7Ozs7Ozs7OztBQ2g2SHRCLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQSxpRUFBZTtBQUFFLGtCQUFnQixFQUFoQixzREFBRjtBQUFvQixXQUFTLEVBQVQsMkRBQVM7QUFBN0IsQ0FBZixFIiwiZmlsZSI6IkFSbmZ0VGhyZWVqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInRocmVlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInRocmVlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFSbmZ0VGhyZWVqc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInRocmVlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBUm5mdFRocmVlanNcIl0gPSBmYWN0b3J5KHJvb3RbXCJUSFJFRVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RocmVlX18pIHtcbnJldHVybiAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscy9VdGlscydcblxuaW50ZXJmYWNlIENvbmZpZ0RhdGEge1xuICBjYW1lcmE6IHtcbiAgICBmYXI6IG51bWJlcjtcbiAgICBmb3Y6IG51bWJlcjtcbiAgICBtYXRyaXhBdXRvVXBkYXRlOiBib29sZWFuO1xuICAgIG5lYXI6IG51bWJlcjtcbiAgICByYXRpbzogbnVtYmVyO1xuICB9LFxuICByZW5kZXJlcjoge1xuICAgIGFscGhhOiBib29sZWFuO1xuICAgIGFudGlhbGlhczogYm9vbGVhbjtcbiAgICBjb250ZXh0OiBhbnk7XG4gICAgZGVwdGg6IGJvb2xlYW47XG4gICAgbG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcjogYm9vbGVhbjtcbiAgICBwcmVjaXNpb246IHN0cmluZztcbiAgICBzdGVuY2lsOiBib29sZWFuO1xuICAgIHByZW11bHRpcGxpZWRBbHBoYTogYm9vbGVhbjtcbiAgICBvYmpWaXNpYmlsaXR5OiBib29sZWFuO1xuICB9O1xuXG59XG5cbmludGVyZmFjZSBSb290IGV4dGVuZHMgVEhSRUUuT2JqZWN0M0Qge1xuICAvL21hdHJpeDogb2JqZWN0XG59XG5cbmludGVyZmFjZSBSZW5kZXJlciB7XG4gIHJlbmRlcjogKHNjZW5lOiBUSFJFRS5TY2VuZSwgY2FtZXJhOiBUSFJFRS5DYW1lcmEpID0+IHZvaWQ7XG4gIHNldFBpeGVsUmF0aW86IChwaXhlbFJhdGlvOiBudW1iZXIpID0+IHZvaWQ7XG4gIHNldFNpemU6ICh3OiBudW1iZXIsIGg6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIENhbWVyYSBleHRlbmRzIFRIUkVFLkNhbWVyYSB7XG4gIG1hdHJpeEF1dG9VcGRhdGU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTY2VuZSBleHRlbmRzIFRIUkVFLlNjZW5lIHtcbiAgYWRkOiAobm9kZTogVEhSRUUuT2JqZWN0M0QpID0+IHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lUmVuZGVyZXJUSlMge1xuICBwdWJsaWMgY2FudmFzX2RyYXc6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGNhbWVyYTogQ2FtZXJhO1xuICBwcml2YXRlIGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGE7XG4gIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXI7XG4gIHByaXZhdGUgdXVpZDogc3RyaW5nO1xuICBwcml2YXRlIHJvb3Q6IFJvb3Q7XG4gIHByaXZhdGUgc2NlbmU6IFNjZW5lO1xuICBwcml2YXRlIHN0YXRpYyBnbG9iYWxTY2VuZTogU2NlbmU7XG4gIHByaXZhdGUgdmVyc2lvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWdEYXRhOiBDb25maWdEYXRhLCBjYW52YXNEcmF3OiBIVE1MQ2FudmFzRWxlbWVudCwgdXVpZDogc3RyaW5nLCBjYW1lcmFCb29sOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gY29uZmlnRGF0YVxuICAgIHRoaXMudXVpZCA9IHV1aWRcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgY2FudmFzOiBjYW52YXNEcmF3LFxuICAgICAgY29udGV4dDogY29uZmlnRGF0YS5yZW5kZXJlci5jb250ZXh0LFxuICAgICAgYWxwaGE6IGNvbmZpZ0RhdGEucmVuZGVyZXIuYWxwaGEsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IGNvbmZpZ0RhdGEucmVuZGVyZXIucHJlbXVsdGlwbGllZEFscGhhLFxuICAgICAgYW50aWFsaWFzOiBjb25maWdEYXRhLnJlbmRlcmVyLmFudGlhbGlhcyxcbiAgICAgIHN0ZW5jaWw6IGNvbmZpZ0RhdGEucmVuZGVyZXIuc3RlbmNpbCxcbiAgICAgIHByZWNpc2lvbjogY29uZmlnRGF0YS5yZW5kZXJlci5wcmVjaXNpb24sXG4gICAgICBkZXB0aDogY29uZmlnRGF0YS5yZW5kZXJlci5kZXB0aCxcbiAgICAgIGxvZ2FyaXRobWljRGVwdGhCdWZmZXI6IGNvbmZpZ0RhdGEucmVuZGVyZXIubG9nYXJpdGhtaWNEZXB0aEJ1ZmZlclxuICAgIH0pXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxuICAgIFNjZW5lUmVuZGVyZXJUSlMuZ2xvYmFsU2NlbmUgPSB0aGlzLnNjZW5lXG4gICAgaWYgKGNhbWVyYUJvb2wgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCBjb25maWdEYXRhLmNhbWVyYS5mb3YsIGNvbmZpZ0RhdGEuY2FtZXJhLnJhdGlvLCBjb25maWdEYXRhLmNhbWVyYS5uZWFyLCBjb25maWdEYXRhLmNhbWVyYS5mYXIgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuQ2FtZXJhKClcbiAgICB9XG4gICAgdGhpcy52ZXJzaW9uID0gJzAuMS4xJ1xuICAgIGNvbnNvbGUubG9nKFwiQVJuZnRUaHJlZWpzIHZlcnNpb246IFwiLCB0aGlzLnZlcnNpb24pO1xuICB9XG5cbiAgaW5pdFJlbmRlcmVyIChuYW1lczpBcnJheTxzdHJpbmc+KSB7XG4gICAgdGhpcy5jYW1lcmEubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2V0UHJvamVjdGlvbk1hdHJpeCcsIChldjogYW55KSA9PiB7XG4gICAgICBVdGlscy5zZXRNYXRyaXgodGhpcy5jYW1lcmEucHJvamVjdGlvbk1hdHJpeCwgZXYuZGV0YWlsLnByb2opXG4gICAgfSlcbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNhbWVyYSlcblxuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZilcbiAgICB0aGlzLnNjZW5lLmFkZChsaWdodClcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dldFdpbmRvd1NpemUnLCAoX2V2OiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZShfZXYuZGV0YWlsLnN3LCBfZXYuZGV0YWlsLnNoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzZXRJbml0UmVuZGVyZXJFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnb25Jbml0VGhyZWVqc1JlbmRlcmluZycsIHsgZGV0YWlsOiB7IHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLCBzY2VuZTogdGhpcy5zY2VuZSwgIGNhbWVyYTogdGhpcy5jYW1lcmEgfSB9KVxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoc2V0SW5pdFJlbmRlcmVyRXZlbnQpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSlcbiAgfVxuXG4gIC8vIGdldHRlcnNcblxuICBnZXRSZW5kZXJlcigpOiBSZW5kZXJlciB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJcbiAgfVxuXG4gIGdldFNjZW5lKCk6IFNjZW5lIHtcbiAgICByZXR1cm4gdGhpcy5zY2VuZVxuICB9XG5cbiAgZ2V0Q2FtZXJhKCk6IENhbWVyYSB7XG4gICAgcmV0dXJuIHRoaXMuY2FtZXJhXG4gIH1cblxuICBzdGF0aWMgZ2V0R2xvYmFsU2NlbmUoKTogU2NlbmUge1xuICAgIHJldHVybiBTY2VuZVJlbmRlcmVyVEpTLmdsb2JhbFNjZW5lXG4gIH1cblxuICAvLyBzZXR0ZXJzXG5cbiAgc2V0UmVuZGVyZXIocmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gIH1cblxuICBzZXRTY2VuZShzY2VuZTogU2NlbmUpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgfVxuXG4gIHNldENhbWVyYShjYW1lcmE6IENhbWVyYSkge1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG4gIH1cblxuICAvLyB0aWNrIHRvIGJlIGltcGxlbWVudGVkXG4gIC8qIHRpY2sgKCkge1xuICAgIHRoaXMuZHJhdygpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2spXG4gIH0qL1xufVxuIiwiaW1wb3J0IHsgT2JqZWN0M0QsXG4gICAgICAgICBQbGFuZUdlb21ldHJ5LFxuICAgICAgICAgU2NlbmUsXG4gICAgICAgICBUZXh0dXJlTG9hZGVyLFxuICAgICAgICAgVmlkZW9UZXh0dXJlLFxuICAgICAgICAgTWVzaCxcbiAgICAgICAgIE1lc2hTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlcidcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vdXRpbHMvVXRpbHMnXG5pbXBvcnQgU2NlbmVSZW5kZXJlclRKUyBmcm9tICcuLi9TY2VuZVJlbmRlcmVyVEpTJ1xuXG5pbnRlcmZhY2UgQVJ2aWRlbyB7XG4gIHBsYXk6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBFbnRpdHkge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBtZXNoOiBPYmplY3QzRFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBORlRhZGRUSlMge1xuICAgIHByaXZhdGUgZW50aXRpZXM6IEVudGl0eVtdID0gW107XG4gICAgcHJpdmF0ZSBuYW1lczogQXJyYXk8c3RyaW5nPjtcbiAgICBwcml2YXRlIHNjZW5lOiBTY2VuZTtcbiAgICBwcml2YXRlIHV1aWQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcih1dWlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IFNjZW5lUmVuZGVyZXJUSlMuZ2V0R2xvYmFsU2NlbmUoKTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICAgICAgdGhpcy5uYW1lcyA9IFtdO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkKG1lc2g6IE9iamVjdDNELCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2V0TkZURGF0YScsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgICB2YXIgbXNnID0gZXYuZGV0YWlsXG4gICAgICAgICAgICBtZXNoLnBvc2l0aW9uLnkgPSAobXNnLmhlaWdodCAvIG1zZy5kcGkgKiAyLjU0ICogMTApIC8gMi4wXG4gICAgICAgICAgICBtZXNoLnBvc2l0aW9uLnggPSAobXNnLndpZHRoIC8gbXNnLmRwaSAqIDIuNTQgKiAxMCkgLyAyLjBcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5ldyBPYmplY3QzRCgpO1xuICAgICAgICByb290Lm5hbWUgPSAncm9vdC0nICsgbmFtZTtcbiAgICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICByb290LmFkZChtZXNoKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2V0TWF0cml4R0xfUkgtJyArIHRoaXMudXVpZCArICctJyArIG5hbWUsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgIG1lc2gudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpXG4gICAgICAgICAgVXRpbHMuc2V0TWF0cml4KHJvb3QubWF0cml4LCBtYXRyaXgpXG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25mdFRyYWNraW5nTG9zdC0nICsgdGhpcy51dWlkICsgJy0nICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICByb290LnZpc2libGUgPSBmYWxzZVxuICAgICAgICAgIG1lc2gudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubmFtZXMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKHtuYW1lLCBtZXNofSlcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTW9kZWwgKHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IG5ldyBPYmplY3QzRCgpO1xuICAgICAgICByb290Lm5hbWUgPSAncm9vdC0nICsgbmFtZTtcbiAgICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHJvb3QpO1xuICAgICAgICBsZXQgbW9kZWw6IGFueVxuICAgICAgICAvKiBMb2FkIE1vZGVsICovXG4gICAgICAgIGNvbnN0IHRocmVlR0xURkxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKClcbiAgICAgICAgdGhyZWVHTFRGTG9hZGVyLmxvYWQodXJsLCBnbHRmID0+IHtcbiAgICAgICAgICAgIG1vZGVsID0gZ2x0Zi5zY2VuZVxuICAgICAgICAgICAgbW9kZWwuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpXG4gICAgICAgICAgICBtb2RlbC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDJcbiAgICAgICAgICAgIG1vZGVsLnBvc2l0aW9uLnggPSB4XG4gICAgICAgICAgICBtb2RlbC5wb3NpdGlvbi55ID0geVxuICAgICAgICAgICAgbW9kZWwucG9zaXRpb24ueiA9IHpcbiAgICAgICAgICAgIHJvb3QuYWRkKG1vZGVsKVxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXRNYXRyaXhHTF9SSC0nICsgdGhpcy51dWlkICsgJy0nICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICAgIG1vZGVsLnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpXG4gICAgICAgICAgICBVdGlscy5zZXRNYXRyaXgocm9vdC5tYXRyaXgsIG1hdHJpeClcbiAgICAgICAgICB9KVxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25mdFRyYWNraW5nTG9zdC0nICsgdGhpcy51dWlkICsgJy0nICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJvb3QudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgICAgICBtb2RlbC52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMubmFtZXMucHVzaChuYW1lKTtcbiAgICB9XG4gICAgcHVibGljIGFkZEltYWdlIChpbWFnZVVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIHNjYWxlOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBuZXcgT2JqZWN0M0QoKTtcbiAgICAgIHJvb3QubmFtZSA9ICdyb290LScgKyBuYW1lO1xuICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICB0aGlzLnNjZW5lLmFkZChyb290KTtcbiAgICAgICBjb25zdCBwbGFuZUdlb20gPSBuZXcgUGxhbmVHZW9tZXRyeSgxLCAxLCAxLCAxKVxuICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZUxvYWRlcigpLmxvYWQoaW1hZ2VVcmwpXG4gICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogY29sb3IsIG1hcDogdGV4dHVyZX0pO1xuICAgICAgIGNvbnN0IHBsYW5lID0gbmV3IE1lc2gocGxhbmVHZW9tLCBtYXRlcmlhbClcbiAgICAgICBwbGFuZS5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSlcbiAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXRORlREYXRhJywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWxcbiAgICAgICAgICAgIHBsYW5lLnBvc2l0aW9uLnkgPSAobXNnLmhlaWdodCAvIG1zZy5kcGkgKiAyLjU0ICogMTApIC8gMi4wXG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi54ID0gKG1zZy53aWR0aCAvIG1zZy5kcGkgKiAyLjU0ICogMTApIC8gMi4wXG4gICAgICAgfSlcbiAgICAgICByb290LmFkZChwbGFuZSlcbiAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXRNYXRyaXhHTF9SSC0nICsgdGhpcy51dWlkICsgJy0nICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgcm9vdC52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgICBwbGFuZS52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgICBjb25zdCBtYXRyaXggPSBVdGlscy5pbnRlcnBvbGF0ZShldi5kZXRhaWwubWF0cml4R0xfUkgpXG4gICAgICAgICAgIFV0aWxzLnNldE1hdHJpeChyb290Lm1hdHJpeCwgbWF0cml4KVxuICAgICAgICAgfSlcbiAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25mdFRyYWNraW5nTG9zdC0nICsgdGhpcy51dWlkICsgJy0nICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgcm9vdC52aXNpYmxlID0gZmFsc2VcbiAgICAgICAgICAgcGxhbmUudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgICB9KVxuICAgICAgICAgdGhpcy5uYW1lcy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkVmlkZW8gKGlkOiBzdHJpbmcsIHNjYWxlOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBuZXcgT2JqZWN0M0QoKTtcbiAgICAgIHJvb3QubmFtZSA9ICdyb290LScgKyBuYW1lO1xuICAgICAgcm9vdC5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICB0aGlzLnNjZW5lLmFkZChyb290KTtcbiAgICAgICBjb25zdCBBUlZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG4gICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBWaWRlb1RleHR1cmUoQVJWaWRlbyBhcyBIVE1MVmlkZW9FbGVtZW50KVxuICAgICAgIGNvbnN0IG1hdCA9IG5ldyBNZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweGJiYmJmZiwgbWFwOiB0ZXh0dXJlIH0pXG4gICAgICAgQVJWaWRlby5wbGF5KClcbiAgICAgICBjb25zdCBwbGFuZUdlb20gPSBuZXcgUGxhbmVHZW9tZXRyeSgxLCAxLCAxLCAxKVxuICAgICAgIGNvbnN0IHBsYW5lID0gbmV3IE1lc2gocGxhbmVHZW9tLCBtYXQpXG4gICAgICAgcGxhbmUuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpXG4gICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2V0TkZURGF0YScsIChldjogYW55KSA9PiB7XG4gICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWxcbiAgICAgICAgICAgcGxhbmUucG9zaXRpb24ueSA9IChtc2cuaGVpZ2h0IC8gbXNnLmRwaSAqIDIuNTQgKiAxMCkgLyAyLjBcbiAgICAgICAgICAgcGxhbmUucG9zaXRpb24ueCA9IChtc2cud2lkdGggLyBtc2cuZHBpICogMi41NCAqIDEwKSAvIDIuMFxuICAgICAgIH0pXG4gICAgICAgcm9vdC5hZGQocGxhbmUpXG4gICAgfVxuXG4gICAgcHVibGljIGdldE5hbWVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZXNcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVXRpbHMge1xuICBwcml2YXRlIHN0YXRpYyB0cmFja2VkTWF0cml4OiBhbnkgPSB7XG4gICAgICAvLyBmb3IgaW50ZXJwb2xhdGlvblxuICAgICAgZGVsdGE6IFtcbiAgICAgICAgICAwLCAwLCAwLCAwLFxuICAgICAgICAgIDAsIDAsIDAsIDAsXG4gICAgICAgICAgMCwgMCwgMCwgMCxcbiAgICAgICAgICAwLCAwLCAwLCAwXG4gICAgICBdLFxuICAgICAgaW50ZXJwb2xhdGVkOiBbXG4gICAgICAgICAgMCwgMCwgMCwgMCxcbiAgICAgICAgICAwLCAwLCAwLCAwLFxuICAgICAgICAgIDAsIDAsIDAsIDAsXG4gICAgICAgICAgMCwgMCwgMCwgMFxuICAgICAgXVxuICB9XG4gIC8vcHJpdmF0ZSBzdGF0aWMgaW50ZXJwb2xhdGlvbkZhY3RvcjogbnVtYmVyID0gMjRcbiAgc3RhdGljIGludGVycG9sYXRlICh3b3JsZDogYW55KSB7XG4gICAgY29uc3QgaW50ZXJwb2xhdGlvbkZhY3RvciA9IDI0XG5cbiAgICAvLyBpbnRlcnBvbGF0ZSBtYXRyaXhcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgIHRoaXMudHJhY2tlZE1hdHJpeC5kZWx0YVtpXSA9IHdvcmxkW2ldIC0gdGhpcy50cmFja2VkTWF0cml4LmludGVycG9sYXRlZFtpXVxuICAgICAgdGhpcy50cmFja2VkTWF0cml4LmludGVycG9sYXRlZFtpXSA9XG4gICAgICAgICAgICAgICAgICB0aGlzLnRyYWNrZWRNYXRyaXguaW50ZXJwb2xhdGVkW2ldICtcbiAgICAgICAgICAgICAgICAgIHRoaXMudHJhY2tlZE1hdHJpeC5kZWx0YVtpXSAvIGludGVycG9sYXRpb25GYWN0b3JcbiAgICAgfVxuICAgICByZXR1cm4gdGhpcy50cmFja2VkTWF0cml4LmludGVycG9sYXRlZFxuICAgfVxuXG4gIHN0YXRpYyBpc01vYmlsZSAoKSB7XG4gICAgcmV0dXJuIC9BbmRyb2lkfG1vYmlsZXxpUGFkfGlQaG9uZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgfVxuXG4gIHN0YXRpYyBzZXRNYXRyaXggKG1hdHJpeDogYW55LCB2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgYXJyYXk6IGFueSA9IFtdXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGFycmF5W2tleV0gPSB2YWx1ZVtrZXldXG4gICAgfVxuICAgIGlmICh0eXBlb2YgbWF0cml4LmVsZW1lbnRzLnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbWF0cml4LmVsZW1lbnRzLnNldChhcnJheSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0cml4LmVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChhcnJheSlcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQge1xuXHRBbmltYXRpb25DbGlwLFxuXHRCb25lLFxuXHRCb3gzLFxuXHRCdWZmZXJBdHRyaWJ1dGUsXG5cdEJ1ZmZlckdlb21ldHJ5LFxuXHRDYW52YXNUZXh0dXJlLFxuXHRDbGFtcFRvRWRnZVdyYXBwaW5nLFxuXHRDb2xvcixcblx0RGlyZWN0aW9uYWxMaWdodCxcblx0RG91YmxlU2lkZSxcblx0RmlsZUxvYWRlcixcblx0RnJvbnRTaWRlLFxuXHRHcm91cCxcblx0SW1hZ2VCaXRtYXBMb2FkZXIsXG5cdEludGVybGVhdmVkQnVmZmVyLFxuXHRJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSxcblx0SW50ZXJwb2xhbnQsXG5cdEludGVycG9sYXRlRGlzY3JldGUsXG5cdEludGVycG9sYXRlTGluZWFyLFxuXHRMaW5lLFxuXHRMaW5lQmFzaWNNYXRlcmlhbCxcblx0TGluZUxvb3AsXG5cdExpbmVTZWdtZW50cyxcblx0TGluZWFyRmlsdGVyLFxuXHRMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXIsXG5cdExpbmVhck1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdExvYWRlcixcblx0TG9hZGVyVXRpbHMsXG5cdE1hdGVyaWFsLFxuXHRNYXRoVXRpbHMsXG5cdE1hdHJpeDQsXG5cdE1lc2gsXG5cdE1lc2hCYXNpY01hdGVyaWFsLFxuXHRNZXNoUGh5c2ljYWxNYXRlcmlhbCxcblx0TWVzaFN0YW5kYXJkTWF0ZXJpYWwsXG5cdE1pcnJvcmVkUmVwZWF0V3JhcHBpbmcsXG5cdE5lYXJlc3RGaWx0ZXIsXG5cdE5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXIsXG5cdE5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyLFxuXHROdW1iZXJLZXlmcmFtZVRyYWNrLFxuXHRPYmplY3QzRCxcblx0T3J0aG9ncmFwaGljQ2FtZXJhLFxuXHRQZXJzcGVjdGl2ZUNhbWVyYSxcblx0UG9pbnRMaWdodCxcblx0UG9pbnRzLFxuXHRQb2ludHNNYXRlcmlhbCxcblx0UHJvcGVydHlCaW5kaW5nLFxuXHRRdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjayxcblx0UkdCRm9ybWF0LFxuXHRSZXBlYXRXcmFwcGluZyxcblx0U2tlbGV0b24sXG5cdFNraW5uZWRNZXNoLFxuXHRTcGhlcmUsXG5cdFNwb3RMaWdodCxcblx0VGFuZ2VudFNwYWNlTm9ybWFsTWFwLFxuXHRUZXh0dXJlTG9hZGVyLFxuXHRUcmlhbmdsZUZhbkRyYXdNb2RlLFxuXHRUcmlhbmdsZVN0cmlwRHJhd01vZGUsXG5cdFZlY3RvcjIsXG5cdFZlY3RvcjMsXG5cdFZlY3RvcktleWZyYW1lVHJhY2ssXG5cdHNSR0JFbmNvZGluZ1xufSBmcm9tICd0aHJlZSc7XG5cbmNsYXNzIEdMVEZMb2FkZXIgZXh0ZW5kcyBMb2FkZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBtYW5hZ2VyICkge1xuXG5cdFx0c3VwZXIoIG1hbmFnZXIgKTtcblxuXHRcdHRoaXMuZHJhY29Mb2FkZXIgPSBudWxsO1xuXHRcdHRoaXMua3R4MkxvYWRlciA9IG51bGw7XG5cdFx0dGhpcy5tZXNob3B0RGVjb2RlciA9IG51bGw7XG5cblx0XHR0aGlzLnBsdWdpbkNhbGxiYWNrcyA9IFtdO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGVGV4dHVyZUJhc2lzVUV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGVGV4dHVyZVdlYlBFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURk1hdGVyaWFsc1RyYW5zbWlzc2lvbkV4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTGlnaHRzRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNZXNob3B0Q29tcHJlc3Npb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHRsb2FkKCB1cmwsIG9uTG9hZCwgb25Qcm9ncmVzcywgb25FcnJvciApIHtcblxuXHRcdGNvbnN0IHNjb3BlID0gdGhpcztcblxuXHRcdGxldCByZXNvdXJjZVBhdGg7XG5cblx0XHRpZiAoIHRoaXMucmVzb3VyY2VQYXRoICE9PSAnJyApIHtcblxuXHRcdFx0cmVzb3VyY2VQYXRoID0gdGhpcy5yZXNvdXJjZVBhdGg7XG5cblx0XHR9IGVsc2UgaWYgKCB0aGlzLnBhdGggIT09ICcnICkge1xuXG5cdFx0XHRyZXNvdXJjZVBhdGggPSB0aGlzLnBhdGg7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRyZXNvdXJjZVBhdGggPSBMb2FkZXJVdGlscy5leHRyYWN0VXJsQmFzZSggdXJsICk7XG5cblx0XHR9XG5cblx0XHQvLyBUZWxscyB0aGUgTG9hZGluZ01hbmFnZXIgdG8gdHJhY2sgYW4gZXh0cmEgaXRlbSwgd2hpY2ggcmVzb2x2ZXMgYWZ0ZXJcblx0XHQvLyB0aGUgbW9kZWwgaXMgZnVsbHkgbG9hZGVkLiBUaGlzIG1lYW5zIHRoZSBjb3VudCBvZiBpdGVtcyBsb2FkZWQgd2lsbFxuXHRcdC8vIGJlIGluY29ycmVjdCwgYnV0IGVuc3VyZXMgbWFuYWdlci5vbkxvYWQoKSBkb2VzIG5vdCBmaXJlIGVhcmx5LlxuXHRcdHRoaXMubWFuYWdlci5pdGVtU3RhcnQoIHVybCApO1xuXG5cdFx0Y29uc3QgX29uRXJyb3IgPSBmdW5jdGlvbiAoIGUgKSB7XG5cblx0XHRcdGlmICggb25FcnJvciApIHtcblxuXHRcdFx0XHRvbkVycm9yKCBlICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS5lcnJvciggZSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVycm9yKCB1cmwgKTtcblx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVuZCggdXJsICk7XG5cblx0XHR9O1xuXG5cdFx0Y29uc3QgbG9hZGVyID0gbmV3IEZpbGVMb2FkZXIoIHRoaXMubWFuYWdlciApO1xuXG5cdFx0bG9hZGVyLnNldFBhdGgoIHRoaXMucGF0aCApO1xuXHRcdGxvYWRlci5zZXRSZXNwb25zZVR5cGUoICdhcnJheWJ1ZmZlcicgKTtcblx0XHRsb2FkZXIuc2V0UmVxdWVzdEhlYWRlciggdGhpcy5yZXF1ZXN0SGVhZGVyICk7XG5cdFx0bG9hZGVyLnNldFdpdGhDcmVkZW50aWFscyggdGhpcy53aXRoQ3JlZGVudGlhbHMgKTtcblxuXHRcdGxvYWRlci5sb2FkKCB1cmwsIGZ1bmN0aW9uICggZGF0YSApIHtcblxuXHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRzY29wZS5wYXJzZSggZGF0YSwgcmVzb3VyY2VQYXRoLCBmdW5jdGlvbiAoIGdsdGYgKSB7XG5cblx0XHRcdFx0XHRvbkxvYWQoIGdsdGYgKTtcblxuXHRcdFx0XHRcdHNjb3BlLm1hbmFnZXIuaXRlbUVuZCggdXJsICk7XG5cblx0XHRcdFx0fSwgX29uRXJyb3IgKTtcblxuXHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0X29uRXJyb3IoIGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fSwgb25Qcm9ncmVzcywgX29uRXJyb3IgKTtcblxuXHR9XG5cblx0c2V0RFJBQ09Mb2FkZXIoIGRyYWNvTG9hZGVyICkge1xuXG5cdFx0dGhpcy5kcmFjb0xvYWRlciA9IGRyYWNvTG9hZGVyO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHRzZXRERFNMb2FkZXIoKSB7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cblx0XHRcdCdUSFJFRS5HTFRGTG9hZGVyOiBcIk1TRlRfdGV4dHVyZV9kZHNcIiBubyBsb25nZXIgc3VwcG9ydGVkLiBQbGVhc2UgdXBkYXRlIHRvIFwiS0hSX3RleHR1cmVfYmFzaXN1XCIuJ1xuXG5cdFx0KTtcblxuXHR9XG5cblx0c2V0S1RYMkxvYWRlcigga3R4MkxvYWRlciApIHtcblxuXHRcdHRoaXMua3R4MkxvYWRlciA9IGt0eDJMb2FkZXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG5cdHNldE1lc2hvcHREZWNvZGVyKCBtZXNob3B0RGVjb2RlciApIHtcblxuXHRcdHRoaXMubWVzaG9wdERlY29kZXIgPSBtZXNob3B0RGVjb2Rlcjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0cmVnaXN0ZXIoIGNhbGxiYWNrICkge1xuXG5cdFx0aWYgKCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5pbmRleE9mKCBjYWxsYmFjayApID09PSAtIDEgKSB7XG5cblx0XHRcdHRoaXMucGx1Z2luQ2FsbGJhY2tzLnB1c2goIGNhbGxiYWNrICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0dW5yZWdpc3RlciggY2FsbGJhY2sgKSB7XG5cblx0XHRpZiAoIHRoaXMucGx1Z2luQ2FsbGJhY2tzLmluZGV4T2YoIGNhbGxiYWNrICkgIT09IC0gMSApIHtcblxuXHRcdFx0dGhpcy5wbHVnaW5DYWxsYmFja3Muc3BsaWNlKCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5pbmRleE9mKCBjYWxsYmFjayApLCAxICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0cGFyc2UoIGRhdGEsIHBhdGgsIG9uTG9hZCwgb25FcnJvciApIHtcblxuXHRcdGxldCBjb250ZW50O1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB7fTtcblx0XHRjb25zdCBwbHVnaW5zID0ge307XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyApIHtcblxuXHRcdFx0Y29udGVudCA9IGRhdGE7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zdCBtYWdpYyA9IExvYWRlclV0aWxzLmRlY29kZVRleHQoIG5ldyBVaW50OEFycmF5KCBkYXRhLCAwLCA0ICkgKTtcblxuXHRcdFx0aWYgKCBtYWdpYyA9PT0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMgKSB7XG5cblx0XHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRcdGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGIF0gPSBuZXcgR0xURkJpbmFyeUV4dGVuc2lvbiggZGF0YSApO1xuXG5cdFx0XHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcblxuXHRcdFx0XHRcdGlmICggb25FcnJvciApIG9uRXJyb3IoIGVycm9yICk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb250ZW50ID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEYgXS5jb250ZW50O1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnRlbnQgPSBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KCBuZXcgVWludDhBcnJheSggZGF0YSApICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKCBjb250ZW50ICk7XG5cblx0XHRpZiAoIGpzb24uYXNzZXQgPT09IHVuZGVmaW5lZCB8fCBqc29uLmFzc2V0LnZlcnNpb25bIDAgXSA8IDIgKSB7XG5cblx0XHRcdGlmICggb25FcnJvciApIG9uRXJyb3IoIG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIGFzc2V0LiBnbFRGIHZlcnNpb25zID49Mi4wIGFyZSBzdXBwb3J0ZWQuJyApICk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHR9XG5cblx0XHRjb25zdCBwYXJzZXIgPSBuZXcgR0xURlBhcnNlcigganNvbiwge1xuXG5cdFx0XHRwYXRoOiBwYXRoIHx8IHRoaXMucmVzb3VyY2VQYXRoIHx8ICcnLFxuXHRcdFx0Y3Jvc3NPcmlnaW46IHRoaXMuY3Jvc3NPcmlnaW4sXG5cdFx0XHRyZXF1ZXN0SGVhZGVyOiB0aGlzLnJlcXVlc3RIZWFkZXIsXG5cdFx0XHRtYW5hZ2VyOiB0aGlzLm1hbmFnZXIsXG5cdFx0XHRrdHgyTG9hZGVyOiB0aGlzLmt0eDJMb2FkZXIsXG5cdFx0XHRtZXNob3B0RGVjb2RlcjogdGhpcy5tZXNob3B0RGVjb2RlclxuXG5cdFx0fSApO1xuXG5cdFx0cGFyc2VyLmZpbGVMb2FkZXIuc2V0UmVxdWVzdEhlYWRlciggdGhpcy5yZXF1ZXN0SGVhZGVyICk7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2luQ2FsbGJhY2tzWyBpIF0oIHBhcnNlciApO1xuXHRcdFx0cGx1Z2luc1sgcGx1Z2luLm5hbWUgXSA9IHBsdWdpbjtcblxuXHRcdFx0Ly8gV29ya2Fyb3VuZCB0byBhdm9pZCBkZXRlcm1pbmluZyBhcyB1bmtub3duIGV4dGVuc2lvblxuXHRcdFx0Ly8gaW4gYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCkuXG5cdFx0XHQvLyBSZW1vdmUgdGhpcyB3b3JrYXJvdW5kIGlmIHdlIG1vdmUgYWxsIHRoZSBleGlzdGluZ1xuXHRcdFx0Ly8gZXh0ZW5zaW9uIGhhbmRsZXJzIHRvIHBsdWdpbiBzeXN0ZW1cblx0XHRcdGV4dGVuc2lvbnNbIHBsdWdpbi5uYW1lIF0gPSB0cnVlO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNVc2VkICkge1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBqc29uLmV4dGVuc2lvbnNVc2VkLmxlbmd0aDsgKysgaSApIHtcblxuXHRcdFx0XHRjb25zdCBleHRlbnNpb25OYW1lID0ganNvbi5leHRlbnNpb25zVXNlZFsgaSBdO1xuXHRcdFx0XHRjb25zdCBleHRlbnNpb25zUmVxdWlyZWQgPSBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCB8fCBbXTtcblxuXHRcdFx0XHRzd2l0Y2ggKCBleHRlbnNpb25OYW1lICkge1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQ6XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1hdGVyaWFsc1VubGl0RXh0ZW5zaW9uKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZNYXRlcmlhbHNQYnJTcGVjdWxhckdsb3NzaW5lc3NFeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZEcmFjb01lc2hDb21wcmVzc2lvbkV4dGVuc2lvbigganNvbiwgdGhpcy5kcmFjb0xvYWRlciApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZUZXh0dXJlVHJhbnNmb3JtRXh0ZW5zaW9uKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfTUVTSF9RVUFOVElaQVRJT046XG5cdFx0XHRcdFx0XHRleHRlbnNpb25zWyBleHRlbnNpb25OYW1lIF0gPSBuZXcgR0xURk1lc2hRdWFudGl6YXRpb25FeHRlbnNpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdFx0aWYgKCBleHRlbnNpb25zUmVxdWlyZWQuaW5kZXhPZiggZXh0ZW5zaW9uTmFtZSApID49IDAgJiYgcGx1Z2luc1sgZXh0ZW5zaW9uTmFtZSBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogVW5rbm93biBleHRlbnNpb24gXCInICsgZXh0ZW5zaW9uTmFtZSArICdcIi4nICk7XG5cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHBhcnNlci5zZXRFeHRlbnNpb25zKCBleHRlbnNpb25zICk7XG5cdFx0cGFyc2VyLnNldFBsdWdpbnMoIHBsdWdpbnMgKTtcblx0XHRwYXJzZXIucGFyc2UoIG9uTG9hZCwgb25FcnJvciApO1xuXG5cdH1cblxufVxuXG4vKiBHTFRGUkVHSVNUUlkgKi9cblxuZnVuY3Rpb24gR0xURlJlZ2lzdHJ5KCkge1xuXG5cdGxldCBvYmplY3RzID0ge307XG5cblx0cmV0dXJuXHR7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0XHRyZXR1cm4gb2JqZWN0c1sga2V5IF07XG5cblx0XHR9LFxuXG5cdFx0YWRkOiBmdW5jdGlvbiAoIGtleSwgb2JqZWN0ICkge1xuXG5cdFx0XHRvYmplY3RzWyBrZXkgXSA9IG9iamVjdDtcblxuXHRcdH0sXG5cblx0XHRyZW1vdmU6IGZ1bmN0aW9uICgga2V5ICkge1xuXG5cdFx0XHRkZWxldGUgb2JqZWN0c1sga2V5IF07XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlQWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdG9iamVjdHMgPSB7fTtcblxuXHRcdH1cblxuXHR9O1xuXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBFWFRFTlNJT05TICoqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuY29uc3QgRVhURU5TSU9OUyA9IHtcblx0S0hSX0JJTkFSWV9HTFRGOiAnS0hSX2JpbmFyeV9nbFRGJyxcblx0S0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT046ICdLSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvbicsXG5cdEtIUl9MSUdIVFNfUFVOQ1RVQUw6ICdLSFJfbGlnaHRzX3B1bmN0dWFsJyxcblx0S0hSX01BVEVSSUFMU19DTEVBUkNPQVQ6ICdLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdCcsXG5cdEtIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1M6ICdLSFJfbWF0ZXJpYWxzX3BiclNwZWN1bGFyR2xvc3NpbmVzcycsXG5cdEtIUl9NQVRFUklBTFNfVFJBTlNNSVNTSU9OOiAnS0hSX21hdGVyaWFsc190cmFuc21pc3Npb24nLFxuXHRLSFJfTUFURVJJQUxTX1VOTElUOiAnS0hSX21hdGVyaWFsc191bmxpdCcsXG5cdEtIUl9URVhUVVJFX0JBU0lTVTogJ0tIUl90ZXh0dXJlX2Jhc2lzdScsXG5cdEtIUl9URVhUVVJFX1RSQU5TRk9STTogJ0tIUl90ZXh0dXJlX3RyYW5zZm9ybScsXG5cdEtIUl9NRVNIX1FVQU5USVpBVElPTjogJ0tIUl9tZXNoX3F1YW50aXphdGlvbicsXG5cdEVYVF9URVhUVVJFX1dFQlA6ICdFWFRfdGV4dHVyZV93ZWJwJyxcblx0RVhUX01FU0hPUFRfQ09NUFJFU1NJT046ICdFWFRfbWVzaG9wdF9jb21wcmVzc2lvbidcbn07XG5cbi8qKlxuXHQgKiBQdW5jdHVhbCBMaWdodHMgRXh0ZW5zaW9uXG5cdCAqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9saWdodHNfcHVuY3R1YWxcblx0ICovXG5jbGFzcyBHTFRGTGlnaHRzRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTElHSFRTX1BVTkNUVUFMO1xuXG5cdFx0Ly8gT2JqZWN0M0QgaW5zdGFuY2UgY2FjaGVzXG5cdFx0dGhpcy5jYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XG5cblx0fVxuXG5cdF9tYXJrRGVmcygpIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG5vZGVEZWZzID0gdGhpcy5wYXJzZXIuanNvbi5ub2RlcyB8fCBbXTtcblxuXHRcdGZvciAoIGxldCBub2RlSW5kZXggPSAwLCBub2RlTGVuZ3RoID0gbm9kZURlZnMubGVuZ3RoOyBub2RlSW5kZXggPCBub2RlTGVuZ3RoOyBub2RlSW5kZXggKysgKSB7XG5cblx0XHRcdGNvbnN0IG5vZGVEZWYgPSBub2RlRGVmc1sgbm9kZUluZGV4IF07XG5cblx0XHRcdGlmICggbm9kZURlZi5leHRlbnNpb25zXG5cdFx0XHRcdFx0JiYgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXVxuXHRcdFx0XHRcdCYmIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0ubGlnaHQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwYXJzZXIuX2FkZE5vZGVSZWYoIHRoaXMuY2FjaGUsIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0ubGlnaHQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHRfbG9hZExpZ2h0KCBsaWdodEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgY2FjaGVLZXkgPSAnbGlnaHQ6JyArIGxpZ2h0SW5kZXg7XG5cdFx0bGV0IGRlcGVuZGVuY3kgPSBwYXJzZXIuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0aWYgKCBkZXBlbmRlbmN5ICkgcmV0dXJuIGRlcGVuZGVuY3k7XG5cblx0XHRjb25zdCBqc29uID0gcGFyc2VyLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9ICgganNvbi5leHRlbnNpb25zICYmIGpzb24uZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB8fCB7fTtcblx0XHRjb25zdCBsaWdodERlZnMgPSBleHRlbnNpb25zLmxpZ2h0cyB8fCBbXTtcblx0XHRjb25zdCBsaWdodERlZiA9IGxpZ2h0RGVmc1sgbGlnaHRJbmRleCBdO1xuXHRcdGxldCBsaWdodE5vZGU7XG5cblx0XHRjb25zdCBjb2xvciA9IG5ldyBDb2xvciggMHhmZmZmZmYgKTtcblxuXHRcdGlmICggbGlnaHREZWYuY29sb3IgIT09IHVuZGVmaW5lZCApIGNvbG9yLmZyb21BcnJheSggbGlnaHREZWYuY29sb3IgKTtcblxuXHRcdGNvbnN0IHJhbmdlID0gbGlnaHREZWYucmFuZ2UgIT09IHVuZGVmaW5lZCA/IGxpZ2h0RGVmLnJhbmdlIDogMDtcblxuXHRcdHN3aXRjaCAoIGxpZ2h0RGVmLnR5cGUgKSB7XG5cblx0XHRcdGNhc2UgJ2RpcmVjdGlvbmFsJzpcblx0XHRcdFx0bGlnaHROb2RlID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoIGNvbG9yICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS50YXJnZXQucG9zaXRpb24uc2V0KCAwLCAwLCAtIDEgKTtcblx0XHRcdFx0bGlnaHROb2RlLmFkZCggbGlnaHROb2RlLnRhcmdldCApO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAncG9pbnQnOlxuXHRcdFx0XHRsaWdodE5vZGUgPSBuZXcgUG9pbnRMaWdodCggY29sb3IgKTtcblx0XHRcdFx0bGlnaHROb2RlLmRpc3RhbmNlID0gcmFuZ2U7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdzcG90Jzpcblx0XHRcdFx0bGlnaHROb2RlID0gbmV3IFNwb3RMaWdodCggY29sb3IgKTtcblx0XHRcdFx0bGlnaHROb2RlLmRpc3RhbmNlID0gcmFuZ2U7XG5cdFx0XHRcdC8vIEhhbmRsZSBzcG90bGlnaHQgcHJvcGVydGllcy5cblx0XHRcdFx0bGlnaHREZWYuc3BvdCA9IGxpZ2h0RGVmLnNwb3QgfHwge307XG5cdFx0XHRcdGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgPSBsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlIDogMDtcblx0XHRcdFx0bGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZSA9IGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGUgIT09IHVuZGVmaW5lZCA/IGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGUgOiBNYXRoLlBJIC8gNC4wO1xuXHRcdFx0XHRsaWdodE5vZGUuYW5nbGUgPSBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlO1xuXHRcdFx0XHRsaWdodE5vZGUucGVudW1icmEgPSAxLjAgLSBsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlIC8gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZTtcblx0XHRcdFx0bGlnaHROb2RlLnRhcmdldC5wb3NpdGlvbi5zZXQoIDAsIDAsIC0gMSApO1xuXHRcdFx0XHRsaWdodE5vZGUuYWRkKCBsaWdodE5vZGUudGFyZ2V0ICk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbmV4cGVjdGVkIGxpZ2h0IHR5cGU6ICcgKyBsaWdodERlZi50eXBlICk7XG5cblx0XHR9XG5cblx0XHQvLyBTb21lIGxpZ2h0cyAoZS5nLiBzcG90KSBkZWZhdWx0IHRvIGEgcG9zaXRpb24gb3RoZXIgdGhhbiB0aGUgb3JpZ2luLiBSZXNldCB0aGUgcG9zaXRpb25cblx0XHQvLyBoZXJlLCBiZWNhdXNlIG5vZGUtbGV2ZWwgcGFyc2luZyB3aWxsIG9ubHkgb3ZlcnJpZGUgcG9zaXRpb24gaWYgZXhwbGljaXRseSBzcGVjaWZpZWQuXG5cdFx0bGlnaHROb2RlLnBvc2l0aW9uLnNldCggMCwgMCwgMCApO1xuXG5cdFx0bGlnaHROb2RlLmRlY2F5ID0gMjtcblxuXHRcdGlmICggbGlnaHREZWYuaW50ZW5zaXR5ICE9PSB1bmRlZmluZWQgKSBsaWdodE5vZGUuaW50ZW5zaXR5ID0gbGlnaHREZWYuaW50ZW5zaXR5O1xuXG5cdFx0bGlnaHROb2RlLm5hbWUgPSBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggbGlnaHREZWYubmFtZSB8fCAoICdsaWdodF8nICsgbGlnaHRJbmRleCApICk7XG5cblx0XHRkZXBlbmRlbmN5ID0gUHJvbWlzZS5yZXNvbHZlKCBsaWdodE5vZGUgKTtcblxuXHRcdHBhcnNlci5jYWNoZS5hZGQoIGNhY2hlS2V5LCBkZXBlbmRlbmN5ICk7XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jeTtcblxuXHR9XG5cblx0Y3JlYXRlTm9kZUF0dGFjaG1lbnQoIG5vZGVJbmRleCApIHtcblxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbjtcblx0XHRjb25zdCBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUluZGV4IF07XG5cdFx0Y29uc3QgbGlnaHREZWYgPSAoIG5vZGVEZWYuZXh0ZW5zaW9ucyAmJiBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgfHwge307XG5cdFx0Y29uc3QgbGlnaHRJbmRleCA9IGxpZ2h0RGVmLmxpZ2h0O1xuXG5cdFx0aWYgKCBsaWdodEluZGV4ID09PSB1bmRlZmluZWQgKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiB0aGlzLl9sb2FkTGlnaHQoIGxpZ2h0SW5kZXggKS50aGVuKCBmdW5jdGlvbiAoIGxpZ2h0ICkge1xuXG5cdFx0XHRyZXR1cm4gcGFyc2VyLl9nZXROb2RlUmVmKCBzZWxmLmNhY2hlLCBsaWdodEluZGV4LCBsaWdodCApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxufVxuXG4vKipcblx0ICogVW5saXQgTWF0ZXJpYWxzIEV4dGVuc2lvblxuXHQgKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3VubGl0XG5cdCAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc1VubGl0RXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVDtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCkge1xuXG5cdFx0cmV0dXJuIE1lc2hCYXNpY01hdGVyaWFsO1xuXG5cdH1cblxuXHRleHRlbmRQYXJhbXMoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkge1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcblx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xuXG5cdFx0Y29uc3QgbWV0YWxsaWNSb3VnaG5lc3MgPSBtYXRlcmlhbERlZi5wYnJNZXRhbGxpY1JvdWdobmVzcztcblxuXHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MgKSB7XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yICkgKSB7XG5cblx0XHRcdFx0Y29uc3QgYXJyYXkgPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3I7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IuZnJvbUFycmF5KCBhcnJheSApO1xuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbIDMgXTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21hcCcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cbn1cblxuLyoqXG5cdCAqIENsZWFyY29hdCBNYXRlcmlhbHMgRXh0ZW5zaW9uXG5cdCAqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0XG5cdCAqL1xuY2xhc3MgR0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19DTEVBUkNPQVQ7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZE1hdGVyaWFsUGFyYW1zKCBtYXRlcmlhbEluZGV4LCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IG1hdGVyaWFsRGVmID0gcGFyc2VyLmpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRpZiAoICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRjb25zdCBleHRlbnNpb24gPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdEZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jbGVhcmNvYXQgPSBleHRlbnNpb24uY2xlYXJjb2F0RmFjdG9yO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0VGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2NsZWFyY29hdE1hcCcsIGV4dGVuc2lvbi5jbGVhcmNvYXRUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jbGVhcmNvYXRSb3VnaG5lc3MgPSBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzRmFjdG9yO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2NsZWFyY29hdFJvdWdobmVzc01hcCcsIGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdjbGVhcmNvYXROb3JtYWxNYXAnLCBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSApICk7XG5cblx0XHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBzY2FsZSA9IGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlLnNjYWxlO1xuXG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzExNDM4I2lzc3VlY29tbWVudC01MDcwMDM5OTVcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY2xlYXJjb2F0Tm9ybWFsU2NhbGUgPSBuZXcgVmVjdG9yMiggc2NhbGUsIC0gc2NhbGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuXHQgKiBUcmFuc21pc3Npb24gTWF0ZXJpYWxzIEV4dGVuc2lvblxuXHQgKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX3RyYW5zbWlzc2lvblxuXHQgKiBEcmFmdDogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3B1bGwvMTY5OFxuXHQgKi9cbmNsYXNzIEdMVEZNYXRlcmlhbHNUcmFuc21pc3Npb25FeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVFJBTlNNSVNTSU9OO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoIG1hdGVyaWFsSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIE1lc2hQaHlzaWNhbE1hdGVyaWFsO1xuXG5cdH1cblxuXHRleHRlbmRNYXRlcmlhbFBhcmFtcyggbWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Y29uc3QgZXh0ZW5zaW9uID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cblx0XHRpZiAoIGV4dGVuc2lvbi50cmFuc21pc3Npb25GYWN0b3IgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMudHJhbnNtaXNzaW9uID0gZXh0ZW5zaW9uLnRyYW5zbWlzc2lvbkZhY3RvcjtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLnRyYW5zbWlzc2lvblRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICd0cmFuc21pc3Npb25NYXAnLCBleHRlbnNpb24udHJhbnNtaXNzaW9uVGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cbn1cblxuLyoqXG5cdCAqIEJhc2lzVSBUZXh0dXJlIEV4dGVuc2lvblxuXHQgKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfdGV4dHVyZV9iYXNpc3Vcblx0ICovXG5jbGFzcyBHTFRGVGV4dHVyZUJhc2lzVUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfQkFTSVNVO1xuXG5cdH1cblxuXHRsb2FkVGV4dHVyZSggdGV4dHVyZUluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QganNvbiA9IHBhcnNlci5qc29uO1xuXG5cdFx0Y29uc3QgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xuXG5cdFx0aWYgKCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9ucyB8fCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgZXh0ZW5zaW9uID0gdGV4dHVyZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblx0XHRjb25zdCBzb3VyY2UgPSBqc29uLmltYWdlc1sgZXh0ZW5zaW9uLnNvdXJjZSBdO1xuXHRcdGNvbnN0IGxvYWRlciA9IHBhcnNlci5vcHRpb25zLmt0eDJMb2FkZXI7XG5cblx0XHRpZiAoICEgbG9hZGVyICkge1xuXG5cdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkICYmIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIHRoaXMubmFtZSApID49IDAgKSB7XG5cblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogc2V0S1RYMkxvYWRlciBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBLVFgyIHRleHR1cmVzJyApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEFzc3VtZXMgdGhhdCB0aGUgZXh0ZW5zaW9uIGlzIG9wdGlvbmFsIGFuZCB0aGF0IGEgZmFsbGJhY2sgdGV4dHVyZSBpcyBwcmVzZW50XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGFyc2VyLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKTtcblxuXHR9XG5cbn1cblxuLyoqXG5cdCAqIFdlYlAgVGV4dHVyZSBFeHRlbnNpb25cblx0ICpcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL1ZlbmRvci9FWFRfdGV4dHVyZV93ZWJwXG5cdCAqL1xuY2xhc3MgR0xURlRleHR1cmVXZWJQRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5FWFRfVEVYVFVSRV9XRUJQO1xuXHRcdHRoaXMuaXNTdXBwb3J0ZWQgPSBudWxsO1xuXG5cdH1cblxuXHRsb2FkVGV4dHVyZSggdGV4dHVyZUluZGV4ICkge1xuXG5cdFx0Y29uc3QgbmFtZSA9IHRoaXMubmFtZTtcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBqc29uID0gcGFyc2VyLmpzb247XG5cblx0XHRjb25zdCB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XG5cblx0XHRpZiAoICEgdGV4dHVyZURlZi5leHRlbnNpb25zIHx8ICEgdGV4dHVyZURlZi5leHRlbnNpb25zWyBuYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgZXh0ZW5zaW9uID0gdGV4dHVyZURlZi5leHRlbnNpb25zWyBuYW1lIF07XG5cdFx0Y29uc3Qgc291cmNlID0ganNvbi5pbWFnZXNbIGV4dGVuc2lvbi5zb3VyY2UgXTtcblxuXHRcdGxldCBsb2FkZXIgPSBwYXJzZXIudGV4dHVyZUxvYWRlcjtcblx0XHRpZiAoIHNvdXJjZS51cmkgKSB7XG5cblx0XHRcdGNvbnN0IGhhbmRsZXIgPSBwYXJzZXIub3B0aW9ucy5tYW5hZ2VyLmdldEhhbmRsZXIoIHNvdXJjZS51cmkgKTtcblx0XHRcdGlmICggaGFuZGxlciAhPT0gbnVsbCApIGxvYWRlciA9IGhhbmRsZXI7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5kZXRlY3RTdXBwb3J0KCkudGhlbiggZnVuY3Rpb24gKCBpc1N1cHBvcnRlZCApIHtcblxuXHRcdFx0aWYgKCBpc1N1cHBvcnRlZCApIHJldHVybiBwYXJzZXIubG9hZFRleHR1cmVJbWFnZSggdGV4dHVyZUluZGV4LCBzb3VyY2UsIGxvYWRlciApO1xuXG5cdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkICYmIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIG5hbWUgKSA+PSAwICkge1xuXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFdlYlAgcmVxdWlyZWQgYnkgYXNzZXQgYnV0IHVuc3VwcG9ydGVkLicgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGYWxsIGJhY2sgdG8gUE5HIG9yIEpQRUcuXG5cdFx0XHRyZXR1cm4gcGFyc2VyLmxvYWRUZXh0dXJlKCB0ZXh0dXJlSW5kZXggKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0ZGV0ZWN0U3VwcG9ydCgpIHtcblxuXHRcdGlmICggISB0aGlzLmlzU3VwcG9ydGVkICkge1xuXG5cdFx0XHR0aGlzLmlzU3VwcG9ydGVkID0gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcblxuXHRcdFx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG5cdFx0XHRcdC8vIExvc3N5IHRlc3QgaW1hZ2UuIFN1cHBvcnQgZm9yIGxvc3N5IGltYWdlcyBkb2Vzbid0IGd1YXJhbnRlZSBzdXBwb3J0IGZvciBhbGxcblx0XHRcdFx0Ly8gV2ViUCBpbWFnZXMsIHVuZm9ydHVuYXRlbHkuXG5cdFx0XHRcdGltYWdlLnNyYyA9ICdkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSaUlBQUFCWFJVSlFWbEE0SUJZQUFBQXdBUUNkQVNvQkFBRUFEc0QrSmFRQUEzQUFBQUFBJztcblxuXHRcdFx0XHRpbWFnZS5vbmxvYWQgPSBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmVzb2x2ZSggaW1hZ2UuaGVpZ2h0ID09PSAxICk7XG5cblx0XHRcdFx0fTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuaXNTdXBwb3J0ZWQ7XG5cblx0fVxuXG59XG5cbi8qKlxuXHQqIG1lc2hvcHQgQnVmZmVyVmlldyBDb21wcmVzc2lvbiBFeHRlbnNpb25cblx0KlxuXHQqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX21lc2hvcHRfY29tcHJlc3Npb25cblx0Ki9cbmNsYXNzIEdMVEZNZXNob3B0Q29tcHJlc3Npb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLkVYVF9NRVNIT1BUX0NPTVBSRVNTSU9OO1xuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG5cdH1cblxuXHRsb2FkQnVmZmVyVmlldyggaW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5wYXJzZXIuanNvbjtcblx0XHRjb25zdCBidWZmZXJWaWV3ID0ganNvbi5idWZmZXJWaWV3c1sgaW5kZXggXTtcblxuXHRcdGlmICggYnVmZmVyVmlldy5leHRlbnNpb25zICYmIGJ1ZmZlclZpZXcuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdGNvbnN0IGV4dGVuc2lvbkRlZiA9IGJ1ZmZlclZpZXcuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cblx0XHRcdGNvbnN0IGJ1ZmZlciA9IHRoaXMucGFyc2VyLmdldERlcGVuZGVuY3koICdidWZmZXInLCBleHRlbnNpb25EZWYuYnVmZmVyICk7XG5cdFx0XHRjb25zdCBkZWNvZGVyID0gdGhpcy5wYXJzZXIub3B0aW9ucy5tZXNob3B0RGVjb2RlcjtcblxuXHRcdFx0aWYgKCAhIGRlY29kZXIgfHwgISBkZWNvZGVyLnN1cHBvcnRlZCApIHtcblxuXHRcdFx0XHRpZiAoIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkICYmIGpzb24uZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIHRoaXMubmFtZSApID49IDAgKSB7XG5cblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBzZXRNZXNob3B0RGVjb2RlciBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBjb21wcmVzc2VkIGZpbGVzJyApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBBc3N1bWVzIHRoYXQgdGhlIGV4dGVuc2lvbiBpcyBvcHRpb25hbCBhbmQgdGhhdCBmYWxsYmFjayBidWZmZXIgZGF0YSBpcyBwcmVzZW50XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggWyBidWZmZXIsIGRlY29kZXIucmVhZHkgXSApLnRoZW4oIGZ1bmN0aW9uICggcmVzICkge1xuXG5cdFx0XHRcdGNvbnN0IGJ5dGVPZmZzZXQgPSBleHRlbnNpb25EZWYuYnl0ZU9mZnNldCB8fCAwO1xuXHRcdFx0XHRjb25zdCBieXRlTGVuZ3RoID0gZXh0ZW5zaW9uRGVmLmJ5dGVMZW5ndGggfHwgMDtcblxuXHRcdFx0XHRjb25zdCBjb3VudCA9IGV4dGVuc2lvbkRlZi5jb3VudDtcblx0XHRcdFx0Y29uc3Qgc3RyaWRlID0gZXh0ZW5zaW9uRGVmLmJ5dGVTdHJpZGU7XG5cblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5QnVmZmVyKCBjb3VudCAqIHN0cmlkZSApO1xuXHRcdFx0XHRjb25zdCBzb3VyY2UgPSBuZXcgVWludDhBcnJheSggcmVzWyAwIF0sIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGggKTtcblxuXHRcdFx0XHRkZWNvZGVyLmRlY29kZUdsdGZCdWZmZXIoIG5ldyBVaW50OEFycmF5KCByZXN1bHQgKSwgY291bnQsIHN0cmlkZSwgc291cmNlLCBleHRlbnNpb25EZWYubW9kZSwgZXh0ZW5zaW9uRGVmLmZpbHRlciApO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyogQklOQVJZIEVYVEVOU0lPTiAqL1xuY29uc3QgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMgPSAnZ2xURic7XG5jb25zdCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggPSAxMjtcbmNvbnN0IEJJTkFSWV9FWFRFTlNJT05fQ0hVTktfVFlQRVMgPSB7IEpTT046IDB4NEU0RjUzNEEsIEJJTjogMHgwMDRFNDk0MiB9O1xuXG5jbGFzcyBHTFRGQmluYXJ5RXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggZGF0YSApIHtcblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGO1xuXHRcdHRoaXMuY29udGVudCA9IG51bGw7XG5cdFx0dGhpcy5ib2R5ID0gbnVsbDtcblxuXHRcdGNvbnN0IGhlYWRlclZpZXcgPSBuZXcgRGF0YVZpZXcoIGRhdGEsIDAsIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCApO1xuXG5cdFx0dGhpcy5oZWFkZXIgPSB7XG5cdFx0XHRtYWdpYzogTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggbmV3IFVpbnQ4QXJyYXkoIGRhdGEuc2xpY2UoIDAsIDQgKSApICksXG5cdFx0XHR2ZXJzaW9uOiBoZWFkZXJWaWV3LmdldFVpbnQzMiggNCwgdHJ1ZSApLFxuXHRcdFx0bGVuZ3RoOiBoZWFkZXJWaWV3LmdldFVpbnQzMiggOCwgdHJ1ZSApXG5cdFx0fTtcblxuXHRcdGlmICggdGhpcy5oZWFkZXIubWFnaWMgIT09IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBnbFRGLUJpbmFyeSBoZWFkZXIuJyApO1xuXG5cdFx0fSBlbHNlIGlmICggdGhpcy5oZWFkZXIudmVyc2lvbiA8IDIuMCApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogTGVnYWN5IGJpbmFyeSBmaWxlIGRldGVjdGVkLicgKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGNodW5rQ29udGVudHNMZW5ndGggPSB0aGlzLmhlYWRlci5sZW5ndGggLSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEg7XG5cdFx0Y29uc3QgY2h1bmtWaWV3ID0gbmV3IERhdGFWaWV3KCBkYXRhLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKTtcblx0XHRsZXQgY2h1bmtJbmRleCA9IDA7XG5cblx0XHR3aGlsZSAoIGNodW5rSW5kZXggPCBjaHVua0NvbnRlbnRzTGVuZ3RoICkge1xuXG5cdFx0XHRjb25zdCBjaHVua0xlbmd0aCA9IGNodW5rVmlldy5nZXRVaW50MzIoIGNodW5rSW5kZXgsIHRydWUgKTtcblx0XHRcdGNodW5rSW5kZXggKz0gNDtcblxuXHRcdFx0Y29uc3QgY2h1bmtUeXBlID0gY2h1bmtWaWV3LmdldFVpbnQzMiggY2h1bmtJbmRleCwgdHJ1ZSApO1xuXHRcdFx0Y2h1bmtJbmRleCArPSA0O1xuXG5cdFx0XHRpZiAoIGNodW5rVHlwZSA9PT0gQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUy5KU09OICkge1xuXG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KCBkYXRhLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKyBjaHVua0luZGV4LCBjaHVua0xlbmd0aCApO1xuXHRcdFx0XHR0aGlzLmNvbnRlbnQgPSBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KCBjb250ZW50QXJyYXkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggY2h1bmtUeXBlID09PSBCSU5BUllfRVhURU5TSU9OX0NIVU5LX1RZUEVTLkJJTiApIHtcblxuXHRcdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICsgY2h1bmtJbmRleDtcblx0XHRcdFx0dGhpcy5ib2R5ID0gZGF0YS5zbGljZSggYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGNodW5rTGVuZ3RoICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2xpZW50cyBtdXN0IGlnbm9yZSBjaHVua3Mgd2l0aCB1bmtub3duIHR5cGVzLlxuXG5cdFx0XHRjaHVua0luZGV4ICs9IGNodW5rTGVuZ3RoO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmNvbnRlbnQgPT09IG51bGwgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IEpTT04gY29udGVudCBub3QgZm91bmQuJyApO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG4vKipcblx0ICogRFJBQ08gTWVzaCBDb21wcmVzc2lvbiBFeHRlbnNpb25cblx0ICpcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb25cblx0ICovXG5jbGFzcyBHTFRGRHJhY29NZXNoQ29tcHJlc3Npb25FeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBqc29uLCBkcmFjb0xvYWRlciApIHtcblxuXHRcdGlmICggISBkcmFjb0xvYWRlciApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogTm8gRFJBQ09Mb2FkZXIgaW5zdGFuY2UgcHJvdmlkZWQuJyApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTjtcblx0XHR0aGlzLmpzb24gPSBqc29uO1xuXHRcdHRoaXMuZHJhY29Mb2FkZXIgPSBkcmFjb0xvYWRlcjtcblx0XHR0aGlzLmRyYWNvTG9hZGVyLnByZWxvYWQoKTtcblxuXHR9XG5cblx0ZGVjb2RlUHJpbWl0aXZlKCBwcmltaXRpdmUsIHBhcnNlciApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZHJhY29Mb2FkZXIgPSB0aGlzLmRyYWNvTG9hZGVyO1xuXHRcdGNvbnN0IGJ1ZmZlclZpZXdJbmRleCA9IHByaW1pdGl2ZS5leHRlbnNpb25zWyB0aGlzLm5hbWUgXS5idWZmZXJWaWV3O1xuXHRcdGNvbnN0IGdsdGZBdHRyaWJ1dGVNYXAgPSBwcmltaXRpdmUuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0uYXR0cmlidXRlcztcblx0XHRjb25zdCB0aHJlZUF0dHJpYnV0ZU1hcCA9IHt9O1xuXHRcdGNvbnN0IGF0dHJpYnV0ZU5vcm1hbGl6ZWRNYXAgPSB7fTtcblx0XHRjb25zdCBhdHRyaWJ1dGVUeXBlTWFwID0ge307XG5cblx0XHRmb3IgKCBjb25zdCBhdHRyaWJ1dGVOYW1lIGluIGdsdGZBdHRyaWJ1dGVNYXAgKSB7XG5cblx0XHRcdGNvbnN0IHRocmVlQXR0cmlidXRlTmFtZSA9IEFUVFJJQlVURVNbIGF0dHJpYnV0ZU5hbWUgXSB8fCBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdHRocmVlQXR0cmlidXRlTWFwWyB0aHJlZUF0dHJpYnV0ZU5hbWUgXSA9IGdsdGZBdHRyaWJ1dGVNYXBbIGF0dHJpYnV0ZU5hbWUgXTtcblxuXHRcdH1cblxuXHRcdGZvciAoIGNvbnN0IGF0dHJpYnV0ZU5hbWUgaW4gcHJpbWl0aXZlLmF0dHJpYnV0ZXMgKSB7XG5cblx0XHRcdGNvbnN0IHRocmVlQXR0cmlidXRlTmFtZSA9IEFUVFJJQlVURVNbIGF0dHJpYnV0ZU5hbWUgXSB8fCBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdGlmICggZ2x0ZkF0dHJpYnV0ZU1hcFsgYXR0cmlidXRlTmFtZSBdICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Y29uc3QgYWNjZXNzb3JEZWYgPSBqc29uLmFjY2Vzc29yc1sgcHJpbWl0aXZlLmF0dHJpYnV0ZXNbIGF0dHJpYnV0ZU5hbWUgXSBdO1xuXHRcdFx0XHRjb25zdCBjb21wb25lbnRUeXBlID0gV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3NvckRlZi5jb21wb25lbnRUeXBlIF07XG5cblx0XHRcdFx0YXR0cmlidXRlVHlwZU1hcFsgdGhyZWVBdHRyaWJ1dGVOYW1lIF0gPSBjb21wb25lbnRUeXBlO1xuXHRcdFx0XHRhdHRyaWJ1dGVOb3JtYWxpemVkTWFwWyB0aHJlZUF0dHJpYnV0ZU5hbWUgXSA9IGFjY2Vzc29yRGVmLm5vcm1hbGl6ZWQgPT09IHRydWU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBidWZmZXJWaWV3SW5kZXggKS50aGVuKCBmdW5jdGlvbiAoIGJ1ZmZlclZpZXcgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlICkge1xuXG5cdFx0XHRcdGRyYWNvTG9hZGVyLmRlY29kZURyYWNvRmlsZSggYnVmZmVyVmlldywgZnVuY3Rpb24gKCBnZW9tZXRyeSApIHtcblxuXHRcdFx0XHRcdGZvciAoIGNvbnN0IGF0dHJpYnV0ZU5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcyApIHtcblxuXHRcdFx0XHRcdFx0Y29uc3QgYXR0cmlidXRlID0gZ2VvbWV0cnkuYXR0cmlidXRlc1sgYXR0cmlidXRlTmFtZSBdO1xuXHRcdFx0XHRcdFx0Y29uc3Qgbm9ybWFsaXplZCA9IGF0dHJpYnV0ZU5vcm1hbGl6ZWRNYXBbIGF0dHJpYnV0ZU5hbWUgXTtcblxuXHRcdFx0XHRcdFx0aWYgKCBub3JtYWxpemVkICE9PSB1bmRlZmluZWQgKSBhdHRyaWJ1dGUubm9ybWFsaXplZCA9IG5vcm1hbGl6ZWQ7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXNvbHZlKCBnZW9tZXRyeSApO1xuXG5cdFx0XHRcdH0sIHRocmVlQXR0cmlidXRlTWFwLCBhdHRyaWJ1dGVUeXBlTWFwICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cbn1cblxuLyoqXG5cdCAqIFRleHR1cmUgVHJhbnNmb3JtIEV4dGVuc2lvblxuXHQgKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfdGV4dHVyZV90cmFuc2Zvcm1cblx0ICovXG5jbGFzcyBHTFRGVGV4dHVyZVRyYW5zZm9ybUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STTtcblxuXHR9XG5cblx0ZXh0ZW5kVGV4dHVyZSggdGV4dHVyZSwgdHJhbnNmb3JtICkge1xuXG5cdFx0dGV4dHVyZSA9IHRleHR1cmUuY2xvbmUoKTtcblxuXHRcdGlmICggdHJhbnNmb3JtLm9mZnNldCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHR0ZXh0dXJlLm9mZnNldC5mcm9tQXJyYXkoIHRyYW5zZm9ybS5vZmZzZXQgKTtcblxuXHRcdH1cblxuXHRcdGlmICggdHJhbnNmb3JtLnJvdGF0aW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHRleHR1cmUucm90YXRpb24gPSB0cmFuc2Zvcm0ucm90YXRpb247XG5cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zZm9ybS5zY2FsZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHR0ZXh0dXJlLnJlcGVhdC5mcm9tQXJyYXkoIHRyYW5zZm9ybS5zY2FsZSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0cmFuc2Zvcm0udGV4Q29vcmQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogQ3VzdG9tIFVWIHNldHMgaW4gXCInICsgdGhpcy5uYW1lICsgJ1wiIGV4dGVuc2lvbiBub3QgeWV0IHN1cHBvcnRlZC4nICk7XG5cblx0XHR9XG5cblx0XHR0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuXHRcdHJldHVybiB0ZXh0dXJlO1xuXG5cdH1cblxufVxuXG4vKipcblx0ICogU3BlY3VsYXItR2xvc3NpbmVzcyBFeHRlbnNpb25cblx0ICpcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3Ncblx0ICovXG5cbi8qKlxuXHQgKiBBIHN1YiBjbGFzcyBvZiBTdGFuZGFyZE1hdGVyaWFsIHdpdGggc29tZSBvZiB0aGUgZnVuY3Rpb25hbGl0eVxuXHQgKiBjaGFuZ2VkIHZpYSB0aGUgYG9uQmVmb3JlQ29tcGlsZWAgY2FsbGJhY2tcblx0ICogQHBhaWxoZWFkXG5cdCAqL1xuXG5jbGFzcyBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbCBleHRlbmRzIE1lc2hTdGFuZGFyZE1hdGVyaWFsIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyYW1zICkge1xuXG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuaXNHTFRGU3BlY3VsYXJHbG9zc2luZXNzTWF0ZXJpYWwgPSB0cnVlO1xuXG5cdFx0Ly92YXJpb3VzIGNodW5rcyB0aGF0IG5lZWQgcmVwbGFjaW5nXG5cdFx0Y29uc3Qgc3BlY3VsYXJNYXBQYXJzRnJhZ21lbnRDaHVuayA9IFtcblx0XHRcdCcjaWZkZWYgVVNFX1NQRUNVTEFSTUFQJyxcblx0XHRcdCdcdHVuaWZvcm0gc2FtcGxlcjJEIHNwZWN1bGFyTWFwOycsXG5cdFx0XHQnI2VuZGlmJ1xuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IGdsb3NzaW5lc3NNYXBQYXJzRnJhZ21lbnRDaHVuayA9IFtcblx0XHRcdCcjaWZkZWYgVVNFX0dMT1NTSU5FU1NNQVAnLFxuXHRcdFx0J1x0dW5pZm9ybSBzYW1wbGVyMkQgZ2xvc3NpbmVzc01hcDsnLFxuXHRcdFx0JyNlbmRpZidcblx0XHRdLmpvaW4oICdcXG4nICk7XG5cblx0XHRjb25zdCBzcGVjdWxhck1hcEZyYWdtZW50Q2h1bmsgPSBbXG5cdFx0XHQndmVjMyBzcGVjdWxhckZhY3RvciA9IHNwZWN1bGFyOycsXG5cdFx0XHQnI2lmZGVmIFVTRV9TUEVDVUxBUk1BUCcsXG5cdFx0XHQnXHR2ZWM0IHRleGVsU3BlY3VsYXIgPSB0ZXh0dXJlMkQoIHNwZWN1bGFyTWFwLCB2VXYgKTsnLFxuXHRcdFx0J1x0dGV4ZWxTcGVjdWxhciA9IHNSR0JUb0xpbmVhciggdGV4ZWxTcGVjdWxhciApOycsXG5cdFx0XHQnXHQvLyByZWFkcyBjaGFubmVsIFJHQiwgY29tcGF0aWJsZSB3aXRoIGEgZ2xURiBTcGVjdWxhci1HbG9zc2luZXNzIChSR0JBKSB0ZXh0dXJlJyxcblx0XHRcdCdcdHNwZWN1bGFyRmFjdG9yICo9IHRleGVsU3BlY3VsYXIucmdiOycsXG5cdFx0XHQnI2VuZGlmJ1xuXHRcdF0uam9pbiggJ1xcbicgKTtcblxuXHRcdGNvbnN0IGdsb3NzaW5lc3NNYXBGcmFnbWVudENodW5rID0gW1xuXHRcdFx0J2Zsb2F0IGdsb3NzaW5lc3NGYWN0b3IgPSBnbG9zc2luZXNzOycsXG5cdFx0XHQnI2lmZGVmIFVTRV9HTE9TU0lORVNTTUFQJyxcblx0XHRcdCdcdHZlYzQgdGV4ZWxHbG9zc2luZXNzID0gdGV4dHVyZTJEKCBnbG9zc2luZXNzTWFwLCB2VXYgKTsnLFxuXHRcdFx0J1x0Ly8gcmVhZHMgY2hhbm5lbCBBLCBjb21wYXRpYmxlIHdpdGggYSBnbFRGIFNwZWN1bGFyLUdsb3NzaW5lc3MgKFJHQkEpIHRleHR1cmUnLFxuXHRcdFx0J1x0Z2xvc3NpbmVzc0ZhY3RvciAqPSB0ZXhlbEdsb3NzaW5lc3MuYTsnLFxuXHRcdFx0JyNlbmRpZidcblx0XHRdLmpvaW4oICdcXG4nICk7XG5cblx0XHRjb25zdCBsaWdodFBoeXNpY2FsRnJhZ21lbnRDaHVuayA9IFtcblx0XHRcdCdQaHlzaWNhbE1hdGVyaWFsIG1hdGVyaWFsOycsXG5cdFx0XHQnbWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gZGlmZnVzZUNvbG9yLnJnYiAqICggMS4gLSBtYXgoIHNwZWN1bGFyRmFjdG9yLnIsIG1heCggc3BlY3VsYXJGYWN0b3IuZywgc3BlY3VsYXJGYWN0b3IuYiApICkgKTsnLFxuXHRcdFx0J3ZlYzMgZHh5ID0gbWF4KCBhYnMoIGRGZHgoIGdlb21ldHJ5Tm9ybWFsICkgKSwgYWJzKCBkRmR5KCBnZW9tZXRyeU5vcm1hbCApICkgKTsnLFxuXHRcdFx0J2Zsb2F0IGdlb21ldHJ5Um91Z2huZXNzID0gbWF4KCBtYXgoIGR4eS54LCBkeHkueSApLCBkeHkueiApOycsXG5cdFx0XHQnbWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3MgPSBtYXgoIDEuMCAtIGdsb3NzaW5lc3NGYWN0b3IsIDAuMDUyNSApOyAvLyAwLjA1MjUgY29ycmVzcG9uZHMgdG8gdGhlIGJhc2UgbWlwIG9mIGEgMjU2IGN1YmVtYXAuJyxcblx0XHRcdCdtYXRlcmlhbC5zcGVjdWxhclJvdWdobmVzcyArPSBnZW9tZXRyeVJvdWdobmVzczsnLFxuXHRcdFx0J21hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzID0gbWluKCBtYXRlcmlhbC5zcGVjdWxhclJvdWdobmVzcywgMS4wICk7Jyxcblx0XHRcdCdtYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gc3BlY3VsYXJGYWN0b3I7Jyxcblx0XHRdLmpvaW4oICdcXG4nICk7XG5cblx0XHRjb25zdCB1bmlmb3JtcyA9IHtcblx0XHRcdHNwZWN1bGFyOiB7IHZhbHVlOiBuZXcgQ29sb3IoKS5zZXRIZXgoIDB4ZmZmZmZmICkgfSxcblx0XHRcdGdsb3NzaW5lc3M6IHsgdmFsdWU6IDEgfSxcblx0XHRcdHNwZWN1bGFyTWFwOiB7IHZhbHVlOiBudWxsIH0sXG5cdFx0XHRnbG9zc2luZXNzTWFwOiB7IHZhbHVlOiBudWxsIH1cblx0XHR9O1xuXG5cdFx0dGhpcy5fZXh0cmFVbmlmb3JtcyA9IHVuaWZvcm1zO1xuXG5cdFx0dGhpcy5vbkJlZm9yZUNvbXBpbGUgPSBmdW5jdGlvbiAoIHNoYWRlciApIHtcblxuXHRcdFx0Zm9yICggY29uc3QgdW5pZm9ybU5hbWUgaW4gdW5pZm9ybXMgKSB7XG5cblx0XHRcdFx0c2hhZGVyLnVuaWZvcm1zWyB1bmlmb3JtTmFtZSBdID0gdW5pZm9ybXNbIHVuaWZvcm1OYW1lIF07XG5cblx0XHRcdH1cblxuXHRcdFx0c2hhZGVyLmZyYWdtZW50U2hhZGVyID0gc2hhZGVyLmZyYWdtZW50U2hhZGVyXG5cdFx0XHRcdC5yZXBsYWNlKCAndW5pZm9ybSBmbG9hdCByb3VnaG5lc3M7JywgJ3VuaWZvcm0gdmVjMyBzcGVjdWxhcjsnIClcblx0XHRcdFx0LnJlcGxhY2UoICd1bmlmb3JtIGZsb2F0IG1ldGFsbmVzczsnLCAndW5pZm9ybSBmbG9hdCBnbG9zc2luZXNzOycgKVxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxyb3VnaG5lc3NtYXBfcGFyc19mcmFnbWVudD4nLCBzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rIClcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8bWV0YWxuZXNzbWFwX3BhcnNfZnJhZ21lbnQ+JywgZ2xvc3NpbmVzc01hcFBhcnNGcmFnbWVudENodW5rIClcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8cm91Z2huZXNzbWFwX2ZyYWdtZW50PicsIHNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPG1ldGFsbmVzc21hcF9mcmFnbWVudD4nLCBnbG9zc2luZXNzTWFwRnJhZ21lbnRDaHVuayApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPGxpZ2h0c19waHlzaWNhbF9mcmFnbWVudD4nLCBsaWdodFBoeXNpY2FsRnJhZ21lbnRDaHVuayApO1xuXG5cdFx0fTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCB0aGlzLCB7XG5cblx0XHRcdHNwZWN1bGFyOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLnNwZWN1bGFyLnZhbHVlO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdFx0dW5pZm9ybXMuc3BlY3VsYXIudmFsdWUgPSB2O1xuXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdHNwZWN1bGFyTWFwOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLnNwZWN1bGFyTWFwLnZhbHVlO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdFx0dW5pZm9ybXMuc3BlY3VsYXJNYXAudmFsdWUgPSB2O1xuXG5cdFx0XHRcdFx0aWYgKCB2ICkge1xuXG5cdFx0XHRcdFx0XHR0aGlzLmRlZmluZXMuVVNFX1NQRUNVTEFSTUFQID0gJyc7IC8vIFVTRV9VViBpcyBzZXQgYnkgdGhlIHJlbmRlcmVyIGZvciBzcGVjdWxhciBtYXBzXG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9TUEVDVUxBUk1BUDtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRnbG9zc2luZXNzOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLmdsb3NzaW5lc3MudmFsdWU7XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0XHR1bmlmb3Jtcy5nbG9zc2luZXNzLnZhbHVlID0gdjtcblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRnbG9zc2luZXNzTWFwOiB7XG5cdFx0XHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdFx0cmV0dXJuIHVuaWZvcm1zLmdsb3NzaW5lc3NNYXAudmFsdWU7XG5cblx0XHRcdFx0fSxcblx0XHRcdFx0c2V0OiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0XHR1bmlmb3Jtcy5nbG9zc2luZXNzTWFwLnZhbHVlID0gdjtcblxuXHRcdFx0XHRcdGlmICggdiApIHtcblxuXHRcdFx0XHRcdFx0dGhpcy5kZWZpbmVzLlVTRV9HTE9TU0lORVNTTUFQID0gJyc7XG5cdFx0XHRcdFx0XHR0aGlzLmRlZmluZXMuVVNFX1VWID0gJyc7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9HTE9TU0lORVNTTUFQO1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZGVmaW5lcy5VU0VfVVY7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSApO1xuXG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzO1xuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzcztcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3NNYXA7XG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzTWFwO1xuXG5cdFx0dGhpcy5zZXRWYWx1ZXMoIHBhcmFtcyApO1xuXG5cdH1cblxuXHRjb3B5KCBzb3VyY2UgKSB7XG5cblx0XHRzdXBlci5jb3B5KCBzb3VyY2UgKTtcblxuXHRcdHRoaXMuc3BlY3VsYXJNYXAgPSBzb3VyY2Uuc3BlY3VsYXJNYXA7XG5cdFx0dGhpcy5zcGVjdWxhci5jb3B5KCBzb3VyY2Uuc3BlY3VsYXIgKTtcblx0XHR0aGlzLmdsb3NzaW5lc3NNYXAgPSBzb3VyY2UuZ2xvc3NpbmVzc01hcDtcblx0XHR0aGlzLmdsb3NzaW5lc3MgPSBzb3VyY2UuZ2xvc3NpbmVzcztcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3M7XG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzO1xuXHRcdGRlbGV0ZSB0aGlzLm1ldGFsbmVzc01hcDtcblx0XHRkZWxldGUgdGhpcy5yb3VnaG5lc3NNYXA7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG59XG5cblxuY2xhc3MgR0xURk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzc0V4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1M7XG5cblx0XHR0aGlzLnNwZWN1bGFyR2xvc3NpbmVzc1BhcmFtcyA9IFtcblx0XHRcdCdjb2xvcicsXG5cdFx0XHQnbWFwJyxcblx0XHRcdCdsaWdodE1hcCcsXG5cdFx0XHQnbGlnaHRNYXBJbnRlbnNpdHknLFxuXHRcdFx0J2FvTWFwJyxcblx0XHRcdCdhb01hcEludGVuc2l0eScsXG5cdFx0XHQnZW1pc3NpdmUnLFxuXHRcdFx0J2VtaXNzaXZlSW50ZW5zaXR5Jyxcblx0XHRcdCdlbWlzc2l2ZU1hcCcsXG5cdFx0XHQnYnVtcE1hcCcsXG5cdFx0XHQnYnVtcFNjYWxlJyxcblx0XHRcdCdub3JtYWxNYXAnLFxuXHRcdFx0J25vcm1hbE1hcFR5cGUnLFxuXHRcdFx0J2Rpc3BsYWNlbWVudE1hcCcsXG5cdFx0XHQnZGlzcGxhY2VtZW50U2NhbGUnLFxuXHRcdFx0J2Rpc3BsYWNlbWVudEJpYXMnLFxuXHRcdFx0J3NwZWN1bGFyTWFwJyxcblx0XHRcdCdzcGVjdWxhcicsXG5cdFx0XHQnZ2xvc3NpbmVzc01hcCcsXG5cdFx0XHQnZ2xvc3NpbmVzcycsXG5cdFx0XHQnYWxwaGFNYXAnLFxuXHRcdFx0J2Vudk1hcCcsXG5cdFx0XHQnZW52TWFwSW50ZW5zaXR5Jyxcblx0XHRcdCdyZWZyYWN0aW9uUmF0aW8nLFxuXHRcdF07XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSgpIHtcblxuXHRcdHJldHVybiBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kUGFyYW1zKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApIHtcblxuXHRcdGNvbnN0IHBiclNwZWN1bGFyR2xvc3NpbmVzcyA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcblx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUZhY3RvciApICkge1xuXG5cdFx0XHRjb25zdCBhcnJheSA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlRmFjdG9yO1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoIGFycmF5ICk7XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbIDMgXTtcblxuXHRcdH1cblxuXHRcdGlmICggcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlID0gbmV3IENvbG9yKCAwLjAsIDAuMCwgMC4wICk7XG5cdFx0bWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzcyA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5nbG9zc2luZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgPyBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZ2xvc3NpbmVzc0ZhY3RvciA6IDEuMDtcblx0XHRtYXRlcmlhbFBhcmFtcy5zcGVjdWxhciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xuXG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJGYWN0b3IgKSApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXIuZnJvbUFycmF5KCBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJGYWN0b3IgKTtcblxuXHRcdH1cblxuXHRcdGlmICggcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc3Qgc3BlY0dsb3NzTWFwRGVmID0gcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmU7XG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2dsb3NzaW5lc3NNYXAnLCBzcGVjR2xvc3NNYXBEZWYgKSApO1xuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdzcGVjdWxhck1hcCcsIHNwZWNHbG9zc01hcERlZiApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9XG5cblx0Y3JlYXRlTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICk7XG5cdFx0bWF0ZXJpYWwuZm9nID0gdHJ1ZTtcblxuXHRcdG1hdGVyaWFsLmNvbG9yID0gbWF0ZXJpYWxQYXJhbXMuY29sb3I7XG5cblx0XHRtYXRlcmlhbC5tYXAgPSBtYXRlcmlhbFBhcmFtcy5tYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5tYXA7XG5cblx0XHRtYXRlcmlhbC5saWdodE1hcCA9IG51bGw7XG5cdFx0bWF0ZXJpYWwubGlnaHRNYXBJbnRlbnNpdHkgPSAxLjA7XG5cblx0XHRtYXRlcmlhbC5hb01hcCA9IG1hdGVyaWFsUGFyYW1zLmFvTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuYW9NYXA7XG5cdFx0bWF0ZXJpYWwuYW9NYXBJbnRlbnNpdHkgPSAxLjA7XG5cblx0XHRtYXRlcmlhbC5lbWlzc2l2ZSA9IG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlO1xuXHRcdG1hdGVyaWFsLmVtaXNzaXZlSW50ZW5zaXR5ID0gMS4wO1xuXHRcdG1hdGVyaWFsLmVtaXNzaXZlTWFwID0gbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmVNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZU1hcDtcblxuXHRcdG1hdGVyaWFsLmJ1bXBNYXAgPSBtYXRlcmlhbFBhcmFtcy5idW1wTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuYnVtcE1hcDtcblx0XHRtYXRlcmlhbC5idW1wU2NhbGUgPSAxO1xuXG5cdFx0bWF0ZXJpYWwubm9ybWFsTWFwID0gbWF0ZXJpYWxQYXJhbXMubm9ybWFsTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMubm9ybWFsTWFwO1xuXHRcdG1hdGVyaWFsLm5vcm1hbE1hcFR5cGUgPSBUYW5nZW50U3BhY2VOb3JtYWxNYXA7XG5cblx0XHRpZiAoIG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlICkgbWF0ZXJpYWwubm9ybWFsU2NhbGUgPSBtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZTtcblxuXHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudE1hcCA9IG51bGw7XG5cdFx0bWF0ZXJpYWwuZGlzcGxhY2VtZW50U2NhbGUgPSAxO1xuXHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudEJpYXMgPSAwO1xuXG5cdFx0bWF0ZXJpYWwuc3BlY3VsYXJNYXAgPSBtYXRlcmlhbFBhcmFtcy5zcGVjdWxhck1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyTWFwO1xuXHRcdG1hdGVyaWFsLnNwZWN1bGFyID0gbWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXI7XG5cblx0XHRtYXRlcmlhbC5nbG9zc2luZXNzTWFwID0gbWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzc01hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3NNYXA7XG5cdFx0bWF0ZXJpYWwuZ2xvc3NpbmVzcyA9IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3M7XG5cblx0XHRtYXRlcmlhbC5hbHBoYU1hcCA9IG51bGw7XG5cblx0XHRtYXRlcmlhbC5lbnZNYXAgPSBtYXRlcmlhbFBhcmFtcy5lbnZNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5lbnZNYXA7XG5cdFx0bWF0ZXJpYWwuZW52TWFwSW50ZW5zaXR5ID0gMS4wO1xuXG5cdFx0bWF0ZXJpYWwucmVmcmFjdGlvblJhdGlvID0gMC45ODtcblxuXHRcdHJldHVybiBtYXRlcmlhbDtcblxuXHR9XG5cbn1cblxuLyoqXG5cdCAqIE1lc2ggUXVhbnRpemF0aW9uIEV4dGVuc2lvblxuXHQgKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWVzaF9xdWFudGl6YXRpb25cblx0ICovXG5jbGFzcyBHTFRGTWVzaFF1YW50aXphdGlvbkV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NRVNIX1FVQU5USVpBVElPTjtcblxuXHR9XG5cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqIElOVEVSUE9MQVRJT04gKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBTcGxpbmUgSW50ZXJwb2xhdGlvblxuLy8gU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNhcHBlbmRpeC1jLXNwbGluZS1pbnRlcnBvbGF0aW9uXG5jbGFzcyBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudCBleHRlbmRzIEludGVycG9sYW50IHtcblxuXHRjb25zdHJ1Y3RvciggcGFyYW1ldGVyUG9zaXRpb25zLCBzYW1wbGVWYWx1ZXMsIHNhbXBsZVNpemUsIHJlc3VsdEJ1ZmZlciApIHtcblxuXHRcdHN1cGVyKCBwYXJhbWV0ZXJQb3NpdGlvbnMsIHNhbXBsZVZhbHVlcywgc2FtcGxlU2l6ZSwgcmVzdWx0QnVmZmVyICk7XG5cblx0fVxuXG5cdGNvcHlTYW1wbGVWYWx1ZV8oIGluZGV4ICkge1xuXG5cdFx0Ly8gQ29waWVzIGEgc2FtcGxlIHZhbHVlIHRvIHRoZSByZXN1bHQgYnVmZmVyLiBTZWUgZGVzY3JpcHRpb24gb2YgZ2xURlxuXHRcdC8vIENVQklDU1BMSU5FIHZhbHVlcyBsYXlvdXQgaW4gaW50ZXJwb2xhdGVfKCkgZnVuY3Rpb24gYmVsb3cuXG5cblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLnJlc3VsdEJ1ZmZlcixcblx0XHRcdHZhbHVlcyA9IHRoaXMuc2FtcGxlVmFsdWVzLFxuXHRcdFx0dmFsdWVTaXplID0gdGhpcy52YWx1ZVNpemUsXG5cdFx0XHRvZmZzZXQgPSBpbmRleCAqIHZhbHVlU2l6ZSAqIDMgKyB2YWx1ZVNpemU7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgIT09IHZhbHVlU2l6ZTsgaSArKyApIHtcblxuXHRcdFx0cmVzdWx0WyBpIF0gPSB2YWx1ZXNbIG9mZnNldCArIGkgXTtcblxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cblx0fVxuXG59XG5cbkdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5iZWZvcmVTdGFydF8gPSBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuY29weVNhbXBsZVZhbHVlXztcblxuR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmFmdGVyRW5kXyA9IEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5jb3B5U2FtcGxlVmFsdWVfO1xuXG5HTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuaW50ZXJwb2xhdGVfID0gZnVuY3Rpb24gKCBpMSwgdDAsIHQsIHQxICkge1xuXG5cdGNvbnN0IHJlc3VsdCA9IHRoaXMucmVzdWx0QnVmZmVyO1xuXHRjb25zdCB2YWx1ZXMgPSB0aGlzLnNhbXBsZVZhbHVlcztcblx0Y29uc3Qgc3RyaWRlID0gdGhpcy52YWx1ZVNpemU7XG5cblx0Y29uc3Qgc3RyaWRlMiA9IHN0cmlkZSAqIDI7XG5cdGNvbnN0IHN0cmlkZTMgPSBzdHJpZGUgKiAzO1xuXG5cdGNvbnN0IHRkID0gdDEgLSB0MDtcblxuXHRjb25zdCBwID0gKCB0IC0gdDAgKSAvIHRkO1xuXHRjb25zdCBwcCA9IHAgKiBwO1xuXHRjb25zdCBwcHAgPSBwcCAqIHA7XG5cblx0Y29uc3Qgb2Zmc2V0MSA9IGkxICogc3RyaWRlMztcblx0Y29uc3Qgb2Zmc2V0MCA9IG9mZnNldDEgLSBzdHJpZGUzO1xuXG5cdGNvbnN0IHMyID0gLSAyICogcHBwICsgMyAqIHBwO1xuXHRjb25zdCBzMyA9IHBwcCAtIHBwO1xuXHRjb25zdCBzMCA9IDEgLSBzMjtcblx0Y29uc3QgczEgPSBzMyAtIHBwICsgcDtcblxuXHQvLyBMYXlvdXQgb2Yga2V5ZnJhbWUgb3V0cHV0IHZhbHVlcyBmb3IgQ1VCSUNTUExJTkUgYW5pbWF0aW9uczpcblx0Ly8gICBbIGluVGFuZ2VudF8xLCBzcGxpbmVWZXJ0ZXhfMSwgb3V0VGFuZ2VudF8xLCBpblRhbmdlbnRfMiwgc3BsaW5lVmVydGV4XzIsIC4uLiBdXG5cdGZvciAoIGxldCBpID0gMDsgaSAhPT0gc3RyaWRlOyBpICsrICkge1xuXG5cdFx0Y29uc3QgcDAgPSB2YWx1ZXNbIG9mZnNldDAgKyBpICsgc3RyaWRlIF07IC8vIHNwbGluZVZlcnRleF9rXG5cdFx0Y29uc3QgbTAgPSB2YWx1ZXNbIG9mZnNldDAgKyBpICsgc3RyaWRlMiBdICogdGQ7IC8vIG91dFRhbmdlbnRfayAqICh0X2srMSAtIHRfaylcblx0XHRjb25zdCBwMSA9IHZhbHVlc1sgb2Zmc2V0MSArIGkgKyBzdHJpZGUgXTsgLy8gc3BsaW5lVmVydGV4X2srMVxuXHRcdGNvbnN0IG0xID0gdmFsdWVzWyBvZmZzZXQxICsgaSBdICogdGQ7IC8vIGluVGFuZ2VudF9rKzEgKiAodF9rKzEgLSB0X2spXG5cblx0XHRyZXN1bHRbIGkgXSA9IHMwICogcDAgKyBzMSAqIG0wICsgczIgKiBwMSArIHMzICogbTE7XG5cblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG5cbn07XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBJTlRFUk5BTFMgKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyogQ09OU1RBTlRTICovXG5cbmNvbnN0IFdFQkdMX0NPTlNUQU5UUyA9IHtcblx0RkxPQVQ6IDUxMjYsXG5cdC8vRkxPQVRfTUFUMjogMzU2NzQsXG5cdEZMT0FUX01BVDM6IDM1Njc1LFxuXHRGTE9BVF9NQVQ0OiAzNTY3Nixcblx0RkxPQVRfVkVDMjogMzU2NjQsXG5cdEZMT0FUX1ZFQzM6IDM1NjY1LFxuXHRGTE9BVF9WRUM0OiAzNTY2Nixcblx0TElORUFSOiA5NzI5LFxuXHRSRVBFQVQ6IDEwNDk3LFxuXHRTQU1QTEVSXzJEOiAzNTY3OCxcblx0UE9JTlRTOiAwLFxuXHRMSU5FUzogMSxcblx0TElORV9MT09QOiAyLFxuXHRMSU5FX1NUUklQOiAzLFxuXHRUUklBTkdMRVM6IDQsXG5cdFRSSUFOR0xFX1NUUklQOiA1LFxuXHRUUklBTkdMRV9GQU46IDYsXG5cdFVOU0lHTkVEX0JZVEU6IDUxMjEsXG5cdFVOU0lHTkVEX1NIT1JUOiA1MTIzXG59O1xuXG5jb25zdCBXRUJHTF9DT01QT05FTlRfVFlQRVMgPSB7XG5cdDUxMjA6IEludDhBcnJheSxcblx0NTEyMTogVWludDhBcnJheSxcblx0NTEyMjogSW50MTZBcnJheSxcblx0NTEyMzogVWludDE2QXJyYXksXG5cdDUxMjU6IFVpbnQzMkFycmF5LFxuXHQ1MTI2OiBGbG9hdDMyQXJyYXlcbn07XG5cbmNvbnN0IFdFQkdMX0ZJTFRFUlMgPSB7XG5cdDk3Mjg6IE5lYXJlc3RGaWx0ZXIsXG5cdDk3Mjk6IExpbmVhckZpbHRlcixcblx0OTk4NDogTmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdDk5ODU6IExpbmVhck1pcG1hcE5lYXJlc3RGaWx0ZXIsXG5cdDk5ODY6IE5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXIsXG5cdDk5ODc6IExpbmVhck1pcG1hcExpbmVhckZpbHRlclxufTtcblxuY29uc3QgV0VCR0xfV1JBUFBJTkdTID0ge1xuXHQzMzA3MTogQ2xhbXBUb0VkZ2VXcmFwcGluZyxcblx0MzM2NDg6IE1pcnJvcmVkUmVwZWF0V3JhcHBpbmcsXG5cdDEwNDk3OiBSZXBlYXRXcmFwcGluZ1xufTtcblxuY29uc3QgV0VCR0xfVFlQRV9TSVpFUyA9IHtcblx0J1NDQUxBUic6IDEsXG5cdCdWRUMyJzogMixcblx0J1ZFQzMnOiAzLFxuXHQnVkVDNCc6IDQsXG5cdCdNQVQyJzogNCxcblx0J01BVDMnOiA5LFxuXHQnTUFUNCc6IDE2XG59O1xuXG5jb25zdCBBVFRSSUJVVEVTID0ge1xuXHRQT1NJVElPTjogJ3Bvc2l0aW9uJyxcblx0Tk9STUFMOiAnbm9ybWFsJyxcblx0VEFOR0VOVDogJ3RhbmdlbnQnLFxuXHRURVhDT09SRF8wOiAndXYnLFxuXHRURVhDT09SRF8xOiAndXYyJyxcblx0Q09MT1JfMDogJ2NvbG9yJyxcblx0V0VJR0hUU18wOiAnc2tpbldlaWdodCcsXG5cdEpPSU5UU18wOiAnc2tpbkluZGV4Jyxcbn07XG5cbmNvbnN0IFBBVEhfUFJPUEVSVElFUyA9IHtcblx0c2NhbGU6ICdzY2FsZScsXG5cdHRyYW5zbGF0aW9uOiAncG9zaXRpb24nLFxuXHRyb3RhdGlvbjogJ3F1YXRlcm5pb24nLFxuXHR3ZWlnaHRzOiAnbW9ycGhUYXJnZXRJbmZsdWVuY2VzJ1xufTtcblxuY29uc3QgSU5URVJQT0xBVElPTiA9IHtcblx0Q1VCSUNTUExJTkU6IHVuZGVmaW5lZCwgLy8gV2UgdXNlIGEgY3VzdG9tIGludGVycG9sYW50IChHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGF0aW9uKSBmb3IgQ1VCSUNTUExJTkUgdHJhY2tzLiBFYWNoXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2V5ZnJhbWUgdHJhY2sgd2lsbCBiZSBpbml0aWFsaXplZCB3aXRoIGEgZGVmYXVsdCBpbnRlcnBvbGF0aW9uIHR5cGUsIHRoZW4gbW9kaWZpZWQuXG5cdExJTkVBUjogSW50ZXJwb2xhdGVMaW5lYXIsXG5cdFNURVA6IEludGVycG9sYXRlRGlzY3JldGVcbn07XG5cbmNvbnN0IEFMUEhBX01PREVTID0ge1xuXHRPUEFRVUU6ICdPUEFRVUUnLFxuXHRNQVNLOiAnTUFTSycsXG5cdEJMRU5EOiAnQkxFTkQnXG59O1xuXG4vKiBVVElMSVRZIEZVTkNUSU9OUyAqL1xuXG5mdW5jdGlvbiByZXNvbHZlVVJMKCB1cmwsIHBhdGggKSB7XG5cblx0Ly8gSW52YWxpZCBVUkxcblx0aWYgKCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyB8fCB1cmwgPT09ICcnICkgcmV0dXJuICcnO1xuXG5cdC8vIEhvc3QgUmVsYXRpdmUgVVJMXG5cdGlmICggL15odHRwcz86XFwvXFwvL2kudGVzdCggcGF0aCApICYmIC9eXFwvLy50ZXN0KCB1cmwgKSApIHtcblxuXHRcdHBhdGggPSBwYXRoLnJlcGxhY2UoIC8oXmh0dHBzPzpcXC9cXC9bXlxcL10rKS4qL2ksICckMScgKTtcblxuXHR9XG5cblx0Ly8gQWJzb2x1dGUgVVJMIGh0dHA6Ly8saHR0cHM6Ly8sLy9cblx0aWYgKCAvXihodHRwcz86KT9cXC9cXC8vaS50ZXN0KCB1cmwgKSApIHJldHVybiB1cmw7XG5cblx0Ly8gRGF0YSBVUklcblx0aWYgKCAvXmRhdGE6LiosLiokL2kudGVzdCggdXJsICkgKSByZXR1cm4gdXJsO1xuXG5cdC8vIEJsb2IgVVJMXG5cdGlmICggL15ibG9iOi4qJC9pLnRlc3QoIHVybCApICkgcmV0dXJuIHVybDtcblxuXHQvLyBSZWxhdGl2ZSBVUkxcblx0cmV0dXJuIHBhdGggKyB1cmw7XG5cbn1cblxuLyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjZGVmYXVsdC1tYXRlcmlhbFxuXHQgKi9cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRNYXRlcmlhbCggY2FjaGUgKSB7XG5cblx0aWYgKCBjYWNoZVsgJ0RlZmF1bHRNYXRlcmlhbCcgXSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0Y2FjaGVbICdEZWZhdWx0TWF0ZXJpYWwnIF0gPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoIHtcblx0XHRcdGNvbG9yOiAweEZGRkZGRixcblx0XHRcdGVtaXNzaXZlOiAweDAwMDAwMCxcblx0XHRcdG1ldGFsbmVzczogMSxcblx0XHRcdHJvdWdobmVzczogMSxcblx0XHRcdHRyYW5zcGFyZW50OiBmYWxzZSxcblx0XHRcdGRlcHRoVGVzdDogdHJ1ZSxcblx0XHRcdHNpZGU6IEZyb250U2lkZVxuXHRcdH0gKTtcblxuXHR9XG5cblx0cmV0dXJuIGNhY2hlWyAnRGVmYXVsdE1hdGVyaWFsJyBdO1xuXG59XG5cbmZ1bmN0aW9uIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSgga25vd25FeHRlbnNpb25zLCBvYmplY3QsIG9iamVjdERlZiApIHtcblxuXHQvLyBBZGQgdW5rbm93biBnbFRGIGV4dGVuc2lvbnMgdG8gYW4gb2JqZWN0J3MgdXNlckRhdGEuXG5cblx0Zm9yICggY29uc3QgbmFtZSBpbiBvYmplY3REZWYuZXh0ZW5zaW9ucyApIHtcblxuXHRcdGlmICgga25vd25FeHRlbnNpb25zWyBuYW1lIF0gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0b2JqZWN0LnVzZXJEYXRhLmdsdGZFeHRlbnNpb25zID0gb2JqZWN0LnVzZXJEYXRhLmdsdGZFeHRlbnNpb25zIHx8IHt9O1xuXHRcdFx0b2JqZWN0LnVzZXJEYXRhLmdsdGZFeHRlbnNpb25zWyBuYW1lIF0gPSBvYmplY3REZWYuZXh0ZW5zaW9uc1sgbmFtZSBdO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG4vKipcblx0ICogQHBhcmFtIHtPYmplY3QzRHxNYXRlcmlhbHxCdWZmZXJHZW9tZXRyeX0gb2JqZWN0XG5cdCAqIEBwYXJhbSB7R0xURi5kZWZpbml0aW9ufSBnbHRmRGVmXG5cdCAqL1xuZnVuY3Rpb24gYXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggb2JqZWN0LCBnbHRmRGVmICkge1xuXG5cdGlmICggZ2x0ZkRlZi5leHRyYXMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmICggdHlwZW9mIGdsdGZEZWYuZXh0cmFzID09PSAnb2JqZWN0JyApIHtcblxuXHRcdFx0T2JqZWN0LmFzc2lnbiggb2JqZWN0LnVzZXJEYXRhLCBnbHRmRGVmLmV4dHJhcyApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogSWdub3JpbmcgcHJpbWl0aXZlIHR5cGUgLmV4dHJhcywgJyArIGdsdGZEZWYuZXh0cmFzICk7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbi8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI21vcnBoLXRhcmdldHNcblx0ICpcblx0ICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcblx0ICogQHBhcmFtIHtBcnJheTxHTFRGLlRhcmdldD59IHRhcmdldHNcblx0ICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcblx0ICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJHZW9tZXRyeT59XG5cdCAqL1xuZnVuY3Rpb24gYWRkTW9ycGhUYXJnZXRzKCBnZW9tZXRyeSwgdGFyZ2V0cywgcGFyc2VyICkge1xuXG5cdGxldCBoYXNNb3JwaFBvc2l0aW9uID0gZmFsc2U7XG5cdGxldCBoYXNNb3JwaE5vcm1hbCA9IGZhbHNlO1xuXG5cdGZvciAoIGxldCBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xuXG5cdFx0aWYgKCB0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZCApIGhhc01vcnBoUG9zaXRpb24gPSB0cnVlO1xuXHRcdGlmICggdGFyZ2V0Lk5PUk1BTCAhPT0gdW5kZWZpbmVkICkgaGFzTW9ycGhOb3JtYWwgPSB0cnVlO1xuXG5cdFx0aWYgKCBoYXNNb3JwaFBvc2l0aW9uICYmIGhhc01vcnBoTm9ybWFsICkgYnJlYWs7XG5cblx0fVxuXG5cdGlmICggISBoYXNNb3JwaFBvc2l0aW9uICYmICEgaGFzTW9ycGhOb3JtYWwgKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBnZW9tZXRyeSApO1xuXG5cdGNvbnN0IHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycyA9IFtdO1xuXHRjb25zdCBwZW5kaW5nTm9ybWFsQWNjZXNzb3JzID0gW107XG5cblx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHRhcmdldHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRjb25zdCB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XG5cblx0XHRpZiAoIGhhc01vcnBoUG9zaXRpb24gKSB7XG5cblx0XHRcdGNvbnN0IHBlbmRpbmdBY2Nlc3NvciA9IHRhcmdldC5QT1NJVElPTiAhPT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gcGFyc2VyLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHRhcmdldC5QT1NJVElPTiApXG5cdFx0XHRcdDogZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbjtcblxuXHRcdFx0cGVuZGluZ1Bvc2l0aW9uQWNjZXNzb3JzLnB1c2goIHBlbmRpbmdBY2Nlc3NvciApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBoYXNNb3JwaE5vcm1hbCApIHtcblxuXHRcdFx0Y29uc3QgcGVuZGluZ0FjY2Vzc29yID0gdGFyZ2V0Lk5PUk1BTCAhPT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gcGFyc2VyLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHRhcmdldC5OT1JNQUwgKVxuXHRcdFx0XHQ6IGdlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsO1xuXG5cdFx0XHRwZW5kaW5nTm9ybWFsQWNjZXNzb3JzLnB1c2goIHBlbmRpbmdBY2Nlc3NvciApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcblx0XHRQcm9taXNlLmFsbCggcGVuZGluZ1Bvc2l0aW9uQWNjZXNzb3JzICksXG5cdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMgKVxuXHRdICkudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvcnMgKSB7XG5cblx0XHRjb25zdCBtb3JwaFBvc2l0aW9ucyA9IGFjY2Vzc29yc1sgMCBdO1xuXHRcdGNvbnN0IG1vcnBoTm9ybWFscyA9IGFjY2Vzc29yc1sgMSBdO1xuXG5cdFx0aWYgKCBoYXNNb3JwaFBvc2l0aW9uICkgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLnBvc2l0aW9uID0gbW9ycGhQb3NpdGlvbnM7XG5cdFx0aWYgKCBoYXNNb3JwaE5vcm1hbCApIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5ub3JtYWwgPSBtb3JwaE5vcm1hbHM7XG5cdFx0Z2VvbWV0cnkubW9ycGhUYXJnZXRzUmVsYXRpdmUgPSB0cnVlO1xuXG5cdFx0cmV0dXJuIGdlb21ldHJ5O1xuXG5cdH0gKTtcblxufVxuXG4vKipcblx0ICogQHBhcmFtIHtNZXNofSBtZXNoXG5cdCAqIEBwYXJhbSB7R0xURi5NZXNofSBtZXNoRGVmXG5cdCAqL1xuZnVuY3Rpb24gdXBkYXRlTW9ycGhUYXJnZXRzKCBtZXNoLCBtZXNoRGVmICkge1xuXG5cdG1lc2gudXBkYXRlTW9ycGhUYXJnZXRzKCk7XG5cblx0aWYgKCBtZXNoRGVmLndlaWdodHMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBtZXNoRGVmLndlaWdodHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzWyBpIF0gPSBtZXNoRGVmLndlaWdodHNbIGkgXTtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly8gLmV4dHJhcyBoYXMgdXNlci1kZWZpbmVkIGRhdGEsIHNvIGNoZWNrIHRoYXQgLmV4dHJhcy50YXJnZXROYW1lcyBpcyBhbiBhcnJheS5cblx0aWYgKCBtZXNoRGVmLmV4dHJhcyAmJiBBcnJheS5pc0FycmF5KCBtZXNoRGVmLmV4dHJhcy50YXJnZXROYW1lcyApICkge1xuXG5cdFx0Y29uc3QgdGFyZ2V0TmFtZXMgPSBtZXNoRGVmLmV4dHJhcy50YXJnZXROYW1lcztcblxuXHRcdGlmICggbWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXMubGVuZ3RoID09PSB0YXJnZXROYW1lcy5sZW5ndGggKSB7XG5cblx0XHRcdG1lc2gubW9ycGhUYXJnZXREaWN0aW9uYXJ5ID0ge307XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSB0YXJnZXROYW1lcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRtZXNoLm1vcnBoVGFyZ2V0RGljdGlvbmFyeVsgdGFyZ2V0TmFtZXNbIGkgXSBdID0gaTtcblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogSW52YWxpZCBleHRyYXMudGFyZ2V0TmFtZXMgbGVuZ3RoLiBJZ25vcmluZyBuYW1lcy4nICk7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZUtleSggcHJpbWl0aXZlRGVmICkge1xuXG5cdGNvbnN0IGRyYWNvRXh0ZW5zaW9uID0gcHJpbWl0aXZlRGVmLmV4dGVuc2lvbnMgJiYgcHJpbWl0aXZlRGVmLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04gXTtcblx0bGV0IGdlb21ldHJ5S2V5O1xuXG5cdGlmICggZHJhY29FeHRlbnNpb24gKSB7XG5cblx0XHRnZW9tZXRyeUtleSA9ICdkcmFjbzonICsgZHJhY29FeHRlbnNpb24uYnVmZmVyVmlld1xuXHRcdFx0XHQrICc6JyArIGRyYWNvRXh0ZW5zaW9uLmluZGljZXNcblx0XHRcdFx0KyAnOicgKyBjcmVhdGVBdHRyaWJ1dGVzS2V5KCBkcmFjb0V4dGVuc2lvbi5hdHRyaWJ1dGVzICk7XG5cblx0fSBlbHNlIHtcblxuXHRcdGdlb21ldHJ5S2V5ID0gcHJpbWl0aXZlRGVmLmluZGljZXMgKyAnOicgKyBjcmVhdGVBdHRyaWJ1dGVzS2V5KCBwcmltaXRpdmVEZWYuYXR0cmlidXRlcyApICsgJzonICsgcHJpbWl0aXZlRGVmLm1vZGU7XG5cblx0fVxuXG5cdHJldHVybiBnZW9tZXRyeUtleTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVzS2V5KCBhdHRyaWJ1dGVzICkge1xuXG5cdGxldCBhdHRyaWJ1dGVzS2V5ID0gJyc7XG5cblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKCBhdHRyaWJ1dGVzICkuc29ydCgpO1xuXG5cdGZvciAoIGxldCBpID0gMCwgaWwgPSBrZXlzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0YXR0cmlidXRlc0tleSArPSBrZXlzWyBpIF0gKyAnOicgKyBhdHRyaWJ1dGVzWyBrZXlzWyBpIF0gXSArICc7JztcblxuXHR9XG5cblx0cmV0dXJuIGF0dHJpYnV0ZXNLZXk7XG5cbn1cblxuZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZENvbXBvbmVudFNjYWxlKCBjb25zdHJ1Y3RvciApIHtcblxuXHQvLyBSZWZlcmVuY2U6XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tZXNoX3F1YW50aXphdGlvbiNlbmNvZGluZy1xdWFudGl6ZWQtZGF0YVxuXG5cdHN3aXRjaCAoIGNvbnN0cnVjdG9yICkge1xuXG5cdFx0Y2FzZSBJbnQ4QXJyYXk6XG5cdFx0XHRyZXR1cm4gMSAvIDEyNztcblxuXHRcdGNhc2UgVWludDhBcnJheTpcblx0XHRcdHJldHVybiAxIC8gMjU1O1xuXG5cdFx0Y2FzZSBJbnQxNkFycmF5OlxuXHRcdFx0cmV0dXJuIDEgLyAzMjc2NztcblxuXHRcdGNhc2UgVWludDE2QXJyYXk6XG5cdFx0XHRyZXR1cm4gMSAvIDY1NTM1O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIG5vcm1hbGl6ZWQgYWNjZXNzb3IgY29tcG9uZW50IHR5cGUuJyApO1xuXG5cdH1cblxufVxuXG4vKiBHTFRGIFBBUlNFUiAqL1xuXG5jbGFzcyBHTFRGUGFyc2VyIHtcblxuXHRjb25zdHJ1Y3RvcigganNvbiA9IHt9LCBvcHRpb25zID0ge30gKSB7XG5cblx0XHR0aGlzLmpzb24gPSBqc29uO1xuXHRcdHRoaXMuZXh0ZW5zaW9ucyA9IHt9O1xuXHRcdHRoaXMucGx1Z2lucyA9IHt9O1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cblx0XHQvLyBsb2FkZXIgb2JqZWN0IGNhY2hlXG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBHTFRGUmVnaXN0cnkoKTtcblxuXHRcdC8vIGFzc29jaWF0aW9ucyBiZXR3ZWVuIFRocmVlLmpzIG9iamVjdHMgYW5kIGdsVEYgZWxlbWVudHNcblx0XHR0aGlzLmFzc29jaWF0aW9ucyA9IG5ldyBNYXAoKTtcblxuXHRcdC8vIEJ1ZmZlckdlb21ldHJ5IGNhY2hpbmdcblx0XHR0aGlzLnByaW1pdGl2ZUNhY2hlID0ge307XG5cblx0XHQvLyBPYmplY3QzRCBpbnN0YW5jZSBjYWNoZXNcblx0XHR0aGlzLm1lc2hDYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XG5cdFx0dGhpcy5jYW1lcmFDYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XG5cdFx0dGhpcy5saWdodENhY2hlID0geyByZWZzOiB7fSwgdXNlczoge30gfTtcblxuXHRcdC8vIFRyYWNrIG5vZGUgbmFtZXMsIHRvIGVuc3VyZSBubyBkdXBsaWNhdGVzXG5cdFx0dGhpcy5ub2RlTmFtZXNVc2VkID0ge307XG5cblx0XHQvLyBVc2UgYW4gSW1hZ2VCaXRtYXBMb2FkZXIgaWYgaW1hZ2VCaXRtYXBzIGFyZSBzdXBwb3J0ZWQuIE1vdmVzIG11Y2ggb2YgdGhlXG5cdFx0Ly8gZXhwZW5zaXZlIHdvcmsgb2YgdXBsb2FkaW5nIGEgdGV4dHVyZSB0byB0aGUgR1BVIG9mZiB0aGUgbWFpbiB0aHJlYWQuXG5cdFx0aWYgKCB0eXBlb2YgY3JlYXRlSW1hZ2VCaXRtYXAgIT09ICd1bmRlZmluZWQnICYmIC9GaXJlZm94Ly50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICkgPT09IGZhbHNlICkge1xuXG5cdFx0XHR0aGlzLnRleHR1cmVMb2FkZXIgPSBuZXcgSW1hZ2VCaXRtYXBMb2FkZXIoIHRoaXMub3B0aW9ucy5tYW5hZ2VyICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR0aGlzLnRleHR1cmVMb2FkZXIgPSBuZXcgVGV4dHVyZUxvYWRlciggdGhpcy5vcHRpb25zLm1hbmFnZXIgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMudGV4dHVyZUxvYWRlci5zZXRDcm9zc09yaWdpbiggdGhpcy5vcHRpb25zLmNyb3NzT3JpZ2luICk7XG5cdFx0dGhpcy50ZXh0dXJlTG9hZGVyLnNldFJlcXVlc3RIZWFkZXIoIHRoaXMub3B0aW9ucy5yZXF1ZXN0SGVhZGVyICk7XG5cblx0XHR0aGlzLmZpbGVMb2FkZXIgPSBuZXcgRmlsZUxvYWRlciggdGhpcy5vcHRpb25zLm1hbmFnZXIgKTtcblx0XHR0aGlzLmZpbGVMb2FkZXIuc2V0UmVzcG9uc2VUeXBlKCAnYXJyYXlidWZmZXInICk7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5jcm9zc09yaWdpbiA9PT0gJ3VzZS1jcmVkZW50aWFscycgKSB7XG5cblx0XHRcdHRoaXMuZmlsZUxvYWRlci5zZXRXaXRoQ3JlZGVudGlhbHMoIHRydWUgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0c2V0RXh0ZW5zaW9ucyggZXh0ZW5zaW9ucyApIHtcblxuXHRcdHRoaXMuZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnM7XG5cblx0fVxuXG5cdHNldFBsdWdpbnMoIHBsdWdpbnMgKSB7XG5cblx0XHR0aGlzLnBsdWdpbnMgPSBwbHVnaW5zO1xuXG5cdH1cblxuXHRwYXJzZSggb25Mb2FkLCBvbkVycm9yICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cblx0XHQvLyBDbGVhciB0aGUgbG9hZGVyIGNhY2hlXG5cdFx0dGhpcy5jYWNoZS5yZW1vdmVBbGwoKTtcblxuXHRcdC8vIE1hcmsgdGhlIHNwZWNpYWwgbm9kZXMvbWVzaGVzIGluIGpzb24gZm9yIGVmZmljaWVudCBwYXJzZVxuXHRcdHRoaXMuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdHJldHVybiBleHQuX21hcmtEZWZzICYmIGV4dC5fbWFya0RlZnMoKTtcblxuXHRcdH0gKTtcblxuXHRcdFByb21pc2UuYWxsKCB0aGlzLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRyZXR1cm4gZXh0LmJlZm9yZVJvb3QgJiYgZXh0LmJlZm9yZVJvb3QoKTtcblxuXHRcdH0gKSApLnRoZW4oIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBbXG5cblx0XHRcdFx0cGFyc2VyLmdldERlcGVuZGVuY2llcyggJ3NjZW5lJyApLFxuXHRcdFx0XHRwYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCAnYW5pbWF0aW9uJyApLFxuXHRcdFx0XHRwYXJzZXIuZ2V0RGVwZW5kZW5jaWVzKCAnY2FtZXJhJyApLFxuXG5cdFx0XHRdICk7XG5cblx0XHR9ICkudGhlbiggZnVuY3Rpb24gKCBkZXBlbmRlbmNpZXMgKSB7XG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IHtcblx0XHRcdFx0c2NlbmU6IGRlcGVuZGVuY2llc1sgMCBdWyBqc29uLnNjZW5lIHx8IDAgXSxcblx0XHRcdFx0c2NlbmVzOiBkZXBlbmRlbmNpZXNbIDAgXSxcblx0XHRcdFx0YW5pbWF0aW9uczogZGVwZW5kZW5jaWVzWyAxIF0sXG5cdFx0XHRcdGNhbWVyYXM6IGRlcGVuZGVuY2llc1sgMiBdLFxuXHRcdFx0XHRhc3NldDoganNvbi5hc3NldCxcblx0XHRcdFx0cGFyc2VyOiBwYXJzZXIsXG5cdFx0XHRcdHVzZXJEYXRhOiB7fVxuXHRcdFx0fTtcblxuXHRcdFx0YWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCByZXN1bHQsIGpzb24gKTtcblxuXHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggcmVzdWx0LCBqc29uICk7XG5cblx0XHRcdFByb21pc2UuYWxsKCBwYXJzZXIuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5hZnRlclJvb3QgJiYgZXh0LmFmdGVyUm9vdCggcmVzdWx0ICk7XG5cblx0XHRcdH0gKSApLnRoZW4oIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRvbkxvYWQoIHJlc3VsdCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICkuY2F0Y2goIG9uRXJyb3IgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIE1hcmtzIHRoZSBzcGVjaWFsIG5vZGVzL21lc2hlcyBpbiBqc29uIGZvciBlZmZpY2llbnQgcGFyc2UuXG5cdCAqL1xuXHRfbWFya0RlZnMoKSB7XG5cblx0XHRjb25zdCBub2RlRGVmcyA9IHRoaXMuanNvbi5ub2RlcyB8fCBbXTtcblx0XHRjb25zdCBza2luRGVmcyA9IHRoaXMuanNvbi5za2lucyB8fCBbXTtcblx0XHRjb25zdCBtZXNoRGVmcyA9IHRoaXMuanNvbi5tZXNoZXMgfHwgW107XG5cblx0XHQvLyBOb3RoaW5nIGluIHRoZSBub2RlIGRlZmluaXRpb24gaW5kaWNhdGVzIHdoZXRoZXIgaXQgaXMgYSBCb25lIG9yIGFuXG5cdFx0Ly8gT2JqZWN0M0QuIFVzZSB0aGUgc2tpbnMnIGpvaW50IHJlZmVyZW5jZXMgdG8gbWFyayBib25lcy5cblx0XHRmb3IgKCBsZXQgc2tpbkluZGV4ID0gMCwgc2tpbkxlbmd0aCA9IHNraW5EZWZzLmxlbmd0aDsgc2tpbkluZGV4IDwgc2tpbkxlbmd0aDsgc2tpbkluZGV4ICsrICkge1xuXG5cdFx0XHRjb25zdCBqb2ludHMgPSBza2luRGVmc1sgc2tpbkluZGV4IF0uam9pbnRzO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gam9pbnRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdG5vZGVEZWZzWyBqb2ludHNbIGkgXSBdLmlzQm9uZSA9IHRydWU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vIEl0ZXJhdGUgb3ZlciBhbGwgbm9kZXMsIG1hcmtpbmcgcmVmZXJlbmNlcyB0byBzaGFyZWQgcmVzb3VyY2VzLFxuXHRcdC8vIGFzIHdlbGwgYXMgc2tlbGV0b24gam9pbnRzLlxuXHRcdGZvciAoIGxldCBub2RlSW5kZXggPSAwLCBub2RlTGVuZ3RoID0gbm9kZURlZnMubGVuZ3RoOyBub2RlSW5kZXggPCBub2RlTGVuZ3RoOyBub2RlSW5kZXggKysgKSB7XG5cblx0XHRcdGNvbnN0IG5vZGVEZWYgPSBub2RlRGVmc1sgbm9kZUluZGV4IF07XG5cblx0XHRcdGlmICggbm9kZURlZi5tZXNoICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0dGhpcy5fYWRkTm9kZVJlZiggdGhpcy5tZXNoQ2FjaGUsIG5vZGVEZWYubWVzaCApO1xuXG5cdFx0XHRcdC8vIE5vdGhpbmcgaW4gdGhlIG1lc2ggZGVmaW5pdGlvbiBpbmRpY2F0ZXMgd2hldGhlciBpdCBpc1xuXHRcdFx0XHQvLyBhIFNraW5uZWRNZXNoIG9yIE1lc2guIFVzZSB0aGUgbm9kZSdzIG1lc2ggcmVmZXJlbmNlXG5cdFx0XHRcdC8vIHRvIG1hcmsgU2tpbm5lZE1lc2ggaWYgbm9kZSBoYXMgc2tpbi5cblx0XHRcdFx0aWYgKCBub2RlRGVmLnNraW4gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdG1lc2hEZWZzWyBub2RlRGVmLm1lc2ggXS5pc1NraW5uZWRNZXNoID0gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBub2RlRGVmLmNhbWVyYSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHRoaXMuX2FkZE5vZGVSZWYoIHRoaXMuY2FtZXJhQ2FjaGUsIG5vZGVEZWYuY2FtZXJhICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENvdW50cyByZWZlcmVuY2VzIHRvIHNoYXJlZCBub2RlIC8gT2JqZWN0M0QgcmVzb3VyY2VzLiBUaGVzZSByZXNvdXJjZXNcblx0ICogY2FuIGJlIHJldXNlZCwgb3IgXCJpbnN0YW50aWF0ZWRcIiwgYXQgbXVsdGlwbGUgbm9kZXMgaW4gdGhlIHNjZW5lXG5cdCAqIGhpZXJhcmNoeS4gTWVzaCwgQ2FtZXJhLCBhbmQgTGlnaHQgaW5zdGFuY2VzIGFyZSBpbnN0YW50aWF0ZWQgYW5kIG11c3Rcblx0ICogYmUgbWFya2VkLiBOb24tc2NlbmVncmFwaCByZXNvdXJjZXMgKGxpa2UgTWF0ZXJpYWxzLCBHZW9tZXRyaWVzLCBhbmRcblx0ICogVGV4dHVyZXMpIGNhbiBiZSByZXVzZWQgZGlyZWN0bHkgYW5kIGFyZSBub3QgbWFya2VkIGhlcmUuXG5cdCAqXG5cdCAqIEV4YW1wbGU6IENlc2l1bU1pbGtUcnVjayBzYW1wbGUgbW9kZWwgcmV1c2VzIFwiV2hlZWxcIiBtZXNoZXMuXG5cdCAqL1xuXHRfYWRkTm9kZVJlZiggY2FjaGUsIGluZGV4ICkge1xuXG5cdFx0aWYgKCBpbmRleCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuO1xuXG5cdFx0aWYgKCBjYWNoZS5yZWZzWyBpbmRleCBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGNhY2hlLnJlZnNbIGluZGV4IF0gPSBjYWNoZS51c2VzWyBpbmRleCBdID0gMDtcblxuXHRcdH1cblxuXHRcdGNhY2hlLnJlZnNbIGluZGV4IF0gKys7XG5cblx0fVxuXG5cdC8qKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIGEgc2hhcmVkIHJlc291cmNlLCBjbG9uaW5nIGl0IGlmIG5lY2Vzc2FyeS4gKi9cblx0X2dldE5vZGVSZWYoIGNhY2hlLCBpbmRleCwgb2JqZWN0ICkge1xuXG5cdFx0aWYgKCBjYWNoZS5yZWZzWyBpbmRleCBdIDw9IDEgKSByZXR1cm4gb2JqZWN0O1xuXG5cdFx0Y29uc3QgcmVmID0gb2JqZWN0LmNsb25lKCk7XG5cblx0XHRyZWYubmFtZSArPSAnX2luc3RhbmNlXycgKyAoIGNhY2hlLnVzZXNbIGluZGV4IF0gKysgKTtcblxuXHRcdHJldHVybiByZWY7XG5cblx0fVxuXG5cdF9pbnZva2VPbmUoIGZ1bmMgKSB7XG5cblx0XHRjb25zdCBleHRlbnNpb25zID0gT2JqZWN0LnZhbHVlcyggdGhpcy5wbHVnaW5zICk7XG5cdFx0ZXh0ZW5zaW9ucy5wdXNoKCB0aGlzICk7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZnVuYyggZXh0ZW5zaW9uc1sgaSBdICk7XG5cblx0XHRcdGlmICggcmVzdWx0ICkgcmV0dXJuIHJlc3VsdDtcblxuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXG5cdH1cblxuXHRfaW52b2tlQWxsKCBmdW5jICkge1xuXG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IE9iamVjdC52YWx1ZXMoIHRoaXMucGx1Z2lucyApO1xuXHRcdGV4dGVuc2lvbnMudW5zaGlmdCggdGhpcyApO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IGZ1bmMoIGV4dGVuc2lvbnNbIGkgXSApO1xuXG5cdFx0XHRpZiAoIHJlc3VsdCApIHBlbmRpbmcucHVzaCggcmVzdWx0ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGVuZGluZztcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJlcXVlc3RzIHRoZSBzcGVjaWZpZWQgZGVwZW5kZW5jeSBhc3luY2hyb25vdXNseSwgd2l0aCBjYWNoaW5nLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QzRHxNYXRlcmlhbHxUSFJFRS5UZXh0dXJlfEFuaW1hdGlvbkNsaXB8QXJyYXlCdWZmZXJ8T2JqZWN0Pn1cblx0ICovXG5cdGdldERlcGVuZGVuY3koIHR5cGUsIGluZGV4ICkge1xuXG5cdFx0Y29uc3QgY2FjaGVLZXkgPSB0eXBlICsgJzonICsgaW5kZXg7XG5cdFx0bGV0IGRlcGVuZGVuY3kgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdGlmICggISBkZXBlbmRlbmN5ICkge1xuXG5cdFx0XHRzd2l0Y2ggKCB0eXBlICkge1xuXG5cdFx0XHRcdGNhc2UgJ3NjZW5lJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkU2NlbmUoIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnbm9kZSc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZE5vZGUoIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnbWVzaCc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZE1lc2ggJiYgZXh0LmxvYWRNZXNoKCBpbmRleCApO1xuXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2FjY2Vzc29yJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQWNjZXNzb3IoIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnYnVmZmVyVmlldyc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZEJ1ZmZlclZpZXcgJiYgZXh0LmxvYWRCdWZmZXJWaWV3KCBpbmRleCApO1xuXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2J1ZmZlcic6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZEJ1ZmZlciggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZE1hdGVyaWFsICYmIGV4dC5sb2FkTWF0ZXJpYWwoIGluZGV4ICk7XG5cblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAndGV4dHVyZSc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0XHRcdHJldHVybiBleHQubG9hZFRleHR1cmUgJiYgZXh0LmxvYWRUZXh0dXJlKCBpbmRleCApO1xuXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ3NraW4nOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRTa2luKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2FuaW1hdGlvbic6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZEFuaW1hdGlvbiggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdjYW1lcmEnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRDYW1lcmEoIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdVbmtub3duIHR5cGU6ICcgKyB0eXBlICk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBkZXBlbmRlbmN5ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gZGVwZW5kZW5jeTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJlcXVlc3RzIGFsbCBkZXBlbmRlbmNpZXMgb2YgdGhlIHNwZWNpZmllZCB0eXBlIGFzeW5jaHJvbm91c2x5LCB3aXRoIGNhY2hpbmcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk8T2JqZWN0Pj59XG5cdCAqL1xuXHRnZXREZXBlbmRlbmNpZXMoIHR5cGUgKSB7XG5cblx0XHRsZXQgZGVwZW5kZW5jaWVzID0gdGhpcy5jYWNoZS5nZXQoIHR5cGUgKTtcblxuXHRcdGlmICggISBkZXBlbmRlbmNpZXMgKSB7XG5cblx0XHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0XHRjb25zdCBkZWZzID0gdGhpcy5qc29uWyB0eXBlICsgKCB0eXBlID09PSAnbWVzaCcgPyAnZXMnIDogJ3MnICkgXSB8fCBbXTtcblxuXHRcdFx0ZGVwZW5kZW5jaWVzID0gUHJvbWlzZS5hbGwoIGRlZnMubWFwKCBmdW5jdGlvbiAoIGRlZiwgaW5kZXggKSB7XG5cblx0XHRcdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCB0eXBlLCBpbmRleCApO1xuXG5cdFx0XHR9ICkgKTtcblxuXHRcdFx0dGhpcy5jYWNoZS5hZGQoIHR5cGUsIGRlcGVuZGVuY2llcyApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlcGVuZGVuY2llcztcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYnVmZmVycy1hbmQtYnVmZmVyLXZpZXdzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBidWZmZXJJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyPn1cblx0ICovXG5cdGxvYWRCdWZmZXIoIGJ1ZmZlckluZGV4ICkge1xuXG5cdFx0Y29uc3QgYnVmZmVyRGVmID0gdGhpcy5qc29uLmJ1ZmZlcnNbIGJ1ZmZlckluZGV4IF07XG5cdFx0Y29uc3QgbG9hZGVyID0gdGhpcy5maWxlTG9hZGVyO1xuXG5cdFx0aWYgKCBidWZmZXJEZWYudHlwZSAmJiBidWZmZXJEZWYudHlwZSAhPT0gJ2FycmF5YnVmZmVyJyApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogJyArIGJ1ZmZlckRlZi50eXBlICsgJyBidWZmZXIgdHlwZSBpcyBub3Qgc3VwcG9ydGVkLicgKTtcblxuXHRcdH1cblxuXHRcdC8vIElmIHByZXNlbnQsIEdMQiBjb250YWluZXIgaXMgcmVxdWlyZWQgdG8gYmUgdGhlIGZpcnN0IGJ1ZmZlci5cblx0XHRpZiAoIGJ1ZmZlckRlZi51cmkgPT09IHVuZGVmaW5lZCAmJiBidWZmZXJJbmRleCA9PT0gMCApIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggdGhpcy5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURiBdLmJvZHkgKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSwgcmVqZWN0ICkge1xuXG5cdFx0XHRsb2FkZXIubG9hZCggcmVzb2x2ZVVSTCggYnVmZmVyRGVmLnVyaSwgb3B0aW9ucy5wYXRoICksIHJlc29sdmUsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdHJlamVjdCggbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogRmFpbGVkIHRvIGxvYWQgYnVmZmVyIFwiJyArIGJ1ZmZlckRlZi51cmkgKyAnXCIuJyApICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYnVmZmVycy1hbmQtYnVmZmVyLXZpZXdzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBidWZmZXJWaWV3SW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59XG5cdCAqL1xuXHRsb2FkQnVmZmVyVmlldyggYnVmZmVyVmlld0luZGV4ICkge1xuXG5cdFx0Y29uc3QgYnVmZmVyVmlld0RlZiA9IHRoaXMuanNvbi5idWZmZXJWaWV3c1sgYnVmZmVyVmlld0luZGV4IF07XG5cblx0XHRyZXR1cm4gdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyJywgYnVmZmVyVmlld0RlZi5idWZmZXIgKS50aGVuKCBmdW5jdGlvbiAoIGJ1ZmZlciApIHtcblxuXHRcdFx0Y29uc3QgYnl0ZUxlbmd0aCA9IGJ1ZmZlclZpZXdEZWYuYnl0ZUxlbmd0aCB8fCAwO1xuXHRcdFx0Y29uc3QgYnl0ZU9mZnNldCA9IGJ1ZmZlclZpZXdEZWYuYnl0ZU9mZnNldCB8fCAwO1xuXHRcdFx0cmV0dXJuIGJ1ZmZlci5zbGljZSggYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGJ5dGVMZW5ndGggKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYWNjZXNzb3JzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBhY2Nlc3NvckluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QnVmZmVyQXR0cmlidXRlfEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlPn1cblx0ICovXG5cdGxvYWRBY2Nlc3NvciggYWNjZXNzb3JJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblxuXHRcdGNvbnN0IGFjY2Vzc29yRGVmID0gdGhpcy5qc29uLmFjY2Vzc29yc1sgYWNjZXNzb3JJbmRleCBdO1xuXG5cdFx0aWYgKCBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ID09PSB1bmRlZmluZWQgJiYgYWNjZXNzb3JEZWYuc3BhcnNlID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdC8vIElnbm9yZSBlbXB0eSBhY2Nlc3NvcnMsIHdoaWNoIG1heSBiZSB1c2VkIHRvIGRlY2xhcmUgcnVudGltZVxuXHRcdFx0Ly8gaW5mb3JtYXRpb24gYWJvdXQgYXR0cmlidXRlcyBjb21pbmcgZnJvbSBhbm90aGVyIHNvdXJjZSAoZS5nLiBEcmFjb1xuXHRcdFx0Ly8gY29tcHJlc3Npb24gZXh0ZW5zaW9uKS5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIG51bGwgKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmdCdWZmZXJWaWV3cyA9IFtdO1xuXG5cdFx0aWYgKCBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyApICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggbnVsbCApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBhY2Nlc3NvckRlZi5zcGFyc2UgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBhY2Nlc3NvckRlZi5zcGFyc2UuaW5kaWNlcy5idWZmZXJWaWV3ICkgKTtcblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYWNjZXNzb3JEZWYuc3BhcnNlLnZhbHVlcy5idWZmZXJWaWV3ICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZ0J1ZmZlclZpZXdzICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3cyApIHtcblxuXHRcdFx0Y29uc3QgYnVmZmVyVmlldyA9IGJ1ZmZlclZpZXdzWyAwIF07XG5cblx0XHRcdGNvbnN0IGl0ZW1TaXplID0gV0VCR0xfVFlQRV9TSVpFU1sgYWNjZXNzb3JEZWYudHlwZSBdO1xuXHRcdFx0Y29uc3QgVHlwZWRBcnJheSA9IFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZSBdO1xuXG5cdFx0XHQvLyBGb3IgVkVDMzogaXRlbVNpemUgaXMgMywgZWxlbWVudEJ5dGVzIGlzIDQsIGl0ZW1CeXRlcyBpcyAxMi5cblx0XHRcdGNvbnN0IGVsZW1lbnRCeXRlcyA9IFR5cGVkQXJyYXkuQllURVNfUEVSX0VMRU1FTlQ7XG5cdFx0XHRjb25zdCBpdGVtQnl0ZXMgPSBlbGVtZW50Qnl0ZXMgKiBpdGVtU2l6ZTtcblx0XHRcdGNvbnN0IGJ5dGVPZmZzZXQgPSBhY2Nlc3NvckRlZi5ieXRlT2Zmc2V0IHx8IDA7XG5cdFx0XHRjb25zdCBieXRlU3RyaWRlID0gYWNjZXNzb3JEZWYuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkID8ganNvbi5idWZmZXJWaWV3c1sgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyBdLmJ5dGVTdHJpZGUgOiB1bmRlZmluZWQ7XG5cdFx0XHRjb25zdCBub3JtYWxpemVkID0gYWNjZXNzb3JEZWYubm9ybWFsaXplZCA9PT0gdHJ1ZTtcblx0XHRcdGxldCBhcnJheSwgYnVmZmVyQXR0cmlidXRlO1xuXG5cdFx0XHQvLyBUaGUgYnVmZmVyIGlzIG5vdCBpbnRlcmxlYXZlZCBpZiB0aGUgc3RyaWRlIGlzIHRoZSBpdGVtIHNpemUgaW4gYnl0ZXMuXG5cdFx0XHRpZiAoIGJ5dGVTdHJpZGUgJiYgYnl0ZVN0cmlkZSAhPT0gaXRlbUJ5dGVzICkge1xuXG5cdFx0XHRcdC8vIEVhY2ggXCJzbGljZVwiIG9mIHRoZSBidWZmZXIsIGFzIGRlZmluZWQgYnkgJ2NvdW50JyBlbGVtZW50cyBvZiAnYnl0ZVN0cmlkZScgYnl0ZXMsIGdldHMgaXRzIG93biBJbnRlcmxlYXZlZEJ1ZmZlclxuXHRcdFx0XHQvLyBUaGlzIG1ha2VzIHN1cmUgdGhhdCBJQkEuY291bnQgcmVmbGVjdHMgYWNjZXNzb3IuY291bnQgcHJvcGVybHlcblx0XHRcdFx0Y29uc3QgaWJTbGljZSA9IE1hdGguZmxvb3IoIGJ5dGVPZmZzZXQgLyBieXRlU3RyaWRlICk7XG5cdFx0XHRcdGNvbnN0IGliQ2FjaGVLZXkgPSAnSW50ZXJsZWF2ZWRCdWZmZXI6JyArIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgKyAnOicgKyBhY2Nlc3NvckRlZi5jb21wb25lbnRUeXBlICsgJzonICsgaWJTbGljZSArICc6JyArIGFjY2Vzc29yRGVmLmNvdW50O1xuXHRcdFx0XHRsZXQgaWIgPSBwYXJzZXIuY2FjaGUuZ2V0KCBpYkNhY2hlS2V5ICk7XG5cblx0XHRcdFx0aWYgKCAhIGliICkge1xuXG5cdFx0XHRcdFx0YXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYnVmZmVyVmlldywgaWJTbGljZSAqIGJ5dGVTdHJpZGUsIGFjY2Vzc29yRGVmLmNvdW50ICogYnl0ZVN0cmlkZSAvIGVsZW1lbnRCeXRlcyApO1xuXG5cdFx0XHRcdFx0Ly8gSW50ZWdlciBwYXJhbWV0ZXJzIHRvIElCL0lCQSBhcmUgaW4gYXJyYXkgZWxlbWVudHMsIG5vdCBieXRlcy5cblx0XHRcdFx0XHRpYiA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlciggYXJyYXksIGJ5dGVTdHJpZGUgLyBlbGVtZW50Qnl0ZXMgKTtcblxuXHRcdFx0XHRcdHBhcnNlci5jYWNoZS5hZGQoIGliQ2FjaGVLZXksIGliICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZSA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSggaWIsIGl0ZW1TaXplLCAoIGJ5dGVPZmZzZXQgJSBieXRlU3RyaWRlICkgLyBlbGVtZW50Qnl0ZXMsIG5vcm1hbGl6ZWQgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAoIGJ1ZmZlclZpZXcgPT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHRhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBhY2Nlc3NvckRlZi5jb3VudCAqIGl0ZW1TaXplICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoIGJ1ZmZlclZpZXcsIGJ5dGVPZmZzZXQsIGFjY2Vzc29yRGVmLmNvdW50ICogaXRlbVNpemUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnVmZmVyQXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYXJyYXksIGl0ZW1TaXplLCBub3JtYWxpemVkICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNzcGFyc2UtYWNjZXNzb3JzXG5cdFx0XHRpZiAoIGFjY2Vzc29yRGVmLnNwYXJzZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IGl0ZW1TaXplSW5kaWNlcyA9IFdFQkdMX1RZUEVfU0laRVMuU0NBTEFSO1xuXHRcdFx0XHRjb25zdCBUeXBlZEFycmF5SW5kaWNlcyA9IFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3JEZWYuc3BhcnNlLmluZGljZXMuY29tcG9uZW50VHlwZSBdO1xuXG5cdFx0XHRcdGNvbnN0IGJ5dGVPZmZzZXRJbmRpY2VzID0gYWNjZXNzb3JEZWYuc3BhcnNlLmluZGljZXMuYnl0ZU9mZnNldCB8fCAwO1xuXHRcdFx0XHRjb25zdCBieXRlT2Zmc2V0VmFsdWVzID0gYWNjZXNzb3JEZWYuc3BhcnNlLnZhbHVlcy5ieXRlT2Zmc2V0IHx8IDA7XG5cblx0XHRcdFx0Y29uc3Qgc3BhcnNlSW5kaWNlcyA9IG5ldyBUeXBlZEFycmF5SW5kaWNlcyggYnVmZmVyVmlld3NbIDEgXSwgYnl0ZU9mZnNldEluZGljZXMsIGFjY2Vzc29yRGVmLnNwYXJzZS5jb3VudCAqIGl0ZW1TaXplSW5kaWNlcyApO1xuXHRcdFx0XHRjb25zdCBzcGFyc2VWYWx1ZXMgPSBuZXcgVHlwZWRBcnJheSggYnVmZmVyVmlld3NbIDIgXSwgYnl0ZU9mZnNldFZhbHVlcywgYWNjZXNzb3JEZWYuc3BhcnNlLmNvdW50ICogaXRlbVNpemUgKTtcblxuXHRcdFx0XHRpZiAoIGJ1ZmZlclZpZXcgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0XHQvLyBBdm9pZCBtb2RpZnlpbmcgdGhlIG9yaWdpbmFsIEFycmF5QnVmZmVyLCBpZiB0aGUgYnVmZmVyVmlldyB3YXNuJ3QgaW5pdGlhbGl6ZWQgd2l0aCB6ZXJvZXMuXG5cdFx0XHRcdFx0YnVmZmVyQXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYnVmZmVyQXR0cmlidXRlLmFycmF5LnNsaWNlKCksIGJ1ZmZlckF0dHJpYnV0ZS5pdGVtU2l6ZSwgYnVmZmVyQXR0cmlidXRlLm5vcm1hbGl6ZWQgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHNwYXJzZUluZGljZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0XHRjb25zdCBpbmRleCA9IHNwYXJzZUluZGljZXNbIGkgXTtcblxuXHRcdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZS5zZXRYKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgXSApO1xuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gMiApIGJ1ZmZlckF0dHJpYnV0ZS5zZXRZKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgKyAxIF0gKTtcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDMgKSBidWZmZXJBdHRyaWJ1dGUuc2V0WiggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplICsgMiBdICk7XG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSA0ICkgYnVmZmVyQXR0cmlidXRlLnNldFcoIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSArIDMgXSApO1xuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gNSApIHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IFVuc3VwcG9ydGVkIGl0ZW1TaXplIGluIHNwYXJzZSBCdWZmZXJBdHRyaWJ1dGUuJyApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYnVmZmVyQXR0cmlidXRlO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3RleHR1cmVzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0ZXh0dXJlSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxUSFJFRS5UZXh0dXJlPn1cblx0ICovXG5cdGxvYWRUZXh0dXJlKCB0ZXh0dXJlSW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cdFx0Y29uc3QgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xuXHRcdGNvbnN0IHNvdXJjZSA9IGpzb24uaW1hZ2VzWyB0ZXh0dXJlRGVmLnNvdXJjZSBdO1xuXG5cdFx0bGV0IGxvYWRlciA9IHRoaXMudGV4dHVyZUxvYWRlcjtcblxuXHRcdGlmICggc291cmNlLnVyaSApIHtcblxuXHRcdFx0Y29uc3QgaGFuZGxlciA9IG9wdGlvbnMubWFuYWdlci5nZXRIYW5kbGVyKCBzb3VyY2UudXJpICk7XG5cdFx0XHRpZiAoIGhhbmRsZXIgIT09IG51bGwgKSBsb2FkZXIgPSBoYW5kbGVyO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubG9hZFRleHR1cmVJbWFnZSggdGV4dHVyZUluZGV4LCBzb3VyY2UsIGxvYWRlciApO1xuXG5cdH1cblxuXHRsb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cblx0XHRjb25zdCB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1sgdGV4dHVyZUluZGV4IF07XG5cblx0XHRjb25zdCBVUkwgPSBzZWxmLlVSTCB8fCBzZWxmLndlYmtpdFVSTDtcblxuXHRcdGxldCBzb3VyY2VVUkkgPSBzb3VyY2UudXJpO1xuXHRcdGxldCBpc09iamVjdFVSTCA9IGZhbHNlO1xuXHRcdGxldCBoYXNBbHBoYSA9IHRydWU7XG5cblx0XHRpZiAoIHNvdXJjZS5taW1lVHlwZSA9PT0gJ2ltYWdlL2pwZWcnICkgaGFzQWxwaGEgPSBmYWxzZTtcblxuXHRcdGlmICggc291cmNlLmJ1ZmZlclZpZXcgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gTG9hZCBiaW5hcnkgaW1hZ2UgZGF0YSBmcm9tIGJ1ZmZlclZpZXcsIGlmIHByb3ZpZGVkLlxuXG5cdFx0XHRzb3VyY2VVUkkgPSBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlclZpZXcnLCBzb3VyY2UuYnVmZmVyVmlldyApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyVmlldyApIHtcblxuXHRcdFx0XHRpZiAoIHNvdXJjZS5taW1lVHlwZSA9PT0gJ2ltYWdlL3BuZycgKSB7XG5cblx0XHRcdFx0XHQvLyBJbnNwZWN0IHRoZSBQTkcgJ0lIRFInIGNodW5rIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBpbWFnZSBjb3VsZCBoYXZlIGFuXG5cdFx0XHRcdFx0Ly8gYWxwaGEgY2hhbm5lbC4gVGhpcyBjaGVjayBpcyBjb25zZXJ2YXRpdmUg4oCUIHRoZSBpbWFnZSBjb3VsZCBoYXZlIGFuIGFscGhhXG5cdFx0XHRcdFx0Ly8gY2hhbm5lbCB3aXRoIGFsbCB2YWx1ZXMgPT0gMSwgYW5kIHRoZSBpbmRleGVkIHR5cGUgKGNvbG9yVHlwZSA9PSAzKSBvbmx5XG5cdFx0XHRcdFx0Ly8gc29tZXRpbWVzIGNvbnRhaW5zIGFscGhhLlxuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUG9ydGFibGVfTmV0d29ya19HcmFwaGljcyNGaWxlX2hlYWRlclxuXHRcdFx0XHRcdGNvbnN0IGNvbG9yVHlwZSA9IG5ldyBEYXRhVmlldyggYnVmZmVyVmlldywgMjUsIDEgKS5nZXRVaW50OCggMCwgZmFsc2UgKTtcblx0XHRcdFx0XHRoYXNBbHBoYSA9IGNvbG9yVHlwZSA9PT0gNiB8fCBjb2xvclR5cGUgPT09IDQgfHwgY29sb3JUeXBlID09PSAzO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpc09iamVjdFVSTCA9IHRydWU7XG5cdFx0XHRcdGNvbnN0IGJsb2IgPSBuZXcgQmxvYiggWyBidWZmZXJWaWV3IF0sIHsgdHlwZTogc291cmNlLm1pbWVUeXBlIH0gKTtcblx0XHRcdFx0c291cmNlVVJJID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xuXHRcdFx0XHRyZXR1cm4gc291cmNlVVJJO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzb3VyY2UudXJpID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IEltYWdlICcgKyB0ZXh0dXJlSW5kZXggKyAnIGlzIG1pc3NpbmcgVVJJIGFuZCBidWZmZXJWaWV3JyApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggc291cmNlVVJJICkudGhlbiggZnVuY3Rpb24gKCBzb3VyY2VVUkkgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24gKCByZXNvbHZlLCByZWplY3QgKSB7XG5cblx0XHRcdFx0bGV0IG9uTG9hZCA9IHJlc29sdmU7XG5cblx0XHRcdFx0aWYgKCBsb2FkZXIuaXNJbWFnZUJpdG1hcExvYWRlciA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdG9uTG9hZCA9IGZ1bmN0aW9uICggaW1hZ2VCaXRtYXAgKSB7XG5cblx0XHRcdFx0XHRcdHJlc29sdmUoIG5ldyBDYW52YXNUZXh0dXJlKCBpbWFnZUJpdG1hcCApICk7XG5cblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsb2FkZXIubG9hZCggcmVzb2x2ZVVSTCggc291cmNlVVJJLCBvcHRpb25zLnBhdGggKSwgb25Mb2FkLCB1bmRlZmluZWQsIHJlamVjdCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICkudGhlbiggZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xuXG5cdFx0XHQvLyBDbGVhbiB1cCByZXNvdXJjZXMgYW5kIGNvbmZpZ3VyZSBUZXh0dXJlLlxuXG5cdFx0XHRpZiAoIGlzT2JqZWN0VVJMID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoIHNvdXJjZVVSSSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHRleHR1cmUuZmxpcFkgPSBmYWxzZTtcblxuXHRcdFx0aWYgKCB0ZXh0dXJlRGVmLm5hbWUgKSB0ZXh0dXJlLm5hbWUgPSB0ZXh0dXJlRGVmLm5hbWU7XG5cblx0XHRcdC8vIFdoZW4gdGhlcmUgaXMgZGVmaW5pdGVseSBubyBhbHBoYSBjaGFubmVsIGluIHRoZSB0ZXh0dXJlLCBzZXQgUkdCRm9ybWF0IHRvIHNhdmUgc3BhY2UuXG5cdFx0XHRpZiAoICEgaGFzQWxwaGEgKSB0ZXh0dXJlLmZvcm1hdCA9IFJHQkZvcm1hdDtcblxuXHRcdFx0Y29uc3Qgc2FtcGxlcnMgPSBqc29uLnNhbXBsZXJzIHx8IHt9O1xuXHRcdFx0Y29uc3Qgc2FtcGxlciA9IHNhbXBsZXJzWyB0ZXh0dXJlRGVmLnNhbXBsZXIgXSB8fCB7fTtcblxuXHRcdFx0dGV4dHVyZS5tYWdGaWx0ZXIgPSBXRUJHTF9GSUxURVJTWyBzYW1wbGVyLm1hZ0ZpbHRlciBdIHx8IExpbmVhckZpbHRlcjtcblx0XHRcdHRleHR1cmUubWluRmlsdGVyID0gV0VCR0xfRklMVEVSU1sgc2FtcGxlci5taW5GaWx0ZXIgXSB8fCBMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXI7XG5cdFx0XHR0ZXh0dXJlLndyYXBTID0gV0VCR0xfV1JBUFBJTkdTWyBzYW1wbGVyLndyYXBTIF0gfHwgUmVwZWF0V3JhcHBpbmc7XG5cdFx0XHR0ZXh0dXJlLndyYXBUID0gV0VCR0xfV1JBUFBJTkdTWyBzYW1wbGVyLndyYXBUIF0gfHwgUmVwZWF0V3JhcHBpbmc7XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCB0ZXh0dXJlLCB7XG5cdFx0XHRcdHR5cGU6ICd0ZXh0dXJlcycsXG5cdFx0XHRcdGluZGV4OiB0ZXh0dXJlSW5kZXhcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBc3luY2hyb25vdXNseSBhc3NpZ25zIGEgdGV4dHVyZSB0byB0aGUgZ2l2ZW4gbWF0ZXJpYWwgcGFyYW1ldGVycy5cblx0ICogQHBhcmFtIHtPYmplY3R9IG1hdGVyaWFsUGFyYW1zXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtYXBOYW1lXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtYXBEZWZcblx0ICogQHJldHVybiB7UHJvbWlzZX1cblx0ICovXG5cdGFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCBtYXBOYW1lLCBtYXBEZWYgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ3RleHR1cmUnLCBtYXBEZWYuaW5kZXggKS50aGVuKCBmdW5jdGlvbiAoIHRleHR1cmUgKSB7XG5cblx0XHRcdC8vIE1hdGVyaWFscyBzYW1wbGUgYW9NYXAgZnJvbSBVViBzZXQgMSBhbmQgb3RoZXIgbWFwcyBmcm9tIFVWIHNldCAwIC0gdGhpcyBjYW4ndCBiZSBjb25maWd1cmVkXG5cdFx0XHQvLyBIb3dldmVyLCB3ZSB3aWxsIGNvcHkgVVYgc2V0IDAgdG8gVVYgc2V0IDEgb24gZGVtYW5kIGZvciBhb01hcFxuXHRcdFx0aWYgKCBtYXBEZWYudGV4Q29vcmQgIT09IHVuZGVmaW5lZCAmJiBtYXBEZWYudGV4Q29vcmQgIT0gMCAmJiAhICggbWFwTmFtZSA9PT0gJ2FvTWFwJyAmJiBtYXBEZWYudGV4Q29vcmQgPT0gMSApICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IEN1c3RvbSBVViBzZXQgJyArIG1hcERlZi50ZXhDb29yZCArICcgZm9yIHRleHR1cmUgJyArIG1hcE5hbWUgKyAnIG5vdCB5ZXQgc3VwcG9ydGVkLicgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHBhcnNlci5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STSBdICkge1xuXG5cdFx0XHRcdGNvbnN0IHRyYW5zZm9ybSA9IG1hcERlZi5leHRlbnNpb25zICE9PSB1bmRlZmluZWQgPyBtYXBEZWYuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk0gXSA6IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRpZiAoIHRyYW5zZm9ybSApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGdsdGZSZWZlcmVuY2UgPSBwYXJzZXIuYXNzb2NpYXRpb25zLmdldCggdGV4dHVyZSApO1xuXHRcdFx0XHRcdHRleHR1cmUgPSBwYXJzZXIuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk0gXS5leHRlbmRUZXh0dXJlKCB0ZXh0dXJlLCB0cmFuc2Zvcm0gKTtcblx0XHRcdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggdGV4dHVyZSwgZ2x0ZlJlZmVyZW5jZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbFBhcmFtc1sgbWFwTmFtZSBdID0gdGV4dHVyZTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEFzc2lnbnMgZmluYWwgbWF0ZXJpYWwgdG8gYSBNZXNoLCBMaW5lLCBvciBQb2ludHMgaW5zdGFuY2UuIFRoZSBpbnN0YW5jZVxuXHQgKiBhbHJlYWR5IGhhcyBhIG1hdGVyaWFsIChnZW5lcmF0ZWQgZnJvbSB0aGUgZ2xURiBtYXRlcmlhbCBvcHRpb25zIGFsb25lKVxuXHQgKiBidXQgcmV1c2Ugb2YgdGhlIHNhbWUgZ2xURiBtYXRlcmlhbCBtYXkgcmVxdWlyZSBtdWx0aXBsZSB0aHJlZWpzIG1hdGVyaWFsc1xuXHQgKiB0byBhY2NvbW1vZGF0ZSBkaWZmZXJlbnQgcHJpbWl0aXZlIHR5cGVzLCBkZWZpbmVzLCBldGMuIE5ldyBtYXRlcmlhbHMgd2lsbFxuXHQgKiBiZSBjcmVhdGVkIGlmIG5lY2Vzc2FyeSwgYW5kIHJldXNlZCBmcm9tIGEgY2FjaGUuXG5cdCAqIEBwYXJhbSAge09iamVjdDNEfSBtZXNoIE1lc2gsIExpbmUsIG9yIFBvaW50cyBpbnN0YW5jZS5cblx0ICovXG5cdGFzc2lnbkZpbmFsTWF0ZXJpYWwoIG1lc2ggKSB7XG5cblx0XHRjb25zdCBnZW9tZXRyeSA9IG1lc2guZ2VvbWV0cnk7XG5cdFx0bGV0IG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbDtcblxuXHRcdGNvbnN0IHVzZVZlcnRleFRhbmdlbnRzID0gZ2VvbWV0cnkuYXR0cmlidXRlcy50YW5nZW50ICE9PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgdXNlVmVydGV4Q29sb3JzID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5jb2xvciAhPT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHVzZUZsYXRTaGFkaW5nID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5ub3JtYWwgPT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCB1c2VTa2lubmluZyA9IG1lc2guaXNTa2lubmVkTWVzaCA9PT0gdHJ1ZTtcblx0XHRjb25zdCB1c2VNb3JwaFRhcmdldHMgPSBPYmplY3Qua2V5cyggZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzICkubGVuZ3RoID4gMDtcblx0XHRjb25zdCB1c2VNb3JwaE5vcm1hbHMgPSB1c2VNb3JwaFRhcmdldHMgJiYgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLm5vcm1hbCAhPT0gdW5kZWZpbmVkO1xuXG5cdFx0aWYgKCBtZXNoLmlzUG9pbnRzICkge1xuXG5cdFx0XHRjb25zdCBjYWNoZUtleSA9ICdQb2ludHNNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZDtcblxuXHRcdFx0bGV0IHBvaW50c01hdGVyaWFsID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XG5cblx0XHRcdGlmICggISBwb2ludHNNYXRlcmlhbCApIHtcblxuXHRcdFx0XHRwb2ludHNNYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCgpO1xuXHRcdFx0XHRNYXRlcmlhbC5wcm90b3R5cGUuY29weS5jYWxsKCBwb2ludHNNYXRlcmlhbCwgbWF0ZXJpYWwgKTtcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwuY29sb3IuY29weSggbWF0ZXJpYWwuY29sb3IgKTtcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwubWFwID0gbWF0ZXJpYWwubWFwO1xuXHRcdFx0XHRwb2ludHNNYXRlcmlhbC5zaXplQXR0ZW51YXRpb24gPSBmYWxzZTsgLy8gZ2xURiBzcGVjIHNheXMgcG9pbnRzIHNob3VsZCBiZSAxcHhcblxuXHRcdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIHBvaW50c01hdGVyaWFsICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWwgPSBwb2ludHNNYXRlcmlhbDtcblxuXHRcdH0gZWxzZSBpZiAoIG1lc2guaXNMaW5lICkge1xuXG5cdFx0XHRjb25zdCBjYWNoZUtleSA9ICdMaW5lQmFzaWNNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZDtcblxuXHRcdFx0bGV0IGxpbmVNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0XHRpZiAoICEgbGluZU1hdGVyaWFsICkge1xuXG5cdFx0XHRcdGxpbmVNYXRlcmlhbCA9IG5ldyBMaW5lQmFzaWNNYXRlcmlhbCgpO1xuXHRcdFx0XHRNYXRlcmlhbC5wcm90b3R5cGUuY29weS5jYWxsKCBsaW5lTWF0ZXJpYWwsIG1hdGVyaWFsICk7XG5cdFx0XHRcdGxpbmVNYXRlcmlhbC5jb2xvci5jb3B5KCBtYXRlcmlhbC5jb2xvciApO1xuXG5cdFx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgbGluZU1hdGVyaWFsICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWwgPSBsaW5lTWF0ZXJpYWw7XG5cblx0XHR9XG5cblx0XHQvLyBDbG9uZSB0aGUgbWF0ZXJpYWwgaWYgaXQgd2lsbCBiZSBtb2RpZmllZFxuXHRcdGlmICggdXNlVmVydGV4VGFuZ2VudHMgfHwgdXNlVmVydGV4Q29sb3JzIHx8IHVzZUZsYXRTaGFkaW5nIHx8IHVzZVNraW5uaW5nIHx8IHVzZU1vcnBoVGFyZ2V0cyApIHtcblxuXHRcdFx0bGV0IGNhY2hlS2V5ID0gJ0Nsb25lZE1hdGVyaWFsOicgKyBtYXRlcmlhbC51dWlkICsgJzonO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsLmlzR0xURlNwZWN1bGFyR2xvc3NpbmVzc01hdGVyaWFsICkgY2FjaGVLZXkgKz0gJ3NwZWN1bGFyLWdsb3NzaW5lc3M6Jztcblx0XHRcdGlmICggdXNlU2tpbm5pbmcgKSBjYWNoZUtleSArPSAnc2tpbm5pbmc6Jztcblx0XHRcdGlmICggdXNlVmVydGV4VGFuZ2VudHMgKSBjYWNoZUtleSArPSAndmVydGV4LXRhbmdlbnRzOic7XG5cdFx0XHRpZiAoIHVzZVZlcnRleENvbG9ycyApIGNhY2hlS2V5ICs9ICd2ZXJ0ZXgtY29sb3JzOic7XG5cdFx0XHRpZiAoIHVzZUZsYXRTaGFkaW5nICkgY2FjaGVLZXkgKz0gJ2ZsYXQtc2hhZGluZzonO1xuXHRcdFx0aWYgKCB1c2VNb3JwaFRhcmdldHMgKSBjYWNoZUtleSArPSAnbW9ycGgtdGFyZ2V0czonO1xuXHRcdFx0aWYgKCB1c2VNb3JwaE5vcm1hbHMgKSBjYWNoZUtleSArPSAnbW9ycGgtbm9ybWFsczonO1xuXG5cdFx0XHRsZXQgY2FjaGVkTWF0ZXJpYWwgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdFx0aWYgKCAhIGNhY2hlZE1hdGVyaWFsICkge1xuXG5cdFx0XHRcdGNhY2hlZE1hdGVyaWFsID0gbWF0ZXJpYWwuY2xvbmUoKTtcblxuXHRcdFx0XHRpZiAoIHVzZVNraW5uaW5nICkgY2FjaGVkTWF0ZXJpYWwuc2tpbm5pbmcgPSB0cnVlO1xuXHRcdFx0XHRpZiAoIHVzZVZlcnRleENvbG9ycyApIGNhY2hlZE1hdGVyaWFsLnZlcnRleENvbG9ycyA9IHRydWU7XG5cdFx0XHRcdGlmICggdXNlRmxhdFNoYWRpbmcgKSBjYWNoZWRNYXRlcmlhbC5mbGF0U2hhZGluZyA9IHRydWU7XG5cdFx0XHRcdGlmICggdXNlTW9ycGhUYXJnZXRzICkgY2FjaGVkTWF0ZXJpYWwubW9ycGhUYXJnZXRzID0gdHJ1ZTtcblx0XHRcdFx0aWYgKCB1c2VNb3JwaE5vcm1hbHMgKSBjYWNoZWRNYXRlcmlhbC5tb3JwaE5vcm1hbHMgPSB0cnVlO1xuXG5cdFx0XHRcdGlmICggdXNlVmVydGV4VGFuZ2VudHMgKSB7XG5cblx0XHRcdFx0XHRjYWNoZWRNYXRlcmlhbC52ZXJ0ZXhUYW5nZW50cyA9IHRydWU7XG5cblx0XHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xMTQzOCNpc3N1ZWNvbW1lbnQtNTA3MDAzOTk1XG5cdFx0XHRcdFx0aWYgKCBjYWNoZWRNYXRlcmlhbC5ub3JtYWxTY2FsZSApIGNhY2hlZE1hdGVyaWFsLm5vcm1hbFNjYWxlLnkgKj0gLSAxO1xuXHRcdFx0XHRcdGlmICggY2FjaGVkTWF0ZXJpYWwuY2xlYXJjb2F0Tm9ybWFsU2NhbGUgKSBjYWNoZWRNYXRlcmlhbC5jbGVhcmNvYXROb3JtYWxTY2FsZS55ICo9IC0gMTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBjYWNoZWRNYXRlcmlhbCApO1xuXG5cdFx0XHRcdHRoaXMuYXNzb2NpYXRpb25zLnNldCggY2FjaGVkTWF0ZXJpYWwsIHRoaXMuYXNzb2NpYXRpb25zLmdldCggbWF0ZXJpYWwgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsID0gY2FjaGVkTWF0ZXJpYWw7XG5cblx0XHR9XG5cblx0XHQvLyB3b3JrYXJvdW5kcyBmb3IgbWVzaCBhbmQgZ2VvbWV0cnlcblxuXHRcdGlmICggbWF0ZXJpYWwuYW9NYXAgJiYgZ2VvbWV0cnkuYXR0cmlidXRlcy51djIgPT09IHVuZGVmaW5lZCAmJiBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZSggJ3V2MicsIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYgKTtcblxuXHRcdH1cblxuXHRcdG1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbDtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCAvKiBtYXRlcmlhbEluZGV4ICovICkge1xuXG5cdFx0cmV0dXJuIE1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNtYXRlcmlhbHNcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1hdGVyaWFsSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxNYXRlcmlhbD59XG5cdCAqL1xuXHRsb2FkTWF0ZXJpYWwoIG1hdGVyaWFsSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IGpzb24ubWF0ZXJpYWxzWyBtYXRlcmlhbEluZGV4IF07XG5cblx0XHRsZXQgbWF0ZXJpYWxUeXBlO1xuXHRcdGNvbnN0IG1hdGVyaWFsUGFyYW1zID0ge307XG5cdFx0Y29uc3QgbWF0ZXJpYWxFeHRlbnNpb25zID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9ucyB8fCB7fTtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGlmICggbWF0ZXJpYWxFeHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MgXSApIHtcblxuXHRcdFx0Y29uc3Qgc2dFeHRlbnNpb24gPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MgXTtcblx0XHRcdG1hdGVyaWFsVHlwZSA9IHNnRXh0ZW5zaW9uLmdldE1hdGVyaWFsVHlwZSgpO1xuXHRcdFx0cGVuZGluZy5wdXNoKCBzZ0V4dGVuc2lvbi5leHRlbmRQYXJhbXMoIG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyICkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIG1hdGVyaWFsRXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUIF0gKSB7XG5cblx0XHRcdGNvbnN0IGttdUV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVCBdO1xuXHRcdFx0bWF0ZXJpYWxUeXBlID0ga211RXh0ZW5zaW9uLmdldE1hdGVyaWFsVHlwZSgpO1xuXHRcdFx0cGVuZGluZy5wdXNoKCBrbXVFeHRlbnNpb24uZXh0ZW5kUGFyYW1zKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBTcGVjaWZpY2F0aW9uOlxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI21ldGFsbGljLXJvdWdobmVzcy1tYXRlcmlhbFxuXG5cdFx0XHRjb25zdCBtZXRhbGxpY1JvdWdobmVzcyA9IG1hdGVyaWFsRGVmLnBick1ldGFsbGljUm91Z2huZXNzIHx8IHt9O1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvciA9IG5ldyBDb2xvciggMS4wLCAxLjAsIDEuMCApO1xuXHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IDEuMDtcblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IgKSApIHtcblxuXHRcdFx0XHRjb25zdCBhcnJheSA9IG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvcjtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoIGFycmF5ICk7XG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSBhcnJheVsgMyBdO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMubWV0YWxuZXNzID0gbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNGYWN0b3IgIT09IHVuZGVmaW5lZCA/IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljRmFjdG9yIDogMS4wO1xuXHRcdFx0bWF0ZXJpYWxQYXJhbXMucm91Z2huZXNzID0gbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzRmFjdG9yICE9PSB1bmRlZmluZWQgPyBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3NGYWN0b3IgOiAxLjA7XG5cblx0XHRcdGlmICggbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtZXRhbG5lc3NNYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgKSApO1xuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ3JvdWdobmVzc01hcCcsIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWxUeXBlID0gdGhpcy5faW52b2tlT25lKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmdldE1hdGVyaWFsVHlwZSAmJiBleHQuZ2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBQcm9taXNlLmFsbCggdGhpcy5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmV4dGVuZE1hdGVyaWFsUGFyYW1zICYmIGV4dC5leHRlbmRNYXRlcmlhbFBhcmFtcyggbWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMgKTtcblxuXHRcdFx0fSApICkgKTtcblxuXHRcdH1cblxuXHRcdGlmICggbWF0ZXJpYWxEZWYuZG91YmxlU2lkZWQgPT09IHRydWUgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnNpZGUgPSBEb3VibGVTaWRlO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgYWxwaGFNb2RlID0gbWF0ZXJpYWxEZWYuYWxwaGFNb2RlIHx8IEFMUEhBX01PREVTLk9QQVFVRTtcblxuXHRcdGlmICggYWxwaGFNb2RlID09PSBBTFBIQV9NT0RFUy5CTEVORCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMudHJhbnNwYXJlbnQgPSB0cnVlO1xuXG5cdFx0XHQvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE3NzA2XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5kZXB0aFdyaXRlID0gZmFsc2U7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy50cmFuc3BhcmVudCA9IGZhbHNlO1xuXG5cdFx0XHRpZiAoIGFscGhhTW9kZSA9PT0gQUxQSEFfTU9ERVMuTUFTSyApIHtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5hbHBoYVRlc3QgPSBtYXRlcmlhbERlZi5hbHBoYUN1dG9mZiAhPT0gdW5kZWZpbmVkID8gbWF0ZXJpYWxEZWYuYWxwaGFDdXRvZmYgOiAwLjU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICggbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZSAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbm9ybWFsTWFwJywgbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZSApICk7XG5cblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzExNDM4I2lzc3VlY29tbWVudC01MDcwMDM5OTVcblx0XHRcdG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlID0gbmV3IFZlY3RvcjIoIDEsIC0gMSApO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZS5zZXQoIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUuc2NhbGUsIC0gbWF0ZXJpYWxEZWYubm9ybWFsVGV4dHVyZS5zY2FsZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2FvTWFwJywgbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZSApICk7XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmFvTWFwSW50ZW5zaXR5ID0gbWF0ZXJpYWxEZWYub2NjbHVzaW9uVGV4dHVyZS5zdHJlbmd0aDtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5lbWlzc2l2ZUZhY3RvciAhPT0gdW5kZWZpbmVkICYmIG1hdGVyaWFsVHlwZSAhPT0gTWVzaEJhc2ljTWF0ZXJpYWwgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlID0gbmV3IENvbG9yKCkuZnJvbUFycmF5KCBtYXRlcmlhbERlZi5lbWlzc2l2ZUZhY3RvciApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5lbWlzc2l2ZVRleHR1cmUgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ2VtaXNzaXZlTWFwJywgbWF0ZXJpYWxEZWYuZW1pc3NpdmVUZXh0dXJlICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0bGV0IG1hdGVyaWFsO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsVHlwZSA9PT0gR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwgKSB7XG5cblx0XHRcdFx0bWF0ZXJpYWwgPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MgXS5jcmVhdGVNYXRlcmlhbCggbWF0ZXJpYWxQYXJhbXMgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRtYXRlcmlhbCA9IG5ldyBtYXRlcmlhbFR5cGUoIG1hdGVyaWFsUGFyYW1zICk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5uYW1lICkgbWF0ZXJpYWwubmFtZSA9IG1hdGVyaWFsRGVmLm5hbWU7XG5cblx0XHRcdC8vIGJhc2VDb2xvclRleHR1cmUsIGVtaXNzaXZlVGV4dHVyZSwgYW5kIHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgdXNlIHNSR0IgZW5jb2RpbmcuXG5cdFx0XHRpZiAoIG1hdGVyaWFsLm1hcCApIG1hdGVyaWFsLm1hcC5lbmNvZGluZyA9IHNSR0JFbmNvZGluZztcblx0XHRcdGlmICggbWF0ZXJpYWwuZW1pc3NpdmVNYXAgKSBtYXRlcmlhbC5lbWlzc2l2ZU1hcC5lbmNvZGluZyA9IHNSR0JFbmNvZGluZztcblxuXHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggbWF0ZXJpYWwsIG1hdGVyaWFsRGVmICk7XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCBtYXRlcmlhbCwgeyB0eXBlOiAnbWF0ZXJpYWxzJywgaW5kZXg6IG1hdGVyaWFsSW5kZXggfSApO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIG1hdGVyaWFsLCBtYXRlcmlhbERlZiApO1xuXG5cdFx0XHRyZXR1cm4gbWF0ZXJpYWw7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKiBXaGVuIE9iamVjdDNEIGluc3RhbmNlcyBhcmUgdGFyZ2V0ZWQgYnkgYW5pbWF0aW9uLCB0aGV5IG5lZWQgdW5pcXVlIG5hbWVzLiAqL1xuXHRjcmVhdGVVbmlxdWVOYW1lKCBvcmlnaW5hbE5hbWUgKSB7XG5cblx0XHRjb25zdCBzYW5pdGl6ZWROYW1lID0gUHJvcGVydHlCaW5kaW5nLnNhbml0aXplTm9kZU5hbWUoIG9yaWdpbmFsTmFtZSB8fCAnJyApO1xuXG5cdFx0bGV0IG5hbWUgPSBzYW5pdGl6ZWROYW1lO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAxOyB0aGlzLm5vZGVOYW1lc1VzZWRbIG5hbWUgXTsgKysgaSApIHtcblxuXHRcdFx0bmFtZSA9IHNhbml0aXplZE5hbWUgKyAnXycgKyBpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5ub2RlTmFtZXNVc2VkWyBuYW1lIF0gPSB0cnVlO1xuXG5cdFx0cmV0dXJuIG5hbWU7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2dlb21ldHJ5XG5cdCAqXG5cdCAqIENyZWF0ZXMgQnVmZmVyR2VvbWV0cmllcyBmcm9tIHByaW1pdGl2ZXMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXk8R0xURi5QcmltaXRpdmU+fSBwcmltaXRpdmVzXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXk8QnVmZmVyR2VvbWV0cnk+Pn1cblx0ICovXG5cdGxvYWRHZW9tZXRyaWVzKCBwcmltaXRpdmVzICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXHRcdGNvbnN0IGNhY2hlID0gdGhpcy5wcmltaXRpdmVDYWNoZTtcblxuXHRcdGZ1bmN0aW9uIGNyZWF0ZURyYWNvUHJpbWl0aXZlKCBwcmltaXRpdmUgKSB7XG5cblx0XHRcdHJldHVybiBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OIF1cblx0XHRcdFx0LmRlY29kZVByaW1pdGl2ZSggcHJpbWl0aXZlLCBwYXJzZXIgKVxuXHRcdFx0XHQudGhlbiggZnVuY3Rpb24gKCBnZW9tZXRyeSApIHtcblxuXHRcdFx0XHRcdHJldHVybiBhZGRQcmltaXRpdmVBdHRyaWJ1dGVzKCBnZW9tZXRyeSwgcHJpbWl0aXZlLCBwYXJzZXIgKTtcblxuXHRcdFx0XHR9ICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gcHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgcHJpbWl0aXZlID0gcHJpbWl0aXZlc1sgaSBdO1xuXHRcdFx0Y29uc3QgY2FjaGVLZXkgPSBjcmVhdGVQcmltaXRpdmVLZXkoIHByaW1pdGl2ZSApO1xuXG5cdFx0XHQvLyBTZWUgaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIHRoaXMgZ2VvbWV0cnlcblx0XHRcdGNvbnN0IGNhY2hlZCA9IGNhY2hlWyBjYWNoZUtleSBdO1xuXG5cdFx0XHRpZiAoIGNhY2hlZCApIHtcblxuXHRcdFx0XHQvLyBVc2UgdGhlIGNhY2hlZCBnZW9tZXRyeSBpZiBpdCBleGlzdHNcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBjYWNoZWQucHJvbWlzZSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGxldCBnZW9tZXRyeVByb21pc2U7XG5cblx0XHRcdFx0aWYgKCBwcmltaXRpdmUuZXh0ZW5zaW9ucyAmJiBwcmltaXRpdmUuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTiBdICkge1xuXG5cdFx0XHRcdFx0Ly8gVXNlIERSQUNPIGdlb21ldHJ5IGlmIGF2YWlsYWJsZVxuXHRcdFx0XHRcdGdlb21ldHJ5UHJvbWlzZSA9IGNyZWF0ZURyYWNvUHJpbWl0aXZlKCBwcmltaXRpdmUgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBnZW9tZXRyeVxuXHRcdFx0XHRcdGdlb21ldHJ5UHJvbWlzZSA9IGFkZFByaW1pdGl2ZUF0dHJpYnV0ZXMoIG5ldyBCdWZmZXJHZW9tZXRyeSgpLCBwcmltaXRpdmUsIHBhcnNlciApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDYWNoZSB0aGlzIGdlb21ldHJ5XG5cdFx0XHRcdGNhY2hlWyBjYWNoZUtleSBdID0geyBwcmltaXRpdmU6IHByaW1pdGl2ZSwgcHJvbWlzZTogZ2VvbWV0cnlQcm9taXNlIH07XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBnZW9tZXRyeVByb21pc2UgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI21lc2hlc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gbWVzaEluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8R3JvdXB8TWVzaHxTa2lubmVkTWVzaD59XG5cdCAqL1xuXHRsb2FkTWVzaCggbWVzaEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cblx0XHRjb25zdCBtZXNoRGVmID0ganNvbi5tZXNoZXNbIG1lc2hJbmRleCBdO1xuXHRcdGNvbnN0IHByaW1pdGl2ZXMgPSBtZXNoRGVmLnByaW1pdGl2ZXM7XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gcHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgbWF0ZXJpYWwgPSBwcmltaXRpdmVzWyBpIF0ubWF0ZXJpYWwgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNyZWF0ZURlZmF1bHRNYXRlcmlhbCggdGhpcy5jYWNoZSApXG5cdFx0XHRcdDogdGhpcy5nZXREZXBlbmRlbmN5KCAnbWF0ZXJpYWwnLCBwcmltaXRpdmVzWyBpIF0ubWF0ZXJpYWwgKTtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBtYXRlcmlhbCApO1xuXG5cdFx0fVxuXG5cdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIubG9hZEdlb21ldHJpZXMoIHByaW1pdGl2ZXMgKSApO1xuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCByZXN1bHRzICkge1xuXG5cdFx0XHRjb25zdCBtYXRlcmlhbHMgPSByZXN1bHRzLnNsaWNlKCAwLCByZXN1bHRzLmxlbmd0aCAtIDEgKTtcblx0XHRcdGNvbnN0IGdlb21ldHJpZXMgPSByZXN1bHRzWyByZXN1bHRzLmxlbmd0aCAtIDEgXTtcblxuXHRcdFx0Y29uc3QgbWVzaGVzID0gW107XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBnZW9tZXRyaWVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGNvbnN0IGdlb21ldHJ5ID0gZ2VvbWV0cmllc1sgaSBdO1xuXHRcdFx0XHRjb25zdCBwcmltaXRpdmUgPSBwcmltaXRpdmVzWyBpIF07XG5cblx0XHRcdFx0Ly8gMS4gY3JlYXRlIE1lc2hcblxuXHRcdFx0XHRsZXQgbWVzaDtcblxuXHRcdFx0XHRjb25zdCBtYXRlcmlhbCA9IG1hdGVyaWFsc1sgaSBdO1xuXG5cdFx0XHRcdGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRVMgfHxcblx0XHRcdFx0XHRcdHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfU1RSSVAgfHxcblx0XHRcdFx0XHRcdHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfRkFOIHx8XG5cdFx0XHRcdFx0XHRwcmltaXRpdmUubW9kZSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0Ly8gLmlzU2tpbm5lZE1lc2ggaXNuJ3QgaW4gZ2xURiBzcGVjLiBTZWUgLl9tYXJrRGVmcygpXG5cdFx0XHRcdFx0bWVzaCA9IG1lc2hEZWYuaXNTa2lubmVkTWVzaCA9PT0gdHJ1ZVxuXHRcdFx0XHRcdFx0PyBuZXcgU2tpbm5lZE1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApXG5cdFx0XHRcdFx0XHQ6IG5ldyBNZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHRcdGlmICggbWVzaC5pc1NraW5uZWRNZXNoID09PSB0cnVlICYmICEgbWVzaC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnNraW5XZWlnaHQubm9ybWFsaXplZCApIHtcblxuXHRcdFx0XHRcdFx0Ly8gd2Ugbm9ybWFsaXplIGZsb2F0aW5nIHBvaW50IHNraW4gd2VpZ2h0IGFycmF5IHRvIGZpeCBtYWxmb3JtZWQgYXNzZXRzIChzZWUgIzE1MzE5KVxuXHRcdFx0XHRcdFx0Ly8gaXQncyBpbXBvcnRhbnQgdG8gc2tpcCB0aGlzIGZvciBub24tZmxvYXQzMiBkYXRhIHNpbmNlIG5vcm1hbGl6ZVNraW5XZWlnaHRzIGFzc3VtZXMgbm9uLW5vcm1hbGl6ZWQgaW5wdXRzXG5cdFx0XHRcdFx0XHRtZXNoLm5vcm1hbGl6ZVNraW5XZWlnaHRzKCk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfU1RSSVAgKSB7XG5cblx0XHRcdFx0XHRcdG1lc2guZ2VvbWV0cnkgPSB0b1RyaWFuZ2xlc0RyYXdNb2RlKCBtZXNoLmdlb21ldHJ5LCBUcmlhbmdsZVN0cmlwRHJhd01vZGUgKTtcblxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfRkFOICkge1xuXG5cdFx0XHRcdFx0XHRtZXNoLmdlb21ldHJ5ID0gdG9UcmlhbmdsZXNEcmF3TW9kZSggbWVzaC5nZW9tZXRyeSwgVHJpYW5nbGVGYW5EcmF3TW9kZSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuTElORVMgKSB7XG5cblx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmVTZWdtZW50cyggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5MSU5FX1NUUklQICkge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBMaW5lKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLkxJTkVfTE9PUCApIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgTGluZUxvb3AoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuUE9JTlRTICkge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBQb2ludHMoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBQcmltaXRpdmUgbW9kZSB1bnN1cHBvcnRlZDogJyArIHByaW1pdGl2ZS5tb2RlICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggT2JqZWN0LmtleXMoIG1lc2guZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzICkubGVuZ3RoID4gMCApIHtcblxuXHRcdFx0XHRcdHVwZGF0ZU1vcnBoVGFyZ2V0cyggbWVzaCwgbWVzaERlZiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtZXNoLm5hbWUgPSBwYXJzZXIuY3JlYXRlVW5pcXVlTmFtZSggbWVzaERlZi5uYW1lIHx8ICggJ21lc2hfJyArIG1lc2hJbmRleCApICk7XG5cblx0XHRcdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggbWVzaCwgbWVzaERlZiApO1xuXG5cdFx0XHRcdGlmICggcHJpbWl0aXZlLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIG1lc2gsIHByaW1pdGl2ZSApO1xuXG5cdFx0XHRcdHBhcnNlci5hc3NpZ25GaW5hbE1hdGVyaWFsKCBtZXNoICk7XG5cblx0XHRcdFx0bWVzaGVzLnB1c2goIG1lc2ggKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG1lc2hlcy5sZW5ndGggPT09IDEgKSB7XG5cblx0XHRcdFx0cmV0dXJuIG1lc2hlc1sgMCBdO1xuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwKCk7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBtZXNoZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Z3JvdXAuYWRkKCBtZXNoZXNbIGkgXSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBncm91cDtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNjYW1lcmFzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjYW1lcmFJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPFRIUkVFLkNhbWVyYT59XG5cdCAqL1xuXHRsb2FkQ2FtZXJhKCBjYW1lcmFJbmRleCApIHtcblxuXHRcdGxldCBjYW1lcmE7XG5cdFx0Y29uc3QgY2FtZXJhRGVmID0gdGhpcy5qc29uLmNhbWVyYXNbIGNhbWVyYUluZGV4IF07XG5cdFx0Y29uc3QgcGFyYW1zID0gY2FtZXJhRGVmWyBjYW1lcmFEZWYudHlwZSBdO1xuXG5cdFx0aWYgKCAhIHBhcmFtcyApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBjYW1lcmEgcGFyYW1ldGVycy4nICk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHR9XG5cblx0XHRpZiAoIGNhbWVyYURlZi50eXBlID09PSAncGVyc3BlY3RpdmUnICkge1xuXG5cdFx0XHRjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoIE1hdGhVdGlscy5yYWRUb0RlZyggcGFyYW1zLnlmb3YgKSwgcGFyYW1zLmFzcGVjdFJhdGlvIHx8IDEsIHBhcmFtcy56bmVhciB8fCAxLCBwYXJhbXMuemZhciB8fCAyZTYgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGNhbWVyYURlZi50eXBlID09PSAnb3J0aG9ncmFwaGljJyApIHtcblxuXHRcdFx0Y2FtZXJhID0gbmV3IE9ydGhvZ3JhcGhpY0NhbWVyYSggLSBwYXJhbXMueG1hZywgcGFyYW1zLnhtYWcsIHBhcmFtcy55bWFnLCAtIHBhcmFtcy55bWFnLCBwYXJhbXMuem5lYXIsIHBhcmFtcy56ZmFyICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGNhbWVyYURlZi5uYW1lICkgY2FtZXJhLm5hbWUgPSB0aGlzLmNyZWF0ZVVuaXF1ZU5hbWUoIGNhbWVyYURlZi5uYW1lICk7XG5cblx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBjYW1lcmEsIGNhbWVyYURlZiApO1xuXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSggY2FtZXJhICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2tpbnNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNraW5JbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG5cdCAqL1xuXHRsb2FkU2tpbiggc2tpbkluZGV4ICkge1xuXG5cdFx0Y29uc3Qgc2tpbkRlZiA9IHRoaXMuanNvbi5za2luc1sgc2tpbkluZGV4IF07XG5cblx0XHRjb25zdCBza2luRW50cnkgPSB7IGpvaW50czogc2tpbkRlZi5qb2ludHMgfTtcblxuXHRcdGlmICggc2tpbkRlZi5pbnZlcnNlQmluZE1hdHJpY2VzID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIHNraW5FbnRyeSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgc2tpbkRlZi5pbnZlcnNlQmluZE1hdHJpY2VzICkudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvciApIHtcblxuXHRcdFx0c2tpbkVudHJ5LmludmVyc2VCaW5kTWF0cmljZXMgPSBhY2Nlc3NvcjtcblxuXHRcdFx0cmV0dXJuIHNraW5FbnRyeTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNhbmltYXRpb25zXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBhbmltYXRpb25JbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFuaW1hdGlvbkNsaXA+fVxuXHQgKi9cblx0bG9hZEFuaW1hdGlvbiggYW5pbWF0aW9uSW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXG5cdFx0Y29uc3QgYW5pbWF0aW9uRGVmID0ganNvbi5hbmltYXRpb25zWyBhbmltYXRpb25JbmRleCBdO1xuXG5cdFx0Y29uc3QgcGVuZGluZ05vZGVzID0gW107XG5cdFx0Y29uc3QgcGVuZGluZ0lucHV0QWNjZXNzb3JzID0gW107XG5cdFx0Y29uc3QgcGVuZGluZ091dHB1dEFjY2Vzc29ycyA9IFtdO1xuXHRcdGNvbnN0IHBlbmRpbmdTYW1wbGVycyA9IFtdO1xuXHRcdGNvbnN0IHBlbmRpbmdUYXJnZXRzID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gYW5pbWF0aW9uRGVmLmNoYW5uZWxzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCBjaGFubmVsID0gYW5pbWF0aW9uRGVmLmNoYW5uZWxzWyBpIF07XG5cdFx0XHRjb25zdCBzYW1wbGVyID0gYW5pbWF0aW9uRGVmLnNhbXBsZXJzWyBjaGFubmVsLnNhbXBsZXIgXTtcblx0XHRcdGNvbnN0IHRhcmdldCA9IGNoYW5uZWwudGFyZ2V0O1xuXHRcdFx0Y29uc3QgbmFtZSA9IHRhcmdldC5ub2RlICE9PSB1bmRlZmluZWQgPyB0YXJnZXQubm9kZSA6IHRhcmdldC5pZDsgLy8gTk9URTogdGFyZ2V0LmlkIGlzIGRlcHJlY2F0ZWQuXG5cdFx0XHRjb25zdCBpbnB1dCA9IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzICE9PSB1bmRlZmluZWQgPyBhbmltYXRpb25EZWYucGFyYW1ldGVyc1sgc2FtcGxlci5pbnB1dCBdIDogc2FtcGxlci5pbnB1dDtcblx0XHRcdGNvbnN0IG91dHB1dCA9IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzICE9PSB1bmRlZmluZWQgPyBhbmltYXRpb25EZWYucGFyYW1ldGVyc1sgc2FtcGxlci5vdXRwdXQgXSA6IHNhbXBsZXIub3V0cHV0O1xuXG5cdFx0XHRwZW5kaW5nTm9kZXMucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnbm9kZScsIG5hbWUgKSApO1xuXHRcdFx0cGVuZGluZ0lucHV0QWNjZXNzb3JzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2FjY2Vzc29yJywgaW5wdXQgKSApO1xuXHRcdFx0cGVuZGluZ091dHB1dEFjY2Vzc29ycy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIG91dHB1dCApICk7XG5cdFx0XHRwZW5kaW5nU2FtcGxlcnMucHVzaCggc2FtcGxlciApO1xuXHRcdFx0cGVuZGluZ1RhcmdldHMucHVzaCggdGFyZ2V0ICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFtcblxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdOb2RlcyApLFxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdJbnB1dEFjY2Vzc29ycyApLFxuXHRcdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdPdXRwdXRBY2Nlc3NvcnMgKSxcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nU2FtcGxlcnMgKSxcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nVGFyZ2V0cyApXG5cblx0XHRdICkudGhlbiggZnVuY3Rpb24gKCBkZXBlbmRlbmNpZXMgKSB7XG5cblx0XHRcdGNvbnN0IG5vZGVzID0gZGVwZW5kZW5jaWVzWyAwIF07XG5cdFx0XHRjb25zdCBpbnB1dEFjY2Vzc29ycyA9IGRlcGVuZGVuY2llc1sgMSBdO1xuXHRcdFx0Y29uc3Qgb3V0cHV0QWNjZXNzb3JzID0gZGVwZW5kZW5jaWVzWyAyIF07XG5cdFx0XHRjb25zdCBzYW1wbGVycyA9IGRlcGVuZGVuY2llc1sgMyBdO1xuXHRcdFx0Y29uc3QgdGFyZ2V0cyA9IGRlcGVuZGVuY2llc1sgNCBdO1xuXG5cdFx0XHRjb25zdCB0cmFja3MgPSBbXTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGNvbnN0IG5vZGUgPSBub2Rlc1sgaSBdO1xuXHRcdFx0XHRjb25zdCBpbnB1dEFjY2Vzc29yID0gaW5wdXRBY2Nlc3NvcnNbIGkgXTtcblx0XHRcdFx0Y29uc3Qgb3V0cHV0QWNjZXNzb3IgPSBvdXRwdXRBY2Nlc3NvcnNbIGkgXTtcblx0XHRcdFx0Y29uc3Qgc2FtcGxlciA9IHNhbXBsZXJzWyBpIF07XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IHRhcmdldHNbIGkgXTtcblxuXHRcdFx0XHRpZiAoIG5vZGUgPT09IHVuZGVmaW5lZCApIGNvbnRpbnVlO1xuXG5cdFx0XHRcdG5vZGUudXBkYXRlTWF0cml4KCk7XG5cdFx0XHRcdG5vZGUubWF0cml4QXV0b1VwZGF0ZSA9IHRydWU7XG5cblx0XHRcdFx0bGV0IFR5cGVkS2V5ZnJhbWVUcmFjaztcblxuXHRcdFx0XHRzd2l0Y2ggKCBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0gKSB7XG5cblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy53ZWlnaHRzOlxuXG5cdFx0XHRcdFx0XHRUeXBlZEtleWZyYW1lVHJhY2sgPSBOdW1iZXJLZXlmcmFtZVRyYWNrO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy5yb3RhdGlvbjpcblxuXHRcdFx0XHRcdFx0VHlwZWRLZXlmcmFtZVRyYWNrID0gUXVhdGVybmlvbktleWZyYW1lVHJhY2s7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnBvc2l0aW9uOlxuXHRcdFx0XHRcdGNhc2UgUEFUSF9QUk9QRVJUSUVTLnNjYWxlOlxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRcdFR5cGVkS2V5ZnJhbWVUcmFjayA9IFZlY3RvcktleWZyYW1lVHJhY2s7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgdGFyZ2V0TmFtZSA9IG5vZGUubmFtZSA/IG5vZGUubmFtZSA6IG5vZGUudXVpZDtcblxuXHRcdFx0XHRjb25zdCBpbnRlcnBvbGF0aW9uID0gc2FtcGxlci5pbnRlcnBvbGF0aW9uICE9PSB1bmRlZmluZWQgPyBJTlRFUlBPTEFUSU9OWyBzYW1wbGVyLmludGVycG9sYXRpb24gXSA6IEludGVycG9sYXRlTGluZWFyO1xuXG5cdFx0XHRcdGNvbnN0IHRhcmdldE5hbWVzID0gW107XG5cblx0XHRcdFx0aWYgKCBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0gPT09IFBBVEhfUFJPUEVSVElFUy53ZWlnaHRzICkge1xuXG5cdFx0XHRcdFx0Ly8gTm9kZSBtYXkgYmUgYSBHcm91cCAoZ2xURiBtZXNoIHdpdGggc2V2ZXJhbCBwcmltaXRpdmVzKSBvciBhIE1lc2guXG5cdFx0XHRcdFx0bm9kZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBvYmplY3QgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggb2JqZWN0LmlzTWVzaCA9PT0gdHJ1ZSAmJiBvYmplY3QubW9ycGhUYXJnZXRJbmZsdWVuY2VzICkge1xuXG5cdFx0XHRcdFx0XHRcdHRhcmdldE5hbWVzLnB1c2goIG9iamVjdC5uYW1lID8gb2JqZWN0Lm5hbWUgOiBvYmplY3QudXVpZCApO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHRhcmdldE5hbWVzLnB1c2goIHRhcmdldE5hbWUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IG91dHB1dEFycmF5ID0gb3V0cHV0QWNjZXNzb3IuYXJyYXk7XG5cblx0XHRcdFx0aWYgKCBvdXRwdXRBY2Nlc3Nvci5ub3JtYWxpemVkICkge1xuXG5cdFx0XHRcdFx0Y29uc3Qgc2NhbGUgPSBnZXROb3JtYWxpemVkQ29tcG9uZW50U2NhbGUoIG91dHB1dEFycmF5LmNvbnN0cnVjdG9yICk7XG5cdFx0XHRcdFx0Y29uc3Qgc2NhbGVkID0gbmV3IEZsb2F0MzJBcnJheSggb3V0cHV0QXJyYXkubGVuZ3RoICk7XG5cblx0XHRcdFx0XHRmb3IgKCBsZXQgaiA9IDAsIGpsID0gb3V0cHV0QXJyYXkubGVuZ3RoOyBqIDwgamw7IGogKysgKSB7XG5cblx0XHRcdFx0XHRcdHNjYWxlZFsgaiBdID0gb3V0cHV0QXJyYXlbIGogXSAqIHNjYWxlO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0b3V0cHV0QXJyYXkgPSBzY2FsZWQ7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoIGxldCBqID0gMCwgamwgPSB0YXJnZXROYW1lcy5sZW5ndGg7IGogPCBqbDsgaiArKyApIHtcblxuXHRcdFx0XHRcdGNvbnN0IHRyYWNrID0gbmV3IFR5cGVkS2V5ZnJhbWVUcmFjayhcblx0XHRcdFx0XHRcdHRhcmdldE5hbWVzWyBqIF0gKyAnLicgKyBQQVRIX1BST1BFUlRJRVNbIHRhcmdldC5wYXRoIF0sXG5cdFx0XHRcdFx0XHRpbnB1dEFjY2Vzc29yLmFycmF5LFxuXHRcdFx0XHRcdFx0b3V0cHV0QXJyYXksXG5cdFx0XHRcdFx0XHRpbnRlcnBvbGF0aW9uXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdC8vIE92ZXJyaWRlIGludGVycG9sYXRpb24gd2l0aCBjdXN0b20gZmFjdG9yeSBtZXRob2QuXG5cdFx0XHRcdFx0aWYgKCBzYW1wbGVyLmludGVycG9sYXRpb24gPT09ICdDVUJJQ1NQTElORScgKSB7XG5cblx0XHRcdFx0XHRcdHRyYWNrLmNyZWF0ZUludGVycG9sYW50ID0gZnVuY3Rpb24gSW50ZXJwb2xhbnRGYWN0b3J5TWV0aG9kR0xURkN1YmljU3BsaW5lKCByZXN1bHQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQSBDVUJJQ1NQTElORSBrZXlmcmFtZSBpbiBnbFRGIGhhcyB0aHJlZSBvdXRwdXQgdmFsdWVzIGZvciBlYWNoIGlucHV0IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHQvLyByZXByZXNlbnRpbmcgaW5UYW5nZW50LCBzcGxpbmVWZXJ0ZXgsIGFuZCBvdXRUYW5nZW50LiBBcyBhIHJlc3VsdCwgdHJhY2suZ2V0VmFsdWVTaXplKClcblx0XHRcdFx0XHRcdFx0Ly8gbXVzdCBiZSBkaXZpZGVkIGJ5IHRocmVlIHRvIGdldCB0aGUgaW50ZXJwb2xhbnQncyBzYW1wbGVTaXplIGFyZ3VtZW50LlxuXG5cdFx0XHRcdFx0XHRcdHJldHVybiBuZXcgR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQoIHRoaXMudGltZXMsIHRoaXMudmFsdWVzLCB0aGlzLmdldFZhbHVlU2l6ZSgpIC8gMywgcmVzdWx0ICk7XG5cblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdC8vIE1hcmsgYXMgQ1VCSUNTUExJTkUuIGB0cmFjay5nZXRJbnRlcnBvbGF0aW9uKClgIGRvZXNuJ3Qgc3VwcG9ydCBjdXN0b20gaW50ZXJwb2xhbnRzLlxuXHRcdFx0XHRcdFx0dHJhY2suY3JlYXRlSW50ZXJwb2xhbnQuaXNJbnRlcnBvbGFudEZhY3RvcnlNZXRob2RHTFRGQ3ViaWNTcGxpbmUgPSB0cnVlO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dHJhY2tzLnB1c2goIHRyYWNrICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG5hbWUgPSBhbmltYXRpb25EZWYubmFtZSA/IGFuaW1hdGlvbkRlZi5uYW1lIDogJ2FuaW1hdGlvbl8nICsgYW5pbWF0aW9uSW5kZXg7XG5cblx0XHRcdHJldHVybiBuZXcgQW5pbWF0aW9uQ2xpcCggbmFtZSwgdW5kZWZpbmVkLCB0cmFja3MgKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0Y3JlYXRlTm9kZU1lc2goIG5vZGVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHRpZiAoIG5vZGVEZWYubWVzaCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdtZXNoJywgbm9kZURlZi5tZXNoICkudGhlbiggZnVuY3Rpb24gKCBtZXNoICkge1xuXG5cdFx0XHRjb25zdCBub2RlID0gcGFyc2VyLl9nZXROb2RlUmVmKCBwYXJzZXIubWVzaENhY2hlLCBub2RlRGVmLm1lc2gsIG1lc2ggKTtcblxuXHRcdFx0Ly8gaWYgd2VpZ2h0cyBhcmUgcHJvdmlkZWQgb24gdGhlIG5vZGUsIG92ZXJyaWRlIHdlaWdodHMgb24gdGhlIG1lc2guXG5cdFx0XHRpZiAoIG5vZGVEZWYud2VpZ2h0cyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdG5vZGUudHJhdmVyc2UoIGZ1bmN0aW9uICggbyApIHtcblxuXHRcdFx0XHRcdGlmICggISBvLmlzTWVzaCApIHJldHVybjtcblxuXHRcdFx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBub2RlRGVmLndlaWdodHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0XHRcdG8ubW9ycGhUYXJnZXRJbmZsdWVuY2VzWyBpIF0gPSBub2RlRGVmLndlaWdodHNbIGkgXTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjbm9kZXMtYW5kLWhpZXJhcmNoeVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0M0Q+fVxuXHQgKi9cblx0bG9hZE5vZGUoIG5vZGVJbmRleCApIHtcblxuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXG5cdFx0Y29uc3Qgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJbmRleCBdO1xuXG5cdFx0Ly8gcmVzZXJ2ZSBub2RlJ3MgbmFtZSBiZWZvcmUgaXRzIGRlcGVuZGVuY2llcywgc28gdGhlIHJvb3QgaGFzIHRoZSBpbnRlbmRlZCBuYW1lLlxuXHRcdGNvbnN0IG5vZGVOYW1lID0gbm9kZURlZi5uYW1lID8gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIG5vZGVEZWYubmFtZSApIDogJyc7XG5cblx0XHRyZXR1cm4gKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdFx0Y29uc3QgbWVzaFByb21pc2UgPSBwYXJzZXIuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5jcmVhdGVOb2RlTWVzaCAmJiBleHQuY3JlYXRlTm9kZU1lc2goIG5vZGVJbmRleCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHRcdGlmICggbWVzaFByb21pc2UgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBtZXNoUHJvbWlzZSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZURlZi5jYW1lcmEgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnY2FtZXJhJywgbm9kZURlZi5jYW1lcmEgKS50aGVuKCBmdW5jdGlvbiAoIGNhbWVyYSApIHtcblxuXHRcdFx0XHRcdHJldHVybiBwYXJzZXIuX2dldE5vZGVSZWYoIHBhcnNlci5jYW1lcmFDYWNoZSwgbm9kZURlZi5jYW1lcmEsIGNhbWVyYSApO1xuXG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHBhcnNlci5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0XHRyZXR1cm4gZXh0LmNyZWF0ZU5vZGVBdHRhY2htZW50ICYmIGV4dC5jcmVhdGVOb2RlQXR0YWNobWVudCggbm9kZUluZGV4ICk7XG5cblx0XHRcdH0gKS5mb3JFYWNoKCBmdW5jdGlvbiAoIHByb21pc2UgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwcm9taXNlICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0XHR9KCkgKS50aGVuKCBmdW5jdGlvbiAoIG9iamVjdHMgKSB7XG5cblx0XHRcdGxldCBub2RlO1xuXG5cdFx0XHQvLyAuaXNCb25lIGlzbid0IGluIGdsVEYgc3BlYy4gU2VlIC5fbWFya0RlZnNcblx0XHRcdGlmICggbm9kZURlZi5pc0JvbmUgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0bm9kZSA9IG5ldyBCb25lKCk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIG9iamVjdHMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0XHRub2RlID0gbmV3IEdyb3VwKCk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIG9iamVjdHMubGVuZ3RoID09PSAxICkge1xuXG5cdFx0XHRcdG5vZGUgPSBvYmplY3RzWyAwIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bm9kZSA9IG5ldyBPYmplY3QzRCgpO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZSAhPT0gb2JqZWN0c1sgMCBdICkge1xuXG5cdFx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBvYmplY3RzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdFx0bm9kZS5hZGQoIG9iamVjdHNbIGkgXSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5vZGVEZWYubmFtZSApIHtcblxuXHRcdFx0XHRub2RlLnVzZXJEYXRhLm5hbWUgPSBub2RlRGVmLm5hbWU7XG5cdFx0XHRcdG5vZGUubmFtZSA9IG5vZGVOYW1lO1xuXG5cdFx0XHR9XG5cblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG5vZGUsIG5vZGVEZWYgKTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLmV4dGVuc2lvbnMgKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGV4dGVuc2lvbnMsIG5vZGUsIG5vZGVEZWYgKTtcblxuXHRcdFx0aWYgKCBub2RlRGVmLm1hdHJpeCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IG1hdHJpeCA9IG5ldyBNYXRyaXg0KCk7XG5cdFx0XHRcdG1hdHJpeC5mcm9tQXJyYXkoIG5vZGVEZWYubWF0cml4ICk7XG5cdFx0XHRcdG5vZGUuYXBwbHlNYXRyaXg0KCBtYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAoIG5vZGVEZWYudHJhbnNsYXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdG5vZGUucG9zaXRpb24uZnJvbUFycmF5KCBub2RlRGVmLnRyYW5zbGF0aW9uICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggbm9kZURlZi5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0bm9kZS5xdWF0ZXJuaW9uLmZyb21BcnJheSggbm9kZURlZi5yb3RhdGlvbiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIG5vZGVEZWYuc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdG5vZGUuc2NhbGUuZnJvbUFycmF5KCBub2RlRGVmLnNjYWxlICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHBhcnNlci5hc3NvY2lhdGlvbnMuc2V0KCBub2RlLCB7IHR5cGU6ICdub2RlcycsIGluZGV4OiBub2RlSW5kZXggfSApO1xuXG5cdFx0XHRyZXR1cm4gbm9kZTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNzY2VuZXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHNjZW5lSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxHcm91cD59XG5cdCAqL1xuXHRsb2FkU2NlbmUoIHNjZW5lSW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cdFx0Y29uc3Qgc2NlbmVEZWYgPSB0aGlzLmpzb24uc2NlbmVzWyBzY2VuZUluZGV4IF07XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblxuXHRcdC8vIExvYWRlciByZXR1cm5zIEdyb3VwLCBub3QgU2NlbmUuXG5cdFx0Ly8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xODM0MiNpc3N1ZWNvbW1lbnQtNTc4OTgxMTcyXG5cdFx0Y29uc3Qgc2NlbmUgPSBuZXcgR3JvdXAoKTtcblx0XHRpZiAoIHNjZW5lRGVmLm5hbWUgKSBzY2VuZS5uYW1lID0gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIHNjZW5lRGVmLm5hbWUgKTtcblxuXHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIHNjZW5lLCBzY2VuZURlZiApO1xuXG5cdFx0aWYgKCBzY2VuZURlZi5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBzY2VuZSwgc2NlbmVEZWYgKTtcblxuXHRcdGNvbnN0IG5vZGVJZHMgPSBzY2VuZURlZi5ub2RlcyB8fCBbXTtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBub2RlSWRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIGJ1aWxkTm9kZUhpZXJhY2h5KCBub2RlSWRzWyBpIF0sIHNjZW5lLCBqc29uLCBwYXJzZXIgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gc2NlbmU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTm9kZUhpZXJhY2h5KCBub2RlSWQsIHBhcmVudE9iamVjdCwganNvbiwgcGFyc2VyICkge1xuXG5cdGNvbnN0IG5vZGVEZWYgPSBqc29uLm5vZGVzWyBub2RlSWQgXTtcblxuXHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdub2RlJywgbm9kZUlkICkudGhlbiggZnVuY3Rpb24gKCBub2RlICkge1xuXG5cdFx0aWYgKCBub2RlRGVmLnNraW4gPT09IHVuZGVmaW5lZCApIHJldHVybiBub2RlO1xuXG5cdFx0Ly8gYnVpbGQgc2tlbGV0b24gaGVyZSBhcyB3ZWxsXG5cblx0XHRsZXQgc2tpbkVudHJ5O1xuXG5cdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnc2tpbicsIG5vZGVEZWYuc2tpbiApLnRoZW4oIGZ1bmN0aW9uICggc2tpbiApIHtcblxuXHRcdFx0c2tpbkVudHJ5ID0gc2tpbjtcblxuXHRcdFx0Y29uc3QgcGVuZGluZ0pvaW50cyA9IFtdO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gc2tpbkVudHJ5LmpvaW50cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRwZW5kaW5nSm9pbnRzLnB1c2goIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnbm9kZScsIHNraW5FbnRyeS5qb2ludHNbIGkgXSApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nSm9pbnRzICk7XG5cblx0XHR9ICkudGhlbiggZnVuY3Rpb24gKCBqb2ludE5vZGVzICkge1xuXG5cdFx0XHRub2RlLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG1lc2ggKSB7XG5cblx0XHRcdFx0aWYgKCAhIG1lc2guaXNNZXNoICkgcmV0dXJuO1xuXG5cdFx0XHRcdGNvbnN0IGJvbmVzID0gW107XG5cdFx0XHRcdGNvbnN0IGJvbmVJbnZlcnNlcyA9IFtdO1xuXG5cdFx0XHRcdGZvciAoIGxldCBqID0gMCwgamwgPSBqb2ludE5vZGVzLmxlbmd0aDsgaiA8IGpsOyBqICsrICkge1xuXG5cdFx0XHRcdFx0Y29uc3Qgam9pbnROb2RlID0gam9pbnROb2Rlc1sgaiBdO1xuXG5cdFx0XHRcdFx0aWYgKCBqb2ludE5vZGUgKSB7XG5cblx0XHRcdFx0XHRcdGJvbmVzLnB1c2goIGpvaW50Tm9kZSApO1xuXG5cdFx0XHRcdFx0XHRjb25zdCBtYXQgPSBuZXcgTWF0cml4NCgpO1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNraW5FbnRyeS5pbnZlcnNlQmluZE1hdHJpY2VzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0bWF0LmZyb21BcnJheSggc2tpbkVudHJ5LmludmVyc2VCaW5kTWF0cmljZXMuYXJyYXksIGogKiAxNiApO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGJvbmVJbnZlcnNlcy5wdXNoKCBtYXQgKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IEpvaW50IFwiJXNcIiBjb3VsZCBub3QgYmUgZm91bmQuJywgc2tpbkVudHJ5LmpvaW50c1sgaiBdICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1lc2guYmluZCggbmV3IFNrZWxldG9uKCBib25lcywgYm9uZUludmVyc2VzICksIG1lc2gubWF0cml4V29ybGQgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gbm9kZTtcblxuXHRcdH0gKTtcblxuXHR9ICkudGhlbiggZnVuY3Rpb24gKCBub2RlICkge1xuXG5cdFx0Ly8gYnVpbGQgbm9kZSBoaWVyYWNoeVxuXG5cdFx0cGFyZW50T2JqZWN0LmFkZCggbm9kZSApO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0aWYgKCBub2RlRGVmLmNoaWxkcmVuICkge1xuXG5cdFx0XHRjb25zdCBjaGlsZHJlbiA9IG5vZGVEZWYuY2hpbGRyZW47XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRjb25zdCBjaGlsZCA9IGNoaWxkcmVuWyBpIF07XG5cdFx0XHRcdHBlbmRpbmcucHVzaCggYnVpbGROb2RlSGllcmFjaHkoIGNoaWxkLCBub2RlLCBqc29uLCBwYXJzZXIgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKTtcblxuXHR9ICk7XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxuICogQHBhcmFtIHtHTFRGLlByaW1pdGl2ZX0gcHJpbWl0aXZlRGVmXG4gKiBAcGFyYW0ge0dMVEZQYXJzZXJ9IHBhcnNlclxuICovXG5mdW5jdGlvbiBjb21wdXRlQm91bmRzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLCBwYXJzZXIgKSB7XG5cblx0Y29uc3QgYXR0cmlidXRlcyA9IHByaW1pdGl2ZURlZi5hdHRyaWJ1dGVzO1xuXG5cdGNvbnN0IGJveCA9IG5ldyBCb3gzKCk7XG5cblx0aWYgKCBhdHRyaWJ1dGVzLlBPU0lUSU9OICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRjb25zdCBhY2Nlc3NvciA9IHBhcnNlci5qc29uLmFjY2Vzc29yc1sgYXR0cmlidXRlcy5QT1NJVElPTiBdO1xuXG5cdFx0Y29uc3QgbWluID0gYWNjZXNzb3IubWluO1xuXHRcdGNvbnN0IG1heCA9IGFjY2Vzc29yLm1heDtcblxuXHRcdC8vIGdsVEYgcmVxdWlyZXMgJ21pbicgYW5kICdtYXgnLCBidXQgVlJNICh3aGljaCBleHRlbmRzIGdsVEYpIGN1cnJlbnRseSBpZ25vcmVzIHRoYXQgcmVxdWlyZW1lbnQuXG5cblx0XHRpZiAoIG1pbiAhPT0gdW5kZWZpbmVkICYmIG1heCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRib3guc2V0KFxuXHRcdFx0XHRuZXcgVmVjdG9yMyggbWluWyAwIF0sIG1pblsgMSBdLCBtaW5bIDIgXSApLFxuXHRcdFx0XHRuZXcgVmVjdG9yMyggbWF4WyAwIF0sIG1heFsgMSBdLCBtYXhbIDIgXSApXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIGFjY2Vzc29yLm5vcm1hbGl6ZWQgKSB7XG5cblx0XHRcdFx0Y29uc3QgYm94U2NhbGUgPSBnZXROb3JtYWxpemVkQ29tcG9uZW50U2NhbGUoIFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3IuY29tcG9uZW50VHlwZSBdICk7XG5cdFx0XHRcdGJveC5taW4ubXVsdGlwbHlTY2FsYXIoIGJveFNjYWxlICk7XG5cdFx0XHRcdGJveC5tYXgubXVsdGlwbHlTY2FsYXIoIGJveFNjYWxlICk7XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IE1pc3NpbmcgbWluL21heCBwcm9wZXJ0aWVzIGZvciBhY2Nlc3NvciBQT1NJVElPTi4nICk7XG5cblx0XHRcdHJldHVybjtcblxuXHRcdH1cblxuXHR9IGVsc2Uge1xuXG5cdFx0cmV0dXJuO1xuXG5cdH1cblxuXHRjb25zdCB0YXJnZXRzID0gcHJpbWl0aXZlRGVmLnRhcmdldHM7XG5cblx0aWYgKCB0YXJnZXRzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRjb25zdCBtYXhEaXNwbGFjZW1lbnQgPSBuZXcgVmVjdG9yMygpO1xuXHRcdGNvbnN0IHZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xuXG5cdFx0XHRpZiAoIHRhcmdldC5QT1NJVElPTiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IGFjY2Vzc29yID0gcGFyc2VyLmpzb24uYWNjZXNzb3JzWyB0YXJnZXQuUE9TSVRJT04gXTtcblx0XHRcdFx0Y29uc3QgbWluID0gYWNjZXNzb3IubWluO1xuXHRcdFx0XHRjb25zdCBtYXggPSBhY2Nlc3Nvci5tYXg7XG5cblx0XHRcdFx0Ly8gZ2xURiByZXF1aXJlcyAnbWluJyBhbmQgJ21heCcsIGJ1dCBWUk0gKHdoaWNoIGV4dGVuZHMgZ2xURikgY3VycmVudGx5IGlnbm9yZXMgdGhhdCByZXF1aXJlbWVudC5cblxuXHRcdFx0XHRpZiAoIG1pbiAhPT0gdW5kZWZpbmVkICYmIG1heCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0Ly8gd2UgbmVlZCB0byBnZXQgbWF4IG9mIGFic29sdXRlIGNvbXBvbmVudHMgYmVjYXVzZSB0YXJnZXQgd2VpZ2h0IGlzIFstMSwxXVxuXHRcdFx0XHRcdHZlY3Rvci5zZXRYKCBNYXRoLm1heCggTWF0aC5hYnMoIG1pblsgMCBdICksIE1hdGguYWJzKCBtYXhbIDAgXSApICkgKTtcblx0XHRcdFx0XHR2ZWN0b3Iuc2V0WSggTWF0aC5tYXgoIE1hdGguYWJzKCBtaW5bIDEgXSApLCBNYXRoLmFicyggbWF4WyAxIF0gKSApICk7XG5cdFx0XHRcdFx0dmVjdG9yLnNldFooIE1hdGgubWF4KCBNYXRoLmFicyggbWluWyAyIF0gKSwgTWF0aC5hYnMoIG1heFsgMiBdICkgKSApO1xuXG5cblx0XHRcdFx0XHRpZiAoIGFjY2Vzc29yLm5vcm1hbGl6ZWQgKSB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGJveFNjYWxlID0gZ2V0Tm9ybWFsaXplZENvbXBvbmVudFNjYWxlKCBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUgXSApO1xuXHRcdFx0XHRcdFx0dmVjdG9yLm11bHRpcGx5U2NhbGFyKCBib3hTY2FsZSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gTm90ZTogdGhpcyBhc3N1bWVzIHRoYXQgdGhlIHN1bSBvZiBhbGwgd2VpZ2h0cyBpcyBhdCBtb3N0IDEuIFRoaXMgaXNuJ3QgcXVpdGUgY29ycmVjdCAtIGl0J3MgbW9yZSBjb25zZXJ2YXRpdmVcblx0XHRcdFx0XHQvLyB0byBhc3N1bWUgdGhhdCBlYWNoIHRhcmdldCBjYW4gaGF2ZSBhIG1heCB3ZWlnaHQgb2YgMS4gSG93ZXZlciwgZm9yIHNvbWUgdXNlIGNhc2VzIC0gbm90YWJseSwgd2hlbiBtb3JwaCB0YXJnZXRzXG5cdFx0XHRcdFx0Ly8gYXJlIHVzZWQgdG8gaW1wbGVtZW50IGtleS1mcmFtZSBhbmltYXRpb25zIGFuZCBhcyBzdWNoIG9ubHkgdHdvIGFyZSBhY3RpdmUgYXQgYSB0aW1lIC0gdGhpcyByZXN1bHRzIGluIHZlcnkgbGFyZ2Vcblx0XHRcdFx0XHQvLyBib3hlcy4gU28gZm9yIG5vdyB3ZSBtYWtlIGEgYm94IHRoYXQncyBzb21ldGltZXMgYSB0b3VjaCB0b28gc21hbGwgYnV0IGlzIGhvcGVmdWxseSBtb3N0bHkgb2YgcmVhc29uYWJsZSBzaXplLlxuXHRcdFx0XHRcdG1heERpc3BsYWNlbWVudC5tYXgoIHZlY3RvciApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBNaXNzaW5nIG1pbi9tYXggcHJvcGVydGllcyBmb3IgYWNjZXNzb3IgUE9TSVRJT04uJyApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly8gQXMgcGVyIGNvbW1lbnQgYWJvdmUgdGhpcyBib3ggaXNuJ3QgY29uc2VydmF0aXZlLCBidXQgaGFzIGEgcmVhc29uYWJsZSBzaXplIGZvciBhIHZlcnkgbGFyZ2UgbnVtYmVyIG9mIG1vcnBoIHRhcmdldHMuXG5cdFx0Ym94LmV4cGFuZEJ5VmVjdG9yKCBtYXhEaXNwbGFjZW1lbnQgKTtcblxuXHR9XG5cblx0Z2VvbWV0cnkuYm91bmRpbmdCb3ggPSBib3g7XG5cblx0Y29uc3Qgc3BoZXJlID0gbmV3IFNwaGVyZSgpO1xuXG5cdGJveC5nZXRDZW50ZXIoIHNwaGVyZS5jZW50ZXIgKTtcblx0c3BoZXJlLnJhZGl1cyA9IGJveC5taW4uZGlzdGFuY2VUbyggYm94Lm1heCApIC8gMjtcblxuXHRnZW9tZXRyeS5ib3VuZGluZ1NwaGVyZSA9IHNwaGVyZTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XG4gKiBAcGFyYW0ge0dMVEYuUHJpbWl0aXZlfSBwcmltaXRpdmVEZWZcbiAqIEBwYXJhbSB7R0xURlBhcnNlcn0gcGFyc2VyXG4gKiBAcmV0dXJuIHtQcm9taXNlPEJ1ZmZlckdlb21ldHJ5Pn1cbiAqL1xuZnVuY3Rpb24gYWRkUHJpbWl0aXZlQXR0cmlidXRlcyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiwgcGFyc2VyICkge1xuXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBwcmltaXRpdmVEZWYuYXR0cmlidXRlcztcblxuXHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0ZnVuY3Rpb24gYXNzaWduQXR0cmlidXRlQWNjZXNzb3IoIGFjY2Vzc29ySW5kZXgsIGF0dHJpYnV0ZU5hbWUgKSB7XG5cblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIGFjY2Vzc29ySW5kZXggKVxuXHRcdFx0LnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3IgKSB7XG5cblx0XHRcdFx0Z2VvbWV0cnkuc2V0QXR0cmlidXRlKCBhdHRyaWJ1dGVOYW1lLCBhY2Nlc3NvciApO1xuXG5cdFx0XHR9ICk7XG5cblx0fVxuXG5cdGZvciAoIGNvbnN0IGdsdGZBdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMgKSB7XG5cblx0XHRjb25zdCB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTWyBnbHRmQXR0cmlidXRlTmFtZSBdIHx8IGdsdGZBdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHQvLyBTa2lwIGF0dHJpYnV0ZXMgYWxyZWFkeSBwcm92aWRlZCBieSBlLmcuIERyYWNvIGV4dGVuc2lvbi5cblx0XHRpZiAoIHRocmVlQXR0cmlidXRlTmFtZSBpbiBnZW9tZXRyeS5hdHRyaWJ1dGVzICkgY29udGludWU7XG5cblx0XHRwZW5kaW5nLnB1c2goIGFzc2lnbkF0dHJpYnV0ZUFjY2Vzc29yKCBhdHRyaWJ1dGVzWyBnbHRmQXR0cmlidXRlTmFtZSBdLCB0aHJlZUF0dHJpYnV0ZU5hbWUgKSApO1xuXG5cdH1cblxuXHRpZiAoIHByaW1pdGl2ZURlZi5pbmRpY2VzICE9PSB1bmRlZmluZWQgJiYgISBnZW9tZXRyeS5pbmRleCApIHtcblxuXHRcdGNvbnN0IGFjY2Vzc29yID0gcGFyc2VyLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHByaW1pdGl2ZURlZi5pbmRpY2VzICkudGhlbiggZnVuY3Rpb24gKCBhY2Nlc3NvciApIHtcblxuXHRcdFx0Z2VvbWV0cnkuc2V0SW5kZXgoIGFjY2Vzc29yICk7XG5cblx0XHR9ICk7XG5cblx0XHRwZW5kaW5nLnB1c2goIGFjY2Vzc29yICk7XG5cblx0fVxuXG5cdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYgKTtcblxuXHRjb21wdXRlQm91bmRzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLCBwYXJzZXIgKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gcHJpbWl0aXZlRGVmLnRhcmdldHMgIT09IHVuZGVmaW5lZFxuXHRcdFx0PyBhZGRNb3JwaFRhcmdldHMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYudGFyZ2V0cywgcGFyc2VyIClcblx0XHRcdDogZ2VvbWV0cnk7XG5cblx0fSApO1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7TnVtYmVyfSBkcmF3TW9kZVxuICogQHJldHVybiB7QnVmZmVyR2VvbWV0cnl9XG4gKi9cbmZ1bmN0aW9uIHRvVHJpYW5nbGVzRHJhd01vZGUoIGdlb21ldHJ5LCBkcmF3TW9kZSApIHtcblxuXHRsZXQgaW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xuXG5cdC8vIGdlbmVyYXRlIGluZGV4IGlmIG5vdCBwcmVzZW50XG5cblx0aWYgKCBpbmRleCA9PT0gbnVsbCApIHtcblxuXHRcdGNvbnN0IGluZGljZXMgPSBbXTtcblxuXHRcdGNvbnN0IHBvc2l0aW9uID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCAncG9zaXRpb24nICk7XG5cblx0XHRpZiAoIHBvc2l0aW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHBvc2l0aW9uLmNvdW50OyBpICsrICkge1xuXG5cdFx0XHRcdGluZGljZXMucHVzaCggaSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGdlb21ldHJ5LnNldEluZGV4KCBpbmRpY2VzICk7XG5cdFx0XHRpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuR0xURkxvYWRlci50b1RyaWFuZ2xlc0RyYXdNb2RlKCk6IFVuZGVmaW5lZCBwb3NpdGlvbiBhdHRyaWJ1dGUuIFByb2Nlc3Npbmcgbm90IHBvc3NpYmxlLicgKTtcblx0XHRcdHJldHVybiBnZW9tZXRyeTtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly9cblxuXHRjb25zdCBudW1iZXJPZlRyaWFuZ2xlcyA9IGluZGV4LmNvdW50IC0gMjtcblx0Y29uc3QgbmV3SW5kaWNlcyA9IFtdO1xuXG5cdGlmICggZHJhd01vZGUgPT09IFRyaWFuZ2xlRmFuRHJhd01vZGUgKSB7XG5cblx0XHQvLyBnbC5UUklBTkdMRV9GQU5cblxuXHRcdGZvciAoIGxldCBpID0gMTsgaSA8PSBudW1iZXJPZlRyaWFuZ2xlczsgaSArKyApIHtcblxuXHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCAwICkgKTtcblx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XG5cdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcblxuXHRcdH1cblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gZ2wuVFJJQU5HTEVfU1RSSVBcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IG51bWJlck9mVHJpYW5nbGVzOyBpICsrICkge1xuXG5cdFx0XHRpZiAoIGkgJSAyID09PSAwICkge1xuXG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAyICkgKTtcblxuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDIgKSApO1xuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHRpZiAoICggbmV3SW5kaWNlcy5sZW5ndGggLyAzICkgIT09IG51bWJlck9mVHJpYW5nbGVzICkge1xuXG5cdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkdMVEZMb2FkZXIudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBVbmFibGUgdG8gZ2VuZXJhdGUgY29ycmVjdCBhbW91bnQgb2YgdHJpYW5nbGVzLicgKTtcblxuXHR9XG5cblx0Ly8gYnVpbGQgZmluYWwgZ2VvbWV0cnlcblxuXHRjb25zdCBuZXdHZW9tZXRyeSA9IGdlb21ldHJ5LmNsb25lKCk7XG5cdG5ld0dlb21ldHJ5LnNldEluZGV4KCBuZXdJbmRpY2VzICk7XG5cblx0cmV0dXJuIG5ld0dlb21ldHJ5O1xuXG59XG5cbmV4cG9ydCB7IEdMVEZMb2FkZXIgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV90aHJlZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU2NlbmVSZW5kZXJlclRKUyBmcm9tIFwiLi9TY2VuZVJlbmRlcmVyVEpTXCJcbmltcG9ydCBORlRhZGRUSlMgZnJvbSBcIi4vbWFya2VybWVkaWEvTkZUYWRkVEpTXCJcblxuZXhwb3J0IGRlZmF1bHQgeyBTY2VuZVJlbmRlcmVyVEpTLCBORlRhZGRUSlMgfSJdLCJzb3VyY2VSb290IjoiIn0=