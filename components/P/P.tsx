import styled from 'styled-components';

const P = styled.p`
  &:not(:last-child) {
    padding-bottom: var(--text-gap);
  }

  h1 + & > img,
  h2 + & > img,
  h3 + & > img,
  h4 + & > img,
  h5 + & > img,
  h6 + & > img {
    margin-top: 0.5rem;
  }
`;

export default P;
