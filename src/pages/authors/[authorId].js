import { Card } from "react-bootstrap";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";

import { getAuthors, findById } from "../../api/Authors";
import { getRecentPostsByAuthorId } from "../../api/Posts";
import Link from "next/link";

export default function AuthorId({ author, recentPosts }) {

    const recentPostsAsHTML = recentPosts.map((post, i) =>
        <li><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
    );

    return (
        <Layout title={author.name}>

            <Breadcrumb>
                <Breadcrumb.Item href="/authors">Authors</Breadcrumb.Item>
                <Breadcrumb.Item>{author.name}</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="title">{author.name}</h1>
            <hr />

            <h1>Bio</h1>
            <p>{author.bio}</p>

            <h1>Recent Posts</h1>
            <ul>
                {recentPostsAsHTML}
            </ul>
        </Layout>
    );
}

export async function getStaticPaths() {

    const authors = getAuthors();

    const paths = authors.map((author) => ({
        params: {
            authorId: author.id,
        },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

    return {
        props: {
            author: findById(params.authorId),
            recentPosts: getRecentPostsByAuthorId(params.authorId)
        }
    };
}
