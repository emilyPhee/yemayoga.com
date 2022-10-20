import Schedule from '../Schedule';
import { Container } from './style';

const ScheduleList = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((schedule, inx) => (
        <Schedule schedule={schedule} key={inx} />
      ))}
    </div>
  );
};

export default ScheduleList;
