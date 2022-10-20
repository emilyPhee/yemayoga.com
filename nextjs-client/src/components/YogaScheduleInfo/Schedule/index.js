import { Container } from './style';

const Schedule = ({ schedule }) => {
  console.log(schedule);
  const { schedule, yoga_name } = schedule;

  //   const yoga_schedule = schedule.schedule;
  //   const yoga_name = schedule.yoga_name;

  //   const { announcement, day, level, start_time, end_time, title } =
  //     yoga_schedule;
  //   console.log(title);

  return (
    <Container>
      <h2>Ashtanga Yoga</h2>
      <p>All Level</p>
      <div className="schedule-wrapper">
        <ul>
          <li>Mon 7:30 - 8:45 am</li>
          <li>Mon 7:30 - 8:45 am</li>
          <li>Mon 7:30 - 8:45 am</li>
          <li>Mon 7:30 - 8:45 am</li>
          <li>Mon 7:30 - 8:45 am</li>
        </ul>
        <p>*Announcement*</p>
      </div>
    </Container>
  );
};

export default Schedule;
