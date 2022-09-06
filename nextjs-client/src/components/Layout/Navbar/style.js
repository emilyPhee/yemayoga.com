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
      width: 140px;
      height: 30px;
      position: relative;
    }
  }

  .right-box {
    width: 200px;
    height: 100%;
    background-color: green;
  }
`;
