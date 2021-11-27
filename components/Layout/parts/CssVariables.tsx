import { css, createGlobalStyle } from 'styled-components';

import { to } from 'Devices';

const icons = css`
  --default-background-icon-position: no-repeat center;

  --envelope-icon: url("data:image/svg+xml,%3Csvg style='fill: %23d4e4ff' viewBox='0 0 56 56' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.502 49.999a.989.989 0 0 1-.697-.287.977.977 0 0 1 .163-1.518l20.499-13.081a.988.988 0 0 1 1.361.295.975.975 0 0 1-.296 1.353l-17.677 11.28 34.297.001-14.446-9.216a.976.976 0 0 1-.297-1.353.986.986 0 0 1 1.361-.295l17.273 11.017a.978.978 0 0 1-.532 1.804z'/%3E%3Cpath d='M27.467 36.761 6.953 23.676l1.064-1.648 20.514 13.084z'/%3E%3Cpath d='m28.531 36.761-1.064-1.649 20.516-13.084 1.064 1.648zM7.485 49.997a.982.982 0 0 1-.985-.979V21.302c0-.319.156-.618.418-.801l5.048-3.529a.987.987 0 0 1 1.372.238.975.975 0 0 1-.239 1.364L8.47 21.81v27.208a.982.982 0 0 1-.985.979z'/%3E%3Cpath d='M48.515 50a.981.981 0 0 1-.985-.979V21.812l-4.667-3.254a.976.976 0 0 1-.241-1.364.99.99 0 0 1 1.372-.24L49.08 20.5a.977.977 0 0 1 .419.802V49.02a.98.98 0 0 1-.984.98z'/%3E%3Cpath d='M42.995 22.979A.982.982 0 0 1 42.01 22l-.003-14.042H13.99V22c0 .541-.441.979-.985.979s-.985-.438-.985-.979V6.979c0-.541.441-.979.985-.979h29.988c.544 0 .985.438.985.979L43.98 22a.982.982 0 0 1-.985.979z'/%3E%3Cpath d='M36.588 20.39H19.411c-.544 0-.985-.438-.985-.979s.441-.979.985-.979h17.177c.545 0 .985.438.985.979s-.44.979-.985.979zM36.588 15.342H19.411c-.544 0-.985-.438-.985-.979s.441-.979.985-.979h17.177c.545 0 .985.438.985.979s-.44.979-.985.979zM36.588 25.789H19.411c-.544 0-.985-.438-.985-.979s.441-.979.985-.979h17.177c.545 0 .985.438.985.979s-.44.979-.985.979z'/%3E%3C/svg%3E")
    var(--default-background-icon-position);
`;

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

    --section-gap: 3.8rem;
    --text-gap: 1.5rem;

    --title-font-size: clamp(1.8rem, 5vw, 3.6rem);

    --short-transition-duration: 250ms;
    --medium-transition-duration: 500ms;
    --long-transition-duration: 750ms;
    --fancy-cubic-bezier: cubic-bezier(0.77, 0, 0.175, 1);

    --min-z-index: 10;
    --med-z-index: 20;
    --max-z-index: 30;
    --extreme-z-index: 10000;

    ${icons}

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
