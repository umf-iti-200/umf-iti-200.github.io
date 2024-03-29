import Layout from "../../../components/Layout";
import Breadcrumb from "../../../components/Breadcrumb";

import { getPosts } from "../../../api/Posts";

import PostList from "../../../components/PostList";

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

export async function getStaticPaths() {

    const pageNumbers = [1, 2, 3];

    const paths = pageNumbers.map((pageNumber) => ({
        params: {
            pageNumber: pageNumber.toString(),
        },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

    const pageNumber = parseInt(params.pageNumber);

    return {
        props: {
            posts: getPosts(pageNumber)
        }
    };
}
