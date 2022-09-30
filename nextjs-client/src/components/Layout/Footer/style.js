import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.mainBackground};
  font-family: ${theme.fonts.nunito};
  height: 27rem;
  position: relative;
  padding: 2rem ${theme.sizes.paddingFullScreen};

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
`;
