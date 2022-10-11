import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 5%;
  color: ${theme.colors.blackText};

  li {
    display: list-item;
    list-style-position: inside;
  }

  .left-box {
    width: 40rem;
  }

  .right-box {
    width: 60rem;
    padding-left: 10%;
  }

  .title {
    font-size: ${theme.sizes.fontsTitleSize};
    font-family: ${theme.fonts.nanumGothic};
    padding-bottom: 0.5rem;
  }

  .etiquette-list {
    font-size: ${theme.sizes.bodyFontsSize};
    line-height: 5rem;
  }

  ${theme.mediaQuery.smallScreen} {
    flex-direction: column;

    .title {
      padding: 3rem 2rem;
      text-align: center;
    }

    .right-box {
      padding: 0 1rem;
      width: 90%;
    }

    .left-box {
      width: 90%;
    }
  }
`;
