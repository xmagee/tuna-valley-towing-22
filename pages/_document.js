import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}