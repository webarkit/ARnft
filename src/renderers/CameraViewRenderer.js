export default class CameraViewRenderer {
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
}