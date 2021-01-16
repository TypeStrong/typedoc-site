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

TypeDoc supports code blocks in markdown and uses [HighlightJS](https://github.com/isagalaev/highlight.js)
to provide syntax highlighting. HighlightJS will auto detect the language for code blocks, however
you can also explicitly specify the language.

````typescript
/**
 * Code blocks are great for examples
 *
 * ```
 * <my-custom-element>Highlight JS will auto detect the language</my-custom-element>
 * ```
 *
 * ```typescript
 * // Or you can specify the language explicitly
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

### `@typeParam <param name>`

Documents a generic type parameter for the subsequent symbol specified by the param name.

```typescript
/**
 * @typeParam T  Comment for type `T`.
 * You may also use the template tag.
 * @template T comment for type `T`.
 */
function doSomething<T>(target: T, text: string): number;
```

### `@return(s)`

Documents the return of the subsequent method

```ts
/**
 * @returns      Comment for special return value.
 */
function doSomething(target: any, value: number): number;
```

### `@event`

Documents events triggered by the subsequent method

### `@hidden and @ignore`

Keeps the subsequent code from being documented.

```ts
/**
 * @ignore
 */
function doSomething(target: any, value: number): number;
```

### `@internal`

Marks the following code as internal.
If the `--excludeExternal` option is passed, TypeDoc will not document the given code.

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

## Namespaces

Namespaces can be commented like any other elements in TypeScript. As namespaces can be defined in multiple
files, TypeDoc selects the longest comment by default. One may override this behavior with the special
`@preferred` comment tag.

```typescript
/**
 * Actual namespace comment.
 * @preferred
 */
namespace MyModule {}
```

```typescript
/**
 * Dismissed namespace comment.
 * This is the longer comment but will be dismissed in favor of the preferred comment.
 */
namespace MyModule {}
```

## Files

A doc comment describing a file must be placed before any code in the file.
It should be annotated with the `@packageDocumentation` tag so that TypeDoc knows that it is intended to be documentation for the file itself.

If TypeDoc guesses a module's name incorrectly, you can override it with the `@module` tag.

```typescript
// file1.ts
/**
 * This is the doc comment for file1.ts
 * @packageDocumentation
 * @module my-module
 */

/**
 * This is a doc comment for "someVar".
 */
const someVar = "value";

// file2.ts
/**
 * This is *not* a doc comment for the file, it is a doc comment for the import.
 * Include the packageDocumentation tag to mark it as a file comment.
 */
import * as lib from "lib";

// file3.ts (legacy, prefer @packageDocumentation)
/**
 * File doc comment for file3.ts
 */
/**
 * dummy comment so that TypeDoc does not associate the comment with the import
 */
import * as lib from "lib";
```
