import { Container } from './style';

const MoonDay = ({ currentYear, month }) => {
  const getLastDayOfMonth = (year, specificMonth) => {
    let date = new Date(year, specificMonth, 0);
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    return date;
  };

  const lastDayOfMonth = getLastDayOfMonth(currentYear, month);
  const firstDayOfMonth = new Date(`${currentYear}, ${month}, 1`);
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

  //   phase_full_list.forEach(full => console.log(full));
  const fullMoonArray = Object.values([
    new Date(phase_full_list).getDate(),
    new Date(phase_full_list).getDay(),
  ]);
  const newMoonArray = Object.values([
    new Date(phase_new_list).getDate(),
    new Date(phase_new_list).getDay(),
  ]);

  console.log(phase_new_list);

  //   console.log(fullMoonArray);

  return (
    <Container>
      <h1>Moon day</h1>
      <h1>MONTH: {month}</h1>
      {fullMoonArray.length > 0
        ? fullMoonArray.map((full, inx) => (
            <div key={inx}>
              <h4>FULL: {full}</h4>
            </div>
          ))
        : null}
      {/* {newMoonArray.map((newMoon, inx) => (
        <h4 key={inx}>NEW: {newMoon}</h4>
      ))} */}
    </Container>
  );
};

export default MoonDay;
