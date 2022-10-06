import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 15rem;

  font-size: 3rem;

  .month-name {
    font-family: ${theme.fonts.nunito};
    font-size: ${theme.sizes.fontsMoondayTitle};
    margin: 2rem;
  }

  .date-info {
    display: flex;
    background-color: powderblue;
    margin: 1rem;
    font-size: ${theme.sizes.bodyFontsSize};
    font-family: ${theme.fonts.nunito};
  }
`;
