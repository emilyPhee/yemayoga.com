import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10rem;

  .price-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 55%;
    margin: 7rem 0 5rem 0;
    row-gap: 1.5rem;
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
  }

  ${theme.mediaQuery.smallScreen} {
    .price-grid-wrapper {
      width: 80%;
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
