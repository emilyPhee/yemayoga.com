import { Container } from './style';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';
import { supportLanguages, useLanguages } from '@contexts/languageContext';
import { PortableText } from '@portabletext/react';

const YogaSystem = ({ yogaSystem }) => {
  const { title, image, description_en, description_kr } = yogaSystem;
  const { preferredLanguage } = useLanguages();
  console.log(description_en);

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
        <div className="description">
          <PortableText
            value={
              preferredLanguage === supportLanguages.English
                ? description_en
                : description_kr
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default YogaSystem;
