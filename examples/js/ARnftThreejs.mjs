import {
    AmbientLight as e,
    AnimationClip as t,
    Bone as s,
    Box3 as n,
    BufferAttribute as r,
    BufferGeometry as i,
    ClampToEdgeWrapping as o,
    Color as a,
    ColorManagement as c,
    DirectionalLight as l,
    DoubleSide as u,
    FileLoader as h,
    FrontSide as d,
    Group as m,
    ImageBitmapLoader as p,
    InstancedBufferAttribute as f,
    InstancedMesh as g,
    InterleavedBuffer as T,
    InterleavedBufferAttribute as x,
    Interpolant as v,
    InterpolateDiscrete as R,
    InterpolateLinear as w,
    Line as _,
    LineBasicMaterial as E,
    LineLoop as y,
    LineSegments as A,
    LinearFilter as L,
    LinearMipmapLinearFilter as M,
    LinearMipmapNearestFilter as b,
    LinearSRGBColorSpace as S,
    Loader as I,
    LoaderUtils as N,
    Material as O,
    MathUtils as C,
    Matrix4 as P,
    Mesh as k,
    MeshBasicMaterial as H,
    MeshPhysicalMaterial as F,
    MeshStandardMaterial as D,
    MirroredRepeatWrapping as U,
    NearestFilter as G,
    NearestMipmapLinearFilter as j,
    NearestMipmapNearestFilter as B,
    NumberKeyframeTrack as K,
    Object3D as V,
    OrthographicCamera as X,
    PerspectiveCamera as z,
    PlaneGeometry as q,
    PointLight as W,
    Points as Y,
    PointsMaterial as J,
    PropertyBinding as Q,
    Quaternion as Z,
    QuaternionKeyframeTrack as $,
    RepeatWrapping as ee,
    SRGBColorSpace as te,
    Scene as se,
    Skeleton as ne,
    SkinnedMesh as re,
    Sphere as ie,
    SpotLight as oe,
    Texture as ae,
    TextureLoader as ce,
    TriangleFanDrawMode as le,
    TriangleStripDrawMode as ue,
    TrianglesDrawMode as he,
    Vector2 as de,
    Vector3 as me,
    VectorKeyframeTrack as pe,
    VideoTexture as fe,
    WebGLRenderer as ge,
} from "three";
var Te = {};
function xe(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ve(e) {
    return (
        (ve =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                  }),
        ve(e)
    );
}
function Re(e) {
    var t = (function (e) {
        if ("object" != ve(e) || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
            var s = t.call(e, "string");
            if ("object" != ve(s)) return s;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
    })(e);
    return "symbol" == ve(t) ? t : t + "";
}
function we(e, t) {
    for (var s = 0; s < t.length; s++) {
        var n = t[s];
        ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, Re(n.key), n));
    }
}
function _e(e, t, s) {
    return (t && we(e.prototype, t), s && we(e, s), Object.defineProperty(e, "prototype", { writable: !1 }), e);
}
function Ee(e, t, s) {
    return (
        (t = Re(t)) in e
            ? Object.defineProperty(e, t, { value: s, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = s),
        e
    );
}
((Te.d = (e, t) => {
    for (var s in t) Te.o(t, s) && !Te.o(e, s) && Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
}),
    (Te.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    })()),
    (Te.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)));
