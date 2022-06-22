---
layout: "guide"
tags: tag
title: "@protected"
---

# @protected

{% include 'tag-info', kind: 'Modifier' %}

This tag should generally not be used and may be removed in a future release.
The `@protected` tag overrides the visibility of a reflection to be protected.

## Example

```ts
export class Visibility {
    /** @protected */
    member = 123;
}

// Will be documented as:
export class Visibility {
    protected member = 123;
}
```

## See Also

-   The [`@public`](/tags/public/) tag
-   The [`@private`](/tags/private/) tag
-   The [`@internal`](/tags/internal/) tag
-   The [`--excludeProtected`](/guides/options/#excludeprotected) option
