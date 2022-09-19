import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .top-box {
    padding: 0 ${theme.sizes.paddingMediumScreen};
    background-color: aliceblue;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right-box {
      display: flex;
      align-items: center;

      .insta-icon-wrapper {
        background-color: blue;
        width: 4rem;
        height: 4rem;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .logo-wrapper {
    width: 10rem;
    height: 4.4rem;
    position: relative;
    margin: 1rem;
    cursor: pointer;
  }

  .bottom-box {
    background-color: pink;
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
