import { FC } from 'react';
import styled from 'styled-components';

import ElementWithOpacity from 'Components/ElementWithOpacity';
import Separator from 'Components/Separator';

import { getPrimaryTopic, getTopicLink } from 'Helpers/data/topics';
import getISOStringFromPublicationDate from 'Helpers/functions/getISOStringFromPublicationDate';

import { TopicName } from 'Types/data';

type Props = {
  topics: TopicName[];
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
          <time dateTime={getISOStringFromPublicationDate(date)}>{date}</time>
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
