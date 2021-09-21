import { readFile, writeFile } from "fs/promises";

const inPath = "typedoc/CHANGELOG.md";
const outPath = "changelog.md";

const changelog = await readFile(inPath, "utf-8");

const heading = `
---
title: "Changelog"
layout: "changelog"
---
`.trim();

const page = changelog
    .replace("# Unreleased", heading)
    .replace(
        /#(\d+)/g,
        "[#$1](https://github.com/TypeStrong/typedoc/issues/$1)"
    );

await writeFile(outPath, page);
