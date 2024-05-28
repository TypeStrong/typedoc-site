---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@packageDocumentation"
    parent: Tags
    order: 23
---

# @packageDocumentation

{% include 'tag-info', kind: 'Modifier', tsdoc: 'packageDocumentation' %}

The `@packageDocumentation` tag is used to mark a comment as referring to a file rather than the declaration following it.
The TypeDoc specific [`@module`](/tags/module/) tag can be used for the same purpose when semantically clearer.

**NOTE:** A comment block where the `@packageDocumentation` tag is used must be the first comment in the file.
Therefore, it is recommended to place it at the top of the file before any import statements.

## Example

```ts
// file1.ts
/**
 * This is the doc comment for file1.ts
 *
 * @packageDocumentation
 */
import * as lib from "lib";

// file2.ts
/**
 * This is *not* a doc comment for the file, it is a doc comment for the import.
 * Include the `@module` or `@packageDocumentation` tag to mark it as a file comment.
 */
import * as lib from "lib";
```

## See Also

-   The [`@module`](/tags/module/) tag
