import YogaClassCard from '@components/YogaClassCard';
import { Container } from './style';

const YogaClassesList = ({ data }) => {
  return (
    <Container>
      <ul className="class-list">
        {data.map((yogaClass, index) => {
          return <YogaClassCard key={index} data={yogaClass} />;
        })}
      </ul>
    </Container>
  );
};

export default YogaClassesList;
