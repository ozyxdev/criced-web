import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Header from './Header'
import GlobalStyles from './styles/GlobalStyles'
import TypographyStyles from './styles/Typography'
import ExitPreviewButton from './shared/ExitPreviewButton'

const MainContainer = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
`

const Layout = ({ children, menu }) => (
  <div>
    <Head>
      <title> Prismic Next.js Multi Page Website </title>
    </Head>
    {/* <Header menu={menu} /> */}
    <GlobalStyles />
    <TypographyStyles />
    <MainContainer>{children}</MainContainer>
    <ExitPreviewButton />
  </div>
)

export default Layout
