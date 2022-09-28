import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding: 7rem 1rem;
  padding-bottom: 0;

  .main-wrapper {
    display: flex;
    /* justify-content: space-around; */
    justify-content: center;
    padding: 0 17rem;
    flex-wrap: wrap;
  }

  .yoga-img {
    position: relative;
    width: 30rem;
    height: 30rem;
  }

  .description-wrapper {
    padding: 7rem 3rem;

    .description-title {
      font-size: ${theme.sizes.fontsDescriptionTitle};
      font-family: ${theme.fonts.cantarell};
    }

    .sub-title {
      font-size: ${theme.sizes.fontsDescriptionTitleSub};
      font-family: ${theme.fonts.cantarell};
      letter-spacing: 1px;
    }
  }

  .line-wrapper {
    display: flex;
    justify-content: center;
  }

  .line {
    width: 90%;
    height: 1px;
    background-color: #e4e4e4;
    margin-top: 7rem;
  }

  ${theme.mediaQuery.smallScreen} {
    .main-wrapper {
      padding: 0;
    }

    .description-wrapper {
      padding: 4rem;
      padding-bottom: 0;
    }
  }
`;
