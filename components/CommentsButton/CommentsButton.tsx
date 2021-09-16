import styled from 'styled-components';

import { Button } from 'Components/Button';
import { ButtonContainer } from 'Components/ButtonContainer';

export const CommentsButton = () => (
  <Container>
    <Button href="#komentarze" withSpaceAbove size="big">
      Komentarze
    </Button>
  </Container>
);

const Container = styled(ButtonContainer)`
  margin-top: 1.5rem;
  padding: calc(2.2rem - 0.8rem) 0 2.2rem;
  border-top: 1px solid var(--line-gray);
`;
