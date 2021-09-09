import { createGlobalStyle } from 'styled-components';

import { to } from 'Devices';

export const Global = createGlobalStyle`
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
      font-size: 16px;
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
    font-size: 1rem;
    background-color: transparent;

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

  ul {
    list-style: none;
  }

  figure {
    position: relative;
  }

  button:focus,
  input:focus,
  a:focus {
	  outline: none;
  }

  input {
    font-size: 1rem;
  }
`;
