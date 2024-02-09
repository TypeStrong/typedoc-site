---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@groupDescription"
    parent: Tags
    order: 11.5
---

# @groupDescription

{% include 'tag-info', kind: 'Block' %}

The `@groupDescription` tag can be used to provide additional context about a group of reflections.
TypeDoc automatically groups reflections according to their TypeScript kind, but custom groups can
be created with the [`@group`](/tags/group/) tag.

The `@groupDescription` tag should be placed in the comment for the reflection which contains the
group of child reflections.

The first line of the `@groupDescription` will be taken as the group name, and following lines will
be used for the description.

## Example

```ts
/**
 * @groupDescription Events
 * Events are for...
 */
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

-   The [`@group`](/tags/group/) tag
-   The [`@category`](/tags/category/) tag
-   The [`@categoryDescription`](/tags/categoryDescription/) tag
-   The [`--searchGroupBoosts`](/options/output/#searchgroupboosts) option
