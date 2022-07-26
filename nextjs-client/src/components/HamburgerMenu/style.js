import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const Container = styled.div`
  .top-box {
    background-color: #fff;
    min-height: 5rem;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    min-height: 7vh;
    top: 0;
    z-index: 10;

    ${({ scroll }) =>
      scroll
        ? css`
            border-bottom: 2px solid #f7f7f7;
          `
        : null}

    .hamburger {
      cursor: pointer;
      user-select: none;
    }

    .hamburger.active .bar:nth-of-type(2) {
      opacity: 0;
    }

    .hamburger.active .bar:nth-of-type(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-of-type(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .hamburger .bar:nth-of-type(2) {
      height: 1.8px;
    }

    .bar {
      display: block;
      width: 25px;
      height: 2px;
      margin: 6px auto;

      border-radius: 20px;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      background-color: ${theme.colors.greyText};
    }

    .logo-wrapper {
      width: 10rem;
      height: 4.4rem;
      position: relative;
      margin: 1rem;
      margin-left: 6.5rem;
      cursor: pointer;
    }

    .right-box {
      display: flex;
      align-items: center;

      .insta-icon-wrapper {
        width: 4rem;
        height: 4rem;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .bottom-box {
    text-align: center;
    position: fixed;
    left: -100%;
    top: 6.2rem;
    width: 100%;
    transition: 0.3s ease-in-out;
  }

  .bottom-box.open {
    left: 0;
  }
`;

export const MenuItem = styled.div`
  background-color: #fff;
  border-bottom: solid 1px #f0f0f0;
  color: ${theme.colors.navbarInactive};
  padding: 2rem 2.6rem;
  font-size: 1.5rem;
  transition: color 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.navbarActive};
  }

  ${({ active }) =>
    active
      ? css`
          color: ${theme.colors.navbarActive};
        `
      : null}
`;
