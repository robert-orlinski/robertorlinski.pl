import { useRouter } from 'next/router';

import VisuallyHiddenElement from 'Components/VisuallyHiddenElement';

import siteName from 'SiteName';

const HiddenMainPageTitle = () => {
  const router = useRouter();

  if (router.pathname !== '/') {
    return null;
  }

  return <VisuallyHiddenElement as="h1">{siteName}</VisuallyHiddenElement>;
};

export default HiddenMainPageTitle;
