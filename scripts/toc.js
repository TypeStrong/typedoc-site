// @ts-check

(function () {
    function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(
            document.documentElement.clientHeight,
            window.innerHeight
        );
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    // Ideally this should be done statically in the template, but I'm done fighting with eleventy.
    for (const a of document.querySelectorAll(".navigation a")) {
        if (location.pathname === new URL(a.href).pathname) {
            a.classList.add("current");
            if (!checkVisible(a)) {
                a.scrollIntoView({ block: "center" });
                document.documentElement.scrollTo(0, 0);
            }
        }
    }
})();

(function () {
    const theme = /** @type {HTMLInputElement | null} */ (
        document.querySelector("#theme")
    );
    if (theme) {
        theme.addEventListener("input", () => {
            localStorage.setItem("tsd-theme", theme.value);
            document.documentElement.dataset.theme = theme.value;
        });
    }
})();

(function () {
    const tocContainer = document.querySelector(".toc-container");
    /** @type {HTMLElement[]} */
    const tocContainerStack = [];
    if (tocContainer) {
        tocContainerStack.push(
            tocContainer.appendChild(document.createElement("ol"))
        );
    }

    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    headers.forEach(function (header) {
        if (header.parentElement.tagName != "A") {
            const anchor = header.parentElement.insertBefore(
                document.createElement("a"),
                header
            );
            anchor.href = "#" + header.id;
            anchor.appendChild(header);

            if (tocContainer) {
                const level = +header.tagName.substring(1);
                if (level > 1 && headers.length > 100) {
                    return;
                }

                while (level < tocContainerStack.length) {
                    tocContainerStack.pop();
                }
                if (level > tocContainerStack.length) {
                    const container = document.createElement("ol");
                    const containerLi = tocContainerStack[
                        tocContainerStack.length - 1
                    ].appendChild(document.createElement("li"));
                    containerLi.appendChild(container);
                    tocContainerStack.push(container);
                }

                const element = document.createElement("li");
                const tocAnchor = element.appendChild(
                    document.createElement("a")
                );
                tocAnchor.textContent = header.textContent.replace(
                    /\([^)]*\)/,
                    ""
                );
                tocAnchor.href = anchor.href;
                tocContainerStack[tocContainerStack.length - 1].appendChild(
                    element
                );
            }
        }
    });
})();
