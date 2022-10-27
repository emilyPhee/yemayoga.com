import Footer from './Footer';
import Navbar from './Navbar';
import { Container } from './style';
import Image from 'next/image';
const Layout = ({ currentPage, children }) => {
  return (
    <Container>
      <Navbar currentPage={currentPage} />
      {children}

      <Footer />
      <a
        href="https://pf.kakao.com/_lyxjdxb"
        target="_blank"
        rel="noreferrer"
        className="kakaotalk-link-wrapper"
      >
        <Image
          src="/images/kakao-talk-icon.svg"
          alt="kakaoTalk Icon"
          width={45}
          height={45}
        />
      </a>
    </Container>
  );
};

export default Layout;
