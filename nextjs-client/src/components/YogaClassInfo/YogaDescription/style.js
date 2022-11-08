import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 5rem 5%;
  color: ${theme.colors.blackText};

  .left-box {
    width: 40rem;
    margin: 3rem;

    .title {
      font-size: ${theme.sizes.fontsDescriptionTitle};
      font-family: ${theme.fonts.nanumGothic};
      padding-bottom: 0.5rem;
    }

    .sub-title {
      font-size: ${theme.sizes.fontsDescriptionTitleSub};
      font-family: ${theme.fonts.nanumGothic};
      line-height: 2rem;
      color: ${theme.colors.lightGreyText};
    }
  }

  .right-box {
    width: 65rem;
    margin: 3rem;

    .description {
      display: inline-block;
      font-size: ${theme.sizes.bodyFontsSize};
      line-height: 1.8;
      font-family: ${theme.fonts.nunito};
    }
  }

  ${theme.mediaQuery.tablet} {
  }

  ${theme.mediaQuery.smallScreen} {
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;

    .left-box {
      width: 90%;
    }

    .right-box {
      width: 90%;
    }
  }
`;
