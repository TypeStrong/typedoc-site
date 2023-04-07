---
layout: "guide"
eleventyNavigation:
    order: 2
    key: Tags
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

## Block Tags

Block tags are tags that are associated with the following text. They can be used to divide documentation
into sections ([`@remarks`](/tags/remarks/)), modify how the reflection is processed ([`@group`](/tags/group/))
or provide examples for how to use the export ([`@example`](/tags/example/)).

````ts
/**
 * Summary
 *
 * @remarks
 * Additional details
 *
 * @example
 * ```ts
 * factorial(3) // => 6
 * ```
 */
````

## Modifier Tags

Modifier tags have no associated content and serve only to specify some special behavior for how the reflection is processed
by setting some binary flag. For example, [`@hidden`](/tags/hidden/) will remove a reflection from the documentation
while [`@internal`](/tags/internal/) will mark the reflection as internal for use with
[`--visibilityFilters`](/options/output/#visibilityfilters) or [`--excludeInternal`](/options/input/#excludeinternal).

## Inline Tags

Inline tags are used to mark text within a paragraph for processing by TypeDoc. The most important ones are the
[`@link`](/tags/link/) and [`@inheritDoc`](/tags/inheritDoc/) tags.

## TypeScript in JavaScript

If your project uses TypeScript to type check JavaScript, TypeDoc will pick up type aliases and interfaces
defined with `@typedef` and `@callback`. See the
[TypeScript handbook](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#typedef-callback-and-param) for details.

## See Also

-   The [Doc Comments overview](/guides/doccomments/)
