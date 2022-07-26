import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.nanumGothic};
  padding: 7rem 1rem;
  color: ${theme.colors.blackText};

  .left-box {
    width: 40rem;
  }

  .right-box {
    width: 60rem;
    margin-right: 1rem;
    margin: 0 2rem;
  }

  .about-img {
    position: relative;
    width: 35rem;
    height: 30rem;
  }

  .sub-title {
    font-size: ${theme.sizes.fontsMediumDescriptionSubSize};
    color: ${theme.colors.lightGreyText};
    letter-spacing: 0.1rem;
  }

  .title {
    font-size: ${theme.sizes.fontsMediumDescriptionSize};
  }

  .intro-wrapper {
    height: 17rem;
    display: flex;
    align-items: center;
  }

  .about-intro {
    font-size: ${theme.sizes.bodyFontsSize};
    line-height: 1.8;
  }

  ${theme.mediaQuery.smallScreen} {
    flex-direction: column;
    padding: 5rem 0 1rem 0;

    .about-img {
      width: 33rem;
      height: 28rem;
    }

    .left-box {
      width: 90%;
      display: flex;
      justify-content: center;
      margin-bottom: 3rem;
    }

    .right-box {
      width: 90%;
    }

    .title,
    .sub-title {
      padding: 0 1rem;
    }
    .intro-wrapper {
      padding: 3rem 1rem;
      height: auto;
    }
  }
`;
