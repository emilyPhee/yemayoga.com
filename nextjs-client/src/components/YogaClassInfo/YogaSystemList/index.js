import YogaSystem from '../YogaSystem';
import { Container } from './style';

const YogaSystemList = ({ data, language }) => {
  const { yoga_systems } = data;
  // console.log(yoga_systems[0].title);

  return (
    <Container>
      <h1 className="title">Systems</h1>
      {yoga_systems.map(system => {
        return <YogaSystem key={system._key} yogaSystem={system} />;
      })}
    </Container>
  );
};

export default YogaSystemList;
