import { Container } from './style';

const MoonDay = () => {
  const currentYear = new Date().getFullYear();
  const month = 4;
  const getLastDayOfMonth = (year, specificMonth) => {
    let date = new Date(year, specificMonth, 0);
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    return date;
  };

  const lastDayOfMonth = getLastDayOfMonth(currentYear, month);
  const firstDayOfMonth = new Date(`${currentYear}, ${month}, 1`);
  //   console.log(lastDayOfMonth);
  const lune = require('lune');

  const phase_full_list = lune.phase_range(
    firstDayOfMonth,
    lastDayOfMonth,
    lune.PHASE_FULL
  );

  const phase_new_list = lune.phase_range(
    firstDayOfMonth,
    lastDayOfMonth,
    lune.PHASE_NEW
  );

  console.log(phase_full_list, phase_new_list);

  return (
    <Container>
      <h1>Moon day</h1>
    </Container>
  );
};

export default MoonDay;
