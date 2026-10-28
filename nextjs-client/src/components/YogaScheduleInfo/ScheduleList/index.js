import Schedule from '../Schedule';
import { Container } from './style';

const ScheduleList = ({ data, formatTime }) => {
  return (
    <Container>
      <div className="grid-wrapper">
        {(Array.isArray(data) ? data : []).map((schedule, inx) => (
          <Schedule
            schedule={schedule}
            key={inx.toString()}
            formatTime={formatTime}
          />
        ))}
      </div>
    </Container>
  );
};

export default ScheduleList;
