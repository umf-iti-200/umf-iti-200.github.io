import Layout from "../../../components/Layout";
import Breadcrumb from "../../../components/Breadcrumb";

import { getPosts } from "../../../api/Posts";

import PostList from "../../../components/PostList";
import Pagination from "../../../components/Pagination";
import ArrayUtils from "../../../utils/ArrayUtils";

import Settings from "../../../../data/settings";

export default function PostPage({ posts, pageNumber, maxPages }) {

    return (
        <Layout menu="Posts">

            <Breadcrumb>
                <Breadcrumb.Item>Posts</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="title pb-3 border-bottom">Posts</h1>

            <PostList posts={posts} />

            <Pagination href="/posts/page/$1" pageNumber={pageNumber} maxPages={maxPages} />

        </Layout>
    );
};

export async function getStaticPaths() {

    const posts = getPosts();

    const maxPages = Math.ceil(posts.length / Settings.pageSize);

    const pageNumbers = Array.from({ length: maxPages }, (_, i) => i + 1);

    const paths = pageNumbers.map((pageNumber) => ({
        params: {
            pageNumber: pageNumber.toString()
        },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

    const posts = getPosts();

    const pageNumber = parseInt(params.pageNumber);
    const pageSize = Settings.pageSize;
    const maxPages = Math.ceil(posts.length / pageSize);

    const filtered = ArrayUtils.paginate(posts, pageNumber, pageSize);

    return {
        props: {
            pageNumber,
            maxPages,
            posts: filtered
        }
    };
}
