---
layout: "guide"
tags: tag
title: "@module"
---

# @module

{% include 'tag-info', kind: 'Block' %}

The `@module` tag is used to mark a comment as referring to a file rather than the declaration following it.
It may optionally be used to rename a module whose name TypeDoc guesses incorrectly.

The TSDoc specified [`@packageDocumentation`](/tags/packageDocumentation) tag can also be used to mark
a comment as referring to the file, but cannot be used to rename the module.

## Example

```ts
/**
 * This is the doc comment for file1.ts
 *
 * Specify this is a module comment and rename it to my-module:
 * @module my-module
 * Specify this is a module comment without renaming it:
 * @module
 */
import * as lib from "lib";
```

## See Also

-   The [`@packageDocumentation`](/tags/packageDocumentation/) tag
