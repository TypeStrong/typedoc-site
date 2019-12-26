---
layout: 'guide'
title: 'Arguments'
menuOrder: 2
redirect_from:
  - /guides/usage
---


# Arguments
TypeDoc accepts most of the command line arguments that the TypeScript compiler accepts. All
arguments that are passed in without a flag will be parsed as input files. TypeDoc accepts
directories as input files. To view all TypeDoc's options use the `--help` option.

To create documentation for an entire project via the CLI you can type:

```bash
$ typedoc --out path/to/documentation/ path/to/typescript/project/
```

### Help

```bash
$ typedoc --help
```

The help command will print the following listing of available commands.

```
{% include help_output.txt %}
```

### options

```bash
$ typedoc --options <filename>
```

Specify a js option file that should be loaded. If not specified TypeDoc will look for 'typedoc.json' in the current directory.


### out

```bash
$ typedoc --out <path/to/documentation/>
```

Specifies the location the documentation should be written to.

### json

```bash
$ typedoc --json <path/to/out-file.json/>
```

Specifies the location to output a JSON file containing all of the reflection data.

### mode
```bash
$ typedoc --mode <file|modules>
```

Specifies the output mode the project is used to be compiled with.

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

### exclude

```bash
$ typedoc --exclude <pattern>
```

Exclude files by the given pattern when a path is provided as source. Supports [minimatch](https://github.com/isaacs/minimatch)
patterns. In `typedoc.json` configuration files, this option accepts an array of patterns.

#### Example
```bash
$ typedoc --exclude "**/*+(index|.spec|.e2e).ts"
```


### theme

```bash
$ typedoc --theme <default|minimal|path/to/theme>
```

Specify the path to the theme that should be used. TypeDoc includes the `default` and `minimal` themes.


### includeDeclarations

```bash
$ typedoc --includeDeclarations
```

Turn on parsing of .d.ts declaration files.

### excludeExternals
```bash
$ typedoc --excludeExternals
```

Prevent externally resolved TypeScript files from being documented.

### externalPattern

```bash
$ typedoc --externalPattern <pattern>
```

Define a pattern for files that should be considered being external.

### categorizeByGroup

```bash
$ typedoc --categorizeByGroup=false
```

This flag categorizes reflections by group (within properties, methods, etc).
To allow methods and properties of the same category to be grouped together, set this flag to false.
Defaults to true

### defaultCategory

```bash
$ typedoc --defaultCategory="Category Name"
```

Sets the name for the default category (which is used when some elements of the page are categorized).
Defaults to 'Other'

### categoryOrder

```json
{
  "categoryOrder": ["Category Name", "Other Category", "*"]
}
```

Array option (available via json configuration) which allows overriding the order categories display in. A string of `*` indicates where categories that are not in the list should appear.

By default, categories are displayed alphabetically. If unknown categories are found, they will be listed at the end by default.


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

Do not print the TypeDoc link at the end of the page.

### gitRevision

```bash
$ typedoc --gitRevision <revision|branch>
```

Use specified revision or branch instead of the last revision for linking to GitHub source files.

### ignoreCompilerErrors
```bash
$ typedoc --ignoreCompilerErrors
```

Generates documentation, even if the project does not TypeScript compile.

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

Overrides the "globals" navigation sidebar to only include the types provided in the "toc" whitelist.  This is useful in large projects where there may be an unwieldy number of Globals in the sidebar.
