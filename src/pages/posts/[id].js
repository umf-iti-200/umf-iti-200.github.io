import { Card } from "react-bootstrap";

import Layout from "../../components/Layout";

import { getPosts, findById } from "../../api/Posts";
import Link from "next/link";

export default function Posts({ post }) {

    const tagsAsHTML = post.tags.map((tag, i) =>
        <a key={i} href="https://www.google.com">
            <span className="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle rounded-pill me-2">{tag}</span>
        </a>
    );

    return (
        <Layout title={post.title}>

            <nav>
                <ol className="breadcrumb breadcrumb-chevron bg-body-tertiary rounded-3 p-3">
                    <li className="breadcrumb-item">
                        <Link href="/">
                            <i className="bi bi-house-door-fill"></i>
                            <span className="visually-hidden">Home</span>
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link href="/posts" className="text-decoration-none">
                            Posts
                        </Link>
                    </li>
                    <li className="breadcrumb-item active">
                        {post.title}
                    </li>
                </ol>
            </nav>

            <div className="post">
                <div className="header">
                    <h1>{post.title}</h1>
                    <small className="text-muted">By Thiago Ferreira | Published: {post.createdAt} | Updated: {post.modifiedAt}</small>
                    <hr />
                </div>
                <div className="row">
                    <div className="body col-12 col-lg-9 col-xxl-10 mb-3" dangerouslySetInnerHTML={{ __html: post.content }}>
                    </div>
                    <div className="sidepanel col-12 col-lg-3 col-xxl-2">
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
