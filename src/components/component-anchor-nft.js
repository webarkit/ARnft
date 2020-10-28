import * as AFRAME from 'aframe'
import ARnftSourceAframe from '../ARnft-source-aframe'
import Utils from '../utils/Utils'

AFRAME.registerComponent('arnft-anchor', {
  schema: {
    descriptorsUrl: {
      type: 'string',
      default: 'pinball'
    }
  },
  init: function () {
    var _this = this
    // not sure if this 'container' (<body element) is needed
    const container = this.el.sceneEl.parentNode;
    let vw, vh; // display css width, height
    const videoRatio = 4 / 3;
    const containerRatio = container.clientWidth / container.clientHeight;
    if (videoRatio > containerRatio) {
      vh = container.clientHeight;
      vw = vh * videoRatio;
    } else {
      vw = container.clientWidth;
      vh = vw / videoRatio;
    }
    // end  of 'container' comment
    let arnftSystem = this.el.sceneEl.systems.arnft

    let source = this._sourceAframe = new ARnftSourceAframe()
    source.setMarkerUrl(_this.data.descriptorsUrl)

    //_this.el.object3D.visible = true

    let camera = arnftSystem.sceneEl.camera
    //console.log('camera inside component', camera)
    camera.matrixAutoUpdate = false
    //console.log(arnftSystem.sceneEl.canvas.height);
    document.addEventListener('getProjectionMatrix', (ev) => {
      // we need to setup the camera?
      const projM = new AFRAME.THREE.Matrix4()

      Utils.setMatrix(projM, ev.detail.proj)
      console.log('projM is: ', projM);
      const fov = 2 * Math.atan(1/projM[5] / vh * container.clientHeight ) * 180 / Math.PI; // vertical fov
      const near = projM[14] / (projM[10] - 1.0);
      const far = projM[14] / (projM[10] + 1.0);
      const ratio = projM[5] / projM[0]; // (r-l) / (t-b)
      //console.log("loaded proj: ", proj, ". fov: ", fov, ". near: ", near, ". far: ", far, ". ratio: ", ratio);
      const newRatio = container.clientWidth / container.clientHeight;
      //console.log("newCam", fov, ratio, newRatio);
      const newCam = new AFRAME.THREE.PerspectiveCamera(fov, newRatio, near, far);
      camera.projectionMatrix = newCam.projectionMatrix
    })

    let rootEl = arnftSystem.sceneEl.object3D
    rootEl.visible = true
    let matrixEl = rootEl.matrix
    //rootEl.matrixAutoUpdate = false
    //console.log("aframe matrix is: ", matrixEl)
    document.addEventListener('getMatrixGL_RH', (ev) => {
      //console.log(ev);
      rootEl.visible = true
      const matrix = Utils.interpolate(ev.detail.matrixGL_RH)
      Utils.setMatrix(matrixEl, matrix)
      //rootEl.matrixAutoUpdate = false
      //console.log(matrix);
    })
    console.log(rootEl.visible);
  }
})

AFRAME.registerPrimitive('ar-nft', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        'arnft-anchor': {},
    },
    mappings: {
        'url': 'arnft-anchor.descriptorsUrl',
    },
}))
