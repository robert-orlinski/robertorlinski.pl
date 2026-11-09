import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import SearchContainer from './parts/SearchContainer';
import SearchInner from './parts/SearchInner';

import ElementWithOpacity from 'Components/ElementWithOpacity';
import SmallIcon from 'Components/SmallIcon';

import { Magnifier } from 'Components/icons';

import { to } from 'Devices';
import { useRouter } from 'next/router';

const Search = () => {
  const { query } = useRouter();

  const [isSearchVisible, setSearchVisibility] = useState(false);
  const openingButtonRef = useRef<HTMLAnchorElement>(null);
  const wasSearchVisible = useRef(false);

  useEffect(() => {
    if (wasSearchVisible.current && !isSearchVisible) {
      openingButtonRef.current?.focus();
    }

    wasSearchVisible.current = isSearchVisible;
  }, [isSearchVisible]);

  useEffect(() => {
    const handleEscapeKeyPress = ({ key }: KeyboardEvent) =>
      isSearchVisible && key === 'Escape' && setSearchVisibility(false);

    window.addEventListener('keydown', handleEscapeKeyPress);

    return () => window.removeEventListener('keydown', handleEscapeKeyPress);
  });

  useEffect(() => {
    // If it's dynamic route
    if (Object.keys(query).length > 0) {
      setSearchVisibility(false);
    }
  }, [query]);

  return (
    <>
      <Button
        ref={openingButtonRef}
        onClick={() => setSearchVisibility(true)}
        aria-label="Otwórz wyszukiwarkę"
      >
        <SmallIcon as={Magnifier} />
      </Button>
      <SearchContainer isVisible={isSearchVisible} closeHandler={() => setSearchVisibility(false)}>
        <SearchInner isVisible={isSearchVisible} />
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
