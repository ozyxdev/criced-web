import React from 'react'
import { RichText, Link, Date as ParseDate } from 'prismic-reactjs'
import PlaneIcon from '../../components/shared/icons/PlaneIcon'
import {
  BannerContainerStyles,
  BannerImageStyles,
  PrimaryImageStyles,
  SecondaryImageStyles,
} from '../../components/styles/BannerStyles'
import { ButtonPrimary } from '../../components/styles/Button'

export default function BannerSlice({ slice }) {
  return (
    <BannerContainerStyles className={`${slice.variation}`}>
      <div className="container">
        <div className="content-container">
          <h1>{RichText.asText(slice.primary.title)}</h1>
          <div className="banner-description">
            <RichText render={slice.primary.description} />
          </div>
          <ButtonPrimary>
            <a href={Link.url(slice.primary.cta)}>
              <span>{slice.primary.ctaLabel}</span>
              <PlaneIcon />
            </a>
          </ButtonPrimary>
        </div>
        {slice.variation !== 'bannerImageSlice' ? (
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
        ) : (
          <div className="image-container">
            <PrimaryImageStyles background={slice.primary.primaryImage.url} />
            <SecondaryImageStyles
              background={slice.primary.secondaryImage.url}
            />
          </div>
        )}
      </div>
    </BannerContainerStyles>
  )
}
