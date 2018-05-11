# TypeDoc homepage

Holds the contents of http://typedoc.org.


## Building the tutorial

Since the tutorial shows examples typedoc output it needs to generate a .ts file and compile it with typedoc. The tutorials sources then are in src/tutorial.hbs (handlebars). This file is compiled like this: 

```sh
cd tutorial-src
npm run build
```

which generates generate `tutorial-output/` and `_guides/tutorial.md`. 

Quick build and run command: 

```sh
cd tutorial-src/ && npm run build && cd .. && bundle exec jekyll serve
```