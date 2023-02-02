const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");
const { Options } = require('typedoc');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
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
  module: {
    rules: [
      {
        
          test: /\.worker\.(c|m)?ts$/i,
          use: {
            loader: 'workerize-loader',
            options: { inline: true }
          }
        },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    
    ]
},
  resolve: {
  alias: {
    jsartoolkitnft: '@webarkit/jsartoolkit-nft'
  },
  extensions: ['.tsx', '.ts', '.js'],
  },
optimization: {
  minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false
      }),
    ],
  },
}
