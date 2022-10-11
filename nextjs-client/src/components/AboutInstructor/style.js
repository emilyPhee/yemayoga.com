import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  background-color: blanchedalmond;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem 1rem;
  color: ${theme.colors.blackText};

  .left-box {
    background-color: lightblue;
    width: 70rem;

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

  .introduction {
    font-size: ${theme.sizes.bodyFontsSize};
    line-height: 220%;
  }

  .right-box {
    background-color: darkseagreen;
    display: flex;
    justify-content: center;
    width: 40rem;
  }

  .instructor-img {
    position: relative;
    width: 30rem;
    height: 40rem;
  }
`;
