import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { css } from '@emotion/react';

export const Container = styled.section`
  padding: 10rem 0 9rem 0;
  color: ${theme.colors.blackText};

  .title {
    letter-spacing: 0.1rem;
    font-size: ${theme.sizes.fontsTitleSize};
    margin-bottom: 4rem;
    font-family: ${theme.fonts.nanumGothic};
    text-align: center;
  }
`;
