import ClassPrice from '../ClassPrice';
import { Tooltip } from '@chakra-ui/react';
import { theme } from '@styles/theme';
import { Container } from './style';

const ClassPriceList = ({ data }) => {
  return (
    <Container>
      <div className="price-grid-wrapper">
        {data.map(price => (
          <ClassPrice key={price._id} priceData={price} />
        ))}
      </div>
      <div className="tooltip-wrapper">
        <Tooltip
          placeContent="bottom"
          label="Please contact us for more information."
          bg="white"
          p="1rem 2rem"
          maxW="30rem"
          fontFamily={theme.fonts.nunito}
          fontSize={theme.sizes.bodyFontsSize}
          color={theme.colors.greyText}
          aria-label="A tooltip"
        >
          <p className="tooltip">Looking for private class?</p>
        </Tooltip>
      </div>
    </Container>
  );
};

export default ClassPriceList;
