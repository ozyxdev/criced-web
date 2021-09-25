import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

const ServiceStyles = styled.section`
  margin-top: 8rem;
  display: grid;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ServiceItemStyles = styled.article`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  img {
    flex-basis: 0;
    align-self: flex-end;
  }
  h3 {
    font-size: 22px;
    line-height: 100%;
    font-weight: bold;
  }
  h4 {
    font-size: 12px;
    color: #8c8ca1;
    text-transform: uppercase;
  }
`

const ServicesSlice = ({ slice }) => (
  <ServiceStyles>
    <div className="section-header">
      <span>
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
    </div>

    {slice?.items?.map((item, i) => (
      <ServiceItemStyles key={item.title[0].text}>
        <img src={item.icon.url} alt={item.icon.alt} />
        <RichText render={item.title} />
        <RichText render={item.subtitle} />
        <RichText render={item.description} />
      </ServiceItemStyles>
    ))}
  </ServiceStyles>
)

export default ServicesSlice
