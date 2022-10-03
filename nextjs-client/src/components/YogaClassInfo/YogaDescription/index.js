import { Container } from './style';

const YogaDescription = ({ data }) => {
  const { name, short_description, yoga_description } = data;

  return (
    <Container>
      <div className="left-box">
        <h2 className="title">{name}</h2>
        <p className="sub-title">{short_description}</p>
      </div>
      <div className="right-box">
        <p className="description">{yoga_description}</p>
      </div>
    </Container>
  );
};

export default YogaDescription;
