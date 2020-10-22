import * as AFRAME from 'aframe'
import ARnftSourceAframe from '../ARnft-source-aframe'

AFRAME.registerComponent('arnft-anchor', {
  schema: {
    descriptorsUrl: {
      type: 'string',
      default: 'pinball'
    }
  },
  init: function () {
    var _this = this
    console.log(this.data);
    let arnftSystem = this.el.sceneEl.systems.arnft
    console.log(arnftSystem);
    //var markerParameters = Object.assign({}, ARnftSourceAframe.defaultMarkerParameters)
    let source = this._sourceAframe = new ARnftSourceAframe()
    source.setMarkerUrl(_this.data.descriptorsUrl)
    console.log(this._sourceAframe);
      console.log(arnftSystem);
    //let markerUrl = this.data.descriptorsUrl;
    _this.el.object3D.visible = true
    console.log(this);

  },
})

AFRAME.registerPrimitive('ar-nft', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        'arnft-anchor': {},
    },
    mappings: {
        'url': 'arnft-anchor.descriptorsUrl',
    },
}))
