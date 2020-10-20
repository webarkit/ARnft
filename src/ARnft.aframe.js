import * as AFRAME from 'aframe'
import Stats from 'stats.js'
import Container from './utils/html/Container'
import Utils from './utils/Utils'

AFRAME.registerSystem('arnft', {
  schema: {

  },

  init: function () {
    var _this = this
    // trying to jnect configData for now, it will became "schema" parameters
    let configData = {
      artoolkitUrl: "libs/jsartoolkitNFT/build/artoolkitNFT_wasm.js",
      cameraPara: "examples/Data/camera_para.dat",
      videoSettings: {
        facingMode: "environment"
      },
      loading: {
        logo: {
          src: "Data/arNFT-logo.gif",
          alt: "arNFT.js logo"
        },
        loadingMessage: "Loading, please wait..."
      },
    }
    this.el.sceneEl.addEventListener('renderstart', function () {
      let scene = _this.el.sceneEl.object3D
      let camera = _this.el.sceneEl.camera
      let renderer = _this.el.sceneEl.renderer
      let stats = true

      Container.createLoading(configData)
      Container.createStats(stats)
      const containerObj = Container.createContainer()
      const container = containerObj.container
      const canvas = containerObj.canvas
      let markerUrl = "examples/DataNFT/pinball"
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
          scene,
          configData)
      })
    })
  }
})
