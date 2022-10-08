import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0 10rem 0;
  color: ${theme.colors.blackText};

  .title {
    font-size: ${theme.sizes.fontsTitleSize};
    margin-bottom: 3rem;
    font-family: ${theme.fonts.nanumGothic};
    text-align: center;
  }

  .moonday-list-wrapper {
    width: 80%;
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .moon-day {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #efefef;
  }

  .tooltip-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .tooltip {
    font-size: ${theme.sizes.bodyFontsSize};
    font-family: ${theme.fonts.nunito};
    text-decoration: underline;
    color: ${theme.colors.greyText};
    cursor: pointer;
    margin-right: 15%;
    margin-top: 3rem;
  }

  ${theme.mediaQuery.smallScreen} {
    .moonday-list-wrapper {
      grid-template-columns: 1fr 1fr;
      width: 85%;
    }
  }
`;
