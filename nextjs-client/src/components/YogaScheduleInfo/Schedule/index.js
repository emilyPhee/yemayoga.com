import { Container } from './style';

const Schedule = ({ schedule }) => {
  const { yoga_schedule, yoga_name } = schedule;
  console.log(yoga_schedule, yoga_name);

  return (
    <Container>
      {yoga_schedule.map(schedule => (
        <div key={schedule._key} className="schedule-wrapper">
          <h2 className="schedule-title">{`${yoga_name} ${schedule.title}`}</h2>
          <div className="schedule-body-wrapper">
            <p>{schedule.level}</p>
            <ul className="">
              {schedule.day.map((day, inx) => (
                <li className="date-time-wrapper" key={inx}>
                  <p>{day}</p>
                  <p>10:30 - 11:40 am</p>
                </li>
              ))}
            </ul>
            <p>{schedule.announcement}</p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Schedule;
