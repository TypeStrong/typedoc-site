const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (el) {
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

  return {
    dir: {
      layouts: "_layouts",
    },
  };
};
