function SEO({ meta }) {
  const { title, image, alt, description } = meta
  return (
    <>
      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image || '/ogimage.jpg'} />
      <meta property="og:image:secure_url" content={image || '/ogimage.jpg'} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="650" />
      {alt && <meta property="og:image:alt" content={alt || 'CRICED'} />}

      <meta property="og:type" content="article" />

      <meta property="og:url" content="http://www.criced.com/" />

      <meta property="og:site_name" content="CRICED" />
    </>
  )
}

export default SEO
