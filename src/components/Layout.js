import { Container } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";

import ColorThemeNavItem from "./ColorThemeNavItem";

import Settings from "../../data/settings.json";

export default function Layout({ children, menu, title = "" }) {

    title = title ? title : menu;

    return (
        <>
            <Head>
                <title>{`${title} - ${Settings.company_name.full}`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <header>
                <Navbar expand="md" bg="dark" fixed="top" data-bs-theme="dark" className="border-bottom">
                    <Container>
                        <Link className="navbar-brand" href="/">
                            <span className="d-none d-sm-block">{Settings.company_name.full}</span>
                            <span className="d-block d-sm-none">{Settings.company_name.short}</span>
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="nav-link" href="/posts">Posts</Link>
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
                    {children}
                </Container>
            </main>
            <footer className="border-top pt-3 mt-3 small">
                <p className="text-center text-body-secondary small">{Settings.company_name.full}</p>
            </footer>
        </>
    );
}
