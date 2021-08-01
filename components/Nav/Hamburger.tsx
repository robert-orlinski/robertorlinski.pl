import { FC } from 'react';
import styled from 'styled-components';

import { ElementWithOpacity } from '../Foundations/Clickable/ElementWithOpacity';
import { ButtonType, ElementWithInlineStyleType } from '../../types/global';

import { from } from '../../helpers/styles/devices';

const Button = styled(ElementWithOpacity)`
  width: 30px;
  height: 30px;

  margin-left: 20px;
  border: none;

  @media ${from.tabletL} {
    display: none;
  }
`;

const Inner = styled.span`
  position: relative;
  width: 30px;

  transform: var(--middle-bar-transform, none);

  &,
  &::before,
  &::after {
    display: block;
    height: 2px;

    background-color: var(--dark-gray);
    transition: transform 300ms ease;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 15px;
  }

  &::before {
    top: -8px;
    left: 0;

    transform: var(--top-bar-transform, none);
  }

  &::after {
    top: 8px;
    right: 0;

    transform: var(--bottom-bar-transform, none);
  }
`;

export const Hamburger: FC<ButtonType & ElementWithInlineStyleType> = ({ onClick, style }) => (
  <Button as="button" onClick={onClick} style={style}>
    <Inner />
  </Button>
);
