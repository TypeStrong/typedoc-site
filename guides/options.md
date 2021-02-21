---
layout: "guide"
tags: guide
title: "Options"
menuOrder: 2
redirect_from:
  - /guides/usage
  - /guides/arguments
---

# Options

TypeDoc accepts most of the command line arguments that the TypeScript compiler accepts.
All command line arguments that are passed in without a flag will be parsed as input files.
TypeDoc also accepts directories as input files.
Any options passed on the command line will override options set in a configuration file.

```bash
$ typedoc --out path/to/documentation/ path/to/typescript/project/
```

## Configuration Options

These options control where TypeDoc reads its configuration from.

### options

```bash
$ typedoc --options <filename>
```

Specify a json option file that should be loaded. If not specified TypeDoc will look for `typedoc.json` and `typedoc.js` in the current directory.
The JSON file should return an object whose keys are the option names. For example:

```json
{
  "entryPoints": ["./src/index.ts", "./src/secondary-entry.ts"],
  "out": "doc"
}
```

### tsconfig

```bash
$ typedoc --tsconfig </path/to/tsconfig.json>
```

Specify a `tsconfig.json` file that options should be read from. If not specified TypeDoc will look for `tsconfig.json` in the current directory and parent directories like `tsc` does.

When TypeDoc loads a `tsconfig.json` file, it also will read TypeDoc options declared under the `typedocOptions` key.

## Input Options

These options control what files TypeDoc processes to generate documentation and how the files are processed.

### entryPoints

```bash
$ typedoc a b
# or
$ typedoc --entryPoints a --entryPoints b
```

Specifies the entry points to be documented by TypeDoc. TypeDoc will examine the exports of these files and create documentation according to the exports. Either files or directories may be specified. If a directory is specified, all source files within the directory will be included as an entry point, unless excluded by `--exclude`.

### exclude

```bash
$ typedoc --exclude "**/*+(index|.spec|.e2e).ts"
```

