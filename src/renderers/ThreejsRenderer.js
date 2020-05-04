import * as THREE from 'three'

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

    this.scene.add(this.camera)

    const light = new THREE.AmbientLight(0xffffff)
    this.scene.add(light)

    this.scene.add(this.root)
    this.renderer.setSize(640, 480)
  }

  draw () {
    this.renderer.render(this.scene, this.camera)
  }

  /*tick () {
    this.draw()
    window.requestAnimationFrame(this.tick)
  }*/
}
