import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 1rem;
  color: ${theme.colors.blackText};

  .left-box {
    width: 60rem;

    .name-wrapper {
      font-family: ${theme.fonts.nanumGothic};
      margin: 2rem 0;

      .name {
        font-size: ${theme.sizes.fontsDescriptionTitle};
      }

      .sub-name {
        font-size: ${theme.sizes.fontsDescriptionTitleSub};
        color: ${theme.colors.lightGreyText};
      }
    }
  }

  .instructor-intro {
    font-size: ${theme.sizes.bodyFontsSize};
    line-height: 210%;
    font-family: ${theme.fonts.nanumGothic};
  }

  .right-box {
    display: flex;
    justify-content: center;
    width: 45rem;
    padding: 2rem;
  }

  .instructor-img {
    position: relative;
    width: 30rem;
    height: 40rem;
  }

  ${theme.mediaQuery.smallScreen} {
    flex-direction: column;
    padding: 4rem 0;
    padding-bottom: 7rem;

    .left-box {
      width: 90%;
    }
    .right-box {
      width: 90%;
      margin-top: 7rem;
    }
  }
`;
