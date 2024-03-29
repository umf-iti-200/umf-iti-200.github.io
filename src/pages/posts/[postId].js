import Link from "next/link";
import Image from "next/image";
import { Card } from "react-bootstrap";
import parse, { domToReact } from "html-react-parser";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import PostList from "../../components/PostList";

import { getPosts, findById, getRecentPosts } from "../../api/Posts";

function imageLoader({ src, width, quality }) {
    console.log(src)
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}

export default function Posts({ post, recentPosts }) {

    const tagsAsHTML = post.tags.map((tag, i) =>
        <Link key={i} href={`/tags/${tag}`}>
            <span className="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle rounded-pill me-2">{tag}</span>
        </Link>
    );

    const bodyAsHTML = parse(post.content, {
        replace(domNode) {
            if (domNode.name === "img") {

                let { src, width, height, alt } = domNode.attribs;

                if (!(src.startsWith("http://") || src.startsWith("https://"))) {
                    src = `/images/posts/${post.id}/${src}`;
                }

                return <Image
                    unoptimized
                    src={src}
                    width={width || 500}
                    height={height || 500}
                    alt={alt || "alternative text"}
                />;
            }
        },
    });

    return (
        <Layout title={post.title}>

            <Breadcrumb>
                <Breadcrumb.Item href="/posts">Posts</Breadcrumb.Item>
                <Breadcrumb.Item>{post.title}</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="title">{post.title}</h1>

            <ul className="list-inline small border-bottom pb-3 text-muted">
                <li className="list-inline-item"><Link href={`/authors/${post.authorId}`}>{post.authorName}</Link></li>
                <li className="list-inline-item"><span>&#183;</span></li>
                <li className="list-inline-item">{post.readingTimeAsText}</li>
                <li className="list-inline-item"><span>&#183;</span></li>
                <li className="list-inline-item"><span title={post.publishedAt}>{post.publishedFromNow}</span></li>
            </ul>

            <div className="row">
                <div className="col-12 col-lg-9 col-xxl-9 mb-3">
                    {bodyAsHTML}
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

                        <PostList posts={recentPosts} />

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
