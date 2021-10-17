import styled from 'styled-components'

const InfoBannerStyles = styled.div`
  background: var(--primary);

  &&.default {
    background: var(--primary);
  }

  &&.alerta {
    background: var(--tertiary);
  }

  &&.peligro {
    background: var(--secondary);
  }

  &&.exito {
    background: var(--success);
  }

  display: ${({ bannerVisible }) => (bannerVisible ? 'block' : 'none')};

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 2rem 2rem;
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 4.5rem;
      margin-right: 1rem;
    }

    p {
      color: var(--white);
    }
  }

  .cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    justify-self: flex-end;
    align-self: end;

    padding: 0.5rem 1rem;
    outline: 0;
    border-radius: 1rem;
    cursor: pointer;

    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto;
    grid-gap: 1rem;
    align-items: center;

    background: rgba(14, 14, 44, 0.3);
    color: var(--white);
  }

  button {
    /* position: absolute; */
    right: 1rem;
    cursor: pointer;

    border: 2px solid rgba(14, 14, 44, 0.3);
    background: transparent;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    color: rgba(14, 14, 44, 0.3);
  }

  @media (min-width: 768px) {
    .container {
      justify-content: space-between;
      align-content: center;
      flex-direction: row;
      padding: 1rem 2rem;
    }

    .cta {
      align-self: center;
      gap: 2rem;
    }
  }
`
export { InfoBannerStyles }