Exclude files by the given pattern when a path is provided as source.
Supports [minimatch](https://github.com/isaacs/minimatch) patterns.
In configuration files, this option accepts an array of patterns. On the command line, it may be specified multiple times to add multiple patterns.
This option will **only** be used to filter entry points specified under directories.

### externalPattern

```bash
$ typedoc --externalPattern 'lib/**/*.ts' --externalPattern 'external/**/*.ts'
```

Define patterns for extra files that should be considered external. Can be used along with `--excludeExternals` to remove external modules from the documentation.

### excludeExternals

```bash
$ typedoc --excludeExternals
```

Prevent externally resolved TypeScript files from being documented. Defaults to false.

### excludePrivate

```bash
$ typedoc --excludePrivate
```

Removes private class members from the generated documentation. Defaults to false.

### excludeProtected

```bash
$ typedoc --excludeProtected
```

Removes protected class members from the generated documentation. Defaults to false.

### excludeInternal

```bash
$ typedoc --excludeInternal
```

Removes symbols annotated with the `@internal` doc tag. Defaults to true if the stripInternal compiler option is set to true, otherwise defaults to false.

### media

```bash
$ typedoc --media <path/to/media/>
```

Specifies a media directory that will be copied to the output file. Media can be linked to with `media://file.jpg` in doc comments.

### includes

```bash
$ typedoc --includes <path/to/includes/>
```

Specifies a directory with files that can be injected into the generated documentation with `[[include:file.md]]` in a doc comment.

## Output Options

These options control TypeDoc's output.

### out

```bash
$ typedoc --out <path/to/documentation/>
```

Specifies the location the html documentation should be written to.
The HTML output produced by running TypeDoc on itself can be seen at [/api](/api).

### json

```bash
$ typedoc --json <path/to/out-file.json>
```

Specifies the location to output a JSON file containing all of the reflection data.
An example of the JSON output from running TypeDoc on itself can be seen at [/api/docs.json](/api/docs.json).

### emit

```bash
$ typedoc --emit
```

Instructs TypeDoc to write compiled output files as `tsc` does.

### theme

```bash
$ typedoc --theme <default|minimal|path/to/theme>
```

Specify the path to the theme that should be used.
TypeDoc includes the `default` and `minimal` themes, which may be specified without the full path to the theme.

### highlightTheme

```bash
$ typedoc --highlightTheme dark-plus
```

Specify the Shiki theme to be used to highlight code snippets.

### markedOptions

Specifies the options that are forwarded to [Marked](https://marked.js.org) when parsing doc comments.
By default TypeDoc overrides the default values used by Marked with the ones shown below:

```json
{
  "markedOptions": {
    "mangle": false
  }
}
```

See the [options section](https://marked.js.org/using_advanced#options) on the Marked site for a full list of available options.

### name

```bash
$ typedoc --name <Documentation title>
```

Set the name of the project that will be used in the header of the template.
The name defaults to the package name and current version according to your package.json.

### includeVersion

```bash
$ typedoc --name "Name" --includeVersion
```

Adds the package version to the project's name.
In this case, if the project was on version 1.2.3 according to `package.json`, this would generate documentation called "Name - v1.2.3"

### disableSources

```bash
$ typedoc --disableSources
```

Disables the defined in text describing where a reflection was created.

### excludeTags

```bash
$ typedoc --excludeTags apidefine
```

Specify tags that should be removed from doc comments when parsing.
Useful if your project uses [apiDoc](https://apidocjs.com/) for documenting RESTful web APIs.

### readme

```bash
$ typedoc --readme <path/to/readme|none>
```

Path to the readme file that should be displayed on the index page. Pass none to disable the index page and start the documentation on the globals page.

### categorizeByGroup

```bash
$ typedoc --categorizeByGroup false
```

This flag categorizes reflections by group (within properties, methods, etc).
To allow methods and properties of the same category to be grouped together, set this flag to false.
Defaults to true.

### defaultCategory

```bash
$ typedoc --defaultCategory "Category Name"
```

Sets the name for the default category which is used when only some elements of the page are categorized.
Defaults to 'Other'

### categoryOrder

command line:

```bash
$ typedoc --categoryOrder "Category Name" --categoryOrder "Other Category" --categoryOrder "*"
```

typedoc.json:

```json
{
  "categoryOrder": ["Category Name", "Other Category", "*"]
}
```

Array option which allows overriding the order categories display in. A string of `*` indicates where categories that are not in the list should appear.

By default, categories are displayed alphabetically. If unknown categories are found, they will be listed at the end by default.

### gitRevision

```bash
$ typedoc --gitRevision <revision|branch>
```

Use specified revision or branch instead of the last revision for linking to GitHub source files.

### gitRemote

```bash
$ typedoc --gitRemote <remote>
```

Use the specified git remote instead of `origin` for linking to GitHub source files.
You can use `git remote` to view a list of valid remotes.
If you are updating documentation for a forked package, you probably want to pass `--gitRemote upstream`.

### gaID

```bash
$ typedoc --gaID
```

Set the Google Analytics tracking ID and activate tracking code.

### gaSite

```bash
$ typedoc --gaSite <site>
```

Set the site name for Google Analytics. Defaults to `auto`.

### hideGenerator

```bash
$ typedoc --hideGenerator
```

Do not print the TypeDoc link at the end of the page. Defaults to false.

### toc

```bash
$ typedoc --toc EntryClass,ImportantInterface
```

```json
{
  "toc": ["EntryClass", "ImportantInterface"]
}
```

Overrides the "globals" navigation sidebar to only include the types provided in the "toc" whitelist.
This is useful in large projects where there may be an unwieldy number of Globals in the sidebar.

### disableOutputCheck

```bash
$ typedoc --disableOutputCheck
```

Disables checking and clearing of the output directory specified with `--out`.

## General Options

Options which don't fit elsewhere.

### watch

```bash
$ typedoc --watch
```

Use TypeScript's incremental compiler to watch source files for changes and build the docs on change. May be combined with `--emit`.

Note: This mode will only detect changes to files watched by the TypeScript compiler. Changes to other files (README.md, imported files with `--includes`) will not cause a rebuild.

### preserveWatchOutput

```bash
$ typedoc --watch --preserveWatchOutput
```

By default, `--watch` clears the screen between compilation steps. If `--preserveWatchOutput` is specified, this behavior is disabled.

### help

```bash
$ typedoc --help
```

Print all available options, along with a short description. Also prints a list of supported highlighting languages.

### version

```bash
$ typedoc --version
```

Prints TypeDoc's version.

### showConfig

```bash
$ typedoc --showConfig
```

Print TypeDoc's config and exit. Useful for debugging what options have been loaded.

### plugin

```bash
$ typedoc --plugin <none|plugin>
```

Specifies the plugins that should be loaded. By default, all installed npm packages with `typedocplugin` in their keywords will be loaded.

### logger

```bash
$ typedoc --logger <none|Function>
```

Specifies the logger to write output to. When using TypeDoc programmatically, a function may be specified that will be called with the log message. By default, logs to the console. `none` may be passed to disable logging.

### logLevel

```bash
$ typedoc --logLevel Verbose
```

Specifies the log level to be printed to the console. Defaults to `Info`. The available levels are:

- Verbose - Print all log messages, may include debugging information intended for TypeDoc developers
- Info - Print informational log messages along with warning and error messages
- Warn - Print warning and error messages
- Error - Print only error messages

### listInvalidSymbolLinks

```bash
$ typedoc --listInvalidSymbolLinks
```

Tells TypeDoc to report any `[[symbol name]]` links that are broken.
