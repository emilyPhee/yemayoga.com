import Navbar from './Navbar';
import { Container } from './style';

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
