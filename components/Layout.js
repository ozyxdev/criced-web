import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import TypographyStyles from './styles/Typography'
import ExitPreviewButton from './shared/ExitPreviewButton'
import Navigation from './shared/Navigation'
import Footer from './shared/Footer'

const MainContainer = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
`

const Layout = ({ children, menu, footer }) => (
  <div>
    <Head>
      <title> Prismic Next.js Multi Page Website </title>
    </Head>
    <Navigation />
    <GlobalStyles />
    <TypographyStyles />
    <MainContainer>{children}</MainContainer>
    <ExitPreviewButton />
    <Footer footer={footer} />
  </div>
)

export default Layout
