import { createGlobalStyle } from 'styled-components';

export const Variables = createGlobalStyle`
  html {
    --sans-serif: 'Darker Grotesque', -apple-system, sans-serif;
    --serif: 'Playfair Display', serif;

    --dark-gray: #222;

    --nav-height: 96px;

    @media (max-width: 991px) {
      --nav-height: 84px;
    }
  }
`;
