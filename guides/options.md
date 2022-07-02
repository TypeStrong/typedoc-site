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
Any options passed on the command line will override options set in a configuration file.

```bash
$ typedoc --out path/to/documentation/ path/to/typescript/project/index.ts
```

## Configuration Options

These options control where TypeDoc reads its configuration from.

### options

```bash
$ typedoc --options <filename>
```

Specify an option file that should be loaded. If not specified TypeDoc will look for `typedoc.json` and `typedoc.js` in the current directory.
The JSON file should return an object whose keys are the option names. For example:

```js
// typedoc.json
{
    "$schema": "https://typedoc.org/schema.json",
    "entryPoints": ["./src/index.ts", "./src/secondary-entry.ts"],
    "out": "doc"
}

// typedoc.js
module.exports = {
    entryPoints: ["./src/index.ts", "./src/secondary-entry.ts"],
    out: "doc"
}
```

Option files may also contain an `extends` key which specifies an additional file to be loaded before importing options from the current file. Paths will be resolved relative to the options file they are loaded from.

The `$schema` key is an optional property that will be ignored by TypeDoc, but can be used to get better autocomplete when editing a `typedoc.json` file in VSCode and other editors which support JSON Schemas.

### tsconfig

```bash
$ typedoc --tsconfig </path/to/tsconfig.json>
```

Specify a `tsconfig.json` file that options should be read from. If not specified TypeDoc will look for `tsconfig.json` in the current directory and parent directories like `tsc` does.

When TypeDoc loads a `tsconfig.json` file, it also will read TypeDoc options declared under the `typedocOptions` key and look for a `tsdoc.json` file in the same directory to read the supported tags.

### compilerOptions

Used to selectively override compiler options for generating documentation. Values set with this option
will override options read from `tsconfig.json`.

```json
{
    "compilerOptions": {
        "strictNullChecks": false
    }
}
```

## Input Options

These options control what files TypeDoc processes to generate documentation and how the files are processed.

### entryPoints

```bash
$ typedoc a b
# or
$ typedoc --entryPoints a --entryPoints b
```

