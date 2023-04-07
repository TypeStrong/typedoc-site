---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@private"
    parent: Tags
    order: 25
---

# @private

{% include 'tag-info', kind: 'Modifier' %}

This tag should generally not be used and may be removed in a future release.
The `@private` tag overrides the visibility of a reflection to be private.

## Example

```ts
export class Visibility {
    /** @private */
    member = 123;
}

// Will be documented as:
export class Visibility {
    private member = 123;
}
```

## See Also

-   The [`@public`](/tags/public/) tag
-   The [`@protected`](/tags/protected/) tag
-   The [`@internal`](/tags/internal/) tag
-   The [`--excludePrivate`](/options/input/#excludeprivate) option
