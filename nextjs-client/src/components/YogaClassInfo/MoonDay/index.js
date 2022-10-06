import { Container } from './style';

const monthList = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

const dayList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const MoonDay = ({ currentYear, month }) => {
  const getLastDayOfMonth = (year, specificMonth) => {
    let date = new Date(year, specificMonth + 1, 0);
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    return date;
  };

  const lastDayOfMonth = getLastDayOfMonth(currentYear, month);
  const firstDayOfMonth = new Date(`${currentYear}, ${month + 1}, 1`);
  const lune = require('lune');

  const phaseFullList = lune.phase_range(
    firstDayOfMonth,
    lastDayOfMonth,
    lune.PHASE_FULL
  );

  const phaseNewList = lune.phase_range(
    firstDayOfMonth,
    lastDayOfMonth,
    lune.PHASE_NEW
  );

  const fullMoonArray = phaseFullList.map(fullMoonDate => fullMoonDate);
  const newMoonArray = phaseNewList.map(newMoonDate => newMoonDate);
  const moonDayDateArray = fullMoonArray.concat(newMoonArray);
  moonDayDateArray.sort((a, b) => a - b);

  return (
    <Container>
      <h1>{monthList[month]}</h1>
      {moonDayDateArray.map((moonDay, inx) => {
        return (
          <div className="date-info" key={inx}>
            <h4>{moonDay.getDate()}</h4>
            <h4>{dayList[moonDay.getDay()]}</h4>
          </div>
        );
      })}
    </Container>
  );
};

export default MoonDay;
