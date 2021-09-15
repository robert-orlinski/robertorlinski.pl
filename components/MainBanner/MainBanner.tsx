import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { Wrapper } from '../Wrapper';
import { Nav } from '../Nav';
import { SectionTitle } from '../SectionTitle';

import { from, to } from 'Devices';

type Props = {
  title: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

export const MainBanner: FC<Props> = ({ title, image: { src, alt } }) => (
  <header>
    <Nav />
    <Banner>
      <MainTitle>{title}</MainTitle>
      <ImageContainer>
        <Image {...{ src, alt }} />
      </ImageContainer>
    </Banner>
  </header>
);

const Banner = styled(Wrapper)`
  display: flex;
  justify-content: flex-end;

  position: relative;

  margin-bottom: var(--section-space);

  @media ${to.phoneL} {
    flex-direction: column-reverse;

    margin-bottom: calc(var(--section-space) * 0.5);
  }
`;

const MainTitle = styled(SectionTitle)`
  min-width: 42%;
  padding: 0.8rem 0 0 0;
  margin: 0;

  @media ${from.phoneL} {
    position: absolute;
    z-index: var(--min-z-index);
    left: 0;
    bottom: max(2.5rem, 1.2em);

    padding: 0.5rem 2rem 0.5rem 0;

    white-space: pre;

    background-color: #fff;
  }
`;

const ImageContainer = styled.figure`
  @media ${from.phoneL} {
    width: 88%;
  }

  @media ${from.tabletL} {
    width: 65%;
  }
`;
