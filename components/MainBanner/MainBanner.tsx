import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import Wrapper from 'Components/Wrapper';
import Nav from 'Components/Nav';
import SectionTitle from 'Components/SectionTitle';

import { from, to } from 'Devices';

type Props = {
  title: string;
  image: {
    src: StaticImageData | string;
    alt: string;
  };
  withFixedImage?: boolean;
};

const MainBanner: FC<Props> = ({ title, image: { src, alt }, withFixedImage }) => (
  <header>
    <Nav />
    <Banner>
      <MainTitle>{title}</MainTitle>
      {withFixedImage || typeof src === 'string' ? (
        <FixedImageContainer>
          <Image {...{ src, alt }} width="880" height="560" objectFit="cover" />
        </FixedImageContainer>
      ) : (
        <ImageContainer>
          <Image {...{ src, alt }} />
        </ImageContainer>
      )}
    </Banner>
  </header>
);

const Banner = styled(Wrapper)`
  display: flex;
  justify-content: flex-end;

  position: relative;

  margin-bottom: var(--section-gap);

  @media ${to.phoneL} {
    flex-direction: column-reverse;

    margin-bottom: calc(var(--section-gap) * 0.5);
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

    padding: 0.5rem 1.8rem 0.5rem 0;

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

const FixedImageContainer = styled(ImageContainer)`
  height: clamp(400px, 40vw, 560px);

  @media ${to.phoneL} {
    height: 60vw;
  }
`;

export default MainBanner;
