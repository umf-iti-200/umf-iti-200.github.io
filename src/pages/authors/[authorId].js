import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import PostList from "../../components/PostList";

import { findAll, findBySlug } from "../../services/Authors";
import { getRecentPostsByAuthorId } from "../../api/Posts";

export default function AuthorId({ author, recentPosts }) {

    return (
        <Layout title={author.name}>

            <Breadcrumb>
                <Breadcrumb.Item href="/authors">Authors</Breadcrumb.Item>
                <Breadcrumb.Item>{author.name}</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="title pb-3 border-bottom">{author.name}</h1>

            <h1>Title</h1>
            <p>{author.title}</p>

            <h1>Bio</h1>
            <p>{author.bio}</p>

            <h1>Recent Posts</h1>

            <PostList posts={recentPosts} />

        </Layout>
    );
}

export async function getStaticPaths() {

    const authors = await findAll();

    const paths = authors.map((author) => ({
        params: {
            authorId: author.slug,
        },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

    return {
        props: {
            author: await findBySlug(params.authorId),
            recentPosts: getRecentPostsByAuthorId(params.authorId)
        }
    };
}
