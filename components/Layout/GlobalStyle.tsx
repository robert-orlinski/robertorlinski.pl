import { createGlobalStyle } from 'styled-components';

import { to } from 'Devices';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body, 
  p,
  ol,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure {
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;
    font-size: 18px;

    scroll-behavior: smooth;

    @media ${to.phoneL} {
      font-size: 16.5px;
    }
  }

  body {
    padding: var(--nav-height) 0 0 0;
    color: var(--dark-gray);

    line-height: 1.55;
  }

  body, 
  input {
    font-family: var(--sans-serif);
    font-size: 1rem;
  }

  section,
  article,
  footer,
  header {
    position: relative;
  }

  button {
    display: block;
    appearance: none;
    
    padding: 0;
    border: 0;
    background-color: transparent;

    font-size: 1rem;

    &:hover {
      cursor: pointer;
    }
  }

  button,
  input[type='submit'] {
    border-radius: 0;
    font-family: var(--sans-serif);
  }

  fieldset {
    padding: 0;
    border: none;
  }

  a {
    text-decoration: none;
    color: var(--dark-gray);
  }

  *::selection {
    background-color: var(--dark-gray);
    color: #fff;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--serif);
    font-weight: 400;
  }

  h1 {
    font-size: 1.9rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.42rem;
  }

  h5 {
    font-size: 1.35rem;
  }

  h6 {
    font-size: 1.25rem;
  }

  ul,
  ol {
    list-style: none;
  }

  figure {
    position: relative;
  }

  img {
    display: block;
    margin: auto;
    max-width: 100%;
  }

  code {
    font-family: var(--monospace);
  }

  strong {
    font-weight: 600;
  }
`;
