import { FC, Fragment } from 'react';

import { Link } from '../Text/Link';
import { P } from '../Text/Paragraph';

import { ArrayOfTexts } from '../../types/data';

interface Props {
  text: ArrayOfTexts;
}

export const TextWithLinks: FC<Props> = ({ text }) => (
  <P>
    {text.map(({ type, text, href }, i) => (
      <Fragment key={`text-element-${i}`}>
        {type === 'text' ? (
          text
        ) : type === 'internal-link' ? (
          <Link href={href} withLineVisible>
            {text}
          </Link>
        ) : (
          <Link href={href} external withLineVisible>
            {text}
          </Link>
        )}
      </Fragment>
    ))}
  </P>
);
