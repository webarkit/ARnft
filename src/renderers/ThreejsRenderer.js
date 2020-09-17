import * as THREE from 'three'
import Utils from '../utils/Utils'

export default class ThreejsRenderer {
  constructor (configData, canvasDraw, root) {
    this.root = root
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvasDraw,
      alpha: configData.renderer.alpha,
      antialias: configData.renderer.antialias,
      precision: configData.renderer.precision
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.scene = new THREE.Scene()
    this.camera = new THREE.Camera()
  }

  initRenderer () {
    this.camera.matrixAutoUpdate = false
    document.addEventListener('getProjectionMatrix', (ev) => {
      Utils.setMatrix(this.camera.projectionMatrix, ev.detail.proj)
    })
    this.scene.add(this.camera)

    const light = new THREE.AmbientLight(0xffffff)
    this.scene.add(light)

    document.addEventListener('getMatrixGL_RH', (ev) => {
      this.root.visible = true
      const matrix = Utils.interpolate(ev.detail.matrixGL_RH)
      Utils.setMatrix(this.root.matrix, matrix)
    })

    document.addEventListener('nftTrackingLost', () => {
      this.root.visible = false
    })

    this.root.visible = false

    this.scene.add(this.root)
    document.addEventListener('getWindowSize', (ev) => {
      this.renderer.setSize(ev.detail.sw, ev.detail.sh)
    })
  }

  draw () {
    this.renderer.render(this.scene, this.camera)
  }

  // tick to be implemented
  /* tick () {
    this.draw()
    window.requestAnimationFrame(this.tick)
  }*/
}
