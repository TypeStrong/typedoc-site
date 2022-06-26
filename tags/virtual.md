---
layout: "guide"
tags: tag
title: "@virtual"
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
-   The [`--visibilityFilters`](/guides/options/#visibilityfilters) option
