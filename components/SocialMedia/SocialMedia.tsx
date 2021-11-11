import styled from 'styled-components';

import ElementWithOpacity from 'Components/ElementWithOpacity';
import LinkContainer from 'Components/LinkContainer';
import SmallIcon from 'Components/SmallIcon';

import { Facebook, YouTube, Instagram, GitHub } from 'Components/icons';

import { to } from 'Devices';

const SocialMedia = () => (
  <IconsContainer>
    {icons.map(({ name, href, component }) => (
      <li key={`icon-${name}`}>
        <LinkContainer href={href}>
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
    margin: 0 0.55rem 0 0;
    fill: #fff;
  }
`;

const icons = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/robertorlinski.blog',
    component: <SocialIcon as={Facebook} />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC_qgM2UztycBZGQLNaGs9Jg',
    component: <SocialIcon as={YouTube} />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/robert.orlinski',
    component: <SocialIcon as={Instagram} />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/robert-orlinski',
    component: <SocialIcon as={GitHub} />,
  },
];

export default SocialMedia;
