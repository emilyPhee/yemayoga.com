import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  background-color: ${theme.colors.whiteText};
  padding: 15rem 0 12rem 0;
  color: ${theme.colors.blackText};

  .class-list {
    display: flex;
    /* justify-content: space-around; */
    justify-content: center;
    flex-wrap: wrap;
  }

  ${theme.mediaQuery.smallScreen} {
  }
`;
