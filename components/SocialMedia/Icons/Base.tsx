import { FC } from 'react';
import styled from 'styled-components';

import { Icon } from '../../Foundations/Icon';

import { to } from '../../../helpers/styles/devices';

interface Props {
  viewBox: string;
}

const SocialIcon = styled(Icon)`
  margin: 0 5px;

  @media ${to.tabletL} {
    margin: 0 10px 0 0;
    fill: #fff;
  }
`;

export const SocialIconBase: FC<Props> = ({ children, viewBox }) => (
  <SocialIcon viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
    {children}
  </SocialIcon>
);
