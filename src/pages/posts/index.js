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

    return (
        <Layout menu="Posts">

            <Breadcrumb>
                <Breadcrumb.Item>Posts</Breadcrumb.Item>
            </Breadcrumb>

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
