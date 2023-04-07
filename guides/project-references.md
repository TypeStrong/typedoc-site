---
layout: "guide"
tags: guide
title: "Project References"
menuOrder: 5
---

# Project References

As of 0.20, TypeDoc has limited support for TypeScript projects using project references and solution style tsconfig files.
This support is limited since TypeDoc is currently unable to properly link files to GitHub if they are in a child project of the root project.

## How it works

For the most part, project reference support should _just work_, however if you have a tsconfig containing `"files": []`,
the output might not quite match what you expect.

When given a solution style tsconfig whose program contains no files, TypeDoc will check for project references and create
a program for each referenced project. Then, to find each entry point requested for documentation, it will check each of the
programs in the order they are declared in the tsconfig file. If a file is present in multiple programs, only the file in
the first program will be used.

As an example, in the [project-references-demo](https://github.com/berickson1/project-references-demo/tree/typedoc) project,
`npx typedoc zoo/zoo.ts animals/index.ts` will result in documentation where the createZoo function returns `Array<Dog>`,
but `Dog` is not linked, even though animals/index.ts exports it. The cause of this is that the root tsconfig looks like this:

```json
{
    "files": [],
    "references": [
        {
            "path": "./core"
        },
        {
            "path": "./animals"
        },
        {
            "path": "./zoo"
        }
    ]
}
```

When TypeDoc looks for the entry points, it finds animals/index.ts in the second listed program before looking at ./zoo, while
the `Dog` type used in `createZoo` is from the third program. TypeDoc relies on TypeScript to link types, so is unable to resolve
types across programs, resulting in a broken link.

There are a couple possible fixes for this:

1. Specify the "largest" projects first - if the tsconfig specified ./zoo first, then TypeDoc would find ./animals/index.ts in
   the zoo project, and links would work.
1. Specify the tsconfig only for the root project expected to contain all symbols
   `npx typedoc --tsconfig zoo/tsconfig.json zoo/zoo.ts animals/index.ts` works as expected.
   This is usually the better solution since it allows TypeDoc to skip creating any unnecessary projects, making the type checking
   potentially significantly faster.
