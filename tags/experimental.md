---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@experimental"
    parent: Tags
    order: 10
---

# @experimental

{% include 'tag-info', kind: 'Modifier', tsdoc: 'experimental' %}

This tag can be used to indicate that the associated member is intended to eventually be used by third-party
developers but is not yet stable enough to conform to semantic versioning requirements.

The TSDoc specification indicates that the `@beta` and `@experimental` tags should be treated as semantically
equivalent. TypeDoc users should generally use one or the other, but not both.

## Example

```ts
export class Visibility {
    /** @experimental */
    newBehavior(): void;
}
```

## See Also

-   The [`@alpha`](/tags/alpha/) tag
-   The [`@beta`](/tags/beta/) tag
-   The [`@public`](/tags/public/) tag
-   The [`--visibilityFilters`](/options/output/#visibilityfilters) option
