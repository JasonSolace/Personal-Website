import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ChangeName = ({}) => {
  const router = useRouter();
  console.log(router.asPath);
};

const TypingName = ({ name }) => {
  const [typedName, setTypedName] = useState('');
  const [currentlyDeleting, setCurrentlyDeleting] = useState(false);
  const [nameToBeTyped, setNameToBeTyped] = useState(name);
  const [cursorVisible, setCursorVisible] = useState(true);

  //Handles the typing of the title/name
  useEffect(() => {
    let timer1;

    const typeNextLetter = () => {
      if (typedName.length >= name.length || currentlyDeleting) {
        return; //typedName has all of the values of name
      }

      const splitName = name.split('');

      timer1 = setTimeout(() => {
        //Depending on the size of typedName, we slowly add values to it based on timer1
        setTypedName((prevTypedName) =>
          prevTypedName.concat(splitName[prevTypedName.length])
        );
      }, 200);
    };

    timer1 = setTimeout(typeNextLetter, 0); //Start the initial typing

    return () => {
      clearTimeout(timer1);
    };
  }, [currentlyDeleting, name, typedName]);

  //Handles the blinking '|' character
  useEffect(() => {
    let timer2;

    const flashCursor = () => {
      setCursorVisible((cursorVisible) => !cursorVisible);
    };

    timer2 = setInterval(flashCursor, 500); // Start the cursor flashing

    return () => {
      clearInterval(timer2);
    };
  }, [cursorVisible]);

  //Handles if the word has changed or is mistyped mid generating
  useEffect(() => {
    let timer3;

    const deleteCurrentlyTyped = () => {
      let i = typedName.length;

      const deleteCharacter = () => {
        if (i >= 0) {
          setTypedName((prevTypedName) => prevTypedName.slice(0, i));
          i--;
          setTimeout(deleteCharacter, 200); // Delay between iterations (adjust as needed)

          if (i <= 0) {
            setCurrentlyDeleting(false);
          }
        }
      };

      deleteCharacter();
    };

    if (nameToBeTyped !== name) {
      setCurrentlyDeleting(true);
      deleteCurrentlyTyped();
      setNameToBeTyped(name);
    }

    return () => {
      clearTimeout(timer3);
    };
  }, [name, nameToBeTyped, typedName]);

  useEffect(() => {
    console.log(typedName);
  }, [typedName]);

  return (
    <div className='relative inline-block text-7xl self-center'>
      <div className='flex'>
        <div>{typedName}</div>
        <div>{cursorVisible ? '|' : ''}</div>
      </div>
    </div>
  );
};

export default TypingName;
