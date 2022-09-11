import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { css } from '@emotion/react';

export const Container = styled.div`
  .language-toggle {
    width: 4.5rem;
    height: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .toggle-divider {
      border: 0.5px solid ${theme.colors.navbarInactive};
      height: 30%;
    }
  }
`;

export const LanguageToggleWrapper = styled.div`
  font-size: 1.3rem;
  color: ${theme.colors.navbarInactive};

  transition: color 200ms ease-in-out;

  ${({ selected }) =>
    selected
      ? css`
          color: ${theme.colors.navbarActive};
          font-size: 1.4rem;
          padding-bottom: 1px;
        `
      : null}
`;
