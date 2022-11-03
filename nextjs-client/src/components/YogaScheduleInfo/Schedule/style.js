import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  margin: 0.3rem;
  font-family: ${theme.fonts.nanumGothic};
  color: ${theme.colors.blackText};
  height: 90%;

  .title-wrapper {
    background-color: ${theme.colors.brandColor1};
    margin-bottom: 0.6rem;
  }

  .schedule-title {
    font-size: 1.6rem;
    text-align: center;

    padding: 1rem 3rem;
  }

  .yoga-schedule-wrapper {
    background-color: ${theme.colors.brandColor2};
    padding: 2.5rem 12%;
    height: 90%;
  }

  .level {
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${theme.colors.lightGreyText};
    margin-bottom: 1rem;
  }

  .time-list {
    line-height: 3.1rem;
  }

  .date-time-wrapper {
    font-size: ${theme.sizes.bodyFontsSize};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .class-time {
      letter-spacing: 0.5px;
    }
  }

  .announcement {
    /* margin-top: 3rem; */
    margin-top: 17%;
    padding-bottom: 1.5rem;
    white-space: nowrap;

    font-size: 1.2rem;
  }

  ${theme.mediaQuery.tablet} {
    margin-bottom: 2rem;

    .yoga-schedule-wrapper {
      padding: 2rem 4rem;
    }

    .schedule-title {
      font-size: 1.5rem;
      padding: 1rem;
    }

    .class-time {
      letter-spacing: 0px;
    }
  }

  ${theme.mediaQuery.smallScreen} {
    height: 98%;
    .schedule-title {
      font-size: 1.5rem;
    }

    .yoga-schedule-wrapper {
      background-color: ${theme.colors.brandColor2};
      padding: 2rem 3rem;
      height: 85%;
    }
  }
`;
