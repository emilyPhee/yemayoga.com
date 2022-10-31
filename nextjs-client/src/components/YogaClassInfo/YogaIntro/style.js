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

    padding: 2rem 4rem;
    margin-bottom: 5rem;
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

  .divider-container {
    padding: 0 5rem;
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
      width: 30rem;
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
