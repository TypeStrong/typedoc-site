---
layout: "guide"
tags: guide
eleventyNavigation:
    order: 1
    key: Installation
    parent: Overview
---

# Installation

## Requirements

TypeDoc requires [Node.js](http://nodejs.org/) to be installed on your system. If you haven't done that already, head
over to their site and follow their install instructions.

Installing TypeDoc is available as a node package. Using `npm` ensures that all relevant
dependencies are setup correctly. You can choose to either install locally to your project or
globally to the CLI.

TypeDoc aims to support the two latest TypeScript releases for the latest release. Depending on the scale of breaking
changes introduced in a new TypeScript version, a given version may support more versions of TypeScript.

| TypeDoc Version | TypeScript Version(s) |
| --------------- | --------------------- |
| 0.24            | 4.6 through 5.0       |
| 0.23            | 4.6 through 5.0       |
| 0.22            | 4.0 through 4.7       |
| 0.21            | 4.0 through 4.4       |
| 0.20            | 3.9 through 4.2       |
| 0.19            | 3.9 through 4.0       |

## Installation

If you want to use TypeDoc from your command line in a project, use the API in your project code, or TypeDoc in an npm script, a local installation is the recommended approach. First install TypeDoc in your project:

```bash
$ npm install typedoc --save-dev
```

By saving TypeDoc to the project `package.json` file with the previous command, anyone who runs
`npm install` on the project will have typedoc installed at the specific version required for the project.

The name of TypeDoc's executable is `typedoc`. To verify that it works, you can now invoke the CLI in your project using `npx` (`npx` is a tool bundled with `npm`), passing TypeDoc the `--version` argument:

```bash
$ npx typedoc --version

TypeDoc 0.23.0
Using TypeScript 4.7.2 from /home/gerrit/typedoc/node_modules/typescript/lib
```

## Command line interface

The CLI can be used both from your terminal or from npm scripts. All arguments that are not passed
with flags are parsed as entry points. Use either the `--out` or `--json`
arguments to define the format and destination of your documentation.

```bash
typedoc --out docs src/index.ts
```

### JSON Configuration

Instead of passing all arguments via the command line, the CLI also supports reading TypeDoc configuration from json files.

### typedoc.json

When running typedoc from the CLI, you can define options in a json file named `typedoc.json`.

```json
{
    // Comments are supported, like tsconfig.json
    "entryPoints": ["src/index.ts"],
    "out": "docs"
}
```

### tsconfig.json

TypeDoc options can be defined within an existing `tsconfig.json` file. Use a `typedocOptions` section to define
options as a json model.

```json
{
    "compilerOptions": {
        "normalTypeScriptOptions": "here"
    },
    "typedocOptions": {
        "entryPoints": ["src/index.ts"],
        "out": "docs"
    }
}
```

## Node module

If you would like dynamic configuration or would like to run typedoc without using the CLI, import
the node module and build the documentation yourself.

```javascript
const TypeDoc = require("typedoc");

async function main() {
    const app = new TypeDoc.Application();

    // If you want TypeDoc to load tsconfig.json / typedoc.json files
    app.options.addReader(new TypeDoc.TSConfigReader());
    app.options.addReader(new TypeDoc.TypeDocReader());

    app.bootstrap({
        // typedoc options here
        entryPoints: ["src/index.ts"],
    });

    const project = app.convert();

    if (project) {
        // Project may not have converted correctly
        const outputDir = "docs";

        // Rendered docs
        await app.generateDocs(project, outputDir);
        // Alternatively generate JSON output
        await app.generateJson(project, outputDir + "/documentation.json");
    }
}

main().catch(console.error);
```
