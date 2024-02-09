---
layout: "guide"
tags: tag
eleventyNavigation:
    key: "@categoryDescription"
    parent: Tags
    order: 3.5
---

# @categoryDescription

{% include 'tag-info', kind: 'Block' %}

The `@categoryDescription` tag can be used to provide additional context about a category of reflections
which was created with the [`@category`](/tags/category/) tag.

The `@categoryDescription` tag should be placed in the comment for the reflection which contains the
child reflections marked with `@category`.

The first line of the `@categoryDescription` will be taken as the category name, and following lines will
be used for the description.

## Example

```ts
/**
 * @categoryDescription Advanced Use
 * These functions are available for...
 * @module
 */

/**
 * @category General Use
 */
export function runProcess(): void;

/**
 * @category Advanced Use
 */
export function unref(): void;

/**
 * @category Advanced Use
 */
export function ref(): void;
```

## See Also

-   The [`@category`](/tags/category/) tag
-   The [`@group`](/tags/group/) tag
-   The [`@module`](/tags/module/) tag
-   The [`--categorizeByGroup`](/options/organization/#categorizebygroup) option
-   The [`--defaultCategory`](/options/organization/#defaultcategory) option
-   The [`--categoryOrder`](/options/organization/#categoryorder) option
-   The [`--searchCategoryBoosts`](/options/output/#searchcategoryboosts) option
