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
    console.log(this.data)
    let arnftSystem = this.el.sceneEl.systems.arnft
    console.log(arnftSystem)

    let source = this._sourceAframe = new ARnftSourceAframe()
    source.setMarkerUrl(_this.data.descriptorsUrl)
    console.log(this._sourceAframe)
    console.log(arnftSystem)

    _this.el.object3D.visible = true
    console.log(this)

    let camera = arnftSystem.sceneEl.camera
    console.log('camera inside component', camera)
    camera.matrixAutoUpdate = false
    document.addEventListener('getProjectionMatrix', (ev) => {
      Utils.setMatrix(camera.projectionMatrix, ev.detail.proj)
    })

    let rootEl = arnftSystem.sceneEl.object3D
    let matrixEl = rootEl.matrix
    console.log("aframe matrix is: ", matrixEl)
    document.addEventListener('getMatrixGL_RH', (ev) => {
      rootEl.visible = true
      const matrix = Utils.interpolate(ev.detail.matrixGL_RH)
      Utils.setMatrix(matrixEl, matrix)
    })
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
