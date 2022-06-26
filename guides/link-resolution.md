---
layout: "guide"
tags: guide
title: "Link Resolution"
menuOrder: 98
---

# Link Resolution (Deprecated)

This page describes the legacy link resolution strategy used by TypeDoc 0.22 and earlier.
For the strategy used by TypeDoc 0.23, see the [Declaration References](/guides/declaration-references/)
documentation.

When a link is specified with `{@link Apple.seeds}` or
`{@link Apple.seeds | link text}`, TypeDoc takes several steps to determine
where to find `Apple.seeds`.

1. Check for the provided name within the current reflection's children.
1. Check for the provided name within the parent reflection's children.
1. Recurse, checking the parent's parent... up to the root project reflection.
1. Check for the provided name in a global list of _all_ reflections.<br>
   _Note: Step four will likely be changing in the future for performance reasons. If at all possible, do not rely on its behavior._

This can be most easily understood with an example.

```ts
// fruits.ts
/**
 * @module
 * Module comment
 */

/** Apple class comment */
class Apple {
    /** seeds property comment */
    seeds = 16;
}

/** Orange class comment */
class Orange {
    /** slices property comment */
    slices = 8;
}
```

When converted, this code will be converted into an internal structure which
resembles the following:

```text
Project <-- Links in the @module comment start resolution here
   - Apple <-- Links in the Apple class comment start resolution here
      - seeds <-- Links in the seeds class comment start resolution here
   - Orange
      - slices
```

If more than one entry point is specified, each entry point's module name as specified
by `@module` or inferred from the file name will be the first entry, for example:

```text
Project
- fruits <-- Links in the @module comment in fruits.ts start resolution here
   - Apple <-- Links in the Apple class comment start resolution here
      - seeds <-- Links in the seeds class comment start resolution here
   - Orange
      - slices
- fruits2
   - Banana
```

This structure can be used to determine the fully qualified name of each
reflection. The fully qualified name of a reflection is the name of the
reflection and all its parents, joined with `.`; that is, the fully qualified
name of the `seeds` property is `Apple.seeds`. You can use the fully
qualified name to link to symbols defined in other source files without relying
on the slow fourth step of the algorithm used to resolve links.

Say `{@link Apple.seeds}` is included in the doc comment for `slices`.
TypeDoc will use the following process to resolve the link:

1. Check `slices` members for elements named `Apple`, find none.
1. Check `Orange` members for elements named `Apple`, find none.
1. Check `"index"` members for elements named `Apple`, find `Apple`.
    1. Recurse, looking for `["seeds"]`, starting from `Apple`
    1. Check `Apple` members for elements named `seeds`, find `Apple.seeds`
    1. Since this was the last element of the array, return `Apple.seeds`

If `{@link Apple.seeds}` was included in the doc comment for `Apple`, TypeDoc
would take the following steps:

1. Check `Apple` members for elements named `Apple`, find none.
1. Check `"index"` members for `Apple`, find the `Apple` class.
    1. Recurse, looking for `["seeds"]`, starting from `Apple`.
    1. Check `Apple` members for elements named `seeds`, find `Apple.seeds`
    1. Since this was the last element of the array, return `Apple.seeds`

Note that due to step four in the algorithm presented above, it is possible
for the `seeds` property on `Apple` to link directly to `slices` on `Orange`
with `{@link seeds}`. This is generally a bad idea. First, it is not obvious
to developers reading the comment which `seeds` is being referenced. Second,
if there are multiple reflections named `seeds`, TypeDoc's behavior when
resolving the link is undefined. Any reflection named `seeds` may be linked.
