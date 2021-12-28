import { FC } from 'react';
import styled from 'styled-components';

import ElementWithOpacity from 'Components/ElementWithOpacity';
import Separator from 'Components/Separator';

import { getPrimaryTopic, getTopicLink } from 'Helpers/data/topics';

type Props = {
  topics: string[];
  readingTime?: string;
  date?: string;
};

const PostMeta: FC<Props> = ({ topics, readingTime, date }) => {
  const { name: topicName, slug } = getPrimaryTopic(topics);
  const topicLink = getTopicLink(slug);

  return (
    <Meta>
      <Topic href={topicLink}>{topicName}</Topic>
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

export default PostMeta;
