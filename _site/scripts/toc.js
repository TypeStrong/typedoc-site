(function () {
  var tocContainer = document.querySelector(".toc-container");
  /** @type {HTMLElement} */
  var tocContainerStack = [];
  if (tocContainer) {
    tocContainerStack.push(
      tocContainer.appendChild(document.createElement("ol"))
    );
  }

  document
    .querySelectorAll("h1, h2, h3, h4, h5, h6")
    .forEach(function (header) {
      if (header.parentElement.tagName != "A") {
        var anchor = header.parentElement.insertBefore(
          document.createElement("a"),
          header
        );
        anchor.href = "#" + header.id;
        anchor.appendChild(header);

        if (tocContainer) {
          var level = +header.tagName.substr(1);
          if (level < tocContainerStack.length) {
            tocContainerStack.pop();
          } else if (level > tocContainerStack.length) {
            var container = document.createElement("ol");
            var containerLi = tocContainerStack[
              tocContainerStack.length - 1
            ].appendChild(document.createElement("li"));
            containerLi.appendChild(container);
            tocContainerStack.push(container);
          }

          var element = document.createElement("li");
          var tocAnchor = element.appendChild(document.createElement("a"));
          tocAnchor.textContent = header.textContent;
          tocAnchor.href = anchor.href;
          tocContainerStack[tocContainerStack.length - 1].appendChild(element);
        }
      }
    });
})();
