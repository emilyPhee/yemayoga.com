import MoonDay from '../MoonDay';
import { Container } from './style';
import { Tooltip } from '@chakra-ui/react';
import { theme } from '@styles/theme';
import { useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import { supportLanguages, useLanguages } from '@contexts/languageContext';

const MoonDays = () => {
  const currentYear = new Date().getFullYear();
  const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  const [isLabelOpen, setIsLabelOpen] = useState(false);

  const { preferredLanguage } = useLanguages();

  const moondayDescriptionEn =
    'Both full and new moon days are observed as yoga holidays in the Ashtanga Yoga tradition. What is the reasoning behind this? Like all things of a watery nature (human beings are about 70% water), we are affected by the phases of the moon.';

  const moondayDescriptionKr = `아쉬탕가 요가 전통에서는 보름달과 초승달에는 휴일로 수련을 하지 않습니다. 
물이 많은 모든 것(인간은 약 70%가 물)과 마찬가지로 우리도 달과 해의 위치에 영향을 받습니다. 태양과 달은 모두 지구에 중력을 작용합니다. 보름달에는 에너지가 넘칩니다. 상승하는 에너지가 많이 활성화 되어서 우리의 몸도 활기차고 감정적으로 에너지가 많이 상승하지만 반면에 안정되지는 않습니다. 보름달 동안 우리는 더 완고한 경향이 있습니다.
그믐달 에너지는 아래로 흐릅니다. 하강되는 기운이 강해서 평온함과 안정감이 들지만 육체적인 노력이 힘들고 마시는숨이 평소보다는 어려워 집니다.
요가는 자연과 조화를 중요하게 여깁니다. 기운이 한쪽으로 치우쳐져 있는 날에 부상이 많고 몸과 마음을 상하게 할 수있습니다.
`;

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
          isOpen={isLabelOpen}
          placement="bottom"
          bg=" white"
          p="2rem"
          maxW={isSmallerThan768 ? '30rem' : '45rem'}
          // h={isSmallerThan768 ? '22rem' : '16rem'}
          lineHeight="2.5rem"
          fontFamily={theme.fonts.nanumGothic}
          fontSize={theme.sizes.bodyFontsSize}
          color={theme.colors.greyText}
          label={
            preferredLanguage === supportLanguages.English
              ? moondayDescriptionEn
              : moondayDescriptionKr
          }
          aria-label="A tooltip"
        >
          <p
            className="tooltip"
            onMouseEnter={() => setIsLabelOpen(true)}
            onMouseLeave={() => setIsLabelOpen(false)}
            onClick={() => setIsLabelOpen(true)}
          >
            What is Moon days?
          </p>
        </Tooltip>
      </div>
    </Container>
  );
};

export default MoonDays;
