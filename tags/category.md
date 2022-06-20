---
layout: "guide"
tags: tag
title: "@category"
---

# @category

{% include 'tag-info', kind: 'Block' %}

The `@category` tag can be used to place several related API items under a common header when
listed in a page's index. It may be specified multiple times to list a reflection under several
headings.

```ts
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

-   The [`@group`](/tags/group/) tag
-   The [`categorizeByGroup`](/guides/options/#categorizebygroup) option
-   The [`defaultCategory`](/guides/options/#defaultcategory) option
-   The [`categoryOrder`](/guides/options/#categoryorder) option
-   The [`searchCategoryBoosts`](/guides/options/#searchcategoryboosts) option
