import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const Container = styled.div`
  .top-box {
    background-color: #fff;
    padding: 0 ${theme.sizes.paddingMediumScreen};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .hamburger-icon-wrapper {
      color: ${theme.colors.greyText};
      cursor: pointer;
    }

    .logo-wrapper {
      width: 10rem;
      height: 4.4rem;
      position: relative;
      margin: 1rem;
      margin-left: 6rem;
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
  }
`;

export const MenuItem = styled.div`
  background-color: #fff;
  border-top: solid 1px #f0f0f0;

  color: ${theme.colors.navbarInactive};
  padding: 2rem 2.6rem;
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
