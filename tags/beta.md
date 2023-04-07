---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@beta"
    parent: Tags
    order: 2
---

# @beta

{% include 'tag-info', kind: 'Modifier', tsdoc: 'beta' %}

This tag can be used to indicate that the associated member is intended to eventually be used by third-party
developers but is not yet stable enough to conform to semantic versioning requirements.

The TSDoc specification indicates that the `@beta` and `@experimental` tags should be treated as semantically
equivalent. TypeDoc users should generally use one or the other, but not both.

## Example

```ts
export class Visibility {
    /** @beta */
    newBehavior(): void;
}
```

## See Also

-   The [`@alpha`](/tags/alpha/) tag
-   The [`@experimental`](/tags/experimental/) tag
-   The [`@public`](/tags/public/) tag
-   The [`--visibilityFilters`](/options/output/#visibilityfilters) option
