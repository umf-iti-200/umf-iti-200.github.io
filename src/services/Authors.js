import authors from "../../content/authors.json";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database(":memory:");

db.serialize(() => {

    db.run(`
        CREATE TABLE  authors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            slug TEXT NOT NULL UNIQUE,
            name TEXT NOT NULL,
            title TEXT NOT NULL,
            bio TEXT NOT NULL
        );
    `);

    for (const author of authors) {

        const values = Object.values(author);

        db.run("INSERT INTO authors (slug, name, title, bio) VALUES (?, ?, ?, ?);", values);
    }

});

export async function findAll() {

    const SQL = "SELECT * FROM authors";

    return new Promise(function (resolve, reject) {

        db.all(SQL, (err, rows) => {
            if (err) { return reject(err); }
            resolve(rows);
        });
    });
}

export async function findBySlug(slug) {

    const SQL = "SELECT * FROM authors WHERE slug = ?";

    return new Promise(function (resolve, reject) {

        db.get(SQL, [slug], (err, rows) => {
            if (err) { return reject(err); }
            resolve(rows);
        });
    });
}
