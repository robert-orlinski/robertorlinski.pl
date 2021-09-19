import { FC } from 'react';
import styled from 'styled-components';

import { ElementWithOpacity } from '../ElementWithOpacity';
import { Separator } from 'components/Separator';

import { getTopicLink } from 'DataHelpers/topics';

type Props = {
  topic: string;
  readingTime?: string;
  date?: string;
};

export const PostMeta: FC<Props> = ({ topic, readingTime, date }) => {
  const topicLink = getTopicLink(topic);

  return (
    <Meta>
      <Topic href={topicLink}>{topic}</Topic>
      {date && (
        <>
          <Separator />
          <span>{date}</span>
        </>
      )}
      {readingTime && (
        <>
          <Separator />
          <span>{readingTime}</span>
        </>
      )}
    </Meta>
  );
};

const Meta = styled.span`
  display: inline-flex;
  align-items: center;

  margin: 0.5rem 0 0.35rem;
`;

const Topic = styled(ElementWithOpacity)`
  z-index: var(--max-z-index);
`;
