import { Container } from './style';
import { PortableText } from '@portabletext/react';
import { supportLanguages } from '@contexts/languageContext';

const YogaDescription = ({ data, language }) => {
  const {
    yoga_name,
    short_description,
    yoga_description_kr,
    yoga_description_en,
  } = data;

  console.log(language);

  return (
    <Container>
      <div className="left-box">
        <h2 className="title">{yoga_name}</h2>
        <p className="sub-title">{short_description}</p>
      </div>
      <div className="right-box">
        <div className="description">
          <PortableText
            value={
              language === supportLanguages.English
                ? yoga_description_en
                : yoga_description_kr
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default YogaDescription;
