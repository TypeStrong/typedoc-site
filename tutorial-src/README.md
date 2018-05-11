# Tutorial

 * [TypeDoc Tutorial](http://typedoc.org/guides/tutorial/)
 * [Tutorial markdown output](http://typedoc.org/guides/tutorial-output/)
 * The api docs generated from the [typedoc-tutorial-basic](https://cancerberosgx.github.io/javascript-documentation-examples/examples/typedoc-tutorial-basic/docs/tutorial.md)

# Building

Since the tutorial shows examples typedoc output it needs to generate a .ts file and compile it with typedoc. The tutorials sources then are in src/tutorial.hbs (handlebars). This file is compiled like this: 

```sh
cd tutorial-src
npm run build
```

which generates generate `tutorial-output/` and _guides/tutorial.md`