import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { MENU_ITEMS } from '../../utils/constants'

import LogoColor from './icons/LogoColor'
import MenuIcon from './icons/MenuIcon'
import ArrowRight from './icons/ArrowRight'
import scrollLock from '../../utils/scroll-lock'
import { useMediaQuery } from '../../utils/useMediaQuery'
import {
  HeaderStyles,
  NavigationStyles,
  ActionBarStyles,
  MenuIconStyles,
} from '../styles/NavigationStyles'
import { ButtonPrimaryRounded } from '../styles/Button'
import PlaneIcon from './icons/PlaneIcon'
import TooltipIcon from './icons/TooltipIcon'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isOverMobile = useMediaQuery('(min-width: 480px)')
  const router = useRouter()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    console.log('menuOpen', menuOpen)
  }

  useEffect(() => {
    if (menuOpen && !isOverMobile) scrollLock.enable()
    else if (isOverMobile) scrollLock.disable()
    else scrollLock.disable()
  }, [menuOpen, isOverMobile])

  return (
    <>
      <HeaderStyles
        isOpen={menuOpen}
        className="container-full-width"
        onClick={toggleMenu}
      >
        <NavigationStyles isOpen={menuOpen}>
          <div className="logo-container">
            <LogoColor />
          </div>
          <ul>
            {MENU_ITEMS.map((menuItem) => (
              <Link href={menuItem.path} key={menuItem.text}>
                <li data-active={router.asPath === menuItem.path}>
                  <>
                    <a>
                      {menuItem.text}
                      <div className="menu-cta">
                        <ArrowRight />
                      </div>
                    </a>
                  </>
                </li>
              </Link>
            ))}
          </ul>
          <div className="tooltip">
            <TooltipIcon />
          </div>
        </NavigationStyles>
        <MenuIconStyles
          isOpen={menuOpen}
          role="button"
          onClick={toggleMenu}
          tabIndex={0}
        >
          <MenuIcon isOpen={menuOpen} />
        </MenuIconStyles>
      </HeaderStyles>
      <ActionBarStyles className="container-full-width">
        <LogoColor />
        <ButtonPrimaryRounded>
          <PlaneIcon />
        </ButtonPrimaryRounded>
      </ActionBarStyles>
    </>
  )
}

export default Navigation
