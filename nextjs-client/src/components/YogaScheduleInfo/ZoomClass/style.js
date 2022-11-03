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
    width: 55%;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.brandColor1};

    .zoom-class-title {
      font-size: 1.6rem;
      padding: 1rem 3rem;
    }
  }

  .grid-wrapper {
    background-color: ${theme.colors.brandColor2};
    gap: 3rem;
    width: 55%;
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
      align-self: flex-end;
      color: ${theme.colors.greyText};
    }
  }

  .USA-schedule {
    position: relative;
  }

  .USA-schedule,
  .Korea-schedule,
  .price {
    padding: 25% 15%;
    margin-top: 1rem;
  }

  .date-time-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .class-time {
      letter-spacing: 0.5px;
    }
  }

  .list-wrapper {
    margin-top: 2rem;
    line-height: 3.1rem;
  }

  .price {
    .price-title {
      margin-right: 0;
    }

    .price-list {
      text-align: end;
    }
  }

  li {
    list-style: none;
  }

  ${theme.mediaQuery.tablet} {
    .title-wrapper {
      width: 70%;
    }

    .grid-wrapper {
      gap: 1px;
      width: 70%;
    }

    .korea-schedule-title,
    .price-title,
    .usa-schedule-title {
      margin-top: 2rem;
      margin-right: 1.5rem;
    }
  }

  ${theme.mediaQuery.smallScreen} {
    .title-wrapper {
      width: 80%;
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
