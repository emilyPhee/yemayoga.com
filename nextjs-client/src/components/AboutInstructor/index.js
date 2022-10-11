import { Container } from './style';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';
import { supportLanguages, useLanguages } from '@contexts/languageContext';

function blocksToText(blocks) {
  return blocks.map(block => block.children.map(child => child.text).join(''));
}

const AboutInstructor = ({ data }) => {
  const {
    instructor_name,
    instructor_sub_name,
    introduction_kr,
    introduction_en,
    instructor_img,
  } = data[0];

  const { preferredLanguage } = useLanguages();

  return (
    <Container>
      <div className="left-box">
        <div className="name-wrapper">
          <h1 className="name">{instructor_name}</h1>
          <h4 className="sub-name">{instructor_sub_name}</h4>
        </div>

        <div>
          {preferredLanguage === supportLanguages.English ? (
            <p className="introduction-en">{introduction_en}</p>
          ) : (
            <p className="introduction-kr">{blocksToText(introduction_kr)}</p>
          )}
        </div>
      </div>

      <div className="right-box">
        <div className="img-wrapper">
          <div className="instructor-img">
            <Image
              alt="instructor"
              src={urlFor(instructor_img).width(300).height(400).url()}
              layout="fill"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutInstructor;
