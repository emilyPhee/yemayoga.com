import { Container } from './style';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';
import { Divider } from '@chakra-ui/react';

const YogaIntro = ({ data, yogaQuote, yogaFullName }) => {
  const { image } = data;

  return (
    <Container>
      <div className="main-wrapper">
        <div className="yoga-img-wrapper">
          <div className="yoga-img">
            <Image
              alt="yoga class"
              src={urlFor(image).width(1125).height(1125).url()}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=${urlFor(image)}&w=16&q=1`}
            />
          </div>
        </div>
        <div className="description-wrapper">
          <h2 className="description-title">{yogaFullName.toUpperCase()}</h2>
          <p className="sub-title">{yogaQuote}</p>
        </div>
      </div>
      <div className="divider-container">
        <Divider />
      </div>
    </Container>
  );
};

export default YogaIntro;
