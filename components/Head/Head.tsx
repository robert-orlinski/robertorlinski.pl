import { FC } from 'react';
import HeadTag from 'next/head';

type Props = {
  title: string;
  description: string;
};

export const Head: FC<Props> = ({ title, description }) => (
  <HeadTag>
    <title>{title}</title>
    <meta name="description" content={description} />
  </HeadTag>
);
