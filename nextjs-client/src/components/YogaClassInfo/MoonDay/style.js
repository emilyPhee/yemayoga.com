import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.li`
  display: flex;
  align-items: center;

  width: 15rem;
  height: 15rem;

  font-size: 3rem;

  .month-name {
    font-family: ${theme.fonts.nunito};
    font-size: ${theme.sizes.fontsMoondayTitle};
    margin-right: 2rem;
    letter-spacing: 0.1rem;
    font-weight: bold;
    color: ${theme.colors.greyText};
  }

  .date-info {
    display: flex;
    gap: 10px;
    margin: 1rem;
    font-size: ${theme.sizes.fontsMoondayDate};
    font-family: ${theme.fonts.nunito};
  }
`;
