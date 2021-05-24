import Utils from './utils/Utils'
import Container from './utils/html/Container'
import Stats from 'stats.js'
import { v4 as uuidv4 } from 'uuid'
import CameraViewRenderer from './renderers/CameraViewRenderer'
import packageJson from '../package.json'
const { version } = packageJson

export default class ARnft {
  constructor (width, height, config) {
    this.width = width
    this.height = height
    this.config = config
    this.listeners = {}
    this.uuid = uuidv4()
    this.version = version
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

      CameraViewRenderer.getUserMedia(configData).then((video) => {
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
          configData,
          this.uuid)
      })
    })
    return this
  }

  static async init (width, height, markerUrl, config, stats, camera) {
    const nft = new ARnft(width, height, config)
    return await nft._initialize(markerUrl, stats, camera)
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
