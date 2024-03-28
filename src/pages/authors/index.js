import Link from "next/link";
import Table from "react-bootstrap/Table";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";

import { getAuthors } from "../../api/Authors";

export default function IndexPage({ authors }) {

    const authorsAsHTML = authors.map((author, i) =>
        <tr key={i}>
            <td>
                <Link href={`authors/${author.id}`}>{author.name}</Link>
            </td>
            <td>
                {author.title}
            </td>
        </tr>
    );

    return (
        <Layout menu="Authors">

            <Breadcrumb>
                <Breadcrumb.Item>Authors</Breadcrumb.Item>
            </Breadcrumb>

            <Table striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {authorsAsHTML}
                </tbody>
            </Table>
        </Layout>
    );
};

export async function getStaticProps() {

    return {
        props: {
            authors: getAuthors()
        }
    };
}
