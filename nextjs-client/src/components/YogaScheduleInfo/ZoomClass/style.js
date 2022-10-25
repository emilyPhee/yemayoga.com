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
    width: 75%;
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
    width: 75%;
    margin: 0.7rem;
    margin-bottom: 7rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 20rem;
  }

  .level {
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${theme.colors.lightGreyText};
    position: absolute;
    top: 1.7rem;
  }

  .USA-schedule {
    position: relative;
  }

  .USA-schedule,
  .Korea-schedule,
  .price {
    padding: 15% 10%;
    margin-top: 1rem;
  }

  .korea-schedule-title,
  .price-title,
  .usa-schedule-title {
    text-align: end;
    margin-right: 13%;
    color: ${theme.colors.greyText};
  }

  .date-time-wrapper {
    display: flex;
    justify-content: space-around;

    .class-time {
      letter-spacing: 0.5px;
    }
  }

  .list-wrapper {
    margin-top: 2rem;
    line-height: 3.1rem;
  }

  .price {
    margin-right: 2.5rem;

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
      width: 90%;
    }

    .grid-wrapper {
      gap: 1px;
      width: 90%;
      grid-auto-rows: 22rem;
    }

    .USA-schedule,
    .Korea-schedule,
    .price {
      padding: 4rem 3rem;
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
      width: 90%;
    }

    .zoom-class-title {
      font-size: 1.5rem;
    }

    .grid-wrapper {
      grid-template-columns: 1fr;
      width: 90%;
      grid-auto-rows: 17rem;
      padding-bottom: 3rem;
    }

    .USA-schedule,
    .Korea-schedule,
    .price {
      padding: 4rem;
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
