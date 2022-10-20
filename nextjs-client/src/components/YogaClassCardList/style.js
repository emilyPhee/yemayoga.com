import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  background-color: ${theme.colors.whiteText};
  padding: 12rem 0;
  color: ${theme.colors.blackText};

  .class-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .title {
    letter-spacing: 0.2rem;
    font-size: ${theme.sizes.fontsTitleSize};
    margin-bottom: 7rem;
    font-family: ${theme.fonts.nanumGothic};
    text-align: center;
  }

  ${theme.mediaQuery.smallScreen} {
    padding: 7rem 0;

    .title {
      text-align: center;
    }
  }
`;
