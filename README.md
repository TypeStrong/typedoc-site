# TypeDoc homepage
Holds the contents of https://typedoc.org.
GitHub pages renders the website from the `gh-pages` branch using [Jekyll](https://jekyllrb.com/).

## Reporting Issues
Please report issues to the [TypeStrong/typedoc](https://github.com/TypeStrong/typedoc) repo for better visibility.

## Writing guides
Guides are stored in the `_guides/` directory and written in Markdown. Each file should contain the following header section for Jekyll with an appropriate title and menu order.

```
---
layout: 'guide'
title: 'Installation'
menuOrder: 1
---
```

## Running Jekyll locally
You can run Jekyll on a computer with Ruby 2.5 or higher installed and the `bundle` gem.

```bash
bundle install
bundle exec jekyll serve
```

See the [Github Guide](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
for a complete guide.
