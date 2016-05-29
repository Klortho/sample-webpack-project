var path = require('path');
var webpack = require('webpack');

module.exports = {
  // Debug environment
  debug: true,

  // Array of files that executed at startup
  entry: [
    // Babel-transpiled code still depends on a few polyfills at runtime
    'babel-polyfill',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],

  // Declare directory and filename of webpack's output
  output: {
      publicPath: '/',
      filename: 'main.js'
  },

  module: {
    // Configure the Babel loader, which handles all .js files
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015"],  
        }
      }
    ]
  },

  // Webpack dev servers to serve source maps, so when debugging in the
  // browser, you see the original source lines
  devtool: 'source-map',

  // Tells the dev server where the files are
  devServer: {
    contentBase: "./src"
  },

};
