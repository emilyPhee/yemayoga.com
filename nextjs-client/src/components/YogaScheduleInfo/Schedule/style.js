import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.li`
  background-color: aliceblue;
  display: flex;
  font-family: ${theme.fonts.nanumGothic};

  .schedule-title {
    font-size: 1.9rem;
    background-color: blueviolet;
    padding: 1rem 3rem;
    margin-bottom: 1rem;
  }

  .schedule-body-wrapper {
    background-color: orange;
    height: 100%;
    padding: 2rem;
  }

  .date-time-wrapper {
    font-size: ${theme.sizes.bodyFontsSize};
    display: flex;
    justify-content: space-between;
  }

  .schedule-wrapper {
    /* background-color: pink; */
    margin: 1rem;
  }

  .date-time-wrapper {
    display: flex;
  }
`;
