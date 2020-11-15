const path = require('path')

module.exports = (env, argv) => {
  const externals = {
    three: {
      commonjs: 'three',
      commonjs2: 'three',
      amd: 'three',
      root: 'THREE' // indicates global variable
    },
    aframe: {
      commonjs: 'aframe',
      commonjs2: 'aframe',
      amd: 'aframe',
      root: 'AFRAME' // indicates global variable
    },
    stats: {
      commonjs: 'stats.js',
      commonjs2: 'stats.js',
      amd: 'stats.js',
      root: 'Stats' // indicates global variable
    }
  };
  const module = {
    rules: [
      {
        test: /\worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: { inline: 'no-fallback' }
        }
      }
    ]
  };
  const resolve = {
    extensions: ['.js']
  };
  return [{
    name: 'ARnft-aframe',
    entry: './src/index.aframe.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'ARnft.aframe.js',
      library: 'ARnft.aframe',
      libraryTarget: 'umd',
      // @see: https://github.com/webpack/webpack/issues/3929
      libraryExport: 'default',
      // @see: https://github.com/webpack/webpack/issues/6522
      globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    resolve,
    module,
    externals
  },
  {
  name: 'ARnft',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ARnft.js',
    library: 'ARnft',
    libraryTarget: 'umd',
    // @see: https://github.com/webpack/webpack/issues/3929
    libraryExport: 'default',
    // @see: https://github.com/webpack/webpack/issues/6522
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  resolve,
  module,
  externals
}]
}
