import Image from 'next/image';
import { Container, MenuItem } from './style';
import Link from 'next/link';

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
        <div className="insta-icon-wrapper"></div>
        <div className="language-toggle-wrapper"></div>
      </div>
    </Container>
  );
};

export default Navbar;
