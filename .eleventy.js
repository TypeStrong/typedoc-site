const fs = require("fs");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { join } = require("path");

module.exports = function (el) {
    el.setUseGitIgnore(false);

    el.addPassthroughCopy("css");
    el.addPassthroughCopy("scripts");
    el.addPassthroughCopy("images");
    el.addPassthroughCopy("CNAME");

    el.addPlugin(syntaxHighlight);

    el.setLibrary("md", markdownIt({ html: true }).use(markdownItAnchor));

    el.addCollection("sorted_guides", function (collection) {
        const items = collection.getFilteredByTag("guide");
        items.sort((a, b) => a.data.menuOrder - b.data.menuOrder);
        return items;
    });

    el.addShortcode("typedocPlugins", () =>
        fs.readFileSync(join(__dirname, "_includes/plugin_content.txt"))
    );

    el.addShortcode("typedocThemes", () =>
        fs.readFileSync(join(__dirname, "_includes/theme_content.txt"))
    );

    return {
        dir: {
            layouts: "_layouts",
        },
    };
};
