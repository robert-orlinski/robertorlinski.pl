import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import useToggle from 'Hooks/useToggle';

import SearchContainer from './parts/SearchContainer';
import SearchInner from './parts/SearchInner';

import ElementWithOpacity from 'Components/ElementWithOpacity';
import SmallIcon from 'Components/SmallIcon';

import { Magnifier } from 'Components/icons';

import { to } from 'Devices';

const Search = () => {
  const [isSearchVisible, toggleSearchVisibility] = useToggle(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleEscapeKeyPress = ({ key }: KeyboardEvent) =>
    isSearchVisible && key === 'Escape' && toggleSearchVisibility();

  const showSearchForm = () => {
    toggleSearchVisibility();

    setTimeout(() => searchInputRef.current && searchInputRef.current.focus(), 250);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeKeyPress);

    return () => window.removeEventListener('keydown', handleEscapeKeyPress);
  });

  return (
    <>
      <Button onClick={showSearchForm} aria-label="Otwórz wyszukiwarkę">
        <SmallIcon as={Magnifier} />
      </Button>
      <SearchContainer isVisible={isSearchVisible} closeHandler={toggleSearchVisibility}>
        <SearchInner ref={searchInputRef} />
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

export default Search;
