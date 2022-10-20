import Schedule from '../Schedule';
import { Container } from './style';

const ScheduleList = ({ data }) => {
  return (
    <Container>
      {/* First section of Schedule Page ("Schedule") */}
      {data.map((schedule, inx) => (
        <Schedule schedule={schedule} key={inx} />
      ))}
    </Container>
  );
};

export default ScheduleList;
