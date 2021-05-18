import Utils from './utils/Utils'
import Container from './utils/html/Container'
import Stats from 'stats.js'
import ThreejsRenderer from './renderers/ThreejsRenderer'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default class ARnft {
  constructor (width, height, config) {
    this.width = width
    this.height = height
    this.root = new THREE.Object3D()
    this.renderer = null
    this.root.matrixAutoUpdate = false
    this.config = config
    this.listeners = {}
    this.version = '0.8.7'
    console.log('ARnft ', this.version)
  }

  _initialize (markerUrl, stats, camera) {
    console.log('ARnft init() %cstart...', 'color: yellow; background-color: blue; border-radius: 4px; padding: 2px')
    const root = this.root
    const config = this.config
    let data
    if (typeof(config) == 'object') {
      data = Utils.jsonObjParser(config)
    } else {
      data = Utils.jsonParser(config)
    }

    data.then((configData) => {
      Container.createLoading(configData)
      Container.createStats(stats, configData)
      const containerObj = Container.createContainer(configData)
      const container = containerObj.container
      const canvas = containerObj.canvas

      let statsMain, statsWorker

      if (stats) {
        statsMain = new Stats()
        statsMain.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
        document.getElementById('stats1').appendChild(statsMain.dom)

        statsWorker = new Stats()
        statsWorker.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
        document.getElementById('stats2').appendChild(statsWorker.dom)
      }

      const statsObj = {
        statsMain: statsMain,
        statsWorker: statsWorker,
        stats: stats
      }

      Utils.getUserMedia(configData).then((video) => {
        Utils._startWorker(
          container,
          markerUrl,
          video,
          video.videoWidth,
          video.videoHeight,
          canvas,
          () => {
            if (statsObj.stats) {
              statsObj.statsMain.update()
            }
          },
          () => {
            if (statsObj.stats) {
              statsObj.statsWorker.update()
            }
          },
          configData)
      })

      if (configData.renderer.type === 'three') {
        const renderer = new ThreejsRenderer(configData, canvas, root, camera)
        renderer.initRenderer(configData.renderer.objVisibility)
        this.renderer = renderer
        const setRendererEvent = new CustomEvent('onAfterInitThreejsRendering', { detail: { renderer: renderer } })
        document.dispatchEvent(setRendererEvent)
        const tick = () => {
          renderer.draw()
          window.requestAnimationFrame(tick)
        }
        tick()
      }
    })
    return this
  }

  static async init (width, height, markerUrl, config, stats, camera) {
    const nft = new ARnft(width, height, config)
    return await nft._initialize(markerUrl, stats, camera)
  }

  add (obj) {
    const root = this.root
    document.addEventListener('getNFTData', (ev) => {
      var msg = ev.detail
      obj.position.y = (msg.height / msg.dpi * 2.54 * 10) / 2.0
      obj.position.x = (msg.width / msg.dpi * 2.54 * 10) / 2.0
    })
    root.add(obj)
  }

  addModel (url, x, y, z, scale) {
    const root = this.root
    let model

    /* Load Model */
    const threeGLTFLoader = new GLTFLoader()

    threeGLTFLoader.load(url, gltf => {
      model = gltf.scene
      model.scale.set(scale, scale, scale)
      model.rotation.x = Math.PI / 2
      model.position.x = x
      model.position.y = y
      model.position.z = z

      root.add(model)
    })
  }

  addImage (url, color, scale) {
    const root = this.root
    const texture = new THREE.TextureLoader().load(url)
    const mat = new THREE.MeshLambertMaterial({ color: color, map: texture })
    const planeGeom = new THREE.PlaneGeometry(1, 1, 1, 1)
    const plane = new THREE.Mesh(planeGeom, mat)
    plane.scale.set(scale, scale, scale)
    document.addEventListener('getNFTData', (ev) => {
      var msg = ev.detail
      plane.position.y = (msg.height / msg.dpi * 2.54 * 10) / 2.0
      plane.position.x = (msg.width / msg.dpi * 2.54 * 10) / 2.0
    })
    root.add(plane)
  }

  addVideo (id, scale) {
    const root = this.root
    var ARVideo = document.getElementById(id)
    var texture = new THREE.VideoTexture(ARVideo)
    var mat = new THREE.MeshLambertMaterial({ color: 0xbbbbff, map: texture })
    ARVideo.play()
    var planeGeom = new THREE.PlaneGeometry(1, 1, 1, 1)
    var plane = new THREE.Mesh(planeGeom, mat)
    plane.scale.set(scale, scale, scale)
    document.addEventListener('getNFTData', (ev) => {
      var msg = ev.detail
      plane.position.y = (msg.height / msg.dpi * 2.54 * 10) / 2.0
      plane.position.x = (msg.width / msg.dpi * 2.54 * 10) / 2.0
    })
    root.add(plane)
  }

  dispatchEvent (event) {
    const listeners = this.listeners[event.name]
    if (listeners) {
      for (let i = 0; i < listeners.length; i++) {
        listeners[i].call(this, event)
      }
    }
  }

  addEventListener (name, callback) {
    if (!this.listeners[name]) {
      this.listeners[name] = []
    }
    this.listeners[name].push(callback)
  };

  removeEventListener (name, callback) {
    if (this.listeners[name]) {
      const index = this.listeners[name].indexOf(callback)
      if (index > -1) {
        this.listeners[name].splice(index, 1)
      }
    }
  };

  _teardownVideo (video) {
    video.srcObject.getVideoTracks()[0].stop()
    video.srcObject = null
    video.src = null
  };
}
