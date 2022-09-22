import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { css } from '@emotion/react';

export const Container = styled.section`
  background-color: ${theme.colors.bodyBg};
  padding-top: 7rem;
  .title {
    font-size: ${theme.sizes.fontsTitleSize};
    margin-bottom: 4rem;
    font-family: ${theme.fonts.nanumGothic};
    color: ${theme.colors.greyText};
    text-align: center;
  }
`;
