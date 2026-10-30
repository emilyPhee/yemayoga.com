import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  font-family: ${theme.fonts.nanumGothic};
  display: flex;
  flex-direction: column;
  min-width: 0;
  color: ${theme.colors.blackText};

  .title-wrapper {
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.brandColor1};
    margin-bottom: ${theme.spacing.cardGap};

    .price-title {
      font-size: 1.6rem;
      padding: ${theme.spacing.cardHeaderPadding} ${theme.spacing.cardPadding};
      line-height: 1.5;
      text-align: center;
      text-wrap: balance;
      overflow-wrap: anywhere;
    }
  }

  .class-price-wrapper {
    background-color: ${theme.colors.brandColor2};
    font-size: ${theme.sizes.bodyFontsSize};
    flex: 1;
    padding: ${theme.spacing.cardPadding};

    .price-wrapper {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 0.4rem 1.6rem;
      letter-spacing: 0.5px;
      font-variant-numeric: tabular-nums;
      overflow-wrap: anywhere;

      > div:nth-child(2) {
        text-align: right;
        white-space: nowrap;
      }
    }
  }

  .announcement {
    grid-column: 1 / -1;
    text-align: right;
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${theme.colors.greyText};
  }

  .list-wrapper {
    display: grid;
    gap: 1.2rem;
    line-height: 2;
  }

  ${theme.mediaQuery.smallScreen} {
    .title-wrapper .price-title {
      padding-inline: ${theme.spacing.cardPaddingMobile};
    }

    .class-price-wrapper {
      padding: ${theme.spacing.cardPaddingMobile};
    }
  }
`;
