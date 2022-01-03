import styled from 'styled-components';

import Button from 'Components/Button';
import CenteredText from 'Components/CenteredText';

const CommentsInvite = () => (
  <Container>
    <Button href="#komentarze">Przejdź do komentarzy</Button>
  </Container>
);

const Container = styled(CenteredText).attrs({
  as: 'footer',
})`
  --gap: calc(var(--section-gap) * 0.5);

  margin-top: var(--gap);
  padding-top: var(--gap);

  border-top: 1px solid var(--line-gray);

  text-align: center;
`;

export default CommentsInvite;
