import styled from 'styled-components';

import ElementWithOpacity from 'Components/ElementWithOpacity';
import LinkContainer from 'Components/LinkContainer';
import SmallIcon from 'Components/SmallIcon';

import { LinkedIn, X, GitHub, RSS } from 'Components/icons';

import { to } from 'Devices';

const SocialMedia = () => (
  <IconsContainer>
    {icons.map(({ name, href, component }) => (
      <li key={`icon-${name}`}>
        <LinkContainer {...{ href }}>
          <ElementWithOpacity target="_blank">{component}</ElementWithOpacity>
        </LinkContainer>
      </li>
    ))}
  </IconsContainer>
);

const IconsContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled(SmallIcon)`
  margin: 0 0.22rem;

  @media ${to.tabletL} {
    margin: 0 0.8rem 0 0;
    fill: #fff;
  }
`;

const icons = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/robert-orlinski',
    component: <SocialIcon as={LinkedIn} />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/robert-orlinski',
    component: <SocialIcon as={GitHub} />,
  },
  {
    name: 'X',
    href: 'https://x.com/robert_orlinski',
    component: <SocialIcon as={X} />,
  },
  {
    name: 'RSS',
    href: '/rss.xml',
    component: <SocialIcon as={RSS} />,
  },
];

export default SocialMedia;
