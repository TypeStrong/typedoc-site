---
layout: "guide"
title: "Tags"
---

# Tags

TypeDoc supports a specific set of tags. Many JSDoc tags are not supported because the TypeScript
compiler can infer the same information directly from code. Any tags which are not recognized will
result in a warning being emitted. TypeDoc will still parse the documentation comment, using context
clues to determine the likely intended tag type.

When writing documentation for function signatures, you don't have to repeat yourself. TypeDoc will
automatically copy comments and tags of the function implementation to its signatures.

## Defining Tags

TypeDoc supports defining what tags are supported through either a `tsdoc.json` file or via the
`--blockTags`, `--inlineTags`, and `--modifierTags` options. If defined in a `tsdoc.json` file,
the file **must** be placed alongside `tsconfig.json`. See the
[TSDoc documentation](https://tsdoc.org/pages/packages/tsdoc-config/) for details on the file format.

```json
{
    "$schema": "https://developer.microsoft.com/en-us/json-schemas/tsdoc/v0/tsdoc.schema.json",
    "extends": ["typedoc/tsdoc.json"],
    "noStandardTags": false,
    "tagDefinitions": [
        {
            "tagName": "@customTag",
            "syntaxKind": "modifier"
        }
    ]
}
```

## TypeScript in JavaScript

If your project uses TypeScript to type check JavaScript, TypeDoc will pick up type aliases and interfaces
defined with `@typedef` and `@callback`. See the
[TypeScript handbook](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#typedef-callback-and-param) for details.

## See Also

-   The [Doc Comments overview](/guides/doccomments/)
