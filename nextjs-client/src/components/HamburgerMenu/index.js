import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import LanguageToggle from '@components/LanguageToggle';
import Image from 'next/image';
import Link from 'next/link';

import { Container, MenuItem } from './style';

const HamburgerMenu = ({ currentPage }) => {
  return (
    <Container>
      <div className="top-box">
        <div className="hamburger-icon-wrapper">
          <Image
            src="/images/hamburger-icon.svg"
            height={30}
            width={30}
            alt="hamburger icon"
          />

          {/* <img src="/images/hamburger-icon.svg" alt="hamburger icon"></img> */}
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

      <div className="bottom-box">
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
