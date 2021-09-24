import styled from 'styled-components'

const BannerContainerStyles = styled.section`
  margin-top: 6rem;

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  a {
    display: flex;
    flex-basis: 0;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    color: var(--white);
    background: var(--primary);
    align-items: center;
    margin-top: auto;
    justify-items: space-between;

    span {
      margin-right: 1rem;
    }

    svg {
      fill: var(--white);
    }
  }

  .image-container {
    display: grid;
    grid-template-rows: repeat(5, 70px);
    grid-gap: 20px;
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
      width: 100vw;
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

export { BannerContainerStyles, BannerImageStyles }
