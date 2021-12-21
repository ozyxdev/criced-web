import React from 'react'
import SEO from '../../components/shared/SEO'

const GeneralSocialCard = ({ slice }) => {
  const metadata = {
    title: slice.primary.title,
    description: slice.primary.description,
    image: slice.primary.image.url,
    alt: slice.primary.image.alt,
  }
  console.log('cardContent', metadata)
  return (
    <>
      <SEO meta={metadata} />
    </>
  )
}

export default GeneralSocialCard
