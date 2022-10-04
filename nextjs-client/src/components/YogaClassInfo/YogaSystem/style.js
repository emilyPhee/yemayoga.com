import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 4rem 0;

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
    width: 60rem;
    font-family: ${theme.fonts.nunito};
    padding: 2rem;

    .title {
      font-size: ${theme.sizes.fontsSystemTitle};

      margin-top: 1rem;
    }

    .description {
      font-size: ${theme.sizes.bodyFontsSize};
      line-height: 200%;
    }
  }

  ${theme.mediaQuery.smallScreen} {
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;

    .right-box {
      width: 90%;
    }

    .left-box {
      justify-content: center;
    }
  }
`;
