import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { css } from '@emotion/react';

export const Container = styled.section`
  padding: 10rem 0 9rem 0;

  .title {
    font-size: ${theme.sizes.fontsTitleSize};
    margin-bottom: 4rem;
    font-family: ${theme.fonts.nanumGothic};
    color: ${theme.colors.greyText};
    text-align: center;
  }
`;
