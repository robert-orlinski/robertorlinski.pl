import { FC } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';

import P from 'Components/P';
import Link from 'Components/Link';
import Wrapper from 'Components/Wrapper';
import NewsletterForm from 'Components/NewsletterForm';

import CloseButton from './CloseButton';

import { from, to } from 'Devices';

import Cover from 'Images/banners/me-in-lavender.jpg';

type ContainerProps = {
  isVisible: boolean;
};

type Props = {
  togglePopupVisibility: () => void;
} & ContainerProps;

const Popup: FC<Props> = ({ isVisible, togglePopupVisibility }) => (
  <Container {...{ isVisible }}>
    <Inner>
      <ImageContainer>
        <Image
          src={Cover}
          alt="Robert siedzący na polu lawendy - jak zawsze z komputerem."
          placeholder="blur"
          objectFit="cover"
          layout="fill"
        />
      </ImageContainer>
      <Content>
        <Text>
          <P>
            Podsyłam tam
            <strong>
              wartościowe materiały ze świata front-endu, produktywności, programowania ogólnie,
              oraz tego bloga.
            </strong>
          </P>
          <P>
            I swoją drogą - jeśli przed zapisem chcesz zobaczyć przykładowe wydanie newslettera, to
            znajdziesz je na{' '}
            <Link href="/newsletter#przykladowe-wydanie" isUnderlineVisible>
              stronie poświęconej newsletterowi ogólnie
            </Link>
            .
          </P>
        </Text>
        <NewsletterForm />
      </Content>
      <BiggerCloseButton onClick={togglePopupVisibility} />
    </Inner>
  </Container>
);

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  position: fixed;
  inset: 0;
  z-index: var(--extreme-z-index);

  background-color: var(--dark-gray-transparent-med);

  visibility: hidden;
  opacity: 0;
  transition: opacity var(--short-transition-duration) var(--short-transition-duration) ease,
    visibility 1ms var(--medium-transition-duration) ease;

  ${({ isVisible }) =>
    isVisible &&
    css`
      visibility: visible;
      opacity: 1;
      transition: opacity var(--short-transition-duration) 1ms ease, visibility 1ms ease;

      ${Inner} {
        transform: translateY(0);
        transition: transform var(--short-transition-duration) var(--short-transition-duration) ease;
      }
    `}
`;

const Inner = styled(Wrapper).attrs({ as: 'article', size: 'big' })`
  display: flex;
  align-items: center;
  position: relative;

  height: 35.5rem;

  background-color: #fff;

  transform: translateY(calc(-100vh - 500px));
  transition: transform 400ms ease;

  @media ${from.tabletL} {
    max-height: 80vh;
  }

  @media ${from.laptop} {
    max-height: 80vh;
  }
`;

const cutInHalfOnBiggerDevices = css`
  @media ${from.tabletL} {
    height: 100%;

    width: 50%;
    flex-shrink: 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  ${cutInHalfOnBiggerDevices}

  @media ${to.tabletL} {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2rem;
  overflow: auto;

  ${cutInHalfOnBiggerDevices}

  @media ${to.tablet} {
    max-height: calc(100vh - 60px);
  }
`;

const Text = styled.div`
  padding: 1.6rem 0 2rem;
`;

const BiggerCloseButton = styled(CloseButton)`
  --button-size: 2.5rem;
`;

export default Popup;
