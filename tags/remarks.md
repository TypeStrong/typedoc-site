---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@remarks"
    parent: Tags
    order: 31
---

# @remarks

{% include 'tag-info', kind: 'Block', tsdoc: 'remarks' %}

The `@remarks` tag can be used to separate the summary section of a documentation content from
additional detailed information. At most one `@remarks` block is permitted in a comment. Unlike
most tags, the `@remarks` tag will be copied if `{@inheritDoc}` is used in a comment.

Themes _may_ use it to separate documentation to be displayed on an summary page from documentation
displayed on a dedicated page. The default theme does not attach special behavior to this tag,
displaying its contents under a `# Remarks` header like other block tags.

## Example

```ts
/**
 * Some docs here
 *
 * @remarks
 * Much longer documentation here
 */
export function rand(): number;
```

## See also

-   The [`@inheritDoc`](/tags/inheritDoc) tag
-   The [`@privateRemarks`](/tags/privateRemarks/) tag
