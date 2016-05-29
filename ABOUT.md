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

For how to do basic development tasks, see the [README.md](README.md).
The rest of this file contains more detailed information.



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

### Less

To add support for Less, and for loading CSS and Less files as
modules, add the following:

```
npm i --save-dev style-loader autoprefixer-loader
npm i --save-dev less css-loader less-loader
```


