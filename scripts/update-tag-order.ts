import { readFile, writeFile, readdir } from "fs/promises";
import { join } from "path";

const tags = await readdir("tags");
tags.sort((a, b) => a.localeCompare(b));

for (let i = 0; i < tags.length; i++) {
    const file = join("tags", tags[i]);
    const content = await readFile(file, "utf-8");
    await writeFile(file, content.replace(/order: \d+/, `order: ${i + 1}`));
}
