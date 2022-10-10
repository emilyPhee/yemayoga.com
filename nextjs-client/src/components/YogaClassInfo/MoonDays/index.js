import MoonDay from '../MoonDay';
import { Container } from './style';
import { Tooltip } from '@chakra-ui/react';
import { theme } from '@styles/theme';
import { useMediaQuery } from '@chakra-ui/react';

const MoonDays = () => {
  const currentYear = new Date().getFullYear();
  const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <Container>
      <h1 className="title">{currentYear} Moon Days</h1>
      <ul className="moonday-list-wrapper">
        {monthList.map((month, index) => {
          return (
            <div className="moon-day" key={index.toString()}>
              <MoonDay currentYear={currentYear} month={month} />
            </div>
          );
        })}
      </ul>
      <div className="tooltip-wrapper">
        <Tooltip
          placement="bottom"
          bg=" white"
          p="2rem"
          maxW={isSmallerThan768 ? '30rem' : '40rem'}
          h={isSmallerThan768 ? '22rem' : '16rem'}
          lineHeight="2.5rem"
          fontFamily={theme.fonts.nunito}
          fontSize={theme.sizes.bodyFontsSize}
          color={theme.colors.greyText}
          label="Both full and new moon days are observed as yoga holidays in the Ashtanga Yoga tradition. What is the reasoning behind this? Like all things of a watery nature (human beings are about 70% water), we are affected by the phases of the moon."
          aria-label="A tooltip"
        >
          <p className="tooltip">What is Moon days?</p>
        </Tooltip>
      </div>
    </Container>
  );
};

export default MoonDays;
