import { Container } from './style';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';

const YogaDescription = () => {
  return (
    <Container>
      <div className="left-box">
        <h2>Yoga Title</h2>
        <p>Sub title</p>
      </div>

      <div className="right-box"></div>
    </Container>
  );
};

export default YogaDescription;
