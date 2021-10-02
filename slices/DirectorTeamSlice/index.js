import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import { HeaderStyles } from '../../components/shared/HeaderStyles'

const DirectorContainerStyles = styled.section`
  margin: 6rem 0;
  display: grid;
  grid-gap: 3rem;
`
const DirectorStyles = styled.article`
  display: grid;
  grid-gap: 3rem;

  img {
    justify-self: center;
    border-radius: 1.5rem;
    box-shadow: 0px 0px 3.6px rgba(0, 0, 0, 0.024),
      0px 0px 10px rgba(0, 0, 0, 0.035), 0px 0px 24.1px rgba(0, 0, 0, 0.046),
      0px 0px 80px rgba(0, 0, 0, 0.07);
  }

  h3 {
    font-size: 24px;
    line-height: 1;
  }

  small {
    font-size: 12px;
    color: #8c8ca1;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto;
  }
`

const DirectorTeamSlice = ({ slice }) => (
  <section>
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

    <DirectorContainerStyles>
      {slice?.items?.map(({ name, title, image, resume }) => (
        <DirectorStyles key={name} image={image}>
          <img src={image.url} alt={image.alt} />
          <div className="info">
            <h3>{name}</h3>
            <small>{title}</small>
            <RichText render={resume} />
          </div>
        </DirectorStyles>
      ))}
    </DirectorContainerStyles>
  </section>
)

export default DirectorTeamSlice
