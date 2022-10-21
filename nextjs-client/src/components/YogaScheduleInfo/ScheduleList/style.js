import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .grid-wrapper {
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 32rem;

    width: 75%;
    display: inline-grid;
    margin: 7rem 0;
  }

  ${theme.mediaQuery.tablet} {
    .grid-wrapper {
      grid-template-columns: 1fr 1fr;
      gap: 3px;
      width: 90%;
    }
  }

  ${theme.mediaQuery.smallScreen} {
    .grid-wrapper {
      grid-auto-rows: 35rem;
      grid-template-columns: 1fr;
      width: 90%;
      gap: 1px;
    }
  }
`;
