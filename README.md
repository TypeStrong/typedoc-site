# TypeDoc homepage
Holds the contents of http://typedoc.org.
GitHub pages renders the website from the `gh-pages` branch using [Jekyll](https://jekyllrb.com/).

## Writing guides
Guides are stored in the `_guides/` directory and written in Markdown. Each file should contain the following header section for Jekyl with an appropriate title and menu order.

```
---
layout: 'guide'
title: 'Installation'
menuOrder: 1
---
```

## Running Jekyll locally
You can run Jekyll on a computer with Ruby 2.1 or higher installed and the `bundle` gem.

```bash
bundle install
bundle exec jekyll serve
```

See the [Github Guide](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
for a complete guide.
