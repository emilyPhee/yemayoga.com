import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${theme.sizes.bodyFontsSize};
  font-family: ${theme.fonts.nanumGothic};
  color: ${theme.colors.blackText};

  .title-wrapper {
    width: 65%;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.brandColor1};

    .zoom-class-title {
      font-size: 1.6rem;
      padding: ${theme.spacing.cardHeaderPadding} ${theme.spacing.cardPadding};
      line-height: 1.5;
      text-align: center;
      text-wrap: balance;
      overflow-wrap: anywhere;
    }
  }

  .grid-wrapper {
    gap: ${theme.spacing.cardGap};
    width: 65%;
    margin: ${theme.spacing.cardGap} 0;
    margin-bottom: 7rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
      line-height: 1.5;
      overflow-wrap: anywhere;
    }
  }

  .USA-schedule,
  .Korea-schedule,
  .price {
    padding: ${theme.spacing.cardPadding};
    min-width: 0;
    background-color: ${theme.colors.brandColor2};
  }

  .date-time-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0 1.6rem;
    font-variant-numeric: tabular-nums;
    .class-time {
      letter-spacing: 0.5px;
      white-space: nowrap;
    }
  }

  .list-wrapper {
    margin-top: ${theme.spacing.cardContentGap};
    line-height: 3.1rem;
  }

  .list-wrapper > li {
    overflow-wrap: anywhere;
  }

  .price {
    display: flex;
    flex-direction: column;

    .registration-link {
      align-self: flex-end;
      display: inline-flex;
      align-items: center;
      min-height: 4.4rem;
      margin-top: auto;
      padding-top: 1.6rem;
      text-decoration: underline;
      text-underline-offset: 0.3rem;
      font-size: 1.3rem;
      color: ${theme.colors.blackText};
      cursor: pointer;
    }

    .registration-link:hover,
    .registration-link:focus-visible {
      color: ${theme.colors.blackText};
    }

    .registration-link:focus-visible {
      outline: 2px solid ${theme.colors.blackText};
      outline-offset: 4px;
    }
  }

  .day {
    flex-shrink: 0;
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
    }
  }

  ${theme.mediaQuery.smallScreen} {
    .title-wrapper {
      width: 80%;

      .zoom-class-title {
        padding-inline: ${theme.spacing.cardPaddingMobile};
      }
    }

    .grid-wrapper {
      gap: ${theme.spacing.cardGapMobile};
    }

    .grid-wrapper {
      grid-template-columns: 1fr;
      width: 80%;
      grid-auto-rows: auto;
      padding-bottom: 3rem;
    }

    .USA-schedule,
    .Korea-schedule,
    .price {
      padding: ${theme.spacing.cardPaddingMobile};
    }

    .date-time-wrapper {
      justify-content: space-between;
    }

    .price {
      margin: 0;
    }
  }
`;
