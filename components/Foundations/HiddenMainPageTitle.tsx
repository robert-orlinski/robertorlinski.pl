import { useRouter } from 'next/router';

import { VisuallyHiddenElement } from './VisuallyHiddenElement';

export const HiddenMainPageTitle = () => {
  const router = useRouter();

  if (router.pathname !== '/') {
    return null;
  }

  return <VisuallyHiddenElement as="h1">Robert Orliński</VisuallyHiddenElement>;
};
