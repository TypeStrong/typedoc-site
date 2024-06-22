---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@hideconstructor"
    parent: Tags
    order: 12.5
---

# @hideconstructor

{% include 'tag-info', kind: 'Modifier' %}

This tag should only be used to work around [TypeScript#58653](https://github.com/microsoft/TypeScript/issues/58653).
Prefer the [`@hidden`](/tags/hidden/) or [`@ignore`](/tags/ignore/) tags instead.

Classes marked with `@hideconstructor` will have their constructor hidden, it may also be placed on constructors to
remove them from the documentation

## Example

```ts
/** @hideconstructor */
export class Visibility {
    /** Will not be present in the generated documentation */
    constructor() {}
}
```

## See Also

-   The [`@hidden`](/tags/hidden/) tag
-   The [`@ignore`](/tags/ignore/) tag
