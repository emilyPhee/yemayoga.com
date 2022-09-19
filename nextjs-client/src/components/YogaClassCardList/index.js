import YogaClassCard from '@components/YogaClassCard';
import { Container } from './style';

const YogaClassesList = ({ data }) => {
  return (
    <Container>
      <h1 className="title">Classes</h1>
      <ul className="class-list">
        {data.yogaClassData.map((yogaClass, index) => {
          return <YogaClassCard key={index} data={yogaClass} />;
        })}
      </ul>
    </Container>
  );
};

export default YogaClassesList;
