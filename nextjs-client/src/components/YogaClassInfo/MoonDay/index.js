import { Container } from './style';
import { useEffect, useState } from 'react';
import lune from 'lune';

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

const getFirstDateOfMonth = (year, month) => {
  return new Date(
    `${year}-${(month + 1).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    })}-01T00:00:00.000`
  );
};

const getLastDateOfMonth = (year, month) => {
  const lastDate = new Date(year, month + 1, 0);

  return new Date(
    `${year}-${(month + 1).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    })}-${lastDate.getDate()}T23:59:59.999`
  );
};

const getMoonDays = (firstDate, lastDate) => {
  const fullMoonDays = lune.phase_range(firstDate, lastDate, lune.PHASE_FULL);
  const newMoonDays = lune.phase_range(firstDate, lastDate, lune.PHASE_NEW);

  return [...fullMoonDays, ...newMoonDays].sort((a, b) => a - b);
};

const MoonDay = ({ currentYear, month }) => {
  const firstDate = getFirstDateOfMonth(currentYear, month);
  const lastDate = getLastDateOfMonth(currentYear, month);
  const moonDays = getMoonDays(firstDate, lastDate);

  return (
    <Container>
      <div className='left-box'>
        <h2 className='month-name'>{monthList[month]}</h2>
      </div>
      <div className='right-box'>
        {moonDays.map((moonDay, inx) => {
          return (
            <div className='date-info' key={inx}>
              <p className='date'>
                {moonDay.getDate().toLocaleString('en-US', {
                  minimumIntegerDigits: 2,
                })}
              </p>
              <p className='day'>{dayList[moonDay.getDay()]}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default MoonDay;
