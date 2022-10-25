import { Container } from './style';

const Schedule = ({ schedule, formatTime }) => {
  const { yoga_schedule, yoga_name } = schedule;

  return (
    <Container>
      <div className="title-wrapper">
        <h2 className="schedule-title">{yoga_name}</h2>
      </div>
      <div className="yoga-schedule-wrapper">
        {yoga_schedule.map((schedule_info, inx) => (
          <div key={inx.toString()}>
            <p className="level">{schedule_info.level.toUpperCase()}</p>
            <ul className="time-list">
              {schedule_info.day.map((day, inx) => (
                <li className="date-time-wrapper" key={inx}>
                  <p className="day">{day}</p>
                  <p className="class-time">
                    {formatTime(
                      yoga_schedule[0].start_time,
                      yoga_schedule[0].end_time
                    )}
                  </p>
                </li>
              ))}
            </ul>
            <p className="announcement">{schedule_info.announcement}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Schedule;
