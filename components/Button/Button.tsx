import { FC } from 'react';
import styled, { css } from 'styled-components';

import LinkContainer from 'Components/LinkContainer';

import { Button as ButtonType } from 'Types/links';

type InnerProps = {
  withSpaceAbove?: boolean;
  withSpaceBelow?: boolean;
  size?: 'default' | 'big' | 'custom';
  tone?: 'light' | 'dark';
};

const Button: FC<ButtonType & InnerProps> = ({
  children,
  href,
  type,
  onClick,
  withSpaceAbove,
  withSpaceBelow,
  className,
  size = 'default',
  tone = 'dark',
}) =>
  href ? (
    <LinkContainer href={href}>
      <ButtonInner
        {...{
          size,
          tone,
          withSpaceAbove,
          withSpaceBelow,
          className,
        }}
      >
        {children}
      </ButtonInner>
    </LinkContainer>
  ) : (
    <ButtonInner
      as="button"
      {...{
        type,
        onClick,
        size,
        tone,
        withSpaceAbove,
        withSpaceBelow,
        className,
      }}
    >
      {children}
    </ButtonInner>
  );

const ButtonInner = styled.a<InnerProps>`
  --transition-duration: var(--short-transition-duration);
  --transition-timing-function: var(--button-cubic-bezier);

  display: inline-block;
  position: relative;

  border: 1px solid var(--theme);
  margin-top: 0.5rem;

  color: var(--theme);
  text-align: center;

  transition: background-color var(--transition-duration) var(--transition-timing-function),
    color var(--transition-duration) var(--transition-timing-function),
    transform var(--transition-duration) var(--transition-timing-function);

  svg {
    transition: fill var(--transition-duration) var(--transition-timing-function);
  }

  padding: ${({ size }) =>
    size === 'big' ? '0.45rem 2.2rem 0.75rem' : size === 'default' ? '0.27rem 1.2rem 0.55rem' : ''};

  ${({ withSpaceAbove }) =>
    withSpaceAbove &&
    css`
      margin-top: 0.8rem;
    `};

  ${({ withSpaceBelow }) =>
    withSpaceBelow &&
    css`
      margin-bottom: 0.8rem;
    `};

  ${({ tone }) =>
    tone === 'dark'
      ? css`
          --theme: var(--dark-gray);
          --shadow-color: rgba(0, 0, 0, 0.1);
        `
      : css`
          --theme: #fff;
          --shadow-color: rgba(255, 255, 255, 0.1);
        `};

  &::after {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;

    box-shadow: 0 0.85rem 1.8rem 0 var(--shadow-color), 0 0.28rem 0.85rem 0 var(--shadow-color);

    transition: opacity var(--transition-duration) var(--transition-timing-function);
  }

  &:hover {
    background-color: var(--dark-gray);
    color: #fff;

    transform: translateY(-2px);

    svg {
      fill: #fff;
    }

    &::after {
      opacity: 1;
    }
  }
`;

export default Button;
