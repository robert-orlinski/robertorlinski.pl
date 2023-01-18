import { FC } from 'react';
import styled from 'styled-components';

import Button from 'Components/Button';
import { ButtonProps } from 'Components/Button';

const DistantButton: FC<ButtonProps> = (props) => (
  <Container>
    <Button {...props} />
  </Container>
);

const Container = styled.div`
  padding-bottom: calc(var(--section-gap) * 0.6);
`;

export default DistantButton;
