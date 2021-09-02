import { FC } from 'react';
import styled from 'styled-components';

import { to } from 'Devices';

export const StyledParagraph = styled.p`
  padding-bottom: 1.5rem;

  @media ${to.phoneL} {
    padding-bottom: 1.2rem;
  }
`;

export const P: FC<any> = (props) => {
  const { children } = props;

  if (typeof children !== 'string' && children.type === 'img') {
    return <>{children}</>;
  }

  return <StyledParagraph {...props} />;
};
