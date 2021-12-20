import styled from 'styled-components';

import { to } from 'Devices';

const DarkBox = styled.section`
  width: calc(100% + calc(var(--side-padding) * 2));

  margin: var(--text-gap) calc(var(--side-padding) * -1) calc(var(--text-gap) * 1.5);
  padding: 3rem 3.5rem;

  background-color: var(--dark-gray);
  color: #fff;
  text-align: center;

  @media ${to.tablet} {
    width: 100%;

    margin: var(--text-gap) 0 calc(var(--text-gap) * 1.5);
    padding: 2rem 2.5rem;
  }

  @media ${to.phoneL} {
    width: 100vw; /* 100% + 60px */

    margin: calc(var(--text-gap) * 0.7) -30px calc(var(--text-gap) * 1.7);
    padding: 2.5rem 30px;
  }
`;

export default DarkBox;
