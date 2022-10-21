import Schedule from '../Schedule';
import { Container } from './style';

const ScheduleList = ({ data }) => {
  return (
    <Container>
      {/* First section of Schedule Page ("Schedule") */}

      <div className="grid-wrapper">
        {data.map((schedule, inx) => (
          <Schedule schedule={schedule} key={inx.toString()} />
        ))}
      </div>
    </Container>
  );
};

export default ScheduleList;
