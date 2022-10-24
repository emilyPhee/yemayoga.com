import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  font-family: ${theme.fonts.nanumGothic};
  margin: 0.3rem;
  margin-bottom: 2rem;
  color: ${theme.colors.blackText};

  .title-wrapper {
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.brandColor1};

    .price-title {
      font-size: 1.6rem;
      padding: 1rem 3rem;
    }
  }

  .class-price-wrapper {
    background-color: ${theme.colors.brandColor2};
    font-size: ${theme.sizes.bodyFontsSize};
    height: 90%;
    .price-wrapper {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
    }
  }
`;
