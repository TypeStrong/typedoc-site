---
layout: "guide"
tags: guide
title: "Doc Comments"
menuOrder: 3
---

# Doc Comments

All comments are parsed as markdown. TypeDoc uses the [Marked](https://github.com/markedjs/marked)
markdown parser to convert comments to HTML.

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

## See Also

-   The [Tags overview](/guides/tags/)
-   The [Declaration References](/guides/declaration-references/) guide
