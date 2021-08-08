import styled from 'styled-components';

import { LinkContainer } from '../Foundations/Clickable/LinkContainer';
import { ElementWithOpacity } from '../Foundations/Clickable/ElementWithOpacity';

import { FacebookIcon } from './Icons/Facebook';
import { YouTubeIcon } from './Icons/YouTube';
import { InstagramIcon } from './Icons/Instagram';
import { GitHubIcon } from './Icons/GitHub';

const icons = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/robertorlinski.blog',
    component: <FacebookIcon />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC_qgM2UztycBZGQLNaGs9Jg',
    component: <YouTubeIcon />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/robert.orlinski',
    component: <InstagramIcon />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/robert-orlinski',
    component: <GitHubIcon />,
  },
];

const IconsContainer = styled.ul`
  display: flex;
  align-items: center;
`;

export const SocialMedia = () => (
  <IconsContainer>
    {icons.map(({ name, href, component }) => (
      <li key={`icon-${name}`}>
        <LinkContainer href={href}>
          <ElementWithOpacity>{component}</ElementWithOpacity>
        </LinkContainer>
      </li>
    ))}
  </IconsContainer>
);
