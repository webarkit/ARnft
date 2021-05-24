import axios from 'axios'
import Worker from './Worker.js'
import CustomEvent from 'custom-event'

const trackedMatrix = {
  // for interpolation
  delta: [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0
  ],
  interpolated: [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0
  ]
}

export default class Utils {
  static _startWorker (container, markerUrl, video, inputWidth, inputHeight, canvasDraw, renderUpdate, trackUpdate, configData, uuid) {
    let vw, vh
    let sw, sh
    let pscale, sscale
    let w, h
    let pw, ph
    let ox, oy
    let worker

    const canvasProcess = document.createElement('canvas')
    const contextProcess = canvasProcess.getContext('2d')

    const load = () => {
      vw = inputWidth
      vh = inputHeight

      pscale = 320 / Math.max(vw, (vh / 3) * 4)
      sscale = this.isMobile() ? window.outerWidth / inputWidth : 1

      sw = vw * sscale
      sh = vh * sscale

      w = vw * pscale
      h = vh * pscale
      pw = Math.max(w, (h / 3) * 4)
      ph = Math.max(h, (w / 4) * 3)
      ox = (pw - w) / 2
      oy = (ph - h) / 2
      canvasProcess.style.clientWidth = pw + 'px'
      canvasProcess.style.clientHeight = ph + 'px'
      canvasProcess.width = pw
      canvasProcess.height = ph

      const setWindowSizeEvent = new CustomEvent('getWindowSize', { detail: { sw: sw, sh: sh } })
      document.dispatchEvent(setWindowSizeEvent)

      worker = new Worker()

      worker.postMessage({
        type: 'load',
        pw: pw,
        ph: ph,
        camera_para: configData.cameraPara,
        marker: markerUrl,
        artoolkitUrl: configData.artoolkitUrl,
        addPath: configData.addPath
      })

      worker.onmessage = (ev) => {
        const msg = ev.data
        switch (msg.type) {
          case 'loaded': {
            const proj = JSON.parse(msg.proj)
            const ratioW = pw / w
            const ratioH = ph / h
            proj[0] *= ratioW
            proj[4] *= ratioW
            proj[8] *= ratioW
            proj[12] *= ratioW
            proj[1] *= ratioH
            proj[5] *= ratioH
            proj[9] *= ratioH
            proj[13] *= ratioH
            const projectionMatrixEvent = new CustomEvent('getProjectionMatrix', { detail: { proj: proj } })
            document.dispatchEvent(projectionMatrixEvent)
            break
          }
          case 'endLoading': {
            if (msg.end === true) {
              // removing loader page if present
              const loader = document.getElementById('loading')
              if (loader) {
                loader.querySelector('.loading-text').innerText = 'Start the tracking!'
                setTimeout(function () {
                  loader.parentElement.removeChild(loader)
                }, 2000)
              }
            }
            break
          }
          case 'nftData': {
            const nft = JSON.parse(msg.nft)
            const nftEvent = new CustomEvent('getNFTData', { detail: { dpi: nft.dpi, width: nft.width, height: nft.height } })
            document.dispatchEvent(nftEvent)
            break
          }
          case 'found': {
            found(msg)
            break
          }
          case 'not found': {
            found(null)
            break
          }
        }
        trackUpdate()
        process()
      }
    }

    let world

    const found = (msg) => {
      if (!msg) {
        if (world) {
          world = null
          const nftTrackingLostEvent = new CustomEvent('nftTrackingLost')
          document.dispatchEvent(nftTrackingLostEvent)
        }
      } else {
        world = JSON.parse(msg.matrixGL_RH)
        const matrixGLrhEvent = new CustomEvent('getMatrixGL_RH-' + uuid, { detail: { matrixGL_RH: world } })
        document.dispatchEvent(matrixGLrhEvent)
      }
    }

    const process = () => {
      contextProcess.fillStyle = 'black'
      contextProcess.fillRect(0, 0, pw, ph)
      contextProcess.drawImage(video, 0, 0, vw, vh, ox, oy, w, h)

      const imageData = contextProcess.getImageData(0, 0, pw, ph)
      worker.postMessage({ type: 'process', imagedata: imageData }, [
        imageData.data.buffer
      ])
    }

    const tick = () => {
      renderUpdate()
      window.requestAnimationFrame(tick)
    }

    load()
    tick()
    process()
  }

  static interpolate (world) {
    const interpolationFactor = 24

    // interpolate matrix
    for (let i = 0; i < 16; i++) {
      trackedMatrix.delta[i] = world[i] - trackedMatrix.interpolated[i]
      trackedMatrix.interpolated[i] =
                  trackedMatrix.interpolated[i] +
                  trackedMatrix.delta[i] / interpolationFactor
    }
    return trackedMatrix.interpolated
  }

  static isMobile () {
    return /Android|mobile|iPad|iPhone/i.test(navigator.userAgent)
  }

  static setMatrix (matrix, value) {
    const array = []
    for (const key in value) {
      array[key] = value[key]
    }
    if (typeof matrix.elements.set === 'function') {
      matrix.elements.set(array)
    } else {
      matrix.elements = [].slice.call(array)
    }
  };

  static async jsonParser (requestURL) {
    const response = await axios.get(requestURL, { responseType: 'json' })
      .then((res) => { return res.data })
      .catch((error) => { console.error(error) })
    return response
  }

  static async jsonObjParser (obj) {
    const response = await obj
    return response
  }
}
