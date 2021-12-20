import { FC } from 'react';

import DarkBox from 'Components/DarkBox';
import Button from 'Components/Button';
import H2 from 'Components/H2';

type Props = {
  togglePopupVisibility: () => void;
};

const Invite: FC<Props> = ({ togglePopupVisibility }) => (
  <DarkBox as="header">
    <H2>Interesujesz się front-endem lub programowaniem ogólnie?</H2>
    <Button onClick={togglePopupVisibility} tone="light">
      Sprawdź mój newsletter!
    </Button>
  </DarkBox>
);

export default Invite;
