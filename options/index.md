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

## Validation Options

-   [validation](/options/validation/#validation)
-   [treatWarningsAsErrors](/options/validation/#treatwarningsaserrors)
-   [treatValidationWarningsAsErrors](/options/validation/#treatvalidationwarningsaserrors)
-   [intentionallyNotExported](/options/validation/#intentionallynotexported)
-   [requiredToBeDocumented](/options/validation/#requiredtobedocumented)

## General Options

Options which don't fit elsewhere.

### watch

```bash
$ typedoc --watch
```

Use TypeScript's incremental compiler to watch source files for changes and build the docs on change. May be combined with `--emit`.

Note: This mode will only detect changes to files watched by the TypeScript compiler. Changes to other files (README.md, imported files with `--includes`) will not cause a rebuild.

### preserveWatchOutput

```bash
$ typedoc --watch --preserveWatchOutput
```

By default, `--watch` clears the screen between compilation steps. If `--preserveWatchOutput` is specified, this behavior is disabled.

### help

```bash
$ typedoc --help
```

Print all available options, along with a short description. Also prints a list of supported highlighting languages.

### version

```bash
$ typedoc --version
```

Prints TypeDoc's version.

### showConfig

```bash
$ typedoc --showConfig
```

Print TypeDoc's config and exit. Useful for debugging what options have been set.

### logLevel

```bash
$ typedoc --logLevel Verbose
```

Specifies the log level to be printed to the console. Defaults to `Info`. The available levels are:

-   Verbose - Print all log messages, may include debugging information intended for TypeDoc developers
-   Info - Print informational log messages along with warning and error messages
-   Warn - Print warning and error messages
-   Error - Print only error messages
-   None - Print no messages.

### skipErrorChecking

```bash
$ typedoc --skipErrorChecking
```

Instructs TypeDoc to not run the type checker before converting a project. Enabling this option may improve generation time, but could also result in crashes if your code contains type errors.
