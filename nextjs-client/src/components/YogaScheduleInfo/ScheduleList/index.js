import Schedule from '../Schedule';
import { Container } from './style';

const ScheduleList = ({ data, formatTime }) => {
  return (
    <Container>
      {/* First section of Schedule Page ("Schedule") */}

      <div className="grid-wrapper">
        {data.map((schedule, inx) => (
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
