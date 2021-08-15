import { FC, Fragment } from 'react';

import { Link } from '../Link';
import { P } from '../P';

import { Text } from 'Types/data';

type Props = {
  text: Array<Text>;
};

export const TextWithLinks: FC<Props> = ({ text }) => (
  <P>
    {text.map(({ type, text, href }, i) => (
      <Fragment key={`text-element-${i}`}>
        {type === 'text' ? (
          text
        ) : (
          <Link href={href} withUnderlineVisible>
            {text}
          </Link>
        )}
      </Fragment>
    ))}
  </P>
);
