import styled from 'styled-components';

import { ElementWithOpacity } from '../Foundations/Clickable/ElementWithOpacity';
import { SearchForm } from './Form';
import { MagnifierIcon } from './MagnifierIcon';

const Button = styled(ElementWithOpacity)`
  display: flex;
  border: none;
`;

export const Search = () => (
  <>
    <Button as="button">
      <MagnifierIcon />
    </Button>
    <SearchForm />
  </>
);
