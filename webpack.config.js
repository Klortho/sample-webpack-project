// Webpack configuration reference:
// https://webpack.github.io/docs/configuration.html

var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var webpack = require('webpack');

// Support different build profiles, using an environment variable
var profile = process.env.WEBPACK_PROFILE || 'dev';

var libraryName = 'sample-library';

var commonProfile = {

  // Array of files that executed at startup
  entry: [
    // Babel-transpiled code still depends on a few polyfills at runtime
    'babel-polyfill',
    './src/theme/main.less',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],

  // Declare directory and filename of webpack's output
  output: {
    path: path.resolve(__dirname, 'dist'),
    /*publicPath: '/',*/
    filename: 'main.js'
  },

  plugins: [
    // Tell webpack what HTML files to include in the output dist
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],

  module: {
    loaders: [

      // Configure the Babel loader, which handles all .js files
      { test: /\.js$/,  // filename pattern for files to process 
        include: path.resolve(__dirname, 'src'),  // where they are
        loader: 'babel-loader',
        // Options that get passed to Babel:
        query: {
          plugins: ['transform-runtime'], // reduces duplication
          presets: ["es2015"],  
        }
      },

      // LESS loader
      { test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
    ],
  },

  // Webpack dev servers to serve source maps, so when debugging in the
  // browser, you see the original source lines. Note: this is included here
  // in `common`, rather than putting it into `dev`, because this is for a
  // shared library,
  devtool: 'source-map',

  // Tells the dev server where the files are. Again, there is no reason not
  // to include this in common. It will not interfere with the generation of
  // the production dist.
  devServer: {
    contentBase: "./src"
  },
};


// Profile-specific settings.
// The main reason for needing two profiles is that webpack only produces
// one bundle every time it is run. We want to produce both minified
// and unminified versions, and almost all settings are the same except the
// output filename, so this is one way to accomplish that.
var profileSettings = {
  dev: {
    // Debug environment
    debug: true,
    output: {
      filename: libraryName + '.js',
    },
  },


  prod: {
    output: {
      filename: libraryName + '.min.js',
    },
    plugins: [
      // FIXME: I'm not sure why these are commented out.
      //new webpack.optimize.DedupePlugin(),
      //new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        mangle: false, sourcemap: false
      }),
    ]
  },
};

// This is a very primitive merge.
var active = profileSettings[profile];
Object.keys(active).forEach(function(key) {
  if (!key in commonProfile) {
    commonProfile[key] = active[key];    
  }
  else if (commonProfile[key] instanceof Array) {
    console.log(key + ' is an array');
    // arrays get concatenated
    commonProfile[key] = commonProfile[key].concat(active[key]);
  }
  else {
    var target = commonProfile[key];
    var source = active[key];
    Object.keys(source).forEach(function(subkey) {
      target[subkey] = source[subkey];
    });
  }
});

module.exports = commonProfile;
