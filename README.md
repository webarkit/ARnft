![github releases](https://flat.badgen.net/github/release/webarkit/ARnft)
![github stars](https://flat.badgen.net/github/stars/webarkit/ARnft)
![github forks](https://flat.badgen.net/github/forks/webarkit/ARnft)
![npm package version](https://flat.badgen.net/npm/v/@webarkit/ar-nft)
![Dependabot status](https://img.shields.io/badge/Dependabot-enabled-02569B?logo=dependabot)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![CI](https://github.com/webarkit/ARnft/actions/workflows/CI.yml/badge.svg)](https://github.com/webarkit/ARnft/actions/workflows/CI.yml)
[![Build ARnft CI](https://github.com/webarkit/ARnft/actions/workflows/build.yml/badge.svg)](https://github.com/webarkit/ARnft/actions/workflows/main.yml)
![twitter](https://flat.badgen.net/badge/twitter/WebarkitO/follow)

# 🖼️ ARnft - WebAR with NFT

<img alt="ARnft official logo" src="examples/Data/arNFT-logo.gif" width="250px"/>

A small javascript library to develop WebAR apps. It is based on [jsartoolkitNFT](https://github.com/webarkit/jsartoolkitNFT) a lighter version of jsartoolkit5 only with **NFT** markerless technology. It uses [ARnft-threejs](https://github.com/webarkit/ARnft-threejs) for the rendering part.

## 🚀 Start using it !

:one: &nbsp; Clone the repository:

`git clone https://github.com/webarkit/ARnft.git`

:two: &nbsp; Install the npm packages with yarn:

`yarn install`

or with npm:

`npm install`

:three: &nbsp; Run the node server:

`npx http-server`

:four: &nbsp; Go to the examples:

http://localhost:8000/examples/arNFT_example.html

:five: &nbsp; Point your device 📱 to the pinball image 👇 a red cube will appear !

<img alt="pinball image" src= https://raw.githubusercontent.com/artoolkitx/artoolkit5/master/doc/Marker%20images/pinball.jpg width="250"/>

## 🏎️ SIMD Feature

The ARnft library now includes support for SIMD (Single Instruction, Multiple Data) to enhance performance by parallelizing data processing tasks. This feature is particularly useful for applications requiring high computational power, such as augmented reality.

To see the SIMD feature in action, you can try the `arNFT_simd_example.html` example:

http://localhost:8000/examples/arNFT_example.simd.html

## 📦 Usage

Download the zipped dist lib package from the releases page: [webarkit/ARnft/releases](https://github.com/webarkit/ARnft/releases)
and import it as a module:

```html
<script type="importmap">
    {
        "imports": {
            "three": "./js/third_party/three.js/three.module.min.js",
            "arnft-threejs": "./js/ARnftThreejs.mjs",
            "arnft": "./../dist/ARnft.mjs"
        }
    }
</script>

<script type="module">
    import * as THREE from "three";
    import arnft from "arnft";
    const { ARnft } = arnft;
    import ARnftThreejs from "arnft-threejs";
    const { SceneRendererTJS, NFTaddTJS } = ARnftThreejs;

    // Follow code for rendering ect. see the examples.
```

or you can use raw.githack services (for development):

```html
<script type="importmap">
    {
        "imports": {
            "three": "https://cdn.jsdelivr.net/npm/three@<version>/build/three.module.min.js",
            "arnft-threejs": "https://raw.githack.com/webarkit/ARnft-threejs/master/dist/ARnftThreejs.mjs",
            "arnft": "https://raw.githack.com/webarkit/ARnft/master/dist/ARnft.mjs"
        }
    }
</script>

<script type="module">
// as the above code snippet
```

or raw.cdn (for production, you need to add the hash):

```
// As the examples above import three.js, Arnft-threejs and Arnft in an importmap
"arnft": "https://rawcdn.githack.com/webarkit/ARnft/<hash>/dist/ARnft.js"
```

or if you want to import as a module with npm:

```
// In your package.json:
"devDependencies": {
    "@webarkit/ar-nft": "^0.14.11"
},
```
```javascript
// Then in your .ts or .js file
import { ARnft } from "@webarkit/ar-nft";
```

## 🧪 Examples

Test the examples in the `/examples` folder:

- `arNFT_autoupdate_example.html` Example with the autoupdate routine.
- `arNFT_container_example.html` Example with an alternative container.
- `arNFT_event_example.html` Example with objVisibility and eventListener.
- `arNFT_example.html` The simplest example displaying a red cube.
- `arNFT_simd_example.html` Example with SIMD feature.
- `arNFT_gltf_brave_robot_example.html` More advanced example with a gltf model and threejs events.
- `arNFT_gltf_example.html` Example showing a gltf model (Duck).
- `arNFT_gltf_flamingo_example.html` Example showing an animated gltf model (Flamingo).
- `arNFT_image_example.html` Example showing an image.
- `arNFT_initialize_raw_example.html` Example using the custom initialize function for the CameraRenderer (video).
- `arNFT_multi_example.html` Example with multi NFT markers.
- `arNFT_multi_dispose_example.html` Example with multi NFT markers and disposing worker.
- `arNFT_multi_one_worker_example.html` Example with multi NFT markers in one Worker.
- `arNFT_video_example.html` Example showing a video.
- `arNFT_zft_example.html` Example showing a simple cube, loading a .zft file.

You can try also a live example with React at this link: [kalwalt.github.io/ARnft-ES6-react/](https://kalwalt.github.io/ARnft-ES6-react/)

## 💰 Donate
Donate to **ARnft** ![opencollective](https://flat.badgen.net/badge/icon/opencollective?icon=opencollective&label) ![backers](https://flat.badgen.net/opencollective/backers/arnft)

## 📚 Documentation

You can build the docs with this command:
`yarn docs`
Then run a live server and go to the docs' folder.

## 🌟 Features

- **NFT** (**N**atural **F**eature **T**racking) Markers, read my article: [NFT natural feature tracking with jsartoolkit5](https://www.kalwaltart.com/blog/2020/01/21/nft-natural-feature-tracking-with-jsartoolkit5/)
- **ZFT** compressed **NFT** markers with .zft extension, with faster loading time.
- **SIMD** (Single Instruction, Multiple Data) support for enhanced performance.
- **ES6** standard. You can install it as a npm package and use it as a module (experimental). Install it with npm:

```
npm i @webarkit/ar-nft
```

or with yarn:

```
yarn add @webarkit/ar-nft
```

- Configuration data in an external .json file.

- Filtering of the matrix with the **O**ne**E**uro**F**ilter.

## 🛠️ Format the code with Prettier
We are using [Prettier](https://prettier.io/) as code formatter. You only need to run `yarn format` to write the formatted code with Prettier. If you want to check if the code is well formatted run instead: `yarn format-check`

## 🔧 Build
If you make changes to the code, run these commands to build the distribution library, install all the dependencies with:
```
yarn --include=dev i
```
For a development build, that is the code will be rebuilt for every change, run:
```
yarn dev-ts
```
Instead for a production build, with more optimizations in the code and smaller size, run:
```
yarn build-ts
```