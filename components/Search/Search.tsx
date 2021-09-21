import styled from 'styled-components';

import { ElementWithOpacity } from 'Components/ElementWithOpacity';
import { SearchForm } from './Form';
import { MagnifierIcon } from './MagnifierIcon';

export const Search = () => (
  <>
    <Button>
      <MagnifierIcon />
    </Button>
    <SearchForm />
  </>
);

const Button = styled(ElementWithOpacity).attrs({
  as: 'button',
})`
  display: flex;
  border: none;
`;
