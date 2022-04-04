import { FC } from 'react';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';

import Wrapper from 'Components/Wrapper';
import Nav from 'Components/Nav';
import SectionTitle from 'Components/SectionTitle';

import { from, to } from 'Devices';

type WrapperProps = {
  withAdditionalSpaceOnPhone?: boolean;
};

type Props = {
  title: string;
  image: {
    src: StaticImageData | string;
    alt: string;
  };
} & WrapperProps;

const MainBanner: FC<Props> = ({ title, image: { src, alt }, withAdditionalSpaceOnPhone }) => (
  <header>
    <Nav />
    <Banner {...{ withAdditionalSpaceOnPhone }}>
      <MainTitle>{title}</MainTitle>
      <ImageContainer>
        <Image {...{ src, alt }} width="880" height="560" objectFit="cover" priority />
      </ImageContainer>
    </Banner>
  </header>
);

const Banner = styled(Wrapper)<WrapperProps>`
  display: flex;
  justify-content: flex-end;

  position: relative;

  margin-bottom: var(--section-gap);

  @media ${to.phoneL} {
    flex-direction: column-reverse;

    margin-bottom: ${({ withAdditionalSpaceOnPhone }) =>
      withAdditionalSpaceOnPhone
        ? 'calc(var(--section-gap) * 1.5)'
        : 'calc(var(--section-gap) * 0.5)'};
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

export default MainBanner;
