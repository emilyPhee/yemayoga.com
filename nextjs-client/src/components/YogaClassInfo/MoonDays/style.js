import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0 5rem 0;

  .title {
    font-size: ${theme.sizes.fontsTitleSize};
    margin-bottom: 3rem;
    font-family: ${theme.fonts.nanumGothic};
    color: ${theme.colors.greyText};
    text-align: center;
  }

  .moonday-list-wrapper {
    width: 80%;
    background-color: aliceblue;
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .moon-day {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
