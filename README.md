# TypeDoc homepage

Holds the contents of https://typedoc.org.
GitHub pages renders the website from the `gh-pages` branch, using the `_site/` folder.

## Reporting Issues

Please report issues to the [TypeStrong/typedoc](https://github.com/TypeStrong/typedoc) repo for better visibility.

## Writing guides

Guides are stored in the `guides/` directory and written in Markdown. Each file should contain the following header section with an appropriate title and menu order.

```
---
layout: 'guide'
title: 'Installation'
menuOrder: 1
---
```

## Building the site locally

```bash
npm i
npm run build --watch
```
