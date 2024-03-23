import matter from "gray-matter";
import showdown from "showdown";

import PathUtils from "../utils/PathUtils";
import DateUtils from "../utils/DateUtils";

const converter = new showdown.Converter();

export function findByFileName(fullPath) {

    const id = PathUtils.getFileName(fullPath);

    const fileContent = PathUtils.readFileContent(fullPath);

    const { data, content } = matter(fileContent);

    const { birthtime, mtime } = PathUtils.readStats(fullPath);

    return {
        ...data,
        id,
        content: converter.makeHtml(content),
        modifiedAt: DateUtils.parse(mtime),
        createdAt: DateUtils.parse(birthtime),
    };
}

export function findById(id) {

    const fullPath = `data/posts/${id}.md`;

    return findByFileName(fullPath);
}

export function getPosts() {

    const files = PathUtils.searchFiles("data/posts/**/*.md");

    return files.map((file) => findByFileName(file));
}

export function getCategories() {

    const posts = getPosts();

    const categories = new Set();

    for (let post of posts) {
        categories.add(post.category);
    }

    return categories;
}
