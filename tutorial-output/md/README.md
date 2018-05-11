
TypeDoc Tutorial
================

*   [TypeDoc Tutorial](http://typedoc.org/guides/tutorial/)
*   [Tutorial html output](http://typedoc.org/guides/tutorial-output/)
*   [Tutorial markdown output](http://typedoc.org/guides/tutorial-output/md/README.md)

Building
========

Since the tutorial shows examples typedoc output it needs to generate a .ts file and compile it with typedoc. The tutorials sources then are in src/tutorial.hbs (handlebars). This file is compiled like this:

```sh
cd tutorial-src
npm run build
```

which generates generate `tutorial-output/` and _guides/tutorial.md`

## Index

### Classes

* [File](classes/file.md)
* [Fruit](classes/fruit.md)
* [MyCustomRectangle](classes/mycustomrectangle.md)

### Interfaces

* [Car](interfaces/car.md)
* [Centimeter](interfaces/centimeter.md)
* [Engine](interfaces/engine.md)
* [Route](interfaces/route.md)
* [Shape](interfaces/shape.md)
* [SomeThingsAreIgnored](interfaces/somethingsareignored.md)
* [Unit](interfaces/unit.md)

### Functions

* [listFiles](#listfiles)
* [minify](#minify)

---

## Functions

<a id="listfiles"></a>

###  listFiles

▸ **listFiles**(path: *`String`*, options?: *`object`*): [File](classes/file.md)[]

*Defined in [index.ts:190](https://github.com/cancerberoSgx/typedoc-site/blob/33ece85/tutorial-src/src/index.ts#L190)*

List children of given folder

**Parameters:**

| Param | Type |
| ------ | ------ |
| path | `String` | 
| `Optional` options | `object` | 

**Returns:** [File](classes/file.md)[]
if given path points to a folder returns a list of direct children Files,. Returns null otherwise

___
<a id="minify"></a>

###  minify

▸ **minify**(): `void`

*Defined in [index.ts:74](https://github.com/cancerberoSgx/typedoc-site/blob/33ece85/tutorial-src/src/index.ts#L74)*

Responsible of minify given string containing JavaScript code. By default it uses the foo-bar minimization algorithm.

**Warning: if you don't specify an output in the configuration your input file will be overridden !**

Basic usage example:

```ts
import {minify} from 'foobar-minify';
const config = {
  input: readFileSync('dist/awesome-app.js'),
  output: createWriteStream('dist/awesome-app.min.js')
}
  minify(config);
```

**Returns:** `void`

___

