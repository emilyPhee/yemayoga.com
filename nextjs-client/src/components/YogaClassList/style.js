import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  background-color: ${theme.colors.whiteText};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;

  .class-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .title {
    font-size: 1.9rem;
    padding: 2rem;
  }
`;
