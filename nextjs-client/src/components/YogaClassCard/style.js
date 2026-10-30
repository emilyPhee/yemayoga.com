import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28rem;
  max-width: calc(100% - 4rem);
  min-width: 0;
  margin: 2rem 2%;

  .class-link {
    display: block;
    width: 100%;
  }

  .class-link:focus-visible {
    outline: 2px solid ${theme.colors.blackText};
    outline-offset: 5px;
  }

  .card-wrapper {
    position: relative;
    margin-bottom: 1.5rem;
    background-color: black;
    isolation: isolate;
  }

  .card-wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 0, 0, 0.4) 50%,
      transparent
    );
    pointer-events: none;
  }

  .class-img {
    transition: opacity 200ms ease-in-out;
    width: 100%;
    aspect-ratio: 5 / 6;
    opacity: 0.85;
  }

  .class-link:hover .class-img,
  .class-link:focus-visible .class-img {
    opacity: 0.65;
    cursor: pointer;
  }

  .name {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    padding: 0 2.2rem;
    z-index: 1;
    color: ${theme.colors.whiteText};
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
    line-height: 1.4;
    text-align: center;
    text-wrap: balance;
    overflow-wrap: anywhere;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  }

  .name[data-long-title='true'] {
    font-size: 2rem;
    letter-spacing: 0.02rem;
  }

  .level,
  .duration {
    font-size: 1.3rem;
    color: ${theme.colors.lightGreyText};
    font-family: ${theme.fonts.nanumGothic};
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    max-width: 100%;
    text-align: center;
    overflow-wrap: anywhere;
  }

  .level {
    padding-bottom: 0.3rem;
    margin-top: 1.2rem;
  }

  ${theme.mediaQuery.smallScreen} {
    margin: 3rem 2rem;
  }

  @media (prefers-reduced-motion: reduce) {
    .class-img {
      transition: none;
    }
  }
`;
