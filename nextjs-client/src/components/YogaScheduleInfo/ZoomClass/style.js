import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  /* background-color: purple; */
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${theme.sizes.bodyFontsSize};
  font-family: ${theme.fonts.nanumGothic};

  .title-wrapper {
    background-color: aqua;
    width: 75%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.brandColor1};
    margin-bottom: 0.6rem;
  }

  .zoom-class-title {
    font-size: 1.6rem;
    padding: 1rem 3rem;
  }

  .grid-wrapper {
    background-color: beige;
    gap: 10px;
    width: 75%;
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 20rem;
  }

  .level {
    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${theme.colors.lightGreyText};
    /* margin-bottom: 1rem; */
  }

  .USA-schedule,
  .Korea-schedule,
  .price {
    padding: 3rem;
  }

  .date-time-wrapper {
    display: flex;
    justify-content: space-between;

    .class-time {
      letter-spacing: 0.5px;
    }
  }

  .list-wrapper {
    background-color: aliceblue;
    margin-top: 2rem;
    line-height: 3.1rem;
  }

  li {
    list-style: none;
  }
`;
