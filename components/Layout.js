import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import TypographyStyles from './styles/Typography'
import ExitPreviewButton from './shared/ExitPreviewButton'
import Navigation from './shared/Navigation'
import Footer from './shared/Footer'
import InfoBanner from './shared/InfoBanner'

const MainContainer = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
`

const Layout = ({ children, menu, footer, infoBanner }) => (
  <div>
    <Head>
      <title> CRICED </title>
    </Head>
    <InfoBanner infoBanner={infoBanner} />
    <Navigation />
    <GlobalStyles />
    <TypographyStyles />
    <MainContainer>{children}</MainContainer>
    <ExitPreviewButton />
    <Footer footer={footer} />
  </div>
)

export default Layout
