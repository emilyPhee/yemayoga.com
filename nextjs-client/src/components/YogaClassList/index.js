import YogaClass from '@components/YogaClass';
import { Container } from './style';

const YogaClassesList = ({ classData }) => {
  console.log(classData);
  return (
    <Container>
      <h1 className="title">Classes</h1>
      <ul className="class-list">
        {classData.map(yogaclass => {
          return <YogaClass key={yogaclass.id} classInfo={yogaclass} />;
        })}
      </ul>
    </Container>
  );
};

export default YogaClassesList;
