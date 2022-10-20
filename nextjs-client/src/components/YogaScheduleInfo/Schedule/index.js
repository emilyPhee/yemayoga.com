import dynamic from 'next/dynamic';
import { Container } from './style';

const Schedule = ({ schedule }) => {
  const { yoga_schedule, yoga_name } = schedule;

  return (
    <Container>
      <div>
        <div>
          <h2 className="schedule-title">{yoga_name}</h2>
        </div>
        <div className="yoga-schedule-wrapper">
          {yoga_schedule.map((s, inx) => (
            <>
              <p>{s.level}</p>
              <ul>
                {s.day.map((d, inx) => (
                  <li className="date-time-wrapper" key={inx}>
                    <p>{d}</p>
                    <p>7:30 - 8:45 am</p>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Schedule;
