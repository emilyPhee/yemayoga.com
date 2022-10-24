import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .price-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 17rem;
    width: 75%;
    margin: 7rem 0;
    row-gap: 1.8rem;
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
  }
`;
