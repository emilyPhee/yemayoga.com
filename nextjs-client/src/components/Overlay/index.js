import { Container } from './style';

const Overlay = ({ krMessage, engMessage }) => {
  return (
    <Container>
      <div className="maintenance-overlay">
        <div className="msg-wrapper">
          <p className="kr-msg">{krMessage}</p>
          <p className="eng-msg">{engMessage}</p>
          <p className="email">yemadoesyoga@gmail.com</p>
        </div>
      </div>
    </Container>
  );
};

export default Overlay;
