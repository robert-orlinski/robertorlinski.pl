import { createGlobalStyle } from 'styled-components';

export const Variables = createGlobalStyle`
  html {
    --sans-serif: 'Darker Grotesque', -apple-system, sans-serif;
    --serif: 'Playfair Display', serif;

    --dark-gray: #222;
    --blue-gray: #ecf0f3;

    --nav-height: 96px;

    --short-transition-duration: 250ms;
    --medium-transition-duration: 500ms;
    --long-transition-duration: 750ms;

    --min-z-index: 10;
    --med-z-index: 20;
    --max-z-index: 30;
    --extreme-z-index: 10000;

    @media (max-width: 991px) {
      --nav-height: 84px;
    }
  }
`;
