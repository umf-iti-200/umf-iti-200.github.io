import Link from "next/link";
import Image from "next/image";
import { Card } from "react-bootstrap";
import parse, { domToReact } from "html-react-parser";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import PostList from "../../components/PostList";

import { getPosts, findById, getRecentPosts } from "../../api/Posts";

function SidebarSection({ children }) {
    return <h2 className="fw-bold border-bottom mb-2">{children}</h2>;
}

export default function Posts({ post, recentPosts }) {

    const tagsAsHTML = post.tags.map((tag, i) =>
        <Link key={i} href={`/tags/${tag}`}>
            <span className="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle rounded-pill me-2">{tag}</span>
        </Link>
    );

    const toc = [];

    const bodyAsHTML = parse(post.content, {
        replace(domNode) {

            if (domNode.name === "h1") {
                toc.push({
                    id: domNode.attribs.id,
                    title: domNode.children[0].data
                });
            }

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

            if (domNode.name === "a") {

                let { href } = domNode.attribs;
                let { children } = domNode;

                if (!(href.startsWith("http://") || href.startsWith("https://"))) {

                    if (children.length === 1 && children[0].type === "text") {
                        return <Link href={href}> {children[0].data} </Link>;
                    }
                }
            }
        },
    });

    const tocAsHTML = toc.map((item, i) =>
        <li><a href={`#${item.id}`}>{item.title}</a></li>
    );

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

                        <SidebarSection>Table of Contents</SidebarSection>
                        <ul>
                            {tocAsHTML}
                        </ul>

                        <SidebarSection>Category</SidebarSection>
                        <p>{post.category}</p>

                        <SidebarSection>Tags</SidebarSection>
                        <p>{tagsAsHTML}</p>

                        <SidebarSection>Recent Posts</SidebarSection>

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
