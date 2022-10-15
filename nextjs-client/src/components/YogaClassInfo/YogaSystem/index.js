import { Container } from './style';
import Image from 'next/image';
import { urlFor } from 'src/sanity/image-url';
import { supportLanguages, useLanguages } from '@contexts/languageContext';

const YogaSystem = ({ yogaSystem }) => {
  const { title, image, description_en, description_kr } = yogaSystem;
  console.log(description_en);
  // const { preferredLanguage } = useLanguages();

  console.log(yogaSystem);
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
        <p className="description">
          {/* {preferredLanguage === supportLanguages.English
            ? description_en
            : description_kr} */}
        </p>
      </div>
    </Container>
  );
};

export default YogaSystem;
