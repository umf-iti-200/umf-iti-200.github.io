import PathUtils from "../utils/PathUtils";

export function findByFileName(fullPath) {

    const author = PathUtils.readYml(fullPath);

    author.id = PathUtils.getFileName(fullPath);

    return author;
}

export function findById(id) {

    const fullPath = `data/authors/${id}.yml`;

    return findByFileName(fullPath);
}

export function getAuthors() {

    const files = PathUtils.searchFiles("data/authors/**/*.yml");

    return files.map((file) => findByFileName(file));
}
