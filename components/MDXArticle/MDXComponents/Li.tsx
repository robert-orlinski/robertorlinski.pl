import styled from 'styled-components';

import { Ul } from './Ul';
import { Ol } from './Ol';

export const Li = styled.li`
  position: relative;

  &:not(:last-child) {
    padding-bottom: 0.3rem;
  }

  ${Ul} > & {
    &:before {
      content: '';

      width: 0.45rem;
      height: 0.45rem;

      position: absolute;
      top: 0.75rem;
      left: -1.3rem;

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
      right: calc(100% + 0.85rem);

      font-size: 0.8em;

      font-weight: 600;
    }
  }
`;
