  self.onmessage = (e) => {
    const msg = e.data
    switch (msg.type) {
      case 'load': {
        load(msg)
        return
      }
      case 'process': {
        next = msg.imagedata
        process()
      }
    }
  }

  let next = null
  let ar = null
  let markerResult = null

  const load = (msg) => {
    const basePath = self.origin
    let artoolkitUrl, cameraParamUrl, nftMarkerUrl
    console.debug('Base path:', basePath)
    // test if the msg.param (the incoming url) is an http or https path
    const regexA = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/igm
    const reA = regexA.test(msg.artoolkitUrl)
    if (reA == true) {
      if (msg.addPath) {
        artoolkitUrl = basePath + '/' + msg.addPath + '/' + msg.artoolkitUrl
      } else {
        artoolkitUrl = msg.artoolkitUrl
      }
    } else if (reA == false) {
      if (msg.addPath) {
        console.debug('addPath exist: ', msg.addPath)
        artoolkitUrl = basePath + '/' + msg.addPath + '/' + msg.artoolkitUrl
      } else {
        artoolkitUrl = basePath + '/' + msg.artoolkitUrl
      }
    }
    console.debug('Importing WASM lib from: ', artoolkitUrl)

    importScripts(artoolkitUrl)

    self.addEventListener('artoolkitNFT-loaded', function () {
      const onLoad = () => {
        ar = new ARControllerNFT(msg.pw, msg.ph, param)
        const cameraMatrix = ar.getCameraMatrix()

        ar.addEventListener('getNFTMarker', (ev) => {
          markerResult = { type: 'found', matrixGL_RH: JSON.stringify(ev.data.matrixGL_RH), proj: JSON.stringify(cameraMatrix) }
        })
        // after the ARController is set up, we load the NFT Marker
        const regexM = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/igm
        const reM = regexM.test(msg.marker)
        if (reM == true) {
          if (msg.addPath) {
            nftMarkerUrl = basePath + '/' + msg.addPath + '/' + msg.marker
          } else {
            nftMarkerUrl = msg.marker
          }
        } else if (reM == false) {
          if (msg.addPath) {
            nftMarkerUrl = basePath + '/' + msg.addPath + '/' + msg.marker
          } else {
            nftMarkerUrl = basePath + '/' + msg.marker
          }
        }
        console.debug('Loading NFT marker at: ', nftMarkerUrl)
        ar.loadNFTMarker(nftMarkerUrl, (nft) => {
          postMessage({ type: 'nftData',  nft: JSON.stringify(nft) })
          ar.trackNFTMarkerId(nft.id)
          console.log('loadNFTMarker -> ', nft.id)
          console.log(nft);
          postMessage({ type: 'endLoading', end: true }),
          (err) => {
            console.error('Error in loading marker on Worker', err)
          }
        })

        postMessage({ type: 'loaded', proj: JSON.stringify(cameraMatrix) })
      }

      const onError = (error) => {
        console.error(error)
      }
      const regexC = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/igm
      const reC = regexC.test(msg.camera_para)
      if (reC == true) {
        if (msg.addPath) {
          cameraParamUrl = basePath + '/' + msg.addPath + '/' + msg.camera_para
        } else {
          cameraParamUrl = msg.camera_para
        }
      } else if (reC == false) {
        if (msg.addPath) {
          cameraParamUrl = basePath + '/' + msg.addPath + '/' + msg.camera_para
        } else {
          cameraParamUrl = basePath + '/' + msg.camera_para
        }
      }
      console.debug('Loading camera at:', cameraParamUrl)
      // we cannot pass the entire ARControllerNFT, so we re-create one inside the Worker, starting from camera_param
      const param = new ARCameraParamNFT(cameraParamUrl, onLoad, onError)
    })
  }

  const process = () => {
    markerResult = null

    if (ar && ar.process) {
      ar.process(next)
    }

    if (markerResult) {
      postMessage(markerResult)
    } else {
      postMessage({ type: 'not found' })
    }

    next = null
  }
