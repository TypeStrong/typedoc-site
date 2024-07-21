// @ts-check
const PLUGIN_QUERY = `https://www.npmjs.com/search?q=keywords%3Atypedoc-plugin keywords%3Atypedocplugin`;
const THEME_QUERY = `https://www.npmjs.com/search?q=keywords%3Atypedoc-theme`;

import * as cp from "child_process";
import { promises as fs, existsSync } from "fs";
import semver from "#semver";
import fetch from "node-fetch";

const EXCLUDED_PLUGINS = [
    // Fork not intended for public use.
    "@zamiell/typedoc-plugin-markdown",
    "@convex-dev/typedoc-plugin-markdown",
    "@jberesford/typedoc-plugin-mdn-links",

    // Custom plugins/themes for other libraries, likely not useful to most people.
    "@initializer-utils/typedoc-theme",
    "@colony/typedoc-plugin-markdown",
    "jsonforms-typedoc-theme",
    "typedoc-jsonforms-theme",
    "suika-docs-theme",
];

const EXCLUDED_PLUGIN_USERS = [
    // Forked typedoc-plugin-markdown, did not abide by license.
    "acceleratxr",
    // Has forked several plugins & published, forks do not appear to be for general use.
    "silei",
    "tivmof",
];

function exec(command: string) {
    return new Promise<string>((resolve, reject) => {
        cp.exec(command, (err, stdout) => {
            if (err) reject(err);
            else resolve(stdout);
        });
    });
}

async function getSupportedVersions(npmPackage: string) {
    const version = await exec(
        `npm view ${npmPackage} peerDependencies.typedoc`
    );
    return version.trim();
}

interface NpmPackage {
    name: string;
    publisher: { name: string };
    description: string;
    date: { ts: number; rel: string };
    links: NpmLinks;
    version: string;
}

interface NpmPackageWithPeer extends NpmPackage {
    peer: string;
}

interface NpmLinks {
    npm: string;
    repository?: string;
    homepage?: string;
}

interface Response {
    total: number;
    objects: { package: NpmPackage }[];
}

/** @returns {Promise<NpmPackage[]>} */
async function getAllPackages(query: string) {
    let page = 0;
    let total = 0;
    /** @type {NpmPackage[]} */
    const result = [];

    do {
        const data = (await (
            await fetch(`${query}&page=${page++}`, {
                headers: {
                    // Ask for JSON. Hasn't changed since 2018 at least...
                    "x-spiferack": "1",
                },
            })
        ).json()) as Response;

        total = data.total;
        result.push(...data.objects.map((x) => x.package));
    } while (result.length < total);

    return result;
}

function getSupportingPlugins(
    typedocVersion: string,
    plugins: NpmPackageWithPeer[]
) {
    const supported: NpmPackageWithPeer[] = [];

    for (const plugin of plugins) {
        if (EXCLUDED_PLUGINS.includes(plugin.name)) continue;
        if (EXCLUDED_PLUGIN_USERS.includes(plugin.publisher.name)) continue;

        let version = plugin.peer.trim();
        if (!version) continue;

        // Any plugin which declares a version with ">=" with no upper bound
        // should really have used "^", so rewrite it to that instead.
        if (version.includes(">=") && !version.includes("<")) {
            version = version.replace(/>=/g, "^");
        }

        // Any plugin which claims compatibility with a version far in the future is lying.
        // They can't possibly know that it satisfies this, so exclude them because we can't
        // reliably figure out what version they do actually support.
        if (semver.satisfies("0.99.0", version)) continue;

        if (semver.satisfies(typedocVersion, version)) {
            supported.push(plugin);
        }
    }

    return supported;
}

async function getLocalCache<T>(filename: string): Promise<T> {
    return JSON.parse(await fs.readFile(filename, "utf-8"));
}

function getAllVersions(plugins: NpmPackage[]): Promise<string[]> {
    return Promise.all(plugins.map((p) => getSupportedVersions(p.name)));
}

