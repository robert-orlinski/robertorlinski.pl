import { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Video from 'react-lite-youtube-embed';

import DarkBox from 'Components/DarkBox';
import Link from 'Components/Link';
import P from 'Components/P';

type Props = {
  id: string;
  title: string;
};

const VideoInterlude: FC<Props> = ({ id, title }) => (
  <DarkBox>
    <header>
      <Title>Psst! Jeśli wolisz oglądać, niż czytać, to ten artykuł ma też wersję wideo!</Title>
    </header>
    <VideoStyles />
    <Video noCookie={true} poster="maxresdefault" {...{ id, title }} />
    <Footer>
      <P>
        Możesz obejrzeć go też{' '}
        <Link href={`https://www.youtube.com/watch?v=${id}`} isUnderlineVisible>
          bezpośrednio na YouTube
        </Link>
        .
        <br />A jeśli tylko chcesz być na bieżąco, to pod tym linkiem{' '}
        <Link
          href="https://youtube.com/channel/UC_qgM2UztycBZGQLNaGs9Jg?sub_confirmation=1"
          isUnderlineVisible
        >
          zasubskrybujesz
        </Link>{' '}
        mój kanał!
      </P>
    </Footer>
  </DarkBox>
);

const Title = styled.h2`
  font-size: 1.5rem;
`;

const Footer = styled.footer`
  --underline-color: #fff;
`;

const VideoStyles = createGlobalStyle`
  .yt-lite {
    cursor: pointer;

    margin: 2rem 0 1.5rem;

    background-size: cover;

    &::after {
      display: block;
      content: '';

      padding-bottom: 56.3%;
    }

    & > iframe {
      position: absolute;

      width: 100%;
      height: 100%;

      top: 0;
      left: 0;
    }

    & > .lty-playbtn {
      width: 70px;
      height: 46px;

      z-index: 1;
      opacity: 0.8;
      border-radius: 14%;
      background-color: #212121;

      transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);

      &,
      &::before {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate3d(-50%, -50%, 0);
      }

      &::before {
        content: '';

        border-width: 11px 0 11px 19px;
        border-color: transparent transparent transparent #fff;
        border-style: solid;
      }
    }

    &:hover > .lty-playbtn {
      background-color: red;
      opacity: 1;
    }

    &.lyt-activated {
      cursor: unset;

      &::before,
      & > .lty-playbtn {
        opacity: 0;
        pointer-events: none;
      }
    }
  }
`;

export default VideoInterlude;
