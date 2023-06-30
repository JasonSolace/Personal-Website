import React, { useEffect, useState } from 'react';
import TypingName from './TypingName';
import { useRouter } from 'next/router';

const NavTitle = ({ currentPath }) => {
  const router = useRouter();
  let title;
  const [changeTitle, setChangeTitle] = useState(false);

  if (router.asPath != currentPath) {
    setChangeTitle(true);
    console.log('I ran!');
  }

  useEffect(() => {}, [changeTitle]);

  switch (currentPath) {
    case '/':
      title = 'Jason Armenta';
      break;

    case '/about':
      title = 'About Me';
      break;

    case '/projects':
      title = 'Projects by Me';
      break;

    default:
      title = "Oops.. we're lost!";
  }

  return <TypingName name={title} />;
};

export default NavTitle;
