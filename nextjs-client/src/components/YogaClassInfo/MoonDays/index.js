import MoonDay from '../MoonDay';
import { Container } from './style';

const MoonDays = () => {
  const currentYear = new Date().getFullYear();
  const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <Container>
      <h1 className="title">Moon Days {currentYear}</h1>
      <ul className="moonday-list-wrapper">
        {monthList.map((month, index) => {
          return (
            <div className="moon-day" key={index.toString()}>
              <MoonDay currentYear={currentYear} month={month} />
            </div>
          );
        })}
      </ul>
    </Container>
  );
};

export default MoonDays;
