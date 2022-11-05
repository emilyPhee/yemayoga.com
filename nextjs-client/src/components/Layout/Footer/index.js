import Image from 'next/image';
import { Container } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Container>
      <div className="left-box">
        <h4 className="title">YEMAYOGA</h4>
        <p className="info">
          Irvine Blvd - Yale <br />
          Irvine, CA <br />
          United States <br />
          yemadoesyoga@gmail.com
        </p>
        <a
          href="https://www.instagram.com/yemayoga/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="insta-link-wrapper">
            <FontAwesomeIcon icon={faInstagram} />
            <p>yemayoga</p>
          </div>
        </a>
      </div>
      <div className="right-box">
        <Image
          src="/images/footer-logo.png"
          alt="footer logo"
          layout="fixed"
          width={130}
          height={140}
        />
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Yemayoga. All right reserved
      </p>
    </Container>
  );
};

export default Footer;
