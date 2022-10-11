import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 1rem;
  color: ${theme.colors.blackText};

  .left-box {
    width: 65rem;

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

  .introduction-en,
  .introduction-kr {
    font-size: ${theme.sizes.bodyFontsSize};
    line-height: 210%;
    font-family: ${theme.fonts.nanumGothic};
  }

  .introduction-en {
    font-family: ${theme.fonts.nanumGothic};
  }

  .introduction-kr {
    font-family: ${theme.fonts.nanumGothic};
  }

  .right-box {
    display: flex;
    justify-content: center;
    width: 40rem;
  }

  .instructor-img {
    position: relative;
    width: 30rem;
    height: 40rem;
  }

  ${theme.mediaQuery.smallScreen} {
    flex-direction: column;

    .left-box {
      width: 90%;
    }
    .right-box {
      width: 90%;
      margin: 4rem 0;
    }
  }
`;
