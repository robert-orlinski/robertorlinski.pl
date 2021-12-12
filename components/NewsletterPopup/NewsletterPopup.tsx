import Invite from './parts/Invite';
import Popup from './parts/Popup';

import useToggle from 'Hooks/useToggle';

const NewsletterPopup = () => {
  const [isPopupVisible, togglePopupVisibility] = useToggle(false);
  const [isInviteVisible, toggleInviteVisibility] = useToggle(true);

  return (
    <aside>
      <Invite isVisible={isInviteVisible} {...{ togglePopupVisibility, toggleInviteVisibility }} />
      <Popup isVisible={isPopupVisible} {...{ togglePopupVisibility }} />
    </aside>
  );
};

export default NewsletterPopup;
