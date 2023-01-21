import { FC } from 'react';
import styled from 'styled-components';

import Row from 'Components/Row';
import Topic from 'Components/Topic';

import { TopicsGroup as GroupType } from 'Types/data';

const TopicsGroup: FC<GroupType> = ({ groupName, topics }) => (
  <Group size="medium">
    <div>
      <Name>{groupName}</Name>
    </div>
    <Topics>
      {topics &&
        topics
          .filter((topic) => topic.slug !== 'inne')
          .map(({ name, slug, featuredImage }) => (
            <Topic key={name} name={name} slug={slug} featuredImage={featuredImage} />
          ))}
    </Topics>
  </Group>
);

const Group = styled(Row)`
  --columns: 1fr 1.8fr;
`;

const Topics = styled.ul`
  display: grid;
  grid-row-gap: 2rem;
  grid-auto-rows: 18.5rem;
`;

const Name = styled.h2`
  position: sticky;
  top: calc(var(--nav-height) + 2rem);
  left: 0;
`;

export default TopicsGroup;
