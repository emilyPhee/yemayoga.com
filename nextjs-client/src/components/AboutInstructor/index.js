import { Container } from './style';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';
import { supportLanguages, useLanguages } from '@contexts/languageContext';

import { PortableText } from '@portabletext/react';

const AboutInstructor = ({ data }) => {
  const { preferredLanguage } = useLanguages();

  const {
    instructor_name,
    instructor_sub_name,
    introduction_kr,
    introduction_en,
    instructor_img,
  } = data[0];

  return (
    <Container>
      <div className="left-box">
        <div className="name-wrapper">
          <h1 className="name">{instructor_name}</h1>
          <h4 className="sub-name">{instructor_sub_name}</h4>
        </div>

        <div className="instructor-intro">
          <PortableText
            value={
              preferredLanguage === supportLanguages.English
                ? introduction_en
                : introduction_kr
            }
          />
        </div>
      </div>

      <div className="right-box">
        <div className="img-wrapper">
          <div className="instructor-img">
            <Image
              alt="instructor"
              src={urlFor(instructor_img).width(1200).height(1600).url()}
              layout="fill"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutInstructor;
