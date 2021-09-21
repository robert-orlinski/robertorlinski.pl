import { useRouter } from 'next/router';

import { VisuallyHiddenElement } from 'Components/VisuallyHiddenElement';

import { siteName } from 'SiteName';

export const HiddenMainPageTitle = () => {
  const router = useRouter();

  if (router.pathname !== '/') {
    return null;
  }

  return <VisuallyHiddenElement as="h1">{siteName}</VisuallyHiddenElement>;
};
