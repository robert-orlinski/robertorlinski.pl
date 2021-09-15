import { FC } from 'react';
import styled from 'styled-components';

import { ButtonContainer } from 'Components/ButtonContainer';
import { Button } from 'Components/Button';

import { Button as ButtonType } from 'Types/links';

export const DistantButton: FC<ButtonType> = ({ children, href, type, onClick }) => (
  <DistantButtonContainer>
    <Button {...{ href, type, onClick }}>{children}</Button>
  </DistantButtonContainer>
);

const DistantButtonContainer = styled(ButtonContainer).attrs({
  as: 'div',
})`
  padding-bottom: calc(var(--section-space) * 0.6);
`;
