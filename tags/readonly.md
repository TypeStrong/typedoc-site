---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@readonly"
    parent: Tags
    order: 30
---

# @readonly

{% include 'tag-info', kind: 'Modifier', tsdoc: 'readonly' %}

The `@readonly` tag indicates that a reflection should be documented as non-writable, even if writable
according to TypeScript.

## Example

```ts
export class Readable {
    /** @readonly */
    get prop() {
        return 1;
    }

    /** Will be removed from the documentation due to the readonly tag */
    set prop(_: number) {
        throw new Error("Not permitted");
    }
}
```
