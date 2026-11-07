import { ComponentPropsWithoutRef, FC } from 'react';
import NextLink from 'next/link';
import isPropValid from '@emotion/is-prop-valid';

type Props = ComponentPropsWithoutRef<typeof NextLink>;

// styled-components forwards every prop to a non-DOM `as` target, so styling props are dropped here
// the same way they are for a plain styled `a`.
const RouterLink: FC<Props> = ({ href, ...props }) => {
  const anchorProps = Object.fromEntries(Object.entries(props).filter(([key]) => isPropValid(key)));

  return <NextLink href={href} {...anchorProps} />;
};

export default RouterLink;
