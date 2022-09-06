import Image from 'next/image';
import { Container, MenuItem } from './style';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = props => {
  return (
    <Container>
      <div className="left-box">
        <div className="logo-wrapper">
          <Image src="/images/logo.png" alt="logo" layout="fill" />
        </div>
        <div className="menu-items-wrapper">
          <MenuItem>
            <Link href="/">Home</Link>
          </MenuItem>

          <MenuItem>
            <Link href="/about">About</Link>
          </MenuItem>

          <MenuItem>
            <Link href="/schedule">Schedule</Link>
          </MenuItem>

          <MenuItem>
            <Link href="/contact">Contact</Link>
          </MenuItem>
        </div>
      </div>
      <div className="right-box">
        <div className="insta-icon-wrapper">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="language-toggle-wrapper">KR | EN</div>
      </div>
    </Container>
  );
};

export default Navbar;
