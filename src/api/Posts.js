import matter from "gray-matter";
import showdown from "showdown";
import readingTime from "reading-time";
import showdownHighlight from "showdown-highlight";
import PathUtils from "../utils/PathUtils";
import DateUtils from "../utils/DateUtils";

const converter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    extensions: [
        showdownHighlight
    ]
});

export function findByFileName(fullPath) {

    const id = PathUtils.getFileName(fullPath);

    const fileContent = PathUtils.readFileContent(fullPath);

    const { data, content } = matter(fileContent);

    const publishedAt = DateUtils.parse(data.publishedAt);

    return {
        ...data,
        id,
        content: converter.makeHtml(content),
        readingTimeAsText: readingTime(content).text,
        publishedAt: DateUtils.format(publishedAt),
        publishedFromNow: DateUtils.fromNow(publishedAt)
    };
}

export function findById(id) {

    const fullPath = `data/posts/${id}.md`;

    return findByFileName(fullPath);
}

export function getPosts() {

    const files = PathUtils.searchFiles("data/posts/**/*.md");

    let posts = files.map((file) => findByFileName(file));

    return DateUtils.sort(posts, "publishedAt");
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
