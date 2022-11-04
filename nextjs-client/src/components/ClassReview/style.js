import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { css } from '@emotion/react';

export const Container = styled.section`
  color: ${theme.colors.blackText};

  .title {
    letter-spacing: 0.1rem;
    font-size: ${theme.sizes.fontsTitleSize};
    margin: 8rem 0;
    font-family: ${theme.fonts.nanumGothic};
    text-align: center;
  }
`;
