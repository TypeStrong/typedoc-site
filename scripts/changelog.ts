import { readFile, writeFile } from "fs/promises";

const inPath = "typedoc/CHANGELOG.md";
const outPath = "guides/changelog.md";

const changelog = await readFile(inPath, "utf-8");

const heading = `
---
layout: "guide"
tags: guide
eleventyNavigation:
    key: Changelog
    parent: Overview
    order: 100
---
`.trim();

const page = changelog
    .replace("# Unreleased", heading)
    .replace(
        /\s(\w+\/[\w-]+)#(\d+)/g,
        " [#$2](https://github.com/$1/issues/$2)"
    )
    .replace(
        /\s#(\d+)/g,
        " [#$1](https://github.com/TypeStrong/typedoc/issues/$1)"
    );

await writeFile(outPath, page);
