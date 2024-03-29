import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  .maintenance-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: rgba(255, 255, 255, 0.8);

    .msg-wrapper {
      background-color: ${theme.colors.mainBackground};
      border: 2px solid ${theme.colors.brandColor1};
      color: ${theme.colors.blackText};
      padding: 4rem 6rem;
      position: absolute;
      top: 20rem;
      left: 50%;
      transform: translateX(-50%);
    }

    .kr-msg,
    .eng-msg {
      font-size: 2rem;
      text-align: center;
      font-weight: 500;
    }

    .kr-msg {
      font-family: ${theme.fonts.nanumGothic};
      margin-bottom: 1rem;
    }

    .eng-msg {
      font-family: ${theme.fonts.nunito};
    }

    .email {
      font-size: 1.4rem;
      text-align: center;
      margin-top: 2rem;
    }

    ${theme.mediaQuery.tablet} {
      .msg-wrapper {
        width: 60%;
        padding: 1rem 2rem;
      }
    }

    ${theme.mediaQuery.smallScreen} {
      .msg-wrapper {
        width: 80%;
        padding: 1rem 2rem;
      }
    }
  }
`;
