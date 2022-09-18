import YogaClass from '@components/YogaClass';
import { Container } from './style';

const YogaClassesList = ({ data }) => {
  return (
    <Container>
      <h1 className='title'>Classes</h1>
      <ul className='class-list'>
        {data.yogaClassData.map((yogaClass, index) => {
          return <YogaClass key={index} data={yogaClass} />;
        })}
      </ul>
    </Container>
  );
};

export default YogaClassesList;
