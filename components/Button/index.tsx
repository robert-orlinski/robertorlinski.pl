import { FC } from 'react';
import styled from 'styled-components';

import { LinkContainer } from '../Foundations/LinkContainer';

import { Link } from '../../types/links';

export const ButtonInner = styled.a`
  --transition-duration: var(--short-transition-duration);
  --transition-timing-function: cubic-bezier(0.35, 0.9, 0.5, 1);

  display: inline-block;
  position: relative;

  padding: 4px 22px 8px;
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

    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);

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

export const Button: FC<Link> = ({ children, href }) => (
  <LinkContainer href={href}>
    <ButtonInner>{children}</ButtonInner>
  </LinkContainer>
);
