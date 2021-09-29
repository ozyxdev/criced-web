import styled from 'styled-components'

const HeaderStyles = styled.header`
  background: var(--white);

  background: ${(props) =>
    props.isOpen ? 'rgba(14, 14, 44, 0.3)' : 'transparent'};
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;

  z-index: 10000;
  transition: all 200ms ease-in-out;

  @media (min-width: 480px) {
    transition: none;
    position: relative;
    background: var(--white);
    margin-top: 0;
  }
`

const NavigationStyles = styled.div`
  pointer-events: all;
  font-size: 2.2rem;
  text-transform: capitalize;
  display: flex;
  background: var(--white);
  position: absolute;
  width: 90%;
  margin-left: 5%;
  bottom: 15rem;
  height: auto;
  border-radius: 2rem;
  padding: 2rem 2rem;

  flex-direction: column;

  transition: all 200ms ease-in-out;
  transform: translateY(${(props) => (props.isOpen ? '0' : '100vh')});

  .logo-container {
    display: none;
  }

  .tooltip {
    position: absolute;
    width: 5rem;
    bottom: -2.5rem;
    right: 3rem;
    path {
      fill: var(--white);
    }
  }

  ul {
    color: var(--off-dark);
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

    li {
      position: relative;
      padding: 0.5rem 0;
      width: 100%;

      svg {
        fill: var(--off-dark);
      }

      .menu-cta {
        display: flex;
        align-items: center;
      }

      a {
        display: flex;
        justify-content: space-between;
        ::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--off-white);
        }
      }

      :last-child {
        a ::after {
          display: none;
        }
      }
    }
    [data-active='true'] {
      a {
        ::before {
          content: '';
          height: 80%;
          width: 2px;
          position: absolute;
          top: 10%;
          left: -2rem;
          background: var(--primary);
        }
      }
    }
  }

  @media (min-width: 480px) {
    position: relative;
    bottom: auto;
    width: 100%;
    transform: translateY(0);
    background: none;
    align: center;
    justify-content: space-between;
    flex-direction: row;
    margin: auto;
    max-width: var(--max-width);
    font-size: 2rem;
    border-radius: none;
    padding: 0 2rem;
    transition: none;

    .logo-container {
      display: flex;
      svg {
        margin: auto;
        height: 50px;
      }
    }

    ul {
      flex-direction: row;
      li {
        a {
          ::after {
            height: 2px;
            background: none;
          }
        }
        svg {
          display: none;
        }

        margin: 2rem;

        :last-child {
          padding: 0.5rem 2rem;
          border-radius: 1rem;
          background: #dcdbfa;
        }
      }

      // active link state depending on route

      [data-active='true'] {
        a {
          ::after {
            height: 2px;
            background: var(--primary);
          }

          ::before {
            display: none;
          }
        }
      }
    }
  }
`

const ActionBarStyles = styled.div`
  pointer-events: all;
  z-index: 100000;
  background: var(--off-white);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  box-shadow: 0px 0px 3.6px rgba(0, 0, 0, 0.024),
    0px 0px 10px rgba(0, 0, 0, 0.035), 0px 0px 24.1px rgba(0, 0, 0, 0.046),
    0px 0px 80px rgba(0, 0, 0, 0.07);

  svg {
    height: 6rem;
  }

  @media (min-width: 480px) {
    display: none;
  }
`

const MenuIconStyles = styled.div`
  pointer-events: all;
  position: absolute;
  transition: all 300ms ease-in-out;
  bottom: 3rem;
  right: 3rem;
  cursor: pointer;
  background: ${(props) =>
    props.isOpen ? 'var(--secondary)' : 'var(--success)'};
  border: 3px solid
    ${(props) =>
      props.isOpen ? 'var(--secondary-light)' : 'var(--success-light)'};
  width: 8rem;
  height: 8rem;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 1.1rem;
  box-shadow: 0px 0px 3.6px rgba(0, 0, 0, 0.024),
    0px 0px 10px rgba(0, 0, 0, 0.035), 0px 0px 24.1px rgba(0, 0, 0, 0.046),
    0px 0px 80px rgba(0, 0, 0, 0.07);

  svg {
    fill: var(--off-white);
  }

  @media (min-width: 480px) {
    display: none;
  }
`

export { HeaderStyles, NavigationStyles, ActionBarStyles, MenuIconStyles }
