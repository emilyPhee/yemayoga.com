import { Container } from './style';

const Schedule = ({ schedule, formatTime }) => {
  const { level, yoga_schedule, yoga_name, announcement } = schedule;

  return (
    <Container>
      <div className="title-wrapper">
        <h2 className="schedule-title">{yoga_name}</h2>
      </div>
      <div className="yoga-schedule-wrapper">
        <p className="level">{level.toUpperCase()}</p>
        <ul className="time-list">
          {yoga_schedule.map((schedule, inx) => (
            <li className="date-time-wrapper" key={inx.toString()}>
              <span className="day">{schedule.day}</span>
              <span className="class-time">
                {formatTime(schedule.start_time, schedule.end_time)}
              </span>
            </li>
          ))}
        </ul>
        <p className="announcement">{announcement}</p>
      </div>
    </Container>
  );
};

export default Schedule;
