---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@group"
    parent: Tags
    order: 11
---

# @group

{% include 'tag-info', kind: 'Block' %}

The `@group` tag can be used to place several related API items under a common header when
listed in a page's index. It may be specified multiple times to list a reflection under several
headings.

Unlike the [`@category`](/tags/category/) tag, reflections will be automatically placed under
a header according to their kind if the `@group` tag is not specified. This tag can be used to
simulate custom member types.

## Example

```ts
export class App extends EventEmitter {
    /**
     * @group Events
     */
    static readonly BEGIN = "begin";

    /**
     * The `@event` tag is equivalent to `@group Events`
     * @event
     */
    static readonly PARSE_OPTIONS = "parseOptions";

    /**
     * The `@eventProperty` tag is equivalent to `@group Events`
     * @eventProperty
     */
    static readonly END = "end";
}
```

## See Also

-   The [`@category`](/tags/category/) tag
-   The [`--searchGroupBoosts`](/options/output/#searchgroupboosts) option
