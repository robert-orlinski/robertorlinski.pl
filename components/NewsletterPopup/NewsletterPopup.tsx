import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import Invite from './parts/Invite';
import Popup from './parts/Popup';

import useToggle from 'Hooks/useToggle';

const NewsletterPopup = () => {
  const [isPopupVisible, togglePopupVisibility] = useToggle(false);
  const [isInviteVisible, toggleInviteVisibility] = useToggle(true);

  const [cookies, setCookie] = useCookies();

  console.log(cookies['posts-visited']);

  useEffect(() => {
    let postsVisitedCount = Number(cookies['posts-visited']) || 0;
    // check url

    return () => {
      setCookie('posts-visited', ++postsVisitedCount);
    };
  }, []);

  const handlePopupClose = () => {
    setCookie('posts-visited', 10);

    togglePopupVisibility();
  };

  const handleInviteDismiss = () => {
    setCookie('posts-visited', 10);

    toggleInviteVisibility();
  };

  return (
    <aside>
      <Invite isVisible={isInviteVisible} {...{ togglePopupVisibility, handleInviteDismiss }} />
      <Popup isVisible={isPopupVisible} {...{ handlePopupClose }} />
    </aside>
  );
};

export default NewsletterPopup;
