---
layout: "guide"
tags: tag
title: "@readonly"
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

    set prop(_: number) {
        throw new Error("Not permitted");
    }
}
```
