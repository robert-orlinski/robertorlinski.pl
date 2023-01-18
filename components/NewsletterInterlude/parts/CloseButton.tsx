import { FC } from 'react';
import styled from 'styled-components';

import CustomButton from './CustomButton';

import { Cross } from 'Components/icons';

const CloseButton: FC<JSX.IntrinsicElements['button']> = ({ className, onClick }) => (
  <Button {...{ className, onClick }} type="button">
    <CrossIcon />
  </Button>
);

const Button = styled(CustomButton).attrs({ size: 'custom' })`
  --button-size: 1.5rem;

  justify-content: center;
  position: absolute;

  width: var(--button-size);
  height: var(--button-size);

  top: calc(var(--button-size) * -0.5);
  right: calc(var(--button-size) * -0.5);

  &,
  &::after {
    border-radius: 50%;
  }
`;

const CrossIcon = styled(Cross)`
  width: calc(var(--button-size) * 0.4);
  height: calc(var(--button-size) * 0.4);
`;

export default CloseButton;
