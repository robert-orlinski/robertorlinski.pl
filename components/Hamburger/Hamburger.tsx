import { FC, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import ElementWithOpacity from 'Components/ElementWithOpacity';

import { from } from 'Devices';

type ButtonProps = {
  isCrossed: boolean;
  isHiddenOnDesktop?: boolean;
};

type Props = {
  ariaLabelForClosed?: string;
  ariaLabelForOpened?: string;
} & ButtonProps &
  HTMLAttributes<HTMLAnchorElement>;

const Hamburger: FC<Props> = ({
  onClick,
  isCrossed,
  ariaLabelForClosed = 'Otwórz',
  ariaLabelForOpened = 'Zamknij',
  isHiddenOnDesktop = false,
  className,
}) => (
  <Button
    onClick={onClick}
    aria-label={isCrossed ? ariaLabelForOpened : ariaLabelForClosed}
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
})<ButtonProps>`
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
    height: var(--hamburger-width);

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
