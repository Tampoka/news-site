import React from "react"
import {ServerStyleSheet} from "styled-components"
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from "next/document"

export default class MyDocument extends Document {
    render() {
        const description = "The Next generation of a news feed"
        const fontsUrl =
            "https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
        return (
            <Html>
                <Head>
                    <meta name="description" content={description}/>
                    <link href={fontsUrl} rel="stylesheet"/>
                    {this.props.styles}
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}