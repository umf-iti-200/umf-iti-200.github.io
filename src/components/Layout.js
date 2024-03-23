import { Row, Col, Container } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

import Head from "next/head";
import Link from "next/link";

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
                        <Navbar.Brand href="#">ITI 200 Introduction to Cloud Computing</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav>
                            <ColorThemeNavItem />
                        </Nav>
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
                </Container>
            </main>
        </>
    );
}
