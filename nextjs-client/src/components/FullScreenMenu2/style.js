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
    font-family: ${theme.fonts.nunito};
    letter-spacing: 0.7px;
    width: 33.3%;
  }

  .main-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3%;
  }

  .user-links-container {
    display: flex;
    justify-content: flex-end;

    align-items: center;

    width: 33.3%;
    padding-right: 3.5rem;

    .insta-icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 5rem;
      height: 5rem;
      font-size: 2.1rem;
      color: ${theme.colors.greyText};

      .instagram-icon {
        cursor: pointer;
      }
    }
  }

  ${theme.mediaQuery.tablet} {
    .main-logo {
      display: flex;
      justify-content: center;
      width: 10%;
    }
  }
`;

export const MenuItem = styled.div`
  color: ${theme.colors.navbarInactive};
  padding: 1.5rem 2.6rem;
  font-size: 1.6rem;
  transition: color 200ms ease-in-out;
  display: flex;
  align-items: center;

  &:hover {
    color: ${theme.colors.navbarActive};
  }

  ${({ active }) =>
    active
      ? css`
          color: ${theme.colors.navbarActive};
        `
      : null}

  ${theme.mediaQuery.tablet} {
    padding: 1.5rem 1.2rem;
  }
`;
