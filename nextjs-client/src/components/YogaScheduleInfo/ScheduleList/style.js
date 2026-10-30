import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 28rem), 34rem));
    justify-content: center;
    gap: ${theme.spacing.cardGap};
    width: 77%;
    max-width: 144rem;
  }

  ${theme.mediaQuery.tablet} {
    .grid-wrapper {
      width: 80%;
    }
  }

  ${theme.mediaQuery.smallScreen} {
    .grid-wrapper {
      grid-template-columns: minmax(0, 1fr);
      width: calc(100% - 4rem);
      max-width: 34rem;
      gap: ${theme.spacing.cardGapMobile};
    }
  }
`;
