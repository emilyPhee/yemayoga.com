import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  background-color: aliceblue;
  /* margin: 10rem; */
  margin: 0.5rem;
  font-family: ${theme.fonts.nanumGothic};
  height: 27rem;

  .schedule-title {
    font-size: 1.6rem;
    text-align: center;

    background-color: blueviolet;
    padding: 1rem 3rem;
    margin-bottom: 1rem;
  }

  .yoga-schedule-wrapper {
    background-color: bisque;
    padding: 2rem;
    height: 100%;
  }

  .level {
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${theme.colors.lightGreyText};
  }

  .time-list {
    line-height: 3rem;
  }

  .date-time-wrapper {
    font-size: ${theme.sizes.bodyFontsSize};
    display: flex;
    justify-content: space-between;
  }

  .announcement {
    margin: 1rem 0;
    font-size: 1.2rem;
  }

  ${theme.mediaQuery.smallScreen} {
    .schedule-title {
      font-size: 1.4rem;
    }
  }
`;