Specifies the entry points to be documented by TypeDoc. TypeDoc will examine the exports of these files and create documentation according to the exports.
Entry points can be handled in one of three ways, see [`--entryPointStrategy`](#entrypointstrategy) for details.

### entryPointStrategy

```bash
$ typedoc --entryPointStrategy expand ./src
```

There are three possible options:
| Option | Behavior |
| --- | --- |
| resolve (default) | Expects all entry points to be contained within the root level tsconfig project. If a directory is given, includes `<directory>/index` as the entry point. |
| expand | Expects all entry points to be contained within the root level tsconfig project. If a directory is given, files within it are recursively expanded. Effectively, this will make a separate page for each individual TypeScript file. (This was the default behavior in v0.21.) |
| packages | If your codebase is comprised of one or more npm packages, you can pass the paths to these packages and TypeDoc will attempt to determine entry points based on `package.json`'s `main` property (with default value `index.js`) and if it wasn't found, based on `types` property. If any of the packages given are the root of an [npm Workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces) or a [Yarn Workspace](https://classic.yarnpkg.com/en/docs/workspaces/) TypeDoc will find all the `workspaces` defined in the `package.json`. This mode requires sourcemaps in your JS entry points or that you specify `typedocMain` in your package.json to tell TypeDoc where your entry point TypeScript source. Supports wildcard paths in the same fashion as those found in npm or Yarn workspaces. |

### exclude

```bash
$ typedoc --exclude "**/*+(index|.spec|.e2e).ts"
```

Exclude files by the given pattern when a path is provided as source.
Supports [minimatch](https://github.com/isaacs/minimatch) patterns.
In configuration files, this option accepts an array of patterns. On the command line, it may be specified multiple times to add multiple patterns.
If an exported member from one of your entry points is located in an excluded file, it will be excluded from the documentation.

If `entryPointStrategy` is set to `packages, then you can specify package directories with this option to exclude from documentation.

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

### excludeNotDocumented

```bash
$ typedoc --excludeNotDocumented
```

Removes symbols from the generated documentation which do not have an associated doc comment.

### excludeInternal

```bash
$ typedoc --excludeInternal
```

Removes symbols annotated with the `@internal` doc tag. Defaults to true if the stripInternal compiler option is set to true, otherwise defaults to false.

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

### pretty

```bash
$ typedoc --json out.json --pretty
```

Tells TypeDoc to pretty-format the JSON output. Defaults to true.

### emit

```bash
$ typedoc --emit none
```

Instructs TypeDoc to write compiled output files as `tsc` does.

| Value  | Behavior                                       |
| ------ | ---------------------------------------------- |
| `docs` | Emit documentation, but not JS (default).      |
| `both` | Emit both documentation and JS.                |
| `none` | Emit nothing, just convert and run validation. |

_**Note:** If you have your TypeScript configured with `declaration: true` (through `tsconfig.json`), the Typedoc emit `both` option will also generate type declaration files. This is because Typedoc falls back to TypeScript to generate the JS, this allows us to set the normal TypeScript options for type declarations and have Typedoc handle generating the `docs`, `js`, and `types` for us, all at once._

### theme

```bash
$ typedoc --theme default
```

Specify the theme name that should be used. TypeDoc 0.22 contains architectural changes which breaks themes developed for TypeDoc 0.21 and earlier.

### lightHighlightTheme / darkHighlightTheme

```bash
$ typedoc --darkHighlightTheme dark-plus
```

Specify the Shiki theme to be used to highlight code snippets in light/dark mode.

### customCss

```bash
$ typedoc --customCss ./theme/style.css
```

Specifies an extra CSS file that should be copied into the assets directory and referenced by the theme.

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

### basePath

```bash
$ typedoc --basePath ./ --entryPoints src/index.ts
```

Specifies the base path to be used when displaying file paths. If not set, TypeDoc will guess by taking the lowest
common directory to all source files. In the above example, TypeDoc would display links to `index.ts` rather than `src/index.ts`.

Note: This option only affects displayed paths. It _does not_ affect where TypeDoc will create links to.

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

### cname

```bash
$ typedoc --cname typedoc.org
```

Create a CNAME file in the output directory with the specified text.

### gitRevision

```bash
$ typedoc --gitRevision <revision|branch>
```

Use specified revision or branch instead of the last revision for linking to source files.

### gitRemote

```bash
$ typedoc --gitRemote <remote>
```

Use the specified git remote instead of `origin` for linking to source files in GitHub, Bitbucket, or GitLab.
You can use `git remote` to view a list of valid remotes.
If you are updating documentation for a forked package, you probably want to pass `--gitRemote upstream`.

### htmlLang

```bash
$ typedoc --htmlLang es
```

Sets the `lang` attribute in TypeDoc's HTML output, defaults to `en`, resulting in `<html lang="en">`.

### githubPages

```bash
$ typedoc --githubPages false
```

When enabled, automatically add a `.nojekyll` file to the output directory to prevent GitHub Pages
from processing your documentation site using Jekyll. If you have scoped packages, TypeDoc
generates HTML files that start with `_` which are ignored by Jekyll. Defaults to `true`.

### gaID

```bash
$ typedoc --gaID
```

Set the Google Analytics tracking ID and activate tracking code.

### hideGenerator

```bash
$ typedoc --hideGenerator
```

Do not print the TypeDoc link at the end of the page. Defaults to false.

### searchInComments

```bash
$ typedoc --searchInComments
```

Enables searching comment text in the generated documentation site.

Note: Enabling this option will increase the size of your search index, potentially up
to an order of magnitude larger in projects with many long comments.

### cleanOutputDir

```bash
$ typedoc --cleanOutputDir false
```

Can be used to prevent TypeDoc from cleaning the output directory specified with `--out`.

## Comment Options

### commentStyle

```bash
$ typedoc --commentStyle block
```

Determines what comment types TypeDoc will use. Note: Writing non-JSDoc comments will cause poorer
intellisense in VSCode and is therefore generally not recommended.

| Value           | Behavior                               |
| --------------- | -------------------------------------- |
| jsdoc (default) | Use block comments starting with `/**` |
| block           | Use all block comments                 |
| line            | Use `//` comments                      |
| all             | Use both block and line comments       |

### blockTags

```json
// typedoc.json
{
    "blockTags": ["@param", "@returns"]
}
```

Override TypeDoc's supported block tags, emit warnings for any tags not listed here.
This option will be set by `tsdoc.json` if present.

### inlineTags

```json
// typedoc.json
{
    "inlineTags": ["@link"]
}
```

Override TypeDoc's supported inline tags, emit warnings for any tags not listed here.
This option will be set by `tsdoc.json` if present.

### modifierTags

```json
// typedoc.json
{
    "modifierTags": ["@hidden", "@packageDocumentation"]
}
```

Override TypeDoc's supported modifier tags, emit warnings for any tags not listed here.
This option will be set by `tsdoc.json` if present.

## Organization Options

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

```json
// typedoc.json
{
    "categoryOrder": ["Category Name", "Other Category", "*"]
}
```

Array option which allows overriding the order categories display in. A string of `*` indicates where categories that are not in the list should appear.

By default, categories are displayed alphabetically. If unknown categories are found, they will be listed at the end by default.

### sort

```bash
$ typedoc --sort static-first --sort alphabetical
```

Specifies the sort order for members. Sorting strategies will be applied in order.
If an earlier sorting strategy determines the relative ordering of two reflections, later
ordering strategies will not be applied.

For example, with the setting `["static-first", "visibility"]`, TypeDoc will first compare two
reflections by if they are static or not, and if that comparison returns equal, will check the
visibility of each reflection. On the other hand, if `["visibility", "static-first"]` is specified,
TypeDoc would sort all public properties first and then sort each group to put static properties first.
This means that `["source-order", "static-first"]` is equivalent to `["source-order"]` since ordering
by position in source will always produce a non-equal comparison.

The available sorting strategies are:

-   `source-order` (sorts by file, then by position in file)
-   `alphabetical`
-   `enum-value-ascending` (only applies to children of an enum)
-   `enum-value-descending` (only applies to children of an enum)
-   `static-first`
-   `instance-first`
-   `visibility` (public, then protected, then private)
-   `required-first`

### visibilityFilters

```json
// typedoc.json
{
    "visibilityFilters": {
        "protected": false,
        "private": false,
        "inherited": true,
        "external": false,
        "@alpha": false,
        "@beta": false
    }
}
```

Specifies the available filters when viewing a page. The four `protected`, `private`, `inherited`, and
`external` options are all shown by default. Their default value may be set, or they may be omitted
from this option to disable that filter. Further, modifier tags may be specified to introduce a custom
sort option based on a tag.

### searchCategoryBoosts

```json
// typedoc.json
{
    "searchCategoryBoosts": {
        "Common Items": 1.5
    }
}
```

Configure the search to increase the relevance of items in a given category.

### searchGroupBoosts

```json
// typedoc.json
{
    "searchCategoryBoosts": {
        "Classes": 1.5
    }
}
```

Configure the search to increase the relevance of items in a given group.

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

Print TypeDoc's config and exit. Useful for debugging what options have been set.

### plugin

```bash
$ typedoc --plugin <none|plugin>
```

Specifies the plugins that should be loaded. By default, all installed npm packages with one of the following in their keywords will be loaded.

-   `typedocplugin` - Widest support, discouraged for plugins only supporting versions newer than 0.22.8.
-   `typedoc-plugin` - Replacement for `typedocplugin`, used for plugins which do more than just add a theme, introduced in 0.22.9.
-   `typedoc-theme` - Used for plugins which add a theme, and should show up on the [Themes](../themes/) page, introduced in 0.22.9.

If this option is specified, automatic package discovery and loading will be disabled.

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

-   Verbose - Print all log messages, may include debugging information intended for TypeDoc developers
-   Info - Print informational log messages along with warning and error messages
-   Warn - Print warning and error messages
-   Error - Print only error messages

## Validation

Options that control how TypeDoc validates your documentation

### validation

```bash
$ typedoc --validation.invalidLink
$ typedoc --validation
```

```json
{
    "validation": {
        "notExported": true,
        "invalidLink": true,
        "notDocumented": false
    }
}
```

Specifies validation steps TypeDoc should perform on your generated documentation.

### treatWarningsAsErrors

```bash
$ typedoc --treatWarningsAsErrors
```

Causes TypeDoc to treat any reported warnings as fatal errors that can prevent documentation from being generated.

### intentionallyNotExported

Lists symbols which are intentionally excluded from the documentation output and should not produce warnings.
Entries may optionally specify a file name before a colon to only suppress warnings for symbols declared in a specific file.

typedoc.json:

```json
{
    "intentionallyNotExported": ["InternalClass", "src/other.ts:OtherInternal"]
}
```

### requiredToBeDocumented

Set the list of reflection types that must be documented, used by `validation.notDocumented`

typedoc.json:

```json
{
    "requiredToBeDocumented": ["Enum", "Class"]
}
```
