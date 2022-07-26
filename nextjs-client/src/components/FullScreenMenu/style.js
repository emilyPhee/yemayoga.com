import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 7vh;
  background-color: white;
  padding: 0.1rem 9.4rem;
  border-bottom: 2px solid #fff;
  transition: all 200ms ease-in-out;

  ${({ scroll }) =>
    scroll
      ? css`
          border-bottom: 2px solid #f7f7f7;
        `
      : null}

  .left-box {
    display: flex;
    align-items: center;

    .logo-wrapper {
      width: 12rem;
      height: 5.4rem;

      position: relative;
      margin: 0.7rem;
      cursor: pointer;
    }

    .menu-items-wrapper {
      display: flex;
      margin: 0 1rem;
      font-family: 'Cantarell', sans-serif;
    }
  }

  .right-box {
    display: flex;
    align-items: center;
  }

  .insta-icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;

    font-size: 2.1rem;
    color: ${theme.colors.greyText};
  }
`;

export const MenuItem = styled.div`
  color: ${theme.colors.navbarInactive};
  padding: 1.5rem 2.6rem;
  font-size: 1.6rem;
  transition: color 200ms ease-in-out;

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
