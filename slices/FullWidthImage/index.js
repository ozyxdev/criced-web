import React from 'react'

export default function FullWidthImage({ slice }) {
  return (
    <section className="container">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </section>
  )
}
