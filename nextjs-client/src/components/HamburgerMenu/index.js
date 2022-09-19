import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import LanguageToggle from '@components/LanguageToggle';
import Image from 'next/image';
import Link from 'next/link';

import { Container, MenuItem } from './style';
import { useEffect, useState } from 'react';

const HamburgerMenu = ({ currentPage }) => {
  const [openMenu, setOpenMenu] = useState(false);

  function toggle() {
    setOpenMenu(!openMenu);
    console.log('toggle', openMenu);
  }

  useEffect(() => {}, [openMenu]);
  return (
    <Container>
      <div className="top-box">
        <div className="hamburger-icon-wrapper" onClick={toggle}>
          <Image
            src="/images/hamburger-icon.svg"
            height={30}
            width={30}
            alt="hamburger icon"
          />
        </div>
        <div className="logo-wrapper">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" layout="fill" />
          </Link>
        </div>
        <div className="right-box">
          <div className="insta-icon-wrapper">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="language-toggle-wrapper">
            <LanguageToggle />
          </div>
        </div>
      </div>

      <div
        className="bottom-box"
        style={{ display: openMenu ? 'block' : 'none' }}
      >
        <div className="menu-items-wrapper">
          <MenuItem active={currentPage === 'home'}>
            <Link href="/">Home</Link>
          </MenuItem>

          <MenuItem active={currentPage === 'about'}>
            <Link href="/about">About</Link>
          </MenuItem>

          <MenuItem active={currentPage === 'schedule'}>
            <Link href="/schedule">Schedule</Link>
          </MenuItem>

          <MenuItem active={currentPage === 'contact'}>
            <Link href="/contact">Contact</Link>
          </MenuItem>
        </div>
      </div>
    </Container>
  );
};

export default HamburgerMenu;
