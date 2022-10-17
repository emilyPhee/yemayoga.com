import { Container } from './style';
import { useLanguages, supportLanguages } from '@contexts/languageContext';

const YogaEtiquette = ({ data }) => {
  const { yoga_name, etiquette_kr, etiquette_en } = data;
  const { preferredLanguage } = useLanguages();

  return (
    <Container>
      <div className="left-box">
        <h1 className="title">Etiquette in {yoga_name}</h1>
      </div>
      <div className="right-box">
        <ol className="etiquette-list">
          {(preferredLanguage === supportLanguages.English
            ? etiquette_en
            : etiquette_kr
          ).map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ol>
      </div>
    </Container>
  );
};

export default YogaEtiquette;
