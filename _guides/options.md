---
layout: 'guide'
title: 'Options'
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


### tsconfig

```bash
$ typedoc --tsconfig </path/to/tsconfig.json>
```

Specify a `tsconfig.json` file that options should be read from. If not specified TypeDoc will look for `tsconfig.json` in the current directory and parent directories like `tsc` does.

When TypeDoc loads a `tsconfig.json` file, it will read options declared under the `typedocOptions` key and take the `tsconfig.json`'s input files (as defined by `files` or `include`/`exclude`) as the input files.

## Input Options

These options control what files TypeDoc processes to generate documentation and how the files are processed.

### inputFiles

```bash
$ typedoc a b
# or
$ typedoc --inputFiles a --inputFiles b
```

Specifies the initial input files to be passed to TypeScript. The `--inputFiles` specifier on the command line is optional. Any argument without a corresponding option name will be parsed as an input file. This option may also accept directories, which will be recursively expanded with all files being added to the input files.

### mode

```bash
$ typedoc --mode <file|modules>
```

Specifies how the project should be converted. If your project does not use modules (`--module none` when compiling) then this should be set to `file`. Otherwise, it should be set to `modules`, where declarations will be scoped by their source file. Defaults to `modules`.

### includeDeclarations

```bash
$ typedoc --includeDeclarations
```

Turns on parsing of .d.ts declaration files. Defaults to false.
If you enable this, you should almost certainly also turn on `--excludeExternals` to avoid documenting lib files.

### entryPoint

```bash
$ typedoc --entryPoint '"index"'
```

Specifies the root symbol, defaults to the global symbol that all modules are placed under.

### exclude

```bash
$ typedoc --exclude "**/*+(index|.spec|.e2e).ts"
```

Exclude files by the given pattern when a path is provided as source.
Supports [minimatch](https://github.com/isaacs/minimatch) patterns.
In configuration files, this option accepts an array of patterns. On the command line, it may be specified multiple times to add multiple patterns.

### externalPattern

```bash
$ typedoc --externalPattern 'lib/**/*.ts' --externalPattern 'external/**/*.ts'
```

Define patterns for extra files that should be considered external. Can be used along with `--excludeExternals` to remove external modules from the documentation. Even if not specified, some files may not be considered external if they were not specified in the expanded input files.

### excludeExternals

```bash
$ typedoc --excludeExternals
```

Prevent externally resolved TypeScript files from being documented. Defaults to false.

### excludeNotExported

```bash
$ typedoc --excludeNotExported
```

Removes local symbols from the generated documentation. Defaults to false.

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

### ignoreCompilerErrors
```bash
$ typedoc --ignoreCompilerErrors
```

Generate documentation even if the project has TypeScript errors.
If you only generate docs after a successful build, enabling this option will provide performance benefits.


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

### json

```bash
$ typedoc --json <path/to/out-file.json>
```

Specifies the location to output a JSON file containing all of the reflection data.

### theme

```bash
$ typedoc --theme <default|minimal|path/to/theme>
```

Specify the path to the theme that should be used.
TypeDoc includes the `default` and `minimal` themes, which may be specified without the full path to the theme.

### name

```bash
$ typedoc --name <Documentation title>
```

Set the name of the project that will be used in the header of the template.
The name defaults to the package name and current version according to your package.json.

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
  "toc": [
    "EntryClass",
    "ImportantInterface"
  ]
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

### help

```bash
$ typedoc --help
```

The help command will print the following listing of available commands.

```
{% include help_output.txt %}
```

### version

```bash
$ typedoc --version
```

Prints TypeDoc's version.

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

### listInvalidSymbolLinks

```bash
$ typedoc --listInvalidSymbolLinks
```

Tells TypeDoc to report any `[[symbol name]]` links that are broken.


