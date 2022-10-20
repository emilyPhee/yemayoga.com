import { Container } from './style';

const Schedule = ({ schedule }) => {
  const { yoga_schedule, yoga_name } = schedule;
  console.log(yoga_schedule, yoga_name);

  //   const yoga_schedule = schedule.schedule;
  //   const yoga_name = schedule.yoga_name;

  //   const { announcement, day, level, start_time, end_time, title } =
  //     yoga_schedule;
  //   console.log(title);

  return (
    <Container>
      {yoga_schedule.map((s, inx) => (
        <>
          <h2>{yoga_name}</h2>
          <div key={inx}>{s.day}</div>
        </>
      ))}
      {/* <p>All Level</p> */}
      {/* <div className="schedule-wrapper">
        <ul>
          <li>Mon 7:30 - 8:45 am</li>
          <li>Mon 7:30 - 8:45 am</li>
          <li>Mon 7:30 - 8:45 am</li>
          <li>Mon 7:30 - 8:45 am</li>
          <li>Mon 7:30 - 8:45 am</li>
        </ul>
        <p>*Announcement*</p>
      </div> */}
    </Container>
  );
};

export default Schedule;
