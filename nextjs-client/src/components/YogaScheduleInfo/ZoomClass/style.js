import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  background-color: purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  .title-wrapper {
    background-color: aqua;
    width: 75%;
    padding: 1rem;
    display: flex;
    justify-content: center;
  }

  .grid-wrapper {
    background-color: beige;
    width: 75%;
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .USA-schedule,
  .Korea-schedule,
  .price {
    background-color: aliceblue;
  }
`;
