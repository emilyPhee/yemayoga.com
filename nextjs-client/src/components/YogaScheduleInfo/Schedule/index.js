import dynamic from 'next/dynamic';
import { Container } from './style';

const Schedule = ({ schedule }) => {
  const { yoga_schedule, yoga_name } = schedule;

  return (
    <Container>
      <div className="title-wrapper">
        <h2 className="schedule-title">{yoga_name}</h2>
      </div>
      <div className="yoga-schedule-wrapper">
        {yoga_schedule.map((schedule_info, inx) => (
          <>
            <p className="level">{schedule_info.level.toUpperCase()}</p>
            <ul className="time-list">
              {schedule_info.day.map((day, inx) => (
                <li className="date-time-wrapper" key={inx}>
                  <p className="day">{day}</p>
                  <p className="class-time">7:30 - 8:45 am</p>
                </li>
              ))}
            </ul>
            <p className="announcement">{schedule_info.announcement}</p>
          </>
        ))}
      </div>
    </Container>
  );
};

export default Schedule;
