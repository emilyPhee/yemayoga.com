import ClassPrice from '../ClassPrice';
import { Tooltip } from '@chakra-ui/react';
import { theme } from '@styles/theme';
import { Container } from './style';
import { useState } from 'react';
import { supportLanguages, useLanguages } from '@contexts/languageContext';

const ClassPriceList = ({ data }) => {
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  const { preferredLanguage } = useLanguages();

  const privateLessonMsgKr = '개인레슨은 이메일 또는 카톡으로 문의 바랍니다.';
  const privateLessonMsgEn = 'Please contact us for more information.';
  return (
    <Container>
      <div className="price-grid-wrapper">
        {data.map(price => (
          <ClassPrice key={price._id} priceData={price} />
        ))}
      </div>
      <div className="tooltip-wrapper">
        <Tooltip
          isOpen={isLabelOpen}
          placeContent="bottom"
          label={
            preferredLanguage === supportLanguages.English
              ? privateLessonMsgEn
              : privateLessonMsgKr
          }
          bg="white"
          p="1rem 1rem"
          maxW="33rem"
          fontFamily={theme.fonts.nanumGothic}
          fontSize={theme.sizes.bodyFontsSize}
          color={theme.colors.greyText}
          aria-label="A tooltip"
        >
          <p
            className="tooltip"
            onMouseEnter={() => setIsLabelOpen(true)}
            onMouseLeave={() => setIsLabelOpen(false)}
            onClick={() => setIsLabelOpen(true)}
          >
            Looking for private class?
          </p>
        </Tooltip>
      </div>
    </Container>
  );
};

export default ClassPriceList;
