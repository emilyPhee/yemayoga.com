import { Container } from './style';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';

const YogaIntro = ({ data }) => {
  const { name, image } = data;

  return (
    <Container>
      <div className="main-wrapper">
        <div className="yoga-img-wrapper">
          <div className="yoga-img">
            <Image
              alt="yoga class"
              src={urlFor(image).width(300).height(300).url()}
              layout="fill"
            />
          </div>
        </div>
        <div className="description-wrapper">
          <p className="sub-title">
            The body benefits from movement, and the mind benefits from
            stillness.
          </p>
          <h2 className="description-title">{name.toUpperCase()}</h2>
        </div>
      </div>
      <div className="line-wrapper">
        <div className="line" />
      </div>
    </Container>
  );
};

export default YogaIntro;
