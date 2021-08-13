import styled from 'styled-components';

import { ElementWithOpacity } from '../ElementWithOpacity';
import { Logo } from './Logo';

export const Brand = () => (
  <BrandLink href="/">
    <Logo />
  </BrandLink>
);

const BrandLink = styled(ElementWithOpacity)`
  line-height: 0;
`;
