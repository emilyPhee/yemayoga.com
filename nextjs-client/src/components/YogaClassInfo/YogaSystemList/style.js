import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  .title {
    font-size: ${theme.sizes.fontsTitleSize};
    margin-bottom: 4rem;
    margin-top: 2rem;

    font-family: ${theme.fonts.nanumGothic};

    .divider-container {
      padding: 0 5rem;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.mainLightBackground};
  color: ${theme.colors.blackText};
  padding: 5rem 5%;

  ${theme.mediaQuery.smallScreen} {
    padding: 5rem 1rem;
  }
`;
