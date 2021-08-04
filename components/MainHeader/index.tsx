import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { WideWrapper } from '../Foundations/Wrapper';
import { Nav } from '../TopNav';
import { Title } from '../SectionTitle';

import { to } from '../../helpers/styles/devices';

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

interface Props {
  title: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
}

export const MainBanner: FC<Props> = ({ title, image: { src, alt } }) => (
  <header>
    <Nav />
    <Banner>
      <MainTitle>{title}</MainTitle>
      <ImageContainer>
        <StyledImage src={src} alt={alt} />
      </ImageContainer>
    </Banner>
  </header>
);
