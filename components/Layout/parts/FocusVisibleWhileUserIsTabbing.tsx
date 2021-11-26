import { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const FocusVisibleWhileUserIsTabbing = () => {
  const [userIsTabbing, setUserTabbing] = useState(false);

  useEffect(() => {
    const handleFirstTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setUserTabbing(true);
      }
    };

    const handleMouseDown = () => {
      setUserTabbing(false);
    };

    const addListeners = () => {
      window.addEventListener('keydown', handleFirstTab);
      window.addEventListener('mousedown', handleMouseDown);
    };

    const removeListeners = () => {
      window.removeEventListener('keydown', handleFirstTab);
      window.removeEventListener('mousedown', handleMouseDown);
    };

    addListeners();

    return () => removeListeners();
  }, [userIsTabbing]);

  if (!userIsTabbing) return <FocusInvisible />;

  return <FocusVisible />;
};

const FocusInvisible = createGlobalStyle`
  :focus {
    outline: none;
  }
`;

const FocusVisible = createGlobalStyle`
  :focus {
    outline: 2px solid #7AACFE;
  }
`;

export default FocusVisibleWhileUserIsTabbing;
