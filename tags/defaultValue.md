---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@defaultValue"
    parent: Tags
    order: 4
---

# @defaultValue

{% include 'tag-info', kind: 'Block', tsdoc: 'defaultValue' %}

The `@defaultValue` tag can be used to document the default value for an accessor or property.

The default theme does not attach special behavior to this tag, displaying its contents under
a `# Default Value` header like other block tags.

## Example

```ts
export interface CompilerOptions {
    strict?: boolean;
    /**
     * @defaultValue `true` if `strict` is `true`, otherwise `false`
     */
    strictNullChecks?: boolean;
}
```
