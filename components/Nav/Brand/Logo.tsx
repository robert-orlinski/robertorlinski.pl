import styled from 'styled-components';
import { to } from '../../../helpers/styles/devices';

const Icon = styled.svg`
  height: 34px;
  margin-bottom: -2px;

  @media ${to.tablet} {
    height: 30px;
  }
`;

export const Logo = () => (
  <Icon viewBox="0 0 1276 285" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M200 0H0v200h100V100h100V0z" fill="#2979FF" />
    <path
      d="M194.64 223.96h-15.12V250H151.8v-98h44.8c8.867 0 16.567 1.493 23.1 4.48 6.533 2.893 11.573 7.093 15.12 12.6 3.547 5.413 5.32 11.807 5.32 19.18 0 7.093-1.68 13.3-5.04 18.62-3.267 5.227-7.98 9.333-14.14 12.32L242.1 250h-29.68l-17.78-26.04zm17.5-35.7c0-4.573-1.447-8.12-4.34-10.64-2.893-2.52-7.187-3.78-12.88-3.78h-15.4v28.7h15.4c5.693 0 9.987-1.213 12.88-3.64 2.893-2.52 4.34-6.067 4.34-10.64zm80.113 63c-8.12 0-15.447-1.68-21.98-5.04-6.534-3.36-11.667-8.027-15.4-14-3.64-5.973-5.46-12.74-5.46-20.3 0-7.467 1.82-14.187 5.46-20.16 3.733-5.973 8.82-10.593 15.26-13.86 6.533-3.36 13.906-5.04 22.12-5.04 8.213 0 15.586 1.68 22.12 5.04 6.533 3.267 11.62 7.887 15.26 13.86 3.64 5.88 5.46 12.6 5.46 20.16 0 7.56-1.82 14.327-5.46 20.3-3.64 5.973-8.727 10.64-15.26 14-6.534 3.36-13.907 5.04-22.12 5.04zm0-21.14c4.666 0 8.493-1.587 11.48-4.76 2.986-3.267 4.48-7.747 4.48-13.44 0-5.6-1.494-9.987-4.48-13.16-2.987-3.173-6.814-4.76-11.48-4.76-4.667 0-8.494 1.587-11.48 4.76-2.987 3.173-4.48 7.56-4.48 13.16 0 5.693 1.493 10.173 4.48 13.44 2.986 3.173 6.813 4.76 11.48 4.76zm102.902-57.26c6.907 0 13.16 1.587 18.76 4.76 5.693 3.173 10.173 7.747 13.44 13.72 3.36 5.88 5.04 12.74 5.04 20.58 0 7.84-1.68 14.747-5.04 20.72-3.267 5.973-7.747 10.593-13.44 13.86-5.6 3.173-11.853 4.76-18.76 4.76-9.987 0-17.453-2.94-22.4-8.82V250h-25.34V146.12h26.6v34.58c5.133-5.227 12.18-7.84 21.14-7.84zm-5.6 57.26c4.667 0 8.493-1.587 11.48-4.76 2.987-3.267 4.48-7.747 4.48-13.44 0-5.6-1.493-9.987-4.48-13.16s-6.813-4.76-11.48-4.76c-4.667 0-8.493 1.587-11.48 4.76s-4.48 7.56-4.48 13.16c0 5.693 1.493 10.173 4.48 13.44 2.987 3.173 6.813 4.76 11.48 4.76zm132.764-17.92c0 .187-.14 2.38-.42 6.58h-55.16c1.12 3.92 3.266 6.953 6.44 9.1 3.266 2.053 7.326 3.08 12.18 3.08 3.64 0 6.766-.513 9.38-1.54 2.706-1.027 5.413-2.707 8.12-5.04l14 14.56c-7.374 8.213-18.154 12.32-32.34 12.32-8.867 0-16.66-1.68-23.38-5.04-6.72-3.36-11.947-8.027-15.68-14-3.64-5.973-5.46-12.74-5.46-20.3 0-7.467 1.773-14.14 5.32-20.02 3.64-5.973 8.633-10.64 14.98-14 6.346-3.36 13.486-5.04 21.42-5.04 7.56 0 14.42 1.587 20.58 4.76 6.16 3.08 11.013 7.607 14.56 13.58 3.64 5.88 5.46 12.88 5.46 21zm-40.46-20.44c-4.107 0-7.56 1.167-10.36 3.5-2.707 2.333-4.434 5.507-5.18 9.52h31.08c-.747-4.013-2.52-7.187-5.32-9.52-2.707-2.333-6.114-3.5-10.22-3.5zm78.064-8.54c2.707-3.453 6.207-6.02 10.5-7.7 4.387-1.773 9.38-2.66 14.98-2.66v23.94c-2.427-.28-4.433-.42-6.02-.42-5.693 0-10.173 1.54-13.44 4.62-3.173 3.08-4.76 7.793-4.76 14.14V250h-26.6v-75.88h25.34v9.1zm91.141 63.7c-2.24 1.4-4.993 2.473-8.26 3.22-3.173.747-6.58 1.12-10.22 1.12-9.893 0-17.5-2.427-22.82-7.28s-7.98-12.087-7.98-21.7V196.8h-11.06v-19.88h11.06v-19.74h26.6v19.74h17.36v19.88h-17.36V222c0 2.707.7 4.853 2.1 6.44 1.493 1.493 3.453 2.24 5.88 2.24 3.08 0 5.787-.793 8.12-2.38l6.58 18.62zm101.679 5.04c-10.36 0-19.693-2.193-28-6.58-8.213-4.387-14.7-10.453-19.46-18.2-4.666-7.747-7-16.473-7-26.18s2.334-18.433 7-26.18c4.76-7.747 11.247-13.813 19.46-18.2 8.307-4.387 17.64-6.58 28-6.58s19.647 2.193 27.86 6.58c8.307 4.387 14.794 10.453 19.46 18.2 4.76 7.747 7.14 16.473 7.14 26.18s-2.38 18.433-7.14 26.18c-4.666 7.747-11.153 13.813-19.46 18.2-8.213 4.387-17.5 6.58-27.86 6.58zm0-22.96c4.947 0 9.427-1.167 13.44-3.5 4.014-2.333 7.187-5.6 9.52-9.8 2.334-4.293 3.5-9.193 3.5-14.7s-1.166-10.36-3.5-14.56c-2.333-4.293-5.506-7.607-9.52-9.94-4.013-2.333-8.493-3.5-13.44-3.5-4.946 0-9.426 1.167-13.44 3.5-4.013 2.333-7.186 5.647-9.52 9.94-2.333 4.2-3.5 9.053-3.5 14.56s1.167 10.407 3.5 14.7c2.334 4.2 5.507 7.467 9.52 9.8 4.014 2.333 8.494 3.5 13.44 3.5zm93.059-45.78c2.707-3.453 6.207-6.02 10.5-7.7 4.387-1.773 9.38-2.66 14.98-2.66v23.94c-2.427-.28-4.433-.42-6.02-.42-5.693 0-10.173 1.54-13.44 4.62-3.173 3.08-4.76 7.793-4.76 14.14V250h-26.6v-75.88h25.34v9.1zm36.457-37.1h26.6V250h-26.6V146.12zm43.886 28h26.6V250h-26.6v-75.88zm13.3-8.4c-4.853 0-8.773-1.353-11.76-4.06-2.986-2.707-4.48-6.067-4.48-10.08s1.494-7.373 4.48-10.08c2.987-2.707 6.907-4.06 11.76-4.06 4.854 0 8.774 1.307 11.76 3.92 2.987 2.52 4.48 5.787 4.48 9.8 0 4.2-1.493 7.7-4.48 10.5-2.986 2.707-6.906 4.06-11.76 4.06zm80.005 7.14c9.43 0 16.99 2.8 22.68 8.4 5.79 5.6 8.68 14.047 8.68 25.34V250h-26.6v-39.06c0-10.36-4.15-15.54-12.46-15.54-4.57 0-8.26 1.493-11.06 4.48-2.704 2.987-4.058 7.467-4.058 13.44V250h-26.6v-75.88h25.34v8.26c2.987-3.08 6.538-5.413 10.638-7 4.11-1.68 8.59-2.52 13.44-2.52zm-3.64-29.12h26.6l-26.32 21.28h-19.038l18.758-21.28zm79.28 107.52c-6.34 0-12.6-.7-18.76-2.1-6.16-1.493-11.1-3.407-14.84-5.74l7.98-18.2c3.46 2.147 7.56 3.873 12.32 5.18 4.76 1.213 9.48 1.82 14.14 1.82 4.3 0 7.33-.42 9.1-1.26 1.87-.933 2.8-2.24 2.8-3.92 0-1.68-1.12-2.847-3.36-3.5-2.14-.747-5.6-1.447-10.36-2.1-6.06-.747-11.24-1.727-15.54-2.94-4.2-1.213-7.84-3.453-10.92-6.72s-4.62-7.84-4.62-13.72c0-4.853 1.45-9.147 4.34-12.88 2.9-3.827 7.1-6.813 12.6-8.96 5.6-2.24 12.28-3.36 20.02-3.36 5.51 0 10.97.56 16.38 1.68 5.42 1.12 9.94 2.707 13.58 4.76l-7.98 18.06c-6.72-3.733-14-5.6-21.84-5.6-4.2 0-7.28.513-9.24 1.54-1.96.933-2.94 2.193-2.94 3.78 0 1.773 1.08 3.033 3.22 3.78 2.15.653 5.7 1.353 10.64 2.1 6.26.933 11.44 2.007 15.54 3.22 4.11 1.213 7.66 3.453 10.64 6.72 3.08 3.173 4.62 7.653 4.62 13.44 0 4.76-1.44 9.053-4.34 12.88-2.89 3.733-7.18 6.673-12.88 8.82-5.6 2.147-12.36 3.22-20.3 3.22zm83.43-27.86-7.84 7.98V250h-26.6V146.12h26.6v54.46l27.16-26.46h31.5l-31.5 32.48L1232 250h-32.2l-21.28-26.6zm61.26-49.28h26.6V250h-26.6v-75.88zm13.3-8.4c-4.86 0-8.78-1.353-11.76-4.06-2.99-2.707-4.48-6.067-4.48-10.08s1.49-7.373 4.48-10.08c2.98-2.707 6.9-4.06 11.76-4.06 4.85 0 8.77 1.307 11.76 3.92 2.98 2.52 4.48 5.787 4.48 9.8 0 4.2-1.5 7.7-4.48 10.5-2.99 2.707-6.91 4.06-11.76 4.06z"
      fill="#000"
    />
    <path fillRule="evenodd" clipRule="evenodd" d="M200 0H0v200h100V100h100V0z" fill="#2979FF" />
  </Icon>
);