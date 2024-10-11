---
layout: "guide"
tags: guide
eleventyNavigation:
    order: 2
    key: Output
    parent: Options
---

# Output Options

These options control TypeDoc's output.

## out

```bash
$ typedoc --out <path/to/documentation/>
```

Specifies the location the html documentation should be written to.
The HTML output produced by running TypeDoc on itself can be seen at [/api](/api).

## json

```bash
$ typedoc --json <path/to/out-file.json>
```

Specifies the location to output a JSON file containing all of the reflection data.
An example of the JSON output from running TypeDoc on itself can be seen at [/api/docs.json](/api/docs.json).

## pretty

```bash
$ typedoc --json out.json --pretty
```

Tells TypeDoc to pretty-format the JSON output. Defaults to true.

## emit

```bash
$ typedoc --emit none
```

Instructs TypeDoc to write compiled output files as `tsc` does.

| Value  | Behavior                                       |
| ------ | ---------------------------------------------- |
| `docs` | Emit documentation, but not JS (default).      |
| `both` | Emit both documentation and JS.                |
| `none` | Emit nothing, just convert and run validation. |

_**Note:** If you have your TypeScript configured with `declaration: true` (through `tsconfig.json`), the TypeDoc emit `both` option will also generate type declaration files. This is because TypeDoc falls back to TypeScript to generate the JS, this allows us to set the normal TypeScript options for type declarations and have TypeDoc handle generating the `docs`, `js`, and `types` for us, all at once._

## theme

```bash
$ typedoc --theme default
```

Specify the theme name that should be used.

## lightHighlightTheme

```bash
$ typedoc --lightHighlightTheme light-plus
```

Specify the Shiki theme to be used to highlight code snippets in light mode.

## darkHighlightTheme

```bash
$ typedoc --darkHighlightTheme dark-plus
```

Specify the Shiki theme to be used to highlight code snippets in dark mode.

## highlightLanguages

Specifies the Shiki grammars to load for highlighting code blocks. By default, TypeDoc
loads the following languages.

```json
{
    "highlightLanguages": [
        "bash",
        "console",
        "css",
        "html",
        "javascript",
        "json",
        "jsonc",
        "json5",
        "tsx",
        "typescript"
    ]
}
```

## customCss

```bash
$ typedoc --customCss ./theme/style.css
```

Specifies an extra CSS file that should be copied into the assets directory and referenced by the theme.

## customFooterHtml

```bash
$ typedoc --customFooterHtml "Copyright <strong>Project</strong> 2024"
```

Specifies additional custom HTML which should be injected into the page footer.

## customFooterHtmlDisableWrapper

```bash
$ typedoc --customFooterHtml "<p>Copyright <strong>Project</strong> 2024</p>" --customFooterHtmlDisableWrapper
```

By default, TypeDoc will wrap the custom footer HTML in a `<p>` element to allow plain text added
with it to show up properly aligned. This option disables the wrapping.

## markdownItOptions

