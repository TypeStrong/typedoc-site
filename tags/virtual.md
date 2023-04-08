---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@virtual"
    parent: Tags
    order: 39
---

# @virtual

{% include 'tag-info', kind: 'Modifier', tsdoc: 'virtual' %}

TypeDoc parses the `@virtual` tag for compatibility with TSDoc, but does not attach any meaning to it's use.

## Example

```ts
export class Visibility {
    /** @virtual */
    newBehavior(): void;
}
```

## See Also

-   The [`@sealed`](/tags/sealed/) tag
-   The [`@override`](/tags/override/) tag
-   The [`--visibilityFilters`](/options/output/#visibilityfilters) option
