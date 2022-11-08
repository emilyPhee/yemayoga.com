import { Container } from './style';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';
import { supportLanguages, useLanguages } from '@contexts/languageContext';
import { AnimatedDivElement } from '@styles/shared-styled-component';
import { PortableText } from '@portabletext/react';

const AboutIntro = ({ data }) => {
  const { about_img, about_title, about_intro_kr, about_intro_en } = data[0];
  const { preferredLanguage } = useLanguages();

  return (
    <Container>
      <div className="left-box">
        <div>
          <div className="about-img">
            <Image
              alt="about"
              src={urlFor(about_img).width(788).height(675).url()}
              layout="fill"
              placeholder="blur"
              blurDataURL={`/_next/image?url=${urlFor(about_img)}&w=16&q=1`}
            />
          </div>
        </div>
      </div>
      <div className="right-box">
        <div className="title-wrapper">
          <h4 className="sub-title">Why Yemayoga</h4>
          <h1 className="title">{about_title}</h1>
        </div>

        <div className="intro-wrapper">
          <AnimatedDivElement
            key={String(preferredLanguage)}
            className="about-intro"
          >
            <PortableText
              value={
                preferredLanguage === supportLanguages.English
                  ? about_intro_en
                  : about_intro_kr
              }
            />
          </AnimatedDivElement>
        </div>
      </div>
    </Container>
  );
};

export default AboutIntro;
