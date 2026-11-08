import styled from 'styled-components';

import ElementWithOpacity from 'Components/ElementWithOpacity';
import RouterLink from 'Components/RouterLink';
import Logo from './parts/Logo';

const Brand = () => (
  <BrandLink as={RouterLink} href="/">
    <Logo />
  </BrandLink>
);

const BrandLink = styled(ElementWithOpacity)`
  line-height: 0;
`;

export default Brand;
