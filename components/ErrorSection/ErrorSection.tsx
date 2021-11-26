import { FC } from 'react';

import NarrowTitle from 'Components/NarrowTitle';
import TextBlock from 'Components/TextBlock';
import Button from 'Components/Button';

type Props = {
  withButton?: {
    href: string;
    title: string;
  };
};

const ErrorSection: FC<Props> = ({ children, withButton: { href, title } = {} }) => (
  <TextBlock>
    <NarrowTitle level={2}>{children}</NarrowTitle>
    {href && title && <Button href={href}>{title}</Button>}
  </TextBlock>
);

export default ErrorSection;
