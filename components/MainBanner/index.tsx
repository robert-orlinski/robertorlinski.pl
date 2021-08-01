import styled from 'styled-components';
import Image from 'next/image';

import { WideWrapper } from '../Foundations/Wrapper';
import { Nav } from '../Nav';

import { to } from '../../helpers/styles/devices';

import bannerImage from './banner.jpg';

const Banner = styled(WideWrapper)`
  display: flex;
  justify-content: flex-end;

  position: relative;

  @media ${to.tabletL} {
    flex-direction: column-reverse;
  }
`;

const Title = styled.h1`
  position: absolute;
  z-index: 9;
  left: 0;
  bottom: 4rem;

  padding: 0.5rem 2rem 0.5rem 0;

  white-space: pre;
  font-size: 4rem;

  background-color: #fff;
`;

const ImageContainer = styled.figure`
  width: 65%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const MainBanner = () => (
  <header>
    <Nav />
    <Banner>
      <Title>Cześć, jestem Robert,</Title>
      <ImageContainer>
        <StyledImage
          src={bannerImage}
          alt={`Robert zamierzający uderzyć ogromny, pluszowy przycisk "enter", który jednocześnie można podłączyć na USB i tym samym zatwierdzać rzeczy z potężnym impetem.`}
        />
      </ImageContainer>
    </Banner>
  </header>
);
