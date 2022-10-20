import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  .grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 80%;
    display: inline-grid;
    margin: 7rem 0;
  }

  ${theme.mediaQuery.smallScreen} {
    .grid-wrapper {
      grid-template-columns: 1fr 1fr;
      width: 95%;
    }
  }
`;
