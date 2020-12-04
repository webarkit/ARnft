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
  static async getUserMedia (configData) {
    const video = document.getElementById('video')
    const facing = configData.videoSettings.facingMode || 'environment'
    const onError = configData.onError || ((err) => { console.error('ARnft internal getUserMedia', err) })
    let stream = null
    const constraints = {}
    const mediaDevicesConstraints = {}
    const success = (stream) => {
      // DEPRECATED: don't use window.URL.createObjectURL(stream) any longer it might be removed soon. Only there to support old browsers src: https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
      if (window.URL.createObjectURL) {
        // Need to add try-catch because iOS 11 fails to createObjectURL from stream. As this is deprecated  we should remove this soon
        try {
          video.srcObject = stream // DEPRECATED: this feature is in the process to being deprecated
        } catch (ex) {
          // Nothing todo, the purpose of this is to remove an error from the console on iOS 11
        }
      }
      video.srcObject = stream // This should be used instead. Which has the benefit to give us access to the stream object
      video.autoplay = true
      video.playsInline = true
    }
    if (configData.videoSettings.width) {
      mediaDevicesConstraints.width = configData.videoSettings.width
      if (typeof configData.videoSettings.width === 'object') {
        if (configData.videoSettings.width.max) {
          constraints.maxWidth = configData.videoSettings.width.max
        }
        if (configData.videoSettings.width.min) {
          constraints.minWidth = configData.videoSettings.width.min
        }
      } else {
        constraints.maxWidth = configData.videoSettings.width
      }
    }

    if (configData.videoSettings.height) {
      mediaDevicesConstraints.height = configData.videoSettings.height
      if (typeof configData.videoSettings.height === 'object') {
        if (configData.videoSettings.height.max) {
          constraints.maxHeight = configData.videoSettings.height.max
        }
        if (configData.videoSettings.height.min) {
          constraints.minHeight = configData.videoSettings.height.min
        }
      } else {
        constraints.maxHeight = configData.videoSettings.height
      }
    }

    mediaDevicesConstraints.facingMode = facing
    mediaDevicesConstraints.deviceId = configData.videoSettings.deviceId

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
    const hdConstraints = {
      audio: false,
      video: constraints
    }

    if (navigator.mediaDevices || window.MediaStreamTrack.getSources) {
      if (navigator.mediaDevices) {
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: mediaDevicesConstraints
          })
          success(stream)
        } catch (error) {
          console.error(error)
        }
      } else {
        // This function of accessing the media device is deprecated and outdated and shouldn't be used anymore.
        window.MediaStreamTrack.getSources((sources) => {
          let facingDir = mediaDevicesConstraints.facingMode
          if (facing && facing.exact) {
            facingDir = facing.exact
          }
          for (let i = 0; i < sources.length; i++) {
            if (sources[i].kind === 'video' && sources[i].facing === facingDir) {
              hdConstraints.video.mandatory.sourceId = sources[i].id
              break
            }
          }
          if (facing && facing.exact && !hdConstraints.video.mandatory.sourceId) {
            onError('Failed to get camera facing the wanted direction')
          } else {
            if (navigator.getUserMedia) {
              stream = navigator.getUserMedia(hdConstraints, success, onError)
            } else {
              onError('navigator.getUserMedia is not supported on your browser')
            }
          }
        })
      }
    } else {
      if (navigator.getUserMedia) {
        navigator.getUserMedia(hdConstraints, success, onError)
      } else {
        onError('navigator.getUserMedia is not supported on your browser')
      }
    }

    return new Promise(resolve => {
      video.onloadedmetadata = () => {
        resolve(video)
      }
    })
  }

  static _startWorker (container, markerUrl, video, inputWidth, inputHeight, canvasDraw, renderUpdate, trackUpdate, configData) {
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
        const matrixGLrhEvent = new CustomEvent('getMatrixGL_RH', { detail: { matrixGL_RH: world } })
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
