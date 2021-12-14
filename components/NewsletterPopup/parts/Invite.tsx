import { FC } from 'react';
import styled from 'styled-components';

import CloseButton from './CloseButton';
import CustomButton from './CustomButton';

import { FlyingLetter } from 'Components/icons';

import { ContainerProps } from '../types';

type Props = {
  togglePopupVisibility: () => void;
  handleInviteDismiss: () => void;
} & ContainerProps;

const Invite: FC<Props> = ({ isVisible, togglePopupVisibility, handleInviteDismiss }) => (
  <Container {...{ isVisible }}>
    <OpeningButton size="custom" onClick={togglePopupVisibility}>
      <Icon />
      Interesujesz się Front-endem lub WordPressem?
    </OpeningButton>
    <CloseButton onClick={handleInviteDismiss} />
  </Container>
);

const Container = styled.div<ContainerProps>`
  position: fixed;

  z-index: var(--extreme-z-index);
  right: 2rem;
  bottom: 2rem;

  transition: transform var(--short-transition-duration) ease;

  ${({ isVisible }) => !isVisible && `transform: translateY(150px);`}
`;

const OpeningButton = styled(CustomButton)`
  max-width: 12.5rem;
  padding: 0.65rem 1rem 0.8rem;

  font-size: 0.85rem;
  line-height: 1.2;

  text-align: left;
  box-shadow: rgba(34, 34, 34, 0.2) 0 5px 10px;
`;

const Icon = styled(FlyingLetter)`
  width: 1.3rem;
  height: 1.3rem;

  flex-shrink: 0;

  margin-right: 16px;
`;

export default Invite;
