import styled from 'styled-components';

import { Ul } from './Ul';
import { Ol } from './Ol';

export const Li = styled.li`
  --bullet-base-space: 1.3rem;
  --bullet-size: 0.45rem;

  position: relative;

  &:not(:last-child) {
    padding-bottom: 0.3rem;
  }

  ${Ul} > & {
    &:before {
      content: '';

      width: var(--bullet-size);
      height: var(--bullet-size);

      position: absolute;
      top: 0.68em;
      right: calc(100% + var(--bullet-base-space));

      background-color: #000;
      border-radius: 50%;
    }
  }

  ${Ol} > & {
    &:before {
      content: '0' counter(list) '. ';
      counter-increment: list;

      position: absolute;
      top: 0.32em;
      right: calc(100% + var(--bullet-base-space) - var(--bullet-size));

      font-size: 0.8em;

      font-weight: 600;
    }
  }
`;