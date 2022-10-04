import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 5rem 5%;

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
    }
  }

  .right-box {
    width: 60rem;
    margin: 3rem;

    .description {
      display: inline-block;
      font-size: ${theme.sizes.bodyFontsSize};
      line-height: 200%;
      font-family: ${theme.fonts.nunito};
    }
  }

  ${theme.mediaQuery.smallScreen} {
    padding: 1rem;
    flex-direction: column;

    .right-box {
      width: 90%;
    }
  }
`;
