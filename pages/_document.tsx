import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="w-screen h-screen overflow-x-hidden overflow-y-auto">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
