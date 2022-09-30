import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { css } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .embla {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .embla__viewport {
    overflow: hidden;
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
    min-width: 35rem;
    height: 37rem;
    padding: 1rem 4rem 3rem 4rem;
    background-color: #fff;
    margin: 2rem;
    position: relative;
  }

  .quote-icon-wrapper {
    position: relative;
    width: 7rem;
    height: 7rem;
  }

  .review {
    font-size: 1.4rem;
    line-height: 3rem;
    margin-bottom: 2rem;
    height: 18rem;
    overflow: scroll;
  }

  .reviewer-name {
    font-size: 1.3rem;
    position: absolute;
    bottom: 2rem;
  }

  /* button style */
  .btn-container {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    padding: 3rem 10rem;
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

  ${theme.mediaQuery.smallScreen} {
    .btn-container {
      padding: 2rem 1rem;
    }

    .embla {
      max-width: 80%;
    }

    .embla__slide {
      min-width: 100%;
    }
  }
`;
