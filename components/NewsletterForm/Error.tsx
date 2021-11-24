import { FC } from 'react';
import styled from 'styled-components';

import { ErrorMessage } from 'Types/newsletter';

type Props = {
  errorMessage: ErrorMessage;
};

export const Error: FC<Props> = ({ errorMessage }) => {
  if (!errorMessage) return null;

  return <Text role="alert">{errorMessage}</Text>;
};

const Text = styled.p`
  padding-top: 1rem;
  color: var(--error-red);
`;