Specifies the options that are forwarded to [markdown-it](https://github.com/markdown-it/markdown-it) when parsing doc comments.
By default TypeDoc overrides the default values used by markdown-it with the ones shown below:

```json
{
    "markdownItOptions": {
        "html": true,
        "linkify": true
    }
}
```

See the [options section](https://github.com/markdown-it/markdown-it?tab=readme-ov-file#init-with-presets-and-options)
in the markdown-it readme for a full list of available options.

## markdownItLoader

Function which can be set in a JS config file to configure plugins loaded by `markdown-it`. It will be called with an
instance of the [`MarkdownIt`](https://markdown-it.github.io/markdown-it/#MarkdownIt) class.

```js
// typedoc.config.mjs
export default {
    markdownItLoader(parser) {
        parser.use(plugin1);
    },
};
```

## basePath

```bash
$ typedoc --basePath ./ --entryPoints src/index.ts
```

Specifies the base path to be used when displaying file paths. If not set, TypeDoc will guess by taking the lowest
common directory to all source files. In the above example, TypeDoc would display links to `index.ts` rather than `src/index.ts`.

Note: This option only affects displayed paths. It _does not_ affect where TypeDoc will create links to.

## cname

```bash
$ typedoc --cname typedoc.org
```

Create a CNAME file in the output directory with the specified text.

## sourceLinkExternal

```bash
$ typedoc --sourceLinkExternal
```

Treat source links as external links that open in a new tab when generating HTML.

## lang

```bash
$ typedoc --lang zh
```

Sets the `lang` attribute in TypeDoc's HTML output and the translations used when,
generating documentation. Defaults to `en`, resulting in `<html lang="en">`.

## locales

```json
// typedoc.json
{
    "locales": {
        "zh": {
            "flag_private": "私有"
        }
    }
}
```

Specify translations which TypeDoc will used when `--lang` is set to the specified locale.
See [translatable.ts](https://github.com/TypeStrong/typedoc/blob/master/src/lib/internationalization/translatable.ts)
for a list of all potentially translated messages within TypeDoc.

If your translations may be generally useful to the community, please consider submitting a
pull request adding them to TypeDoc!

## githubPages

```bash
$ typedoc --githubPages false
```

When enabled, automatically add a `.nojekyll` file to the output directory to prevent GitHub Pages
from processing your documentation site using Jekyll. If you have scoped packages, TypeDoc
generates HTML files that start with `_` which are ignored by Jekyll. Defaults to `true`.

## cacheBust

```bash
$ typedoc --cacheBust
```

When enabled, TypeDoc will include the generation time in `<script>` and `<link>` tags to JS/CSS assets
to prevent assets from a previous build of the documentation from being used. This should generally not
be necessary with a properly configured web server.

## hideParameterTypesInTitle

```bash
$ typedoc --hideParameterTypesInTitle false
```

Hide parameter types the signature "title" for easier scanning. When enabled, parameter types are still visible in the parameters list after the function summary. Defaults to true.

## hideGenerator

```bash
$ typedoc --hideGenerator
```

Do not print the TypeDoc link at the end of the page. Defaults to false.

## searchInComments

```bash
$ typedoc --searchInComments
```

Enables searching comment text in the generated documentation site.

Note: Enabling this option will increase the size of your search index, potentially up
to an order of magnitude larger in projects with many long comments.

## searchInDocuments

```bash
$ typedoc --searchInDocuments
```

Enables searching document text in the generated documentation site.

Note: Enabling this option will increase the size of your search index, potentially up
to an order of magnitude larger in projects with many documents.

## cleanOutputDir

```bash
$ typedoc --cleanOutputDir false
```

Can be used to prevent TypeDoc from cleaning the output directory specified with `--out`.

## titleLink

```bash
$ typedoc --titleLink "http://example.com"
```

Sets the link the title in the header points to. Defaults to the documentation homepage.

## navigationLinks

```json
// typedoc.json
{
    "navigationLinks": {
        "Example": "http://example.com"
    }
}
```

Defines additional links to be included in the page header.

## sidebarLinks

```json
// typedoc.json
{
    "sidebarLinks": {
        "Example": "http://example.com"
    }
}
```

Defines additional links to be included in the page sidebar.

## headings

```json
// typedoc.json
{
    "headings": {
        "readme": true,
        "document": false
    }
}
```

Defines whether a heading describing the reflection should be included on the rendered page.

## navigation

```json
// typedoc.json
{
    "navigation": {
        "includeCategories": true,
        "includeGroups": false,
        "includeFolders": true
    },
    "categorizeByGroup": false
}
```

Determines if groups/categories will be included in the primary navigation pane.

The [categorizeByGroup](/options/organization/#categorizebygroup) option also affects this behavior.
If set (the default), and `includeGroups` is _not_ set, the value of `includeCategories` will be effectively
ignored since categories will be created only within groups.

Also determines if project "folders" should become nested dropdowns in the navigation pane. This option
will only have an effect if your project includes multiple entry points in different folders. `navigation.includeFolders`
defaults to `true`.

The `includeCategories` and `includeGroups` option can be
overwritten on a per-reflection basis by using the following
tags within the comment for the reflection containing the
categories/groups.

-   `@showGroups`
-   `@hideGroups`
-   `@showCategories`
-   `@hideCategories`

## navigationLeaves

```json
// typedoc.json
{
    "navigationLeaves": ["JSONOutput"]
}
```

Specifies namespaces/modules which should not be expandable in the navigation tree.
To specify a nested namespace, separate the parent names with `.` according to the displayed
tree, skipping the top level project link. `ParentNS.ChildNS`

## visibilityFilters

```json
// typedoc.json
{
    "visibilityFilters": {
        "protected": false,
        "private": false,
        "inherited": true,
        "external": false,
        "@alpha": false,
        "@beta": false
    }
}
```

Specifies the available filters when viewing a page. The four `protected`, `private`, `inherited`, and
`external` options are all shown by default. Their default value may be set, or they may be omitted
from this option to disable that filter. Further, modifier tags may be specified to introduce a custom
sort option based on a tag.

## searchCategoryBoosts

```json
// typedoc.json
{
    "searchCategoryBoosts": {
        "Common Items": 1.5
    }
}
```

Configure the search to increase the relevance of items in a given category.

## searchGroupBoosts

```json
// typedoc.json
{
    "searchCategoryBoosts": {
        "Classes": 1.5
    }
}
```

Configure the search to increase the relevance of items in a given group.

## hostedBaseUrl

```json
// typedoc.json
{
    "hostedBaseUrl": "https://example.com"
}
```

Specify the base URL which the TypeDoc generated site will be hosted at. This
is used to generate a sitemap, generate canonical `<link>` tags, and enable the
[useHostedBaseUrlForAbsoluteLinks](#usehostedbaseurlforabsolutelinks) option.

## useHostedBaseUrlForAbsoluteLinks

```json
// typedoc.json
{
    "hostedBaseUrl": "https://example.com",
    "useHostedBaseUrlForAbsoluteLinks": true
}
```

If set, TypeDoc will generate absolute links to pages rather than relative links.
Defaults to false.
