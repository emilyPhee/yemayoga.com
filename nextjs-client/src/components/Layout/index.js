import Footer from './Footer';
import Navbar from './Navbar';
import { Container } from './style';

const Layout = ({ currentPage, children }) => {
  return (
    <Container>
      <Navbar currentPage={currentPage} />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
