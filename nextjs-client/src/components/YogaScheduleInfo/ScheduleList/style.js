import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;

    width: 77%;
    display: inline-grid;
  }

  ${theme.mediaQuery.tablet} {
    .grid-wrapper {
      grid-template-columns: 1fr 1fr;
      gap: 3px;
      width: 80%;
    }
  }

  ${theme.mediaQuery.smallScreen} {
    .grid-wrapper {
      grid-template-columns: 1fr;
      width: 80%;
      gap: 1px;
    }
  }
`;
