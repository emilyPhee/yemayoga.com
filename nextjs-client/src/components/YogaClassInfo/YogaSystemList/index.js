import YogaSystem from '../YogaSystem';
import { Container } from './style';

const YogaSystemList = ({ data }) => {
  const { yoga_systems } = data;

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