var ye = (function () {
    function e() {
        xe(this, e);
    }
    return (
        _e(e, null, [
            {
                key: "interpolate",
                value: function (e) {
                    for (var t = 0; t < 16; t++)
                        ((this.trackedMatrix.delta[t] = e[t] - this.trackedMatrix.interpolated[t]),
                            (this.trackedMatrix.interpolated[t] =
                                this.trackedMatrix.interpolated[t] + this.trackedMatrix.delta[t] / 24));
                    return this.trackedMatrix.interpolated;
                },
            },
            {
                key: "isMobile",
                value: function () {
                    return /Android|mobile|iPad|iPhone/i.test(navigator.userAgent);
                },
            },
            {
                key: "setMatrix",
                value: function (e, t) {
                    var s = [];
                    for (var n in t) s[n] = t[n];
                    "function" == typeof e.elements.set ? e.elements.set(s) : (e.elements = [].slice.call(s));
                },
            },
        ]),
        e
    );
})();
Ee(ye, "trackedMatrix", {
    delta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    interpolated: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
});
var Ae = (function () {
    function t(e, s, n, r) {
        (xe(this, t),
            Ee(this, "canvas_draw", void 0),
            Ee(this, "camera", void 0),
            Ee(this, "configData", void 0),
            Ee(this, "renderer", void 0),
            Ee(this, "uuid", void 0),
            Ee(this, "root", void 0),
            Ee(this, "target", void 0),
            Ee(this, "scene", void 0),
            Ee(this, "version", void 0),
            (this.configData = e),
            (this.uuid = n),
            (this.target = window || Te.g),
            (this.renderer = new ge({
                canvas: s,
                context: e.renderer.context,
                alpha: e.renderer.alpha,
                premultipliedAlpha: e.renderer.premultipliedAlpha,
                antialias: e.renderer.antialias,
                stencil: e.renderer.stencil,
                precision: e.renderer.precision,
                depth: e.renderer.depth,
                logarithmicDepthBuffer: e.renderer.logarithmicDepthBuffer,
            })),
            this.renderer.setPixelRatio(window.devicePixelRatio),
            (this.scene = new se()),
            (t.globalScene = this.scene),
            (this.camera = !0 === r ? new z(e.camera.fov, e.camera.ratio, e.camera.near, e.camera.far) : new z()),
            (this.version = "0.5.3"),
            console.log("ARnftThreejs version: ", this.version));
    }
    return (
        _e(
            t,
            [
                {
                    key: "initRenderer",
                    value: function () {
                        var t = this;
                        ((this.camera.matrixAutoUpdate = !1),
                            this.target.addEventListener("getProjectionMatrix", function (e) {
                                ye.setMatrix(t.camera.projectionMatrix, e.detail.proj);
                            }),
                            this.scene.add(this.camera));
                        var s = new e(16777215);
                        (this.scene.add(s),
                            this.target.addEventListener("getWindowSize", function (e) {
                                t.renderer.setSize(e.detail.sw, e.detail.sh);
                            }));
                        var n = new CustomEvent("onInitThreejsRendering", {
                            detail: { renderer: this.renderer, scene: this.scene, camera: this.camera },
                        });
                        this.target.dispatchEvent(n);
                    },
                },
                {
                    key: "draw",
                    value: function () {
                        this.renderer.render(this.scene, this.camera);
                    },
                },
                {
                    key: "getRenderer",
                    value: function () {
                        return this.renderer;
                    },
                },
                {
                    key: "getScene",
                    value: function () {
                        return this.scene;
                    },
                },
                {
                    key: "getCamera",
                    value: function () {
                        return this.camera;
                    },
                },
                {
                    key: "setRenderer",
                    value: function (e) {
                        this.renderer = e;
                    },
                },
                {
                    key: "setScene",
                    value: function (e) {
                        this.scene = e;
                    },
                },
                {
                    key: "setCamera",
                    value: function (e) {
                        this.camera = e;
                    },
                },
            ],
            [
                {
                    key: "getGlobalScene",
                    value: function () {
                        return t.globalScene;
                    },
                },
            ]
        ),
        t
    );
})();
function Le(e, t) {
    if (t === he)
        return (
            console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),
            e
        );
    if (t === le || t === ue) {
        let s = e.getIndex();
        if (null === s) {
            const t = [],
                n = e.getAttribute("position");
            if (void 0 === n)
                return (
                    console.error(
                        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
                    ),
                    e
                );
            for (let e = 0; e < n.count; e++) t.push(e);
            (e.setIndex(t), (s = e.getIndex()));
        }
        const n = s.count - 2,
            r = [];
        if (t === le) for (let e = 1; e <= n; e++) (r.push(s.getX(0)), r.push(s.getX(e)), r.push(s.getX(e + 1)));
        else
            for (let e = 0; e < n; e++)
                e % 2 == 0
                    ? (r.push(s.getX(e)), r.push(s.getX(e + 1)), r.push(s.getX(e + 2)))
                    : (r.push(s.getX(e + 2)), r.push(s.getX(e + 1)), r.push(s.getX(e)));
        r.length / 3 !== n &&
            console.error(
                "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
            );
        const i = e.clone();
        return (i.setIndex(r), i.clearGroups(), i);
    }
    return (console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e);
}
Ee(Ae, "globalScene", void 0);
class Me extends I {
    constructor(e) {
        (super(e),
            (this.dracoLoader = null),
            (this.ktx2Loader = null),
            (this.meshoptDecoder = null),
            (this.pluginCallbacks = []),
            this.register(function (e) {
                return new Ce(e);
            }),
            this.register(function (e) {
                return new Pe(e);
            }),
            this.register(function (e) {
                return new Ke(e);
            }),
            this.register(function (e) {
                return new Ve(e);
            }),
            this.register(function (e) {
                return new Xe(e);
            }),
            this.register(function (e) {
                return new He(e);
            }),
            this.register(function (e) {
                return new Fe(e);
            }),
            this.register(function (e) {
                return new De(e);
            }),
            this.register(function (e) {
                return new Ue(e);
            }),
            this.register(function (e) {
                return new Oe(e);
            }),
            this.register(function (e) {
                return new Ge(e);
            }),
            this.register(function (e) {
                return new ke(e);
            }),
            this.register(function (e) {
                return new Be(e);
            }),
            this.register(function (e) {
                return new je(e);
            }),
            this.register(function (e) {
                return new Ie(e);
            }),
            this.register(function (e) {
                return new ze(e);
            }),
            this.register(function (e) {
                return new qe(e);
            }));
    }
    load(e, t, s, n) {
        const r = this;
        let i;
        if ("" !== this.resourcePath) i = this.resourcePath;
        else if ("" !== this.path) {
            const t = N.extractUrlBase(e);
            i = N.resolveURL(t, this.path);
        } else i = N.extractUrlBase(e);
        this.manager.itemStart(e);
        const o = function (t) {
                (n ? n(t) : console.error(t), r.manager.itemError(e), r.manager.itemEnd(e));
            },
            a = new h(this.manager);
        (a.setPath(this.path),
            a.setResponseType("arraybuffer"),
            a.setRequestHeader(this.requestHeader),
            a.setWithCredentials(this.withCredentials),
            a.load(
                e,
                function (s) {
                    try {
                        r.parse(
                            s,
                            i,
                            function (s) {
                                (t(s), r.manager.itemEnd(e));
                            },
                            o
                        );
                    } catch (e) {
                        o(e);
                    }
                },
                s,
                o
            ));
    }
    setDRACOLoader(e) {
        return ((this.dracoLoader = e), this);
    }
    setKTX2Loader(e) {
        return ((this.ktx2Loader = e), this);
    }
    setMeshoptDecoder(e) {
        return ((this.meshoptDecoder = e), this);
    }
    register(e) {
        return (-1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this);
    }
    unregister(e) {
        return (
            -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
            this
        );
    }
    parse(e, t, s, n) {
        let r;
        const i = {},
            o = {},
            a = new TextDecoder();
        if ("string" == typeof e) r = JSON.parse(e);
        else if (e instanceof ArrayBuffer)
            if (a.decode(new Uint8Array(e, 0, 4)) === We) {
                try {
                    i[Se.KHR_BINARY_GLTF] = new Ye(e);
                } catch (e) {
                    return void (n && n(e));
                }
                r = JSON.parse(i[Se.KHR_BINARY_GLTF].content);
            } else r = JSON.parse(a.decode(e));
        else r = e;
        if (void 0 === r.asset || r.asset.version[0] < 2)
            return void (n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));
        const c = new xt(r, {
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder,
        });
        c.fileLoader.setRequestHeader(this.requestHeader);
        for (let e = 0; e < this.pluginCallbacks.length; e++) {
            const t = this.pluginCallbacks[e](c);
            (t.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
                (o[t.name] = t),
                (i[t.name] = !0));
        }
        if (r.extensionsUsed)
            for (let e = 0; e < r.extensionsUsed.length; ++e) {
                const t = r.extensionsUsed[e],
                    s = r.extensionsRequired || [];
                switch (t) {
                    case Se.KHR_MATERIALS_UNLIT:
                        i[t] = new Ne();
                        break;
                    case Se.KHR_DRACO_MESH_COMPRESSION:
                        i[t] = new Je(r, this.dracoLoader);
                        break;
                    case Se.KHR_TEXTURE_TRANSFORM:
                        i[t] = new Qe();
                        break;
                    case Se.KHR_MESH_QUANTIZATION:
                        i[t] = new Ze();
                        break;
                    default:
                        s.indexOf(t) >= 0 &&
                            void 0 === o[t] &&
                            console.warn('THREE.GLTFLoader: Unknown extension "' + t + '".');
                }
            }
        (c.setExtensions(i), c.setPlugins(o), c.parse(s, n));
    }
    parseAsync(e, t) {
        const s = this;
        return new Promise(function (n, r) {
            s.parse(e, t, n, r);
        });
    }
}
function be() {
    let e = {};
    return {
        get: function (t) {
            return e[t];
        },
        add: function (t, s) {
            e[t] = s;
        },
        remove: function (t) {
            delete e[t];
        },
        removeAll: function () {
            e = {};
        },
    };
}
const Se = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class Ie {
    constructor(e) {
        ((this.parser = e), (this.name = Se.KHR_LIGHTS_PUNCTUAL), (this.cache = { refs: {}, uses: {} }));
    }
    _markDefs() {
        const e = this.parser,
            t = this.parser.json.nodes || [];
        for (let s = 0, n = t.length; s < n; s++) {
            const n = t[s];
            n.extensions &&
                n.extensions[this.name] &&
                void 0 !== n.extensions[this.name].light &&
                e._addNodeRef(this.cache, n.extensions[this.name].light);
        }
    }
    _loadLight(e) {
        const t = this.parser,
            s = "light:" + e;
        let n = t.cache.get(s);
        if (n) return n;
        const r = t.json,
            i = (((r.extensions && r.extensions[this.name]) || {}).lights || [])[e];
        let o;
        const c = new a(16777215);
        void 0 !== i.color && c.setRGB(i.color[0], i.color[1], i.color[2], S);
        const u = void 0 !== i.range ? i.range : 0;
        switch (i.type) {
            case "directional":
                ((o = new l(c)), o.target.position.set(0, 0, -1), o.add(o.target));
                break;
            case "point":
                ((o = new W(c)), (o.distance = u));
                break;
            case "spot":
                ((o = new oe(c)),
                    (o.distance = u),
                    (i.spot = i.spot || {}),
                    (i.spot.innerConeAngle = void 0 !== i.spot.innerConeAngle ? i.spot.innerConeAngle : 0),
                    (i.spot.outerConeAngle = void 0 !== i.spot.outerConeAngle ? i.spot.outerConeAngle : Math.PI / 4),
                    (o.angle = i.spot.outerConeAngle),
                    (o.penumbra = 1 - i.spot.innerConeAngle / i.spot.outerConeAngle),
                    o.target.position.set(0, 0, -1),
                    o.add(o.target));
                break;
            default:
                throw new Error("THREE.GLTFLoader: Unexpected light type: " + i.type);
        }
        return (
            o.position.set(0, 0, 0),
            dt(o, i),
            void 0 !== i.intensity && (o.intensity = i.intensity),
            (o.name = t.createUniqueName(i.name || "light_" + e)),
            (n = Promise.resolve(o)),
            t.cache.add(s, n),
            n
        );
    }
    getDependency(e, t) {
        if ("light" === e) return this._loadLight(t);
    }
    createNodeAttachment(e) {
        const t = this,
            s = this.parser,
            n = s.json.nodes[e],
            r = ((n.extensions && n.extensions[this.name]) || {}).light;
        return void 0 === r
            ? null
            : this._loadLight(r).then(function (e) {
                  return s._getNodeRef(t.cache, r, e);
              });
    }
}
class Ne {
    constructor() {
        this.name = Se.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
        return H;
    }
    extendParams(e, t, s) {
        const n = [];
        ((e.color = new a(1, 1, 1)), (e.opacity = 1));
        const r = t.pbrMetallicRoughness;
        if (r) {
            if (Array.isArray(r.baseColorFactor)) {
                const t = r.baseColorFactor;
                (e.color.setRGB(t[0], t[1], t[2], S), (e.opacity = t[3]));
            }
            void 0 !== r.baseColorTexture && n.push(s.assignTexture(e, "map", r.baseColorTexture, te));
        }
        return Promise.all(n);
    }
}
class Oe {
    constructor(e) {
        ((this.parser = e), (this.name = Se.KHR_MATERIALS_EMISSIVE_STRENGTH));
    }
    extendMaterialParams(e, t) {
        const s = this.parser.json.materials[e];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const n = s.extensions[this.name].emissiveStrength;
        return (void 0 !== n && (t.emissiveIntensity = n), Promise.resolve());
    }
}
class Ce {
    constructor(e) {
        ((this.parser = e), (this.name = Se.KHR_MATERIALS_CLEARCOAT));
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? F : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser,
            n = s.json.materials[e];
        if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
        const r = [],
            i = n.extensions[this.name];
        if (
            (void 0 !== i.clearcoatFactor && (t.clearcoat = i.clearcoatFactor),
            void 0 !== i.clearcoatTexture && r.push(s.assignTexture(t, "clearcoatMap", i.clearcoatTexture)),
            void 0 !== i.clearcoatRoughnessFactor && (t.clearcoatRoughness = i.clearcoatRoughnessFactor),
            void 0 !== i.clearcoatRoughnessTexture &&
                r.push(s.assignTexture(t, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)),
            void 0 !== i.clearcoatNormalTexture &&
                (r.push(s.assignTexture(t, "clearcoatNormalMap", i.clearcoatNormalTexture)),
                void 0 !== i.clearcoatNormalTexture.scale))
        ) {
            const e = i.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new de(e, e);
        }
        return Promise.all(r);
    }
}
class Pe {
    constructor(e) {
        ((this.parser = e), (this.name = Se.KHR_MATERIALS_DISPERSION));
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? F : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser.json.materials[e];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const n = s.extensions[this.name];
        return ((t.dispersion = void 0 !== n.dispersion ? n.dispersion : 0), Promise.resolve());
    }
}
class ke {
    constructor(e) {
        ((this.parser = e), (this.name = Se.KHR_MATERIALS_IRIDESCENCE));
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? F : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser,
            n = s.json.materials[e];
        if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
        const r = [],
            i = n.extensions[this.name];
        return (
            void 0 !== i.iridescenceFactor && (t.iridescence = i.iridescenceFactor),
            void 0 !== i.iridescenceTexture && r.push(s.assignTexture(t, "iridescenceMap", i.iridescenceTexture)),
            void 0 !== i.iridescenceIor && (t.iridescenceIOR = i.iridescenceIor),
            void 0 === t.iridescenceThicknessRange && (t.iridescenceThicknessRange = [100, 400]),
            void 0 !== i.iridescenceThicknessMinimum &&
                (t.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum),
            void 0 !== i.iridescenceThicknessMaximum &&
                (t.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum),
            void 0 !== i.iridescenceThicknessTexture &&
                r.push(s.assignTexture(t, "iridescenceThicknessMap", i.iridescenceThicknessTexture)),
            Promise.all(r)
        );
    }
}
class He {
    constructor(e) {
        ((this.parser = e), (this.name = Se.KHR_MATERIALS_SHEEN));
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? F : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser,
            n = s.json.materials[e];
        if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
        const r = [];
        ((t.sheenColor = new a(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1));
        const i = n.extensions[this.name];
        if (void 0 !== i.sheenColorFactor) {
            const e = i.sheenColorFactor;
            t.sheenColor.setRGB(e[0], e[1], e[2], S);
        }
        return (
            void 0 !== i.sheenRoughnessFactor && (t.sheenRoughness = i.sheenRoughnessFactor),
            void 0 !== i.sheenColorTexture && r.push(s.assignTexture(t, "sheenColorMap", i.sheenColorTexture, te)),
            void 0 !== i.sheenRoughnessTexture &&
                r.push(s.assignTexture(t, "sheenRoughnessMap", i.sheenRoughnessTexture)),
            Promise.all(r)
        );
    }
}
class Fe {
    constructor(e) {
        ((this.parser = e), (this.name = Se.KHR_MATERIALS_TRANSMISSION));
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? F : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser,
            n = s.json.materials[e];
        if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
        const r = [],
            i = n.extensions[this.name];
        return (
            void 0 !== i.transmissionFactor && (t.transmission = i.transmissionFactor),
            void 0 !== i.transmissionTexture && r.push(s.assignTexture(t, "transmissionMap", i.transmissionTexture)),
            Promise.all(r)
        );
    }
}
class De {
    constructor(e) {
        ((this.parser = e), (this.name = Se.KHR_MATERIALS_VOLUME));
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? F : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser,
            n = s.json.materials[e];
        if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
        const r = [],
            i = n.extensions[this.name];
        ((t.thickness = void 0 !== i.thicknessFactor ? i.thicknessFactor : 0),
            void 0 !== i.thicknessTexture && r.push(s.assignTexture(t, "thicknessMap", i.thicknessTexture)),
            (t.attenuationDistance = i.attenuationDistance || 1 / 0));
        const o = i.attenuationColor || [1, 1, 1];
        return ((t.attenuationColor = new a().setRGB(o[0], o[1], o[2], S)), Promise.all(r));
    }
}
class Ue {
    constructor(e) {
        ((this.parser = e), (this.name = Se.KHR_MATERIALS_IOR));
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? F : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser.json.materials[e];
        if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
        const n = s.extensions[this.name];
        return ((t.ior = void 0 !== n.ior ? n.ior : 1.5), Promise.resolve());
    }
}
class Ge {
    constructor(e) {
        ((this.parser = e), (this.name = Se.KHR_MATERIALS_SPECULAR));
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? F : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser,
            n = s.json.materials[e];
        if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
        const r = [],
            i = n.extensions[this.name];
        ((t.specularIntensity = void 0 !== i.specularFactor ? i.specularFactor : 1),
            void 0 !== i.specularTexture && r.push(s.assignTexture(t, "specularIntensityMap", i.specularTexture)));
        const o = i.specularColorFactor || [1, 1, 1];
        return (
            (t.specularColor = new a().setRGB(o[0], o[1], o[2], S)),
            void 0 !== i.specularColorTexture &&
                r.push(s.assignTexture(t, "specularColorMap", i.specularColorTexture, te)),
            Promise.all(r)
        );
    }
}
class je {
    constructor(e) {
        ((this.parser = e), (this.name = Se.EXT_MATERIALS_BUMP));
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? F : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser,
            n = s.json.materials[e];
        if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
        const r = [],
            i = n.extensions[this.name];
        return (
            (t.bumpScale = void 0 !== i.bumpFactor ? i.bumpFactor : 1),
            void 0 !== i.bumpTexture && r.push(s.assignTexture(t, "bumpMap", i.bumpTexture)),
            Promise.all(r)
        );
    }
}
class Be {
    constructor(e) {
        ((this.parser = e), (this.name = Se.KHR_MATERIALS_ANISOTROPY));
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? F : null;
    }
    extendMaterialParams(e, t) {
        const s = this.parser,
            n = s.json.materials[e];
        if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
        const r = [],
            i = n.extensions[this.name];
        return (
            void 0 !== i.anisotropyStrength && (t.anisotropy = i.anisotropyStrength),
            void 0 !== i.anisotropyRotation && (t.anisotropyRotation = i.anisotropyRotation),
            void 0 !== i.anisotropyTexture && r.push(s.assignTexture(t, "anisotropyMap", i.anisotropyTexture)),
            Promise.all(r)
        );
    }
}
class Ke {
    constructor(e) {
        ((this.parser = e), (this.name = Se.KHR_TEXTURE_BASISU));
    }
    loadTexture(e) {
        const t = this.parser,
            s = t.json,
            n = s.textures[e];
        if (!n.extensions || !n.extensions[this.name]) return null;
        const r = n.extensions[this.name],
            i = t.options.ktx2Loader;
        if (!i) {
            if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)
                throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null;
        }
        return t.loadTextureImage(e, r.source, i);
    }
}
class Ve {
    constructor(e) {
        ((this.parser = e), (this.name = Se.EXT_TEXTURE_WEBP));
    }
    loadTexture(e) {
        const t = this.name,
            s = this.parser,
            n = s.json,
            r = n.textures[e];
        if (!r.extensions || !r.extensions[t]) return null;
        const i = r.extensions[t],
            o = n.images[i.source];
        let a = s.textureLoader;
        if (o.uri) {
            const e = s.options.manager.getHandler(o.uri);
            null !== e && (a = e);
        }
        return s.loadTextureImage(e, i.source, a);
    }
}
class Xe {
    constructor(e) {
        ((this.parser = e), (this.name = Se.EXT_TEXTURE_AVIF));
    }
    loadTexture(e) {
        const t = this.name,
            s = this.parser,
            n = s.json,
            r = n.textures[e];
        if (!r.extensions || !r.extensions[t]) return null;
        const i = r.extensions[t],
            o = n.images[i.source];
        let a = s.textureLoader;
        if (o.uri) {
            const e = s.options.manager.getHandler(o.uri);
            null !== e && (a = e);
        }
        return s.loadTextureImage(e, i.source, a);
    }
}
class ze {
    constructor(e) {
        ((this.name = Se.EXT_MESHOPT_COMPRESSION), (this.parser = e));
    }
    loadBufferView(e) {
        const t = this.parser.json,
            s = t.bufferViews[e];
        if (s.extensions && s.extensions[this.name]) {
            const e = s.extensions[this.name],
                n = this.parser.getDependency("buffer", e.buffer),
                r = this.parser.options.meshoptDecoder;
            if (!r || !r.supported) {
                if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
                    throw new Error(
                        "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
                    );
                return null;
            }
            return n.then(function (t) {
                const s = e.byteOffset || 0,
                    n = e.byteLength || 0,
                    i = e.count,
                    o = e.byteStride,
                    a = new Uint8Array(t, s, n);
                return r.decodeGltfBufferAsync
                    ? r.decodeGltfBufferAsync(i, o, a, e.mode, e.filter).then(function (e) {
                          return e.buffer;
                      })
                    : r.ready.then(function () {
                          const t = new ArrayBuffer(i * o);
                          return (r.decodeGltfBuffer(new Uint8Array(t), i, o, a, e.mode, e.filter), t);
                      });
            });
        }
        return null;
    }
}
class qe {
    constructor(e) {
        ((this.name = Se.EXT_MESH_GPU_INSTANCING), (this.parser = e));
    }
    createNodeMesh(e) {
        const t = this.parser.json,
            s = t.nodes[e];
        if (!s.extensions || !s.extensions[this.name] || void 0 === s.mesh) return null;
        const n = t.meshes[s.mesh];
        for (const e of n.primitives)
            if (
                e.mode !== st.TRIANGLES &&
                e.mode !== st.TRIANGLE_STRIP &&
                e.mode !== st.TRIANGLE_FAN &&
                void 0 !== e.mode
            )
                return null;
        const r = s.extensions[this.name].attributes,
            i = [],
            o = {};
        for (const e in r) i.push(this.parser.getDependency("accessor", r[e]).then((t) => ((o[e] = t), o[e])));
        return i.length < 1
            ? null
            : (i.push(this.parser.createNodeMesh(e)),
              Promise.all(i).then((e) => {
                  const t = e.pop(),
                      s = t.isGroup ? t.children : [t],
                      n = e[0].count,
                      r = [];
                  for (const e of s) {
                      const t = new P(),
                          s = new me(),
                          i = new Z(),
                          a = new me(1, 1, 1),
                          c = new g(e.geometry, e.material, n);
                      for (let e = 0; e < n; e++)
                          (o.TRANSLATION && s.fromBufferAttribute(o.TRANSLATION, e),
                              o.ROTATION && i.fromBufferAttribute(o.ROTATION, e),
                              o.SCALE && a.fromBufferAttribute(o.SCALE, e),
                              c.setMatrixAt(e, t.compose(s, i, a)));
                      for (const t in o)
                          if ("_COLOR_0" === t) {
                              const e = o[t];
                              c.instanceColor = new f(e.array, e.itemSize, e.normalized);
                          } else
                              "TRANSLATION" !== t &&
                                  "ROTATION" !== t &&
                                  "SCALE" !== t &&
                                  e.geometry.setAttribute(t, o[t]);
                      (V.prototype.copy.call(c, e), this.parser.assignFinalMaterial(c), r.push(c));
                  }
                  return t.isGroup ? (t.clear(), t.add(...r), t) : r[0];
              }));
    }
}
const We = "glTF";
class Ye {
    constructor(e) {
        ((this.name = Se.KHR_BINARY_GLTF), (this.content = null), (this.body = null));
        const t = new DataView(e, 0, 12),
            s = new TextDecoder();
        if (
            ((this.header = {
                magic: s.decode(new Uint8Array(e.slice(0, 4))),
                version: t.getUint32(4, !0),
                length: t.getUint32(8, !0),
            }),
            this.header.magic !== We)
        )
            throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        const n = this.header.length - 12,
            r = new DataView(e, 12);
        let i = 0;
        for (; i < n; ) {
            const t = r.getUint32(i, !0);
            i += 4;
            const n = r.getUint32(i, !0);
            if (((i += 4), 1313821514 === n)) {
                const n = new Uint8Array(e, 12 + i, t);
                this.content = s.decode(n);
            } else if (5130562 === n) {
                const s = 12 + i;
                this.body = e.slice(s, s + t);
            }
            i += t;
        }
        if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
}
class Je {
    constructor(e, t) {
        if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        ((this.name = Se.KHR_DRACO_MESH_COMPRESSION),
            (this.json = e),
            (this.dracoLoader = t),
            this.dracoLoader.preload());
    }
    decodePrimitive(e, t) {
        const s = this.json,
            n = this.dracoLoader,
            r = e.extensions[this.name].bufferView,
            i = e.extensions[this.name].attributes,
            o = {},
            a = {},
            c = {};
        for (const e in i) {
            const t = at[e] || e.toLowerCase();
            o[t] = i[e];
        }
        for (const t in e.attributes) {
            const n = at[t] || t.toLowerCase();
            if (void 0 !== i[t]) {
                const r = s.accessors[e.attributes[t]],
                    i = nt[r.componentType];
                ((c[n] = i.name), (a[n] = !0 === r.normalized));
            }
        }
        return t.getDependency("bufferView", r).then(function (e) {
            return new Promise(function (t, s) {
                n.decodeDracoFile(
                    e,
                    function (e) {
                        for (const t in e.attributes) {
                            const s = e.attributes[t],
                                n = a[t];
                            void 0 !== n && (s.normalized = n);
                        }
                        t(e);
                    },
                    o,
                    c,
                    S,
                    s
                );
            });
        });
    }
}
class Qe {
    constructor() {
        this.name = Se.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
        return (void 0 !== t.texCoord && t.texCoord !== e.channel) ||
            void 0 !== t.offset ||
            void 0 !== t.rotation ||
            void 0 !== t.scale
            ? ((e = e.clone()),
              void 0 !== t.texCoord && (e.channel = t.texCoord),
              void 0 !== t.offset && e.offset.fromArray(t.offset),
              void 0 !== t.rotation && (e.rotation = t.rotation),
              void 0 !== t.scale && e.repeat.fromArray(t.scale),
              (e.needsUpdate = !0),
              e)
            : e;
    }
}
class Ze {
    constructor() {
        this.name = Se.KHR_MESH_QUANTIZATION;
    }
}
class $e extends v {
    constructor(e, t, s, n) {
        super(e, t, s, n);
    }
    copySampleValue_(e) {
        const t = this.resultBuffer,
            s = this.sampleValues,
            n = this.valueSize,
            r = e * n * 3 + n;
        for (let e = 0; e !== n; e++) t[e] = s[r + e];
        return t;
    }
    interpolate_(e, t, s, n) {
        const r = this.resultBuffer,
            i = this.sampleValues,
            o = this.valueSize,
            a = 2 * o,
            c = 3 * o,
            l = n - t,
            u = (s - t) / l,
            h = u * u,
            d = h * u,
            m = e * c,
            p = m - c,
            f = -2 * d + 3 * h,
            g = d - h,
            T = 1 - f,
            x = g - h + u;
        for (let e = 0; e !== o; e++) {
            const t = i[p + e + o],
                s = i[p + e + a] * l,
                n = i[m + e + o],
                c = i[m + e] * l;
            r[e] = T * t + x * s + f * n + g * c;
        }
        return r;
    }
}
const et = new Z();
class tt extends $e {
    interpolate_(e, t, s, n) {
        const r = super.interpolate_(e, t, s, n);
        return (et.fromArray(r).normalize().toArray(r), r);
    }
}
const st = {
        FLOAT: 5126,
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
        UNSIGNED_SHORT: 5123,
    },
    nt = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array,
    },
    rt = { 9728: G, 9729: L, 9984: B, 9985: b, 9986: j, 9987: M },
    it = { 33071: o, 33648: U, 10497: ee },
    ot = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
    at = {
        POSITION: "position",
        NORMAL: "normal",
        TANGENT: "tangent",
        TEXCOORD_0: "uv",
        TEXCOORD_1: "uv1",
        TEXCOORD_2: "uv2",
        TEXCOORD_3: "uv3",
        COLOR_0: "color",
        WEIGHTS_0: "skinWeight",
        JOINTS_0: "skinIndex",
    },
    ct = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" },
    lt = { CUBICSPLINE: void 0, LINEAR: w, STEP: R };
