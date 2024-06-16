---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@document"
    parent: Tags
    order: 5.5
---


# @document

{% include 'tag-info', kind: 'Block' %}

Instructs TypeDoc to include the path specified in the tag content as a document
within the generated site. See the [External Documents](/guides/documents/) guide
for more details.

## Example

```ts
/**
 * @document promise-tutorial.md
 */
export class Promise<T> {
    // ...
}
```

## See Also

- The [`projectDocuments`](/options/input/#projectdocuments) option
