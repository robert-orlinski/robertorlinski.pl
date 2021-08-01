import styled from 'styled-components';
import Image from 'next/image';

import { WideWrapper } from '../../Foundations/Wrapper';
import { Title } from '../../Text/MainTitle';
import { P } from '../../Text/Paragraph';
import { Link } from '../../Text/Link';
import { Button } from '../../Button';
import { Nav } from '../../Nav';

import { from, to } from '../../../helpers/styles/devices';
import { mySummary } from '../../../helpers/routes/mySummary';

import bannerImage from './banner.jpg';

const Banner = styled(WideWrapper)`
  display: flex;

  @media ${to.tabletL} {
    flex-direction: column-reverse;
  }
`;

const Content = styled.article`
  flex-shrink: 0;
  padding: 70px 60px;
  background-color: var(--blue-gray);

  @media ${from.tabletL} {
    width: 40%;
  }

  @media ${to.tabletL} {
    padding: 50px;
  }

  @media ${to.phoneL} {
    padding: 30px;
  }
`;

const ButtonContainer = styled.footer`
  margin-top: 0.5rem;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const Header = () => (
  <header>
    <Nav />
    <Banner>
      <Content>
        <Title>Cześć, jestem Robert,</Title>
        <P>
          przez parę ostatnich lat pracowałem z WordPressem - aż do momentu, w którym okazało się,
          że niewiele może mnie w nim już zaskoczyć - dlatego niedawno przerzuciłem się na front-end
          stricte.
        </P>
        <P>
          {mySummary.map(({ type, text, href }) =>
            type === 'text' ? (
              text
            ) : type === 'internal-link' ? (
              <Link href={href} withLineVisible>
                {text}
              </Link>
            ) : (
              <Link href={href} external withLineVisible>
                {text}
              </Link>
            ),
          )}
        </P>
        <ButtonContainer>
          <Button href="/tematy">No ok, ale ja chcę coś przeczytać!</Button>
        </ButtonContainer>
      </Content>
      <StyledImage
        src={bannerImage}
        alt={`Robert zamierzający uderzyć ogromny, pluszowy przycisk "enter", który jednocześnie można podłączyć na USB i tym samym zatwierdzać rzeczy z potężnym impetem.`}
      />
    </Banner>
  </header>
);
