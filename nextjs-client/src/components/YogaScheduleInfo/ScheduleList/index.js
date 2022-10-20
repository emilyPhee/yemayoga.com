import Schedule from '../Schedule';
import { Container } from './style';
const list = ['ashtanga', 'vinyasa 0', 'vinyasa 1', 'vinyasa 2'];
const ScheduleList = () => {
  return (
    <div>
      {list.map((yoga, inx) => (
        <Schedule key={inx} />
      ))}
    </div>
  );
};

export default ScheduleList;
