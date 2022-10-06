import MoonDay from '../MoonDay';
import { Container } from './style';

const MoonDays = () => {
  const currentYear = new Date().getFullYear();
  const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div>
      <h1>Moon Days {currentYear}</h1>
      {monthList.map((month, index) => (
        <MoonDay key={index} currentYear={currentYear} month={month} />
      ))}

      <MoonDay />
    </div>
  );
};

export default MoonDays;
