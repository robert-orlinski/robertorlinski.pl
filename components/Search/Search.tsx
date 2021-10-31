import { useRef } from 'react';
import styled from 'styled-components';

import useToggle from 'Hooks/useToggle';

import { ElementWithOpacity } from 'Components/ElementWithOpacity';
import { SearchContainer } from './SearchContainer';
import { MagnifierIcon } from './MagnifierIcon';
import { SearchBox } from './SearchBox';

import { to } from 'Devices';

export const Search = () => {
  const [isSearchVisible, toggleSearchVisibility] = useToggle(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const showSearchForm = () => {
    toggleSearchVisibility();

    setTimeout(() => searchInputRef.current && searchInputRef.current.focus(), 250);
  };

  return (
    <>
      <Button onClick={showSearchForm}>
        <MagnifierIcon />
      </Button>
      <SearchContainer isVisible={isSearchVisible} closeHandler={toggleSearchVisibility}>
        <SearchBox ref={searchInputRef} />
      </SearchContainer>
    </>
  );
};

const Button = styled(ElementWithOpacity).attrs({
  as: 'button',
})`
  display: flex;

  @media ${to.tabletL} {
    margin-right: 1.1rem;
  }
`;
