import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  font-family: ${theme.fonts.nanumGothic};
  margin: 0.3rem;
  margin-bottom: 1rem;
  color: ${theme.colors.blackText};

  .title-wrapper {
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.brandColor1};
    margin-bottom: 0.7rem;

    .price-title {
      font-size: 1.6rem;
      padding: 1rem 3rem;
    }
  }

  .class-price-wrapper {
    background-color: ${theme.colors.brandColor2};
    font-size: ${theme.sizes.bodyFontsSize};
    height: 80%;
    height: 1fr;
    padding: 2rem;
    position: relative;

    .price-wrapper {
      display: flex;
      justify-content: space-between;
      letter-spacing: 0.5px;
    }
  }

  .announcement {
    position: absolute;
    right: 3rem;
    bottom: 1rem;
    color: ${theme.colors.greyText};
  }

  .list-wrapper {
    line-height: 3;
  }

  ${theme.mediaQuery.tablet} {
    .list-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 3rem;
    }

    .list-wrapper li:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.brandColor1};
    }

    .price-wrapper {
      flex-direction: column;
      align-items: center;
      width: 70%;
    }

    .class-price-wrapper {
    }
  }

  ${theme.mediaQuery.smallScreen} {
    height: 94%;
    .class-price-wrapper {
      padding: 2rem;
      margin-bottom: 3rem;
    }
  }
`;
