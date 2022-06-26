---
layout: "guide"
tags: tag
title: "@throws"
---

# @throws

{% include 'tag-info', kind: 'Block', tsdoc: 'throws' %}

The `@throws` tag can be used to document an exception that can be thrown by a function or method.

## Example

```ts
/**
 * @throws {@link UserError} if `max < min`
 */
export function rand(min: number, max: number): number;
```
