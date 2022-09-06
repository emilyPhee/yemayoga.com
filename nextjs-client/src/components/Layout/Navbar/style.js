import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7.3rem;
  background-color: red;

  .left-box {
    display: flex;
    align-items: center;
    background-color: green;

    .logo-wrapper {
      width: 12rem;
      height: 4.7rem;
      position: relative;
      margin: 1rem;
    }

    .menu-items-wrapper {
      display: flex;
    }
  }

  .right-box {
    /* width: 200px;
    height: 100%; */
    background-color: green;
    display: flex;
    align-items: center;
  }

  .insta-icon-wrapper {
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;

    font-size: 2.4rem;
  }

  .language-toggle-wrapper {
    background-color: peachpuff;
    padding: 1rem;
    font-size: 1.5rem;
  }
`;

export const MenuItem = styled.div`
  background-color: pink;
  padding: 2rem 2.4rem;
  font-size: 1.8rem;
`;
