---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@ignore"
    parent: Tags
    order: 13
---

# @ignore

{% include 'tag-info', kind: 'Modifier' %}

Reflections marked with the `@hidden` tag will be removed from the documentation.
It is equivalent to the `@ignore` JSDoc tag.

## Example

```ts
export class Visibility {
    /** @ignore */
    newBehavior(): void;
}
```

## See Also

-   The [`@ignore`](/tags/ignore/) tag
-   The [`@internal`](/tags/internal/) tag
-   The [JSDoc `@ignore`](https://jsdoc.app/tags-ignore.html) tag
