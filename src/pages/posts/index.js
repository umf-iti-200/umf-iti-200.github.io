import PostPage from "./page/[pageNumber]";
import { getStaticProps as getStaticPropsFromPage } from "./page/[pageNumber]";

export default function IndexPage({ posts, pageNumber, maxPages }) {

    return PostPage({ posts, pageNumber, maxPages });
};

export async function getStaticProps() {

    return await getStaticPropsFromPage({ params: { pageNumber: 1 } });
}
