---
layout: "guide"
tags: guide
eleventyNavigation:
    order: 4
    key: Organization
    parent: Options
---

# Organization Options

These options control how content is structured on generated pages.

## categorizeByGroup

```bash
$ typedoc --categorizeByGroup false
```

This flag categorizes reflections by group (within properties, methods, etc).
To allow methods and properties of the same category to be grouped together, set this flag to false.
Defaults to true.

## defaultCategory

```bash
$ typedoc --defaultCategory "Category Name"
```

Sets the name for the default category which is used when only some elements of the page are categorized.
Defaults to 'Other'

## categoryOrder

```json
// typedoc.json
{
    "categoryOrder": ["Category Name", "Other Category", "*"]
}
```

Array option which allows overriding the order categories display in. A string of `*` indicates where categories that are not in the list should appear.

By default, categories are displayed alphabetically. If unknown categories are found, they will be listed at the end by default.

## sort

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
-   `kind` (order according to the `kindSortOrder` option)

## kindSortOrder

Specifies the relative ordering of reflections if `kind` is specified in the `sort` option. The default order is:

```json
// typedoc.json
{
    "kindSortOrder": [
        "Reference",
        "Project",
        "Module",
        "Namespace",
        "Enum",
        "EnumMember",
        "Class",
        "Interface",
        "TypeAlias",
        "Constructor",
        "Property",
        "Variable",
        "Function",
        "Accessor",
        "Method",
        "ObjectLiteral",
        "Parameter",
        "TypeParameter",
        "TypeLiteral",
        "CallSignature",
        "ConstructorSignature",
        "IndexSignature",
        "GetSignature",
        "SetSignature"
    ]
}
```
