---
layout: "guide"
tags: guide
eleventyNavigation:
    order: 1
    key: Input
    parent: Options
---

# Input Options

These options control what files TypeDoc processes to generate documentation and how the files are processed.

## entryPoints

```bash
$ typedoc a b
# or
$ typedoc --entryPoints a --entryPoints b
```

Specifies the entry points to be documented by TypeDoc. TypeDoc will examine the exports of these files and create documentation according to the exports.
Entry points can be handled in one of three ways, see [`--entryPointStrategy`](#entrypointstrategy) for details.

## entryPointStrategy

```bash
$ typedoc --entryPointStrategy expand ./src
```

Specifies how specified entry points should be handled.

### resolve (default)

Expects all entry points to be contained within the root level tsconfig project. If a directory is given, includes `<directory>/index` as the entry point.

### expand (default prior to v0.22.0)

Expects all entry points to be contained within the root level tsconfig project. If a directory is given, files within it are recursively expanded. Effectively, this will make a separate page for each individual TypeScript file.

### packages

Expects all entry points to be directories to run TypeDoc within. After each entry point has been run through TypeDoc, the projects will be merged together and rendered to a single site.

### merge

Expects all entry points to be `.json` files generated with a previous run of TypeDoc with the [`--json`](/options/output/#json) option set. These entry points will be merged into a single project.

### legacy-packages (deprecated)

If your codebase is comprised of one or more npm packages, you can pass the paths to these packages and TypeDoc will attempt to determine entry points based on `package.json`'s `main` property (with default value `index.js`) and if it wasn't found, based on `types` property. If any of the packages given are the root of an [npm Workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces) or a [Yarn Workspace](https://classic.yarnpkg.com/en/docs/workspaces/) TypeDoc will find all the `workspaces` defined in the `package.json`. This mode requires source maps in your JS entry points or that you specify the TypeDoc entry point in your package.json to tell TypeDoc where your entry point TypeScript source. Supports wildcard paths in the same fashion as those found in npm or Yarn workspaces.

TypeDoc's `entryPointStrategy: legacy-packages` is dedicated support for monorepo projects. TypeDoc will attempt to determine entry points based on `package.json`'s `main` property (with default value `index.js`) and if it wasn't found, based on `types` property. If any of the packages given are the root of an [npm Workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces) or a [Yarn Workspace](https://classic.yarnpkg.com/en/docs/workspaces/) TypeDoc will find all the `workspaces` defined in the `package.json`. Each found package will be rendered by TypeDoc as a `module`.

**Note**: This means that you should give TypeDoc paths to modules in packages mode, _not_ paths to the entry point.

```json
{
    "entryPointStrategy": "packages",
    "entryPoints": [
        "packages/my-module",
        // not
        "packages/my-module/src/index.ts"
    ]
}
```

You may also need to configure TypeDoc for each child package using config field `typedoc` in package.json file for TypeDoc to work properly.

Example config in child package's package.json, note that this configuration **does not** support all TypeDoc options.

```json
{
    "name": "child-package",
    "version": "1.0.0",
    "typedoc": {
        "entryPoint": "./src/index.ts",
        "readmeFile": "./README.md",
        "displayName": "Child Package",
        "tsconfig": "./tsconfig.lib.json"
    }
}
```

#### entryPoint

Entry point strategy `Packages` requires sourcemaps in your JS entry points or that you specify the TypeDoc entry point in your package.json to tell TypeDoc where your entry point TypeScript source. Supports wildcard paths in the same fashion as those found in npm or Yarn workspaces.

#### readmeFile

Path to the readme file that should be displayed on the index page of the package doc.

#### displayName

The name of the package that will be used when rendering the doc. If none provided, the default name will be the name of the package specified in package.json file.

#### tsconfig

Path of the tsconfig file to use when creating the program for compilation. If omitted, will look for `tsconfig.json` like `tsc` does.

## exclude

```bash
$ typedoc --exclude "**/*+(index|.spec|.e2e).ts"
```

Exclude files by the given pattern when a path is provided as source. This option is only used to remove files from consideration as
entry points. Unlike TypeScript's `exclude` option, it _cannot_ be used to exclude files from compilation. You may want to turn on TypeScript's
[--skipLibCheck](https://www.typescriptlang.org/tsconfig#skipLibCheck) if you have compilation errors originating in `@types` packages.

Supports [minimatch](https://github.com/isaacs/minimatch) patterns.
In configuration files, this option accepts an array of patterns. On the command line, it may be specified multiple times to add multiple patterns.
If an exported member from one of your entry points is located in an excluded file, it will be excluded from the documentation.

If `entryPointStrategy` is set to `packages, then you can specify package directories with this option to exclude from documentation.

## externalPattern

```bash
$ typedoc --externalPattern 'lib/**/*.ts' --externalPattern 'external/**/*.ts'
```

Define patterns for extra files that should be considered external. Can be used along with `--excludeExternals` to remove external modules from the documentation.

## excludeExternals

```bash
$ typedoc --excludeExternals
```

Prevent externally resolved TypeScript files from being documented. Defaults to false.

## excludeNotDocumented

```bash
$ typedoc --excludeNotDocumented
```

Removes symbols from the generated documentation which do not have an associated doc comment if they are matched by `excludeNotDocumentedKinds`.

## excludeNotDocumentedKinds

```json
// typedoc.json
{
    "excludeNotDocumented": true,
    "excludeNotDocumentedKinds": ["Property", "Interface", "TypeAlias"]
}
```

Specifies the kinds of member which can be removed by `excludeNotDocumented`. Defaults to:

```json
{
    "excludeNotDocumentedKinds": [
        "Module",
        "Namespace",
        "Enum",
        // "EnumMember", // Not enabled by default
        "Variable",
        "Function",
        "Class",
        "Interface",
        "Constructor",
        "Property",
        "Method",
        "CallSignature",
        "IndexSignature",
        "ConstructorSignature",
        "Accessor",
        "GetSignature",
        "SetSignature",
        "TypeAlias",
        "Reference"
    ]
}
```

## excludeInternal

```bash
$ typedoc --excludeInternal
```

Removes symbols annotated with the `@internal` doc tag. Defaults to true if the stripInternal compiler option is set to true, otherwise defaults to false.

## excludePrivate

```bash
$ typedoc --excludePrivate
```

Removes private class members from the generated documentation. Defaults to false.

## excludeProtected

```bash
$ typedoc --excludeProtected
```

Removes protected class members from the generated documentation. Defaults to false.

## excludeReferences

```bash
$ typedoc --excludeReferences
```

Removes re-exports of a symbol already included in the documentation from the documentation. Defaults to false.

## name

```bash
$ typedoc --name <Documentation title>
```

Set the name of the project that will be used in the header of the template.
The name defaults to the package name according to your `package.json`.

## includeVersion

```bash
$ typedoc --includeVersion
```

Includes the version according to `package.json` in generated documentation. Defaults to false.

## disableSources

```bash
$ typedoc --disableSources
```

Disables capturing where reflections are declared when converting input.

## sourceLinkTemplate

```bash
$ typedoc --sourceLinkTemplate 'https://vcs.example.com/{path}?at={gitRevision}#line={line}'
```

Has no effect if `--disableSources` is set.
Specify a link template to be used when generating source urls. If not set, will be automatically created
using the git remote for GitHub, GitLab, and BitBucket urls. Supports `{path}`, `{line}`, and `{gitRevision}`
placeholders.

## gitRevision

```bash
$ typedoc --gitRevision <revision|branch>
```

Has no effect if `--disableSources` is set.
Use specified revision or branch instead of the last revision for linking to source files. Defaults to the last commit.

## gitRemote

```bash
$ typedoc --gitRemote <remote>
```

Has no effect if `--disableSources` is set.
Use the specified git remote instead of `origin` for linking to source files in GitHub, Bitbucket, or GitLab.
You can use `git remote` to view a list of valid remotes.
If you are updating documentation for a forked package, you probably want to pass `--gitRemote upstream`.

(Deprecated, will be removed in 0.24) This may be set to a URL (staring with `http://` or `https://`), in which case TypeDoc will assume that it is
the base URL for links. Links will be created to `{gitRemote}/{gitRevision}/{filePath}`.

## readme

```bash
$ typedoc --readme <path/to/readme|none>
```

Path to the readme file that should be displayed on the index page. If no readme is discovered or read, the index page will be disabled.
