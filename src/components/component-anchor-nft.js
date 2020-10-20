import * as AFRAME from 'aframe'

AFRAME.registerComponent('arnft-anchor', {
  schema: {
    descriptorsUrl: {
      type: 'string',
      default: 'pinball'
    }
  },
  init: function () {
    var arnftSystem = this.el.sceneEl.systems.arnft
    console.log(arnftSystem);
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
