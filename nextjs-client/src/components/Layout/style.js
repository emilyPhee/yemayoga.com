import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .kakaotalk-link-wrapper {
    position: fixed;
    width: 6rem;
    height: 6rem;
    bottom: 3rem;
    right: 3rem;
    z-index: 7;
    background-color: ${theme.colors.kakaoTalkLink};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  ${theme.mediaQuery.smallScreen} {
    .kakaotalk-link-wrapper {
      bottom: 2rem;
      right: 1rem;
    }
  }
`;
