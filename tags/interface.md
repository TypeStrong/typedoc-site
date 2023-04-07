---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@interface"
    parent: Tags
    order: 15
---

# @interface

{% include 'tag-info', kind: 'Modifier' %}

If present on a type alias, will cause it to be converted as an interface. This will result in all "dynamic" properties
being expanded to real properties.

## Example

```ts
/**
 * This will be displayed as an interface
 * @property a comment for a
 * @prop b comment for b
 * @interface
 */
export type Resolved = Record<"a" | "b" | "c", string>;

// will be documented as if you wrote

/** This will be displayed as an interface */
export interface Resolved {
    /** comment for a */
    a: string;
    /** comment for b */
    b: string;
    c: string;
}
```

## See Also

-   The [`@property`](/tags/property/) tag
-   The [`@namespace`](/tags/namespace/) tag
