import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 10rem;

  .left-box {
    width: 40rem;
    margin: 3rem;

    .title {
      font-size: ${theme.sizes.fontsDescriptionTitle};
      font-family: ${theme.fonts.nanumGothic};
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
      font-size: ${theme.sizes.bodyFontsSize};
      line-height: 200%;
      font-family: ${theme.fonts.nunito};
    }
  }

  ${theme.mediaQuery.smallScreen} {
    padding: 1rem;
    flex-direction: column;

    .description {
      width: 80%;
    }
  }
`;
