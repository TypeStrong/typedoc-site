// @ts-check
const query = `https://www.npmjs.com/search?q=keywords%3Atypedocplugin`;

import * as cp from "child_process";
import { promises as fs, existsSync } from "fs";
import semver from "#semver";
import fetch from "node-fetch";

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
async function getAllPackages() {
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

async function getAllPackagesLocal(): Promise<NpmPackage[]> {
    return JSON.parse(await fs.readFile("plugins.json", "utf-8"));
}

function getAllVersions(plugins: NpmPackage[]): Promise<string[]> {
    return Promise.all(plugins.map((p) => getSupportedVersions(p.name)));
}

async function getAllVersionsLocal(): Promise<string[]> {
    return JSON.parse(await fs.readFile("versions.json", "utf-8"));
}

async function main() {
    const local = existsSync("plugins.json");

    const plugins = local
        ? await getAllPackagesLocal()
        : await getAllPackages();

    const versions = local
        ? await getAllVersionsLocal()
        : await getAllVersions(plugins);

    const withVersions = plugins.map((plug, i) =>
        Object.assign(plug, { peer: versions[i] })
    );

    const typedocVersions = JSON.parse(
        await exec("npm view typedoc@* version --json")
    ) as string[];

    const checkVersions = [typedocVersions[typedocVersions.length - 1]];
    let index = typedocVersions.length - 1;
    let lastMinor = semver.parse(checkVersions[0])!.minor;

    while (checkVersions.length < 3) {
        const currentVersion = semver.parse(typedocVersions[index])!;
        if (currentVersion.minor !== lastMinor) {
            checkVersions.push(typedocVersions[index]);
            lastMinor = currentVersion.minor;
        }
        index--;
    }

    const out: string[] = [];

    for (const typedocVersion of checkVersions) {
        out.push(`<h2 id="${typedocVersion}">v${typedocVersion}</h2>`);

        for (const plugin of getSupportingPlugins(
            typedocVersion,
            withVersions
        ).sort((a, b) => b.date.ts - a.date.ts)) {
            out.push(`<div class="box">`);
            out.push(
                `    <p class="title"><a href="${plugin.links.npm}" target="_blank">${plugin.name}</a></p>`
            );
            out.push(`    <p>${plugin.description}</p>`);
            out.push(`    <p>
                <a href="https://www.npmjs.com/~${plugin.publisher.name}" target="_blank">${plugin.publisher.name}</a> published ${plugin.version} • ${plugin.date.rel}
            </p>`);
            out.push(`</div>`);
        }

        out.push("</table>");
    }

    await fs.writeFile("_includes/plugin_content.txt", out.join("\n"));

    // Create a local cache for development to avoid hammering the API
    if (!local && process.env.CI !== "true") {
        await fs.writeFile("plugins.json", JSON.stringify(plugins, null, 4));
        await fs.writeFile("versions.json", JSON.stringify(versions, null, 4));
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
