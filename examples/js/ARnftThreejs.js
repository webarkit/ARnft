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
        console.log(mesh.name);
      });
      document.addEventListener('nftTrackingLost-' + this.uuid + '-' + name, function (ev) {
        root.visible = false;
        mesh.visible = false;
      });
      this.entities.push({
        name: name,
        mesh: mesh
      });
    }
  }, {
    key: "addModel",
    value: function addModel(url, x, y, z, scale) {
      var model;
      var threeGLTFLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_5__.GLTFLoader();
      threeGLTFLoader.load(url, function (gltf) {
        model = gltf.scene;
        model.scale.set(scale, scale, scale);
        model.rotation.x = Math.PI / 2;
        model.position.x = x;
        model.position.y = y;
        model.position.z = z;
      });
    }
  }, {
    key: "addImage",
    value: function addImage(imageUrl, color, scale) {
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
    }
  }, {
    key: "addVideo",
    value: function addVideo(id, scale) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL1NjZW5lUmVuZGVyZXJUSlMudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vc3JjL21hcmtlcm1lZGlhL05GVGFkZFRKUy50cyIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvLi9zcmMvdXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJ0aHJlZVwiLFwiY29tbW9uanMyXCI6XCJ0aHJlZVwiLFwiYW1kXCI6XCJ0aHJlZVwiLFwicm9vdFwiOlwiVEhSRUVcIn0iLCJ3ZWJwYWNrOi8vQVJuZnRUaHJlZWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9BUm5mdFRocmVlanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0FSbmZ0VGhyZWVqcy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7SUEwQ3FCLGdCO0FBV25CLDRCQUFhLFVBQWIsRUFBcUMsVUFBckMsRUFBb0UsSUFBcEUsRUFBa0YsVUFBbEYsRUFBcUc7QUFBQTs7QUFDbkcsU0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssUUFBTCxHQUFnQixJQUFJLGdEQUFKLENBQXdCO0FBQ3RDLFlBQU0sRUFBRSxVQUQ4QjtBQUV0QyxhQUFPLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsT0FGUztBQUd0QyxXQUFLLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsS0FIVztBQUl0Qyx3QkFBa0IsRUFBRSxVQUFVLENBQUMsUUFBWCxDQUFvQixrQkFKRjtBQUt0QyxlQUFTLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsU0FMTztBQU10QyxhQUFPLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsT0FOUztBQU90QyxlQUFTLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsU0FQTztBQVF0QyxXQUFLLEVBQUUsVUFBVSxDQUFDLFFBQVgsQ0FBb0IsS0FSVztBQVN0Qyw0QkFBc0IsRUFBRSxVQUFVLENBQUMsUUFBWCxDQUFvQjtBQVROLEtBQXhCLENBQWhCO0FBV0EsU0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixNQUFNLENBQUMsZ0JBQW5DO0FBQ0Es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QTs7QUFFQSw2QkFBNkIsd0NBQUs7QUFDbEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLFNBQVMsdURBQW9COztBQUU3Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsOENBQThDLDBDQUFPOztBQUVyRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyx1REFBb0I7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQzs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFVLHlEQUFzQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CLHlEQUFzQjs7QUFFekMsSUFBSTs7QUFFSjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMLElBQUk7O0FBRUosR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5Qyx1REFBb0I7O0FBRTdEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBLHdEQUF3RDtBQUN4RCxtREFBbUQ7QUFDbkQ7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLDREQUE0RDtBQUM1RDtBQUNBLDJDQUEyQztBQUMzQztBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLDJIQUEySDtBQUMzSCxtRkFBbUY7QUFDbkYsZ0VBQWdFO0FBQ2hFLHVFQUF1RTtBQUN2RSxvREFBb0Q7QUFDcEQsd0VBQXdFO0FBQ3hFLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBLGNBQWMsWUFBWSx3Q0FBSyx1QkFBdUI7QUFDdEQsZ0JBQWdCLFdBQVc7QUFDM0IsaUJBQWlCLGNBQWM7QUFDL0IsbUJBQW1CO0FBQ25COztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDLDBCQUEwQjtBQUNqRSx1Q0FBdUMsNkJBQTZCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBLHdDQUF3Qzs7QUFFeEMsTUFBTTs7QUFFTjs7QUFFQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsTUFBTTs7QUFFTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsNkJBQTZCLHdDQUFLO0FBQ2xDOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsZ0NBQWdDLHdDQUFLO0FBQ3JDO0FBQ0EsZ0NBQWdDLHdDQUFLOztBQUVyQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsd0RBQXFCOztBQUVoRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLDhDQUFXOztBQUVwRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7O0FBRW5DOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYzs7QUFFL0IsNENBQTRDO0FBQzVDLGtEQUFrRDtBQUNsRCw0Q0FBNEM7QUFDNUMsd0NBQXdDOztBQUV4Qzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLGdEQUFhO0FBQ3BCLE9BQU8sK0NBQVk7QUFDbkIsT0FBTyw2REFBMEI7QUFDakMsT0FBTyw0REFBeUI7QUFDaEMsT0FBTyw0REFBeUI7QUFDaEMsT0FBTywyREFBd0I7QUFDL0I7O0FBRUE7QUFDQSxRQUFRLHNEQUFtQjtBQUMzQixRQUFRLHlEQUFzQjtBQUM5QixRQUFRLGlEQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvREFBaUI7QUFDMUIsT0FBTyxzREFBbUI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUMsdURBQW9CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNENBQVM7QUFDbEIsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsWUFBWSxpQ0FBaUM7QUFDN0MsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZUFBZTtBQUMzQixZQUFZLG1CQUFtQjtBQUMvQixZQUFZLFdBQVc7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0MsUUFBUTs7QUFFOUM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyxRQUFROztBQUU5Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQSxZQUFZLEtBQUs7QUFDakIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsK0NBQStDLFFBQVE7O0FBRXZEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsNENBQTRDLFFBQVE7O0FBRXBEOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxtQ0FBbUMsUUFBUTs7QUFFM0MsaUVBQWlFOztBQUVqRTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1QkFBdUIsY0FBYzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsU0FBUyxVQUFVO0FBQ3ZDLHNCQUFzQixTQUFTLFVBQVU7QUFDekMscUJBQXFCLFNBQVMsVUFBVTs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLG9EQUFpQjs7QUFFN0MsR0FBRzs7QUFFSCw0QkFBNEIsZ0RBQWE7O0FBRXpDOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCLDZDQUFVO0FBQ2xDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBLElBQUk7O0FBRUosR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RCx3QkFBd0I7O0FBRWhGOztBQUVBLHVDQUF1QyxRQUFROztBQUUvQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdELHdCQUF3Qjs7QUFFaEY7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix1QkFBdUI7O0FBRXpDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLHVCQUF1Qjs7QUFFekM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxNQUFNO0FBQ047O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsY0FBYyxvREFBaUI7O0FBRS9COztBQUVBOztBQUVBLDBCQUEwQiw2REFBMEI7O0FBRXBELElBQUk7O0FBRUo7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQSwwQkFBMEIsa0RBQWU7O0FBRXpDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkIsa0RBQWU7O0FBRTFDOztBQUVBLCtDQUErQyxRQUFROztBQUV2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRDQUE0Qyx3QkFBd0I7QUFDcEU7QUFDQTs7QUFFQSxJQUFJOztBQUVKLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsbUJBQW1CLGdEQUFhOztBQUVoQzs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxzQ0FBc0MsNENBQVM7O0FBRS9DO0FBQ0E7O0FBRUEsNkRBQTZELCtDQUFZO0FBQ3pFLDZEQUE2RCwyREFBd0I7QUFDckYsdURBQXVELGlEQUFjO0FBQ3JFLHVEQUF1RCxpREFBYzs7QUFFckU7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEseUJBQXlCLGlEQUFjO0FBQ3ZDLElBQUksK0RBQTRCO0FBQ2hDO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUEsdUJBQXVCLG9EQUFpQjtBQUN4QyxJQUFJLCtEQUE0QjtBQUNoQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFNBQVMsdURBQW9COztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBLDhCQUE4Qix3Q0FBSztBQUNuQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUEseUJBQXlCLDZDQUFVOztBQUVuQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsbUVBQW1FLG9EQUFpQjs7QUFFcEY7O0FBRUE7QUFDQSxvQ0FBb0MsMENBQU87O0FBRTNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNFQUFzRSxvREFBaUI7O0FBRXZGOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG9FQUFvRSxvREFBaUI7O0FBRXJGLGlDQUFpQyx3Q0FBSzs7QUFFdEM7O0FBRUEscUVBQXFFLG9EQUFpQjs7QUFFdEY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLCtDQUErQywrQ0FBWTtBQUMzRCwrREFBK0QsK0NBQVk7O0FBRTNFOztBQUVBLHVDQUF1QywwQ0FBMEM7O0FBRWpGOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0IsbUVBQWdDOztBQUV4RDs7QUFFQSxrQkFBa0IsNEJBQTRCOztBQUU5Qzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzQkFBc0I7QUFDbEMsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBLDBDQUEwQyxRQUFROztBQUVsRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBLG1EQUFtRCxpREFBYzs7QUFFakU7O0FBRUE7QUFDQSx5QkFBeUI7O0FBRXpCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMENBQTBDLFFBQVE7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDJDQUEyQyxRQUFROztBQUVuRDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLDhDQUFXO0FBQ3ZCLFlBQVksdUNBQUk7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSwwREFBMEQsd0RBQXFCOztBQUUvRSxNQUFNOztBQUVOLDBEQUEwRCxzREFBbUI7O0FBRTdFOztBQUVBLEtBQUs7O0FBRUwsZ0JBQWdCLCtDQUFZOztBQUU1QixLQUFLOztBQUVMLGdCQUFnQix1Q0FBSTs7QUFFcEIsS0FBSzs7QUFFTCxnQkFBZ0IsMkNBQVE7O0FBRXhCLEtBQUs7O0FBRUwsZ0JBQWdCLHlDQUFNOztBQUV0QixLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHFCQUFxQix3Q0FBSzs7QUFFMUIsdUNBQXVDLFFBQVE7O0FBRS9DOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxnQkFBZ0Isb0RBQWlCLEVBQUUscURBQWtCOztBQUVyRCxHQUFHOztBQUVILGdCQUFnQixxREFBa0I7O0FBRWxDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCOztBQUVyQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQsUUFBUTs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0NBQXNDLFFBQVE7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSwyQkFBMkIsc0RBQW1CO0FBQzlDOztBQUVBOztBQUVBLDJCQUEyQiwwREFBdUI7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixzREFBbUI7QUFDOUM7O0FBRUE7O0FBRUE7O0FBRUEseUdBQXlHLG9EQUFpQjs7QUFFMUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxNQUFNOztBQUVOLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTs7QUFFdEQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsNkNBQTZDLFFBQVE7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGNBQWMsZ0RBQWE7O0FBRTNCLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0RBQWtELFFBQVE7O0FBRTFEOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBLElBQUk7O0FBRUo7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLGVBQWUsdUNBQUk7O0FBRW5CLElBQUk7O0FBRUosZUFBZSx3Q0FBSzs7QUFFcEIsSUFBSTs7QUFFSjs7QUFFQSxJQUFJOztBQUVKLGVBQWUsMkNBQVE7O0FBRXZCOztBQUVBOztBQUVBLHlDQUF5QyxRQUFROztBQUVqRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVCQUF1QiwwQ0FBTztBQUM5QjtBQUNBOztBQUVBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsbUNBQW1DLGtDQUFrQzs7QUFFckU7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isd0NBQUs7QUFDekI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXVDLFFBQVE7O0FBRS9DOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaURBQWlELFFBQVE7O0FBRXpEOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw0Q0FBNEMsUUFBUTs7QUFFcEQ7O0FBRUE7O0FBRUE7O0FBRUEsc0JBQXNCLDBDQUFPOztBQUU3Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxNQUFNOztBQUVOOztBQUVBOztBQUVBOztBQUVBLG1CQUFtQiwyQ0FBUTs7QUFFM0IsSUFBSTs7QUFFSjs7QUFFQSxHQUFHOztBQUVILEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEseUNBQXlDLFFBQVE7O0FBRWpEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLGVBQWU7QUFDMUIsV0FBVyxXQUFXO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLHVDQUFJOztBQUVyQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsUUFBUSwwQ0FBTztBQUNmLFFBQVEsMENBQU87QUFDZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDhCQUE4QiwwQ0FBTztBQUNyQyxxQkFBcUIsMENBQU87O0FBRTVCLHVDQUF1QyxRQUFROztBQUUvQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0JBQW9CLHlDQUFNOztBQUUxQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFdBQVcsZUFBZTtBQUMxQixXQUFXLFdBQVc7QUFDdEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsbUJBQW1CLG9CQUFvQjs7QUFFdkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsc0RBQW1COztBQUV0Qzs7QUFFQSxrQkFBa0Isd0JBQXdCOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQSxrQkFBa0IsdUJBQXVCOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRXNCOzs7Ozs7Ozs7OztBQ2g2SHRCLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQSxpRUFBZTtBQUFFLGtCQUFnQixFQUFoQixzREFBRjtBQUFvQixXQUFTLEVBQVQsMkRBQVM7QUFBN0IsQ0FBZixFIiwiZmlsZSI6IkFSbmZ0VGhyZWVqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInRocmVlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInRocmVlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFSbmZ0VGhyZWVqc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInRocmVlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBUm5mdFRocmVlanNcIl0gPSBmYWN0b3J5KHJvb3RbXCJUSFJFRVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RocmVlX18pIHtcbnJldHVybiAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscy9VdGlscydcblxuaW50ZXJmYWNlIENvbmZpZ0RhdGEge1xuICBjYW1lcmE6IHtcbiAgICBmYXI6IG51bWJlcjtcbiAgICBmb3Y6IG51bWJlcjtcbiAgICBtYXRyaXhBdXRvVXBkYXRlOiBib29sZWFuO1xuICAgIG5lYXI6IG51bWJlcjtcbiAgICByYXRpbzogbnVtYmVyO1xuICB9LFxuICByZW5kZXJlcjoge1xuICAgIGFscGhhOiBib29sZWFuO1xuICAgIGFudGlhbGlhczogYm9vbGVhbjtcbiAgICBjb250ZXh0OiBhbnk7XG4gICAgZGVwdGg6IGJvb2xlYW47XG4gICAgbG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcjogYm9vbGVhbjtcbiAgICBwcmVjaXNpb246IHN0cmluZztcbiAgICBzdGVuY2lsOiBib29sZWFuO1xuICAgIHByZW11bHRpcGxpZWRBbHBoYTogYm9vbGVhbjtcbiAgICBvYmpWaXNpYmlsaXR5OiBib29sZWFuO1xuICB9O1xuXG59XG5cbmludGVyZmFjZSBSb290IGV4dGVuZHMgVEhSRUUuT2JqZWN0M0Qge1xuICAvL21hdHJpeDogb2JqZWN0XG59XG5cbmludGVyZmFjZSBSZW5kZXJlciB7XG4gIHJlbmRlcjogKHNjZW5lOiBUSFJFRS5TY2VuZSwgY2FtZXJhOiBUSFJFRS5DYW1lcmEpID0+IHZvaWQ7XG4gIHNldFBpeGVsUmF0aW86IChwaXhlbFJhdGlvOiBudW1iZXIpID0+IHZvaWQ7XG4gIHNldFNpemU6ICh3OiBudW1iZXIsIGg6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIENhbWVyYSBleHRlbmRzIFRIUkVFLkNhbWVyYSB7XG4gIG1hdHJpeEF1dG9VcGRhdGU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTY2VuZSBleHRlbmRzIFRIUkVFLlNjZW5lIHtcbiAgYWRkOiAobm9kZTogVEhSRUUuT2JqZWN0M0QpID0+IHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lUmVuZGVyZXJUSlMge1xuICBwdWJsaWMgY2FudmFzX2RyYXc6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGNhbWVyYTogQ2FtZXJhO1xuICBwcml2YXRlIGNvbmZpZ0RhdGE6IENvbmZpZ0RhdGE7XG4gIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXI7XG4gIHByaXZhdGUgdXVpZDogc3RyaW5nO1xuICBwcml2YXRlIHJvb3Q6IFJvb3Q7XG4gIHByaXZhdGUgc2NlbmU6IFNjZW5lO1xuICBwcml2YXRlIHN0YXRpYyBnbG9iYWxTY2VuZTogU2NlbmU7XG4gIHByaXZhdGUgdmVyc2lvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWdEYXRhOiBDb25maWdEYXRhLCBjYW52YXNEcmF3OiBIVE1MQ2FudmFzRWxlbWVudCwgdXVpZDogc3RyaW5nLCBjYW1lcmFCb29sOiBib29sZWFuKSB7XG4gICAgdGhpcy5jb25maWdEYXRhID0gY29uZmlnRGF0YVxuICAgIHRoaXMudXVpZCA9IHV1aWRcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgY2FudmFzOiBjYW52YXNEcmF3LFxuICAgICAgY29udGV4dDogY29uZmlnRGF0YS5yZW5kZXJlci5jb250ZXh0LFxuICAgICAgYWxwaGE6IGNvbmZpZ0RhdGEucmVuZGVyZXIuYWxwaGEsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IGNvbmZpZ0RhdGEucmVuZGVyZXIucHJlbXVsdGlwbGllZEFscGhhLFxuICAgICAgYW50aWFsaWFzOiBjb25maWdEYXRhLnJlbmRlcmVyLmFudGlhbGlhcyxcbiAgICAgIHN0ZW5jaWw6IGNvbmZpZ0RhdGEucmVuZGVyZXIuc3RlbmNpbCxcbiAgICAgIHByZWNpc2lvbjogY29uZmlnRGF0YS5yZW5kZXJlci5wcmVjaXNpb24sXG4gICAgICBkZXB0aDogY29uZmlnRGF0YS5yZW5kZXJlci5kZXB0aCxcbiAgICAgIGxvZ2FyaXRobWljRGVwdGhCdWZmZXI6IGNvbmZpZ0RhdGEucmVuZGVyZXIubG9nYXJpdGhtaWNEZXB0aEJ1ZmZlclxuICAgIH0pXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxuICAgIFNjZW5lUmVuZGVyZXJUSlMuZ2xvYmFsU2NlbmUgPSB0aGlzLnNjZW5lXG4gICAgaWYgKGNhbWVyYUJvb2wgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCBjb25maWdEYXRhLmNhbWVyYS5mb3YsIGNvbmZpZ0RhdGEuY2FtZXJhLnJhdGlvLCBjb25maWdEYXRhLmNhbWVyYS5uZWFyLCBjb25maWdEYXRhLmNhbWVyYS5mYXIgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuQ2FtZXJhKClcbiAgICB9XG4gICAgdGhpcy52ZXJzaW9uID0gJzAuMS4xJ1xuICAgIGNvbnNvbGUubG9nKFwiQVJuZnRUaHJlZWpzIHZlcnNpb246IFwiLCB0aGlzLnZlcnNpb24pO1xuICB9XG5cbiAgaW5pdFJlbmRlcmVyIChuYW1lczpBcnJheTxzdHJpbmc+KSB7XG4gICAgdGhpcy5jYW1lcmEubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2V0UHJvamVjdGlvbk1hdHJpeCcsIChldjogYW55KSA9PiB7XG4gICAgICBVdGlscy5zZXRNYXRyaXgodGhpcy5jYW1lcmEucHJvamVjdGlvbk1hdHJpeCwgZXYuZGV0YWlsLnByb2opXG4gICAgfSlcbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmNhbWVyYSlcblxuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZilcbiAgICB0aGlzLnNjZW5lLmFkZChsaWdodClcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dldFdpbmRvd1NpemUnLCAoX2V2OiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZShfZXYuZGV0YWlsLnN3LCBfZXYuZGV0YWlsLnNoKVxuICAgIH0pXG5cbiAgICBjb25zdCBzZXRJbml0UmVuZGVyZXJFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnb25Jbml0VGhyZWVqc1JlbmRlcmluZycsIHsgZGV0YWlsOiB7IHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLCBzY2VuZTogdGhpcy5zY2VuZSwgIGNhbWVyYTogdGhpcy5jYW1lcmEgfSB9KVxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoc2V0SW5pdFJlbmRlcmVyRXZlbnQpXG4gIH1cblxuICBkcmF3ICgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSlcbiAgfVxuXG4gIC8vIGdldHRlcnNcblxuICBnZXRSZW5kZXJlcigpOiBSZW5kZXJlciB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJcbiAgfVxuXG4gIGdldFNjZW5lKCk6IFNjZW5lIHtcbiAgICByZXR1cm4gdGhpcy5zY2VuZVxuICB9XG5cbiAgZ2V0Q2FtZXJhKCk6IENhbWVyYSB7XG4gICAgcmV0dXJuIHRoaXMuY2FtZXJhXG4gIH1cblxuICBzdGF0aWMgZ2V0R2xvYmFsU2NlbmUoKTogU2NlbmUge1xuICAgIHJldHVybiBTY2VuZVJlbmRlcmVyVEpTLmdsb2JhbFNjZW5lXG4gIH1cblxuICAvLyBzZXR0ZXJzXG5cbiAgc2V0UmVuZGVyZXIocmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gIH1cblxuICBzZXRTY2VuZShzY2VuZTogU2NlbmUpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgfVxuXG4gIHNldENhbWVyYShjYW1lcmE6IENhbWVyYSkge1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhXG4gIH1cblxuICAvLyB0aWNrIHRvIGJlIGltcGxlbWVudGVkXG4gIC8qIHRpY2sgKCkge1xuICAgIHRoaXMuZHJhdygpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2spXG4gIH0qL1xufVxuIiwiaW1wb3J0IHsgT2JqZWN0M0QsXG4gICAgICAgICBQbGFuZUdlb21ldHJ5LFxuICAgICAgICAgU2NlbmUsXG4gICAgICAgICBUZXh0dXJlTG9hZGVyLFxuICAgICAgICAgVmlkZW9UZXh0dXJlLFxuICAgICAgICAgTWVzaCxcbiAgICAgICAgIE1lc2hTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlcidcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vdXRpbHMvVXRpbHMnXG5pbXBvcnQgU2NlbmVSZW5kZXJlclRKUyBmcm9tICcuLi9TY2VuZVJlbmRlcmVyVEpTJ1xuXG5pbnRlcmZhY2UgQVJ2aWRlbyB7XG4gIHBsYXk6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBFbnRpdHkge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBtZXNoOiBPYmplY3QzRFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBORlRhZGRUSlMge1xuICAgIC8vcHJpdmF0ZSByb290OiBPYmplY3QzRDtcbiAgICBwcml2YXRlIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdO1xuICAgIHByaXZhdGUgbmFtZXM6IEFycmF5PHN0cmluZz47XG4gICAgcHJpdmF0ZSBzY2VuZTogU2NlbmU7XG4gICAgcHJpdmF0ZSB1dWlkOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IodXVpZDogc3RyaW5nKSB7XG4gICAgICAgIC8vdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5zY2VuZSA9IFNjZW5lUmVuZGVyZXJUSlMuZ2V0R2xvYmFsU2NlbmUoKTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICB9XG4gICAgcHVibGljIGFkZChtZXNoOiBPYmplY3QzRCwgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dldE5GVERhdGEnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgICAgdmFyIG1zZyA9IGV2LmRldGFpbFxuICAgICAgICAgICAgbWVzaC5wb3NpdGlvbi55ID0gKG1zZy5oZWlnaHQgLyBtc2cuZHBpICogMi41NCAqIDEwKSAvIDIuMFxuICAgICAgICAgICAgbWVzaC5wb3NpdGlvbi54ID0gKG1zZy53aWR0aCAvIG1zZy5kcGkgKiAyLjU0ICogMTApIC8gMi4wXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgT2JqZWN0M0QoKTtcbiAgICAgICAgcm9vdC5uYW1lID0gJ3Jvb3QtJyArIG5hbWU7XG4gICAgICAgIHJvb3QubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChyb290KTtcbiAgICAgICAgcm9vdC5hZGQobWVzaCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dldE1hdHJpeEdMX1JILScgKyB0aGlzLnV1aWQgKyAnLScgKyBuYW1lLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgIHJvb3QudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICBtZXNoLnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgY29uc3QgbWF0cml4ID0gVXRpbHMuaW50ZXJwb2xhdGUoZXYuZGV0YWlsLm1hdHJpeEdMX1JIKVxuICAgICAgICAgIFV0aWxzLnNldE1hdHJpeChyb290Lm1hdHJpeCwgbWF0cml4KVxuICAgICAgICAgIGNvbnNvbGUubG9nKG1lc2gubmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25mdFRyYWNraW5nTG9zdC0nICsgdGhpcy51dWlkICsgJy0nICsgbmFtZSwgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICByb290LnZpc2libGUgPSBmYWxzZVxuICAgICAgICAgIG1lc2gudmlzaWJsZSA9IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZW50aXRpZXMucHVzaCh7bmFtZSwgbWVzaH0pXG4gICAgfVxuICAgIHB1YmxpYyBhZGRNb2RlbCAodXJsOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG1vZGVsXG4gICAgICAgIC8qIExvYWQgTW9kZWwgKi9cbiAgICAgICAgY29uc3QgdGhyZWVHTFRGTG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKVxuICAgICAgICB0aHJlZUdMVEZMb2FkZXIubG9hZCh1cmwsIGdsdGYgPT4ge1xuICAgICAgICAgICAgbW9kZWwgPSBnbHRmLnNjZW5lXG4gICAgICAgICAgICBtb2RlbC5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSlcbiAgICAgICAgICAgIG1vZGVsLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMlxuICAgICAgICAgICAgbW9kZWwucG9zaXRpb24ueCA9IHhcbiAgICAgICAgICAgIG1vZGVsLnBvc2l0aW9uLnkgPSB5XG4gICAgICAgICAgICBtb2RlbC5wb3NpdGlvbi56ID0gelxuICAgICAgICAgICAgLy90aGlzLnJvb3QuYWRkKG1vZGVsKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBwdWJsaWMgYWRkSW1hZ2UgKGltYWdlVXJsOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIHNjYWxlOiBudW1iZXIpIHtcbiAgICAgICBjb25zdCBwbGFuZUdlb20gPSBuZXcgUGxhbmVHZW9tZXRyeSgxLCAxLCAxLCAxKVxuICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZUxvYWRlcigpLmxvYWQoaW1hZ2VVcmwpXG4gICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogY29sb3IsIG1hcDogdGV4dHVyZX0pO1xuICAgICAgIGNvbnN0IHBsYW5lID0gbmV3IE1lc2gocGxhbmVHZW9tLCBtYXRlcmlhbClcbiAgICAgICBwbGFuZS5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSlcbiAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXRORlREYXRhJywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHZhciBtc2cgPSBldi5kZXRhaWxcbiAgICAgICAgICAgIHBsYW5lLnBvc2l0aW9uLnkgPSAobXNnLmhlaWdodCAvIG1zZy5kcGkgKiAyLjU0ICogMTApIC8gMi4wXG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi54ID0gKG1zZy53aWR0aCAvIG1zZy5kcGkgKiAyLjU0ICogMTApIC8gMi4wXG4gICAgICAgfSlcbiAgICAgICAvL3RoaXMucm9vdC5hZGQocGxhbmUpXG4gICAgfVxuICAgIHB1YmxpYyBhZGRWaWRlbyAoaWQ6IHN0cmluZywgc2NhbGU6IG51bWJlcikge1xuICAgICAgIC8vY29uc3Qgcm9vdCA9IHRoaXMucm9vdFxuICAgICAgIGNvbnN0IEFSVmlkZW86IEhUTUxWaWRlb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTFZpZGVvRWxlbWVudDtcbiAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFZpZGVvVGV4dHVyZShBUlZpZGVvIGFzIEhUTUxWaWRlb0VsZW1lbnQpXG4gICAgICAgY29uc3QgbWF0ID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4YmJiYmZmLCBtYXA6IHRleHR1cmUgfSlcbiAgICAgICBBUlZpZGVvLnBsYXkoKVxuICAgICAgIGNvbnN0IHBsYW5lR2VvbSA9IG5ldyBQbGFuZUdlb21ldHJ5KDEsIDEsIDEsIDEpXG4gICAgICAgY29uc3QgcGxhbmUgPSBuZXcgTWVzaChwbGFuZUdlb20sIG1hdClcbiAgICAgICBwbGFuZS5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSlcbiAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnZXRORlREYXRhJywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICAgdmFyIG1zZyA9IGV2LmRldGFpbFxuICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gKG1zZy5oZWlnaHQgLyBtc2cuZHBpICogMi41NCAqIDEwKSAvIDIuMFxuICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi54ID0gKG1zZy53aWR0aCAvIG1zZy5kcGkgKiAyLjU0ICogMTApIC8gMi4wXG4gICAgICAgfSlcbiAgICAgICAvL3RoaXMucm9vdC5hZGQocGxhbmUpXG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgcHJpdmF0ZSBzdGF0aWMgdHJhY2tlZE1hdHJpeDogYW55ID0ge1xuICAgICAgLy8gZm9yIGludGVycG9sYXRpb25cbiAgICAgIGRlbHRhOiBbXG4gICAgICAgICAgMCwgMCwgMCwgMCxcbiAgICAgICAgICAwLCAwLCAwLCAwLFxuICAgICAgICAgIDAsIDAsIDAsIDAsXG4gICAgICAgICAgMCwgMCwgMCwgMFxuICAgICAgXSxcbiAgICAgIGludGVycG9sYXRlZDogW1xuICAgICAgICAgIDAsIDAsIDAsIDAsXG4gICAgICAgICAgMCwgMCwgMCwgMCxcbiAgICAgICAgICAwLCAwLCAwLCAwLFxuICAgICAgICAgIDAsIDAsIDAsIDBcbiAgICAgIF1cbiAgfVxuICAvL3ByaXZhdGUgc3RhdGljIGludGVycG9sYXRpb25GYWN0b3I6IG51bWJlciA9IDI0XG4gIHN0YXRpYyBpbnRlcnBvbGF0ZSAod29ybGQ6IGFueSkge1xuICAgIGNvbnN0IGludGVycG9sYXRpb25GYWN0b3IgPSAyNFxuXG4gICAgLy8gaW50ZXJwb2xhdGUgbWF0cml4XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICB0aGlzLnRyYWNrZWRNYXRyaXguZGVsdGFbaV0gPSB3b3JsZFtpXSAtIHRoaXMudHJhY2tlZE1hdHJpeC5pbnRlcnBvbGF0ZWRbaV1cbiAgICAgIHRoaXMudHJhY2tlZE1hdHJpeC5pbnRlcnBvbGF0ZWRbaV0gPVxuICAgICAgICAgICAgICAgICAgdGhpcy50cmFja2VkTWF0cml4LmludGVycG9sYXRlZFtpXSArXG4gICAgICAgICAgICAgICAgICB0aGlzLnRyYWNrZWRNYXRyaXguZGVsdGFbaV0gLyBpbnRlcnBvbGF0aW9uRmFjdG9yXG4gICAgIH1cbiAgICAgcmV0dXJuIHRoaXMudHJhY2tlZE1hdHJpeC5pbnRlcnBvbGF0ZWRcbiAgIH1cblxuICBzdGF0aWMgaXNNb2JpbGUgKCkge1xuICAgIHJldHVybiAvQW5kcm9pZHxtb2JpbGV8aVBhZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG4gIH1cblxuICBzdGF0aWMgc2V0TWF0cml4IChtYXRyaXg6IGFueSwgdmFsdWU6IGFueSkge1xuICAgIGNvbnN0IGFycmF5OiBhbnkgPSBbXVxuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICBhcnJheVtrZXldID0gdmFsdWVba2V5XVxuICAgIH1cbiAgICBpZiAodHlwZW9mIG1hdHJpeC5lbGVtZW50cy5zZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG1hdHJpeC5lbGVtZW50cy5zZXQoYXJyYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdHJpeC5lbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoYXJyYXkpXG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHtcblx0QW5pbWF0aW9uQ2xpcCxcblx0Qm9uZSxcblx0Qm94Myxcblx0QnVmZmVyQXR0cmlidXRlLFxuXHRCdWZmZXJHZW9tZXRyeSxcblx0Q2FudmFzVGV4dHVyZSxcblx0Q2xhbXBUb0VkZ2VXcmFwcGluZyxcblx0Q29sb3IsXG5cdERpcmVjdGlvbmFsTGlnaHQsXG5cdERvdWJsZVNpZGUsXG5cdEZpbGVMb2FkZXIsXG5cdEZyb250U2lkZSxcblx0R3JvdXAsXG5cdEltYWdlQml0bWFwTG9hZGVyLFxuXHRJbnRlcmxlYXZlZEJ1ZmZlcixcblx0SW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUsXG5cdEludGVycG9sYW50LFxuXHRJbnRlcnBvbGF0ZURpc2NyZXRlLFxuXHRJbnRlcnBvbGF0ZUxpbmVhcixcblx0TGluZSxcblx0TGluZUJhc2ljTWF0ZXJpYWwsXG5cdExpbmVMb29wLFxuXHRMaW5lU2VnbWVudHMsXG5cdExpbmVhckZpbHRlcixcblx0TGluZWFyTWlwbWFwTGluZWFyRmlsdGVyLFxuXHRMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyLFxuXHRMb2FkZXIsXG5cdExvYWRlclV0aWxzLFxuXHRNYXRlcmlhbCxcblx0TWF0aFV0aWxzLFxuXHRNYXRyaXg0LFxuXHRNZXNoLFxuXHRNZXNoQmFzaWNNYXRlcmlhbCxcblx0TWVzaFBoeXNpY2FsTWF0ZXJpYWwsXG5cdE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxuXHRNaXJyb3JlZFJlcGVhdFdyYXBwaW5nLFxuXHROZWFyZXN0RmlsdGVyLFxuXHROZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyLFxuXHROZWFyZXN0TWlwbWFwTmVhcmVzdEZpbHRlcixcblx0TnVtYmVyS2V5ZnJhbWVUcmFjayxcblx0T2JqZWN0M0QsXG5cdE9ydGhvZ3JhcGhpY0NhbWVyYSxcblx0UGVyc3BlY3RpdmVDYW1lcmEsXG5cdFBvaW50TGlnaHQsXG5cdFBvaW50cyxcblx0UG9pbnRzTWF0ZXJpYWwsXG5cdFByb3BlcnR5QmluZGluZyxcblx0UXVhdGVybmlvbktleWZyYW1lVHJhY2ssXG5cdFJHQkZvcm1hdCxcblx0UmVwZWF0V3JhcHBpbmcsXG5cdFNrZWxldG9uLFxuXHRTa2lubmVkTWVzaCxcblx0U3BoZXJlLFxuXHRTcG90TGlnaHQsXG5cdFRhbmdlbnRTcGFjZU5vcm1hbE1hcCxcblx0VGV4dHVyZUxvYWRlcixcblx0VHJpYW5nbGVGYW5EcmF3TW9kZSxcblx0VHJpYW5nbGVTdHJpcERyYXdNb2RlLFxuXHRWZWN0b3IyLFxuXHRWZWN0b3IzLFxuXHRWZWN0b3JLZXlmcmFtZVRyYWNrLFxuXHRzUkdCRW5jb2Rpbmdcbn0gZnJvbSAndGhyZWUnO1xuXG5jbGFzcyBHTFRGTG9hZGVyIGV4dGVuZHMgTG9hZGVyIHtcblxuXHRjb25zdHJ1Y3RvciggbWFuYWdlciApIHtcblxuXHRcdHN1cGVyKCBtYW5hZ2VyICk7XG5cblx0XHR0aGlzLmRyYWNvTG9hZGVyID0gbnVsbDtcblx0XHR0aGlzLmt0eDJMb2FkZXIgPSBudWxsO1xuXHRcdHRoaXMubWVzaG9wdERlY29kZXIgPSBudWxsO1xuXG5cdFx0dGhpcy5wbHVnaW5DYWxsYmFja3MgPSBbXTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNDbGVhcmNvYXRFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURlRleHR1cmVCYXNpc1VFeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURlRleHR1cmVXZWJQRXh0ZW5zaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoIGZ1bmN0aW9uICggcGFyc2VyICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IEdMVEZNYXRlcmlhbHNUcmFuc21pc3Npb25FeHRlbnNpb24oIHBhcnNlciApO1xuXG5cdFx0fSApO1xuXG5cdFx0dGhpcy5yZWdpc3RlciggZnVuY3Rpb24gKCBwYXJzZXIgKSB7XG5cblx0XHRcdHJldHVybiBuZXcgR0xURkxpZ2h0c0V4dGVuc2lvbiggcGFyc2VyICk7XG5cblx0XHR9ICk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKCBmdW5jdGlvbiAoIHBhcnNlciApIHtcblxuXHRcdFx0cmV0dXJuIG5ldyBHTFRGTWVzaG9wdENvbXByZXNzaW9uKCBwYXJzZXIgKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0bG9hZCggdXJsLCBvbkxvYWQsIG9uUHJvZ3Jlc3MsIG9uRXJyb3IgKSB7XG5cblx0XHRjb25zdCBzY29wZSA9IHRoaXM7XG5cblx0XHRsZXQgcmVzb3VyY2VQYXRoO1xuXG5cdFx0aWYgKCB0aGlzLnJlc291cmNlUGF0aCAhPT0gJycgKSB7XG5cblx0XHRcdHJlc291cmNlUGF0aCA9IHRoaXMucmVzb3VyY2VQYXRoO1xuXG5cdFx0fSBlbHNlIGlmICggdGhpcy5wYXRoICE9PSAnJyApIHtcblxuXHRcdFx0cmVzb3VyY2VQYXRoID0gdGhpcy5wYXRoO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0cmVzb3VyY2VQYXRoID0gTG9hZGVyVXRpbHMuZXh0cmFjdFVybEJhc2UoIHVybCApO1xuXG5cdFx0fVxuXG5cdFx0Ly8gVGVsbHMgdGhlIExvYWRpbmdNYW5hZ2VyIHRvIHRyYWNrIGFuIGV4dHJhIGl0ZW0sIHdoaWNoIHJlc29sdmVzIGFmdGVyXG5cdFx0Ly8gdGhlIG1vZGVsIGlzIGZ1bGx5IGxvYWRlZC4gVGhpcyBtZWFucyB0aGUgY291bnQgb2YgaXRlbXMgbG9hZGVkIHdpbGxcblx0XHQvLyBiZSBpbmNvcnJlY3QsIGJ1dCBlbnN1cmVzIG1hbmFnZXIub25Mb2FkKCkgZG9lcyBub3QgZmlyZSBlYXJseS5cblx0XHR0aGlzLm1hbmFnZXIuaXRlbVN0YXJ0KCB1cmwgKTtcblxuXHRcdGNvbnN0IF9vbkVycm9yID0gZnVuY3Rpb24gKCBlICkge1xuXG5cdFx0XHRpZiAoIG9uRXJyb3IgKSB7XG5cblx0XHRcdFx0b25FcnJvciggZSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY29wZS5tYW5hZ2VyLml0ZW1FcnJvciggdXJsICk7XG5cdFx0XHRzY29wZS5tYW5hZ2VyLml0ZW1FbmQoIHVybCApO1xuXG5cdFx0fTtcblxuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBGaWxlTG9hZGVyKCB0aGlzLm1hbmFnZXIgKTtcblxuXHRcdGxvYWRlci5zZXRQYXRoKCB0aGlzLnBhdGggKTtcblx0XHRsb2FkZXIuc2V0UmVzcG9uc2VUeXBlKCAnYXJyYXlidWZmZXInICk7XG5cdFx0bG9hZGVyLnNldFJlcXVlc3RIZWFkZXIoIHRoaXMucmVxdWVzdEhlYWRlciApO1xuXHRcdGxvYWRlci5zZXRXaXRoQ3JlZGVudGlhbHMoIHRoaXMud2l0aENyZWRlbnRpYWxzICk7XG5cblx0XHRsb2FkZXIubG9hZCggdXJsLCBmdW5jdGlvbiAoIGRhdGEgKSB7XG5cblx0XHRcdHRyeSB7XG5cblx0XHRcdFx0c2NvcGUucGFyc2UoIGRhdGEsIHJlc291cmNlUGF0aCwgZnVuY3Rpb24gKCBnbHRmICkge1xuXG5cdFx0XHRcdFx0b25Mb2FkKCBnbHRmICk7XG5cblx0XHRcdFx0XHRzY29wZS5tYW5hZ2VyLml0ZW1FbmQoIHVybCApO1xuXG5cdFx0XHRcdH0sIF9vbkVycm9yICk7XG5cblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdF9vbkVycm9yKCBlICk7XG5cblx0XHRcdH1cblxuXHRcdH0sIG9uUHJvZ3Jlc3MsIF9vbkVycm9yICk7XG5cblx0fVxuXG5cdHNldERSQUNPTG9hZGVyKCBkcmFjb0xvYWRlciApIHtcblxuXHRcdHRoaXMuZHJhY29Mb2FkZXIgPSBkcmFjb0xvYWRlcjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9XG5cblx0c2V0RERTTG9hZGVyKCkge1xuXG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXG5cdFx0XHQnVEhSRUUuR0xURkxvYWRlcjogXCJNU0ZUX3RleHR1cmVfZGRzXCIgbm8gbG9uZ2VyIHN1cHBvcnRlZC4gUGxlYXNlIHVwZGF0ZSB0byBcIktIUl90ZXh0dXJlX2Jhc2lzdVwiLidcblxuXHRcdCk7XG5cblx0fVxuXG5cdHNldEtUWDJMb2FkZXIoIGt0eDJMb2FkZXIgKSB7XG5cblx0XHR0aGlzLmt0eDJMb2FkZXIgPSBrdHgyTG9hZGVyO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxuXHRzZXRNZXNob3B0RGVjb2RlciggbWVzaG9wdERlY29kZXIgKSB7XG5cblx0XHR0aGlzLm1lc2hvcHREZWNvZGVyID0gbWVzaG9wdERlY29kZXI7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG5cdHJlZ2lzdGVyKCBjYWxsYmFjayApIHtcblxuXHRcdGlmICggdGhpcy5wbHVnaW5DYWxsYmFja3MuaW5kZXhPZiggY2FsbGJhY2sgKSA9PT0gLSAxICkge1xuXG5cdFx0XHR0aGlzLnBsdWdpbkNhbGxiYWNrcy5wdXNoKCBjYWxsYmFjayApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG5cdHVucmVnaXN0ZXIoIGNhbGxiYWNrICkge1xuXG5cdFx0aWYgKCB0aGlzLnBsdWdpbkNhbGxiYWNrcy5pbmRleE9mKCBjYWxsYmFjayApICE9PSAtIDEgKSB7XG5cblx0XHRcdHRoaXMucGx1Z2luQ2FsbGJhY2tzLnNwbGljZSggdGhpcy5wbHVnaW5DYWxsYmFja3MuaW5kZXhPZiggY2FsbGJhY2sgKSwgMSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG5cdHBhcnNlKCBkYXRhLCBwYXRoLCBvbkxvYWQsIG9uRXJyb3IgKSB7XG5cblx0XHRsZXQgY29udGVudDtcblx0XHRjb25zdCBleHRlbnNpb25zID0ge307XG5cdFx0Y29uc3QgcGx1Z2lucyA9IHt9O1xuXG5cdFx0aWYgKCB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgKSB7XG5cblx0XHRcdGNvbnRlbnQgPSBkYXRhO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc3QgbWFnaWMgPSBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KCBuZXcgVWludDhBcnJheSggZGF0YSwgMCwgNCApICk7XG5cblx0XHRcdGlmICggbWFnaWMgPT09IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDICkge1xuXG5cdFx0XHRcdHRyeSB7XG5cblx0XHRcdFx0XHRleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURiBdID0gbmV3IEdMVEZCaW5hcnlFeHRlbnNpb24oIGRhdGEgKTtcblxuXHRcdFx0XHR9IGNhdGNoICggZXJyb3IgKSB7XG5cblx0XHRcdFx0XHRpZiAoIG9uRXJyb3IgKSBvbkVycm9yKCBlcnJvciApO1xuXHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29udGVudCA9IGV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGIF0uY29udGVudDtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb250ZW50ID0gTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggbmV3IFVpbnQ4QXJyYXkoIGRhdGEgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRjb25zdCBqc29uID0gSlNPTi5wYXJzZSggY29udGVudCApO1xuXG5cdFx0aWYgKCBqc29uLmFzc2V0ID09PSB1bmRlZmluZWQgfHwganNvbi5hc3NldC52ZXJzaW9uWyAwIF0gPCAyICkge1xuXG5cdFx0XHRpZiAoIG9uRXJyb3IgKSBvbkVycm9yKCBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBhc3NldC4gZ2xURiB2ZXJzaW9ucyA+PTIuMCBhcmUgc3VwcG9ydGVkLicgKSApO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyc2VyID0gbmV3IEdMVEZQYXJzZXIoIGpzb24sIHtcblxuXHRcdFx0cGF0aDogcGF0aCB8fCB0aGlzLnJlc291cmNlUGF0aCB8fCAnJyxcblx0XHRcdGNyb3NzT3JpZ2luOiB0aGlzLmNyb3NzT3JpZ2luLFxuXHRcdFx0cmVxdWVzdEhlYWRlcjogdGhpcy5yZXF1ZXN0SGVhZGVyLFxuXHRcdFx0bWFuYWdlcjogdGhpcy5tYW5hZ2VyLFxuXHRcdFx0a3R4MkxvYWRlcjogdGhpcy5rdHgyTG9hZGVyLFxuXHRcdFx0bWVzaG9wdERlY29kZXI6IHRoaXMubWVzaG9wdERlY29kZXJcblxuXHRcdH0gKTtcblxuXHRcdHBhcnNlci5maWxlTG9hZGVyLnNldFJlcXVlc3RIZWFkZXIoIHRoaXMucmVxdWVzdEhlYWRlciApO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW5DYWxsYmFja3MubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCBwbHVnaW4gPSB0aGlzLnBsdWdpbkNhbGxiYWNrc1sgaSBdKCBwYXJzZXIgKTtcblx0XHRcdHBsdWdpbnNbIHBsdWdpbi5uYW1lIF0gPSBwbHVnaW47XG5cblx0XHRcdC8vIFdvcmthcm91bmQgdG8gYXZvaWQgZGV0ZXJtaW5pbmcgYXMgdW5rbm93biBleHRlbnNpb25cblx0XHRcdC8vIGluIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSgpLlxuXHRcdFx0Ly8gUmVtb3ZlIHRoaXMgd29ya2Fyb3VuZCBpZiB3ZSBtb3ZlIGFsbCB0aGUgZXhpc3Rpbmdcblx0XHRcdC8vIGV4dGVuc2lvbiBoYW5kbGVycyB0byBwbHVnaW4gc3lzdGVtXG5cdFx0XHRleHRlbnNpb25zWyBwbHVnaW4ubmFtZSBdID0gdHJ1ZTtcblxuXHRcdH1cblxuXHRcdGlmICgganNvbi5leHRlbnNpb25zVXNlZCApIHtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwganNvbi5leHRlbnNpb25zVXNlZC5sZW5ndGg7ICsrIGkgKSB7XG5cblx0XHRcdFx0Y29uc3QgZXh0ZW5zaW9uTmFtZSA9IGpzb24uZXh0ZW5zaW9uc1VzZWRbIGkgXTtcblx0XHRcdFx0Y29uc3QgZXh0ZW5zaW9uc1JlcXVpcmVkID0ganNvbi5leHRlbnNpb25zUmVxdWlyZWQgfHwgW107XG5cblx0XHRcdFx0c3dpdGNoICggZXh0ZW5zaW9uTmFtZSApIHtcblxuXHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbigpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTUzpcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGTWF0ZXJpYWxzUGJyU3BlY3VsYXJHbG9zc2luZXNzRXh0ZW5zaW9uKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTjpcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGRHJhY29NZXNoQ29tcHJlc3Npb25FeHRlbnNpb24oIGpzb24sIHRoaXMuZHJhY29Mb2FkZXIgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STTpcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnNbIGV4dGVuc2lvbk5hbWUgXSA9IG5ldyBHTFRGVGV4dHVyZVRyYW5zZm9ybUV4dGVuc2lvbigpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIEVYVEVOU0lPTlMuS0hSX01FU0hfUVVBTlRJWkFUSU9OOlxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uc1sgZXh0ZW5zaW9uTmFtZSBdID0gbmV3IEdMVEZNZXNoUXVhbnRpemF0aW9uRXh0ZW5zaW9uKCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRcdGlmICggZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoIGV4dGVuc2lvbk5hbWUgKSA+PSAwICYmIHBsdWdpbnNbIGV4dGVuc2lvbk5hbWUgXSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IFVua25vd24gZXh0ZW5zaW9uIFwiJyArIGV4dGVuc2lvbk5hbWUgKyAnXCIuJyApO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRwYXJzZXIuc2V0RXh0ZW5zaW9ucyggZXh0ZW5zaW9ucyApO1xuXHRcdHBhcnNlci5zZXRQbHVnaW5zKCBwbHVnaW5zICk7XG5cdFx0cGFyc2VyLnBhcnNlKCBvbkxvYWQsIG9uRXJyb3IgKTtcblxuXHR9XG5cbn1cblxuLyogR0xURlJFR0lTVFJZICovXG5cbmZ1bmN0aW9uIEdMVEZSZWdpc3RyeSgpIHtcblxuXHRsZXQgb2JqZWN0cyA9IHt9O1xuXG5cdHJldHVyblx0e1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdFx0cmV0dXJuIG9iamVjdHNbIGtleSBdO1xuXG5cdFx0fSxcblxuXHRcdGFkZDogZnVuY3Rpb24gKCBrZXksIG9iamVjdCApIHtcblxuXHRcdFx0b2JqZWN0c1sga2V5IF0gPSBvYmplY3Q7XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlOiBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdFx0ZGVsZXRlIG9iamVjdHNbIGtleSBdO1xuXG5cdFx0fSxcblxuXHRcdHJlbW92ZUFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRvYmplY3RzID0ge307XG5cblx0XHR9XG5cblx0fTtcblxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKiogRVhURU5TSU9OUyAqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmNvbnN0IEVYVEVOU0lPTlMgPSB7XG5cdEtIUl9CSU5BUllfR0xURjogJ0tIUl9iaW5hcnlfZ2xURicsXG5cdEtIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OOiAnS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24nLFxuXHRLSFJfTElHSFRTX1BVTkNUVUFMOiAnS0hSX2xpZ2h0c19wdW5jdHVhbCcsXG5cdEtIUl9NQVRFUklBTFNfQ0xFQVJDT0FUOiAnS0hSX21hdGVyaWFsc19jbGVhcmNvYXQnLFxuXHRLSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTOiAnS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3MnLFxuXHRLSFJfTUFURVJJQUxTX1RSQU5TTUlTU0lPTjogJ0tIUl9tYXRlcmlhbHNfdHJhbnNtaXNzaW9uJyxcblx0S0hSX01BVEVSSUFMU19VTkxJVDogJ0tIUl9tYXRlcmlhbHNfdW5saXQnLFxuXHRLSFJfVEVYVFVSRV9CQVNJU1U6ICdLSFJfdGV4dHVyZV9iYXNpc3UnLFxuXHRLSFJfVEVYVFVSRV9UUkFOU0ZPUk06ICdLSFJfdGV4dHVyZV90cmFuc2Zvcm0nLFxuXHRLSFJfTUVTSF9RVUFOVElaQVRJT046ICdLSFJfbWVzaF9xdWFudGl6YXRpb24nLFxuXHRFWFRfVEVYVFVSRV9XRUJQOiAnRVhUX3RleHR1cmVfd2VicCcsXG5cdEVYVF9NRVNIT1BUX0NPTVBSRVNTSU9OOiAnRVhUX21lc2hvcHRfY29tcHJlc3Npb24nXG59O1xuXG4vKipcblx0ICogUHVuY3R1YWwgTGlnaHRzIEV4dGVuc2lvblxuXHQgKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbGlnaHRzX3B1bmN0dWFsXG5cdCAqL1xuY2xhc3MgR0xURkxpZ2h0c0V4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0xJR0hUU19QVU5DVFVBTDtcblxuXHRcdC8vIE9iamVjdDNEIGluc3RhbmNlIGNhY2hlc1xuXHRcdHRoaXMuY2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xuXG5cdH1cblxuXHRfbWFya0RlZnMoKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBub2RlRGVmcyA9IHRoaXMucGFyc2VyLmpzb24ubm9kZXMgfHwgW107XG5cblx0XHRmb3IgKCBsZXQgbm9kZUluZGV4ID0gMCwgbm9kZUxlbmd0aCA9IG5vZGVEZWZzLmxlbmd0aDsgbm9kZUluZGV4IDwgbm9kZUxlbmd0aDsgbm9kZUluZGV4ICsrICkge1xuXG5cdFx0XHRjb25zdCBub2RlRGVmID0gbm9kZURlZnNbIG5vZGVJbmRleCBdO1xuXG5cdFx0XHRpZiAoIG5vZGVEZWYuZXh0ZW5zaW9uc1xuXHRcdFx0XHRcdCYmIG5vZGVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF1cblx0XHRcdFx0XHQmJiBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmxpZ2h0ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGFyc2VyLl9hZGROb2RlUmVmKCB0aGlzLmNhY2hlLCBub2RlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmxpZ2h0ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0X2xvYWRMaWdodCggbGlnaHRJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IGNhY2hlS2V5ID0gJ2xpZ2h0OicgKyBsaWdodEluZGV4O1xuXHRcdGxldCBkZXBlbmRlbmN5ID0gcGFyc2VyLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdGlmICggZGVwZW5kZW5jeSApIHJldHVybiBkZXBlbmRlbmN5O1xuXG5cdFx0Y29uc3QganNvbiA9IHBhcnNlci5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSAoIGpzb24uZXh0ZW5zaW9ucyAmJiBqc29uLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkgfHwge307XG5cdFx0Y29uc3QgbGlnaHREZWZzID0gZXh0ZW5zaW9ucy5saWdodHMgfHwgW107XG5cdFx0Y29uc3QgbGlnaHREZWYgPSBsaWdodERlZnNbIGxpZ2h0SW5kZXggXTtcblx0XHRsZXQgbGlnaHROb2RlO1xuXG5cdFx0Y29uc3QgY29sb3IgPSBuZXcgQ29sb3IoIDB4ZmZmZmZmICk7XG5cblx0XHRpZiAoIGxpZ2h0RGVmLmNvbG9yICE9PSB1bmRlZmluZWQgKSBjb2xvci5mcm9tQXJyYXkoIGxpZ2h0RGVmLmNvbG9yICk7XG5cblx0XHRjb25zdCByYW5nZSA9IGxpZ2h0RGVmLnJhbmdlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5yYW5nZSA6IDA7XG5cblx0XHRzd2l0Y2ggKCBsaWdodERlZi50eXBlICkge1xuXG5cdFx0XHRjYXNlICdkaXJlY3Rpb25hbCc6XG5cdFx0XHRcdGxpZ2h0Tm9kZSA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KCBjb2xvciApO1xuXHRcdFx0XHRsaWdodE5vZGUudGFyZ2V0LnBvc2l0aW9uLnNldCggMCwgMCwgLSAxICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5hZGQoIGxpZ2h0Tm9kZS50YXJnZXQgKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3BvaW50Jzpcblx0XHRcdFx0bGlnaHROb2RlID0gbmV3IFBvaW50TGlnaHQoIGNvbG9yICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5kaXN0YW5jZSA9IHJhbmdlO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnc3BvdCc6XG5cdFx0XHRcdGxpZ2h0Tm9kZSA9IG5ldyBTcG90TGlnaHQoIGNvbG9yICk7XG5cdFx0XHRcdGxpZ2h0Tm9kZS5kaXN0YW5jZSA9IHJhbmdlO1xuXHRcdFx0XHQvLyBIYW5kbGUgc3BvdGxpZ2h0IHByb3BlcnRpZXMuXG5cdFx0XHRcdGxpZ2h0RGVmLnNwb3QgPSBsaWdodERlZi5zcG90IHx8IHt9O1xuXHRcdFx0XHRsaWdodERlZi5zcG90LmlubmVyQ29uZUFuZ2xlID0gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSAhPT0gdW5kZWZpbmVkID8gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSA6IDA7XG5cdFx0XHRcdGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGUgPSBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlIDogTWF0aC5QSSAvIDQuMDtcblx0XHRcdFx0bGlnaHROb2RlLmFuZ2xlID0gbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZTtcblx0XHRcdFx0bGlnaHROb2RlLnBlbnVtYnJhID0gMS4wIC0gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSAvIGxpZ2h0RGVmLnNwb3Qub3V0ZXJDb25lQW5nbGU7XG5cdFx0XHRcdGxpZ2h0Tm9kZS50YXJnZXQucG9zaXRpb24uc2V0KCAwLCAwLCAtIDEgKTtcblx0XHRcdFx0bGlnaHROb2RlLmFkZCggbGlnaHROb2RlLnRhcmdldCApO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5leHBlY3RlZCBsaWdodCB0eXBlOiAnICsgbGlnaHREZWYudHlwZSApO1xuXG5cdFx0fVxuXG5cdFx0Ly8gU29tZSBsaWdodHMgKGUuZy4gc3BvdCkgZGVmYXVsdCB0byBhIHBvc2l0aW9uIG90aGVyIHRoYW4gdGhlIG9yaWdpbi4gUmVzZXQgdGhlIHBvc2l0aW9uXG5cdFx0Ly8gaGVyZSwgYmVjYXVzZSBub2RlLWxldmVsIHBhcnNpbmcgd2lsbCBvbmx5IG92ZXJyaWRlIHBvc2l0aW9uIGlmIGV4cGxpY2l0bHkgc3BlY2lmaWVkLlxuXHRcdGxpZ2h0Tm9kZS5wb3NpdGlvbi5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdGxpZ2h0Tm9kZS5kZWNheSA9IDI7XG5cblx0XHRpZiAoIGxpZ2h0RGVmLmludGVuc2l0eSAhPT0gdW5kZWZpbmVkICkgbGlnaHROb2RlLmludGVuc2l0eSA9IGxpZ2h0RGVmLmludGVuc2l0eTtcblxuXHRcdGxpZ2h0Tm9kZS5uYW1lID0gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIGxpZ2h0RGVmLm5hbWUgfHwgKCAnbGlnaHRfJyArIGxpZ2h0SW5kZXggKSApO1xuXG5cdFx0ZGVwZW5kZW5jeSA9IFByb21pc2UucmVzb2x2ZSggbGlnaHROb2RlICk7XG5cblx0XHRwYXJzZXIuY2FjaGUuYWRkKCBjYWNoZUtleSwgZGVwZW5kZW5jeSApO1xuXG5cdFx0cmV0dXJuIGRlcGVuZGVuY3k7XG5cblx0fVxuXG5cdGNyZWF0ZU5vZGVBdHRhY2htZW50KCBub2RlSW5kZXggKSB7XG5cblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBqc29uID0gcGFyc2VyLmpzb247XG5cdFx0Y29uc3Qgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJbmRleCBdO1xuXHRcdGNvbnN0IGxpZ2h0RGVmID0gKCBub2RlRGVmLmV4dGVuc2lvbnMgJiYgbm9kZURlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHx8IHt9O1xuXHRcdGNvbnN0IGxpZ2h0SW5kZXggPSBsaWdodERlZi5saWdodDtcblxuXHRcdGlmICggbGlnaHRJbmRleCA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIG51bGw7XG5cblx0XHRyZXR1cm4gdGhpcy5fbG9hZExpZ2h0KCBsaWdodEluZGV4ICkudGhlbiggZnVuY3Rpb24gKCBsaWdodCApIHtcblxuXHRcdFx0cmV0dXJuIHBhcnNlci5fZ2V0Tm9kZVJlZiggc2VsZi5jYWNoZSwgbGlnaHRJbmRleCwgbGlnaHQgKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cbn1cblxuLyoqXG5cdCAqIFVubGl0IE1hdGVyaWFscyBFeHRlbnNpb25cblx0ICpcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc191bmxpdFxuXHQgKi9cbmNsYXNzIEdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQ7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSgpIHtcblxuXHRcdHJldHVybiBNZXNoQmFzaWNNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kUGFyYW1zKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApIHtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XG5cdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IDEuMDtcblxuXHRcdGNvbnN0IG1ldGFsbGljUm91Z2huZXNzID0gbWF0ZXJpYWxEZWYucGJyTWV0YWxsaWNSb3VnaG5lc3M7XG5cblx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzICkge1xuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvciApICkge1xuXG5cdFx0XHRcdGNvbnN0IGFycmF5ID0gbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yO1xuXG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yLmZyb21BcnJheSggYXJyYXkgKTtcblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IGFycmF5WyAzIF07XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdtYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuXHQgKiBDbGVhcmNvYXQgTWF0ZXJpYWxzIEV4dGVuc2lvblxuXHQgKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWF0ZXJpYWxzX2NsZWFyY29hdFxuXHQgKi9cbmNsYXNzIEdMVEZNYXRlcmlhbHNDbGVhcmNvYXRFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfQ0xFQVJDT0FUO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoIG1hdGVyaWFsSW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIE1lc2hQaHlzaWNhbE1hdGVyaWFsO1xuXG5cdH1cblxuXHRleHRlbmRNYXRlcmlhbFBhcmFtcyggbWF0ZXJpYWxJbmRleCwgbWF0ZXJpYWxQYXJhbXMgKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzLnBhcnNlcjtcblx0XHRjb25zdCBtYXRlcmlhbERlZiA9IHBhcnNlci5qc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0aWYgKCAhIG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwgISBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXSApIHtcblxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Y29uc3QgZXh0ZW5zaW9uID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRGYWN0b3IgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuY2xlYXJjb2F0ID0gZXh0ZW5zaW9uLmNsZWFyY29hdEZhY3RvcjtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdFRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdjbGVhcmNvYXRNYXAnLCBleHRlbnNpb24uY2xlYXJjb2F0VGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuY2xlYXJjb2F0Um91Z2huZXNzID0gZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc0ZhY3RvcjtcblxuXHRcdH1cblxuXHRcdGlmICggZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdjbGVhcmNvYXRSb3VnaG5lc3NNYXAnLCBleHRlbnNpb24uY2xlYXJjb2F0Um91Z2huZXNzVGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnY2xlYXJjb2F0Tm9ybWFsTWFwJywgZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUgKSApO1xuXG5cdFx0XHRpZiAoIGV4dGVuc2lvbi5jbGVhcmNvYXROb3JtYWxUZXh0dXJlLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Y29uc3Qgc2NhbGUgPSBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS5zY2FsZTtcblxuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xMTQzOCNpc3N1ZWNvbW1lbnQtNTA3MDAzOTk1XG5cdFx0XHRcdG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdE5vcm1hbFNjYWxlID0gbmV3IFZlY3RvcjIoIHNjYWxlLCAtIHNjYWxlICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxufVxuXG4vKipcblx0ICogVHJhbnNtaXNzaW9uIE1hdGVyaWFscyBFeHRlbnNpb25cblx0ICpcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc190cmFuc21pc3Npb25cblx0ICogRHJhZnQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9wdWxsLzE2OThcblx0ICovXG5jbGFzcyBHTFRGTWF0ZXJpYWxzVHJhbnNtaXNzaW9uRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5wYXJzZXIgPSBwYXJzZXI7XG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1RSQU5TTUlTU0lPTjtcblxuXHR9XG5cblx0Z2V0TWF0ZXJpYWxUeXBlKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSByZXR1cm4gbnVsbDtcblxuXHRcdHJldHVybiBNZXNoUGh5c2ljYWxNYXRlcmlhbDtcblxuXHR9XG5cblx0ZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBwYXJzZXIuanNvbi5tYXRlcmlhbHNbIG1hdGVyaWFsSW5kZXggXTtcblxuXHRcdGlmICggISBtYXRlcmlhbERlZi5leHRlbnNpb25zIHx8ICEgbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0gKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0aWYgKCBleHRlbnNpb24udHJhbnNtaXNzaW9uRmFjdG9yICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnRyYW5zbWlzc2lvbiA9IGV4dGVuc2lvbi50cmFuc21pc3Npb25GYWN0b3I7XG5cblx0XHR9XG5cblx0XHRpZiAoIGV4dGVuc2lvbi50cmFuc21pc3Npb25UZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAndHJhbnNtaXNzaW9uTWFwJywgZXh0ZW5zaW9uLnRyYW5zbWlzc2lvblRleHR1cmUgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG59XG5cbi8qKlxuXHQgKiBCYXNpc1UgVGV4dHVyZSBFeHRlbnNpb25cblx0ICpcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfYmFzaXN1XG5cdCAqL1xuY2xhc3MgR0xURlRleHR1cmVCYXNpc1VFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCBwYXJzZXIgKSB7XG5cblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9URVhUVVJFX0JBU0lTVTtcblxuXHR9XG5cblx0bG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXMucGFyc2VyO1xuXHRcdGNvbnN0IGpzb24gPSBwYXJzZXIuanNvbjtcblxuXHRcdGNvbnN0IHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcblxuXHRcdGlmICggISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnMgfHwgISB0ZXh0dXJlRGVmLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF07XG5cdFx0Y29uc3Qgc291cmNlID0ganNvbi5pbWFnZXNbIGV4dGVuc2lvbi5zb3VyY2UgXTtcblx0XHRjb25zdCBsb2FkZXIgPSBwYXJzZXIub3B0aW9ucy5rdHgyTG9hZGVyO1xuXG5cdFx0aWYgKCAhIGxvYWRlciApIHtcblxuXHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCAmJiBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCB0aGlzLm5hbWUgKSA+PSAwICkge1xuXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IHNldEtUWDJMb2FkZXIgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgS1RYMiB0ZXh0dXJlcycgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBBc3N1bWVzIHRoYXQgdGhlIGV4dGVuc2lvbiBpcyBvcHRpb25hbCBhbmQgdGhhdCBhIGZhbGxiYWNrIHRleHR1cmUgaXMgcHJlc2VudFxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZUltYWdlKCB0ZXh0dXJlSW5kZXgsIHNvdXJjZSwgbG9hZGVyICk7XG5cblx0fVxuXG59XG5cbi8qKlxuXHQgKiBXZWJQIFRleHR1cmUgRXh0ZW5zaW9uXG5cdCAqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9WZW5kb3IvRVhUX3RleHR1cmVfd2VicFxuXHQgKi9cbmNsYXNzIEdMVEZUZXh0dXJlV2ViUEV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIHBhcnNlciApIHtcblxuXHRcdHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuRVhUX1RFWFRVUkVfV0VCUDtcblx0XHR0aGlzLmlzU3VwcG9ydGVkID0gbnVsbDtcblxuXHR9XG5cblx0bG9hZFRleHR1cmUoIHRleHR1cmVJbmRleCApIHtcblxuXHRcdGNvbnN0IG5hbWUgPSB0aGlzLm5hbWU7XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcy5wYXJzZXI7XG5cdFx0Y29uc3QganNvbiA9IHBhcnNlci5qc29uO1xuXG5cdFx0Y29uc3QgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xuXG5cdFx0aWYgKCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9ucyB8fCAhIHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgbmFtZSBdICkge1xuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGV4dGVuc2lvbiA9IHRleHR1cmVEZWYuZXh0ZW5zaW9uc1sgbmFtZSBdO1xuXHRcdGNvbnN0IHNvdXJjZSA9IGpzb24uaW1hZ2VzWyBleHRlbnNpb24uc291cmNlIF07XG5cblx0XHRsZXQgbG9hZGVyID0gcGFyc2VyLnRleHR1cmVMb2FkZXI7XG5cdFx0aWYgKCBzb3VyY2UudXJpICkge1xuXG5cdFx0XHRjb25zdCBoYW5kbGVyID0gcGFyc2VyLm9wdGlvbnMubWFuYWdlci5nZXRIYW5kbGVyKCBzb3VyY2UudXJpICk7XG5cdFx0XHRpZiAoIGhhbmRsZXIgIT09IG51bGwgKSBsb2FkZXIgPSBoYW5kbGVyO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZGV0ZWN0U3VwcG9ydCgpLnRoZW4oIGZ1bmN0aW9uICggaXNTdXBwb3J0ZWQgKSB7XG5cblx0XHRcdGlmICggaXNTdXBwb3J0ZWQgKSByZXR1cm4gcGFyc2VyLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKTtcblxuXHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCAmJiBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCBuYW1lICkgPj0gMCApIHtcblxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBXZWJQIHJlcXVpcmVkIGJ5IGFzc2V0IGJ1dCB1bnN1cHBvcnRlZC4nICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gRmFsbCBiYWNrIHRvIFBORyBvciBKUEVHLlxuXHRcdFx0cmV0dXJuIHBhcnNlci5sb2FkVGV4dHVyZSggdGV4dHVyZUluZGV4ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdGRldGVjdFN1cHBvcnQoKSB7XG5cblx0XHRpZiAoICEgdGhpcy5pc1N1cHBvcnRlZCApIHtcblxuXHRcdFx0dGhpcy5pc1N1cHBvcnRlZCA9IG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUgKSB7XG5cblx0XHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdFx0XHQvLyBMb3NzeSB0ZXN0IGltYWdlLiBTdXBwb3J0IGZvciBsb3NzeSBpbWFnZXMgZG9lc24ndCBndWFyYW50ZWUgc3VwcG9ydCBmb3IgYWxsXG5cdFx0XHRcdC8vIFdlYlAgaW1hZ2VzLCB1bmZvcnR1bmF0ZWx5LlxuXHRcdFx0XHRpbWFnZS5zcmMgPSAnZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmlJQUFBQlhSVUpRVmxBNElCWUFBQUF3QVFDZEFTb0JBQUVBRHNEK0phUUFBM0FBQUFBQSc7XG5cblx0XHRcdFx0aW1hZ2Uub25sb2FkID0gaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdHJlc29sdmUoIGltYWdlLmhlaWdodCA9PT0gMSApO1xuXG5cdFx0XHRcdH07XG5cblx0XHRcdH0gKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmlzU3VwcG9ydGVkO1xuXG5cdH1cblxufVxuXG4vKipcblx0KiBtZXNob3B0IEJ1ZmZlclZpZXcgQ29tcHJlc3Npb24gRXh0ZW5zaW9uXG5cdCpcblx0KiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvVmVuZG9yL0VYVF9tZXNob3B0X2NvbXByZXNzaW9uXG5cdCovXG5jbGFzcyBHTFRGTWVzaG9wdENvbXByZXNzaW9uIHtcblxuXHRjb25zdHJ1Y3RvciggcGFyc2VyICkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5FWFRfTUVTSE9QVF9DT01QUkVTU0lPTjtcblx0XHR0aGlzLnBhcnNlciA9IHBhcnNlcjtcblxuXHR9XG5cblx0bG9hZEJ1ZmZlclZpZXcoIGluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMucGFyc2VyLmpzb247XG5cdFx0Y29uc3QgYnVmZmVyVmlldyA9IGpzb24uYnVmZmVyVmlld3NbIGluZGV4IF07XG5cblx0XHRpZiAoIGJ1ZmZlclZpZXcuZXh0ZW5zaW9ucyAmJiBidWZmZXJWaWV3LmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdICkge1xuXG5cdFx0XHRjb25zdCBleHRlbnNpb25EZWYgPSBidWZmZXJWaWV3LmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdO1xuXG5cdFx0XHRjb25zdCBidWZmZXIgPSB0aGlzLnBhcnNlci5nZXREZXBlbmRlbmN5KCAnYnVmZmVyJywgZXh0ZW5zaW9uRGVmLmJ1ZmZlciApO1xuXHRcdFx0Y29uc3QgZGVjb2RlciA9IHRoaXMucGFyc2VyLm9wdGlvbnMubWVzaG9wdERlY29kZXI7XG5cblx0XHRcdGlmICggISBkZWNvZGVyIHx8ICEgZGVjb2Rlci5zdXBwb3J0ZWQgKSB7XG5cblx0XHRcdFx0aWYgKCBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCAmJiBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZC5pbmRleE9mKCB0aGlzLm5hbWUgKSA+PSAwICkge1xuXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogc2V0TWVzaG9wdERlY29kZXIgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgY29tcHJlc3NlZCBmaWxlcycgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gQXNzdW1lcyB0aGF0IHRoZSBleHRlbnNpb24gaXMgb3B0aW9uYWwgYW5kIHRoYXQgZmFsbGJhY2sgYnVmZmVyIGRhdGEgaXMgcHJlc2VudFxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIFsgYnVmZmVyLCBkZWNvZGVyLnJlYWR5IF0gKS50aGVuKCBmdW5jdGlvbiAoIHJlcyApIHtcblxuXHRcdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gZXh0ZW5zaW9uRGVmLmJ5dGVPZmZzZXQgfHwgMDtcblx0XHRcdFx0Y29uc3QgYnl0ZUxlbmd0aCA9IGV4dGVuc2lvbkRlZi5ieXRlTGVuZ3RoIHx8IDA7XG5cblx0XHRcdFx0Y29uc3QgY291bnQgPSBleHRlbnNpb25EZWYuY291bnQ7XG5cdFx0XHRcdGNvbnN0IHN0cmlkZSA9IGV4dGVuc2lvbkRlZi5ieXRlU3RyaWRlO1xuXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheUJ1ZmZlciggY291bnQgKiBzdHJpZGUgKTtcblx0XHRcdFx0Y29uc3Qgc291cmNlID0gbmV3IFVpbnQ4QXJyYXkoIHJlc1sgMCBdLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoICk7XG5cblx0XHRcdFx0ZGVjb2Rlci5kZWNvZGVHbHRmQnVmZmVyKCBuZXcgVWludDhBcnJheSggcmVzdWx0ICksIGNvdW50LCBzdHJpZGUsIHNvdXJjZSwgZXh0ZW5zaW9uRGVmLm1vZGUsIGV4dGVuc2lvbkRlZi5maWx0ZXIgKTtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbi8qIEJJTkFSWSBFWFRFTlNJT04gKi9cbmNvbnN0IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDID0gJ2dsVEYnO1xuY29uc3QgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIID0gMTI7XG5jb25zdCBCSU5BUllfRVhURU5TSU9OX0NIVU5LX1RZUEVTID0geyBKU09OOiAweDRFNEY1MzRBLCBCSU46IDB4MDA0RTQ5NDIgfTtcblxuY2xhc3MgR0xURkJpbmFyeUV4dGVuc2lvbiB7XG5cblx0Y29uc3RydWN0b3IoIGRhdGEgKSB7XG5cblx0XHR0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9CSU5BUllfR0xURjtcblx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xuXHRcdHRoaXMuYm9keSA9IG51bGw7XG5cblx0XHRjb25zdCBoZWFkZXJWaWV3ID0gbmV3IERhdGFWaWV3KCBkYXRhLCAwLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKTtcblxuXHRcdHRoaXMuaGVhZGVyID0ge1xuXHRcdFx0bWFnaWM6IExvYWRlclV0aWxzLmRlY29kZVRleHQoIG5ldyBVaW50OEFycmF5KCBkYXRhLnNsaWNlKCAwLCA0ICkgKSApLFxuXHRcdFx0dmVyc2lvbjogaGVhZGVyVmlldy5nZXRVaW50MzIoIDQsIHRydWUgKSxcblx0XHRcdGxlbmd0aDogaGVhZGVyVmlldy5nZXRVaW50MzIoIDgsIHRydWUgKVxuXHRcdH07XG5cblx0XHRpZiAoIHRoaXMuaGVhZGVyLm1hZ2ljICE9PSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9NQUdJQyApIHtcblxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgZ2xURi1CaW5hcnkgaGVhZGVyLicgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHRoaXMuaGVhZGVyLnZlcnNpb24gPCAyLjAgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IExlZ2FjeSBiaW5hcnkgZmlsZSBkZXRlY3RlZC4nICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBjaHVua0NvbnRlbnRzTGVuZ3RoID0gdGhpcy5oZWFkZXIubGVuZ3RoIC0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIO1xuXHRcdGNvbnN0IGNodW5rVmlldyA9IG5ldyBEYXRhVmlldyggZGF0YSwgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICk7XG5cdFx0bGV0IGNodW5rSW5kZXggPSAwO1xuXG5cdFx0d2hpbGUgKCBjaHVua0luZGV4IDwgY2h1bmtDb250ZW50c0xlbmd0aCApIHtcblxuXHRcdFx0Y29uc3QgY2h1bmtMZW5ndGggPSBjaHVua1ZpZXcuZ2V0VWludDMyKCBjaHVua0luZGV4LCB0cnVlICk7XG5cdFx0XHRjaHVua0luZGV4ICs9IDQ7XG5cblx0XHRcdGNvbnN0IGNodW5rVHlwZSA9IGNodW5rVmlldy5nZXRVaW50MzIoIGNodW5rSW5kZXgsIHRydWUgKTtcblx0XHRcdGNodW5rSW5kZXggKz0gNDtcblxuXHRcdFx0aWYgKCBjaHVua1R5cGUgPT09IEJJTkFSWV9FWFRFTlNJT05fQ0hVTktfVFlQRVMuSlNPTiApIHtcblxuXHRcdFx0XHRjb25zdCBjb250ZW50QXJyYXkgPSBuZXcgVWludDhBcnJheSggZGF0YSwgQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTEVOR1RIICsgY2h1bmtJbmRleCwgY2h1bmtMZW5ndGggKTtcblx0XHRcdFx0dGhpcy5jb250ZW50ID0gTG9hZGVyVXRpbHMuZGVjb2RlVGV4dCggY29udGVudEFycmF5ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGNodW5rVHlwZSA9PT0gQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUy5CSU4gKSB7XG5cblx0XHRcdFx0Y29uc3QgYnl0ZU9mZnNldCA9IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX0xFTkdUSCArIGNodW5rSW5kZXg7XG5cdFx0XHRcdHRoaXMuYm9keSA9IGRhdGEuc2xpY2UoIGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBjaHVua0xlbmd0aCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIENsaWVudHMgbXVzdCBpZ25vcmUgY2h1bmtzIHdpdGggdW5rbm93biB0eXBlcy5cblxuXHRcdFx0Y2h1bmtJbmRleCArPSBjaHVua0xlbmd0aDtcblxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5jb250ZW50ID09PSBudWxsICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBKU09OIGNvbnRlbnQgbm90IGZvdW5kLicgKTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyoqXG5cdCAqIERSQUNPIE1lc2ggQ29tcHJlc3Npb24gRXh0ZW5zaW9uXG5cdCAqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9kcmFjb19tZXNoX2NvbXByZXNzaW9uXG5cdCAqL1xuY2xhc3MgR0xURkRyYWNvTWVzaENvbXByZXNzaW9uRXh0ZW5zaW9uIHtcblxuXHRjb25zdHJ1Y3RvcigganNvbiwgZHJhY29Mb2FkZXIgKSB7XG5cblx0XHRpZiAoICEgZHJhY29Mb2FkZXIgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IE5vIERSQUNPTG9hZGVyIGluc3RhbmNlIHByb3ZpZGVkLicgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT047XG5cdFx0dGhpcy5qc29uID0ganNvbjtcblx0XHR0aGlzLmRyYWNvTG9hZGVyID0gZHJhY29Mb2FkZXI7XG5cdFx0dGhpcy5kcmFjb0xvYWRlci5wcmVsb2FkKCk7XG5cblx0fVxuXG5cdGRlY29kZVByaW1pdGl2ZSggcHJpbWl0aXZlLCBwYXJzZXIgKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGRyYWNvTG9hZGVyID0gdGhpcy5kcmFjb0xvYWRlcjtcblx0XHRjb25zdCBidWZmZXJWaWV3SW5kZXggPSBwcmltaXRpdmUuZXh0ZW5zaW9uc1sgdGhpcy5uYW1lIF0uYnVmZmVyVmlldztcblx0XHRjb25zdCBnbHRmQXR0cmlidXRlTWFwID0gcHJpbWl0aXZlLmV4dGVuc2lvbnNbIHRoaXMubmFtZSBdLmF0dHJpYnV0ZXM7XG5cdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVNYXAgPSB7fTtcblx0XHRjb25zdCBhdHRyaWJ1dGVOb3JtYWxpemVkTWFwID0ge307XG5cdFx0Y29uc3QgYXR0cmlidXRlVHlwZU1hcCA9IHt9O1xuXG5cdFx0Zm9yICggY29uc3QgYXR0cmlidXRlTmFtZSBpbiBnbHRmQXR0cmlidXRlTWFwICkge1xuXG5cdFx0XHRjb25zdCB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTWyBhdHRyaWJ1dGVOYW1lIF0gfHwgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHR0aHJlZUF0dHJpYnV0ZU1hcFsgdGhyZWVBdHRyaWJ1dGVOYW1lIF0gPSBnbHRmQXR0cmlidXRlTWFwWyBhdHRyaWJ1dGVOYW1lIF07XG5cblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBhdHRyaWJ1dGVOYW1lIGluIHByaW1pdGl2ZS5hdHRyaWJ1dGVzICkge1xuXG5cdFx0XHRjb25zdCB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTWyBhdHRyaWJ1dGVOYW1lIF0gfHwgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpZiAoIGdsdGZBdHRyaWJ1dGVNYXBbIGF0dHJpYnV0ZU5hbWUgXSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnN0IGFjY2Vzc29yRGVmID0ganNvbi5hY2Nlc3NvcnNbIHByaW1pdGl2ZS5hdHRyaWJ1dGVzWyBhdHRyaWJ1dGVOYW1lIF0gXTtcblx0XHRcdFx0Y29uc3QgY29tcG9uZW50VHlwZSA9IFdFQkdMX0NPTVBPTkVOVF9UWVBFU1sgYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZSBdO1xuXG5cdFx0XHRcdGF0dHJpYnV0ZVR5cGVNYXBbIHRocmVlQXR0cmlidXRlTmFtZSBdID0gY29tcG9uZW50VHlwZTtcblx0XHRcdFx0YXR0cmlidXRlTm9ybWFsaXplZE1hcFsgdGhyZWVBdHRyaWJ1dGVOYW1lIF0gPSBhY2Nlc3NvckRlZi5ub3JtYWxpemVkID09PSB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYnVmZmVyVmlld0luZGV4ICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXJWaWV3ICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcblxuXHRcdFx0XHRkcmFjb0xvYWRlci5kZWNvZGVEcmFjb0ZpbGUoIGJ1ZmZlclZpZXcsIGZ1bmN0aW9uICggZ2VvbWV0cnkgKSB7XG5cblx0XHRcdFx0XHRmb3IgKCBjb25zdCBhdHRyaWJ1dGVOYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSB7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZSA9IGdlb21ldHJ5LmF0dHJpYnV0ZXNbIGF0dHJpYnV0ZU5hbWUgXTtcblx0XHRcdFx0XHRcdGNvbnN0IG5vcm1hbGl6ZWQgPSBhdHRyaWJ1dGVOb3JtYWxpemVkTWFwWyBhdHRyaWJ1dGVOYW1lIF07XG5cblx0XHRcdFx0XHRcdGlmICggbm9ybWFsaXplZCAhPT0gdW5kZWZpbmVkICkgYXR0cmlidXRlLm5vcm1hbGl6ZWQgPSBub3JtYWxpemVkO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVzb2x2ZSggZ2VvbWV0cnkgKTtcblxuXHRcdFx0XHR9LCB0aHJlZUF0dHJpYnV0ZU1hcCwgYXR0cmlidXRlVHlwZU1hcCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG59XG5cbi8qKlxuXHQgKiBUZXh0dXJlIFRyYW5zZm9ybSBFeHRlbnNpb25cblx0ICpcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfdHJhbnNmb3JtXG5cdCAqL1xuY2xhc3MgR0xURlRleHR1cmVUcmFuc2Zvcm1FeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk07XG5cblx0fVxuXG5cdGV4dGVuZFRleHR1cmUoIHRleHR1cmUsIHRyYW5zZm9ybSApIHtcblxuXHRcdHRleHR1cmUgPSB0ZXh0dXJlLmNsb25lKCk7XG5cblx0XHRpZiAoIHRyYW5zZm9ybS5vZmZzZXQgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGV4dHVyZS5vZmZzZXQuZnJvbUFycmF5KCB0cmFuc2Zvcm0ub2Zmc2V0ICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHRyYW5zZm9ybS5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHR0ZXh0dXJlLnJvdGF0aW9uID0gdHJhbnNmb3JtLnJvdGF0aW9uO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCB0cmFuc2Zvcm0uc2NhbGUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0dGV4dHVyZS5yZXBlYXQuZnJvbUFycmF5KCB0cmFuc2Zvcm0uc2NhbGUgKTtcblxuXHRcdH1cblxuXHRcdGlmICggdHJhbnNmb3JtLnRleENvb3JkICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IEN1c3RvbSBVViBzZXRzIGluIFwiJyArIHRoaXMubmFtZSArICdcIiBleHRlbnNpb24gbm90IHlldCBzdXBwb3J0ZWQuJyApO1xuXG5cdFx0fVxuXG5cdFx0dGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cblx0XHRyZXR1cm4gdGV4dHVyZTtcblxuXHR9XG5cbn1cblxuLyoqXG5cdCAqIFNwZWN1bGFyLUdsb3NzaW5lc3MgRXh0ZW5zaW9uXG5cdCAqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfcGJyU3BlY3VsYXJHbG9zc2luZXNzXG5cdCAqL1xuXG4vKipcblx0ICogQSBzdWIgY2xhc3Mgb2YgU3RhbmRhcmRNYXRlcmlhbCB3aXRoIHNvbWUgb2YgdGhlIGZ1bmN0aW9uYWxpdHlcblx0ICogY2hhbmdlZCB2aWEgdGhlIGBvbkJlZm9yZUNvbXBpbGVgIGNhbGxiYWNrXG5cdCAqIEBwYWlsaGVhZFxuXHQgKi9cblxuY2xhc3MgR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwgZXh0ZW5kcyBNZXNoU3RhbmRhcmRNYXRlcmlhbCB7XG5cblx0Y29uc3RydWN0b3IoIHBhcmFtcyApIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmlzR0xURlNwZWN1bGFyR2xvc3NpbmVzc01hdGVyaWFsID0gdHJ1ZTtcblxuXHRcdC8vdmFyaW91cyBjaHVua3MgdGhhdCBuZWVkIHJlcGxhY2luZ1xuXHRcdGNvbnN0IHNwZWN1bGFyTWFwUGFyc0ZyYWdtZW50Q2h1bmsgPSBbXG5cdFx0XHQnI2lmZGVmIFVTRV9TUEVDVUxBUk1BUCcsXG5cdFx0XHQnXHR1bmlmb3JtIHNhbXBsZXIyRCBzcGVjdWxhck1hcDsnLFxuXHRcdFx0JyNlbmRpZidcblx0XHRdLmpvaW4oICdcXG4nICk7XG5cblx0XHRjb25zdCBnbG9zc2luZXNzTWFwUGFyc0ZyYWdtZW50Q2h1bmsgPSBbXG5cdFx0XHQnI2lmZGVmIFVTRV9HTE9TU0lORVNTTUFQJyxcblx0XHRcdCdcdHVuaWZvcm0gc2FtcGxlcjJEIGdsb3NzaW5lc3NNYXA7Jyxcblx0XHRcdCcjZW5kaWYnXG5cdFx0XS5qb2luKCAnXFxuJyApO1xuXG5cdFx0Y29uc3Qgc3BlY3VsYXJNYXBGcmFnbWVudENodW5rID0gW1xuXHRcdFx0J3ZlYzMgc3BlY3VsYXJGYWN0b3IgPSBzcGVjdWxhcjsnLFxuXHRcdFx0JyNpZmRlZiBVU0VfU1BFQ1VMQVJNQVAnLFxuXHRcdFx0J1x0dmVjNCB0ZXhlbFNwZWN1bGFyID0gdGV4dHVyZTJEKCBzcGVjdWxhck1hcCwgdlV2ICk7Jyxcblx0XHRcdCdcdHRleGVsU3BlY3VsYXIgPSBzUkdCVG9MaW5lYXIoIHRleGVsU3BlY3VsYXIgKTsnLFxuXHRcdFx0J1x0Ly8gcmVhZHMgY2hhbm5lbCBSR0IsIGNvbXBhdGlibGUgd2l0aCBhIGdsVEYgU3BlY3VsYXItR2xvc3NpbmVzcyAoUkdCQSkgdGV4dHVyZScsXG5cdFx0XHQnXHRzcGVjdWxhckZhY3RvciAqPSB0ZXhlbFNwZWN1bGFyLnJnYjsnLFxuXHRcdFx0JyNlbmRpZidcblx0XHRdLmpvaW4oICdcXG4nICk7XG5cblx0XHRjb25zdCBnbG9zc2luZXNzTWFwRnJhZ21lbnRDaHVuayA9IFtcblx0XHRcdCdmbG9hdCBnbG9zc2luZXNzRmFjdG9yID0gZ2xvc3NpbmVzczsnLFxuXHRcdFx0JyNpZmRlZiBVU0VfR0xPU1NJTkVTU01BUCcsXG5cdFx0XHQnXHR2ZWM0IHRleGVsR2xvc3NpbmVzcyA9IHRleHR1cmUyRCggZ2xvc3NpbmVzc01hcCwgdlV2ICk7Jyxcblx0XHRcdCdcdC8vIHJlYWRzIGNoYW5uZWwgQSwgY29tcGF0aWJsZSB3aXRoIGEgZ2xURiBTcGVjdWxhci1HbG9zc2luZXNzIChSR0JBKSB0ZXh0dXJlJyxcblx0XHRcdCdcdGdsb3NzaW5lc3NGYWN0b3IgKj0gdGV4ZWxHbG9zc2luZXNzLmE7Jyxcblx0XHRcdCcjZW5kaWYnXG5cdFx0XS5qb2luKCAnXFxuJyApO1xuXG5cdFx0Y29uc3QgbGlnaHRQaHlzaWNhbEZyYWdtZW50Q2h1bmsgPSBbXG5cdFx0XHQnUGh5c2ljYWxNYXRlcmlhbCBtYXRlcmlhbDsnLFxuXHRcdFx0J21hdGVyaWFsLmRpZmZ1c2VDb2xvciA9IGRpZmZ1c2VDb2xvci5yZ2IgKiAoIDEuIC0gbWF4KCBzcGVjdWxhckZhY3Rvci5yLCBtYXgoIHNwZWN1bGFyRmFjdG9yLmcsIHNwZWN1bGFyRmFjdG9yLmIgKSApICk7Jyxcblx0XHRcdCd2ZWMzIGR4eSA9IG1heCggYWJzKCBkRmR4KCBnZW9tZXRyeU5vcm1hbCApICksIGFicyggZEZkeSggZ2VvbWV0cnlOb3JtYWwgKSApICk7Jyxcblx0XHRcdCdmbG9hdCBnZW9tZXRyeVJvdWdobmVzcyA9IG1heCggbWF4KCBkeHkueCwgZHh5LnkgKSwgZHh5LnogKTsnLFxuXHRcdFx0J21hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzID0gbWF4KCAxLjAgLSBnbG9zc2luZXNzRmFjdG9yLCAwLjA1MjUgKTsgLy8gMC4wNTI1IGNvcnJlc3BvbmRzIHRvIHRoZSBiYXNlIG1pcCBvZiBhIDI1NiBjdWJlbWFwLicsXG5cdFx0XHQnbWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3MgKz0gZ2VvbWV0cnlSb3VnaG5lc3M7Jyxcblx0XHRcdCdtYXRlcmlhbC5zcGVjdWxhclJvdWdobmVzcyA9IG1pbiggbWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3MsIDEuMCApOycsXG5cdFx0XHQnbWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IHNwZWN1bGFyRmFjdG9yOycsXG5cdFx0XS5qb2luKCAnXFxuJyApO1xuXG5cdFx0Y29uc3QgdW5pZm9ybXMgPSB7XG5cdFx0XHRzcGVjdWxhcjogeyB2YWx1ZTogbmV3IENvbG9yKCkuc2V0SGV4KCAweGZmZmZmZiApIH0sXG5cdFx0XHRnbG9zc2luZXNzOiB7IHZhbHVlOiAxIH0sXG5cdFx0XHRzcGVjdWxhck1hcDogeyB2YWx1ZTogbnVsbCB9LFxuXHRcdFx0Z2xvc3NpbmVzc01hcDogeyB2YWx1ZTogbnVsbCB9XG5cdFx0fTtcblxuXHRcdHRoaXMuX2V4dHJhVW5pZm9ybXMgPSB1bmlmb3JtcztcblxuXHRcdHRoaXMub25CZWZvcmVDb21waWxlID0gZnVuY3Rpb24gKCBzaGFkZXIgKSB7XG5cblx0XHRcdGZvciAoIGNvbnN0IHVuaWZvcm1OYW1lIGluIHVuaWZvcm1zICkge1xuXG5cdFx0XHRcdHNoYWRlci51bmlmb3Jtc1sgdW5pZm9ybU5hbWUgXSA9IHVuaWZvcm1zWyB1bmlmb3JtTmFtZSBdO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNoYWRlci5mcmFnbWVudFNoYWRlciA9IHNoYWRlci5mcmFnbWVudFNoYWRlclxuXHRcdFx0XHQucmVwbGFjZSggJ3VuaWZvcm0gZmxvYXQgcm91Z2huZXNzOycsICd1bmlmb3JtIHZlYzMgc3BlY3VsYXI7JyApXG5cdFx0XHRcdC5yZXBsYWNlKCAndW5pZm9ybSBmbG9hdCBtZXRhbG5lc3M7JywgJ3VuaWZvcm0gZmxvYXQgZ2xvc3NpbmVzczsnIClcblx0XHRcdFx0LnJlcGxhY2UoICcjaW5jbHVkZSA8cm91Z2huZXNzbWFwX3BhcnNfZnJhZ21lbnQ+Jywgc3BlY3VsYXJNYXBQYXJzRnJhZ21lbnRDaHVuayApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPG1ldGFsbmVzc21hcF9wYXJzX2ZyYWdtZW50PicsIGdsb3NzaW5lc3NNYXBQYXJzRnJhZ21lbnRDaHVuayApXG5cdFx0XHRcdC5yZXBsYWNlKCAnI2luY2x1ZGUgPHJvdWdobmVzc21hcF9mcmFnbWVudD4nLCBzcGVjdWxhck1hcEZyYWdtZW50Q2h1bmsgKVxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxtZXRhbG5lc3NtYXBfZnJhZ21lbnQ+JywgZ2xvc3NpbmVzc01hcEZyYWdtZW50Q2h1bmsgKVxuXHRcdFx0XHQucmVwbGFjZSggJyNpbmNsdWRlIDxsaWdodHNfcGh5c2ljYWxfZnJhZ21lbnQ+JywgbGlnaHRQaHlzaWNhbEZyYWdtZW50Q2h1bmsgKTtcblxuXHRcdH07XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyggdGhpcywge1xuXG5cdFx0XHRzcGVjdWxhcjoge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdHJldHVybiB1bmlmb3Jtcy5zcGVjdWxhci52YWx1ZTtcblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdFx0XHRcdHVuaWZvcm1zLnNwZWN1bGFyLnZhbHVlID0gdjtcblxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzcGVjdWxhck1hcDoge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdHJldHVybiB1bmlmb3Jtcy5zcGVjdWxhck1hcC52YWx1ZTtcblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdFx0XHRcdHVuaWZvcm1zLnNwZWN1bGFyTWFwLnZhbHVlID0gdjtcblxuXHRcdFx0XHRcdGlmICggdiApIHtcblxuXHRcdFx0XHRcdFx0dGhpcy5kZWZpbmVzLlVTRV9TUEVDVUxBUk1BUCA9ICcnOyAvLyBVU0VfVVYgaXMgc2V0IGJ5IHRoZSByZW5kZXJlciBmb3Igc3BlY3VsYXIgbWFwc1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZGVmaW5lcy5VU0VfU1BFQ1VMQVJNQVA7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Z2xvc3NpbmVzczoge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdHJldHVybiB1bmlmb3Jtcy5nbG9zc2luZXNzLnZhbHVlO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdFx0dW5pZm9ybXMuZ2xvc3NpbmVzcy52YWx1ZSA9IHY7XG5cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Z2xvc3NpbmVzc01hcDoge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRcdHJldHVybiB1bmlmb3Jtcy5nbG9zc2luZXNzTWFwLnZhbHVlO1xuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdFx0dW5pZm9ybXMuZ2xvc3NpbmVzc01hcC52YWx1ZSA9IHY7XG5cblx0XHRcdFx0XHRpZiAoIHYgKSB7XG5cblx0XHRcdFx0XHRcdHRoaXMuZGVmaW5lcy5VU0VfR0xPU1NJTkVTU01BUCA9ICcnO1xuXHRcdFx0XHRcdFx0dGhpcy5kZWZpbmVzLlVTRV9VViA9ICcnO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZGVmaW5lcy5VU0VfR0xPU1NJTkVTU01BUDtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmRlZmluZXMuVVNFX1VWO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0gKTtcblxuXHRcdGRlbGV0ZSB0aGlzLm1ldGFsbmVzcztcblx0XHRkZWxldGUgdGhpcy5yb3VnaG5lc3M7XG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzTWFwO1xuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzc01hcDtcblxuXHRcdHRoaXMuc2V0VmFsdWVzKCBwYXJhbXMgKTtcblxuXHR9XG5cblx0Y29weSggc291cmNlICkge1xuXG5cdFx0c3VwZXIuY29weSggc291cmNlICk7XG5cblx0XHR0aGlzLnNwZWN1bGFyTWFwID0gc291cmNlLnNwZWN1bGFyTWFwO1xuXHRcdHRoaXMuc3BlY3VsYXIuY29weSggc291cmNlLnNwZWN1bGFyICk7XG5cdFx0dGhpcy5nbG9zc2luZXNzTWFwID0gc291cmNlLmdsb3NzaW5lc3NNYXA7XG5cdFx0dGhpcy5nbG9zc2luZXNzID0gc291cmNlLmdsb3NzaW5lc3M7XG5cdFx0ZGVsZXRlIHRoaXMubWV0YWxuZXNzO1xuXHRcdGRlbGV0ZSB0aGlzLnJvdWdobmVzcztcblx0XHRkZWxldGUgdGhpcy5tZXRhbG5lc3NNYXA7XG5cdFx0ZGVsZXRlIHRoaXMucm91Z2huZXNzTWFwO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxufVxuXG5cbmNsYXNzIEdMVEZNYXRlcmlhbHNQYnJTcGVjdWxhckdsb3NzaW5lc3NFeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTO1xuXG5cdFx0dGhpcy5zcGVjdWxhckdsb3NzaW5lc3NQYXJhbXMgPSBbXG5cdFx0XHQnY29sb3InLFxuXHRcdFx0J21hcCcsXG5cdFx0XHQnbGlnaHRNYXAnLFxuXHRcdFx0J2xpZ2h0TWFwSW50ZW5zaXR5Jyxcblx0XHRcdCdhb01hcCcsXG5cdFx0XHQnYW9NYXBJbnRlbnNpdHknLFxuXHRcdFx0J2VtaXNzaXZlJyxcblx0XHRcdCdlbWlzc2l2ZUludGVuc2l0eScsXG5cdFx0XHQnZW1pc3NpdmVNYXAnLFxuXHRcdFx0J2J1bXBNYXAnLFxuXHRcdFx0J2J1bXBTY2FsZScsXG5cdFx0XHQnbm9ybWFsTWFwJyxcblx0XHRcdCdub3JtYWxNYXBUeXBlJyxcblx0XHRcdCdkaXNwbGFjZW1lbnRNYXAnLFxuXHRcdFx0J2Rpc3BsYWNlbWVudFNjYWxlJyxcblx0XHRcdCdkaXNwbGFjZW1lbnRCaWFzJyxcblx0XHRcdCdzcGVjdWxhck1hcCcsXG5cdFx0XHQnc3BlY3VsYXInLFxuXHRcdFx0J2dsb3NzaW5lc3NNYXAnLFxuXHRcdFx0J2dsb3NzaW5lc3MnLFxuXHRcdFx0J2FscGhhTWFwJyxcblx0XHRcdCdlbnZNYXAnLFxuXHRcdFx0J2Vudk1hcEludGVuc2l0eScsXG5cdFx0XHQncmVmcmFjdGlvblJhdGlvJyxcblx0XHRdO1xuXG5cdH1cblxuXHRnZXRNYXRlcmlhbFR5cGUoKSB7XG5cblx0XHRyZXR1cm4gR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWw7XG5cblx0fVxuXG5cdGV4dGVuZFBhcmFtcyggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSB7XG5cblx0XHRjb25zdCBwYnJTcGVjdWxhckdsb3NzaW5lc3MgPSBtYXRlcmlhbERlZi5leHRlbnNpb25zWyB0aGlzLm5hbWUgXTtcblxuXHRcdG1hdGVyaWFsUGFyYW1zLmNvbG9yID0gbmV3IENvbG9yKCAxLjAsIDEuMCwgMS4wICk7XG5cdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IDEuMDtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGlmICggQXJyYXkuaXNBcnJheSggcGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VGYWN0b3IgKSApIHtcblxuXHRcdFx0Y29uc3QgYXJyYXkgPSBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUZhY3RvcjtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IuZnJvbUFycmF5KCBhcnJheSApO1xuXHRcdFx0bWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IGFycmF5WyAzIF07XG5cblx0XHR9XG5cblx0XHRpZiAoIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21hcCcsIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlVGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZSA9IG5ldyBDb2xvciggMC4wLCAwLjAsIDAuMCApO1xuXHRcdG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3MgPSBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZ2xvc3NpbmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gcGJyU3BlY3VsYXJHbG9zc2luZXNzLmdsb3NzaW5lc3NGYWN0b3IgOiAxLjA7XG5cdFx0bWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXIgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcblxuXHRcdGlmICggQXJyYXkuaXNBcnJheSggcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyRmFjdG9yICkgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyLmZyb21BcnJheSggcGJyU3BlY3VsYXJHbG9zc2luZXNzLnNwZWN1bGFyRmFjdG9yICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHBiclNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGNvbnN0IHNwZWNHbG9zc01hcERlZiA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlO1xuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdnbG9zc2luZXNzTWFwJywgc3BlY0dsb3NzTWFwRGVmICkgKTtcblx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnc3BlY3VsYXJNYXAnLCBzcGVjR2xvc3NNYXBEZWYgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fVxuXG5cdGNyZWF0ZU1hdGVyaWFsKCBtYXRlcmlhbFBhcmFtcyApIHtcblxuXHRcdGNvbnN0IG1hdGVyaWFsID0gbmV3IEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsKCBtYXRlcmlhbFBhcmFtcyApO1xuXHRcdG1hdGVyaWFsLmZvZyA9IHRydWU7XG5cblx0XHRtYXRlcmlhbC5jb2xvciA9IG1hdGVyaWFsUGFyYW1zLmNvbG9yO1xuXG5cdFx0bWF0ZXJpYWwubWFwID0gbWF0ZXJpYWxQYXJhbXMubWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMubWFwO1xuXG5cdFx0bWF0ZXJpYWwubGlnaHRNYXAgPSBudWxsO1xuXHRcdG1hdGVyaWFsLmxpZ2h0TWFwSW50ZW5zaXR5ID0gMS4wO1xuXG5cdFx0bWF0ZXJpYWwuYW9NYXAgPSBtYXRlcmlhbFBhcmFtcy5hb01hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmFvTWFwO1xuXHRcdG1hdGVyaWFsLmFvTWFwSW50ZW5zaXR5ID0gMS4wO1xuXG5cdFx0bWF0ZXJpYWwuZW1pc3NpdmUgPSBtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZTtcblx0XHRtYXRlcmlhbC5lbWlzc2l2ZUludGVuc2l0eSA9IDEuMDtcblx0XHRtYXRlcmlhbC5lbWlzc2l2ZU1hcCA9IG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmVNYXA7XG5cblx0XHRtYXRlcmlhbC5idW1wTWFwID0gbWF0ZXJpYWxQYXJhbXMuYnVtcE1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmJ1bXBNYXA7XG5cdFx0bWF0ZXJpYWwuYnVtcFNjYWxlID0gMTtcblxuXHRcdG1hdGVyaWFsLm5vcm1hbE1hcCA9IG1hdGVyaWFsUGFyYW1zLm5vcm1hbE1hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLm5vcm1hbE1hcDtcblx0XHRtYXRlcmlhbC5ub3JtYWxNYXBUeXBlID0gVGFuZ2VudFNwYWNlTm9ybWFsTWFwO1xuXG5cdFx0aWYgKCBtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZSApIG1hdGVyaWFsLm5vcm1hbFNjYWxlID0gbWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGU7XG5cblx0XHRtYXRlcmlhbC5kaXNwbGFjZW1lbnRNYXAgPSBudWxsO1xuXHRcdG1hdGVyaWFsLmRpc3BsYWNlbWVudFNjYWxlID0gMTtcblx0XHRtYXRlcmlhbC5kaXNwbGFjZW1lbnRCaWFzID0gMDtcblxuXHRcdG1hdGVyaWFsLnNwZWN1bGFyTWFwID0gbWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXJNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5zcGVjdWxhck1hcDtcblx0XHRtYXRlcmlhbC5zcGVjdWxhciA9IG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyO1xuXG5cdFx0bWF0ZXJpYWwuZ2xvc3NpbmVzc01hcCA9IG1hdGVyaWFsUGFyYW1zLmdsb3NzaW5lc3NNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5nbG9zc2luZXNzTWFwO1xuXHRcdG1hdGVyaWFsLmdsb3NzaW5lc3MgPSBtYXRlcmlhbFBhcmFtcy5nbG9zc2luZXNzO1xuXG5cdFx0bWF0ZXJpYWwuYWxwaGFNYXAgPSBudWxsO1xuXG5cdFx0bWF0ZXJpYWwuZW52TWFwID0gbWF0ZXJpYWxQYXJhbXMuZW52TWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuZW52TWFwO1xuXHRcdG1hdGVyaWFsLmVudk1hcEludGVuc2l0eSA9IDEuMDtcblxuXHRcdG1hdGVyaWFsLnJlZnJhY3Rpb25SYXRpbyA9IDAuOTg7XG5cblx0XHRyZXR1cm4gbWF0ZXJpYWw7XG5cblx0fVxuXG59XG5cbi8qKlxuXHQgKiBNZXNoIFF1YW50aXphdGlvbiBFeHRlbnNpb25cblx0ICpcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21lc2hfcXVhbnRpemF0aW9uXG5cdCAqL1xuY2xhc3MgR0xURk1lc2hRdWFudGl6YXRpb25FeHRlbnNpb24ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0dGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTUVTSF9RVUFOVElaQVRJT047XG5cblx0fVxuXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKiBJTlRFUlBPTEFUSU9OICoqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gU3BsaW5lIEludGVycG9sYXRpb25cbi8vIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYXBwZW5kaXgtYy1zcGxpbmUtaW50ZXJwb2xhdGlvblxuY2xhc3MgR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQgZXh0ZW5kcyBJbnRlcnBvbGFudCB7XG5cblx0Y29uc3RydWN0b3IoIHBhcmFtZXRlclBvc2l0aW9ucywgc2FtcGxlVmFsdWVzLCBzYW1wbGVTaXplLCByZXN1bHRCdWZmZXIgKSB7XG5cblx0XHRzdXBlciggcGFyYW1ldGVyUG9zaXRpb25zLCBzYW1wbGVWYWx1ZXMsIHNhbXBsZVNpemUsIHJlc3VsdEJ1ZmZlciApO1xuXG5cdH1cblxuXHRjb3B5U2FtcGxlVmFsdWVfKCBpbmRleCApIHtcblxuXHRcdC8vIENvcGllcyBhIHNhbXBsZSB2YWx1ZSB0byB0aGUgcmVzdWx0IGJ1ZmZlci4gU2VlIGRlc2NyaXB0aW9uIG9mIGdsVEZcblx0XHQvLyBDVUJJQ1NQTElORSB2YWx1ZXMgbGF5b3V0IGluIGludGVycG9sYXRlXygpIGZ1bmN0aW9uIGJlbG93LlxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5yZXN1bHRCdWZmZXIsXG5cdFx0XHR2YWx1ZXMgPSB0aGlzLnNhbXBsZVZhbHVlcyxcblx0XHRcdHZhbHVlU2l6ZSA9IHRoaXMudmFsdWVTaXplLFxuXHRcdFx0b2Zmc2V0ID0gaW5kZXggKiB2YWx1ZVNpemUgKiAzICsgdmFsdWVTaXplO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpICE9PSB2YWx1ZVNpemU7IGkgKysgKSB7XG5cblx0XHRcdHJlc3VsdFsgaSBdID0gdmFsdWVzWyBvZmZzZXQgKyBpIF07XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdH1cblxufVxuXG5HTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuYmVmb3JlU3RhcnRfID0gR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmNvcHlTYW1wbGVWYWx1ZV87XG5cbkdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZS5hZnRlckVuZF8gPSBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuY29weVNhbXBsZVZhbHVlXztcblxuR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmludGVycG9sYXRlXyA9IGZ1bmN0aW9uICggaTEsIHQwLCB0LCB0MSApIHtcblxuXHRjb25zdCByZXN1bHQgPSB0aGlzLnJlc3VsdEJ1ZmZlcjtcblx0Y29uc3QgdmFsdWVzID0gdGhpcy5zYW1wbGVWYWx1ZXM7XG5cdGNvbnN0IHN0cmlkZSA9IHRoaXMudmFsdWVTaXplO1xuXG5cdGNvbnN0IHN0cmlkZTIgPSBzdHJpZGUgKiAyO1xuXHRjb25zdCBzdHJpZGUzID0gc3RyaWRlICogMztcblxuXHRjb25zdCB0ZCA9IHQxIC0gdDA7XG5cblx0Y29uc3QgcCA9ICggdCAtIHQwICkgLyB0ZDtcblx0Y29uc3QgcHAgPSBwICogcDtcblx0Y29uc3QgcHBwID0gcHAgKiBwO1xuXG5cdGNvbnN0IG9mZnNldDEgPSBpMSAqIHN0cmlkZTM7XG5cdGNvbnN0IG9mZnNldDAgPSBvZmZzZXQxIC0gc3RyaWRlMztcblxuXHRjb25zdCBzMiA9IC0gMiAqIHBwcCArIDMgKiBwcDtcblx0Y29uc3QgczMgPSBwcHAgLSBwcDtcblx0Y29uc3QgczAgPSAxIC0gczI7XG5cdGNvbnN0IHMxID0gczMgLSBwcCArIHA7XG5cblx0Ly8gTGF5b3V0IG9mIGtleWZyYW1lIG91dHB1dCB2YWx1ZXMgZm9yIENVQklDU1BMSU5FIGFuaW1hdGlvbnM6XG5cdC8vICAgWyBpblRhbmdlbnRfMSwgc3BsaW5lVmVydGV4XzEsIG91dFRhbmdlbnRfMSwgaW5UYW5nZW50XzIsIHNwbGluZVZlcnRleF8yLCAuLi4gXVxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgIT09IHN0cmlkZTsgaSArKyApIHtcblxuXHRcdGNvbnN0IHAwID0gdmFsdWVzWyBvZmZzZXQwICsgaSArIHN0cmlkZSBdOyAvLyBzcGxpbmVWZXJ0ZXhfa1xuXHRcdGNvbnN0IG0wID0gdmFsdWVzWyBvZmZzZXQwICsgaSArIHN0cmlkZTIgXSAqIHRkOyAvLyBvdXRUYW5nZW50X2sgKiAodF9rKzEgLSB0X2spXG5cdFx0Y29uc3QgcDEgPSB2YWx1ZXNbIG9mZnNldDEgKyBpICsgc3RyaWRlIF07IC8vIHNwbGluZVZlcnRleF9rKzFcblx0XHRjb25zdCBtMSA9IHZhbHVlc1sgb2Zmc2V0MSArIGkgXSAqIHRkOyAvLyBpblRhbmdlbnRfaysxICogKHRfaysxIC0gdF9rKVxuXG5cdFx0cmVzdWx0WyBpIF0gPSBzMCAqIHAwICsgczEgKiBtMCArIHMyICogcDEgKyBzMyAqIG0xO1xuXG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xuXG59O1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKiogSU5URVJOQUxTICoqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qIENPTlNUQU5UUyAqL1xuXG5jb25zdCBXRUJHTF9DT05TVEFOVFMgPSB7XG5cdEZMT0FUOiA1MTI2LFxuXHQvL0ZMT0FUX01BVDI6IDM1Njc0LFxuXHRGTE9BVF9NQVQzOiAzNTY3NSxcblx0RkxPQVRfTUFUNDogMzU2NzYsXG5cdEZMT0FUX1ZFQzI6IDM1NjY0LFxuXHRGTE9BVF9WRUMzOiAzNTY2NSxcblx0RkxPQVRfVkVDNDogMzU2NjYsXG5cdExJTkVBUjogOTcyOSxcblx0UkVQRUFUOiAxMDQ5Nyxcblx0U0FNUExFUl8yRDogMzU2NzgsXG5cdFBPSU5UUzogMCxcblx0TElORVM6IDEsXG5cdExJTkVfTE9PUDogMixcblx0TElORV9TVFJJUDogMyxcblx0VFJJQU5HTEVTOiA0LFxuXHRUUklBTkdMRV9TVFJJUDogNSxcblx0VFJJQU5HTEVfRkFOOiA2LFxuXHRVTlNJR05FRF9CWVRFOiA1MTIxLFxuXHRVTlNJR05FRF9TSE9SVDogNTEyM1xufTtcblxuY29uc3QgV0VCR0xfQ09NUE9ORU5UX1RZUEVTID0ge1xuXHQ1MTIwOiBJbnQ4QXJyYXksXG5cdDUxMjE6IFVpbnQ4QXJyYXksXG5cdDUxMjI6IEludDE2QXJyYXksXG5cdDUxMjM6IFVpbnQxNkFycmF5LFxuXHQ1MTI1OiBVaW50MzJBcnJheSxcblx0NTEyNjogRmxvYXQzMkFycmF5XG59O1xuXG5jb25zdCBXRUJHTF9GSUxURVJTID0ge1xuXHQ5NzI4OiBOZWFyZXN0RmlsdGVyLFxuXHQ5NzI5OiBMaW5lYXJGaWx0ZXIsXG5cdDk5ODQ6IE5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyLFxuXHQ5OTg1OiBMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyLFxuXHQ5OTg2OiBOZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyLFxuXHQ5OTg3OiBMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXJcbn07XG5cbmNvbnN0IFdFQkdMX1dSQVBQSU5HUyA9IHtcblx0MzMwNzE6IENsYW1wVG9FZGdlV3JhcHBpbmcsXG5cdDMzNjQ4OiBNaXJyb3JlZFJlcGVhdFdyYXBwaW5nLFxuXHQxMDQ5NzogUmVwZWF0V3JhcHBpbmdcbn07XG5cbmNvbnN0IFdFQkdMX1RZUEVfU0laRVMgPSB7XG5cdCdTQ0FMQVInOiAxLFxuXHQnVkVDMic6IDIsXG5cdCdWRUMzJzogMyxcblx0J1ZFQzQnOiA0LFxuXHQnTUFUMic6IDQsXG5cdCdNQVQzJzogOSxcblx0J01BVDQnOiAxNlxufTtcblxuY29uc3QgQVRUUklCVVRFUyA9IHtcblx0UE9TSVRJT046ICdwb3NpdGlvbicsXG5cdE5PUk1BTDogJ25vcm1hbCcsXG5cdFRBTkdFTlQ6ICd0YW5nZW50Jyxcblx0VEVYQ09PUkRfMDogJ3V2Jyxcblx0VEVYQ09PUkRfMTogJ3V2MicsXG5cdENPTE9SXzA6ICdjb2xvcicsXG5cdFdFSUdIVFNfMDogJ3NraW5XZWlnaHQnLFxuXHRKT0lOVFNfMDogJ3NraW5JbmRleCcsXG59O1xuXG5jb25zdCBQQVRIX1BST1BFUlRJRVMgPSB7XG5cdHNjYWxlOiAnc2NhbGUnLFxuXHR0cmFuc2xhdGlvbjogJ3Bvc2l0aW9uJyxcblx0cm90YXRpb246ICdxdWF0ZXJuaW9uJyxcblx0d2VpZ2h0czogJ21vcnBoVGFyZ2V0SW5mbHVlbmNlcydcbn07XG5cbmNvbnN0IElOVEVSUE9MQVRJT04gPSB7XG5cdENVQklDU1BMSU5FOiB1bmRlZmluZWQsIC8vIFdlIHVzZSBhIGN1c3RvbSBpbnRlcnBvbGFudCAoR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhdGlvbikgZm9yIENVQklDU1BMSU5FIHRyYWNrcy4gRWFjaFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtleWZyYW1lIHRyYWNrIHdpbGwgYmUgaW5pdGlhbGl6ZWQgd2l0aCBhIGRlZmF1bHQgaW50ZXJwb2xhdGlvbiB0eXBlLCB0aGVuIG1vZGlmaWVkLlxuXHRMSU5FQVI6IEludGVycG9sYXRlTGluZWFyLFxuXHRTVEVQOiBJbnRlcnBvbGF0ZURpc2NyZXRlXG59O1xuXG5jb25zdCBBTFBIQV9NT0RFUyA9IHtcblx0T1BBUVVFOiAnT1BBUVVFJyxcblx0TUFTSzogJ01BU0snLFxuXHRCTEVORDogJ0JMRU5EJ1xufTtcblxuLyogVVRJTElUWSBGVU5DVElPTlMgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVVSTCggdXJsLCBwYXRoICkge1xuXG5cdC8vIEludmFsaWQgVVJMXG5cdGlmICggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgfHwgdXJsID09PSAnJyApIHJldHVybiAnJztcblxuXHQvLyBIb3N0IFJlbGF0aXZlIFVSTFxuXHRpZiAoIC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QoIHBhdGggKSAmJiAvXlxcLy8udGVzdCggdXJsICkgKSB7XG5cblx0XHRwYXRoID0gcGF0aC5yZXBsYWNlKCAvKF5odHRwcz86XFwvXFwvW15cXC9dKykuKi9pLCAnJDEnICk7XG5cblx0fVxuXG5cdC8vIEFic29sdXRlIFVSTCBodHRwOi8vLGh0dHBzOi8vLC8vXG5cdGlmICggL14oaHR0cHM/Oik/XFwvXFwvL2kudGVzdCggdXJsICkgKSByZXR1cm4gdXJsO1xuXG5cdC8vIERhdGEgVVJJXG5cdGlmICggL15kYXRhOi4qLC4qJC9pLnRlc3QoIHVybCApICkgcmV0dXJuIHVybDtcblxuXHQvLyBCbG9iIFVSTFxuXHRpZiAoIC9eYmxvYjouKiQvaS50ZXN0KCB1cmwgKSApIHJldHVybiB1cmw7XG5cblx0Ly8gUmVsYXRpdmUgVVJMXG5cdHJldHVybiBwYXRoICsgdXJsO1xuXG59XG5cbi8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2RlZmF1bHQtbWF0ZXJpYWxcblx0ICovXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0TWF0ZXJpYWwoIGNhY2hlICkge1xuXG5cdGlmICggY2FjaGVbICdEZWZhdWx0TWF0ZXJpYWwnIF0gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGNhY2hlWyAnRGVmYXVsdE1hdGVyaWFsJyBdID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKCB7XG5cdFx0XHRjb2xvcjogMHhGRkZGRkYsXG5cdFx0XHRlbWlzc2l2ZTogMHgwMDAwMDAsXG5cdFx0XHRtZXRhbG5lc3M6IDEsXG5cdFx0XHRyb3VnaG5lc3M6IDEsXG5cdFx0XHR0cmFuc3BhcmVudDogZmFsc2UsXG5cdFx0XHRkZXB0aFRlc3Q6IHRydWUsXG5cdFx0XHRzaWRlOiBGcm9udFNpZGVcblx0XHR9ICk7XG5cblx0fVxuXG5cdHJldHVybiBjYWNoZVsgJ0RlZmF1bHRNYXRlcmlhbCcgXTtcblxufVxuXG5mdW5jdGlvbiBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoIGtub3duRXh0ZW5zaW9ucywgb2JqZWN0LCBvYmplY3REZWYgKSB7XG5cblx0Ly8gQWRkIHVua25vd24gZ2xURiBleHRlbnNpb25zIHRvIGFuIG9iamVjdCdzIHVzZXJEYXRhLlxuXG5cdGZvciAoIGNvbnN0IG5hbWUgaW4gb2JqZWN0RGVmLmV4dGVuc2lvbnMgKSB7XG5cblx0XHRpZiAoIGtub3duRXh0ZW5zaW9uc1sgbmFtZSBdID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdG9iamVjdC51c2VyRGF0YS5nbHRmRXh0ZW5zaW9ucyA9IG9iamVjdC51c2VyRGF0YS5nbHRmRXh0ZW5zaW9ucyB8fCB7fTtcblx0XHRcdG9iamVjdC51c2VyRGF0YS5nbHRmRXh0ZW5zaW9uc1sgbmFtZSBdID0gb2JqZWN0RGVmLmV4dGVuc2lvbnNbIG5hbWUgXTtcblxuXHRcdH1cblxuXHR9XG5cbn1cblxuLyoqXG5cdCAqIEBwYXJhbSB7T2JqZWN0M0R8TWF0ZXJpYWx8QnVmZmVyR2VvbWV0cnl9IG9iamVjdFxuXHQgKiBAcGFyYW0ge0dMVEYuZGVmaW5pdGlvbn0gZ2x0ZkRlZlxuXHQgKi9cbmZ1bmN0aW9uIGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG9iamVjdCwgZ2x0ZkRlZiApIHtcblxuXHRpZiAoIGdsdGZEZWYuZXh0cmFzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRpZiAoIHR5cGVvZiBnbHRmRGVmLmV4dHJhcyA9PT0gJ29iamVjdCcgKSB7XG5cblx0XHRcdE9iamVjdC5hc3NpZ24oIG9iamVjdC51c2VyRGF0YSwgZ2x0ZkRlZi5leHRyYXMgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IElnbm9yaW5nIHByaW1pdGl2ZSB0eXBlIC5leHRyYXMsICcgKyBnbHRmRGVmLmV4dHJhcyApO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG4vKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNtb3JwaC10YXJnZXRzXG5cdCAqXG5cdCAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XG5cdCAqIEBwYXJhbSB7QXJyYXk8R0xURi5UYXJnZXQ+fSB0YXJnZXRzXG5cdCAqIEBwYXJhbSB7R0xURlBhcnNlcn0gcGFyc2VyXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QnVmZmVyR2VvbWV0cnk+fVxuXHQgKi9cbmZ1bmN0aW9uIGFkZE1vcnBoVGFyZ2V0cyggZ2VvbWV0cnksIHRhcmdldHMsIHBhcnNlciApIHtcblxuXHRsZXQgaGFzTW9ycGhQb3NpdGlvbiA9IGZhbHNlO1xuXHRsZXQgaGFzTW9ycGhOb3JtYWwgPSBmYWxzZTtcblxuXHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdGNvbnN0IHRhcmdldCA9IHRhcmdldHNbIGkgXTtcblxuXHRcdGlmICggdGFyZ2V0LlBPU0lUSU9OICE9PSB1bmRlZmluZWQgKSBoYXNNb3JwaFBvc2l0aW9uID0gdHJ1ZTtcblx0XHRpZiAoIHRhcmdldC5OT1JNQUwgIT09IHVuZGVmaW5lZCApIGhhc01vcnBoTm9ybWFsID0gdHJ1ZTtcblxuXHRcdGlmICggaGFzTW9ycGhQb3NpdGlvbiAmJiBoYXNNb3JwaE5vcm1hbCApIGJyZWFrO1xuXG5cdH1cblxuXHRpZiAoICEgaGFzTW9ycGhQb3NpdGlvbiAmJiAhIGhhc01vcnBoTm9ybWFsICkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSggZ2VvbWV0cnkgKTtcblxuXHRjb25zdCBwZW5kaW5nUG9zaXRpb25BY2Nlc3NvcnMgPSBbXTtcblx0Y29uc3QgcGVuZGluZ05vcm1hbEFjY2Vzc29ycyA9IFtdO1xuXG5cdGZvciAoIGxldCBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gdGFyZ2V0c1sgaSBdO1xuXG5cdFx0aWYgKCBoYXNNb3JwaFBvc2l0aW9uICkge1xuXG5cdFx0XHRjb25zdCBwZW5kaW5nQWNjZXNzb3IgPSB0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCB0YXJnZXQuUE9TSVRJT04gKVxuXHRcdFx0XHQ6IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XG5cblx0XHRcdHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycy5wdXNoKCBwZW5kaW5nQWNjZXNzb3IgKTtcblxuXHRcdH1cblxuXHRcdGlmICggaGFzTW9ycGhOb3JtYWwgKSB7XG5cblx0XHRcdGNvbnN0IHBlbmRpbmdBY2Nlc3NvciA9IHRhcmdldC5OT1JNQUwgIT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCB0YXJnZXQuTk9STUFMIClcblx0XHRcdFx0OiBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbDtcblxuXHRcdFx0cGVuZGluZ05vcm1hbEFjY2Vzc29ycy5wdXNoKCBwZW5kaW5nQWNjZXNzb3IgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKCBbXG5cdFx0UHJvbWlzZS5hbGwoIHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycyApLFxuXHRcdFByb21pc2UuYWxsKCBwZW5kaW5nTm9ybWFsQWNjZXNzb3JzIClcblx0XSApLnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3JzICkge1xuXG5cdFx0Y29uc3QgbW9ycGhQb3NpdGlvbnMgPSBhY2Nlc3NvcnNbIDAgXTtcblx0XHRjb25zdCBtb3JwaE5vcm1hbHMgPSBhY2Nlc3NvcnNbIDEgXTtcblxuXHRcdGlmICggaGFzTW9ycGhQb3NpdGlvbiApIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5wb3NpdGlvbiA9IG1vcnBoUG9zaXRpb25zO1xuXHRcdGlmICggaGFzTW9ycGhOb3JtYWwgKSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMubm9ybWFsID0gbW9ycGhOb3JtYWxzO1xuXHRcdGdlb21ldHJ5Lm1vcnBoVGFyZ2V0c1JlbGF0aXZlID0gdHJ1ZTtcblxuXHRcdHJldHVybiBnZW9tZXRyeTtcblxuXHR9ICk7XG5cbn1cblxuLyoqXG5cdCAqIEBwYXJhbSB7TWVzaH0gbWVzaFxuXHQgKiBAcGFyYW0ge0dMVEYuTWVzaH0gbWVzaERlZlxuXHQgKi9cbmZ1bmN0aW9uIHVwZGF0ZU1vcnBoVGFyZ2V0cyggbWVzaCwgbWVzaERlZiApIHtcblxuXHRtZXNoLnVwZGF0ZU1vcnBoVGFyZ2V0cygpO1xuXG5cdGlmICggbWVzaERlZi53ZWlnaHRzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbWVzaERlZi53ZWlnaHRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRtZXNoLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1sgaSBdID0gbWVzaERlZi53ZWlnaHRzWyBpIF07XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vIC5leHRyYXMgaGFzIHVzZXItZGVmaW5lZCBkYXRhLCBzbyBjaGVjayB0aGF0IC5leHRyYXMudGFyZ2V0TmFtZXMgaXMgYW4gYXJyYXkuXG5cdGlmICggbWVzaERlZi5leHRyYXMgJiYgQXJyYXkuaXNBcnJheSggbWVzaERlZi5leHRyYXMudGFyZ2V0TmFtZXMgKSApIHtcblxuXHRcdGNvbnN0IHRhcmdldE5hbWVzID0gbWVzaERlZi5leHRyYXMudGFyZ2V0TmFtZXM7XG5cblx0XHRpZiAoIG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzLmxlbmd0aCA9PT0gdGFyZ2V0TmFtZXMubGVuZ3RoICkge1xuXG5cdFx0XHRtZXNoLm1vcnBoVGFyZ2V0RGljdGlvbmFyeSA9IHt9O1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gdGFyZ2V0TmFtZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0bWVzaC5tb3JwaFRhcmdldERpY3Rpb25hcnlbIHRhcmdldE5hbWVzWyBpIF0gXSA9IGk7XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IEludmFsaWQgZXh0cmFzLnRhcmdldE5hbWVzIGxlbmd0aC4gSWdub3JpbmcgbmFtZXMuJyApO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVLZXkoIHByaW1pdGl2ZURlZiApIHtcblxuXHRjb25zdCBkcmFjb0V4dGVuc2lvbiA9IHByaW1pdGl2ZURlZi5leHRlbnNpb25zICYmIHByaW1pdGl2ZURlZi5leHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OIF07XG5cdGxldCBnZW9tZXRyeUtleTtcblxuXHRpZiAoIGRyYWNvRXh0ZW5zaW9uICkge1xuXG5cdFx0Z2VvbWV0cnlLZXkgPSAnZHJhY286JyArIGRyYWNvRXh0ZW5zaW9uLmJ1ZmZlclZpZXdcblx0XHRcdFx0KyAnOicgKyBkcmFjb0V4dGVuc2lvbi5pbmRpY2VzXG5cdFx0XHRcdCsgJzonICsgY3JlYXRlQXR0cmlidXRlc0tleSggZHJhY29FeHRlbnNpb24uYXR0cmlidXRlcyApO1xuXG5cdH0gZWxzZSB7XG5cblx0XHRnZW9tZXRyeUtleSA9IHByaW1pdGl2ZURlZi5pbmRpY2VzICsgJzonICsgY3JlYXRlQXR0cmlidXRlc0tleSggcHJpbWl0aXZlRGVmLmF0dHJpYnV0ZXMgKSArICc6JyArIHByaW1pdGl2ZURlZi5tb2RlO1xuXG5cdH1cblxuXHRyZXR1cm4gZ2VvbWV0cnlLZXk7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlc0tleSggYXR0cmlidXRlcyApIHtcblxuXHRsZXQgYXR0cmlidXRlc0tleSA9ICcnO1xuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyggYXR0cmlidXRlcyApLnNvcnQoKTtcblxuXHRmb3IgKCBsZXQgaSA9IDAsIGlsID0ga2V5cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdGF0dHJpYnV0ZXNLZXkgKz0ga2V5c1sgaSBdICsgJzonICsgYXR0cmlidXRlc1sga2V5c1sgaSBdIF0gKyAnOyc7XG5cblx0fVxuXG5cdHJldHVybiBhdHRyaWJ1dGVzS2V5O1xuXG59XG5cbmZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRDb21wb25lbnRTY2FsZSggY29uc3RydWN0b3IgKSB7XG5cblx0Ly8gUmVmZXJlbmNlOlxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWVzaF9xdWFudGl6YXRpb24jZW5jb2RpbmctcXVhbnRpemVkLWRhdGFcblxuXHRzd2l0Y2ggKCBjb25zdHJ1Y3RvciApIHtcblxuXHRcdGNhc2UgSW50OEFycmF5OlxuXHRcdFx0cmV0dXJuIDEgLyAxMjc7XG5cblx0XHRjYXNlIFVpbnQ4QXJyYXk6XG5cdFx0XHRyZXR1cm4gMSAvIDI1NTtcblxuXHRcdGNhc2UgSW50MTZBcnJheTpcblx0XHRcdHJldHVybiAxIC8gMzI3Njc7XG5cblx0XHRjYXNlIFVpbnQxNkFycmF5OlxuXHRcdFx0cmV0dXJuIDEgLyA2NTUzNTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBub3JtYWxpemVkIGFjY2Vzc29yIGNvbXBvbmVudCB0eXBlLicgKTtcblxuXHR9XG5cbn1cblxuLyogR0xURiBQQVJTRVIgKi9cblxuY2xhc3MgR0xURlBhcnNlciB7XG5cblx0Y29uc3RydWN0b3IoIGpzb24gPSB7fSwgb3B0aW9ucyA9IHt9ICkge1xuXG5cdFx0dGhpcy5qc29uID0ganNvbjtcblx0XHR0aGlzLmV4dGVuc2lvbnMgPSB7fTtcblx0XHR0aGlzLnBsdWdpbnMgPSB7fTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG5cdFx0Ly8gbG9hZGVyIG9iamVjdCBjYWNoZVxuXHRcdHRoaXMuY2FjaGUgPSBuZXcgR0xURlJlZ2lzdHJ5KCk7XG5cblx0XHQvLyBhc3NvY2lhdGlvbnMgYmV0d2VlbiBUaHJlZS5qcyBvYmplY3RzIGFuZCBnbFRGIGVsZW1lbnRzXG5cdFx0dGhpcy5hc3NvY2lhdGlvbnMgPSBuZXcgTWFwKCk7XG5cblx0XHQvLyBCdWZmZXJHZW9tZXRyeSBjYWNoaW5nXG5cdFx0dGhpcy5wcmltaXRpdmVDYWNoZSA9IHt9O1xuXG5cdFx0Ly8gT2JqZWN0M0QgaW5zdGFuY2UgY2FjaGVzXG5cdFx0dGhpcy5tZXNoQ2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xuXHRcdHRoaXMuY2FtZXJhQ2FjaGUgPSB7IHJlZnM6IHt9LCB1c2VzOiB7fSB9O1xuXHRcdHRoaXMubGlnaHRDYWNoZSA9IHsgcmVmczoge30sIHVzZXM6IHt9IH07XG5cblx0XHQvLyBUcmFjayBub2RlIG5hbWVzLCB0byBlbnN1cmUgbm8gZHVwbGljYXRlc1xuXHRcdHRoaXMubm9kZU5hbWVzVXNlZCA9IHt9O1xuXG5cdFx0Ly8gVXNlIGFuIEltYWdlQml0bWFwTG9hZGVyIGlmIGltYWdlQml0bWFwcyBhcmUgc3VwcG9ydGVkLiBNb3ZlcyBtdWNoIG9mIHRoZVxuXHRcdC8vIGV4cGVuc2l2ZSB3b3JrIG9mIHVwbG9hZGluZyBhIHRleHR1cmUgdG8gdGhlIEdQVSBvZmYgdGhlIG1haW4gdGhyZWFkLlxuXHRcdGlmICggdHlwZW9mIGNyZWF0ZUltYWdlQml0bWFwICE9PSAndW5kZWZpbmVkJyAmJiAvRmlyZWZveC8udGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApID09PSBmYWxzZSApIHtcblxuXHRcdFx0dGhpcy50ZXh0dXJlTG9hZGVyID0gbmV3IEltYWdlQml0bWFwTG9hZGVyKCB0aGlzLm9wdGlvbnMubWFuYWdlciApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy50ZXh0dXJlTG9hZGVyID0gbmV3IFRleHR1cmVMb2FkZXIoIHRoaXMub3B0aW9ucy5tYW5hZ2VyICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLnRleHR1cmVMb2FkZXIuc2V0Q3Jvc3NPcmlnaW4oIHRoaXMub3B0aW9ucy5jcm9zc09yaWdpbiApO1xuXHRcdHRoaXMudGV4dHVyZUxvYWRlci5zZXRSZXF1ZXN0SGVhZGVyKCB0aGlzLm9wdGlvbnMucmVxdWVzdEhlYWRlciApO1xuXG5cdFx0dGhpcy5maWxlTG9hZGVyID0gbmV3IEZpbGVMb2FkZXIoIHRoaXMub3B0aW9ucy5tYW5hZ2VyICk7XG5cdFx0dGhpcy5maWxlTG9hZGVyLnNldFJlc3BvbnNlVHlwZSggJ2FycmF5YnVmZmVyJyApO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuY3Jvc3NPcmlnaW4gPT09ICd1c2UtY3JlZGVudGlhbHMnICkge1xuXG5cdFx0XHR0aGlzLmZpbGVMb2FkZXIuc2V0V2l0aENyZWRlbnRpYWxzKCB0cnVlICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdHNldEV4dGVuc2lvbnMoIGV4dGVuc2lvbnMgKSB7XG5cblx0XHR0aGlzLmV4dGVuc2lvbnMgPSBleHRlbnNpb25zO1xuXG5cdH1cblxuXHRzZXRQbHVnaW5zKCBwbHVnaW5zICkge1xuXG5cdFx0dGhpcy5wbHVnaW5zID0gcGx1Z2lucztcblxuXHR9XG5cblx0cGFyc2UoIG9uTG9hZCwgb25FcnJvciApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXG5cdFx0Ly8gQ2xlYXIgdGhlIGxvYWRlciBjYWNoZVxuXHRcdHRoaXMuY2FjaGUucmVtb3ZlQWxsKCk7XG5cblx0XHQvLyBNYXJrIHRoZSBzcGVjaWFsIG5vZGVzL21lc2hlcyBpbiBqc29uIGZvciBlZmZpY2llbnQgcGFyc2Vcblx0XHR0aGlzLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRyZXR1cm4gZXh0Ll9tYXJrRGVmcyAmJiBleHQuX21hcmtEZWZzKCk7XG5cblx0XHR9ICk7XG5cblx0XHRQcm9taXNlLmFsbCggdGhpcy5faW52b2tlQWxsKCBmdW5jdGlvbiAoIGV4dCApIHtcblxuXHRcdFx0cmV0dXJuIGV4dC5iZWZvcmVSb290ICYmIGV4dC5iZWZvcmVSb290KCk7XG5cblx0XHR9ICkgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggW1xuXG5cdFx0XHRcdHBhcnNlci5nZXREZXBlbmRlbmNpZXMoICdzY2VuZScgKSxcblx0XHRcdFx0cGFyc2VyLmdldERlcGVuZGVuY2llcyggJ2FuaW1hdGlvbicgKSxcblx0XHRcdFx0cGFyc2VyLmdldERlcGVuZGVuY2llcyggJ2NhbWVyYScgKSxcblxuXHRcdFx0XSApO1xuXG5cdFx0fSApLnRoZW4oIGZ1bmN0aW9uICggZGVwZW5kZW5jaWVzICkge1xuXG5cdFx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHRcdHNjZW5lOiBkZXBlbmRlbmNpZXNbIDAgXVsganNvbi5zY2VuZSB8fCAwIF0sXG5cdFx0XHRcdHNjZW5lczogZGVwZW5kZW5jaWVzWyAwIF0sXG5cdFx0XHRcdGFuaW1hdGlvbnM6IGRlcGVuZGVuY2llc1sgMSBdLFxuXHRcdFx0XHRjYW1lcmFzOiBkZXBlbmRlbmNpZXNbIDIgXSxcblx0XHRcdFx0YXNzZXQ6IGpzb24uYXNzZXQsXG5cdFx0XHRcdHBhcnNlcjogcGFyc2VyLFxuXHRcdFx0XHR1c2VyRGF0YToge31cblx0XHRcdH07XG5cblx0XHRcdGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgcmVzdWx0LCBqc29uICk7XG5cblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIHJlc3VsdCwganNvbiApO1xuXG5cdFx0XHRQcm9taXNlLmFsbCggcGFyc2VyLl9pbnZva2VBbGwoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuYWZ0ZXJSb290ICYmIGV4dC5hZnRlclJvb3QoIHJlc3VsdCApO1xuXG5cdFx0XHR9ICkgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0b25Mb2FkKCByZXN1bHQgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApLmNhdGNoKCBvbkVycm9yICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBNYXJrcyB0aGUgc3BlY2lhbCBub2Rlcy9tZXNoZXMgaW4ganNvbiBmb3IgZWZmaWNpZW50IHBhcnNlLlxuXHQgKi9cblx0X21hcmtEZWZzKCkge1xuXG5cdFx0Y29uc3Qgbm9kZURlZnMgPSB0aGlzLmpzb24ubm9kZXMgfHwgW107XG5cdFx0Y29uc3Qgc2tpbkRlZnMgPSB0aGlzLmpzb24uc2tpbnMgfHwgW107XG5cdFx0Y29uc3QgbWVzaERlZnMgPSB0aGlzLmpzb24ubWVzaGVzIHx8IFtdO1xuXG5cdFx0Ly8gTm90aGluZyBpbiB0aGUgbm9kZSBkZWZpbml0aW9uIGluZGljYXRlcyB3aGV0aGVyIGl0IGlzIGEgQm9uZSBvciBhblxuXHRcdC8vIE9iamVjdDNELiBVc2UgdGhlIHNraW5zJyBqb2ludCByZWZlcmVuY2VzIHRvIG1hcmsgYm9uZXMuXG5cdFx0Zm9yICggbGV0IHNraW5JbmRleCA9IDAsIHNraW5MZW5ndGggPSBza2luRGVmcy5sZW5ndGg7IHNraW5JbmRleCA8IHNraW5MZW5ndGg7IHNraW5JbmRleCArKyApIHtcblxuXHRcdFx0Y29uc3Qgam9pbnRzID0gc2tpbkRlZnNbIHNraW5JbmRleCBdLmpvaW50cztcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGpvaW50cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRub2RlRGVmc1sgam9pbnRzWyBpIF0gXS5pc0JvbmUgPSB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvLyBJdGVyYXRlIG92ZXIgYWxsIG5vZGVzLCBtYXJraW5nIHJlZmVyZW5jZXMgdG8gc2hhcmVkIHJlc291cmNlcyxcblx0XHQvLyBhcyB3ZWxsIGFzIHNrZWxldG9uIGpvaW50cy5cblx0XHRmb3IgKCBsZXQgbm9kZUluZGV4ID0gMCwgbm9kZUxlbmd0aCA9IG5vZGVEZWZzLmxlbmd0aDsgbm9kZUluZGV4IDwgbm9kZUxlbmd0aDsgbm9kZUluZGV4ICsrICkge1xuXG5cdFx0XHRjb25zdCBub2RlRGVmID0gbm9kZURlZnNbIG5vZGVJbmRleCBdO1xuXG5cdFx0XHRpZiAoIG5vZGVEZWYubWVzaCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHRoaXMuX2FkZE5vZGVSZWYoIHRoaXMubWVzaENhY2hlLCBub2RlRGVmLm1lc2ggKTtcblxuXHRcdFx0XHQvLyBOb3RoaW5nIGluIHRoZSBtZXNoIGRlZmluaXRpb24gaW5kaWNhdGVzIHdoZXRoZXIgaXQgaXNcblx0XHRcdFx0Ly8gYSBTa2lubmVkTWVzaCBvciBNZXNoLiBVc2UgdGhlIG5vZGUncyBtZXNoIHJlZmVyZW5jZVxuXHRcdFx0XHQvLyB0byBtYXJrIFNraW5uZWRNZXNoIGlmIG5vZGUgaGFzIHNraW4uXG5cdFx0XHRcdGlmICggbm9kZURlZi5za2luICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRtZXNoRGVmc1sgbm9kZURlZi5tZXNoIF0uaXNTa2lubmVkTWVzaCA9IHRydWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbm9kZURlZi5jYW1lcmEgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHR0aGlzLl9hZGROb2RlUmVmKCB0aGlzLmNhbWVyYUNhY2hlLCBub2RlRGVmLmNhbWVyYSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDb3VudHMgcmVmZXJlbmNlcyB0byBzaGFyZWQgbm9kZSAvIE9iamVjdDNEIHJlc291cmNlcy4gVGhlc2UgcmVzb3VyY2VzXG5cdCAqIGNhbiBiZSByZXVzZWQsIG9yIFwiaW5zdGFudGlhdGVkXCIsIGF0IG11bHRpcGxlIG5vZGVzIGluIHRoZSBzY2VuZVxuXHQgKiBoaWVyYXJjaHkuIE1lc2gsIENhbWVyYSwgYW5kIExpZ2h0IGluc3RhbmNlcyBhcmUgaW5zdGFudGlhdGVkIGFuZCBtdXN0XG5cdCAqIGJlIG1hcmtlZC4gTm9uLXNjZW5lZ3JhcGggcmVzb3VyY2VzIChsaWtlIE1hdGVyaWFscywgR2VvbWV0cmllcywgYW5kXG5cdCAqIFRleHR1cmVzKSBjYW4gYmUgcmV1c2VkIGRpcmVjdGx5IGFuZCBhcmUgbm90IG1hcmtlZCBoZXJlLlxuXHQgKlxuXHQgKiBFeGFtcGxlOiBDZXNpdW1NaWxrVHJ1Y2sgc2FtcGxlIG1vZGVsIHJldXNlcyBcIldoZWVsXCIgbWVzaGVzLlxuXHQgKi9cblx0X2FkZE5vZGVSZWYoIGNhY2hlLCBpbmRleCApIHtcblxuXHRcdGlmICggaW5kZXggPT09IHVuZGVmaW5lZCApIHJldHVybjtcblxuXHRcdGlmICggY2FjaGUucmVmc1sgaW5kZXggXSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRjYWNoZS5yZWZzWyBpbmRleCBdID0gY2FjaGUudXNlc1sgaW5kZXggXSA9IDA7XG5cblx0XHR9XG5cblx0XHRjYWNoZS5yZWZzWyBpbmRleCBdICsrO1xuXG5cdH1cblxuXHQvKiogUmV0dXJucyBhIHJlZmVyZW5jZSB0byBhIHNoYXJlZCByZXNvdXJjZSwgY2xvbmluZyBpdCBpZiBuZWNlc3NhcnkuICovXG5cdF9nZXROb2RlUmVmKCBjYWNoZSwgaW5kZXgsIG9iamVjdCApIHtcblxuXHRcdGlmICggY2FjaGUucmVmc1sgaW5kZXggXSA8PSAxICkgcmV0dXJuIG9iamVjdDtcblxuXHRcdGNvbnN0IHJlZiA9IG9iamVjdC5jbG9uZSgpO1xuXG5cdFx0cmVmLm5hbWUgKz0gJ19pbnN0YW5jZV8nICsgKCBjYWNoZS51c2VzWyBpbmRleCBdICsrICk7XG5cblx0XHRyZXR1cm4gcmVmO1xuXG5cdH1cblxuXHRfaW52b2tlT25lKCBmdW5jICkge1xuXG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IE9iamVjdC52YWx1ZXMoIHRoaXMucGx1Z2lucyApO1xuXHRcdGV4dGVuc2lvbnMucHVzaCggdGhpcyApO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHJlc3VsdCA9IGZ1bmMoIGV4dGVuc2lvbnNbIGkgXSApO1xuXG5cdFx0XHRpZiAoIHJlc3VsdCApIHJldHVybiByZXN1bHQ7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblxuXHR9XG5cblx0X2ludm9rZUFsbCggZnVuYyApIHtcblxuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSBPYmplY3QudmFsdWVzKCB0aGlzLnBsdWdpbnMgKTtcblx0XHRleHRlbnNpb25zLnVuc2hpZnQoIHRoaXMgKTtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRjb25zdCByZXN1bHQgPSBmdW5jKCBleHRlbnNpb25zWyBpIF0gKTtcblxuXHRcdFx0aWYgKCByZXN1bHQgKSBwZW5kaW5nLnB1c2goIHJlc3VsdCApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBlbmRpbmc7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXF1ZXN0cyB0aGUgc3BlY2lmaWVkIGRlcGVuZGVuY3kgYXN5bmNocm9ub3VzbHksIHdpdGggY2FjaGluZy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0M0R8TWF0ZXJpYWx8VEhSRUUuVGV4dHVyZXxBbmltYXRpb25DbGlwfEFycmF5QnVmZmVyfE9iamVjdD59XG5cdCAqL1xuXHRnZXREZXBlbmRlbmN5KCB0eXBlLCBpbmRleCApIHtcblxuXHRcdGNvbnN0IGNhY2hlS2V5ID0gdHlwZSArICc6JyArIGluZGV4O1xuXHRcdGxldCBkZXBlbmRlbmN5ID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XG5cblx0XHRpZiAoICEgZGVwZW5kZW5jeSApIHtcblxuXHRcdFx0c3dpdGNoICggdHlwZSApIHtcblxuXHRcdFx0XHRjYXNlICdzY2VuZSc6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZFNjZW5lKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ25vZGUnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWROb2RlKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ21lc2gnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRNZXNoICYmIGV4dC5sb2FkTWVzaCggaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdhY2Nlc3Nvcic6XG5cdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IHRoaXMubG9hZEFjY2Vzc29yKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2J1ZmZlclZpZXcnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRCdWZmZXJWaWV3ICYmIGV4dC5sb2FkQnVmZmVyVmlldyggaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdidWZmZXInOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRCdWZmZXIoIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnbWF0ZXJpYWwnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRNYXRlcmlhbCAmJiBleHQubG9hZE1hdGVyaWFsKCBpbmRleCApO1xuXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ3RleHR1cmUnOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXh0LmxvYWRUZXh0dXJlICYmIGV4dC5sb2FkVGV4dHVyZSggaW5kZXggKTtcblxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdza2luJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkU2tpbiggaW5kZXggKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdhbmltYXRpb24nOlxuXHRcdFx0XHRcdGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRBbmltYXRpb24oIGluZGV4ICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnY2FtZXJhJzpcblx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQ2FtZXJhKCBpbmRleCApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVW5rbm93biB0eXBlOiAnICsgdHlwZSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgZGVwZW5kZW5jeSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRlcGVuZGVuY3k7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXF1ZXN0cyBhbGwgZGVwZW5kZW5jaWVzIG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBhc3luY2hyb25vdXNseSwgd2l0aCBjYWNoaW5nLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PE9iamVjdD4+fVxuXHQgKi9cblx0Z2V0RGVwZW5kZW5jaWVzKCB0eXBlICkge1xuXG5cdFx0bGV0IGRlcGVuZGVuY2llcyA9IHRoaXMuY2FjaGUuZ2V0KCB0eXBlICk7XG5cblx0XHRpZiAoICEgZGVwZW5kZW5jaWVzICkge1xuXG5cdFx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdFx0Y29uc3QgZGVmcyA9IHRoaXMuanNvblsgdHlwZSArICggdHlwZSA9PT0gJ21lc2gnID8gJ2VzJyA6ICdzJyApIF0gfHwgW107XG5cblx0XHRcdGRlcGVuZGVuY2llcyA9IFByb21pc2UuYWxsKCBkZWZzLm1hcCggZnVuY3Rpb24gKCBkZWYsIGluZGV4ICkge1xuXG5cdFx0XHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggdHlwZSwgaW5kZXggKTtcblxuXHRcdFx0fSApICk7XG5cblx0XHRcdHRoaXMuY2FjaGUuYWRkKCB0eXBlLCBkZXBlbmRlbmNpZXMgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBkZXBlbmRlbmNpZXM7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2J1ZmZlcnMtYW5kLWJ1ZmZlci12aWV3c1xuXHQgKiBAcGFyYW0ge251bWJlcn0gYnVmZmVySW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59XG5cdCAqL1xuXHRsb2FkQnVmZmVyKCBidWZmZXJJbmRleCApIHtcblxuXHRcdGNvbnN0IGJ1ZmZlckRlZiA9IHRoaXMuanNvbi5idWZmZXJzWyBidWZmZXJJbmRleCBdO1xuXHRcdGNvbnN0IGxvYWRlciA9IHRoaXMuZmlsZUxvYWRlcjtcblxuXHRcdGlmICggYnVmZmVyRGVmLnR5cGUgJiYgYnVmZmVyRGVmLnR5cGUgIT09ICdhcnJheWJ1ZmZlcicgKSB7XG5cblx0XHRcdHRocm93IG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6ICcgKyBidWZmZXJEZWYudHlwZSArICcgYnVmZmVyIHR5cGUgaXMgbm90IHN1cHBvcnRlZC4nICk7XG5cblx0XHR9XG5cblx0XHQvLyBJZiBwcmVzZW50LCBHTEIgY29udGFpbmVyIGlzIHJlcXVpcmVkIHRvIGJlIHRoZSBmaXJzdCBidWZmZXIuXG5cdFx0aWYgKCBidWZmZXJEZWYudXJpID09PSB1bmRlZmluZWQgJiYgYnVmZmVySW5kZXggPT09IDAgKSB7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIHRoaXMuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEYgXS5ib2R5ICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbiAoIHJlc29sdmUsIHJlamVjdCApIHtcblxuXHRcdFx0bG9hZGVyLmxvYWQoIHJlc29sdmVVUkwoIGJ1ZmZlckRlZi51cmksIG9wdGlvbnMucGF0aCApLCByZXNvbHZlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRyZWplY3QoIG5ldyBFcnJvciggJ1RIUkVFLkdMVEZMb2FkZXI6IEZhaWxlZCB0byBsb2FkIGJ1ZmZlciBcIicgKyBidWZmZXJEZWYudXJpICsgJ1wiLicgKSApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2J1ZmZlcnMtYW5kLWJ1ZmZlci12aWV3c1xuXHQgKiBAcGFyYW0ge251bWJlcn0gYnVmZmVyVmlld0luZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXlCdWZmZXI+fVxuXHQgKi9cblx0bG9hZEJ1ZmZlclZpZXcoIGJ1ZmZlclZpZXdJbmRleCApIHtcblxuXHRcdGNvbnN0IGJ1ZmZlclZpZXdEZWYgPSB0aGlzLmpzb24uYnVmZmVyVmlld3NbIGJ1ZmZlclZpZXdJbmRleCBdO1xuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ2J1ZmZlcicsIGJ1ZmZlclZpZXdEZWYuYnVmZmVyICkudGhlbiggZnVuY3Rpb24gKCBidWZmZXIgKSB7XG5cblx0XHRcdGNvbnN0IGJ5dGVMZW5ndGggPSBidWZmZXJWaWV3RGVmLmJ5dGVMZW5ndGggfHwgMDtcblx0XHRcdGNvbnN0IGJ5dGVPZmZzZXQgPSBidWZmZXJWaWV3RGVmLmJ5dGVPZmZzZXQgfHwgMDtcblx0XHRcdHJldHVybiBidWZmZXIuc2xpY2UoIGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2FjY2Vzc29yc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gYWNjZXNzb3JJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEJ1ZmZlckF0dHJpYnV0ZXxJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZT59XG5cdCAqL1xuXHRsb2FkQWNjZXNzb3IoIGFjY2Vzc29ySW5kZXggKSB7XG5cblx0XHRjb25zdCBwYXJzZXIgPSB0aGlzO1xuXHRcdGNvbnN0IGpzb24gPSB0aGlzLmpzb247XG5cblx0XHRjb25zdCBhY2Nlc3NvckRlZiA9IHRoaXMuanNvbi5hY2Nlc3NvcnNbIGFjY2Vzc29ySW5kZXggXTtcblxuXHRcdGlmICggYWNjZXNzb3JEZWYuYnVmZmVyVmlldyA9PT0gdW5kZWZpbmVkICYmIGFjY2Vzc29yRGVmLnNwYXJzZSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHQvLyBJZ25vcmUgZW1wdHkgYWNjZXNzb3JzLCB3aGljaCBtYXkgYmUgdXNlZCB0byBkZWNsYXJlIHJ1bnRpbWVcblx0XHRcdC8vIGluZm9ybWF0aW9uIGFib3V0IGF0dHJpYnV0ZXMgY29taW5nIGZyb20gYW5vdGhlciBzb3VyY2UgKGUuZy4gRHJhY29cblx0XHRcdC8vIGNvbXByZXNzaW9uIGV4dGVuc2lvbikuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBudWxsICk7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwZW5kaW5nQnVmZmVyVmlld3MgPSBbXTtcblxuXHRcdGlmICggYWNjZXNzb3JEZWYuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgKSApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0cGVuZGluZ0J1ZmZlclZpZXdzLnB1c2goIG51bGwgKTtcblxuXHRcdH1cblxuXHRcdGlmICggYWNjZXNzb3JEZWYuc3BhcnNlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3JywgYWNjZXNzb3JEZWYuc3BhcnNlLmluZGljZXMuYnVmZmVyVmlldyApICk7XG5cdFx0XHRwZW5kaW5nQnVmZmVyVmlld3MucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYnVmZmVyVmlldycsIGFjY2Vzc29yRGVmLnNwYXJzZS52YWx1ZXMuYnVmZmVyVmlldyApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmdCdWZmZXJWaWV3cyApLnRoZW4oIGZ1bmN0aW9uICggYnVmZmVyVmlld3MgKSB7XG5cblx0XHRcdGNvbnN0IGJ1ZmZlclZpZXcgPSBidWZmZXJWaWV3c1sgMCBdO1xuXG5cdFx0XHRjb25zdCBpdGVtU2l6ZSA9IFdFQkdMX1RZUEVfU0laRVNbIGFjY2Vzc29yRGVmLnR5cGUgXTtcblx0XHRcdGNvbnN0IFR5cGVkQXJyYXkgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yRGVmLmNvbXBvbmVudFR5cGUgXTtcblxuXHRcdFx0Ly8gRm9yIFZFQzM6IGl0ZW1TaXplIGlzIDMsIGVsZW1lbnRCeXRlcyBpcyA0LCBpdGVtQnl0ZXMgaXMgMTIuXG5cdFx0XHRjb25zdCBlbGVtZW50Qnl0ZXMgPSBUeXBlZEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xuXHRcdFx0Y29uc3QgaXRlbUJ5dGVzID0gZWxlbWVudEJ5dGVzICogaXRlbVNpemU7XG5cdFx0XHRjb25zdCBieXRlT2Zmc2V0ID0gYWNjZXNzb3JEZWYuYnl0ZU9mZnNldCB8fCAwO1xuXHRcdFx0Y29uc3QgYnl0ZVN0cmlkZSA9IGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgIT09IHVuZGVmaW5lZCA/IGpzb24uYnVmZmVyVmlld3NbIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgXS5ieXRlU3RyaWRlIDogdW5kZWZpbmVkO1xuXHRcdFx0Y29uc3Qgbm9ybWFsaXplZCA9IGFjY2Vzc29yRGVmLm5vcm1hbGl6ZWQgPT09IHRydWU7XG5cdFx0XHRsZXQgYXJyYXksIGJ1ZmZlckF0dHJpYnV0ZTtcblxuXHRcdFx0Ly8gVGhlIGJ1ZmZlciBpcyBub3QgaW50ZXJsZWF2ZWQgaWYgdGhlIHN0cmlkZSBpcyB0aGUgaXRlbSBzaXplIGluIGJ5dGVzLlxuXHRcdFx0aWYgKCBieXRlU3RyaWRlICYmIGJ5dGVTdHJpZGUgIT09IGl0ZW1CeXRlcyApIHtcblxuXHRcdFx0XHQvLyBFYWNoIFwic2xpY2VcIiBvZiB0aGUgYnVmZmVyLCBhcyBkZWZpbmVkIGJ5ICdjb3VudCcgZWxlbWVudHMgb2YgJ2J5dGVTdHJpZGUnIGJ5dGVzLCBnZXRzIGl0cyBvd24gSW50ZXJsZWF2ZWRCdWZmZXJcblx0XHRcdFx0Ly8gVGhpcyBtYWtlcyBzdXJlIHRoYXQgSUJBLmNvdW50IHJlZmxlY3RzIGFjY2Vzc29yLmNvdW50IHByb3Blcmx5XG5cdFx0XHRcdGNvbnN0IGliU2xpY2UgPSBNYXRoLmZsb29yKCBieXRlT2Zmc2V0IC8gYnl0ZVN0cmlkZSApO1xuXHRcdFx0XHRjb25zdCBpYkNhY2hlS2V5ID0gJ0ludGVybGVhdmVkQnVmZmVyOicgKyBhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICsgJzonICsgYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZSArICc6JyArIGliU2xpY2UgKyAnOicgKyBhY2Nlc3NvckRlZi5jb3VudDtcblx0XHRcdFx0bGV0IGliID0gcGFyc2VyLmNhY2hlLmdldCggaWJDYWNoZUtleSApO1xuXG5cdFx0XHRcdGlmICggISBpYiApIHtcblxuXHRcdFx0XHRcdGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoIGJ1ZmZlclZpZXcsIGliU2xpY2UgKiBieXRlU3RyaWRlLCBhY2Nlc3NvckRlZi5jb3VudCAqIGJ5dGVTdHJpZGUgLyBlbGVtZW50Qnl0ZXMgKTtcblxuXHRcdFx0XHRcdC8vIEludGVnZXIgcGFyYW1ldGVycyB0byBJQi9JQkEgYXJlIGluIGFycmF5IGVsZW1lbnRzLCBub3QgYnl0ZXMuXG5cdFx0XHRcdFx0aWIgPSBuZXcgSW50ZXJsZWF2ZWRCdWZmZXIoIGFycmF5LCBieXRlU3RyaWRlIC8gZWxlbWVudEJ5dGVzICk7XG5cblx0XHRcdFx0XHRwYXJzZXIuY2FjaGUuYWRkKCBpYkNhY2hlS2V5LCBpYiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUgPSBuZXcgSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUoIGliLCBpdGVtU2l6ZSwgKCBieXRlT2Zmc2V0ICUgYnl0ZVN0cmlkZSApIC8gZWxlbWVudEJ5dGVzLCBub3JtYWxpemVkICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0aWYgKCBidWZmZXJWaWV3ID09PSBudWxsICkge1xuXG5cdFx0XHRcdFx0YXJyYXkgPSBuZXcgVHlwZWRBcnJheSggYWNjZXNzb3JEZWYuY291bnQgKiBpdGVtU2l6ZSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBidWZmZXJWaWV3LCBieXRlT2Zmc2V0LCBhY2Nlc3NvckRlZi5jb3VudCAqIGl0ZW1TaXplICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoIGFycmF5LCBpdGVtU2l6ZSwgbm9ybWFsaXplZCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjc3BhcnNlLWFjY2Vzc29yc1xuXHRcdFx0aWYgKCBhY2Nlc3NvckRlZi5zcGFyc2UgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBpdGVtU2l6ZUluZGljZXMgPSBXRUJHTF9UWVBFX1NJWkVTLlNDQUxBUjtcblx0XHRcdFx0Y29uc3QgVHlwZWRBcnJheUluZGljZXMgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yRGVmLnNwYXJzZS5pbmRpY2VzLmNvbXBvbmVudFR5cGUgXTtcblxuXHRcdFx0XHRjb25zdCBieXRlT2Zmc2V0SW5kaWNlcyA9IGFjY2Vzc29yRGVmLnNwYXJzZS5pbmRpY2VzLmJ5dGVPZmZzZXQgfHwgMDtcblx0XHRcdFx0Y29uc3QgYnl0ZU9mZnNldFZhbHVlcyA9IGFjY2Vzc29yRGVmLnNwYXJzZS52YWx1ZXMuYnl0ZU9mZnNldCB8fCAwO1xuXG5cdFx0XHRcdGNvbnN0IHNwYXJzZUluZGljZXMgPSBuZXcgVHlwZWRBcnJheUluZGljZXMoIGJ1ZmZlclZpZXdzWyAxIF0sIGJ5dGVPZmZzZXRJbmRpY2VzLCBhY2Nlc3NvckRlZi5zcGFyc2UuY291bnQgKiBpdGVtU2l6ZUluZGljZXMgKTtcblx0XHRcdFx0Y29uc3Qgc3BhcnNlVmFsdWVzID0gbmV3IFR5cGVkQXJyYXkoIGJ1ZmZlclZpZXdzWyAyIF0sIGJ5dGVPZmZzZXRWYWx1ZXMsIGFjY2Vzc29yRGVmLnNwYXJzZS5jb3VudCAqIGl0ZW1TaXplICk7XG5cblx0XHRcdFx0aWYgKCBidWZmZXJWaWV3ICE9PSBudWxsICkge1xuXG5cdFx0XHRcdFx0Ly8gQXZvaWQgbW9kaWZ5aW5nIHRoZSBvcmlnaW5hbCBBcnJheUJ1ZmZlciwgaWYgdGhlIGJ1ZmZlclZpZXcgd2Fzbid0IGluaXRpYWxpemVkIHdpdGggemVyb2VzLlxuXHRcdFx0XHRcdGJ1ZmZlckF0dHJpYnV0ZSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoIGJ1ZmZlckF0dHJpYnV0ZS5hcnJheS5zbGljZSgpLCBidWZmZXJBdHRyaWJ1dGUuaXRlbVNpemUsIGJ1ZmZlckF0dHJpYnV0ZS5ub3JtYWxpemVkICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBzcGFyc2VJbmRpY2VzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdFx0Y29uc3QgaW5kZXggPSBzcGFyc2VJbmRpY2VzWyBpIF07XG5cblx0XHRcdFx0XHRidWZmZXJBdHRyaWJ1dGUuc2V0WCggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplIF0gKTtcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDIgKSBidWZmZXJBdHRyaWJ1dGUuc2V0WSggaW5kZXgsIHNwYXJzZVZhbHVlc1sgaSAqIGl0ZW1TaXplICsgMSBdICk7XG5cdFx0XHRcdFx0aWYgKCBpdGVtU2l6ZSA+PSAzICkgYnVmZmVyQXR0cmlidXRlLnNldFooIGluZGV4LCBzcGFyc2VWYWx1ZXNbIGkgKiBpdGVtU2l6ZSArIDIgXSApO1xuXHRcdFx0XHRcdGlmICggaXRlbVNpemUgPj0gNCApIGJ1ZmZlckF0dHJpYnV0ZS5zZXRXKCBpbmRleCwgc3BhcnNlVmFsdWVzWyBpICogaXRlbVNpemUgKyAzIF0gKTtcblx0XHRcdFx0XHRpZiAoIGl0ZW1TaXplID49IDUgKSB0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBpdGVtU2l6ZSBpbiBzcGFyc2UgQnVmZmVyQXR0cmlidXRlLicgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGJ1ZmZlckF0dHJpYnV0ZTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCN0ZXh0dXJlc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gdGV4dHVyZUluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8VEhSRUUuVGV4dHVyZT59XG5cdCAqL1xuXHRsb2FkVGV4dHVyZSggdGV4dHVyZUluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0IHRleHR1cmVEZWYgPSBqc29uLnRleHR1cmVzWyB0ZXh0dXJlSW5kZXggXTtcblx0XHRjb25zdCBzb3VyY2UgPSBqc29uLmltYWdlc1sgdGV4dHVyZURlZi5zb3VyY2UgXTtcblxuXHRcdGxldCBsb2FkZXIgPSB0aGlzLnRleHR1cmVMb2FkZXI7XG5cblx0XHRpZiAoIHNvdXJjZS51cmkgKSB7XG5cblx0XHRcdGNvbnN0IGhhbmRsZXIgPSBvcHRpb25zLm1hbmFnZXIuZ2V0SGFuZGxlciggc291cmNlLnVyaSApO1xuXHRcdFx0aWYgKCBoYW5kbGVyICE9PSBudWxsICkgbG9hZGVyID0gaGFuZGxlcjtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmxvYWRUZXh0dXJlSW1hZ2UoIHRleHR1cmVJbmRleCwgc291cmNlLCBsb2FkZXIgKTtcblxuXHR9XG5cblx0bG9hZFRleHR1cmVJbWFnZSggdGV4dHVyZUluZGV4LCBzb3VyY2UsIGxvYWRlciApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0Y29uc3QgdGV4dHVyZURlZiA9IGpzb24udGV4dHVyZXNbIHRleHR1cmVJbmRleCBdO1xuXG5cdFx0Y29uc3QgVVJMID0gc2VsZi5VUkwgfHwgc2VsZi53ZWJraXRVUkw7XG5cblx0XHRsZXQgc291cmNlVVJJID0gc291cmNlLnVyaTtcblx0XHRsZXQgaXNPYmplY3RVUkwgPSBmYWxzZTtcblx0XHRsZXQgaGFzQWxwaGEgPSB0cnVlO1xuXG5cdFx0aWYgKCBzb3VyY2UubWltZVR5cGUgPT09ICdpbWFnZS9qcGVnJyApIGhhc0FscGhhID0gZmFsc2U7XG5cblx0XHRpZiAoIHNvdXJjZS5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdC8vIExvYWQgYmluYXJ5IGltYWdlIGRhdGEgZnJvbSBidWZmZXJWaWV3LCBpZiBwcm92aWRlZC5cblxuXHRcdFx0c291cmNlVVJJID0gcGFyc2VyLmdldERlcGVuZGVuY3koICdidWZmZXJWaWV3Jywgc291cmNlLmJ1ZmZlclZpZXcgKS50aGVuKCBmdW5jdGlvbiAoIGJ1ZmZlclZpZXcgKSB7XG5cblx0XHRcdFx0aWYgKCBzb3VyY2UubWltZVR5cGUgPT09ICdpbWFnZS9wbmcnICkge1xuXG5cdFx0XHRcdFx0Ly8gSW5zcGVjdCB0aGUgUE5HICdJSERSJyBjaHVuayB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgaW1hZ2UgY291bGQgaGF2ZSBhblxuXHRcdFx0XHRcdC8vIGFscGhhIGNoYW5uZWwuIFRoaXMgY2hlY2sgaXMgY29uc2VydmF0aXZlIOKAlCB0aGUgaW1hZ2UgY291bGQgaGF2ZSBhbiBhbHBoYVxuXHRcdFx0XHRcdC8vIGNoYW5uZWwgd2l0aCBhbGwgdmFsdWVzID09IDEsIGFuZCB0aGUgaW5kZXhlZCB0eXBlIChjb2xvclR5cGUgPT0gMykgb25seVxuXHRcdFx0XHRcdC8vIHNvbWV0aW1lcyBjb250YWlucyBhbHBoYS5cblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1BvcnRhYmxlX05ldHdvcmtfR3JhcGhpY3MjRmlsZV9oZWFkZXJcblx0XHRcdFx0XHRjb25zdCBjb2xvclR5cGUgPSBuZXcgRGF0YVZpZXcoIGJ1ZmZlclZpZXcsIDI1LCAxICkuZ2V0VWludDgoIDAsIGZhbHNlICk7XG5cdFx0XHRcdFx0aGFzQWxwaGEgPSBjb2xvclR5cGUgPT09IDYgfHwgY29sb3JUeXBlID09PSA0IHx8IGNvbG9yVHlwZSA9PT0gMztcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aXNPYmplY3RVUkwgPSB0cnVlO1xuXHRcdFx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoIFsgYnVmZmVyVmlldyBdLCB7IHR5cGU6IHNvdXJjZS5taW1lVHlwZSB9ICk7XG5cdFx0XHRcdHNvdXJjZVVSSSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGJsb2IgKTtcblx0XHRcdFx0cmV0dXJuIHNvdXJjZVVSSTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSBlbHNlIGlmICggc291cmNlLnVyaSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyOiBJbWFnZSAnICsgdGV4dHVyZUluZGV4ICsgJyBpcyBtaXNzaW5nIFVSSSBhbmQgYnVmZmVyVmlldycgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIHNvdXJjZVVSSSApLnRoZW4oIGZ1bmN0aW9uICggc291cmNlVVJJICkge1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSwgcmVqZWN0ICkge1xuXG5cdFx0XHRcdGxldCBvbkxvYWQgPSByZXNvbHZlO1xuXG5cdFx0XHRcdGlmICggbG9hZGVyLmlzSW1hZ2VCaXRtYXBMb2FkZXIgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHRvbkxvYWQgPSBmdW5jdGlvbiAoIGltYWdlQml0bWFwICkge1xuXG5cdFx0XHRcdFx0XHRyZXNvbHZlKCBuZXcgQ2FudmFzVGV4dHVyZSggaW1hZ2VCaXRtYXAgKSApO1xuXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bG9hZGVyLmxvYWQoIHJlc29sdmVVUkwoIHNvdXJjZVVSSSwgb3B0aW9ucy5wYXRoICksIG9uTG9hZCwgdW5kZWZpbmVkLCByZWplY3QgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApLnRoZW4oIGZ1bmN0aW9uICggdGV4dHVyZSApIHtcblxuXHRcdFx0Ly8gQ2xlYW4gdXAgcmVzb3VyY2VzIGFuZCBjb25maWd1cmUgVGV4dHVyZS5cblxuXHRcdFx0aWYgKCBpc09iamVjdFVSTCA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKCBzb3VyY2VVUkkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHR0ZXh0dXJlLmZsaXBZID0gZmFsc2U7XG5cblx0XHRcdGlmICggdGV4dHVyZURlZi5uYW1lICkgdGV4dHVyZS5uYW1lID0gdGV4dHVyZURlZi5uYW1lO1xuXG5cdFx0XHQvLyBXaGVuIHRoZXJlIGlzIGRlZmluaXRlbHkgbm8gYWxwaGEgY2hhbm5lbCBpbiB0aGUgdGV4dHVyZSwgc2V0IFJHQkZvcm1hdCB0byBzYXZlIHNwYWNlLlxuXHRcdFx0aWYgKCAhIGhhc0FscGhhICkgdGV4dHVyZS5mb3JtYXQgPSBSR0JGb3JtYXQ7XG5cblx0XHRcdGNvbnN0IHNhbXBsZXJzID0ganNvbi5zYW1wbGVycyB8fCB7fTtcblx0XHRcdGNvbnN0IHNhbXBsZXIgPSBzYW1wbGVyc1sgdGV4dHVyZURlZi5zYW1wbGVyIF0gfHwge307XG5cblx0XHRcdHRleHR1cmUubWFnRmlsdGVyID0gV0VCR0xfRklMVEVSU1sgc2FtcGxlci5tYWdGaWx0ZXIgXSB8fCBMaW5lYXJGaWx0ZXI7XG5cdFx0XHR0ZXh0dXJlLm1pbkZpbHRlciA9IFdFQkdMX0ZJTFRFUlNbIHNhbXBsZXIubWluRmlsdGVyIF0gfHwgTGluZWFyTWlwbWFwTGluZWFyRmlsdGVyO1xuXHRcdFx0dGV4dHVyZS53cmFwUyA9IFdFQkdMX1dSQVBQSU5HU1sgc2FtcGxlci53cmFwUyBdIHx8IFJlcGVhdFdyYXBwaW5nO1xuXHRcdFx0dGV4dHVyZS53cmFwVCA9IFdFQkdMX1dSQVBQSU5HU1sgc2FtcGxlci53cmFwVCBdIHx8IFJlcGVhdFdyYXBwaW5nO1xuXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggdGV4dHVyZSwge1xuXHRcdFx0XHR0eXBlOiAndGV4dHVyZXMnLFxuXHRcdFx0XHRpbmRleDogdGV4dHVyZUluZGV4XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiB0ZXh0dXJlO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogQXN5bmNocm9ub3VzbHkgYXNzaWducyBhIHRleHR1cmUgdG8gdGhlIGdpdmVuIG1hdGVyaWFsIHBhcmFtZXRlcnMuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBtYXRlcmlhbFBhcmFtc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWFwTmFtZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gbWFwRGVmXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAqL1xuXHRhc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgbWFwTmFtZSwgbWFwRGVmICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblxuXHRcdHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koICd0ZXh0dXJlJywgbWFwRGVmLmluZGV4ICkudGhlbiggZnVuY3Rpb24gKCB0ZXh0dXJlICkge1xuXG5cdFx0XHQvLyBNYXRlcmlhbHMgc2FtcGxlIGFvTWFwIGZyb20gVVYgc2V0IDEgYW5kIG90aGVyIG1hcHMgZnJvbSBVViBzZXQgMCAtIHRoaXMgY2FuJ3QgYmUgY29uZmlndXJlZFxuXHRcdFx0Ly8gSG93ZXZlciwgd2Ugd2lsbCBjb3B5IFVWIHNldCAwIHRvIFVWIHNldCAxIG9uIGRlbWFuZCBmb3IgYW9NYXBcblx0XHRcdGlmICggbWFwRGVmLnRleENvb3JkICE9PSB1bmRlZmluZWQgJiYgbWFwRGVmLnRleENvb3JkICE9IDAgJiYgISAoIG1hcE5hbWUgPT09ICdhb01hcCcgJiYgbWFwRGVmLnRleENvb3JkID09IDEgKSApIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBDdXN0b20gVVYgc2V0ICcgKyBtYXBEZWYudGV4Q29vcmQgKyAnIGZvciB0ZXh0dXJlICcgKyBtYXBOYW1lICsgJyBub3QgeWV0IHN1cHBvcnRlZC4nICk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBwYXJzZXIuZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk0gXSApIHtcblxuXHRcdFx0XHRjb25zdCB0cmFuc2Zvcm0gPSBtYXBEZWYuZXh0ZW5zaW9ucyAhPT0gdW5kZWZpbmVkID8gbWFwRGVmLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNIF0gOiB1bmRlZmluZWQ7XG5cblx0XHRcdFx0aWYgKCB0cmFuc2Zvcm0gKSB7XG5cblx0XHRcdFx0XHRjb25zdCBnbHRmUmVmZXJlbmNlID0gcGFyc2VyLmFzc29jaWF0aW9ucy5nZXQoIHRleHR1cmUgKTtcblx0XHRcdFx0XHR0ZXh0dXJlID0gcGFyc2VyLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNIF0uZXh0ZW5kVGV4dHVyZSggdGV4dHVyZSwgdHJhbnNmb3JtICk7XG5cdFx0XHRcdFx0cGFyc2VyLmFzc29jaWF0aW9ucy5zZXQoIHRleHR1cmUsIGdsdGZSZWZlcmVuY2UgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXNbIG1hcE5hbWUgXSA9IHRleHR1cmU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBc3NpZ25zIGZpbmFsIG1hdGVyaWFsIHRvIGEgTWVzaCwgTGluZSwgb3IgUG9pbnRzIGluc3RhbmNlLiBUaGUgaW5zdGFuY2Vcblx0ICogYWxyZWFkeSBoYXMgYSBtYXRlcmlhbCAoZ2VuZXJhdGVkIGZyb20gdGhlIGdsVEYgbWF0ZXJpYWwgb3B0aW9ucyBhbG9uZSlcblx0ICogYnV0IHJldXNlIG9mIHRoZSBzYW1lIGdsVEYgbWF0ZXJpYWwgbWF5IHJlcXVpcmUgbXVsdGlwbGUgdGhyZWVqcyBtYXRlcmlhbHNcblx0ICogdG8gYWNjb21tb2RhdGUgZGlmZmVyZW50IHByaW1pdGl2ZSB0eXBlcywgZGVmaW5lcywgZXRjLiBOZXcgbWF0ZXJpYWxzIHdpbGxcblx0ICogYmUgY3JlYXRlZCBpZiBuZWNlc3NhcnksIGFuZCByZXVzZWQgZnJvbSBhIGNhY2hlLlxuXHQgKiBAcGFyYW0gIHtPYmplY3QzRH0gbWVzaCBNZXNoLCBMaW5lLCBvciBQb2ludHMgaW5zdGFuY2UuXG5cdCAqL1xuXHRhc3NpZ25GaW5hbE1hdGVyaWFsKCBtZXNoICkge1xuXG5cdFx0Y29uc3QgZ2VvbWV0cnkgPSBtZXNoLmdlb21ldHJ5O1xuXHRcdGxldCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWw7XG5cblx0XHRjb25zdCB1c2VWZXJ0ZXhUYW5nZW50cyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMudGFuZ2VudCAhPT0gdW5kZWZpbmVkO1xuXHRcdGNvbnN0IHVzZVZlcnRleENvbG9ycyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMuY29sb3IgIT09IHVuZGVmaW5lZDtcblx0XHRjb25zdCB1c2VGbGF0U2hhZGluZyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsID09PSB1bmRlZmluZWQ7XG5cdFx0Y29uc3QgdXNlU2tpbm5pbmcgPSBtZXNoLmlzU2tpbm5lZE1lc2ggPT09IHRydWU7XG5cdFx0Y29uc3QgdXNlTW9ycGhUYXJnZXRzID0gT2JqZWN0LmtleXMoIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyApLmxlbmd0aCA+IDA7XG5cdFx0Y29uc3QgdXNlTW9ycGhOb3JtYWxzID0gdXNlTW9ycGhUYXJnZXRzICYmIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5ub3JtYWwgIT09IHVuZGVmaW5lZDtcblxuXHRcdGlmICggbWVzaC5pc1BvaW50cyApIHtcblxuXHRcdFx0Y29uc3QgY2FjaGVLZXkgPSAnUG9pbnRzTWF0ZXJpYWw6JyArIG1hdGVyaWFsLnV1aWQ7XG5cblx0XHRcdGxldCBwb2ludHNNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KCBjYWNoZUtleSApO1xuXG5cdFx0XHRpZiAoICEgcG9pbnRzTWF0ZXJpYWwgKSB7XG5cblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwgPSBuZXcgUG9pbnRzTWF0ZXJpYWwoKTtcblx0XHRcdFx0TWF0ZXJpYWwucHJvdG90eXBlLmNvcHkuY2FsbCggcG9pbnRzTWF0ZXJpYWwsIG1hdGVyaWFsICk7XG5cdFx0XHRcdHBvaW50c01hdGVyaWFsLmNvbG9yLmNvcHkoIG1hdGVyaWFsLmNvbG9yICk7XG5cdFx0XHRcdHBvaW50c01hdGVyaWFsLm1hcCA9IG1hdGVyaWFsLm1hcDtcblx0XHRcdFx0cG9pbnRzTWF0ZXJpYWwuc2l6ZUF0dGVudWF0aW9uID0gZmFsc2U7IC8vIGdsVEYgc3BlYyBzYXlzIHBvaW50cyBzaG91bGQgYmUgMXB4XG5cblx0XHRcdFx0dGhpcy5jYWNoZS5hZGQoIGNhY2hlS2V5LCBwb2ludHNNYXRlcmlhbCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsID0gcG9pbnRzTWF0ZXJpYWw7XG5cblx0XHR9IGVsc2UgaWYgKCBtZXNoLmlzTGluZSApIHtcblxuXHRcdFx0Y29uc3QgY2FjaGVLZXkgPSAnTGluZUJhc2ljTWF0ZXJpYWw6JyArIG1hdGVyaWFsLnV1aWQ7XG5cblx0XHRcdGxldCBsaW5lTWF0ZXJpYWwgPSB0aGlzLmNhY2hlLmdldCggY2FjaGVLZXkgKTtcblxuXHRcdFx0aWYgKCAhIGxpbmVNYXRlcmlhbCApIHtcblxuXHRcdFx0XHRsaW5lTWF0ZXJpYWwgPSBuZXcgTGluZUJhc2ljTWF0ZXJpYWwoKTtcblx0XHRcdFx0TWF0ZXJpYWwucHJvdG90eXBlLmNvcHkuY2FsbCggbGluZU1hdGVyaWFsLCBtYXRlcmlhbCApO1xuXHRcdFx0XHRsaW5lTWF0ZXJpYWwuY29sb3IuY29weSggbWF0ZXJpYWwuY29sb3IgKTtcblxuXHRcdFx0XHR0aGlzLmNhY2hlLmFkZCggY2FjaGVLZXksIGxpbmVNYXRlcmlhbCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsID0gbGluZU1hdGVyaWFsO1xuXG5cdFx0fVxuXG5cdFx0Ly8gQ2xvbmUgdGhlIG1hdGVyaWFsIGlmIGl0IHdpbGwgYmUgbW9kaWZpZWRcblx0XHRpZiAoIHVzZVZlcnRleFRhbmdlbnRzIHx8IHVzZVZlcnRleENvbG9ycyB8fCB1c2VGbGF0U2hhZGluZyB8fCB1c2VTa2lubmluZyB8fCB1c2VNb3JwaFRhcmdldHMgKSB7XG5cblx0XHRcdGxldCBjYWNoZUtleSA9ICdDbG9uZWRNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZCArICc6JztcblxuXHRcdFx0aWYgKCBtYXRlcmlhbC5pc0dMVEZTcGVjdWxhckdsb3NzaW5lc3NNYXRlcmlhbCApIGNhY2hlS2V5ICs9ICdzcGVjdWxhci1nbG9zc2luZXNzOic7XG5cdFx0XHRpZiAoIHVzZVNraW5uaW5nICkgY2FjaGVLZXkgKz0gJ3NraW5uaW5nOic7XG5cdFx0XHRpZiAoIHVzZVZlcnRleFRhbmdlbnRzICkgY2FjaGVLZXkgKz0gJ3ZlcnRleC10YW5nZW50czonO1xuXHRcdFx0aWYgKCB1c2VWZXJ0ZXhDb2xvcnMgKSBjYWNoZUtleSArPSAndmVydGV4LWNvbG9yczonO1xuXHRcdFx0aWYgKCB1c2VGbGF0U2hhZGluZyApIGNhY2hlS2V5ICs9ICdmbGF0LXNoYWRpbmc6Jztcblx0XHRcdGlmICggdXNlTW9ycGhUYXJnZXRzICkgY2FjaGVLZXkgKz0gJ21vcnBoLXRhcmdldHM6Jztcblx0XHRcdGlmICggdXNlTW9ycGhOb3JtYWxzICkgY2FjaGVLZXkgKz0gJ21vcnBoLW5vcm1hbHM6JztcblxuXHRcdFx0bGV0IGNhY2hlZE1hdGVyaWFsID0gdGhpcy5jYWNoZS5nZXQoIGNhY2hlS2V5ICk7XG5cblx0XHRcdGlmICggISBjYWNoZWRNYXRlcmlhbCApIHtcblxuXHRcdFx0XHRjYWNoZWRNYXRlcmlhbCA9IG1hdGVyaWFsLmNsb25lKCk7XG5cblx0XHRcdFx0aWYgKCB1c2VTa2lubmluZyApIGNhY2hlZE1hdGVyaWFsLnNraW5uaW5nID0gdHJ1ZTtcblx0XHRcdFx0aWYgKCB1c2VWZXJ0ZXhDb2xvcnMgKSBjYWNoZWRNYXRlcmlhbC52ZXJ0ZXhDb2xvcnMgPSB0cnVlO1xuXHRcdFx0XHRpZiAoIHVzZUZsYXRTaGFkaW5nICkgY2FjaGVkTWF0ZXJpYWwuZmxhdFNoYWRpbmcgPSB0cnVlO1xuXHRcdFx0XHRpZiAoIHVzZU1vcnBoVGFyZ2V0cyApIGNhY2hlZE1hdGVyaWFsLm1vcnBoVGFyZ2V0cyA9IHRydWU7XG5cdFx0XHRcdGlmICggdXNlTW9ycGhOb3JtYWxzICkgY2FjaGVkTWF0ZXJpYWwubW9ycGhOb3JtYWxzID0gdHJ1ZTtcblxuXHRcdFx0XHRpZiAoIHVzZVZlcnRleFRhbmdlbnRzICkge1xuXG5cdFx0XHRcdFx0Y2FjaGVkTWF0ZXJpYWwudmVydGV4VGFuZ2VudHMgPSB0cnVlO1xuXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTE0MzgjaXNzdWVjb21tZW50LTUwNzAwMzk5NVxuXHRcdFx0XHRcdGlmICggY2FjaGVkTWF0ZXJpYWwubm9ybWFsU2NhbGUgKSBjYWNoZWRNYXRlcmlhbC5ub3JtYWxTY2FsZS55ICo9IC0gMTtcblx0XHRcdFx0XHRpZiAoIGNhY2hlZE1hdGVyaWFsLmNsZWFyY29hdE5vcm1hbFNjYWxlICkgY2FjaGVkTWF0ZXJpYWwuY2xlYXJjb2F0Tm9ybWFsU2NhbGUueSAqPSAtIDE7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuY2FjaGUuYWRkKCBjYWNoZUtleSwgY2FjaGVkTWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR0aGlzLmFzc29jaWF0aW9ucy5zZXQoIGNhY2hlZE1hdGVyaWFsLCB0aGlzLmFzc29jaWF0aW9ucy5nZXQoIG1hdGVyaWFsICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRtYXRlcmlhbCA9IGNhY2hlZE1hdGVyaWFsO1xuXG5cdFx0fVxuXG5cdFx0Ly8gd29ya2Fyb3VuZHMgZm9yIG1lc2ggYW5kIGdlb21ldHJ5XG5cblx0XHRpZiAoIG1hdGVyaWFsLmFvTWFwICYmIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYyID09PSB1bmRlZmluZWQgJiYgZ2VvbWV0cnkuYXR0cmlidXRlcy51diAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoICd1djInLCBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2ICk7XG5cblx0XHR9XG5cblx0XHRtZXNoLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG5cblx0fVxuXG5cdGdldE1hdGVyaWFsVHlwZSggLyogbWF0ZXJpYWxJbmRleCAqLyApIHtcblxuXHRcdHJldHVybiBNZXNoU3RhbmRhcmRNYXRlcmlhbDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbWF0ZXJpYWxzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXRlcmlhbEluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8TWF0ZXJpYWw+fVxuXHQgKi9cblx0bG9hZE1hdGVyaWFsKCBtYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cdFx0Y29uc3QgbWF0ZXJpYWxEZWYgPSBqc29uLm1hdGVyaWFsc1sgbWF0ZXJpYWxJbmRleCBdO1xuXG5cdFx0bGV0IG1hdGVyaWFsVHlwZTtcblx0XHRjb25zdCBtYXRlcmlhbFBhcmFtcyA9IHt9O1xuXHRcdGNvbnN0IG1hdGVyaWFsRXh0ZW5zaW9ucyA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwge307XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRpZiAoIG1hdGVyaWFsRXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTIF0gKSB7XG5cblx0XHRcdGNvbnN0IHNnRXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTIF07XG5cdFx0XHRtYXRlcmlhbFR5cGUgPSBzZ0V4dGVuc2lvbi5nZXRNYXRlcmlhbFR5cGUoKTtcblx0XHRcdHBlbmRpbmcucHVzaCggc2dFeHRlbnNpb24uZXh0ZW5kUGFyYW1zKCBtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlciApICk7XG5cblx0XHR9IGVsc2UgaWYgKCBtYXRlcmlhbEV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVCBdICkge1xuXG5cdFx0XHRjb25zdCBrbXVFeHRlbnNpb24gPSBleHRlbnNpb25zWyBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQgXTtcblx0XHRcdG1hdGVyaWFsVHlwZSA9IGttdUV4dGVuc2lvbi5nZXRNYXRlcmlhbFR5cGUoKTtcblx0XHRcdHBlbmRpbmcucHVzaCgga211RXh0ZW5zaW9uLmV4dGVuZFBhcmFtcyggbWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIgKSApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gU3BlY2lmaWNhdGlvbjpcblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNtZXRhbGxpYy1yb3VnaG5lc3MtbWF0ZXJpYWxcblxuXHRcdFx0Y29uc3QgbWV0YWxsaWNSb3VnaG5lc3MgPSBtYXRlcmlhbERlZi5wYnJNZXRhbGxpY1JvdWdobmVzcyB8fCB7fTtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoIDEuMCwgMS4wLCAxLjAgKTtcblx0XHRcdG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSAxLjA7XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yICkgKSB7XG5cblx0XHRcdFx0Y29uc3QgYXJyYXkgPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3I7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuY29sb3IuZnJvbUFycmF5KCBhcnJheSApO1xuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbIDMgXTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ21hcCcsIG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLm1ldGFsbmVzcyA9IG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljRmFjdG9yICE9PSB1bmRlZmluZWQgPyBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY0ZhY3RvciA6IDEuMDtcblx0XHRcdG1hdGVyaWFsUGFyYW1zLnJvdWdobmVzcyA9IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkID8gbWV0YWxsaWNSb3VnaG5lc3Mucm91Z2huZXNzRmFjdG9yIDogMS4wO1xuXG5cdFx0XHRpZiAoIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmFzc2lnblRleHR1cmUoIG1hdGVyaWFsUGFyYW1zLCAnbWV0YWxuZXNzTWFwJywgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlICkgKTtcblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdyb3VnaG5lc3NNYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1hdGVyaWFsVHlwZSA9IHRoaXMuX2ludm9rZU9uZSggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5nZXRNYXRlcmlhbFR5cGUgJiYgZXh0LmdldE1hdGVyaWFsVHlwZSggbWF0ZXJpYWxJbmRleCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggUHJvbWlzZS5hbGwoIHRoaXMuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5leHRlbmRNYXRlcmlhbFBhcmFtcyAmJiBleHQuZXh0ZW5kTWF0ZXJpYWxQYXJhbXMoIG1hdGVyaWFsSW5kZXgsIG1hdGVyaWFsUGFyYW1zICk7XG5cblx0XHRcdH0gKSApICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLmRvdWJsZVNpZGVkID09PSB0cnVlICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5zaWRlID0gRG91YmxlU2lkZTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IGFscGhhTW9kZSA9IG1hdGVyaWFsRGVmLmFscGhhTW9kZSB8fCBBTFBIQV9NT0RFUy5PUEFRVUU7XG5cblx0XHRpZiAoIGFscGhhTW9kZSA9PT0gQUxQSEFfTU9ERVMuQkxFTkQgKSB7XG5cblx0XHRcdG1hdGVyaWFsUGFyYW1zLnRyYW5zcGFyZW50ID0gdHJ1ZTtcblxuXHRcdFx0Ly8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xNzcwNlxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMuZGVwdGhXcml0ZSA9IGZhbHNlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0bWF0ZXJpYWxQYXJhbXMudHJhbnNwYXJlbnQgPSBmYWxzZTtcblxuXHRcdFx0aWYgKCBhbHBoYU1vZGUgPT09IEFMUEhBX01PREVTLk1BU0sgKSB7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMuYWxwaGFUZXN0ID0gbWF0ZXJpYWxEZWYuYWxwaGFDdXRvZmYgIT09IHVuZGVmaW5lZCA/IG1hdGVyaWFsRGVmLmFscGhhQ3V0b2ZmIDogMC41O1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xuXG5cdFx0XHRwZW5kaW5nLnB1c2goIHBhcnNlci5hc3NpZ25UZXh0dXJlKCBtYXRlcmlhbFBhcmFtcywgJ25vcm1hbE1hcCcsIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUgKSApO1xuXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vbXJkb29iL3RocmVlLmpzL2lzc3Vlcy8xMTQzOCNpc3N1ZWNvbW1lbnQtNTA3MDAzOTk1XG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZSA9IG5ldyBWZWN0b3IyKCAxLCAtIDEgKTtcblxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0bWF0ZXJpYWxQYXJhbXMubm9ybWFsU2NhbGUuc2V0KCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlLnNjYWxlLCAtIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUuc2NhbGUgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aWYgKCBtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdhb01hcCcsIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUgKSApO1xuXG5cdFx0XHRpZiAoIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUuc3RyZW5ndGggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRtYXRlcmlhbFBhcmFtcy5hb01hcEludGVuc2l0eSA9IG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUuc3RyZW5ndGg7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICggbWF0ZXJpYWxEZWYuZW1pc3NpdmVGYWN0b3IgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsICkge1xuXG5cdFx0XHRtYXRlcmlhbFBhcmFtcy5lbWlzc2l2ZSA9IG5ldyBDb2xvcigpLmZyb21BcnJheSggbWF0ZXJpYWxEZWYuZW1pc3NpdmVGYWN0b3IgKTtcblxuXHRcdH1cblxuXHRcdGlmICggbWF0ZXJpYWxEZWYuZW1pc3NpdmVUZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuYXNzaWduVGV4dHVyZSggbWF0ZXJpYWxQYXJhbXMsICdlbWlzc2l2ZU1hcCcsIG1hdGVyaWFsRGVmLmVtaXNzaXZlVGV4dHVyZSApICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoIHBlbmRpbmcgKS50aGVuKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGxldCBtYXRlcmlhbDtcblxuXHRcdFx0aWYgKCBtYXRlcmlhbFR5cGUgPT09IEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsICkge1xuXG5cdFx0XHRcdG1hdGVyaWFsID0gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTIF0uY3JlYXRlTWF0ZXJpYWwoIG1hdGVyaWFsUGFyYW1zICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0bWF0ZXJpYWwgPSBuZXcgbWF0ZXJpYWxUeXBlKCBtYXRlcmlhbFBhcmFtcyApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbWF0ZXJpYWxEZWYubmFtZSApIG1hdGVyaWFsLm5hbWUgPSBtYXRlcmlhbERlZi5uYW1lO1xuXG5cdFx0XHQvLyBiYXNlQ29sb3JUZXh0dXJlLCBlbWlzc2l2ZVRleHR1cmUsIGFuZCBzcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlIHVzZSBzUkdCIGVuY29kaW5nLlxuXHRcdFx0aWYgKCBtYXRlcmlhbC5tYXAgKSBtYXRlcmlhbC5tYXAuZW5jb2RpbmcgPSBzUkdCRW5jb2Rpbmc7XG5cdFx0XHRpZiAoIG1hdGVyaWFsLmVtaXNzaXZlTWFwICkgbWF0ZXJpYWwuZW1pc3NpdmVNYXAuZW5jb2RpbmcgPSBzUkdCRW5jb2Rpbmc7XG5cblx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG1hdGVyaWFsLCBtYXRlcmlhbERlZiApO1xuXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggbWF0ZXJpYWwsIHsgdHlwZTogJ21hdGVyaWFscycsIGluZGV4OiBtYXRlcmlhbEluZGV4IH0gKTtcblxuXHRcdFx0aWYgKCBtYXRlcmlhbERlZi5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBtYXRlcmlhbCwgbWF0ZXJpYWxEZWYgKTtcblxuXHRcdFx0cmV0dXJuIG1hdGVyaWFsO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKiogV2hlbiBPYmplY3QzRCBpbnN0YW5jZXMgYXJlIHRhcmdldGVkIGJ5IGFuaW1hdGlvbiwgdGhleSBuZWVkIHVuaXF1ZSBuYW1lcy4gKi9cblx0Y3JlYXRlVW5pcXVlTmFtZSggb3JpZ2luYWxOYW1lICkge1xuXG5cdFx0Y29uc3Qgc2FuaXRpemVkTmFtZSA9IFByb3BlcnR5QmluZGluZy5zYW5pdGl6ZU5vZGVOYW1lKCBvcmlnaW5hbE5hbWUgfHwgJycgKTtcblxuXHRcdGxldCBuYW1lID0gc2FuaXRpemVkTmFtZTtcblxuXHRcdGZvciAoIGxldCBpID0gMTsgdGhpcy5ub2RlTmFtZXNVc2VkWyBuYW1lIF07ICsrIGkgKSB7XG5cblx0XHRcdG5hbWUgPSBzYW5pdGl6ZWROYW1lICsgJ18nICsgaTtcblxuXHRcdH1cblxuXHRcdHRoaXMubm9kZU5hbWVzVXNlZFsgbmFtZSBdID0gdHJ1ZTtcblxuXHRcdHJldHVybiBuYW1lO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNnZW9tZXRyeVxuXHQgKlxuXHQgKiBDcmVhdGVzIEJ1ZmZlckdlb21ldHJpZXMgZnJvbSBwcmltaXRpdmVzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5PEdMVEYuUHJpbWl0aXZlPn0gcHJpbWl0aXZlc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PEJ1ZmZlckdlb21ldHJ5Pj59XG5cdCAqL1xuXHRsb2FkR2VvbWV0cmllcyggcHJpbWl0aXZlcyApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QgZXh0ZW5zaW9ucyA9IHRoaXMuZXh0ZW5zaW9ucztcblx0XHRjb25zdCBjYWNoZSA9IHRoaXMucHJpbWl0aXZlQ2FjaGU7XG5cblx0XHRmdW5jdGlvbiBjcmVhdGVEcmFjb1ByaW1pdGl2ZSggcHJpbWl0aXZlICkge1xuXG5cdFx0XHRyZXR1cm4gZXh0ZW5zaW9uc1sgRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTiBdXG5cdFx0XHRcdC5kZWNvZGVQcmltaXRpdmUoIHByaW1pdGl2ZSwgcGFyc2VyIClcblx0XHRcdFx0LnRoZW4oIGZ1bmN0aW9uICggZ2VvbWV0cnkgKSB7XG5cblx0XHRcdFx0XHRyZXR1cm4gYWRkUHJpbWl0aXZlQXR0cmlidXRlcyggZ2VvbWV0cnksIHByaW1pdGl2ZSwgcGFyc2VyICk7XG5cblx0XHRcdFx0fSApO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHByaW1pdGl2ZSA9IHByaW1pdGl2ZXNbIGkgXTtcblx0XHRcdGNvbnN0IGNhY2hlS2V5ID0gY3JlYXRlUHJpbWl0aXZlS2V5KCBwcmltaXRpdmUgKTtcblxuXHRcdFx0Ly8gU2VlIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCB0aGlzIGdlb21ldHJ5XG5cdFx0XHRjb25zdCBjYWNoZWQgPSBjYWNoZVsgY2FjaGVLZXkgXTtcblxuXHRcdFx0aWYgKCBjYWNoZWQgKSB7XG5cblx0XHRcdFx0Ly8gVXNlIHRoZSBjYWNoZWQgZ2VvbWV0cnkgaWYgaXQgZXhpc3RzXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggY2FjaGVkLnByb21pc2UgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRsZXQgZ2VvbWV0cnlQcm9taXNlO1xuXG5cdFx0XHRcdGlmICggcHJpbWl0aXZlLmV4dGVuc2lvbnMgJiYgcHJpbWl0aXZlLmV4dGVuc2lvbnNbIEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04gXSApIHtcblxuXHRcdFx0XHRcdC8vIFVzZSBEUkFDTyBnZW9tZXRyeSBpZiBhdmFpbGFibGVcblx0XHRcdFx0XHRnZW9tZXRyeVByb21pc2UgPSBjcmVhdGVEcmFjb1ByaW1pdGl2ZSggcHJpbWl0aXZlICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZ2VvbWV0cnlcblx0XHRcdFx0XHRnZW9tZXRyeVByb21pc2UgPSBhZGRQcmltaXRpdmVBdHRyaWJ1dGVzKCBuZXcgQnVmZmVyR2VvbWV0cnkoKSwgcHJpbWl0aXZlLCBwYXJzZXIgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ2FjaGUgdGhpcyBnZW9tZXRyeVxuXHRcdFx0XHRjYWNoZVsgY2FjaGVLZXkgXSA9IHsgcHJpbWl0aXZlOiBwcmltaXRpdmUsIHByb21pc2U6IGdlb21ldHJ5UHJvbWlzZSB9O1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggZ2VvbWV0cnlQcm9taXNlICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNtZXNoZXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IG1lc2hJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEdyb3VwfE1lc2h8U2tpbm5lZE1lc2g+fVxuXHQgKi9cblx0bG9hZE1lc2goIG1lc2hJbmRleCApIHtcblxuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXG5cdFx0Y29uc3QgbWVzaERlZiA9IGpzb24ubWVzaGVzWyBtZXNoSW5kZXggXTtcblx0XHRjb25zdCBwcmltaXRpdmVzID0gbWVzaERlZi5wcmltaXRpdmVzO1xuXG5cdFx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHByaW1pdGl2ZXMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IG1hdGVyaWFsID0gcHJpbWl0aXZlc1sgaSBdLm1hdGVyaWFsID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjcmVhdGVEZWZhdWx0TWF0ZXJpYWwoIHRoaXMuY2FjaGUgKVxuXHRcdFx0XHQ6IHRoaXMuZ2V0RGVwZW5kZW5jeSggJ21hdGVyaWFsJywgcHJpbWl0aXZlc1sgaSBdLm1hdGVyaWFsICk7XG5cblx0XHRcdHBlbmRpbmcucHVzaCggbWF0ZXJpYWwgKTtcblxuXHRcdH1cblxuXHRcdHBlbmRpbmcucHVzaCggcGFyc2VyLmxvYWRHZW9tZXRyaWVzKCBwcmltaXRpdmVzICkgKTtcblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICggcmVzdWx0cyApIHtcblxuXHRcdFx0Y29uc3QgbWF0ZXJpYWxzID0gcmVzdWx0cy5zbGljZSggMCwgcmVzdWx0cy5sZW5ndGggLSAxICk7XG5cdFx0XHRjb25zdCBnZW9tZXRyaWVzID0gcmVzdWx0c1sgcmVzdWx0cy5sZW5ndGggLSAxIF07XG5cblx0XHRcdGNvbnN0IG1lc2hlcyA9IFtdO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gZ2VvbWV0cmllcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRjb25zdCBnZW9tZXRyeSA9IGdlb21ldHJpZXNbIGkgXTtcblx0XHRcdFx0Y29uc3QgcHJpbWl0aXZlID0gcHJpbWl0aXZlc1sgaSBdO1xuXG5cdFx0XHRcdC8vIDEuIGNyZWF0ZSBNZXNoXG5cblx0XHRcdFx0bGV0IG1lc2g7XG5cblx0XHRcdFx0Y29uc3QgbWF0ZXJpYWwgPSBtYXRlcmlhbHNbIGkgXTtcblxuXHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVTIHx8XG5cdFx0XHRcdFx0XHRwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX1NUUklQIHx8XG5cdFx0XHRcdFx0XHRwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX0ZBTiB8fFxuXHRcdFx0XHRcdFx0cHJpbWl0aXZlLm1vZGUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdC8vIC5pc1NraW5uZWRNZXNoIGlzbid0IGluIGdsVEYgc3BlYy4gU2VlIC5fbWFya0RlZnMoKVxuXHRcdFx0XHRcdG1lc2ggPSBtZXNoRGVmLmlzU2tpbm5lZE1lc2ggPT09IHRydWVcblx0XHRcdFx0XHRcdD8gbmV3IFNraW5uZWRNZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKVxuXHRcdFx0XHRcdFx0OiBuZXcgTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0XHRpZiAoIG1lc2guaXNTa2lubmVkTWVzaCA9PT0gdHJ1ZSAmJiAhIG1lc2guZ2VvbWV0cnkuYXR0cmlidXRlcy5za2luV2VpZ2h0Lm5vcm1hbGl6ZWQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIHdlIG5vcm1hbGl6ZSBmbG9hdGluZyBwb2ludCBza2luIHdlaWdodCBhcnJheSB0byBmaXggbWFsZm9ybWVkIGFzc2V0cyAoc2VlICMxNTMxOSlcblx0XHRcdFx0XHRcdC8vIGl0J3MgaW1wb3J0YW50IHRvIHNraXAgdGhpcyBmb3Igbm9uLWZsb2F0MzIgZGF0YSBzaW5jZSBub3JtYWxpemVTa2luV2VpZ2h0cyBhc3N1bWVzIG5vbi1ub3JtYWxpemVkIGlucHV0c1xuXHRcdFx0XHRcdFx0bWVzaC5ub3JtYWxpemVTa2luV2VpZ2h0cygpO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX1NUUklQICkge1xuXG5cdFx0XHRcdFx0XHRtZXNoLmdlb21ldHJ5ID0gdG9UcmlhbmdsZXNEcmF3TW9kZSggbWVzaC5nZW9tZXRyeSwgVHJpYW5nbGVTdHJpcERyYXdNb2RlICk7XG5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlRSSUFOR0xFX0ZBTiApIHtcblxuXHRcdFx0XHRcdFx0bWVzaC5nZW9tZXRyeSA9IHRvVHJpYW5nbGVzRHJhd01vZGUoIG1lc2guZ2VvbWV0cnksIFRyaWFuZ2xlRmFuRHJhd01vZGUgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLkxJTkVTICkge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBMaW5lU2VnbWVudHMoIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuTElORV9TVFJJUCApIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgTGluZSggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5MSU5FX0xPT1AgKSB7XG5cblx0XHRcdFx0XHRtZXNoID0gbmV3IExpbmVMb29wKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlBPSU5UUyApIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgUG9pbnRzKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAnVEhSRUUuR0xURkxvYWRlcjogUHJpbWl0aXZlIG1vZGUgdW5zdXBwb3J0ZWQ6ICcgKyBwcmltaXRpdmUubW9kZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIE9iamVjdC5rZXlzKCBtZXNoLmdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyApLmxlbmd0aCA+IDAgKSB7XG5cblx0XHRcdFx0XHR1cGRhdGVNb3JwaFRhcmdldHMoIG1lc2gsIG1lc2hEZWYgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bWVzaC5uYW1lID0gcGFyc2VyLmNyZWF0ZVVuaXF1ZU5hbWUoIG1lc2hEZWYubmFtZSB8fCAoICdtZXNoXycgKyBtZXNoSW5kZXggKSApO1xuXG5cdFx0XHRcdGFzc2lnbkV4dHJhc1RvVXNlckRhdGEoIG1lc2gsIG1lc2hEZWYgKTtcblxuXHRcdFx0XHRpZiAoIHByaW1pdGl2ZS5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBtZXNoLCBwcmltaXRpdmUgKTtcblxuXHRcdFx0XHRwYXJzZXIuYXNzaWduRmluYWxNYXRlcmlhbCggbWVzaCApO1xuXG5cdFx0XHRcdG1lc2hlcy5wdXNoKCBtZXNoICk7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtZXNoZXMubGVuZ3RoID09PSAxICkge1xuXG5cdFx0XHRcdHJldHVybiBtZXNoZXNbIDAgXTtcblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBncm91cCA9IG5ldyBHcm91cCgpO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbWVzaGVzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGdyb3VwLmFkZCggbWVzaGVzWyBpIF0gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZ3JvdXA7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjY2FtZXJhc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxUSFJFRS5DYW1lcmE+fVxuXHQgKi9cblx0bG9hZENhbWVyYSggY2FtZXJhSW5kZXggKSB7XG5cblx0XHRsZXQgY2FtZXJhO1xuXHRcdGNvbnN0IGNhbWVyYURlZiA9IHRoaXMuanNvbi5jYW1lcmFzWyBjYW1lcmFJbmRleCBdO1xuXHRcdGNvbnN0IHBhcmFtcyA9IGNhbWVyYURlZlsgY2FtZXJhRGVmLnR5cGUgXTtcblxuXHRcdGlmICggISBwYXJhbXMgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkdMVEZMb2FkZXI6IE1pc3NpbmcgY2FtZXJhIHBhcmFtZXRlcnMuJyApO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBjYW1lcmFEZWYudHlwZSA9PT0gJ3BlcnNwZWN0aXZlJyApIHtcblxuXHRcdFx0Y2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKCBNYXRoVXRpbHMucmFkVG9EZWcoIHBhcmFtcy55Zm92ICksIHBhcmFtcy5hc3BlY3RSYXRpbyB8fCAxLCBwYXJhbXMuem5lYXIgfHwgMSwgcGFyYW1zLnpmYXIgfHwgMmU2ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBjYW1lcmFEZWYudHlwZSA9PT0gJ29ydGhvZ3JhcGhpYycgKSB7XG5cblx0XHRcdGNhbWVyYSA9IG5ldyBPcnRob2dyYXBoaWNDYW1lcmEoIC0gcGFyYW1zLnhtYWcsIHBhcmFtcy54bWFnLCBwYXJhbXMueW1hZywgLSBwYXJhbXMueW1hZywgcGFyYW1zLnpuZWFyLCBwYXJhbXMuemZhciApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBjYW1lcmFEZWYubmFtZSApIGNhbWVyYS5uYW1lID0gdGhpcy5jcmVhdGVVbmlxdWVOYW1lKCBjYW1lcmFEZWYubmFtZSApO1xuXG5cdFx0YXNzaWduRXh0cmFzVG9Vc2VyRGF0YSggY2FtZXJhLCBjYW1lcmFEZWYgKTtcblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoIGNhbWVyYSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI3NraW5zXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBza2luSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuXHQgKi9cblx0bG9hZFNraW4oIHNraW5JbmRleCApIHtcblxuXHRcdGNvbnN0IHNraW5EZWYgPSB0aGlzLmpzb24uc2tpbnNbIHNraW5JbmRleCBdO1xuXG5cdFx0Y29uc3Qgc2tpbkVudHJ5ID0geyBqb2ludHM6IHNraW5EZWYuam9pbnRzIH07XG5cblx0XHRpZiAoIHNraW5EZWYuaW52ZXJzZUJpbmRNYXRyaWNlcyA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBza2luRW50cnkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIHNraW5EZWYuaW52ZXJzZUJpbmRNYXRyaWNlcyApLnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3IgKSB7XG5cblx0XHRcdHNraW5FbnRyeS5pbnZlcnNlQmluZE1hdHJpY2VzID0gYWNjZXNzb3I7XG5cblx0XHRcdHJldHVybiBza2luRW50cnk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjYW5pbWF0aW9uc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gYW5pbWF0aW9uSW5kZXhcblx0ICogQHJldHVybiB7UHJvbWlzZTxBbmltYXRpb25DbGlwPn1cblx0ICovXG5cdGxvYWRBbmltYXRpb24oIGFuaW1hdGlvbkluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblxuXHRcdGNvbnN0IGFuaW1hdGlvbkRlZiA9IGpzb24uYW5pbWF0aW9uc1sgYW5pbWF0aW9uSW5kZXggXTtcblxuXHRcdGNvbnN0IHBlbmRpbmdOb2RlcyA9IFtdO1xuXHRcdGNvbnN0IHBlbmRpbmdJbnB1dEFjY2Vzc29ycyA9IFtdO1xuXHRcdGNvbnN0IHBlbmRpbmdPdXRwdXRBY2Nlc3NvcnMgPSBbXTtcblx0XHRjb25zdCBwZW5kaW5nU2FtcGxlcnMgPSBbXTtcblx0XHRjb25zdCBwZW5kaW5nVGFyZ2V0cyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IGFuaW1hdGlvbkRlZi5jaGFubmVscy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0Y29uc3QgY2hhbm5lbCA9IGFuaW1hdGlvbkRlZi5jaGFubmVsc1sgaSBdO1xuXHRcdFx0Y29uc3Qgc2FtcGxlciA9IGFuaW1hdGlvbkRlZi5zYW1wbGVyc1sgY2hhbm5lbC5zYW1wbGVyIF07XG5cdFx0XHRjb25zdCB0YXJnZXQgPSBjaGFubmVsLnRhcmdldDtcblx0XHRcdGNvbnN0IG5hbWUgPSB0YXJnZXQubm9kZSAhPT0gdW5kZWZpbmVkID8gdGFyZ2V0Lm5vZGUgOiB0YXJnZXQuaWQ7IC8vIE5PVEU6IHRhcmdldC5pZCBpcyBkZXByZWNhdGVkLlxuXHRcdFx0Y29uc3QgaW5wdXQgPSBhbmltYXRpb25EZWYucGFyYW1ldGVycyAhPT0gdW5kZWZpbmVkID8gYW5pbWF0aW9uRGVmLnBhcmFtZXRlcnNbIHNhbXBsZXIuaW5wdXQgXSA6IHNhbXBsZXIuaW5wdXQ7XG5cdFx0XHRjb25zdCBvdXRwdXQgPSBhbmltYXRpb25EZWYucGFyYW1ldGVycyAhPT0gdW5kZWZpbmVkID8gYW5pbWF0aW9uRGVmLnBhcmFtZXRlcnNbIHNhbXBsZXIub3V0cHV0IF0gOiBzYW1wbGVyLm91dHB1dDtcblxuXHRcdFx0cGVuZGluZ05vZGVzLnB1c2goIHRoaXMuZ2V0RGVwZW5kZW5jeSggJ25vZGUnLCBuYW1lICkgKTtcblx0XHRcdHBlbmRpbmdJbnB1dEFjY2Vzc29ycy5wdXNoKCB0aGlzLmdldERlcGVuZGVuY3koICdhY2Nlc3NvcicsIGlucHV0ICkgKTtcblx0XHRcdHBlbmRpbmdPdXRwdXRBY2Nlc3NvcnMucHVzaCggdGhpcy5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBvdXRwdXQgKSApO1xuXHRcdFx0cGVuZGluZ1NhbXBsZXJzLnB1c2goIHNhbXBsZXIgKTtcblx0XHRcdHBlbmRpbmdUYXJnZXRzLnB1c2goIHRhcmdldCApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBbXG5cblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nTm9kZXMgKSxcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nSW5wdXRBY2Nlc3NvcnMgKSxcblx0XHRcdFByb21pc2UuYWxsKCBwZW5kaW5nT3V0cHV0QWNjZXNzb3JzICksXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ1NhbXBsZXJzICksXG5cdFx0XHRQcm9taXNlLmFsbCggcGVuZGluZ1RhcmdldHMgKVxuXG5cdFx0XSApLnRoZW4oIGZ1bmN0aW9uICggZGVwZW5kZW5jaWVzICkge1xuXG5cdFx0XHRjb25zdCBub2RlcyA9IGRlcGVuZGVuY2llc1sgMCBdO1xuXHRcdFx0Y29uc3QgaW5wdXRBY2Nlc3NvcnMgPSBkZXBlbmRlbmNpZXNbIDEgXTtcblx0XHRcdGNvbnN0IG91dHB1dEFjY2Vzc29ycyA9IGRlcGVuZGVuY2llc1sgMiBdO1xuXHRcdFx0Y29uc3Qgc2FtcGxlcnMgPSBkZXBlbmRlbmNpZXNbIDMgXTtcblx0XHRcdGNvbnN0IHRhcmdldHMgPSBkZXBlbmRlbmNpZXNbIDQgXTtcblxuXHRcdFx0Y29uc3QgdHJhY2tzID0gW107XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBub2Rlcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRjb25zdCBub2RlID0gbm9kZXNbIGkgXTtcblx0XHRcdFx0Y29uc3QgaW5wdXRBY2Nlc3NvciA9IGlucHV0QWNjZXNzb3JzWyBpIF07XG5cdFx0XHRcdGNvbnN0IG91dHB1dEFjY2Vzc29yID0gb3V0cHV0QWNjZXNzb3JzWyBpIF07XG5cdFx0XHRcdGNvbnN0IHNhbXBsZXIgPSBzYW1wbGVyc1sgaSBdO1xuXHRcdFx0XHRjb25zdCB0YXJnZXQgPSB0YXJnZXRzWyBpIF07XG5cblx0XHRcdFx0aWYgKCBub2RlID09PSB1bmRlZmluZWQgKSBjb250aW51ZTtcblxuXHRcdFx0XHRub2RlLnVwZGF0ZU1hdHJpeCgpO1xuXHRcdFx0XHRub2RlLm1hdHJpeEF1dG9VcGRhdGUgPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBUeXBlZEtleWZyYW1lVHJhY2s7XG5cblx0XHRcdFx0c3dpdGNoICggUEFUSF9QUk9QRVJUSUVTWyB0YXJnZXQucGF0aCBdICkge1xuXG5cdFx0XHRcdFx0Y2FzZSBQQVRIX1BST1BFUlRJRVMud2VpZ2h0czpcblxuXHRcdFx0XHRcdFx0VHlwZWRLZXlmcmFtZVRyYWNrID0gTnVtYmVyS2V5ZnJhbWVUcmFjaztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBQQVRIX1BST1BFUlRJRVMucm90YXRpb246XG5cblx0XHRcdFx0XHRcdFR5cGVkS2V5ZnJhbWVUcmFjayA9IFF1YXRlcm5pb25LZXlmcmFtZVRyYWNrO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy5wb3NpdGlvbjpcblx0XHRcdFx0XHRjYXNlIFBBVEhfUFJPUEVSVElFUy5zY2FsZTpcblx0XHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0XHRUeXBlZEtleWZyYW1lVHJhY2sgPSBWZWN0b3JLZXlmcmFtZVRyYWNrO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHRhcmdldE5hbWUgPSBub2RlLm5hbWUgPyBub2RlLm5hbWUgOiBub2RlLnV1aWQ7XG5cblx0XHRcdFx0Y29uc3QgaW50ZXJwb2xhdGlvbiA9IHNhbXBsZXIuaW50ZXJwb2xhdGlvbiAhPT0gdW5kZWZpbmVkID8gSU5URVJQT0xBVElPTlsgc2FtcGxlci5pbnRlcnBvbGF0aW9uIF0gOiBJbnRlcnBvbGF0ZUxpbmVhcjtcblxuXHRcdFx0XHRjb25zdCB0YXJnZXROYW1lcyA9IFtdO1xuXG5cdFx0XHRcdGlmICggUEFUSF9QUk9QRVJUSUVTWyB0YXJnZXQucGF0aCBdID09PSBQQVRIX1BST1BFUlRJRVMud2VpZ2h0cyApIHtcblxuXHRcdFx0XHRcdC8vIE5vZGUgbWF5IGJlIGEgR3JvdXAgKGdsVEYgbWVzaCB3aXRoIHNldmVyYWwgcHJpbWl0aXZlcykgb3IgYSBNZXNoLlxuXHRcdFx0XHRcdG5vZGUudHJhdmVyc2UoIGZ1bmN0aW9uICggb2JqZWN0ICkge1xuXG5cdFx0XHRcdFx0XHRpZiAoIG9iamVjdC5pc01lc2ggPT09IHRydWUgJiYgb2JqZWN0Lm1vcnBoVGFyZ2V0SW5mbHVlbmNlcyApIHtcblxuXHRcdFx0XHRcdFx0XHR0YXJnZXROYW1lcy5wdXNoKCBvYmplY3QubmFtZSA/IG9iamVjdC5uYW1lIDogb2JqZWN0LnV1aWQgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHR0YXJnZXROYW1lcy5wdXNoKCB0YXJnZXROYW1lICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBvdXRwdXRBcnJheSA9IG91dHB1dEFjY2Vzc29yLmFycmF5O1xuXG5cdFx0XHRcdGlmICggb3V0cHV0QWNjZXNzb3Iubm9ybWFsaXplZCApIHtcblxuXHRcdFx0XHRcdGNvbnN0IHNjYWxlID0gZ2V0Tm9ybWFsaXplZENvbXBvbmVudFNjYWxlKCBvdXRwdXRBcnJheS5jb25zdHJ1Y3RvciApO1xuXHRcdFx0XHRcdGNvbnN0IHNjYWxlZCA9IG5ldyBGbG9hdDMyQXJyYXkoIG91dHB1dEFycmF5Lmxlbmd0aCApO1xuXG5cdFx0XHRcdFx0Zm9yICggbGV0IGogPSAwLCBqbCA9IG91dHB1dEFycmF5Lmxlbmd0aDsgaiA8IGpsOyBqICsrICkge1xuXG5cdFx0XHRcdFx0XHRzY2FsZWRbIGogXSA9IG91dHB1dEFycmF5WyBqIF0gKiBzY2FsZTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG91dHB1dEFycmF5ID0gc2NhbGVkO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKCBsZXQgaiA9IDAsIGpsID0gdGFyZ2V0TmFtZXMubGVuZ3RoOyBqIDwgamw7IGogKysgKSB7XG5cblx0XHRcdFx0XHRjb25zdCB0cmFjayA9IG5ldyBUeXBlZEtleWZyYW1lVHJhY2soXG5cdFx0XHRcdFx0XHR0YXJnZXROYW1lc1sgaiBdICsgJy4nICsgUEFUSF9QUk9QRVJUSUVTWyB0YXJnZXQucGF0aCBdLFxuXHRcdFx0XHRcdFx0aW5wdXRBY2Nlc3Nvci5hcnJheSxcblx0XHRcdFx0XHRcdG91dHB1dEFycmF5LFxuXHRcdFx0XHRcdFx0aW50ZXJwb2xhdGlvblxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHQvLyBPdmVycmlkZSBpbnRlcnBvbGF0aW9uIHdpdGggY3VzdG9tIGZhY3RvcnkgbWV0aG9kLlxuXHRcdFx0XHRcdGlmICggc2FtcGxlci5pbnRlcnBvbGF0aW9uID09PSAnQ1VCSUNTUExJTkUnICkge1xuXG5cdFx0XHRcdFx0XHR0cmFjay5jcmVhdGVJbnRlcnBvbGFudCA9IGZ1bmN0aW9uIEludGVycG9sYW50RmFjdG9yeU1ldGhvZEdMVEZDdWJpY1NwbGluZSggcmVzdWx0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEEgQ1VCSUNTUExJTkUga2V5ZnJhbWUgaW4gZ2xURiBoYXMgdGhyZWUgb3V0cHV0IHZhbHVlcyBmb3IgZWFjaCBpbnB1dCB2YWx1ZSxcblx0XHRcdFx0XHRcdFx0Ly8gcmVwcmVzZW50aW5nIGluVGFuZ2VudCwgc3BsaW5lVmVydGV4LCBhbmQgb3V0VGFuZ2VudC4gQXMgYSByZXN1bHQsIHRyYWNrLmdldFZhbHVlU2l6ZSgpXG5cdFx0XHRcdFx0XHRcdC8vIG11c3QgYmUgZGl2aWRlZCBieSB0aHJlZSB0byBnZXQgdGhlIGludGVycG9sYW50J3Mgc2FtcGxlU2l6ZSBhcmd1bWVudC5cblxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50KCB0aGlzLnRpbWVzLCB0aGlzLnZhbHVlcywgdGhpcy5nZXRWYWx1ZVNpemUoKSAvIDMsIHJlc3VsdCApO1xuXG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHQvLyBNYXJrIGFzIENVQklDU1BMSU5FLiBgdHJhY2suZ2V0SW50ZXJwb2xhdGlvbigpYCBkb2Vzbid0IHN1cHBvcnQgY3VzdG9tIGludGVycG9sYW50cy5cblx0XHRcdFx0XHRcdHRyYWNrLmNyZWF0ZUludGVycG9sYW50LmlzSW50ZXJwb2xhbnRGYWN0b3J5TWV0aG9kR0xURkN1YmljU3BsaW5lID0gdHJ1ZTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRyYWNrcy5wdXNoKCB0cmFjayApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBuYW1lID0gYW5pbWF0aW9uRGVmLm5hbWUgPyBhbmltYXRpb25EZWYubmFtZSA6ICdhbmltYXRpb25fJyArIGFuaW1hdGlvbkluZGV4O1xuXG5cdFx0XHRyZXR1cm4gbmV3IEFuaW1hdGlvbkNsaXAoIG5hbWUsIHVuZGVmaW5lZCwgdHJhY2tzICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdGNyZWF0ZU5vZGVNZXNoKCBub2RlSW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cdFx0Y29uc3Qgbm9kZURlZiA9IGpzb24ubm9kZXNbIG5vZGVJbmRleCBdO1xuXG5cdFx0aWYgKCBub2RlRGVmLm1lc2ggPT09IHVuZGVmaW5lZCApIHJldHVybiBudWxsO1xuXG5cdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnbWVzaCcsIG5vZGVEZWYubWVzaCApLnRoZW4oIGZ1bmN0aW9uICggbWVzaCApIHtcblxuXHRcdFx0Y29uc3Qgbm9kZSA9IHBhcnNlci5fZ2V0Tm9kZVJlZiggcGFyc2VyLm1lc2hDYWNoZSwgbm9kZURlZi5tZXNoLCBtZXNoICk7XG5cblx0XHRcdC8vIGlmIHdlaWdodHMgYXJlIHByb3ZpZGVkIG9uIHRoZSBub2RlLCBvdmVycmlkZSB3ZWlnaHRzIG9uIHRoZSBtZXNoLlxuXHRcdFx0aWYgKCBub2RlRGVmLndlaWdodHMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRub2RlLnRyYXZlcnNlKCBmdW5jdGlvbiAoIG8gKSB7XG5cblx0XHRcdFx0XHRpZiAoICEgby5pc01lc2ggKSByZXR1cm47XG5cblx0XHRcdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbm9kZURlZi53ZWlnaHRzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdFx0XHRvLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1sgaSBdID0gbm9kZURlZi53ZWlnaHRzWyBpIF07XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBub2RlO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wI25vZGVzLWFuZC1oaWVyYXJjaHlcblx0ICogQHBhcmFtIHtudW1iZXJ9IG5vZGVJbmRleFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdDNEPn1cblx0ICovXG5cdGxvYWROb2RlKCBub2RlSW5kZXggKSB7XG5cblx0XHRjb25zdCBqc29uID0gdGhpcy5qc29uO1xuXHRcdGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XG5cdFx0Y29uc3QgcGFyc2VyID0gdGhpcztcblxuXHRcdGNvbnN0IG5vZGVEZWYgPSBqc29uLm5vZGVzWyBub2RlSW5kZXggXTtcblxuXHRcdC8vIHJlc2VydmUgbm9kZSdzIG5hbWUgYmVmb3JlIGl0cyBkZXBlbmRlbmNpZXMsIHNvIHRoZSByb290IGhhcyB0aGUgaW50ZW5kZWQgbmFtZS5cblx0XHRjb25zdCBub2RlTmFtZSA9IG5vZGVEZWYubmFtZSA/IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBub2RlRGVmLm5hbWUgKSA6ICcnO1xuXG5cdFx0cmV0dXJuICggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRcdGNvbnN0IG1lc2hQcm9taXNlID0gcGFyc2VyLl9pbnZva2VPbmUoIGZ1bmN0aW9uICggZXh0ICkge1xuXG5cdFx0XHRcdHJldHVybiBleHQuY3JlYXRlTm9kZU1lc2ggJiYgZXh0LmNyZWF0ZU5vZGVNZXNoKCBub2RlSW5kZXggKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRpZiAoIG1lc2hQcm9taXNlICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggbWVzaFByb21pc2UgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5vZGVEZWYuY2FtZXJhICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cGVuZGluZy5wdXNoKCBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ2NhbWVyYScsIG5vZGVEZWYuY2FtZXJhICkudGhlbiggZnVuY3Rpb24gKCBjYW1lcmEgKSB7XG5cblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VyLl9nZXROb2RlUmVmKCBwYXJzZXIuY2FtZXJhQ2FjaGUsIG5vZGVEZWYuY2FtZXJhLCBjYW1lcmEgKTtcblxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZXIuX2ludm9rZUFsbCggZnVuY3Rpb24gKCBleHQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIGV4dC5jcmVhdGVOb2RlQXR0YWNobWVudCAmJiBleHQuY3JlYXRlTm9kZUF0dGFjaG1lbnQoIG5vZGVJbmRleCApO1xuXG5cdFx0XHR9ICkuZm9yRWFjaCggZnVuY3Rpb24gKCBwcm9taXNlICkge1xuXG5cdFx0XHRcdHBlbmRpbmcucHVzaCggcHJvbWlzZSApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApO1xuXG5cdFx0fSgpICkudGhlbiggZnVuY3Rpb24gKCBvYmplY3RzICkge1xuXG5cdFx0XHRsZXQgbm9kZTtcblxuXHRcdFx0Ly8gLmlzQm9uZSBpc24ndCBpbiBnbFRGIHNwZWMuIFNlZSAuX21hcmtEZWZzXG5cdFx0XHRpZiAoIG5vZGVEZWYuaXNCb25lID09PSB0cnVlICkge1xuXG5cdFx0XHRcdG5vZGUgPSBuZXcgQm9uZSgpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBvYmplY3RzLmxlbmd0aCA+IDEgKSB7XG5cblx0XHRcdFx0bm9kZSA9IG5ldyBHcm91cCgpO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBvYmplY3RzLmxlbmd0aCA9PT0gMSApIHtcblxuXHRcdFx0XHRub2RlID0gb2JqZWN0c1sgMCBdO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdG5vZGUgPSBuZXcgT2JqZWN0M0QoKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5vZGUgIT09IG9iamVjdHNbIDAgXSApIHtcblxuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gb2JqZWN0cy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRcdG5vZGUuYWRkKCBvYmplY3RzWyBpIF0gKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBub2RlRGVmLm5hbWUgKSB7XG5cblx0XHRcdFx0bm9kZS51c2VyRGF0YS5uYW1lID0gbm9kZURlZi5uYW1lO1xuXHRcdFx0XHRub2RlLm5hbWUgPSBub2RlTmFtZTtcblxuXHRcdFx0fVxuXG5cdFx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBub2RlLCBub2RlRGVmICk7XG5cblx0XHRcdGlmICggbm9kZURlZi5leHRlbnNpb25zICkgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKCBleHRlbnNpb25zLCBub2RlLCBub2RlRGVmICk7XG5cblx0XHRcdGlmICggbm9kZURlZi5tYXRyaXggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBtYXRyaXggPSBuZXcgTWF0cml4NCgpO1xuXHRcdFx0XHRtYXRyaXguZnJvbUFycmF5KCBub2RlRGVmLm1hdHJpeCApO1xuXHRcdFx0XHRub2RlLmFwcGx5TWF0cml4NCggbWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0aWYgKCBub2RlRGVmLnRyYW5zbGF0aW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRub2RlLnBvc2l0aW9uLmZyb21BcnJheSggbm9kZURlZi50cmFuc2xhdGlvbiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIG5vZGVEZWYucm90YXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdG5vZGUucXVhdGVybmlvbi5mcm9tQXJyYXkoIG5vZGVEZWYucm90YXRpb24gKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBub2RlRGVmLnNjYWxlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRub2RlLnNjYWxlLmZyb21BcnJheSggbm9kZURlZi5zY2FsZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZXIuYXNzb2NpYXRpb25zLnNldCggbm9kZSwgeyB0eXBlOiAnbm9kZXMnLCBpbmRleDogbm9kZUluZGV4IH0gKTtcblxuXHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2NlbmVzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBzY2VuZUluZGV4XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8R3JvdXA+fVxuXHQgKi9cblx0bG9hZFNjZW5lKCBzY2VuZUluZGV4ICkge1xuXG5cdFx0Y29uc3QganNvbiA9IHRoaXMuanNvbjtcblx0XHRjb25zdCBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xuXHRcdGNvbnN0IHNjZW5lRGVmID0gdGhpcy5qc29uLnNjZW5lc1sgc2NlbmVJbmRleCBdO1xuXHRcdGNvbnN0IHBhcnNlciA9IHRoaXM7XG5cblx0XHQvLyBMb2FkZXIgcmV0dXJucyBHcm91cCwgbm90IFNjZW5lLlxuXHRcdC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTgzNDIjaXNzdWVjb21tZW50LTU3ODk4MTE3MlxuXHRcdGNvbnN0IHNjZW5lID0gbmV3IEdyb3VwKCk7XG5cdFx0aWYgKCBzY2VuZURlZi5uYW1lICkgc2NlbmUubmFtZSA9IHBhcnNlci5jcmVhdGVVbmlxdWVOYW1lKCBzY2VuZURlZi5uYW1lICk7XG5cblx0XHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBzY2VuZSwgc2NlbmVEZWYgKTtcblxuXHRcdGlmICggc2NlbmVEZWYuZXh0ZW5zaW9ucyApIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSggZXh0ZW5zaW9ucywgc2NlbmUsIHNjZW5lRGVmICk7XG5cblx0XHRjb25zdCBub2RlSWRzID0gc2NlbmVEZWYubm9kZXMgfHwgW107XG5cblx0XHRjb25zdCBwZW5kaW5nID0gW107XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gbm9kZUlkcy5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0cGVuZGluZy5wdXNoKCBidWlsZE5vZGVIaWVyYWNoeSggbm9kZUlkc1sgaSBdLCBzY2VuZSwganNvbiwgcGFyc2VyICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZyApLnRoZW4oIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHNjZW5lO1xuXG5cdFx0fSApO1xuXG5cdH1cblxufVxuXG5mdW5jdGlvbiBidWlsZE5vZGVIaWVyYWNoeSggbm9kZUlkLCBwYXJlbnRPYmplY3QsIGpzb24sIHBhcnNlciApIHtcblxuXHRjb25zdCBub2RlRGVmID0ganNvbi5ub2Rlc1sgbm9kZUlkIF07XG5cblx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnbm9kZScsIG5vZGVJZCApLnRoZW4oIGZ1bmN0aW9uICggbm9kZSApIHtcblxuXHRcdGlmICggbm9kZURlZi5za2luID09PSB1bmRlZmluZWQgKSByZXR1cm4gbm9kZTtcblxuXHRcdC8vIGJ1aWxkIHNrZWxldG9uIGhlcmUgYXMgd2VsbFxuXG5cdFx0bGV0IHNraW5FbnRyeTtcblxuXHRcdHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ3NraW4nLCBub2RlRGVmLnNraW4gKS50aGVuKCBmdW5jdGlvbiAoIHNraW4gKSB7XG5cblx0XHRcdHNraW5FbnRyeSA9IHNraW47XG5cblx0XHRcdGNvbnN0IHBlbmRpbmdKb2ludHMgPSBbXTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHNraW5FbnRyeS5qb2ludHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0cGVuZGluZ0pvaW50cy5wdXNoKCBwYXJzZXIuZ2V0RGVwZW5kZW5jeSggJ25vZGUnLCBza2luRW50cnkuam9pbnRzWyBpIF0gKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBQcm9taXNlLmFsbCggcGVuZGluZ0pvaW50cyApO1xuXG5cdFx0fSApLnRoZW4oIGZ1bmN0aW9uICggam9pbnROb2RlcyApIHtcblxuXHRcdFx0bm9kZS50cmF2ZXJzZSggZnVuY3Rpb24gKCBtZXNoICkge1xuXG5cdFx0XHRcdGlmICggISBtZXNoLmlzTWVzaCApIHJldHVybjtcblxuXHRcdFx0XHRjb25zdCBib25lcyA9IFtdO1xuXHRcdFx0XHRjb25zdCBib25lSW52ZXJzZXMgPSBbXTtcblxuXHRcdFx0XHRmb3IgKCBsZXQgaiA9IDAsIGpsID0gam9pbnROb2Rlcy5sZW5ndGg7IGogPCBqbDsgaiArKyApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGpvaW50Tm9kZSA9IGpvaW50Tm9kZXNbIGogXTtcblxuXHRcdFx0XHRcdGlmICggam9pbnROb2RlICkge1xuXG5cdFx0XHRcdFx0XHRib25lcy5wdXNoKCBqb2ludE5vZGUgKTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgbWF0ID0gbmV3IE1hdHJpeDQoKTtcblxuXHRcdFx0XHRcdFx0aWYgKCBza2luRW50cnkuaW52ZXJzZUJpbmRNYXRyaWNlcyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0XHRcdG1hdC5mcm9tQXJyYXkoIHNraW5FbnRyeS5pbnZlcnNlQmluZE1hdHJpY2VzLmFycmF5LCBqICogMTYgKTtcblxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRib25lSW52ZXJzZXMucHVzaCggbWF0ICk7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBKb2ludCBcIiVzXCIgY291bGQgbm90IGJlIGZvdW5kLicsIHNraW5FbnRyeS5qb2ludHNbIGogXSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtZXNoLmJpbmQoIG5ldyBTa2VsZXRvbiggYm9uZXMsIGJvbmVJbnZlcnNlcyApLCBtZXNoLm1hdHJpeFdvcmxkICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHR9ICk7XG5cblx0fSApLnRoZW4oIGZ1bmN0aW9uICggbm9kZSApIHtcblxuXHRcdC8vIGJ1aWxkIG5vZGUgaGllcmFjaHlcblxuXHRcdHBhcmVudE9iamVjdC5hZGQoIG5vZGUgKTtcblxuXHRcdGNvbnN0IHBlbmRpbmcgPSBbXTtcblxuXHRcdGlmICggbm9kZURlZi5jaGlsZHJlbiApIHtcblxuXHRcdFx0Y29uc3QgY2hpbGRyZW4gPSBub2RlRGVmLmNoaWxkcmVuO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDAsIGlsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Y29uc3QgY2hpbGQgPSBjaGlsZHJlblsgaSBdO1xuXHRcdFx0XHRwZW5kaW5nLnB1c2goIGJ1aWxkTm9kZUhpZXJhY2h5KCBjaGlsZCwgbm9kZSwganNvbiwgcGFyc2VyICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICk7XG5cblx0fSApO1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7R0xURi5QcmltaXRpdmV9IHByaW1pdGl2ZURlZlxuICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUJvdW5kcyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiwgcGFyc2VyICkge1xuXG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBwcmltaXRpdmVEZWYuYXR0cmlidXRlcztcblxuXHRjb25zdCBib3ggPSBuZXcgQm94MygpO1xuXG5cdGlmICggYXR0cmlidXRlcy5QT1NJVElPTiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0Y29uc3QgYWNjZXNzb3IgPSBwYXJzZXIuanNvbi5hY2Nlc3NvcnNbIGF0dHJpYnV0ZXMuUE9TSVRJT04gXTtcblxuXHRcdGNvbnN0IG1pbiA9IGFjY2Vzc29yLm1pbjtcblx0XHRjb25zdCBtYXggPSBhY2Nlc3Nvci5tYXg7XG5cblx0XHQvLyBnbFRGIHJlcXVpcmVzICdtaW4nIGFuZCAnbWF4JywgYnV0IFZSTSAod2hpY2ggZXh0ZW5kcyBnbFRGKSBjdXJyZW50bHkgaWdub3JlcyB0aGF0IHJlcXVpcmVtZW50LlxuXG5cdFx0aWYgKCBtaW4gIT09IHVuZGVmaW5lZCAmJiBtYXggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ym94LnNldChcblx0XHRcdFx0bmV3IFZlY3RvcjMoIG1pblsgMCBdLCBtaW5bIDEgXSwgbWluWyAyIF0gKSxcblx0XHRcdFx0bmV3IFZlY3RvcjMoIG1heFsgMCBdLCBtYXhbIDEgXSwgbWF4WyAyIF0gKVxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCBhY2Nlc3Nvci5ub3JtYWxpemVkICkge1xuXG5cdFx0XHRcdGNvbnN0IGJveFNjYWxlID0gZ2V0Tm9ybWFsaXplZENvbXBvbmVudFNjYWxlKCBXRUJHTF9DT01QT05FTlRfVFlQRVNbIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUgXSApO1xuXHRcdFx0XHRib3gubWluLm11bHRpcGx5U2NhbGFyKCBib3hTY2FsZSApO1xuXHRcdFx0XHRib3gubWF4Lm11bHRpcGx5U2NhbGFyKCBib3hTY2FsZSApO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5HTFRGTG9hZGVyOiBNaXNzaW5nIG1pbi9tYXggcHJvcGVydGllcyBmb3IgYWNjZXNzb3IgUE9TSVRJT04uJyApO1xuXG5cdFx0XHRyZXR1cm47XG5cblx0XHR9XG5cblx0fSBlbHNlIHtcblxuXHRcdHJldHVybjtcblxuXHR9XG5cblx0Y29uc3QgdGFyZ2V0cyA9IHByaW1pdGl2ZURlZi50YXJnZXRzO1xuXG5cdGlmICggdGFyZ2V0cyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0Y29uc3QgbWF4RGlzcGxhY2VtZW50ID0gbmV3IFZlY3RvcjMoKTtcblx0XHRjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBpbCA9IHRhcmdldHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdGNvbnN0IHRhcmdldCA9IHRhcmdldHNbIGkgXTtcblxuXHRcdFx0aWYgKCB0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb25zdCBhY2Nlc3NvciA9IHBhcnNlci5qc29uLmFjY2Vzc29yc1sgdGFyZ2V0LlBPU0lUSU9OIF07XG5cdFx0XHRcdGNvbnN0IG1pbiA9IGFjY2Vzc29yLm1pbjtcblx0XHRcdFx0Y29uc3QgbWF4ID0gYWNjZXNzb3IubWF4O1xuXG5cdFx0XHRcdC8vIGdsVEYgcmVxdWlyZXMgJ21pbicgYW5kICdtYXgnLCBidXQgVlJNICh3aGljaCBleHRlbmRzIGdsVEYpIGN1cnJlbnRseSBpZ25vcmVzIHRoYXQgcmVxdWlyZW1lbnQuXG5cblx0XHRcdFx0aWYgKCBtaW4gIT09IHVuZGVmaW5lZCAmJiBtYXggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdC8vIHdlIG5lZWQgdG8gZ2V0IG1heCBvZiBhYnNvbHV0ZSBjb21wb25lbnRzIGJlY2F1c2UgdGFyZ2V0IHdlaWdodCBpcyBbLTEsMV1cblx0XHRcdFx0XHR2ZWN0b3Iuc2V0WCggTWF0aC5tYXgoIE1hdGguYWJzKCBtaW5bIDAgXSApLCBNYXRoLmFicyggbWF4WyAwIF0gKSApICk7XG5cdFx0XHRcdFx0dmVjdG9yLnNldFkoIE1hdGgubWF4KCBNYXRoLmFicyggbWluWyAxIF0gKSwgTWF0aC5hYnMoIG1heFsgMSBdICkgKSApO1xuXHRcdFx0XHRcdHZlY3Rvci5zZXRaKCBNYXRoLm1heCggTWF0aC5hYnMoIG1pblsgMiBdICksIE1hdGguYWJzKCBtYXhbIDIgXSApICkgKTtcblxuXG5cdFx0XHRcdFx0aWYgKCBhY2Nlc3Nvci5ub3JtYWxpemVkICkge1xuXG5cdFx0XHRcdFx0XHRjb25zdCBib3hTY2FsZSA9IGdldE5vcm1hbGl6ZWRDb21wb25lbnRTY2FsZSggV0VCR0xfQ09NUE9ORU5UX1RZUEVTWyBhY2Nlc3Nvci5jb21wb25lbnRUeXBlIF0gKTtcblx0XHRcdFx0XHRcdHZlY3Rvci5tdWx0aXBseVNjYWxhciggYm94U2NhbGUgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIE5vdGU6IHRoaXMgYXNzdW1lcyB0aGF0IHRoZSBzdW0gb2YgYWxsIHdlaWdodHMgaXMgYXQgbW9zdCAxLiBUaGlzIGlzbid0IHF1aXRlIGNvcnJlY3QgLSBpdCdzIG1vcmUgY29uc2VydmF0aXZlXG5cdFx0XHRcdFx0Ly8gdG8gYXNzdW1lIHRoYXQgZWFjaCB0YXJnZXQgY2FuIGhhdmUgYSBtYXggd2VpZ2h0IG9mIDEuIEhvd2V2ZXIsIGZvciBzb21lIHVzZSBjYXNlcyAtIG5vdGFibHksIHdoZW4gbW9ycGggdGFyZ2V0c1xuXHRcdFx0XHRcdC8vIGFyZSB1c2VkIHRvIGltcGxlbWVudCBrZXktZnJhbWUgYW5pbWF0aW9ucyBhbmQgYXMgc3VjaCBvbmx5IHR3byBhcmUgYWN0aXZlIGF0IGEgdGltZSAtIHRoaXMgcmVzdWx0cyBpbiB2ZXJ5IGxhcmdlXG5cdFx0XHRcdFx0Ly8gYm94ZXMuIFNvIGZvciBub3cgd2UgbWFrZSBhIGJveCB0aGF0J3Mgc29tZXRpbWVzIGEgdG91Y2ggdG9vIHNtYWxsIGJ1dCBpcyBob3BlZnVsbHkgbW9zdGx5IG9mIHJlYXNvbmFibGUgc2l6ZS5cblx0XHRcdFx0XHRtYXhEaXNwbGFjZW1lbnQubWF4KCB2ZWN0b3IgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBtaW4vbWF4IHByb3BlcnRpZXMgZm9yIGFjY2Vzc29yIFBPU0lUSU9OLicgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vIEFzIHBlciBjb21tZW50IGFib3ZlIHRoaXMgYm94IGlzbid0IGNvbnNlcnZhdGl2ZSwgYnV0IGhhcyBhIHJlYXNvbmFibGUgc2l6ZSBmb3IgYSB2ZXJ5IGxhcmdlIG51bWJlciBvZiBtb3JwaCB0YXJnZXRzLlxuXHRcdGJveC5leHBhbmRCeVZlY3RvciggbWF4RGlzcGxhY2VtZW50ICk7XG5cblx0fVxuXG5cdGdlb21ldHJ5LmJvdW5kaW5nQm94ID0gYm94O1xuXG5cdGNvbnN0IHNwaGVyZSA9IG5ldyBTcGhlcmUoKTtcblxuXHRib3guZ2V0Q2VudGVyKCBzcGhlcmUuY2VudGVyICk7XG5cdHNwaGVyZS5yYWRpdXMgPSBib3gubWluLmRpc3RhbmNlVG8oIGJveC5tYXggKSAvIDI7XG5cblx0Z2VvbWV0cnkuYm91bmRpbmdTcGhlcmUgPSBzcGhlcmU7XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxuICogQHBhcmFtIHtHTFRGLlByaW1pdGl2ZX0gcHJpbWl0aXZlRGVmXG4gKiBAcGFyYW0ge0dMVEZQYXJzZXJ9IHBhcnNlclxuICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJHZW9tZXRyeT59XG4gKi9cbmZ1bmN0aW9uIGFkZFByaW1pdGl2ZUF0dHJpYnV0ZXMoIGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlciApIHtcblxuXHRjb25zdCBhdHRyaWJ1dGVzID0gcHJpbWl0aXZlRGVmLmF0dHJpYnV0ZXM7XG5cblx0Y29uc3QgcGVuZGluZyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGFzc2lnbkF0dHJpYnV0ZUFjY2Vzc29yKCBhY2Nlc3NvckluZGV4LCBhdHRyaWJ1dGVOYW1lICkge1xuXG5cdFx0cmV0dXJuIHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBhY2Nlc3NvckluZGV4IClcblx0XHRcdC50aGVuKCBmdW5jdGlvbiAoIGFjY2Vzc29yICkge1xuXG5cdFx0XHRcdGdlb21ldHJ5LnNldEF0dHJpYnV0ZSggYXR0cmlidXRlTmFtZSwgYWNjZXNzb3IgKTtcblxuXHRcdFx0fSApO1xuXG5cdH1cblxuXHRmb3IgKCBjb25zdCBnbHRmQXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzICkge1xuXG5cdFx0Y29uc3QgdGhyZWVBdHRyaWJ1dGVOYW1lID0gQVRUUklCVVRFU1sgZ2x0ZkF0dHJpYnV0ZU5hbWUgXSB8fCBnbHRmQXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gU2tpcCBhdHRyaWJ1dGVzIGFscmVhZHkgcHJvdmlkZWQgYnkgZS5nLiBEcmFjbyBleHRlbnNpb24uXG5cdFx0aWYgKCB0aHJlZUF0dHJpYnV0ZU5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcyApIGNvbnRpbnVlO1xuXG5cdFx0cGVuZGluZy5wdXNoKCBhc3NpZ25BdHRyaWJ1dGVBY2Nlc3NvciggYXR0cmlidXRlc1sgZ2x0ZkF0dHJpYnV0ZU5hbWUgXSwgdGhyZWVBdHRyaWJ1dGVOYW1lICkgKTtcblxuXHR9XG5cblx0aWYgKCBwcmltaXRpdmVEZWYuaW5kaWNlcyAhPT0gdW5kZWZpbmVkICYmICEgZ2VvbWV0cnkuaW5kZXggKSB7XG5cblx0XHRjb25zdCBhY2Nlc3NvciA9IHBhcnNlci5nZXREZXBlbmRlbmN5KCAnYWNjZXNzb3InLCBwcmltaXRpdmVEZWYuaW5kaWNlcyApLnRoZW4oIGZ1bmN0aW9uICggYWNjZXNzb3IgKSB7XG5cblx0XHRcdGdlb21ldHJ5LnNldEluZGV4KCBhY2Nlc3NvciApO1xuXG5cdFx0fSApO1xuXG5cdFx0cGVuZGluZy5wdXNoKCBhY2Nlc3NvciApO1xuXG5cdH1cblxuXHRhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmICk7XG5cblx0Y29tcHV0ZUJvdW5kcyggZ2VvbWV0cnksIHByaW1pdGl2ZURlZiwgcGFyc2VyICk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKCBwZW5kaW5nICkudGhlbiggZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHByaW1pdGl2ZURlZi50YXJnZXRzICE9PSB1bmRlZmluZWRcblx0XHRcdD8gYWRkTW9ycGhUYXJnZXRzKCBnZW9tZXRyeSwgcHJpbWl0aXZlRGVmLnRhcmdldHMsIHBhcnNlciApXG5cdFx0XHQ6IGdlb21ldHJ5O1xuXG5cdH0gKTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XG4gKiBAcGFyYW0ge051bWJlcn0gZHJhd01vZGVcbiAqIEByZXR1cm4ge0J1ZmZlckdlb21ldHJ5fVxuICovXG5mdW5jdGlvbiB0b1RyaWFuZ2xlc0RyYXdNb2RlKCBnZW9tZXRyeSwgZHJhd01vZGUgKSB7XG5cblx0bGV0IGluZGV4ID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcblxuXHQvLyBnZW5lcmF0ZSBpbmRleCBpZiBub3QgcHJlc2VudFxuXG5cdGlmICggaW5kZXggPT09IG51bGwgKSB7XG5cblx0XHRjb25zdCBpbmRpY2VzID0gW107XG5cblx0XHRjb25zdCBwb3NpdGlvbiA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJyApO1xuXG5cdFx0aWYgKCBwb3NpdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBwb3NpdGlvbi5jb3VudDsgaSArKyApIHtcblxuXHRcdFx0XHRpbmRpY2VzLnB1c2goIGkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRnZW9tZXRyeS5zZXRJbmRleCggaW5kaWNlcyApO1xuXHRcdFx0aW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkdMVEZMb2FkZXIudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBVbmRlZmluZWQgcG9zaXRpb24gYXR0cmlidXRlLiBQcm9jZXNzaW5nIG5vdCBwb3NzaWJsZS4nICk7XG5cdFx0XHRyZXR1cm4gZ2VvbWV0cnk7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vXG5cblx0Y29uc3QgbnVtYmVyT2ZUcmlhbmdsZXMgPSBpbmRleC5jb3VudCAtIDI7XG5cdGNvbnN0IG5ld0luZGljZXMgPSBbXTtcblxuXHRpZiAoIGRyYXdNb2RlID09PSBUcmlhbmdsZUZhbkRyYXdNb2RlICkge1xuXG5cdFx0Ly8gZ2wuVFJJQU5HTEVfRkFOXG5cblx0XHRmb3IgKCBsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZUcmlhbmdsZXM7IGkgKysgKSB7XG5cblx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggMCApICk7XG5cdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xuXHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XG5cblx0XHR9XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vIGdsLlRSSUFOR0xFX1NUUklQXG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlRyaWFuZ2xlczsgaSArKyApIHtcblxuXHRcdFx0aWYgKCBpICUgMiA9PT0gMCApIHtcblxuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKSApO1xuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMiApICk7XG5cblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAyICkgKTtcblx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0aWYgKCAoIG5ld0luZGljZXMubGVuZ3RoIC8gMyApICE9PSBudW1iZXJPZlRyaWFuZ2xlcyApIHtcblxuXHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5HTFRGTG9hZGVyLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5hYmxlIHRvIGdlbmVyYXRlIGNvcnJlY3QgYW1vdW50IG9mIHRyaWFuZ2xlcy4nICk7XG5cblx0fVxuXG5cdC8vIGJ1aWxkIGZpbmFsIGdlb21ldHJ5XG5cblx0Y29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeS5jbG9uZSgpO1xuXHRuZXdHZW9tZXRyeS5zZXRJbmRleCggbmV3SW5kaWNlcyApO1xuXG5cdHJldHVybiBuZXdHZW9tZXRyeTtcblxufVxuXG5leHBvcnQgeyBHTFRGTG9hZGVyIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGhyZWVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNjZW5lUmVuZGVyZXJUSlMgZnJvbSBcIi4vU2NlbmVSZW5kZXJlclRKU1wiXG5pbXBvcnQgTkZUYWRkVEpTIGZyb20gXCIuL21hcmtlcm1lZGlhL05GVGFkZFRKU1wiXG5cbmV4cG9ydCBkZWZhdWx0IHsgU2NlbmVSZW5kZXJlclRKUywgTkZUYWRkVEpTIH0iXSwic291cmNlUm9vdCI6IiJ9