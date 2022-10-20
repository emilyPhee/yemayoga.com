import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */

  ${theme.mediaQuery.smallScreen} {
  }
`;
