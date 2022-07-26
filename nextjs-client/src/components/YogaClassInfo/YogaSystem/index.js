import { Container } from './style';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';
import { supportLanguages, useLanguages } from '@contexts/languageContext';
import { PortableText } from '@portabletext/react';
import { AnimatedDivElement } from '@styles/shared-styled-component';
import { components } from '@styles/shared-styled-component';

const YogaSystem = ({ yogaSystem }) => {
  const { title, image, description_en, description_kr } = yogaSystem;
  const { preferredLanguage } = useLanguages();

  return (
    <Container>
      <div className="left-box">
        <div className="system-img-wrapper">
          <div className="system-img">
            <Image
              alt="yoga system"
              src={urlFor(image).width(788).height(720).url()}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=${urlFor(image)}&w=16&q=1`}
            />
          </div>
        </div>
      </div>
      <div className="right-box">
        <h2 className="system-title">{title}</h2>
        <AnimatedDivElement
          key={String(preferredLanguage)}
          className="description"
        >
          <PortableText
            value={
              preferredLanguage === supportLanguages.English
                ? description_en
                : description_kr
            }
            components={components}
          />
        </AnimatedDivElement>
      </div>
    </Container>
  );
};

export default YogaSystem;
