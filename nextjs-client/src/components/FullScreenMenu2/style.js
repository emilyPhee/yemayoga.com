import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { css } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 7vh;
  background-color: #fff;

  position: relative;
  padding: 0.8rem 0;
  border-bottom: 2px solid #fff;
  transition: all 200ms ease-in-out;

  ${({ scroll }) =>
    scroll
      ? css`
          border-bottom: 2px solid #f7f7f7;
        `
      : null}

  .menu-items-wrapper {
    display: flex;
    padding-left: 0.9rem;
  }

  .main-logo {
    display: flex;
    justify-content: flex-start;
    width: 20%;
  }

  .logo-wrapper {
    width: 12rem;
    height: 5.4rem;
    position: relative;
    cursor: pointer;
  }

  .user-links-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 20%;
    padding-right: 3.5rem;

    .insta-icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 5rem;
      height: 5rem;

      font-size: 2.1rem;
      color: ${theme.colors.greyText};
    }
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
