import { Container, MenuItem } from './style';
import { useScrollPosition } from 'src/hooks/useScrollPosition';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import LanguageToggle from '@components/LanguageToggle';

const FullScreenMenu2 = ({ currentPage }) => {
  const scrollPosition = useScrollPosition();

  return (
    <Container scroll={scrollPosition > 0}>
      <div className="menu-items-wrapper">
        <MenuItem
          active={
            currentPage === 'home' ||
            currentPage === 'ashtanga' ||
            currentPage === 'vinyasa' ||
            currentPage === 'private' ||
            currentPage === 'zoom'
          }
        >
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

      <div className="main-logo">
        <Link href="/">
          <a>
            <div className="logo-wrapper">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={150}
                height={53.8}
              />
            </div>
          </a>
        </Link>
      </div>

      <div className="user-links-container">
        <div className="insta-icon-wrapper">
          <a
            href="https://www.instagram.com/yemayoga/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
          </a>
        </div>
        <div className="language-toggle-wrapper">
          <LanguageToggle />
        </div>
      </div>
    </Container>
  );
};

export default FullScreenMenu2;
