import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  background-color: blue;
  display: flex;
  justify-content: center;

  .price-grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 15rem;
    width: 75%;
    gap: 0.5rem;
  }

  ${theme.mediaQuery.tablet} {
    .price-grid-wrapper {
      width: 90%;
    }
  }
`;
