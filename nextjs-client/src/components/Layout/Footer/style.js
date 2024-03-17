import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.mainBackground};
  color: ${theme.colors.blackText};
  font-family: ${theme.fonts.nunito};
  position: relative;
  padding: 3rem ${theme.sizes.paddingFullScreen};
  z-index: 4;

  .left-box {
    margin-top: 2rem;
  }
  .title {
    font-size: 1.5rem;
    padding: 1rem 0;
    letter-spacing: 0.3rem;
    font-weight: 600;
  }

  .info {
    font-size: 1.3rem;
  }

  .insta-link-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 8.5rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 1.4rem;
  }

  .copyright {
    font-size: 1.3rem;
    position: absolute;
    bottom: 0;

    left: 50%;
    transform: translate(-50%, -50%);
    color: ${theme.colors.greyText};
  }

  ${theme.mediaQuery.smallScreen} {
    flex-direction: column;
    padding: 5rem 2rem;

    .left-box {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .right-box {
      padding: 4rem;
    }

    .copyright {
      width: 90%;
      text-align: center;
    }
  }
`;
