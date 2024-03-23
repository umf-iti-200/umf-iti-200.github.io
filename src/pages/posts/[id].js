import { Card } from "react-bootstrap";

import Layout from "../../components/Layout";

import { getPosts, findById } from "../../api/Posts";
import Link from "next/link";

export default function Posts({ post }) {

    const tagsAsHTML = post.tags.map((tag, i) =>
        <a key={i} href="https://www.google.com">
            <span className="badge text-bg-primary me-2">{tag}</span>
        </a>
    );

    return (
        <Layout title={post.title}>

            <nav>
                <ol className="breadcrumb bg-body-tertiary rounded py-2 ps-3">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active">What is Workspace?</li>
                </ol>
            </nav>

            <div className="post">
                <div className="header">
                    <h1>{post.title}</h1>
                    <small className="text-muted">By Thiago Ferreira | Published: {post.createdAt} | Updated: {post.modifiedAt}</small>
                    <hr />
                </div>
                <div className="row">
                    <div className="body col-12 col-md-9 col-lg-9 col-xxl-10" dangerouslySetInnerHTML={{ __html: post.content }}>
                    </div>
                    <div className="sidepanel col-12 col-md-3 col-lg-3 col-xxl-2">
                        <Card className="mb-3">
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
                    </div>
                </div>
            </div>

            <hr/>

            <Link href="/" className="text-decoration-none">← Back to Home</Link>

        </Layout>
    );
}

export async function getStaticPaths() {

    const posts = getPosts();

    const paths = posts.map((post) => ({
        params: {
            id: post.id,
        },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

    return {
        props: {
            post: findById(params.id)
        }
    };
}
