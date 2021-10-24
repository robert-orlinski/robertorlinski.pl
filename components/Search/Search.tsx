import { useRef } from 'react';
import styled from 'styled-components';

import { useToggle } from 'Hooks/useToggle';

import { ElementWithOpacity } from 'Components/ElementWithOpacity';
import { SearchContainer } from './SearchContainer';
import { MagnifierIcon } from './MagnifierIcon';
import { SearchInner } from './SearchInner';

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
      <SearchContainer isVisible={isSearchVisible} closeHandler={toggleSearchVisibility}>
        <SearchInner />
      </SearchContainer>
    </>
  );
};

const Button = styled(ElementWithOpacity).attrs({
  as: 'button',
})`
  display: flex;
`;
