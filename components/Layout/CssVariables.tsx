import { createGlobalStyle } from 'styled-components';

import { to } from 'Devices';

export const CssVariables = createGlobalStyle`
  html {
    --sans-serif: 'Darker Grotesque', -apple-system, sans-serif;
    --serif: 'Playfair Display', serif;

    --dark-gray: #222;
    --line-gray: #ecf0f3;
    --error-red: #d32f2f;
    --highlight: #e3f2fd;
    --brand-color: #2879ff;

    --dark-gray-transparent-min: rgba(34, 34, 34, 0.3);
    --dark-gray-transparent-med: rgba(34, 34, 34, 0.6);
    --dark-gray-transparent-max: rgba(34, 34, 34, 0.8);

    --nav-height: 5.2rem;
    --logo-height: 1.9rem;

    --section-gap: 3.8rem;
    --text-gap: 1.5rem;

    --short-transition-duration: 250ms;
    --medium-transition-duration: 500ms;
    --long-transition-duration: 750ms;

    --min-z-index: 10;
    --med-z-index: 20;
    --max-z-index: 30;
    --extreme-z-index: 10000;

    @media ${to.tabletL} {
      --section-gap: 2.5rem;
    }

    @media ${to.tablet} {
      --nav-height: 4.6rem;
    }

    @media ${to.phoneL} {
      --text-gap: 1.2rem;
    }
  }
`;
