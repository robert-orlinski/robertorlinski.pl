import { FC } from 'react';
import styled, { css } from 'styled-components';

import { Wrapper } from 'Components/Wrapper';
import { CloseButton } from './CloseButton';

type Props = {
  isVisible: boolean;
  closeHandler?: () => void;
};

export const SearchContainer: FC<Props> = ({ isVisible, children, closeHandler }) => (
  <Container {...{ isVisible }}>
    <Content as="div">{children}</Content>
    <CloseButton onClick={closeHandler} />
  </Container>
);

const Container = styled.aside<Props>`
  --close-button-size: 2rem;

  position: fixed;
  inset: 0;
  z-index: var(--extreme-z-index);

  width: 100%;
  height: 100%;

  background-color: #fff;

  ${({ isVisible }) =>
    isVisible
      ? css`
          transition: visibility 1ms, opacity var(--short-transition-duration),
            transform var(--short-transition-duration);
        `
      : css`
          transform: scale(0.95);
          opacity: 0;
          visibility: hidden;
          transition: visibility 1ms var(--short-transition-duration),
            opacity var(--short-transition-duration), transform var(--short-transition-duration);
        `}
`;

const Content = styled(Wrapper)`
  padding-top: calc(var(--close-button-size) * 3);
`;
