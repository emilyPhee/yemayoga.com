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
    padding: 1rem 3rem 3rem 4rem;
    background-color: ${theme.colors.mainLightBackground};

    margin: 2rem;
    position: relative;
  }

  .quote-icon-wrapper {
    position: relative;
    width: 7rem;
    height: 7rem;

    left: -1.7rem;
  }

  .review-kr,
  .review-en {
    line-height: 3rem;
    margin-bottom: 2rem;
    height: 18.5rem;
    overflow-y: auto;
    padding-right: 1.4rem;
    color: ${theme.colors.blackText};
  }

  /* Custom Scroll Bar */
  .review-kr::-webkit-scrollbar,
  .review-en::-webkit-scrollbar {
    width: 0.8rem;
  }

  .review-kr::-webkit-scrollbar-track,
  .review-en::-webkit-scrollbar-track {
    background-color: ${theme.colors.brandColor3};
    border-radius: 100vw;
  }

  .review-kr::-webkit-scrollbar-thumb,
  .review-en::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.brandColor1};
    border: 1px solid ${theme.colors.brandColor3};
    border-radius: 100vw;
  }

  /* Browser support setting (FireFox) */
  @supports (
    scrollbar-color: ${theme.colors.brandColor1} ${theme.colors.brandColor3}
  ) {
    * {
      scrollbar-color: ${theme.colors.brandColor1} ${theme.colors.brandColor3};
      scrollbar-width: auto;
    }
  }

  .review-en {
    font-family: ${theme.fonts.nanumGothic};
    font-size: 1.5rem;
  }

  .review-kr {
    font-family: ${theme.fonts.nanumGothic};
    font-size: ${theme.sizes.bodyFontsSize};
  }

  .reviewer-name {
    font-size: ${theme.sizes.bodyFontsSize};
    position: absolute;
    bottom: 4rem;
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
      max-width: 83%;
    }

    .embla__slide {
      min-width: 100%;
    }
  }
`;
