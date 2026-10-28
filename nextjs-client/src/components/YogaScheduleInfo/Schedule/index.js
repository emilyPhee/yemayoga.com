import { Container } from './style';

const Schedule = ({ schedule, formatTime }) => {
  if (!schedule || !Array.isArray(schedule.yoga_schedule)) return null;

  const { level, yoga_schedule, yoga_name, announcement } = schedule;

  // Sanity can leave an empty document after its class times are removed.
  // Only show timetable entries with times to display.
  if (yoga_schedule.length === 0) return null;

  return (
    <Container>
      <div className="title-wrapper">
        <h2 className="schedule-title">{yoga_name}</h2>
      </div>
      <div className="yoga-schedule-wrapper">
        <p className="level">{level?.toUpperCase()}</p>
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