function createInclude(
    plugins: (NpmPackage & { peer: string })[],
    checkVersions: string[],
    ident: string
) {
    const out: string[] = [];

    for (const typedocVersion of checkVersions) {
        out.push(`<h2 id="${typedocVersion}">v${typedocVersion}</h2>`);

        for (const plugin of getSupportingPlugins(typedocVersion, plugins).sort(
            (a, b) => b.date.ts - a.date.ts
        )) {
            out.push(`<div class="box">`);
            out.push(
                `    <p class="title"><a href="${plugin.links.npm}" target="_blank">${plugin.name}</a></p>`
            );
            out.push(`    <p>${miniMarkdown(plugin.description || "")}</p>`);
            out.push(`    <p>
                <a href="https://www.npmjs.com/~${plugin.publisher.name}" target="_blank">${plugin.publisher.name}</a> published ${plugin.version} • ${plugin.date.rel}
            </p>`);
            out.push(`</div>`);
        }
    }

    return fs.writeFile(`_includes/${ident}.txt`, out.join("\n"));
}

function miniMarkdown(text: string) {
    return escapeHtml(text)
        .replace(
            /\[(.*?)\]\((https?:\/\/.*?)\)/g,
            (_, text, link) => `<a href="${link}" target="_blank">${text}</a>`
        )
        .replace(/`(.*?)`/g, "<code>$1</code>");
}

function escapeHtml(html: string) {
    return html.replace(
        /[&<>'"]/g,
        (c) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
            }[c as never])
    );
}

async function main() {
    const local = existsSync("plugins.json");

    const themes = local
        ? await getLocalCache<NpmPackage[]>("themes.json")
        : await getAllPackages(THEME_QUERY);

    const plugins = local
        ? await getLocalCache<NpmPackage[]>("plugins.json")
        : (await getAllPackages(PLUGIN_QUERY)).filter(
              (pack) => !themes.some((t) => t.name === pack.name)
          );

    const versions = local
        ? await getLocalCache<string[]>("versions.json")
        : await getAllVersions(plugins);

    const withVersions = plugins.map((plug, i) =>
        Object.assign(plug, { peer: versions[i] })
    );

    const typedocVersions = JSON.parse(
        await exec("npm view typedoc@* versions --json")
    ).filter((s: unknown) => typeof s === "string" && !s.includes("-"));

    console.log(typedocVersions.slice(-10));

    const checkVersions = [typedocVersions[typedocVersions.length - 1]];
    let index = typedocVersions.length - 1;
    let lastMinor = semver.parse(checkVersions[0])!.minor;

    while (checkVersions.length < 3) {
        const currentVersion = semver.parse(typedocVersions[index])!;
        if (currentVersion.minor < lastMinor) {
            checkVersions.push(typedocVersions[index]);
            lastMinor = currentVersion.minor;
        }
        index--;
    }

    await createInclude(withVersions, checkVersions, "plugin_content");
    console.log("Finished getting plugins");

    const themeVersions = local
        ? await getLocalCache<string[]>("theme_versions.json")
        : await getAllVersions(themes);

    const themesWithVersions = themes.map((plug, i) =>
        Object.assign(plug, { peer: themeVersions[i] })
    );

    // v0.23 - this needs to be updated.
    await createInclude(themesWithVersions, checkVersions, "theme_content");
    console.log("Finished getting themes");

    // Create a local cache for development to avoid hammering the API
    if (!local && process.env.CI !== "true") {
        await fs.writeFile("plugins.json", JSON.stringify(plugins, null, 4));
        await fs.writeFile("versions.json", JSON.stringify(versions, null, 4));
        await fs.writeFile("themes.json", JSON.stringify(themes, null, 4));
        await fs.writeFile(
            "theme_versions.json",
            JSON.stringify(themeVersions, null, 4)
        );
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
