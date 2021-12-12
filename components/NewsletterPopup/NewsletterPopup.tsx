import { useState } from 'react';

import Invite from './parts/Invite';
import Popup from './parts/Popup';

const NewsletterPopup = () => {
  const [popupState, setPopupState] = useState<'default' | 'opened' | 'closed'>('default');

  return (
    <aside>
      <Invite />
      <Popup />
    </aside>
  );
};

export default NewsletterPopup;
