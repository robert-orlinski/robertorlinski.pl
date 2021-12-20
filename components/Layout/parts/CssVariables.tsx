import { createGlobalStyle } from 'styled-components';

import { to } from 'Devices';

const CssVariables = createGlobalStyle`
  html {
    --sans-serif: 'Darker Grotesque', -apple-system, sans-serif;
    --serif: 'Playfair Display', serif;
    --monospace: 'Inconsolata', monospace;

    --dark-gray: #222;
    --line-gray: #ecf0f3;
    --error-red: #d32f2f;
    --highlight: #e3f2fd;
    --brand-color: #2979ff;
    --brand-color-brightened: #d4e4ff;

    --dark-gray-transparent-min: rgba(34, 34, 34, 0.3);
    --dark-gray-transparent-med: rgba(34, 34, 34, 0.6);
    --dark-gray-transparent-max: rgba(34, 34, 34, 0.8);

    --default-nav-height: 5rem;

    --nav-height: var(--default-nav-height);
    --input-height: 2.5rem;
    --brand-height: 1.8rem;
    --hamburger-size: 1.66rem;
    --hamburger-width: 2px;

    --section-gap: 3.8rem;
    --text-gap: 1.5rem;

    --title-font-size: clamp(1.8rem, 5vw, 3.6rem);

    --short-transition-duration: 250ms;
    --medium-transition-duration: 500ms;
    --long-transition-duration: 750ms;

    --button-cubic-bezier: cubic-bezier(0.35, 0.9, 0.5, 1);
    --fancy-cubic-bezier: cubic-bezier(0.77, 0, 0.175, 1);

    --min-z-index: 10;
    --med-z-index: 20;
    --max-z-index: 30;
    --extreme-z-index: 10000;

    @media ${to.laptopL} {
      --title-font-size: clamp(1.5rem, 3.8vw, 4rem);
    }

    @media ${to.tabletL} {
      --section-gap: 2.6rem;
    }

    @media ${to.tablet} {
      --default-nav-height: 5.2rem;
    }

    @media ${to.phoneL} {
      --text-gap: 1.2rem;
    }
  }
`;

export default CssVariables;
