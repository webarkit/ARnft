import * as BABYLON from 'babylonjs'
import customEvent from 'custom-event'
import Utils from '../utils/Utils'

export default class BabylonjsRenderer {
  constructor (configData, canvasDraw, root) {
    this.root = root
    this.canvas = canvasDraw

    // load the 3D engine
    this.engine = new BABYLON.Engine(this.canvas, configData.renderer.antialias, { alpha: configData.renderer.alpha })
    this.engine.setSize(configData.videoSettings.width.max, configData.videoSettings.height)
    this.scene = new BABYLON.Scene(this.engine)
    this.scene.clearColor = new BABYLON.Color4(0.3, 0.3, 0.3, 0.0)
    this.scene.useRightHandedSystem = true
    this.camera = null
  }

  initRenderer () {
    this.camera = new BABYLON.UniversalCamera('camera1', new BABYLON.Vector3(0, 0, 0), this.scene)
    this.camera.attachControl(this.canvas, true)
    document.addEventListener('getProjectionMatrix', (ev) => {
      // Utils.setMatrix(this.camera.projectionMatrix, ev.detail.proj)
      this.camera.freezeProjectionMatrix(BABYLON.Matrix.FromArray(ev.detail.proj))
    })
    window.camera = this.camera

    const markerRoot = new BABYLON.AbstractMesh('markerRoot', this.scene)

    this.root = markerRoot

    this.root.visibility = 1.0

    document.addEventListener('getMatrixGL_RH', (ev) => {
      const matrix = Utils.interpolate(ev.detail.matrixGL_RH)
      this.root.updatePoseMatrix(BABYLON.Matrix.FromArray(matrix))
      console.log(this.root);
    })

    document.addEventListener('nftTrackingLost', () => {
      this.root.visibility = 0.0
    })

    document.addEventListener('getWindowSize', (ev) => {
      this.engine.setSize(ev.detail.sw, ev.detail.sh)
    })

    const setInitBabylonjsRenderer = new CustomEvent('onInitBabylonjsRendering', { detail: { engine: this.engine, scene: this.scene,  camera: this.camera, root: this.root } })
    document.dispatchEvent(setInitBabylonjsRenderer)
  }

  draw () {
    this.engine.runRenderLoop(() => {
      this.scene.render()
    })
  }
}
