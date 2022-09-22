import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { css } from '@emotion/react';

export const Container = styled.div`
  /* .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
  } */
  .embla {
    position: relative;
    background-color: #f7f7f7;
    padding: 20px;
    max-width: 70rem;
    min-height: 25rem;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }

  .embla__viewpor {
    width: 100%;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -10px;
  }

  .embla__slide {
    position: relative;
    min-width: 80%;
    padding-left: 10px;
    background-color: aliceblue;
    border: 1px solid black;
  }

  /* button style */
  .embla__button {
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    touch-action: manipulation;
    position: absolute;
    z-index: 1;
    top: 80%;
    /* transform: translateY(-80%); */
    border: 0;
    width: 2.5rem;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
    fill: #1bcacd;
    padding: 0;
  }

  .embla__button:disabled {
    cursor: default;
    opacity: 0.3;
  }

  .embla__button__svg {
    width: 100%;
    height: 100%;
  }

  .embla__button--prev {
    right: 50px;
  }

  .embla__button--next {
    right: 17px;
  }
`;
