import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";

import { getPosts } from "../../api/Posts";

import PostList from "../../components/PostList";

export default function IndexPage({ posts }) {

    return (
        <Layout menu="Posts">


            <Breadcrumb>
                <Breadcrumb.Item>Posts</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="title pb-3 border-bottom">Posts</h1>

            <PostList posts={posts} />

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
