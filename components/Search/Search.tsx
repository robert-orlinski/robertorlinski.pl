import styled from 'styled-components';

import { ElementWithOpacity } from '../ElementWithOpacity';
import { SearchForm } from './Form';
import { MagnifierIcon } from './MagnifierIcon';

export const Search = () => (
  <>
    <Button as="button">
      <MagnifierIcon />
    </Button>
    <SearchForm />
  </>
);

const Button = styled(ElementWithOpacity)`
  display: flex;
  border: none;
`;
