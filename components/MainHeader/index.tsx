import styled from 'styled-components';
import Image from 'next/image';

import { WideWrapper } from '../Foundations/Wrapper';
import { Nav } from '../TopNav';
import { Title } from '../SectionTitle';

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

const MainTitle = styled(Title)`
  position: absolute;
  z-index: 9;
  left: 0;
  bottom: 4rem;

  padding: 0.5rem 2rem 0.5rem 0;

  white-space: pre;

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
      <MainTitle>Cześć, jestem Robert</MainTitle>
      <ImageContainer>
        <StyledImage
          src={bannerImage}
          alt={`Robert zamierzający uderzyć ogromny, pluszowy przycisk "enter", który jednocześnie można podłączyć na USB i tym samym zatwierdzać rzeczy z potężnym impetem.`}
        />
      </ImageContainer>
    </Banner>
  </header>
);
