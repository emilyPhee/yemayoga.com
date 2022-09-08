import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
  padding: 1.5rem 2.6rem;
  font-size: 1.5rem;

  &:hover {
    color: #101010;
  }

  ${({ active }) =>
    active
      ? css`
          /* border: 1px solid red;  */
          color: ${'#101010'};
        `
      : css`
          color: ${'#B3B3B3'};
        `}
`;
