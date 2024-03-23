import Link from "next/link";

import Layout from "../../components/Layout";

import { getPosts } from "../../api/Posts";

export default function IndexPage({ posts }) {

    const postsAsHTML = posts.map((post, i) =>
        <tr key={i}>
            <td>
                <Link href={`posts/${post.id}`}>{post.title}</Link>
            </td>
            <td>{post.author}</td>
            <td>{post.createdAt}</td>
        </tr>
    );

    return (
        <Layout menu="Home">

            <nav>
                <ol className="breadcrumb breadcrumb-chevron bg-body-tertiary rounded-3 p-3">
                    <li className="breadcrumb-item">
                        <Link href="/">
                            <i className="bi bi-house-door-fill"></i>
                            <span className="visually-hidden">Home</span>
                        </Link>
                    </li>
                    <li className="breadcrumb-item active">
                        <Link href="/posts" className="text-decoration-none">
                            Posts
                        </Link>
                    </li>
                </ol>
            </nav>

            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {postsAsHTML}
                </tbody>
            </table>
        </Layout>
    );
};

export async function getStaticProps() {

    return {
        props: {
            posts: getPosts()
        }
    };
}
