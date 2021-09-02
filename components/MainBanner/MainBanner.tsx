import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { WideWrapper } from '../WideWrapper';
import { Nav } from '../Nav';
import { SectionTitle } from '../SectionTitle';

import { to } from 'Devices';

type Props = {
  title: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

export const MainBanner: FC<Props> = ({ title, image }) => (
  <header>
    <Nav />
    <Banner>
      <MainTitle>{title}</MainTitle>
      <ImageContainer>
        <StyledImage {...image} />
      </ImageContainer>
    </Banner>
  </header>
);

const Banner = styled(WideWrapper)`
  display: flex;
  justify-content: flex-end;

  position: relative;

  margin-bottom: 4rem;

  @media ${to.tabletL} {
    flex-direction: column-reverse;
  }
`;

const MainTitle = styled(SectionTitle)`
  position: absolute;
  z-index: 9;
  left: 0;
  bottom: 1rem;

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
