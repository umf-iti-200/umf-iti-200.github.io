import Link from "next/link";

export default function PostList({posts}) {

    const recentPostsAsHTML = posts.map((post, i) =>
        <div key={i}>
            <p className="mb-0 text-start" key={i}><Link href={`/posts/${post.id}`}>{post.title}</Link></p>
            <p className="small text-muted border-bottom pb-2 mb-2">
                <span>{post.authorName}</span>
                <span className="mx-1">&#183;</span>
                <span title={post.publishedAt}>{post.publishedFromNow}</span>
            </p>
        </div>
    );

    return (
        recentPostsAsHTML
    );
}
