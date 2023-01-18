import { FC } from 'react';

import CenteredText from 'Components/CenteredText';
import DistantButton from 'Components/DistantButton/DistantButton';

import { ButtonProps } from 'Components/Button';

const DistantButtonCentered: FC<ButtonProps> = (props) => (
  <CenteredText>
    <DistantButton {...props}></DistantButton>
  </CenteredText>
);

export default DistantButtonCentered;
