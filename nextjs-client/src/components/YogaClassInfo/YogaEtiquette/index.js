import { Container } from './style';

const YogaEtiquette = ({ data }) => {
  const { name, etiquette } = data;
  console.log(name, etiquette);
  return (
    <Container>
      <div className="left-box">
        <h1 className="title">Etiquette in {name}</h1>
      </div>
      <div className="right-box">
        <ol className="etiquette-list">
          {etiquette.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ol>
      </div>
    </Container>
  );
};

export default YogaEtiquette;
