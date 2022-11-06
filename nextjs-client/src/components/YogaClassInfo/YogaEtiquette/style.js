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
    width: 50rem;
  }

  .right-box {
    width: 60rem;
  }

  .title {
    font-size: ${theme.sizes.fontsTitleSize};
    font-family: ${theme.fonts.nanumGothic};
    padding-bottom: 0.5rem;
    padding: 0 1rem;
  }

  .etiquette-list {
    font-size: ${theme.sizes.bodyFontsSize};
    line-height: 4rem;
  }

  ${theme.mediaQuery.tablet} {
    flex-direction: column;
    .title {
      padding: 4rem 2rem;
      text-align: center;
    }

    .right-box {
      width: 85%;
    }

    .left-box {
      width: 85%;
    }
  }
  ${theme.mediaQuery.smallScreen} {
    flex-direction: column;

    .title {
      padding: 4rem 0;
      text-align: center;
    }

    .right-box {
      /* padding: 0 0.5rem; */
      width: 90%;
    }

    .left-box {
      width: 90%;
    }
  }
`;
