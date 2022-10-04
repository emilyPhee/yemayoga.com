import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  .left-box {
    background-color: bisque;
    width: 40rem;
    .system-img {
      position: relative;
      width: 30rem;
      height: 30rem;
    }
  }

  .right-box {
    background-color: paleturquoise;
    width: 60rem;
    font-family: ${theme.fonts.nunito};

    .title {
      font-size: ${theme.sizes.fontsSystemTitle};
    }

    .description {
      font-size: ${theme.sizes.bodyFontsSize};
    }
  }
`;
