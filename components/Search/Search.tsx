import { useRef } from 'react';
import styled from 'styled-components';

import { useToggle } from 'Hooks/useToggle';

import { ElementWithOpacity } from 'Components/ElementWithOpacity';
import { FormContainer } from './FormContainer';
import { SearchForm } from './SearchForm';
import { MagnifierIcon } from './MagnifierIcon';

export const Search = () => {
  const [isSearchVisible, toggleSearchVisibility] = useToggle(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const showSearchForm = () => {
    toggleSearchVisibility();

    // rewrite to setState isFocused

    setTimeout(() => searchInputRef.current && searchInputRef.current.focus(), 250);
  };

  return (
    <>
      <Button onClick={showSearchForm}>
        <MagnifierIcon />
      </Button>
      <FormContainer isVisible={isSearchVisible} closeHandler={toggleSearchVisibility}>
        <SearchForm ref={searchInputRef} />
      </FormContainer>
    </>
  );
};

const Button = styled(ElementWithOpacity).attrs({
  as: 'button',
})`
  display: flex;
`;
