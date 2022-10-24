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
    padding: 2rem 3rem;
    position: relative;

    .price-wrapper {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
      letter-spacing: 0.5px;
    }
  }

  .announcement {
    position: absolute;
    right: 3rem;
    bottom: 50%;
    color: ${theme.colors.greyText};
  }

  .list-wrapper {
    line-height: 3.1;
  }
`;
