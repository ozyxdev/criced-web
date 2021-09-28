import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import TypographyStyles from './styles/Typography'
import ExitPreviewButton from './shared/ExitPreviewButton'
import Navigation from './shared/Navigation'

const MainContainer = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
`

const Layout = ({ children, menu }) => (
  <div>
    <Head>
      <title> Prismic Next.js Multi Page Website </title>
    </Head>
    <Navigation />
    <GlobalStyles />
    <TypographyStyles />
    <MainContainer>{children}</MainContainer>
    <ExitPreviewButton />
  </div>
)

export default Layout
