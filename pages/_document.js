// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { createResolver } from 'next-slicezone/resolver'
import { ServerStyleSheet } from 'styled-components'
import { apiEndpoint } from '../sm.json' // import the endpoint name

const prismicRepoName = /([a-zA-Z0-9-]+)?(\.cdn)?\.prismic\.io/.exec(
  apiEndpoint
)[1] // Regex to get repo ID
export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    await createResolver()

    // styled-components
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = ctx.renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    return { ...page, ...styleTags, ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.styleTags}
          <script
            async
            defer
            src={`//static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
