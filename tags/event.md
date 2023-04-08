---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@event"
    parent: Tags
    order: 7
---

# @event

{% include 'tag-info', kind: 'Modifier' %}

The `@event` tag is used to mark a reflection as belonging in the "Events" group.
It is equivalent to specifying `@group Events` in the comment.

## Example

```ts
export class App extends EventEmitter {
    /**
     * @event
     */
    static ON_REQUEST = "request";
}
```

## See Also

-   The [`@group`](/tags/group/) tag
-   The [`@eventProperty`](/tags/eventProperty/) tag
