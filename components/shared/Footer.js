import { Link as PrismicLink } from 'prismic-reactjs'
import Link from 'next/link'

import styled from 'styled-components'
import { MENU_ITEMS } from '../../utils/constants'
import LogoSimple from './icons/LogoSimple'

const FooterStyles = styled.footer`
  background: var(--primary);
  margin-top: 6rem;

  svg {
    width: 180px;
  }

  a {
    font-weight: 400;
  }

  .container-social {
    background: #3d3b9c;
  }

  ul.social {
    padding: 1rem 2rem;
    line-height: 1;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .container-footer {
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-transform: capitalize;

    ul {
      padding: 0;
      list-style: none;
      color: var(--white);
    }
  }

  @media (min-width: 480px) {
    ul.social {
      justify-content: flex-end;
    }

    .container-footer {
      ul {
        grid-row: 1;
        grid-column: 2/3;
      }

      svg {
        grid-row: 1;
        grid-column: 1/2;
      }
    }
  }

  @media (min-width: 768px) {
    .container-footer {
      ul {
        justify-self: end;
        text-align: right;
      }
    }
  }
`

function Footer({ footer = [] }) {
  const { social: socialItems } = footer.data
  return (
    <FooterStyles className="container-full-width">
      <div className="container">
        <div className="container-footer">
          <ul className="footer">
            {MENU_ITEMS.map((menuItem) => (
              <Link href={menuItem.path} key={menuItem.text}>
                <li>
                  <a>{menuItem.text}</a>
                </li>
              </Link>
            ))}
          </ul>
          <LogoSimple />
        </div>
        <div className="container-full-width container-social">
          <div className="container">
            <ul className="social">
              {socialItems.map(({ icon, link }) => (
                <li>
                  <a href={PrismicLink.url(link)}>
                    <img src={icon.url} alt={icon.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer
