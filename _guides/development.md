---
layout: 'guide'
title: 'Development'
menuOrder: 6
---

# Development

This page is a work in progress overview of TypeDoc's architecture.
For more details about each individual component, refer to the doc comments within each module.
It is intended primarily for those interested in contributing to the TypeDoc codebase or developing a plugin.

## High Level

TypeDoc follows several high level steps when called.

1. Read options<br>
   Necessary to determine which plugins should be loaded.
2. Load plugins<br>
   If `--plugin` was used, loads only those specified plugins, otherwise loads all npm plugins with the `typedocplugin` keyword.
3. Read options again to pick up plugin options
4. Convert the input files into the models (also called reflections) that live under `src/lib/models`
5. Resolve the models<br>
   Necessary to handle links to models that might not have been created when the source model is generated.
6. Output the models by serializing to HTML and/or JSON

TypeDoc's code is loosely organized according to each of these steps.
The code to read options lives under `src/lib/utils/options`.
The plugin loading code lives in `src/lib/utils/plugins`.
Conversion is performed according to the Node's `ts.SyntaxKind`. Each distinct `SyntaxKind` gets its own converter under the `src/lib/converter` directory.
Resolution is implemented entirely by internal plugins that live in `src/lib/output/plugins` and listen to the `Converter.EVENT_RESOLVE` event.
Output is split into two folders, for JSON output see the `src/lib/serialization` directory, and for HTML output see `src/lib/output`.

Plugins may effect any part of the process after step 2 by listening to events fired by each component or adding / replacing handlers for a given task.
As an example, the [Converter](https://typedoc.org/api/classes/converter.html) fires events before starting conversion, when declarations are converted and when the project should be resolved.

## Tests

TypeDoc has tests for individual utilities and some components, but the majority of the project is tested by converting source files into their JSON model and comparing it to a known good version. The basic example under `examples/basic` is rendered to HTML to test theme changes.

If changing the behavior of a converter or resolver, it should be possible to modify one of the existing tests under `src/test/converter`.
Bug fixes or feature additions which need to change one of the `specs*.json` files should run `npm run rebuild_specs [converter|renderer] [converter filter]` to run the current build of TypeDoc on the source files and generate new specs.
For other components, we use [Mocha](https://mochajs.org/) to write tests.

## Components

For more detailed information about the implementation and API surface of each component, consult its API documentation.
All components are available on the [Application](https://typedoc.org/api/classes/application.html) class, which is passed to plugins.

### Options

TypeDoc provides some 30 options which determine how the project model is generated and output to disk.
The [Options](https://typedoc.org/api/classes/options.html) class consolidates application options into a single location and handles type conversion.

There are 6 builtin option types as specified by the [ParameterType](https://typedoc.org/api/enums/parametertype.html) enum.

- `String` - A string
- `Number` - A number which is not `NaN`
- `Boolean` - `true` or `false`
- `Map` - Defines a map between string keys and an arbitrary type. See the [tests](https://github.com/TypeStrong/typedoc/blob/master/src/test/utils/options/declaration.test.ts#L39) for an example.
- `Mixed` - An arbitrary type that will just be passed through by TypeDoc.
- `Array` - An array of strings.

Options are discovered and set by option readers, which are documented in the [OptionReader](https://typedoc.org/api/interfaces/optionsreader.html) interface.

Plugins can declare their own options by calling [Options.addDeclaration](https://typedoc.org/api/classes/options.html#adddeclaration).

### Plugins

Plugins are loaded by the [PluginHost](https://typedoc.org/api/classes/pluginhost.html).
Plugins should export a `load` function which will be called by TypeDoc when loading the plugin with an instance of `PluginHost`.
This function should add any options the plugin accepts and add any listeners necessary to effect TypeDoc's behavior.

```typescript
import { ParameterType, Converter } from 'typedoc';

export function load(host: PluginHost) {
    const app: Application = host.application;

    app.options.addDeclaration({
        name: 'plugin-option',
        help: 'Displayed when --help is passed',
        type: ParameterType.String, // The default
        defaultValue: '' // The default
    });

    app.converter.on(Converter.EVENT_RESOLVE, (context: Context) => {
        if (app.options.getValue('plugin-option') === 'something') {
            // ...
        }
    });
}
```

### Converters

Docs to come - For the most part converters work just on `ts.SyntaxKind`, but there are special cases that need to be covered.

### JSON Output

Docs to come - TypeDoc's JSON output is defined according to serializers which support some or all reflections.

### HTML Output

Nobody currently working on the project fully understands how this works... Docs to come eventually.
