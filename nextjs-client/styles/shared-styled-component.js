import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@styles/theme';

import { supportLanguages } from '@contexts/languageContext';

export const components = {
  block: {
    normal: ({ children }) => (
      <p style={{ marginBottom: '1rem' }}>{children}</p>
    ),
  },
};

const loadAnimate = keyframes`
    from {
        opacity: 0;
    }
    to {
         opacity: 1;
    }

`;

export const AnimatedParagraph = styled.p`
  animation: ${loadAnimate} 0.4s ease-in-out;
`;

export const AnimatedDivElement = styled.div`
  animation: ${loadAnimate} 0.4s ease-in-out;
`;

export const AnimatedOrderedListElement = styled.ol`
  animation: ${loadAnimate} 0.4s ease-in-out;
`;

export const AnimatedLanguageParagraph = styled(AnimatedParagraph)`
  ${({ preferredLanguage }) =>
    preferredLanguage === supportLanguages.English
      ? css`
          font-size: 2.3rem;

          ${theme.mediaQuery.smallScreen} {
            font-size: 1.6rem;
          }
        `
      : css`
          font-size: 2rem;

          ${theme.mediaQuery.smallScreen} {
            font-size: 1.5rem;
          }
        `}
`;