function ut(e) {
    return (
        void 0 === e.DefaultMaterial &&
            (e.DefaultMaterial = new D({
                color: 16777215,
                emissive: 0,
                metalness: 1,
                roughness: 1,
                transparent: !1,
                depthTest: !0,
                side: d,
            })),
        e.DefaultMaterial
    );
}
function ht(e, t, s) {
    for (const n in s.extensions)
        void 0 === e[n] &&
            ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
            (t.userData.gltfExtensions[n] = s.extensions[n]));
}
function dt(e, t) {
    void 0 !== t.extras &&
        ("object" == typeof t.extras
            ? Object.assign(e.userData, t.extras)
            : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function mt(e, t) {
    if ((e.updateMorphTargets(), void 0 !== t.weights))
        for (let s = 0, n = t.weights.length; s < n; s++) e.morphTargetInfluences[s] = t.weights[s];
    if (t.extras && Array.isArray(t.extras.targetNames)) {
        const s = t.extras.targetNames;
        if (e.morphTargetInfluences.length === s.length) {
            e.morphTargetDictionary = {};
            for (let t = 0, n = s.length; t < n; t++) e.morphTargetDictionary[s[t]] = t;
        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
}
function pt(e) {
    let t;
    const s = e.extensions && e.extensions[Se.KHR_DRACO_MESH_COMPRESSION];
    if (
        ((t = s
            ? "draco:" + s.bufferView + ":" + s.indices + ":" + ft(s.attributes)
            : e.indices + ":" + ft(e.attributes) + ":" + e.mode),
        void 0 !== e.targets)
    )
        for (let s = 0, n = e.targets.length; s < n; s++) t += ":" + ft(e.targets[s]);
    return t;
}
function ft(e) {
    let t = "";
    const s = Object.keys(e).sort();
    for (let n = 0, r = s.length; n < r; n++) t += s[n] + ":" + e[s[n]] + ";";
    return t;
}
function gt(e) {
    switch (e) {
        case Int8Array:
            return 1 / 127;
        case Uint8Array:
            return 1 / 255;
        case Int16Array:
            return 1 / 32767;
        case Uint16Array:
            return 1 / 65535;
        default:
            throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
}
const Tt = new P();
class xt {
    constructor(e = {}, t = {}) {
        ((this.json = e),
            (this.extensions = {}),
            (this.plugins = {}),
            (this.options = t),
            (this.cache = new be()),
            (this.associations = new Map()),
            (this.primitiveCache = {}),
            (this.nodeCache = {}),
            (this.meshCache = { refs: {}, uses: {} }),
            (this.cameraCache = { refs: {}, uses: {} }),
            (this.lightCache = { refs: {}, uses: {} }),
            (this.sourceCache = {}),
            (this.textureCache = {}),
            (this.nodeNamesUsed = {}));
        let s = !1,
            n = -1,
            r = !1,
            i = -1;
        if ("undefined" != typeof navigator) {
            const e = navigator.userAgent;
            s = !0 === /^((?!chrome|android).)*safari/i.test(e);
            const t = e.match(/Version\/(\d+)/);
            ((n = s && t ? parseInt(t[1], 10) : -1),
                (r = e.indexOf("Firefox") > -1),
                (i = r ? e.match(/Firefox\/([0-9]+)\./)[1] : -1));
        }
        ("undefined" == typeof createImageBitmap || (s && n < 17) || (r && i < 98)
            ? (this.textureLoader = new ce(this.options.manager))
            : (this.textureLoader = new p(this.options.manager)),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            this.textureLoader.setRequestHeader(this.options.requestHeader),
            (this.fileLoader = new h(this.options.manager)),
            this.fileLoader.setResponseType("arraybuffer"),
            "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0));
    }
    setExtensions(e) {
        this.extensions = e;
    }
    setPlugins(e) {
        this.plugins = e;
    }
    parse(e, t) {
        const s = this,
            n = this.json,
            r = this.extensions;
        (this.cache.removeAll(),
            (this.nodeCache = {}),
            this._invokeAll(function (e) {
                return e._markDefs && e._markDefs();
            }),
            Promise.all(
                this._invokeAll(function (e) {
                    return e.beforeRoot && e.beforeRoot();
                })
            )
                .then(function () {
                    return Promise.all([
                        s.getDependencies("scene"),
                        s.getDependencies("animation"),
                        s.getDependencies("camera"),
                    ]);
                })
                .then(function (t) {
                    const i = {
                        scene: t[0][n.scene || 0],
                        scenes: t[0],
                        animations: t[1],
                        cameras: t[2],
                        asset: n.asset,
                        parser: s,
                        userData: {},
                    };
                    return (
                        ht(r, i, n),
                        dt(i, n),
                        Promise.all(
                            s._invokeAll(function (e) {
                                return e.afterRoot && e.afterRoot(i);
                            })
                        ).then(function () {
                            for (const e of i.scenes) e.updateMatrixWorld();
                            e(i);
                        })
                    );
                })
                .catch(t));
    }
    _markDefs() {
        const e = this.json.nodes || [],
            t = this.json.skins || [],
            s = this.json.meshes || [];
        for (let s = 0, n = t.length; s < n; s++) {
            const n = t[s].joints;
            for (let t = 0, s = n.length; t < s; t++) e[n[t]].isBone = !0;
        }
        for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            (void 0 !== n.mesh &&
                (this._addNodeRef(this.meshCache, n.mesh), void 0 !== n.skin && (s[n.mesh].isSkinnedMesh = !0)),
                void 0 !== n.camera && this._addNodeRef(this.cameraCache, n.camera));
        }
    }
    _addNodeRef(e, t) {
        void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, s) {
        if (e.refs[t] <= 1) return s;
        const n = s.clone(),
            r = (e, t) => {
                const s = this.associations.get(e);
                null != s && this.associations.set(t, s);
                for (const [s, n] of e.children.entries()) r(n, t.children[s]);
            };
        return (r(s, n), (n.name += "_instance_" + e.uses[t]++), n);
    }
    _invokeOne(e) {
        const t = Object.values(this.plugins);
        t.push(this);
        for (let s = 0; s < t.length; s++) {
            const n = e(t[s]);
            if (n) return n;
        }
        return null;
    }
    _invokeAll(e) {
        const t = Object.values(this.plugins);
        t.unshift(this);
        const s = [];
        for (let n = 0; n < t.length; n++) {
            const r = e(t[n]);
            r && s.push(r);
        }
        return s;
    }
    getDependency(e, t) {
        const s = e + ":" + t;
        let n = this.cache.get(s);
        if (!n) {
            switch (e) {
                case "scene":
                    n = this.loadScene(t);
                    break;
                case "node":
                    n = this._invokeOne(function (e) {
                        return e.loadNode && e.loadNode(t);
                    });
                    break;
                case "mesh":
                    n = this._invokeOne(function (e) {
                        return e.loadMesh && e.loadMesh(t);
                    });
                    break;
                case "accessor":
                    n = this.loadAccessor(t);
                    break;
                case "bufferView":
                    n = this._invokeOne(function (e) {
                        return e.loadBufferView && e.loadBufferView(t);
                    });
                    break;
                case "buffer":
                    n = this.loadBuffer(t);
                    break;
                case "material":
                    n = this._invokeOne(function (e) {
                        return e.loadMaterial && e.loadMaterial(t);
                    });
                    break;
                case "texture":
                    n = this._invokeOne(function (e) {
                        return e.loadTexture && e.loadTexture(t);
                    });
                    break;
                case "skin":
                    n = this.loadSkin(t);
                    break;
                case "animation":
                    n = this._invokeOne(function (e) {
                        return e.loadAnimation && e.loadAnimation(t);
                    });
                    break;
                case "camera":
                    n = this.loadCamera(t);
                    break;
                default:
                    if (
                        ((n = this._invokeOne(function (s) {
                            return s != this && s.getDependency && s.getDependency(e, t);
                        })),
                        !n)
                    )
                        throw new Error("Unknown type: " + e);
            }
            this.cache.add(s, n);
        }
        return n;
    }
    getDependencies(e) {
        let t = this.cache.get(e);
        if (!t) {
            const s = this,
                n = this.json[e + ("mesh" === e ? "es" : "s")] || [];
            ((t = Promise.all(
                n.map(function (t, n) {
                    return s.getDependency(e, n);
                })
            )),
                this.cache.add(e, t));
        }
        return t;
    }
    loadBuffer(e) {
        const t = this.json.buffers[e],
            s = this.fileLoader;
        if (t.type && "arraybuffer" !== t.type)
            throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
        if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[Se.KHR_BINARY_GLTF].body);
        const n = this.options;
        return new Promise(function (e, r) {
            s.load(N.resolveURL(t.uri, n.path), e, void 0, function () {
                r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
            });
        });
    }
    loadBufferView(e) {
        const t = this.json.bufferViews[e];
        return this.getDependency("buffer", t.buffer).then(function (e) {
            const s = t.byteLength || 0,
                n = t.byteOffset || 0;
            return e.slice(n, n + s);
        });
    }
    loadAccessor(e) {
        const t = this,
            s = this.json,
            n = this.json.accessors[e];
        if (void 0 === n.bufferView && void 0 === n.sparse) {
            const e = ot[n.type],
                t = nt[n.componentType],
                s = !0 === n.normalized,
                i = new t(n.count * e);
            return Promise.resolve(new r(i, e, s));
        }
        const i = [];
        return (
            void 0 !== n.bufferView ? i.push(this.getDependency("bufferView", n.bufferView)) : i.push(null),
            void 0 !== n.sparse &&
                (i.push(this.getDependency("bufferView", n.sparse.indices.bufferView)),
                i.push(this.getDependency("bufferView", n.sparse.values.bufferView))),
            Promise.all(i).then(function (e) {
                const i = e[0],
                    o = ot[n.type],
                    a = nt[n.componentType],
                    c = a.BYTES_PER_ELEMENT,
                    l = c * o,
                    u = n.byteOffset || 0,
                    h = void 0 !== n.bufferView ? s.bufferViews[n.bufferView].byteStride : void 0,
                    d = !0 === n.normalized;
                let m, p;
                if (h && h !== l) {
                    const e = Math.floor(u / h),
                        s = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + e + ":" + n.count;
                    let r = t.cache.get(s);
                    (r || ((m = new a(i, e * h, (n.count * h) / c)), (r = new T(m, h / c)), t.cache.add(s, r)),
                        (p = new x(r, o, (u % h) / c, d)));
                } else ((m = null === i ? new a(n.count * o) : new a(i, u, n.count * o)), (p = new r(m, o, d)));
                if (void 0 !== n.sparse) {
                    const t = ot.SCALAR,
                        s = nt[n.sparse.indices.componentType],
                        c = n.sparse.indices.byteOffset || 0,
                        l = n.sparse.values.byteOffset || 0,
                        u = new s(e[1], c, n.sparse.count * t),
                        h = new a(e[2], l, n.sparse.count * o);
                    (null !== i && (p = new r(p.array.slice(), p.itemSize, p.normalized)), (p.normalized = !1));
                    for (let e = 0, t = u.length; e < t; e++) {
                        const t = u[e];
                        if (
                            (p.setX(t, h[e * o]),
                            o >= 2 && p.setY(t, h[e * o + 1]),
                            o >= 3 && p.setZ(t, h[e * o + 2]),
                            o >= 4 && p.setW(t, h[e * o + 3]),
                            o >= 5)
                        )
                            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
                    }
                    p.normalized = d;
                }
                return p;
            })
        );
    }
    loadTexture(e) {
        const t = this.json,
            s = this.options,
            n = t.textures[e].source,
            r = t.images[n];
        let i = this.textureLoader;
        if (r.uri) {
            const e = s.manager.getHandler(r.uri);
            null !== e && (i = e);
        }
        return this.loadTextureImage(e, n, i);
    }
    loadTextureImage(e, t, s) {
        const n = this,
            r = this.json,
            i = r.textures[e],
            o = r.images[t],
            a = (o.uri || o.bufferView) + ":" + i.sampler;
        if (this.textureCache[a]) return this.textureCache[a];
        const c = this.loadImageSource(t, s)
            .then(function (t) {
                ((t.flipY = !1),
                    (t.name = i.name || o.name || ""),
                    "" === t.name &&
                        "string" == typeof o.uri &&
                        !1 === o.uri.startsWith("data:image/") &&
                        (t.name = o.uri));
                const s = (r.samplers || {})[i.sampler] || {};
                return (
                    (t.magFilter = rt[s.magFilter] || L),
                    (t.minFilter = rt[s.minFilter] || M),
                    (t.wrapS = it[s.wrapS] || ee),
                    (t.wrapT = it[s.wrapT] || ee),
                    (t.generateMipmaps = !t.isCompressedTexture && t.minFilter !== G && t.minFilter !== L),
                    n.associations.set(t, { textures: e }),
                    t
                );
            })
            .catch(function () {
                return null;
            });
        return ((this.textureCache[a] = c), c);
    }
    loadImageSource(e, t) {
        const s = this.json,
            n = this.options;
        if (void 0 !== this.sourceCache[e]) return this.sourceCache[e].then((e) => e.clone());
        const r = s.images[e],
            i = self.URL || self.webkitURL;
        let o = r.uri || "",
            a = !1;
        if (void 0 !== r.bufferView)
            o = this.getDependency("bufferView", r.bufferView).then(function (e) {
                a = !0;
                const t = new Blob([e], { type: r.mimeType });
                return ((o = i.createObjectURL(t)), o);
            });
        else if (void 0 === r.uri) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
        const c = Promise.resolve(o)
            .then(function (e) {
                return new Promise(function (s, r) {
                    let i = s;
                    (!0 === t.isImageBitmapLoader &&
                        (i = function (e) {
                            const t = new ae(e);
                            ((t.needsUpdate = !0), s(t));
                        }),
                        t.load(N.resolveURL(e, n.path), i, void 0, r));
                });
            })
            .then(function (e) {
                var t;
                return (
                    !0 === a && i.revokeObjectURL(o),
                    dt(e, r),
                    (e.userData.mimeType =
                        r.mimeType ||
                        ((t = r.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/)
                            ? "image/jpeg"
                            : t.search(/\.webp($|\?)/i) > 0 || 0 === t.search(/^data\:image\/webp/)
                              ? "image/webp"
                              : t.search(/\.ktx2($|\?)/i) > 0 || 0 === t.search(/^data\:image\/ktx2/)
                                ? "image/ktx2"
                                : "image/png")),
                    e
                );
            })
            .catch(function (e) {
                throw (console.error("THREE.GLTFLoader: Couldn't load texture", o), e);
            });
        return ((this.sourceCache[e] = c), c);
    }
    assignTexture(e, t, s, n) {
        const r = this;
        return this.getDependency("texture", s.index).then(function (i) {
            if (!i) return null;
            if (
                (void 0 !== s.texCoord && s.texCoord > 0 && ((i = i.clone()).channel = s.texCoord),
                r.extensions[Se.KHR_TEXTURE_TRANSFORM])
            ) {
                const e = void 0 !== s.extensions ? s.extensions[Se.KHR_TEXTURE_TRANSFORM] : void 0;
                if (e) {
                    const t = r.associations.get(i);
                    ((i = r.extensions[Se.KHR_TEXTURE_TRANSFORM].extendTexture(i, e)), r.associations.set(i, t));
                }
            }
            return (void 0 !== n && (i.colorSpace = n), (e[t] = i), i);
        });
    }
    assignFinalMaterial(e) {
        const t = e.geometry;
        let s = e.material;
        const n = void 0 === t.attributes.tangent,
            r = void 0 !== t.attributes.color,
            i = void 0 === t.attributes.normal;
        if (e.isPoints) {
            const e = "PointsMaterial:" + s.uuid;
            let t = this.cache.get(e);
            (t ||
                ((t = new J()),
                O.prototype.copy.call(t, s),
                t.color.copy(s.color),
                (t.map = s.map),
                (t.sizeAttenuation = !1),
                this.cache.add(e, t)),
                (s = t));
        } else if (e.isLine) {
            const e = "LineBasicMaterial:" + s.uuid;
            let t = this.cache.get(e);
            (t ||
                ((t = new E()),
                O.prototype.copy.call(t, s),
                t.color.copy(s.color),
                (t.map = s.map),
                this.cache.add(e, t)),
                (s = t));
        }
        if (n || r || i) {
            let e = "ClonedMaterial:" + s.uuid + ":";
            (n && (e += "derivative-tangents:"), r && (e += "vertex-colors:"), i && (e += "flat-shading:"));
            let t = this.cache.get(e);
            (t ||
                ((t = s.clone()),
                r && (t.vertexColors = !0),
                i && (t.flatShading = !0),
                n &&
                    (t.normalScale && (t.normalScale.y *= -1),
                    t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
                this.cache.add(e, t),
                this.associations.set(t, this.associations.get(s))),
                (s = t));
        }
        e.material = s;
    }
    getMaterialType() {
        return D;
    }
    loadMaterial(e) {
        const t = this,
            s = this.json,
            n = this.extensions,
            r = s.materials[e];
        let i;
        const o = {},
            c = [];
        if ((r.extensions || {})[Se.KHR_MATERIALS_UNLIT]) {
            const e = n[Se.KHR_MATERIALS_UNLIT];
            ((i = e.getMaterialType()), c.push(e.extendParams(o, r, t)));
        } else {
            const s = r.pbrMetallicRoughness || {};
            if (((o.color = new a(1, 1, 1)), (o.opacity = 1), Array.isArray(s.baseColorFactor))) {
                const e = s.baseColorFactor;
                (o.color.setRGB(e[0], e[1], e[2], S), (o.opacity = e[3]));
            }
            (void 0 !== s.baseColorTexture && c.push(t.assignTexture(o, "map", s.baseColorTexture, te)),
                (o.metalness = void 0 !== s.metallicFactor ? s.metallicFactor : 1),
                (o.roughness = void 0 !== s.roughnessFactor ? s.roughnessFactor : 1),
                void 0 !== s.metallicRoughnessTexture &&
                    (c.push(t.assignTexture(o, "metalnessMap", s.metallicRoughnessTexture)),
                    c.push(t.assignTexture(o, "roughnessMap", s.metallicRoughnessTexture))),
                (i = this._invokeOne(function (t) {
                    return t.getMaterialType && t.getMaterialType(e);
                })),
                c.push(
                    Promise.all(
                        this._invokeAll(function (t) {
                            return t.extendMaterialParams && t.extendMaterialParams(e, o);
                        })
                    )
                ));
        }
        !0 === r.doubleSided && (o.side = u);
        const l = r.alphaMode || "OPAQUE";
        if (
            ("BLEND" === l
                ? ((o.transparent = !0), (o.depthWrite = !1))
                : ((o.transparent = !1),
                  "MASK" === l && (o.alphaTest = void 0 !== r.alphaCutoff ? r.alphaCutoff : 0.5)),
            void 0 !== r.normalTexture &&
                i !== H &&
                (c.push(t.assignTexture(o, "normalMap", r.normalTexture)),
                (o.normalScale = new de(1, 1)),
                void 0 !== r.normalTexture.scale))
        ) {
            const e = r.normalTexture.scale;
            o.normalScale.set(e, e);
        }
        if (
            (void 0 !== r.occlusionTexture &&
                i !== H &&
                (c.push(t.assignTexture(o, "aoMap", r.occlusionTexture)),
                void 0 !== r.occlusionTexture.strength && (o.aoMapIntensity = r.occlusionTexture.strength)),
            void 0 !== r.emissiveFactor && i !== H)
        ) {
            const e = r.emissiveFactor;
            o.emissive = new a().setRGB(e[0], e[1], e[2], S);
        }
        return (
            void 0 !== r.emissiveTexture && i !== H && c.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, te)),
            Promise.all(c).then(function () {
                const s = new i(o);
                return (
                    r.name && (s.name = r.name),
                    dt(s, r),
                    t.associations.set(s, { materials: e }),
                    r.extensions && ht(n, s, r),
                    s
                );
            })
        );
    }
    createUniqueName(e) {
        const t = Q.sanitizeNodeName(e || "");
        return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : ((this.nodeNamesUsed[t] = 0), t);
    }
    loadGeometries(e) {
        const t = this,
            s = this.extensions,
            n = this.primitiveCache;
        function r(e) {
            return s[Se.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function (s) {
                return vt(s, e, t);
            });
        }
        const o = [];
        for (let s = 0, a = e.length; s < a; s++) {
            const a = e[s],
                c = pt(a),
                l = n[c];
            if (l) o.push(l.promise);
            else {
                let e;
                ((e = a.extensions && a.extensions[Se.KHR_DRACO_MESH_COMPRESSION] ? r(a) : vt(new i(), a, t)),
                    (n[c] = { primitive: a, promise: e }),
                    o.push(e));
            }
        }
        return Promise.all(o);
    }
    loadMesh(e) {
        const t = this,
            s = this.json,
            n = this.extensions,
            r = s.meshes[e],
            i = r.primitives,
            o = [];
        for (let e = 0, t = i.length; e < t; e++) {
            const t = void 0 === i[e].material ? ut(this.cache) : this.getDependency("material", i[e].material);
            o.push(t);
        }
        return (
            o.push(t.loadGeometries(i)),
            Promise.all(o).then(function (s) {
                const o = s.slice(0, s.length - 1),
                    a = s[s.length - 1],
                    c = [];
                for (let s = 0, l = a.length; s < l; s++) {
                    const l = a[s],
                        u = i[s];
                    let h;
                    const d = o[s];
                    if (
                        u.mode === st.TRIANGLES ||
                        u.mode === st.TRIANGLE_STRIP ||
                        u.mode === st.TRIANGLE_FAN ||
                        void 0 === u.mode
                    )
                        ((h = !0 === r.isSkinnedMesh ? new re(l, d) : new k(l, d)),
                            !0 === h.isSkinnedMesh && h.normalizeSkinWeights(),
                            u.mode === st.TRIANGLE_STRIP
                                ? (h.geometry = Le(h.geometry, ue))
                                : u.mode === st.TRIANGLE_FAN && (h.geometry = Le(h.geometry, le)));
                    else if (u.mode === st.LINES) h = new A(l, d);
                    else if (u.mode === st.LINE_STRIP) h = new _(l, d);
                    else if (u.mode === st.LINE_LOOP) h = new y(l, d);
                    else {
                        if (u.mode !== st.POINTS)
                            throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + u.mode);
                        h = new Y(l, d);
                    }
                    (Object.keys(h.geometry.morphAttributes).length > 0 && mt(h, r),
                        (h.name = t.createUniqueName(r.name || "mesh_" + e)),
                        dt(h, r),
                        u.extensions && ht(n, h, u),
                        t.assignFinalMaterial(h),
                        c.push(h));
                }
                for (let s = 0, n = c.length; s < n; s++) t.associations.set(c[s], { meshes: e, primitives: s });
                if (1 === c.length) return (r.extensions && ht(n, c[0], r), c[0]);
                const l = new m();
                (r.extensions && ht(n, l, r), t.associations.set(l, { meshes: e }));
                for (let e = 0, t = c.length; e < t; e++) l.add(c[e]);
                return l;
            })
        );
    }
    loadCamera(e) {
        let t;
        const s = this.json.cameras[e],
            n = s[s.type];
        if (n)
            return (
                "perspective" === s.type
                    ? (t = new z(C.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6))
                    : "orthographic" === s.type && (t = new X(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)),
                s.name && (t.name = this.createUniqueName(s.name)),
                dt(t, s),
                Promise.resolve(t)
            );
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
    }
    loadSkin(e) {
        const t = this.json.skins[e],
            s = [];
        for (let e = 0, n = t.joints.length; e < n; e++) s.push(this._loadNodeShallow(t.joints[e]));
        return (
            void 0 !== t.inverseBindMatrices
                ? s.push(this.getDependency("accessor", t.inverseBindMatrices))
                : s.push(null),
            Promise.all(s).then(function (e) {
                const s = e.pop(),
                    n = e,
                    r = [],
                    i = [];
                for (let e = 0, o = n.length; e < o; e++) {
                    const o = n[e];
                    if (o) {
                        r.push(o);
                        const t = new P();
                        (null !== s && t.fromArray(s.array, 16 * e), i.push(t));
                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[e]);
                }
                return new ne(r, i);
            })
        );
    }
    loadAnimation(e) {
        const s = this.json,
            n = this,
            r = s.animations[e],
            i = r.name ? r.name : "animation_" + e,
            o = [],
            a = [],
            c = [],
            l = [],
            u = [];
        for (let e = 0, t = r.channels.length; e < t; e++) {
            const t = r.channels[e],
                s = r.samplers[t.sampler],
                n = t.target,
                i = n.node,
                h = void 0 !== r.parameters ? r.parameters[s.input] : s.input,
                d = void 0 !== r.parameters ? r.parameters[s.output] : s.output;
            void 0 !== n.node &&
                (o.push(this.getDependency("node", i)),
                a.push(this.getDependency("accessor", h)),
                c.push(this.getDependency("accessor", d)),
                l.push(s),
                u.push(n));
        }
        return Promise.all([Promise.all(o), Promise.all(a), Promise.all(c), Promise.all(l), Promise.all(u)]).then(
            function (e) {
                const s = e[0],
                    o = e[1],
                    a = e[2],
                    c = e[3],
                    l = e[4],
                    u = [];
                for (let e = 0, t = s.length; e < t; e++) {
                    const t = s[e],
                        r = o[e],
                        i = a[e],
                        h = c[e],
                        d = l[e];
                    if (void 0 === t) continue;
                    t.updateMatrix && t.updateMatrix();
                    const m = n._createAnimationTracks(t, r, i, h, d);
                    if (m) for (let e = 0; e < m.length; e++) u.push(m[e]);
                }
                const h = new t(i, void 0, u);
                return (dt(h, r), h);
            }
        );
    }
    createNodeMesh(e) {
        const t = this.json,
            s = this,
            n = t.nodes[e];
        return void 0 === n.mesh
            ? null
            : s.getDependency("mesh", n.mesh).then(function (e) {
                  const t = s._getNodeRef(s.meshCache, n.mesh, e);
                  return (
                      void 0 !== n.weights &&
                          t.traverse(function (e) {
                              if (e.isMesh)
                                  for (let t = 0, s = n.weights.length; t < s; t++)
                                      e.morphTargetInfluences[t] = n.weights[t];
                          }),
                      t
                  );
              });
    }
    loadNode(e) {
        const t = this,
            s = this.json.nodes[e],
            n = t._loadNodeShallow(e),
            r = [],
            i = s.children || [];
        for (let e = 0, s = i.length; e < s; e++) r.push(t.getDependency("node", i[e]));
        const o = void 0 === s.skin ? Promise.resolve(null) : t.getDependency("skin", s.skin);
        return Promise.all([n, Promise.all(r), o]).then(function (e) {
            const t = e[0],
                s = e[1],
                n = e[2];
            null !== n &&
                t.traverse(function (e) {
                    e.isSkinnedMesh && e.bind(n, Tt);
                });
            for (let e = 0, n = s.length; e < n; e++) t.add(s[e]);
            return t;
        });
    }
    _loadNodeShallow(e) {
        const t = this.json,
            n = this.extensions,
            r = this;
        if (void 0 !== this.nodeCache[e]) return this.nodeCache[e];
        const i = t.nodes[e],
            o = i.name ? r.createUniqueName(i.name) : "",
            a = [],
            c = r._invokeOne(function (t) {
                return t.createNodeMesh && t.createNodeMesh(e);
            });
        return (
            c && a.push(c),
            void 0 !== i.camera &&
                a.push(
                    r.getDependency("camera", i.camera).then(function (e) {
                        return r._getNodeRef(r.cameraCache, i.camera, e);
                    })
                ),
            r
                ._invokeAll(function (t) {
                    return t.createNodeAttachment && t.createNodeAttachment(e);
                })
                .forEach(function (e) {
                    a.push(e);
                }),
            (this.nodeCache[e] = Promise.all(a).then(function (t) {
                let a;
                if (
                    ((a = !0 === i.isBone ? new s() : t.length > 1 ? new m() : 1 === t.length ? t[0] : new V()),
                    a !== t[0])
                )
                    for (let e = 0, s = t.length; e < s; e++) a.add(t[e]);
                if (
                    (i.name && ((a.userData.name = i.name), (a.name = o)),
                    dt(a, i),
                    i.extensions && ht(n, a, i),
                    void 0 !== i.matrix)
                ) {
                    const e = new P();
                    (e.fromArray(i.matrix), a.applyMatrix4(e));
                } else
                    (void 0 !== i.translation && a.position.fromArray(i.translation),
                        void 0 !== i.rotation && a.quaternion.fromArray(i.rotation),
                        void 0 !== i.scale && a.scale.fromArray(i.scale));
                if (r.associations.has(a)) {
                    if (void 0 !== i.mesh && r.meshCache.refs[i.mesh] > 1) {
                        const e = r.associations.get(a);
                        r.associations.set(a, { ...e });
                    }
                } else r.associations.set(a, {});
                return ((r.associations.get(a).nodes = e), a);
            })),
            this.nodeCache[e]
        );
    }
    loadScene(e) {
        const t = this.extensions,
            s = this.json.scenes[e],
            n = this,
            r = new m();
        (s.name && (r.name = n.createUniqueName(s.name)), dt(r, s), s.extensions && ht(t, r, s));
        const i = s.nodes || [],
            o = [];
        for (let e = 0, t = i.length; e < t; e++) o.push(n.getDependency("node", i[e]));
        return Promise.all(o).then(function (e) {
            for (let t = 0, s = e.length; t < s; t++) r.add(e[t]);
            return (
                (n.associations = ((e) => {
                    const t = new Map();
                    for (const [e, s] of n.associations) (e instanceof O || e instanceof ae) && t.set(e, s);
                    return (
                        e.traverse((e) => {
                            const s = n.associations.get(e);
                            null != s && t.set(e, s);
                        }),
                        t
                    );
                })(r)),
                r
            );
        });
    }
    _createAnimationTracks(e, t, s, n, r) {
        const i = [],
            o = e.name ? e.name : e.uuid,
            a = [];
        let c;
        switch (
            (ct[r.path] === ct.weights
                ? e.traverse(function (e) {
                      e.morphTargetInfluences && a.push(e.name ? e.name : e.uuid);
                  })
                : a.push(o),
            ct[r.path])
        ) {
            case ct.weights:
                c = K;
                break;
            case ct.rotation:
                c = $;
                break;
            case ct.translation:
            case ct.scale:
                c = pe;
                break;
            default:
                c = 1 === s.itemSize ? K : pe;
        }
        const l = void 0 !== n.interpolation ? lt[n.interpolation] : w,
            u = this._getArrayFromAccessor(s);
        for (let e = 0, s = a.length; e < s; e++) {
            const s = new c(a[e] + "." + ct[r.path], t.array, u, l);
            ("CUBICSPLINE" === n.interpolation && this._createCubicSplineTrackInterpolant(s), i.push(s));
        }
        return i;
    }
    _getArrayFromAccessor(e) {
        let t = e.array;
        if (e.normalized) {
            const e = gt(t.constructor),
                s = new Float32Array(t.length);
            for (let n = 0, r = t.length; n < r; n++) s[n] = t[n] * e;
            t = s;
        }
        return t;
    }
    _createCubicSplineTrackInterpolant(e) {
        ((e.createInterpolant = function (e) {
            return new (this instanceof $ ? tt : $e)(this.times, this.values, this.getValueSize() / 3, e);
        }),
            (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0));
    }
}
function vt(e, t, s) {
    const r = t.attributes,
        i = [];
    function o(t, n) {
        return s.getDependency("accessor", t).then(function (t) {
            e.setAttribute(n, t);
        });
    }
    for (const t in r) {
        const s = at[t] || t.toLowerCase();
        s in e.attributes || i.push(o(r[t], s));
    }
    if (void 0 !== t.indices && !e.index) {
        const n = s.getDependency("accessor", t.indices).then(function (t) {
            e.setIndex(t);
        });
        i.push(n);
    }
    return (
        c.workingColorSpace !== S &&
            "COLOR_0" in r &&
            console.warn(
                `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${c.workingColorSpace}" not supported.`
            ),
        dt(e, t),
        (function (e, t, s) {
            const r = t.attributes,
                i = new n();
            if (void 0 === r.POSITION) return;
            {
                const e = s.json.accessors[r.POSITION],
                    t = e.min,
                    n = e.max;
                if (void 0 === t || void 0 === n)
                    return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                if ((i.set(new me(t[0], t[1], t[2]), new me(n[0], n[1], n[2])), e.normalized)) {
                    const t = gt(nt[e.componentType]);
                    (i.min.multiplyScalar(t), i.max.multiplyScalar(t));
                }
            }
            const o = t.targets;
            if (void 0 !== o) {
                const e = new me(),
                    t = new me();
                for (let n = 0, r = o.length; n < r; n++) {
                    const r = o[n];
                    if (void 0 !== r.POSITION) {
                        const n = s.json.accessors[r.POSITION],
                            i = n.min,
                            o = n.max;
                        if (void 0 !== i && void 0 !== o) {
                            if (
                                (t.setX(Math.max(Math.abs(i[0]), Math.abs(o[0]))),
                                t.setY(Math.max(Math.abs(i[1]), Math.abs(o[1]))),
                                t.setZ(Math.max(Math.abs(i[2]), Math.abs(o[2]))),
                                n.normalized)
                            ) {
                                const e = gt(nt[n.componentType]);
                                t.multiplyScalar(e);
                            }
                            e.max(t);
                        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                    }
                }
                i.expandByVector(e);
            }
            e.boundingBox = i;
            const a = new ie();
            (i.getCenter(a.center), (a.radius = i.min.distanceTo(i.max) / 2), (e.boundingSphere = a));
        })(e, t, s),
        Promise.all(i).then(function () {
            return void 0 !== t.targets
                ? (function (e, t, s) {
                      let n = !1,
                          r = !1,
                          i = !1;
                      for (let e = 0, s = t.length; e < s; e++) {
                          const s = t[e];
                          if (
                              (void 0 !== s.POSITION && (n = !0),
                              void 0 !== s.NORMAL && (r = !0),
                              void 0 !== s.COLOR_0 && (i = !0),
                              n && r && i)
                          )
                              break;
                      }
                      if (!n && !r && !i) return Promise.resolve(e);
                      const o = [],
                          a = [],
                          c = [];
                      for (let l = 0, u = t.length; l < u; l++) {
                          const u = t[l];
                          if (n) {
                              const t =
                                  void 0 !== u.POSITION
                                      ? s.getDependency("accessor", u.POSITION)
                                      : e.attributes.position;
                              o.push(t);
                          }
                          if (r) {
                              const t =
                                  void 0 !== u.NORMAL ? s.getDependency("accessor", u.NORMAL) : e.attributes.normal;
                              a.push(t);
                          }
                          if (i) {
                              const t =
                                  void 0 !== u.COLOR_0 ? s.getDependency("accessor", u.COLOR_0) : e.attributes.color;
                              c.push(t);
                          }
                      }
                      return Promise.all([Promise.all(o), Promise.all(a), Promise.all(c)]).then(function (t) {
                          const s = t[0],
                              o = t[1],
                              a = t[2];
                          return (
                              n && (e.morphAttributes.position = s),
                              r && (e.morphAttributes.normal = o),
                              i && (e.morphAttributes.color = a),
                              (e.morphTargetsRelative = !0),
                              e
                          );
                      });
                  })(e, t.targets, s)
                : e;
        })
    );
}
var Rt = (function () {
    function e(t) {
        (xe(this, e),
            Ee(this, "entities", []),
            Ee(this, "names", void 0),
            Ee(this, "scene", void 0),
            Ee(this, "target", void 0),
            Ee(this, "uuid", void 0),
            (this.scene = Ae.getGlobalScene()),
            (this.target = window || Te.g),
            (this.uuid = t),
            (this.names = []));
    }
    return (
        _e(e, [
            {
                key: "add",
                value: function (e, t, s) {
                    this.target.addEventListener("getNFTData-" + this.uuid + "-" + t, function (t) {
                        var s = t.detail;
                        ((e.position.y = ((s.height / s.dpi) * 2.54 * 10) / 2),
                            (e.position.x = ((s.width / s.dpi) * 2.54 * 10) / 2));
                    });
                    var n = new V();
                    ((n.name = "root-" + t),
                        this.scene.add(n),
                        n.add(e),
                        this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + t, function (t) {
                            ((n.visible = !0),
                                (e.visible = !0),
                                (n.matrixAutoUpdate = !1),
                                ye.setMatrix(n.matrix, t.detail.matrixGL_RH));
                        }),
                        this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + t, function (t) {
                            ((n.visible = s), (e.visible = s));
                        }),
                        this.names.push(t),
                        this.entities.push({ name: t }));
                },
            },
            {
                key: "addModel",
                value: function (e, t, s, n) {
                    var r,
                        i = this,
                        o = new V();
                    ((o.name = "root-" + t),
                        this.scene.add(o),
                        new Me().load(e, function (e) {
                            ((r = e.scene).scale.set(s, s, s),
                                (r.rotation.x = Math.PI / 2),
                                i.target.addEventListener("getNFTData-" + i.uuid + "-" + t, function (e) {
                                    var t = e.detail;
                                    ((r.position.y = ((t.height / t.dpi) * 2.54 * 10) / 2),
                                        (r.position.x = ((t.width / t.dpi) * 2.54 * 10) / 2));
                                }),
                                o.add(r));
                        }),
                        this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + t, function (e) {
                            ((o.visible = !0),
                                (r.visible = !0),
                                (o.matrixAutoUpdate = !1),
                                ye.setMatrix(o.matrix, e.detail.matrixGL_RH));
                        }),
                        this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + t, function (e) {
                            ((o.visible = n), (r.visible = n));
                        }),
                        this.names.push(t));
                },
            },
            {
                key: "addModelWithCallback",
                value: function (e, t, s, n) {
                    var r,
                        i = this,
                        o = new V();
                    ((o.name = "root-" + t),
                        this.scene.add(o),
                        new Me().load(e, function (e) {
                            ((r = e.scene),
                                i.target.addEventListener("getNFTData-" + i.uuid + "-" + t, function (e) {
                                    var t = e.detail;
                                    ((r.position.y = ((t.height / t.dpi) * 2.54 * 10) / 2),
                                        (r.position.x = ((t.width / t.dpi) * 2.54 * 10) / 2));
                                }),
                                s(e),
                                o.add(r));
                        }),
                        this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + t, function (e) {
                            ((o.visible = !0),
                                (r.visible = !0),
                                (o.matrixAutoUpdate = !1),
                                ye.setMatrix(o.matrix, e.detail.matrixGL_RH));
                        }),
                        this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + t, function (e) {
                            ((o.visible = n), (r.visible = n));
                        }),
                        this.names.push(t));
                },
            },
            {
                key: "addImage",
                value: function (e, t, s, n, r, i) {
                    var o = new V();
                    ((o.name = "root-" + t), this.scene.add(o));
                    var a = new q(r.w, r.h, r.ws, r.hs),
                        c = new ce().load(e),
                        l = new D({ color: s, map: c }),
                        u = new k(a, l);
                    (u.scale.set(n, n, n),
                        this.target.addEventListener("getNFTData-" + this.uuid + "-" + t, function (e) {
                            var t = e.detail;
                            ((u.position.y = ((t.height / t.dpi) * 2.54 * 10) / 2),
                                (u.position.x = ((t.width / t.dpi) * 2.54 * 10) / 2));
                        }),
                        o.add(u),
                        this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + t, function (e) {
                            ((o.visible = !0),
                                (u.visible = !0),
                                (o.matrixAutoUpdate = !1),
                                ye.setMatrix(o.matrix, e.detail.matrixGL_RH));
                        }),
                        this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + t, function (e) {
                            ((o.visible = i), (u.visible = i));
                        }),
                        this.names.push(t));
                },
            },
            {
                key: "addVideo",
                value: function (e, t, s, n, r) {
                    var i = new V();
                    ((i.name = "root-" + t), this.scene.add(i));
                    var o = document.getElementById(e),
                        a = new fe(o),
                        c = new D({ color: 12303359, map: a }),
                        l = new q(n.w, n.h, n.ws, n.hs),
                        u = new k(l, c);
                    (u.scale.set(s, s, s),
                        this.target.addEventListener("getNFTData-" + this.uuid + "-" + t, function (e) {
                            var t = e.detail;
                            ((u.position.y = ((t.height / t.dpi) * 2.54 * 10) / 2),
                                (u.position.x = ((t.width / t.dpi) * 2.54 * 10) / 2));
                        }),
                        i.add(u),
                        this.target.addEventListener("getMatrixGL_RH-" + this.uuid + "-" + t, function (e) {
                            (setTimeout(function () {
                                (o.play(), (i.visible = !0), (u.visible = !0), (i.matrixAutoUpdate = !1));
                            }, 100),
                                ye.setMatrix(i.matrix, e.detail.matrixGL_RH));
                        }),
                        this.target.addEventListener("nftTrackingLost-" + this.uuid + "-" + t, function (e) {
                            ((i.visible = r), (u.visible = r), o.pause());
                        }),
                        this.names.push(t));
                },
            },
            {
                key: "getNames",
                value: function () {
                    return this.names;
                },
            },
        ]),
        e
    );
})();
const wt = { SceneRendererTJS: Ae, NFTaddTJS: Rt };
export { wt as default };
