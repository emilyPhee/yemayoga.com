import MoonDay from '../MoonDay';
import { Container } from './style';

const MoonDays = () => {
  const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div>
      <h1>Moon Days</h1>
      <MoonDay />
    </div>
  );
};

export default MoonDays;
