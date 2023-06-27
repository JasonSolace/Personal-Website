import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={'fill-dark animate-spin-slow'} />

        <Link
          href='mailto:jasonarmenta02@gmail.com'
          className='flex items-center justify-center absolute 
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
