const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (el) {
  el.addPassthroughCopy("css");
  el.addPassthroughCopy("scripts");
  el.addPassthroughCopy("images");

  el.addPlugin(syntaxHighlight);

  el.setLibrary("md", markdownIt({ html: true }).use(markdownItAnchor));

  return {
    dir: {
      layouts: "_layouts",
    },
  };
};
