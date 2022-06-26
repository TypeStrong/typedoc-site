---
layout: "guide"
tags: tag
title: "@override"
---

# @override

{% include 'tag-info', kind: 'Modifier', tsdoc: 'override' %}

TypeDoc parses the `@override` tag for compatibility with TSDoc, but does not attach any meaning to it's use.

## Example

```ts
export class Visibility {
    /** @override */
    newBehavior(): void;
}
```

## See Also

-   The [`@sealed`](/tags/sealed/) tag
-   The [`@virtual`](/tags/virtual/) tag
-   The [`--visibilityFilters`](/guides/options/#visibilityfilters) option
