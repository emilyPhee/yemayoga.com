import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.mainLightBackground};
  color: ${theme.colors.blackText};
  padding: 5rem 5%;

  .title {
    font-size: ${theme.sizes.fontsTitleSize};
    margin-bottom: 2rem;
    font-family: ${theme.fonts.nanumGothic};
  }

  ${theme.mediaQuery.smallScreen} {
    padding: 5rem 1rem;
  }
`;
