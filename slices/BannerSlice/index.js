import React from 'react'
import { RichText, Link, Date as ParseDate } from 'prismic-reactjs'
import SendIcon from '../../components/shared/icons/send'
import {
  BannerContainerStyles,
  BannerImageStyles,
} from '../../components/styles/BannerStyles'

export default function BannerSlice({ slice }) {
  return (
    <BannerContainerStyles>
      <div className="container">
        <div className="content-container">
          <h1>{RichText.asText(slice.primary.title)}</h1>
          <div className="banner-description">
            <RichText render={slice.primary.description} />
          </div>
          <a href={Link.url(slice.primary.cta)}>
            <span>{slice.primary.ctaLabel}</span>
            <SendIcon />
          </a>
        </div>
        <div className="image-container">
          {slice?.items?.map((item, i) => (
            <BannerImageStyles
              key={item.image.alt}
              defaultBackground={item.image.url}
              mobileBackground={item.image.mobile.url}
            >
              <RichText render={item.description} />
            </BannerImageStyles>
          ))}
        </div>
      </div>
    </BannerContainerStyles>
  )
}
