import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 7rem;

  .price-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 24rem;
    width: 75%;
    margin: 7rem 0 5rem 0;
    row-gap: 1rem;
  }

  .tooltip-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .tooltip {
      font-size: ${theme.sizes.bodyFontsSize};
      font-family: ${theme.fonts.nunito};
      text-decoration: underline;
      color: ${theme.colors.greyText};
      cursor: pointer;
      margin-right: 15%;
    }
  }

  ${theme.mediaQuery.tablet} {
    .price-grid-wrapper {
      width: 90%;
    }
  }

  ${theme.mediaQuery.smallScreen} {
    .price-grid-wrapper {
      width: 90%;
      grid-template-columns: 1fr;
    }

    .tooltip-wrapper {
      justify-content: center;

      .tooltip {
        margin: 0 1rem;
      }
    }
  }
`;
