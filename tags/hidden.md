---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@hidden"
    parent: Tags
    order: 12
---

# @hidden

{% include 'tag-info', kind: 'Modifier' %}

Reflections marked with the `@hidden` tag will be removed from the documentation.
It is equivalent to the `@ignore` JSDoc tag, which is also recognized by TypeDoc.

## Example

```ts
export class Visibility {
    /** @hidden */
    newBehavior(): void;
}
```

## See Also

-   The [`@ignore`](/tags/ignore/) tag
-   The [`@internal`](/tags/internal/) tag
