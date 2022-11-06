import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import LanguageToggle from '@components/LanguageToggle';
import Image from 'next/image';
import Link from 'next/link';

import { Container, MenuItem } from './style';
import { useState } from 'react';
import { useScrollPosition } from 'src/hooks/useScrollPosition';

const HamburgerMenu = ({ currentPage }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollPosition = useScrollPosition();

  function toggle() {
    setOpenMenu(!openMenu);
  }

  return (
    <Container scroll={scrollPosition > 0 && !openMenu}>
      <div className="top-box">
        <div
          className={`hamburger ${openMenu ? 'active' : null}`}
          onClick={toggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <Link href="/">
          <a>
            <div className="logo-wrapper">
              <Image src="/images/logo.svg" alt="logo" layout="fill" />
            </div>
          </a>
        </Link>

        <div className="right-box">
          <div className="insta-icon-wrapper">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="language-toggle-wrapper">
            <LanguageToggle />
          </div>
        </div>
      </div>

      <div className={`bottom-box ${openMenu ? 'open' : null}`}>
        <MenuItem
          active={
            currentPage === 'home' ||
            currentPage === 'ashtanga' ||
            currentPage === 'vinyasa' ||
            currentPage === 'private' ||
            currentPage === 'zoom'
          }
          onClick={() => setOpenMenu(false)}
        >
          <Link href="/">Home</Link>
        </MenuItem>

        <MenuItem
          active={currentPage === 'about'}
          onClick={() => setOpenMenu(false)}
        >
          <Link href="/about">About</Link>
        </MenuItem>

        <MenuItem
          active={currentPage === 'schedule'}
          onClick={() => setOpenMenu(false)}
        >
          <Link href="/schedule">Schedule</Link>
        </MenuItem>

        <MenuItem
          active={currentPage === 'contact'}
          onClick={() => setOpenMenu(false)}
        >
          <Link href="/contact">Contact</Link>
        </MenuItem>
      </div>
    </Container>
  );
};

export default HamburgerMenu;
