import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.section`
  background-color: lavender;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem;

  .yoga-img {
    position: relative;
    width: 30rem;
    height: 30rem;
  }

  .description-wrapper {
    background-color: aliceblue;
    padding: 7rem 5rem;

    .description-title {
      font-size: ${theme.sizes.fontsDescriptionTitle};
    }

    .sub-title {
      font-size: ${theme.sizes.fontsDescriptionTitleSub};
    }
  }
`;
