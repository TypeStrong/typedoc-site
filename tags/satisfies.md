---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@satisfies"
    parent: Tags
    order: 33
---

# @satisfies

{% include 'tag-info', kind: 'Block' %}

This tag is recognized for parity with TypeScript 5.0's [`@satisfies` Support in JSDoc](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#satisfies-support-in-jsdoc).

It is hidden by default by the [`--excludeTags`](/options/comments/#excludetags) option.

## Example

```js
/**
 * @satisfies {ConfigSettings}
 */
export const myConfigSettings = { ... };
```

## See Also

-   The [`--excludeTags`](/options/comments/#excludetags) option
