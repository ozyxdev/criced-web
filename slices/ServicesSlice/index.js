import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'

const ServiceStyles = styled.section`
  margin-top: 8rem;
  display: grid;
  h2 {
    font-size: 40px;
  }

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
    height: 4rem;
    width: 4rem;
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
    line-height: 150%;
  }
`

const ServicesSlice = ({ slice, data }) => {
  const items = slice?.items?.length > 1 ? slice?.items : data?.items
  return (
    <ServiceStyles>
      <div className="section-header">
        <RichText render={data ? data.primary.title : slice.primary.title} />
        <RichText
          render={data ? data.primary.description : slice.primary.description}
        />
      </div>

      {items?.map((item, i) => (
        <ServiceItemStyles key={item.title[0].text}>
          <img src={item.icon.url} alt={item.icon.alt} />
          <RichText render={item.title} />
          <RichText render={item.subtitle} />
          <RichText render={item.description} />
        </ServiceItemStyles>
      ))}
    </ServiceStyles>
  )
}

export default ServicesSlice
