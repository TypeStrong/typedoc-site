---
layout: "guide"
tags: guide
title: "Doc Comments"
menuOrder: 3
---

# Document your code

TypeDoc runs the TypeScript compiler and extracts type information from the generated compiler symbols.
Therefore you don't have to include additional metadata within your comments, TypeScript specific elements
like classes, enumerations or property types and access modifiers will be automatically detected.

## Comment Parsing

### Markdown

All comments are parsed as markdown. TypeDoc uses the [Marked](https://github.com/chjj/marked) markdown parser
to convert comments to HTML.

```typescript
/**
 * This comment _supports_ [Markdown](https://marked.js.org/)
 */
export class DocumentMe {}
```

### Code Blocks

TypeDoc supports code blocks in markdown and uses [Shiki](https://shiki.matsu.io/)
to provide syntax highlighting.

````typescript
/**
 * Code blocks are great for examples
 *
 * ```typescript
 * // run typedoc --help for a list of supported languages
 * const instance = new MyClass();
 * ```
 */
export class MyClass {}
````

### Symbol References

You can link to other classes, members or functions using double square brackets or an inline link tag.

```typescript
/**
 * Standard links:
 * {@link Foo} or {@linkplain Foo} or [[Foo]]
 *
 * Code links: (Puts Foo inside <code> tags)
 * {@linkcode Foo} or [[`Foo`]]
 */
export class Bar implements Foo {}

/** More details */
interface Foo {
    member: boolean;
}
```

Links may also specify their link text by including a pipe (`|`) character after the name.

```typescript
/**
 * The {@link Foo | Foo interface}
 * The [[Foo | Foo interface]]
 */
```

Links are resolved by looking at child reflections, then at adjacent reflections, then at parent reflections.
If a name contains a dot (`.`), each part of the name will be treated as the name of a reflection.
For example, to link to the `member` property of `Foo`, you can use `{@link Foo.member}`. For more details
on link resolution see the [Link Resolution](https://typedoc.org/guides/link-resolution/) guide.

## Supported tags

TypeDoc supports a specific set of tags. Many JSDoc tags are not supported because the TypeScript
compiler can infer the information directly from code. TypeDoc renders any unsupported tags in a
list in the documentation, so they are not lost.

When writing documentation for function signatures, you don't have to repeat yourself. TypeDoc automatically
copies comments and tags of the function implementation to its signatures for you. Of course you can still
overwrite them if you wish to.

The documentation generator currently understands the following doc comment tags:

### `@param <param name>`

Documents a parameter for the subsequent method specified by the param name. The JSDoc param type
is not necessary because it will be read from the TypeScript types.

```typescript
/**
 * @param text  Comment for parameter ´text´.
 */
function doSomething(target: any, text: string): number;
```

### `@typeParam <param name>` or `@template <param name>`

Documents a generic type parameter for the subsequent symbol specified by the param name.

```typescript
/**
 * @typeParam T Comment for type `T`.
 * You may also use the template tag.
 * @template T comment for type `T`.
 */
function doSomething<T>(target: T, text: string): number;
```

### `@return(s)`

Documents the return of the subsequent method

```ts
/**
 * @returns Comment for special return value.
 */
function doSomething(target: any, value: number): number;
```

### `@event`

Documents events triggered by the subsequent method

### `@hidden` and `@ignore`

Keeps the subsequent code from being documented.

```ts
/**
 * @ignore
 */
function doSomething(target: any, value: number): number;
```

### `@internal`

Marks the following code as internal.
If the `--excludeInternal` option is passed, TypeDoc will not document the given code.

```typescript
/** @internal */
export const secret = 1122;
```

### `@category`

Allows grouping reflections on a page. The `--categorizeByGroup`, `--defaultCategory`, and `--categoryOrder` allow more granular control.

```ts
/**
 * Regular description
 *
 * @category Category Name
 */
function doSomething() {}
```

### `@module`

Used to specify a comment at the top of a source file as documenting that source file and optionally override an entry point's name. See the Files section for more detail.

### `@typedef`, `@callback`

If your project uses TypeScript to type check JavaScript ([handbook](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html)),
then TypeDoc will also pick up on type aliases and interfaces defined with `@typedef` and `@callback`. See the
[TypeScript handbook](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#typedef-callback-and-param) for details
on writing these types.

### `@public`, `@protected`, and `@private`

These modifier tags are supported for overriding the visibility of documented items. Their use is discouraged as they do not conform to the TSDoc
standard and they may be removed in a future release.

### `@enum`

If present on an object with string literal values, TypeDoc will convert the variable as an enumeration instead.

```ts
/**
 * This will be displayed as an enumeration.
 * @enum
 */
export const MyEnum = {
    /**
     * Doc comments may be included here.
     */
    A: "a",
    B: "b",
} as const;

/**
 * This works too, but is more verbose
 * @enum
 */
export const MyEnum2: { A: "a" } = { A: "a" }
```

## Files

A doc comment describing a file must be placed before any code in the file.
It should be annotated with the `@module` tag so that TypeDoc knows that it is intended to be documentation for the file itself.

If TypeDoc guesses a module's name incorrectly, you can override it with the `@module` by specifying text after the tag name.

```typescript
// file1.ts
/**
 * This is the doc comment for file1.ts
 *
 * Specify this is a module comment and rename it to my-module:
 * @module my-module
 * Specify this is a module comment without renaming it:
 * @module
 */
import * as lib from "lib";

// file2.ts
/**
 * This is *not* a doc comment for the file, it is a doc comment for the import.
 * Include the module or packageDocumentation tag to mark it as a file comment.
 */
import * as lib from "lib";

// file3.ts
/**
 * File doc comment for file3.ts
 * @packageDocumentation
 */
import * as lib from "lib";

// file4.ts (deprecated, prefer @module or @packageDocumentation)
/**
 * File doc comment for file3.ts
 */
/**
 * dummy comment so that TypeDoc does not associate the comment with the import
 */
import * as lib from "lib";
```
