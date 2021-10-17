import { Link, RichText } from 'prismic-reactjs'
import { useState } from 'react'
import { InfoBannerStyles } from '../styles/InfoBannerStyles'

function InfoBanner({ infoBanner = [] }) {
  const [bannerVisible, setBannerVisible] = useState(
    infoBanner.data.active || false
  )
  function toggleBanner() {
    setBannerVisible(!bannerVisible)
  }
  return (
    <InfoBannerStyles
      className={`container-full-width ${infoBanner.data.type}`}
      bannerVisible={bannerVisible}
    >
      <div className="container">
        <div className="info">
          <img src={infoBanner.data.icon.url} alt={infoBanner.data.icon.alt} />
          <RichText render={infoBanner.data.description} />
        </div>
        <div className="cta">
          <a href={Link.url(infoBanner.data.linkURL)}>
            <span>{infoBanner.data.linkLabel}</span>
          </a>
          <button type="button" onClick={toggleBanner}>
            &times;
          </button>
        </div>
      </div>
    </InfoBannerStyles>
  )
}

export default InfoBanner
