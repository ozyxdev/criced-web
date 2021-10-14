import React from 'react'
import NextApp from 'next/app'
import { Client } from '../prismic-configuration'
import Layout from '../components/Layout'

export default class MyApp extends NextApp {
  static async getInitialProps(appCtx) {
    const client = Client()
    const menu = (await client.getSingle('menu')) || {}
    const footer = (await client.getSingle('footer')) || {}
    const infoBanner = (await client.getSingle('info-banner')) || {}
    return {
      props: {
        menu,
        footer,
        infoBanner,
      },
    }
  }

  render() {
    const { Component, pageProps, props } = this.props
    return (
      <Layout footer={props.footer} infoBanner={props.infoBanner}>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
