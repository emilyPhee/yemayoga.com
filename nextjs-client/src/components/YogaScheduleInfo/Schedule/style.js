import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  font-family: ${theme.fonts.nanumGothic};
  color: ${theme.colors.blackText};

  .title-wrapper {
    background-color: ${theme.colors.brandColor1};
    margin-bottom: ${theme.spacing.cardGap};
  }

  .schedule-title {
    font-size: 1.6rem;
    text-align: center;

    padding: ${theme.spacing.cardHeaderPadding} ${theme.spacing.cardPadding};
    line-height: 1.5;
    overflow-wrap: anywhere;
    text-wrap: balance;
  }

  .yoga-schedule-wrapper {
    background-color: ${theme.colors.brandColor2};
    padding: ${theme.spacing.cardPadding};
    flex: 1;
  }

  .level {
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${theme.colors.lightGreyText};
    margin-bottom: ${theme.spacing.cardContentGap};
  }

  .inquiry-only {
    display: flex;
    flex-direction: column;
  }

  .inquiry-message {
    color: ${theme.colors.greyText};
    font-size: ${theme.sizes.bodyFontsSize};
    line-height: 1.8;
    overflow-wrap: anywhere;
  }

  .inquiry-link {
    align-self: flex-end;
    display: inline-flex;
    align-items: center;
    min-height: 4.4rem;
    margin-top: auto;
    padding-top: 1.6rem;
    color: ${theme.colors.greyText};
    font-size: 1.3rem;
    text-decoration: underline;
    text-underline-offset: 0.3rem;
  }

  .inquiry-link:hover,
  .inquiry-link:focus-visible {
    color: ${theme.colors.blackText};
  }

  .inquiry-link:focus-visible {
    outline: 2px solid ${theme.colors.blackText};
    outline-offset: 4px;
  }

  .time-list {
    line-height: 3.1rem;
  }

  .date-time-wrapper {
    font-size: ${theme.sizes.bodyFontsSize};
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;
    font-variant-numeric: tabular-nums;

    .class-time {
      letter-spacing: 0.5px;
      white-space: nowrap;
    }
  }

  .announcement {
    margin-top: ${theme.spacing.cardContentGap};
    overflow-wrap: anywhere;

    font-size: 1.2rem;
  }

  ${theme.mediaQuery.smallScreen} {
    .schedule-title {
      padding-inline: ${theme.spacing.cardPaddingMobile};
    }

    .yoga-schedule-wrapper {
      padding: ${theme.spacing.cardPaddingMobile};
    }
  }
`;
