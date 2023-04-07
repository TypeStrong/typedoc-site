---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@namespace"
    parent: Tags
    order: 20
---

# @namespace

{% include 'tag-info', kind: 'Modifier' %}

The `@namespace` tag can be used to tell TypeDoc to convert a variable as a namespace. This will cause
any properties to be resolved and documented as exported variables/functions.

## Example

```ts
const a = 1;
const b = () => 2;
const c = { a, b, c: 3 };
/** @namespace */
export const d = { ...c, d: 4 };

// will be documented as if you wrote

export namespace d {
    export const a = 1;
    export const b = () => 2;
    export const c = 3;
    export const d = 4;
}
```

## See Also

-   The [`@property`](/tags/property/) tag
-   The [`@interface`](/tags/interface/) tag
