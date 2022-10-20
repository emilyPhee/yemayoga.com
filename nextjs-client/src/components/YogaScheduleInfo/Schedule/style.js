import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  background-color: aliceblue;
  margin: 0.5rem;
  font-family: ${theme.fonts.nanumGothic};

  .schedule-title {
    font-size: 1.8rem;
    text-align: center;

    background-color: blueviolet;
    padding: 1rem 3rem;
    margin-bottom: 1rem;
  }

  .yoga-schedule-wrapper {
    background-color: bisque;
    /* height: 20rem; */
  }

  .date-time-wrapper {
    font-size: ${theme.sizes.bodyFontsSize};
    display: flex;
    justify-content: space-between;
  }
`;
