import { FC } from 'react';
import styled from 'styled-components';

import { Icon } from '../../Icon';

import { to } from 'Devices';

type Props = {
  viewBox: string;
};

export const SocialIconBase: FC<Props> = ({ children, viewBox }) => (
  <SocialIcon viewBox={viewBox}>{children}</SocialIcon>
);

const SocialIcon = styled(Icon)`
  margin: 0 0.22rem;

  @media ${to.tabletL} {
    margin: 0 0.55rem 0 0;
    fill: #fff;
  }
`;
