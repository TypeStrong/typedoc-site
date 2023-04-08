---
layout: "guide"
eleventyNavigation:
    order: 1
    key: Overview
---

# What is TypeDoc?

TypeDoc is a documentation generator for TypeScript, a tool which reads your [TypeScript](https://www.typescriptlang.org/) source files,
parses comments contained within them, and generates a static site containing documentation for your code.

TypeDoc generates documentation based on your exports. It will follow re-exports to document reflections documented in other files

```ts
// $ npx typedoc src/index.ts

/** Documented! */
export function direct() {
    return 1;
}

// Also documented.
export { indirect } from "./other";

// Not documented as it is not visible to your module's consumers.
function localHelper() {}
```

## Get Started

-   [Install](/guides/installation/)
-   [Configure](/options/)
-   [Extend](/guides/plugins/)
