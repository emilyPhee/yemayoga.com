import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.mainLightBackground};
  padding: 5rem 5%;

  .title {
    font-size: ${theme.sizes.fontsTitleSize};
    margin-bottom: 2rem;
    font-family: ${theme.fonts.nanumGothic};
    color: ${theme.colors.greyText};
  }

  ${theme.mediaQuery.smallScreen} {
    padding: 5rem 1rem;
  }
`;
