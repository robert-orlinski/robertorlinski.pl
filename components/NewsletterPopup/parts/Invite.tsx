import styled from 'styled-components';

import CloseButton from './CloseButton';
import CustomButton from './CustomButton';

import { FlyingLetter } from 'Components/icons';

const Invite = () => (
  <Container>
    <OpeningButton size="custom">
      <Icon />
      Interesujesz się Front-endem lub WordPressem?
    </OpeningButton>
    <CloseButton />
  </Container>
);

const Container = styled.div`
  position: fixed;

  z-index: var(--extreme-z-index);
  right: 2rem;
  bottom: 2rem;

  /* transform: translateY(150px); */
  transition: transform var(--short-transition-duration) ease;
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
