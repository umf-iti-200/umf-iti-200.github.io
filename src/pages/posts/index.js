import Link from "next/link";
import Table from "react-bootstrap/Table";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";

import { getPosts } from "../../api/Posts";

export default function IndexPage({ posts }) {

    const postsAsHTML = posts.map((post, i) =>
        <tr key={i}>
            <td>
                <Link href={`posts/${post.id}`}>{post.title}</Link>
            </td>
            <td>{post.category}</td>
            <td>{post.authorName}</td>
            <td>{post.publishedAt}</td>
        </tr>
    );

    return (
        <Layout menu="Posts">

            <Breadcrumb>
                <Breadcrumb.Item>Posts</Breadcrumb.Item>
            </Breadcrumb>

            <Table striped>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Published At</th>
                    </tr>
                </thead>
                <tbody>
                    {postsAsHTML}
                </tbody>
            </Table>
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
