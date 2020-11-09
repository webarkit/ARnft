import * as BABYLON from 'babylonjs'
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
    this.root.markerMatrix = new Float64Array(12)

    // create a basic light, aiming 0,1,0 - meaning, to the sky
    const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene)

    document.addEventListener('getMatrixGL_RH', (ev) => {
      this.root.visibility = 1.0
      const matrix = Utils.interpolate(ev.detail.matrixGL_RH)
      //this.root.markerMatrix = matrix
      this.root.updatePoseMatrix(BABYLON.Matrix.FromArray(matrix))
      console.log(this.root);
    })

    // create a box
    var box = new BABYLON.Mesh.CreateBox('box1', { height: 100 }, this.scene)
    //box.isVisible = true;
    this.root.addChild(box)

    document.addEventListener('nftTrackingLost', () => {
      this.root.visibility = 1.0
    })

    //this.root.visible = false

    // this.scene.add(this.root)
    document.addEventListener('getWindowSize', (ev) => {
      this.engine.setSize(ev.detail.sw, ev.detail.sh)
    })
  }

  draw () {
    this.engine.runRenderLoop(() => {
      this.scene.render()
    })
  }

  getScene() {
    return this.scene
  }

  getRoot() {
    return this.root
  }

  static getScene() {
    // this may kill the app!
    //return this.getScene()

    return {}
  }

  static getRoot() {
    return this.getRoot()
  }
}
