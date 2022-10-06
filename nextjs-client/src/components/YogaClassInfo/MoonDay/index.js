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

  return (
    <Container>
      <h1>MONTH: {monthList[month]}</h1>
      {fullMoonArray.map((fullMoonDate, inx) => {
        return (
          <div className="date-info" key={inx}>
            <h4>{fullMoonDate.getDate()}</h4>
            <h4>{dayList[fullMoonDate.getDay()]}</h4>
          </div>
        );
      })}

      {newMoonArray.map((newMoonDate, inx) => {
        return (
          <div className="date-info" key={inx}>
            <h4>{newMoonDate.getDate()}</h4>
            <h4>{dayList[newMoonDate.getDay()]}</h4>
          </div>
        );
      })}
    </Container>
  );
};

export default MoonDay;
