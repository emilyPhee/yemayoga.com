import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 6rem;

  .card-wrapper {
    position: relative;
    width: 25rem;
    height: 30rem;
    margin-bottom: 1.5rem;
    background-color: black;
  }

  .class-img {
    transition: all 200ms ease-in-out;
  }

  .class-img:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  .name {
    position: absolute;
    bottom: 1.5rem;
    left: 2rem;
    color: ${theme.colors.whiteText};
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
  }

  .level,
  .duration {
    font-size: 1.3rem;
    color: ${theme.colors.lightGreyText};
    font-family: ${theme.fonts.nanumGothic};
    letter-spacing: 0.1rem;
    text-transform: capitalize;
  }

  .level {
    padding-bottom: 0.3rem;
  }
`;
