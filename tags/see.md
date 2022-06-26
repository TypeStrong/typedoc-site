---
layout: "guide"
tags: tag
title: "@see"
---

# @see

{% include 'tag-info', kind: 'Modifier', tsdoc: 'see' %}

The `@see` tag can be used to create a list of references for other resources related to this export.

## Example

```ts
/**
 * @see [Factorial - Wikipedia](https://en.wikipedia.org/wiki/Factorial)
 * @see {@link semifactorial}
 */
export function factorial(n: number): number;
```
