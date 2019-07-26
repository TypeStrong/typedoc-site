---
layout: 'guide'
title: 'Doc Comments'
menuOrder: 3
---

# Document your code

TypeDoc runs the TypeScript compiler and extracts type information from the generated compiler symbols.
Therefore you don't have to include additional metadata within your comments, TypeScript specific elements
like classes, enumerations or property types and access modifiers will be automatically detected.

## Comment Parsing

### Markdown

All comments are parsed as markdown. TypeDoc uses the [Marked](<https://github.com/chjj/marked>) markdown parser
to convert comments to HTML.

```typescript
/**
 * This comment _supports_ [Markdown](https://marked.js.org/)
 */
export class DocumentMe {}
```

### Code Blocks

TypeDoc supports code blocks in markdown and uses [HighlightJS](<https://github.com/isagalaev/highlight.js>)
to provide syntax hightlighting. HighlightJS will autodetect the language for code blocks, however
you can also explicitly specify the language.

```typescript
/**
 * Codeblocks are great for examples
 * 
 * ```
 * <my-custom-element>Highlight JS will autodetect the language</my-custom-element>
 * ```
 * 
 * ```typescript
 * // Or you can specify the language explicitly
 * const instance = new MyClass();
 * ```
 */
export class MyClass {}
```

### Symbol References

You can link to other classes, members or functions using double square brackets.

```typescript
/**
 * See the [[Foo]] interface for more details.
 */
export class Bar implements Foo {}

/** More details */
interface Foo {}
```

## Supported tags

TypeDoc supports a specific set of tags. Many JSDoc tags are not supported because the TypeScript
compiler can infer the information directly from code. TypeDoc renders any unsupported tags in a
list in the documentation, so they are not lost.

When writing documentation for function signatures, you don't have to repeat yourself. TypeDoc automatically
copies comments and tags of the function implementation to its signatures for you. Of course you can still
overwrite them if you wish to.

The documentation generator currently understands the following doc comment tags:

### ```@param <param name>```
Documents a parameter for the subsequent method specified by the param name. The JSDoc param type 
is not necessary because it will be read from the TypeScript types.

```typescript
/**
 * @param text  Comment for parameter ´text´.
 */
function doSomething(target: any, text: string): number;
```

### ```@typeparam <param name>```
Documents a generic type parameter for the subsequent symbol specified by the param name.

```typescript
/**
 * @typeparam T  Comment for type `T`.
 */
function doSomething<T>(target: T, text: string): number;
```

### ```@return(s)```
Documents the return of the subsequent method

```
/**
 * @returns      Comment for special return value.
 */
function doSomething(target: any, value: number): number;
```

### ```@event```
Documents events triggered by the subsequent method

### ```@hidden and @ignore```
Keeps the subsequent code from being documented.

```
/**
 * @ignore
 */
function doSomething(target: any, value: number): number;
```

### ```@category```
Allows grouping reflections on a page

```
/**
 * Regular description
 *
 * @category Category Name
 */
funtion doSomething() {}

## Namespaces

Namespaces (previously referred to as "modules") can be commented like any other elements in TypeScript. As namespaces can be defined in multiple
files, TypeDoc selects the longest comment by default. One may override this behaviour with the special
`@preferred` comment tag.

```typescript
/**
 * Actual namespace comment.
 * @preferred
 */
namespace MyModule { }
```

```typescript
/**
 * Dismissed namespace comment.
 * This is the longer comment but will be dismissed in favor of the preferred comment.
 */
namespace MyModule { }
```


## Files

The first doc comment within a file is used as the doc comment of a file. However, you must
ensure that the first declaration also has as doc comment.

```typescript
/**
 * This is a doc comment for a file
 */

/**
 * This is a doc comment for "someVar".
 */
var someVar: string = "value";
```
