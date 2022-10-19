import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  background-color: ${theme.colors.whiteText};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12rem 0;
  text-align: center;
  color: ${theme.colors.blackText};

  .class-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .title {
    font-size: ${theme.sizes.fontsTitleSize};
    margin-bottom: 4rem;
    font-family: ${theme.fonts.nanumGothic};
  }
`;
