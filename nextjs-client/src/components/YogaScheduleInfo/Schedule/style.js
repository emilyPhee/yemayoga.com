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

    padding: 1rem 2rem;
    overflow-wrap: anywhere;
    text-wrap: balance;
  }

  .yoga-schedule-wrapper {
    background-color: ${theme.colors.brandColor2};
    padding: 2.5rem 2.4rem;
    flex: 1;
  }

  .level {
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${theme.colors.lightGreyText};
    margin-bottom: 2.5rem;
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
    margin-top: 2.4rem;
    overflow-wrap: anywhere;

    font-size: 1.2rem;
  }

  ${theme.mediaQuery.smallScreen} {
    .yoga-schedule-wrapper {
      padding: 2rem 2.4rem;
    }
  }
`;
