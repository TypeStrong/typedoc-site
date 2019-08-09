---
layout: 'guide'
title: 'Themes'
menuOrder: 4
---

# Themes

Themes allow you to change the look and feel of the generated documentation. You can use one of the included
themes, modify them to suit your needs or create a fully custom theme. The ``--theme`` parameter allows you to
select a theme when creating a documentation:

```bash
$ typedoc --theme <default|minimal|path/to/theme>
```

You must supply a path to a valid theme directory or a name of a built-in theme. If you don't supply the
``--theme`` parameter, the theme ``default`` will be used.


## Built-in themes

TypeDoc ships with two themes so you can start creating docs right out of the box:

* ``default`` - This is the standard theme used by TypeDoc. It is intended to be used with medium to large
  projects. It creates a single html file for each module, class, interface and enumeration in your project.
  It supports filtering the displayed members by different criteria and it includes a simpled search.

* ``minimal`` - This theme is intended to be used with smaller projects. It is ultra portable as it renders
  the entire documentation into one big html file including all required assets like stylesheets or images.
  Like the default theme, it supports filtering the displayed members by different criteria.


## Custom themes

Creating a custom theme in TypeDoc is pretty easy. Basically you copy the  [default theme directory](https://github.com/TypeStrong/typedoc-default-themes/tree/master/src/default) (from which all themes extend from) and update the parts you want to change.

Then pass a path to the theme to typedoc using the `--theme` option

```bash
$ typedoc --out path/to/documentation/ --theme path/to/custom-theme path/to/typescript/project/
```

Styles are a *little* bit trickier. With handlebars templates you can simply provide your own template instead of the default and TypeDoc will compile it at build-time because every project is different. Sass files however don't change from project to project so they are compiled *before* the theme is built. This makes it possible to gain a not-insignificant speed boost when rendering docs and removes the need to bundle a sass compiler.

This means if you want to add your own custom styles you have two options: override styles *or* compile your own sass.

### Overriding styles

1. In your custom directory add your custom css to `/assets/css/override.css`
2. In your custom theme directory under `/layouts/default.hbs` add `<link rel="stylesheet" href="{{relativeURL "assets/css/override.css"}}">`
