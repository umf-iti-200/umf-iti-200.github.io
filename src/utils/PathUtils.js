import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { glob } from "glob";

class PathUtils {

    static get(...str) {

        return path.join(...[...str]);
    }

    static getFileName(str) {

        var extension = path.extname(str);
        var file = path.basename(str, extension);

        return file;
    }

    static searchFiles(pattern) {

        const options = {
            cwd: process.cwd()
        };

        return glob.sync(pattern, options);
    }

    static listFiles(fullPath) {

        return new Promise((resolve, reject) => {

            const options = {};

            // glob(fullPath, options, function (error, files) {
            //     console.log("oi");
            //     if (error) reject(error);
            //     else resolve(files);
            // });
        });
    }

    static readStats(fullPath) {
        return fs.statSync(fullPath);
    }

    static readFileContent(fullPath) {

        const options = { encoding: "utf8", flag: "r" };

        return fs.readFileSync(fullPath, options);
    }

    static readYml(fullPath) {

        return new Promise((resolve, reject) => {

            PathUtils.readFileContent(fullPath).then((contents) => {

                resolve(yaml.load(contents));

            }).catch(reject);
        });
    }
}

export default PathUtils;
