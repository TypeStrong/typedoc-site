---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@see"
    parent: Tags
    order: 35
---

# @see

{% include 'tag-info', kind: 'Block', tsdoc: 'see' %}

The `@see` tag can be used to create a list of references for other resources related to this export.

## Example

```ts
/**
 * @see [Factorial - Wikipedia](https://en.wikipedia.org/wiki/Factorial)
 * @see {@link semifactorial}
 */
export function factorial(n: number): number;
```
