import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { css } from '@emotion/react';

export const Container = styled.div`
  .embla {
    position: relative;
    /* background-color: #fff; */
    /* padding: 20px; */
    /* padding: 4rem 1rem 0 1rem; */
    /* max-width: 90%; */
    /* padding: 5rem; */
    min-height: 40rem;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }

  .embla__viewport {
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
    /* position: relative; */
    min-width: 60%;

    padding: 2rem 6rem 6rem 6rem;
    background-color: #fff;
    margin: 2rem;
  }

  .quote-icon-wrapper {
    position: relative;
    width: 7rem;
    height: 7rem;
  }

  .reviewer-name {
    font-size: 1.4rem;
    text-align: end;
    margin-top: 2rem;
  }

  /* button style */
  .btn-container {
    padding: 1rem;

    display: flex;
    justify-content: flex-end;
    padding: 3rem 2rem;
  }
  .embla__button {
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    touch-action: manipulation;
    z-index: 1;
    bottom: 2rem;
    border: 0;
    width: 2rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    fill: #757575;
    padding: 0;
    margin: 1rem;
  }

  .embla__button:disabled {
    cursor: default;
    opacity: 0.3;
  }

  .embla__button__svg {
    width: 100%;
    height: 100%;
  }
`;
