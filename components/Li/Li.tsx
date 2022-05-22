import styled from 'styled-components';

import { to } from 'Devices';

const Li = styled.li`
  --bullet-size: 0.45rem;

  position: relative;
  padding-left: 3rem;

  &:not(:last-child) {
    padding-bottom: 0.3rem;
  }

  &::before {
    position: absolute;
    left: 1rem;
  }

  ul > & {
    &::before {
      content: '';

      width: var(--bullet-size);
      height: var(--bullet-size);

      top: 0.68em;

      background-color: #000;
      border-radius: 50%;
    }
  }

  ol > & {
    &::before {
      content: '0' counter(list) '. ';
      counter-increment: list;

      top: 0.32em;

      font-size: 0.8em;

      font-weight: 600;
    }
  }

  @media ${to.phoneL} {
    padding-left: 1.8rem;

    &::before {
      left: 0.3rem;
    }
  }
`;

export default Li;
