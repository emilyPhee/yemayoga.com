import dynamic from 'next/dynamic';
import { Container } from './style';

const Schedule = ({ schedule }) => {
  const { yoga_schedule, yoga_name } = schedule;

  return (
    <Container>
      <div>
        <h2 className="schedule-title">{yoga_name}</h2>
      </div>
      <div className="yoga-schedule-wrapper">
        {yoga_schedule.map((s, inx) => (
          <>
            <p className="level">{s.level.toUpperCase()}</p>
            <ul className="time-list">
              {s.day.map((d, inx) => (
                <li className="date-time-wrapper" key={inx}>
                  <p>{d}</p>
                  <p>7:30 - 8:45 am</p>
                </li>
              ))}
            </ul>
            <p className="announcement">{s.announcement}</p>
          </>
        ))}
      </div>
    </Container>
  );
};

export default Schedule;
