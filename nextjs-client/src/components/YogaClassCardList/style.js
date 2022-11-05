import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  background-color: ${theme.colors.whiteText};
  /* padding: 12rem 0; */
  color: ${theme.colors.blackText};

  .class-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 8rem;
  }

  .title {
    letter-spacing: 0.2rem;
    font-size: ${theme.sizes.fontsTitleSize};
    margin: 8rem 0;
    font-family: ${theme.fonts.nanumGothic};
    text-align: center;
    color: ${theme.colors.greyText};
  }

  ${theme.mediaQuery.smallScreen} {
    .title {
      text-align: center;
    }
  }
`;
