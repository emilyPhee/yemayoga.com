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

  const lastDayOfMonth = getLastDayOfMonth(currentYear, Number(month));
  const firstDayOfMonth = new Date(`${currentYear}, ${Number(month) + 1}, 1`);
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
      <div className="left-box">
        <h2 className="month-name">
          {moonDayDateArray.length > 0 ? monthList[month] : null}
        </h2>
      </div>
      <div className="right-box">
        {moonDayDateArray.map((moonDay, inx) => {
          return (
            <div className="date-info" key={inx}>
              <p className="date">
                {Array.from(String(moonDay.getDate())).length === 1
                  ? `0${moonDay.getDate()}`
                  : moonDay.getDate()}
              </p>
              <p className="day">{dayList[moonDay.getDay()]}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default MoonDay;
