import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${theme.colors.blackText};

  padding: 7rem 1rem;
  padding-bottom: 0;

  .main-wrapper {
    display: flex;
    justify-content: center;

    padding: 0 4rem;
  }

  .yoga-img-wrapper {
    width: 40rem;
  }

  .yoga-img {
    position: relative;
    width: 30rem;
    height: 30rem;
  }

  .description-wrapper {
    padding: 7rem 3rem;
    width: 60rem;

    .description-title {
      font-size: ${theme.sizes.fontsDescriptionTitle};
      font-family: ${theme.fonts.cantarell};
    }

    .sub-title {
      font-size: ${theme.sizes.fontsDescriptionTitleSub};
      font-family: ${theme.fonts.nanumGothic};
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .yoga-img-wrapper {
      display: flex;
      justify-content: center;
    }
    .yoga-img {
      padding: 10rem;
    }

    .description-wrapper {
      padding: 4rem;
      padding-bottom: 0;
      width: 90%;
    }
  }
`;
