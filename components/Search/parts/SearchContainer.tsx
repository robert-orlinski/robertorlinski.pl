import { FC } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';

import Wrapper from 'Components/Wrapper';

import CloseButton from './CloseButton';

import { to } from 'Devices';

type Props = {
  isVisible: boolean;
  closeHandler?: () => void;
};

const SearchContainer: FC<Props> = ({ isVisible, children, closeHandler }) => (
  <>
    {isVisible && <OverflowHidden />}
    <Container {...{ isVisible }} role="search">
      <Content as="div">{children}</Content>
      <CloseButton onClick={closeHandler} />
    </Container>
  </>
);

const Container = styled.aside<Props>`
  position: fixed;
  inset: 0;
  z-index: var(--extreme-z-index);

  width: 100%;
  height: 100%;

  overflow-y: auto;
  background-color: #fff;

  --search-inner-width: min(100%, 570px);

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
  height: 100%;
  padding: var(--nav-padding) calc(var(--hamburger-size) * 2) 0 0;

  @media ${to.tabletL} {
    padding-right: calc(var(--hamburger-size) * 1.5);
  }
`;

const OverflowHidden = createGlobalStyle`
  html {
    overflow: hidden;
  }
`;

export default SearchContainer;
