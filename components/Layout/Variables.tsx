import { createGlobalStyle } from 'styled-components';

const Variables = createGlobalStyle`
  --dark-gray: #222;
  --nav-height: 96px;

  --sans-serif: 'Darker Grotesque', -apple-system, sans-serif;
  --serif: 'Playfair Display', serif;

  @media (max-width: 991px) {
    --nav-height: 84px;
  }
`;

export { Variables };
