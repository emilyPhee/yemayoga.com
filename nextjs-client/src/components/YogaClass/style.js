import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 4rem;

  .class-img {
    width: 29rem;
    position: relative;
    margin-bottom: 1.5rem;
  }

  .name {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    color: ${theme.colors.whiteText};
    font-size: 1.5rem;
  }

  .level,
  .duration {
    font-size: 1.1rem;
    text-transform: uppercase;
    color: ${theme.colors.lightGreyText};
    font-family: ${theme.fonts.nanumGothic};
    letter-spacing: 0.3rem;
  }
`;
