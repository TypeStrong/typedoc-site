---
layout: "guide"
tags: tag
title: "@overload"
---

# @overload

{% include 'tag-info', kind: 'Modifier' %}

The `@overload` tag is recognized for use in JavaScript projects which can use it to declare overloads since TypeScript 5.0.

## Example

```js
/**
 * @overload
 * @param {string} value first signature
 * @return {void}
 */

/**
 * @overload
 * @param {number} value second signature
 * @param {number} [maximumFractionDigits]
 * @return {void}
 */

/**
 * @param {string | number} value
 * @param {number} [maximumFractionDigits]
 */
function printValue(value, maximumFractionDigits) {}
```

## See Also

-   The [TypeScript 5.0 release notes](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#overload-support-in-jsdoc)
