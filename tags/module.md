---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@module"
    parent: Tags
    order: 19
---

# @module

{% include 'tag-info', kind: 'Block' %}

The `@module` tag is used to mark a comment as referring to a file rather than the declaration following it.
It may optionally be used to rename a module whose name TypeDoc guesses incorrectly.

The TSDoc specified [`@packageDocumentation`](/tags/packageDocumentation) tag can also be used to mark
a comment as referring to the file, but cannot be used to rename the module.

**NOTE:** A comment block where the `@module` tag is used must be the first comment in the file.
Therefore, it is recommended to place it at the top of the file before any import statements.

## Example

```ts
// file1.ts
/**
 * This is the doc comment for file1.ts
 *
 * Specify this is a module comment and rename it to my-module:
 * @module my-module
 */
import * as lib from "lib";

// file2.ts
/**
 * Specify this is a module comment without renaming it:
 * @module
 */
import * as lib from "lib";

// file3.ts
/**
 * This is *not* a doc comment for the file, it is a doc comment for the import.
 * Include the `@module` or `@packageDocumentation` tag to mark it as a file comment.
 */
import * as lib from "lib";
```

## See Also

-   The [`@packageDocumentation`](/tags/packageDocumentation/) tag
