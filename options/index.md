---
layout: "guide"
tags: guide
eleventyNavigation:
    order: 2
    key: Options
    parent: Overview
---

# Options

TypeDoc accepts most of the command line arguments that the TypeScript compiler accepts.
All command line arguments that are passed in without a flag will be parsed as input files.
Any options passed on the command line will override options set in a configuration file.

```bash
$ typedoc --out path/to/documentation/ path/to/typescript/project/index.ts
```

## Configuration Options

Options which control what files TypeDoc reads.

-   [options](/options/configuration/#options)
-   [tsconfig](/options/configuration/#tsconfig)
-   [compilerOptions](/options/configuration/#compileroptions)
-   [plugin](/options/configuration/#plugin)

## Input Options

Options which control how input is converted into a project.

-   [entryPoints](/options/input/#entrypoints)
-   [entryPointStrategy](/options/input/#entrypointstrategy)
-   [exclude](/options/input/#exclude)
-   [externalPattern](/options/input/#externalpattern)
-   [excludeExternals](/options/input/#excludeexternals)
-   [excludeNotDocumented](/options/input/#excludenotdocumented)
-   [excludeNotDocumentedKinds](/options/input/#excludenotdocumentedkinds)
-   [excludeInternal](/options/input/#excludeinternal)
-   [excludePrivate](/options/input/#excludeprivate)
-   [excludeProtected](/options/input/#excludeprotected)
-   [excludeReferences](/options/input/#excludereferences)
-   [name](/options/input/#name)
-   [includeVersion](/options/input/#includeversion)
-   [disableSources](/options/input/#disablesources)
-   [sourceLinkTemplate](/options/input/#sourcelinktemplate)
-   [gitRevision](/options/input/#gitrevision)
-   [gitRemote](/options/input/#gitremote)
-   [readme](/options/input/#readme)

## Output Options

Options which control TypeDoc's output.

-   [out](/options/output/#out)
-   [json](/options/output/#json)
-   [pretty](/options/output/#pretty)
-   [emit](/options/output/#emit)
-   [theme](/options/output/#theme)
-   [lightHighlightTheme](/options/output/#lighthighlighttheme)
-   [darkHighlightTheme](/options/output/#darkhighlighttheme)
-   [customCss](/options/output/#customcss)
-   [markedOptions](/options/output/#markedoptions)
-   [basePath](/options/output/#basepath)
-   [cname](/options/output/#cname)
-   [htmlLang](/options/output/#htmllang)
-   [githubPages](/options/output/#githubpages)
-   [cacheBust](/options/output/#cachebust)
-   [gaID](/options/output/#gaid)
-   [hideGenerator](/options/output/#hidegenerator)
-   [searchInComments](/options/output/#searchincomments)
-   [cleanOutputDir](/options/output/#cleanoutputdir)
-   [titleLink](/options/output/#titlelink)
-   [navigationLinks](/options/output/#navigationlinks)
-   [sidebarLinks](/options/output/#sidebarlinks)
-   [visibilityFilters](/options/output/#visibilityfilters)
-   [searchCategoryBoosts](/options/output/#searchcategoryboosts)
-   [searchGroupBoosts](/options/output/#searchgroupboosts)

## Comment Options

Options which control how TypeDoc parses comments.

-   [commentStyle](/options/comments/#commentstyle)
-   [useTsLinkResolution](/options/comments/#usetslinkresolution)
-   [jsDocCompatibility](/options/comments/#jsdoccompatibility)
-   [blockTags](/options/comments/#blocktags)
-   [inlineTags](/options/comments/#inlinetags)
-   [modifierTags](/options/comments/#modifiertags)
-   [excludeTags](/options/comments/#excludetags)
-   [externalSymbolLinkMappings](/options/comments/#externalsymbollinkmappings)
-   [media](/options/comments/#media)
-   [includes](/options/comments/#includes)

## Organization Options

-   [categorizeByGroup](/options/organization/#categorizebygroup)
-   [defaultCategory](/options/organization/#defaultcategory)
-   [categoryOrder](/options/organization/#categoryorder)
-   [sort](/options/organization/#sort)
-   [kindSortOrder](/options/organization/#kindsortorder)

## Validation Options

-   [validation](/options/validation/#validation)
-   [treatWarningsAsErrors](/options/validation/#treatwarningsaserrors)
-   [treatValidationWarningsAsErrors](/options/validation/#treatvalidationwarningsaserrors)
-   [intentionallyNotExported](/options/validation/#intentionallynotexported)
-   [requiredToBeDocumented](/options/validation/#requiredtobedocumented)

## General Options

-   [watch](/options/other/#watch)
-   [preserveWatchOutput](/options/other/#preservewatchoutput)
-   [help](/options/other/#help)
-   [version](/options/other/#version)
-   [showConfig](/options/other/#showconfig)
-   [logLevel](/options/other/#loglevel)
-   [skipErrorChecking](/options/other/#skiperrorchecking)
