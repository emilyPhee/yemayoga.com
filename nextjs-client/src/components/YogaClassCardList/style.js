import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  background-color: ${theme.colors.whiteText};
  padding: 15rem 0 15rem 0;
  color: ${theme.colors.blackText};

  .class-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .title {
    font-size: ${theme.sizes.fontsTitleSize};
    margin-bottom: 4rem;
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
