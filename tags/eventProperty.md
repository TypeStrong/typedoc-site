---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@eventProperty"
    parent: Tags
    order: 8
---

# @eventProperty

{% include 'tag-info', kind: 'Modifier', tsdoc: 'eventProperty' %}

The `@eventProperty` tag is used to mark a reflection as belonging in the "Events" group.
It is equivalent to specifying `@group Events` in the comment.

## Example

```ts
export class App extends EventEmitter {
    /**
     * @eventProperty
     */
    static ON_REQUEST = "request";
}
```

## See Also

-   The [`@group`](/tags/group/) tag
-   The [`@event`](/tags/event/) tag
