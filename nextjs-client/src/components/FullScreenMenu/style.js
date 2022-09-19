import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 7vh;
  background-color: white;
  padding: 0 9.4rem;

  /* border-bottom: 0.5px solid ${theme.colors.navbarInactive}; */

  .left-box {
    display: flex;
    align-items: center;

    .logo-wrapper {
      width: 10rem;
      height: 4.4rem;

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

    font-size: 2.1rem;
    color: ${theme.colors.greyText};
  }

  ${theme.mediaQuery.tablet} {
    background-color: aliceblue;
  }
`;

export const MenuItem = styled.div`
  color: ${theme.colors.navbarInactive};
  padding: 1.5rem 2.6rem;
  font-size: 1.5rem;
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