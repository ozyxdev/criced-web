import styled from 'styled-components'

const BannerContainerStyles = styled.section`
  margin: 6rem 0 10rem 0;

  .container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 2fr 1fr;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .banner-description {
    margin-bottom: 2rem;
  }

  a {
    display: flex;
    padding: 1rem 2rem;

    span {
      margin-right: 1rem;
    }
  }

  .image-container {
    display: none;
  }

  @media (min-width: 480px) {
    .container {
      grid-template-columns: 3fr 6fr;
    }

    .image-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: 1fr;
      grid-gap: 20px;
    }
  }

  // Banner with image
  &&.bannerImageSlice {
    .container {
      grid-template-columns: 1fr;
    }
    @media (min-width: 480px) {
      .container {
        grid-template-columns: 1fr 1fr;
      }

      .image-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
      }
    }
  }
`
const BannerImageStyles = styled.div`
  width: 100%;
  background-size: cover;
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgba(251, 252, 254, 0.1) 30%,
      rgba(13, 0, 77, 0.4) 100%
    ),
    ${(props) => `url(${props.mobileBackground})`};
  border-radius: 1rem;

  h2 {
    position: absolute;
    font-size: 2rem;
    padding: 0.5rem 1.5rem 0.5rem 0.5rem;
    line-height: 1;
    background: rgba(89, 86, 233, 0.6);
    color: var(--white);
    max-width: 90%;
    bottom: 0;
    right: 0;
    border-radius: 1rem 0 1rem 0;
  }

  @media (min-width: 480px) {
    cursor: pointer;
    background-image: linear-gradient(
        to bottom,
        rgba(251, 252, 254, 0.1) 30%,
        rgba(13, 0, 77, 0.4) 100%
      ),
      ${(props) => `url(${props.defaultBackground})`};

    h2 {
      transform-origin: left bottom;
      transform: rotate(0.75turn);
      color: var(--white);
      position: absolute;
      left: 5rem;
      bottom: 3rem;
      right: auto;
      font-size: 2.75rem;
      background: none;
      width: 400px;
      max-width: 100vh;
    }

    ::before {
      content: '';
      position: absolute;
      background: rgba(13, 0, 77, 0.4);
      height: 7rem;
      width: 7rem;
      bottom: 2rem;
      left: 0;
    }
    transition: all 200ms ease-in-out;

    :hover {
      transform: scale(1.05);
      ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0.5rem solid var(--primary);
        border-radius: inherit;
      }
      ::before {
        background: rgba(89, 86, 233, 0.8);
      }
    }
  }
`

const PrimaryImageStyles = styled.div`
  display: none;
  @media (min-width: 480px) {
    display: block;
    grid-column: 2/4;
    grid-row: 1/4;
    background-image: ${(props) => `url(${props.background})`};
    background-size: cover;
    background-position: center center;
    height: 353px;
    width: 270px;
    border-radius: 1rem;
    justify-self: end;

    box-shadow: 0px 0px 3.6px rgba(0, 0, 0, 0.024),
      0px 0px 10px rgba(0, 0, 0, 0.035), 0px 0px 24.1px rgba(0, 0, 0, 0.046),
      0px 0px 80px rgba(0, 0, 0, 0.07);
  }
`
const SecondaryImageStyles = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    border-radius: 1rem;
    width: 256px;
    height: 151px;
    grid-column: 1/3;
    grid-row: 2/4;
    background-image: ${(props) => `url(${props.background})`};
    background-size: cover;
    align-self: center;
    justify-self: end;

    box-shadow: 0px 0px 3.6px rgba(0, 0, 0, 0.024),
      0px 0px 10px rgba(0, 0, 0, 0.035), 0px 0px 24.1px rgba(0, 0, 0, 0.046),
      0px 0px 80px rgba(0, 0, 0, 0.07);
  }
`

export {
  BannerContainerStyles,
  BannerImageStyles,
  PrimaryImageStyles,
  SecondaryImageStyles,
}
