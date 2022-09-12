import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.footerBg};
  height: 27rem;
  position: relative;

  .left-box {
    padding: 3rem 9.4rem;
  }

  .title {
    font-size: 1.5rem;
    padding: 1rem 0;
    letter-spacing: 0.3rem;
  }

  .info {
    font-size: 1.3rem;
  }

  .insta-link-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 8.5rem;
    margin-top: 4rem;
    font-size: 1.4rem;
  }

  .right-box {
    /* margin-right: 7rem; */
    padding: 8rem;
  }

  .copyright {
    position: absolute;
    bottom: 0;
    font-size: 1.3rem;
    padding: 3px;
  }
`;
