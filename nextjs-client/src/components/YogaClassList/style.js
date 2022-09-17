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
    font-size: ${theme.sizes.fontsTitleSize};
    padding: 2rem;
    font-family: ${theme.fonts.nanumGothic};
    color: ${theme.colors.greyText};
  }
`;
