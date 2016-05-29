# About the sample project

This page gives developer information about this sample project.
If you're using this project as a starter for a real production
application, you should delete this from your repo.

Here are the features of this sample project:

* Webpack to build client-side distribution bundles
* Babel, so you can write your code in EcmaScript 6 (ES2015)


# Steps to set this up from scratch

Make sure the relative path `./node_modules/.bin` is in your
PATH.

Copied content from [this 
gist]( https://gist.github.com/jamesknelson/9b7db05268e747b4aa4d)
into the src directory.

```bash
# Webpack essentials
npm i --save-dev webpack webpack-dev-server 

# Babel transpiler for ES2015
npm i --save-dev babel-core babel-loader babel-preset-es2015

# Babel runtime polyfills
npm i --save babel-polyfill
```

Create this webpack.config.js:

```javascript
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
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
  debug: true
};
```

Then run the dev server with

```bash
webpack-dev-server --content-base src src/main.js
```

Open your browser to http://localhost:8080, and you should see
a spinning back triangle.

