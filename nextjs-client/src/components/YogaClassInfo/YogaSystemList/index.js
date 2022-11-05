import YogaSystem from '../YogaSystem';
import { Container, ContentContainer } from './style';
import { Divider } from '@chakra-ui/react';

const YogaSystemList = ({ data }) => {
  const { yoga_systems } = data;

  return (
    <Container>
      {yoga_systems === undefined ? (
        <div className="divider-container">
          <Divider />
        </div>
      ) : (
        <ContentContainer>
          <h1 className="title">Systems</h1>
          {yoga_systems.map(system => {
            return <YogaSystem key={system._key} yogaSystem={system} />;
          })}
        </ContentContainer>
      )}
    </Container>
  );
};

export default YogaSystemList;
