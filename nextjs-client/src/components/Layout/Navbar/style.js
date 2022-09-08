import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7rem;
  background-color: white;
  padding: 0 9.4rem;

  .left-box {
    display: flex;
    align-items: center;

    .logo-wrapper {
      width: 10rem;
      height: 4.5rem;
      position: relative;
      margin: 1rem;
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

    font-size: 2.2rem;
  }

  .language-toggle-wrapper {
    padding: 1rem;
    font-size: 1.3rem;
  }
`;

export const MenuItem = styled.div`
  color: ${theme.colors.navbarInactive};
  padding: 1.5rem 2.6rem;
  font-size: 1.4rem;
  transition: color 300ms ease-in-out;

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
