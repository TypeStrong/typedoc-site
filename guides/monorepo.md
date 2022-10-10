---
layout: "guide"
tags: guide
title: "Monorepo"
menuOrder: 100
---

# Monorepo

TypeDoc's `entryPointStrategy: Packages` is dedicated support for monorepo projects. TypeDoc will attempt to determine entry points based on `package.json`'s `main` property (with default value `index.js`) and if it wasn't found, based on `types` property. If any of the packages given are the root of an [npm Workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces) or a [Yarn Workspace](https://classic.yarnpkg.com/en/docs/workspaces/) TypeDoc will find all the `workspaces` defined in the `package.json`. Each found package will be rendered by TypeDoc as a `module`.

You may also need to configure TypeDoc for each child package using config field `typedoc` in package.json file for TypeDoc to work properly.

## TypeDoc package config

Example config in child package's package.json:

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

> All of these options are optional

### entryPoint

Entry point strategy `Packages` requires sourcemaps in your JS entry points or that you specify the TypeDoc entry point in your package.json to tell TypeDoc where your entry point TypeScript source. Supports wildcard paths in the same fashion as those found in npm or Yarn workspaces.

### readmeFile

Path to the readme file that should be displayed on the index page of the package doc.

### displayName

The name of the package that will be used when rendering the doc. If none provided, the default name will be the name of the package specified in package.json file.

### tsconfig

Path of the tsconfig file to use when creating the program for compilation. If omitted, will look for `tsconfig.json` like `tsc` does.
