# Sample project

[This page is the sample project's README. For information *about* the
sample project, see [about/ABOUT.md(about/ABOUT.md)].


## Development

Make sure the relative path `./node_modules/.bin` is in your `PATH`.

After cloning the repo, install dependencies:

```
npm install
```

Run the dev server with the following, and then go to 
http://localhost:8080.

```
webpack-dev-server
```

This will automatically detect changes to the source files, rebuild 
everything, and then trigger your browser to reload the page.

Building the distribution files requires two runs of webpack:

```
webpack                        //=> dev versions
WEBPACK_PROFILE=prod webpack   //=> prod versions
```

For minified:

```

After that's done, you should be able to open the dist/index.html file in
your browser, and see the same results as through the dev server.
