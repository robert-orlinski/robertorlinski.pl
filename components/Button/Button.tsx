import { FC } from 'react';
import styled from 'styled-components';

import { LinkContainer } from '../LinkContainer';

import { Button as ButtonType } from 'Types/links';

export const Button: FC<ButtonType> = ({ children, href, type, onClick }) =>
  href ? (
    <LinkContainer href={href}>
      <ButtonInner>{children}</ButtonInner>
    </LinkContainer>
  ) : (
    <ButtonInner as="button" {...{ type, onClick }}>
      {children}
    </ButtonInner>
  );

const ButtonInner = styled.a`
  --transition-duration: var(--short-transition-duration);
  --transition-timing-function: cubic-bezier(0.35, 0.9, 0.5, 1);

  display: inline-block;
  position: relative;

  margin-top: 0.8rem;
  padding: 0.27rem 1.2rem 0.55rem;
  border: 1px solid var(--dark-gray);

  text-align: center;

  transition: background-color var(--transition-duration) var(--transition-timing-function),
    color var(--transition-duration) var(--transition-timing-function),
    transform var(--transition-duration) var(--transition-timing-function);

  &::after {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;

    box-shadow: 0 0.85rem 1.8rem 0 rgba(0, 0, 0, 0.11), 0 0.28rem 0.85rem 0 rgba(0, 0, 0, 0.08);

    transition: opacity var(--transition-duration) var(--transition-timing-function);
  }

  &:hover {
    background-color: var(--dark-gray);
    color: #fff;

    transform: translateY(-2px);

    &::after {
      opacity: 1;
    }
  }
`;
