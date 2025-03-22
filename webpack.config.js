const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  let devtool = false;
  if (argv.mode === 'development') {
    devtool = 'inline-source-map';
  }
  console.log(`${argv.mode} build`);
  const module= {
    rules: [
      {
        test: /\.worker\.(c|m)?ts$/i,
        use: {
          loader: 'worker-loader',
          options: { inline: 'no-fallback' }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  };
  const resolve = {
    alias: {
      jsartoolkitnft: '@webarkit/jsartoolkit-nft'
    },
    extensions: ['.tsx', '.ts', '.js'],
  };
  const optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
                             parallel: true,
                             extractComments: false
                           }),
        ],
      };
  return [{
    name: "ARnft",
    entry: './src/index.ts',
    devtool,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'ARnft.js',
      library: 'ARnft',
      libraryTarget: 'umd',
      // @see: https://github.com/webpack/webpack/issues/3929
      libraryExport: 'default',
      // @see: https://github.com/webpack/webpack/issues/6522
      globalObject: "typeof self !== 'undefined' ? self : this",
      publicPath: "auto"
    },
    externals: {
      stats: {
        commonjs: 'stats.js',
        commonjs2: 'stats.js',
        amd: 'stats.js',
        root: 'Stats' // indicates global variable
      }
    },
    module,
    resolve,
    optimization,
  },
    {
      name: "ARnft.simd",
      entry: './src/index.simd.ts',
      devtool,
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'ARnft.simd.js',
        library: 'ARnft',
        libraryTarget: 'umd',
        // @see: https://github.com/webpack/webpack/issues/3929
        libraryExport: 'default',
        // @see: https://github.com/webpack/webpack/issues/6522
        globalObject: "typeof self !== 'undefined' ? self : this",
        publicPath: "auto"
      },
      externals: {
        stats: {
          commonjs: 'stats.js',
          commonjs2: 'stats.js',
          amd: 'stats.js',
          root: 'Stats' // indicates global variable
        }
      },
      module,
      resolve,
      optimization,
    },
    {
      name: "ARnft.module",
      entry: './src/index.ts',
      devtool,
      experiments: {
        outputModule: true,
      },
      output: {
        library: {
          type: 'module',
        },
        path: path.resolve(__dirname, 'dist'),
        filename: 'ARnft.mjs',
      },
      externalsType: 'module',
      externals: {
        three: 'three',
      },
      module,
      resolve,
      optimization,
    },
    {
      name: "ARnft.simd.module",
      entry: './src/index.simd.ts',
      devtool,
      experiments: {
        outputModule: true,
      },
      output: {
        library: {
          type: 'module',
        },
        path: path.resolve(__dirname, 'dist'),
        filename: 'ARnft.simd.mjs',
      },
      externalsType: 'module',
      externals: {
        three: 'three',
      },
      module,
      resolve,
      optimization,
    },
  ]
}
