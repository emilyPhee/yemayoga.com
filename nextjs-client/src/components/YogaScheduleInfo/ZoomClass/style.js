import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${theme.sizes.bodyFontsSize};
  font-family: ${theme.fonts.nanumGothic};
  color: ${theme.colors.blackText};
  padding-top: 7rem;

  .title-wrapper {
    width: 65%;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.brandColor1};

    .zoom-class-title {
      font-size: 1.6rem;
      padding: 1rem 3rem;
      white-space: nowrap;
    }
  }

  .grid-wrapper {
    gap: 0.7rem;
    width: 65%;
    margin: 0.7rem;
    margin-bottom: 7rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
  }

  .level {
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${theme.colors.lightGreyText};
    position: absolute;
    top: 1.7rem;
  }

  .schedule-container {
    display: flex;
    flex-direction: column;

    .usa-schedule-title,
    .korea-schedule-title,
    .price-title {
      color: ${theme.colors.greyText};
      font-size: 1.6rem;
      white-space: nowrap;
    }
  }

  .USA-schedule,
  .Korea-schedule,
  .price {
    padding: 8% 14%;
    background-color: ${theme.colors.brandColor2};
  }

  .date-time-wrapper {
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    .class-time {
      letter-spacing: 0.5px;
    }
  }

  .list-wrapper {
    margin-top: 2rem;
    line-height: 3.1rem;
  }

  .list-wrapper > li {
    white-space: nowrap;
  }

  .price {
    position: relative;

    .registration-link {
      position: absolute;
      right: 15%;
      bottom: 10%;
      border-bottom: 1px solid ${theme.colors.lightGreyText};
      font-size: 1.3rem;
      color: ${theme.colors.blackText};
      cursor: pointer;
      transition: all 200ms ease-in-out;
    }
  }

  .day {
    margin-right: 7%;
  }

  li {
    list-style: none;
  }

  ${theme.mediaQuery.tablet} {
    .title-wrapper {
      width: 80%;
    }

    .grid-wrapper {
      width: 80%;
      grid-auto-rows: 22rem;
    }

    .korea-schedule-title,
    .price-title,
    .usa-schedule-title {
      margin-right: 1.5rem;
    }
  }

  ${theme.mediaQuery.smallScreen} {
    .title-wrapper {
      width: 80%;
    }

    .grid-wrapper {
      gap: 1rem;
    }

    .zoom-class-title {
      font-size: 1.3rem;
    }

    .grid-wrapper {
      grid-template-columns: 1fr;
      width: 80%;
      grid-auto-rows: 17rem;
      padding-bottom: 3rem;
    }

    .USA-schedule,
    .Korea-schedule,
    .price {
      padding: 3rem;
    }

    .korea-schedule-title,
    .price-title,
    .usa-schedule-title {
      margin-right: 0;
    }

    .date-time-wrapper {
      justify-content: space-between;
    }

    .price {
      margin: 0;
    }
  }
`;
