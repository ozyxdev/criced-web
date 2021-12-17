import React from 'react'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import styled from 'styled-components'
import {
  levelsEnum,
  PRIMARY_COURSE_INFO,
  SECONDARY_COURSE_INFO,
} from '../../utils/constants'
import { ButtonPrimary } from '../../components/styles/Button'
import { HeaderStyles } from '../../components/shared/HeaderStyles'
import htmlSerializer from '../../utils/html-serializer'
import ListCheckIcon from '../../components/shared/icons/ListCheckIcon'

const CoursePricingContainersStyles = styled.section`
  padding: 4rem;
  background: rgba(251, 252, 254, 1);
  .container {
    margin-top: 6rem;
    display: grid;
    grid-gap: 4rem;
    justify-items: center;
  }

  @media (min-width: 480px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
    .container.precioUnico {
      grid-template-columns: 1fr;
    }
  }
`

const CoursePricingSlice = ({ slice, level }) => {
  const {
    title,
    description,
    primaryTitle,
    primaryPrice,
    primaryDescription,
    primaryItems,
    secondaryTitle,
    secondaryPrice,
    secondaryDescription,
    secondaryItems,
  } = slice.primary

  const primaryCourseInfo = {
    title: primaryTitle || PRIMARY_COURSE_INFO.title,
    price: primaryPrice || PRIMARY_COURSE_INFO.price[level.toLowerCase()],
    description: primaryDescription || PRIMARY_COURSE_INFO.description,
    items: primaryItems,
    itemsDefault: PRIMARY_COURSE_INFO.items,
  }
  const secondaryCourseInfo = {
    title: secondaryTitle || SECONDARY_COURSE_INFO.title,
    price: secondaryPrice || SECONDARY_COURSE_INFO.price[level.toLowerCase()],
    description: secondaryDescription || SECONDARY_COURSE_INFO.description,
    items: secondaryItems,
    itemsDefault: SECONDARY_COURSE_INFO.items,
  }

  return (
    <CoursePricingContainersStyles className={`container-full-width `}>
      <HeaderStyles>
        <h2>{title || 'Nec ultrices dui.'}</h2>
        <p>
          {description || 'Vestibulum morbi blandit cursus risus at ultrices .'}
        </p>
      </HeaderStyles>
      <div className={`container ${slice.variation}`}>
        {slice.variation !== 'asesoria' && (
          <CoursePricing
            courseInfo={primaryCourseInfo}
            key="primary"
            type="primary"
          />
        )}
        {slice.variation !== 'precioUnico' && (
          <CoursePricing
            courseInfo={secondaryCourseInfo}
            key="secondary"
            type="secondary"
          />
        )}
      </div>
    </CoursePricingContainersStyles>
  )
}

const CoursePricingStyle = styled.div`
  color: ${({ type }) => (type === 'primary' ? '#FFFFFF' : '#5956E9')};
  background: ${({ type }) => (type === 'primary' ? '#5956E9' : '#FFFFFF')};
  border-radius: 2rem;
  padding: 3rem 4rem;
  align-self: start;

  @media (min-width: 480px) {
    max-width: 400px;
  }
  h2 {
    color: #b8b7f5;
    color: ${({ type }) => (type === 'primary' ? '#b8b7f5' : '#5956E9')};
    font-size: 22px;
    font-weight: 600;
  }

  h3 {
    font-size: 50px;
    font-weight: 600;
    line-height: 1;
    margin: 1rem 0;

    span {
      font-size: 2.5rem;
      margin-left: -0.8rem;
    }
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
    line-height: 180%;
  }

  li {
    display: flex;
  }

  svg {
    margin-top: 0.5rem;
    margin-right: 1rem;
  }

  hr {
    border: 1px solid
      ${({ type }) =>
        type === 'primary' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(236, 241, 244, 1)'};
    margin: 5rem 0 6.5rem 0;
  }

  button {
    width: 100%;
    margin-top: 5rem;
    background: ${({ type }) => type === 'primary' && 'rgba(113, 111, 236, 1)'};
  }
`

const CoursePricing = ({ courseInfo, type }) => (
  <CoursePricingStyle type={type}>
    <h2>{courseInfo.title}</h2>
    <h3>
      &#36;{courseInfo.price} {type === 'secondary' && <span>/hora</span>}
    </h3>
    <p>{courseInfo.description}</p>
    <hr />
    {courseInfo.items.length ? (
      <RichText render={courseInfo.items} htmlSerializer={htmlSerializer} />
    ) : (
      <ul>
        {courseInfo.itemsDefault.map((item) => (
          <li key={item}>
            <ListCheckIcon />
            {item}
          </li>
        ))}
      </ul>
    )}
    <Link href="/contacto">
      <ButtonPrimary>Más información</ButtonPrimary>
    </Link>
  </CoursePricingStyle>
)

export default CoursePricingSlice
