import styled from 'styled-components';

import ElementWithOpacity from 'Components/ElementWithOpacity';
import LinkContainer from 'Components/LinkContainer';
import SmallIcon from 'Components/SmallIcon';

import { Facebook, LinkedIn, YouTube, Instagram, Twitter, GitHub, RSS } from 'Components/icons';

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
    name: 'YouTube',
    href: '/youtube',
    component: <SocialIcon as={YouTube} />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/robert-orlinski',
    component: <SocialIcon as={GitHub} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/robert-orlinski',
    component: <SocialIcon as={LinkedIn} />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/robert.orlinski',
    component: <SocialIcon as={Instagram} />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/robert_orlinski',
    component: <SocialIcon as={Twitter} />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/robertorlinski.blog',
    component: <SocialIcon as={Facebook} />,
  },
  {
    name: 'RSS',
    href: '/rss.xml',
    component: <SocialIcon as={RSS} />,
  },
];

export default SocialMedia;
