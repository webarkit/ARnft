/*
 *  Container.ts
 *  ARnft
 *
 *  This file is part of ARnft - WebARKit.
 *
 *  ARnft is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  ARnft is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with ARnft.  If not, see <http://www.gnu.org/licenses/>.
 *
 *  As a special exception, the copyright holders of this library give you
 *  permission to link this library with independent modules to produce an
 *  executable, regardless of the license terms of these independent modules, and to
 *  copy and distribute the resulting executable under terms of your choice,
 *  provided that you also meet, for each linked independent module, the terms and
 *  conditions of the license of that module. An independent module is a module
 *  which is neither derived from nor based on this library. If you modify this
 *  library, you may extend this exception to your version of the library, but you
 *  are not obligated to do so. If you do not wish to do so, delete this exception
 *  statement from your version.
 *
 *  Copyright 2021 WebARKit.
 *
 *  Author(s): Walter Perdan @kalwalt https://github.com/kalwalt
 *
 */
import { ConfigData } from "../../config/ConfigData"
export default class Container {
  /**
   * Create a Container for the app. Basically a div, with inside a canvas and a video.
   * You can optionally skip the creation, just set the variable `create` to false,
   * in your config.json file.
   * @param configData the config.json file url.
   * @returns the container object.
   */
  static createContainer (configData: ConfigData) {
    if (configData.container.create) {
      const container = document.createElement('div')
      container.id = 'app'
      const canvas = document.createElement('canvas')
      canvas.id = 'canvas'
      const video = document.createElement('video')
      video.id = 'video'
      video.setAttribute('autoplay', '')
      video.setAttribute('muted', '')
      video.setAttribute('playsinline', '')
      container.appendChild(video)
      container.appendChild(canvas)
      const loading = document.getElementById('loading')
      document.body.insertBefore(container, loading)
      var containerEvent = new Event('containerEvent')
      document.dispatchEvent(containerEvent)
      return { container: container, canvas: canvas, video: video }   
    } else {
      const container = document.getElementById(configData.container.containerName)
      const canvas = document.getElementById(configData.container.canvasName)
      var containerEvent = new Event('containerEvent')
      document.dispatchEvent(containerEvent)
      return { container: container, canvas: canvas }
    }
  }
  
  /**
   * Create  the necessary html for the stats.
   * @param create true or false.
   * @param configData the config.json file url.
   */
  static createStats (create: boolean, configData: ConfigData) {
    if (create && configData.stats.createHtml) {
      const stats = document.createElement('div')
      stats.id = 'stats'
      stats.className = 'ui stats'
      const stats1 = document.createElement('div')
      stats1.id = 'stats1'
      stats1.className = 'stats-item'
      const stats1p = document.createElement('p')
      stats1p.className = 'stats-item-title'
      stats1p.innerText = 'Main'
      stats1.appendChild(stats1p)
      stats.appendChild(stats1)
      const stats2 = document.createElement('div')
      stats2.id = 'stats2'
      stats2.className = 'stats-item'
      const stats2p = document.createElement('p')
      stats2p.className = 'stats-item-title'
      stats2p.innerText = 'Worker'
      stats2.appendChild(stats2p)
      stats.appendChild(stats2)
      const loading = document.getElementById('loading')
      document.body.insertBefore(stats, loading)
    }
  }
  
  /**
   * Create the html to display the loading message.
   * @param configData the config.json file url.
   */
  static createLoading (configData: ConfigData) {
    if (configData.loading.create) {
      const loader = document.createElement('div')
      loader.id = 'loading'
      const logo = document.createElement('img')
      logo.src = configData.loading.logo.src
      logo.alt = configData.loading.logo.alt
      const loadingMessage = document.createElement('span')
      loadingMessage.setAttribute('class', 'loading-text')
      loadingMessage.innerText = configData.loading.loadingMessage
      loader.appendChild(logo)
      loader.appendChild(loadingMessage)
      document.body.insertBefore(loader, document.body.firstChild)
    }
  }
}
