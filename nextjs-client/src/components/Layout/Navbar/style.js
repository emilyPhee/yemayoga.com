import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: red;

  .left-box {
    width: 500px;
    height: 100%;
    background-color: green;

    .logo-wrapper {
      width: 120px;
      height: 47px;
      position: relative;
    }

    .menu-items-wrapper {
      display: flex;
    }
  }

  .right-box {
    width: 200px;
    height: 100%;
    background-color: green;
  }
`;

export const MenuItem = styled.div`
  background-color: grey;
  padding: 2rem;
  font-size: 1.8rem;
`;
