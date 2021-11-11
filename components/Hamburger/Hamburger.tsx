import { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import ElementWithOpacity from 'Components/ElementWithOpacity';

import { from } from 'Devices';

type Props = {
  isCrossed: boolean;
  isHiddenOnDesktop?: boolean;
};

const Hamburger: FC<Props & HTMLAttributes<HTMLAnchorElement>> = ({
  onClick,
  isCrossed,
  isHiddenOnDesktop = false,
  className,
}) => (
  <Button
    onClick={onClick}
    {...{
      isCrossed,
      isHiddenOnDesktop,
      className,
    }}
  >
    <Inner />
  </Button>
);

const Button = styled(ElementWithOpacity).attrs({
  as: 'button',
})<Props>`
  width: var(--hamburger-size);
  height: var(--hamburger-size);

  border: none;

  ${({ isCrossed }) =>
    isCrossed &&
    css`
      --top-bar-transform: rotate(90deg) translateY(calc(var(--hamburger-size) / -3.8));
      --middle-bar-transform: rotate(-45deg);
      --bottom-bar-transform: rotate(90deg) translateY(calc((var(--hamburger-size) / 3.8) - 1px));
    `}

  ${({ isHiddenOnDesktop }) =>
    isHiddenOnDesktop &&
    css`
      @media ${from.tabletL} {
        display: none;
      }
    `}
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

export default Hamburger;
