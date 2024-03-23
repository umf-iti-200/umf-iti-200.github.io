import Link from "next/link";

import Layout from "../components/Layout";

import { getPosts } from "../api/Posts";

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
                <ol className="breadcrumb bg-body-tertiary rounded py-2 ps-3">
                    <li className="breadcrumb-item active">Home</li>
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
