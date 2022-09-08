import styled from 'styled-components';

import ElementWithOpacity from 'Components/ElementWithOpacity';
import LinkContainer from 'Components/LinkContainer';
import Logo from './parts/Logo';

const Brand = () => (
  <LinkContainer href="/">
    <BrandLink>
      <Logo />
    </BrandLink>
  </LinkContainer>
);

const BrandLink = styled(ElementWithOpacity)`
  line-height: 0;
`;

export default Brand;
