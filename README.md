# ARnft - WebAR with NFT

<img src="examples/Data/arNFT-logo.gif" width="250px"/>

A small javascript library to develop WebAR apps. It is based on [jsartoolkitNFT](https://github.com/kalwalt/jsartoolkitnFT) a lighter version of jsartoolkit5 only with **NFT** markerless technology. It use [ARnft-threejs](https://github.com/webarkit/ARnft-threejs) for the rendering part.

## Start using it !

:one: &nbsp; Clone the repository:

`git clone https://github.com/webarkit/ARnft.git`

:two: &nbsp; Install the npm packages:

`yarn install`

:three: &nbsp; Run the node server:

`http-server . -p 8000`

:four: &nbsp; Go to the example:

http://localhost:8000/examples/arNFT_example.html

:five: &nbsp; Point your device 📱 to the pinball image 👇 a red cube will appear !

<img src= https://raw.githubusercontent.com/artoolkitx/artoolkit5/master/doc/Marker%20images/pinball.jpg width="250"/>

## Usage

Download the zipped dist lib package from the releases page: [webarkit/ARnft/releases](https://github.com/webarkit/ARnft/releases)
and use it in a script tag:
```html
<script src="path/to/dist/ARnft.js"></script>
```
or you can use raw.githack services (for development):

```html
<script src="https://raw.githack.com/webarkit/ARnft/master/dist/ARnft.js"></script>
```

or raw.cdn (for production, you need to add the hash):

```html
<script src="https://rawcdn.githack.com/webarkit/ARnft/<hash>/dist/ARnft.js"></script>
```

or if you want to import as a module with npm:

```javascript
import { ARnft } from '@webarkit/ar-nft';
```

## Examples
Test the examples in the `/examples` folder:
- `arNft_container_example.html` Example with an alternative container.
- `arNFT_event_example.html` Example with objVisibility and eventListener.
- `arNFT_example.html` The simplest example displaying a red cube.
- `arNFT_gltf_brave_robot_example.html` More advanced example with a gltf model and threejs events.
- `arNFT_gltf_example.html` Example showing a gltf model (Duck).
- `arNFT_image_example.html` Example showing an image.
- `arNFT_video_example.html` Example showing a video.

You can try also a live example with React at this link: [kalwalt.github.io/ARnft-ES6-react/](https://kalwalt.github.io/ARnft-ES6-react/)

## Documentation
You can build the docs with this command:
`yarn docs`
Then run a live server and go to the docs folder. 

## Features

- **NFT** (**N**atural **F**eature **T**racking) Markers, read my article: [NFT natural feature tracking with jsartoolkit5](https://www.kalwaltart.com/blog/2020/01/21/nft-natural-feature-tracking-with-jsartoolkit5/)
- **ES6** standard. You can install it as a npm package and use it as a module (experimental). Install it with:

```
npm i @webarkit/ar-nft
```

- Configuration data in an External .json file.
