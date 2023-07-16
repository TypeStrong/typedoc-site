---
layout: "guide"
tags: guide
eleventyNavigation:
    order: 0
    key: Configuration
    parent: Options
---

# Configuration Options

These options control where TypeDoc reads its configuration from. TypeDoc will look for an options file with the names below, `"typedocOptions"` key in your package.json, and a `"typedocOptions"` key in your tsconfig.json.

## options

```bash
$ typedoc --options <filename>
```

Specify a configuration file to be loaded, which should contain entries that correspond to command-line options/flags. If not specified, TypeDoc will look for a configuration file matching one of the valid config names in the current directory:

-   `typedoc.json`
-   `typedoc.jsonc`
-   `typedoc.config.js`
-   `typedoc.config.cjs`
-   `typedoc.js` (avoid this name, Windows CMD will try to run it instead of calling TypeDoc when running from that directory)
-   `typedoc.cjs`
-   `.config/typedoc.json`
-   `.config/typedoc.jsonc`
-   `.config/typedoc.config.js`
-   `.config/typedoc.config.cjs`
-   `.config/typedoc.js`
-   `.config/typedoc.cjs`

### JSON Files

If you are using a JSON file, it should be an object whose keys are the option names. For example:

```json
{
    "$schema": "https://typedoc.org/schema.json",
    "entryPoints": ["./src/index.ts", "./src/secondary-entry.ts"],
    "out": "doc"
}
```

Note that:

-   It is recommended that you use a file name of `typedoc.json`.
-   The `$schema` key is an optional property that will be ignored by TypeDoc, but will provide auto-complete and key validation when editing the file in VSCode and other editors which support JSON schemas.
-   JSON files are parsed as JSONC, which means that you can safely use trailing commas and comments in your file.

### JavaScript Files

If you are using a JavaScript file, it should export an object whose keys are the option names. For example:

```js
/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
    entryPoints: ["./src/index.ts", "./src/secondary-entry.ts"],
    out: "doc",
};
```

Note that:

-   It is recommended that you use a file name of `typedoc.config.cjs`.
-   The comment will be ignored by TypeDoc, but will provide auto-complete and key validation when editing the file in VSCode and other editors which support TypeScript JSDoc annotations.

### Other Info

-   Option files may also contain an `extends` key, which specifies an additional file to be loaded before importing options from the current file. Paths will be resolved relative to the options file they are loaded from.
-   If you have a relatively simple configuration, then you should use a JSON configuration file.
-   If you have a complex configuration, then you should use a JavaScript configuration file. (For example, you might want to build the `entryPoints` array programmatically by parsing the project's "index.ts" file.)

## tsconfig

```bash
$ typedoc --tsconfig </path/to/tsconfig.json>
```

Specify a `tsconfig.json` file that options should be read from. If not specified TypeDoc will look for `tsconfig.json` in the current directory and parent directories like `tsc` does.

When TypeDoc loads a `tsconfig.json` file, it also will read TypeDoc options declared under the `typedocOptions` key and look for a `tsdoc.json` file in the same directory to read the supported tags.

TypeDoc provides its default configuration for extension in `typedoc/tsdoc.json`. To add a custom block tag, try:

```json
// tsdoc.json
{
    "$schema": "https://developer.microsoft.com/json-schemas/tsdoc/v0/tsdoc.schema.json",
    "extends": ["typedoc/tsdoc.json"],
    "tagDefinitions": [
        {
            "tagName": "@myCustomTag",
            "syntaxKind": "block"
        }
    ]
}
```

## compilerOptions

Used to selectively override compiler options for generating documentation. TypeDoc parses code using the TypeScript compiler and will therefore behave similarly to tsc. Values set with this option
will override options read from `tsconfig.json`. See [#1891](https://github.com/TypeStrong/typedoc/pull/1891) for details.

This option may only be set within a config file.

```json
// typedoc.json
{
    "compilerOptions": {
        "strictNullChecks": false
    }
}
```

## plugin

```bash
$ typedoc --plugin typedoc-plugin-markdown
$ typedoc --plugin ./custom-plugin.js
```

Specifies the plugins that should be loaded. By default, no plugins are loaded.

Prior to version 0.24.0, plugins would be automatically loaded if they contained `typedocplugin`, `typedoc-plugin` or `typedoc-theme`
in their package keywords. Plugins should still specify these keywords in their keywords so that they can be automatically discovered
and included in the [Plugins](/guides/plugins/) and [Themes](/guides/themes/) pages.
