---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@internal"
    parent: Tags
    order: 16
---

# @internal

{% include 'tag-info', kind: 'Modifier', tsdoc: 'internal' %}

The `@internal` tag indicates that a reflection is not intended to be used by API consumers.
API items annotated with `@internal` may be removed from the generated documentation by specifying
the `--excludeInternal` option.

## Example

```ts
export class Visibility {
    /** @internal */
    member = 123;
}
```

## See Also

-   The [`@alpha`](/tags/alpha) tag
-   The [`@beta`](/tags/beta) tag
-   The [`@experimental`](/tags/experimental) tag
-   The [`--excludeInternal`](/options/input/#excludeinternal) option
-   The [`--stripInternal`](https://www.typescriptlang.org/tsconfig#stripInternal) TypeScript compiler option
