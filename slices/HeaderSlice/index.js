import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

const HeaderStyles = styled.section`
  margin-top: 4rem;
  text-align: center;

  @media (min-width: 768px) {
    p {
      width: 80%;
      margin: 1rem auto;
    }
  }
`

const HeaderSlice = ({ slice }) => (
  <HeaderStyles>
    <span className="title">
      {slice.primary.title ? (
        <RichText render={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <RichText render={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Prismic builder!</p>
    )}
  </HeaderStyles>
)

export default HeaderSlice
