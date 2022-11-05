import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  color: ${theme.colors.blackText};
  margin-bottom: 5rem;
  color: ${theme.colors.greyText};

  .title {
    letter-spacing: 0.1rem;
    font-size: ${theme.sizes.fontsTitleSize};
    margin: 8rem 0;
    font-family: ${theme.fonts.nanumGothic};
    text-align: center;
  }
`;
