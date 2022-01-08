import fs from 'fs-extra';
import path from "path";
import pug from "pug";

const CONTENT_DIR = process.cwd() + "/content/";
const ASSETS_DIR = process.cwd() + "/content/assets/";
const OUTPUT_DIR = process.cwd() + "/generated/";

const gen = async () => {
    console.info("Generating...");
    // Remove old files in output dir
    await fs.mkdir(OUTPUT_DIR, {recursive: true});
    for (const name of await fs.readdir(OUTPUT_DIR)) {
        await fs.rm(OUTPUT_DIR + name, {recursive: true});
    }
    // Render content
    for (const dirent of await fs.readdir(CONTENT_DIR, {withFileTypes: true})) {
        if (dirent.name === "templates") continue;
        // Only render top-level .pug files under ./content/
        if (!dirent.name.endsWith(".pug")) {
            fs.copy(CONTENT_DIR + dirent.name, OUTPUT_DIR + dirent.name);
        } else {
            const content = pug.renderFile(CONTENT_DIR + dirent.name);
            await fs.writeFile(OUTPUT_DIR + path.basename(dirent.name, ".pug") + ".html", content);
        }
    }
    console.info("Finished generating.")
}


// Wrap it all in a try/catch :)
(async () => {
    try {
        gen();
    } catch (e) {
        console.error(`Generator error: ${e}`);
    }
})();