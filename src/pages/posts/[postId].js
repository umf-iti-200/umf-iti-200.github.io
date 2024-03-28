import { Card } from "react-bootstrap";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";

import { getPosts, findById, getRecentPosts } from "../../api/Posts";
import Link from "next/link";

export default function Posts({ post, recentPosts }) {

    const tagsAsHTML = post.tags.map((tag, i) =>
        <a key={i} href="https://www.google.com">
            <span className="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle rounded-pill me-2">{tag}</span>
        </a>
    );

    const recentPostsAsHTML = recentPosts.map((post, i) =>
        <div key={i}>
            <p className="mb-0 text-start" key={i}><Link href={`/posts/${post.id}`}>{post.title}</Link></p>
            <p className="small text-muted border-bottom pb-2 mb-2">{post.publishedAt}</p>
        </div>

    );

    return (
        <Layout title={post.title}>

            <Breadcrumb>
                <Breadcrumb.Item href="/posts">Posts</Breadcrumb.Item>
                <Breadcrumb.Item>{post.title}</Breadcrumb.Item>
            </Breadcrumb>

            <div className="post">

                <h1 className="title">{post.title}</h1>
                <small className="text-muted">By <Link href={`/authors/${post.authorId}`}>{post.authorName}</Link> | Published: {post.publishedAt}</small>
                <hr />

                <div className="row">
                    <div className="col-12 col-lg-9 col-xxl-9 mb-3" dangerouslySetInnerHTML={{ __html: post.content }}>
                    </div>
                    <div className="col-12 col-lg-3 col-xxl-3">
                        <div className="position-sticky" style={{ "top": "5rem" }}>
                            <Card className="mb-3 mt-3">
                                <Card.Header className="fw-bold">Category</Card.Header>
                                <Card.Body>
                                    {post.category}
                                </Card.Body>
                            </Card>
                            <Card className="mb-3">
                                <Card.Header className="fw-bold">Tags</Card.Header>
                                <Card.Body>
                                    {tagsAsHTML}
                                </Card.Body>
                            </Card>

                            <h2 className="fw-bold border-bottom mb-2">Recent Posts</h2>
                            {recentPostsAsHTML}
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}

export async function getStaticPaths() {

    const posts = getPosts();

    const paths = posts.map((post) => ({
        params: {
            postId: post.id,
        },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

    return {
        props: {
            post: findById(params.postId),
            recentPosts: getRecentPosts()
        }
    };
}
