import matter from "gray-matter";
import showdown from "showdown";

import PathUtils from "../utils/PathUtils";
import DateUtils from "../utils/DateUtils";

const converter = new showdown.Converter();

export function findByFileName(fullPath) {

    const id = PathUtils.getFileName(fullPath);

    const fileContent = PathUtils.readFileContent(fullPath);

    const { data, content } = matter(fileContent);

    return {
        ...data,
        id,
        content: converter.makeHtml(content),
        publishedAt: DateUtils.parse(data.publishedAt)
    };
}

export function findById(id) {

    const fullPath = `data/posts/${id}.md`;

    return findByFileName(fullPath);
}

export function getPosts() {

    const files = PathUtils.searchFiles("data/posts/**/*.md");

    let posts = files.map((file) => findByFileName(file));

    posts = DateUtils.sort(posts, "publishedAt");

    return posts;
}

export function getRecentPosts(size = 3) {

    let posts = getPosts();

    return posts.slice(0, size);
}

export function getRecentPostsByAuthorId(authorId, size = 3) {

    let posts = getPosts();

    posts = posts.filter(e => e.authorId === authorId);

    return posts.slice(0, size);
}

export function getCategories() {

    const posts = getPosts();

    const categories = new Set();

    for (let post of posts) {
        categories.add(post.category);
    }

    return categories;
}
