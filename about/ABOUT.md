# About the sample project

This page gives developer information about this sample project.
If you're using this project as a starter for a real production
application, you should delete this from your repo.

Here are the features of this sample project:

* Client-side distribution bundles generated with webpack
* Write your code in EcmaScript 6 (ES2015); it is transpiled with
  Babel
* Including using ES6 module syntax
* Supports CSS and Less
* Dev server with auto-reload
* Produces sourcemaps
* Minified and unminified distribution files

For how to do basic development tasks, see the [README.md](README.md).
The rest of this file contains more detailed information.



# To do

* The profile setup could be simplified. Right now, the default is `dev`.
  We could just make this a single switch and  function that merges in
  and/or overwrites, as needed, to turn it into `prod`.
* Add jQuery, as an example. See 
  [webpack-experiments](https://github.com/Klortho/webpack-experiments/blob/master/webpack.config.js).

# Steps to set this up from scratch

## Set up the repo

Make sure the relative path `./node_modules/.bin` is in your
PATH.

Create a new directory, then:

```bash
git init
npm init  //=> answer a couple of questions
git add . 
git commit -m 'initial commit'
```

Copied content from [this 
gist]( https://gist.github.com/jamesknelson/9b7db05268e747b4aa4d)
into the src directory.

### Webpack and Babel

```bash
# Webpack essentials
npm i --save-dev webpack webpack-dev-server 

# Babel transpiler for ES2015
npm i --save-dev babel-core babel-loader babel-preset-es2015

# Babel runtime polyfills and helper
npm i --save babel-polyfill babel-plugin-transform-runtime
```

Create the webpack.config.js (see the repo).

Then run the dev server with

```bash
webpack-dev-server
```

Open your browser to http://localhost:8080, and you should see
a spinning back triangle.

The dev server will automatically rebuild your files when you
change them, and even automatically reload them in yor browser.

In addition, sourcemaps are sent to the browser, so that you 
can debug your code while looking at the original ES6 version,
rather than the transpiled version after it goes through Babel.

See this screenshot:

![Sourcemap screenshot](sourcemap.png?raw=true "Sourcemaps")

### Less

To add support for Less, and for loading CSS and Less files as
modules, add the following:

```
npm i --save-dev style-loader autoprefixer-loader
npm i --save-dev less css-loader less-loader
```

### Distribution

Add this so as to include the HTML file in the dist:

```
npm i --save html-webpack-plugin
```

Then, in your webpack.config.js:

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin')
...
plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
```

### Setting up profiles

This merely involved separating the minimum configuration that
was different for each profile. 


### Testing with Mocha and chai

```
npm i --save-dev mocha chai
```

Then, created a unit test file in test/test.js. Ran it with

```
mocha
```