import { Html, Head, Main, NextScript } from "next/document";

import Package from "../../package.json";

export default function Document() {

    return (
        <Html lang="en" data-bs-theme="light">
            <Head>
                <meta charSet="utf-8" />
                <meta name="author" content={Package.author} />
                <meta name="description" content={Package.description} />
                <meta name="keywords" content={Package.keywords} />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#222529" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta name="apple-mobile-web-app-title" content={Package.author} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
