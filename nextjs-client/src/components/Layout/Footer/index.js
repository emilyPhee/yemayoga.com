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
        <div className="insta-link-wrapper">
          <FontAwesomeIcon icon={faInstagram} />
          <p>yemayoga</p>
        </div>
      </div>
      <div className="right-box">
        <Image
          src="/images/footer-logo.png"
          alt="footer logo"
          layout="intrinsic"
          width={294}
          height={213}
        />
      </div>
      <p className="copyright"> 2022 yemayoga. All right reserved</p>
    </Container>
  );
};

export default Footer;
