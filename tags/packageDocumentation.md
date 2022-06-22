---
layout: "guide"
tags: tag
title: "@packageDocumentation"
---

# @packageDocumentation

{% include 'tag-info', kind: 'Modifier', tsdoc: 'packageDocumentation' %}

The `@packageDocumentation` tag is used to mark a comment as referring to a file rather than the declaration following it.
The TypeDoc specific [`@module`](/tags/module/) tag can be used for the same purpose when semantically clearer.

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
