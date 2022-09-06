import Image from 'next/image';
import { Container } from './style';

const Navbar = props => {
  return (
    <Container>
      <div className="left-box">
        <div className="logo-wrapper">
          <Image src="/images/logo.png" alt="logo" layout="fill" />
        </div>
        <div className="menu-items-wrapper"></div>
      </div>
      <div className="right-box">
        <div className="insta-icon-wrapper"></div>
        <div className="language-toggle-wrapper"></div>
      </div>
    </Container>
  );
};

export default Navbar;
