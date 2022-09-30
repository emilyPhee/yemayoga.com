import { useScrollPosition } from 'src/hooks/useScrollPosition';
import Image from 'next/image';
import { Container, MenuItem } from './style';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import LanguageToggle from '@components/LanguageToggle';

const FullScreenMenu = ({ currentPage }) => {
  const scrollPosition = useScrollPosition();

  return (
    <Container scroll={scrollPosition > 0}>
      <div className="left-box">
        <Link href="/">
          <a>
            <div className="logo-wrapper">
              <Image src="/images/logo.png" alt="logo" layout="fill" />
            </div>
          </a>
        </Link>

        <div className="menu-items-wrapper">
          <MenuItem
            active={
              currentPage === 'home' ||
              currentPage === 'ashtanga' ||
              currentPage === 'vinyasa' ||
              currentPage === 'private'
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
      </div>
      <div className="right-box">
        <div className="insta-icon-wrapper">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="language-toggle-wrapper">
          <LanguageToggle />
        </div>
      </div>
    </Container>
  );
};

export default FullScreenMenu;
