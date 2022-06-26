---
layout: "guide"
tags: guide
title: "Doc Comments"
menuOrder: 3
---

# Doc Comments

TypeDoc implements a minimal parser for your comments which extracts TSDoc/JSDoc tags and recognizes code
blocks to ignore decorators. The resulting markup after resolving tags is then passed to the [Marked](https://github.com/markedjs/marked)
markdown parser to be converted to HTML.

```ts
/**
 * This comment _supports_ [Markdown](https://marked.js.org/)
 */
export class DocumentMe {}
```

## Code Blocks

TypeDoc supports code blocks in markdown and uses [Shiki](https://shiki.matsu.io/)
to provide syntax highlighting. You can specify the syntax highlighting theme with the
`--lightHighlightTheme` and `--darkHighlightTheme` options.

````ts
/**
 * Code blocks are great for examples
 *
 * ```ts
 * // run typedoc --help for a list of supported languages
 * const instance = new MyClass();
 * ```
 */
export class MyClass {}
````

## Escaping Comments

TypeDoc supports escaping special characters in comments to include literal `{}@/` characters.
All other escapes will be passed through to be processed by Marked. As an example:

````ts
/**
 * This is not a \@tag. Nor is this an \{\@inlineTag\}
 *
 * It is possible to escape the end of a comment:
 * ```ts
 * /**
 *  * docs for `example()`
 *  *\/
 * function example(): void
 * ```
 */
````

Will be rendered as:

> This is not a @tag. Nor is this an {@inlineTag}
>
> It is possible to escape the end of a comment:
>
> ```ts
> /**
>  * docs for `example()`
>  */
> function example(): void;
> ```

## TSDoc Compliance

The TSDoc standard is a proposal to standardize parsing of JSDoc-like comments. TypeDoc aims to be
compliant with the TSDoc standard, but does not enforce it. This means that while TypeDoc should be able
to parse all (or nearly all) TSDoc-complaint comments, it does not require that your comments follow the standard.

This approach has several benefits, including better support for projects originally written using JSDoc and
support for more markdown constructs (including day-to-day features like
[headings](https://github.com/microsoft/tsdoc/issues/197), and
[lists](https://github.com/microsoft/tsdoc/issues/178)). However, for projects requiring stricter validation
of comment formats, this laxness may not be acceptable. In this case, [api-extractor](https://api-extractor.com/)
is recommended instead of TypeDoc for it's much stricter conformance to TSDoc.

## See Also

-   The [Tags overview](/guides/tags/)
-   The [Declaration References](/guides/declaration-references/) guide
-   The [TSDoc](https://tsdoc.org/) website
