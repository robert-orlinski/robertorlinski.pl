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

type Props = {
  isVisible: boolean;
};

const Popup: FC<Props> = ({ isVisible }) => (
  <Container isVisible>
    <Inner>
      <ImageContainer>
        <Image src={Cover} alt="" placeholder="blur" objectFit="cover" layout="fill" />
      </ImageContainer>
      <Content>
        <h2>Jesteś programistą lub programistką?</h2>
        <Text>
          <P>
            W takim razie, może zainteresować Cię mój newsletter! Podsyłam tam{' '}
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
      <BiggerCloseButton />
    </Inner>
  </Container>
);

const Container = styled.div<Props>`
  display: flex;
  align-items: center;

  position: fixed;
  inset: 0;
  z-index: var(--extreme-z-index);

  background-color: var(--dark-gray-transparent-med);

  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms 400ms ease, visibility 1ms calc(500ms + 200ms) ease;

  ${({ isVisible }) =>
    isVisible &&
    css`
      visibility: visible;
      opacity: 1;
      transition: opacity 300ms 1ms ease, visibility 1ms ease;

      ${Inner} {
        transform: translateY(0);
        transition: transform 400ms 301ms ease;
      }
    `}
`;

const Inner = styled(Wrapper).attrs({ as: 'figure', size: 'big' })`
  display: flex;
  align-items: center;
  position: relative;

  background-color: #fff;

  transform: translateY(calc(-100vh - 500px));
  transition: transform 400ms ease;

  @media ${from.tabletL} {
    height: 80vh;
  }

  @media ${from.laptop} {
    height: 70vh;
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

const Content = styled.article`
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
