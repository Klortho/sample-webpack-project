# Sample project

[This page is the sample project's README. For information *about* the
sample project, see [ABOUT.md](ABOUT.md)].


## Development

Make sure the relative path `./node_modules/.bin` is in your `PATH`.

After cloning the repo, install dependencies:

```
npm install
```

Run the dev server with the following. This will automatically detect
changes to the source files, rebuild everything, and then trigger your
browser to reload the page.

```
webpack-dev-server
```

To build the distribution files, which will go into the dist/ directory:

```
webpack
```
