import styled from 'styled-components';

import { ElementWithOpacity } from '../../Foundations/Clickable/ElementWithOpacity';
import { Logo } from './Logo';

const BrandLink = styled(ElementWithOpacity)`
  line-height: 0;
`;

export const Brand = () => (
  <BrandLink href="/">
    <Logo />
  </BrandLink>
);