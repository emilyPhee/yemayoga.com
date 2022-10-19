import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 2.5%;

  .card-wrapper {
    position: relative;
    margin-bottom: 1.5rem;
    background-color: black;
  }

  .class-img {
    transition: all 200ms ease-in-out;
    width: 24rem;
    height: 29rem;
  }

  .class-img:hover {
    opacity: 0.7;
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

  ${theme.mediaQuery.smallScreen} {
    margin: 3rem;

    .card-wrapper {
    }
  }
`;
