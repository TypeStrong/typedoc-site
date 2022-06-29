---
layout: "guide"
tags: tag
title: "{@link}"
---

# {@link}

{% include 'tag-info', kind: 'Inline', tsdoc: 'link' %}

The `@link` tag is used to refer to another documented declaration. It takes one of the following forms:

-   `{@link Foo.Bar}` - Links to `Foo.Bar`, with link text `Bar`
-   `{@link Foo.Bar | Foo.Bar}` - Links to `Foo.Bar`, with link text `Foo.Bar`
-   (non-TSDoc) `{@link Foo.Bar Foo.Bar}` - Links to `Foo.Bar`, with link text `Foo.Bar`

In 0.23, if resolving a link with [declaration references](/guides/declaration-references/) fails, TypeDoc will attempt to resolve the link with
the [legacy method](/guides/link-resolution/) used in 0.22 and earlier.
This behavior will be removed in 0.24.

External hyperlinks should be constructed with markdown `[text](link)` style links, not with the `@link` tag.

## Example

```ts
/**
 * Similar to {@link random}, but with a range of [0, 100)
 */
export function rand(): number;

/**
 * Returns a random number in the range [0, 1)
 */
export function random(): number;

/**
 * {@link Data.prop | instance member}
 * {@link Data.member | static member}
 * {@link Data#member | instance member}
 *
 */
export class Data {
    prop = 0;

    static member = 1;
    member = 2;
}

/**
 * {@link Merged:namespace} links to the namespace.
 * {@link Merged:enum} links to the enum.
 */
export namespace Merged {
    export const a = 3;
}

export enum Merged {
    A,
}
```

## TSDoc Compatibility

TypeDoc implements the **beta** version of declaration references, specified at
[tsdoc/src/beta/DeclarationReference.grammarkdown](https://github.com/microsoft/tsdoc/blob/main/tsdoc/src/beta/DeclarationReference.grammarkdown).
TypeDoc does not support parsing the initial declaration reference syntax proposed by TSDoc.
For more details see the [declaration reference](/guides/declaration-references/) documentation.

## JSDoc Compatibility

TypeDoc will also recognize the `@linkplain` and `@linkcode` JSDoc tags and resolve them with the same method as other links.

## See Also

-   The [`@template`](/tags/template/) tag
