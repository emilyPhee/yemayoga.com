import { Container } from './style';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';

const YogaSystem = ({ yogaSystem }) => {
  const { title, image, description } = yogaSystem;
  return (
    <Container>
      <div className="left-box">
        <div className="system-img-wrapper">
          <div className="system-img">
            <Image
              alt="yoga system"
              src={urlFor(image).width(350).height(320).url()}
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="right-box">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </Container>
  );
};

export default YogaSystem;
