---
layout: 'guide'
title: 'Installation'
menuOrder: 1
---

# Installation

## Requirements

TypeDoc requires [Node.js](http://nodejs.org/) to be installed on your system. If you haven't done that already, head
over to their site and follow their install instructions.

Installing TypeDoc is available as a node package. Using ``npm`` ensures that all relevant
dependencies are setup correctly. You can choose to either install locally to your project or
globally to the CLI.

## Local installation (preferred)

If you want to use TypeDoc from your command line in a project, use the API in your project code, or TypeDoc in an npm script, a local installation is the recommended approach. First install TypeDoc locally in your project:

```bash
$ npm install typedoc --save-dev
```

By saving TypeDoc to the project `package.json` file with the previous command,
anyone who runs `npm install` on the project will have typedoc installed at the specific version required for the project.

The name of TypeDoc's executable is ``typedoc``. To verify that it works, you can now invoke the CLI in your project using `npx` (`npx` is a tool bundled with `npm`), passing TypeDoc the ``--version`` argurment:

```bash
$ npx typedoc --version

TypeDoc 0.13.0
Using TypeScript 3.1.1 from /Users/aciccarello/Documents/code/typedoc/typedoc/node_modules/typescript/lib
```

## Global CLI installation

Like the TypeScript compiler or any other NPM module that has an executable, TypeDoc's executable can be called from anywhere if you
install TypeDoc as a global module. Note that this is not the preferred approach in the event that different projects need different versions of TypeDoc. If you follow the global approach, you may eventually run into the problem
of one project breaking when you update the global TypeDoc while making a new project, because the old project may only work with a previous version of TypeDoc.

If you still want to follow the global approach, run:

```bash
$ npm install typedoc --global
```

To verify that it works globally, now you can run it without `npx`, even outside your project:

```bash
$ typedoc --version

TypeDoc 0.13.0
Using TypeScript 3.1.1 from /Users/aciccarello/Documents/code/typedoc/typedoc/node_modules/typescript/lib
```

## Command line interface
The CLI can be used both from your terminal or from npm scripts. All argurments that are not passed
with flags are considered input files or directories. Use either the ``--out`` or ``--json``
arguments to define the format and destination of your documentation.

```bash
typedoc --out docs src
```

### JSON Configuration
Instead of passing all arguments via the command line, the CLI also supports reading TypeDoc configuration from json files.

### typedoc.json
When running typedoc from the CLI, you can define any option except the entry files in a json file named `typedoc.json`.

```json
{
    "mode": "file",
    "out": "docs"
}
```

### tsconfig.json
TypeDoc options can be defined withing an existing `tsconfig.json` file. Use a `typedocOptions` section to define
options as a json model.
```json
{
    "compilerOptions": {
      "normalTypeScriptOptions": "here"
    },
    "typedocOptions": {
        "mode": "modules",
        "out": "docs"
    }
}
```

## Node module
If you would like dynamic configuration or would like to run typedoc without using the CLI, import
the node module and build the documentation yourself.
```javascript
const TypeDoc = require('typedoc');

const app = new TypeDoc.Application({
    mode:   'Modules',
    logger: 'none',
    target: 'ES5',
    module: 'CommonJS',
    experimentalDecorators: true
});

const project = app.convert(app.expandInputFiles(['src']));

if (project) { // Project may not have converted correctly
    const outputDir = 'docs';

    // Rendered docs
    app.generateDocs(project, outputDir);
    // Alternatively generate JSON output
    app.generateJson(project, outputDir + '/documentation.json');
}
```

## Third-Party Tools

Some great folks out there have created plugins so you can run TypeDoc with your favorite task runner.
Plugins are available for Grunt, Gulp, and Webpack. All of them can be installed using ``npm``.


### Grunt

<dl class="specs">
    <dt>Name</dt><dd>grunt-typedoc</dd>
    <dt>Website</dt><dd><a href="https://www.npmjs.org/package/grunt-typedoc/">https://www.npmjs.org/package/grunt-typedoc/</a></dd>
    <dt>Author</dt><dd><a href="https://github.com/Bartvds">Bart van der Schoor</a></dd>
</dl>

You can install the plugin with the following command:

```bash
$ npm install --save-dev grunt-typedoc
```

Update the following snippet with your configuration and add it to your ``gruntfile.js`` file:

```js
grunt.loadNpmTasks('grunt-typedoc');
grunt.initConfig({
    typedoc: {
        build: {
            options: {
                module: 'commonjs',
                target: 'es5',
                out: 'docs/',
                name: 'My project title'
            },
            src: 'src/**/*'
        }
    }
});
```


### Gulp

<dl class="specs">
    <dt>Name</dt><dd>gulp-typedoc</dd>
    <dt>Website</dt><dd><a href="https://www.npmjs.org/package/gulp-typedoc/">https://www.npmjs.org/package/gulp-typedoc/</a></dd>
    <dt>Author</dt><dd><a href="https://github.com/rogierschouten">Rogier Schouten</a></dd>
</dl>

You can install the plugin with the following command:

```bash
$ npm install --save-dev gulp-typedoc
```

Update the following snippet with your configuration and add it to your ``gulpfile.js`` file:

```js
var typedoc = require("gulp-typedoc");
gulp.task("typedoc", function() {
    return gulp
        .src(["src/**/*.ts"])
        .pipe(typedoc({
            module: "commonjs",
            target: "es5",
            out: "docs/",
            name: "My project title"
        }))
    ;
});
```

### Webpack

<dl class="specs">
    <dt>Name</dt><dd>typedoc-webpack-plugin</dd>
    <dt>Website</dt><dd><a href="https://www.npmjs.com/package/typedoc-webpack-plugin">https://www.npmjs.com/package/typedoc-webpack-plugin</a></dd>
    <dt>Author</dt><dd><a href="https://github.com/timsawyer">Tim Sawyer</a></dd>
</dl>

You can install the plugin with the following command:

```bash
$ npm install typedoc-webpack-plugin --save-dev
```

Update the following snippet with your configuration and add it to your Webpack config file:

```js
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');

// add to webpack plugins
plugins: [
    new TypedocWebpackPlugin({
        name: 'Contoso'
        mode: 'file',
        theme: './typedoc-theme/',
        includeDeclarations: false,
        ignoreCompilerErrors: true,
    })
]
```
