import { Container } from './style';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';
import { Divider } from '@chakra-ui/react';

const YogaIntro = ({ data, yogaQuote }) => {
  const { name, image } = data[0];

  return (
    <Container>
      <div className="main-wrapper">
        <div className="yoga-img-wrapper">
          <div className="yoga-img">
            <Image
              alt="yoga class"
              src={urlFor(image).width(1500).height(1500).url()}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=${urlFor(image)}&w=16&q=1`}
            />
          </div>
        </div>
        <div className="description-wrapper">
          <p className="sub-title">{yogaQuote}</p>
          <h2 className="description-title">{name.toUpperCase()}</h2>
        </div>
      </div>
      <div className="divider-container">
        <Divider />
      </div>
    </Container>
  );
};

export default YogaIntro;
