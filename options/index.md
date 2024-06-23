---
layout: "guide"
tags: guide
eleventyNavigation:
    order: 2
    key: Options
    parent: Overview
redirect_from: /guides/options/
---

# Options

All command line arguments that are passed in without a flag will be parsed as input files.
Any options passed on the command line will override options set in a configuration file.

```bash
$ typedoc --out path/to/documentation/ path/to/typescript/project/index.ts
```

<!--
Updating these lists can be easily done by going to each page and running the
following JS to copy what they should be to your clipboard. Ideally, someday this
becomes automated...

copy("-   " + $$(".toc-container > ol > li > ol > li > a").map(a => {
  const url = new URL(a.href)
  return `[${a.textContent}](${url.pathname}${url.hash})`
}).join("\n-   "))
-->

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
-   [alwaysCreateEntryPointModule](/options/input/#alwayscreateentrypointmodule)
-   [projectDocuments](/options/input/#projectdocuments)
-   [exclude](/options/input/#exclude)
-   [externalPattern](/options/input/#externalpattern)
-   [excludeExternals](/options/input/#excludeexternals)
-   [excludeNotDocumented](/options/input/#excludenotdocumented)
-   [excludeNotDocumentedKinds](/options/input/#excludenotdocumentedkinds)
-   [excludeInternal](/options/input/#excludeinternal)
-   [excludePrivate](/options/input/#excludeprivate)
-   [excludeProtected](/options/input/#excludeprotected)
-   [excludeReferences](/options/input/#excludereferences)
-   [excludeCategories](/options/input/#excludecategories)
-   [name](/options/input/#name)
-   [includeVersion](/options/input/#includeversion)
-   [disableSources](/options/input/#disablesources)
-   [sourceLinkTemplate](/options/input/#sourcelinktemplate)
-   [gitRevision](/options/input/#gitrevision)
-   [gitRemote](/options/input/#gitremote)
-   [disableGit](/options/input/#disablegit)
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
-   [highlightLanguages](/options/output/#highlightlanguages)
-   [customCss](/options/output/#customcss)
-   [customFooterHtml](/options/output/#customfooterhtml)
-   [customFooterHtmlDisableWrapper](/options/output/#customfooterhtmldisablewrapper)
-   [markdownItOptions](/options/output/#markdownitoptions)
-   [markdownItLoader](/options/output/#markdownitloader)
-   [basePath](/options/output/#basepath)
-   [cname](/options/output/#cname)
-   [sourceLinkExternal](/options/output/#sourcelinkexternal)
-   [lang](/options/output/#lang)
-   [locales](/options/output/#locales)
-   [githubPages](/options/output/#githubpages)
-   [cacheBust](/options/output/#cachebust)
-   [hideParameterTypesInTitle](/options/output/#hideparametertypesintitle)
-   [hideGenerator](/options/output/#hidegenerator)
-   [searchInComments](/options/output/#searchincomments)
-   [searchInDocuments](/options/output/#searchindocuments)
-   [cleanOutputDir](/options/output/#cleanoutputdir)
-   [titleLink](/options/output/#titlelink)
-   [navigationLinks](/options/output/#navigationlinks)
-   [sidebarLinks](/options/output/#sidebarlinks)
-   [navigation](/options/output/#navigation)
-   [navigationLeaves](/options/output/#navigationleaves)
-   [visibilityFilters](/options/output/#visibilityfilters)
-   [searchCategoryBoosts](/options/output/#searchcategoryboosts)
-   [searchGroupBoosts](/options/output/#searchgroupboosts)
-   [hostedBaseUrl](/options/output/#hostedbaseurl)
-   [useHostedBaseUrlForAbsoluteLinks](/options/output/#usehostedbaseurlforabsolutelinks)

## Comment Options

Options which control how TypeDoc parses comments.

-   [commentStyle](/options/comments/#commentstyle)
-   [useTsLinkResolution](/options/comments/#usetslinkresolution)
-   [preserveLinkText](/options/comments/#preservelinktext)
-   [jsDocCompatibility](/options/comments/#jsdoccompatibility)
-   [blockTags](/options/comments/#blocktags)
-   [inlineTags](/options/comments/#inlinetags)
-   [modifierTags](/options/comments/#modifiertags)
-   [cascadedModifierTags](/options/comments/#cascadedmodifiertags)
-   [excludeTags](/options/comments/#excludetags)
-   [externalSymbolLinkMappings](/options/comments/#externalsymbollinkmappings)

## Organization Options

-   [categorizeByGroup](/options/organization/#categorizebygroup)
-   [defaultCategory](/options/organization/#defaultcategory)
-   [categoryOrder](/options/organization/#categoryorder)
-   [groupOrder](/options/organization/#grouporder)
-   [sort](/options/organization/#sort)
-   [sortEntryPoints](/options/organization/#sortentrypoints)
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
