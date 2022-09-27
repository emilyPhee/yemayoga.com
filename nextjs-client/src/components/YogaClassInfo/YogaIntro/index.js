import { Container } from './style';

const YogaIntro = ({ data }) => {
  const { name, image } = data.ashtangaData;

  return (
    <Container>
      <h1>{name}</h1>
    </Container>
  );
};

export default YogaIntro;
