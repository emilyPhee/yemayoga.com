import Schedule from '../Schedule';
import { Container } from './style';

const ScheduleList = ({ data }) => {
  return (
    <Container>
      {data.map((schedule, inx) => (
        <>
          <Schedule schedule={schedule} key={inx} />
        </>
      ))}
    </Container>
  );
};

export default ScheduleList;
