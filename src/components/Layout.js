import { Row, Col, Container } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

import Head from "next/head";

import Package from "../../package.json";
import ColorThemeNavItem from "./ColorThemeNavItem";

export default function Layout({ children, menu, title = "", hasGoBackButton = false }) {

    title = title ? title : menu;

    return (
        <>
            <Head>
                <title>{`${title} - ${Package.author}`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <header>
                <Navbar expand="md" bg="dark" fixed="top" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <span className="d-none  d-sm-block">ITI 200 Introduction to Cloud Computing</span>
                            <span className="d-block d-sm-none">ITI 200</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/posts">Posts</Nav.Link>
                            </Nav>
                            <Nav>
                                <ColorThemeNavItem />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header >
            <main>
                <Container>
                    <Row>
                        <Col sm="12">
                            {children}
                        </Col>
                    </Row>
                    <footer className="border-top pt-3 mt-3 small">
                        <p className="text-center text-body-secondary">ITI 200 Introduction to Cloud Computing</p>
                    </footer>
                </Container>
            </main>
        </>
    );
}
