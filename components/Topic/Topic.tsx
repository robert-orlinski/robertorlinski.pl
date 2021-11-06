import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { getTopicLink } from 'Helpers/data/topics';

import { Topic as TopicType } from 'Types/data';
import { Overlay } from 'Components/Overlay';
import { LinkContainer } from 'Components/LinkContainer';

export const Topic: FC<TopicType> = ({ name, slug, featuredImage }) => {
  const link = getTopicLink(slug);

  return (
    <Container>
      <Image src={featuredImage} alt="" objectFit="cover" width="550" height="330" />
      <LinkContainer href={link}>
        <Name as="a">{name}</Name>
      </LinkContainer>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  position: relative;
`;

const Name = styled(Overlay)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.5rem;

  color: #fff;
  font-size: 1.5rem;
  font-family: var(--serif);
  text-align: center;

  background-color: var(--dark-gray-transparent-med);
  transition: background-color var(--short-transition-duration);

  &:hover {
    background-color: var(--dark-gray);
  }
`;
