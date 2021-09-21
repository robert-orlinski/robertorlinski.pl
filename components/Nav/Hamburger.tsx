import { FC } from 'react';
import styled from 'styled-components';

import { ElementWithOpacity } from 'Components/ElementWithOpacity';
import { ElementWithInlineStyle } from 'Types/styled-components';

import { from } from 'Devices';

import { ClickableElement } from 'Types/links';

export const Hamburger: FC<ClickableElement & ElementWithInlineStyle> = ({ onClick, style }) => (
  <Button onClick={onClick} style={style}>
    <Inner />
  </Button>
);

const Button = styled(ElementWithOpacity).attrs({
  as: 'button',
})`
  --hamburger-size: 1.66rem;

  width: var(--hamburger-size);
  height: var(--hamburger-size);

  margin-left: 1.1rem;
  border: none;

  @media ${from.tabletL} {
    display: none;
  }
`;

const Inner = styled.span`
  position: relative;
  width: var(--hamburger-size);

  transform: var(--middle-bar-transform, none);

  &,
  &::before,
  &::after {
    display: block;
    height: 2px;

    background-color: var(--dark-gray);
    transition: transform var(--short-transition-duration);
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: calc(var(--hamburger-size) / 2);
  }

  &::before {
    top: calc(var(--hamburger-size) / -3.8);
    left: 0;

    transform: var(--top-bar-transform, none);
  }

  &::after {
    top: calc(var(--hamburger-size) / 3.8);
    right: 0;

    transform: var(--bottom-bar-transform, none);
  }
`;
