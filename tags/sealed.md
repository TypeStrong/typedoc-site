---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@sealed"
    parent: Tags
    order: 34
---

# @sealed

{% include 'tag-info', kind: 'Modifier', tsdoc: 'sealed' %}

TypeDoc parses the `@sealed` tag for compatibility with TSDoc, but does not attach any meaning to it's use.

## Example

```ts
export class Visibility {
    /** @sealed */
    newBehavior(): void;
}
```

## See Also

-   The [`@virtual`](/tags/virtual/) tag
-   The [`@override`](/tags/override/) tag
-   The [`--visibilityFilters`](/options/output/#visibilityfilters) option
