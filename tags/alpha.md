---
layout: "guide"
tags: tag
title: "@alpha"
---

# @alpha

{% include 'tag-info', kind: 'Modifier', tsdoc: 'alpha' %}

This tag can be used to indicate that the associated member is intended to eventually be used by third-party
developers but is not yet stable enough to conform to semantic versioning requirements.

## Example

```ts
export class Visibility {
    /** @alpha */
    newBehavior(): void;
}
```

## See Also

-   The [`@beta`](/tags/beta/) tag
-   The [`@experimental`](/tags/experimental/) tag
-   The [`@public`](/tags/public/) tag
-   The [`--visibilityFilters`](/guides/options/#visibilityfilters) option
