import { Container } from './style';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';
import { supportLanguages, useLanguages } from '@contexts/languageContext';

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
              src={urlFor(about_img).width(1050).height(900).url()}
              layout="fill"
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
          {preferredLanguage === supportLanguages.English ? (
            <p className="about-intro">{about_intro_en}</p>
          ) : (
            <p className="about-intro">{about_intro_kr}</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AboutIntro;
