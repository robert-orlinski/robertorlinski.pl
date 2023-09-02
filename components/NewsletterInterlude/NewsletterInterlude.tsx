import EnvelopeContainer from 'Components/EnvelopeContainer';
import { from } from 'Devices';

import useToggle from 'Hooks/useToggle';
import styled from 'styled-components';

import Invite from './parts/Invite';
import Popup from './parts/Popup';

const NewsletterInterlude = () => {
  const [isPopupVisible, togglePopupVisibility] = useToggle(false);

  return (
    <Container>
      <EnvelopeContainer>
        <Invite {...{ togglePopupVisibility }} />
        <Popup isVisible={isPopupVisible} {...{ togglePopupVisibility }} />
      </EnvelopeContainer>
    </Container>
  );
};

const Container = styled.section`
  @media ${from.tabletL} {
    padding: calc(var(--text-gap) * 1.5) 0 calc(var(--text-gap) * 1);
  }
`;

export default NewsletterInterlude;
