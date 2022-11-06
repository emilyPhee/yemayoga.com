import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10rem;

  .price-grid-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;

    width: 55%;
    margin: 0 0 5rem 0;
    grid-auto-rows: 1fr;
  }

  .tooltip-wrapper {
    width: 55%;
    display: flex;
    justify-content: flex-end;

    .tooltip {
      font-size: ${theme.sizes.bodyFontsSize};
      font-family: ${theme.fonts.nunito};
      text-decoration: underline;
      color: ${theme.colors.greyText};
      cursor: pointer;
    }
  }

  ${theme.mediaQuery.tablet} {
    .price-grid-wrapper {
      width: 80%;
    }

    .tooltip-wrapper {
      width: 100%;
      justify-content: center;
    }
  }

  ${theme.mediaQuery.smallScreen} {
    .price-grid-wrapper {
      width: 80%;
      grid-template-columns: 1fr;
      row-gap: 0rem;
    }

    .tooltip-wrapper {
      justify-content: center;
      margin-top: 3rem;

      .tooltip {
        margin: 0 1rem;
      }
    }
  }
`;
