import { FC, Fragment } from 'react';

import { Link } from 'Components/Link';
import { P } from 'Components/P';

import { Text } from 'Types/data';

type Props = {
  text: Array<Text>;
};

export const TextWithLinks: FC<Props> = ({ text }) => (
  <P>
    {text.map(({ type, text, href }, i) => (
      <Fragment key={`text-element-${i}`}>
        {type === 'text' ? text : <Link href={href}>{text}</Link>}
      </Fragment>
    ))}
  </P>
);
