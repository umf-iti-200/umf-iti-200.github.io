import { getPosts } from "../../api/Posts";

import PostPage from "./page/[pageNumber]";

import Settings from "../../../data/settings.json";

export default function IndexPage({ pageNumber, posts }) {

    return PostPage({ pageNumber, posts });
};

export async function getStaticProps() {

    const pageNumber = 1;

    return {
        props: {
            pageNumber,
            posts: getPosts(pageNumber, Settings.pageSize)
        }
    };
}
