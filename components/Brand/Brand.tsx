import styled from 'styled-components';

import ElementWithOpacity from 'Components/ElementWithOpacity';
import Logo from './Logo';

const Brand = () => (
  <BrandLink href="/">
    <Logo />
  </BrandLink>
);

const BrandLink = styled(ElementWithOpacity)`
  line-height: 0;
`;

export default Brand;
