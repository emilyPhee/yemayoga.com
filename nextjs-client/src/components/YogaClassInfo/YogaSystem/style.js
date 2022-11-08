import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 4rem 0;
  margin-top: 0;
  color: ${theme.colors.blackText};

  .left-box {
    display: flex;
    margin: 3rem;
    width: 40rem;

    .system-img {
      position: relative;
      width: 35rem;
      height: 32rem;
    }
  }

  .right-box {
    width: 65rem;
    font-family: ${theme.fonts.nunito};
    padding: 2rem;

    .system-title {
      font-size: ${theme.sizes.fontsSystemTitle};
      margin-top: 1rem;
      margin-bottom: 2.5rem;
    }

    .description {
      font-size: ${theme.sizes.bodyFontsSize};
      line-height: 1.8;
    }
  }

  ${theme.mediaQuery.tablet} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 7rem;

    .right-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 85%;
    }

    .left-box {
      width: 85%;
      justify-content: center;
    }
  }

  ${theme.mediaQuery.smallScreen} {
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;

    .right-box {
      width: 90%;
      padding: 0;
    }

    .left-box {
      justify-content: center;
      width: 30rem;

      .system-img {
        width: 33rem;
        height: 30rem;
      }
    }
  }
`;
