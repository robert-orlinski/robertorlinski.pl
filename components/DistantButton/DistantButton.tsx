import { FC } from 'react';
import styled from 'styled-components';

import { CenteredText } from 'Components/CenteredText';
import { Button } from 'Components/Button';

import { Button as ButtonType } from 'Types/links';

export const DistantButton: FC<ButtonType> = ({ children, href, type, onClick }) => (
  <DistantButtonContainer>
    <Button {...{ href, type, onClick }}>{children}</Button>
  </DistantButtonContainer>
);

const DistantButtonContainer = styled(CenteredText)`
  padding-bottom: calc(var(--section-gap) * 0.6);
`;
