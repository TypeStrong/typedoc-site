---
layout: "guide"
tags: guide
eleventyNavigation:
    order: 9
    key: Themes
    parent: Overview
---

# Themes

Themes allow you to change the look and feel of the generated documentation. You can use one of the included
themes, modify them to suit your needs or create a fully custom theme. The [`--theme`](/options/output/#theme) parameter allows you to
select a theme when creating a documentation:

TypeDoc ships with one builtin default theme, additional themes can be added by plugins. For documentation on creating custom themes, see the [custom-themes.md](https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md) document in the TypeDoc repository, or check out the [theme demo](https://github.com/Gerrit0/typedoc-custom-theme-demo) repository.

If all you need to do is slightly change the generated output, the [--customCss](/options/output/#customcss) option can be used to customize the look.

You can find more themes on npm under the [typedoc-theme](https://www.npmjs.com/search?q=keywords:typedoc-theme) keyword.

{% typedocThemes %}
