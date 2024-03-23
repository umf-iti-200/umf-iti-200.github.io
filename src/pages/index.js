import Link from "next/link";

import Layout from "../components/Layout";
import { Container } from "react-bootstrap";

export default function IndexPage() {

    return (
        <Layout menu="Home">

            <div className="px-sm-5 py-sm-5 mb-4 bg-body-tertiary rounded-3">
                <Container fluid className="py-5">
                    <h1 className="display-5 fw-bold">ITI 200 Introduction to Cloud Computing</h1>
                    <p className="col-md-8">Investigation of the capabilities of cloud computing from hardware and software perspectives, using an experiential learning approach. Topics include load balancing, data analytics, data warehousing, distributed storage and computing, and identity and authorization management.</p>
                    <Link className="btn btn-primary btn-lg" href="/posts">View Posts</Link>
                </Container>
            </div>

        </Layout>
    );
};
