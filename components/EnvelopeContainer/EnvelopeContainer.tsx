import { FC } from 'react';
import styled from 'styled-components';

import { Envelope } from 'Components/icons';

import { to } from 'Devices';

const EnvelopeContainer: FC<JSX.IntrinsicElements['div']> = ({ children, className }) => (
  <Container {...{ className }}>
    {children}
    <Icon />
  </Container>
);

const Container = styled.div`
  position: relative;
`;

const Icon = styled(Envelope)`
  position: absolute;
  top: calc(var(--icon-size, 10rem) * -0.6);
  right: calc(var(--icon-size, 10rem) * -0.6);
  z-index: -1;

  width: var(--icon-size, 10rem);
  height: var(--icon-size, 10rem);

  background: var(--envelope-icon);
  background-size: contain;

  @media ${to.tabletL} {
    display: none;
  }
`;

export default EnvelopeContainer;
