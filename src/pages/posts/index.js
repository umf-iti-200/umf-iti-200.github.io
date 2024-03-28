import Link from "next/link";
import Table from "react-bootstrap/Table";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";

import { getPosts } from "../../api/Posts";

export default function IndexPage({ posts }) {

    const recentPostsAsHTML = posts.map((post, i) =>
        <div key={i}>
            <p className="mb-0 text-start" key={i}><Link href={`/posts/${post.id}`}>{post.title}</Link></p>
            <p className="small text-muted border-bottom pb-2 mb-2">
                {post.authorName}
                <span className="mx-1">&#183;</span>
                {post.publishedFromNow}
            </p>
        </div>
    );

    const postsAsHTML = posts.map((post, i) =>
        <tr key={i}>
            <td>
                <Link href={`posts/${post.id}`}>{post.title}</Link>
            </td>
            <td>{post.category}</td>
            <td>{post.authorName}</td>
            <td>{post.publishedFromNow}</td>
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

            {recentPostsAsHTML}
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
