import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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
