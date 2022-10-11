import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.nanumGothic};
  padding: 7rem 1rem;
  color: ${theme.colors.blackText};

  .left-box {
    width: 40rem;
    background-color: aqua;
  }

  .right-box {
    width: 60rem;
    background-color: purple;
  }

  .about-img {
    position: relative;
    width: 35rem;
    height: 30rem;
  }

  .sub-title {
    font-size: ${theme.sizes.fontsDescriptionTitleSub};
    color: ${theme.colors.lightGreyText};
  }

  .title {
    font-size: ${theme.sizes.fontsDescriptionTitle};
  }

  .intro-wrapper {
    background-color: bisque;
    height: 17rem;
    display: flex;
    align-items: center;
  }

  .about-intro {
    font-size: ${theme.sizes.bodyFontsSize};
    line-height: 180%;
    padding: 1rem 0;
  }

  ${theme.mediaQuery.smallScreen} {
    flex-direction: column;

    .left-box {
      width: 95%;
      display: flex;
      justify-content: center;
      margin-bottom: 3rem;
    }

    .right-box {
      width: 95%;
    }

    .intro-wrapper {
      padding: 3rem 0;
      height: auto;
    }
  }
`;
